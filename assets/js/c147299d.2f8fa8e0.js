"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3240],{72:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(4848),s=r(8453);const a={},i="Transfer learning",o={id:"templates/transfer_learning",title:"Transfer learning",description:"Get useful sample data",source:"@site/docs/templates/transfer_learning.md",sourceDirName:"templates",slug:"/templates/transfer_learning",permalink:"/docs/templates/transfer_learning",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/templates/transfer_learning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text vector search",permalink:"/docs/templates/text_vector_search"}},l={},d=[{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Insert simple data",id:"insert-simple-data",level:2},{value:"Compute features",id:"compute-features",level:2},{value:"Build and train classifier",id:"build-and-train-classifier",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transfer-learning",children:"Transfer learning"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"APPLY = False\nCOLLECTION_NAME = '<var:table_name>' if not APPLY else 'sample_transfer_learning'\nMODALITY = 'text'\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import superduper, CFG\n\ndb = superduper('mongomock://test_db')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def getter(modality='text'):\n    import json\n    import subprocess\n\n    if modality == 'text': \n        subprocess.run([\n            'curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/text_classification.json',\n        ])\n        with open(\"text_classification.json\", \"r\") as f:\n            data = json.load(f)\n        subprocess.run(['rm', 'text_classification.json'])\n        data = data[:200]\n    else:\n        subprocess.run([\n            'curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/images_classification.zip',\n        ])\n        subprocess.run(['unzip', 'images_classification.zip'])\n        subprocess.run(['rm', 'images_classification.zip'])\n        import json\n        from PIL import Image\n        with open('images/images.json', 'r') as f:\n            data = json.load(f)\n        data = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]\n    return data\n"})}),"\n",(0,t.jsx)(n.p,{children:"After obtaining the data, we insert it into the database."}),"\n",(0,t.jsx)(n.h2,{id:"insert-simple-data",children:"Insert simple data"}),"\n",(0,t.jsx)(n.p,{children:"After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    from superduper import Document\n    ids = db[COLLECTION_NAME].insert([Document(r) for r in data]).execute()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compute-features",children:"Compute features"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import sentence_transformers\nfrom superduper import vector, Listener\nfrom superduper_sentence_transformers import SentenceTransformer\n\n\nsuperdupermodel_text = SentenceTransformer(\n    identifier=\"embedding\",\n    model='all-MiniLM-L6-v2',\n    postprocess=lambda x: x.tolist(),\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import torchvision\nfrom torchvision import transforms\nfrom superduper_torch import TorchModel\nfrom superduper import Listener, imported\nfrom PIL import Image\n\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        self.resnet = models.resnet18(pretrained=True)\n        self.resnet.eval()\n\n\ndef preprocess(image):\n    preprocess = preprocess = transforms.Compose([\n        transforms.Resize(256),\n        transforms.CenterCrop(224),\n        transforms.ToTensor(),\n        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n    ])\n    tensor_image = preprocess(image)\n    return tensor_image\n\n\nresnet = imported(torchvision.models.resnet18)(pretrained=True)\n\nsuperdupermodel_image = TorchModel(\n    identifier='my-vision-model',\n    object=resnet,\n    preprocess=preprocess,\n    postprocess=lambda x: x.numpy().tolist()\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper.components.model import ModelRouter\n\n\nfeature_extractor = ModelRouter(\n    'feature_extractor',\n    models={\n        'text': superdupermodel_text,\n        'image': superdupermodel_image,\n    },\n    model=MODALITY,\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"feature_extractor_listener = Listener(\n    model=feature_extractor,\n    select=db[COLLECTION_NAME].select(),\n    key='x',\n    identifier=\"features\"\n)\n\n\nif APPLY:\n    feature_extractor_listener = db.apply(\n        feature_extractor_listener,\n        force=True,\n    )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-and-train-classifier",children:"Build and train classifier"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper_sklearn import Estimator, SklearnTrainer\nfrom sklearn.svm import SVC\n\n\nscikit_model = Estimator(\n    identifier="my-model-scikit",\n    object=SVC(),\n    trainer=SklearnTrainer(\n        "my-scikit-trainer",\n        key=(feature_extractor_listener.outputs, "y"),\n        select=db[COLLECTION_NAME].outputs(feature_extractor_listener.predict_id),\n    ),\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import torch\nfrom torch import nn\nfrom superduper_torch.model import TorchModel\nfrom superduper_torch.training import TorchTrainer\nfrom torch.nn.functional import cross_entropy\n\n\nclass SimpleModel(nn.Module):\n    def __init__(self, input_size=16, hidden_size=32, num_classes=2):\n        super(SimpleModel, self).__init__()\n        self.hidden_size = hidden_size\n        self.fc1 = None\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, num_classes)\n\n    def forward(self, x):\n        input_size = x.size(1)\n        if self.fc1 is None:\n            self.fc1 = nn.Linear(input_size, self.hidden_size)\n\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        return out\n\n\npreprocess = lambda x: torch.tensor(x)\n\n\ndef postprocess(x):\n    return int(x.topk(1)[1].item())\n\n\ndef data_transform(features, label):\n    return torch.tensor(features), label\n\n\nmodel = SimpleModel(num_classes=2)\ntorch_model = TorchModel(\n    identifier='my-model-torch',\n    object=model,\n    preprocess=preprocess,\n    postprocess=postprocess,\n    trainer=TorchTrainer(\n        key=(feature_extractor_listener.outputs, 'y'),\n        identifier='my-torch-trainer',\n        objective=cross_entropy,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=1000,\n        validation_interval=100,\n        select=db[COLLECTION_NAME].outputs(feature_extractor_listener.predict_id),\n        transform=data_transform,\n    ),\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Define a validation for evaluating the effect after training."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduper import Dataset, Metric, Validation\n\ndef acc(x, y):\n    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)\n\naccuracy = Metric(identifier="acc", object=acc)\nvalidation = Validation(\n    "transfer_learning_performance",\n    key=(feature_extractor_listener.outputs, "y"),\n    datasets=[\n        Dataset(\n            identifier="my-valid",\n            select=db[COLLECTION_NAME].outputs(feature_extractor_listener.predict_id).add_fold(\'valid\')\n        )\n    ],\n    metrics=[accuracy],\n)\nscikit_model.validation = validation\ntorch_model.validation = validation\n'})}),"\n",(0,t.jsx)(n.p,{children:"If we execute the apply function, then the model will be added to the database, and because the model has a Trainer, it will perform training tasks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"estimator = ModelRouter(\n    'estimator',\n    models={\n        'scikit-framework': scikit_model,\n        'torch-framework': torch_model,\n    },\n    model='scikit-framework',\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    db.apply(estimator, force=True)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the training metrics"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    model = db.load('model', 'my-model-scikit')\n    model.metric_values\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Application\n\napplication = Application(\n    identifier='transfer-learning',\n    components=[feature_extractor_listener, estimator],\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper import Template, Table, Schema\nfrom superduper.components.dataset import RemoteData\n\nt = Template(\n    'transfer_learning',\n    default_table=Table(\n        'sample_transfer_learning',\n        schema=Schema(\n            'sample_transfer_learning/schema',\n            fields={'x': 'str', 'y': 'int'},\n        ),\n        data=RemoteData(\n            'text_classification',\n            getter=getter,\n        ),\n    ),\n    template=application,\n    substitutions={'docs': 'table_name', 'text': 'modality'},\n    template_variables=['table_name', 'framework', 'modality'],\n    types={\n        'table_name': {\n            'type': 'str',\n            'default': 'sample_transfer_learning',\n        },\n        'modality': {\n            'type': 'str',\n            'default': 'text',\n        },\n        'framework': {\n            'type': 'str',\n            'default': 'scikit-framework',\n        },\n    }\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"t.export('.')\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);