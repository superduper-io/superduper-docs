**`superduper.components.cdc`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/cdc.py)

## `build_streaming_graph` 

```python
build_streaming_graph(table,
     db: 'Datalayer') -> networkx.classes.digraph.DiGraph
```
| Parameter | Description |
|-----------|-------------|
| table | The table to build the graph from. |
| db | Datalayer instance |

Build a streaming graph from a table.

The graph has as each node a component which
ingests from the table, or ingests from
a component which ingests from the table (etc.).

This function constructs a directed graph representing the data flow
between components connected to the specified table.

## `CDC` 

```python
CDC(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     cdc_table: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| cdc_table | Table which fires the triggers. |

Trigger actions when new data arrives in a table.

