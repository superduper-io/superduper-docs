"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5597],{2396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=r(4848),d=r(8453);const c={},n=void 0,o={id:"api/vector_search/update_tasks",title:"update_tasks",description:"superduper.vector_search.update_tasks",source:"@site/content/api/vector_search/update_tasks.md",sourceDirName:"api/vector_search",slug:"/api/vector_search/update_tasks",permalink:"/docs/api/vector_search/update_tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/vector_search/update_tasks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lance",permalink:"/docs/api/vector_search/lance"},next:{title:"Templates",permalink:"/docs/category/templates"}},i={},a=[{value:"<code>copy_vectors</code>",id:"copy_vectors",level:2},{value:"<code>delete_vectors</code>",id:"delete_vectors",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"superduper.vector_search.update_tasks"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/vector_search/update_tasks.py",children:"Source code"})}),"\n",(0,s.jsx)(t.h2,{id:"copy_vectors",children:(0,s.jsx)(t.code,{children:"copy_vectors"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"copy_vectors(vector_index: str,\n     query: Union[Dict,\n     superduper.backends.base.query.Query],\n     ids: Sequence[str],\n     db=typing.Optional[ForwardRef('Datalayer')])\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_index"}),(0,s.jsx)(t.td,{children:"A identifier of the vector-index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsxs)(t.td,{children:["A query which was used by ",(0,s.jsx)(t.code,{children:"db._build_task_workflow"})," method"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ids"}),(0,s.jsx)(t.td,{children:"List of ids which were observed as added/updated documents."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"Datalayer instance."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Copy vectors of a ",(0,s.jsx)(t.code,{children:"VectorIndex"})," component from the databackend to the fast_vector_search backend."]}),"\n",(0,s.jsx)(t.h2,{id:"delete_vectors",children:(0,s.jsx)(t.code,{children:"delete_vectors"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"delete_vectors(vector_index: str,\n     ids: Sequence[str],\n     db=typing.Optional[ForwardRef('Datalayer')])\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_index"}),(0,s.jsx)(t.td,{children:"A identifier of vector-index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ids"}),(0,s.jsx)(t.td,{children:"List of ids which were observed as deleted documents."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"Datalayer instance."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Delete vectors of a ",(0,s.jsx)(t.code,{children:"VectorIndex"})," component in the fast_vector_search backend."]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>o});var s=r(6540);const d={},c=s.createContext(d);function n(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);