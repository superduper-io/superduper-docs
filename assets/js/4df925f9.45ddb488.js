"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9684],{7747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=t(4848),l=t(8453);const i={},s="Fine tune LLM on database",r={id:"templates/llm_finetuning",title:"Fine tune LLM on database",description:"Get LLM Finetuning Data",source:"@site/versioned_docs/version-0.4/templates/llm_finetuning.md",sourceDirName:"templates",slug:"/templates/llm_finetuning",permalink:"/docs/templates/llm_finetuning",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/templates/llm_finetuning.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/docs/category/templates"},next:{title:"Multimodal vector search - images",permalink:"/docs/templates/multimodal_image_search"}},d={},o=[{value:"Get LLM Finetuning Data",id:"get-llm-finetuning-data",level:2},{value:"Insert simple data",id:"insert-simple-data",level:2},{value:"Select a Model",id:"select-a-model",level:2},{value:"Build A Trainable LLM",id:"build-a-trainable-llm",level:2},{value:"Load the trained model",id:"load-the-trained-model",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"fine-tune-llm-on-database",children:"Fine tune LLM on database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"APPLY = True\nTABLE_NAME = 'sample_llm_finetuning'\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongomock://test_db', force_apply=True)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"get-llm-finetuning-data",children:"Get LLM Finetuning Data"}),"\n",(0,a.jsx)(n.p,{children:"The following are examples of training data in different formats."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduper.base.document import Document\n\ndef getter():\n\n    dataset_name = "timdettmers/openassistant-guanaco"\n    dataset = load_dataset(dataset_name)\n    \n    train_dataset = dataset["train"]\n    eval_dataset = dataset["test"]\n    \n    train_documents = [{**example, "_fold": "train"} for example in train_dataset][:10]\n    eval_documents = [{**example, "_fold": "valid"} for example in eval_dataset][:5]\n    \n    data = train_documents + eval_documents\n\n    return data\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    data = getter()\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can define different training parameters to handle this type of data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"transform = None\nkey = ('text')\ntraining_kwargs=dict(dataset_text_field=\"text\")\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example input_text and output_text"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'if APPLY:\n    d = data[0]\n    input_text, output_text = d["text"].rsplit("### Assistant: ", maxsplit=1)\n    input_text += "### Assistant: "\n    output_text = output_text.rsplit("### Human:")[0]\n    print("Input: --------------")\n    print(input_text)\n    print("Response: --------------")\n    print(output_text)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"insert-simple-data",children:"Insert simple data"}),"\n",(0,a.jsx)(n.p,{children:"After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"table_or_collection = db[TABLE_NAME]\n\nif APPLY:\n    table_or_collection.insert(data).execute()\n\nselect = table_or_collection.select()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"select-a-model",children:"Select a Model"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'model_name = "Qwen/Qwen2.5-0.5B"\nmodel_kwargs = dict()\ntokenizer_kwargs = dict()\n'})}),"\n",(0,a.jsx)(n.h2,{id:"build-a-trainable-llm",children:"Build A Trainable LLM"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Create an LLM Trainer for training"})}),"\n",(0,a.jsxs)(n.p,{children:["The parameters of this LLM Trainer are basically the same as ",(0,a.jsx)(n.code,{children:"transformers.TrainingArguments"}),", but some additional parameters have been added for easier training setup."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from superduper_transformers import LLM, LLMTrainer\n\ntrainer = LLMTrainer(\n    identifier="llm-finetune-trainer",\n    output_dir="output/finetune",\n    overwrite_output_dir=True,\n    num_train_epochs=2,\n    save_total_limit=10,\n    logging_steps=1,\n    evaluation_strategy="steps",\n    save_steps=100,\n    eval_steps=100,\n    per_device_train_batch_size=1,\n    per_device_eval_batch_size=1,\n    gradient_accumulation_steps=2,\n    max_seq_length=512,\n    key=key,\n    select=select,\n    transform=transform,\n    training_kwargs=training_kwargs,\n    use_lora=True,\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Create a trainable LLM model and add it to the database, then the training task will run automatically."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'llm = LLM(\n    identifier="llm",\n    model_name_or_path=model_name,\n    trainer=trainer,\n    model_kwargs=model_kwargs,\n    tokenizer_kwargs=tokenizer_kwargs,\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    db.apply(llm, force=True)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from superduper import Template, Table, Schema\nfrom superduper.components.dataset import RemoteData\n\nllm.trainer.use_lora = \"<var:use_lora>\"\nllm.trainer.num_train_epochs = \"<var:num_train_epochs>\"\n\nt = Template(\n    'llm-finetune',\n    template=llm,\n    substitutions={\n        TABLE_NAME: 'table_name',\n        model_name: 'model_name',\n    },\n    default_table=Table(\n        'sample_llm_finetuning',\n        schema=Schema(\n            'sample_llm_finetuning/schema',\n            fields={'x': 'str', 'y': 'int'},\n        ),\n        data=RemoteData(\n            'llm_finetuning',\n            getter=getter,\n        ),\n    ),\n    template_variables=['table_name', 'model_name', 'use_lora', 'num_train_epochs'],\n    types={\n        'collection': {\n            'type': 'str',\n            'default': 'dataset',\n        },\n        'model_name': {\n            'type': 'str',\n            'default': 'Qwen/Qwen2.5-0.5B',\n        },\n        'use_lora': {\n            'type': 'bool',\n            'default': True,\n        },\n        'num_train_epochs': {\n            'type': 'int',\n            'default': 3\n        },\n        'table_name': {\n            'type': 'str',\n            'default': 'sample_llm_finetuning',\n        }\n    }\n)\n\nt.export('.')\n"})}),"\n",(0,a.jsx)(n.h2,{id:"load-the-trained-model",children:"Load the trained model"}),"\n",(0,a.jsx)(n.p,{children:"There are two methods to load a trained model:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Load the model directly"}),": This will load the model with the best metrics (if the transformers' best model save strategy is set) or the last version of the model."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Use a specified checkpoint"}),": This method downloads the specified checkpoint, then initializes the base model, and finally merges the checkpoint with the base model. This approach supports custom operations such as resetting flash_attentions, model quantization, etc., during initialization."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'if APPLY:\n    llm = db.load("model", "llm")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    llm.predict(input_text, max_new_tokens=200)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const l={},i=a.createContext(l);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);