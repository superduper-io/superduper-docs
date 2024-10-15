"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8381],{3125:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=s(4848),r=s(8453);const o={sidebar_position:1},i="Community support",d={id:"data_plugins/supported_query_APIs",title:"Community support",description:"In order to specify the action of models on the data, we provide an interface to pythonic ecosystem query APIs.",source:"@site/docs/data_plugins/supported_query_APIs.md",sourceDirName:"data_plugins",slug:"/data_plugins/supported_query_APIs",permalink:"/docs/data_plugins/supported_query_APIs",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/data_plugins/supported_query_APIs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},c={},a=[{value:"Hybrid API",id:"hybrid-api",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"community-support",children:"Community support"}),"\n",(0,t.jsx)(n.p,{children:"In order to specify the action of models on the data, we provide an interface to pythonic ecosystem query APIs.\nIn particular, we provide wrappers to these projects to create database queries:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://pymongo.readthedocs.io/en/stable/",children:(0,t.jsx)(n.code,{children:"pymongo"})})," for MongoDB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://ibis-project.org/",children:(0,t.jsx)(n.code,{children:"ibis"})})," for SQL databases"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ibis"})," also allows users to use raw SQL in their workflows."]}),"\n",(0,t.jsxs)(n.p,{children:["Queries in these two-worlds can be built by importing the table/collection class from\neach data backend. With ",(0,t.jsx)(n.code,{children:"pymongo"}),", one can write:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"query = db['products'].find({'brand': 'Nike'}, {'_id': 1}).limit(10)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"ibis"}),", one would write:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"query = db['products'].filter(products.brand == 'Nike').select('id').limit(10)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hybrid-api",children:"Hybrid API"}),"\n",(0,t.jsxs)(n.p,{children:["On top of the native features of ",(0,t.jsx)(n.code,{children:"pymongo"})," and ",(0,t.jsx)(n.code,{children:"ibis"}),", ",(0,t.jsx)(n.code,{children:"superduper"})," builds several novel features:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Additional ways to query the database with the outputs of machine learning models","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Query model-outputs directly"}),"\n",(0,t.jsx)(n.li,{children:"Vector-search"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Ways to encode and query more sophisticated data-types using the ",(0,t.jsx)(n.code,{children:"Document"}),"-",(0,t.jsx)(n.code,{children:"Encoder"})," pattern."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);