**`superduper.components.template`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/template.py)

## `Template` 

```python
Template(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     template: superduper.misc.typing.JSON,
     template_variables: Optional[List[str]] = None,
     types: Optional[Dict] = None,
     schema: Optional[Dict] = None,
     blobs: Any = <factory>,
     files: superduper.misc.typing.FileDict = <factory>,
     substitutions: dataclasses.InitVar[typing.Optional[typing.Dict]] = None,
     requirements: Optional[List[str]] = None,
     default_tables: Optional[List[superduper.components.table.Table]] = None,
     postprocess: superduper.components.component.Component | None = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| template | Template to be used. |
| template_variables | Variables in the template. |
| types | Types of variables in the template. |
| schema | Schema of the template. |
| blobs | Blobs to be saved with the template. |
| files | Files to be staged with the template. |
| substitutions | dict of substitutions to be made in the template. |
| requirements | pip requirements for the template. |
| default_tables | Default table to be used with the template. |
| postprocess | Postprocess to be applied to the template. |

Application template component.

