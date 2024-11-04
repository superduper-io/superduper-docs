**`superduper.misc.download`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/misc/download.py)

## `download_from_one` 

```python
download_from_one(r: superduper.base.document.Document)
```
| Parameter | Description |
|-----------|-------------|
| r | document to download from |

Download content from a single document.

This function will find all URIs in the document and download them.

## `download_content` 

```python
download_content(db,
     query: Union[superduper.backends.base.query.Query,
     Dict],
     ids: Optional[Sequence[str]] = None,
     documents: Optional[List[superduper.base.document.Document]] = None,
     raises: bool = True,
     n_workers: Optional[int] = None) -> Optional[Sequence[superduper.base.document.Document]]
```
| Parameter | Description |
|-----------|-------------|
| db | database instance |
| query | query to be executed |
| ids | ids to be downloaded |
| documents | documents to be downloaded |
| raises | whether to raise errors |
| n_workers | number of download workers |

Download content contained in uploaded data.

Items to be downloaded are identifier
via the subdocuments in the form exemplified below. By default items are downloaded
to the database, unless a ``download_update`` function is provided.

```python
d = {"_content": {"uri": "<uri>", "encoder": "<encoder-identifier>"}}
def update(key, id, bytes):
... with open(f'/tmp/{key}+{id}', 'wb') as f:
...     f.write(bytes)
download_content(None, None, ids=["0"], documents=[d]))
    
```

## `gather_uris` 

```python
gather_uris(documents: Sequence[superduper.base.document.Document],
     gather_ids: bool = True) -> Tuple[List[str],
     List[str],
     List[Any],
     List[str]]
```
| Parameter | Description |
|-----------|-------------|
| documents | list of dictionaries |
| gather_ids | if ``True`` then gather ids of documents |

Get the uris out of all documents as denoted by ``{"_content": ...}``.

## `timeout` 

```python
timeout(seconds)
```
| Parameter | Description |
|-----------|-------------|
| seconds | seconds until timeout |

Context manager to set a timeout.

## `timeout_handler` 

```python
timeout_handler(signum,
     frame)
```
| Parameter | Description |
|-----------|-------------|
| signum | signal number |
| frame | frame |

Timeout handler to raise an TimeoutException.

## `BaseDownloader` 

```python
BaseDownloader(self,
     uris: List[str],
     n_workers: int = 0,
     timeout: Optional[int] = None,
     headers: Optional[Dict] = None,
     raises: bool = True)
```
| Parameter | Description |
|-----------|-------------|
| uris | list of uris/ file names to fetch |
| n_workers | number of multiprocessing workers |
| timeout | set seconds until request times out |
| headers | dictionary of request headers passed to``requests`` package |
| raises | raises error ``True``/``False`` |

Base class for downloading files.

## `DownloadFiles` 

```python
DownloadFiles(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: str = 'singleton',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: int = (10,
    ),
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     postprocess: Optional[Callable] = None,
     timeout: Optional[int] = None,
     headers: Optional[Dict] = None,
     raises: bool = True) -> None
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
| signature | signature of the model |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | number of multiprocessing workers |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| example | An example to auto-determine the schema/ datatype. |
| postprocess | postprocess function to apply to the results |
| timeout | set seconds until request times out |
| headers | dictionary of request headers passed to``requests`` package |
| raises | raises error ``True``/``False`` |

Download files from a list of URIs.

## `Downloader` 

```python
Downloader(self,
     uris,
     update_one: Optional[Callable] = None,
     ids: Union[List[str],
     List[int],
     NoneType] = None,
     keys: Optional[List[str]] = None,
     datatypes: Optional[List[str]] = None,
     n_workers: int = 20,
     headers: Optional[Dict] = None,
     skip_existing: bool = True,
     timeout: Optional[int] = None,
     raises: bool = True)
```
| Parameter | Description |
|-----------|-------------|
| uris | list of uris/ file names to fetch |
| update_one | function to call to insert data into table |
| ids | list of ids of rows/ documents to update |
| keys | list of keys in rows/ documents to insert to |
| datatypes | list of datatypes of rows/ documents to insert to |
| n_workers | number of multiprocessing workers |
| headers | dictionary of request headers passed to``requests`` package |
| skip_existing | if ``True`` then don't bother getting already present data |
| timeout | set seconds until request times out |
| raises | raises error ``True``/``False`` |

Download files from a list of URIs.

## `Fetcher` 

```python
Fetcher(self,
     headers: Optional[Dict] = None,
     n_workers: int = 0)
```
| Parameter | Description |
|-----------|-------------|
| headers | headers to be used for download |
| n_workers | number of download workers |

Fetches data from a URI.

## `TimeoutException` 

```python
TimeoutException(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args of `Exception` |
| kwargs | **kwargs of `Exception` |

Timeout exception.

## `Updater` 

```python
Updater(self,
     db,
     query)
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance |
| query | query to be executed |

Updater class to update the artifact.

