# Listening for new data

:::note
In Superduper, AI models may be configured to listen for newly inserted data.
Outputs will be computed over that data and saved back to the data-backend.
:::

In this example we show how to configure 3 models to interact when new data is added.

1. A featurizing computer vision model (images `->` vectors).
1. 2 models evaluating image-2-text similarity to a set of key-words.

We use an open-source model "CLIP" which we install via `pip` directly from GitHub.
You can read more about installing requirements on our docs [here](../get_started/environment).


```python
!pip install git+https://github.com/openai/CLIP.git
```

We apply our setup to images from the 
[cats and dogs dataset](https://www.kaggle.com/c/dogs-vs-cats). We've prepared a subset especially 
for quick experimentation.


```python
# !curl -O https://superduperdb-public-demo.s3.amazonaws.com/images.zip && unzip images.zip
from PIL import Image
import os

data = [f'images/{x}' for x in os.listdir('./images') if x.endswith('png')]
data = [{'img': Image.open(path)} for path in data]
```

Now that we've prepared these records we can insert this data "directly" into the database with 
a standard insert statement. (Notice however the difference from `pymongo` with the `.execute()` call.)
The same pattern may be applied to other database types.


```python
from superduper import superduper, Document, Table

db = superduper('mongomock://')

table = Table('images', fields={'img': 'superduper_pillow.pil_image'})

db.apply(table, force=True)

_ = db['images'].insert(data[:-1])
```

We can verify that the images are correctly saved by retrieved a single record:


```python
r = db['images'].get()
r['img']
```

We now build a `torch` model for text-2-image similarity using the `clip` library. In order to 
save the outputs correctly in the system, we add the `tensor` datatype to the model:


```python
import clip
import hashlib
import torch
from superduper_torch import TorchModel, Tensor


model_name = "ViT-B/32"
model, preprocess = clip.load(model_name, "cpu")

class ImageModel(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.model = model

    def forward(self, image_tensors):
        return self.model.encode_image(image_tensors)

    def __hash__(self):
        return int(hashlib.sha256(model_name.encode()).hexdigest(), 16)


image_model = TorchModel(
    identifier='clip_image',
    object=ImageModel(),
    preprocess=preprocess,
    datatype='superduper_torch.Tensor[float32:512]',
    loader_kwargs={'batch_size': 5},
)
```

We can verify that this model gives us the correct outputs on the added data with the `.predict` method:

Now we'd like to set up this model to compute outputs on the `'img'` key of each record. 
To do that we create a `Listener` (see [here](../apply_api/listener) for more information) which 
"listens" for incoming and existing data, and computes outputs on that data.

When new data is inserted, the model automatically will create outputs on that data. This is a very handy 
feature for productionizing AI and ML, since a data deployment needs to be keep up-to-date as far as possible.


```python
from superduper import Listener

listener = Listener(
    'image_listener',
    model=image_model,
    select=db['images'],
    key='img',
)
```

Downstream of this first model, we now can add another smaller model, to classify images with configurable terms. 
Since the dataset is concerned with cats and dogs we create 2 downstream models classifying the images in 2 different ways.


```python
from superduper import ObjectModel
from superduper.misc.utils import hash_item


class Comparer:
    def __init__(self, words, text_features):
        self.targets = {w: text_features[i] for i, w in enumerate(words)}
        self.lookup = list(self.targets.keys())
        self.matrix = torch.stack(list(self.targets.values()))

    def __call__(self, vector):
        best = (self.matrix @ vector).topk(1)[1].item()
        return self.lookup[best]

    def __hash__(self):
        return int(hash_item(self.matrix.detach().numpy().tolist()), 16)


cats_vs_dogs = Listener(
    'cats_vs_dogs',
    model=ObjectModel(
        'cats_vs_dogs',
        object=Comparer(['cat', 'dog'], model.encode_text(clip.tokenize(['cat', 'dog']))),
    ),
    select=db[listener.outputs],
    key=listener.outputs,
    upstream=[listener],
)

            
felines_vs_canines = Listener(
    'felines_vs_canines',    
    model=ObjectModel(
        'felines_vs_canines',
        object=Comparer(['feline', 'canine'], model.encode_text(clip.tokenize(['feline', 'canine']))),
    ),
    select=db[listener.outputs],
    key=listener.outputs,
    upstream=[listener],
)
```


```python
from superduper import Application

application = Application(
    'animal_image_analysis',
    components=[
        listener,
        cats_vs_dogs,
        felines_vs_canines,
    ]
)

db.apply(application)
```

We can verify that both downstream models have written their outputs to the database by querying a document:


```python
r = db['images'].outputs(cats_vs_dogs.predict_id, felines_vs_canines.predict_id).get()

print(r[cats_vs_dogs.outputs])
print(r[felines_vs_canines.outputs])
r['img']
```


```python
inserted_id = db['images'].insert([data[-1]])[0]
```

We can verify this by querying the data again:


```python
r = db['images'].outputs(cats_vs_dogs.predict_id).get(_id=inserted_id)
r
```


```python
r['img']
```
