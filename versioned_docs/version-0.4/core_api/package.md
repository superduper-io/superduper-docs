# Package

## Exporting `Component` instances

Packaging `Component` instances for sharing, and using in other deployments and teams, 
is straightforward, by means of the [Superduper-protocol](../fundamentals/), which creates
a human-readable export, linked with large data-blobs.

Any component may be exported to disk with:

```python
component.export('<path_to_export>')
```

or in a compressed format:

```python
component.export('<path_to_export>', zip=True)
```

The component may be reloaded, without any type of prior initialization, in another session or program:

```python
from superduper import Component

component = Component.read('<path_to_export>')
```

The component may be then reused with `db.apply`.


## Packaging multiple `Component` instances as an `Application`

Developers may want to ship several interconnected components, which may not have a single parent component.
To this end, Superduper includes the `Application` component, which may be used to bundle the components 
together.

```python
app = Application('my-app', components=[my_model, my_cdc, my_vector_index])
```

Once bundled as an `Application`, the components inside may be managed together.

For example, all components in the application may be shown:

```python
db.show(application='my-app')
```

and all components may be removed in a single command:

```python
db.remove('application', 'my-app')
```

## Creating `Template` instances from `Component`


In order to re-use `Component` instances with certain values replaced with new values, 
for example, the location of data, Superduper provides 2 important `Component` subtypes:

