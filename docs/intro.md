---
description: Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)
---

<head>
  <title>Docs - Superduper</title>
</head>

# Superduper: framework for building custom AI applications and agents.

Superduper is a Python based framework for building **end-2-end AI-data applications and agents**, on your own data, integrating with major databases. It supports the latest technologies and techniques in generative and classical AI and machine learning.

Developers may leverage Superduper by building **compositional and declarative objects** which out-source the details of deployment, orchestration and versioning to Superduper. This allows developers to completely avoid implementing costly boilerplate, MLOps, data migration and synchronization.

Concretely, developers may:

- Create AI-agents and applications using a persisted data state, corresponding to computations involving AI models and APIs.
- Build multi-step computations, triggers and actions.
- Parametrize these AI-agents and applications as reusable units of portable functionality, known as "templates".
- Connect these computations and triggers with AI-agents, to create applications closely connected to in-house data.

## How does Superduper relate to agents?

The base classes in Superduper, have *prima facie* nothing explicitly to do with AI agents. Stripped down to its bare essentials, 
Superduper is a way to define schemas in your connected data-backend, and to associate functionality with each row of data in those tables,
and to trigger functionality dependent on the content of those rows. 

From that point-of-view, the connection to Agents may be not immediately clear. ***However***, when one considers that serious agents
need to interact with data, in order to inform their outputs and tasks, and also, need a place to specify and save their state, the connection becomes absolutely necessary. 

Take the example of an agent which is used for event scheduling. The agent might, in one instance, need to be integrated with data:

- A table of events with descriptions and optional date
- A table of potential stakeholders

The agent might, correspondingly have 2 modules:

- Grabbing yet to be scheduled events which are added to the system
- Predicting which stakeholders should attend the event
- A chat functionality to converse about upcoming events

Technically speaking this means building several interconnected modules:

- A module to lister to the events table for new events
- A module to match new events to stakeholders
- A module to suggest appropriate times for each meeting, given the stakeholders
- A module which understands human feedback and which has access to the tables with scheduling

From this setup, it's clear that an appropriate agent isn't simply an interface which can answer
your questions, and maybe react to your inputs with some task execution. Rather, the correct agent 
implementation should have access to a database, listen for incoming data, flexibly compute outputs
on this data, taking into account appropriate tables in the database, and comprise a chat interface 
which connects these modules with the human operator.

## How does Superduper enable sophisticated agents

Agents which interact with data, as in the above example, are highly complex to implement. If done properly, they require:

- Maintaining a highly intricate state
- Integrating with production data in databases
- Deploying, connecting to, and maintaining many endpoints
- Taking care of the life-cycle of AI models:
  - Feature computations
  - Training and re-training
  - Computation and caching of outputs
- A range of infrastructual work, from deploying custom hardware, triggering auto-scaling,
  to deploying specialized solutions such as vector-search engines, model repositories and more
- A highly demanding to implement versioning system

What if none of this was necessary? What if AI engineers, data-scientist and decision makers, 
could simply "apply" AI to the data in their data deployments? For example, the framework would simply require:

```python
db.apply(agent)
```

This framework is `superduper`.


## Four characteristic steps

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
from superduper import Component

# build your MyAgent class with superduper and other best-in-class frameworks 
class MyAgent(Component):
    param_1: str
    param_2: int
    ...

    def execute(self, task: str):
        ...

agent = MyAgent('agent', param_1='Your task is to solve problems', param_2=20)
db.apply(agent)
```

**Package**

```python
application = Application('my-agent-app', components=[agent, vector_index])
template = Template('my-agent-template', component=app, substitutions={'documents': 'table'})
template.export('my-analysis')
```

**Execute**

```python
agent = db.load('MyAgent', 'agent')
agent.execute('Research me a holiday to Mars, and book if possible.')
```

## How does Superduper work?

Superduper is an AI- application and agent builder which is:

- declarative 
- composable

## Declarative paradigm

Superduper's main building block is class called a `Component`, which allows developers
to build applications which "declare" the state they want the system to reach:

- Which outputs should be kept up-to-date with which database input queries?
- Which models should be deployed?
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
- Redis
- MySQL
- Snowflake

#### AI frameworks

- OpenAI
- Cohere
- Anthropic
- PyTorch
- Sklearn
- Transformers
- Sentence-Transformers