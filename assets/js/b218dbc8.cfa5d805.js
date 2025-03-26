"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2951],{7514:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>p,metadata:()=>r,toc:()=>d});var a=n(4848),s=n(8453);const p={},i="superduper_llamacpp",r={id:"ai_plugins/llamacpp",title:"llamacpp",description:"Superduper allows users to work with self-hosted LLM models via Llama.cpp.",source:"@site/versioned_docs/version-0.6/ai_plugins/llamacpp.md",sourceDirName:"ai_plugins",slug:"/ai_plugins/llamacpp",permalink:"/docs/ai_plugins/llamacpp",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.6/ai_plugins/llamacpp.md",tags:[],version:"0.6",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jina",permalink:"/docs/ai_plugins/jina"},next:{title:"openai",permalink:"/docs/ai_plugins/openai"}},t={},d=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"Examples",id:"examples",level:2},{value:"LlamaCpp",id:"llamacpp",level:3}];function c(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h1,{id:"superduper_llamacpp",children:(0,a.jsx)(l.code,{children:"superduper_llamacpp"})}),"\n",(0,a.jsxs)(l.p,{children:["Superduper allows users to work with self-hosted LLM models via ",(0,a.jsx)(l.a,{href:"https://github.com/ggerganov/llama.cpp",children:"Llama.cpp"}),"."]}),"\n",(0,a.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-bash",children:"pip install superduper_llamacpp\n"})}),"\n",(0,a.jsx)(l.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.a,{href:"https://github.com/superduper-io/superduper/tree/main/plugins/llamacpp",children:"Code"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.a,{href:"/docs/api/plugins/superduper_llamacpp",children:"API-docs"})}),"\n"]}),"\n",(0,a.jsxs)(l.table,{children:[(0,a.jsx)(l.thead,{children:(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.th,{children:"Class"}),(0,a.jsx)(l.th,{children:"Description"})]})}),(0,a.jsxs)(l.tbody,{children:[(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.td,{children:(0,a.jsx)(l.code,{children:"superduper_llamacpp.model.LlamaCpp"})}),(0,a.jsx)(l.td,{children:"Llama.cpp connector."})]}),(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.td,{children:(0,a.jsx)(l.code,{children:"superduper_llamacpp.model.LlamaCppEmbedding"})}),(0,a.jsx)(l.td,{children:"Llama.cpp connector for embeddings."})]})]})]}),"\n",(0,a.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(l.h3,{id:"llamacpp",children:"LlamaCpp"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-python",children:'from superduper_llama_cpp.model import LlamaCpp\n\nmodel = LlamaCpp(\n    identifier="llm",\n    model_name_or_path="mistral-7b-instruct-v0.2.Q4_K_M.gguf",\n)\nmodel.predict("Hello world")\n'})})]})}function o(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>r});var a=n(6540);const s={},p=a.createContext(s);function i(e){const l=a.useContext(p);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(p.Provider,{value:l},e.children)}}}]);