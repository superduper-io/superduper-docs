**`superduper.base.annotations`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/base/annotations.py)

## `trigger` 

```python
trigger(*event_types: Sequence[str],
     depends: Union[Sequence[str],
     str] = (),
     requires: Union[Sequence[str],
     str] = ())
```
| Parameter | Description |
|-----------|-------------|
| event_types | Event to trigger the method. |
| depends | Triggers which should run before this method. |
| requires | Dataclass parameters/ attributes which should be available to trigger the method |

Decorator to trigger a method when an event is detected.

