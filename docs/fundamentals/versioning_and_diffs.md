# Versioning and diffs

`superduper` has a robust versioning and lineage system, to track the versions and changes of all components
installed with `superduper`. This works using cryptographic techniques borrowed from blockchain and source version control.

Here is an illustrative example to show you how this works:


```python
from superduper import Component
import typing as t
import pprint

class MyClass(Component):
    breaks = ()
    a: str
    b: int 
    c: t.Dict
    d: t.Callable | None = None
    e: Component | None = None

my_instance_1 = MyClass('my_class', a='test', b=2, c={'testing': '123'}, d=lambda x: x + 1)
my_instance_2 = MyClass('my_class', a='test', b=2, c={'testing': '456'}, d=lambda x: x + 2)
```

We have three key methods which `superduper` leverages under the hood:


| Method | Description |
| --- | --- |
| `Component.diff` | Determines which parameters of the `Component` have changed |
| `Component.hash` | Determines whether 2 `Component` instances are the same by parameter value |
| `Component.uuid` | Determines whether 2 `Component` instances are the same by breaking changes; used as primary-id in storage. |

`superduper` calls these methods when `db.apply` is executed, and used to determine whether to replace or update data, or to create a 
new version of the `Component` and execute its initialization jobs.

The `.diff` method returns in which parameters the 2 `Component` instances are different:


```python
print(my_instance_1.diff(my_instance_2))
# ['c', 'd']
```

The cryptographic hash `.hash` determines whether the two components are equal. In this case there are 2 parameters 
which are different, so that the hashes are distinct:


```python
print(my_instance_1.hash == my_instance_2.hash)
# False
```

The cryptographic hash `.uuid` determines whether the two components are equal when only considering breaking changes. 
You can see that, since this component has no breaking changes (`.breaks = ()`), the hashes are identical:


```python
print(my_instance_1.uuid)
# dbe131726b2b2fb896eb832b3fde10df

print(my_instance_2.uuid == my_instance_1.uuid)
# True
```

Now we create a new component, which has breaking changes:


```python
from superduper import Component
import typing as t
import pprint

class BreakingClass(Component):
    breaks = ('c', 'e')
    
    a: str
    b: int 
    c: t.Dict
    d: t.Callable | None = None
    e: Component | None = None

my_breakable_1 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, d=lambda x: x + 1)
my_breakable_2 = BreakingClass('my_class', a='test', b=2, c={'testing': '456'}, d=lambda x: x + 2)
```

In this case, you can see that the parameter `c` differs, so in this case the hashes differ:


```python
print(my_breakable_1.uuid == my_breakable_2.uuid)
# False
```

This also works recursively, so that breaking changes inside nested components propagate upwards:


```python
my_breakable_3 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_breakable_1)
my_breakable_4 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_breakable_2)
```


```python
print(my_breakable_3.diff(my_breakable_4))
# ['e']
```

However, if the nested component contains only non-breaking changes, this is respected by the `.uuid` hash:


```python
my_breakable_5 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_instance_1)
my_breakable_6 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_instance_2)
```


```python
my_breakable_5.uuid == my_breakable_6.uuid

# True
```
