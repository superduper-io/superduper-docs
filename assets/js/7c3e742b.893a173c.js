"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7068],{9592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(4848),s=r(8453);const i={},o="Vector search queries",c={id:"execute_api/vector_search_queries",title:"Vector search queries",description:"Vector search queries are built with the .like operator.",source:"@site/versioned_docs/version-0.4/execute_api/vector_search_queries.md",sourceDirName:"execute_api",slug:"/execute_api/vector_search_queries",permalink:"/docs/execute_api/vector_search_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/execute_api/vector_search_queries.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up vector-search",permalink:"/docs/execute_api/setting_up_vector_search"},next:{title:"Using a database's native vector search",permalink:"/docs/execute_api/native_vector_search"}},a={},d=[{value:"MongoDB",id:"mongodb",level:2},{value:"SQL",id:"sql",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"vector-search-queries",children:"Vector search queries"}),"\n",(0,n.jsxs)(t.p,{children:["Vector search queries are built with the ",(0,n.jsx)(t.code,{children:".like"})," operator.\nThis allows developers to combine standard database with vector-search queries.\nThe philosophy is that developers do not need to convert their inputs\ninto vector's themselves. Rather, this is taken care by the specified\n",(0,n.jsxs)(t.a,{href:"../apply_api/vector_index",children:[(0,n.jsx)(t.code,{children:"VectorIndex"})," component"]}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The basic schematic for vector-search queries is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"table_or_collection\n    .like(Document(<dict-to-search-with>), vector_index='<my-vector-index>')      # the operand is vectorized using registered models\n    .filter_results(*args, **kwargs)            # the results of vector-search are filtered\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"or..."})})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"table_or_collection\n    .filter_results(*args, **kwargs)            # the results of vector-search are filtered\n    .like(Document(<dict-to-search-with>),\n          vector_index='<my-vector-index>')      # the operand is vectorized using registered models\n"})}),"\n",(0,n.jsx)(t.h2,{id:"mongodb",children:"MongoDB"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from superduper.ext.pillow import pil_image\nfrom superduper import Document\n\nmy_image = PIL.Image.open('test/material/data/test_image.png')\n\nq = db['my_collection'].find({'brand': 'Nike'}).like(Document({'img': pil_image(my_image)}), \n                                               vector_index='<my-vector-index>')\n\nresults = q.execute()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"sql",children:"SQL"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"t = db['my_table']\nt.filter(t.brand == 'Nike').like(Document({'img': pil_image(my_image)}))\n\nresults = db.execute(q)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);