"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1567],{4297:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=s(4848),n=s(8453);const d={},c=void 0,i={id:"api/backends/base/query",title:"query",description:"superduper.backends.base.query",source:"@site/docs/api/backends/base/query.md",sourceDirName:"api/backends/base",slug:"/api/backends/base/query",permalink:"/docs/next/api/backends/base/query",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/backends/base/query.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metadata",permalink:"/docs/next/api/backends/base/metadata"},next:{title:"queue",permalink:"/docs/next/api/backends/base/queue"}},a={},l=[{value:"<code>applies_to</code>",id:"applies_to",level:2},{value:"<code>parse_query</code>",id:"parse_query",level:2},{value:"<code>Query</code>",id:"query",level:2},{value:"<code>Model</code>",id:"model",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"superduper.backends.base.query"})})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/backends/base/query.py",children:"Source code"})}),"\n",(0,t.jsx)(r.h2,{id:"applies_to",children:(0,t.jsx)(r.code,{children:"applies_to"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"applies_to(*flavours)\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"flavours"}),(0,t.jsx)(r.td,{children:"The flavours to check against."})]})})]}),"\n",(0,t.jsx)(r.p,{children:"Decorator to check if the query matches the accepted flavours."}),"\n",(0,t.jsx)(r.h2,{id:"parse_query",children:(0,t.jsx)(r.code,{children:"parse_query"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"parse_query(query: Union[str,\n     list],\n     builder_cls: Optional[Type[superduper.backends.base.query.Query]] = None,\n     documents: Sequence[Any] = (),\n     db: Optional[ForwardRef('Datalayer')] = None)\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"query"}),(0,t.jsx)(r.td,{children:"The query to parse."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"builder_cls"}),(0,t.jsx)(r.td,{children:"The class to use to build the query."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"documents"}),(0,t.jsx)(r.td,{children:"The documents to query."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"db"}),(0,t.jsx)(r.td,{children:"The datalayer to use to execute the query."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Parse a string query into a query object."}),"\n",(0,t.jsx)(r.h2,{id:"query",children:(0,t.jsx)(r.code,{children:"Query"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"Query(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     identifier: str = '',\n     parts: None = <factory>,\n     table: str) -> None\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"identifier"}),(0,t.jsx)(r.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"db"}),(0,t.jsx)(r.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uuid"}),(0,t.jsx)(r.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"table"}),(0,t.jsx)(r.td,{children:"The table to use."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parts"}),(0,t.jsx)(r.td,{children:"The parts of the query."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"A query object."}),"\n",(0,t.jsx)(r.p,{children:"This base class is used to create a query object that can be executed\nin the datalayer."}),"\n",(0,t.jsx)(r.h2,{id:"model",children:(0,t.jsx)(r.code,{children:"Model"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"Model(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     identifier: str = '',\n     parts: None = <factory>,\n     table: str) -> None\n"})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"identifier"}),(0,t.jsx)(r.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"db"}),(0,t.jsx)(r.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uuid"}),(0,t.jsx)(r.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"table"}),(0,t.jsx)(r.td,{children:"The table to use."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parts"}),(0,t.jsx)(r.td,{children:"The parts of the query."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"A model helper class for create a query to predict."})]})}function o(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>i});var t=s(6540);const n={},d=t.createContext(n);function c(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);