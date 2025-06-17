**`superduper.components.application`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/application.py)

## `Application` 

```python
Application(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     components: List[superduper.components.component.Component],
     variables: Optional[Dict] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| components | List of components to group together and apply to `superduper`. |
| variables | Variables which are used inside the application. |

A placeholder to hold list of components with associated funcionality.

Components are sorted in a way that respects their mutual dependencies.

