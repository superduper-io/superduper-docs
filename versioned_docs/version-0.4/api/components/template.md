**`superduper.components.template`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/template.py)

## `QueryTemplate` 

```python
QueryTemplate(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     template: Union[Dict,
     superduper.components.component.Component],
     template_variables: Optional[List[str]] = None,
     types: None = <factory>,
     blobs: Optional[List[str]] = None,
     files: Optional[List[str]] = None,
     substitutions: dataclasses.InitVar[typing.Optional[typing.Dict]] = None) -> None
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
| template | Template component with variables. |
| template_variables | Variables to be set. |
| types | Additional information about types of variables. |
| blobs | Blob identifiers in `Template.component`. |
| files | File identifiers in `Template.component`. |
| substitutions | Substitutions to be made to create variables. |

Query template component.

```python
# Example:
# -------
q = db['docs'].select().limit('<var:limit>')
t = QueryTemplate('select_lim', template=q)
t.variables
# ['limit']
```

## `Template` 

```python
Template(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     template: Union[Dict,
     superduper.components.component.Component],
     template_variables: Optional[List[str]] = None,
     types: None = <factory>,
     blobs: Optional[List[str]] = None,
     files: Optional[List[str]] = None,
     substitutions: dataclasses.InitVar[typing.Optional[typing.Dict]] = None,
     requirements: Optional[List[str]] = None,
     default_table: superduper.components.table.Table | None = None,
     queries: Optional[List[ForwardRef('QueryTemplate')]] = None) -> None
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
| template | Template component with variables. |
| template_variables | Variables to be set. |
| types | Additional information about types of variables. |
| blobs | Blob identifiers in `Template.component`. |
| files | File identifiers in `Template.component`. |
| substitutions | Substitutions to be made to create variables. |
| requirements | pip requirements for the template. |
| default_table | Default table to be used with the template. |
| queries | `QueryTemplate` instances to be used with the template. |

Application template component.

