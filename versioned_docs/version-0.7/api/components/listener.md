**`superduper.components.listener`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/listener.py)

## `Listener` 

```python
Listener(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     cdc_table: str = '',
     key: superduper.misc.typing.JSON,
     model: superduper.components.model.Model,
     predict_kwargs: Optional[Dict] = <factory>,
     select: Optional[superduper.base.query.Query] = None,
     flatten: bool = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| cdc_table | Table which fires the triggers. |
| key | Key to be bound to the model. |
| model | Model for processing data. |
| predict_kwargs | Keyword arguments to self.model.predict(). |
| select | Query to "listen" for input on. |
| flatten | Flatten the output into separate records if ``True``. |

Listener component.

Listener object which is used to process a column/key of a collection or table,
and store the outputs.

