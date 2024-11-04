**`superduper.components.table`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/table.py)

## `Table` 

```python
Table(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     schema: superduper.components.schema.Schema,
     primary_id: str = 'id',
     data: Union[List[Dict],
     ForwardRef('Dataset'),
     ForwardRef('RemoteData'),
     NoneType] = None) -> None
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
| schema | The schema of the table |
| primary_id | The primary id of the table |
| data | Data to insert post creation |

A component that represents a table in a database.

