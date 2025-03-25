**`superduper.misc.schema`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/misc/schema.py)

## `process` 

```python
process(annotation)
```
| Parameter | Description |
|-----------|-------------|
| annotation | The annotation to process. |

Process an annotation with a crude mapping to workable superduper types.

Output is expected as a tuple of base type and iterable over that type.

```python
import typing as t
from superduper import Model, Component
process(Model)
# (superduper.components.model.Model, None)
process(Model | None)
# (superduper.components.model.Model, None)
process(t.List[str])
# (str, list)
process(t.Dict[str, Component])
# (superduper.components.component.Component, dict)
process(t.Dict[str, MyClass])
# (my_path.to_module.MyClass, dict)
```

## `gather_mro_globals` 

```python
gather_mro_globals(cls)
```
| Parameter | Description |
|-----------|-------------|
| cls | The class to gather the MRO globals from. |

Return a merged dictionary of the module global from the MRO of `cls`.

## `get_schema` 

```python
get_schema(cls)
```
| Parameter | Description |
|-----------|-------------|
| cls | The class to get a schema for. |

Get a schema for a superduper class.

