# Simple retrieval augmented generation with OpenAI


```python
APPLY = True
SAMPLE_COLLECTION_NAME = 'sample_simple_rag'
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'docs'
ID_FIELD = '<var:id_field>' if not APPLY else 'id'
OUTPUT_PREFIX = '_outputs__'
```


```python
from superduper import superduper, CFG

CFG.output_prefix = OUTPUT_PREFIX
CFG.bytes_encoding = 'str'
CFG.native_json = False

db = superduper('mongomock://')
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
    model=Chunker(identifier='chunker'),
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

openai_embedding = OpenAIEmbedding(identifier='text-embedding-ada-002' , datatype=sqlvector(shape=(1536,)))
```

## Create vector-index


```python
from superduper import VectorIndex, Listener

vector_index_name = 'vectorindex'

vector_index = VectorIndex(
    vector_index_name,
    indexing_listener=Listener(
        key=upstream_listener.outputs,
        select=db[upstream_listener.outputs].select('id', '_source', upstream_listener.outputs),
        model=openai_embedding,
        identifier='embeddinglistener',
        upstream=[upstream_listener],
    )
)
```


```python
if APPLY:
    db.apply(vector_index, force=True)
```

<!-- TABS -->
## Build LLM


```python
from superduper_openai import OpenAIChatCompletion

llm_openai = OpenAIChatCompletion(identifier='llm-openai-2', model='gpt-4-turbo')
```

## Answer question with LLM


```python
from superduper import model
from superduper.components.model import RAGModel

prompt_template = (
    "Use the following context snippets, these snippets are not ordered!, Answer the question based on this context.\n"
    "These snippets are samples from our internal data-repositories, and should be used exclusively and as a matter"
    " of priority to answer the question\n\n"
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
if APPLY:
    db.apply(rag, force=True)
```


```python
if APPLY:
    print(rag.predict('Tell me about the project'))
```

By applying the RAG model to the database, it will subsequently be accessible for use in other services.


```python
from superduper import Application

app = Application(
    'simple-rag-app',
    components=[
        upstream_listener,
        vector_index,
        rag,
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
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData

template = Template(
    'simple_rag',
    template=app,
    substitutions={COLLECTION_NAME: 'table_name', 'mongodb': 'databackend'},
    template_variables=['table_name', 'id_field', 'databackend'],
    default_table=Table(
        'sample_simple_rag',
        schema=Schema('sample_simple_rag/schema', fields={'x': 'str'}),
        data=RemoteData(
            'superduper-docs',
            getter=getter,
        )
    ),
    types={
        'id_field': {
            'type': 'str',
            'default': '_id',
        },
        'llm_model': {
            'type': 'str',
            'choices': ['openai', 'anthropic', 'vllm', 'llamacpp'],
            'default': 'openai',
        },
        'embedding_model': {
            'type': 'str',
            'choices': ['openai', 'sentence_transformers'],
            'default': 'openai',
        },
        'table_name': {
            'type': 'str',
            'default': SAMPLE_COLLECTION_NAME,
        },
        'databackend': {
            'type': 'str',
            'default': 'mongodb',
        }
    }
)
```


```python
template.export('.')
```
