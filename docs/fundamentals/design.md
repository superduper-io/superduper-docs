# Architecture

Here is how `superduper` works under the hood:

![](/img/architecture.png)

### Explanation

1. Users, and developers add data and components from a range of client-side mechanisms: **scripts**, **apps**, **notebooks** or **third-party database clients** (possibly non-python).

1. Users and programs can add **components** (**models**, data **encoders**, **vector-indexes** and more) from the client-side. Large items are stored in the **artifact-store** and tracked in columns from the **databackend**.

1. Fast loading is handled with the **cache**

1. When components are added with `db.apply` they are enqueued on the **scheduler** which then submits work to **compute**

1. Certain component implementations also trigger other parts of the infrastructure (**vector-search**, **crontab**, **change-data-capture**)

1. If data is inserted to the **databackend** the **change-data-capture (CDC)** component captures these changes as they stream in.

1. **(CDC)** triggers **work** to be performed in response to these changes, depending on which **components** are present in the system.

1. The **work** is submitted to the **workers** via the **scheduler**. Together the **scheduler** and **workers** make up the **compute** layer.

1. **workers** write their outputs back to the **databackend** and trained models to the **artifact-store**.

1. The **datalayer** is the workhorse which wraps the functionality of **databackend**, **artifact-store** and **cluster**.

1. The **datalayer** is the entrypoint for activating `Component` instances via `db.apply`.
