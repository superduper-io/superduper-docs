"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2676],{1244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(4848),o=t(8453);const i={},s="Basic RAG tutorial",a={id:"tutorials/rag",title:"Basic RAG tutorial",description:"In this tutorial we show you how to do retrieval augmented generation (RAG) with Superduper.",source:"@site/docs/tutorials/rag.md",sourceDirName:"tutorials",slug:"/tutorials/rag",permalink:"/docs/next/tutorials/rag",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/tutorials/rag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Listening for new data",permalink:"/docs/next/tutorials/listening"},next:{title:"Training and Managing MNIST Predictions with superduper",permalink:"/docs/next/tutorials/training"}},d={},c=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"basic-rag-tutorial",children:"Basic RAG tutorial"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"In this tutorial we show you how to do retrieval augmented generation (RAG) with Superduper.\nNote that this is just an example of the flexibility and power which Superduper gives\nto developers. Superduper is about much more than RAG and LLMs."})}),"\n",(0,r.jsx)(n.p,{children:"As in the vector-search tutorial we'll use Superduper documentation for the tutorial.\nWe'll add this to a testing database by downloading the data snapshot:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import json\n\nfrom superduper import superduper, Document\n\ndb = superduper('mongomock://test')\n\nwith open('text.json') as f:\n    data = json.load(f)\n\n_ = db['docu'].insert_many([{'txt': r} for r in data]).execute()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's verify the data in the ",(0,r.jsx)(n.code,{children:"db"})," by querying one datapoint:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db['docu'].find_one().execute()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The first step in a RAG application is to create a ",(0,r.jsx)(n.code,{children:"VectorIndex"}),". The results of searching\nwith this index will be used as input to the LLM for answering questions."]}),"\n",(0,r.jsxs)(n.p,{children:["Read about ",(0,r.jsx)(n.code,{children:"VectorIndex"})," ",(0,r.jsx)(n.a,{href:"/docs/next/apply_api/vector_index",children:"here"})," and follow along the tutorial on\nvector-search ",(0,r.jsx)(n.a,{href:"/docs/next/tutorials/vector_search",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests \n\nfrom superduper import Application, Document, VectorIndex, Listener, vector\nfrom superduper.ext.sentence_transformers.model import SentenceTransformer\nfrom superduper.base.code import Code\n\ndef postprocess(x):\n    return x.tolist()\n\ndatatype = vector(shape=384, identifier="my-vec")\n    \nmodel = SentenceTransformer(\n    identifier="my-embedding",\n    datatype=datatype,\n    predict_kwargs={"show_progress_bar": True},\n    signature="*args,**kwargs",\n    model="all-MiniLM-L6-v2",      \n    device="cpu",\n    postprocess=Code.from_object(postprocess),\n)\n\nlistener = Listener(\n    identifier="my-listener",\n    model=model,\n    key=\'txt\',\n    select=db[\'docu\'].find(),\n    predict_kwargs={\'max_chunk_size\': 50},\n)\n\nvector_index = VectorIndex(\n    identifier="my-index",\n    indexing_listener=listener,\n    measure="cosine"\n)\n\ndb.apply(vector_index)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now that we've set up a ",(0,r.jsx)(n.code,{children:"VectorIndex"}),", we can connect this index with an LLM in a number of ways.\nA simple way to do that is with the ",(0,r.jsx)(n.code,{children:"SequentialModel"}),". The first part of the ",(0,r.jsx)(n.code,{children:"SequentialModel"}),"\nexecutes a query and provides the results to the LLM in the second part."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RetrievalPrompt"}),' component takes a query with a "free" variable as input, signified with ',(0,r.jsx)(n.code,{children:"<var:???>"}),".\nThis gives users great flexibility with regard to how they fetch the context\nfor their downstream models."]}),"\n",(0,r.jsxs)(n.p,{children:["We're using OpenAI, but you can use any type of LLM with Superduper. We have several\nnative integrations (see ",(0,r.jsx)(n.a,{href:"../ai_integraitons/",children:"here"}),") but you can also ",(0,r.jsx)(n.a,{href:"../models/bring_your_own_model.md",children:"bring your own model"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper.ext.llm.prompter import *\nfrom superduper import Document\nfrom superduper.components.model import SequentialModel\nfrom superduper.ext.openai import OpenAIChatCompletion\n\nq = db['docu'].like(Document({'txt': '<var:prompt>'}), vector_index='my-index', n=5).find().limit(10)\n\ndef get_output(c):\n    return [r['txt'] for r in c]\n\nprompt_template = RetrievalPrompt('my-prompt', select=q, postprocess=Code.from_object(get_output))\n\nllm = OpenAIChatCompletion('gpt-3.5-turbo')\nseq = SequentialModel('rag', models=[prompt_template, llm])\n\ndb.apply(seq)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we can test the ",(0,r.jsx)(n.code,{children:"SequentialModel"})," with a sample question:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"seq.predict('Tell be about vector-indexes')\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Did you know you can use any tools from the Python ecosystem with Superduper.\nThat includes ",(0,r.jsx)(n.code,{children:"langchain"})," and ",(0,r.jsx)(n.code,{children:"llamaindex"})," which can be very useful for RAG applications."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Application\n\napp = Application('rag-app', components=[vector_index, seq, plugin_1, plugin_2])\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app.encode()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app.export('rag-app')\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!cat rag-app/requirements.txt\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import *\n\napp = Component.read('rag-app')\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app.info()\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);