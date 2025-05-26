**`superduper.base.query`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/query.py)

## `bind` 

```python
bind(f)
```
| Parameter | Description |
|-----------|-------------|
| f | The method to bind. |

Bind a method to a query object.

## `parse_query` 

```python
parse_query(query: Union[str,
     list],
     documents: Sequence[Any] = (),
     db: Optional[ForwardRef('Datalayer')] = None)
```
| Parameter | Description |
|-----------|-------------|
| query | The query to parse. |
| documents | The documents to query. |
| db | The datalayer to use to execute the query. |

Parse a string query into a query object.

## `route_db` 

```python
route_db(db: 'Datalayer',
     table) -> 'Datalayer'
```
| Parameter | Description |
|-----------|-------------|
| db | The datalayer to use. |
| table | The table to use. |

Route the database to the correct datalayer.

## `Query` 

```python
Query(self,
     *,
     parts: Sequence[Union[superduper.base.query.QueryPart,
     str]] = <factory>,
     table: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| table | The table to use. |
| parts | The parts of the query. |
| db | The `Datalayer` instance to use. |

A query object.

This base class is used to create a query object that can be executed
in the datalayer.

## `Decomposition` 

```python
Decomposition(self,
     table: str,
     db: 'Datalayer',
     col: str | None = None,
     insert: superduper.base.query.QueryPart | None = None,
     pre_like: superduper.base.query.QueryPart | None = None,
     post_like: superduper.base.query.QueryPart | None = None,
     filter: superduper.base.query.QueryPart | None = None,
     select: superduper.base.query.QueryPart | None = None,
     get: superduper.base.query.QueryPart | None = None,
     limit: superduper.base.query.QueryPart | None = None,
     outputs: superduper.base.query.QueryPart | None = None,
     op: superduper.base.query.Op | None = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| table | The table to use. |
| db | The datalayer to use. |
| col | The column to use. |
| insert | The insert part of the query. |
| pre_like | The pre-like part of the query. |
| post_like | The post-like part of the query. |
| filter | The filter part of the query. |
| select | The select part of the query. |
| get | The get part of the query. |
| limit | The limit part of the query. |
| outputs | The outputs part of the query. |
| op | The operation part of the query. |

Decompose a query into its parts.

## `Op` 

```python
Op(self,
     name: str,
     args: Sequence,
     kwargs: Dict,
     symbol: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| name | The name of the method. |
| args | The arguments of the method. |
| kwargs | The keyword arguments of the method. |
| symbol | The symbol of the operation. |

An operation part of a query.

## `QueryPart` 

```python
QueryPart(self,
     name: str,
     args: Sequence,
     kwargs: Dict) -> None
```
| Parameter | Description |
|-----------|-------------|
| name | The name of the method. |
| args | The arguments of the method. |
| kwargs | The keyword arguments of the method. |

A method part of a query.

