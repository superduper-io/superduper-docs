# Custom serialization

In this tutorial, we demonstrate how developers can flexibily and portably define
their own classes in Superduper. These may be exported with `Component.export` 
and transported to other Superduper deployments with `db.apply`.

To make our lives difficult, we'll include a data blob in the model, which should be serialized with the 
exported class:

We'll define our own `Model` descendant, with a custom `.predict` method. 
We are free to define any of our own parameters to this class with a simple annotation in the header, since `Model` 
is a `dataclasses.dataclass`:


```python
from superduper import *
import typing as t


class NewModel(Model):
    a: int = 2
    b: t.Any

    def predict(self, x):
        return x * self.a
```

If we want `b` to be saved as a blob in the `db.artifact_store` we can simply
annotate this in the `artifacts=...` parameter, supplying the serializer we would like to use:


```python
m = NewModel('test-hg', a=2, b=data)
```

Now we can export the model:


```python
m.export('test-hg')
```


```python
!cat test-hg/component.json
```


```python
!ls test-hg/blobs/
```

The following cell works even after restarting the kernel.
That means the exported component is now completely portable!


```python
from superduper import *

c = Component.read('test-hg')

c.predict(2)
```
