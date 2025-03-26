"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7659],{7254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=s(4848),a=s(8453);const r={},i="Versioning and diffs",d={id:"fundamentals/versioning_and_diffs",title:"Versioning and diffs",description:"superduper has a robust versioning and lineage system, to track the versions and changes of all components",source:"@site/versioned_docs/version-0.6/fundamentals/versioning_and_diffs.md",sourceDirName:"fundamentals",slug:"/fundamentals/versioning_and_diffs",permalink:"/docs/fundamentals/versioning_and_diffs",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.6/fundamentals/versioning_and_diffs.md",tags:[],version:"0.6",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Superduper encoding",permalink:"/docs/fundamentals/encoding"},next:{title:"API",permalink:"/docs/category/api"}},c={},o=[];function h(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"versioning-and-diffs",children:"Versioning and diffs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superduper"})," has a robust versioning and lineage system, to track the versions and changes of all components\ninstalled with ",(0,t.jsx)(n.code,{children:"superduper"}),". This works using cryptographic techniques borrowed from blockchain and source version control."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an illustrative example to show you how this works:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Component\nimport typing as t\nimport pprint\n\nclass MyClass(Component):\n    breaks = ()\n    a: str\n    b: int \n    c: t.Dict\n    d: t.Callable | None = None\n    e: Component | None = None\n\nmy_instance_1 = MyClass('my_class', a='test', b=2, c={'testing': '123'}, d=lambda x: x + 1)\nmy_instance_2 = MyClass('my_class', a='test', b=2, c={'testing': '456'}, d=lambda x: x + 2)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We have three key methods which ",(0,t.jsx)(n.code,{children:"superduper"})," leverages under the hood:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Component.diff"})}),(0,t.jsxs)(n.td,{children:["Determines which parameters of the ",(0,t.jsx)(n.code,{children:"Component"})," have changed"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Component.hash"})}),(0,t.jsxs)(n.td,{children:["Determines whether 2 ",(0,t.jsx)(n.code,{children:"Component"})," instances are the same by parameter value"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Component.uuid"})}),(0,t.jsxs)(n.td,{children:["Determines whether 2 ",(0,t.jsx)(n.code,{children:"Component"})," instances are the same by breaking changes; used as primary-id in storage."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superduper"})," calls these methods when ",(0,t.jsx)(n.code,{children:"db.apply"})," is executed, and used to determine whether to replace or update data, or to create a\nnew version of the ",(0,t.jsx)(n.code,{children:"Component"})," and execute its initialization jobs."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".diff"})," method returns in which parameters the 2 ",(0,t.jsx)(n.code,{children:"Component"})," instances are different:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(my_instance_1.diff(my_instance_2))\n# ['c', 'd']\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The cryptographic hash ",(0,t.jsx)(n.code,{children:".hash"})," determines whether the two components are equal. In this case there are 2 parameters\nwhich are different, so that the hashes are distinct:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(my_instance_1.hash == my_instance_2.hash)\n# False\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The cryptographic hash ",(0,t.jsx)(n.code,{children:".uuid"})," determines whether the two components are equal when only considering breaking changes.\nYou can see that, since this component has no breaking changes (",(0,t.jsx)(n.code,{children:".breaks = ()"}),"), the hashes are identical:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(my_instance_1.uuid)\n# dbe131726b2b2fb896eb832b3fde10df\n\nprint(my_instance_2.uuid == my_instance_1.uuid)\n# True\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we create a new component, which has breaking changes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Component\nimport typing as t\nimport pprint\n\nclass BreakingClass(Component):\n    breaks = ('c', 'e')\n    \n    a: str\n    b: int \n    c: t.Dict\n    d: t.Callable | None = None\n    e: Component | None = None\n\nmy_breakable_1 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, d=lambda x: x + 1)\nmy_breakable_2 = BreakingClass('my_class', a='test', b=2, c={'testing': '456'}, d=lambda x: x + 2)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you can see that the parameter ",(0,t.jsx)(n.code,{children:"c"})," differs, so in this case the hashes differ:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(my_breakable_1.uuid == my_breakable_2.uuid)\n# False\n"})}),"\n",(0,t.jsx)(n.p,{children:"This also works recursively, so that breaking changes inside nested components propagate upwards:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_breakable_3 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_breakable_1)\nmy_breakable_4 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_breakable_2)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(my_breakable_3.diff(my_breakable_4))\n# ['e']\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, if the nested component contains only non-breaking changes, this is respected by the ",(0,t.jsx)(n.code,{children:".uuid"})," hash:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_breakable_5 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_instance_1)\nmy_breakable_6 = BreakingClass('my_class', a='test', b=2, c={'testing': '123'}, e=my_instance_2)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_breakable_5.uuid == my_breakable_6.uuid\n\n# True\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);