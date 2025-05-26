**`superduper.components.vector_index`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/vector_index.py)

## `ibatch` 

```python
ibatch(iterable: Iterable[~T],
     batch_size: int) -> Iterator[List[~T]]
```
| Parameter | Description |
|-----------|-------------|
| iterable | the iterable to batch |
| batch_size | the number of groups to write |

Batch an iterable into chunks of size `batch_size`.

## `VectorIndex` 

```python
VectorIndex(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     cdc_table: str = '',
     indexing_listener: superduper.components.listener.Listener,
     compatible_listener: Optional[superduper.components.listener.Listener] = None,
     measure: str = 'cosine',
     metric_values: Optional[Dict] = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| cdc_table | Table to use for CDC |
| indexing_listener | Listener which is applied to created vectors |
| compatible_listener | Listener which is applied to vectors to be compared |
| measure | Measure to use for comparison |
| metric_values | Metric values for this index |

A component carrying the information to apply a vector index.

