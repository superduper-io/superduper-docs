# Text vector search


```python
APPLY = False
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'sample_text_vector_search'
```


```python
from superduper import superduper

db = superduper('mongomock:///test_db')
```

<!-- TABS -->
## Get useful sample data


```python
import json
import requests
import io

def getter():
    response = requests.get('https://superduperdb-public-demo.s3.amazonaws.com/text.json')
    return json.loads(response.content.decode('utf-8'))
```


```python
if APPLY:
    data = getter()
```

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.


```python
if APPLY:
    from superduper import Document
    ids = db.execute(db[COLLECTION_NAME].insert([Document(r) for r in data]))
```

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
    select=db[COLLECTION_NAME].select(),
    key='x',
    identifier=f'chunker_{COLLECTION_NAME}',
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
from superduper.components.vector_index import sqlvector
from superduper_openai import OpenAIEmbedding

openai_embedding = OpenAIEmbedding(identifier='text-embedding-ada-002', datatype=sqlvector(shape=(1536,)))
```

Sentence-transformers


```python
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

vector_index_name = f'vector-index-{COLLECTION_NAME}'

vector_index = VectorIndex(
    vector_index_name,
    indexing_listener=Listener(
        key=upstream_listener.outputs,
        select=db[upstream_listener.outputs].select(),
        model=embedding_model,
        identifier=f'embedding-listener-{COLLECTION_NAME}',
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
    f'text-vector-search-app-{COLLECTION_NAME}',
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


```python
search_term = 'tell me about the use of pylance and vector-search'

vector_search_query = db[f'_outputs__chunker_{COLLECTION_NAME}'].like(
    {f'_outputs__chunker_{COLLECTION_NAME}': search_term},
    n=10,
    vector_index=vector_index_name,
).select()
```


```python
if APPLY:
    vector_search_query.tolist()
```


```python
from superduper import QueryTemplate, CFG

qt = QueryTemplate(
    'vector_search',
    template=vector_search_query,
    substitutions={
        COLLECTION_NAME: 'table_name',
        search_term: 'search_term',
        'mongodb': 'data_backend',
    },
    types={
        'search_term': {
            'type': 'str',
            'default': 'enter your question here...',
        },
        'table_name': {
            'type': 'str',
            'default': 'sample_text_vector_search'
        },
        'data_backend': {
            'type': 'mongodb',
            'choices': ['mongodb', 'ibis'],
            'default': 'mongodb'
        }
    }
)
```

## Create template


```python
from superduper import Template, CFG, Table, Schema
from superduper.components.dataset import RemoteData

template = Template(
    'text_vector_search',
    template=app,
    default_table=Table(
        'sample_text_vector_search',
        schema=Schema('sample_text_vector_search/schema', fields={'x': 'str'}),
        data=RemoteData(
            'superduper-docs',
            getter=getter,
        )
    ),
    queries=[qt],
    substitutions={COLLECTION_NAME: 'table_name', 'mongodb': 'data_backend'},
    template_variables=['embedding_model', 'table_name', 'data_backend'],
    types={
        'embedding_model': {
            'type': 'str',
            'choices': ['openai', 'sentence_transformers'],
            'default': 'openai',
        },
        'table_name': {
            'type': 'str',
            'default': 'sample_text_vector_search'
        },
        'data_backend': {
            'type': 'mongodb',
            'choices': ['mongodb', 'ibis'],
            'default': 'mongodb'
        }
    }
)
```


```python
template.export('.')
```
