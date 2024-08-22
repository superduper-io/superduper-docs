"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[238],{5723:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=d(4848),n=d(8453);const s={},c=void 0,i={id:"api/ext/torch/utils",title:"utils",description:"superduper.ext.torch.utils",source:"@site/content/api/ext/torch/utils.md",sourceDirName:"api/ext/torch",slug:"/api/ext/torch/utils",permalink:"/superduper-docs/docs/api/ext/torch/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/ext/torch/utils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"training",permalink:"/superduper-docs/docs/api/ext/torch/training"},next:{title:"model",permalink:"/superduper-docs/docs/api/ext/transformers/model"}},o={},l=[{value:"<code>device_of</code>",id:"device_of",level:2},{value:"<code>eval</code>",id:"eval",level:2},{value:"<code>to_device</code>",id:"to_device",level:2},{value:"<code>set_device</code>",id:"set_device",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduper.ext.torch.utils"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/torch/utils.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"device_of",children:(0,r.jsx)(t.code,{children:"device_of"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"device_of(module: 'Module') -> 't.Union[_device,\n     str]'\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"PyTorch model"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Get device of a model."}),"\n",(0,r.jsx)(t.h2,{id:"eval",children:(0,r.jsx)(t.code,{children:"eval"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"eval(module: 'Module') -> 't.Iterator[None]'\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"PyTorch module"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Temporarily set a module to evaluation mode."}),"\n",(0,r.jsx)(t.h2,{id:"to_device",children:(0,r.jsx)(t.code,{children:"to_device"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"to_device(item: 't.Any',\n     device: 't.Union[str,\n     _device]') -> 't.Any'\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"item"}),(0,r.jsx)(t.td,{children:"torch.Tensor instance"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"device"}),(0,r.jsx)(t.td,{children:"device to which one would like to send"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Send tensor leaves of nested list/ dictionaries/ tensors to device."}),"\n",(0,r.jsx)(t.h2,{id:"set_device",children:(0,r.jsx)(t.code,{children:"set_device"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"set_device(module: 'Module',\n     device: '_device')\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"PyTorch module"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"device"}),(0,r.jsx)(t.td,{children:"Device to set"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Temporarily set a device of a module."})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>c,x:()=>i});var r=d(6540);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);