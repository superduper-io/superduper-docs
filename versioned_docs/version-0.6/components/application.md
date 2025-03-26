# `Application`

- An `Application` ships a pre-configured functionality in a compact and easy to understand way

***Dependencies***

- [`Template`](./template.md)

***Usage pattern***

```python
template = db.load('Template', 'my_template')

application = template(my_variable_1='my_value_1',
                       my_variable_2='my_value_2')

db.apply(application.copy())
```
