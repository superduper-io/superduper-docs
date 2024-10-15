"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6354],{1955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var o=t(4848),r=t(8453);const c={},i="Create vector-index",d={id:"building_blocks/create_vector_index",title:"Create vector-index",description:"",source:"@site/docs/building_blocks/create_vector_index.md",sourceDirName:"building_blocks",slug:"/building_blocks/create_vector_index",permalink:"/docs/building_blocks/create_vector_index",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/building_blocks/create_vector_index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build LLM",permalink:"/docs/building_blocks/build_llm"},next:{title:"Perform a vector search",permalink:"/docs/building_blocks/perform_a_vector_search"}},s={},l=[];function a(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"create-vector-index",children:"Create vector-index"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"vector_index_name = 'my-vector-index'\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# <tab: 1-Modality>\nfrom superduper import VectorIndex, Listener\n\njobs, _ = db.apply(\n    VectorIndex(\n        vector_index_name,\n        indexing_listener=Listener(\n            key=indexing_key,      # the `Document` key `model` should ingest to create embedding\n            select=select,       # a `Select` query telling which data to search over\n            model=embedding_model,         # a `_Predictor` how to convert data to embeddings\n        )\n    )\n)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# <tab: 2-Modalities>\nfrom superduper import VectorIndex, Listener\n\njobs, _ = db.apply(\n    VectorIndex(\n        vector_index_name,\n        indexing_listener=Listener(\n            key=indexing_key,      # the `Document` key `model` should ingest to create embedding\n            select=select,       # a `Select` query telling which data to search over\n            model=embedding_model,         # a `_Predictor` how to convert data to embeddings\n        ),\n        compatible_listener=Listener(\n            key=compatible_key,      # the `Document` key `model` should ingest to create embedding\n            model=compatible_model,         # a `_Predictor` how to convert data to embeddings\n            active=False,\n            select=None,\n        )\n    )\n)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"query_table_or_collection = select.table_or_collection\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(6540);const r={},c=o.createContext(r);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);