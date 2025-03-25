# Agent design

An effective agent will consist of 3 aspects:

- Intelligence
- Knowledge
- Action

```python
from superduper import Component, trigger


class Task(Component):
    description: str
    options: str

    @trigger('apply')
    def execute(self):
        ...


class Agent(Component):

    def decide(self, text) -> Component:

    def execute(self)



```