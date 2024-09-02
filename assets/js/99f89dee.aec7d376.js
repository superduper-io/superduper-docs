"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3686],{2600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(4848),a=t(8453),s=t(1470),l=t(9365);const o={sidebar_label:"Text Vector Search",filename:"build.md"},i="Text Vector Search",d={id:"templates/text_vector_search",title:"text_vector_search",description:"You'll find this example as well as the saved template in the main repository of superduper.",source:"@site/content/templates/text_vector_search.md",sourceDirName:"templates",slug:"/templates/text_vector_search",permalink:"/docs/templates/text_vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/templates/text_vector_search.md",tags:[],version:"current",frontMatter:{sidebar_label:"Text Vector Search",filename:"build.md"},sidebar:"tutorialSidebar",previous:{title:"Retrieval augmented generation",permalink:"/docs/templates/retrieval_augmented_generation"},next:{title:"Transfer learning",permalink:"/docs/templates/transfer_learning"}},c={},u=[{value:"Connect to superduper",id:"connect-to-superduper",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Create datatype",id:"create-datatype",level:2},{value:"Setup tables or collections",id:"setup-tables-or-collections",level:2},{value:"Apply a chunker for search",id:"apply-a-chunker-for-search",level:2},{value:"Select outputs of upstream listener",id:"select-outputs-of-upstream-listener",level:2},{value:"Build text embedding model",id:"build-text-embedding-model",level:2},{value:"Create vector-index",id:"create-vector-index",level:2},{value:"Perform a vector search",id:"perform-a-vector-search",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"text-vector-search",children:"Text Vector Search"}),"\n",(0,r.jsxs)(n.p,{children:["You'll find this example as well as the saved template in the main repository of ",(0,r.jsx)(n.code,{children:"superduper"}),".\nSee ",(0,r.jsx)(n.a,{href:"https://github.com/superduper-io/superduper/tree/main/templates/text_vector_search",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you'd like to modify the template, or practice building it yourself, then you can rerun the ",(0,r.jsx)(n.code,{children:"build.ipynb"})," notebook\nin the template directory"]}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-superduper",children:"Connect to superduper"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongomock://test_db')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)        \n"})})}),(0,r.jsx)(l.A,{value:"PDF",label:"PDF",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/pdfs.zip && unzip -o pdfs.zip\nimport os\n\ndata = [f'pdfs/{x}' for x in os.listdir('./pdfs') if x.endswith('.pdf')]        \n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"datas = [{'x': d} for d in data]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-datatype",children:"Create datatype"}),"\n",(0,r.jsxs)(n.p,{children:["SuperduperDB supports automatic data conversion, so users don\u2019t need to worry about the compatibility of different data formats (",(0,r.jsx)(n.code,{children:"PIL.Image"}),", ",(0,r.jsx)(n.code,{children:"numpy.array"}),", ",(0,r.jsx)(n.code,{children:"pandas.DataFrame"}),", etc.) with the database."]}),"\n",(0,r.jsx)(n.p,{children:"It also supports custom data conversion methods for transforming data, such as defining the following Datatype."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"datatype = 'str'        \n"})})}),(0,r.jsx)(l.A,{value:"PDF",label:"PDF",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import DataType\n\n# By creating a datatype and setting its encodable attribute to \u201cfile\u201d for saving PDF files, \n# all datatypes encoded as \u201cfile\u201d will have their corresponding files uploaded to the artifact store. \n# References will be recorded in the database, and the files will be downloaded locally when needed. \n\ndatatype = DataType('pdf', encodable='file')        \n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"setup-tables-or-collections",children:"Setup tables or collections"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from superduper.components.table import Table\nfrom superduper import Schema\n\nschema = Schema(identifier="schema", fields={"x": datatype})\ntable = Table("docs", schema=schema)\nselect = db[\'docs\'].select()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"apply-a-chunker-for-search",children:"Apply a chunker for search"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Note that applying a chunker is ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"not"})})," mandatory for search.\nIf your data is already chunked (e.g. short text snippets or audio) or if you\nare searching through something like images, which can't be chunked, then this\nwon't be necessary."]})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import model\n\nCHUNK_SIZE = 200\n\n@model(flatten=True, model_update_kwargs={'document_embedded': False})\ndef chunker(text):\n    text = text.split()\n    chunks = [' '.join(text[i:i + CHUNK_SIZE]) for i in range(0, len(text), CHUNK_SIZE)]\n    return chunks        \n"})})}),(0,r.jsx)(l.A,{value:"PDF",label:"PDF",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!pip install -q \"unstructured[pdf]\"\nfrom superduper import model\nfrom unstructured.partition.pdf import partition_pdf\n\nCHUNK_SIZE = 500\n\n@model(flatten=True)\ndef chunker(pdf_file):\n    elements = partition_pdf(pdf_file)\n    text = '\\n'.join([e.text for e in elements])\n    chunks = [text[i:i + CHUNK_SIZE] for i in range(0, len(text), CHUNK_SIZE)]\n    return chunks        \n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Now we wrap this chunker as a ",(0,r.jsx)(n.code,{children:"Listener"}),", so that it processes incoming data"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Listener\n\nupstream_listener = Listener(\n    model=chunker,\n    select=db['docs'].select(),\n    key='x',\n    uuid=\"chunk\",\n    identifier='chunker',\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"select-outputs-of-upstream-listener",children:"Select outputs of upstream listener"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This is useful if you have performed a first step, such as pre-computing\nfeatures, or chunking your data. You can use this query to\noperate on those outputs."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"indexing_key = upstream_listener.outputs\nindexing_key\n"})}),"\n",(0,r.jsx)(n.h2,{id:"build-text-embedding-model",children:"Build text embedding model"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"OpenAI",label:"OpenAI",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper_openai import OpenAIEmbedding\nimport os\n\nos.environ['OPENAI_API_KEY'] = 'sk-<secret>'\n\nembedding_model = OpenAIEmbedding(identifier='text-embedding-ada-002')        \n"})})}),(0,r.jsx)(l.A,{value:"JinaAI",label:"JinaAI",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nfrom superduper_jina import JinaEmbedding\n\nos.environ["JINA_API_KEY"] = "jina_xxxx"\n \n# define the model\nembedding_model = JinaEmbedding(identifier=\'jina-embeddings-v2-base-en\')        \n'})})}),(0,r.jsx)(l.A,{value:"Sentence-Transformers",label:"Sentence-Transformers",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'!pip install sentence-transformers\nfrom superduper import vector\nimport sentence_transformers\nfrom superduper_sentence_transformers import SentenceTransformer\n\nembedding_model = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("BAAI/bge-small-en"),\n    datatype=vector(shape=(1024,)),\n    postprocess=lambda x: x.tolist(),\n    predict_kwargs={"show_progress_bar": True},\n)        \n'})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'print(len(embedding_model.predict("What is superduper")))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"create-vector-index",children:"Create vector-index"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"vector_index_name = 'my-vector-index'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import VectorIndex, Listener\n\nvector_index = VectorIndex(\n    vector_index_name,\n    indexing_listener=Listener(\n        key=indexing_key,              # the `Document` key `model` should ingest to create embedding\n        select=db[indexing_key].select(),                 # a `Select` query telling which data to search over\n        model=embedding_model,         # a `_Predictor` how to convert data to embeddings\n        identifier=f'{embedding_model.identifier}-listener',\n        upstream=[table, upstream_listener],              # this makes sure that the table is already set up when the other components are triggered\n    )\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Application\n\napplication = Application(\n    'text-vector-search', \n    components=[\n        table,\n        upstream_listener,\n        vector_index,\n    ]\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.apply(application)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"application.info(verbosity=2)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db['docs'].insert(datas).execute()\nselect = db['docs'].select()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.databackend.db.list_collection_names()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"perform-a-vector-search",children:"Perform a vector search"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from superduper import Document\n# Perform the vector search based on the query\nitem = Document({indexing_key: "Tell me about vector-search"})\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"results = db[indexing_key].like(item, vector_index=vector_index_name, n=10).select().execute()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"for result in results:\n    print(\"\\n\", '-' * 20, '\\n')\n    print(Document(result.unpack())[indexing_key])\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Template\n\nt = Template(\n    'vector-search',\n    template=application,\n    substitutions={'docs': 'table_name'},\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"t.export('.')\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!cat component.json | jq .\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(870);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(6540),a=t(870),s=t(3104),l=t(6347),o=t(205),i=t(7485),d=t(1682),c=t(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(d(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function _(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);