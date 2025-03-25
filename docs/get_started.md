# Getting started

![](https://www.youtube.com/watch?v=9rA0dGmK2-s)

## Installation

If you plan to install Superduper, you'll need at least:

- `python` 3.10+
- `pip` 22.0.4+

Superduper is available on [PyPi.org](https://pypi.org/project/superduper-framework/).

```bash
pip install superduper-framework
```

:::danger
**Note that Superduper is not installed with `pip install superduper`.**
There is another unrelated package occupying this namespace.
:::

This command will install `superduper` along with a minimal set of common dependencies required for running the framework.

Superduper also includes several plugins, which are all installable with a `superduper_` prefix. For 
example, to install the MongoDB bindings, do:

```bash
pip install superduper_mongodb
```

## Apply your first template

Note that Superduper allows developers to completely 
own their applications, self-hosting all models and data, if so wished. 
To view which templates are available, type:

```python
from superduper import Template

Template.download('simple_rag')
```

Then in a terminal install the requirements and set your OpenAI key:

```python
pip install -r templates/simple_rag/requirements.txt
export OPENAI_API_KEY=sk-...
```

To use a template do the following:

```python
from superduper import superduper, Template

t = Template.read('templates/simple_rag')

db.apply(t)

app = t()

db.apply(app)
```

Once this command has successfully executed, test the results.
In this case, the template is the simplest form of an agent 
deployed on your data, known as "retrievial-augmented-generation: RAG".

```python
# This will depend highly on the template
# View the available components with `db.show()`

db.load('RAGModel', 'simple_rag')
```

You can see how the template was built by checking out the notebook in `templates/simple_rag/build.ipynb`.