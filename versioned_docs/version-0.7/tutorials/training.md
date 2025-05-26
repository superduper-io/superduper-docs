# Training and Managing MNIST Predictions with superduper

:::note
This tutorial guides you through the implementation of a classic machine learning task: MNIST handwritten digit recognition. The twist? We perform the task directly on data hosted in a database using superduper.
:::

This example makes it easy to connect any of your image recognition models directly to your database in real-time. 


```python
!pip install torch torchvision
```

First, we need to establish a connection to a MongoDB datastore via superduper. 


```python
from superduper import superduper
    
db = superduper('mongomock://')
```

After establishing a connection to MongoDB, the next step is to load the MNIST dataset. superduper's strength lies in handling diverse data types, especially those that are not supported by standard databases. To achieve this, we use an `Encoder` in conjunction with `Document` wrappers. These components allow Python dictionaries containing non-JSONable or bytes objects to be seamlessly inserted into the underlying data infrastructure.


```python
import random
import torchvision
from superduper import Table

import random

# Load MNIST images as Python objects using the Python Imaging Library.
# Each MNIST item is a tuple (image, label)
mnist_data = list(torchvision.datasets.MNIST(root='./data', download=True))

get_fold = lambda: {True: 'valid', False: 'train'}[random.random() < 0.1]

document_list = [{'img': x[0], 'class': x[1], '_fold': get_fold()} for x in mnist_data]

mnist = Table('mnist', fields={'img': 'superduper_pillow.pil_image', 'class': 'int', '_fold': 'str'})

db.apply(mnist, force=True)

# Shuffle the data and select a subset of 1000 documents
random.shuffle(document_list)
data = document_list[:1000]

# Insert the selected data into the mnist_collection which we mentioned before like: mnist_collection = Collection('mnist')
_ = db['mnist'].insert(data[:-100])
```

Now that the images and their classes are inserted into the database, we can query the data in its original format. Particularly, we can use the `PIL.Image` instances to inspect the data.


```python
# Get and display one of the images
r = db['mnist'].get()
r['img'].resize((300, 300))
```

Following that, we build our machine learning model. superduper conveniently supports various frameworks, and for this example, we opt for PyTorch, a suitable choice for computer vision tasks. In this instance, we combine `torch` with `torchvision`.

To facilitate communication with the superduper `Datalayer`, we design `postprocess` and `preprocess` functions. These functions are then wrapped with the `TorchModel` wrapper to create a native superduper object.


```python
from superduper_torch import TorchModel
from superduper.misc.utils import hash_item

import torch

# Define the LeNet-5 architecture for image classification
class LeNet5(torch.nn.Module):
    def __init__(self, num_classes):
        super().__init__()
        # Layer 1
        self.layer1 = torch.nn.Sequential(
            torch.nn.Conv2d(1, 6, kernel_size=5, stride=1, padding=0),
            torch.nn.BatchNorm2d(6),
            torch.nn.ReLU(),
            torch.nn.MaxPool2d(kernel_size=2, stride=2))
        # Layer 2
        self.layer2 = torch.nn.Sequential(
            torch.nn.Conv2d(6, 16, kernel_size=5, stride=1, padding=0),
            torch.nn.BatchNorm2d(16),
            torch.nn.ReLU(),
            torch.nn.MaxPool2d(kernel_size=2, stride=2))
        # Fully connected layers
        self.fc = torch.nn.Linear(400, 120)
        self.relu = torch.nn.ReLU()
        self.fc1 = torch.nn.Linear(120, 84)
        self.relu1 = torch.nn.ReLU()
        self.fc2 = torch.nn.Linear(84, num_classes)

    def __hash__(self):
        k = next(iter(lenet_model.state_dict().keys()))
        weight = self.state_dict()[k].tolist()
        return int(hash_item(weight), 16)
        
    def forward(self, x):
        out = self.layer1(x)
        out = self.layer2(out)
        out = out.reshape(out.size(0), -1)
        out = self.fc(out)
        out = self.relu(out)
        out = self.fc1(out)
        out = self.relu1(out)
        out = self.fc2(out)
        return out

# Postprocess function for the model output    
def postprocess(x):
    return int(x.topk(1)[1].item())

# Preprocess function for input data
def preprocess(x):
    return torchvision.transforms.Compose([
        torchvision.transforms.Resize((32, 32)),
        torchvision.transforms.ToTensor(),
        torchvision.transforms.Normalize(mean=(0.1307,), std=(0.3081,))]
    )(x)

# Create an instance of the LeNet-5 model
lenet_model = LeNet5(10)


model = TorchModel(
    identifier='my-model',
    object=lenet_model,
    preprocess=preprocess,
    postprocess=postprocess, 
    preferred_devices=('cpu',),
)

# Check that the model successfully creates predictions over single data-points
model.predict(data[0]['img'])
```

Now we are ready to "train" or "fit" the model. Trainable models in superduper come with a sklearn-like `.fit` method,
which developers may implement for their specific model class. `torch` models come with a pre-configured
`TorchTrainer` class and `.fit` method. These may be invoked simply by "applying" the model to `db`:


```python
from torch.nn.functional import cross_entropy

from superduper import Metric, Validation, Dataset
from superduper_torch import TorchTrainer

acc = lambda x, y: (sum([xx == yy for xx, yy in zip(x, y)]) / len(x))

accuracy = Metric(identifier='acc', object=acc)

model.validation = Validation(
    'mnist_performance',
    key=['img', 'class'],
    datasets=[
        Dataset(
            identifier='my-valid',
            select=db['mnist'].filter(db['mnist']['_fold'] == 'valid'),
        )
    ],
    metrics=[accuracy],
)

model.trainer = TorchTrainer(
    identifier='my-trainer',
    objective=cross_entropy,
    loader_kwargs={'batch_size': 10},
    max_iterations=10,
    validation_interval=3,
    select=db['mnist'],
    key=('img', 'class'),
    transform=lambda x, y: (preprocess(x), y),
)

_ = db.apply(model)
```


```python
db.remove('TorchModel', 'my-model')
```

The trained model is now available via `db.load` - the `model.trainer` object contains the metric traces
logged during training.


```python
from matplotlib import pyplot as plt

# Load the model from the database
model = db.load('TorchModel', model.identifier)

# Plot the accuracy values
plt.plot(model.trainer.metric_values['my-valid/acc'])
plt.show()
```
