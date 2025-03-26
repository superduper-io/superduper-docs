# Execute

`superduper` allows developers to build their functionality on document-stores as well as SQL databases. 
To enable portability, it includes it's own simple query abstraction, which wraps the `db.databackend` native queries.
Queries are built using a compositional syntax similar to that used by `pandas` and `ibis`. The API also includes extensions of this paradigm to cover vector-searches.

`superduper` supports:

- Inserts
- Selects
- Updates
- Deletes

In addition hybrid queries involving a combination of vector-search and filtering are supported:

- Vector-search queries

### Selects

All select queries consist of a "chain" of methods executed over a base table.

```python
q = db['<table_name>'].method_1(*args_1, **kwargs_1).method_2(*args_2, **kwargs_2)....
```

Select queries can be passed around as objects, and are lazily executed with `.execute()` and `.get(...)`.
They play a role in certain `Component` implementations such as `Listener` and `VectorIndex`. Developers
may incorporate select queries as associated data in their own custom `Component` implementations.

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
ids = query.ids()   # Any select query
```

***Get the distinct values of a column***

```python
distinct_x = query.distinct('x')   # Any select query
```

***Restrict the range of a query to certain primary ids***

```python
data = query.subset(ids)
```

### Vector search

***Vanilla vector-search***

```python
db['<table_name>'].like({'<key>': <value>}, vector_index='<vector_index>', n=<n>).execute()
```

***Pre-filtered***

```python
t = db['<table_name>']
condition = t['<key>'] == <value>   # ==, <=, >=

t.filter(condition).like({'<key>': <value>}, vector_index='<vector_index>', n=<n>).execute()
```

***Post-filtered***

```python
t.like({'<key>': <value>}, vector_index='<vector_index>', n=<n>).filter(condition).execute()
```

### Insert

`superduper` supports inserting data which is a combination of JSON-native content, 
and objects which need to be serialized as `bytes` using a Python based serialized (e.g. 
`pickle`, `dill` or a custom serializer).

`superduper` has a typing system which is un-pedantic, doing the minimum necessary 
to get content saved in the `db.databackend`.

Inserting data is possible in two ways, either by creating a table with typed fields, 
or by created a `superduper.base.Base` class with type annotations:

***Available datatypes***

| Name | Description | 
| --- | --- |
| `str` | Python string |
| `int` | Python integer |
| `float` | Python float |
| `bool` | Python boolean |
| `json` | JSON-able objects (`list`, `dict`) |
| `dillencoder` | Save content in `db.databackend` base64 encoded |
| `dill` | Save content as bytes in `db.artifact_store` |
| `file` | Save reference as a file in `db.artifact_store` |
| `package.module.variable_name` | Custom datatype implementing `superduper.base.datatype.BaseDatatype` |
| `basetype` | Indicates a `superduper.base.Base` class |
| `componenttype` | Indicates a `superduper.components.component.Component` type |
| `componentdict` | A dictionary `str -> Component` |
| `componentlist` | A list of `Component` |
| `vector[float:32]` | A searchable `numpy.array` with datatype and shape |

***Create a `Table` with typed columns***

Example data:

```python
import PIL.Image

data = [
    {'x': 'test', 'y': 1, 'z': PIL.Image.open('my_image_1.png')},
    {'x': 'test', 'y': 2, 'z': PIL.Image.open('my_image_2.png')}
]
```

```python
db.apply(
    Table(
        'documents',
        fields={'x': 'str', 'y': 'int', 'z': 'dill'}
    )
)

q = db['documents'].insert(data)
```

***Create an implicit `Table` and typed columns with a `Base` subclass***

```python
from superduper.base.Base

class documents(Base):
    x: str
    y: int
    z: t.Any

db.insert(
    documents(x=r['x'], y=r['y'], z=r['z'])
    for r in data
)
```

### Update

Update the table where the values in `kwargs` apply:

```python
db['<table_name>'].update(**kwargs)
```

### Delete

Delete rows from the table where the values in `kwargs` apply:

```python
db['<table_name>'].delete(**kwargs)
```