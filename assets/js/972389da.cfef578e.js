"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5622],{8998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(4848),s=t(8453);const o={},c="Vector search",a={id:"tutorials/vector_search",title:"Vector search",description:"Since vector-search is all-the-rage right now,",source:"@site/content/tutorials/vector_search.md",sourceDirName:"tutorials",slug:"/tutorials/vector_search",permalink:"/superduper-docs/docs/tutorials/vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/tutorials/vector_search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/superduper-docs/docs/tutorials/intro"},next:{title:"Listening for new data",permalink:"/superduper-docs/docs/tutorials/listening"}},i={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vector-search",children:"Vector search"}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Since vector-search is all-the-rage right now,\nhere is the simplest possible iteration of semantic\ntext-search with a ",(0,r.jsx)(n.code,{children:"sentence_transformers"})," model,\nas an entrypoint to ",(0,r.jsx)(n.code,{children:"superduper"}),"."]}),(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"superduper"})," is much-much more than vector-search\non text. Explore the docs to read about classical machine learning,\ncomputer vision, LLMs, fine-tuning and much much more!"]})]}),"\n",(0,r.jsxs)(n.p,{children:["First let's get some data. These data are the markdown files\nof the very same documentation you are reading!\nYou can download other sample data-sets for testing ",(0,r.jsx)(n.code,{children:"superduper"}),"\nby following ",(0,r.jsx)(n.a,{href:"../reusable_snippets/get_useful_sample_data",children:"these lines of code"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import json\nimport requests \nr = requests.get('https://superduper-public-demo.s3.amazonaws.com/text.json')\n\nwith open('text.json', 'wb') as f:\n    f.write(r.content)\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)        \n\nprint(data[0])\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we connect to superduper, using MongoMock as a databackend.\nRead more about connecting to superduper ",(0,r.jsx)(n.a,{href:"../core_api/connect",children:"here"})," and\na semi-exhaustive list of supported data-backends for connecting ",(0,r.jsx)(n.a,{href:"../reusable_snippets/connect_to_superduper",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import superduper, Document\n\ndb = superduper('mongomock://test')\n\n_ = db['documents'].insert_many([Document({'txt': txt}) for txt in data]).execute()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.show()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We are going to make these data searchable by activating a ",(0,r.jsx)(n.a,{href:"../apply_api/model",children:(0,r.jsx)(n.code,{children:"Model"})})," instance\nto compute vectors for each item inserted to the ",(0,r.jsx)(n.code,{children:'"documents"'})," collection.\nFor that we'll use the ",(0,r.jsx)(n.a,{href:"https://sbert.net/",children:"sentence-transformers"})," integration to ",(0,r.jsx)(n.code,{children:"superduper"}),".\nRead more about the ",(0,r.jsx)(n.code,{children:"sentence_transformers"})," integration ",(0,r.jsx)(n.a,{href:"../ai_integrations/sentence_transformers",children:"here"}),"\nand ",(0,r.jsx)(n.a,{href:"../../api/ext/sentence_transformers/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from superduper.ext.sentence_transformers import SentenceTransformer\n\nmodel = SentenceTransformer(\n    identifier="test",\n    predict_kwargs={"show_progress_bar": True},\n    model="all-MiniLM-L6-v2",\n    device="cpu",\n    postprocess=lambda x: x.tolist(),\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can check that this model gives us what we want by evaluating an output\non a single data-point. (Learn more about the various aspects of ",(0,r.jsx)(n.code,{children:"Model"})," ",(0,r.jsx)(n.a,{href:"../models/",children:"here"}),".)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"model.predict(data[0])\n"})}),"\n",(0,r.jsxs)(n.p,{children:['Now that we\'ve verified that this model works, we can "activate" it for\nvector-search by creating a ',(0,r.jsx)(n.a,{href:"../apply_api/vector_index",children:(0,r.jsx)(n.code,{children:"VectorIndex"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import pprint\n\nvector_index = model.to_vector_index(select=db['documents'].find(), key='txt')\n\npprint.pprint(vector_index)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You will see that the ",(0,r.jsx)(n.code,{children:"VectorIndex"})," contains a ",(0,r.jsx)(n.a,{href:"../apply_api/listener",children:(0,r.jsx)(n.code,{children:"Listener"})})," instance.\nThis instance wraps the model, and configures it to compute outputs\non data inserted to the ",(0,r.jsx)(n.code,{children:'"documents"'})," collection with the key ",(0,r.jsx)(n.code,{children:'"txt"'}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To activate this index, we now do:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.apply(vector_index)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"db.apply"})," command is a universal command for activating AI components in superduper."]}),"\n",(0,r.jsxs)(n.p,{children:["You will now see lots of output - the model-outputs/ vectors are computed\nand the various parts of the ",(0,r.jsx)(n.code,{children:"VectorIndex"})," are registered in the system."]}),"\n",(0,r.jsx)(n.p,{children:"You can verify this with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.show()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db['documents'].find_one().execute().unpack()\n"})}),"\n",(0,r.jsxs)(n.p,{children:['To "use" the ',(0,r.jsx)(n.code,{children:"VectorIndex"})," we can execute a vector-search query:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"query = db['documents'].like({'txt': 'Tell me about vector-search'}, vector_index=vector_index.identifier, n=3).find()\ncursor = query.execute()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This query will return a cursor of ",(0,r.jsx)(n.a,{href:"../fundamentals/document",children:(0,r.jsx)(n.code,{children:"Document"})})," instances.\nTo obtain the raw dictionaries, call the ",(0,r.jsx)(n.code,{children:".unpack()"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"for r in cursor:\n    print('=' * 100)\n    print(r.unpack()['txt'])\n    print('=' * 100)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You should see that the documents returned are relevant to the ",(0,r.jsx)(n.code,{children:"like"})," part of the\nquery."]}),"\n",(0,r.jsxs)(n.p,{children:["Learn more about building queries with ",(0,r.jsx)(n.code,{children:"superduper"})," ",(0,r.jsx)(n.a,{href:"/superduper-docs/docs/execute_api/overview",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);