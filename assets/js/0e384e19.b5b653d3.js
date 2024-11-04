"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3976],{1512:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(4848),r=i(8453);const a={description:"Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)"},t="Superduper: framework for building AI-data applications and workflows on databases.",l={id:"intro",title:"intro",description:"Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/intro.md",tags:[],version:"current",frontMatter:{description:"Find detailed technical documentation for Superduper's AI and database integration solutions. Access comprehensive guides, API references, and tutorials to effectively implement and utilize Superduper technologies in your projects. (Formerly SuperDuperDB)"},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/get_started"}},o={},d=[{value:"What problem does Superduper solve?",id:"what-problem-does-superduper-solve",level:2},{value:"How does Superduper work?",id:"how-does-superduper-work",level:2},{value:"Declarative paradigm",id:"declarative-paradigm",level:2},{value:"Compositionality",id:"compositionality",level:2},{value:"Datalayer",id:"datalayer",level:2},{value:"Superduper is open-sourced in Python under the Apache 2.0 license",id:"superduper-is-open-sourced-in-python-under-the-apache-20-license",level:2},{value:"Superduper can handle classical AI/ machine learning paradigms...",id:"superduper-can-handle-classical-ai-machine-learning-paradigms",level:3},{value:"As well as the most update to date techniques...",id:"as-well-as-the-most-update-to-date-techniques",level:3},{value:"What integrations does Superduper include?",id:"what-integrations-does-superduper-include",level:3},{value:"Data",id:"data",level:4},{value:"AI frameworks",id:"ai-frameworks",level:4}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{children:(0,s.jsx)("title",{children:"Docs - Superduper"})}),"\n",(0,s.jsx)(n.h1,{id:"superduper-framework-for-building-ai-data-applications-and-workflows-on-databases",children:"Superduper: framework for building AI-data applications and workflows on databases."}),"\n",(0,s.jsxs)(n.p,{children:["Superduper is a Python based framework for building ",(0,s.jsx)(n.strong,{children:"end-2-end AI-data workflows and applications"})," on your own data, integrating with major databases. It supports the latest technologies and techniques, including LLMs, vector-search, RAG, multimodality as well as classical AI and ML paradigms."]}),"\n",(0,s.jsxs)(n.p,{children:["Developers may leverage Superduper by building ",(0,s.jsx)(n.strong,{children:"compositional and declarative objects"})," which out-source the details of deployment, orchestration and versioning to Superduper. This allows developers to completely avoid implementing MLOps, ETL pipelines, model deployment, data migration and synchronization."]}),"\n",(0,s.jsx)(n.p,{children:"Concretely, developers may:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create AI-applications using a persisted data state, corresponding to computations involving AI models and APIs."}),"\n",(0,s.jsx)(n.li,{children:"Build multi-step computations, triggers and actions"}),"\n",(0,s.jsx)(n.li,{children:'Parametrize these AI-applications as reusable units of portable functionality, known as "templates"'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['Superduper involves 4 characteristic phases, summarized as "',(0,s.jsx)(n.strong,{children:"CAPE"}),'": ',(0,s.jsx)(n.strong,{children:"connect"})," to data, ",(0,s.jsx)(n.strong,{children:"apply"})," arbitrary AI to that data, ",(0,s.jsx)(n.strong,{children:"package"})," and reuse the application on arbitrary data, and ",(0,s.jsx)(n.strong,{children:"execute"})," AI-database queries and predictions on the resulting AI outputs and data."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Connect"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Apply"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Package"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Execute"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Connect"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db = superduper('mongodb|postgres|mysql|sqlite|duckdb|snowflake://<your-db-uri>')\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Apply"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"listener = MyLLM('self_hosted_llm', architecture='llama-3.2', postprocess=my_postprocess).to_listener('documents', key='txt')\ndb.apply(listener)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Package"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"application = Application('my-analysis-app', components=[listener, vector_index])\ntemplate = Template('my-analysis', component=app, substitutions={'documents': 'table'})\ntemplate.export('my-analysis')\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Execute"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"query = db['documents'].like({'txt', 'Tell me about Superduper'}, vector_index='my-index').select()\nquery.execute()\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"AI-data"})," application is a new generation of application involving cross talk between AI models and data, which is updated\ndynamically in response to changing data, and supports a range of data queries, including queries involving AI model inferences."]}),(0,s.jsx)(n.p,{children:"Basic examples include:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Retrieval augmented generation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Data dependent retraining protocols"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Semantic multimodal product search with text, image and product JSON formats."})}),"\n"]}),(0,s.jsx)(n.p,{children:"There is a whole world of AI-data applications out there waiting to be built.\nSuperduper is the perfect framework with which to get started!"})]}),"\n",(0,s.jsx)(n.h2,{id:"what-problem-does-superduper-solve",children:"What problem does Superduper solve?"}),"\n",(0,s.jsx)(n.p,{children:"AI-data applications are highly complex. They require:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Maintaining a highly intricate state"}),"\n",(0,s.jsx)(n.li,{children:"Integrating with production data in databases"}),"\n",(0,s.jsx)(n.li,{children:"Deploying and maintaining many endpoints"}),"\n",(0,s.jsxs)(n.li,{children:["Taking care of the life-cycle of AI models:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Feature computations"}),"\n",(0,s.jsx)(n.li,{children:"Training and re-training"}),"\n",(0,s.jsx)(n.li,{children:"Computation and caching of outputs"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"A range of infrastructual work, from deploying custom hardware, triggering auto-scaling,\nto deploying specialized solutions such as vector-search engines, model repositories and more"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The fact that all of this is necessary explains the existence of the MLOPs, AIOps, LLMOps fields of engineering."}),"\n",(0,s.jsx)(n.p,{children:'What if none of this was necessary? What if AI engineers, data-scientist and decision makers,\ncould simply "apply" AI to the data in their data deployments? For example, the framework required would allow this type of command:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"<framework> apply ./path_to_app.zip your://database-uri\n"})}),"\n",(0,s.jsxs)(n.p,{children:['That "framework" is ',(0,s.jsx)(n.code,{children:"superduper"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"superduper apply ./path_to_app.zip your://database-uri\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-does-superduper-work",children:"How does Superduper work?"}),"\n",(0,s.jsx)(n.p,{children:"Superduper is an AI-data application builder which is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"declarative"}),"\n",(0,s.jsx)(n.li,{children:"composable"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"declarative-paradigm",children:"Declarative paradigm"}),"\n",(0,s.jsxs)(n.p,{children:["Superduper's main building block is class called a ",(0,s.jsx)(n.code,{children:"Component"}),', which allows developers\nto build applications which "declare" the state they want the system to reach:']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Which outputs should be kept up-to-date with which database input queries?"}),"\n",(0,s.jsx)(n.li,{children:"Which models should be deployed as endpoints?"}),"\n",(0,s.jsx)(n.li,{children:"Which models should be fine-tuned on which data prior to use?"}),"\n",(0,s.jsx)(n.li,{children:"Which outputs should be synchronized as vector-indexes?"}),"\n",(0,s.jsx)(n.li,{children:"Which computations should be run on a schedule?"}),"\n",(0,s.jsx)(n.li,{children:"Much, much more..."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This aspect of the system is referred to as a declarative programming paradigm."}),"\n",(0,s.jsx)(n.h2,{id:"compositionality",children:"Compositionality"}),"\n",(0,s.jsxs)(n.p,{children:["Superduper includes a range of ",(0,s.jsx)(n.code,{children:"Component"})," types which may be easily subclassed and interchanged.\nFor example, if a developer has prototyped his model using an OpenAI LLM implementation, the LLM may be trivially exchanged for an on-premise, self-hosted Llama-3 implementation with a simple and predictable toggle in the codebase."]}),"\n",(0,s.jsx)(n.p,{children:"From version 0.0.4 onwards, Superduper includes a range of plugins which developers may pick and choose from in open source, as well as a clear path for developers to build their own plugins. This plugin\narchitecture plays well with the compositional nature of the project."}),"\n",(0,s.jsx)(n.h2,{id:"datalayer",children:"Datalayer"}),"\n",(0,s.jsxs)(n.p,{children:["Applications are deployed on databases using a virtual AI-datalayer, referred to everywhere in this documentation as ",(0,s.jsx)(n.code,{children:"db"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This layer is composed of several important components, encompassing primary data, meta-data, artifacts and computation, which can be configured independently by the developer."}),"\n",(0,s.jsx)(n.h2,{id:"superduper-is-open-sourced-in-python-under-the-apache-20-license",children:"Superduper is open-sourced in Python under the Apache 2.0 license"}),"\n",(0,s.jsx)(n.p,{children:"We want to make Superduper the most inclusive and flexible AI-data framework around."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Superduper is licensed under the Apache 2.0 license as a key cornerstone\nof its philosophy and community ethos."})}),"\n",(0,s.jsx)(n.h3,{id:"superduper-can-handle-classical-ai-machine-learning-paradigms",children:"Superduper can handle classical AI/ machine learning paradigms..."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"classification"}),"\n",(0,s.jsx)(n.li,{children:"regression"}),"\n",(0,s.jsx)(n.li,{children:"forecasting"}),"\n",(0,s.jsx)(n.li,{children:"clustering"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"and much, more more..."})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"as-well-as-the-most-update-to-date-techniques",children:"As well as the most update to date techniques..."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"generative AI"}),"\n",(0,s.jsx)(n.li,{children:"LLMs"}),"\n",(0,s.jsx)(n.li,{children:"retrieval augmented generation (RAG)"}),"\n",(0,s.jsx)(n.li,{children:"computer vision"}),"\n",(0,s.jsx)(n.li,{children:"multimodal AI"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"and much, more more..."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8046).A+"",width:"802",height:"520"})}),"\n",(0,s.jsx)(n.h3,{id:"what-integrations-does-superduper-include",children:"What integrations does Superduper include?"}),"\n",(0,s.jsx)(n.h4,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MongoDB"}),"\n",(0,s.jsx)(n.li,{children:"PostgreSQL"}),"\n",(0,s.jsx)(n.li,{children:"SQLite"}),"\n",(0,s.jsx)(n.li,{children:"Snowflake"}),"\n",(0,s.jsx)(n.li,{children:"MySQL"}),"\n",(0,s.jsx)(n.li,{children:"Oracle"}),"\n",(0,s.jsx)(n.li,{children:"MSSQL"}),"\n",(0,s.jsx)(n.li,{children:"Clickhouse"}),"\n",(0,s.jsx)(n.li,{children:"Pandas"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ai-frameworks",children:"AI frameworks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OpenAI"}),"\n",(0,s.jsx)(n.li,{children:"Cohere"}),"\n",(0,s.jsx)(n.li,{children:"Anthropic"}),"\n",(0,s.jsx)(n.li,{children:"PyTorch"}),"\n",(0,s.jsx)(n.li,{children:"Sklearn"}),"\n",(0,s.jsx)(n.li,{children:"Transformers"}),"\n",(0,s.jsx)(n.li,{children:"Sentence-Transformers"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8046:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/loop_new.f45d4893-066c0c18ede70f3ec9a6fe297341f63b.svg"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);