"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2994],{6010:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(4848),s=n(8453);const i={},o="superduper_torch",d={id:"ai_plugins/torch",title:"torch",description:"Superduper allows users to work with arbitrary torch models, with custom pre-, post-processing and input/ output data-types, as well as offering training with superduper",source:"@site/versioned_docs/version-0.4/ai_plugins/torch.md",sourceDirName:"ai_plugins",slug:"/ai_plugins/torch",permalink:"/docs/ai_plugins/torch",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/ai_plugins/torch.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"openai",permalink:"/docs/ai_plugins/openai"},next:{title:"sentence_transformers",permalink:"/docs/ai_plugins/sentence_transformers"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"Examples",id:"examples",level:2},{value:"TorchModel",id:"torchmodel",level:3},{value:"Training Example",id:"training-example",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"superduper_torch",children:"superduper_torch"}),"\n",(0,t.jsxs)(r.p,{children:["Superduper allows users to work with arbitrary ",(0,t.jsx)(r.code,{children:"torch"})," models, with custom pre-, post-processing and input/ output data-types, as well as offering training with superduper"]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pip install superduper_torch\n"})}),"\n",(0,t.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/superduper-io/superduper/tree/main/plugins/torch",children:"Code"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/api/plugins/superduper_torch",children:"API-docs"})}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper_torch.model.TorchModel"})}),(0,t.jsx)(r.td,{children:"Torch model. This class is a wrapper around a PyTorch model."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper_torch.training.TorchTrainer"})}),(0,t.jsx)(r.td,{children:"Configuration for the PyTorch trainer."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.h3,{id:"torchmodel",children:"TorchModel"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import torch\nfrom superduper_torch.model import TorchModel\n\nmodel = TorchModel(\n    object=torch.nn.Linear(32, 1),\n    identifier="test",\n    preferred_devices=("cpu",),\n    postprocess=lambda x: int(torch.sigmoid(x).item() > 0.5),\n)\nmodel.predict(torch.randn(32))\n'})}),"\n",(0,t.jsx)(r.h2,{id:"training-example",children:"Training Example"}),"\n",(0,t.jsxs)(r.p,{children:["Read more about this ",(0,t.jsx)(r.a,{href:"https://docs.superduper.io/docs/templates/transfer_learning",children:"here"})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var t=n(6540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);