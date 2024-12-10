"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8837],{9794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const r={},d=void 0,l={id:"api/components/template",title:"template",description:"superduper.components.template",source:"@site/docs/api/components/template.md",sourceDirName:"api/components",slug:"/api/components/template",permalink:"/docs/next/api/components/template",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/components/template.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"table",permalink:"/docs/next/api/components/table"},next:{title:"vector_index",permalink:"/docs/next/api/components/vector_index"}},o={},c=[{value:"<code>QueryTemplate</code>",id:"querytemplate",level:2},{value:"<code>Template</code>",id:"template",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"superduper.components.template"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/components/template.py",children:"Source code"})}),"\n",(0,s.jsx)(t.h2,{id:"querytemplate",children:(0,s.jsx)(t.code,{children:"QueryTemplate"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"QueryTemplate(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     upstream: \"t.Optional[t.List['Component']]\" = None,\n     plugins: \"t.Optional[t.List['Plugin']]\" = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     cache: 't.Optional[bool]' = True,\n     status: 't.Optional[Status]' = None,\n     template: Union[Dict,\n     superduper.components.component.Component],\n     template_variables: Optional[List[str]] = None,\n     types: None = <factory>,\n     blobs: Optional[List[str]] = None,\n     files: Optional[List[str]] = None,\n     substitutions: dataclasses.InitVar[typing.Optional[typing.Dict]] = None) -> None\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"identifier"}),(0,s.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uuid"}),(0,s.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"artifacts"}),(0,s.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,s.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"upstream"}),(0,s.jsx)(t.td,{children:"A list of upstream components"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plugins"}),(0,s.jsx)(t.td,{children:"A list of plugins to be used in the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cache"}),(0,s.jsxs)(t.td,{children:["(Optional) If set ",(0,s.jsx)(t.code,{children:"true"})," the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status"}),(0,s.jsx)(t.td,{children:"What part of the lifecycle the component is in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"template"}),(0,s.jsx)(t.td,{children:"Template component with variables."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"template_variables"}),(0,s.jsx)(t.td,{children:"Variables to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"types"}),(0,s.jsx)(t.td,{children:"Additional information about types of variables."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blobs"}),(0,s.jsxs)(t.td,{children:["Blob identifiers in ",(0,s.jsx)(t.code,{children:"Template.component"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"files"}),(0,s.jsxs)(t.td,{children:["File identifiers in ",(0,s.jsx)(t.code,{children:"Template.component"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"substitutions"}),(0,s.jsx)(t.td,{children:"Substitutions to be made to create variables."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Query template component."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Example:\n# -------\nq = db['docs'].select().limit('<var:limit>')\nt = QueryTemplate('select_lim', template=q)\nt.variables\n# ['limit']\n"})}),"\n",(0,s.jsx)(t.h2,{id:"template",children:(0,s.jsx)(t.code,{children:"Template"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"Template(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = <factory>,\n     *,\n     upstream: \"t.Optional[t.List['Component']]\" = None,\n     plugins: \"t.Optional[t.List['Plugin']]\" = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     cache: 't.Optional[bool]' = True,\n     status: 't.Optional[Status]' = None,\n     template: Union[Dict,\n     superduper.components.component.Component],\n     template_variables: Optional[List[str]] = None,\n     types: None = <factory>,\n     blobs: Optional[List[str]] = None,\n     files: Optional[List[str]] = None,\n     substitutions: dataclasses.InitVar[typing.Optional[typing.Dict]] = None,\n     requirements: Optional[List[str]] = None,\n     default_table: superduper.components.table.Table | None = None,\n     queries: Optional[List[ForwardRef('QueryTemplate')]] = None) -> None\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"identifier"}),(0,s.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uuid"}),(0,s.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"artifacts"}),(0,s.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,s.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"upstream"}),(0,s.jsx)(t.td,{children:"A list of upstream components"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plugins"}),(0,s.jsx)(t.td,{children:"A list of plugins to be used in the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cache"}),(0,s.jsxs)(t.td,{children:["(Optional) If set ",(0,s.jsx)(t.code,{children:"true"})," the component will not be cached during primary job of the component i.e on a distributed cluster this component will be reloaded on every component task e.g model prediction."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status"}),(0,s.jsx)(t.td,{children:"What part of the lifecycle the component is in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"template"}),(0,s.jsx)(t.td,{children:"Template component with variables."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"template_variables"}),(0,s.jsx)(t.td,{children:"Variables to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"types"}),(0,s.jsx)(t.td,{children:"Additional information about types of variables."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blobs"}),(0,s.jsxs)(t.td,{children:["Blob identifiers in ",(0,s.jsx)(t.code,{children:"Template.component"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"files"}),(0,s.jsxs)(t.td,{children:["File identifiers in ",(0,s.jsx)(t.code,{children:"Template.component"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"substitutions"}),(0,s.jsx)(t.td,{children:"Substitutions to be made to create variables."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"requirements"}),(0,s.jsx)(t.td,{children:"pip requirements for the template."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"default_table"}),(0,s.jsx)(t.td,{children:"Default table to be used with the template."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"queries"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"QueryTemplate"})," instances to be used with the template."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Application template component."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);