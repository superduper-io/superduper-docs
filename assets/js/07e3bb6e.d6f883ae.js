"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9559],{4991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(4848),s=n(8453);const i={},d=void 0,o={id:"api/base/config",title:"config",description:"superduper.base.config",source:"@site/versioned_docs/version-0.4/api/base/config.md",sourceDirName:"api/base",slug:"/api/base/config",permalink:"/docs/api/base/config",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/api/base/config.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"code",permalink:"/docs/api/base/code"},next:{title:"config_dicts",permalink:"/docs/api/base/config_dicts"}},c={},l=[{value:"<code>BaseConfig</code>",id:"baseconfig",level:2},{value:"<code>Config</code>",id:"config",level:2},{value:"<code>Downloads</code>",id:"downloads",level:2},{value:"<code>RestConfig</code>",id:"restconfig",level:2},{value:"<code>Retry</code>",id:"retry",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduper.base.config"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/base/config.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"baseconfig",children:(0,r.jsx)(t.code,{children:"BaseConfig"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"BaseConfig(self) -> None\n"})}),"\n",(0,r.jsx)(t.p,{children:"A base class for configuration dataclasses."}),"\n",(0,r.jsx)(t.p,{children:"This class allows for easy updating of configuration dataclasses\nwith a dictionary of parameters."}),"\n",(0,r.jsx)(t.h2,{id:"config",children:(0,r.jsx)(t.code,{children:"Config"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"Config(self,\n     envs: dataclasses.InitVar[typing.Optional[typing.Dict[str,\n     str]]] = None,\n     data_backend: str = 'mongodb://mongodb:27017/test_db',\n     lance_home: str = '.superduper/vector_indices',\n     artifact_store: Optional[str] = None,\n     metadata_store: Optional[str] = None,\n     vector_search_engine: str = 'local',\n     cluster_engine: str = 'local',\n     retries: superduper.base.config.Retry = <factory>,\n     downloads: superduper.base.config.Downloads = <factory>,\n     fold_probability: float = 0.05,\n     log_level: superduper.base.config.LogLevel = <LogLevel.INFO: 'INFO'>,\n     logging_type: superduper.base.config.LogType = <LogType.SYSTEM: 'SYSTEM'>,\n     log_colorize: bool = True,\n     force_apply: bool = False,\n     bytes_encoding: superduper.base.config.BytesEncoding = <BytesEncoding.BYTES: 'bytes'>,\n     auto_schema: bool = True,\n     json_native: bool = True,\n     output_prefix: str = '_outputs__',\n     vector_search_kwargs: Dict = <factory>,\n     rest: superduper.base.config.RestConfig = <factory>) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"envs"}),(0,r.jsx)(t.td,{children:"The envs datas"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data_backend"}),(0,r.jsx)(t.td,{children:"The URI for the data backend"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lance_home"}),(0,r.jsx)(t.td,{children:"The home directory for the Lance vector indices, Default: .superduper/vector_indices"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artifact_store"}),(0,r.jsx)(t.td,{children:"The URI for the artifact store"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metadata_store"}),(0,r.jsx)(t.td,{children:"The URI for the metadata store"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vector_search_engine"}),(0,r.jsx)(t.td,{children:"The engine to use for vector search"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cluster_engine"}),(0,r.jsx)(t.td,{children:"The engine to use for operating a distributed cluster"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retries"}),(0,r.jsx)(t.td,{children:"Settings for retrying failed operations"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"downloads"}),(0,r.jsx)(t.td,{children:"Settings for downloading files"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fold_probability"}),(0,r.jsx)(t.td,{children:"The probability of validation fold"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"log_level"}),(0,r.jsx)(t.td,{children:"The severity level of the logs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"logging_type"}),(0,r.jsx)(t.td,{children:"The type of logging to use"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"force_apply"}),(0,r.jsx)(t.td,{children:"Whether to force apply the configuration"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bytes_encoding"}),(0,r.jsx)(t.td,{children:"The encoding of bytes in the data backend"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"auto_schema"}),(0,r.jsx)(t.td,{children:"Whether to automatically create the schema. If True, the schema will be created if it does not exist."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"json_native"}),(0,r.jsx)(t.td,{children:"Whether the databackend supports json natively or not."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"log_colorize"}),(0,r.jsx)(t.td,{children:"Whether to colorize the logs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"output_prefix"}),(0,r.jsx)(t.td,{children:"The prefix for the output table and output field key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vector_search_kwargs"}),(0,r.jsx)(t.td,{children:"The keyword arguments to pass to the vector search"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rest"}),(0,r.jsx)(t.td,{children:"Settings for rest server."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The data class containing all configurable superduper values."}),"\n",(0,r.jsx)(t.h2,{id:"downloads",children:(0,r.jsx)(t.code,{children:"Downloads"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"Downloads(self,\n     folder: Optional[str] = None,\n     n_workers: int = 0,\n     headers: Dict = <factory>,\n     timeout: Optional[int] = None) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"folder"}),(0,r.jsx)(t.td,{children:"The folder to download files to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_workers"}),(0,r.jsx)(t.td,{children:"The number of workers to use for downloading"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"headers"}),(0,r.jsx)(t.td,{children:"The headers to use for downloading"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:"The timeout for downloading"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Describes the configuration for downloading files."}),"\n",(0,r.jsx)(t.h2,{id:"restconfig",children:(0,r.jsx)(t.code,{children:"RestConfig"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"RestConfig(self,\n     uri: str = 'localhost:8000',\n     config: Optional[str] = None) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uri"}),(0,r.jsx)(t.td,{children:"Rest server uri."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"config"}),(0,r.jsx)(t.td,{children:"Path configuration file."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Configuratin for basic rest server."}),"\n",(0,r.jsx)(t.h2,{id:"retry",children:(0,r.jsx)(t.code,{children:"Retry"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"Retry(self,\n     stop_after_attempt: int = 2,\n     wait_max: float = 10.0,\n     wait_min: float = 4.0,\n     wait_multiplier: float = 1.0) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stop_after_attempt"}),(0,r.jsx)(t.td,{children:"The number of attempts to make"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wait_max"}),(0,r.jsx)(t.td,{children:"The maximum time to wait between attempts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wait_min"}),(0,r.jsx)(t.td,{children:"The minimum time to wait between attempts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wait_multiplier"}),(0,r.jsx)(t.td,{children:"The multiplier for the wait time between attempts"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Describes how to retry using the ",(0,r.jsx)(t.code,{children:"tenacity"})," library."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);