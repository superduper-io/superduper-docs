**`superduper.components.metric`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/metric.py)

## `Metric` 

```python
Metric(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     object: Callable) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| object | Callable or an Artifact to be applied to the data. |

Metric base object used to evaluate performance on a dataset.

These objects are callable and are applied row-wise to the data, and averaged.

