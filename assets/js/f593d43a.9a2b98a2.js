"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1956],{5648:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const a={description:"Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)"},r="Superduper: framework for building custom AI applications and agents.",o={id:"intro",title:"intro",description:"Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)",source:"@site/versioned_docs/version-0.6/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.6/intro.md",tags:[],version:"0.6",frontMatter:{description:"Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)"},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/get_started"}},l={},d=[{value:"How does Superduper relate to agents?",id:"how-does-superduper-relate-to-agents",level:2},{value:"How does Superduper enable sophisticated agents",id:"how-does-superduper-enable-sophisticated-agents",level:2},{value:"Four characteristic steps",id:"four-characteristic-steps",level:2},{value:"How does Superduper work?",id:"how-does-superduper-work",level:2},{value:"Declarative paradigm",id:"declarative-paradigm",level:2},{value:"Compositionality",id:"compositionality",level:2},{value:"Datalayer",id:"datalayer",level:2},{value:"Superduper is open-sourced in Python under the Apache 2.0 license",id:"superduper-is-open-sourced-in-python-under-the-apache-20-license",level:2},{value:"Superduper can handle classical AI/ machine learning paradigms...",id:"superduper-can-handle-classical-ai-machine-learning-paradigms",level:3},{value:"As well as the most update to date techniques...",id:"as-well-as-the-most-update-to-date-techniques",level:3},{value:"What integrations does Superduper include?",id:"what-integrations-does-superduper-include",level:3},{value:"Data",id:"data",level:4},{value:"AI frameworks",id:"ai-frameworks",level:4}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{children:(0,t.jsx)("title",{children:"Docs - Superduper"})}),"\n",(0,t.jsx)(n.h1,{id:"superduper-framework-for-building-custom-ai-applications-and-agents",children:"Superduper: framework for building custom AI applications and agents."}),"\n",(0,t.jsxs)(n.p,{children:["Superduper is a Python based framework for building ",(0,t.jsx)(n.strong,{children:"end-2-end AI-data applications and agents"}),", on your own data, integrating with major databases. It supports the latest technologies and techniques in generative and classical AI and machine learning."]}),"\n",(0,t.jsxs)(n.p,{children:["Developers may leverage Superduper by building ",(0,t.jsx)(n.strong,{children:"compositional and declarative objects"})," which out-source the details of deployment, orchestration and versioning to Superduper. This allows developers to completely avoid implementing costly boilerplate, MLOps, data migration and synchronization."]}),"\n",(0,t.jsx)(n.p,{children:"Concretely, developers may:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create AI-agents and applications using a persisted data state, corresponding to computations involving AI models and APIs."}),"\n",(0,t.jsx)(n.li,{children:"Build multi-step computations, triggers and actions."}),"\n",(0,t.jsx)(n.li,{children:'Parametrize these AI-agents and applications as reusable units of portable functionality, known as "templates".'}),"\n",(0,t.jsx)(n.li,{children:"Connect these computations and triggers with AI-agents, to create applications closely connected to in-house data."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-does-superduper-relate-to-agents",children:"How does Superduper relate to agents?"}),"\n",(0,t.jsxs)(n.p,{children:["The base classes in Superduper, have ",(0,t.jsx)(n.em,{children:"prima facie"})," nothing explicitly to do with AI agents. Stripped down to its bare essentials,\nSuperduper is a way to define schemas in your connected data-backend, and to associate functionality with each row of data in those tables,\nand to trigger functionality dependent on the content of those rows."]}),"\n",(0,t.jsxs)(n.p,{children:["From that point-of-view, the connection to Agents may be not immediately clear. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"However"})}),", when one considers that serious agents\nneed to interact with data, in order to inform their outputs and tasks, and also, need a place to specify and save their state, the connection becomes absolutely necessary."]}),"\n",(0,t.jsx)(n.p,{children:"Take the example of an agent which is used for event scheduling. The agent might, in one instance, need to be integrated with data:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A table of events with descriptions and optional date"}),"\n",(0,t.jsx)(n.li,{children:"A table of potential stakeholders"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The agent might, correspondingly have 2 modules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Grabbing yet to be scheduled events which are added to the system"}),"\n",(0,t.jsx)(n.li,{children:"Predicting which stakeholders should attend the event"}),"\n",(0,t.jsx)(n.li,{children:"A chat functionality to converse about upcoming events"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Technically speaking this means building several interconnected modules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A module to lister to the events table for new events"}),"\n",(0,t.jsx)(n.li,{children:"A module to match new events to stakeholders"}),"\n",(0,t.jsx)(n.li,{children:"A module to suggest appropriate times for each meeting, given the stakeholders"}),"\n",(0,t.jsx)(n.li,{children:"A module which understands human feedback and which has access to the tables with scheduling"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"From this setup, it's clear that an appropriate agent isn't simply an interface which can answer\nyour questions, and maybe react to your inputs with some task execution. Rather, the correct agent\nimplementation should have access to a database, listen for incoming data, flexibly compute outputs\non this data, taking into account appropriate tables in the database, and comprise a chat interface\nwhich connects these modules with the human operator."}),"\n",(0,t.jsx)(n.h2,{id:"how-does-superduper-enable-sophisticated-agents",children:"How does Superduper enable sophisticated agents"}),"\n",(0,t.jsx)(n.p,{children:"Agents which interact with data, as in the above example, are highly complex to implement. If done properly, they require:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maintaining a highly intricate state"}),"\n",(0,t.jsx)(n.li,{children:"Integrating with production data in databases"}),"\n",(0,t.jsx)(n.li,{children:"Deploying, connecting to, and maintaining many endpoints"}),"\n",(0,t.jsxs)(n.li,{children:["Taking care of the life-cycle of AI models:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Feature computations"}),"\n",(0,t.jsx)(n.li,{children:"Training and re-training"}),"\n",(0,t.jsx)(n.li,{children:"Computation and caching of outputs"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"A range of infrastructual work, from deploying custom hardware, triggering auto-scaling,\nto deploying specialized solutions such as vector-search engines, model repositories and more"}),"\n",(0,t.jsx)(n.li,{children:"A highly demanding to implement versioning system"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'What if none of this was necessary? What if AI engineers, data-scientist and decision makers,\ncould simply "apply" AI to the data in their data deployments? For example, the framework would simply require:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.apply(agent)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This framework is ",(0,t.jsx)(n.code,{children:"superduper"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"four-characteristic-steps",children:"Four characteristic steps"}),"\n",(0,t.jsxs)(n.p,{children:['Superduper involves 4 characteristic phases, summarized as "',(0,t.jsx)(n.strong,{children:"CAPE"}),'": ',(0,t.jsx)(n.strong,{children:"connect"})," to data, ",(0,t.jsx)(n.strong,{children:"apply"})," arbitrary AI to that data, ",(0,t.jsx)(n.strong,{children:"package"})," and reuse the application on arbitrary data, and ",(0,t.jsx)(n.strong,{children:"execute"})," AI-database queries and predictions on the resulting AI outputs and data."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Connect"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Apply"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Package"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Execute"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Connect"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db = superduper('mongodb|postgres|mysql|sqlite|duckdb|snowflake://<your-db-uri>')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Apply"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Component\n\n# build your MyAgent class with superduper and other best-in-class frameworks \nclass MyAgent(Component):\n    param_1: str\n    param_2: int\n    ...\n\n    def execute(self, task: str):\n        ...\n\nagent = MyAgent('agent', param_1='Your task is to solve problems', param_2=20)\ndb.apply(agent)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Package"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"application = Application('my-agent-app', components=[agent, vector_index])\ntemplate = Template('my-agent-template', component=app, substitutions={'documents': 'table'})\ntemplate.export('my-analysis')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Execute"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"agent = db.load('MyAgent', 'agent')\nagent.execute('Research me a holiday to Mars, and book if possible.')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-does-superduper-work",children:"How does Superduper work?"}),"\n",(0,t.jsx)(n.p,{children:"Superduper is an AI- application and agent builder which is:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"declarative"}),"\n",(0,t.jsx)(n.li,{children:"composable"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"declarative-paradigm",children:"Declarative paradigm"}),"\n",(0,t.jsxs)(n.p,{children:["Superduper's main building block is class called a ",(0,t.jsx)(n.code,{children:"Component"}),', which allows developers\nto build applications which "declare" the state they want the system to reach:']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Which outputs should be kept up-to-date with which database input queries?"}),"\n",(0,t.jsx)(n.li,{children:"Which models should be deployed?"}),"\n",(0,t.jsx)(n.li,{children:"Which models should be fine-tuned on which data prior to use?"}),"\n",(0,t.jsx)(n.li,{children:"Which outputs should be synchronized as vector-indexes?"}),"\n",(0,t.jsx)(n.li,{children:"Which computations should be run on a schedule?"}),"\n",(0,t.jsx)(n.li,{children:"Much, much more..."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This aspect of the system is referred to as a declarative programming paradigm."}),"\n",(0,t.jsx)(n.h2,{id:"compositionality",children:"Compositionality"}),"\n",(0,t.jsxs)(n.p,{children:["Superduper includes a range of ",(0,t.jsx)(n.code,{children:"Component"})," types which may be easily subclassed and interchanged.\nFor example, if a developer has prototyped his model using an OpenAI LLM implementation, the LLM may be trivially exchanged for an on-premise, self-hosted Llama-3 implementation with a simple and predictable toggle in the codebase."]}),"\n",(0,t.jsx)(n.p,{children:"From version 0.0.4 onwards, Superduper includes a range of plugins which developers may pick and choose from in open source, as well as a clear path for developers to build their own plugins. This plugin\narchitecture plays well with the compositional nature of the project."}),"\n",(0,t.jsx)(n.h2,{id:"datalayer",children:"Datalayer"}),"\n",(0,t.jsxs)(n.p,{children:["Applications are deployed on databases using a virtual AI-datalayer, referred to everywhere in this documentation as ",(0,t.jsx)(n.code,{children:"db"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This layer is composed of several important components, encompassing primary data, meta-data, artifacts and computation, which can be configured independently by the developer."}),"\n",(0,t.jsx)(n.h2,{id:"superduper-is-open-sourced-in-python-under-the-apache-20-license",children:"Superduper is open-sourced in Python under the Apache 2.0 license"}),"\n",(0,t.jsx)(n.p,{children:"We want to make Superduper the most inclusive and flexible AI-agents and applications framework around."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Superduper is licensed under the Apache 2.0 license as a key cornerstone\nof its philosophy and community ethos."})}),"\n",(0,t.jsx)(n.h3,{id:"superduper-can-handle-classical-ai-machine-learning-paradigms",children:"Superduper can handle classical AI/ machine learning paradigms..."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"classification"}),"\n",(0,t.jsx)(n.li,{children:"regression"}),"\n",(0,t.jsx)(n.li,{children:"forecasting"}),"\n",(0,t.jsx)(n.li,{children:"clustering"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"and much, more more..."})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"as-well-as-the-most-update-to-date-techniques",children:"As well as the most update to date techniques..."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"generative AI"}),"\n",(0,t.jsx)(n.li,{children:"LLMs"}),"\n",(0,t.jsx)(n.li,{children:"retrieval augmented generation (RAG)"}),"\n",(0,t.jsx)(n.li,{children:"computer vision"}),"\n",(0,t.jsx)(n.li,{children:"multimodal AI"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"and much, more more..."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(8046).A+"",width:"802",height:"520"})}),"\n",(0,t.jsx)(n.h3,{id:"what-integrations-does-superduper-include",children:"What integrations does Superduper include?"}),"\n",(0,t.jsx)(n.h4,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MongoDB"}),"\n",(0,t.jsx)(n.li,{children:"PostgreSQL"}),"\n",(0,t.jsx)(n.li,{children:"SQLite"}),"\n",(0,t.jsx)(n.li,{children:"Redis"}),"\n",(0,t.jsx)(n.li,{children:"MySQL"}),"\n",(0,t.jsx)(n.li,{children:"Snowflake"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ai-frameworks",children:"AI frameworks"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OpenAI"}),"\n",(0,t.jsx)(n.li,{children:"Cohere"}),"\n",(0,t.jsx)(n.li,{children:"Anthropic"}),"\n",(0,t.jsx)(n.li,{children:"PyTorch"}),"\n",(0,t.jsx)(n.li,{children:"Sklearn"}),"\n",(0,t.jsx)(n.li,{children:"Transformers"}),"\n",(0,t.jsx)(n.li,{children:"Sentence-Transformers"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8046:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/loop_new.f45d4893-066c0c18ede70f3ec9a6fe297341f63b.svg"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);