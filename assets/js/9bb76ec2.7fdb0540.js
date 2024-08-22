"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2287],{6941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453),l=n(1470),a=n(9365);const u={sidebar_label:"Visualize Results",filename:"visualize_results.md"},i="Visualize Results",o={id:"building_blocks/visualize_results",title:"visualize_results",description:"",source:"@site/content/building_blocks/visualize_results.md",sourceDirName:"building_blocks",slug:"/building_blocks/visualize_results",permalink:"/superduper-docs/docs/building_blocks/visualize_results",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/building_blocks/visualize_results.md",tags:[],version:"current",frontMatter:{sidebar_label:"Visualize Results",filename:"visualize_results.md"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"visualize-results",children:"Visualize Results"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from IPython.display import Markdown, display\n\ndef visualize(item, source):\n    display(Markdown(item))\n    \ndef show(results, output_key, get_original_callable=None):\n    for result in results:\n        source = None\n        if '_source' in result:\n            \n            source = get_original_callable(result['_source'])\n        visualize(result[output_key], source)        \n"})})}),(0,r.jsx)(a.A,{value:"Image",label:"Image",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from IPython.display import display\n\ndef visualize(item, source):\n    display(item)        # item is a PIL.Image\n\ndef show(results, output_key, get_original_callable=None):\n    for result in results:\n        source = None\n        if '_source' in result:\n            source = get_original_callable(result['_source'])\n        visualize(result[output_key].x, source)        \n"})})}),(0,r.jsx)(a.A,{value:"Audio",label:"Audio",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from IPython.display import Audio, display\n\ndef visualize(item, source):\n    display(Audio(item[1], fs=item[0]))\n\ndef show(results, output_key, get_original_callable=None):\n    for result in results:\n        source = None\n        if '_source' in result:\n            \n            source = get_original_callable(result['_source'])\n        visualize(result[output_key], source)        \n"})})}),(0,r.jsx)(a.A,{value:"PDF",label:"PDF",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from IPython.display import IFrame, display\n\ndef visualize(item, source):\n    display(item)\n\n\ndef show(results, output_key, get_original_callable=None):\n    for result in results:\n        source = None\n        if '_source' in result:\n            \n            source = get_original_callable(result['_source'])\n        visualize(result[output_key], source)        \n"})})}),(0,r.jsx)(a.A,{value:"Video",label:"Video",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from IPython.display import display, HTML\n\ndef visualize(uri, source):\n    timestamp = source    # increment to the frame you want to start at\n    \n    # Create HTML code for the video player with a specified source and controls\n    video_html = f"""\n    <video width="640" height="480" controls>\n        <source src="{uri}" type="video/mp4">\n    </video>\n    <script>\n        // Get the video element\n        var video = document.querySelector(\'video\');\n        \n        // Set the current time of the video to the specified timestamp\n        video.currentTime = {timestamp};\n        \n        // Play the video automatically\n        video.play();\n    <\/script>\n    """\n    \n    display(HTML(video_html))\n\n\ndef show(results, output_key, get_original_callable=None):\n    # show only the first video\n    for result in results:\n        source = result[\'_source\']\n        result = result[output_key]\n        timestamp = result[\'current_timestamp\']\n        uri = get_original_callable(source)[\'x\']\n        print(uri, timestamp)\n        visualize(uri, timestamp)\n        break        \n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(870);const s={tabItem:"tabItem_Ymn6"};var l=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),s=n(870),l=n(3104),a=n(6347),u=n(205),i=n(7485),o=n(1682),c=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,d]=f({queryString:n,groupId:s}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),v=(()=>{const e=o??h;return m({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=u[n].value;s!==r&&(o(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,s.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(_,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>u});var r=n(6540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);