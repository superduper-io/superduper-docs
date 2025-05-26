**`superduper.components.component`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/component.py)

## `ensure_setup` 

```python
ensure_setup(func)
```
| Parameter | Description |
|-----------|-------------|
| func | Decorator function. |

Decorator to ensure that the model is initialized before calling the function.

## `propagate_failure` 

```python
propagate_failure(f)
```
| Parameter | Description |
|-----------|-------------|
| f | Function to decorate. |

Propagate failure decorator.

## `Component` 

```python
Component(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |

Base class for all components in superduper.io.

Class to represent superduper.io serializable entities
that can be saved into a database.

:param db: Datalayer instance.

