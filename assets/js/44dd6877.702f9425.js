"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3267],{4913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var n=r(4848),l=r(8453),a=r(1470),s=r(9365);const u={sidebar_label:"Build simple select queries",filename:"build_simple_select_queries.md"},i="Build simple select queries",o={id:"building_blocks/build_simple_select_queries",title:"build_simple_select_queries",description:"",source:"@site/docs/building_blocks/build_simple_select_queries.md",sourceDirName:"building_blocks",slug:"/building_blocks/build_simple_select_queries",permalink:"/docs/building_blocks/build_simple_select_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/building_blocks/build_simple_select_queries.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build simple select queries",filename:"build_simple_select_queries.md"}},c={},d=[];function b(e){const t={code:"code",h1:"h1",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"build-simple-select-queries",children:"Build simple select queries"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"\nselect = db['<table-name>'].select()        \n"})})}),(0,n.jsx)(s.A,{value:"SQL",label:"SQL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"\nselect = db['<table-name>'].select()        \n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(870);const l={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>q});var n=r(6540),l=r(870),a=r(3104),s=r(6347),u=r(205),i=r(7485),o=r(1682),c=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,a=b(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,d]=m({queryString:r,groupId:l}),[f,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,c.Dv)(r);return[l,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),v=(()=>{const e=o??f;return p({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,a]),tabValues:a}}var h=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function _(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),l=u[r].value;l!==n&&(o(t),s(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,g.jsx)(_,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function q(e){const t=(0,h.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>u});var n=r(6540);const l={},a=n.createContext(l);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);