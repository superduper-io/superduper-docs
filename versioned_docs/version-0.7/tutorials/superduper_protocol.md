# Superduper-protocol


```python
from superduper import *
from superduper.base import Base

db = superduper('mongomock://test')
```


```python
import typing as t
from superduper.misc import typing as st


class MyClass(Component):
    a: str
    b: int
    c: t.Any
    d: Component | None = None
```


```python
MyClass?
```


```python
import PIL.Image

i = PIL.Image.open('../../../superduper-docs/static/img/architecture.png')
i
```


```python
mc = MyClass('my-class', a='test', b=1, c=i, d=MyClass('my-other-class', a='other', b=2, c=None, d=None))
```


```python
mc.dict()
```


```python
MyClass.class_schema
```


```python
mc.encode()
```


```python
mc.export('.')
```


```python
reloaded = Component.read('.')
```


```python
db.apply(mc)
```


```python
db.show('Table')
```


```python
import pandas

pandas.DataFrame(db['MyClass'].execute())
```


```python
t = db['MyClass']

t.filter(t['b'] >= 2).execute()
```


```python
db.show('MyClass', 'my-class')
```


```python
mc.b = 3
```


```python
db.apply(mc)
```
