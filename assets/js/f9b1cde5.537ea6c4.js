"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[800],{4609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const o={},a="Deleting data",r={id:"execute_api/delete_queries",title:"Deleting data",description:"This functionality is only supported for MongoDB db.databackend implementations.",source:"@site/docs/execute_api/delete_queries.md",sourceDirName:"execute_api",slug:"/execute_api/delete_queries",permalink:"/docs/next/execute_api/delete_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/execute_api/delete_queries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updating data",permalink:"/docs/next/execute_api/update_queries"},next:{title:"Predictions",permalink:"/docs/next/execute_api/predictions"}},d={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"deleting-data",children:"Deleting data"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This functionality is only supported for MongoDB ",(0,i.jsx)(t.code,{children:"db.databackend"})," implementations.\nFor SQL databases, users should drop unwanted tables or use native clients\nto delete data."]})}),"\n",(0,i.jsxs)(t.p,{children:["Delete queries follow exactly the same ",(0,i.jsx)(t.a,{href:"./basic_insertion",children:"pattern as insert queries"}),". For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"deleted_ids, jobs = db.execute(my_collection.delete_many({}))\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);