**`superduper.components.plugin`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/plugin.py)

## `Plugin` 

```python
Plugin(self,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     identifier: str = '',
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     path: str,
     cache_path: str = '~/.superduper/plugins') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Unique identifier for the plugin. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| artifacts | A dictionary of artifacts paths and `DataType` objects |
| upstream | A list of upstream components |
| plugins | A list of plugins to be used in the component. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| path | Path to the plugin package or module. |
| cache_path | Path to the cache directory where the plugin will be stored. |

Plugin component allows to install and use external python packages as plugins.

