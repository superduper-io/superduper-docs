# Multimodal vector search - Video


```python
APPLY = True
TABLE_NAME = 'docs'
```

<!-- TABS -->
## Connect to superduper


```python
from superduper import superduper

db = superduper('mongomock://test_db')
```

<!-- TABS -->
## Get useful sample data


```python
def getter():
    import os
    import subprocess
    subprocess.run(['rm', 'videos.zip'])
    subprocess.run(['rm'
                    , '-rf', 'videos'])
    subprocess.run(['curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/videos.zip'])
    subprocess.run(['unzip', 'videos.zip'])
    subprocess.run(['rm', 'videos.zip'])
    data = [{'x': f'videos/{x}'} for x in os.listdir('./videos')]
    return data[:2]
```


```python
if APPLY:
    data = getter()
```

<!-- TABS -->
## Create datatype

SuperduperDB supports automatic data conversion, so users don’t need to worry about the compatibility of different data formats (`PIL.Image`, `numpy.array`, `pandas.DataFrame`, etc.) with the database.

It also supports custom data conversion methods for transforming data, such as defining the following Datatype.

<!-- TABS -->
## Setup tables or collections


```python
from superduper.components.table import Table
from superduper import Schema

table = Table(TABLE_NAME, fields={'x': 'file'})

if APPLY:
    db.apply(table, force=True)
```


```python
if APPLY:
    db[TABLE_NAME].insert(data)
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
```


```python
import cv2
import tqdm
from PIL import Image
from superduper import Schema, ObjectModel
from superduper.base.datatype import FileItem
from superduper.misc.importing import isreallyinstance


def chunker(video_file):
    # Set the sampling frequency for frames

    if isreallyinstance(video_file, FileItem):
        video_file = video_file.unpack()
    sample_freq = 100
    
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


chunker = ObjectModel(
    'chunker', 
    object=chunker,
    datatype='image=superduper_pillow.pil_image|current_timestamp=int',
)
```

Now we apply this chunker to the data by wrapping the chunker in `Listener`:


```python
from superduper import Listener

upstream_listener = Listener(
    model=chunker,
    select=db['docs'],
    key='x',
    identifier='chunker',
    flatten=True,
    upstream=[table],
)
```


```python
db.remove('Listener', 'chunker', force=True)
```


```python
if APPLY:
    db.apply(upstream_listener, force=True)
```

# Build multimodal embedding models

We define the output data type of a model as a vector for vector transformation.

Then define two models, one for text embedding and one for image embedding.


```python
import clip
import torch

from superduper import Model


class TextModel(Model):
    model: str = 'Vit-B/32'
    device: str = 'cpu'
    
    def init(self):
        self.vit = clip.load("ViT-B/32", device='cpu')[0]
        self.vit.to(self.device)

    def predict(self, text):
        preprocessed = clip.tokenize(text)
        activations = self.vit.encode_text(preprocessed)[0]
        return activations.detach().numpy()


class ImageModel(Model):
    model: str = 'Vit-B/32'
    device: str = 'cpu'
    batch_size: int = 10

    def init(self):
        tmp = clip.load("ViT-B/32", device='cpu')
        self.visual_model = tmp[0].visual
        self.preprocess = tmp[1]

    def predict(self, image):
        preprocessed = self.preprocess(image)[None, :]
        activations = self.visual_model(preprocessed)[0]
        return activations.detach().numpy()

    def predict_batches(self, images):
        out = []
        for i in range(0, len(images), self.batch_size):
            sub = images[i: i + self.batch_size]
            preprocessed = [self.preprocess(img) for img in sub]
            activations = self.visual_model(torch.stack(preprocessed, 0))
            out.extend([x.detach().numpy() for x in activations])
        return out
```


```python
text_model = TextModel('text', datatype='vector[float:512]')
image_model = ImageModel('image', datatype='vector[float:512]')
```

Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index.

## Create vector-index


```python
from superduper import VectorIndex, Listener

vector_index = VectorIndex(
    'my-vector-index',
    indexing_listener=Listener(
        key=upstream_listener.outputs + '.image',
        select=db[upstream_listener.outputs].select(),
        model=image_model,
        identifier=f'{text_model.identifier}-listener'
    ),
    compatible_listener=Listener(
        key='text',
        model=text_model,
        select=None,
        identifier='compatible-listener',
    ),
    upstream=[upstream_listener],
)
```


```python
if APPLY:
    db.apply(vector_index)
```


```python
db.show()
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
if APPLY:
    db.apply(app)
```

## Perform a vector search

We can perform the vector searches using text description:


```python
from superduper import Document
query = "Monkeys playing"
```


```python
from superduper import Document
query = "Spaceship on the moon"
```

Once we have this search target, we can execute a search as follows.

## Visualize Results


```python
if APPLY:
    from IPython.display import display
    select = db[upstream_listener.outputs].like({'text': query}, vector_index='my-vector-index', n=3).select()

    for result in select.execute():
        display(result[upstream_listener.outputs + '.image'])
```


```python
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData

t = Template(
    'multimodal_video_search', 
    template=app,
    substitutions={'docs': 'table_name'},
    default_tables=[Table(
        'sample_multimodal_video_search',
        schema=Schema(
            'sample_multimodal_video_search/schema',
            fields={'x': 'file'},
        ),
        data=RemoteData(
            'sample_videos',
            getter=getter,
        )
    )],
    types={
        'table_name': {
            'type': 'str',
            'default': 'sample_multimodal_video_search',
        }
    },
    db=db,
)
```


```python
t.export('.')
```
