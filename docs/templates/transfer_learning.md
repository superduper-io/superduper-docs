# Transfer learning


```python
APPLY = False
EAGER = False
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'sample_transfer_learning'
MODALITY = 'text'
```


```python
from superduper import superduper, CFG

db = superduper('mongomock://test_db')
```

<!-- TABS -->
## Get useful sample data


```python
def getter(modality='text'):
    import json
    import subprocess

    if modality == 'text': 
        subprocess.run([
            'curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/text_classification.json',
        ])
        with open("text_classification.json", "r") as f:
            data = json.load(f)
        subprocess.run(['rm', 'text_classification.json'])
        data = data[:200]
    else:
        subprocess.run([
            'curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/images_classification.zip',
        ])
        subprocess.run(['unzip', 'images_classification.zip'])
        subprocess.run(['rm', 'images_classification.zip'])
        import json
        from PIL import Image
        with open('images/images.json', 'r') as f:
            data = json.load(f)
        data = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]
    return data
```

After obtaining the data, we insert it into the database.

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.


```python
if APPLY:
    data = getter()
    from superduper import Document
    ids = db[COLLECTION_NAME].insert([Document(r) for r in data]).execute()
```

<!-- TABS -->
## Compute features


```python
import sentence_transformers
from superduper import Listener
from superduper_sentence_transformers import SentenceTransformer


superdupermodel_text = SentenceTransformer(
    identifier="embedding",
    model='all-MiniLM-L6-v2',
    postprocess=lambda x: x.tolist(),
)
```


```python
import torchvision
from torchvision import transforms
from superduper_torch import TorchModel
from superduper import Listener, imported
from PIL import Image


class TorchVisionEmbedding:
    def __init__(self):
        self.resnet = models.resnet18(pretrained=True)
        self.resnet.eval()


def preprocess(image):
    preprocess = preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])
    tensor_image = preprocess(image)
    return tensor_image


resnet = imported(torchvision.models.resnet18)(pretrained=True)

superdupermodel_image = TorchModel(
    identifier='my-vision-model',
    object=resnet,
    preprocess=preprocess,
    postprocess=lambda x: x.numpy().tolist()
)
```


```python
from superduper.components.model import ModelRouter


feature_extractor = ModelRouter(
    'feature_extractor',
    models={
        'text': superdupermodel_text,
        'image': superdupermodel_image,
    },
    model=MODALITY,
)
```


```python
feature_extractor_listener = Listener(
    model=feature_extractor,
    select=db[COLLECTION_NAME].select(),
    key='x',
    identifier="features"
)


if APPLY and EAGER:
    feature_extractor_listener = db.apply(
        feature_extractor_listener,
        force=True,
    )
```

<!-- TABS -->
## Build and train classifier


```python
from superduper_sklearn import Estimator, SklearnTrainer
from sklearn.svm import SVC


scikit_model = Estimator(
    identifier="my-model-scikit",
    object=SVC(),
    trainer=SklearnTrainer(
        "my-scikit-trainer",
        key=(feature_extractor_listener.outputs, "y"),
        select=db[COLLECTION_NAME].outputs(feature_extractor_listener.predict_id),
    ),
)
```


```python
import torch
from torch import nn
from superduper_torch.model import TorchModel
from superduper_torch.training import TorchTrainer
from torch.nn.functional import cross_entropy


class SimpleModel(nn.Module):
    def __init__(self, input_size=16, hidden_size=32, num_classes=2):
        super(SimpleModel, self).__init__()
        self.hidden_size = hidden_size
        self.fc1 = None
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        input_size = x.size(1)
        if self.fc1 is None:
            self.fc1 = nn.Linear(input_size, self.hidden_size)

        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out


preprocess = lambda x: torch.tensor(x)


def postprocess(x):
    return int(x.topk(1)[1].item())


def data_transform(features, label):
    return torch.tensor(features), label


model = SimpleModel(num_classes=2)
torch_model = TorchModel(
    identifier='my-model-torch',
    object=model,
    preprocess=preprocess,
    postprocess=postprocess,
    trainer=TorchTrainer(
        key=(feature_extractor_listener.outputs, 'y'),
        identifier='my-torch-trainer',
        objective=cross_entropy,
        loader_kwargs={'batch_size': 10},
        max_iterations=1000,
        validation_interval=100,
        select=db[COLLECTION_NAME].outputs(feature_extractor_listener.predict_id),
        transform=data_transform,
    ),
)
```

Define a validation for evaluating the effect after training.


```python
from superduper import Dataset, Metric, Validation

def acc(x, y):
    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)

accuracy = Metric(identifier="acc", object=acc)
validation = Validation(
    "transfer_learning_performance",
    key=(feature_extractor_listener.outputs, "y"),
    datasets=[
        Dataset(
            identifier="my-valid",
            select=db[COLLECTION_NAME].outputs(feature_extractor_listener.predict_id).add_fold('valid')
        )
    ],
    metrics=[accuracy],
)
scikit_model.validation = validation
torch_model.validation = validation
```

If we execute the apply function, then the model will be added to the database, and because the model has a Trainer, it will perform training tasks.


```python
estimator = ModelRouter(
    'estimator',
    models={
        'scikit-framework': scikit_model,
        'torch-framework': torch_model,
    },
    model='scikit-framework',
    upstream=[feature_extractor_listener],
)
```


```python
if APPLY and EAGER:
    db.apply(estimator, force=True)
```

Get the training metrics


```python
from superduper import Application

application = Application(
    identifier='transfer-learning',
    components=[feature_extractor_listener, estimator],
)
```


```python
if APPLY:
    db.apply(application)
```


```python
if APPLY:
    model = db.load('model', 'my-model-scikit')
    model.metric_values
```


```python
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData

t = Template(
    'transfer_learning',
    default_tables=[Table(
        'sample_transfer_learning',
        schema=Schema(
            'sample_transfer_learning/schema',
            fields={'x': 'str', 'y': 'int'},
        ),
        data=RemoteData(
            'text_classification',
            getter=getter,
        ),
    )],
    template=application,
    substitutions={'docs': 'table_name', 'text': 'modality'},
    template_variables=['table_name', 'framework', 'modality'],
    types={
        'table_name': {
            'type': 'str',
            'default': 'sample_transfer_learning',
        },
        'modality': {
            'type': 'str',
            'default': 'text',
        },
        'framework': {
            'type': 'str',
            'default': 'scikit-framework',
        },
    },
    db=db
)
```


```python
t.export('.')
```
