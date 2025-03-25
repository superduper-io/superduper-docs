**`superduper.components.plugin`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/plugin.py)

## `Plugin` 

```python
Plugin(self,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     identifier: str = '',
     path: superduper.misc.typing.File,
     cache_path: str = '~/.superduper/plugins') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Unique identifier for the plugin. |
| upstream | A list of upstream components. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| path | Path to the plugin package or module. |
| cache_path | Path to the cache directory where the plugin will be stored. |

Plugin component allows to install and use external python packages as plugins.

