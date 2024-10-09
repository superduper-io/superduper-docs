# Getting started

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
The simplest template `"rag"` uses the OpenAI API, however, to facilitate
using the system. For this, one sets the `OPENAI_API_KEY` env. variable:

```bash
export OPENAI_API_KEY=sk-...
```

To try a simple RAG application either do:

```bash
superduper apply rag mongodb://localhost:27017/test_db --collection my-collection --model gpt-3.5-turbo
```

Or from python:

```python
from superduper.templates import rag
db.apply(rag)
```

Once this command has successfully executed, view the results in the user interface:

```bash
superduper start
```

Navigate to the execute tab to test the results:

<!-- ![](./img/screenshot_execute.png) -->

Superduper includes a range of pre-packaged templates, view these templates with:

```bash
superduper ls
```