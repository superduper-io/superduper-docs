"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8465],{7310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=n(4848),s=n(8453);const o={},r=void 0,c={id:"api/components/application",title:"application",description:"superduper.components.application",source:"@site/versioned_docs/version-0.4/api/components/application.md",sourceDirName:"api/components",slug:"/api/components/application",permalink:"/docs/api/components/application",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/api/components/application.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"superduper",permalink:"/docs/api/base/superduper"},next:{title:"cdc",permalink:"/docs/api/components/cdc"}},d={},a=[{value:"<code>Application</code>",id:"application",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"superduper.components.application"})})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/components/application.py",children:"Source code"})}),"\n",(0,i.jsx)(t.h2,{id:"application",children:(0,i.jsx)(t.code,{children:"Application"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"Application(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     upstream: \"t.Optional[t.List['Component']]\" = None,\n     plugins: \"t.Optional[t.List['Plugin']]\" = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     cache: 't.Optional[bool]' = True,\n     status: 't.Optional[Status]' = None,\n     components: Sequence[superduper.components.component.Component],\n     namespace: Optional[Sequence[Tuple[str,\n     str]]] = None,\n     link: Optional[str] = None) -> None\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"identifier"}),(0,i.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"db"}),(0,i.jsx)(t.td,{children:"Datalayer instance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uuid"}),(0,i.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"artifacts"}),(0,i.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,i.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"upstream"}),(0,i.jsx)(t.td,{children:"A list of upstream components"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"plugins"}),(0,i.jsx)(t.td,{children:"A list of plugins to be used in the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cache"}),(0,i.jsxs)(t.td,{children:["(Optional) If set ",(0,i.jsx)(t.code,{children:"true"})," the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"status"}),(0,i.jsx)(t.td,{children:"What part of the lifecycle the component is in."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"components"}),(0,i.jsxs)(t.td,{children:["List of components to group together and apply to ",(0,i.jsx)(t.code,{children:"superduper"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"List of tuples with type_id and identifier of components to assist in managing application."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"link"}),(0,i.jsx)(t.td,{children:"A reference link to web app serving the application i.e. streamlit, gradio, etc"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"A placeholder to hold list of components with associated funcionality."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);