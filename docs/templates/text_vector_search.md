# Text vector search

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
APPLY = True
COLLECTION_NAME = '<var:table_name>' if not APPLY else '_sample_text_vector_search'
ID_FIELD = '<var:id_field>' if not APPLY else '_id'
```


```python
from superduper import superduper

db = superduper('mongomock:///test_db')
```

<!-- TABS -->
## Get useful sample data


```python
import json

with open('data.json', 'r') as f:
    data = json.load(f)

data = [{'x': r} for r in data]
```

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.


```python
if APPLY:
    from superduper import Document
    ids = db.execute(db[COLLECTION_NAME].insert([Document(r) for r in data]))
```

<!-- TABS -->
## Apply a chunker for search

:::note
Note that applying a chunker is ***not*** mandatory for search.
If your data is already chunked (e.g. short text snippets or audio) or if you
are searching through something like images, which can't be chunked, then this
won't be necessary.
:::


```python
from superduper import Model

class Chunker(Model):
    chunk_size: int = 200
    signature: str = 'singleton'
    
    def predict(self, text):
        text = text.split()
        chunks = [' '.join(text[i:i + self.chunk_size]) for i in range(0, len(text), self.chunk_size)]
        return chunks
```

Now we apply this chunker to the data by wrapping the chunker in `Listener`:


```python
from superduper import Listener

upstream_listener = Listener(
    model=Chunker('chunk_model', chunk_size=200, example='test ' * 50),
    select=db[COLLECTION_NAME].select(ID_FIELD, 'x'),
    key='x',
    identifier='chunker',
    flatten=True,
)
```


```python
if APPLY:
    db.apply(upstream_listener, force=True)
```

## Select outputs of upstream listener

:::note
This is useful if you have performed a first step, such as pre-computing 
features, or chunking your data. You can use this query to 
operate on those outputs.
:::

<!-- TABS -->
## Build text embedding model

OpenAI:


```python
import os

from superduper.components.vector_index import sqlvector
from superduper_openai import OpenAIEmbedding

openai_embedding = OpenAIEmbedding(identifier='text-embedding-ada-002', datatype=sqlvector(shape=(1536,)))
```

Sentence-transformers


```python
import sentence_transformers
from superduper.components.vector_index import sqlvector
from superduper_sentence_transformers import SentenceTransformer

sentence_transformers_embedding = SentenceTransformer(
    identifier="sentence-transformers-embedding",
    model="BAAI/bge-small-en",
    datatype=sqlvector(shape=(1024,)),
    postprocess=lambda x: x.tolist(),
    predict_kwargs={"show_progress_bar": True},
)
```


```python
from superduper.components.model import ModelRouter

embedding_model = ModelRouter(
    'embedding',
    models={'openai': openai_embedding, 'sentence_transformers': sentence_transformers_embedding},
    model='<var:embedding_model>' if not APPLY else 'openai',
    example='this is a test',
)
```

## Create vector-index


```python
from superduper import VectorIndex, Listener

vector_index_name = 'vector-index'

vector_index = VectorIndex(
    vector_index_name,
    indexing_listener=Listener(
        key=upstream_listener.outputs,
        select=db[upstream_listener.outputs].select(),
        model=embedding_model,
        identifier='embedding-listener',
        upstream=[upstream_listener],
    )
)
```


```python
if APPLY:
    db.apply(vector_index, force=True)
```

By applying the RAG model to the database, it will subsequently be accessible for use in other services.


```python
from superduper import Application

app = Application(
    'text-vector-search-app',
    components=[
        upstream_listener,
        vector_index,
    ]
)
```


```python
if APPLY:
    db.apply(app, force=True)
```

You can now load the model elsewhere and make predictions using the following command.

## Create template


```python
from superduper import Template

template = Template(
    'text_vector_search',
    template=app,
    data=data,
    substitutions={'docs': 'table_name'},
    template_variables=['embedding_model', 'table_name'],
    types={
        'id_field': {
            'type': 'str',
            'default': '_id',
        },
        'embedding_model': {
            'type': 'str',
            'choices': ['openai', 'sentence_transformers'],
            'default': 'openai',
        },
        'table_name': {
            'type': 'str',
            'default': '_sample_text_vector_search'
        }
    }
)
```


```python
template.export('.')
```
