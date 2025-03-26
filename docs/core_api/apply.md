# Apply

In superduper there are three fundamental components which you'll use quite a lot:

- [`Model`](../components/model)
- [`Listener`](../components/listener)
- [`VectorIndex`](../components/vector_index)

In addition there is an overarching component, which is for "binding-togther" components.

- [`Application`](../components/application)

You might also be interested in the change-data-capture base class and the cron-job base class, 
which are for building applications which respond through changing data:

- [`CDC`](../components/cdc)
- [`CronJob`](../components/cron_job)

Whenever you wish to apply AI to your data, you will instantiate one of more of these, and "apply" these to 
your datalayer:

```python
db.apply(component)
```

## Base components

### `Model`

A `Model` is a wrapper around a standard ML/ AI model. It may contain additional functionality, such as 
pre- and post-processing, and encoding/ decoding data into/ from the correct type required by the database.

`db.apply(model)` tells `superduper` to store the model and its metadata in the system.

If additional configurations, such as training parameters, are added to the `Model` then the `db.apply` command
will also train the component on data in superduper.

Read more about `Model` [here](../components/model).

### `Listener`

A `Listener` wraps a `Model`. The `db.apply(listener)` tells `superduper` to "listen" for incoming data and to compute outputs on those data, saving them back in `superduper`.

Read more about `Listener` [here](../components/listener).

### `VectorIndex`

A `VectorIndex` wraps one or two `Listener` components, and tells `superduper` that the outputs computed, should
be made searchable via vector-search queries.

Read more about `VectorIndex` [here](../components/vector_index).

### `CDC`

A `CDC` is a base class which allows users to decorate methods to respond to change-data
in specific tables.

Read more about `CDC` [here](../components/cdc).

### `CronJob`

A `CronJob` is a base class which allows users to schedule work which integrates with 
`db` and potentially triggers downstream computations and data inserts.

Read more about `CronJob` [here](../components/cdc).

## Connecting component: `Application`

A `Application` of AI functionality is a combination of multiple components which may be "applied" in 
one pass with `db.apply`.

On `db.apply(application)` superduper performs the heavy lifting of deciding which components need to be applied 
first, which need to be modified on incoming data, and which outputs need to be made searchable.

Read more about `Application` [here](../components/application).

## View applied components

Use `db.show` to view components.

View all components:

```python
>>> db.show()
[
  {'component': 'MyModel', 'identifier': 'my-model'},
  {'component': 'MyOtherModel', 'identifier': 'my-other-model'}
]
```

View all components of a certain type:

```python
>>> db.show('<component>')
['my-model', 'my-other-model']
```

View all versions of a particular component:

```python
>>> db.show('<component>', '<component_identifier>')
[0, 1, 2, 3]
```

## Reloading applied components

When components are applied with `db.apply(component)`, the component is provided with a version, which may be optionally used to reload the component.
By default the latest version is reloaded:

```python
reloaded = db.load('<component>', '<component_identifier>')
```

```python
reloaded = db.load('<component>', '<component_identifier>', <version>)
```

For example to reload a model based on the class `MyModel` identified by 'my-model', the first version added:

```python
reloaded_model = db.load('MyModel', 'my-model', 0)
```