# Using AI to self-referentially create Superduper components

In this example we create a component which can create tasks which run on Superduper.
In order to prevent the AI generating arbitrary potentially insecure code, we constrain
the model to only output the parameters of the target component type `NewClass`.


```python
import json
from litellm import completion
from superduper import Component 
import typing as t


PROMPT = """Here is the source code of a `superduper.Component` subclass: {name}.

---
{source_code}
---

It is a standard dataclass, with methods which access the dataclass fields.
These fields are as follows:
{fields}

Your goal is to specify the fields of this dataclass in order to perform 
the task specified in the following question, using the methods of the dataclass.

The task is specifying in the provided question.:
"""


class AutoPrompt(Component):
    schema: t.Type[Component]

    @property
    def prompt(self):
        source_code = self.schema.source_code
        name = self.schema.__name__
        fields = list(self.schema.class_schema.fields.keys())
        fields = '\n'.join(['- ' + f for f in fields]) + '\n'

        return PROMPT.format(
            name=name,
            source_code=source_code,
            fields=fields
        )

    def predict(self, question: str):
        messages = [
            {
                'role': 'system',
                'content': self.prompt,
            },
            {
                'role': 'user',
                'content': question,
            }
        ]
        data = completion(
            model='gpt-4o',
            messages=messages,
            response_format=self.schema.pydantic
        ).choices[0].message.content

        try:
            data = json.loads(data)
        except json.JSONDecodeError:
            return None

        if data.get('identifier') is None:
            data['identifier'] = 'task'
        
        return self.schema(**data)
```


```python
class NewClass(Component):
    prompt: str
    def process(self, text: str):
        return self.llm_completion(self.prompt)
```


```python
ap = AutoPrompt('auto', schema=NewClass)
```


```python
nc = ap.predict('Create a task to extract the year from an unstructured text')
```


```python
dict(nc.dict())
```


```python

```
