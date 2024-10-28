**`superduper.backends.base.query`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/backends/base/query.py)

## `applies_to` 

```python
applies_to(*flavours)
```
| Parameter | Description |
|-----------|-------------|
| flavours | The flavours to check against. |

Decorator to check if the query matches the accepted flavours.

## `parse_query` 

```python
parse_query(query: Union[str,
     list],
     builder_cls: Optional[Type[superduper.backends.base.query.Query]] = None,
     documents: Sequence[Any] = (),
     db: Optional[ForwardRef('Datalayer')] = None)
```
| Parameter | Description |
|-----------|-------------|
| query | The query to parse. |
| builder_cls | The class to use to build the query. |
| documents | The documents to query. |
| db | The datalayer to use to execute the query. |

Parse a string query into a query object.

## `Query` 

```python
Query(self,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     identifier: str = '',
     parts: None = <factory>,
     table: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| table | The table to use. |
| parts | The parts of the query. |

A query object.

This base class is used to create a query object that can be executed
in the datalayer.

## `Model` 

```python
Model(self,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     identifier: str = '',
     parts: None = <factory>,
     table: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| table | The table to use. |
| parts | The parts of the query. |

A model helper class for create a query to predict.

