**`superduper.components.listener`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/listener.py)

## `Listener` 

```python
Listener(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| cdc_table | Table which fires the triggers. |
| key | Key to be bound to the model. |
| model | Model for processing data. |
| predict_kwargs | Keyword arguments to self.model.predict(). |
| select | Query to "listen" for input on. |
| flatten | Flatten the output into separate records if ``True``. |

Listener component.

Listener object which is used to process a column/key of a collection or table,
and store the outputs.

