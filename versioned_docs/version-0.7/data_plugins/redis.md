<!-- Auto-generated content start -->
# `superduper_redis`

Save data and meta-data in Redis.

## Installation

```bash
pip install superduper_redis
```

## API


- [Code](https://github.com/superduper-io/superduper/tree/main/plugins/redis)
- [API-docs](/docs/api/plugins/superduper_redis)


## Connection examples

```python
from superduper import superduper
db = superduper('redis://localhost:6379/0')
```

```python
from superduper import superduper
db = superduper('mongodb://localhost:27017/documents', metadata_store='redis://localhost:6379/0')
```
