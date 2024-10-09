# `Template`

- Wraps a `Component` containing placeholders flagged with `<var:?>`
- A `Template` may be used as the basis for applying multiple `Component` instances
- A `Template` is useful for sharing, migrating and distributing AI components
- A `Template` may be deployed on any Superduper deployment

***Usage pattern***

```python
from superduper import *

m = Listener(
    model=ObjectModel(
        object=lambda x: x + 2,
        identifier='<var:model_id>',
    ),
    select=db['<var:collection>'].find(),
    key='<var:key>',
)

# optional "info" parameter provides details about usage (depends on developer use-case)
t = Template('my-template', template=m.encode())

# doesn't trigger work/ computations
# just "saves" the template and its artifacts
db.apply(t) 

## template may also be exported to a portable format
t.export()

listener = t(key='my_key', collection='my_collection', model_id='my_id')

# this now triggers standard functionality
db.apply(listener)
```

***See also***

- [Application](./application.md)
