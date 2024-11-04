# PDF RAG

This is a PDF-based RAG application. While answering questions, it accesses relevant information from the PDF and displays the corresponding paragraphs in the form of images.


```python
APPLY = False
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'sample_pdf_rag'
```


```python
from superduper import superduper, CFG
CFG.bytes_encoding = 'str'
CFG.native_json = False
```


```python
db = superduper("mongomock://")
```


```python
def getter():
    import subprocess
    subprocess.run(['curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/pdfs.zip'])
    subprocess.run(['unzip', '-o', 'pdfs.zip'])
    subprocess.run(['rm', 'pdfs.zip'])
    pdf_folder = "pdfs"
    pdf_names = [pdf for pdf in os.listdir(pdf_folder) if pdf.endswith(".pdf")]
    pdf_paths = [os.path.join(pdf_folder, pdf) for pdf in pdf_names]
    data = [{"url": pdf_path, "file": pdf_path} for pdf_path in pdf_paths]
    return data
```


```python
if APPLY:
    data = getter()
```

## Create a table to store PDFs.


```python
import os
from superduper import Schema, Table
from superduper.components.datatype import file_lazy

schema = Schema(identifier="myschema", fields={'url': 'str', 'file': file_lazy})
table = Table(identifier=COLLECTION_NAME, schema=schema)

if APPLY:
    db.apply(table, force=True)
    db[COLLECTION_NAME].insert(data).execute()
```

## Split the PDF file into images for later result display


```python
from superduper import ObjectModel, logging
from pdf2image import convert_from_path
import os


def split_image(pdf_path):
    logging.info(f"Splitting images from {pdf_path}")

    image_folders = "data/pdf-images"
    pdf_name = os.path.basename(pdf_path)
    images = convert_from_path(pdf_path)
    logging.info(f"Number of images: {len(images)}")

    image_folder = os.path.join(image_folders, pdf_name)
    if not os.path.exists(image_folder):
        os.makedirs(image_folder)

    data = []
    for i, image in enumerate(images):
        path = os.path.join(image_folder, f"{i}.jpg")
        image.save(os.path.join(path))
        data.append(path)
    return data


model_split_image = ObjectModel(
    identifier="split_image",
    object=split_image,
    datatype=file_lazy,
)

listener_split_image = model_split_image.to_listener(
    key="file",
    select=db[COLLECTION_NAME].find(),
    flatten=True,
)

if APPLY:
    db.apply(listener_split_image, force=True)
```

## Build a chunks model and return chunk results with coordinate information.


```python
def remove_sidebars(elements):
    import re
    from collections import defaultdict

    from unstructured.documents.elements import ElementType

    if not elements:
        return elements
    points_groups = defaultdict(list)
    min_x = 99999999
    max_x = 0
    e2index = {e.id: i for i, e in enumerate(elements)}
    for e in elements:
        x_l = int(e.metadata.coordinates.points[0][0])
        x_r = int(e.metadata.coordinates.points[2][0])
        points_groups[(x_l, x_r)].append(e)
        min_x = min(min_x, x_l)
        max_x = max(max_x, x_r)
    sidebars_elements = set()
    for (x_l, x_r), es in points_groups.items():
        first_id = e2index[es[0].id]
        last_id = e2index[es[-1].id]
        on_left = first_id == 0 and x_l == min_x
        on_right = (last_id == len(elements) - 2) and x_r == max_x
        loc_match = [on_left, on_right]
        total_text = "".join(map(str, es))
        condiction = [
            any(loc_match),
            len(es) >= 3,
            re.findall("^[A-Z\s\d,]+$", total_text),
        ]
        if not all(condiction):
            continue
        sidebars_elements.update(map(lambda x: x.id, es))
        if on_left:
            check_page_num_e = elements[last_id + 1]
        else:
            check_page_num_e = elements[-1]
        if (
            check_page_num_e.category == ElementType.UNCATEGORIZED_TEXT
            and check_page_num_e.text.strip().isalnum()
        ):
            sidebars_elements.add(check_page_num_e.id)

    elements = [e for e in elements if e.id not in sidebars_elements]
    return elements


def remove_annotation(elements):
    from collections import Counter

    from unstructured.documents.elements import ElementType

    page_num = max(e.metadata.page_number for e in elements)
    un_texts_counter = Counter(
        [e.text for e in elements if e.category == ElementType.UNCATEGORIZED_TEXT]
    )
    rm_text = set()
    for text, count in un_texts_counter.items():
        if count / page_num >= 0.5:
            rm_text.add(text)
    elements = [e for e in elements if e.text not in rm_text]
    return elements


def create_chunk_and_metadatas(page_elements, stride=3, window=10):
    page_elements = remove_sidebars(page_elements)
    for index, page_element in enumerate(page_elements):
        page_element.metadata.num = index
    datas = []
    for i in range(0, len(page_elements), stride):
        windown_elements = page_elements[i : i + window]
        chunk = "\n".join([e.text for e in windown_elements])
        source_elements = [e.to_dict() for e in windown_elements]
        datas.append(
            {
                "txt": chunk,
                "source_elements": source_elements,
            }
        )
    return datas


def get_chunks(pdf):
    from collections import defaultdict

    from unstructured.documents.coordinates import RelativeCoordinateSystem
    from unstructured.partition.pdf import partition_pdf

    elements = partition_pdf(pdf)
    elements = remove_annotation(elements)

    pages_elements = defaultdict(list)
    for element in elements:
        element.convert_coordinates_to_new_system(
            RelativeCoordinateSystem(), in_place=True
        )
        pages_elements[element.metadata.page_number].append(element)

    all_chunks_and_links = sum(
        [
            create_chunk_and_metadatas(page_elements)
            for _, page_elements in pages_elements.items()
        ],
        [],
    )
    return all_chunks_and_links
```


