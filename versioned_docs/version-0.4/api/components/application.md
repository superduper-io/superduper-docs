**`superduper.components.application`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/application.py)

## `Application` 

```python
Application(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     components: Sequence[superduper.components.component.Component],
     namespace: Optional[Sequence[Tuple[str,
     str]]] = None,
     link: Optional[str] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| artifacts | A dictionary of artifacts paths and `DataType` objects |
| upstream | A list of upstream components |
| plugins | A list of plugins to be used in the component. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| components | List of components to group together and apply to `superduper`. |
| namespace | List of tuples with type_id and identifier of components to assist in managing application. |
| link | A reference link to web app serving the application i.e. streamlit, gradio, etc |

A placeholder to hold list of components with associated funcionality.

