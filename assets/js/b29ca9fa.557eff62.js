"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4522],{4673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=t(4848),s=t(8453);const d={},i=void 0,c={id:"api/components/component",title:"component",description:"superduper.components.component",source:"@site/content/api/components/component.md",sourceDirName:"api/components",slug:"/api/components/component",permalink:"/superduper-docs/docs/api/components/component",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/components/component.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"application",permalink:"/superduper-docs/docs/api/components/application"},next:{title:"dataset",permalink:"/superduper-docs/docs/api/components/dataset"}},o={},l=[{value:"<code>ensure_initialized</code>",id:"ensure_initialized",level:2},{value:"<code>getdeepattr</code>",id:"getdeepattr",level:2},{value:"<code>import_</code>",id:"import_",level:2},{value:"<code>Component</code>",id:"component",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"superduper.components.component"})})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper.components/component.py",children:"Source code"})}),"\n",(0,r.jsx)(n.h2,{id:"ensure_initialized",children:(0,r.jsx)(n.code,{children:"ensure_initialized"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"ensure_initialized(func)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"func"}),(0,r.jsx)(n.td,{children:"Decorator function."})]})})]}),"\n",(0,r.jsx)(n.p,{children:"Decorator to ensure that the model is initialized before calling the function."}),"\n",(0,r.jsx)(n.h2,{id:"getdeepattr",children:(0,r.jsx)(n.code,{children:"getdeepattr"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"getdeepattr(obj,\n     attr)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"obj"}),(0,r.jsx)(n.td,{children:"Object."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attr"}),(0,r.jsx)(n.td,{children:"Attribute."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Get nested attribute with dot notation."}),"\n",(0,r.jsx)(n.h2,{id:"import_",children:(0,r.jsx)(n.code,{children:"import_"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import_(r=None,\n     path=None,\n     db=None)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r"}),(0,r.jsx)(n.td,{children:"Object to be imported."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"Components directory."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"db"}),(0,r.jsx)(n.td,{children:"Datalayer instance."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Helper function for importing component JSONs, YAMLs, etc."}),"\n",(0,r.jsx)(n.h2,{id:"component",children:(0,r.jsx)(n.code,{children:"Component"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Component(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None) -> None\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"identifier"}),(0,r.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"db"}),(0,r.jsx)(n.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uuid"}),(0,r.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"artifacts"}),(0,r.jsxs)(n.td,{children:["A dictionary of artifacts paths and ",(0,r.jsx)(n.code,{children:"DataType"})," objects"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Base class for all components in ",(0,r.jsx)(n.code,{children:"superduper"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Class to represent ",(0,r.jsx)(n.code,{children:"superduper"})," serializable entities\nthat can be saved into a database."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);