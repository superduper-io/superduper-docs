**`superduper.base.schema`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/schema.py)

## `get_schema` 

```python
get_schema(db,
     schema: Union[superduper.base.schema.Schema,
     str]) -> Optional[superduper.base.schema.Schema]
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance. |
| schema | Schema to get. If a string, it will be loaded from the database. |

Handle schema caching and loading.

## `Schema` 

```python
Schema(self,
     fields: Dict[str,
     superduper.base.datatype.BaseDataType]) -> None
```
| Parameter | Description |
|-----------|-------------|
| fields | A mapping of field names to types or `Encoders` |

A component carrying the `DataType` of columns.

