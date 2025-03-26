# Training models directly on your datastore

`Model` instances may be trained if a `trainer` is set on the `Model` when `db.apply` is called.
When models are trained, if `CFG.cluster.compute` has been configured with a `ray` scheduler, then `superduper` deploys [a job on the connected `ray` cluster](../production_features/non_blocking_ray_jobs).

## Basic pattern

```python
from superduper.ext.<framework> import <Framework>Trainer
from superduper.ext.<framework> import <ModelCls>

db.apply(
    <ModelCls>(
        *args, 
        trainer=<Framework>Trainer(**trainer_kwargs),
        **kwargs,
    )
)
```

## Fitting/ training models by framework

Not all `Model` types are trainable. We support training for the following frameworks:

| Framework | Training Link |
| --- | --- |
| Scikit-Learn | [link](../ai_integrations/sklearn#training) |
| PyTorch | [link](../ai_integrations/pytorch#training) |
| Transformers | [link](../ai_integrations/transformers#training) |
