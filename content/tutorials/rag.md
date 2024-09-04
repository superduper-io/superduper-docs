# Basic RAG tutorial

:::info
In this tutorial we show you how to do retrieval augmented generation (RAG) with Superduper.
Note that this is just an example of the flexibility and power which Superduper gives 
to developers. Superduper is about much more than RAG and LLMs. 
:::

As in the vector-search tutorial we'll use Superduper documentation for the tutorial.
We'll add this to a testing database by downloading the data snapshot:


```python
!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json
```


```python
import json

from superduper import superduper, Document

db = superduper('mongomock://test')

with open('text.json') as f:
    data = json.load(f)

_ = db['docu'].insert_many([{'txt': r} for r in data]).execute()
```

Let's verify the data in the `db` by querying one datapoint:


```python
db['docu'].find_one().execute()
```

The first step in a RAG application is to create a `VectorIndex`. The results of searching 
with this index will be used as input to the LLM for answering questions.

Read about `VectorIndex` [here](../apply_api/vector_index.md) and follow along the tutorial on 
vector-search [here](./vector_search.md).


```python
import requests 

from superduper import Application, Document, VectorIndex, Listener, vector
from superduper.ext.sentence_transformers.model import SentenceTransformer
from superduper.base.code import Code

def postprocess(x):
    return x.tolist()

datatype = vector(shape=384, identifier="my-vec")
    
model = SentenceTransformer(
    identifier="my-embedding",
    datatype=datatype,
    predict_kwargs={"show_progress_bar": True},
    signature="*args,**kwargs",
    model="all-MiniLM-L6-v2",      
    device="cpu",
    postprocess=Code.from_object(postprocess),
)

listener = Listener(
    identifier="my-listener",
    model=model,
    key='txt',
    select=db['docu'].find(),
    predict_kwargs={'max_chunk_size': 50},
)

vector_index = VectorIndex(
    identifier="my-index",
    indexing_listener=listener,
    measure="cosine"
)

db.apply(vector_index)
```

Now that we've set up a `VectorIndex`, we can connect this index with an LLM in a number of ways.
A simple way to do that is with the `SequentialModel`. The first part of the `SequentialModel`
executes a query and provides the results to the LLM in the second part. 

The `RetrievalPrompt` component takes a query with a "free" variable as input, signified with `<var:???>`. 
This gives users great flexibility with regard to how they fetch the context
for their downstream models.

We're using OpenAI, but you can use any type of LLM with Superduper. We have several 
native integrations (see [here](../ai_integraitons/)) but you can also [bring your own model](../models/bring_your_own_model.md).


```python
from superduper.ext.llm.prompter import *
from superduper import Document
from superduper.components.model import SequentialModel
from superduper.ext.openai import OpenAIChatCompletion

q = db['docu'].like(Document({'txt': '<var:prompt>'}), vector_index='my-index', n=5).find().limit(10)

def get_output(c):
    return [r['txt'] for r in c]

prompt_template = RetrievalPrompt('my-prompt', select=q, postprocess=Code.from_object(get_output))

llm = OpenAIChatCompletion('gpt-3.5-turbo')
seq = SequentialModel('rag', models=[prompt_template, llm])

db.apply(seq)
```

Now we can test the `SequentialModel` with a sample question:


```python
seq.predict('Tell be about vector-indexes')
```

:::tip
Did you know you can use any tools from the Python ecosystem with Superduper.
That includes `langchain` and `llamaindex` which can be very useful for RAG applications.
:::


```python
from superduper import Application

app = Application('rag-app', components=[vector_index, seq, plugin_1, plugin_2])
```


```python
app.encode()
```


```python
app.export('rag-app')
```


```python
!cat rag-app/requirements.txt
```


```python
from superduper import *

app = Component.read('rag-app')
```


```python
app.info()
```
