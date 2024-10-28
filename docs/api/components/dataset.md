**`superduper.components.dataset`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/dataset.py)

## `Dataset` 

```python
Dataset(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     select: 't.Optional[Query]' = None,
     sample_size: 't.Optional[int]' = None,
     random_seed: 't.Optional[int]' = None,
     creation_date: 't.Optional[str]' = None,
     raw_data: 't.Optional[t.Sequence[t.Any]]' = None,
     pin: 'bool' = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| artifacts | A dictionary of artifacts paths and `DataType` objects |
| upstream | A list of upstream components |
| plugins | A list of plugins to be used in the component. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| select | A query to select the documents for the dataset. |
| sample_size | The number of documents to sample from the query. |
| random_seed | The random seed to use for sampling. |
| creation_date | The date the dataset was created. |
| raw_data | The raw data for the dataset. |
| pin | Whether to pin the dataset. If True, the dataset will load the datas from the database every time. If False, the dataset will cache the datas after we apply to db. |

A dataset is an immutable collection of documents.

## `RemoteData` 

```python
RemoteData(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     getter: 't.Callable') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the leaf. |
| db | Datalayer instance. |
| uuid | UUID of the leaf. |
| artifacts | A dictionary of artifacts paths and `DataType` objects |
| upstream | A list of upstream components |
| plugins | A list of plugins to be used in the component. |
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| getter | Function to fetch data. |

Class to fetch dataset from remote.

