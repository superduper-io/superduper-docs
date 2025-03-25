# Retrieval augmented generation

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
APPLY = True
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'sample_rag'
ID_FIELD = '<var:id_field>' if not APPLY else 'id'
```


```python
from superduper import superduper, CFG

CFG.bytes_encoding = 'str'
CFG.json_native = False

db = superduper('mongomock://test_db')
```


```python
import json
import requests
import io

def getter():
    response = requests.get('https://superduperdb-public-demo.s3.amazonaws.com/text.json')
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

from superduper_openai import OpenAIEmbedding
from superduper.components.datatype import Vector

openai_embedding = OpenAIEmbedding(identifier='text-embedding-ada-002' , datatype=Vector(shape=(1536,)))
```

Sentence-transformers


```python
import sentence_transformers
from superduper_sentence_transformers import SentenceTransformer

sentence_transformers_embedding = SentenceTransformer(
    identifier="sentence-transformers-embedding",
    model="BAAI/bge-small-en",
    datatype=Vector(shape=(1024,)),
    postprocess=lambda x: x.tolist(),
    predict_kwargs={"show_progress_bar": True},
)
```


```python
from superduper.components.model import ModelRouter
from superduper.components.datatype import Vector

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

vector_index_name = 'vectorindex'

vector_index = VectorIndex(
    vector_index_name,
    indexing_listener=Listener(
        key=upstream_listener.outputs,
        select=db[upstream_listener.outputs].select(ID_FIELD, '_source', upstream_listener.outputs),
        model=embedding_model,
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

llm_openai = OpenAIChatCompletion(identifier='llm-openai', model='gpt-3.5-turbo')
```


```python
from superduper_anthropic import AnthropicCompletions

predict_kwargs = {
    "max_tokens": 1024,
    "temperature": 0.8,
}

llm_anthropic = AnthropicCompletions(identifier='llm-anthropic', model='claude-2.1', predict_kwargs=predict_kwargs)
```


```python
from superduper_vllm import VllmCompletion

predict_kwargs = {
    "max_tokens": 1024,
    "temperature": 0.8,
}

llm_vllm = VllmCompletion(
    identifier="llm-vllm",
    vllm_params={
        'model': 'TheBloke/Mistral-7B-Instruct-v0.2-AWQ',
        "gpu_memory_utilization": 0.7,
        "max_model_len": 1024,
        "quantization": "awq",
    },
    predict_kwargs=predict_kwargs,
)
```


```python
llm = ModelRouter(
    'llm',
    models={
        'openai': llm_openai,
        'anthropic': llm_anthropic,
        'vllm': llm_vllm,
    },
    model='<var:llm_model>' if not APPLY else 'openai',
)
```

## Answer question with LLM


```python
from superduper import model
from superduper.components.model import RAGModel

prompt_template = (
    "Use the following context snippets, these snippets are not ordered!, Answer the question based on this context.\n"
    "{context}\n\n"
    "Here's the question: {query}"
)

rag = RAGModel(
    'rag-model',
    select=db[upstream_listener.outputs].select().like({upstream_listener.outputs: '<var:query>'}, vector_index=vector_index_name, n=5),
    prompt_template=prompt_template,
    key=upstream_listener.outputs,
    llm=llm,
)
```


```python
if APPLY:
    db.apply(rag, force=True)
```


```python
if APPLY:
    print(rag.predict('Tell me about vector-search'))
```

By applying the RAG model to the database, it will subsequently be accessible for use in other services.


```python
from superduper import Application

app = Application(
    'rag-app',
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
    'rag',
    template=app,
    default_tables=[Table(
        'sample_rag',
        schema=Schema(
            'sample_rag/schema',
            fields={'txt': 'str'},
        ),
        data=RemoteData(
            'superduper-docs',
            getter=getter,
        )
    )],
    substitutions={COLLECTION_NAME: 'table_name'},
    template_variables=['llm_model', 'embedding_model', 'table_name', 'id_field'],
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
            'default': 'sample_rag'
        },
    },
    db=db
)
```


```python
template.export('.')
```
