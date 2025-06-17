# Getting started

## Installation

If you plan to install Superduper, you'll need at least:

- `python` 3.10+
- `pip` 22.0.4+

Superduper is available on [PyPi.org](https://pypi.org/project/superduper-framework/).

```bash
pip install superduper-framework
```

:::warning
**Note that Superduper is not installed with `pip install superduper`.**
There is another unrelated package occupying this namespace.
:::

This command will install `superduper` along with a minimal set of common dependencies required for running the framework.

Superduper also includes several plugins, which are all installable with a `superduper_` prefix. For 
example, to install the MongoDB bindings, do:

```bash
pip install superduper_mongodb
```

## Connect to your configured databackend

```python
db = superduper()
```

## Add some data

```python
import lorem
from superduper import Base

class MyTable(Base):
    x: str

db.insert([MyTable(x=lorem.sentence()) for _ in range(10)])
```

## Apply your first `Component`

Here is a simple inbuilt `superduper.Component` which computes outputs 
on the inserted data.

```python
model = ObjectModel('test_model', lambda x: 'TEST OUTPUT ' + x)
listener = Listener('test_listener', select=db['MyTable'], key='x', model=model)

db.apply(listener)
```

## Reload the `Component` and query the outputs

```python
listener = db.load('Listener', 'test_listener')
db[listener.outputs].execute()
```

