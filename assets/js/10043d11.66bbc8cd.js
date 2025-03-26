"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4323],{2223:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=d(4848),i=d(8453);const r={},l=void 0,c={id:"api/base/datatype",title:"datatype",description:"superduper.base.datatype",source:"@site/versioned_docs/version-0.6/api/base/datatype.md",sourceDirName:"api/base",slug:"/api/base/datatype",permalink:"/docs/api/base/datatype",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.6/api/base/datatype.md",tags:[],version:"0.6",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"datalayer",permalink:"/docs/api/base/datalayer"},next:{title:"document",permalink:"/docs/api/base/document"}},t={},a=[{value:"<code>get_hash</code>",id:"get_hash",level:2},{value:"<code>hash_indescript</code>",id:"hash_indescript",level:2},{value:"<code>BaseDataType</code>",id:"basedatatype",level:2},{value:"<code>Blob</code>",id:"blob",level:2},{value:"<code>BaseType</code>",id:"basetype",level:2},{value:"<code>ComponentType</code>",id:"componenttype",level:2},{value:"<code>FileItem</code>",id:"fileitem",level:2},{value:"<code>Array</code>",id:"array",level:2},{value:"<code>BaseVector</code>",id:"basevector",level:2},{value:"<code>ComponentDict</code>",id:"componentdict",level:2},{value:"<code>ComponentList</code>",id:"componentlist",level:2},{value:"<code>Dill</code>",id:"dill",level:2},{value:"<code>DillEncoder</code>",id:"dillencoder",level:2},{value:"<code>FieldType</code>",id:"fieldtype",level:2},{value:"<code>File</code>",id:"file",level:2},{value:"<code>FileDict</code>",id:"filedict",level:2},{value:"<code>JSON</code>",id:"json",level:2},{value:"<code>NativeVector</code>",id:"nativevector",level:2},{value:"<code>Pickle</code>",id:"pickle",level:2},{value:"<code>PickleEncoder</code>",id:"pickleencoder",level:2},{value:"<code>Saveable</code>",id:"saveable",level:2},{value:"<code>Vector</code>",id:"vector",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"superduper.base.datatype"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/superduper-io/superduper/blob/main/superduper/base/datatype.py",children:"Source code"})}),"\n",(0,s.jsx)(n.h2,{id:"get_hash",children:(0,s.jsx)(n.code,{children:"get_hash"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"get_hash(data)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data"}),(0,s.jsx)(n.td,{children:"Data to hash."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Get the hash of the given data."}),"\n",(0,s.jsx)(n.h2,{id:"hash_indescript",children:(0,s.jsx)(n.code,{children:"hash_indescript"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"hash_indescript(item)\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"item"}),(0,s.jsx)(n.td,{children:"The item to hash."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Hash a range of items."}),"\n",(0,s.jsx)(n.h2,{id:"basedatatype",children:(0,s.jsx)(n.code,{children:"BaseDataType"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"BaseDataType(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Base class for datatype."}),"\n",(0,s.jsx)(n.h2,{id:"blob",children:(0,s.jsx)(n.code,{children:"Blob"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Blob(self,\n     db: 'Datalayer' = None,\n     *,\n     identifier: str = '',\n     bytes: bytearray | None = None,\n     builder: Callable) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bytes"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.code,{children:"bytes"})," blob."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Identifier of the blob."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"builder"}),(0,s.jsx)(n.td,{children:"Function to rebuild object from bytes."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"The Datalayer."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Placeholder for a blob of bytes."}),"\n",(0,s.jsx)(n.h2,{id:"basetype",children:(0,s.jsx)(n.code,{children:"BaseType"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"BaseType(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Datatype for encoding base instances."}),"\n",(0,s.jsx)(n.h2,{id:"componenttype",children:(0,s.jsx)(n.code,{children:"ComponentType"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ComponentType(self) -> None\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Datatype for encoding ",(0,s.jsx)(n.code,{children:"Component"})," instances."]}),"\n",(0,s.jsx)(n.h2,{id:"fileitem",children:(0,s.jsx)(n.code,{children:"FileItem"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"FileItem(self,\n     identifier: str,\n     db: 'Datalayer' = None,\n     *,\n     path: str = '') -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Identifier of the file."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"The Datalayer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Path to file."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Placeholder for a file."}),"\n",(0,s.jsx)(n.h2,{id:"array",children:(0,s.jsx)(n.code,{children:"Array"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Array(self,\n     *,\n     dtype: str = 'float64',\n     shape: Union[int,\n     Tuple[int]]) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dtype"}),(0,s.jsx)(n.td,{children:"numpy native datatype."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"shape"}),(0,s.jsx)(n.td,{children:"Shape of array."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Encode/ decode a numpy array as bytes."}),"\n",(0,s.jsx)(n.h2,{id:"basevector",children:(0,s.jsx)(n.code,{children:"BaseVector"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"BaseVector(self,\n     *,\n     dtype: str = 'float64',\n     shape: int) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"shape"}),(0,s.jsx)(n.td,{children:"size of vector"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dtype"}),(0,s.jsx)(n.td,{children:"Datatype of array to encode."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Base class for vector."}),"\n",(0,s.jsx)(n.h2,{id:"componentdict",children:(0,s.jsx)(n.code,{children:"ComponentDict"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ComponentDict(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Datatype for encoding dictionaries which are supported as dict by databackend."}),"\n",(0,s.jsx)(n.h2,{id:"componentlist",children:(0,s.jsx)(n.code,{children:"ComponentList"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ComponentList(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Datatype for encoding lists which are supported as list by databackend."}),"\n",(0,s.jsx)(n.h2,{id:"dill",children:(0,s.jsx)(n.code,{children:"Dill"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Dill(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Serializer with dill."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# This is also the default serializer.\nfrom superduper.components.datatype import DEFAULT_SERIALIZER\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dillencoder",children:(0,s.jsx)(n.code,{children:"DillEncoder"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DillEncoder(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Encoder with dill."}),"\n",(0,s.jsx)(n.h2,{id:"fieldtype",children:(0,s.jsx)(n.code,{children:"FieldType"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"FieldType(self,\n     identifier: str) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"The identifier of the datatype."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Field type to represent the type of a field in a table."}),"\n",(0,s.jsx)(n.p,{children:"This is a wrapper around a database's native datatypes."}),"\n",(0,s.jsx)(n.h2,{id:"file",children:(0,s.jsx)(n.code,{children:"File"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"File(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Type for encoding files on disk."}),"\n",(0,s.jsx)(n.h2,{id:"filedict",children:(0,s.jsx)(n.code,{children:"FileDict"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"FileDict(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Datatype for encoding dictionaries of files."}),"\n",(0,s.jsx)(n.h2,{id:"json",children:(0,s.jsx)(n.code,{children:"JSON"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"JSON(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Datatype for encoding json-able items."}),"\n",(0,s.jsx)(n.h2,{id:"nativevector",children:(0,s.jsx)(n.code,{children:"NativeVector"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"NativeVector(self,\n     *,\n     dtype: str = 'float',\n     shape: int) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dtype"}),(0,s.jsx)(n.td,{children:"Datatype of encoded arrays."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"shape"}),(0,s.jsx)(n.td,{children:"Shape of array."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Datatype for encoding vectors which are supported as list by databackend."}),"\n",(0,s.jsx)(n.h2,{id:"pickle",children:(0,s.jsx)(n.code,{children:"Pickle"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Pickle(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Serializer with pickle."}),"\n",(0,s.jsx)(n.h2,{id:"pickleencoder",children:(0,s.jsx)(n.code,{children:"PickleEncoder"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"PickleEncoder(self) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Pickle encoder."}),"\n",(0,s.jsx)(n.h2,{id:"saveable",children:(0,s.jsx)(n.code,{children:"Saveable"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Saveable(self,\n     identifier: str,\n     db: 'Datalayer' = None) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Identifier of the object."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"The Datalayer."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"A Saveable base class."}),"\n",(0,s.jsx)(n.h2,{id:"vector",children:(0,s.jsx)(n.code,{children:"Vector"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Vector(self,\n     *,\n     dtype: str = 'float64',\n     shape: int) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dtype"}),(0,s.jsx)(n.td,{children:"Datatype of encoded arrays."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"shape"}),(0,s.jsx)(n.td,{children:"Shape of array."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Vector meta-datatype for encoding vectors ready for search."})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>c});var s=d(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);