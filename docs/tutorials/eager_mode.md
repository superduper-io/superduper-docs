# Eager Mode (Alpha) 

Eager Mode is an interactive way to build superduper applications. 

Users can input data as usual, continuously call models, and view results.
Once the interactive debugging and construction are complete, 
the corresponding data pipeline can be built directly through `apply`, 
eliminating the need for direct debugging between AI application models and databases.

:::note
This feature is in alpha.
:::

Connect the database and insert data.


```python
from superduper import superduper

db = superduper('mongomock://test')
```


```python
import numpy as np
data = [
    {"x": 1, "y": "2", "z": np.array([1, 2, 3])},
    {"x": 2, "y": "3", "z": np.array([4, 5, 6])},
    {"x": 3, "y": "4", "z": np.array([7, 8, 9])},
]

db["documents"].insert(data).execute()
```

When using `select.execute(eager_mode=True)`, all returned data will enter eager mode, which can be used for interactive model pipeline construction.


```python
data = list(db["documents"].select().execute(eager_mode=True))[0]
data
```

Define the first model and make predictions.


```python
from superduper import ObjectModel
def func_a(x):
    return {"x": x, "model": "a"}

model_a = ObjectModel(identifier="a", object=func_a)
output_a = model_a(data["x"])
output_a
```

Define the second model and make predictions.


```python
def func_b(x, y, o_a):
    return {
        "x": x,
        "y": y,
        "o_a": o_a,
        "model": "b"
    }

model_b = ObjectModel(identifier="b", object=func_b)
output_b = model_b(data["x"], data["y"], output_a)
output_b
```

Define the third model and make predictions.


```python
def func_c(x, y, z, o_a, o_b):
    return {
        "x": x,
        "y": y,
        "z": z,
        "o_a": o_a,
        "o_b": o_b,
        "model": "c",
    }

model_c = ObjectModel(identifier="c", object=func_c)
output_c = model_c(data["x"], data["y"], data["z"], output_a, output_b)
output_c
```

Apply all models to the data to start monitoring the data and making predictions.
When adding a model result, not only the current model but also the recursively dependent upstream models will be added.


```python
output_c.apply()
```


```python
list(db["documents"].select().outputs("a", "b", "c").select().execute())
```

If you want to modify the predict_id of a specific model, 
you can use `output.predict_id = "your_predict_id"` to set it.


```python
model_predict_id = ObjectModel(identifier="c", object=func_c)
output_predict_id = model_predict_id(data["x"], data["y"], data["z"], output_a, output_b)
output_predict_id.predict_id = "new_predict_id"
output_predict_id.apply()
```

View the prediction results of all data in the database.


```python
list(db["_outputs.new_predict_id"].select().execute())
```

If you want to perform if-like conditional operations to route data using different models, you can use `set_condition` to handle it. Currently, only equals and not equals conditions are supported.


```python
model_condition = ObjectModel(identifier="condition", object=func_a)
output_condition = model_condition(data["x"])
output_condition.set_condition(data["x"] == 1)
output_condition.apply()
output_condition
```


```python
db['documents'].find({}, {'x': 1, '_builds': 1, '_files': 1, '_blobs': 1, '_schema': 1}).filter({'x': 1}).execute()
```


```python
list(db["_outputs.condition"].select().execute())
```
