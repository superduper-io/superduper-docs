**`superduper.components.schema`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/schema.py)

## `get_schema` 

```python
get_schema(db,
     schema: Union[superduper.components.schema.Schema,
     str]) -> Optional[superduper.components.schema.Schema]
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance. |
| schema | Schema to get. If a string, it will be loaded from the database. |

Handle schema caching and loading.

## `Schema` 

```python
Schema(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     fields: Mapping[str,
     superduper.components.datatype.DataType]) -> None
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
| fields | A mapping of field names to types or `Encoders` |

A component carrying the `DataType` of columns.

## `FieldType` 

```python
FieldType(self,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     identifier: Union[str,
     superduper.components.datatype.DataType]) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | The name of the data type. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |

Field type to represent the type of a field in a table.

This is a wrapper around native datatype

