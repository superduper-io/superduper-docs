**`superduper.base.datatype`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/datatype.py)

## `get_hash` 

```python
get_hash(data)
```
| Parameter | Description |
|-----------|-------------|
| data | Data to hash. |

Get the hash of the given data.

## `hash_indescript` 

```python
hash_indescript(item)
```
| Parameter | Description |
|-----------|-------------|
| item | The item to hash. |

Hash a range of items.

## `BaseDataType` 

```python
BaseDataType(self) -> None
```
Base class for datatype.

## `JSON` 

```python
JSON(self) -> None
```
Datatype for encoding json-able items.

## `NativeVector` 

```python
NativeVector(self,
     *,
     dtype: str = 'float',
     shape: int) -> None
```
| Parameter | Description |
|-----------|-------------|
| dtype | Datatype of encoded arrays. |
| shape | Shape of array. |

Datatype for encoding vectors which are supported as list by databackend.

## `Vector` 

```python
Vector(self,
     *,
     dtype: str = 'float64',
     shape: int) -> None
```
| Parameter | Description |
|-----------|-------------|
| dtype | Datatype of encoded arrays. |
| shape | Shape of array. |

Vector meta-datatype for encoding vectors ready for search.

## `BaseType` 

```python
BaseType(self) -> None
```
Datatype for encoding base instances.

## `ComponentType` 

```python
ComponentType(self) -> None
```
Datatype for encoding `Component` instances.

## `FileItem` 

```python
FileItem(self,
     identifier: str,
     db: 'Datalayer' = None,
     *,
     path: str = '') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the file. |
| db | The Datalayer. |
| path | Path to file. |

Placeholder for a file.

## `Array` 

```python
Array(self,
     *,
     dtype: str = 'float64',
     shape: Union[int,
     Tuple[int]]) -> None
```
| Parameter | Description |
|-----------|-------------|
| dtype | numpy native datatype. |
| shape | Shape of array. |

Encode/ decode a numpy array as bytes.

## `BaseVector` 

```python
BaseVector(self,
     *,
     dtype: str = 'float64',
     shape: int) -> None
```
| Parameter | Description |
|-----------|-------------|
| shape | size of vector |
| dtype | Datatype of array to encode. |

Base class for vector.

## `Blob` 

```python
Blob(self,
     db: 'Datalayer' = None,
     *,
     identifier: str = '',
     bytes: bytearray | None = None,
     builder: Callable) -> None
```
| Parameter | Description |
|-----------|-------------|
| bytes | The `bytes` blob. |
| identifier | Identifier of the blob. |
| builder | Function to rebuild object from bytes. |
| db | The Datalayer. |

Placeholder for a blob of bytes.

## `ComponentDict` 

```python
ComponentDict(self) -> None
```
Datatype for encoding dictionaries which are supported as dict by databackend.

## `ComponentList` 

```python
ComponentList(self) -> None
```
Datatype for encoding lists which are supported as list by databackend.

## `ComponentRef` 

```python
ComponentRef(self,
     identifier: str,
     db: 'Datalayer' = None,
     *,
     component: str,
     uuid: str,
     object: Optional[superduper.components.component.Component] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the component. |
| db | The Datalayer. |
| component | Component class name. |
| uuid | UUID of the component. |
| object | The component object, if already loaded. |

Placeholder for a component reference.

## `Dill` 

```python
Dill(self) -> None
```
Serializer with dill.

```python
# This is also the default serializer.
from superduper.components.datatype import DEFAULT_SERIALIZER
```

## `DillEncoder` 

```python
DillEncoder(self) -> None
```
Encoder with dill.

## `FieldType` 

```python
FieldType(self,
     identifier: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | The identifier of the datatype. |

Field type to represent the type of a field in a table.

This is a wrapper around a database's native datatypes.

## `File` 

```python
File(self) -> None
```
Type for encoding files on disk.

## `FileDict` 

```python
FileDict(self) -> None
```
Datatype for encoding dictionaries of files.

## `Pickle` 

```python
Pickle(self) -> None
```
Serializer with pickle.

## `PickleEncoder` 

```python
PickleEncoder(self) -> None
```
Pickle encoder.

## `Saveable` 

```python
Saveable(self,
     identifier: str,
     db: 'Datalayer' = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the object. |
| db | The Datalayer. |

A Saveable base class.

