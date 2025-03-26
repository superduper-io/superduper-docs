**`superduper.base.exceptions`** 

[Source code](https://github.com/superduper-io/superduper/blob/main/superduper/base/exceptions.py)

## `BaseException` 

```python
BaseException(self,
     msg)
```
| Parameter | Description |
|-----------|-------------|
| msg | msg for Exception |

BaseException which logs a message after exception.

## `ComponentInUseError` 

```python
ComponentInUseError(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for Exception |
| kwargs | **kwargs for Exception |

Exception raised when a component is already in use.

## `MissingSecretsException` 

```python
MissingSecretsException(self,
     msg)
```
| Parameter | Description |
|-----------|-------------|
| msg | msg for BaseException |

Missing secrets.

## `ServiceRequestException` 

```python
ServiceRequestException(self,
     msg)
```
| Parameter | Description |
|-----------|-------------|
| msg | msg for BaseException |

Service request exception.

## `TableNotFoundError` 

```python
TableNotFoundError(self,
     /,
     *args,
     **kwargs)
```
| Parameter | Description |
|-----------|-------------|
| args | *args for Exception |
| kwargs | **kwargs for Exception |

Table not found in database.

## `UnsupportedDatatype` 

```python
UnsupportedDatatype(self,
     msg)
```
| Parameter | Description |
|-----------|-------------|
| msg | msg for BaseException |

UnsupportedDatatype.

