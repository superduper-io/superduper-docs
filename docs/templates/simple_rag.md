# Simple retrieval augmented generation with OpenAI

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
APPLY = True
SAMPLE_COLLECTION_NAME = 'sample_simple_rag'
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'docs'
ID_FIELD = '<var:id_field>' if not APPLY else 'id'
OUTPUT_PREFIX = 'outputs__'
EAGER = False
```


```python
from superduper import superduper, CFG
import os

db = superduper('mongomock://', initialize_cluster=False)
```


```python
import json
import requests
import io
from superduper import logging


def getter():
    logging.info('Downloading data...')
    response = requests.get('https://superduperdb-public-demo.s3.amazonaws.com/text.json')
    logging.info('Downloading data... (Done)')
    data = json.loads(response.content.decode('utf-8'))
    return [{'x': r} for r in data]
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
    from superduper import Document, Table
    table = Table(COLLECTION_NAME, fields={'x': 'str'})
    db.apply(table, force=True)
    ids = db[COLLECTION_NAME].insert(data)
```

Create plugin:


```python
from superduper import Plugin

plugin = Plugin(path='./rag_plugin.py')
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
from superduper import Listener
from rag_plugin import Chunker

upstream_listener = Listener(
    model=Chunker(identifier='chunker'),
    select=db[COLLECTION_NAME],
    key='x',
    identifier='chunker',
    flatten=True,
    upstream=[plugin],
)
```


```python
if APPLY and EAGER:
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

from superduper_openai import OpenAIEmbedding

openai_embedding = OpenAIEmbedding(
    identifier='text-embedding',
    model='text-embedding-ada-002',
    datatype='vector[float:1536]',
)
```

## Create vector-index


```python
from superduper import VectorIndex, Listener

vector_index_name = 'vectorindex'

vector_index = VectorIndex(
    vector_index_name,
    indexing_listener=Listener(
        key=upstream_listener.outputs,
        select=db[upstream_listener.outputs],
        model=openai_embedding,
        identifier='embeddinglistener',
        upstream=[upstream_listener],
    )
)
```


```python
if APPLY and EAGER:
    db.apply(vector_index, force=True)
```

<!-- TABS -->
## Build LLM


```python
from superduper_openai import OpenAIChatCompletion


llm_openai = OpenAIChatCompletion(
    identifier='llm-model',
    model='gpt-3.5-turbo',
    datatype='str',
)
```

## Answer question with LLM


```python
from rag_plugin import RAGModel


prompt_template = (
    "Use the following context snippets, these snippets are not ordered!, Answer the question based on this context.\n"
    "These snippets are samples from our internal data-repositories, and should be used exclusively and as a matter"
    " of priority to answer the question. Please answer in 20 words or less.\n\n"
    "{context}\n\n"
    "Here's the question: {query}"
)

rag = RAGModel(
    'simple_rag',
    select=db[upstream_listener.outputs].select().like({upstream_listener.outputs: '<var:query>'}, vector_index=vector_index_name, n=5),
    prompt_template=prompt_template,
    key=upstream_listener.outputs,
    llm=llm_openai,
)
```


```python
if APPLY and EAGER:
    db.apply(rag, force=True)
```

By applying the RAG model to the database, it will subsequently be accessible for use in other services.


```python
from superduper import Streamlit, Plugin
from rag_plugin import demo_func

demo = Streamlit('simple-rag-demo', demo_func=demo_func)
```


```python
from superduper import Application

app = Application(
    'simple-rag-app',
    upstream=[plugin],
    components=[
        upstream_listener,
        vector_index,
        rag,
        demo,
    ]
)
```


```python
if APPLY:
    db.apply(app, force=True)
```


```python
if APPLY:
    rag = db.load('RAGModel', 'simple_rag')
    print(rag.predict('Tell me about vector-search in the project and the use of lance.'))
```

You can now load the model elsewhere and make predictions using the following command.

## Create template


```python
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData

template = Template(
    'simple_rag',
    template=app,
    substitutions={
        COLLECTION_NAME: 'table_name',
        'text-embedding-ada-002': 'embedding_model',
        'gpt-3.5-turbo': 'llm_model',
    },
    template_variables=['table_name', 'id_field', 'embedding_model', 'llm_model'],
    default_tables=[
        Table(
            'sample_simple_rag',
            fields={'x': 'str'},
            data=RemoteData(
                'superduper-docs',
                getter=getter,
            )
        ),
    ],
    types={
        'id_field': {
            'type': 'str',
            'default': '_id',
        },
        'embedding_model': {
            'type': 'str',
            'default': 'text-embedding-ada-002',
            'choices': ['text-embedding-ada-002', 'nomic-embed-text:latest'],
        },
        'llm_model': {
            'type': 'str',
            'default': 'gpt-3.5-turbo',
            'choices': ['gpt-3.5-turbo', 'gpt-4-turbo', 'llama3.1:8b']
        },
        'table_name': {
            'type': 'str',
            'default': SAMPLE_COLLECTION_NAME,
        }
    },
    schema={
        "id_field": "id_field",
        "embedding_model": "embedding_model",
        "llm_model": "llm_model",
        "table_name": "table_name",
    },
    db=db
)
```


```python
template.export('.')
```
