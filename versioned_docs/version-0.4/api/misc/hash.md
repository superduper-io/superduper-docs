**`superduper.misc.hash`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/misc/hash.py)

## `hash_path` 

```python
hash_path(path,
     hash_type='md5')
```
| Parameter | Description |
|-----------|-------------|
| path | Path to the file or folder. |
| hash_type | Hashing algorithm to use. Default is md5. |

Hash a file or folder.

Only the metadata of the file/folder is hashed, not the content.

Metadata includes:
- All file names in the folder
- All file sizes
- All file modification times

## `hash_string` 

```python
hash_string(string: str)
```
| Parameter | Description |
|-----------|-------------|
| string | string to hash |

Hash a string.

## `random_sha1` 

```python
random_sha1()
```
Generate random sha1 values.

