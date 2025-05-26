**`superduper.misc.utils`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/misc/utils.py)

## `hash_item` 

```python
hash_item(item: Any) -> str
```
| Parameter | Description |
|-----------|-------------|
| item | The item to hash. |

Hash an item.

## `format_prompt` 

```python
format_prompt(X: str,
     prompt: str,
     context: Optional[List[str]] = None) -> str
```
| Parameter | Description |
|-----------|-------------|
| X | The input to format the prompt with. |
| prompt | The prompt to format. |
| context | The context to format the prompt with. |

Format a prompt with the given input and context.

## `grab_source_code_ipython` 

```python
grab_source_code_ipython(cls_or_fn: Union[Type,
     Callable]) -> str
```
| Parameter | Description |
|-----------|-------------|
| cls_or_fn | The class or function |

Grab the source code of a class or function.

## `merge_dicts` 

```python
merge_dicts(r: Dict,
     s: Dict) -> dict
```
| Parameter | Description |
|-----------|-------------|
| r | The first dictionary. |
| s | The second dictionary. |

Merge two dictionaries recursively.

```python
r = {'foo': {'bar': 1, 'baz': 2}, 'qux': 3}
s = {'foo': {'bar': 4, 'quux': 5}, 'quux': 6}
merge_dicts(r, s)
# {'foo': {'bar': 4, 'baz': 2, 'quux': 5}, 'qux': 3, 'quux': 6}
```

## `str_shape` 

```python
str_shape(shape: Union[Sequence[int],
     int]) -> str
```
| Parameter | Description |
|-----------|-------------|
| shape | The shape to convert. |

Convert a shape to a string.

