# Create your own cluster

`superduper` ships with 2 inbuilt cluster implementations:

- `superduper.backends.local`
- `superduper.backends.simple`

The cluster implements the architecture displayed [here](../fundamentals/design.md).

This can be configured using the configuration: `CFG.cluster_engine` (`SUPERDUPER_CLUSTER_ENGINE`).

Superduper.io's agents' platform includes it's own implementation, which can be deployed on k8s and Snowflake. 
Contact us for more details (contact@superduperio)!