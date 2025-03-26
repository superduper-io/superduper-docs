**`superduper.components.cron_job`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/cron_job.py)

## `CronJob` 

```python
CronJob(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     schedule: str = '0 0 * * *') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| schedule | Schedule in cron format. |

Run a job on a schedule.

***Note that this feature deploys on superduper.io Enterprise.***

## `FunctionCronJob` 

```python
FunctionCronJob(self,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     identifier: str = '',
     schedule: str = '0 0 * * *',
     function: Callable) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| schedule | Schedule in cron format. |
| function | Callable to run |

Run a function on a schedule.

