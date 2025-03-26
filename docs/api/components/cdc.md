**`superduper.components.cdc`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/cdc.py)

## `build_streaming_graph` 

```python
build_streaming_graph(table,
     db: 'Datalayer')
```
| Parameter | Description |
|-----------|-------------|
| table | The table to build the graph from. |
| db | Datalayer instance |

Build a streaming graph from a table.

The graph has as each node a component which
ingests from the table, or ingests from
a component which ingests from the table (etc.).

## `CDC` 

```python
CDC(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     cdc_table: str = <property object at 0x11c42b3d0>) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| cdc_table | Table which fires the triggers. |

Trigger actions when new data arrives in a table.

