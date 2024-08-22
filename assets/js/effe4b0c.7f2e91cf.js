"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6644],{5223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var o=n(4848),r=n(8453);const c={},s=void 0,i={id:"building_blocks/text_extraction",title:"text_extraction",description:"",source:"@site/content/building_blocks/text_extraction.md",sourceDirName:"building_blocks",slug:"/building_blocks/text_extraction",permalink:"/docs/building_blocks/text_extraction",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/building_blocks/text_extraction.md",tags:[],version:"current",frontMatter:{}},d={},a=[];function u(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"# <tab: PDF>\nfrom PyPDF2 import PdfReader\n\nfrom superduper import model\n\n\n@model(flatten=True, model_update_kwargs={'document_embedded': False})\ndef text_extraction(file_path):\n    reader = PdfReader(file_path)\n    \n    texts = []\n    for i, page in tqdm(enumerate(reader.pages)):\n        text = page.extract_text() \n        texts.append(text)\n    return texts\n"})})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(6540);const r={},c=o.createContext(r);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);