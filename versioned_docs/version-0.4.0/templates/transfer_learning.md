---
sidebar_label: Transfer learning
filename: build.md
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- TABS -->
# Transfer learning

<!-- TABS -->
## Connect to superduper

```python
from superduper import superduper

db = superduper('mongomock:///test_db')
```

<!-- TABS -->
## Get useful sample data


<Tabs>
    <TabItem value="Text-Classification" label="Text-Classification" default>
        ```python
        !curl -O https://superduperdb-public-demo.s3.amazonaws.com/text_classification.json
        import json
        
        with open("text_classification.json", "r") as f:
            data = json.load(f)
        num_classes = 2        
        ```
    </TabItem>
    <TabItem value="Image-Classification" label="Image-Classification" default>
        ```python
        !curl -O https://superduperdb-public-demo.s3.amazonaws.com/images_classification.zip && unzip images_classification.zip
        import json
        from PIL import Image
        
        with open('images/images.json', 'r') as f:
            data = json.load(f)
            
        data = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]
        num_classes = 2        
        ```
    </TabItem>
</Tabs>
After obtaining the data, we insert it into the database.


<Tabs>
    <TabItem value="Text-Classification" label="Text-Classification" default>
        ```python
        datas = [{'txt': d['x'], 'label': d['y']} for d in data]        
        ```
    </TabItem>
    <TabItem value="Image-Classification" label="Image-Classification" default>
        ```python
        datas = [{'image': d['x'], 'label': d['y']} for d in data]        
        ```
    </TabItem>
</Tabs>
<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.

```python
from superduper import Document

table_or_collection = db['docs']

ids = db.execute(table_or_collection.insert([Document(data) for data in datas]))
select = table_or_collection.select()
```

<!-- TABS -->
## Compute features


<Tabs>
    <TabItem value="Text" label="Text" default>
        ```python
        key = 'txt'
        import sentence_transformers
        from superduper import vector, Listener
        from superduper_sentence_transformers import SentenceTransformer
        
        superdupermodel = SentenceTransformer(
            identifier="embedding",
            object=sentence_transformers.SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2"),
            postprocess=lambda x: x.tolist(),
        )
        
        jobs, listener = db.apply(
            Listener(
                model=superdupermodel,
                select=select,
                key=key,
                identifier="features"
            )
        )        
        ```
    </TabItem>
    <TabItem value="Image" label="Image" default>
        ```python
        key = 'image'
        import torchvision.models as models
        from torchvision import transforms
        from superduper_torch import TorchModel
        from superduper import Listener
        from PIL import Image
        
        class TorchVisionEmbedding:
            def __init__(self):
                # Load the pre-trained ResNet-18 model
                self.resnet = models.resnet18(pretrained=True)
                
                # Set the model to evaluation mode
                self.resnet.eval()
                
            def preprocess(self, image):
                # Preprocess the image
                preprocess = preprocess = transforms.Compose([
                    transforms.Resize(256),
                    transforms.CenterCrop(224),
                    transforms.ToTensor(),
                    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
                ])
                tensor_image = preprocess(image)
                return tensor_image
                
        model = TorchVisionEmbedding()
        superdupermodel = TorchModel(identifier='my-vision-model-torch', object=model.resnet, preprocess=model.preprocess, postprocess=lambda x: x.numpy().tolist())
        
        jobs, listener = db.apply(
            Listener(
                model=superdupermodel,
                select=select,
                key=key,
                identifier="features"
            )
        )        
        ```
    </TabItem>
</Tabs>
## Choose features key from feature listener

```python
input_key = listener.outputs
training_select = select.outputs(listener.predict_id)
```

We can find the calculated feature data from the database.

```python
feature = list(training_select.limit(1).execute())[0][input_key]
feature_size = len(feature)
```

<!-- TABS -->
## Build and train classifier


<Tabs>
    <TabItem value="Scikit-Learn" label="Scikit-Learn" default>
        ```python
        from superduper_sklearn import Estimator, SklearnTrainer
        from sklearn.svm import SVC
        
        model = Estimator(
            identifier="my-model",
            object=SVC(),
            trainer=SklearnTrainer(
                "my-trainer",
                key=(input_key, "label"),
                select=training_select,
            ),
        )        
        ```
    </TabItem>
    <TabItem value="Torch" label="Torch" default>
        ```python
        import torch
        from torch import nn
        from superduper_torch.model import TorchModel
        from superduper_torch.training import TorchTrainer
        from torch.nn.functional import cross_entropy
        
        
        class SimpleModel(nn.Module):
            def __init__(self, input_size=16, hidden_size=32, num_classes=3):
                super(SimpleModel, self).__init__()
                self.fc1 = nn.Linear(input_size, hidden_size)
                self.relu = nn.ReLU()
                self.fc2 = nn.Linear(hidden_size, num_classes)
        
            def forward(self, x):
                out = self.fc1(x)
                out = self.relu(out)
                out = self.fc2(out)
                return out
        
        preprocess = lambda x: torch.tensor(x)
        
        # Postprocess function for the model output    
        def postprocess(x):
            return int(x.topk(1)[1].item())
        
        def data_transform(features, label):
            return torch.tensor(features), label
        
        # Create a Logistic Regression model
        # feature_length is the input feature size
        model = SimpleModel(feature_size, num_classes=num_classes)
        model = TorchModel(
            identifier='my-model',
            object=model,         
            preprocess=preprocess,
            postprocess=postprocess,
            trainer=TorchTrainer(
                key=(input_key, 'label'),
                identifier='my_trainer',
                objective=cross_entropy,
                loader_kwargs={'batch_size': 10},
                max_iterations=1000,
                validation_interval=100,
                select=select,
                transform=data_transform,
            ),
        )        
        ```
    </TabItem>
</Tabs>
Define a validation for evaluating the effect after training.

```python
from superduper import Dataset, Metric, Validation


def acc(x, y):
    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)


accuracy = Metric(identifier="acc", object=acc)
validation = Validation(
    "transfer_learning_performance",
    key=(input_key, "label"),
    datasets=[
        Dataset(identifier="my-valid", select=training_select.add_fold('valid'))
    ],
    metrics=[accuracy],
)
model.validation = validation
```

If we execute the apply function, then the model will be added to the database, and because the model has a Trainer, it will perform training tasks.

```python
db.apply(model)
```

```python
model.encode()
```

Get the training metrics

```python
model = db.load('model', model.identifier)
model.metric_values
```

```python
from superduper import Template

t = Template('transfer-learner', template=model, substitutions={'docs': 'table'})
```

```python
t.export('.')
```

