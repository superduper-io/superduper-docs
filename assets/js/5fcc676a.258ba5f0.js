"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4490],{6873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=t(4848),s=t(8453);const i={},c="Checkpoint",r={id:"components/checkpoint",title:"Checkpoint",description:"- Save intermediate results of training via superduper",source:"@site/versioned_docs/version-0.6/components/checkpoint.md",sourceDirName:"components",slug:"/components/checkpoint",permalink:"/docs/components/checkpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.6/components/checkpoint.md",tags:[],version:"0.6",frontMatter:{}},d={},p=[];function l(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"checkpoint",children:(0,o.jsx)(n.code,{children:"Checkpoint"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Save intermediate results of training via ",(0,o.jsx)(n.code,{children:"superduper"})]}),"\n",(0,o.jsxs)(n.li,{children:["Load a different point of the training process by specifying ",(0,o.jsx)(n.code,{children:"Checkpoint"})," explicitly"]}),"\n",(0,o.jsx)(n.li,{children:"Particularly useful with deep-learning models"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduper import Model\nfrom superduper.components.training import Checkpoint\n\nclass MyModel(Model):\n    checkpoints: t.List[Checkpoint]\n    best_checkpoint: t.Optional[int] = None\n\n    def __post_init__(self, db, artifacts):\n        super().__post_init__(db, artifacts)\n\n        if self.best_checkpoint is not None:\n            self.load_weights(self.checkpoints[self.best_checkpoint])\n\n    def load_weights(self):\n        ... # custom load logic\n\nmy_model = MyModel('my-model')\n\nmy_model.checkpoints.append('path/to/model/weights-0.pt')\nmy_model.checkpoints.append('path/to/model/weights-1.pt')\nmy_model.best_checkpoint = 1\n\n# saves model as well as checkpoints to db.artifact_store\ndb.apply(my_model)     \n\n# loads `self.checkpoints[1]`\nm = db.load('MyModel', 'my-model')\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);