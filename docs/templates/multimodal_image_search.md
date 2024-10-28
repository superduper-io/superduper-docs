# Multimodal vector search - images

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
APPLY = False
```


```python
from superduper import superduper

db = superduper('mongomock:///test_db')
```

<!-- TABS -->
## Get useful sample data


```python
def getter():
    import subprocess
    subprocess.run([
        'curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/images_classification.zip',
    ])
    subprocess.run(['rm', '-rf', 'images'])
    subprocess.run(['rm', '-rf', '__MACOSX'])
    subprocess.run(['unzip', 'images_classification.zip'])
    subprocess.run(['rm', 'images_classification.zip'])
    import json
    from PIL import Image
    with open('images/images.json', 'r') as f:
        data = json.load(f)
    data = data[:100]
    data = [{'img': Image.open(r['image_path'])} for r in data]
    subprocess.run(['rm', '-rf', '__MACOSX'])
    subprocess.run(['rm', '-rf', 'images'])
    return data
```


```python
if APPLY:
    data = getter()
```

## Build multimodal embedding models

We define the output data type of a model as a vector for vector transformation.


```python
from superduper.components.vector_index import sqlvector

output_datatype = sqlvector(shape=(1024,))
```

Then define two models, one for text embedding and one for image embedding.


```python
import clip
from superduper import vector, imported
from superduper_torch import TorchModel

rn50 = imported(clip.load)('RN50', device='cpu')

compatible_model = TorchModel(
    identifier='clip_text',
    object=rn50[0],
    preprocess=lambda x: clip.tokenize(x)[0],
    postprocess=lambda x: x.tolist(),
    datatype=output_datatype,
    forward_method='encode_text',
)

embedding_model = TorchModel(
    identifier='clip_image',
    object=rn50[0].visual,
    preprocess=rn50[1],
    postprocess=lambda x: x.tolist(),
    datatype=output_datatype,
)
```

Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index.


```python
indexing_key = 'img'
compatible_key = 'text'
```

## Create vector-index


```python
vector_index_name = 'my-vector-index'
```


```python
from superduper import VectorIndex, Listener

vector_index = VectorIndex(
    vector_index_name,
    indexing_listener=Listener(
        key=indexing_key,
        select=db['docs'].select(),
        model=embedding_model,
        identifier='indexing-listener',
    ),
    compatible_listener=Listener(
        key=compatible_key,
        model=compatible_model,
        select=None,
        identifier='compatible-listener',
    )
)
```


```python
from superduper import Application

application = Application(
    'image-vector-search',
    components=[vector_index],
)

if APPLY:
    db.apply(application, force=True)
```

## Add the data

The order in which data is added is not important. *However* if your data requires a custom `Schema` in order to work, it's easier to add the `Application` first, and the data later. The advantage of this flexibility, is that once the `Application` is installed, it's waiting for incoming data, so that the `Application` is always up-to-date. This comes in particular handy with AI scenarios which need to respond to changing news.


```python
if APPLY:
    from superduper import Document
    
    table_or_collection = db['docs']
    
    ids = db.execute(table_or_collection.insert([Document(r) for r in data]))
```

## Perform a vector search

We can perform the vector searches using two types of data:

- Text: By text description, we can find images similar to the text description.
- Image: By using an image, we can find images similar to the provided image.


```python
if APPLY:
    item = Document({compatible_key: "Find a black dog."})
```


```python
if APPLY:
    from IPython.display import display
    search_image = data[0]
    display(search_image)
    item = Document(search_image)
```

Once we have this search target, we can execute a search as follows.


```python
if APPLY:
    select = db['docs'].like(item, vector_index=vector_index_name, n=5).select()

    results = list(db.execute(select))

    from IPython.display import display
    for result in results:
        display(result[indexing_key])
```

## Create a `Template`


```python
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData
from superduper_pillow import pil_image


template = Template(
    'multimodal_image_search',
    template=application,
    default_table=Table(
        'sample_multimodal_image_search', 
        schema=Schema(
            'sample_multimodal_image_search/schema',
            fields={'img': pil_image},
        ),
        data=RemoteData('sample_images', getter=getter),
    ),
    substitutions={'docs': 'table_name', 'cpu': 'device'},
    types={
        'device': {
            'type': 'str',
            'default': 'cpu',
        },
        'table_name': {
            'type': 'str',
            'default': 'sample_multimodal_image_search',
        },
    }
)

template.export('.')
```


```python
template.template
```


```python
vector_index.indexing_listener.select
```
