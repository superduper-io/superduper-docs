**`superduper.base.artifacts`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/artifacts.py)

## `ArtifactStore` 

```python
ArtifactStore(self,
     conn: Any,
     name: Optional[str] = None,
     flavour: Optional[str] = None)
```
| Parameter | Description |
|-----------|-------------|
| conn | connection to the meta-data store |
| name | Name to identify DB using the connection |
| flavour | Flavour of the artifact store |

Abstraction for storing large artifacts separately from primary data.

## `FileSystemArtifactStore` 

```python
FileSystemArtifactStore(self,
     conn: Any,
     name: Optional[str] = None,
     flavour: Optional[str] = None,
     files: str = '',
     blobs: str = '')
```
| Parameter | Description |
|-----------|-------------|
| conn | Root directory of the artifact store. |
| name | Name of the artifact store. |
| flavour | Flavour of the artifact store. |
| files | Subdirectory to use for files. |
| blobs | Subdirectory to use for blobs. |

Abstraction for storing large artifacts separately from primary data.

