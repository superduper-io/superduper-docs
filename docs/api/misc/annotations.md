**`superduper.misc.annotations`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/misc/annotations.py)

## `deprecated` 

```python
deprecated(f)
```
| Parameter | Description |
|-----------|-------------|
| f | function to deprecate |

Decorator to mark a function as deprecated.

This will result in a warning being emitted when the function is used.

## `component` 

```python
component(*schema: Dict)
```
| Parameter | Description |
|-----------|-------------|
| schema | schema for the component |

Decorator for creating a component.

## `build_importable` 

```python
build_importable(*,
     db=None,
     importable=None)
```
| Parameter | Description |
|-----------|-------------|
| db | ``Datalayer`` instance |
| importable | importable path |

Build an importable from a path.

## `extract_parameters` 

```python
extract_parameters(doc)
```
| Parameter | Description |
|-----------|-------------|
| doc | Sphinx-styled docstring. Docstring may have multiple lines |

Extracts and organizes parameter descriptions from a Sphinx-styled docstring.

## `importable` 

```python
importable(f)
```
| Parameter | Description |
|-----------|-------------|
| f | function to make importable, decorated with @importable |

Make a function serializable as an importable.

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

## `requires_packages` 

```python
requires_packages(*packages,
     warn=False)
```
| Parameter | Description |
|-----------|-------------|
| packages | list of tuples of packages each tuple of the form (import_name, lower_bound/None, upper_bound/None, install_name/None) |
| warn | if True, warn instead of raising an exception |

Require the packages to be installed.

E.g. ('sklearn', '0.1.0', '0.2.0', 'scikit-learn')

## `warn_plugin_deprecated` 

```python
warn_plugin_deprecated(name)
```
| Parameter | Description |
|-----------|-------------|
| name | name of the plugin |

Warn that a plugin is deprecated.

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

