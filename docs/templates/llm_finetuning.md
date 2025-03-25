# Fine tune LLM on database

<!-- TABS -->
## Connect to superduper

:::note
Note that this is only relevant if you are running superduper in development mode.
Otherwise refer to "Configuring your production system".
:::


```python
APPLY = True
TABLE_NAME = 'sample_llm_finetuning'
```


```python
from superduper import superduper

db = superduper('mongomock://test_db', force_apply=True)
```

<!-- TABS -->
## Get LLM Finetuning Data

The following are examples of training data in different formats.


```python
from datasets import load_dataset
from superduper.base.document import Document

def getter():

    dataset_name = "timdettmers/openassistant-guanaco"
    dataset = load_dataset(dataset_name)
    
    train_dataset = dataset["train"]
    eval_dataset = dataset["test"]
    
    train_documents = [{**example, "_fold": "train"} for example in train_dataset][:10]
    eval_documents = [{**example, "_fold": "valid"} for example in eval_dataset][:5]
    
    data = train_documents + eval_documents

    return data
```


```python
if APPLY:
    data = getter()
```

We can define different training parameters to handle this type of data.


```python
transform = None
key = ('text')
training_kwargs=dict(dataset_text_field="text")
```

Example input_text and output_text


```python
if APPLY:
    d = data[0]
    input_text, output_text = d["text"].rsplit("### Assistant: ", maxsplit=1)
    input_text += "### Assistant: "
    output_text = output_text.rsplit("### Human:")[0]
    print("Input: --------------")
    print(input_text)
    print("Response: --------------")
    print(output_text)
```

<!-- TABS -->
## Insert simple data

After turning on auto_schema, we can directly insert data, and superduper will automatically analyze the data type, and match the construction of the table and datatype.


```python
table_or_collection = db[TABLE_NAME]

if APPLY:
    table_or_collection.insert(data).execute()

select = table_or_collection.select()
```

## Select a Model


```python
model_name = "Qwen/Qwen2.5-0.5B"
model_kwargs = dict()
tokenizer_kwargs = dict()
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
    num_train_epochs=2,
    save_total_limit=10,
    logging_steps=1,
    evaluation_strategy="steps",
    save_steps=100,
    eval_steps=100,
    per_device_train_batch_size=1,
    per_device_eval_batch_size=1,
    gradient_accumulation_steps=2,
    key=key,
    select=select,
    transform=transform,
    training_kwargs=training_kwargs,
    use_lora=True,
)
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
```


```python
if APPLY:
    db.apply(llm, force=True)
```


```python
from superduper import Template, Table, Schema, Application
from superduper.components.dataset import RemoteData

llm.trainer.use_lora = "<var:use_lora>"
llm.trainer.num_train_epochs = "<var:num_train_epochs>"

app = Application(identifier="llm", components=[llm])

t = Template(
    'llm-finetune',
    template=app,
    substitutions={
        TABLE_NAME: 'table_name',
        model_name: 'model_name',
    },
    default_table=Table(
        'sample_llm_finetuning',
        schema=Schema(
            'sample_llm_finetuning/schema',
            fields={'x': 'str', 'y': 'int'},
        ),
        data=RemoteData(
            'llm_finetuning',
            getter=getter,
        ),
    ),
    template_variables=['table_name', 'model_name', 'use_lora', 'num_train_epochs'],
    types={
        'collection': {
            'type': 'str',
            'default': 'dataset',
        },
        'model_name': {
            'type': 'str',
            'default': 'Qwen/Qwen2.5-0.5B',
        },
        'use_lora': {
            'type': 'bool',
            'default': True,
        },
        'num_train_epochs': {
            'type': 'int',
            'default': 3
        },
        'table_name': {
            'type': 'str',
            'default': 'sample_llm_finetuning',
        }
    }
)

t.export('.')
```

## Load the trained model
There are two methods to load a trained model:

- **Load the model directly**: This will load the model with the best metrics (if the transformers' best model save strategy is set) or the last version of the model.
- **Use a specified checkpoint**: This method downloads the specified checkpoint, then initializes the base model, and finally merges the checkpoint with the base model. This approach supports custom operations such as resetting flash_attentions, model quantization, etc., during initialization.


```python
if APPLY:
    llm = db.load("model", "llm")
```


```python
if APPLY:
    llm.predict(input_text, max_new_tokens=200)
```
