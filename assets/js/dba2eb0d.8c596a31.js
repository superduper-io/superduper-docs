"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3629],{1427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=n(4848),s=n(8453);const o={},r="Building custom AI with Superduper",d={id:"customize/overview",title:"Building custom AI with Superduper",description:"Superduper aims to provide more flexibility than any other adjacent framework for building end-to-end",source:"@site/docs/customize/overview.md",sourceDirName:"customize",slug:"/customize/overview",permalink:"/docs/next/customize/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/customize/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cron Job",permalink:"/docs/next/components/cron_job"},next:{title:"Create custom Component implementations",permalink:"/docs/next/customize/component"}},a={},c=[{value:"Templates and applications",id:"templates-and-applications",level:2},{value:"Components",id:"components",level:2},{value:"Data integration",id:"data-integration",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"building-custom-ai-with-superduper",children:"Building custom AI with Superduper"}),"\n",(0,i.jsx)(t.p,{children:"Superduper aims to provide more flexibility than any other adjacent framework for building end-to-end\nAI-data applications and workflows. There are several levels of customization which developers may consider.\nThese span (from easiest to most involved):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Bootstrapping applications based on our set of pre-built templates with custom parameters."}),"\n",(0,i.jsx)(t.li,{children:"Creating novel templates and applications using existing Superduper components."}),"\n",(0,i.jsx)(t.li,{children:"Creating novel components leveraging the Superduper base classes."}),"\n",(0,i.jsx)(t.li,{children:"Creating new data integrations enabling connection to custom data sources."}),"\n",(0,i.jsx)(t.li,{children:"Creating new compute engines, to deploy computations on your platform of choice."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"templates-and-applications",children:"Templates and applications"}),"\n",(0,i.jsxs)(t.p,{children:["Superduper enables developers to build reusable units of compound functionality via\nthe ",(0,i.jsx)(t.code,{children:"Application"})," class, and additionally parametrize components and ",(0,i.jsx)(t.code,{children:"Application"})," instances\nusing the ",(0,i.jsx)(t.code,{children:"Template"})," class."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"../templates",children:"templates"})," section of the documentation (see also ",(0,i.jsx)(t.a,{href:"https://github.com/superduper-io/superduper/tree/main/templates",children:"source code on GitHub"}),") provides useful out-of-the-box templates for use on your own data."]}),"\n",(0,i.jsx)(t.p,{children:'These templates may be applied to your data by specifying a small number of key "variables". By modifying\nthese variables, developers may easily connect this functionality with their own data.'}),"\n",(0,i.jsxs)(t.p,{children:["Custom templates may be built on the same model as the existing open-source templates. To do this, copy the ",(0,i.jsx)(t.code,{children:"/templates/template"})," subdirectory and edit the ",(0,i.jsx)(t.code,{children:"build.ipynb"})," file to build your template. When you are finished, the ",(0,i.jsx)(t.code,{children:"template.export('.')"})," command saves\nthe custom template as a ",(0,i.jsx)(t.code,{children:"component.json"})," file plus ",(0,i.jsx)(t.code,{children:"/files"})," and ",(0,i.jsx)(t.code,{children:"/blobs"}),". This directory is a portable unit of functionality which\nmay be reused by members of your team, network and the open-source community with ",(0,i.jsx)(t.code,{children:"db.apply(<template>)"})," or ",(0,i.jsx)(t.code,{children:"superduper apply <template_path.zip> ..."}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(t.p,{children:["Superduper includes a base class ",(0,i.jsx)(t.a,{href:"../apply_api",children:(0,i.jsx)(t.code,{children:"Component"})})," which is subclassed in order to integrate functionality on ",(0,i.jsx)(t.code,{children:"db.apply"})," or ",(0,i.jsx)(t.code,{children:"superduper apply"}),". In addition there are key descendants of ",(0,i.jsx)(t.code,{children:"Component"}),", detailed in the table below, which users will likely want to customize to build out their functionality."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Class"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/next/customize/component",children:(0,i.jsx)(t.code,{children:"Component"})})}),(0,i.jsx)(t.td,{children:"General base class for linking component data, setup tasks, and teardown tasks"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/next/customize/model",children:(0,i.jsx)(t.code,{children:"Model"})})}),(0,i.jsx)(t.td,{children:'Base class for all components which can "predict" outputs (not limited to standard ML/ AI models)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/next/customize/training_models",children:(0,i.jsx)(t.code,{children:"Trainer"})})}),(0,i.jsxs)(t.td,{children:["Base class for configuring ",(0,i.jsx)(t.code,{children:"Model"})," training"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"./metric.md",children:(0,i.jsx)(t.code,{children:"Metric"})})}),(0,i.jsxs)(t.td,{children:["Base class for measuring ",(0,i.jsx)(t.code,{children:"Model"})," quality"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/next/customize/cdc",children:(0,i.jsx)(t.code,{children:"CDC"})})}),(0,i.jsxs)(t.td,{children:["Base class for configuring tasks and computations to react to change data in ",(0,i.jsx)(t.code,{children:"db.databackend"})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"data-integration",children:"Data integration"}),"\n",(0,i.jsx)(t.p,{children:"..."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);