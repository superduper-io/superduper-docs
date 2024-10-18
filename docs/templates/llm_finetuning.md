# Fine tune LLM on database

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
from superduper import superduper

db = superduper('mongomock:///test_db')
```

<!-- TABS -->
## Get LLM Finetuning Data

The following are examples of training data in different formats.


```python
# <tab: Text>
from datasets import load_dataset
from superduper.base.document import Document
dataset_name = "timdettmers/openassistant-guanaco"
dataset = load_dataset(dataset_name)

train_dataset = dataset["train"]
eval_dataset = dataset["test"]

train_documents = [
    Document({**example, "_fold": "train"})
    for example in train_dataset
]
eval_documents = [
    Document({**example, "_fold": "valid"})
    for example in eval_dataset
]

datas = train_documents + eval_documents
```


```python
# <tab: Prompt-Response>
from datasets import load_dataset

from superduper.base.document import Document
dataset_name = "mosaicml/instruct-v3"
dataset = load_dataset(dataset_name)

train_dataset = dataset["train"]
eval_dataset = dataset["test"]

train_documents = [
    Document({**example, "_fold": "train"})
    for example in train_dataset
]
eval_documents = [
    Document({**example, "_fold": "valid"})
    for example in eval_dataset
]

datas = train_documents + eval_documents
```


```python
# <tab: Chat>
from datasets import load_dataset
from superduper.base.document import Document
dataset_name = "philschmid/dolly-15k-oai-style"
dataset = load_dataset(dataset_name)['train'].train_test_split(0.9)

train_dataset = dataset["train"]
eval_dataset = dataset["test"]

train_documents = [
    Document({**example, "_fold": "train"})
    for example in train_dataset
]
eval_documents = [
    Document({**example, "_fold": "valid"})
    for example in eval_dataset
]

datas = train_documents + eval_documents
```

We can define different training parameters to handle this type of data.


```python
# <tab: Text>
# Function for transformation after extracting data from the database
transform = None
key = ('text')
training_kwargs=dict(dataset_text_field="text")
```


```python
# <tab: Prompt-Response>
# Function for transformation after extracting data from the database
def transform(prompt, response):
    return {'text': prompt + response + "</s>"}

key = ('prompt', 'response')
training_kwargs=dict(dataset_text_field="text")
```


```python
# <tab: Chat>
# Function for transformation after extracting data from the database
transform = None

key = ('messages')
training_kwargs=None
```

Example input_text and output_text


```python
# <tab: Text>
data = datas[0]
input_text, output_text = data["text"].rsplit("### Assistant: ", maxsplit=1)
input_text += "### Assistant: "
output_text = output_text.rsplit("### Human:")[0]
print("Input: --------------")
print(input_text)
print("Response: --------------")
print(output_text)
```


```python
# <tab: Prompt-Response>
data = datas[0]
input_text = data["prompt"]
output_text = data["response"]
print("Input: --------------")
print(input_text)
print("Response: --------------")
print(output_text)
```


```python
# <tab: Chat>
data = datas[0]
messages = data["messages"]
input_text = messages[:-1]
output_text = messages[-1]["content"]
print("Input: --------------")
print(input_text)
print("Response: --------------")
print(output_text)
```

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.


```python
from superduper import Document

table_or_collection = db['docs']

ids = db.execute(table_or_collection.insert([Document(data) for data in datas]))
select = table_or_collection.select()
```

## Select a Model


```python
model_name = "facebook/opt-125m"
model_kwargs = dict()
tokenizer_kwargs = dict()

# or 
# model_name = "mistralai/Mistral-7B-Instruct-v0.2"
# token = "hf_xxxx"
# model_kwargs = dict(token=token)
# tokenizer_kwargs = dict(token=token)
```

<!-- TABS -->
## Build A Trainable LLM

**Create an LLM Trainer for training**

The parameters of this LLM Trainer are basically the same as `transformers.TrainingArguments`, but some additional parameters have been added for easier training setup.


```python
from superduper_transformers import LLM, LLMTrainer

trainer = LLMTrainer(
    identifier="llm-finetune-trainer",
    output_dir="output/finetune",
    overwrite_output_dir=True,
    num_train_epochs=3,
    save_total_limit=3,
    logging_steps=10,
    evaluation_strategy="steps",
    save_steps=100,
    eval_steps=100,
    per_device_train_batch_size=1,
    per_device_eval_batch_size=1,
    gradient_accumulation_steps=2,
    max_seq_length=512,
    key=key,
    select=select,
    transform=transform,
    training_kwargs=training_kwargs,
)
```


```python
# <tab: Lora>
trainer.use_lora = True
```


```python
# <tab: QLora>
trainer.use_lora = True
trainer.bits = 4
```


```python
# <tab: Deepspeed>
!pip install deepspeed
deepspeed = {
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "gradient_accumulation_steps": "auto",
    "zero_optimization": {
        "stage": 2,
    },
}
trainer.use_lora = True
trainer.bits = 4
trainer.deepspeed = deepspeed
```


```python
# <tab: Multi-GPUS>
trainer.use_lora = True
trainer.bits = 4
trainer.num_gpus = 2
```

Create a trainable LLM model and add it to the database, then the training task will run automatically.


```python
llm = LLM(
    identifier="llm",
    model_name_or_path=model_name,
    trainer=trainer,
    model_kwargs=model_kwargs,
    tokenizer_kwargs=tokenizer_kwargs,
)

db.apply(llm)
```

## Load the trained model
There are two methods to load a trained model:

- **Load the model directly**: This will load the model with the best metrics (if the transformers' best model save strategy is set) or the last version of the model.
- **Use a specified checkpoint**: This method downloads the specified checkpoint, then initializes the base model, and finally merges the checkpoint with the base model. This approach supports custom operations such as resetting flash_attentions, model quantization, etc., during initialization.


```python
# <tab: Load Trained Model Directly>
llm = db.load("model", "llm")
```


```python
# <tab: Use a specified checkpoint>
from superduper_transformers import LLM

experiment_id = db.show("checkpoint")[-1]
version = None # None means the last checkpoint
checkpoint = db.load("checkpoint", experiment_id, version=version)
llm = LLM(
    identifier="llm",
    model_name_or_path=model_name,
    adapter_id=checkpoint,
    model_kwargs=dict(load_in_4bit=True)
)
```


```python
llm.predict(input_text, max_new_tokens=200)
```


```python
from superduper import Template

t = Template('llm-finetune', template=llm, substitutions={'docs': 'collection', model_name: 'model_name'})
```


```python
t.export('.')
```
