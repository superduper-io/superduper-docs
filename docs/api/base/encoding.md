**`superduper.base.encoding`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/encoding.py)

## `EncodeContext` 

```python
EncodeContext(self,
     builds: Dict[str,
     dict] = <factory>,
     blobs: Dict[str,
     bytes] = <factory>,
     files: Dict[str,
     str] = <factory>,
     db: Optional[ForwardRef('Datalayer')] = None,
     leaves_to_keep: Sequence[ForwardRef('Base')] = <factory>,
     metadata: bool = True,
     defaults: bool = True) -> None
```
| Parameter | Description |
|-----------|-------------|
| builds | A dictionary of builds. |
| blobs | A dictionary of blobs. |
| files | A dictionary of files. |
| db | A Datalayer instance. |
| leaves_to_keep | A sequence of Base instances to keep. |
| metadata | Whether to include metadata. |
| defaults | Whether to include defaults. |

Context for encoding and decoding data.

