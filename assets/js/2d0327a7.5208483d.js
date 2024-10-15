"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7847],{1993:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(4848),t=s(8453);const i={sidebar_position:5},d="Predictors and Models",o={id:"fundamentals/models",title:"Predictors and Models",description:"Predictors",source:"@site/docs/fundamentals/models.md",sourceDirName:"fundamentals",slug:"/fundamentals/models",permalink:"/docs/fundamentals/models",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/fundamentals/models.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5}},c={},l=[{value:"Predictors",id:"predictors",level:2},{value:"Models",id:"models",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"predictors-and-models",children:"Predictors and Models"}),"\n",(0,r.jsx)(n.h2,{id:"predictors",children:"Predictors"}),"\n",(0,r.jsxs)(n.p,{children:["The base class which enables predictions in ",(0,r.jsx)(n.code,{children:"superduper"})," is the ",(0,r.jsx)(n.code,{children:"Predictor"})," mixin class."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"Predictor"})," is a class which implements the ",(0,r.jsx)(n.code,{children:".predict"})," method; this mimics ",(0,r.jsx)(n.code,{children:".predict"})," from\n",(0,r.jsx)(n.a,{href:"https://scikit-learn.org/stable/",children:"Scikit-Learn"})," and related frameworks, but has support\nfor prediction directly via the ",(0,r.jsx)(n.code,{children:"Datalayer"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A typical call to ",(0,r.jsx)(n.code,{children:".predict"})," looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"predictor.predict(\n    X='<key-column>'     # key of documents or column of table to take as input\n    db=db                # `Datalayer` instance, built via `db = superduper()`\n    select=my_select     # database query over which to compute outputs\n    **predict_kwargs     # additional parameters for `.predict`\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Examples of ",(0,r.jsx)(n.code,{children:"Predictor"})," classes are the AI-API classes in"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"superduper.ext.openai.OpenAI*"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"superduper.ext.anthropic.Anthropic*"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"superduper.ext.cohere.Cohere*"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,r.jsxs)(n.p,{children:["A model is a particular type of ",(0,r.jsx)(n.code,{children:"Predictor"})," which carries large chunks of data around\nin order to implement predictions. These blobs can be, for example, the weights\nof a deep learning architecture or similar important data."]}),"\n",(0,r.jsxs)(n.p,{children:["Examples of ",(0,r.jsx)(n.code,{children:"Model"})," are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"superduper.ext.torch.TorchModel"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"superduper.ext.sklearn.Estimator"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"superdueprdb.ext.transformers.Pipeline"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each of these inheriting classes also implements the ",(0,r.jsx)(n.code,{children:".fit"})," method, which re-parametrizes the class in question,\ntypicall via a machine learning task and objective function."]}),"\n",(0,r.jsxs)(n.p,{children:["A typical call to ",(0,r.jsx)(n.code,{children:".fit"})," looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"model.fit(\n    X='<input-key-column>',    # key of documents or column of table to take as input\n    y='<target-key>',          # key of documents or column of table to take as target of fitting\n    db=db,                     # `Datalayer` instance, built via `db = superduper()`\n    select=my_select,          # database query for training and validation data\n    **fit_kwargs,              # additional parameters for .fit\n)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);