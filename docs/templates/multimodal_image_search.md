# Multimodal vector search - images

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
from superduper import superduper

db = superduper('mongomock:///test_db')
```

<!-- TABS -->
## Get useful sample data


```python
!curl -O https://superduperdb-public-demo.s3.amazonaws.com/images.zip && unzip images.zip
import os
from PIL import Image

data = [f'images/{x}' for x in os.listdir('./images') if x.endswith(".png")][:200]
data = [ Image.open(path) for path in data]
```


```python
data = [{'img': d} for d in data[:100]]
```

## Build multimodal embedding models

We define the output data type of a model as a vector for vector transformation.


```python
# <tab: MongoDB>
from superduper.components.vector_index import vector
output_datatpye = vector(shape=(1024,))
```


```python
# <tab: SQL>
from superduper.components.vector_index import sqlvector
output_datatpye = sqlvector(shape=(1024,))
```

Then define two models, one for text embedding and one for image embedding.


```python
!pip install git+https://github.com/openai/CLIP.git
!pip install ../../plugins/torch
import clip
from superduper import vector
from superduper_torch import TorchModel

# Load the CLIP model and obtain the preprocessing function
model, preprocess = clip.load("RN50", device='cpu')

# Create a TorchModel for text encoding
compatible_model = TorchModel(
    identifier='clip_text', # Unique identifier for the model
    object=model, # CLIP model
    preprocess=lambda x: clip.tokenize(x)[0],  # Model input preprocessing using CLIP 
    postprocess=lambda x: x.tolist(), # Convert the model output to a list
    datatype=output_datatpye,  # Vector encoder with shape (1024,)
    forward_method='encode_text', # Use the 'encode_text' method for forward pass 
)

# Create a TorchModel for visual encoding
embedding_model = TorchModel(
    identifier='clip_image',  # Unique identifier for the model
    object=model.visual,  # Visual part of the CLIP model    
    preprocess=preprocess, # Visual preprocessing using CLIP
    postprocess=lambda x: x.tolist(), # Convert the output to a list 
    datatype=output_datatpye, # Vector encoder with shape (1024,)
)
```

Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index.


```python
indexing_key = 'img' # we use img key for img embedding
compatible_key = 'text' # we use text key for text embedding
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
        key=indexing_key,                 # the `Document` key `model` should ingest to create embedding
        select=db['docs'].select(),       # a `Select` query telling which data to search over
        model=embedding_model,            # a `_Predictor` how to convert data to embeddings
        identifier='indexing-listener',
    ),
    compatible_listener=Listener(
        key=compatible_key,               # the `Document` key `model` should ingest to create embedding
        model=compatible_model,           # a `_Predictor` how to convert data to embeddings
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

db.apply(application)
```

## Add the data

The order in which data is added is not important. *However* if your data requires a custom `Schema` in order to work, it's easier to add the `Application` first, and the data later. The advantage of this flexibility, is that once the `Application` is installed, it's waiting for incoming data, so that the `Application` is always up-to-date. This comes in particular handy with AI scenarios which need to respond to changing news.


```python
from superduper import Document

table_or_collection = db['docs']

ids = db.execute(table_or_collection.insert([Document(r) for r in data]))
```

## Perform a vector search

We can perform the vector searches using two types of data:

- Text: By text description, we can find images similar to the text description.
- Image: By using an image, we can find images similar to the provided image.


```python
# <tab: Text>
item = Document({compatible_key: "Find a black dog"})
```


```python
# <tab: Image>
from IPython.display import display
search_image = data[0]
display(search_image)
item = Document({indexing_key: search_image})
```

Once we have this search target, we can execute a search as follows.


```python
select = db['docs'].like(item, vector_index=vector_index_name, n=5).select()
results = list(db.execute(select))
```

## Visualize Results


```python
from IPython.display import display
for result in results:
    display(result[indexing_key])
```

## Create a `Template`


```python
from superduper import Template

template = Template(
    'image-vector-search',
    template=application,
    substitutions={'docs': 'table'},
)

template.export('.')
```
