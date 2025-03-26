**`superduper.base.metadata`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/metadata.py)

## `MetaDataStore` 

```python
MetaDataStore(self,
     db,
     cache: superduper.backends.base.cache.Cache | None = None)
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance. |
| cache | Cache instance. |

Abstraction for storing meta-data separately from primary data.

## `ArtifactRelations` 

```python
ArtifactRelations(self,
     *,
     component_id: str,
     artifact_id: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| component_id | UUID of component version |
| artifact_id | UUID of component version |

Artifact relations table.

## `ParentChildAssociations` 

```python
ParentChildAssociations(self,
     *,
     parent_component: str,
     parent_uuid: str,
     child_component: str,
     child_uuid: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| parent_component | parent component type |
| parent_uuid | parent uuid |
| child_component | child component type |
| child_uuid | child component uuid |

Parent-child associations table.

