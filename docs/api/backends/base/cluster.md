**`superduper.backends.base.cluster`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/backends/base/cluster.py)

## `Cluster` 

```python
Cluster(self,
     *,
     compute: superduper.backends.base.compute.ComputeBackend,
     cache: superduper.backends.base.cache.Cache,
     queue: superduper.backends.base.queue.BaseQueuePublisher,
     vector_search: superduper.backends.base.vector_search.VectorSearchBackend,
     cdc: superduper.backends.base.cdc.CDCBackend,
     crontab: superduper.backends.base.crontab.CrontabBackend) -> None
```
| Parameter | Description |
|-----------|-------------|
| compute | The compute backend. |
| cache | The cache backend. |
| queue | The queue backend. |
| vector_search | The vector search backend. |
| cdc | The change data capture backend. |
| crontab | The crontab backend. |

Cluster object for managing the backend.

