"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[513],{4962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(4848),i=n(8453),r=n(3514);const o={},c="Models",d={id:"models/overview",title:"Models",description:"A key Component type in Superduper is Model and its descendants.",source:"@site/content/models/overview.md",sourceDirName:"models",slug:"/models/overview",permalink:"/docs/models/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/models/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Predictions",permalink:"/docs/execute_api/predictions"},next:{title:"Key methods of Model",permalink:"/docs/models/key_methods"}},a={},l=[{value:"Read more",id:"read-more",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"models",children:"Models"}),"\n",(0,s.jsxs)(t.p,{children:["A key ",(0,s.jsx)(t.code,{children:"Component"})," type in Superduper is ",(0,s.jsx)(t.code,{children:"Model"})," and its descendants.\nThe intended usage is that ",(0,s.jsx)(t.code,{children:"Model"})," wraps classical AI and machine learning models,\nAI APIs, as well as important processing steps involved in building such models,\nsuch as feature-computation."]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"../apply_api/model",children:"here"})," for basic usage. This section gives detailed\nusage information as well as information about building your own model types."]}),"\n",(0,s.jsx)(t.h2,{id:"read-more",children:"Read more"}),"\n","\n","\n",(0,s.jsx)(r.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(6540);var s=n(870),i=n(4142),r=n(5489),o=n(6654),c=n(1312),d=n(1107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(r.A,{href:t,className:(0,s.A)("card padding--lg",a.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:r}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(d.A,{as:"h2",className:(0,s.A)("text--truncate",a.cardTitle),title:i,children:[n," ",i]}),r&&(0,l.jsx)("p",{className:(0,s.A)("text--truncate",a.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const r=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);