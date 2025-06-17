**`superduper.base.event`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/event.py)

## `unpack_event` 

```python
unpack_event(r)
```
| Parameter | Description |
|-----------|-------------|
| r | Serialized event. |

Helper function to deserialize event into Event class.

## `Create` 

```python
Create(self,
     *,
     context: str,
     path: str,
     data: Dict,
     parent: list | None = None,
     children: Optional[List] = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| context | the component context of creation. |
| path | path of the component to be created |
| data | the data of the component |
| parent | the parent of the component (if any) |
| children | the children of the component (if any) |

Class for component creation events.

## `CreateTable` 

```python
CreateTable(self,
     *,
     identifier: str,
     primary_id: str,
     fields: Dict,
     is_component: bool = False) -> None
```
| Parameter | Description |
|-----------|-------------|
| identifier | the identifier of the table |
| primary_id | the primary id of the table |
| fields | the schema of the table |
| is_component | whether the table is a component |

Class for table creation events.

## `Event` 

```python
Event(self) -> None
```
Base class for all events.

## `PutComponent` 

```python
PutComponent(self,
     *,
     context: str,
     component: str,
     identifier: str,
     version: int,
     uuid: str,
     service: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| context | the component context of creation. |
| component | the type of component to be created |
| identifier | the identifier of the component to be created |
| version | the version of the component to be created |
| uuid | the uuid of the component to be created |
| service | the service to put the component on |

Class for putting component on cluster.

## `Teardown` 

```python
Teardown(self,
     *,
     component: str,
     identifier: str,
     uuid: str,
     version: int,
     context: str | None = None,
     services: List[str] = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| component | the type of component to be created |
| identifier | the identifier of the component to be deleted |
| uuid | the uuid of the component to be deleted |
| version | the version of the component to be deleted |
| context | the context of the component to be deleted |
| services | the services to be used for tear down |

Class for component tear down events.

## `Update` 

```python
Update(self,
     *,
     context: str,
     component: str,
     data: Dict,
     parent: list | None = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| context | the component context of creation. |
| component | the type of component to be created |
| data | the component data to be created |
| parent | the parent of the component (if any) |

Update component event.

## `Signal` 

```python
Signal(self,
     *,
     msg: str,
     context: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| msg | signal to send |
| context | the context of component creation |

Event used to send a signal to the scheduler.

## `Delete` 

```python
Delete(self,
     *,
     component: str,
     identifier: str,
     parents: List[str] = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| component | the type of component to be created |
| identifier | the identifier of the component to be deleted |
| parents | the parents of the component (if any) |

Class for component deletion events.

## `Change` 

```python
Change(self,
     *,
     type: str,
     queue: str,
     ids: List[str]) -> None
```
| Parameter | Description |
|-----------|-------------|
| ids | list of ids detected in databackend. the ids affected |
| type | {'insert', 'update', 'delete'} |
| queue | which table was affected |

Class for streaming change events.

