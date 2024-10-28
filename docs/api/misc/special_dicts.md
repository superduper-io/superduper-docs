**`superduper.misc.special_dicts`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/misc/special_dicts.py)

## `recursive_update` 

```python
recursive_update(data,
     replace_function: Callable)
```
| Parameter | Description |
|-----------|-------------|
| data | Dict, List, Tuple, Set |
| replace_function | Callable |

Recursively update data with a replace function.

## `diff` 

```python
diff(r1,
     r2)
```
| Parameter | Description |
|-----------|-------------|
| r1 | Dict |
| r2 | Dict |

Get the difference between two dictionaries.

```python
_diff({'a': 1, 'b': 2}, {'a': 2, 'b': 2})
# {'a': (1, 2)}
_diff({'a': {'c': 3}, 'b': 2}, {'a': 2, 'b': 2})
# {'a': ({'c': 3}, 2)}
```

## `recursive_find` 

```python
recursive_find(data,
     check_function: Callable)
```
| Parameter | Description |
|-----------|-------------|
| data | Dict, List, Tuple, Set |
| check_function | Callable |

Recursively find items in data that satisfy a check function.

## `MongoStyleDict` 

```python
MongoStyleDict(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for `dict` |
| kwargs | **kwargs for `dict` |

Dictionary object mirroring how MongoDB handles fields.

## `SuperDuperFlatEncode` 

```python
SuperDuperFlatEncode(self,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for `dict` |
| kwargs | **kwargs for `dict` |

Dictionary for representing flattened encoding data.

## `ArgumentDefaultDict` 

```python
ArgumentDefaultDict(self,
     *args,
     default_factory,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for `dict` |
| default_factory | Callable used to create default dependent on key |
| kwargs | **kwargs for `dict` |

Default-dictionary which takes the key as an argument to default factory.

## `IndexableDict` 

```python
IndexableDict(self,
     ordered_dict)
```
| Parameter | Description |
|-----------|-------------|
| ordered_dict | OrderedDict |

IndexableDict.

```python
# Example:
# -------
d = IndexableDict({'a': 1, 'b': 2})
d[0]
# 1
```

```python
d[1]
# 2
```

