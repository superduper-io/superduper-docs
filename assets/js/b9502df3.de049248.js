"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3512],{1888:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=n(4848),s=n(8453);const d={},c=void 0,i={id:"api/components/vector_index",title:"vector_index",description:"superduper.components.vector_index",source:"@site/content/api/components/vector_index.md",sourceDirName:"api/components",slug:"/api/components/vector_index",permalink:"/superduper-docs/docs/api/components/vector_index",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/components/vector_index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"template",permalink:"/superduper-docs/docs/api/components/template"},next:{title:"model",permalink:"/superduper-docs/docs/api/ext/anthropic/model"}},o={},l=[{value:"<code>sqlvector</code>",id:"sqlvector",level:2},{value:"<code>vector</code>",id:"vector",level:2},{value:"<code>VectorIndex</code>",id:"vectorindex",level:2},{value:"<code>DecodeArray</code>",id:"decodearray",level:2},{value:"<code>EncodeArray</code>",id:"encodearray",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"superduper.components.vector_index"})})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/superduper/superduper/blob/main/superduper.components/vector_index.py",children:"Source code"})}),"\n",(0,t.jsx)(r.h2,{id:"sqlvector",children:(0,t.jsx)(r.code,{children:"sqlvector"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"sqlvector(shape)\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"shape"}),(0,t.jsx)(r.td,{children:"The shape of the vector"})]})})]}),"\n",(0,t.jsx)(r.p,{children:"Create an encoder for a vector (list of ints/ floats) of a given shape."}),"\n",(0,t.jsx)(r.p,{children:"This is used for compatibility with SQL databases, as the default vector"}),"\n",(0,t.jsx)(r.h2,{id:"vector",children:(0,t.jsx)(r.code,{children:"vector"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"vector(shape,\n     identifier: Optional[str] = None)\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"shape"}),(0,t.jsx)(r.td,{children:"The shape of the vector"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"identifier"}),(0,t.jsx)(r.td,{children:"The identifier of the vector"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Create an encoder for a vector (list of ints/ floats) of a given shape."}),"\n",(0,t.jsx)(r.h2,{id:"vectorindex",children:(0,t.jsx)(r.code,{children:"VectorIndex"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"VectorIndex(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     indexing_listener: superduper.components.listener.Listener,\n     compatible_listener: Optional[superduper.components.listener.Listener] = None,\n     measure: superduper.vector_search.base.VectorIndexMeasureType = <VectorIndexMeasureType.cosine: 'cosine'>,\n     metric_values: Optional[Dict] = None) -> None\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"identifier"}),(0,t.jsx)(r.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"db"}),(0,t.jsx)(r.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uuid"}),(0,t.jsx)(r.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"artifacts"}),(0,t.jsxs)(r.td,{children:["A dictionary of artifacts paths and ",(0,t.jsx)(r.code,{children:"DataType"})," objects"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"indexing_listener"}),(0,t.jsx)(r.td,{children:"Listener which is applied to created vectors"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"compatible_listener"}),(0,t.jsx)(r.td,{children:"Listener which is applied to vectors to be compared"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"measure"}),(0,t.jsx)(r.td,{children:"Measure to use for comparison"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"metric_values"}),(0,t.jsx)(r.td,{children:"Metric values for this index"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"A component carrying the information to apply a vector index."}),"\n",(0,t.jsx)(r.h2,{id:"decodearray",children:(0,t.jsx)(r.code,{children:"DecodeArray"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"DecodeArray(self,\n     dtype)\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dtype"}),(0,t.jsx)(r.td,{children:"Datatype of array"})]})})]}),"\n",(0,t.jsx)(r.p,{children:"Class to decode an array."}),"\n",(0,t.jsx)(r.h2,{id:"encodearray",children:(0,t.jsx)(r.code,{children:"EncodeArray"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"EncodeArray(self,\n     dtype)\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dtype"}),(0,t.jsx)(r.td,{children:"Datatype of array"})]})})]}),"\n",(0,t.jsx)(r.p,{children:"Class to encode an array."})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(6540);const s={},d=t.createContext(s);function c(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);