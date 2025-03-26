**`superduper.components.table`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/table.py)

## `Table` 

```python
Table(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     fields: Optional[Dict] = None,
     primary_id: str = 'id',
     data: superduper.components.component.Component | None = None,
     path: str | None = None,
     component: bool = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| fields | The schema of the table |
| primary_id | The primary id of the table |
| data | Data to insert post creation |
| path | The path to the class |
| component | Whether the table is a component |

A component that represents a table in a database.

