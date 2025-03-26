# Superduper encoding

Any `Superduper` class which derives from `superduper.base.Base` (including `superduper.Component`) is serializable 
in a database friendly way.

Here is a representative example of how this works for all such classes:


```python
from superduper import Component
import typing as t
import pprint

class MyClass(Component):
    a: str
    b: int 
    c: t.Dict
    d: t.Callable
    e: Component | None = None


my_instance_1 = MyClass('my_class', a='test', b=2, c={'testing': '123'}, d=lambda x: x + 1)
my_instance_2 = MyClass('my_class', a='test', b=2, c={'testing': '123'}, d=lambda x: x + 1, e=my_instance_1)

r = my_instance_2.encode()
print(r)

# {'identifier': 'my_class',
#  'upstream': None,
#  'a': 'test',
#  'b': 2,
#  'c': {'testing': '123'},
#  'd': '&:blob:c6fb8b5d832ad2dc83c2eb7c4ac8ab5899414929125a9f63cd06a800deaa1edf',
#  'e': '?MyClass:my_class',
#  '_path': '__main__.MyClass',
#  'version': None,
#  'status': None,
#  'uuid': 'dbe131726b2b2fb896eb832b3fde10df',
#  '_builds': {'MyClass:my_class': {'upstream': None,
#    'a': 'test',
#    'b': 2,
#    'c': {'testing': '123'},
#    'd': '&:blob:75e739227d94585271ae83c710bfdcf43993755d7be9d08cf4462b8a1bff9242',
#    'e': None,
#    '_path': '__main__.MyClass',
#    'version': None,
#    'status': None,
#    'uuid': 'dbe131726b2b2fb896eb832b3fde10df'}},
#  '_blobs': {'c6fb8b5d832ad2dc83c2eb7c4ac8ab5899414929125a9f63cd06a800deaa1edf': b'\x80\x04\x95\x04\x01\x00\x00\x00\x00\x00\x00\x8c\ndill._dill\x94\x8c\x10_create_function\x94\x93\x94(h\x00\x8c\x0c_create_code\x94\x93\x94(C\x00\x94K\x01K\x00K\x00K\x01K\x02KCC\x08|\x00d\x01\x17\x00S\x00\x94NK\x01\x86\x94)\x8c\x01x\x94\x85\x94\x8cN/var/folders/3h/p6qzszds1c7gtbmt_2qq0tvm0000gn/T/ipykernel_10359/1592532502.py\x94\x8c\x08<lambda>\x94K\x0eC\x02\x08\x00\x94))t\x94R\x94}\x94\x8c\x08__name__\x94\x8c\x08__main__\x94sh\x0bNNt\x94R\x94}\x94}\x94\x8c\x0f__annotations__\x94}\x94s\x86\x94b.',
#   '75e739227d94585271ae83c710bfdcf43993755d7be9d08cf4462b8a1bff9242': b'\x80\x04\x95\x04\x01\x00\x00\x00\x00\x00\x00\x8c\ndill._dill\x94\x8c\x10_create_function\x94\x93\x94(h\x00\x8c\x0c_create_code\x94\x93\x94(C\x00\x94K\x01K\x00K\x00K\x01K\x02KCC\x08|\x00d\x01\x17\x00S\x00\x94NK\x01\x86\x94)\x8c\x01x\x94\x85\x94\x8cN/var/folders/3h/p6qzszds1c7gtbmt_2qq0tvm0000gn/T/ipykernel_10359/1592532502.py\x94\x8c\x08<lambda>\x94K\rC\x02\x08\x00\x94))t\x94R\x94}\x94\x8c\x08__name__\x94\x8c\x08__main__\x94sh\x0bNNt\x94R\x94}\x94}\x94\x8c\x0f__annotations__\x94}\x94s\x86\x94b.'},
#  '_files': {}}
```

In this example you can see that `superduper` serializes the two nested components using their parameters and class path, and 
unwraps the nested structure into a flat structure. Items which are not serializable using JSON are serialized as `bytes` 
and saved separately in the output.

The developer can control this behaviour using the parameter annotations. To check the schema which `superduper` infers, developers can use:


```python
print(MyClass.class_schema)

# identifier |   upstream    |  a  |  b  |  c   |  d   |       e       | version | status
# -----------+---------------+-----+-----+------+------+---------------+---------+-------
#    str     | ComponentList | str | int | JSON | Dill | ComponentType |   int   |  str  
```
