# Building custom AI with Superduper

Superduper aims to provide more flexibility than any other adjacent framework for building end-to-end 
AI-data applications and workflows. There are several levels of customization which developers may consider.
These span (from easiest to most involved):

- Bootstrapping applications based on our set of pre-built templates with custom parameters.
- Creating novel templates and applications using existing Superduper components.
- Creating novel components leveraging the Superduper base classes.
- Creating new data integrations enabling connection to custom data sources.
- Creating new compute engines, to deploy computations on your platform of choice.

## Templates and applications

Superduper enables developers to build reusable units of compound functionality via 
the `Application` class, and additionally parametrize components and `Application` instances
using the `Template` class.

The [templates](../templates) section of the documentation (see also [source code on GitHub](https://github.com/superduper-io/superduper/tree/main/templates)) provides useful out-of-the-box templates for use on your own data.

These templates may be applied to your data by specifying a small number of key "variables". By modifying 
these variables, developers may easily connect this functionality with their own data.

Custom templates may be built on the same model as the existing open-source templates. To do this, copy the `/templates/template` subdirectory and edit the `build.ipynb` file to build your template. When you are finished, the `template.export('.')` command saves 
the custom template as a `component.json` file plus `/files` and `/blobs`. This directory is a portable unit of functionality which 
may be reused by members of your team, network and the open-source community with `db.apply(<template>)` or `superduper apply <template_path.zip> ...`.

## Components

Superduper includes a base class [`Component`](../apply_api) which is subclassed in order to integrate functionality on `db.apply` or `superduper apply`. In addition there are key descendants of `Component`, detailed in the table below, which users will likely want to customize to build out their functionality.

| Class | Description |
| --- | --- |
| [`Component`](./component.md) | General base class for linking component data, setup tasks, and teardown tasks |
| [`Model`](./model.md) | Base class for all components which can "predict" outputs (not limited to standard ML/ AI models) |
| [`Trainer`](./training_models.md) | Base class for configuring `Model` training |
| [`Metric`](./metric.md) | Base class for measuring `Model` quality |
| [`CDC`](./cdc.md) | Base class for configuring tasks and computations to react to change data in `db.databackend` |

## Data integration

...