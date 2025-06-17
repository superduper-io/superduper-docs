**`superduper.base.apply`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/apply.py)

## `apply` 

```python
apply(db: 'Datalayer',
     object: Union[ForwardRef('Component'),
     Sequence[Any],
     Any],
     force: bool | None = None,
     wait: bool = False,
     jobs: bool = True,
     do_apply: bool = True)
```
| Parameter | Description |
|-----------|-------------|
| db | The Datalayer instance to use. |
| object | The component to apply. |
| force | Whether to force the application without confirmation. |
| wait | Whether to wait for the component to be created. |
| jobs | Whether to execute jobs after applying the component. |
| do_apply | Whether to actually apply the component or just return the plan. |

Apply a `superduper.Component`.

## `Plan` 

```python
Plan(self,
     events: List[Union[superduper.base.event.Event,
     ForwardRef('Job')]]) -> None
```
| Parameter | Description |
|-----------|-------------|
| events | A list of events to be executed. |

A deployment plan that contains a list of events to be executed.

This class is used to represent the deployment plan that will be executed
by the cluster scheduler.

