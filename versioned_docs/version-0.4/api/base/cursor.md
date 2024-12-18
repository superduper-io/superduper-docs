**`superduper.base.cursor`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/base/cursor.py)

## `SelectResult` 

```python
SelectResult(self,
     raw_cursor: Any,
     id_field: str,
     db: Optional[ForwardRef('Datalayer')] = None,
     scores: Optional[Dict[str,
     float]] = None,
     schema: Optional[ForwardRef('Schema')] = None,
     process_func: Optional[Callable] = None,
     _it: int = 0) -> None
```
| Parameter | Description |
|-----------|-------------|
| raw_cursor | the cursor to wrap |
| id_field | the field to use as the document id |
| db | the datalayer to use to decode the documents |
| scores | a dict of scores to add to the documents |
| schema | the schema to use to decode the documents |
| _it | an iterator to keep track of the current position in the cursor, Default is 0. |
| process_func | a function to process the raw cursor output before |

A wrapper around a raw cursor that adds some extra functionality.

A cursor that wraps a cursor and returns ``Document`` wrapping
a dict including ``Encodable`` objects.

