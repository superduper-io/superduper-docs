"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5221],{5697:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>t});var d=o(4848),i=o(8453);const r={},c="Apply",s={id:"core_api/apply",title:"Apply",description:"In superduper there are three fundamental base components which you'll use for the majority of your functionality:",source:"@site/versioned_docs/version-0.4/core_api/apply.md",sourceDirName:"core_api",slug:"/core_api/apply",permalink:"/docs/core_api/apply",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/core_api/apply.md",tags:[],version:"0.4",frontMatter:{}},l={},t=[{value:"Base components",id:"base-components",level:2},{value:"<code>Model</code>",id:"model",level:3},{value:"<code>Listener</code>",id:"listener",level:3},{value:"<code>VectorIndex</code>",id:"vectorindex",level:3},{value:"Connecting component: <code>Stack</code>",id:"connecting-component-stack",level:2},{value:"View applied components",id:"view-applied-components",level:2},{value:"Reloading applied components",id:"reloading-applied-components",level:2},{value:"Read more",id:"read-more",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"apply",children:"Apply"}),"\n",(0,d.jsx)(n.p,{children:"In superduper there are three fundamental base components which you'll use for the majority of your functionality:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"../apply_api/model",children:(0,d.jsx)(n.code,{children:"Model"})})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"../apply_api/listener",children:(0,d.jsx)(n.code,{children:"Listener"})})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"../apply_api/vector_index",children:(0,d.jsx)(n.code,{children:"VectorIndex"})})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"In addition there is an overarching component:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"../apply_api/Application",children:(0,d.jsx)(n.code,{children:"Application"})})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:'which in some sense "rules them all"'}),"\n",(0,d.jsx)(n.p,{children:'Whenever you wish to apply AI to your data, you will instantiate one of more of these, and "apply" these to\nyour connection:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"db.apply(component)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"base-components",children:"Base components"}),"\n",(0,d.jsx)(n.h3,{id:"model",children:(0,d.jsx)(n.code,{children:"Model"})}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"Model"})," is a wrapper around a standard ML/ AI model. It may contain additional functionality, such as\npre- and post-processing, and encoding/ decoding data into/ from the correct type required by the database."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"db.apply(model)"})," tells ",(0,d.jsx)(n.code,{children:"superduper"})," to store the model and its metadata in the system."]}),"\n",(0,d.jsxs)(n.p,{children:["If additional configurations, such as training parameters, are added to the ",(0,d.jsx)(n.code,{children:"Model"})," then the ",(0,d.jsx)(n.code,{children:"db.apply"})," command\nwill also train the component on data in superduper."]}),"\n",(0,d.jsxs)(n.p,{children:["Read more about ",(0,d.jsx)(n.code,{children:"Model"})," ",(0,d.jsx)(n.a,{href:"../apply_api/model",children:"here"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"listener",children:(0,d.jsx)(n.code,{children:"Listener"})}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"Listener"})," wraps a ",(0,d.jsx)(n.code,{children:"Model"}),". The ",(0,d.jsx)(n.code,{children:"db.apply(listener)"})," tells ",(0,d.jsx)(n.code,{children:"superduper"}),' to "listen" for incoming data and to compute outputs on those data, saving them back in ',(0,d.jsx)(n.code,{children:"superduper"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Read more about ",(0,d.jsx)(n.code,{children:"Listener"})," ",(0,d.jsx)(n.a,{href:"../apply_api/listener",children:"here"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"vectorindex",children:(0,d.jsx)(n.code,{children:"VectorIndex"})}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"VectorIndex"})," wraps one or two ",(0,d.jsx)(n.code,{children:"Listener"})," components, and tells ",(0,d.jsx)(n.code,{children:"superduper"})," that the outputs computed, should\nbe made searchable via vector-search queries."]}),"\n",(0,d.jsxs)(n.p,{children:["Read more about ",(0,d.jsx)(n.code,{children:"VectorIndex"})," ",(0,d.jsx)(n.a,{href:"../apply_api/vector_index",children:"here"}),"."]}),"\n",(0,d.jsxs)(n.h2,{id:"connecting-component-stack",children:["Connecting component: ",(0,d.jsx)(n.code,{children:"Stack"})]}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"Stack"})," of AI functionality is a combination of multiple ",(0,d.jsx)(n.code,{children:"Model"}),", ",(0,d.jsx)(n.code,{children:"Listener"}),", and ",(0,d.jsx)(n.code,{children:"VectorIndex"}),' components which may be "applied" in\none pass to your data via superduper.']}),"\n",(0,d.jsxs)(n.p,{children:["On ",(0,d.jsx)(n.code,{children:"db.add(stack)"})," superduper performs the heavy lifting of deciding which components need to be applied\nfirst, which need to be modified on incoming data, and which outputs need to be made searchable."]}),"\n",(0,d.jsxs)(n.p,{children:["Read more about ",(0,d.jsx)(n.code,{children:"Stack"})," ",(0,d.jsx)(n.a,{href:"../apply_api/stack",children:"here"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"view-applied-components",children:"View applied components"}),"\n",(0,d.jsxs)(n.p,{children:["Use ",(0,d.jsx)(n.code,{children:"db.show"})," to view components."]}),"\n",(0,d.jsx)(n.p,{children:"View all components:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:">>> db.show()\n[\n  {'type_id': 'model', 'identifier': 'my-model'},\n  {'type_id': 'model', 'identifier': 'my-other-model'}\n]\n"})}),"\n",(0,d.jsx)(n.p,{children:"View all components of a certain type:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:">>> db.show('<type_id>')\n['my-model', 'my-other-model']\n"})}),"\n",(0,d.jsx)(n.p,{children:"View all versions of a particular component:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:">>> db.show('<type_id>', '<component_identifier>')\n[0, 1, 2, 3]\n"})}),"\n",(0,d.jsx)(n.h2,{id:"reloading-applied-components",children:"Reloading applied components"}),"\n",(0,d.jsxs)(n.p,{children:["When components are applied with ",(0,d.jsx)(n.code,{children:"db.apply(component)"}),", the component is provided with a version, which may be optionally used to reload the component.\nBy default the latest version is reloaded:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"reloaded = db.load('<type_id>', '<component_identifier>')\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"reloaded = db.load('<type_id>', '<component_identifier>', <version>)\n"})}),"\n",(0,d.jsx)(n.p,{children:"For example to reload a model, identified by 'my-model', the first version added:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"reloaded_model = db.load('model', 'my-model', 0)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"read-more",children:"Read more"}),"\n",(0,d.jsxs)(n.p,{children:['Read more about the "apply" API ',(0,d.jsx)(n.a,{href:"/docs/apply_api/component",children:"here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var d=o(6540);const i={},r=d.createContext(i);function c(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);