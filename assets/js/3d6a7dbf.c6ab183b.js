"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2156],{2356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(4848),r=n(8453);const i={},d=void 0,c={id:"api/components/listener",title:"listener",description:"superduper.components.listener",source:"@site/docs/api/components/listener.md",sourceDirName:"api/components",slug:"/api/components/listener",permalink:"/docs/api/components/listener",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/components/listener.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"datatype",permalink:"/docs/api/components/datatype"},next:{title:"metric",permalink:"/docs/api/components/metric"}},o={},l=[{value:"<code>Listener</code>",id:"listener",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"superduper.components.listener"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper.components/listener.py",children:"Source code"})}),"\n",(0,s.jsx)(t.h2,{id:"listener",children:(0,s.jsx)(t.code,{children:"Listener"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"Listener(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     identifier: str = '',\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     key: Union[str,\n     List[str],\n     Tuple[List[str],\n     Dict[str,\n     str]]],\n     model: superduper.components.model.Model,\n     select: superduper.backends.base.query.Query,\n     active: bool = True,\n     predict_kwargs: Optional[Dict] = None) -> None\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"identifier"}),(0,s.jsx)(t.td,{children:"A string used to identify the model."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uuid"}),(0,s.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"artifacts"}),(0,s.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,s.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"Key to be bound to the model."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"model"}),(0,s.jsx)(t.td,{children:"Model for processing data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"select"}),(0,s.jsx)(t.td,{children:"Object for selecting which data is processed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"active"}),(0,s.jsxs)(t.td,{children:["Toggle to ",(0,s.jsx)(t.code,{children:"False"})," to deactivate change data triggering."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"predict_kwargs"}),(0,s.jsx)(t.td,{children:"Keyword arguments to self.model.predict()."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Listener component."}),"\n",(0,s.jsx)(t.p,{children:"Listener object which is used to process a column/key of a collection or table,\nand store the outputs."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);