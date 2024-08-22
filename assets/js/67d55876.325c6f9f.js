"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3787],{9413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(4848),a=r(8453);r(1470),r(9365);const o={sidebar_label:"Create Vector Search Model",filename:"create_vector_search_model.md"},l="Create Vector Search Model",s={id:"building_blocks/create_vector_search_model",title:"create_vector_search_model",description:"",source:"@site/content/building_blocks/create_vector_search_model.md",sourceDirName:"building_blocks",slug:"/building_blocks/create_vector_search_model",permalink:"/superduper-docs/docs/building_blocks/create_vector_search_model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/building_blocks/create_vector_search_model.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create Vector Search Model",filename:"create_vector_search_model.md"}},c={},u=[];function i(e){const t={code:"code",h1:"h1",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-vector-search-model",children:"Create Vector Search Model"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"item = {indexing_key: '<var:query>'}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from superduper.components.model import QueryModel\n\nvector_search_model = QueryModel(\n    identifier="VectorSearch",\n    select=query_table_or_collection.like(item, vector_index=vector_index_name, n=5).select(),\n    # The _source is the identifier of the upstream data, which can be used to locate the data from upstream sources using `_source`.\n    postprocess=lambda docs: [{"text": doc[indexing_key], "_source": doc["_source"]} for doc in docs],\n    db=db\n)\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"vector_search_model.predict(query=query)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var n=r(870);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(6540),a=r(870),o=r(3104),l=r(6347),s=r(205),c=r(7485),u=r(1682),i=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=u??b;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),i=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,_.jsx)(g,{...e,...t}),(0,_.jsx)(y,{...e,...t})]})}function k(e){const t=(0,f.A)();return(0,_.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(6540);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);