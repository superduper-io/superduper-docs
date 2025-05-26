# Reusable Superduper applications and templates

Superduper includes two components, `Application` and `Template`, to help users more easily build reusable Superduper applications.

**`Application`**

Once an `Application` is built, it can be exported and distributed to different locations for direct deployment. It can also be deployed directly using Superduper Enterprise for a highly available and high-performance deployment approach

**`Template`**

During use, if an Application needs to be turned into a template, the variable values within the `Application` can be set as parameters. When applying the template, new values can be filled in to create a new Application.

:::info
Let’s take building an RAG application based on Superduper documentation as an example to demonstrate how to construct an application, as well as how to export and reuse it.

At the same time, based on this application, we’ll create a template and apply it to the Transformers documentation.
:::

## Application

### Build an application

Connect to a mongomock database to build the application. You can also use a real database if preferred.


```python
from superduper import superduper

db = superduper("mongomock://test_db")
```

Insert data containing a document’s URL.


```python
urls = [
    "https://docs.superduper.io/docs/intro",
]
db["example_table"].insert([{"url": url} for url in urls]).execute()
```

Install some necessary dependencies.


```python
# !pip install unstructured langchain_text_splitters
```

Define a model to parse the URL and convert it into a markdown-formatted document.


```python
def get_page(url):
    from unstructured.partition.html import partition_html
    from unstructured.chunking.title import chunk_by_title
    elements = partition_html(url=url)
    lines =[]
    for e in elements:
        if e.category == "Title":
            if e.text == "tip":
                lines.append(">> " + e.text)
                continue
            level = e.metadata.category_depth + 1
            lines.append("#" * level + " " + e.text)
        elif e.category == "ListItem":
            lines.append("- " + e.text)
        else:
            lines.append(e.text)
    
    markdown_content = "\n\n".join(lines)
    return markdown_content
```


```python
from superduper import ObjectModel

model_page = ObjectModel(identifier="page", object=get_page)

listener_page = model_page.to_listener(
    predict_id="page", 
    key="url", 
    select=db["example_table"].select()
)

db.apply(listener_page)
```

Define a chunk model to parse the document and chunk it based on headers.


```python
from langchain_text_splitters import MarkdownHeaderTextSplitter

def chunk(page):
    headers_to_split_on = [
        ("#", "H1"),
        ("##", "H2"),
        ("###", "H3"),
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
    md_header_splits = markdown_splitter.split_text(page)
    
    chunks = []
    for md_header_split in md_header_splits:
        metadata = md_header_split.metadata
        header_text = ""
        for tag, h in headers_to_split_on:
            if h not in metadata:
                continue
            header_text += tag + " " + metadata.get(h) + "\n"
        chunk = header_text + md_header_split.page_content
        chunks.append(chunk)
    return chunks
```


```python
from superduper import ObjectModel

model_chunk = ObjectModel(identifier="chunk", object=chunk, flatten=True)

listener_chunk = model_chunk.to_listener(
    predict_id="chunk",
    key=listener_page.outputs,
    select=listener_page.outputs_select，
)

db.apply(listener_chunk)
```

Use OpenAI embeddings to build a vector index.


```python
from superduper_openai import OpenAIEmbedding
from superduper import VectorIndex

model_embedding = OpenAIEmbedding(identifier='text-embedding-ada-002')   

listener_embedding = model_embedding.to_listener(
    predict_id="embedding",
    key=listener_chunk.outputs,
    select=db[listener_chunk.outputs]，
)

vector_index = VectorIndex(
    identifier="my-index",
    indexing_listener=listener_embedding,
    measure="cosine"
)

db.apply(vector_index)
```

Define a RAG model that first performs a vector search, constructs a prompt, and then passes it to the LLM model for answer generation


```python
from superduper.ext.llm.prompter import *
from superduper import Document
from superduper.components.model import SequentialModel
from superduper_openai import OpenAIChatCompletion

key = listener_chunk.outputs

q = db[key].like(Document({key: "<var:prompt>"}), vector_index='my-index', n=5).select()

def get_output(c):
    c = sorted(c, key=lambda x:x['score'], reverse=True)
    return [r[key] for r in c]

prompt_template = RetrievalPrompt('my-prompt', select=q, postprocess=get_output)
prompt_template.db = db

llm = OpenAIChatCompletion('gpt-3.5-turbo')
rag = SequentialModel('rag', models=[prompt_template, llm])

db.apply(rag)
```


```python
print(rag.predict("What important additional aspects does Superduper include?"))
```

Build an application using the build_from_db method, which will automatically package all components from the database into a single application.


```python
from superduper import Application

application = Application.build_from_db(identifier="doc-qa", db=db)
```

### Export application

We can use the `.export` function to export the application.


```python
application.export("exports/application")
```


```python
!cat exports/application/component.json | jq .
```

### Reuse application

We connect to a new database and load the application.


```python
from superduper import superduper
db = superduper("mongomock://test_db")
db.show()
```


```python
from superduper import Application

application = Application.read("exports/application/")
db.apply(application)
```

After inserting new data, all listeners will follow the expected logic and dependency relationships to run the corresponding models on the inserted data and obtain the relevant results.


```python
urls = [
    "https://docs.superduper.io/docs/intro",
]
db["example_table"].insert([{"url": url} for url in urls]).execute()
```

We can load the RAG model to perform predictions


```python
rag = db.load("model", "rag")
rag.predict("What integrations does Superduper include?")
```

## Template

### Build Template

We build a template based on the application and set the table name as a variable.

Using `substitutions`, the corresponding values in the application can be replaced with variable identifiers.


```python
from superduper import Template

template = Template(
    'vector-search',
    template=application,
    substitutions={'example_table': 'table_name'},
    template_variables=["table_name"]
)
```

### Export Template


```python
template.export("exports/template")
```


```python
!cat exports/template/component.json | jq .
```

### Reuse Template

We load the template in a new database and use `table_name=transformers` to build a new application, which will be applied to the [Transformers documentation](https://huggingface.co/docs/transformers/index).


```python
from superduper import superduper
db = superduper("mongodb://127.0.0.1:27017/test_db")
db.drop(True, True)
db.show()
```


```python
from superduper import Template, Application

template = Template.read("exports/template")

application = template(table_name="transformers")

db.apply(application)
```


```python
urls = [
    "https://huggingface.co/docs/transformers/serialization",
]
db["transformers"].insert([{"url": url} for url in urls]).execute()
```

Ask questions related to Transformers.


```python
from IPython.display import Markdown, display

rag = db.load("model", "rag")
response = rag.predict("How to export a Transformers model to ONNX with with optimum.onnxruntime")
display(Markdown(response))
```
