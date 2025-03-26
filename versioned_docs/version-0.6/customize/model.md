# Bring your own models

There are many models pre-integrated into Superduper, available by the ever [growing ecosystem of plugins](../ai_plugins).
When these integrations don't meet developers' needs, it is straightforward to 
build `Model` implementations and instances:

1. Decorate your own Python functions and classes with `ObjectModel`
2. Write your own `Model` sub-classes

## Wrap your Python functions and classes with `ObjectModel`

This serializes a Python object or class:

```python
from superduper import ObjectModel

def my_model(x, y):
    return x + y

my_model = ObjectModel('my_model', object=my_model, datatype='int')

assert my_model.predict(2, 4) == 6
```

## Create your own `Model` subclasses

Developers may create their own `Model` sub-classes, and deploy these directly to `superduper`.
The key methods the developers need to create are:

- `predict`
- (optional) `predict_batches`, to speed up batching

### Minimal example with `.predict`

Here is a simple sub-class of `Model`:

```python
from superduper import Model

class CustomModel(Model):
    my_argument: int = 1

    def predict(self, x, y):
        return x + y + self.my_argument
```

### Including datablobs which can't be converted to JSON

If your model contains large data-artifacts or non-JSON-able content, then 
these items should be labelled with `typing.Any` so that `superduper` knows
that they are not supported as JSON.

On saving, this will allow Superduper to encode their values and save the result
in `db.artifact_store`.

Here is an example which includes a `numpy.array`:

```python
import numpy as np
from superduper.ext.numpy import array

class AnotherModel(Model):
    my_argument: int = 1
    my_array: t.Any

    def predict(self, x, y):
        return x + y + self.my_argument + self.my_array

my_array = numpy.random.randn(100000, 20)

m = AnotherModel(
    my_argument=2,
    my_array=my_array,
)
```

When `db.apply` is called, `m.my_array` will be converted to `bytes`
and a reference to these `bytes` will be saved in the `db.databackend`.
