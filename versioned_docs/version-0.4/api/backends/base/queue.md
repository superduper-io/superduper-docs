**`superduper.backends.base.queue`** 

[Source code](https://github.com/superduper/superduper/blob/main/superduper/backends/base/queue.py)

## `consume_events` 

```python
consume_events(events,
     table: str,
     db=None)
```
| Parameter | Description |
|-----------|-------------|
| events | List of events to be consumed. |
| table | Queue Table. |
| db | Datalayer instance. |

Consume events from table queue.

## `consume_streaming_events` 

```python
consume_streaming_events(events,
     table,
     db)
```
| Parameter | Description |
|-----------|-------------|
| events | list of events |
| table | table on which events were found |
| db | Datalayer instance |

Consumer work from streaming events.

Streaming event-types are {'insert', 'update', 'delete'}.

## `BaseQueuePublisher` 

```python
BaseQueuePublisher(self,
     uri: Optional[str])
```
| Parameter | Description |
|-----------|-------------|
| uri | Uri to connect. |

Base class for handling publisher and consumer process.

This class is an implementation of message broker between
producers (superduper db client) and consumers i.e listeners.

## `BaseQueueConsumer` 

```python
BaseQueueConsumer(self,
     uri: Optional[str] = '',
     queue_name: str = '',
     callback: Optional[Callable] = None)
```
| Parameter | Description |
|-----------|-------------|
| uri | Uri to connect. |
| queue_name | Queue to consume. |
| callback | Callback for consumed messages. |

Base class for handling consumer process.

This class is an implementation of message broker between
producers (superduper db client) and consumers i.e listeners.

## `Future` 

```python
Future(self,
     job_id: str) -> None
```
| Parameter | Description |
|-----------|-------------|
| job_id | job identifier |

Future output.

