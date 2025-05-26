**`superduper.backends.base.scheduler`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/backends/base/scheduler.py)

## `cluster_events` 

```python
cluster_events(events: List[superduper.base.base.Base])
```
| Parameter | Description |
|-----------|-------------|
| events | List of events to be clustered. |

Cluster events into table, create and job events.

## `consume_events` 

```python
consume_events(events: List[superduper.base.base.Base],
     table: str,
     db: 'Datalayer',
     batch_size: int | None = None)
```
| Parameter | Description |
|-----------|-------------|
| events | List of events to be consumed. |
| table | Queue Table. |
| db | Datalayer instance. |
| batch_size | Batch size for processing events. |

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

