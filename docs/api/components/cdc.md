**`superduper.components.cdc`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/cdc.py)

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
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     cdc_table: str = <property object at 0x10489fb50>) -> None
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
| cdc_table | Table which fires the triggers. |

Trigger a ion when a condition is met.

***Note that this feature deploys on superduper.io Enterprise.***

