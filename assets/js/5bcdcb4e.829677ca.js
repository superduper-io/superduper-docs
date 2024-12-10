"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4117],{9283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(4848),s=t(8453);const i={},c="Create custom Component implementations",r={id:"customize/component",title:"Create custom Component implementations",description:"The Component base class enforces that all descendants are Python dataclass instances.",source:"@site/versioned_docs/version-0.4/customize/component.md",sourceDirName:"customize",slug:"/customize/component",permalink:"/docs/customize/component",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/customize/component.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building custom AI with Superduper",permalink:"/docs/customize/overview"},next:{title:"Bring your own models",permalink:"/docs/customize/model"}},a={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"create-custom-component-implementations",children:["Create custom ",(0,o.jsx)(n.code,{children:"Component"})," implementations"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Component"})," base class enforces that all descendants are Python ",(0,o.jsx)(n.code,{children:"dataclass"})," instances.\nThat means that users only need to annotate inputs to their ",(0,o.jsx)(n.code,{children:"Component"}),", and don't need to write\n",(0,o.jsx)(n.code,{children:"__init__"})," boilerplate. In addition to this, any parameter to a ",(0,o.jsx)(n.code,{children:"Component"})," is serialized when\n",(0,o.jsx)(n.code,{children:"Component.encode()"})," is called. Superduper tries to serialize everything as JSON, apart from parameters labelled\nexplicitly in ",(0,o.jsx)(n.code,{children:"Component._artifacts"})," and parameters which are not easily convertable to and from JSON, for instance functions, classes, and data blobs, such as model weights and tensors. The serialized component is saved in the Superduper connection ",(0,o.jsx)(n.code,{children:"db"})," (metadata goes to ",(0,o.jsx)(n.code,{children:"db.metadata"})," and blobs to ",(0,o.jsx)(n.code,{children:"db.artifact_store"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["In order to implement what happens when ",(0,o.jsx)(n.code,{children:"db.apply(my_component)"})," is called, developers should decorate methods\nwith ",(0,o.jsx)(n.code,{children:"@trigger('apply')"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To illustrate this, here is an example of a custom component with a custom trigger, which sends a notification\nwhen applied with ",(0,o.jsx)(n.code,{children:"db.apply"})," and then executes a function passed to the class ",(0,o.jsx)(n.code,{children:".d"}),". The second trigger\n",(0,o.jsx)(n.code,{children:".go"})," waits for ",(0,o.jsx)(n.code,{children:"start"})," to complete (via ",(0,o.jsx)(n.code,{children:"depends_on"}),") and only runs (via ",(0,o.jsx)(n.code,{children:"requires"}),") if the parameter ",(0,o.jsx)(n.code,{children:"d"})," is specified."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import typing as t\n\nclass MyComponent(Component):\n    a: int\n    b: str\n    c: t.Dict\n    d: t.Callable | None = None\n\n    def init(self):\n        self.client = slack.connect(os.environ[...])\n\n    @trigger('apply')\n    def start(self):\n        self.client.send_message(f'initializing {self.huuid}')\n\n    @trigger('apply', depends_on='configure', requires='d')\n    def go(self):\n        self.d(a=self.a, b=self.b, c=self.c)\n        \n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);