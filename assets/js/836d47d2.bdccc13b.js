"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2039],{4541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var o=t(4848),r=t(8453);const d={},c="Connect",i={id:"core_api/connect",title:"Connect",description:"The standard way to connect to Superduper is via the superduper decorator:",source:"@site/docs/core_api/connect.md",sourceDirName:"core_api",slug:"/core_api/connect",permalink:"/docs/next/core_api/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/core_api/connect.md",tags:[],version:"current",frontMatter:{}},a={},s=[{value:"Development mode",id:"development-mode",level:2},{value:"Complete connection guide",id:"complete-connection-guide",level:3},{value:"Fine grained configuration",id:"fine-grained-configuration",level:3},{value:"Cluster mode",id:"cluster-mode",level:2},{value:"Fine grained configuration",id:"fine-grained-configuration-1",level:3},{value:"Next steps",id:"next-steps",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connect",children:"Connect"}),"\n",(0,o.jsxs)(n.p,{children:["The standard way to connect to Superduper is via the ",(0,o.jsx)(n.code,{children:"superduper"})," decorator:"]}),"\n",(0,o.jsx)(n.h2,{id:"development-mode",children:"Development mode"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.a,{href:"../get_started/environment#development-mode",children:"development mode"}),", you may provide the URI/ connection details of your data deployment directly"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db = superduper('<database-uri>')\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For example if you are running a (not secure) MongoDB deployment locally, and you want to connect to the ",(0,o.jsx)(n.code,{children:'"documents"'})," database, you might write:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\ndb = superduper('mongodb://localhost:27017/documents')\n"})}),"\n",(0,o.jsx)(n.h3,{id:"complete-connection-guide",children:"Complete connection guide"}),"\n",(0,o.jsxs)(n.p,{children:["For a semi-exhaustive list of possible connections see ",(0,o.jsx)(n.a,{href:"../reusable_snippets/connect_to_superduper",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"fine-grained-configuration",children:"Fine grained configuration"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"superduper"})," chooses default ",(0,o.jsx)(n.code,{children:"artifact_store"})," (file blob storage) and ",(0,o.jsx)(n.code,{children:"metadata_store"})," (AI metadata) values for your connection. These defaults may be overridden directly:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db = superduper(\n    '<database-uri>',\n    artifact_store='<artifact-store-uri>,\n    metadata_store='<metadata-store-uri>,\n)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"cluster-mode",children:"Cluster mode"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.a,{href:"../get_started/environment#cluster-mode",children:"cluster mode"}),", the connection string needs to be provided in a configuration\nfile or via environment variable so that all services can connect correctly:"]}),"\n",(0,o.jsx)(n.p,{children:"Add these lines to your configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"data_backend: mongodb://localhost:27018/documents\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Read more about configuration ",(0,o.jsx)(n.a,{href:"../get_started/configuration",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["After doing this, you may connect directly with the ",(0,o.jsx)(n.code,{children:"superduper"})," decorator:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db = superduper()\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fine-grained-configuration-1",children:"Fine grained configuration"}),"\n",(0,o.jsx)(n.p,{children:"For more granular configuration add these lines:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"data_backend: <database-uri>,\nartifact_store: <artifact-store-uri>\nmetadata_store: <metadata-store-uri>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"db"})," is now your connection to your data, models, and model meta-data.\nNow that you have established this connection you are ready to build, deploy and manage AI with Superduper."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(6540);const r={},d=o.createContext(r);function c(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);