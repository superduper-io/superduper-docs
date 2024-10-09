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

```python
from superduper import Template
template = Template(
    '<template-name>',
    component=<ai_component>,
    substitutions={'<value_to_replace>': '<variable_name>', ...}
)
```

***Execute***

```python
to_execute = <build_your_database_query_or_model_prediction>
db.execute(to_execute)
```
