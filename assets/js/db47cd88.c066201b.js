"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4507],{9564:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const i={},o="superduper_sentence_transformers",a={id:"ai_plugins/sentence_transformers",title:"sentence_transformers",description:"superduper allows users to work with self-hosted embedding models via Sentence-Transformers.",source:"@site/docs/ai_plugins/sentence_transformers.md",sourceDirName:"ai_plugins",slug:"/ai_plugins/sentence_transformers",permalink:"/docs/next/ai_plugins/sentence_transformers",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/ai_plugins/sentence_transformers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"torch",permalink:"/docs/next/ai_plugins/torch"},next:{title:"sklearn",permalink:"/docs/next/ai_plugins/sklearn"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"Examples",id:"examples",level:2},{value:"SentenceTransformer",id:"sentencetransformer",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"superduper_sentence_transformers",children:(0,s.jsx)(n.code,{children:"superduper_sentence_transformers"})}),"\n",(0,s.jsxs)(n.p,{children:["superduper allows users to work with self-hosted embedding models via ",(0,s.jsx)(n.a,{href:"https://sbert.net",children:"Sentence-Transformers"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install superduper_sentence_transformers\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/superduper-io/superduper/tree/main/plugins/sentence_transformers",children:"Code"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/api/plugins/superduper_sentence_transformers",children:"API-docs"})}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Class"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"superduper_sentence_transformers.model.SentenceTransformer"})}),(0,s.jsxs)(n.td,{children:["A model for sentence embeddings using ",(0,s.jsx)(n.code,{children:"sentence-transformers"}),"."]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"sentencetransformer",children:"SentenceTransformer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from superduper import vector\nfrom superduper_sentence_transformers import SentenceTransformer\nimport sentence_transformers\nmodel = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("BAAI/bge-small-en"),\n    datatype=vector(shape=(1024,)),\n    postprocess=lambda x: x.tolist(),\n    predict_kwargs={"show_progress_bar": True},\n)\nmodel.predict("What is superduper")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);