**`superduper.misc.retry`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/misc/retry.py)

## `db_retry` 

```python
db_retry(connector='databackend')
```
| Parameter | Description |
|-----------|-------------|
| connector | Connector of the datalayer instance. |

Helper method to retry methods with database calls.

## `Retry` 

```python
Retry(self,
     exception_types: Union[Type[BaseException],
     Tuple[Type[BaseException],
     ...]],
     cfg: Optional[superduper.base.config.Retry] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| exception_types | The exception types to retry on. |
| cfg | The retry config. If None, uses the default config. |

Retry a function until it succeeds.

This is a thin wrapper around the tenacity retry library, using our configs.

