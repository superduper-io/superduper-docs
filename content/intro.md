---
description: Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize SuperDuper technologies in your projects. (Formerly SuperDuperDB)
---

<head>
  <title>Docs - Superduper</title>
</head>

# Welcome to Superduper!

Hi 👋 and welcome to the open-source Superduper project! 

Superduper is a framework for building highly flexible, compositional AI applications which may be applied directly to databases using a declarative programming model. These applications declare and maintain a desired state of the database, and use the database directly to store outputs of AI components, meta-data about the components and data pertaining to the state of the system.

The applications are composed of Python class instances building on top of a base abstraction called a "component"; these components encompass a multitude of functionality in the AI landscape, including models, vector-indexes, training jobs and configurations as well as functionality in the data and ml-ops landscape: model-triggers, cron-jobs, injestion, visualization and more. The components may import and use any functionality from the python-AI and data ecosystems, or home-grown Python code, resulting in highly transparent, portable applications which may be trivially deployed on a range of supported databases.

Applications are deployed on databases using a virtual AI-datalayer, referred to everywhere in this documentation as `db`.
This layer is composed of several important components, encompassing primary data, meta-data, artifacts and computation, which can be configured independently by the developer.

<!-- 
Hi 👋 and welcome to the open-source Superduper project! If you 
are reading this, you are probably interested in taking full control 
of your AI-data integrations, and would like to leverage the full power
of the open-source AI ecosystem on your databases. Well done! We agree
that herein lies the path to avoiding vendor lock-in, ensuring 
proper compliance with data and AI regulation, as well as unlocking 
brand new functionality which you will build by combining best-in-class
open-source AI projects. -->

### What is Superduper?

:::tip
Superduper is a framework for building highly **flexible, compositional AI applications**.

Superduper enables developers to connect to their database via **a virtual AI-datalayer** where AI-models can interoperate
directly on the data in their databases.

**Superduper is open-sourced in Python under the Apache 2.0 license**
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

![](/img/superduper.gif)

### What problem does Superduper solve?

Bringing the type of applications which Superduper can handle to production usually involves 
sophisticated infrastructure which can execute a complex set of interdependent tasks:

- Monitoring databases for new data
- Triggering jobs on new data
- Deploying training and/ or inference jobs on specific hardware
- Spinning up infrastructure to handle jobs 
- Synchronizing vector-indexes with primary database data
- Reporting the state of these tasks back to the developer
- Much, much more...

This type of work is often referred to as MLOps, LLMOps or AIOps. These
systems are almost always rebuilt for every AI-application, and are difficult
and expensive to maintain. 

:::important
Superduper allows developers to avoid ML/LLM/AIOps completely.
:::

### How does Superduper circument ML/LLM/AIOps?

Superduper allows developers to avoid ML/LLM/AIOps via its declarative and compositional approach.
A typical workflow is as follows:

- A developer decides what state his system should be in:
  - Which model outputs should be computed on which data?
  - Which outputs should be used as vector-indexes?
  - Which models and computations depend on other models?
  - Which models should be fine-tuned on which data?
  - Which additional state should be maintained dependent on any of the above?
- For each goal, the developer creates or uses a Superduper Python class 
  which ensures that these goals are accomplished dependent on other events in the Superduper system
- A single Python object, called a Superduper "application" is created and is applied to the Superduper
  system.

For more information about Superduper and why we believe it is much needed, [read this blog post](https://blog.superduper.io/superduper-the-open-source-framework-for-bringing-ai-to-your-datastore/). 

### How can developers use Superduper?

Superduper boils down to 3 key patterns:

#### 1. Connect to your data

```python
from superduper import superduper

db = superduper('<your-database-uri>')
```

#### 2. Apply AI to your data

```python

component = ...   # build your AI with anything from the 
                  # python ecosystem

db.apply(component)
```

#### 3. Query your data to obtain predictions, select data or perform vector-searches

```python
db.execute(query)
```

### What does apply AI to data mean?

"Applying AI" to data can mean numerous things, which developers 
are able to determine themselves. Any of these things is possible:

- Compute outputs on incoming data
- Train a model on database data
- Configure vector-search on database
- Measure the performance of models
- Configure models to work together

### Why is the "DB" so important in AI?

Superduper uses the fact that AI development always starts with data, ends with data, and interfaces 
with data from conception, to productionized deployment. Any environment which has a chance of uniting 
the diverse tools and stakeholders involved in AI development, needs a single way 
for AI models and algorithms to be connected to data. ***That way is Superduper***.

:::important
By integrating AI directly at data's source, Superduper enables developers to avoid implementing MLops.
:::

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

### What important additional aspects does Superduper include?

Developers may:

- Choose whether to deploy Superduper in single blocking process or in scalable, non-blocking mode via `ray`
- Choose whether to use their own self-programmed home grown models, or integrate AI APIs and open-source frameworks
- Choose which type of data they use, including images, videos, audio, or custom datatypes
- Automatically version and track all functionality they use
- Keep control over which data is exposed to API services (if any) by leveraging model self-hosting

### Key Features:

- **[Integration of AI with your existing data infrastructure](https://docs.superduper.io/docs/docs/walkthrough/apply_models):** Integrate any AI models and APIs with your databases in a single scalable deployment without the need for additional pre-processing steps, ETL, or boilerplate code.
- **[Streaming Inference](https://docs.superduper.io/docs/docs/walkthrough/daemonizing_models_with_listeners):** Have your models compute outputs automatically and immediately as new data arrives, keeping your deployment always up-to-date.
- **[Scalable Model Training](https://docs.superduper.io/docs/docs/walkthrough/training_models):** Train AI models on large, diverse datasets simply by querying your training data. Ensured optimal performance via in-build computational optimizations.
- **[Model Chaining](https://docs.superduper.io/docs/docs/walkthrough/linking_interdependent_models/)**: Easily set up complex workflows by connecting models and APIs to work together in an interdependent and sequential manner.
- **[Simple, but Extendable Interface](https://docs.superduper.io/docs/docs/fundamentals/procedural_vs_declarative_api)**: Add and leverage any function, program, script, or algorithm from the Python ecosystem to enhance your workflows and applications. Drill down to any layer of implementation, including the inner workings of your models, while operating Superduper with simple Python commands.
- **[Difficult Data Types](https://docs.superduper.io/docs/docs/walkthrough/encoding_special_data_types/)**: Work directly in your database with images, video, audio, and any type that can be encoded as `bytes` in Python.
- **[Feature Storing](https://docs.superduper.io/docs/docs/walkthrough/encoding_special_data_types):** Turn your database into a centralized repository for storing and managing inputs and outputs of AI models of arbitrary data types, making them available in a structured format and known environment.
- **[Vector Search](https://docs.superduper.io/docs/docs/walkthrough/vector_search):** No need to duplicate and migrate your data to additional specialized vector databases - turn your existing battle-tested database into a fully-fledged multi-modal vector-search database, including easy generation of vector embeddings and vector indexes of your data with preferred models and APIs.