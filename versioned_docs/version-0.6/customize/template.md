# Creating custom templates

Read about the `Template` component [here](../apply_api/template.md).

## Existing templates

There are several inbult templates included in `superduper` which you can view with

```bash
superduper ls
```

To create your own template on the basis of the existing templates, run:

```bash
superduper bootstrap <template_name> --destination <output_dir>
```

Each inbuilt template directory includes a `build.ipynb` notebook. This
notebook may be used to prototype your template, and work interactively.
Once you are ready, you may export the template with the command:

```python
my_template.export('.')
```

## Best practices

### Use a notebook

We have built all of our templates using Jupyter notebooks 
as the "build tool". The reason this is useful, is because 
developers can apply each of their components as they go, 
and interactively debug their workflow using sample data.

When finished, the sample data and chosen parameters can 
then be directly shipped as defaults in the `Template` 
or substituted with variables. In this way, 
the developer only needs to make sure that the notebook 
works, and Superduper will take care of everything else.

Navigate to GitHub to check out the [example templates](https://github.com/superduper-io/superduper/tree/main/templates).

### Ship sample data with the template

In order to ship sample data with your template, you may provide data in 
the `default_table` argument. For example in the `simple_rag` template we
see this command.

```python
from superduper import Template, Table, Schema
from superduper.components.dataset import RemoteData

template = Template(
    'simple_rag',
    template=app,
    substitutions={COLLECTION_NAME: 'table_name', OUTPUT_PREFIX: 'output_prefix', 'mongodb': 'databackend'},
    template_variables=['table_name', 'id_field', 'output_prefix', 'databackend'],
    default_table=Table(
        'sample_simple_rag',
        schema=Schema('sample_simple_rag/schema', fields={'x': 'str'}),
        data=RemoteData(
            'superduper-docs',
            getter=getter,
        )
    ),
    types={
        'id_field': {
            'type': 'str',
            'default': '_id',
        },
        'llm_model': {
            'type': 'str',
            'choices': ['openai', 'anthropic', 'vllm', 'llamacpp'],
            'default': 'openai',
        },
        'embedding_model': {
            'type': 'str',
            'choices': ['openai', 'sentence_transformers'],
            'default': 'openai',
        },
        'table_name': {
            'type': 'str',
            'default': SAMPLE_COLLECTION_NAME,
        },
        'databackend': {
            'type': 'str',
            'default': 'mongodb',
        }
    }
)
```

By wrapping the data inside a `getter` function, use the `RemoteData` component.

### Make sure that the template builds, without needing to apply the components

The inbult template notebooks include the parameter `APPLY = True/ False`.
The notebook then toggles whether to actually apply all components with
`db.apply(component)`. When iterating, it is useful to toggle this behaviour 
to off, so that the template may be exported quickly.
