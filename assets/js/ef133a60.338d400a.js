"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7359],{8379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var d=n(4848),r=n(8453);const s={},i=void 0,c={id:"api/ext/cohere/model",title:"model",description:"superduper.ext.cohere.model",source:"@site/docs/api/ext/cohere/model.md",sourceDirName:"api/ext/cohere",slug:"/api/ext/cohere/model",permalink:"/docs/api/ext/cohere/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/ext/cohere/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/api/ext/anthropic/model"},next:{title:"client",permalink:"/docs/api/ext/jina/client"}},a={},l=[{value:"<code>CohereEmbed</code>",id:"cohereembed",level:2},{value:"<code>CohereGenerate</code>",id:"coheregenerate",level:2},{value:"<code>Cohere</code>",id:"cohere",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:"superduper.ext.cohere.model"})})}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/cohere/model.py",children:"Source code"})}),"\n",(0,d.jsx)(t.h2,{id:"cohereembed",children:(0,d.jsx)(t.code,{children:"CohereEmbed"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"CohereEmbed(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8,\n     client_kwargs: Dict[str,\n     Any] = None,\n     shape: Optional[Sequence[int]] = None,\n     batch_size: int = 100) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"client_kwargs"}),(0,d.jsx)(t.td,{children:"The keyword arguments to pass to the client."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"shape"}),(0,d.jsxs)(t.td,{children:["The shape as ",(0,d.jsx)(t.code,{children:"tuple"})," of the embedding."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"batch_size"}),(0,d.jsx)(t.td,{children:"The batch size to use for the predictor."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Cohere embedding predictor."}),"\n",(0,d.jsx)(t.h2,{id:"coheregenerate",children:(0,d.jsx)(t.code,{children:"CohereGenerate"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"CohereGenerate(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8,\n     client_kwargs: Dict[str,\n     Any] = None,\n     takes_context: bool = True,\n     prompt: str = '') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"client_kwargs"}),(0,d.jsx)(t.td,{children:"The keyword arguments to pass to the client."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"takes_context"}),(0,d.jsx)(t.td,{children:"Whether the model takes context into account."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prompt"}),(0,d.jsx)(t.td,{children:"The prompt to use to seed the response."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Cohere realistic text generator (chat predictor)."}),"\n",(0,d.jsx)(t.h2,{id:"cohere",children:(0,d.jsx)(t.code,{children:"Cohere"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Cohere(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8,\n     client_kwargs: Dict[str,\n     Any] = None) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"client_kwargs"}),(0,d.jsx)(t.td,{children:"The keyword arguments to pass to the client."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Cohere predictor."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var d=n(6540);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);