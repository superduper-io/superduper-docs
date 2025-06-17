**`superduper.base.config`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/config.py)

## `BaseConfig` 

```python
BaseConfig(self) -> None
```
A base class for configuration dataclasses.

This class allows for easy updating of configuration dataclasses
with a dictionary of parameters.

## `Config` 

```python
Config(self,
     envs: dataclasses.InitVar[typing.Optional[typing.Dict[str,
     str]]] = None,
     secrets_volume: str = '/session/secrets',
     data_backend: str = 'mongodb://localhost:27017/test_db',
     artifact_store: str = 'filesystem://./artifact_store',
     metadata_store: str = '',
     cache: str | None = None,
     vector_search_engine: str = 'local',
     cluster_engine: str = 'local',
     retries: superduper.base.config.Retry = <factory>,
     downloads: superduper.base.config.Downloads = <factory>,
     log_level: superduper.base.config.LogLevel = <LogLevel.USER: 'USER'>,
     logging_type: superduper.base.config.LogType = <LogType.SYSTEM: 'SYSTEM'>,
     log_colorize: bool = True,
     log_hostname: bool = True,
     bytes_encoding: str = 'bytes',
     force_apply: bool = False,
     output_prefix: str = '_outputs__',
     vector_search_kwargs: Dict = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| envs | The envs datas |
| data_backend | The URI for the data backend |
| secrets_volume | The secrets volume mount for secrets env vars. |
| artifact_store | The URI for the artifact store |
| metadata_store | The URI for the metadata store |
| cache | A URI for an in-memory cache |
| vector_search_engine | The engine to use for vector search |
| cluster_engine | The engine to use for operating a distributed cluster |
| retries | Settings for retrying failed operations |
| downloads | Settings for downloading files |
| log_level | The severity level of the logs |
| logging_type | The type of logging to use |
| log_hostname | Whether to include the hostname in the logs |
| force_apply | Whether to force apply the configuration |
| log_colorize | Whether to colorize the logs |
| bytes_encoding | (Deprecated) |
| output_prefix | The prefix for the output table and output field key |
| vector_search_kwargs | The keyword arguments to pass to the vector search |

The data class containing all configurable superduper values.

## `Downloads` 

```python
Downloads(self,
     folder: Optional[str] = None,
     n_workers: int = 0,
     headers: Dict = <factory>,
     timeout: Optional[int] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| folder | The folder to download files to |
| n_workers | The number of workers to use for downloading |
| headers | The headers to use for downloading |
| timeout | The timeout for downloading |

Describes the configuration for downloading files.

## `Retry` 

```python
Retry(self,
     stop_after_attempt: int = 2,
     wait_max: float = 10.0,
     wait_min: float = 4.0,
     wait_multiplier: float = 1.0) -> None
```
| Parameter | Description |
|-----------|-------------|
| stop_after_attempt | The number of attempts to make |
| wait_max | The maximum time to wait between attempts |
| wait_min | The minimum time to wait between attempts |
| wait_multiplier | The multiplier for the wait time between attempts |

Describes how to retry using the `tenacity` library.

