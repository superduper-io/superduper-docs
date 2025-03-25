# Execute

`db.execute` is superduper's wrapper around standard database queries:

- Inserts
- Selects
- Updates
- Deletes

As well as model predictions:

- Prediction on single data points (streaming)
- Predictions on multiple data points (batch prediction)

And also queries which consist of a combination of model computations and data operations:

- Vector-search queries
- Complex model predictions which include database queries (e.g. "RAG")

Standard database queries are built using a compositional syntax similar to that found in Python database clients 
such as `pymongo` and `ibis`. The API also includes extensions of this paradigm to cover model predictions
and vector-searches.

Read more about the differences and approaches to document stores/ SQL data-backends [here](docs/data_integrations).

## Building queries/ predictions

All queries consist of a "chain" of methods executed over a base object. The base object 
can refer to a table/ collection or a model:

```python
q = base_object.method_1(*args_1, **kwargs_1).method_2(*args_2, **kwargs_2)....
```

### Selects

***Table select***

```python
# All data
data = db['<table>'].execute()

# One datapoint
r = db['<table>'].get()
```

***Select columns/ fields***

```python
data = db['<table>'].select('x', 'y').execute()
```

***Select rows***

```python
t = db['<table>']
data = t.filter(t['x'] > 2).execute()
```

***Select rows and columns***

```python
t = db['<table>']
data = t.filter(t['x'] > 2).select('x', 'y').execute()
```

***Get outputs of one or more `Listener` instances***

```python
listener_1 = db.load('Listener', '<listener_1>')
listener_2 = db.load('Listener', '<listener_2>')
joined_outputs_1 = db['<table>'].outputs(listener_1.predict_id).execute()
joined_both_outputs = db['<table>'].outputs(listener_1.predict_id, listener_2.predict_id).execute()
```

***Get the ids of a query***

```python
query = db['<table'>]   # Any select
ids = query.ids()
```

***Get the distinct values of a column***

```python
query = db['<table'>]   # Any select q
distinct_x = query.distinct('x')
```

***MongoDB***

A MongoDB `find` query can be built like this:

```python
q = db['collection'].find().limit(5).skip(2)
```

***SQL***

A query with on an SQL data-backend can be built with `ibis` syntax like this:

```python
q = db['documents'].filter(t.brand == 'Nike').limit(5)
```

### Inserts

***MongoDB***

Typically insert queries wrap `Document` instances and call the `insert` method on a table or collection:

```python
q = db['documents'].insert_many([Document(r) for r in data])
```

***SQL***

The `ibis` insert is slightly different:

```python
q = db['documents'].insert([Document(r) for r in data])
```

## Executing the query


```python
results = q.execute()
```

***Multiple results***

Iterables of results are sent wrapped in a cursor

***Indiviudal results***

Individual results are sent wrapped in a `Document`

Read more about `.execute` [here](../execute_api/overview).