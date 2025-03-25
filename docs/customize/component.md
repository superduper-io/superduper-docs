# Create custom `Component` implementations

The `Component` base class enforces that all descendants are Python `dataclass` instances.
That means that users only need to annotate inputs to their `Component`, and don't need to write 
`__init__` boilerplate. In addition to this, any parameter to a `Component` is serialized when 
`Component.encode()` is called. Superduper tries to serialize everything as JSON, apart from parameters which are not easily convertable to and from JSON, for instance functions, classes, and data blobs, such as model weights and tensors; these items are serialized using Python serialization. The serialized component is saved in the Superduper connection `db` (metadata goes to `db.metadata` and blobs to `db.artifact_store`).

In order to implement what happens when `db.apply(my_component)` is called, developers should decorate methods
with `@trigger('apply')`.

To illustrate this, here is an example of a custom component with a custom trigger, which sends a notification 
when applied with `db.apply` and then executes a function passed to the class `.d`. The second trigger
`.go` waits for `start` to complete (via `depends_on`) and only runs (via `requires`) if the parameter `d` is specified.


```python
import typing as t


class MyComponent(Component):
    a: int
    b: str
    c: t.Dict
    d: t.Callable | None = None

    # This is called directly after `MyComponent.__init__`
    def postinit(self):
        assert {'a', 'b', 'c'}.issubset(set(inspect.signature(self.d).parameters.keys()))

    # This is called before any `@trigger` if not already called
    def setup(self):
        self.client = slack.connect(os.environ[...])

    # This is called just after `MyComponent` is saved to the `db.databackend`.
    def on_create(self):
        self.setup()
        self.client.register(self.identifier)

    # This is called when `MyComponent` is removed using `db.remove`
    def cleanup(self):
        self.client.teardown(self.identifier)

    # Methods with @trigger run as jobs
    @trigger('apply')
    def start(self):
        self.client.send_message(f'initializing {self.huuid}')

    # An order of execution can be set with `depends_on`
    # The job can depend on optional parameter being specified with `requires`
    @trigger('apply', depends_on='start', requires='d')
    def go(self):
        self.d(a=self.a, b=self.b, c=self.c)
```