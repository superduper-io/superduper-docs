"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8771],{4682:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=r(4848),d=r(8453);const t={},c=void 0,i={id:"api/backends/mongodb/query",title:"query",description:"superduper.backends.mongodb.query",source:"@site/content/api/backends/mongodb/query.md",sourceDirName:"api/backends/mongodb",slug:"/api/backends/mongodb/query",permalink:"/superduper-docs/docs/api/backends/mongodb/query",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/backends/mongodb/query.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metadata",permalink:"/superduper-docs/docs/api/backends/mongodb/metadata"},next:{title:"query_dataset",permalink:"/superduper-docs/docs/api/backends/query_dataset"}},l={},o=[{value:"<code>DeleteOne</code>",id:"deleteone",level:2},{value:"<code>InsertOne</code>",id:"insertone",level:2},{value:"<code>ReplaceOne</code>",id:"replaceone",level:2},{value:"<code>UpdateOne</code>",id:"updateone",level:2},{value:"<code>parse_query</code>",id:"parse_query",level:2},{value:"<code>MongoQuery</code>",id:"mongoquery",level:2},{value:"<code>BulkOp</code>",id:"bulkop",level:2},{value:"<code>ChangeStream</code>",id:"changestream",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"superduper.backends.mongodb.query"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/backends/mongodb/query.py",children:"Source code"})}),"\n",(0,s.jsx)(n.h2,{id:"deleteone",children:(0,s.jsx)(n.code,{children:"DeleteOne"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DeleteOne(**kwargs)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kwargs"}),(0,s.jsx)(n.td,{children:"The arguments to pass to the operation."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"DeleteOne operation for MongoDB."}),"\n",(0,s.jsx)(n.h2,{id:"insertone",children:(0,s.jsx)(n.code,{children:"InsertOne"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"InsertOne(**kwargs)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kwargs"}),(0,s.jsx)(n.td,{children:"The arguments to pass to the operation."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"InsertOne operation for MongoDB."}),"\n",(0,s.jsx)(n.h2,{id:"replaceone",children:(0,s.jsx)(n.code,{children:"ReplaceOne"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ReplaceOne(**kwargs)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kwargs"}),(0,s.jsx)(n.td,{children:"The arguments to pass to the operation."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"ReplaceOne operation for MongoDB."}),"\n",(0,s.jsx)(n.h2,{id:"updateone",children:(0,s.jsx)(n.code,{children:"UpdateOne"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"UpdateOne(**kwargs)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kwargs"}),(0,s.jsx)(n.td,{children:"The arguments to pass to the operation."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"UpdateOne operation for MongoDB."}),"\n",(0,s.jsx)(n.h2,{id:"parse_query",children:(0,s.jsx)(n.code,{children:"parse_query"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"parse_query(query,\n     documents: Sequence[Dict] = (),\n     db: Optional[ForwardRef('Datalayer')] = None)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"The query to parse."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documents"}),(0,s.jsx)(n.td,{children:"The documents to query."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"The datalayer to use to execute the query."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Parse a string query into a query object."}),"\n",(0,s.jsx)(n.h2,{id:"mongoquery",children:(0,s.jsx)(n.code,{children:"MongoQuery"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"MongoQuery(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     parts: Sequence[Union[Tuple,\n     str]] = ()) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uuid"}),(0,s.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parts"}),(0,s.jsx)(n.td,{children:"The parts of the query."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"A query class for MongoDB."}),"\n",(0,s.jsx)(n.p,{children:"This class is used to build and execute queries on a MongoDB database."}),"\n",(0,s.jsx)(n.h2,{id:"bulkop",children:(0,s.jsx)(n.code,{children:"BulkOp"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"BulkOp(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     kwargs: Dict = None) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uuid"}),(0,s.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kwargs"}),(0,s.jsx)(n.td,{children:"The arguments to pass to the operation."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"A bulk operation for MongoDB."}),"\n",(0,s.jsx)(n.h2,{id:"changestream",children:(0,s.jsx)(n.code,{children:"ChangeStream"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ChangeStream(self,\n     collection: str,\n     args: Sequence = None,\n     kwargs: Dict = None) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsx)(n.td,{children:"The collection to perform the query on"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"args"}),(0,s.jsxs)(n.td,{children:["Positional query arguments to ",(0,s.jsx)(n.code,{children:"pymongo.Collection.watch"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kwargs"}),(0,s.jsxs)(n.td,{children:["Named query arguments to ",(0,s.jsx)(n.code,{children:"pymongo.Collection.watch"})]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Change stream class to watch for changes in specified collection."})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(6540);const d={},t=s.createContext(d);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);