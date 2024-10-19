"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3240],{72:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(4848),s=r(8453);const a={},i="Transfer learning",o={id:"templates/transfer_learning",title:"Transfer learning",description:"Connect to superduper",source:"@site/docs/templates/transfer_learning.md",sourceDirName:"templates",slug:"/templates/transfer_learning",permalink:"/docs/templates/transfer_learning",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/templates/transfer_learning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text vector search",permalink:"/docs/templates/text_vector_search"}},l={},d=[{value:"Connect to superduper",id:"connect-to-superduper",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Insert simple data",id:"insert-simple-data",level:2},{value:"Compute features",id:"compute-features",level:2},{value:"Choose features key from feature listener",id:"choose-features-key-from-feature-listener",level:2},{value:"Build and train classifier",id:"build-and-train-classifier",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transfer-learning",children:"Transfer learning"}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-superduper",children:"Connect to superduper"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongomock:///test_db')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# <tab: Text-Classification>\n!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text_classification.json\nimport json\n\nwith open("text_classification.json", "r") as f:\n    data = json.load(f)\nnum_classes = 2\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# <tab: Image-Classification>\n!curl -O https://superduperdb-public-demo.s3.amazonaws.com/images_classification.zip && unzip images_classification.zip\nimport json\nfrom PIL import Image\n\nwith open('images/images.json', 'r') as f:\n    data = json.load(f)\n    \ndata = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]\nnum_classes = 2\n"})}),"\n",(0,t.jsx)(n.p,{children:"After obtaining the data, we insert it into the database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# <tab: Text-Classification>\ndatas = [{'txt': d['x'], 'label': d['y']} for d in data]\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# <tab: Image-Classification>\ndatas = [{'image': d['x'], 'label': d['y']} for d in data]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"insert-simple-data",children:"Insert simple data"}),"\n",(0,t.jsx)(n.p,{children:"After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Document\n\ntable_or_collection = db['docs']\n\nids = db.execute(table_or_collection.insert([Document(data) for data in datas]))\nselect = table_or_collection.select()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compute-features",children:"Compute features"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# <tab: Text>\nkey = \'txt\'\nimport sentence_transformers\nfrom superduper import vector, Listener\nfrom superduper_sentence_transformers import SentenceTransformer\n\nsuperdupermodel = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2"),\n    postprocess=lambda x: x.tolist(),\n)\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier="features"\n    )\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# <tab: Image>\nkey = 'image'\nimport torchvision.models as models\nfrom torchvision import transforms\nfrom superduper_torch import TorchModel\nfrom superduper import Listener\nfrom PIL import Image\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        # Load the pre-trained ResNet-18 model\n        self.resnet = models.resnet18(pretrained=True)\n        \n        # Set the model to evaluation mode\n        self.resnet.eval()\n        \n    def preprocess(self, image):\n        # Preprocess the image\n        preprocess = preprocess = transforms.Compose([\n            transforms.Resize(256),\n            transforms.CenterCrop(224),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n        ])\n        tensor_image = preprocess(image)\n        return tensor_image\n        \nmodel = TorchVisionEmbedding()\nsuperdupermodel = TorchModel(identifier='my-vision-model-torch', object=model.resnet, preprocess=model.preprocess, postprocess=lambda x: x.numpy().tolist())\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier=\"features\"\n    )\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"choose-features-key-from-feature-listener",children:"Choose features key from feature listener"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"input_key = listener.outputs\ntraining_select = select.outputs(listener.predict_id)\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can find the calculated feature data from the database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"feature = list(training_select.limit(1).execute())[0][input_key]\nfeature_size = len(feature)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-and-train-classifier",children:"Build and train classifier"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# <tab: Scikit-Learn>\nfrom superduper_sklearn import Estimator, SklearnTrainer\nfrom sklearn.svm import SVC\n\nmodel = Estimator(\n    identifier="my-model",\n    object=SVC(),\n    trainer=SklearnTrainer(\n        "my-trainer",\n        key=(input_key, "label"),\n        select=training_select,\n    ),\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# <tab: Torch>\nimport torch\nfrom torch import nn\nfrom superduper_torch.model import TorchModel\nfrom superduper_torch.training import TorchTrainer\nfrom torch.nn.functional import cross_entropy\n\n\nclass SimpleModel(nn.Module):\n    def __init__(self, input_size=16, hidden_size=32, num_classes=3):\n        super(SimpleModel, self).__init__()\n        self.fc1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, num_classes)\n\n    def forward(self, x):\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        return out\n\npreprocess = lambda x: torch.tensor(x)\n\n# Postprocess function for the model output    \ndef postprocess(x):\n    return int(x.topk(1)[1].item())\n\ndef data_transform(features, label):\n    return torch.tensor(features), label\n\n# Create a Logistic Regression model\n# feature_length is the input feature size\nmodel = SimpleModel(feature_size, num_classes=num_classes)\nmodel = TorchModel(\n    identifier='my-model',\n    object=model,         \n    preprocess=preprocess,\n    postprocess=postprocess,\n    trainer=TorchTrainer(\n        key=(input_key, 'label'),\n        identifier='my_trainer',\n        objective=cross_entropy,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=1000,\n        validation_interval=100,\n        select=select,\n        transform=data_transform,\n    ),\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Define a validation for evaluating the effect after training."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper import Dataset, Metric, Validation\n\n\ndef acc(x, y):\n    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)\n\n\naccuracy = Metric(identifier="acc", object=acc)\nvalidation = Validation(\n    "transfer_learning_performance",\n    key=(input_key, "label"),\n    datasets=[\n        Dataset(identifier="my-valid", select=training_select.add_fold(\'valid\'))\n    ],\n    metrics=[accuracy],\n)\nmodel.validation = validation\n'})}),"\n",(0,t.jsx)(n.p,{children:"If we execute the apply function, then the model will be added to the database, and because the model has a Trainer, it will perform training tasks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.apply(model)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"model.encode()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the training metrics"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"model = db.load('model', model.identifier)\nmodel.metric_values\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Template\n\nt = Template('transfer-learner', template=model, substitutions={'docs': 'table'})\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"t.export('.')\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);