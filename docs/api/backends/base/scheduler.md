**`superduper.backends.base.scheduler`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/backends/base/scheduler.py)

## `consume_events` 

```python
consume_events(events: List[superduper.base.event.Event],
     table: str,
     db: 'Datalayer')
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
| events | list of events. |
| table | table on which events were found. |
| db | Datalayer instance. |

Consumer work from streaming events.

Streaming event-types are {'insert', 'update', 'delete'}.

## `BaseScheduler` 

```python
BaseScheduler(self)
```
Base class for handling publisher and consumer process.

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

