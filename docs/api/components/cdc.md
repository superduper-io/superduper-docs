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
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     cdc_table: str = <property object at 0x126b1c950>) -> None
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
| cdc_table | Table which fires the triggers. |

Trigger actions when new data arrives in a table.

