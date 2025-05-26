# `CDC`

- Listen for update, inserts and deletes
- Take specific action contigent on these changes
- Can be deployed on Superduper Enterprise in standalone service

***Usage pattern***

```python
from superduper import trigger, CDC

class MyTrigger(CDC):
    @trigger('insert')
    def run(self, ids):
        data = db[self.cdc_table].select_using_ids(ids).execute()
        for r in data:
            if 'urgent' in r['title']:
                db['notifications'].insert_one({
                    'status': 'urgent',
                    'msg': r['msg'],
                }).execute()

my_cdc = CDC('urgent', cdc_table='my-table')

# this command "activates" the component, deploying 
# the @trigger methods to listen for changes
db.apply(my_cdc)
```