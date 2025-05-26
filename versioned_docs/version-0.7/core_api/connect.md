# Connect

The standard way to connect to Superduper is via the `superduper` decorator:


You may provide the URI/ connection details of your data deployment directly:

```python
db = superduper('<database-uri>')
```

Or add the databackend URI in a config file in (`'~/.superduper/config.yaml` or `export SUPERDUPER_CONFIG=<path>`):

```yaml
data_backend: <database-uri>
```

And then call `superduper` with no parameters:

```python
db = superduper()
```

For example if you are running a (not secure) MongoDB deployment locally, and you want to connect to the `"documents"` database, you might write:

```python
from superduper import superduper
db = superduper('mongodb://localhost:27017/documents')
```

### Save meta-data in a different connection/ databackend

For certain use-cases, it may make more sense to save your meta-data elsewhere. Do that like this:

```python
from superduper import superduper
db = superduper(
    'mongodb://localhost:27017/documents'
    metadata_store='redis://localhost:6379/0'
)
```

### Complete connection guide

For a semi-exhaustive list of possible connections see the supported data-backends [here](../data_plugins/intro).

### Fine grained configuration

`superduper` chooses additional values for your connection, based on `superduper.CFG`. These defaults may be overridden directly:

```python
db = superduper(
    '<database-uri>',
    artifact_store='<artifact-store-path>',
)
```

As an alternative add additional lines to your `superduper` config file (`'~/.superduper/config.yaml` or `export SUPERDUPER_CONFIG=<path>`).

```yaml
data_backend: <database-uri>,
artifact_store: <artifact-store-path>
json_native: true|false
log_level: INFO|DEBUG|WARN|ERROR
```