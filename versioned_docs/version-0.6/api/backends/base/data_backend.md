**`superduper.backends.base.data_backend`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/backends/base/data_backend.py)

## `BaseDataBackend` 

```python
BaseDataBackend(self,
     uri: str,
     plugin: Any,
     flavour: Optional[str] = None)
```
| Parameter | Description |
|-----------|-------------|
| uri | URI to the databackend database. |
| plugin | Plugin implementing the databackend. |
| flavour | Flavour of the databackend. |

Base data backend for the database.

## `DataBackendProxy` 

```python
DataBackendProxy(self,
     backend)
```
| Parameter | Description |
|-----------|-------------|
| backend | Instance of `BaseDataBackend`. |

Proxy class to DataBackend which acts as middleware for performing fallbacks.

