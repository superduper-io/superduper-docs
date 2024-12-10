"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6909],{5311:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),t=n(8453);const r={},i="superduper_vllm",a={id:"ai_plugins/vllm",title:"vllm",description:"Superduper allows users to work with self-hosted LLM models via vLLM.",source:"@site/versioned_docs/version-0.4/ai_plugins/vllm.md",sourceDirName:"ai_plugins",slug:"/ai_plugins/vllm",permalink:"/docs/ai_plugins/vllm",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/ai_plugins/vllm.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"transformers",permalink:"/docs/ai_plugins/transformers"},next:{title:"Fundamentals",permalink:"/docs/fundamentals/overview"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"Examples",id:"examples",level:2},{value:"VllmChat",id:"vllmchat",level:3},{value:"VllmCompletion",id:"vllmcompletion",level:3}];function m(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"superduper_vllm",children:"superduper_vllm"}),"\n",(0,s.jsxs)(l.p,{children:["Superduper allows users to work with self-hosted LLM models via ",(0,s.jsx)(l.a,{href:"https://github.com/vllm-project/vllm",children:"vLLM"}),"."]}),"\n",(0,s.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-bash",children:"pip install superduper_vllm\n"})}),"\n",(0,s.jsx)(l.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"https://github.com/superduper-io/superduper/tree/main/plugins/vllm",children:"Code"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/docs/api/plugins/superduper_vllm",children:"API-docs"})}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Class"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"superduper_vllm.model.VllmChat"})}),(0,s.jsx)(l.td,{children:"VLLM model for chatting."})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"superduper_vllm.model.VllmCompletion"})}),(0,s.jsx)(l.td,{children:"VLLM model for generating completions."})]})]})]}),"\n",(0,s.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(l.h3,{id:"vllmchat",children:"VllmChat"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:'from superduper_vllm import VllmChat\nvllm_params = dict(\n    model="hugging-quants/Meta-Llama-3.1-8B-Instruct-AWQ-INT4",\n    quantization="awq",\n    dtype="auto",\n    max_model_len=1024,\n    tensor_parallel_size=1,\n)\nmodel = VllmChat(identifier="model", vllm_params=vllm_params)\nmessages = [\n    {"role": "system", "content": "You are a helpful assistant."},\n    {"role": "user", "content": "hello"},\n]\n'})}),"\n",(0,s.jsx)(l.p,{children:"Chat with chat format messages"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:"model.predict(messages)\n"})}),"\n",(0,s.jsx)(l.p,{children:"Chat with text format messages"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:'model.predict("hello")\n'})}),"\n",(0,s.jsx)(l.h3,{id:"vllmcompletion",children:"VllmCompletion"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:'from superduper_vllm import VllmCompletion\nvllm_params = dict(\n    model="hugging-quants/Meta-Llama-3.1-8B-Instruct-AWQ-INT4",\n    quantization="awq",\n    dtype="auto",\n    max_model_len=1024,\n    tensor_parallel_size=1,\n)\nmodel = VllmCompletion(identifier="model", vllm_params=vllm_params)\nmodel.predict("hello")\n'})})]})}function c(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>a});var s=n(6540);const t={},r=s.createContext(t);function i(e){const l=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:l},e.children)}}}]);