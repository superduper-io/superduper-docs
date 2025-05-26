**`superduper.base.exceptions`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/exceptions.py)

## `AlreadyExists` 

```python
AlreadyExists(self,
     obj_type: str,
     obj_id: str)
```
| Parameter | Description |
|-----------|-------------|
| obj_type | the type of the conflict resource (e.g Table, Job) |
| obj_id | the identifier of conflicting resource (e.g MyTable) |

AlreadyExists means the resource you are creating already exists.

## `AppException` 

```python
AppException(self,
     code: int,
     reason: superduper.base.exceptions.StatusReason,
     message: str)
```
| Parameter | Description |
|-----------|-------------|
| code | the HTTP status code of the error (e.g 500) |
| reason | the specific failure cause. (e.g Timeout, InternalError) |
| message | details about the reason (e.g read file XXX). |

Generic exception for application-specific errors.

Should not be used directly. Only through the other classes.

## `BadRequest` 

```python
BadRequest(self,
     message: str)
```
| Parameter | Description |
|-----------|-------------|
| message | details about the exception |

BadRequest means the request itself was invalid and makes no sense.

For example, deleting a read-only object.

## `Conflict` 

```python
Conflict(self,
     obj_type: str,
     obj_id: str,
     details: str)
```
| Parameter | Description |
|-----------|-------------|
| obj_type | the type of the conflict resource (e.g Table, Job) |
| obj_id | the identifier of conflicting resource (e.g MyTable) |
| details | additional information that indicate the nature of the conflict. |

The request could not be completed due to a conflict with the current state of the target resource.

This code is used in situations where the user might be able to resolve the conflict and resubmit the request.

## `Forbidden` 

```python
Forbidden(self,
     message: str)
```
| Parameter | Description |
|-----------|-------------|
| message | details about the exception |

The server understood the request but refuses to fulfill it.

If authentication credentials were provided in the request, the server considers them insufficient to grant access.

## `GenericServerResponse` 

```python
GenericServerResponse(self,
     code: int,
     server_message: str)
```
| Parameter | Description |
|-----------|-------------|
| code | the http code we are interested to wrap. |
| server_message | the payload of the http response |

Raised for server responses that do not match any specific known error type.

It should only be used by REST clients that need to raise a local exception if they
receive a non 200 (ok) request.

## `InternalError` 

```python
InternalError(self,
     message: str,
     cause: Exception | None = None)
```
| Parameter | Description |
|-----------|-------------|
| message | details about the situation |
| cause | the original exception (optional) |

The server encountered an unexpected condition that prevented it from fulfilling the request.

## `InvalidResource` 

```python
InvalidResource(self,
     message: str)
```
| Parameter | Description |
|-----------|-------------|
| message | details about the exception |

The request is valid, but the server was unable to process the contained instructions for the resource.

For example, to read the payload from an empty file.

## `NotFound` 

```python
NotFound(self,
     obj_type: str,
     obj_id: str)
```
| Parameter | Description |
|-----------|-------------|
| obj_type | the type of the missing resource (e.g Table, Job) |
| obj_id | the identifier of the missing resource  (e.g MyTable) |

NotFound means one or more resources required for this operation could not be found.

## `TimeoutError` 

```python
TimeoutError(self,
     message: str)
```
| Parameter | Description |
|-----------|-------------|
| message | details about the exception |

Timeout occurred before the request could be completed.

This is may be due to temporary server load or a transient communication issue with
another server. Clients may retry, but the operation may still complete.

## `Unauthorized` 

```python
Unauthorized(self,
     message: str)
```
| Parameter | Description |
|-----------|-------------|
| message | details about the exception |

The request has not been applied because it lacks valid authentication credentials for the target resource.

