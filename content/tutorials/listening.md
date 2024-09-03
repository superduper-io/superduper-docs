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
!curl -O https://superduperdb-public-demo.s3.amazonaws.com/images.zip && unzip images.zip
from PIL import Image
import os

data = [f'images/{x}' for x in os.listdir('./images') if x.endswith('png')]
data = [{'img': Image.open(path)} for path in data]
```

Now that we've prepared these records we can insert this data "directly" into the database with 
a standard insert statement. (Notice however the difference from `pymongo` with the `.execute()` call.)
The same pattern may be applied to other database types.


```python
from superduper import superduper, Document

db = superduper('mongomock://')

db['images'].insert_many([Document(r) for r in data[:-1]]).execute()
```

We can verify that the images are correctly saved by retrieved a single record:


```python
r = db['images'].find_one().execute()
r
```

The contents of the `Document` may be accessed by calling `.unpack()`. You can see that the images were saved and retrieved correctly.


```python
r.unpack()['img']
```

We now build a `torch` model for text-2-image similarity using the `clip` library. In order to 
save the outputs correctly in the system, we add the `tensor` datatype to the model:


```python
import clip
import torch
from superduper.ext.torch import TorchModel, tensor


model, preprocess = clip.load("ViT-B/32", "cpu")

class ImageModel(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.model = model

    def forward(self, image_tensors):
        return self.model.encode_image(image_tensors)


dt = tensor(dtype='float', shape=(512,))


image_model = TorchModel(
    identifier='clip_image',
    object=ImageModel(),
    preprocess=preprocess,
    datatype=dt,
    loader_kwargs={'batch_size': 5},
)
```

We can verify that this model gives us the correct outputs on the added data with the `.predict` method:


```python
image_model.predict(data[0]['img'])
```

Now we'd like to set up this model to compute outputs on the `'img'` key of each record. 
To do that we create a `Listener` (see [here](../apply_api/listener) for more information) which 
"listens" for incoming and existing data, and computes outputs on that data.

When new data is inserted, the model automatically will create outputs on that data. This is a very handy 
feature for productionizing AI and ML, since a data deployment needs to be keep up-to-date as far as possible.


```python
listener = image_model.to_listener(
    select=db['images'].find(),
    key='img',
    identifier='image_predictions',
)

_ = db.apply(listener)
```

We can verify that the outputs are correctly inserted into the documents with this query. 
The outputs are saved in the `listener.outputs` field:


```python
list(listener.outputs_select.limit(1).execute())[0][listener.outputs].unpack()
```

Downstream of this first model, we now can add another smaller model, to classify images with configurable terms. 
Since the dataset is concerned with cats and dogs we create 2 downstream models classifying the images in 2 different ways.


```python
from superduper import ObjectModel


class Comparer:
    def __init__(self, words, text_features):
        self.targets = {w: text_features[i] for i, w in enumerate(words)}
        self.lookup = list(self.targets.keys())
        self.matrix = torch.stack(list(self.targets.values()))

    def __call__(self, vector):
        best = (self.matrix @ vector).topk(1)[1].item()
        return self.lookup[best]


cats_vs_dogs = ObjectModel(
    'cats_vs_dogs',
    object=Comparer(['cat', 'dog'], model.encode_text(clip.tokenize(['cat', 'dog']))),
).to_listener(
    select=db['images'].find(),
    key=listener.outputs,
)

            
felines_vs_canines = ObjectModel(
    'felines_vs_canines',
    object=Comparer(['feline', 'canine'], model.encode_text(clip.tokenize(['feline', 'canine']))),
).to_listener(
    select=db['images'].find(),
    key=listener.outputs,
)


db.apply(cats_vs_dogs)
db.apply(felines_vs_canines)
```

We can verify that both downstream models have written their outputs to the database by querying a document:


```python
r = db['images'].find_one().execute()

print(r[cats_vs_dogs.outputs])
print(r[felines_vs_canines.outputs])
```

Let's check that the predictions make sense for the inserted images:


```python
db['images'].find_one({cats_vs_dogs.outputs: 'cat'}).execute()['img']
```


```python
db['images'].find_one({felines_vs_canines.outputs: 'feline'}).execute()['img']
```


```python
db['images'].find_one({cats_vs_dogs.outputs: 'dog'}).execute()['img']
```


```python
db['images'].find_one({felines_vs_canines.outputs: 'canine'}).execute()['img']
```

Now that we have installed the models using `Listener`, we can insert new data. This 
data should be automatically processed by the installed models:


```python
db['images'].insert_one(Document({**data[-1], 'new': True})).execute()
```

We can verify this by querying the data again:


```python
r = db['images'].find_one({'new': True}).execute().unpack()
r['img']
```

You see here that the models have been called in the correct order on the newly added data and the outputs saved 
to the new record:


```python
r['_outputs']
```
