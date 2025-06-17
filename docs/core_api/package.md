# Package

## Exporting `Component` instances

Packaging `Component` instances for sharing, and using in other deployments and teams, 
is straightforward, by means of the [Superduper-protocol](../fundamentals/), which creates
a human-readable export, linked with large data-blobs.

Any component may be exported to disk with:

```python
component.export('<path_to_export>')
```

The component may be reloaded, without any type of prior initialization, in another session or program:

```python
from superduper import Component

component = Component.read('<path_to_export>', **variables)
```

The component may be then reused with `db.apply`.

## Packaging multiple `Component` instances as an `Application`

Developers may want to ship several interconnected components, which may not have a single parent component.
To this end, Superduper includes the `Application` component, which may be used to bundle the components 
together.

```python
app = Application('my-app', components=[my_model, my_cdc, my_vector_index], variables={'my_variable': 'hello'})
```

Once bundled as an `Application`, the components inside may be managed together.

For example, all components in the application may be removed in one shot:

```python
db.remove(component='Application', identifier='my-app', recursive=True)
```

## Using variables inside a `Component`

If a `Component` has the `variables` parameter, then these variables 
may be referred to by any sub-`Component`. (For example in `Application`.)

```python
app.export('<path_to_export>')
```

Load the template and reuse:

```python
app = Component.read('<path_to_export>', my_variable='goodbye')

db.apply(app)
```

## Leveraging plugins to make development code portable

If developers would like to include locally developed code in their `Component`, `Application` and `Template` instances and implementations, 
they can use the [`Plugin`](../components/plugin) component.

```python
from superduper import Plugin

plugin = Plugin('./my_local_file.py')

app = Application('my-app', components=[my_model, my_cdc, my_vector_index], upstream=[plugin])

db.apply(app)   # plugin is applied first (since in `upstream`) and saved as a loadable artifact
app.export('.')
```
