**`superduper.base.metadata`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/metadata.py)

## `MetaDataStore` 

```python
MetaDataStore(self,
     db: 'Datalayer',
     parent_db: 'Datalayer')
```
| Parameter | Description |
|-----------|-------------|
| db | Datalayer instance for saving components. |
| parent_db | Parent Datalayer instance for saving primary data. |

Abstraction for storing meta-data separately from primary data.

## `ArtifactRelations` 

```python
ArtifactRelations(self,
     *,
     relation_id: str,
     component: str,
     identifier: str,
     uuid: str,
     artifact_id: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| relation_id | relation identifier |
| component | component type |
| identifier | identifier of component |
| uuid | UUID of component version |
| artifact_id | UUID of component version |

Artifact relations table.

## `ParentChildAssociations` 

```python
ParentChildAssociations(self,
     *,
     parent_component: str,
     parent_identifier: str,
     parent_uuid: str,
     child_component: str,
     child_identifier: str,
     child_uuid: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| parent_component | parent component type |
| parent_identifier | parent component identifier |
| parent_uuid | parent uuid |
| child_component | child component type |
| child_identifier | child component identifier |
| child_uuid | child component uuid |

Parent-child associations table.

