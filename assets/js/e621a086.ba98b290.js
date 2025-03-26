"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5512],{2616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(4848),s=n(8453);const i={},c=void 0,d={id:"api/components/vector_index",title:"vector_index",description:"superduper.components.vector_index",source:"@site/docs/api/components/vector_index.md",sourceDirName:"api/components",slug:"/api/components/vector_index",permalink:"/docs/next/api/components/vector_index",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/components/vector_index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"template",permalink:"/docs/next/api/components/template"},next:{title:"annotations",permalink:"/docs/next/api/misc/annotations"}},o={},l=[{value:"<code>backfill_vector_search</code>",id:"backfill_vector_search",level:2},{value:"<code>ibatch</code>",id:"ibatch",level:2},{value:"<code>VectorIndex</code>",id:"vectorindex",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduper.components.vector_index"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/superduper-io/superduper/blob/main/superduper/components/vector_index.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"backfill_vector_search",children:(0,r.jsx)(t.code,{children:"backfill_vector_search"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"backfill_vector_search(db,\n     vi,\n     searcher)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vi"}),(0,r.jsx)(t.td,{children:"Identifier of vector index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"searcher"}),(0,r.jsx)(t.td,{children:"FastVectorSearch instance to load model outputs as vectors."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Backfill vector search from model outputs of a given vector index."}),"\n",(0,r.jsx)(t.h2,{id:"ibatch",children:(0,r.jsx)(t.code,{children:"ibatch"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"ibatch(iterable: Iterable[~T],\n     batch_size: int) -> Iterator[List[~T]]\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iterable"}),(0,r.jsx)(t.td,{children:"the iterable to batch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"batch_size"}),(0,r.jsx)(t.td,{children:"the number of groups to write"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Batch an iterable into chunks of size ",(0,r.jsx)(t.code,{children:"batch_size"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"vectorindex",children:(0,r.jsx)(t.code,{children:"VectorIndex"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"VectorIndex(self,\n     identifier: str,\n     upstream: Optional[List[ForwardRef('Component')]] = None,\n     cache: Optional[bool] = True,\n     status: Optional[str] = None,\n     build_variables: Optional[Dict] = None,\n     build_template: str | None = None,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     *,\n     cdc_table: str = '',\n     indexing_listener: superduper.components.listener.Listener,\n     compatible_listener: Optional[superduper.components.listener.Listener] = None,\n     measure: str = 'cosine',\n     metric_values: Optional[Dict] = <factory>) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identifier"}),(0,r.jsx)(t.td,{children:"Identifier of the instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"upstream"}),(0,r.jsx)(t.td,{children:"A list of upstream components."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cache"}),(0,r.jsxs)(t.td,{children:["(Optional) If set ",(0,r.jsx)(t.code,{children:"true"})," the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:"What part of the lifecycle the component is in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"build_variables"}),(0,r.jsx)(t.td,{children:"Variables which were supplied to a template to build."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"build_template"}),(0,r.jsx)(t.td,{children:"Template which was used to build."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cdc_table"}),(0,r.jsx)(t.td,{children:"Table to use for CDC"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indexing_listener"}),(0,r.jsx)(t.td,{children:"Listener which is applied to created vectors"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"compatible_listener"}),(0,r.jsx)(t.td,{children:"Listener which is applied to vectors to be compared"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"measure"}),(0,r.jsx)(t.td,{children:"Measure to use for comparison"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metric_values"}),(0,r.jsx)(t.td,{children:"Metric values for this index"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"A component carrying the information to apply a vector index."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(6540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);