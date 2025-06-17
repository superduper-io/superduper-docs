**`superduper.base.encoding`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/encoding.py)

## `EncodeContext` 

```python
EncodeContext(self,
     name: str = '__main__',
     builds: Dict[str,
     dict] = <factory>,
     blobs: Dict[str,
     bytes] = <factory>,
     files: Dict[str,
     str] = <factory>,
     db: Optional[ForwardRef('Datalayer')] = None,
     leaves_to_keep: Sequence[ForwardRef('Base')] = <factory>,
     metadata: bool = True,
     keep_variables: bool = False,
     defaults: bool = True,
     export: bool = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| name | Name of the context. |
| builds | A dictionary of builds. |
| blobs | A dictionary of blobs. |
| files | A dictionary of files. |
| db | A Datalayer instance. |
| leaves_to_keep | A sequence of Base instances to keep. |
| metadata | Whether to include metadata. |
| keep_variables | Whether to keep variables. |
| defaults | Whether to include defaults. |
| export | Whether in export mode. |

Context for encoding and decoding data.

