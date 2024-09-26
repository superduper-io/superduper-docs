"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1023],{1161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=t(4848),r=t(8453);const s={},o="superduper_anthropic",l={id:"ai_plugins/anthropic",title:"anthropic",description:"Superduper allows users to work with anthropic API models. The key integration is the integration of high-quality API-hosted LLM services.",source:"@site/content/ai_plugins/anthropic.md",sourceDirName:"ai_plugins",slug:"/ai_plugins/anthropic",permalink:"/docs/ai_plugins/anthropic",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/ai_plugins/anthropic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AI plugins",permalink:"/docs/category/ai-plugins"},next:{title:"cohere",permalink:"/docs/ai_plugins/cohere"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"Examples",id:"examples",level:2},{value:"AnthropicCompletions",id:"anthropiccompletions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"superduper_anthropic",children:"superduper_anthropic"}),"\n",(0,i.jsx)(n.p,{children:"Superduper allows users to work with anthropic API models. The key integration is the integration of high-quality API-hosted LLM services."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install superduper_anthropic\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/superduper-io/superduper/tree/main/plugins/anthropic",children:"Code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/api/plugins/superduper_anthropic",children:"API-docs"})}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Class"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"superduper_anthropic.model.Anthropic"})}),(0,i.jsx)(n.td,{children:"Anthropic predictor."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"superduper_anthropic.model.AnthropicCompletions"})}),(0,i.jsx)(n.td,{children:"Cohere completions (chat) predictor."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"anthropiccompletions",children:"AnthropicCompletions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduper_anthropic.model import AnthropicCompletions\n\nmodel = AnthropicCompletions(\n    identifier="claude-2.1",\n    predict_kwargs={"max_tokens": 64},\n)\nmodel.predict_batches(["Hello, world!"])\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);