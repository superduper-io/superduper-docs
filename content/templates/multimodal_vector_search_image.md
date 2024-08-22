---
sidebar_label: Multimodal vector search - Image
filename: multimodal_vector_search_image.md
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- TABS -->
# Multimodal vector search - Image

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

```python
!curl -O https://superduper-public-demo.s3.amazonaws.com/images.zip && unzip images.zip
import os
from PIL import Image

data = [f'images/{x}' for x in os.listdir('./images') if x.endswith(".png")][:200]
data = [ Image.open(path) for path in data]
```

```python
datas = [{'img': d} for d in data[:100]]
```

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.

```python
from superduper import Document

table_or_collection = db['documents']

ids = db.execute(table_or_collection.insert([Document(data) for data in datas]))
select = table_or_collection.select()
```

## Build multimodal embedding models

We define the output data type of a model as a vector for vector transformation.


<Tabs>
    <TabItem value="MongoDB" label="MongoDB" default>
        ```python
        from superduper.components.vector_index import vector
        output_datatpye = vector(shape=(1024,))        
        ```
    </TabItem>
    <TabItem value="SQL" label="SQL" default>
        ```python
        from superduper.components.vector_index import sqlvector
        output_datatpye = sqlvector(shape=(1024,))        
        ```
    </TabItem>
</Tabs>
Then define two models, one for text embedding and one for image embedding.

```python
!pip install git+https://github.com/openai/CLIP.git
import clip
from superduper import vector
from superduper.ext.torch import TorchModel

# Load the CLIP model and obtain the preprocessing function
model, preprocess = clip.load("RN50", device='cpu')

# Create a TorchModel for text encoding
compatible_model = TorchModel(
    identifier='clip_text', # Unique identifier for the model
    object=model, # CLIP model
    preprocess=lambda x: clip.tokenize(x)[0],  # Model input preprocessing using CLIP 
    postprocess=lambda x: x.tolist(), # Convert the model output to a list
    datatype=output_datatpye,  # Vector encoder with shape (1024,)
    forward_method='encode_text', # Use the 'encode_text' method for forward pass 
)

# Create a TorchModel for visual encoding
model = TorchModel(
    identifier='clip_image',  # Unique identifier for the model
    object=model.visual,  # Visual part of the CLIP model    
    preprocess=preprocess, # Visual preprocessing using CLIP
    postprocess=lambda x: x.tolist(), # Convert the output to a list 
    datatype=output_datatpye, # Vector encoder with shape (1024,)
)
```

Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index.

```python
indexing_key = 'img' # we use img key for img embedding
compatible_key = 'text' # we use text key for text embedding
```

## Create vector-index

```python
vector_index_name = 'my-vector-index'
```

```python
from superduper import VectorIndex, Listener

jobs, _ = db.apply(
    VectorIndex(
        vector_index_name,
        indexing_listener=Listener(
            key=indexing_key,      # the `Document` key `model` should ingest to create embedding
            select=select,       # a `Select` query telling which data to search over
            model=embedding_model,         # a `_Predictor` how to convert data to embeddings
        ),
        compatible_listener=Listener(
            key=compatible_key,      # the `Document` key `model` should ingest to create embedding
            model=compatible_model,         # a `_Predictor` how to convert data to embeddings
            active=False,
            select=None,
        )
    )
)
```

```python
query_table_or_collection = select.table_or_collection
```

## Perform a vector search

We can perform the vector searches using two types of data:

- Text: By text description, we can find images similar to the text description.
- Image: By using an image, we can find images similar to the provided image.


<Tabs>
    <TabItem value="Text" label="Text" default>
        ```python
        item = Document({compatible_key: "Find a black dog"})        
        ```
    </TabItem>
    <TabItem value="Image" label="Image" default>
        ```python
        from IPython.display import display
        search_image = data[0]
        display(search_image)
        item = Document({indexing_key: search_image})        
        ```
    </TabItem>
</Tabs>
Once we have this search target, we can execute a search as follows.

```python
select = query_table_or_collection.like(item, vector_index=vector_index_name, n=5).select()
results = list(db.execute(select))
```

## Visualize Results

```python
from IPython.display import display
for result in results:
    display(result[indexing_key])
```

## Check the system stays updated

You can add new data; once the data is added, all related models will perform calculations according to the underlying constructed model and listener, simultaneously updating the vector index to ensure that each query uses the latest data.

```python
new_datas = [{'img': d} for d in data[100:200]]
ids = db.execute(table_or_collection.insert(new_datas))
```

