**`superduper.components.listener`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/listener.py)

## `Listener` 

```python
Listener(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     cdc_table: str = '',
     key: Union[str,
     List[str],
     Tuple[List[str],
     Dict[str,
     str]]],
     model: superduper.components.model.Model,
     predict_kwargs: None = <factory>,
     select: Optional[superduper.backends.base.query.Query] = None,
     output_table: Optional[superduper.components.table.Table] = None,
     flatten: bool = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | A string used to identify the listener and it's outputs. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| artifacts | A dictionary of artifacts paths and `DataType` objects |
| upstream | A list of upstream components |
| plugins | A list of plugins to be used in the component. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| cdc_table | Table which fires the triggers. |
| key | Key to be bound to the model. |
| model | Model for processing data. |
| predict_kwargs | Keyword arguments to self.model.predict(). |
| select | Query to "listen" for input on. |
| output_table | Table to store the outputs. |
| flatten | Flatten the output into separate records if ``True``. |

Listener component.

Listener object which is used to process a column/key of a collection or table,
and store the outputs.

