"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5797],{509:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var t=r(4848),a=r(8453),s=r(1470),i=r(9365);const l={sidebar_label:"Build and train classifier",filename:"build_and_train_classifier.md"},o="Build and train classifier",u={id:"building_blocks/build_and_train_classifier",title:"build_and_train_classifier",description:"",source:"@site/content/building_blocks/build_and_train_classifier.md",sourceDirName:"building_blocks",slug:"/building_blocks/build_and_train_classifier",permalink:"/superduper-docs/docs/building_blocks/build_and_train_classifier",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/building_blocks/build_and_train_classifier.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build and train classifier",filename:"build_and_train_classifier.md"},sidebar:"tutorialSidebar",previous:{title:"Connecting listeners",permalink:"/superduper-docs/docs/building_blocks/connecting_listeners"},next:{title:"Data integrations",permalink:"/superduper-docs/docs/data_plugins/intro"}},c={},d=[];function f(e){const n={code:"code",h1:"h1",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"build-and-train-classifier",children:"Build and train classifier"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Scikit-Learn",label:"Scikit-Learn",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper_sklearn import Estimator, SklearnTrainer\nfrom sklearn.svm import SVC\n\nmodel = Estimator(\n    identifier="my-model",\n    object=SVC(),\n    trainer=SklearnTrainer(\n        "my-trainer",\n        key=(input_key, "label"),\n        select=training_select,\n    ),\n)        \n'})})}),(0,t.jsx)(i.A,{value:"Torch",label:"Torch",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import torch\nfrom torch import nn\nfrom superduper_torch.model import TorchModel\nfrom superduper_torch.training import TorchTrainer\nfrom torch.nn.functional import cross_entropy\n\n\nclass SimpleModel(nn.Module):\n    def __init__(self, input_size=16, hidden_size=32, num_classes=3):\n        super(SimpleModel, self).__init__()\n        self.fc1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, num_classes)\n\n    def forward(self, x):\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        return out\n\npreprocess = lambda x: torch.tensor(x)\n\n# Postprocess function for the model output    \ndef postprocess(x):\n    return int(x.topk(1)[1].item())\n\ndef data_transform(features, label):\n    return torch.tensor(features), label\n\n# Create a Logistic Regression model\n# feature_length is the input feature size\nmodel = SimpleModel(feature_size, num_classes=num_classes)\nmodel = TorchModel(\n    identifier='my-model',\n    object=model,         \n    preprocess=preprocess,\n    postprocess=postprocess,\n    trainer=TorchTrainer(\n        key=(input_key, 'label'),\n        identifier='my_trainer',\n        objective=cross_entropy,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=1000,\n        validation_interval=100,\n        select=select,\n        transform=data_transform,\n    ),\n)        \n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(870);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),a=r(870),s=r(3104),i=r(6347),l=r(205),o=r(7485),u=r(1682),c=r(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=f(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[b,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),_=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{_&&o(_)}),[_]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=r(2303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",_.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(k,{...e,...n})]})}function y(e){const n=(0,h.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);