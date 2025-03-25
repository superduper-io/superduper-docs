**`superduper.base.apply`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/apply.py)

## `apply` 

```python
apply(db: 'Datalayer',
     object: Union[ForwardRef('Component'),
     Sequence[Any],
     Any],
     force: bool | None = None,
     wait: bool = False) -> 'Component'
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance |
| object | Object to be stored. |
| force | List of jobs which should execute before component initialization begins. |
| wait | Blocks execution till create events finish. |

Add functionality in the form of components.

Components are stored in the configured artifact store
and linked to the primary database through metadata.

