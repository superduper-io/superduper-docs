"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5512],{2616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(4848),s=n(8453);const c={},d=void 0,i={id:"api/components/vector_index",title:"vector_index",description:"superduper.components.vector_index",source:"@site/docs/api/components/vector_index.md",sourceDirName:"api/components",slug:"/api/components/vector_index",permalink:"/docs/next/api/components/vector_index",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/components/vector_index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"template",permalink:"/docs/next/api/components/template"},next:{title:"utils",permalink:"/docs/next/api/ext/utils"}},o={},l=[{value:"<code>backfill_vector_search</code>",id:"backfill_vector_search",level:2},{value:"<code>ibatch</code>",id:"ibatch",level:2},{value:"<code>sqlvector</code>",id:"sqlvector",level:2},{value:"<code>vector</code>",id:"vector",level:2},{value:"<code>VectorIndex</code>",id:"vectorindex",level:2},{value:"<code>DecodeArray</code>",id:"decodearray",level:2},{value:"<code>EncodeArray</code>",id:"encodearray",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduper.components.vector_index"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/components/vector_index.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"backfill_vector_search",children:(0,r.jsx)(t.code,{children:"backfill_vector_search"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"backfill_vector_search(db,\n     vi,\n     searcher)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vi"}),(0,r.jsx)(t.td,{children:"Identifier of vector index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"searcher"}),(0,r.jsx)(t.td,{children:"FastVectorSearch instance to load model outputs as vectors."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Backfill vector search from model outputs of a given vector index."}),"\n",(0,r.jsx)(t.h2,{id:"ibatch",children:(0,r.jsx)(t.code,{children:"ibatch"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"ibatch(iterable: Iterable[~T],\n     batch_size: int) -> Iterator[List[~T]]\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iterable"}),(0,r.jsx)(t.td,{children:"the iterable to batch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"batch_size"}),(0,r.jsx)(t.td,{children:"the number of groups to write"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Batch an iterable into chunks of size ",(0,r.jsx)(t.code,{children:"batch_size"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"sqlvector",children:(0,r.jsx)(t.code,{children:"sqlvector"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"sqlvector(shape,\n     bytes_encoding: Optional[str] = None)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"shape"}),(0,r.jsx)(t.td,{children:"The shape of the vector"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bytes_encoding"}),(0,r.jsx)(t.td,{children:"The encoding of the bytes"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Create an encoder for a vector (list of ints/ floats) of a given shape."}),"\n",(0,r.jsx)(t.p,{children:"This is used for compatibility with SQL databases, as the default vector"}),"\n",(0,r.jsx)(t.h2,{id:"vector",children:(0,r.jsx)(t.code,{children:"vector"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"vector(shape,\n     identifier: Optional[str] = None)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"shape"}),(0,r.jsx)(t.td,{children:"The shape of the vector"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identifier"}),(0,r.jsx)(t.td,{children:"The identifier of the vector"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Create an encoder for a vector (list of ints/ floats) of a given shape."}),"\n",(0,r.jsx)(t.h2,{id:"vectorindex",children:(0,r.jsx)(t.code,{children:"VectorIndex"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"VectorIndex(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     upstream: \"t.Optional[t.List['Component']]\" = None,\n     plugins: \"t.Optional[t.List['Plugin']]\" = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     cache: 't.Optional[bool]' = True,\n     status: 't.Optional[Status]' = None,\n     cdc_table: str = '',\n     indexing_listener: superduper.components.listener.Listener,\n     compatible_listener: Optional[superduper.components.listener.Listener] = None,\n     measure: superduper.vector_search.base.VectorIndexMeasureType = <VectorIndexMeasureType.cosine: 'cosine'>,\n     metric_values: None = <factory>) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identifier"}),(0,r.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uuid"}),(0,r.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artifacts"}),(0,r.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,r.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"upstream"}),(0,r.jsx)(t.td,{children:"A list of upstream components"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"plugins"}),(0,r.jsx)(t.td,{children:"A list of plugins to be used in the component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cache"}),(0,r.jsxs)(t.td,{children:["(Optional) If set ",(0,r.jsx)(t.code,{children:"true"})," the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:"What part of the lifecycle the component is in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cdc_table"}),(0,r.jsx)(t.td,{children:"Table which fires the triggers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indexing_listener"}),(0,r.jsx)(t.td,{children:"Listener which is applied to created vectors"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"compatible_listener"}),(0,r.jsx)(t.td,{children:"Listener which is applied to vectors to be compared"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"measure"}),(0,r.jsx)(t.td,{children:"Measure to use for comparison"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metric_values"}),(0,r.jsx)(t.td,{children:"Metric values for this index"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"A component carrying the information to apply a vector index."}),"\n",(0,r.jsx)(t.h2,{id:"decodearray",children:(0,r.jsx)(t.code,{children:"DecodeArray"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"DecodeArray(self,\n     dtype)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dtype"}),(0,r.jsx)(t.td,{children:"Datatype of array"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Class to decode an array."}),"\n",(0,r.jsx)(t.h2,{id:"encodearray",children:(0,r.jsx)(t.code,{children:"EncodeArray"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"EncodeArray(self,\n     dtype)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dtype"}),(0,r.jsx)(t.td,{children:"Datatype of array"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Class to encode an array."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(6540);const s={},c=r.createContext(s);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);