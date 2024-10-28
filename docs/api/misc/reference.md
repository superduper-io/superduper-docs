**`superduper.misc.reference`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/misc/reference.py)

## `parse_reference` 

```python
parse_reference(string) -> superduper.misc.reference.Reference
```
| Parameter | Description |
|-----------|-------------|
| string | The string to parse. |

Parse a string into a Reference object.

## `Reference` 

```python
Reference(self,
     type: str,
     name: str,
     path: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| type | The type of the reference. Either "&" for a database or "?" for a leaf. |
| name | The name of the reference. |
| path: The path of the reference, e.g. type_id:identifier | version |

A reference to a database or a leaf.

