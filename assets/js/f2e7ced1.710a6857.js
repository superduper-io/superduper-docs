"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2838],{4385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(4848),a=s(8453);const i={},c="Basic insertion",r={id:"execute_api/basic_insertion",title:"Basic insertion",description:"Superduper supports inserting data wrapped as dictionaries in Python.",source:"@site/docs/execute_api/basic_insertion.md",sourceDirName:"execute_api",slug:"/execute_api/basic_insertion",permalink:"/docs/execute_api/basic_insertion",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/execute_api/basic_insertion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data inserts",permalink:"/docs/execute_api/inserting_data"},next:{title:"Automatic data-types",permalink:"/docs/execute_api/auto_data_types"}},o={},d=[{value:"Usage pattern",id:"usage-pattern",level:2},{value:"MongoDB",id:"mongodb",level:2},{value:"SQL",id:"sql",level:2},{value:"Monitoring jobs",id:"monitoring-jobs",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"basic-insertion",children:"Basic insertion"}),"\n",(0,t.jsxs)(n.p,{children:["Superduper supports inserting data wrapped as dictionaries in Python.\nThese dictionaries may contain basic JSON-compatible data, but also\nother data-types to be handled with ",(0,t.jsx)(n.code,{children:"DataType"})," components. All data inserts are wrapped with the ",(0,t.jsx)(n.code,{children:"Document"})," wrapper:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"data = ... # an iterable of dictionaries\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For example, first get some ",(0,t.jsx)(n.a,{href:"../reusable_snippets/get_useful_sample_data.md",children:"sample data"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then load the data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"with open('./text.json') as f:\n    data = json.load(f)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage-pattern",children:"Usage pattern"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"ids, jobs = db['collection-name'].insert(data).execute()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mongodb",children:"MongoDB"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"ids, jobs = db['collection-name'].insert_many(data).execute()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"Schema"})," which differs from the standard ",(0,t.jsx)(n.code,{children:"Schema"})," used by ",(0,t.jsx)(n.code,{children:'"collection-name"'})," may\nbe used with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"ids, jobs = db['collection-name'].insert_many(data).execute(schema=schema_component)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Read about this here ",(0,t.jsx)(n.code,{children:"Schema"})," ",(0,t.jsx)(n.a,{href:"/docs/apply_api/schema",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"sql",children:"SQL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"ids, jobs = db['table-name'].insert(data)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If no ",(0,t.jsx)(n.code,{children:"Schema"})," has been set-up for ",(0,t.jsx)(n.code,{children:'table-name"'})," a ",(0,t.jsx)(n.code,{children:"Schema"})," is auto-inferred.\nData not handled by the ",(0,t.jsx)(n.code,{children:"db.databackend"})," is encoded by default with ",(0,t.jsx)(n.code,{children:"pickle"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"monitoring-jobs",children:"Monitoring jobs"}),"\n",(0,t.jsxs)(n.p,{children:["The second output of this command gives a reference to the job computations\nwhich are triggered by the ",(0,t.jsx)(n.code,{children:"Component"})," instances already applied with ",(0,t.jsx)(n.code,{children:"db.apply(...)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If users have configured a ",(0,t.jsx)(n.code,{children:"ray"})," cluster, the jobs may be monitored at the\nfollowing uri:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import CFG\n\nprint(CFG.cluster.compute.uri)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(6540);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);