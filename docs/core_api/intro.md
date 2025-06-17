# Core superduper usage

In this section we walk through how to perform the key operations with superduper.
There are three key patterns C-A-E:

***Connect***

```python
from superduper import superduper
db = superduper('<data-connection>')
```

***Apply***

```python
db.apply(<ai_component>)
```

***Package***

```python
<ai_component>.export('<path>')
```

***Execute***

Execute a query:

```python
query = db['table'].filter(...) # .select(...) | .outputs(...) | .like(...)
results = query.execute()
```

Use an installed `Component`:

```python
component = db.load('<component>', '<identifier>')

component.<method>(*args, **kwargs)
```
