"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5744],{8669:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var r=n(4848),s=n(8453);const c={},i=void 0,t={id:"api/misc/special_dicts",title:"special_dicts",description:"superduper.misc.special_dicts",source:"@site/versioned_docs/version-0.4/api/misc/special_dicts.md",sourceDirName:"api/misc",slug:"/api/misc/special_dicts",permalink:"/docs/api/misc/special_dicts",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/api/misc/special_dicts.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"serialization",permalink:"/docs/api/misc/serialization"},next:{title:"misc",permalink:"/docs/api/misc"}},l={},a=[{value:"<code>recursive_update</code>",id:"recursive_update",level:2},{value:"<code>diff</code>",id:"diff",level:2},{value:"<code>recursive_find</code>",id:"recursive_find",level:2},{value:"<code>MongoStyleDict</code>",id:"mongostyledict",level:2},{value:"<code>SuperDuperFlatEncode</code>",id:"superduperflatencode",level:2},{value:"<code>ArgumentDefaultDict</code>",id:"argumentdefaultdict",level:2},{value:"<code>IndexableDict</code>",id:"indexabledict",level:2}];function h(e){const d={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.strong,{children:(0,r.jsx)(d.code,{children:"superduper.misc.special_dicts"})})}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/misc/special_dicts.py",children:"Source code"})}),"\n",(0,r.jsx)(d.h2,{id:"recursive_update",children:(0,r.jsx)(d.code,{children:"recursive_update"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"recursive_update(data,\n     replace_function: Callable)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"data"}),(0,r.jsx)(d.td,{children:"Dict, List, Tuple, Set"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"replace_function"}),(0,r.jsx)(d.td,{children:"Callable"})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Recursively update data with a replace function."}),"\n",(0,r.jsx)(d.h2,{id:"diff",children:(0,r.jsx)(d.code,{children:"diff"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"diff(r1,\n     r2)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"r1"}),(0,r.jsx)(d.td,{children:"Dict"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"r2"}),(0,r.jsx)(d.td,{children:"Dict"})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Get the difference between two dictionaries."}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"_diff({'a': 1, 'b': 2}, {'a': 2, 'b': 2})\n# {'a': (1, 2)}\n_diff({'a': {'c': 3}, 'b': 2}, {'a': 2, 'b': 2})\n# {'a': ({'c': 3}, 2)}\n"})}),"\n",(0,r.jsx)(d.h2,{id:"recursive_find",children:(0,r.jsx)(d.code,{children:"recursive_find"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"recursive_find(data,\n     check_function: Callable)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"data"}),(0,r.jsx)(d.td,{children:"Dict, List, Tuple, Set"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"check_function"}),(0,r.jsx)(d.td,{children:"Callable"})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Recursively find items in data that satisfy a check function."}),"\n",(0,r.jsx)(d.h2,{id:"mongostyledict",children:(0,r.jsx)(d.code,{children:"MongoStyleDict"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"MongoStyleDict(self,\n     /,\n     *args,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"args"}),(0,r.jsxs)(d.td,{children:["*args for ",(0,r.jsx)(d.code,{children:"dict"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"kwargs"}),(0,r.jsxs)(d.td,{children:["**kwargs for ",(0,r.jsx)(d.code,{children:"dict"})]})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Dictionary object mirroring how MongoDB handles fields."}),"\n",(0,r.jsx)(d.h2,{id:"superduperflatencode",children:(0,r.jsx)(d.code,{children:"SuperDuperFlatEncode"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"SuperDuperFlatEncode(self,\n     *args,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"args"}),(0,r.jsxs)(d.td,{children:["*args for ",(0,r.jsx)(d.code,{children:"dict"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"kwargs"}),(0,r.jsxs)(d.td,{children:["**kwargs for ",(0,r.jsx)(d.code,{children:"dict"})]})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Dictionary for representing flattened encoding data."}),"\n",(0,r.jsx)(d.h2,{id:"argumentdefaultdict",children:(0,r.jsx)(d.code,{children:"ArgumentDefaultDict"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"ArgumentDefaultDict(self,\n     *args,\n     default_factory,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"args"}),(0,r.jsxs)(d.td,{children:["*args for ",(0,r.jsx)(d.code,{children:"dict"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"default_factory"}),(0,r.jsx)(d.td,{children:"Callable used to create default dependent on key"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"kwargs"}),(0,r.jsxs)(d.td,{children:["**kwargs for ",(0,r.jsx)(d.code,{children:"dict"})]})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Default-dictionary which takes the key as an argument to default factory."}),"\n",(0,r.jsx)(d.h2,{id:"indexabledict",children:(0,r.jsx)(d.code,{children:"IndexableDict"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"IndexableDict(self,\n     ordered_dict)\n"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsx)(d.tbody,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ordered_dict"}),(0,r.jsx)(d.td,{children:"OrderedDict"})]})})]}),"\n",(0,r.jsx)(d.p,{children:"IndexableDict."}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"# Example:\n# -------\nd = IndexableDict({'a': 1, 'b': 2})\nd[0]\n# 1\n"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-python",children:"d[1]\n# 2\n"})})]})}function o(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>t});var r=n(6540);const s={},c=r.createContext(s);function i(e){const d=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:d},e.children)}}}]);