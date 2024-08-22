"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6997],{6219:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=t(4848),s=t(8453),r=t(1470),l=t(9365);const o={sidebar_label:"Get useful sample data",filename:"get_useful_sample_data.md"},i="Get useful sample data",u={id:"building_blocks/get_useful_sample_data",title:"get_useful_sample_data",description:"",source:"@site/content/building_blocks/get_useful_sample_data.md",sourceDirName:"building_blocks",slug:"/building_blocks/get_useful_sample_data",permalink:"/docs/building_blocks/get_useful_sample_data",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/building_blocks/get_useful_sample_data.md",tags:[],version:"current",frontMatter:{sidebar_label:"Get useful sample data",filename:"get_useful_sample_data.md"},sidebar:"tutorialSidebar",previous:{title:"Create datatype",permalink:"/docs/building_blocks/create_datatype"},next:{title:"Insert data",permalink:"/docs/building_blocks/insert_data"}},c={},d=[];function p(e){const a={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)        \n"})})}),(0,n.jsx)(l.A,{value:"Text-Classification",label:"Text-Classification",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'!curl -O https://superduper-public-demo.s3.amazonaws.com/text_classification.json\nimport json\n\nwith open("text_classification.json", "r") as f:\n    data = json.load(f)\nnum_classes = 2        \n'})})}),(0,n.jsx)(l.A,{value:"PDF",label:"PDF",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/pdfs.zip && unzip -o pdfs.zip\nimport os\n\ndata = [f'pdfs/{x}' for x in os.listdir('./pdfs') if x.endswith('.pdf')]        \n"})})}),(0,n.jsx)(l.A,{value:"Image",label:"Image",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/images.zip && unzip images.zip\nimport os\nfrom PIL import Image\n\ndata = [f'images/{x}' for x in os.listdir('./images') if x.endswith(\".png\")][:200]\ndata = [ Image.open(path) for path in data]        \n"})})}),(0,n.jsx)(l.A,{value:"Image-Classification",label:"Image-Classification",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/images_classification.zip && unzip images_classification.zip\nimport json\nfrom PIL import Image\n\nwith open('images/images.json', 'r') as f:\n    data = json.load(f)\n\ndata = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]\nnum_classes = 2        \n"})})}),(0,n.jsx)(l.A,{value:"Video",label:"Video",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduper-public-demo.s3.amazonaws.com/videos.zip && unzip videos.zip\nimport os\n\ndata = [f'videos/{x}' for x in os.listdir('./videos')]\nsample_datapoint = data[-1]\n\nfrom superduper.ext.pillow import pil_image\nchunked_model_datatype = pil_image        \n"})})}),(0,n.jsx)(l.A,{value:"Audio",label:"Audio",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"# !curl -O https://superduper-public-demo.s3.amazonaws.com/audio.zip && unzip audio.zip\nimport os\n\ndata = [f'audios/{x}' for x in os.listdir('./audio')]\nsample_datapoint = data[-1]        \n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,a,t)=>{t.d(a,{A:()=>l});t(6540);var n=t(870);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function l(e){let{children:a,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:a})}},1470:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(6540),s=t(870),r=t(3104),l=t(6347),o=t(205),i=t(7485),u=t(1682),c=t(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:s}}=e;return{value:a,label:t,attributes:n,default:s}}))}(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,r=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[u,d]=f({queryString:t,groupId:s}),[h,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=u??h;return m({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const a=e.currentTarget,t=i.indexOf(a),s=o[t].value;s!==n&&(u(a),l(s))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function _(e){let{lazy:a,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=h(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...a}),(0,x.jsx)(_,{...e,...a})]})}function w(e){const a=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(a))}},8453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>o});var n=t(6540);const s={},r=n.createContext(s);function l(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);