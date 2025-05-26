**`superduper.components.streamlit`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/streamlit.py)

## `Streamlit` 

```python
Streamlit(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
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
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| demo_func | Callable which builds the demo. |
| demo_kwargs | key-word arguments to the `demo_func` |
| default | Set to `True` if this is to be the frontpage. |
| is_standalone | Set to `True` if this is a standalone page. |

Streamlit demo function to be deployed on the streamlit server.

