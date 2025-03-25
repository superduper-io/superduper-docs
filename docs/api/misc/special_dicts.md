**`superduper.misc.special_dicts`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/misc/special_dicts.py)

## `dict_to_ascii_table` 

```python
dict_to_ascii_table(d)
```
| Parameter | Description |
|-----------|-------------|
| d | Convert a dictionary to a table. |

Return a single string that represents an ASCII table.

Each key/value in the dict is a column.
Columns are centered and padded based on the widest
string needed (key or value).

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

