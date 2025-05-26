**`superduper.components.dataset`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/dataset.py)

## `Dataset` 

```python
Dataset(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     select: 't.Optional[Query]' = None,
     sample_size: 't.Optional[int]' = None,
     random_seed: 't.Optional[int]' = None,
     creation_date: 't.Optional[str]' = None,
     raw_data: 't.Optional[t.Sequence[t.Any]]' = None,
     schema: 't.Optional[Schema]' = None,
     pin: 'bool' = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| select | A query to select the documents for the dataset. |
| sample_size | The number of documents to sample from the query. |
| random_seed | The random seed to use for sampling. |
| creation_date | The date the dataset was created. |
| raw_data | The raw data for the dataset. |
| schema | Optional schema for decoding the data. |
| pin | Whether to pin the dataset. If True, the dataset will load the datas from the database every time. If False, the dataset will cache the datas after we apply to db. |

A dataset is an immutable collection of documents.

## `Data` 

```python
Data(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     raw_data: 't.Any') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| raw_data | The raw data. |

Class to store data.

## `RemoteData` 

```python
RemoteData(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     compute_kwargs: Dict = <factory>,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     getter: 't.Callable') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| compute_kwargs | Keyword arguments to manage the compute environment. |
| db | Datalayer instance. Datalayer instance. |
| getter | Function to fetch data. |

Class to fetch dataset from remote.

