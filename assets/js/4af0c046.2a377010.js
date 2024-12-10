"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[739],{905:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(4848),i=n(8453);const r={},a="superduper_ibis",d={id:"data_plugins/ibis",title:"ibis",description:"Superduper ibis is a plugin for ibis-framework that allows you to use Superduper as a backend for your ibis queries.",source:"@site/docs/data_plugins/ibis.md",sourceDirName:"data_plugins",slug:"/data_plugins/ibis",permalink:"/docs/next/data_plugins/ibis",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/data_plugins/ibis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mongodb",permalink:"/docs/next/data_plugins/mongodb"},next:{title:"MySQL",permalink:"/docs/next/data_plugins/mysql"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"Connection examples",id:"connection-examples",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"Other databases",id:"other-databases",level:3},{value:"Query examples",id:"query-examples",level:2},{value:"Inserting data",id:"inserting-data",level:3},{value:"Selecting data",id:"selecting-data",level:3},{value:"Vector-search",id:"vector-search",level:3},{value:"Updating data",id:"updating-data",level:3},{value:"Deleting data",id:"deleting-data",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"superduper_ibis",children:"superduper_ibis"}),"\n",(0,t.jsx)(s.p,{children:"Superduper ibis is a plugin for ibis-framework that allows you to use Superduper as a backend for your ibis queries."}),"\n",(0,t.jsxs)(s.p,{children:["This plugin cannot be used independently; it must be used together with ",(0,t.jsx)(s.code,{children:"superduper_ibis"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Superduper supports SQL databases via the ibis project. With superduper, queries may be built which conform to the ibis API, with additional support for complex data-types and vector-searches."}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pip install superduper_ibis\n"})}),"\n",(0,t.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/superduper-io/superduper/tree/main/plugins/ibis",children:"Code"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/api/plugins/superduper_ibis",children:"API-docs"})}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Class"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"superduper_ibis.data_backend.IbisDataBackend"})}),(0,t.jsx)(s.td,{children:"Ibis data backend for the database."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"superduper_ibis.query.IbisQuery"})}),(0,t.jsx)(s.td,{children:"A query that can be executed on an Ibis database."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"superduper_ibis.db_helper.DBHelper"})}),(0,t.jsx)(s.td,{children:"Generic helper class for database."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"superduper_ibis.db_helper.ClickHouseHelper"})}),(0,t.jsx)(s.td,{children:"Helper class for ClickHouse database."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"superduper_ibis.field_types.FieldType"})}),(0,t.jsx)(s.td,{children:"Field type to represent the type of a field in a table."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"connection-examples",children:"Connection examples"}),"\n",(0,t.jsx)(s.h3,{id:"mysql",children:"MySQL"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mysql://<mysql-uri>')\n"})}),"\n",(0,t.jsx)(s.h3,{id:"postgres",children:"Postgres"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('postgres://<postgres-uri>')\n"})}),"\n",(0,t.jsx)(s.h3,{id:"other-databases",children:"Other databases"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"\nfrom superduper import superduper\n\ndb = superduper('<database-uri>')\n"})}),"\n",(0,t.jsx)(s.h2,{id:"query-examples",children:"Query examples"}),"\n",(0,t.jsx)(s.h3,{id:"inserting-data",children:"Inserting data"}),"\n",(0,t.jsxs)(s.p,{children:["Table data must correspond to the ",(0,t.jsx)(s.code,{children:"Schema"})," for that table.\nEither ",(0,t.jsxs)(s.a,{href:"/docs/next/execute_api/data_encodings_and_schemas#create-a-table-with-a-schema",children:["create a ",(0,t.jsx)(s.code,{children:"Schema"})," and ",(0,t.jsx)(s.code,{children:"Table"})]}),"\nor use ",(0,t.jsxs)(s.a,{href:"/docs/next/execute_api/auto_data_types",children:["an auto-detected ",(0,t.jsx)(s.code,{children:"Schema"})]}),". Once you've\ngot a ",(0,t.jsx)(s.code,{children:"Schema"}),", all data inserted must conform to that ",(0,t.jsx)(s.code,{children:"Schema"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"import pandas\n\npandas.DataFrame([\n    PIL.Image.open('image.jpg'), 'some text', 4,\n    PIL.Image.open('other_image.jpg'), 'some other text', 3,\n])\n\nt.insert(dataframe.to_dict(orient='records'))\n"})}),"\n",(0,t.jsx)(s.h3,{id:"selecting-data",children:"Selecting data"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"superduper"})," supports selecting data via the ",(0,t.jsx)(s.code,{children:"ibis"})," query API.\nFor example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"db['my_table'].filter(t.rating > 3).limit(5).select(t.image).execute()\n"})}),"\n",(0,t.jsx)(s.h3,{id:"vector-search",children:"Vector-search"}),"\n",(0,t.jsxs)(s.p,{children:["Vector-searches are supported via the ",(0,t.jsx)(s.code,{children:"like"})," operator:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"(\n    db['my_table']\n    .like({'text': 'something like this'}, vector_index='my-index')\n    .filter(t.rating > 3)\n    .limit(5)\n    .select(t.image, t.id)\n).execute()\n"})}),"\n",(0,t.jsx)(s.p,{children:"Vector-searches are either first or last in a chain of operations:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"(\n    db['my_table']\n    t.filter(t.rating > 3)\n    .limit(5)\n    .select(t.image, t.id)\n    .like({'text': 'something like this'}, vector_index='my-index')\n).execute()\n"})}),"\n",(0,t.jsx)(s.h3,{id:"updating-data",children:"Updating data"}),"\n",(0,t.jsxs)(s.p,{children:["Updates are not covered for ",(0,t.jsx)(s.code,{children:"superduper"})," SQL integrations."]}),"\n",(0,t.jsx)(s.h3,{id:"deleting-data",children:"Deleting data"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"db.databackend.drop_table('my-table')\n"})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>d});var t=n(6540);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);