```python
from superduper.components.schema import FieldType

model_chunk = ObjectModel(
    identifier="chunk",
    object=get_chunks,
    datatype=FieldType(identifier="json")
)

listener_chunk = model_chunk.to_listener(
    key="file",
    select=db[COLLECTION_NAME].select(),
    flatten=True,
)

if APPLY:
    db.apply(listener_chunk, force=True)
```

## Build a vector index for vector search

OpenAI:


```python
import os
from superduper.components.vector_index import sqlvector

from superduper_openai import OpenAIEmbedding

openai_embedding = OpenAIEmbedding(identifier='text-embedding-ada-002' , datatype=sqlvector(shape=(1536,)))
```

Sentence-transformers:


```python
import sentence_transformers
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
from superduper.components.vector_index import sqlvector

model_embedding = ModelRouter(
    'embedding',
    models={'openai': openai_embedding, 'sentence_transformers': sentence_transformers_embedding},
    model='<var:embedding_model>' if not APPLY else 'openai',
    example='this is a test',
)
```


```python
from superduper_openai.model import OpenAIEmbedding
from superduper import VectorIndex

listener_embedding = model_embedding.to_listener(
    key=f"{listener_chunk.outputs}.txt",
    select=db[listener_chunk.outputs].select(),
)

vector_index = VectorIndex(
    identifier="vector-index",
    indexing_listener=listener_embedding,
)

if APPLY:
    db.apply(vector_index, force=True)

```

## Create a plugin

When applying the processor, saves the plugin in the database, thereby saving the related dependencies as well.

The processor will integrate the returned chunks information with the images, and return a visualized image.​


```python
from superduper import Plugin
from utils import Processor

processor = Processor(
    identifier="processor",
    db=db,
    chunk_key=listener_chunk.outputs,
    split_image_key=listener_split_image.outputs,
    plugins=[Plugin(path="./utils.py")],
)
```

## Create a RAG model

Create a RAG model to perform retrieval-augmented generation (RAG) and return the results.


```python
from superduper import Model, logging


class Rag(Model):
    llm_model: Model
    vector_index_name: str
    prompt_template: str
    processor: None | Model = None

    def __post_init__(self, *args, **kwargs):
        assert "{context}" in self.prompt_template, 'The prompt_template must include "{context}"'
        assert "{query}" in self.prompt_template, 'The prompt_template must include "{query}"'
        super().__post_init__(*args, **kwargs)

    def init(self, db=None):
        db = db or self.db
        self.vector_index = self.db.load("vector_index", self.vector_index_name)
        super().init(db=db)
        
    
    def predict(self, query, top_k=5, format_result=False):
        vector_search_out = self.vector_search(query, top_k=top_k)
        key = self.vector_index.indexing_listener.key
        context = "\n\n---\n\n".join([x[key] for x in vector_search_out])
        
        prompt = self.prompt_template.format(context=context, query=query)
        output = self.llm_model.predict(prompt)
        result = {
            "answer": output,
            "docs": vector_search_out,
        }
        if format_result and self.processor:
            result["images"] = list(self.processor.predict(
                vector_search_out,
                match_text=output,
            ))
        return result

    def vector_search(self, query, top_k=5, format_result=False):
        logging.info(f"Vector search query: {query}")
        select = self.db[self.vector_index.indexing_listener.select.table].like(
            {self.vector_index.indexing_listener.key:query},
            vector_index=self.vector_index.identifier, 
            n=top_k,
        ).select()
        out = select.execute()
        if out:
            out = sorted(out, key=lambda x: x["score"], reverse=True)
        return out
```


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


```python
from superduper_openai.model import OpenAIChatCompletion

prompt_template = (
    "The following is a document and question\n"
    "Only provide a very concise answer\n"
    "Context:\n\n"
    "{context}\n\n"
    "Here's the question:{query}\n"
    "answer:"
)

rag = Rag(identifier="rag", llm_model=llm, vector_index_name=vector_index.identifier, prompt_template=prompt_template, db=db, processor=processor)
```


```python
from IPython.display import Image, Markdown, display

if APPLY:
    db.apply(rag, force=True)
    result = rag.predict("How to perform Query Optimization?", format_result=True)
    
    display(Markdown(result["answer"]))
    
    for message, img in result["images"]:
        display(Markdown(message))
        display(img)
```

## Create template


```python
from superduper import Application

app = Application(
    'pdf-rag',
    components=[
        table,
        listener_split_image,
        listener_chunk,
        vector_index,
        rag
    ]
)
```


```python
from superduper import Template, CFG, Table
from superduper.components.dataset import RemoteData

template = Template(
    'pdf-rag',
    template=app,
    substitutions={prompt_template: 'prompt_template', COLLECTION_NAME: 'table_name'},
    template_variables=['table_name', 'prompt_template', 'llm_model', 'embedding_model'],
    default_table=Table(
        'sample_pdf_rag',
        schema=Schema(
            'sample_pdf_rag/schema',
            fields={"url": "str", "file": file_lazy}
        ),
        data=RemoteData('sample_pdfs', getter=getter),
    ),
    types={
        'prompt_template':{
            'type': 'str',
            'default': prompt_template
        },
        'table_name': {
            'type': 'str',
            'default': 'sample_pdf_rag'
        },
        'llm_model': {
            'type': 'str',
            'choices': ['openai', 'anthropic', 'vllm'],
            'default': 'openai',
        },
        'embedding_model': {
            'type': 'str',
            'choices': ['openai', 'sentence_transformers'],
            'default': 'openai',
        },
    }
)
```


```python
template.export(".")
```
