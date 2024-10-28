# Building, using and distributing templates

Building templates is simple with `superduper` using the [`Template` component](../apply_api/template.md).

Once you have created a component which works for the specific models, data, and configurations chosen, 
you may want to transform these settings into variables, which can be set at run-time/ `db.apply` time.

To do that, either overwrite the values explicitly, or use the `substitutions` keyword.

See the [`simple_rag` template](../templates/simple_rag.md) for a fully worked out example.
