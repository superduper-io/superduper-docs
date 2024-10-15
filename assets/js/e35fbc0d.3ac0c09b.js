"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7211],{3544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(4848),s=t(8453);const r={},i="MongoDB select queries",c={id:"execute_api/mongodb_queries",title:"MongoDB select queries",description:"Superduper supports the pymongo query API to build select queries.",source:"@site/docs/execute_api/mongodb_queries.md",sourceDirName:"execute_api",slug:"/execute_api/mongodb_queries",permalink:"/docs/execute_api/mongodb_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/execute_api/mongodb_queries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Selecting data",permalink:"/docs/execute_api/select_queries"},next:{title:"SQL select queries",permalink:"/docs/execute_api/sql_queries"}},u={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mongodb-select-queries",children:"MongoDB select queries"}),"\n",(0,o.jsxs)(n.p,{children:["Superduper supports the ",(0,o.jsx)(n.code,{children:"pymongo"})," query API to build select queries.\nThere is one slight difference however, since queries built with ",(0,o.jsx)(n.code,{children:"pymongo"}),"'s formalism\nare executed lazily:"]}),"\n",(0,o.jsxs)(n.p,{children:["Whereas in ",(0,o.jsx)(n.code,{children:"pymongo"})," one might write:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"client.my_db.my_collection.find_one()\n"})}),"\n",(0,o.jsxs)(n.p,{children:["with ",(0,o.jsx)(n.code,{children:"superduper"})," one would write:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"result = db['my_collection'].find_one().execute()\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);