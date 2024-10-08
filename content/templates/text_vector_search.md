---
sidebar_label: Text Vector Search
filename: build.md
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- TABS -->
# Text Vector Search

You'll find this example as well as the saved template in the main repository of `superduper`.
See [here](https://github.com/superduper-io/superduper/tree/main/templates/text_vector_search).

If you'd like to modify the template, or practice building it yourself, then you can rerun the `build.ipynb` notebook
in the template directory

<!-- TABS -->
## Connect to superduper

```python
from superduper import superduper

db = superduper('mongomock://test_db')
```

<!-- TABS -->
## Get useful sample data


<Tabs>
    <TabItem value="Text" label="Text" default>
        ```python
        !curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json
        import json
        
        with open('text.json', 'r') as f:
            data = json.load(f)        
        ```
    </TabItem>
    <TabItem value="PDF" label="PDF" default>
        ```python
        !curl -O https://superduperdb-public-demo.s3.amazonaws.com/pdfs.zip && unzip -o pdfs.zip
        import os
        
        data = [f'pdfs/{x}' for x in os.listdir('./pdfs') if x.endswith('.pdf')]        
        ```
    </TabItem>
</Tabs>
```python
datas = [{'x': d} for d in data]
```

<!-- TABS -->
## Create datatype

SuperduperDB supports automatic data conversion, so users don’t need to worry about the compatibility of different data formats (`PIL.Image`, `numpy.array`, `pandas.DataFrame`, etc.) with the database.

It also supports custom data conversion methods for transforming data, such as defining the following Datatype.


<Tabs>
    <TabItem value="Text" label="Text" default>
        ```python
        datatype = 'str'        
        ```
    </TabItem>
    <TabItem value="PDF" label="PDF" default>
        ```python
        from superduper import DataType
        
        # By creating a datatype and setting its encodable attribute to “file” for saving PDF files, 
        # all datatypes encoded as “file” will have their corresponding files uploaded to the artifact store. 
        # References will be recorded in the database, and the files will be downloaded locally when needed. 
        
        datatype = DataType('pdf', encodable='file')        
        ```
    </TabItem>
</Tabs>
<!-- TABS -->
## Setup tables or collections

```python
from superduper.components.table import Table
from superduper import Schema

schema = Schema(identifier="schema", fields={"x": datatype})
table = Table("docs", schema=schema)
select = db['docs'].select()
```

<!-- TABS -->
## Apply a chunker for search

:::note
Note that applying a chunker is ***not*** mandatory for search.
If your data is already chunked (e.g. short text snippets or audio) or if you
are searching through something like images, which can't be chunked, then this
won't be necessary.
:::


<Tabs>
    <TabItem value="Text" label="Text" default>
        ```python
        from superduper import model
        
        CHUNK_SIZE = 200
        
        @model(flatten=True, model_update_kwargs={'document_embedded': False})
        def chunker(text):
            text = text.split()
            chunks = [' '.join(text[i:i + CHUNK_SIZE]) for i in range(0, len(text), CHUNK_SIZE)]
            return chunks        
        ```
    </TabItem>
    <TabItem value="PDF" label="PDF" default>
        ```python
        !pip install -q "unstructured[pdf]"
        from superduper import model
        from unstructured.partition.pdf import partition_pdf
        
        CHUNK_SIZE = 500
        
        @model(flatten=True)
        def chunker(pdf_file):
            elements = partition_pdf(pdf_file)
            text = '\n'.join([e.text for e in elements])
            chunks = [text[i:i + CHUNK_SIZE] for i in range(0, len(text), CHUNK_SIZE)]
            return chunks        
        ```
    </TabItem>
</Tabs>
Now we wrap this chunker as a `Listener`, so that it processes incoming data

```python
from superduper import Listener

upstream_listener = Listener(
    model=chunker,
    select=db['docs'].select(),
    key='x',
    uuid="chunk",
    identifier='chunker',
)
```

## Select outputs of upstream listener

:::note
This is useful if you have performed a first step, such as pre-computing 
features, or chunking your data. You can use this query to 
operate on those outputs.
:::

```python
indexing_key = upstream_listener.outputs
indexing_key
```

<!-- TABS -->
## Build text embedding model


<Tabs>
    <TabItem value="OpenAI" label="OpenAI" default>
        ```python
        from superduper_openai import OpenAIEmbedding
        import os
        
        os.environ['OPENAI_API_KEY'] = 'sk-<secret>'
        
        embedding_model = OpenAIEmbedding(identifier='text-embedding-ada-002')        
        ```
    </TabItem>
    <TabItem value="JinaAI" label="JinaAI" default>
        ```python
        import os
        from superduper_jina import JinaEmbedding
        
        os.environ["JINA_API_KEY"] = "jina_xxxx"
         
        # define the model
        embedding_model = JinaEmbedding(identifier='jina-embeddings-v2-base-en')        
        ```
    </TabItem>
    <TabItem value="Sentence-Transformers" label="Sentence-Transformers" default>
        ```python
        !pip install sentence-transformers
        from superduper import vector
        import sentence_transformers
        from superduper_sentence_transformers import SentenceTransformer
        
        embedding_model = SentenceTransformer(
            identifier="embedding",
            object=sentence_transformers.SentenceTransformer("BAAI/bge-small-en"),
            datatype=vector(shape=(1024,)),
            postprocess=lambda x: x.tolist(),
            predict_kwargs={"show_progress_bar": True},
        )        
        ```
    </TabItem>
</Tabs>
```python
print(len(embedding_model.predict("What is superduper")))
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
        key=indexing_key,              # the `Document` key `model` should ingest to create embedding
        select=db[indexing_key].select(),                 # a `Select` query telling which data to search over
        model=embedding_model,         # a `_Predictor` how to convert data to embeddings
        identifier=f'{embedding_model.identifier}-listener',
        upstream=[table, upstream_listener],              # this makes sure that the table is already set up when the other components are triggered
    )
)
```

```python
from superduper import Application

application = Application(
    'text-vector-search', 
    components=[
        table,
        upstream_listener,
        vector_index,
    ]
)
```

```python
db.apply(application)
```

```python
application.info(verbosity=2)
```

```python
db['docs'].insert(datas).execute()
select = db['docs'].select()
```

```python
db.databackend.db.list_collection_names()
```

## Perform a vector search

```python
from superduper import Document
# Perform the vector search based on the query
item = Document({indexing_key: "Tell me about vector-search"})
```

```python
results = db[indexing_key].like(item, vector_index=vector_index_name, n=10).select().execute()
```

```python
for result in results:
    print("\n", '-' * 20, '\n')
    print(Document(result.unpack())[indexing_key])
```

```python
from superduper import Template

t = Template(
    'vector-search',
    template=application,
    substitutions={'docs': 'table_name'},
)
```

```python
t.export('.')
```

```python
!cat component.json | jq .
```

