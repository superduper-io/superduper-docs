"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7948],{5049:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=d(4848),a=d(8453);const s={},r=void 0,c={id:"api/misc/auto_schema",title:"auto_schema",description:"superduper.misc.auto_schema",source:"@site/content/api/misc/auto_schema.md",sourceDirName:"api/misc",slug:"/api/misc/auto_schema",permalink:"/docs/api/misc/auto_schema",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/misc/auto_schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"annotations",permalink:"/docs/api/misc/annotations"},next:{title:"data",permalink:"/docs/api/misc/data"}},i={},h=[{value:"<code>infer_datatype</code>",id:"infer_datatype",level:2},{value:"<code>infer_schema</code>",id:"infer_schema",level:2},{value:"<code>register_module</code>",id:"register_module",level:2},{value:"<code>updated_schema_data_for_ibis</code>",id:"updated_schema_data_for_ibis",level:2},{value:"<code>updated_schema_data_for_mongodb</code>",id:"updated_schema_data_for_mongodb",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"superduper.misc.auto_schema"})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/misc/auto_schema.py",children:"Source code"})}),"\n",(0,n.jsx)(t.h2,{id:"infer_datatype",children:(0,n.jsx)(t.code,{children:"infer_datatype"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"infer_datatype(data: Any) -> Union[superduper.components.datatype.DataType,\n     type,\n     NoneType]\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"The data object"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Infer the datatype of a given data object."}),"\n",(0,n.jsx)(t.p,{children:"If the data object is a base type, return None,\nOtherwise, return the inferred datatype"}),"\n",(0,n.jsx)(t.h2,{id:"infer_schema",children:(0,n.jsx)(t.code,{children:"infer_schema"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"infer_schema(data: Mapping[str,\n     Any],\n     identifier: Optional[str] = None,\n     ibis=False) -> superduper.components.schema.Schema\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"The data object"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identifier"}),(0,n.jsx)(t.td,{children:"The identifier for the schema, if None, it will be generated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ibis"}),(0,n.jsx)(t.td,{children:"If True, the schema will be updated for the Ibis backend, otherwise for MongoDB"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Infer a schema from a given data object."}),"\n",(0,n.jsx)(t.h2,{id:"register_module",children:(0,n.jsx)(t.code,{children:"register_module"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"register_module(module_name)\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"module_name"}),(0,n.jsx)(t.td,{children:'The module name, e.g. "superduper.ext.numpy.encoder"'})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Register a module for datatype inference."}),"\n",(0,n.jsx)(t.p,{children:"Only modules with a check and create function will be registered"}),"\n",(0,n.jsx)(t.h2,{id:"updated_schema_data_for_ibis",children:(0,n.jsx)(t.code,{children:"updated_schema_data_for_ibis"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"updated_schema_data_for_ibis(schema_data) -> Dict[str,\n     superduper.components.datatype.DataType]\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"schema_data"}),(0,n.jsx)(t.td,{children:"The schema data"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Update the schema data for Ibis backend."}),"\n",(0,n.jsx)(t.p,{children:"Convert the basic data types to Ibis data types."}),"\n",(0,n.jsx)(t.h2,{id:"updated_schema_data_for_mongodb",children:(0,n.jsx)(t.code,{children:"updated_schema_data_for_mongodb"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"updated_schema_data_for_mongodb(schema_data) -> Dict[str,\n     superduper.components.datatype.DataType]\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"schema_data"}),(0,n.jsx)(t.td,{children:"The schema data"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Update the schema data for MongoDB backend."}),"\n",(0,n.jsx)(t.p,{children:"Only keep the data types that can be stored directly in MongoDB."})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>r,x:()=>c});var n=d(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);