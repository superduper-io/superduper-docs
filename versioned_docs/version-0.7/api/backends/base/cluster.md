**`superduper.backends.base.cluster`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/backends/base/cluster.py)

## `Cluster` 

```python
Cluster(self,
     *,
     scheduler: superduper.backends.base.scheduler.BaseScheduler,
     vector_search: superduper.backends.base.vector_search.VectorSearchBackend,
     compute: superduper.backends.base.compute.ComputeBackend,
     cdc: superduper.backends.base.cdc.CDCBackend,
     crontab: superduper.backends.base.crontab.CrontabBackend) -> None
```
| Parameter | Description |
|-----------|-------------|
| scheduler | The scheduler backend. |
| vector_search | The vector search backend. |
| compute | The compute backend. |
| cdc | The change data capture backend. |
| crontab | The crontab backend. |

Cluster object for managing the backend.

