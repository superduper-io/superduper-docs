**`superduper.components.vector_index`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/vector_index.py)

## `backfill_vector_search` 

```python
backfill_vector_search(db,
     vi,
     searcher)
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance. |
| vi | Identifier of vector index. |
| searcher | FastVectorSearch instance to load model outputs as vectors. |

Backfill vector search from model outputs of a given vector index.

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
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| cdc_table | Table to use for CDC |
| indexing_listener | Listener which is applied to created vectors |
| compatible_listener | Listener which is applied to vectors to be compared |
| measure | Measure to use for comparison |
| metric_values | Metric values for this index |

A component carrying the information to apply a vector index.

