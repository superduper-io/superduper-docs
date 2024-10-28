**`superduper.base.config`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/base/config.py)

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
     data_backend: str = 'mongodb://mongodb:27017/test_db',
     lance_home: str = '.superduper/vector_indices',
     artifact_store: Optional[str] = None,
     metadata_store: Optional[str] = None,
     vector_search_engine: str = 'local',
     cluster_engine: str = 'local',
     retries: superduper.base.config.Retry = <factory>,
     downloads: superduper.base.config.Downloads = <factory>,
     fold_probability: float = 0.05,
     log_level: superduper.base.config.LogLevel = <LogLevel.INFO: 'INFO'>,
     logging_type: superduper.base.config.LogType = <LogType.SYSTEM: 'SYSTEM'>,
     log_colorize: bool = True,
     force_apply: bool = False,
     bytes_encoding: superduper.base.config.BytesEncoding = <BytesEncoding.BYTES: 'bytes'>,
     auto_schema: bool = True,
     json_native: bool = True,
     output_prefix: str = '_outputs__',
     vector_search_kwargs: Dict = <factory>,
     rest: superduper.base.config.RestConfig = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| envs | The envs datas |
| data_backend | The URI for the data backend |
| lance_home | The home directory for the Lance vector indices, Default: .superduper/vector_indices |
| artifact_store | The URI for the artifact store |
| metadata_store | The URI for the metadata store |
| vector_search_engine | The engine to use for vector search |
| cluster_engine | The engine to use for operating a distributed cluster |
| retries | Settings for retrying failed operations |
| downloads | Settings for downloading files |
| fold_probability | The probability of validation fold |
| log_level | The severity level of the logs |
| logging_type | The type of logging to use |
| force_apply | Whether to force apply the configuration |
| bytes_encoding | The encoding of bytes in the data backend |
| auto_schema | Whether to automatically create the schema. If True, the schema will be created if it does not exist. |
| json_native | Whether the databackend supports json natively or not. |
| log_colorize | Whether to colorize the logs |
| output_prefix | The prefix for the output table and output field key |
| vector_search_kwargs | The keyword arguments to pass to the vector search |
| rest | Settings for rest server. |

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

## `RestConfig` 

```python
RestConfig(self,
     uri: str = 'localhost:8000',
     config: Optional[str] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| uri | Rest server uri. |
| config | Path configuration file. |

Configuratin for basic rest server.

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

