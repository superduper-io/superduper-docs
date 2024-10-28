**`superduper.base.leaf`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/base/leaf.py)

## `imported` 

```python
imported(f)
```
| Parameter | Description |
|-----------|-------------|
| f | The function or class to wrap. |

Wrap a function or class to be imported.

## `imported_value` 

```python
imported_value(f)
```
| Parameter | Description |
|-----------|-------------|
| f | The function or class to wrap. |

Wrap a import to be serialized as a fixed value.

## `import_item` 

```python
import_item(dict,
     cls: Optional[str] = None,
     module: Optional[str] = None,
     object: Optional[type] = None,
     db: Optional[ForwardRef('Datalayer')] = None)
```
| Parameter | Description |
|-----------|-------------|
| dict | Dictionary of parameters. |
| cls | Class name. |
| module | Module name. |
| object | Object to instantiate. |
| db | Datalayer instance. |

Import item from a cls and module specification.

## `build_uuid` 

```python
build_uuid()
```
Build UUID.

## `find_leaf_cls` 

```python
find_leaf_cls(full_import_path) -> Type[superduper.base.leaf.Leaf]
```
| Parameter | Description |
|-----------|-------------|
| full_import_path | Full import path of the class. |

Find leaf class by class full import path.

## `Leaf` 

```python
Leaf(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |

Base class for all leaf classes.

## `Address` 

```python
Address(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |

Address is a base class for all address classes.

## `Attribute` 

```python
Attribute(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     parent: superduper.base.leaf.Address,
     attribute: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| parent | The parent class. |
| attribute | The attribute to get. |

An Attribute is a class that represents an attribute of a parent class.

## `Import` 

```python
Import(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     import_path: str | None,
     parent: dataclasses.InitVar[typing.Optional[typing.Any]] = None,
     args: Optional[Tuple] = None,
     kwargs: Optional[Dict] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| import_path | The import path of the class. |
| parent | The parent class. |
| args | Positional arguments to pass to the class. |
| kwargs | Keyword arguments to pass to the class. |

Import is a class that imports a class from a module.

## `ImportCall` 

```python
ImportCall(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     import_path: str,
     args: Tuple = (),
     kwargs: None = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| import_path | The import path of the function. |
| args | Positional arguments to pass to the function. |
| kwargs | Keyword arguments to pass to the function. |

ImportCall is a class that imports a function from a module and calls it.

## `Index` 

```python
Index(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     parent: superduper.base.leaf.Leaf,
     index: int) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| parent | The parent class. |
| index | The index to get. |

An Index is a class that represents an index of a parent class.

