<!-- Auto-generated content start -->
# `superduper_sql`

Superduper ibis is a plugin for ibis-framework that allows you to use Superduper as a backend for your ibis queries.

This plugin cannot be used independently; it must be used together with `superduper_ibis`.

Superduper supports SQL databases via the ibis project. With superduper, queries may be built which conform to the ibis API, with additional support for complex data-types and vector-searches.


## Installation

```bash
pip install superduper_sql
```

## Connection examples

### MySQL

```python
from superduper import superduper

db = superduper('mysql://<mysql-uri>')
```

### Postgres

```python
from superduper import superduper

db = superduper('postgres://<postgres-uri>')
```

### Other databases

```python

from superduper import superduper

db = superduper('<database-uri>')
```
