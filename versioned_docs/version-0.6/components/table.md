# `Table`

- Use a table in your databackend database, which optionally has a `Schema` attached
- Table can be a `MongoDB` collection or an SQL table.

***Usage pattern***

(Learn how to build a `Schema` [here](schema))

```python
from superduper.backends.ibis import Table

table = Table(
    'my-table',
    fields={'<field_name': '<datatype>', ...}
)

db.apply(table)
```