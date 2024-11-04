---
description: Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)
---

<head>
  <title>Docs - Superduper</title>
</head>

# Superduper: framework for building AI-data applications and workflows on databases.

Superduper is a Python based framework for building **end-2-end AI-data workflows and applications** on your own data, integrating with major databases. It supports the latest technologies and techniques, including LLMs, vector-search, RAG, multimodality as well as classical AI and ML paradigms.

Developers may leverage Superduper by building **compositional and declarative objects** which out-source the details of deployment, orchestration and versioning to Superduper. This allows developers to completely avoid implementing MLOps, ETL pipelines, model deployment, data migration and synchronization.

Concretely, developers may:

- Create AI-applications using a persisted data state, corresponding to computations involving AI models and APIs.
- Build multi-step computations, triggers and actions
- Parametrize these AI-applications as reusable units of portable functionality, known as "templates"

Superduper involves 4 characteristic phases, summarized as "**CAPE**": **connect** to data, **apply** arbitrary AI to that data, **package** and reuse the application on arbitrary data, and **execute** AI-database queries and predictions on the resulting AI outputs and data.

- **Connect**
- **Apply**
- **Package**
- **Execute**

**Connect**

```python
db = superduper('mongodb|postgres|mysql|sqlite|duckdb|snowflake://<your-db-uri>')
```

**Apply**

```python
listener = MyLLM('self_hosted_llm', architecture='llama-3.2', postprocess=my_postprocess).to_listener('documents', key='txt')
db.apply(listener)
```

**Package**

```python
application = Application('my-analysis-app', components=[listener, vector_index])
template = Template('my-analysis', component=app, substitutions={'documents': 'table'})
template.export('my-analysis')
```

**Execute**

```python
query = db['documents'].like({'txt', 'Tell me about Superduper'}, vector_index='my-index').select()
query.execute()
```

:::info
An **AI-data** application is a new generation of application involving cross talk between AI models and data, which is updated 
dynamically in response to changing data, and supports a range of data queries, including queries involving AI model inferences.

Basic examples include:

- *Retrieval augmented generation*
- *Data dependent retraining protocols*
- *Semantic multimodal product search with text, image and product JSON formats.*

There is a whole world of AI-data applications out there waiting to be built.
Superduper is the perfect framework with which to get started!
:::

## What problem does Superduper solve?

AI-data applications are highly complex. They require:

- Maintaining a highly intricate state
- Integrating with production data in databases
- Deploying and maintaining many endpoints
- Taking care of the life-cycle of AI models:
  - Feature computations
  - Training and re-training
  - Computation and caching of outputs
- A range of infrastructual work, from deploying custom hardware, triggering auto-scaling,
  to deploying specialized solutions such as vector-search engines, model repositories and more

The fact that all of this is necessary explains the existence of the MLOPs, AIOps, LLMOps fields of engineering.

What if none of this was necessary? What if AI engineers, data-scientist and decision makers, 
could simply "apply" AI to the data in their data deployments? For example, the framework required would allow this type of command:

```python
<framework> apply ./path_to_app.zip your://database-uri
```

That "framework" is `superduper`:

```python
superduper apply ./path_to_app.zip your://database-uri
```

## How does Superduper work?

Superduper is an AI-data application builder which is:

- declarative 
- composable

## Declarative paradigm

Superduper's main building block is class called a `Component`, which allows developers
to build applications which "declare" the state they want the system to reach:

- Which outputs should be kept up-to-date with which database input queries?
- Which models should be deployed as endpoints?
- Which models should be fine-tuned on which data prior to use?
- Which outputs should be synchronized as vector-indexes?
- Which computations should be run on a schedule?
- Much, much more...

This aspect of the system is referred to as a declarative programming paradigm.

## Compositionality

Superduper includes a range of `Component` types which may be easily subclassed and interchanged.
For example, if a developer has prototyped his model using an OpenAI LLM implementation, the LLM may be trivially exchanged for an on-premise, self-hosted Llama-3 implementation with a simple and predictable toggle in the codebase.

From version 0.0.4 onwards, Superduper includes a range of plugins which developers may pick and choose from in open source, as well as a clear path for developers to build their own plugins. This plugin
architecture plays well with the compositional nature of the project.

## Datalayer

Applications are deployed on databases using a virtual AI-datalayer, referred to everywhere in this documentation as `db`.

This layer is composed of several important components, encompassing primary data, meta-data, artifacts and computation, which can be configured independently by the developer.

## Superduper is open-sourced in Python under the Apache 2.0 license

We want to make Superduper the most inclusive and flexible AI-data framework around.

:::note
Superduper is licensed under the Apache 2.0 license as a key cornerstone 
of its philosophy and community ethos.
:::

### Superduper can handle classical AI/ machine learning paradigms...

- classification
- regression
- forecasting
- clustering
- *and much, more more...*

### As well as the most update to date techniques...

- generative AI
- LLMs
- retrieval augmented generation (RAG)
- computer vision
- multimodal AI
- *and much, more more...*

![](/img/loop_new.f45d4893.svg)

### What integrations does Superduper include?

#### Data

- MongoDB
- PostgreSQL
- SQLite
- Snowflake
- MySQL
- Oracle
- MSSQL
- Clickhouse
- Pandas

#### AI frameworks

- OpenAI
- Cohere
- Anthropic
- PyTorch
- Sklearn
- Transformers
- Sentence-Transformers