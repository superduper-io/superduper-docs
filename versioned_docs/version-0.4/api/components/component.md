**`superduper.components.component`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/component.py)

## `ensure_initialized` 

```python
ensure_initialized(func)
```
| Parameter | Description |
|-----------|-------------|
| func | Decorator function. |

Decorator to ensure that the model is initialized before calling the function.

## `getdeepattr` 

```python
getdeepattr(obj,
     attr)
```
| Parameter | Description |
|-----------|-------------|
| obj | Object. |
| attr | Attribute. |

Get nested attribute with dot notation.

## `Component` 

```python
Component(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| artifacts | A dictionary of artifacts paths and `DataType` objects |
| upstream | A list of upstream components |
| plugins | A list of plugins to be used in the component. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |

Base class for all components in superduper.io.

Class to represent superduper.io serializable entities
that can be saved into a database.

