**`superduper.base.datalayer`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/datalayer.py)

## `Datalayer` 

```python
Datalayer(self,
     databackend: superduper.backends.base.data_backend.BaseDataBackend,
     artifact_store: superduper.base.artifacts.ArtifactStore,
     cluster: superduper.backends.base.cluster.Cluster)
```
| Parameter | Description |
|-----------|-------------|
| databackend | Object containing connection to Datastore. |
| artifact_store | Object containing connection to Artifactstore. |
| cluster | Cluster object containing connections to infrastructure. |

Base connector.

