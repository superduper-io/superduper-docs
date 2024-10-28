"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2790],{1136:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=s(4848),d=s(8453);const n={},a=void 0,c={id:"api/backends/query_dataset",title:"query_dataset",description:"superduper.backends.query_dataset",source:"@site/docs/api/backends/query_dataset.md",sourceDirName:"api/backends",slug:"/api/backends/query_dataset",permalink:"/docs/api/backends/query_dataset",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/backends/query_dataset.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vector_search",permalink:"/docs/api/backends/base/vector_search"},next:{title:"annotations",permalink:"/docs/api/base/annotations"}},i={},o=[{value:"<code>query_dataset_factory</code>",id:"query_dataset_factory",level:2},{value:"<code>CachedQueryDataset</code>",id:"cachedquerydataset",level:2},{value:"<code>ExpiryCache</code>",id:"expirycache",level:2},{value:"<code>QueryDataset</code>",id:"querydataset",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduper.backends.query_dataset"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/backends/query_dataset.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"query_dataset_factory",children:(0,r.jsx)(t.code,{children:"query_dataset_factory"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"query_dataset_factory(**kwargs)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kwargs"}),(0,r.jsx)(t.td,{children:"Keyword arguments to be passed to the query dataset object."})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Create a query dataset object."}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"data_prefetch"})," is set to ",(0,r.jsx)(t.code,{children:"True"}),", then a ",(0,r.jsx)(t.code,{children:"CachedQueryDataset"})," object is\ncreated, otherwise a ",(0,r.jsx)(t.code,{children:"QueryDataset"})," object is created."]}),"\n",(0,r.jsx)(t.h2,{id:"cachedquerydataset",children:(0,r.jsx)(t.code,{children:"CachedQueryDataset"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"CachedQueryDataset(self,\n     select: superduper.backends.base.query.Query,\n     mapping: Optional[ForwardRef('Mapping')] = None,\n     ids: Optional[List[str]] = None,\n     fold: Optional[str] = 'train',\n     transform: Optional[Callable] = None,\n     db=None,\n     in_memory: bool = True,\n     prefetch_size: int = 100)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"select"}),(0,r.jsx)(t.td,{children:"A select query object which defines the query to be executed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mapping"}),(0,r.jsx)(t.td,{children:"A mapping object to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ids"}),(0,r.jsx)(t.td,{children:"A list of ids to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fold"}),(0,r.jsx)(t.td,{children:"The fold to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transform"}),(0,r.jsx)(t.td,{children:"A callable which can be used to transform the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"A datalayer instance to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"in_memory"}),(0,r.jsx)(t.td,{children:"A boolean flag to indicate if the dataset should be loaded"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prefetch_size"}),(0,r.jsx)(t.td,{children:"The number of documents to prefetch from the database."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Cached Query Dataset for fetching documents from database."}),"\n",(0,r.jsxs)(t.p,{children:["This class which fetch the document corresponding to the given ",(0,r.jsx)(t.code,{children:"index"}),".\nThis class prefetches documents from database and stores in the memory."]}),"\n",(0,r.jsx)(t.p,{children:"This can drastically reduce database read operations and hence reduce the overall\nload on the database."}),"\n",(0,r.jsx)(t.h2,{id:"expirycache",children:(0,r.jsx)(t.code,{children:"ExpiryCache"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"ExpiryCache(self,\n     /,\n     *args,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"args"}),(0,r.jsxs)(t.td,{children:["*args for ",(0,r.jsx)(t.code,{children:"list"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kwargs"}),(0,r.jsxs)(t.td,{children:["**kwargs for ",(0,r.jsx)(t.code,{children:"list"})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Expiry Cache for storing documents."}),"\n",(0,r.jsx)(t.p,{children:"The document will be removed from the cache after fetching it from the cache."}),"\n",(0,r.jsx)(t.h2,{id:"querydataset",children:(0,r.jsx)(t.code,{children:"QueryDataset"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"QueryDataset(self,\n     select: superduper.backends.base.query.Query,\n     mapping: Optional[ForwardRef('Mapping')] = None,\n     ids: Optional[List[str]] = None,\n     fold: Optional[str] = 'train',\n     transform: Optional[Callable] = None,\n     db: Optional[ForwardRef('Datalayer')] = None,\n     in_memory: bool = True)\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"select"}),(0,r.jsx)(t.td,{children:"A select query object which defines the query to be executed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mapping"}),(0,r.jsx)(t.td,{children:"A mapping object to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ids"}),(0,r.jsx)(t.td,{children:"A list of ids to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fold"}),(0,r.jsx)(t.td,{children:"The fold to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transform"}),(0,r.jsx)(t.td,{children:"A callable which can be used to transform the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"A datalayer instance to be used for the dataset."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"in_memory"}),(0,r.jsx)(t.td,{children:"A boolean flag to indicate if the dataset should be loaded in memory."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Query Dataset for fetching documents from database."})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(6540);const d={},n=r.createContext(d);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);