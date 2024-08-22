"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4922],{1455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var n=r(4848),s=r(8453);const d={},i=void 0,c={id:"api/ext/sklearn/model",title:"model",description:"superduper.ext.sklearn.model",source:"@site/content/api/ext/sklearn/model.md",sourceDirName:"api/ext/sklearn",slug:"/api/ext/sklearn/model",permalink:"/docs/api/ext/sklearn/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/ext/sklearn/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/api/ext/sentence_transformers/model"},next:{title:"encoder",permalink:"/docs/api/ext/torch/encoder"}},a={},l=[{value:"<code>Estimator</code>",id:"estimator",level:2},{value:"<code>SklearnTrainer</code>",id:"sklearntrainer",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"superduper.ext.sklearn.model"})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/sklearn/model.py",children:"Source code"})}),"\n",(0,n.jsx)(t.h2,{id:"estimator",children:(0,n.jsx)(t.code,{children:"Estimator"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"Estimator(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     trainer: Optional[superduper.ext.sklearn.model.SklearnTrainer] = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: Literal['*args',\n     '**kwargs',\n     '*args,\n    **kwargs',\n     'singleton'] = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     object: sklearn.base.BaseEstimator,\n     preprocess: Optional[Callable] = None,\n     postprocess: Optional[Callable] = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identifier"}),(0,n.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db"}),(0,n.jsx)(t.td,{children:"Datalayer instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uuid"}),(0,n.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"artifacts"}),(0,n.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,n.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"signature"}),(0,n.jsx)(t.td,{children:"Model signature."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"datatype"}),(0,n.jsx)(t.td,{children:"DataType instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_schema"}),(0,n.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"flatten"}),(0,n.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_update_kwargs"}),(0,n.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"predict_kwargs"}),(0,n.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compute_kwargs"}),(0,n.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"validation"}),(0,n.jsxs)(t.td,{children:["The validation ",(0,n.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metric_values"}),(0,n.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"object"}),(0,n.jsxs)(t.td,{children:["The estimator object from ",(0,n.jsx)(t.code,{children:"sklearn"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trainer"}),(0,n.jsx)(t.td,{children:"The trainer to use."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"preprocess"}),(0,n.jsx)(t.td,{children:"The preprocessing function to use."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"postprocess"}),(0,n.jsx)(t.td,{children:"The postprocessing function to use."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Estimator model."}),"\n",(0,n.jsx)(t.p,{children:"This is a model that can be trained and used for prediction."}),"\n",(0,n.jsx)(t.h2,{id:"sklearntrainer",children:(0,n.jsx)(t.code,{children:"SklearnTrainer"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"SklearnTrainer(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     key: 'ModelInputType',\n     select: 'Query',\n     transform: 't.Optional[t.Callable]' = None,\n     metric_values: 't.Dict' = None,\n     signature: 'Signature' = '*args',\n     data_prefetch: 'bool' = False,\n     prefetch_size: 'int' = 1000,\n     prefetch_factor: 'int' = 100,\n     in_memory: 'bool' = True,\n     compute_kwargs: 't.Dict' = None,\n     fit_params: Dict = None,\n     predict_params: Dict = None,\n     y_preprocess: Optional[Callable] = None) -> None\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identifier"}),(0,n.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db"}),(0,n.jsx)(t.td,{children:"Datalayer instance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uuid"}),(0,n.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"artifacts"}),(0,n.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,n.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"key"}),(0,n.jsx)(t.td,{children:"Model input type key."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"select"}),(0,n.jsx)(t.td,{children:"Model select query for training."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"(optional) transform callable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metric_values"}),(0,n.jsx)(t.td,{children:"Dictionary for metric defaults."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"signature"}),(0,n.jsx)(t.td,{children:"Model signature."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data_prefetch"}),(0,n.jsx)(t.td,{children:"Boolean for prefetching data before forward pass."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prefetch_size"}),(0,n.jsx)(t.td,{children:"Prefetch batch size."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prefetch_factor"}),(0,n.jsx)(t.td,{children:"Prefetch factor for data prefetching."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"in_memory"}),(0,n.jsx)(t.td,{children:"If training in memory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compute_kwargs"}),(0,n.jsx)(t.td,{children:"Kwargs for compute backend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fit_params"}),(0,n.jsxs)(t.td,{children:["The parameters to pass to ",(0,n.jsx)(t.code,{children:"fit"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"predict_params"}),(0,n.jsx)(t.td,{children:"The parameters to pass to `predict"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"y_preprocess"}),(0,n.jsx)(t.td,{children:"The preprocessing function to use for the target."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["A trainer for ",(0,n.jsx)(t.code,{children:"sklearn"})," models."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(6540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);