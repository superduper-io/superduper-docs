**`superduper.components.component`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/component.py)

## `build_uuid` 

```python
build_uuid()
```
Build UUID.

## `ensure_initialized` 

```python
ensure_initialized(func)
```
| Parameter | Description |
|-----------|-------------|
| func | Decorator function. |

Decorator to ensure that the model is initialized before calling the function.

## `Component` 

```python
Component(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |

Base class for all components in superduper.io.

Class to represent superduper.io serializable entities
that can be saved into a database.

