"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7325],{3429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(4848),s=r(8453);const o={sidebar_position:15},d="Working with external data sources",i={id:"execute_api/referring_to_data_from_diverse_sources",title:"Working with external data sources",description:"Superduper supports data added from external data-sources.",source:"@site/content/execute_api/referring_to_data_from_diverse_sources.md",sourceDirName:"execute_api",slug:"/execute_api/referring_to_data_from_diverse_sources",permalink:"/superduper-docs/docs/execute_api/referring_to_data_from_diverse_sources",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/execute_api/referring_to_data_from_diverse_sources.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Working with and inserting large pieces of data",permalink:"/superduper-docs/docs/execute_api/using_hybrid_storage_to_handle_large_data_blobs"},next:{title:"Selecting data",permalink:"/superduper-docs/docs/execute_api/select_queries"}},a={},c=[];function p(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"working-with-external-data-sources",children:"Working with external data sources"}),"\n",(0,n.jsx)(t.p,{children:"Superduper supports data added from external data-sources.\nWhen doing this, Superduper supports:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"web URLs"}),"\n",(0,n.jsxs)(t.li,{children:["URIs of objects in ",(0,n.jsx)(t.code,{children:"s3"})," buckets"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The trick is to pass the ",(0,n.jsx)(t.code,{children:"uri"})," parameter to an encoder, instead of the raw-data.\nHere is an example where we add a ",(0,n.jsx)(t.code,{children:".pdf"})," file directly from a location\non the public internet."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import io\nfrom PyPDF2 import PdfReader\n\ndef load_pdf(bytes):\n    text = []\n    for page in PdfReader(io.BytesIO(bytes)).pages:\n        text.append(page.extract_text())\n    return '\\n----NEW-PAGE----\\n'.join(text)\n\n# no `encoder=...` parameter required since text is not converted to `.pdf` format\npdf_enc = Encoder('my-pdf-encoder', decoder=load_pdf)\n\nPDF_URI = (\n    'https://papers.nips.cc/paper_files/paper/2012/file/'\n    'c399862d3b9d6b76c8436e924a68c45b-Paper.pdf'\n)\n\n# This command inserts a record which refers to this URI\n# and also downloads the content from the URI and saves\n# it in the record\ndb['pdf-files'].insert_one(Document({'txt': pdf_enc(uri=PDF_URI)})).execute()\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now when the data is loaded from the database, it is loaded as text:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:">>> r = collection.find_one().execute()\n>>> print(r['txt'])\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>i});var n=r(6540);const s={},o=n.createContext(s);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);