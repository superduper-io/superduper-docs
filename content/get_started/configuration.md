---
sidebar_position: 3
tags:
  - quickstart
---

# Configure

Superduper provides a range of configurable options for setting
up your environment:

Configurations can either be injected:

- in a YAML file specified by the `SUPERDUPER_CONFIG_FILE` environment variable or
- through environment variables starting with `SUPERDUPER_`:
- as `**kwargs` when calling the [`superduper.superduper`](../core_api/connect.md) function (note this is only for development purposes).

Here are the configurable settings and their project defaults 
(remaining configurations can be viewed in [`superduper.base.config`](https://github.com/superduper/superduper/blob/main/superduper/base/config.py)). Note that as much or as little of this configuration can be specified. The remaining 
configurations will then take on their default values.


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

As an example, to reconfigure the URI of the data_backend we have two options:

An environment variable set with:

```bash
$ export SUPERDUPER_CONFIG=./config.yaml
```
And a configuration file in `./config.yaml` with this content only:

```yaml
data_backend: mongodb://localhost:27018/documents
```

... or simply set environment variables directly:

```bash
$ export SUPERDUPER_DATA_BACKEND='mongodb://localhost:27018/documents'
```

You may view the configuration used by the system with:

```bash
python -m superduper config
```
