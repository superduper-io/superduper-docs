"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9645],{8424:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>V,contentTitle:()=>I,default:()=>L,frontMatter:()=>T,metadata:()=>N,toc:()=>C});var t=r(4848),o=r(8453),s=r(6540),a=r(870),c=r(3104),i=r(6347),l=r(205),u=r(7485),p=r(1682),d=r(9466);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,p.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[i,u]=g({queryString:r,groupId:t}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),v=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var x=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:n,block:r,selectedValue:o,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.a_)(),p=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==o&&(u(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:d,onClick:p,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=v(e);return(0,t.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,t.jsx)(_,{...e,...n}),(0,t.jsx)(y,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,t.jsx)(j,{...e,children:m(e.children)},String(n))}const k={tabItem:"tabItem_Ymn6"};function S(e){let{children:n,hidden:r,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(k.tabItem,o),hidden:r,children:n})}const T={},I="Superduper Protocol",N={id:"packaging_api/superduper_protocol",title:"Superduper Protocol",description:"Superduper includes a protocol allowed developers to switch back and forth from Python and YAML/ JSON formats.",source:"@site/docs/packaging_api/superduper_protocol.md",sourceDirName:"packaging_api",slug:"/packaging_api/superduper_protocol",permalink:"/docs/packaging_api/superduper_protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/packaging_api/superduper_protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packaging API",permalink:"/docs/packaging_api/overview"},next:{title:"Building custom AI with Superduper",permalink:"/docs/customize/overview"}},V={},C=[{value:"Writing in Superduper-protocol directly",id:"writing-in-superduper-protocol-directly",level:2},{value:"Converting a <code>Component</code> to Superduper-protocol",id:"converting-a-component-to-superduper-protocol",level:2}];function q(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"superduper-protocol",children:"Superduper Protocol"}),"\n",(0,t.jsx)(n.p,{children:"Superduper includes a protocol allowed developers to switch back and forth from Python and YAML/ JSON formats.\nThe mapping is fairly self-explanatory after reading the examples below."}),"\n",(0,t.jsx)(n.h2,{id:"writing-in-superduper-protocol-directly",children:"Writing in Superduper-protocol directly"}),"\n","\n","\n",(0,t.jsxs)(w,{children:[(0,t.jsxs)(S,{value:"YAML",label:"YAML",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'_base: "?my_vector_index"\n_leaves:\n  postprocess:\n    _path: superduper.base.code.Code\n    code: \'\n      from superduper import code\n\n      @code\n      def postprocess(x):\n          return x.tolist()\n      \'\n  my_vector:\n    _path: superduper.components.vector_index.vector\n    shape: 384\n  sentence_transformer:\n    _path: superduper.ext.sentence_transformers.model.SentenceTransformer\n    datatype: "?my_vector"\n    model: "all-MiniLM-L6-v2"\n    postprocess: "?postprocess"\n  my_query:\n    _path: superduper.backends.mongodb.query.parse_query\n    query: "documents.find()"\n  my_listener:\n    _path: superduper.components.listener.Listener\n    model: "?sentence_transformer"\n    select: "?my_query"\n    key: "X"\n  my_vector_index:\n    _path: superduper.components.vector_index.VectorIndex\n    indexing_listener: "?my_listener"\n    measure: cosine\n'})}),(0,t.jsx)(n.p,{children:"Then from the commmand line:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"superduper apply --manifest='<path_to_config>.yaml'\n"})})]}),(0,t.jsxs)(S,{value:"JSON",label:"JSON",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "_base": "?my_vector_index",\n  "_leaves": {\n    "postprocess": {\n      "_path": "superduper.base.code.Code",\n      "code": "from superduper import code\\n\\n@code\\ndef postprocess(x):\\n    return x.tolist()"\n    },\n    "my_vector": {\n      "_path": "superduper.components.vector_index.vector",\n      "shape": 384\n    },\n    "sentence_transformer": {\n      "_path": "superduper.ext.sentence_transformers.model.SentenceTransformer",\n      "datatype": "?my_vector",\n      "model": "all-MiniLM-L6-v2",\n      "postprocess": "?postprocess"\n    },\n    "my_query": {\n      "_path": "superduper.backends.mongodb.query.parse_query",\n      "query": "documents.find()"\n    },\n    "my_listener": {\n      "_path": "superduper.components.listener.Listener",\n      "model": "?sentence_transformer",\n      "select": "?my_query"\n    },\n    "my_vector_index": {\n      "_path": "superduper.components.vector_index.VectorIndex",\n      "indexing_listener": "?my_listener",\n      "measure": "cosine"\n    }\n  }\n}\n'})}),(0,t.jsx)(n.p,{children:"Then from the command line:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"superduper apply --manifest='<path_to_config>.json'\n"})})]}),(0,t.jsx)(S,{value:"Python",label:"Python",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper import superduper\nfrom superduper.components.vector_index import vector\nfrom superduper.ext.sentence_transformers.model import SentenceTransformer\nfrom superduper.components.listener import Listener\nfrom superduper.components.vector_index import VectorIndex\nfrom superduper.base.code import Code\nfrom superduper import Stack\n\n\ndb = superduper(\'mongomock://\')\n\ndatatype = vector(shape=384, identifier="my-vec")\n\n\ndef postprocess(x):\n    return x.tolist()\n\n\npostprocess = Code.from_object(postprocess)\n\n\nmodel = SentenceTransformer(\n    identifier="test",\n    datatype=datatype,\n    predict_kwargs={"show_progress_bar": True},\n    signature="*args,**kwargs",\n    model="all-MiniLM-L6-v2",\n    device="cpu",\n    postprocess=postprocess,\n)\n\nlistener = Listener(\n    identifier="my-listener",\n    key="txt",\n    model=model,\n    select=db[\'documents\'].find(),\n    active=True,\n    predict_kwargs={}\n)\n\nvector_index = VectorIndex(\n    identifier="my-index",\n    indexing_listener=listener,\n    measure="cosine"\n)\n\ndb.apply(vector_index)\n'})})})]}),"\n",(0,t.jsxs)(n.h2,{id:"converting-a-component-to-superduper-protocol",children:["Converting a ",(0,t.jsx)(n.code,{children:"Component"})," to Superduper-protocol"]}),"\n",(0,t.jsxs)(n.p,{children:["All components may be converted to ",(0,t.jsx)(n.em,{children:"Superduper-protocol"})," using the ",(0,t.jsx)(n.code,{children:"Component.encode"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"encoding = vector_index.encode()\n"})}),"\n",(0,t.jsx)(n.p,{children:"This encoding may be written directly to disk with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'vector_index.export(zip=True)  # outputs to "./my-index.zip"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Developers may reload components from disk with ",(0,t.jsx)(n.code,{children:"Component.read"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"reloaded = Component.read('./my-index.zip')\n"})})]})}function L(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(q,{...e})}):q(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(6540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);