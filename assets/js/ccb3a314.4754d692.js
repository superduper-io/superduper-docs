"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7439],{1075:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var c=s(4848),i=s(8453);const a={},d="Class hierarchy of user-facing classes",r={id:"fundamentals/class_hierarchy",title:"Class hierarchy of user-facing classes",description:"superduper",source:"@site/content/fundamentals/class_hierarchy.md",sourceDirName:"fundamentals",slug:"/fundamentals/class_hierarchy",permalink:"/docs/fundamentals/class_hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/fundamentals/class_hierarchy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fundamentals",permalink:"/docs/fundamentals/overview"},next:{title:"Architecture",permalink:"/docs/fundamentals/design"}},t={},o=[{value:"<code>superduper</code>",id:"superduper",level:2},{value:"<code>Datalayer</code>",id:"datalayer",level:2},{value:"<code>Component</code>",id:"component",level:2},{value:"<code>Document</code>",id:"document",level:2},{value:"<code>_BaseEncodable</code>",id:"_baseencodable",level:2},{value:"<code>Serializable</code>",id:"serializable",level:2},{value:"<code>Job</code>",id:"job",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"class-hierarchy-of-user-facing-classes",children:"Class hierarchy of user-facing classes"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(8691).A+"",width:"2433",height:"1415"})}),"\n",(0,c.jsx)(n.h2,{id:"superduper",children:(0,c.jsx)(n.code,{children:"superduper"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"superduper"})," is the entry point to connect and\nbe able to use key functionality. It returns a built ",(0,c.jsx)(n.code,{children:"Datalayer"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"datalayer",children:(0,c.jsx)(n.code,{children:"Datalayer"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Datalayer"})," class, an instance of which we refer to throughout this\ndocumentation as ",(0,c.jsx)(n.code,{children:"db"}),", is the key entrypoint via which developers\nmay connect to their data-infrastructure and additional connect\nAI functionality to their data-infrastructure:"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Datalayer"})," connects to data, with the ",(0,c.jsxs)(n.a,{href:"../core_api/connect",children:[(0,c.jsx)(n.code,{children:"superduper"})," function"]}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:".apply"})})})}),"\n",(0,c.jsxs)(n.p,{children:["AI ",(0,c.jsx)(n.code,{children:"Component"})," instances may be applied to the built ",(0,c.jsx)(n.code,{children:"Datalayer"})," ",(0,c.jsxs)(n.a,{href:"../core_api/apply",children:["with ",(0,c.jsx)(n.code,{children:".apply"})]}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:".execute"})})})}),"\n",(0,c.jsxs)(n.p,{children:["The data and AI outputs are accessible with queries and AI models\nusing the ",(0,c.jsx)(n.code,{children:".execute"})," method. This can include standard database queries,\nvector-search queries (which include model inference) and pure model computations.\nSee ",(0,c.jsx)(n.a,{href:"../core_api/execute",children:"here"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"component",children:(0,c.jsx)(n.code,{children:"Component"})}),"\n",(0,c.jsxs)(n.p,{children:["AI functionality is packaged as a ",(0,c.jsx)(n.code,{children:"Component"}),". Key implementations\nare ",(0,c.jsx)(n.code,{children:"Model"}),", ",(0,c.jsx)(n.code,{children:"Listener"})," and ",(0,c.jsx)(n.code,{children:"VectorIndex"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"document",children:(0,c.jsx)(n.code,{children:"Document"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Document"})," is a wrapper around standard Python ",(0,c.jsx)(n.code,{children:"dict"})," instances,\nbut which can encode their contained fields as a mixture of JSON\nand pure ",(0,c.jsx)(n.code,{children:"bytes"}),". This mechanism can in principle handle any information\nwhich Python can handle."]}),"\n",(0,c.jsxs)(n.p,{children:["Since most databases can handle this type of information, this makes\n",(0,c.jsx)(n.code,{children:"Document"})," a crucial piece in connecting AI (which operates over a range of information)\nand the database."]}),"\n",(0,c.jsx)(n.h2,{id:"_baseencodable",children:(0,c.jsx)(n.code,{children:"_BaseEncodable"})}),"\n",(0,c.jsxs)(n.p,{children:["This is the base class, which allows ",(0,c.jsx)(n.code,{children:"superduper"}),' to decide how to save "special" data.']}),"\n",(0,c.jsx)(n.h2,{id:"serializable",children:(0,c.jsx)(n.code,{children:"Serializable"})}),"\n",(0,c.jsxs)(n.p,{children:["An extension of Python ",(0,c.jsx)(n.code,{children:"dataclasses"}),", but easier to get the original class back\nfrom the serialized dictionary form. This is the base class underlying\nall ",(0,c.jsx)(n.code,{children:"superduper"})," queries and predictions as well as mixing into ",(0,c.jsx)(n.code,{children:"Component"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"job",children:(0,c.jsx)(n.code,{children:"Job"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Component"})," instances applied with ",(0,c.jsx)(n.code,{children:"Datalayer.apply"})," create compute-jobs\nin response to incoming data, and on initialization via the ",(0,c.jsx)(n.code,{children:"Job"})," class."]}),"\n",(0,c.jsxs)(n.p,{children:["The interface on ",(0,c.jsx)(n.code,{children:"Component"})," is ",(0,c.jsx)(n.code,{children:"Component.schedule_jobs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8691:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/class-hierarchy-12b51c1b915d69f4567cfd3327f7791f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var c=s(6540);const i={},a=c.createContext(i);function d(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);