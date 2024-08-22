"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[515],{6578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=t(4848),r=t(8453);const d={},a=void 0,c={id:"api/cdc/cdc",title:"cdc",description:"superduper.cdc.cdc",source:"@site/content/api/cdc/cdc.md",sourceDirName:"api/cdc",slug:"/api/cdc/",permalink:"/docs/api/cdc/",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/cdc/cdc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"variables",permalink:"/docs/api/base/variables"},next:{title:"application",permalink:"/docs/api/components/application"}},i={},l=[{value:"<code>DatabaseChangeDataCapture</code>",id:"databasechangedatacapture",level:2},{value:"<code>BaseDatabaseListener</code>",id:"basedatabaselistener",level:2},{value:"<code>CDCHandler</code>",id:"cdchandler",level:2},{value:"<code>DatabaseListenerFactory</code>",id:"databaselistenerfactory",level:2},{value:"<code>DatabaseListenerThreadScheduler</code>",id:"databaselistenerthreadscheduler",level:2},{value:"<code>Packet</code>",id:"packet",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"superduper.cdc.cdc"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/cdc/cdc.py",children:"Source code"})}),"\n",(0,s.jsx)(n.h2,{id:"databasechangedatacapture",children:(0,s.jsx)(n.code,{children:"DatabaseChangeDataCapture"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DatabaseChangeDataCapture(self,\n     db: 'Datalayer')\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"A superduper datalayer instance."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"DatabaseChangeDataCapture (CDC)."}),"\n",(0,s.jsx)(n.p,{children:"DatabaseChangeDataCapture is a Python class that provides a flexible and\nextensible framework for capturing and managing data changes\nin a database."}),"\n",(0,s.jsxs)(n.p,{children:["This class is repsonsible for cdc service on the provided ",(0,s.jsx)(n.code,{children:"db"})," instance\nThis class is designed to simplify the process of tracking changes\nto database records,allowing you to monitor and respond to\ndata modifications efficiently."]}),"\n",(0,s.jsx)(n.h2,{id:"basedatabaselistener",children:(0,s.jsx)(n.code,{children:"BaseDatabaseListener"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"BaseDatabaseListener(self,\n     db: 'Datalayer',\n     on: Union[ForwardRef('IbisQuery'),\n     ForwardRef('TableOrCollection')],\n     stop_event: superduper.misc.runnable.runnable.Event,\n     identifier: 'str' = '',\n     timeout: Optional[float] = None)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"A superduper instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"on"}),(0,s.jsx)(n.td,{children:"A table or collection on which the listener is invoked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stop_event"}),(0,s.jsx)(n.td,{children:"A threading event flag to notify for stoppage."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"A identity given to the listener service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"A timeout for the listener."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"A Base class which defines basic functions to implement."}),"\n",(0,s.jsx)(n.p,{children:"This class is responsible for defining the basic functions\nthat needs to be implemented by the database listener."}),"\n",(0,s.jsx)(n.h2,{id:"cdchandler",children:(0,s.jsx)(n.code,{children:"CDCHandler"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"CDCHandler(self,\n     db: 'Datalayer',\n     stop_event: superduper.misc.runnable.runnable.Event,\n     queue)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"A superduper instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stop_event"}),(0,s.jsx)(n.td,{children:"A threading event flag to notify for stoppage."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"queue"}),(0,s.jsx)(n.td,{children:"A queue to hold the cdc packets."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"CDCHandler for handling CDC changes."}),"\n",(0,s.jsxs)(n.p,{children:["This class is responsible for handling the change by executing the taskflow.\nThis class also extends the task graph by adding funcation job node which\ndoes post model executiong jobs, i.e ",(0,s.jsx)(n.code,{children:"copy_vectors"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"databaselistenerfactory",children:(0,s.jsx)(n.code,{children:"DatabaseListenerFactory"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DatabaseListenerFactory(self,\n     db_type: str = 'mongodb')\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_type"}),(0,s.jsx)(n.td,{children:"Database type."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"DatabaseListenerFactory to create listeners for different databases."}),"\n",(0,s.jsx)(n.p,{children:"This class is responsible for creating a DatabaseListener instance\nbased on the database type."}),"\n",(0,s.jsx)(n.h2,{id:"databaselistenerthreadscheduler",children:(0,s.jsx)(n.code,{children:"DatabaseListenerThreadScheduler"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DatabaseListenerThreadScheduler(self,\n     listener: superduper.cdc.cdc.BaseDatabaseListener,\n     stop_event: superduper.misc.runnable.runnable.Event,\n     start_event: superduper.misc.runnable.runnable.Event) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"listener"}),(0,s.jsx)(n.td,{children:"A BaseDatabaseListener instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stop_event"}),(0,s.jsx)(n.td,{children:"A threading event flag to notify for stoppage."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"start_event"}),(0,s.jsx)(n.td,{children:"A threading event flag to notify for start."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"DatabaseListenerThreadScheduler to listen to the cdc changes."}),"\n",(0,s.jsx)(n.p,{children:"This class is responsible for listening to the cdc changes and\nexecuting the following job."}),"\n",(0,s.jsx)(n.h2,{id:"packet",children:(0,s.jsx)(n.code,{children:"Packet"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Packet(self,\n     ids: Any,\n     query: Optional[Any] = None,\n     event_type: superduper.cdc.cdc.DBEvent = <DBEvent.insert: 'insert'>) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ids"}),(0,s.jsx)(n.td,{children:"Document ids."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"Query to fetch the document."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"event_type"}),(0,s.jsx)(n.td,{children:"CDC event type."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Packet to hold the cdc event data."})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const r={},d=s.createContext(r);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);