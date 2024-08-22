"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7092],{1116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(4848),r=n(8453),s=n(1470),o=n(9365);const i={sidebar_label:"Insert data",filename:"insert_data.md"},l="Insert data",u={id:"building_blocks/insert_data",title:"insert_data",description:"In order to create data, we need to create a Schema for encoding our special Datatype column(s) in the databackend.",source:"@site/content/building_blocks/insert_data.md",sourceDirName:"building_blocks",slug:"/building_blocks/insert_data",permalink:"/superduper-docs/docs/building_blocks/insert_data",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/building_blocks/insert_data.md",tags:[],version:"current",frontMatter:{sidebar_label:"Insert data",filename:"insert_data.md"},sidebar:"tutorialSidebar",previous:{title:"Get useful sample data",permalink:"/superduper-docs/docs/building_blocks/get_useful_sample_data"},next:{title:"Compute features",permalink:"/superduper-docs/docs/building_blocks/compute_features"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"insert-data",children:"Insert data"}),"\n",(0,a.jsxs)(t.p,{children:["In order to create data, we need to create a ",(0,a.jsx)(t.code,{children:"Schema"})," for encoding our special ",(0,a.jsx)(t.code,{children:"Datatype"})," column(s) in the databackend."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduper import Document, DataType\n\ndef do_insert(data, schema = None):\n    \n    if schema is None and (datatype is None or isinstance(datatype, str)):\n        data = [Document({'x': x['x'], 'y': x['y']}) if isinstance(x, dict) and 'x' in x and 'y' in x else Document({'x': x}) for x in data]\n        db.execute(table_or_collection.insert_many(data))\n    elif schema is None and datatype is not None and isinstance(datatype, DataType):\n        data = [Document({'x': datatype(x['x']), 'y': x['y']}) if isinstance(x, dict) and 'x' in x and 'y' in x else Document({'x': datatype(x)}) for x in data]\n        db.execute(table_or_collection.insert_many(data))\n    else:\n        data = [Document({'x': x['x'], 'y': x['y']}) if isinstance(x, dict) and 'x' in x and 'y' in x else Document({'x': x}) for x in data]\n        db.execute(table_or_collection.insert_many(data, schema=schema))\n\n"})})}),(0,a.jsx)(o.A,{value:"SQL",label:"SQL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduper import Document\n\ndef do_insert(data):\n    db.execute(table_or_collection.insert([Document({'id': str(idx), 'x': x['x'], 'y': x['y']}) if isinstance(x, dict) and 'x' in x and 'y' in x else Document({'id': str(idx), 'x': x}) for idx, x in enumerate(data)]))\n\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(870);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),r=n(870),s=n(3104),o=n(6347),i=n(205),l=n(7485),u=n(1682),c=n(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),h=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",h.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function k(e){const t=(0,x.A)();return(0,y.jsx)(_,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);