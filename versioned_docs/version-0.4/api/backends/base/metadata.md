**`superduper.backends.base.metadata`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/backends/base/metadata.py)

## `MetaDataStore` 

```python
MetaDataStore(self,
     uri: Optional[str] = None,
     flavour: Optional[str] = None,
     callback: Optional[Callable] = None)
```
| Parameter | Description |
|-----------|-------------|
| uri | URI to the databackend database. |
| flavour | Flavour of the databackend. |
| callback | Optional callback to create connection. |

Abstraction for storing meta-data separately from primary data.

## `MetaDataStoreProxy` 

```python
MetaDataStoreProxy(self,
     backend)
```
| Parameter | Description |
|-----------|-------------|
| backend | Instance of `MetaDataStore`. |

Proxy class to DataBackend which acts as middleware for performing fallbacks.

## `NonExistentMetadataError` 

```python
NonExistentMetadataError(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for `Exception` |
| kwargs | **kwargs for `Exception` |

NonExistentMetadataError.

