**`superduper.components.streamlit`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/streamlit.py)

## `Streamlit` 

```python
Streamlit(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     demo_func: Callable,
     demo_kwargs: Dict = <factory>,
     default: bool = False,
     is_standalone: bool = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| demo_func | Callable which builds the demo. |
| demo_kwargs | key-word arguments to the `demo_func` |
| default | Set to `True` if this is to be the frontpage. |
| is_standalone | Set to `True` if this is a standalone page. |

Streamlit demo function to be deployed on the streamlit server.

