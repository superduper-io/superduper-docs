---
sidebar_label: Retrieval augmented generation
filename: build.md
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- TABS -->
# Retrieval augmented generation

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


<Tabs>
    <TabItem value="Text" label="Text" default>
        ```python
        # !curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json
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
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.

```python
from superduper import Document

ids = db.execute(db['docs'].insert([Document(data) for data in datas]))
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
        
        @model(flatten=True, model_update_kwargs={'document_embedded': False})
        def chunker(pdf_file):
            elements = partition_pdf(pdf_file)
            text = '\n'.join([e.text for e in elements])
            chunks = [text[i:i + CHUNK_SIZE] for i in range(0, len(text), CHUNK_SIZE)]
            return chunks        
        ```
    </TabItem>
</Tabs>
Now we apply this chunker to the data by wrapping the chunker in `Listener`:

```python
from superduper import Listener

upstream_listener = Listener(
    model=chunker,
    select=db['docs'].select(),
    key='x',
    uuid="chunker",
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
        import os
        os.environ['OPENAI_API_KEY'] = 'sk-<secret>'
        from superduper_openai import OpenAIEmbedding
        
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
## Create vector-index

```python
from superduper import VectorIndex, Listener

vector_index_name = 'vector-index'

vector_index = \
    VectorIndex(
        vector_index_name,
        indexing_listener=Listener(
            key=upstream_listener.outputs,      # the `Document` key `model` should ingest to create embedding
            select=db[upstream_listener.outputs].select(),       # a `Select` query telling which data to search over
            model=embedding_model,         # a `_Predictor` how to convert data to embeddings
            uuid="embedding-listener",
            identifier='embedding-listener',
            upstream=[upstream_listener],
        )
    )
```

<!-- TABS -->
## Create Vector Search Model

```python
item = {indexing_key: '<var:query>'}
```

```python
from superduper.components.model import QueryModel

vector_search_model = QueryModel(
    identifier="VectorSearch",
    select=db[upstream_listener.outputs].like(item, vector_index=vector_index_name, n=5).select(),
    # The _source is the identifier of the upstream data, which can be used to locate the data from upstream sources using `_source`.
    postprocess=lambda docs: [{"text": doc[indexing_key], "_source": doc["_source"]} for doc in docs],
    db=db
)
```

<!-- TABS -->
## Build LLM


<Tabs>
    <TabItem value="OpenAI" label="OpenAI" default>
        ```python
        from superduper_openai import OpenAIChatCompletion
        
        llm = OpenAIChatCompletion(identifier='llm', model='gpt-3.5-turbo')        
        ```
    </TabItem>
    <TabItem value="Anthropic" label="Anthropic" default>
        ```python
        from superduper_anthropic import AnthropicCompletions
        import os
        
        os.environ["ANTHROPIC_API_KEY"] = "sk-xxx"
        
        predict_kwargs = {
            "max_tokens": 1024,
            "temperature": 0.8,
        }
        
        llm = AnthropicCompletions(identifier='llm', model='claude-2.1', predict_kwargs=predict_kwargs)        
        ```
    </TabItem>
    <TabItem value="vLLM" label="vLLM" default>
        ```python
        from superduper_vllm import VllmModel
        
        predict_kwargs = {
            "max_tokens": 1024,
            "temperature": 0.8,
        }
        
        
        llm = VllmModel(
            identifier="llm",
            model_name="TheBloke/Mistral-7B-Instruct-v0.2-AWQ",
            vllm_kwargs={
                "gpu_memory_utilization": 0.7,
                "max_model_len": 1024,
                "quantization": "awq",
            },
            predict_kwargs=predict_kwargs,
        )        
        ```
    </TabItem>
    <TabItem value="Transformers" label="Transformers" default>
        ```python
        from superduper_transformers import LLM
        
        llm = LLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2", load_in_8bit=True, device_map="cuda", identifier="llm", predict_kwargs=dict(max_new_tokens=128))        
        ```
    </TabItem>
    <TabItem value="Llama.cpp" label="Llama.cpp" default>
        ```python
        !huggingface-cli download TheBloke/Mistral-7B-Instruct-v0.2-GGUF mistral-7b-instruct-v0.2.Q4_K_M.gguf --local-dir . --local-dir-use-symlinks False
        
        from superduper_llama_cpp.model import LlamaCpp
        llm = LlamaCpp(identifier="llm", model_name_or_path="mistral-7b-instruct-v0.2.Q4_K_M.gguf")        
        ```
    </TabItem>
</Tabs>
## Answer question with LLM

```python
from superduper import model
from superduper.components.graph import Graph, input_node

prompt_template = (
    "Use the following context snippets, these snippets are not ordered!, Answer the question based on this context.\n"
    "{context}\n\n"
    "Here's the question: {query}"
)

@model
def build_prompt(query, docs):
    chunks = [doc["text"] for doc in docs]
    context = "\n\n".join(chunks)
    prompt = prompt_template.format(context=context, query=query)
    return prompt

# We build a graph to handle the entire pipeline

# create a input node, only have one input parameter `query`
in_ = input_node('query')
# pass the query to the vector search model
vector_search_results = vector_search_model(query=in_)
# pass the query and the search results to the prompt builder
prompt = build_prompt(query=in_, docs=vector_search_results)
# pass the prompt to the llm model
answer = llm(prompt)
# create a graph, and the graph output is the answer
rag = answer.to_graph("rag")
```

By applying the RAG model to the database, it will subsequently be accessible for use in other services.

```python
from superduper import Application

app = Application(
    'rag-app',
    components=[
        upstream_listener,
        vector_index,
        vector_search_model,
        rag,
    ]
)

db.apply(app)
```

You can now load the model elsewhere and make predictions using the following command.

```python
rag = db.load("model", 'rag')
print(rag.predict("Tell me about superduper")[0])
```

## Create template

```python
from superduper import Template

template = Template('rag-template', template=app, substitutions={'docs': 'collection'})
```

```python
template.export('.')
```

