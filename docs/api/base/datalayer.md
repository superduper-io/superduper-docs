**`superduper.base.datalayer`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/base/datalayer.py)

## `Datalayer` 

```python
Datalayer(self,
     databackend: superduper.backends.base.data_backend.BaseDataBackend,
     metadata: superduper.backends.base.metadata.MetaDataStore,
     artifact_store: superduper.backends.base.artifacts.ArtifactStore,
     cluster: superduper.backends.base.cluster.Cluster)
```
| Parameter | Description |
|-----------|-------------|
| databackend | Object containing connection to Datastore. |
| metadata | Object containing connection to Metadatastore. |
| artifact_store | Object containing connection to Artifactstore. |
| cluster | Cluster object containing connections to infrastructure. |

Base database connector for superduper.io.

