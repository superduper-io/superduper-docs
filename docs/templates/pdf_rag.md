# PDF RAG

This is a PDF-based RAG application. While answering questions, it accesses relevant information from the PDF and displays the corresponding paragraphs in the form of images.


```python
APPLY = True
EAGER = False
COLLECTION_NAME = '<var:table_name>' if not APPLY else 'sample_pdf_rag'
```


```python
from superduper import superduper, CFG
```


```python
db = superduper('mongomock://test')
```


```python
def getter():
    import subprocess
    import os
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
from superduper.components.datatype import file

schema = Schema(identifier="myschema", fields={'url': 'str', 'file': file})
table = Table(identifier=COLLECTION_NAME, schema=schema)

if APPLY:
    db.apply(table, force=True)
    db[COLLECTION_NAME].insert(data).execute()
```


```python
db.show()
```

## Split the PDF file into images for later result display


```python
!pip install pdf2image
```


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
    datatype=file,
)

listener_split_image = model_split_image.to_listener(
    key="file",
    select=db[COLLECTION_NAME].find(),
    flatten=True,
)

if EAGER and APPLY:
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

if EAGER and APPLY:
    db.apply(listener_chunk, force=True)
```

## Build a vector index for vector search

OpenAI:


```python
pip install -e ../../plugins/openai
```


```python
from superduper_openai import OpenAIEmbedding
from superduper.components.datatype import Vector
openai_embedding = OpenAIEmbedding(identifier='embedding', model='text-embedding-ada-002', datatype=Vector(shape=(1536,)))
```


```python
from superduper_openai.model import OpenAIEmbedding
from superduper import VectorIndex
from superduper.components.datatype import Vector

listener_embedding = openai_embedding.to_listener(
    key=f"{listener_chunk.outputs}.txt",
    select=db[listener_chunk.outputs].select(),
)

vector_index = VectorIndex(
    identifier="vector-index",
    indexing_listener=listener_embedding,
)

if EAGER and APPLY:
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
    prompt_template: str
    processor: None | Model = None
    vector_index: VectorIndex

    def __post_init__(self, *args, **kwargs):
        assert "{context}" in self.prompt_template, 'The prompt_template must include "{context}"'
        assert "{query}" in self.prompt_template, 'The prompt_template must include "{query}"'
        super().__post_init__(*args, **kwargs)

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
from superduper_openai.model import OpenAIChatCompletion

prompt_template = (
    "The following is a document and question\n"
    "Only provide a very concise answer\n"
    "Context:\n\n"
    "{context}\n\n"
    "Here's the question:{query}\n"
    "answer:"
)

rag = Rag(
    identifier="rag",
    llm_model=llm_openai,
    vector_index=vector_index, 
    prompt_template=prompt_template,
    db=db,
    processor=processor,
    upstream=[vector_index],
)
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
if APPLY:
    db.apply(app)
```


```python
from IPython.display import Image, Markdown, display

if APPLY:
    db.apply(rag, force=True)
    result = rag.predict("Tell me about GPT on the basis of these data.", format_result=True)
    
    display(Markdown(result["answer"]))
    
    for message, img in result["images"]:
        display(Markdown(message))
        display(img)
```


```python
from superduper import Template, CFG, Table
from superduper.components.dataset import RemoteData

template = Template(
    'pdf-rag',
    db=db,
    template=app,
    substitutions={
        prompt_template: 
        'prompt_template',
        COLLECTION_NAME: 'table_name',
        'gpt-3.5-turbo': 'llm_model',
        'text-embedding-ada-002': 'embedding_model'
    },
    template_variables=['table_name', 'prompt_template', 'llm_model', 'embedding_model'],
    default_tables=[Table(
        'sample_pdf_rag',
        schema=Schema(
            'sample_pdf_rag/schema',
            fields={"url": "str", "file": file}
        ),
        data=RemoteData('sample_pdfs', getter=getter),
    )],
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
            'default': 'gpt-3.5-turbo',
        },
        'embedding_model': {
            'type': 'str',
            'default': 'text-embedding-ada-002',
        },
    }
)
```


```python
template.export(".")
```
