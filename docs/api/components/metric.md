**`superduper.components.metric`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/metric.py)

## `Metric` 

```python
Metric(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     object: Callable) -> None
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
| object | Callable or an Artifact to be applied to the data. |

Metric base object used to evaluate performance on a dataset.

These objects are callable and are applied row-wise to the data, and averaged.

