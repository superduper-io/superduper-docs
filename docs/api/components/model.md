**`superduper.components.model`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/model.py)

## `init_decorator` 

```python
init_decorator(func)
```
| Parameter | Description |
|-----------|-------------|
| func | init function. |

Decorator to set _is_setup to `True` after init method is called.

## `method_wrapper` 

```python
method_wrapper(method,
     item,
     signature: 'str')
```
| Parameter | Description |
|-----------|-------------|
| method | Method to execute. |
| item | Item to wrap. |
| signature | Signature of the method. |

Wrap the item with the model.

## `serve` 

```python
serve(f)
```
| Parameter | Description |
|-----------|-------------|
| f | Method to serve. |

Decorator to serve the model on the associated cluster.

## `APIBaseModel` 

```python
APIBaseModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     model: 't.Optional[str]' = None,
     max_batch_size: 'int' = 8,
     postprocess: 't.Optional[t.Callable]' = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| datatype | DataType instance. |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel prediction. |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| model | The Model to use, e.g. ``'text-embedding-ada-002'`` |
| max_batch_size | Maximum  batch size. |
| postprocess | Postprocess function to use on the output of the API request |

APIBaseModel component which is used to make the type of API request.

## `Model` 

```python
Model(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| datatype | DataType instance. |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel prediction. |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |

Base class for components which can predict.

## `ObjectModel` 

```python
ObjectModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     object: 't.Callable',
     method: 't.Optional[str]' = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| datatype | DataType instance. |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel processing |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| object | Model/ computation object |
| method | Method to call on the object |

Model component which wraps a Model to become serializable.

```python
# Example:
# -------
m = ObjectModel('test', lambda x: x + 2)
m.predict(2)
# 4
```

## `QueryModel` 

```python
QueryModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     preprocess: 't.Optional[t.Callable]' = None,
     postprocess: 't.Optional[t.Callable]' = None,
     select: 'Query',
     signature: 'Signature' = '**kwargs') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| datatype | DataType instance. |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel prediction. |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| preprocess | Preprocess callable |
| postprocess | Postprocess callable |
| select | query used to find data (can include `like`) |
| signature | signature to use |

QueryModel component.

Model which can be used to query data and return those
precomputed queries as Results.

## `Trainer` 

```python
Trainer(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     key: 'st.JSON',
     select: 'st.BaseType',
     transform: 't.Optional[t.Callable]' = None,
     metric_values: 't.Dict' = <factory>,
     in_memory: 'bool' = True,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| key | Model input type key. |
| select | Model select query for training. |
| transform | (optional) transform callable. |
| metric_values | Dictionary for metric defaults. |
| in_memory | If training in memory. |
| compute_kwargs | Kwargs for compute backend. |
| validation | Validation object to measure training performance |

Trainer component to train a model.

Training configuration object, containing all settings necessary for a particular
learning task use-case to be serialized and initiated. The object is ``callable``
and returns a class which may be invoked to apply training.

## `Validation` 

```python
Validation(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     metrics: 't.List[Metric]' = <factory>,
     key: 'st.JSON',
     datasets: 't.List[Dataset]' = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| metrics | List of metrics for validation |
| key | Model input type key |
| datasets | Sequence of dataset. |

Component which represents Validation definition.

## `APIModel` 

```python
APIModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     model: 't.Optional[str]' = None,
     max_batch_size: 'int' = 8,
     postprocess: 't.Optional[t.Callable]' = None,
     url: 'str') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| datatype | DataType instance. |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel prediction. |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| model | The Model to use, e.g. ``'text-embedding-ada-002'`` |
| max_batch_size | Maximum  batch size. |
| postprocess | Postprocess function to use on the output of the API request |
| url | The url to use for the API request |

APIModel component which is used to make the type of API request.

## `SequentialModel` 

```python
SequentialModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     models: 't.List[Model]') -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | Identifier of the instance. |
| upstream | A list of upstream components. |
| db | Datalayer instance. Datalayer instance. |
| datatype | DataType instance. |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel prediction. |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| models | A list of models to use |

Sequential model component which wraps a model to become serializable.

