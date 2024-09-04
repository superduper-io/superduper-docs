"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2692],{5391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const a={},r="Listening for new data",o={id:"tutorials/listening",title:"Listening for new data",description:"In Superduper, AI models may be configured to listen for newly inserted data.",source:"@site/content/tutorials/listening.md",sourceDirName:"tutorials",slug:"/tutorials/listening",permalink:"/docs/tutorials/listening",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/tutorials/listening.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector search",permalink:"/docs/tutorials/vector_search"},next:{title:"Basic RAG tutorial",permalink:"/docs/tutorials/rag"}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"listening-for-new-data",children:"Listening for new data"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In Superduper, AI models may be configured to listen for newly inserted data.\nOutputs will be computed over that data and saved back to the data-backend."})}),"\n",(0,s.jsx)(n.p,{children:"In this example we show how to configure 3 models to interact when new data is added."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A featurizing computer vision model (images ",(0,s.jsx)(n.code,{children:"->"})," vectors)."]}),"\n",(0,s.jsx)(n.li,{children:"2 models evaluating image-2-text similarity to a set of key-words."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['We use an open-source model "CLIP" which we install via ',(0,s.jsx)(n.code,{children:"pip"})," directly from GitHub.\nYou can read more about installing requirements on our docs ",(0,s.jsx)(n.a,{href:"../get_started/environment",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!pip install git+https://github.com/openai/CLIP.git\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We apply our setup to images from the\n",(0,s.jsx)(n.a,{href:"https://www.kaggle.com/c/dogs-vs-cats",children:"cats and dogs dataset"}),". We've prepared a subset especially\nfor quick experimentation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/images.zip && unzip images.zip\nfrom PIL import Image\nimport os\n\ndata = [f'images/{x}' for x in os.listdir('./images') if x.endswith('png')]\ndata = [{'img': Image.open(path)} for path in data]\n"})}),"\n",(0,s.jsxs)(n.p,{children:['Now that we\'ve prepared these records we can insert this data "directly" into the database with\na standard insert statement. (Notice however the difference from ',(0,s.jsx)(n.code,{children:"pymongo"})," with the ",(0,s.jsx)(n.code,{children:".execute()"})," call.)\nThe same pattern may be applied to other database types."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import superduper, Document\n\ndb = superduper('mongomock://')\n\ndb['images'].insert_many([Document(r) for r in data[:-1]]).execute()\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can verify that the images are correctly saved by retrieved a single record:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"r = db['images'].find_one().execute()\nr\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The contents of the ",(0,s.jsx)(n.code,{children:"Document"})," may be accessed by calling ",(0,s.jsx)(n.code,{children:".unpack()"}),". You can see that the images were saved and retrieved correctly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"r.unpack()['img']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We now build a ",(0,s.jsx)(n.code,{children:"torch"})," model for text-2-image similarity using the ",(0,s.jsx)(n.code,{children:"clip"})," library. In order to\nsave the outputs correctly in the system, we add the ",(0,s.jsx)(n.code,{children:"tensor"})," datatype to the model:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import clip\nimport torch\nfrom superduper.ext.torch import TorchModel, tensor\n\n\nmodel, preprocess = clip.load(\"ViT-B/32\", \"cpu\")\n\nclass ImageModel(torch.nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.model = model\n\n    def forward(self, image_tensors):\n        return self.model.encode_image(image_tensors)\n\n\ndt = tensor(dtype='float', shape=(512,))\n\n\nimage_model = TorchModel(\n    identifier='clip_image',\n    object=ImageModel(),\n    preprocess=preprocess,\n    datatype=dt,\n    loader_kwargs={'batch_size': 5},\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can verify that this model gives us the correct outputs on the added data with the ",(0,s.jsx)(n.code,{children:".predict"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"image_model.predict(data[0]['img'])\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we'd like to set up this model to compute outputs on the ",(0,s.jsx)(n.code,{children:"'img'"})," key of each record.\nTo do that we create a ",(0,s.jsx)(n.code,{children:"Listener"})," (see ",(0,s.jsx)(n.a,{href:"../apply_api/listener",children:"here"}),' for more information) which\n"listens" for incoming and existing data, and computes outputs on that data.']}),"\n",(0,s.jsx)(n.p,{children:"When new data is inserted, the model automatically will create outputs on that data. This is a very handy\nfeature for productionizing AI and ML, since a data deployment needs to be keep up-to-date as far as possible."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"listener = image_model.to_listener(\n    select=db['images'].find(),\n    key='img',\n    identifier='image_predictions',\n)\n\n_ = db.apply(listener)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can verify that the outputs are correctly inserted into the documents with this query.\nThe outputs are saved in the ",(0,s.jsx)(n.code,{children:"listener.outputs"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"list(listener.outputs_select.limit(1).execute())[0][listener.outputs].unpack()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Downstream of this first model, we now can add another smaller model, to classify images with configurable terms.\nSince the dataset is concerned with cats and dogs we create 2 downstream models classifying the images in 2 different ways."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduper import ObjectModel\n\n\nclass Comparer:\n    def __init__(self, words, text_features):\n        self.targets = {w: text_features[i] for i, w in enumerate(words)}\n        self.lookup = list(self.targets.keys())\n        self.matrix = torch.stack(list(self.targets.values()))\n\n    def __call__(self, vector):\n        best = (self.matrix @ vector).topk(1)[1].item()\n        return self.lookup[best]\n\n\ncats_vs_dogs = ObjectModel(\n    'cats_vs_dogs',\n    object=Comparer(['cat', 'dog'], model.encode_text(clip.tokenize(['cat', 'dog']))),\n).to_listener(\n    select=db['images'].find(),\n    key=listener.outputs,\n)\n\n            \nfelines_vs_canines = ObjectModel(\n    'felines_vs_canines',\n    object=Comparer(['feline', 'canine'], model.encode_text(clip.tokenize(['feline', 'canine']))),\n).to_listener(\n    select=db['images'].find(),\n    key=listener.outputs,\n)\n\n\ndb.apply(cats_vs_dogs)\ndb.apply(felines_vs_canines)\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can verify that both downstream models have written their outputs to the database by querying a document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"r = db['images'].find_one().execute()\n\nprint(r[cats_vs_dogs.outputs])\nprint(r[felines_vs_canines.outputs])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's check that the predictions make sense for the inserted images:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['images'].find_one({cats_vs_dogs.outputs: 'cat'}).execute()['img']\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['images'].find_one({felines_vs_canines.outputs: 'feline'}).execute()['img']\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['images'].find_one({cats_vs_dogs.outputs: 'dog'}).execute()['img']\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['images'].find_one({felines_vs_canines.outputs: 'canine'}).execute()['img']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have installed the models using ",(0,s.jsx)(n.code,{children:"Listener"}),", we can insert new data. This\ndata should be automatically processed by the installed models:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db['images'].insert_one(Document({**data[-1], 'new': True})).execute()\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can verify this by querying the data again:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"r = db['images'].find_one({'new': True}).execute().unpack()\nr['img']\n"})}),"\n",(0,s.jsx)(n.p,{children:"You see here that the models have been called in the correct order on the newly added data and the outputs saved\nto the new record:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"r['_outputs']\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);