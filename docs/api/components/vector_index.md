**`superduper.components.vector_index`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/vector_index.py)

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

## `sqlvector` 

```python
sqlvector(shape,
     bytes_encoding: Optional[str] = None)
```
| Parameter | Description |
|-----------|-------------|
| shape | The shape of the vector |
| bytes_encoding | The encoding of the bytes |

Create an encoder for a vector (list of ints/ floats) of a given shape.

This is used for compatibility with SQL databases, as the default vector

## `vector` 

```python
vector(shape,
     identifier: Optional[str] = None)
```
| Parameter | Description |
|-----------|-------------|
| shape | The shape of the vector |
| identifier | The identifier of the vector |

Create an encoder for a vector (list of ints/ floats) of a given shape.

## `VectorIndex` 

```python
VectorIndex(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     cdc_table: str = '',
     indexing_listener: superduper.components.listener.Listener,
     compatible_listener: Optional[superduper.components.listener.Listener] = None,
     measure: superduper.vector_search.base.VectorIndexMeasureType = <VectorIndexMeasureType.cosine: 'cosine'>,
     metric_values: None = <factory>) -> None
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
| cdc_table | Table which fires the triggers. |
| indexing_listener | Listener which is applied to created vectors |
| compatible_listener | Listener which is applied to vectors to be compared |
| measure | Measure to use for comparison |
| metric_values | Metric values for this index |

A component carrying the information to apply a vector index.

## `DecodeArray` 

```python
DecodeArray(self,
     dtype)
```
| Parameter | Description |
|-----------|-------------|
| dtype | Datatype of array |

Class to decode an array.

## `EncodeArray` 

```python
EncodeArray(self,
     dtype)
```
| Parameter | Description |
|-----------|-------------|
| dtype | Datatype of array |

Class to encode an array.

