"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5354],{7673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(4848),i=r(8453);const s={},o="Training models directly on your datastore",d={id:"customize/training_models",title:"Training models directly on your datastore",description:"Model instances may be trained if a trainer is set on the Model when db.apply is called.",source:"@site/versioned_docs/version-0.4/customize/training_models.md",sourceDirName:"customize",slug:"/customize/training_models",permalink:"/docs/customize/training_models",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/customize/training_models.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bring your own models",permalink:"/docs/customize/model"},next:{title:"Change data capture",permalink:"/docs/customize/cdc"}},a={},c=[{value:"Basic pattern",id:"basic-pattern",level:2},{value:"Fitting/ training models by framework",id:"fitting-training-models-by-framework",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"training-models-directly-on-your-datastore",children:"Training models directly on your datastore"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Model"})," instances may be trained if a ",(0,t.jsx)(n.code,{children:"trainer"})," is set on the ",(0,t.jsx)(n.code,{children:"Model"})," when ",(0,t.jsx)(n.code,{children:"db.apply"})," is called.\nWhen models are trained, if ",(0,t.jsx)(n.code,{children:"CFG.cluster.compute"})," has been configured with a ",(0,t.jsx)(n.code,{children:"ray"})," scheduler, then ",(0,t.jsx)(n.code,{children:"superduper"})," deploys ",(0,t.jsxs)(n.a,{href:"../production_features/non_blocking_ray_jobs",children:["a job on the connected ",(0,t.jsx)(n.code,{children:"ray"})," cluster"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-pattern",children:"Basic pattern"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper.ext.<framework> import <Framework>Trainer\nfrom superduper.ext.<framework> import <ModelCls>\n\ndb.apply(\n    <ModelCls>(\n        *args, \n        trainer=<Framework>Trainer(**trainer_kwargs),\n        **kwargs,\n    )\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fitting-training-models-by-framework",children:"Fitting/ training models by framework"}),"\n",(0,t.jsxs)(n.p,{children:["Not all ",(0,t.jsx)(n.code,{children:"Model"})," types are trainable. We support training for the following frameworks:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Framework"}),(0,t.jsx)(n.th,{children:"Training Link"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Scikit-Learn"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../ai_integrations/sklearn#training",children:"link"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PyTorch"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../ai_integrations/pytorch#training",children:"link"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Transformers"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../ai_integrations/transformers#training",children:"link"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);