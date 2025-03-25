**`superduper.components.model`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/components/model.py)

## `init_decorator` 

```python
init_decorator(func)
```
| Parameter | Description |
|-----------|-------------|
| func | init function. |

Decorator to set _is_initialized to True after init method is called.

## `model` 

```python
model(item: 't.Optional[t.Callable]' = None,
     identifier: 't.Optional[str]' = None,
     datatype=None,
     model_update_kwargs: 't.Optional[t.Dict]' = None,
     output_schema: 't.Optional[Schema]' = None,
     num_workers: 'int' = 0)
```
| Parameter | Description |
|-----------|-------------|
| item | Callable to wrap with `ObjectModel`. |
| identifier | Identifier for the `ObjectModel`. |
| datatype | Datatype for the model outputs. |
| model_update_kwargs | Dictionary to define update kwargs. |
| output_schema | Schema for the model outputs. |
| num_workers | Number of workers to use for parallel processing |

Decorator to wrap a function with `ObjectModel`.

When a function is wrapped with this decorator,
the function comes out as an `ObjectModel`.

## `serve` 

```python
serve(f)
```
| Parameter | Description |
|-----------|-------------|
| f | Method to serve. |

Decorator to serve the model on the associated cluster.

## `Model` 

```python
Model(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
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
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
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
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
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
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     key: 'st.JSON',
     select: 'st.LeafType',
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
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
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| metrics | List of metrics for validation |
| key | Model input type key |
| datasets | Sequence of dataset. |

Component which represents Validation definition.

## `APIBaseModel` 

```python
APIBaseModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
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

## `APIModel` 

```python
APIModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
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

## `IndexableNode` 

```python
IndexableNode(self,
     types: 't.Sequence[t.Type]') -> None
```
| Parameter | Description |
|-----------|-------------|
| types | Sequence of types |

Base indexable node for `ObjectModel`.

## `ModelRouter` 

```python
ModelRouter(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
     model_update_kwargs: 't.Dict' = <factory>,
     predict_kwargs: 't.Dict' = <factory>,
     compute_kwargs: 't.Dict' = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: 't.Dict' = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     models: 't.Dict[str,
     Model]',
     model: 'str') -> None
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
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
| model_update_kwargs | The kwargs to use for model update. |
| predict_kwargs | Additional arguments to use at prediction time. |
| compute_kwargs | Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...). |
| validation | The validation ``Dataset`` instances to use. |
| metric_values | The metrics to evaluate on. |
| num_workers | Number of workers to use for parallel prediction. |
| serve | Creates an http endpoint and serve the model with ``compute_kwargs`` on a distributed cluster. |
| trainer | `Trainer` instance to use for training. |
| models | A dictionary of models to use |
| model | The model to use |

ModelRouter component which routes the model to the correct model.

## `SequentialModel` 

```python
SequentialModel(self,
     identifier: str,
     upstream: Optional[List[ForwardRef('Component')]] = None,
     cache: Optional[bool] = True,
     status: Optional[str] = None,
     build_variables: Optional[Dict] = None,
     build_template: str | None = None,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     *,
     datatype: 'str | None' = None,
     output_schema: 't.Optional[t.Dict]' = None,
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
| cache | (Optional) If set `true` the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction. |
| status | What part of the lifecycle the component is in. |
| build_variables | Variables which were supplied to a template to build. |
| build_template | Template which was used to build. |
| db | Datalayer instance. |
| datatype | DataType instance. |
| output_schema | Output schema (mapping of encoders). |
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

