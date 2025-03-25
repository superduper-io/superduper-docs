**`superduper.components.application`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/application.py)

## `Application` 

```python
Application(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     components: List[superduper.components.component.Component],
     link: Optional[str] = None) -> None
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
| components | List of components to group together and apply to `superduper`. |
| link | A reference link to web app serving the application i.e. streamlit, gradio, etc |

A placeholder to hold list of components with associated funcionality.

Components are sorted in a way that respects their mutual dependencies.

