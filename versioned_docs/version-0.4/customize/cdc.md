# Change data capture

Developers may build their own triggers which 
react to incoming data, by subclassing `CDC`.

For example, here is a simple class which downloads
urls from incoming rows of data on inserts.

```python
from superduper import CDC, trigger

class Downloader(CDC):
    @trigger('insert')
    def download(self, ids):
        data = self.db[self.cdc_table].select_using_ids(ids).tolist()
        for r in data:
            filename = r['url'].split('/')[-1]
            content = request.get(r['url'])
            with open(filename, 'wb') as f:
                f.write(content)
```

When this is applied, whenever new data is inserted into 
the specified table, the `.download` trigger is run 
on the inserted `ids`:

```python
>>> downloader = Downloader('my-downloader', cdc_table='docs')
>>> db.apply(downloader)
>>> db['docs'].insert([{'url': 'http://me.com/image1.png'}]).execute()
... # `image1.png` is saved to file
```

:::note
[Superduper enterprise](https://superduper.io/) supports
change-data-capture in such a way that data does 
not need to be inserted with the Superduper client.

This is advantageous in bigger teams, and when 
developers are working with a variety of data-sources.
:::