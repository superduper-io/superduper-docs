"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[194],{3825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(4848),c=r(8453),s=r(3514);const i={},o="Vector-search",a={id:"execute_api/vector_search",title:"Vector-search",description:"Superduper aims to provide first-class support for",source:"@site/content/execute_api/vector_search.md",sourceDirName:"execute_api",slug:"/execute_api/vector_search",permalink:"/superduper-docs/docs/execute_api/vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/execute_api/vector_search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL select queries",permalink:"/superduper-docs/docs/execute_api/sql_queries"},next:{title:"Setting up vector-search",permalink:"/superduper-docs/docs/execute_api/setting_up_vector_search"}},d={},u=[{value:"Read more",id:"read-more",level:2}];function l(e){const t={h1:"h1",h2:"h2",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"vector-search",children:"Vector-search"}),"\n",(0,n.jsx)(t.p,{children:"Superduper aims to provide first-class support for\nvector-search, including embedding computation in preparation\nand run-time, as well as executing the fast vector-comparison\nand returning results in a way compatible with standard database\nqueries."}),"\n",(0,n.jsx)(t.h2,{id:"read-more",children:"Read more"}),"\n","\n","\n",(0,n.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>v});r(6540);var n=r(870),c=r(4142),s=r(5489),i=r(6654),o=r(1312),a=r(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(4848);function l(e){let{href:t,children:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:c,description:s}=e;return(0,u.jsxs)(l,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:c,children:[r," ",c]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const r=(0,c.Nr)(t);return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,c.$S)();return(0,u.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,c.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const c={},s=n.createContext(c);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);