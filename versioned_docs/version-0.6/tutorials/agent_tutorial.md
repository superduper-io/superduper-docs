# Real time, database integrated agents, with integrated actions

What is an AI agent? This is a difficult question to answer. In principle AI agents are relevant for a huge range of computer bound knowledge work, in which the individual component steps can be accessed programmatically. The range of possible agents is limited only by the tools we have to connect data, AI models in a useful environment. A very powerful-scuh environment is `superduper`.

In particular, when knowledge work involves reacting to data in real time, and acting, making decisions, informing and inferring based on that data, then `superduper` is exactly the right place to start. 

This is show-cased in the following example:

1. A `superduper` cron-job is created to search google for webpages relevant to a table of "people-of-interest".
2. When new data is detected either on google (real-time) or in the table of "people-of-interest" (real-time), then the store of web-pages is updated.
3. This store of web-pages is made searchable using vector-search.
4. An additional `superduper` component is created which monitors the store of web-pages and notifies each "person-of-interest" when a particular topic is found in the latest google searches.

When considering this workflow, you will see that agents don't just need to be restricted to agent-chat, with inline actions and tool-choice.

Create a searchapi.io key [here](https://www.searchapi.io/).


```python
import bs4
import os
import requests
import typing as t


from superduper import CronJob


class Researcher(CronJob):
    engine: str = 'google'

    def search(self, query: str):
        # the below logic is save on searchapi.io queries, if using the free trial
        query = query.replace(' ', '+')
        try:
            with open(f'{query}.json', 'r') as f:
                results = json.load(f)
        except FileNotFoundError:
            results = requests.get(
                "https://www.searchapi.io/api/v1/search",
                headers={"Authorization": f"Bearer {os.environ['SEARCHAPI_API_KEY']}"},
                params={"engine": self.engine, "q": query},
            ).json()['organic_results']
            with open(f'{query}.json', 'w') as f:
                json.dump(results, f)
        return results

    def download_page(self, url):
        try:
            content = requests.get(url).text
        except Exception as e:
            logging.warn(str(e))
            logging.warn('skipping')
            return ''
        soup = bs4.BeautifulSoup(content)
        return soup.get_text()

    def run(self):

        current_poi = self.db['PersonOfInterest'].execute()
        it = 0
        
        for item in current_poi:
            search_results = self.search(f'{item["name"]} {item["description"]}')
            primary_id = self.db['Page'].primary_id.execute()
            ids = set(self.db['Page'].ids())
            
            for result in search_results:

                      
                new_id = self.db.databackend.create_id(result['link'])
                
                if new_id in ids:
                    continue
                
                page = self.download_page(result['link'])
    
                if len(page.split('\n')) < 10:
                    continue

                self.db['Page'].insert([{'link': result['link'], 'txt': page, primary_id: new_id, 'source': item['_id']}])
                it += 1

        logging.info(f'Found {it} new entries')
```

To test, we'll use mongo-mock as a testing database. You can switch this to any database supported by `superduper`.


```python
from superduper import superduper

db = superduper('mongomock://test_db')
```

Datapoints and components in `superduper` are dual to one another, via `Base.dict()`. In the below example, we define 
data-points which include key information about particular individuals and their contacts.


```python
from superduper.base import Base


class PersonOfInterest(Base):
    email: str
    name: str
    description: str
```

We will insert a single person-of-interest:


```python
db.insert([
    PersonOfInterest(email='duncan@superduper-company.com', name='Duncan Blythe', description='AI Researcher'),
])
```

Now we will set-up the cron-job on the basis of our implementation above:


```python
from superduper import Listener, Table

table = Table('Page', fields={'txt': 'str', 'link': 'str'})

researcher = Researcher('researcher', schedule='* * * * *', upstream=[table])
```

To run this cron-job, as usual, run `db.apply`:


```python
db.apply(researcher)
```

To complement the research carried out by the cron-job, we'll set up a search index:


```python
from litellm import embedding
import numpy

from superduper import Model, Listener, VectorIndex


class Embedding(Model):
    model: str = 'text-embedding-ada-002'

    def predict(self, text):
        response = embedding(model=self.model, input=[text])
        return numpy.array(response.data[0]['embedding'])

    def predict_batches(self, texts):
        response = embedding(model=self.model, input=texts)
        return [
            numpy.array(r['embedding'])
            for r in response.data
        ]


myembedding = Embedding('embedding', datatype='vector[float:1265]')

vector_index = VectorIndex(
    'search_the_research',
    indexing_listener=Listener(
        'my_embedder',
        model=myembedding,
        select=db['Page'],
        key='txt',
    )
)
```

Again, we call `db.apply`. The first computations run in the main thread (initializing the computations). When additional data arrives, 
the researcher thread (created by `db.apply`) updates the vector-index.


```python
db.apply(vector_index)
```

In the following cells we create another component which listens for incoming data to the `Page` table, 
and if the data fits a certain configurable description, will trigger a notification via a webhook. 

The example uses a Zapier webhook, which is an easy way to set up notifications and a range of actions, including payments and more.
The choice of action is completely up to you!


```python
from superduper.components.cdc import CDC
from superduper.components.component import trigger 

from litellm import completion
import typing as t


class Notification(CDC):
    llm: str = 'gpt-3.5-turbo'
    prompt: str
    test: t.Callable
    key: str

    def _run(self, text, prompt):
        response = completion(model=self.llm, messages=[{'content': prompt + '\n' + text, 'role': 'user'}])
        return response.choices[0].message.content

    def check(self, text):
        response = completion(model=self.llm, messages=[{'content': self.prompt + '\n' + text, 'role': 'user'}])
        return self.test(self._run(text, self.prompt))

    def summarize(self, text):
        return self._run(text, 'Summarize this text in 20 words or less; add no padding or preamble, just the summary')

    def send_notification(self, summary, email):
        logging.info(f'sending message: {summary} to {email}')
        return
        response = requests.post(
            'https://hooks.zapier.com/hooks/catch/225673205/1234oq/',
            data={'text': summary, 'email': email},
        )

    @trigger('apply', 'insert')
    def notify(self, ids: t.List[str] | None = None):
        if not ids:
            data = self.db[self.cdc_table].execute()
        else:
            data = self.db[self.cdc_table].subset(ids)

        messages = []
        for r in data:
            if self.check(r[self.key]):
                summary = self.summarize(r[self.key])
                email = self.db['PersonOfInterest'].get(primary_id=r['source'])['email']
                messages.append({'summary': summary, 'email': email})

        for message in messages:
            self.send_notification(**message)
        return messages
```


```python
notification = Notification(
    'notification', 
    prompt='Tell me if this text concerns software engineering in some way (yes/no - lowercase); here is the text:\n',
    cdc_table='Page',
    test=lambda x: x.lower().strip() == 'yes',
    key='txt',
    db=db,
)
```

As before, since this notification is a change-data-capture component and has `@trigger(..., 'insert')`, 
it will respond to incoming data in the researcher thread, as well as checking the existing data on first `db.apply`:


```python
db.apply(notification)
```

Are you happy with your setup? The whole setup can now be saved/ bundled as an `Application`:


```python
from superduper import Application

application = Application(
    'online_trend_notification',
    components=[notification, vector_index, listener],
)
```

The next time you do this, you can apply everything in one go, like this:


```python
db.apply(application)
```
