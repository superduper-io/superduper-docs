# Multimodal vector search - Video

<!-- TABS -->
## Connect to superduper


```python
from superduper import superduper
  
db = superduper('mongomock://test_db')
```

<!-- TABS -->
## Get useful sample data


```python
!curl -O https://superduperdb-public-demo.s3.amazonaws.com/videos.zip && unzip videos.zip
import os
from superduper.ext.pillow import pil_image

data = [f'videos/{x}' for x in os.listdir('./videos')]
sample_datapoint = data[-1]

chunked_model_datatype = pil_image

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
table = Table("docs", schema=schema)
```


```python
db.apply(table)
```


```python
db['docs'].insert(datas).execute()
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
# !pip install opencv-python
import cv2
import tqdm
from PIL import Image
from superduper.ext.pillow import pil_image
from superduper import model, Schema


@model(
    flatten=True,
    model_update_kwargs={},
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
    select=db['docs'].select(),
    key='x',
    uuid='chunker',
    identifier='chunker',
    upstream=[table]
)
```


```python
db.apply(upstream_listener)
```

## Build multimodal embedding models

We define the output data type of a model as a vector for vector transformation.


```python
# <tab: MongoDB>
from superduper.components.vector_index import vector
output_datatype = vector(shape=(1024,))
```


```python
# <tab: SQL>
from superduper.components.vector_index import sqlvector
output_datatype = sqlvector(shape=(1024,))
```

Then define two models, one for text embedding and one for image embedding.


```python
# !pip install git+https://github.com/openai/CLIP.git
import clip
from superduper import vector
from superduper_torch import TorchModel

# Load the CLIP model and obtain the preprocessing function
model, preprocess = clip.load("ViT-B/32", device='cpu')

# Create a TorchModel for text encoding
compatible_model = TorchModel(
    identifier='clip_text', # Unique identifier for the model
    object=model, # CLIP model
    preprocess=lambda x: clip.tokenize(x)[0],  # Model input preprocessing using CLIP 
    postprocess=lambda x: x.tolist(), # Convert the model output to a list
    datatype=output_datatype,  # Vector encoder with shape (1024,)
    forward_method='encode_text', # Use the 'encode_text' method for forward pass 
)

# Create a TorchModel for visual encoding
model = TorchModel(
    identifier='clip_image',  # Unique identifier for the model
    object=model.visual,  # Visual part of the CLIP model    
    preprocess=preprocess, # Visual preprocessing using CLIP
    postprocess=lambda x: x.tolist(), # Convert the output to a list 
    datatype=output_datatype, # Vector encoder with shape (1024,)
)
```

Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index.

## Create vector-index


```python
from superduper import VectorIndex, Listener

vector_index = VectorIndex(
    'my-vector-index',
    indexing_listener=Listener(
        key=upstream_listener.outputs + '.image',      # the `Document` key `model` should ingest to create embedding
        select=db[upstream_listener.outputs].select(),       # a `Select` query telling which data to search over
        model=model,         # a `_Predictor` how to convert data to embeddings
        identifier=f'{model.identifier}-listener'
    ),
    compatible_listener=Listener(
        key='text',      # the `Document` key `model` should ingest to create embedding
        model=compatible_model,         # a `_Predictor` how to convert data to embeddings
        select=None,
        identifier='compatible-listener',
    ),
    upstream=[upstream_listener],
)
```


```python
db.apply(vector_index)
```


```python
from superduper import Application

app = Application(
    'video-search',
    components=[
        upstream_listener,
        vector_index,
    ]
)
```


```python
db.apply(app)
```

## Perform a vector search

We can perform the vector searches using text description:


```python
from superduper import Document
item = Document({'text': "A single red and a blue player battle for the ball"})
```


```python
from superduper import Document
item = Document({'text': "Some monkeys playing"})
```

Once we have this search target, we can execute a search as follows.


```python
select = db[upstream_listener.outputs].like(item, vector_index='my-vector-index', n=5).select()
results = list(db.execute(select))
```

## Visualize Results


```python
from IPython.display import display
for result in results:
    display(Document(result.unpack())[upstream_listener.outputs + '.image'])
```

## Check the system stays updated

You can add new data; once the data is added, all related models will perform calculations according to the underlying constructed model and listener, simultaneously updating the vector index to ensure that each query uses the latest data.


```python
new_datas = [{'x': data[-1]}]
ids = db['docs'].insert(new_datas).execute()
```


```python
from superduper import Template

t = Template('video-search-template', template=app, substitutions={'docs': 'content_table'})
```


```python
t.export('.')
```
