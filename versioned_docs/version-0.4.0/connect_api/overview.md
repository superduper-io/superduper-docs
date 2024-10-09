# Connect API

Connecting to your data is the first step in any Superduper program in Python.

## Basic usage

Connecting to your data with Superduper is possible with a single command:

```python
from superduper import superduper

db = superduper('<db_type>://<location>')
```

For example to connect to the `test_db` database in a MongoDB instance running on `localhost` do:

```python
db = superduper('mongodb://localhost:27017/test_db')
```

:::important
The object `db`, returned by this command is a `superduper.base.datalayer.Datalayer` instance, 
which contains all functionality needed to interact with your data with Superduper.

In the remainder of the documentation, `db` is referred to without additional explanation.
:::


## Fine grained connection

More specific connection parameters may be passed as keyword attributes. The possible 
parameters are defined in the dataclass `superduper.base.config.Config`, which also
holds the default values for all Superduper configurations. For example, to use 
an alternative metadata store (where `Component` metadata and parameters are stored), use:

```python
db = superduper('mongodb://localhost:27017/test_db', metadata='mongodb://localhost:27017/meta_db')
```

## Using a config file

To reuse configurations in multiple programs and to separate configuration from Python code, developers 
may use a configuration file in `.yaml` format.
To specify a configuration file, developers must set the `SUPERDUPER_CONFIG=<path-to-config>.yaml` environment variable.
Here is an example:

```yaml
# Where large data blobs/ files are saved
artifact_store: filesystem://<path-to-artifact-store>

# How to encode binary data
bytes_encoding: Bytes
# bytes_encoding: Base64

# The base database you would like to connect to
data_backend: <databackend-uri>

# Settings for randomly assigning train/valid folds
fold_probability: 0.05

# Where lance indexes will be saved
lance_home: .superduper/vector_indices

# Log level to be shown to stdout
log_level: INFO
logging_type: SYSTEM

# Database to save meta-data in (defaults to `data_backend`)
metadata_store: null

# Settings for failed API requests
retries:
  stop_after_attempt: 2
  wait_max: 10.0
  wait_min: 4.0
  wait_multiplier: 1.0
```

Once the `SUPERDUPER_CONFIG` variable has been set, no parameters are required to build the connection:

```python
db = superduper()
```

## Using environment variables

In some instances it may be more convenient to work with environment variables. These 
may be used as alternative or overrides to configurations in the config file. For 
example to change the connection to primary data do:

```bash
$ export SUPERDUPER_DATA_BACKEND='mongodb://localhost:27018/documents'
```