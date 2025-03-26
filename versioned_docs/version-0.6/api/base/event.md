**`superduper.base.event`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/event.py)

## `unpack_event` 

```python
unpack_event(dict)
```
| Parameter | Description |
|-----------|-------------|
| dict | Serialized event. |

Helper function to deserialize event into Event class.

## `Event` 

```python
Event(self) -> None
```
Event dataclass to store event data.

## `Job` 

```python
Job(self,
     *,
     context: str,
     component: str,
     identifier: str,
     uuid: str,
     args: Sequence[Any] = (),
     kwargs: Dict = <factory>,
     time: datetime.datetime = <factory>,
     job_id: Optional[str] = <factory>,
     method: str,
     status: str = 'pending',
     dependencies: List[str] = <factory>) -> None
```
| Parameter | Description |
|-----------|-------------|
| context | context component for job creation |
| component | type of component |
| identifier | identifier of component |
| uuid | uuid of component |
| args | arguments of method |
| kwargs | kwargs of method |
| time | time of job creation |
| job_id | id of job |
| method | method to run |
| status | status of job |
| dependencies | list of job_id dependencies |

Job event.

## `Create` 

```python
Create(self,
     *,
     context: str,
     path: str,
     data: Dict,
     parent: list | None = None) -> None
```
| Parameter | Description |
|-----------|-------------|
| context | the component context of creation. |
| path | path of the component to be created |
| data | the data of the component |
| parent | the parent of the component (if any) |

Class for component creation events.

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

## `Change` 

```python
Change(self,
     *,
     type: str,
     queue: str,
     ids: Sequence[str]) -> None
```
| Parameter | Description |
|-----------|-------------|
| ids | list of ids detected in databackend. the ids affected |
| type | {'insert', 'update', 'delete'} |
| queue | which table was affected |

Class for streaming change events.

