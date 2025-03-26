# Transfer learning


```python
APPLY = True
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
def getter():
    import json
    import random
    import subprocess

    subprocess.run([
        'curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/text_classification.json',
    ])
    with open("text_classification.json", "r") as f:
        data = json.load(f)
    subprocess.run(['rm', 'text_classification.json'])
    data = data[:200]
    def fold(): return {True: 'valid', False: 'train'}[random.random() < 0.1]
    data = [{**r, '_fold': fold()} for r in data]
    return data
```

After obtaining the data, we insert it into the database.

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.


```python
if APPLY:
    data = getter()
    from superduper import Table

    db.apply(
        Table(
            COLLECTION_NAME,
            fields={'x': 'str', 'y': 'int'},
        ),
        force=True,
    )
    
    ids = db[COLLECTION_NAME].insert(data)
```

<!-- TABS -->
## Compute features


```python
import sentence_transformers
from superduper import Listener
from superduper_sentence_transformers import SentenceTransformer


embedding = SentenceTransformer(
    identifier="embedding",
    model='all-MiniLM-L6-v2',
    postprocess=lambda x: x.tolist(),
)
```


```python
feature_extractor_listener = Listener(
    model=embedding,
    select=db[COLLECTION_NAME],
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
    upstream=[feature_extractor_listener],
)
```

Define a validation for evaluating the effect after training.


```python
from superduper import Dataset, Metric, Validation

def acc(x, y):
    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)

accuracy = Metric(identifier="acc", object=acc)

t = db[COLLECTION_NAME]
select = t.filter(t['_fold'] == 'valid').outputs(feature_extractor_listener.predict_id)

validation = Validation(
    "transfer_learning_performance",
    key=(feature_extractor_listener.outputs, "y"),
    datasets=[
        Dataset(
            identifier="my-valid",
            select=select,
        )
    ],
    metrics=[accuracy],
)
scikit_model.validation = validation
```

If we execute the apply function, then the model will be added to the database, and because the model has a Trainer, it will perform training.


```python
if APPLY and EAGER:
    db.apply(scikit_model, force=True)
```

Get the training metrics


```python
from superduper import Application

application = Application(
    identifier='transfer-learning',
    components=[feature_extractor_listener, scikit_model],
)
```


```python
if APPLY:
    db.apply(application)
```


```python
if APPLY:
    model = db.load('Estimator', 'my-model-scikit')
    print(model.metric_values)
```


```python
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData

t = Template(
    'transfer_learning',
    default_tables=[Table(
        'sample_transfer_learning',
        fields={'x': 'str', 'y': 'int'},
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
