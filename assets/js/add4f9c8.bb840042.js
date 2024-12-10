"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7793],{4463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(4848),i=n(8453);const r={},o=void 0,c={id:"api/components/plugin",title:"plugin",description:"superduper.components.plugin",source:"@site/docs/api/components/plugin.md",sourceDirName:"api/components",slug:"/api/components/plugin",permalink:"/docs/next/api/components/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/components/plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/next/api/components/model"},next:{title:"schema",permalink:"/docs/next/api/components/schema"}},d={},l=[{value:"<code>Plugin</code>",id:"plugin",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"superduper.components.plugin"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/components/plugin.py",children:"Source code"})}),"\n",(0,s.jsx)(t.h2,{id:"plugin",children:(0,s.jsx)(t.code,{children:"Plugin"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"Plugin(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     identifier: str = '',\n     upstream: \"t.Optional[t.List['Component']]\" = None,\n     plugins: \"t.Optional[t.List['Plugin']]\" = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     cache: 't.Optional[bool]' = True,\n     status: 't.Optional[Status]' = None,\n     path: str,\n     cache_path: str = '~/.superduper/plugins') -> None\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"identifier"}),(0,s.jsx)(t.td,{children:"Unique identifier for the plugin."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uuid"}),(0,s.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"artifacts"}),(0,s.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,s.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"upstream"}),(0,s.jsx)(t.td,{children:"A list of upstream components"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plugins"}),(0,s.jsx)(t.td,{children:"A list of plugins to be used in the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cache"}),(0,s.jsxs)(t.td,{children:["(Optional) If set ",(0,s.jsx)(t.code,{children:"true"})," the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status"}),(0,s.jsx)(t.td,{children:"What part of the lifecycle the component is in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"Path to the plugin package or module."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cache_path"}),(0,s.jsx)(t.td,{children:"Path to the cache directory where the plugin will be stored."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Plugin component allows to install and use external python packages as plugins."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);