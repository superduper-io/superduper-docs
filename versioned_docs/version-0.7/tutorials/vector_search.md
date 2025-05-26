# Vector search

:::note
Since vector-search is all-the-rage right now, 
here is the simplest possible iteration of semantic 
text-search with a `sentence_transformers` model, 
as an entrypoint to `superduper`.

Note that `superduper` is much-much more than vector-search
on text. Explore the docs to read about classical machine learning, 
computer vision, LLMs, fine-tuning and much much more!
:::


First let's get some data. These data are the markdown files 
of the very same documentation you are reading!
You can download other sample data-sets for testing `superduper`
by following [these lines of code](../reusable_snippets/get_useful_sample_data).


```python
import json
import requests 
r = requests.get('https://superduperdb-public-demo.s3.amazonaws.com/text.json')

with open('text.json', 'wb') as f:
    f.write(r.content)

with open('text.json', 'r') as f:
    data = json.load(f)        

print(data[0])
```

Now we connect to superduper, using MongoMock as a databackend.
Read more about connecting to superduper [here](../core_api/connect) and
a semi-exhaustive list of supported data-backends for connecting [here](../reusable_snippets/connect_to_superduper).


```python
from superduper import superduper
from superduper.base import Base

db = superduper('mongomock://test')

class documents(Base):
    txt: str

db.insert([documents(txt=txt) for txt in data])
```

We are going to make these data searchable by activating a [`Model`](../apply_api/model) instance 
to compute vectors for each item inserted to the `"documents"` collection.
For that we'll use the [sentence-transformers](https://sbert.net/) integration to `superduper`.
Read more about the `sentence_transformers` integration [here](../ai_integrations/sentence_transformers)
and [here](../../api/ext/sentence_transformers/).


```python
from superduper_sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    identifier="test",
    predict_kwargs={"show_progress_bar": True},
    model="all-MiniLM-L6-v2",
    device="cpu",
    datatype='vector[float32:384]',
)
```

We can check that this model gives us what we want by evaluating an output 
on a single data-point. (Learn more about the various aspects of `Model` [here](../models/).)

Now that we've verified that this model works, we can "activate" it for 
vector-search by creating a [`VectorIndex`](../apply_api/vector_index).


```python
from superduper import VectorIndex, Listener, Model
vector_index = VectorIndex(
    'test_index',
    indexing_listener=Listener(
        'test_listener',
        model=model,
        select=db['documents'],
        key='txt',
    )
)
```

You will see that the `VectorIndex` contains a [`Listener`](../apply_api/listener) instance.
This instance wraps the model, and configures it to compute outputs 
on data inserted to the `"documents"` collection with the key `"txt"`.

To activate this index, we now do:


```python
db.apply(vector_index)
```

The `db.apply` command is a universal command for activating AI components in superduper.

You will now see lots of output - the model-outputs/ vectors are computed 
and the various parts of the `VectorIndex` are registered in the system.

You can verify this with:


```python
db.show()
```

To "use" the `VectorIndex` we can execute a vector-search query:


```python
query = db['documents'].like({'txt': 'Tell me about vector-search'}, vector_index=vector_index.identifier, n=3).select()
results = query.execute()
```

This query will return a cursor of [`Document`](../fundamentals/document) instances.
To obtain the raw dictionaries, call the `.unpack()` command:


```python
for r in results:
    print('=' * 100)
    print(r.unpack()['txt'])
    print('=' * 100)
```

You should see that the documents returned are relevant to the `like` part of the 
query.

Learn more about building queries with `superduper` [here](../execute_api/overview.md).
