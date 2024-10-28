**`superduper.components.model`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/components/model.py)

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
     num_workers: 'int' = 0,
     example: 't.Any | None' = None,
     signature: 'Signature' = '*args,
    **kwargs')
```
| Parameter | Description |
|-----------|-------------|
| item | Callable to wrap with `ObjectModel`. |
| identifier | Identifier for the `ObjectModel`. |
| datatype | Datatype for the model outputs. |
| model_update_kwargs | Dictionary to define update kwargs. |
| output_schema | Schema for the model outputs. |
| num_workers | Number of workers to use for parallel processing |
| example | Example to auto-determine the schema/ datatype. |
| signature | Signature for the model. |

Decorator to wrap a function with `ObjectModel`.

When a function is wrapped with this decorator,
the function comes out as an `ObjectModel`.

## `Model` 

```python
Model(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '*args,
    **kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None) -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |

Base class for components which can predict.

## `ObjectModel` 

```python
ObjectModel(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '*args,
    **kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     object: 't.Callable',
     method: 't.Optional[str]' = None) -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
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
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '**kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     preprocess: 't.Optional[t.Callable]' = None,
     postprocess: 't.Optional[t.Union[t.Callable]]' = None,
     select: 'Query') -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
| preprocess | Preprocess callable |
| postprocess | Postprocess callable |
| select | query used to find data (can include `like`) |

QueryModel component.

Model which can be used to query data and return those
precomputed queries as Results.

## `Validation` 

```python
Validation(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     metrics: 't.Sequence[Metric]' = (),
     key: 'ModelInputType',
     datasets: 't.Sequence[Dataset]' = ()) -> None
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
| metrics | List of metrics for validation |
| key | Model input type key |
| datasets | Sequence of dataset. |

component which represents Validation definition.

## `Mapping` 

```python
Mapping(self,
     mapping: 'ModelInputType',
     signature: 'Signature')
```
| Parameter | Description |
|-----------|-------------|
| mapping | Mapping that represents a collection or table map. |
| signature | Signature for the model. |

Class to represent model inputs for mapping database collections or tables.

## `APIBaseModel` 

```python
APIBaseModel(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '*args,
    **kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     model: 't.Optional[str]' = None,
     max_batch_size: 'int' = 8) -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
| model | The Model to use, e.g. ``'text-embedding-ada-002'`` |
| max_batch_size | Maximum  batch size. |

APIBaseModel component which is used to make the type of API request.

## `APIModel` 

```python
APIModel(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '*args,
    **kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     model: 't.Optional[str]' = None,
     max_batch_size: 'int' = 8,
     url: 'str',
     postprocess: 't.Optional[t.Callable]' = None) -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
| model | The Model to use, e.g. ``'text-embedding-ada-002'`` |
| max_batch_size | Maximum  batch size. |
| url | The url to use for the API request |
| postprocess | Postprocess function to use on the output of the API request |

APIModel component which is used to make the type of API request.

## `CallableInputs` 

```python
CallableInputs(self,
     fn,
     predict_kwargs: 't.Dict' = {})
```
| Parameter | Description |
|-----------|-------------|
| fn | Callable function |
| predict_kwargs | (optional) predict_kwargs if provided in Model initiation |

Class represents the model callable args and kwargs.

## `IndexableNode` 

```python
IndexableNode(self,
     types: 't.Sequence[t.Type]') -> None
```
| Parameter | Description |
|-----------|-------------|
| types | Sequence of types |

Base indexable node for `ObjectModel`.

## `Inputs` 

```python
Inputs(self,
     params)
```
| Parameter | Description |
|-----------|-------------|
| params | List of parameters of the Model object |

Base class to represent the model args and kwargs.

## `ModelRouter` 

```python
ModelRouter(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '*args,
    **kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     models: 't.Dict[str,
     Model]',
     model: 'str') -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
| models | A dictionary of models to use |
| model | The model to use |

ModelRouter component which routes the model to the correct model.

## `RAGModel` 

```python
RAGModel(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'str' = 'singleton',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     prompt_template: 'str',
     select: 'Query',
     key: 'str',
     llm: 'Model') -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
| prompt_template | Prompt template. |
| select | Query to retrieve data. |
| key | Key to use for get text out of documents. |
| llm | Language model to use. |

Model to use for RAG.

## `SequentialModel` 

```python
SequentialModel(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     signature: 'Signature' = '*args,
    **kwargs',
     datatype: 'EncoderArg' = None,
     output_schema: 't.Optional[Schema]' = None,
     model_update_kwargs: None = <factory>,
     predict_kwargs: None = <factory>,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None,
     metric_values: None = <factory>,
     num_workers: 'int' = 0,
     serve: 'bool' = False,
     trainer: 't.Optional[Trainer]' = None,
     example: 'dc.InitVar[t.Any | None]' = None,
     models: 't.List[Model]') -> None
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
| signature | Model signature. |
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
| example | An example to auto-determine the schema/ datatype. |
| models | A list of models to use |

Sequential model component which wraps a model to become serializable.

## `Trainer` 

```python
Trainer(self,
     identifier: str,
     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,
     uuid: None = <factory>,
     *,
     upstream: "t.Optional[t.List['Component']]" = None,
     plugins: "t.Optional[t.List['Plugin']]" = None,
     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,
     cache: 't.Optional[bool]' = True,
     status: 't.Optional[Status]' = None,
     key: 'ModelInputType',
     select: 'Query',
     transform: 't.Optional[t.Callable]' = None,
     metric_values: None = <factory>,
     signature: 'Signature' = '*args',
     data_prefetch: 'bool' = False,
     prefetch_size: 'int' = 1000,
     prefetch_factor: 'int' = 100,
     in_memory: 'bool' = True,
     compute_kwargs: None = <factory>,
     validation: 't.Optional[Validation]' = None) -> None
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
| key | Model input type key. |
| select | Model select query for training. |
| transform | (optional) transform callable. |
| metric_values | Dictionary for metric defaults. |
| signature | Model signature. |
| data_prefetch | Boolean for prefetching data before forward pass. |
| prefetch_size | Prefetch batch size. |
| prefetch_factor | Prefetch factor for data prefetching. |
| in_memory | If training in memory. |
| compute_kwargs | Kwargs for compute backend. |
| validation | Validation object to measure training performance |

Trainer component to train a model.

Training configuration object, containing all settings necessary for a particular
learning task use-case to be serialized and initiated. The object is ``callable``
and returns a class which may be invoked to apply training.

