"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3899],{8291:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var s=a(4848),t=a(8453);const d={},c="Schema",i={id:"apply_api/schema",title:"Schema",description:"- Apply a dictionary of FieldType and DataType to encode columnar data",source:"@site/docs/apply_api/schema.md",sourceDirName:"apply_api",slug:"/apply_api/schema",permalink:"/docs/next/apply_api/schema",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/apply_api/schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataType",permalink:"/docs/next/apply_api/datatype"},next:{title:"Table",permalink:"/docs/next/apply_api/table"}},l={},o=[];function r(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"schema",children:(0,s.jsx)(n.code,{children:"Schema"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Apply a dictionary of ",(0,s.jsx)(n.code,{children:"FieldType"})," and ",(0,s.jsx)(n.code,{children:"DataType"})," to encode columnar data"]}),"\n",(0,s.jsx)(n.li,{children:"Mostly relevant to SQL databases, but can also be used with MongoDB"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Schema"})," leverages encoding functionality of contained ",(0,s.jsx)(n.code,{children:"DataType"})," instances"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Dependencies"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/apply_api/datatype",children:(0,s.jsx)(n.code,{children:"DataType"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,s.jsxs)(n.p,{children:["(Learn how to build a ",(0,s.jsx)(n.code,{children:"DataType"})," ",(0,s.jsx)(n.a,{href:"datatype",children:"here"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Vanilla usage"})}),"\n",(0,s.jsx)(n.p,{children:"Table can potentially include\nmore columns which don't need encoding:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import Schema\n\nschema = Schema(\n    'my-schema',\n    fields={\n        'img': dt_1,   # A `DataType`\n        'video': dt_2,   # Another `DataType`\n    }\n)\n\ndb.apply(schema)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage with SQL"})}),"\n",(0,s.jsxs)(n.p,{children:["All columns should be flagged with either ",(0,s.jsx)(n.code,{children:"DataType"})," or ",(0,s.jsx)(n.code,{children:"dtype"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper.backends.ibis import dtype\n\nschema = Schema(\n    'my-schema',\n    fields={\n        'img': dt_1,   # A `DataType`\n        'video': dt_2,   # Another `DataType`\n        'txt', dtype('str'),\n        'numer', dtype('int'),\n    }\n)\n\ndb.apply(schema)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage with MongoDB"})}),"\n",(0,s.jsxs)(n.p,{children:["In MongoDB, the non-",(0,s.jsx)(n.code,{children:"DataType"})," columns/ fields can be omitted:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"schema = Schema(\n    'my-schema',\n    fields={\n        'img': dt_1,   # A `DataType`\n        'video': dt_2,   # Another `DataType`\n    }\n)\n\ndb.apply(schema)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Usage with ",(0,s.jsx)(n.code,{children:"Model"})," descendants (MongoDB only)"]})}),"\n",(0,s.jsxs)(n.p,{children:["If used together with ",(0,s.jsx)(n.code,{children:"Model"}),", the model is assumed to emit ",(0,s.jsx)(n.code,{children:"tuple"})," outputs, and these\nneed differential encoding. The ",(0,s.jsx)(n.code,{children:"Schema"})," is applied to the columns of output,\nto get something which can be saved in the ",(0,s.jsx)(n.code,{children:"db.databackend"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import ObjectModel\n\nm = Model(\n    'my-model',\n    object=my_object,\n    output_schema=schema\n)\n\ndb.apply(m)    # adds model and schema\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"See also"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../cluster_mode/change_data_capture",children:"Change-data capture"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var s=a(6540);const t={},d=s.createContext(t);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);