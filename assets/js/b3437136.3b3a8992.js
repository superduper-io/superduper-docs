"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4826],{9838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453),c=n(3514);const s={},o="Selecting data",a={id:"execute_api/select_queries",title:"Selecting data",description:"Selecting data involves building a compositional query",source:"@site/docs/execute_api/select_queries.md",sourceDirName:"execute_api",slug:"/execute_api/select_queries",permalink:"/docs/next/execute_api/select_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/execute_api/select_queries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with external data sources",permalink:"/docs/next/execute_api/referring_to_data_from_diverse_sources"},next:{title:"MongoDB select queries",permalink:"/docs/next/execute_api/mongodb_queries"}},d={},l=[{value:"Read more",id:"read-more",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"selecting-data",children:"Selecting data"}),"\n",(0,r.jsx)(t.p,{children:"Selecting data involves building a compositional query\nstaring with a table of collection, and repeatingly calling\nmethods to build a complex query:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"q = db['table_name'].method_1(*args_1, **kwargs_1).method_2(*args_2, **kwargs_2)....\n"})}),"\n",(0,r.jsx)(t.p,{children:"As usual, the query is executed with:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"q.execute()\n"})}),"\n",(0,r.jsx)(t.h2,{id:"read-more",children:"Read more"}),"\n","\n","\n",(0,r.jsx)(c.A,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(870),i=n(4142),c=n(5489),s=n(6654),o=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:c}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),c&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(f,{...e});const c=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(x,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);