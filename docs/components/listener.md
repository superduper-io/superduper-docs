# `Listener`

- apply a `model` to compute outputs on a query
- outputs are refreshed every-time new data are added
- outputs are saved to the `db.databackend`

***dependencies***

- [`Model`](./model.md)

***usage pattern***

(learn how to build a model [here](model))

```python
from superduper import Listener
m = ...  # build a model
q = ... # build a select query

listener = Listener(
    model=m,
    select=q,
    key='x',
)

db.apply(listener)
```

:::info
*how do i choose the `key` parameter?*
`key` refers to the field, or fields which 
will be fed into the `model` as `*args` and `**kwargs`

the following forms are possible:
- `key='x'`, 
- `key=('x','y')`, 
- `key={'x': 'x', 'y': 'y'}`, 
- `key=(('x',), {'y': 'y'})`,
:::

:::danger
refactor the rest, also mention eager mode
:::

# Configuring models to ingest features from other models

There are two ways to connect models in Superduper:

- via interdependent `Listeners`
- via the `Graph` component

In both cases, the first step is define the computation graph using 
a simple formalism.

## Building a computation graph

Here is an example of building a graph with 3 members:

```python
from superduper.components.graph import document_node
from superduper import ObjectModel

m1 = ObjectModel('m1', object=lambda x: x + 1)
m2 = ObjectModel('m2', object=lambda x: x + 2)
m3 = ObjectModel('m3', object=lambda x, y: x * y)

input = document_node('x1', 'x2')

# `outputs` specifies in which field the outputs will be cached/ saved
out1 = m1(x=input['x1'], outputs='o1')
out2 = m2(x=input['x2'], outputs='o2')
out3 = m3(x=out1, y=out2, outputs='o3')
```

The variable `out3` now contains the computation graph in `out3.parent_graph`.

In order to use this graph, developers may choose between creating a `Model`
instance which passes inputs recursively through the graph:

```python
>>> graph_model = out3.to_graph('my_graph_model')
>>> graph_model.predict({'x1': 1, 'x2': 2})
6
```

and creating an `Application` which bundles several `Listener` instances which can be applied with `db.apply`
where intermediate outputs are cached in `db.databackend`.
The order in which these listeners are applied respects the graph topology.

```python
q = db['my_documents'].find()
stack = out3.to_listeners(q, 'my_stack')
db.apply(stack)
```
