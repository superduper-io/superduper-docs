"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8988],{8447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var d=n(4848),s=n(8453);const r={},i=void 0,c={id:"api/components/model",title:"model",description:"superduper.components.model",source:"@site/docs/api/components/model.md",sourceDirName:"api/components",slug:"/api/components/model",permalink:"/docs/api/components/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/components/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metric",permalink:"/docs/api/components/metric"},next:{title:"plugin",permalink:"/docs/api/components/plugin"}},l={},a=[{value:"<code>codemodel</code>",id:"codemodel",level:2},{value:"<code>model</code>",id:"model",level:2},{value:"<code>CodeModel</code>",id:"codemodel-1",level:2},{value:"<code>Model</code>",id:"model-1",level:2},{value:"<code>ObjectModel</code>",id:"objectmodel",level:2},{value:"<code>QueryModel</code>",id:"querymodel",level:2},{value:"<code>Validation</code>",id:"validation",level:2},{value:"<code>Mapping</code>",id:"mapping",level:2},{value:"<code>APIBaseModel</code>",id:"apibasemodel",level:2},{value:"<code>APIModel</code>",id:"apimodel",level:2},{value:"<code>CallableInputs</code>",id:"callableinputs",level:2},{value:"<code>IndexableNode</code>",id:"indexablenode",level:2},{value:"<code>Inputs</code>",id:"inputs",level:2},{value:"<code>SequentialModel</code>",id:"sequentialmodel",level:2},{value:"<code>Trainer</code>",id:"trainer",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:"superduper.components.model"})})}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper.components/model.py",children:"Source code"})}),"\n",(0,d.jsx)(t.h2,{id:"codemodel",children:(0,d.jsx)(t.code,{children:"codemodel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"codemodel(item: 't.Optional[t.Callable]' = None,\n     identifier: 't.Optional[str]' = None,\n     datatype=None,\n     model_update_kwargs: 't.Optional[t.Dict]' = None,\n     flatten: 'bool' = False,\n     output_schema: 't.Optional[Schema]' = None)\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"item"}),(0,d.jsxs)(t.td,{children:["Callable to wrap with ",(0,d.jsx)(t.code,{children:"CodeModel"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsxs)(t.td,{children:["Identifier for the ",(0,d.jsx)(t.code,{children:"CodeModel"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"Datatype for the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"Dictionary to define update kwargs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsxs)(t.td,{children:["If ",(0,d.jsx)(t.code,{children:"True"}),", flatten the outputs and save."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Schema for the model outputs."})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:["Decorator to wrap a function with ",(0,d.jsx)(t.code,{children:"CodeModel"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["When a function is wrapped with this decorator,\nthe function comes out as a ",(0,d.jsx)(t.code,{children:"CodeModel"}),"."]}),"\n",(0,d.jsx)(t.h2,{id:"model",children:(0,d.jsx)(t.code,{children:"model"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"model(item: 't.Optional[t.Callable]' = None,\n     identifier: 't.Optional[str]' = None,\n     datatype=None,\n     model_update_kwargs: 't.Optional[t.Dict]' = None,\n     flatten: 'bool' = False,\n     output_schema: 't.Optional[Schema]' = None)\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"item"}),(0,d.jsxs)(t.td,{children:["Callable to wrap with ",(0,d.jsx)(t.code,{children:"ObjectModel"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsxs)(t.td,{children:["Identifier for the ",(0,d.jsx)(t.code,{children:"ObjectModel"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"Datatype for the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"Dictionary to define update kwargs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsxs)(t.td,{children:["If ",(0,d.jsx)(t.code,{children:"True"}),", flatten the outputs and save."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Schema for the model outputs."})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:["Decorator to wrap a function with ",(0,d.jsx)(t.code,{children:"ObjectModel"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["When a function is wrapped with this decorator,\nthe function comes out as an ",(0,d.jsx)(t.code,{children:"ObjectModel"}),"."]}),"\n",(0,d.jsx)(t.h2,{id:"codemodel-1",children:(0,d.jsx)(t.code,{children:"CodeModel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"CodeModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     num_workers: 'int' = 0,\n     object: 'Code') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"num_workers"}),(0,d.jsx)(t.td,{children:"Number of workers to use for parallel processing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"Code object"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Model component which stores a code object."}),"\n",(0,d.jsx)(t.h2,{id:"model-1",children:(0,d.jsx)(t.code,{children:"Model"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Model(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Base class for components which can predict."}),"\n",(0,d.jsx)(t.h2,{id:"objectmodel",children:(0,d.jsx)(t.code,{children:"ObjectModel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"ObjectModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     num_workers: 'int' = 0,\n     object: 't.Any') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"num_workers"}),(0,d.jsx)(t.td,{children:"Number of workers to use for parallel processing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"object"}),(0,d.jsx)(t.td,{children:"Model/ computation object"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Model component which wraps a Model to become serializable."}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"# Example:\n# -------\nm = ObjectModel('test', lambda x: x + 2)\nm.predict(2)\n# 4\n"})}),"\n",(0,d.jsx)(t.h2,{id:"querymodel",children:(0,d.jsx)(t.code,{children:"QueryModel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"QueryModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '**kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     preprocess: 't.Optional[t.Callable]' = None,\n     postprocess: 't.Optional[t.Union[t.Callable]]' = None,\n     select: 'Query') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"preprocess"}),(0,d.jsx)(t.td,{children:"Preprocess callable"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"postprocess"}),(0,d.jsx)(t.td,{children:"Postprocess callable"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"select"}),(0,d.jsxs)(t.td,{children:["query used to find data (can include ",(0,d.jsx)(t.code,{children:"like"}),")"]})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"QueryModel component."}),"\n",(0,d.jsx)(t.p,{children:"Model which can be used to query data and return those\nprecomputed queries as Results."}),"\n",(0,d.jsx)(t.h2,{id:"validation",children:(0,d.jsx)(t.code,{children:"Validation"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Validation(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     metrics: 't.Sequence[Metric]' = (),\n     key: 't.Optional[ModelInputType]' = None,\n     datasets: 't.Sequence[Dataset]' = ()) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metrics"}),(0,d.jsx)(t.td,{children:"List of metrics for validation"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"key"}),(0,d.jsx)(t.td,{children:"Model input type key"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datasets"}),(0,d.jsx)(t.td,{children:"Sequence of dataset."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"component which represents Validation definition."}),"\n",(0,d.jsx)(t.h2,{id:"mapping",children:(0,d.jsx)(t.code,{children:"Mapping"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Mapping(self,\n     mapping: 'ModelInputType',\n     signature: 'Signature')\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mapping"}),(0,d.jsx)(t.td,{children:"Mapping that represents a collection or table map."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Signature for the model."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Class to represent model inputs for mapping database collections or tables."}),"\n",(0,d.jsx)(t.h2,{id:"apibasemodel",children:(0,d.jsx)(t.code,{children:"APIBaseModel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"APIBaseModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"APIBaseModel component which is used to make the type of API request."}),"\n",(0,d.jsx)(t.h2,{id:"apimodel",children:(0,d.jsx)(t.code,{children:"APIModel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"APIModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8,\n     url: 'str',\n     postprocess: 't.Optional[t.Callable]' = None) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"url"}),(0,d.jsx)(t.td,{children:"The url to use for the API request"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"postprocess"}),(0,d.jsx)(t.td,{children:"Postprocess function to use on the output of the API request"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"APIModel component which is used to make the type of API request."}),"\n",(0,d.jsx)(t.h2,{id:"callableinputs",children:(0,d.jsx)(t.code,{children:"CallableInputs"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"CallableInputs(self,\n     fn,\n     predict_kwargs: 't.Dict' = {})\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fn"}),(0,d.jsx)(t.td,{children:"Callable function"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"(optional) predict_kwargs if provided in Model initiation"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Class represents the model callable args and kwargs."}),"\n",(0,d.jsx)(t.h2,{id:"indexablenode",children:(0,d.jsx)(t.code,{children:"IndexableNode"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"IndexableNode(self,\n     types: 't.Sequence[t.Type]') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"types"}),(0,d.jsx)(t.td,{children:"Sequence of types"})]})})]}),"\n",(0,d.jsxs)(t.p,{children:["Base indexable node for ",(0,d.jsx)(t.code,{children:"ObjectModel"}),"."]}),"\n",(0,d.jsx)(t.h2,{id:"inputs",children:(0,d.jsx)(t.code,{children:"Inputs"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Inputs(self,\n     params)\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"params"}),(0,d.jsx)(t.td,{children:"List of parameters of the Model object"})]})})]}),"\n",(0,d.jsx)(t.p,{children:"Base class to represent the model args and kwargs."}),"\n",(0,d.jsx)(t.h2,{id:"sequentialmodel",children:(0,d.jsx)(t.code,{children:"SequentialModel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"SequentialModel(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     models: 't.List[Model]') -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"models"}),(0,d.jsx)(t.td,{children:"A list of models to use"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Sequential model component which wraps a model to become serializable."}),"\n",(0,d.jsx)(t.h2,{id:"trainer",children:(0,d.jsx)(t.code,{children:"Trainer"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Trainer(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     key: 'ModelInputType',\n     select: 'Query',\n     transform: 't.Optional[t.Callable]' = None,\n     metric_values: 't.Dict' = None,\n     signature: 'Signature' = '*args',\n     data_prefetch: 'bool' = False,\n     prefetch_size: 'int' = 1000,\n     prefetch_factor: 'int' = 100,\n     in_memory: 'bool' = True,\n     compute_kwargs: 't.Dict' = None) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"key"}),(0,d.jsx)(t.td,{children:"Model input type key."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"select"}),(0,d.jsx)(t.td,{children:"Model select query for training."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"transform"}),(0,d.jsx)(t.td,{children:"(optional) transform callable."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"Dictionary for metric defaults."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data_prefetch"}),(0,d.jsx)(t.td,{children:"Boolean for prefetching data before forward pass."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prefetch_size"}),(0,d.jsx)(t.td,{children:"Prefetch batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prefetch_factor"}),(0,d.jsx)(t.td,{children:"Prefetch factor for data prefetching."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"in_memory"}),(0,d.jsx)(t.td,{children:"If training in memory."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs for compute backend."})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Trainer component to train a model."}),"\n",(0,d.jsxs)(t.p,{children:["Training configuration object, containing all settings necessary for a particular\nlearning task use-case to be serialized and initiated. The object is ",(0,d.jsx)(t.code,{children:"callable"}),"\nand returns a class which may be invoked to apply training."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var d=n(6540);const s={},r=d.createContext(s);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);