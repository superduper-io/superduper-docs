**`superduper.components.plugin`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/plugin.py)

## `Plugin` 

```python
Plugin(self,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
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
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| path | Path to the plugin package or module. |
| cache_path | Path to the cache directory where the plugin will be stored. |

Plugin component allows to install and use external python packages as plugins.

