---
sidebar_label: Multimodal vector search - Video
filename: multimodal_vector_search_video.md
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- TABS -->
# Multimodal vector search - Video

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
!curl -O https://superduper-public-demo.s3.amazonaws.com/videos.zip && unzip videos.zip
import os

data = [f'videos/{x}' for x in os.listdir('./videos')]
sample_datapoint = data[-1]

from superduper.ext.pillow import pil_image
chunked_model_datatype = pil_image
```

```python
datas = [{'x': d} for d in data[:3]]
```

<!-- TABS -->
## Create datatype

SuperduperDB supports automatic data conversion, so users don’t need to worry about the compatibility of different data formats (`PIL.Image`, `numpy.array`, `pandas.DataFrame`, etc.) with the database.

It also supports custom data conversion methods for transforming data, such as defining the following Datatype.

```python
from superduper import DataType

# Create an instance of the Encoder with the identifier 'video_on_file' and load_hybrid set to False
datatype = DataType(
    identifier='video_on_file',
    encodable='file',
)
```

<!-- TABS -->
## Setup tables or collections

```python
from superduper.components.table import Table
from superduper import Schema

schema = Schema(identifier="schema", fields={"x": datatype})
table_or_collection = Table("documents", schema=schema)
db.apply(table_or_collection)
```

Inserting data, all fields will be matched with the schema for data conversion.

```python
db['documents'].insert(datas).execute()
select = db['documents'].select()
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
!pip install opencv-python
import cv2
import tqdm
from PIL import Image
from superduper.ext.pillow import pil_image
from superduper import model, Schema


@model(
    flatten=True,
    model_update_kwargs={'document_embedded': False},
)
def chunker(video_file):
    # Set the sampling frequency for frames
    sample_freq = 10
    
    # Open the video file using OpenCV
    cap = cv2.VideoCapture(video_file)
    
    # Initialize variables
    frame_count = 0
    fps = cap.get(cv2.CAP_PROP_FPS)
    extracted_frames = []
    progress = tqdm.tqdm()

    # Iterate through video frames
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Get the current timestamp based on frame count and FPS
        current_timestamp = frame_count // fps
        
        # Sample frames based on the specified frequency
        if frame_count % sample_freq == 0:
            extracted_frames.append({
                'image': Image.fromarray(frame[:,:,::-1]),  # Convert BGR to RGB
                'current_timestamp': current_timestamp,
            })
        frame_count += 1
        progress.update(1)
    
    # Release resources
    cap.release()
    cv2.destroyAllWindows()
    
    # Return the list of extracted frames
    return extracted_frames
```

Now we apply this chunker to the data by wrapping the chunker in `Listener`:

```python
from superduper import Listener

upstream_listener = Listener(
    model=chunker,
    select=select,
    key='x',
    uuid="chunk",
)

db.apply(upstream_listener)
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
model, preprocess = clip.load("ViT-B/32", device='cpu')

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
compatible_key = 'text' # we use text key for text embedding
indexing_key = upstream_listener.outputs_key + '.image' # we use indexing_key for image embedding, use the image field of the result
select = upstream_listener.outputs_select
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

We can perform the vector searches using text description:

```python
from superduper import Document
item = Document({compatible_key: "The moment of a soccer shot"})
```

Once we have this search target, we can execute a search as follows.

```python
select = query_table_or_collection.like(item, vector_index=vector_index_name, n=5).select()
results = list(db.execute(select))
```

## Visualize Results

```python
from IPython.display import display
for result in results:
    display(Document(result.unpack())[indexing_key])
```

## Check the system stays updated

You can add new data; once the data is added, all related models will perform calculations according to the underlying constructed model and listener, simultaneously updating the vector index to ensure that each query uses the latest data.

```python
new_datas = [{'x': data[-1]}]
ids = db['documents'].insert(new_datas).execute()
```

