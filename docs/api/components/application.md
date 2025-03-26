**`superduper.components.application`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/application.py)

## `Application` 

```python
Application(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     components: List[superduper.components.component.Component],
     link: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| components | List of components to group together and apply to `superduper`. |
| link | A reference link to web app serving the application i.e. streamlit, gradio, etc |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |

A placeholder to hold list of components with associated funcionality.

Components are sorted in a way that respects their mutual dependencies.

