**`superduper.base.config_settings`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/config_settings.py)

## `load_secrets` 

```python
load_secrets(secrets_dir: str | None = None)
```
| Parameter | Description |
|-----------|-------------|
| secrets_dir | The directory containing the secrets. |

Load secrets directory into env vars.

## `ConfigError` 

```python
ConfigError(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for `Exception` |
| kwargs | **kwargs for `Exception` |

An exception raised when there is an error in the configuration.

## `ConfigSettings` 

```python
ConfigSettings(self,
     cls: Type,
     environ: Optional[Dict] = None,
     base: Optional[str] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| cls | The Pydantic class to read. |
| environ | The environment variables to read from. |
| base | The base field of a loaded config file to use (e.g. "cluster" loads from r["cluster"]) |

Helper class to read a configuration from a dataclass.

Reads a dataclass class from a configuration file and environment variables.

