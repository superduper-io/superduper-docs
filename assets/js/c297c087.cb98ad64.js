"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6226],{3437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(4848),s=n(8453);const c={},a="Using a database's native vector search",i={id:"execute_api/native_vector_search",title:"Using a database's native vector search",description:"Databases increasingly include their own vector-comparison and search operations",source:"@site/content/execute_api/native_vector_search.md",sourceDirName:"execute_api",slug:"/execute_api/native_vector_search",permalink:"/superduper-docs/docs/execute_api/native_vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/execute_api/native_vector_search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector search queries",permalink:"/superduper-docs/docs/execute_api/vector_search_queries"},next:{title:"Sidecar vector-comparison integration",permalink:"/superduper-docs/docs/execute_api/sidecar_index_vector_search"}},o={},d=[];function u(e){const t={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"using-a-databases-native-vector-search",children:"Using a database's native vector search"}),"\n",(0,r.jsx)(t.p,{children:"Databases increasingly include their own vector-comparison and search operations\n(comparing one vector with others). In order to use this, include\nthis configuration in your configuration setup:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"cluster:\n  vector_search:\n    type: native\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"or"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"export SUPERDUPER_CLUSTER_VECTOR_SEARCH_TYPE=native\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"superduper"})," detects this configuration, it uses the inbuilt mechanism\nof your ",(0,r.jsx)(t.code,{children:"db.databackend"})," to perform the vector-comparison."]}),"\n",(0,r.jsx)(t.p,{children:"Currently Superduper supports the native implementation of these databases:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"MongoDB Atlas"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"More integrations are on the way."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);