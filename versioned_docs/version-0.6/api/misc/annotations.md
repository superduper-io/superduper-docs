**`superduper.misc.annotations`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/misc/annotations.py)

## `extract_parameters` 

```python
extract_parameters(doc)
```
| Parameter | Description |
|-----------|-------------|
| doc | Sphinx-styled docstring. Docstring may have multiple lines |

Extracts and organizes parameter descriptions from a Sphinx-styled docstring.

## `replace_parameters` 

```python
replace_parameters(doc,
     placeholder: str = '!!!')
```
| Parameter | Description |
|-----------|-------------|
| doc | Sphinx-styled docstring. |
| placeholder | Placeholder to replace parameters with. |

Replace parameters in a doc-string with a placeholder.

## `classproperty` 

```python
classproperty(func)
```
| Parameter | Description |
|-----------|-------------|
| func | Function to compute the value. |

Decorator for creating a read-only class-level property.

## `lazy_classproperty` 

```python
lazy_classproperty(self,
     func)
```
| Parameter | Description |
|-----------|-------------|
| func | Function to compute the value. |

Descriptor that computes the value once per owner class.

It caches the computed value in a WeakKeyDictionary keyed by the owner.

## `SuperDuperDeprecationWarning` 

```python
SuperDuperDeprecationWarning(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args of `DeprecationWarning` |
| kwargs | **kwargs of `DeprecationWarning` |

Specialized Deprecation Warning for fine grained filtering control.

