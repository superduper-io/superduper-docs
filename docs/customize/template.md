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
