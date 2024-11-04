**`superduper.backends.base.vector_search`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/backends/base/vector_search.py)

## `cosine` 

```python
cosine(x,
     y)
```
| Parameter | Description |
|-----------|-------------|
| x | numpy.ndarray |
| y | numpy.ndarray, y should be normalized! |

Cosine similarity function for vector search.

## `dot` 

```python
dot(x,
     y)
```
| Parameter | Description |
|-----------|-------------|
| x | numpy.ndarray |
| y | numpy.ndarray |

Dot function for vector similarity search.

## `l2` 

```python
l2(x,
     y)
```
| Parameter | Description |
|-----------|-------------|
| x | numpy.ndarray |
| y | numpy.ndarray |

L2 function for vector similarity search.

## `VectorSearchBackend` 

```python
VectorSearchBackend(self)
```
Base vector-search backend.

## `BaseVectorSearcher` 

```python
BaseVectorSearcher(self,
     uuid: str,
     dimensions: int,
     measure: str)
```
| Parameter | Description |
|-----------|-------------|
| uuid | Unique string identifier of index |
| dimensions | Dimension of the vector embeddings |
| measure | measure to assess similarity |

Base class for vector searchers.

## `VectorItem` 

```python
VectorItem(self,
     id: str,
     vector: numpy.ndarray) -> None
```
| Parameter | Description |
|-----------|-------------|
| id | ID of the vector |
| vector | Vector of the item |

Class for representing a vector in vector search with id and vector.

