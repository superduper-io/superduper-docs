"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3948],{2163:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var d=a(4848),s=a(8453);const i={sidebar_position:5},t="Encoding data",c={id:"fundamentals/data_transmision",title:"Encoding data",description:"In AI, typical types of data are:",source:"@site/versioned_docs/version-0.4/fundamentals/data_transmision.md",sourceDirName:"fundamentals",slug:"/fundamentals/data_transmision",permalink:"/docs/fundamentals/data_transmision",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/fundamentals/data_transmision.md",tags:[],version:"0.4",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Datalayer",permalink:"/docs/fundamentals/datalayer_overview"},next:{title:"Vector-search",permalink:"/docs/fundamentals/vector_search_algorithm"}},r={},o=[{value:"<code>Document</code>",id:"document",level:3},{value:"<code>DataType</code>",id:"datatype",level:3},{value:"<code>Schema</code>",id:"schema",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"encoding-data",children:"Encoding data"}),"\n",(0,d.jsx)(n.p,{children:"In AI, typical types of data are:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Numbers"})," (integers, floats, etc.)"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Text"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Images"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Audio"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Videos"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"...bespoke in house data"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Most databases don't support any data other than numbers and text.\nSuperduper enables the use of these more interesting data-types using the ",(0,d.jsx)(n.code,{children:"Document"})," wrapper."]}),"\n",(0,d.jsx)(n.h3,{id:"document",children:(0,d.jsx)(n.code,{children:"Document"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"Document"})," wrapper, wraps dictionaries, and is the container which is used whenever\ndata is exchanged with your database. That means inputs, and queries, wrap dictionaries\nused with ",(0,d.jsx)(n.code,{children:"Document"})," and also results are returned wrapped with ",(0,d.jsx)(n.code,{children:"Document"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Whenever the ",(0,d.jsx)(n.code,{children:"Document"})," contains data which is in need of specialized serialization,\nthen the ",(0,d.jsx)(n.code,{children:"Document"})," instance contains calls to ",(0,d.jsx)(n.code,{children:"DataType"})," instances."]}),"\n",(0,d.jsx)(n.h3,{id:"datatype",children:(0,d.jsx)(n.code,{children:"DataType"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsxs)(n.a,{href:"../apply_api/datatype",children:[(0,d.jsx)(n.code,{children:"DataType"})," class"]}),", allows users to create and encoder custom datatypes, by providing\ntheir own encoder/decoder pairs."]}),"\n",(0,d.jsxs)(n.p,{children:["Here is an example of applying an ",(0,d.jsx)(n.code,{children:"DataType"})," to add an image to a ",(0,d.jsx)(n.code,{children:"Document"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"import pickle\nimport PIL.Image\nfrom superduper import DataType, Document\n\nimage = PIL.Image.open('my_image.jpg')\n\nmy_image_encoder = DataType(\n    identifier='my-pil',\n    encoder=lambda x, info: pickle.dumps(x),\n    decoder=lambda x, info: pickle.loads(x),\n)\n"})}),"\n",(0,d.jsx)(n.p,{children:"When all data is inserted into the database, each piece of data is encoded using the corresponding datatype."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:">> encoded_data = my_image_encoder.encode_data(image)\n>> encoded_data\nb'\\x80\\x04\\x95[\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x8c\\x12PIL.PngImagePlugin\\x94\\x8c\\x0cPngImageFile\\x94\\x93\\x94)\\x81\\x94]\\x94(}\\x94\\x8c\\x0ctransparency\\x94K\\x00s\\x8c\\x01P\\x94K\\x01K\\x01\\x86\\x94]\\x94(K\\x00K\\x00K\\x00eC\\x01\\x00\\x94eb.'\n"})}),"\n",(0,d.jsx)(n.p,{children:"When the data is retrieved from the database, it is decoded accordingly."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:">>> my_image_encoder.decode_data(encoded_data)\n<PIL.PngImagePlugin.PngImageFile image mode=P size=1x1>\n"})}),"\n",(0,d.jsxs)(n.p,{children:["By default, data encoded with ",(0,d.jsx)(n.code,{children:"DataType"})," is saved in the database, but developers\nmay alternatively save data in the ",(0,d.jsx)(n.code,{children:"db.artifact_store"})," instead."]}),"\n",(0,d.jsxs)(n.p,{children:["This may be achiever by specifying the ",(0,d.jsx)(n.code,{children:"encodable=..."})," parameter:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"my_image_encoder = DataType(\n    identifier='my-pil',\n    encoder=lambda x, info: pickle.dumps(x),\n    decoder=lambda x, info: pickle.loads(x),\n    encodable='artifact',    # saves to disk/ db.artifact_store\n    # encodable='lazy_artifact', # Just in time loading\n)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"schema",children:(0,d.jsx)(n.code,{children:"Schema"})}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"Schema"})," allows developers to connect named fields of dictionaries\nor columns of ",(0,d.jsx)(n.code,{children:"pandas.DataFrame"})," objects with ",(0,d.jsx)(n.code,{children:"DataType"})," instances."]}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"Schema"})," is used, in particular, for SQL databases/ tables, and for\nmodels that return multiple outputs."]}),"\n",(0,d.jsxs)(n.p,{children:["Here is an example ",(0,d.jsx)(n.code,{children:"Schema"}),", which is used together with text and image\nfields:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"schema = Schema('my-schema', fields={'my-text': 'str', 'my-img': my_image_encoder})\n"})}),"\n",(0,d.jsx)(n.p,{children:"All data is encoded using the schema when saved, and decoded using the schema when queried."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:">>> saved_data = Document({'my-img': image}).encode(schema)\n>>> saved_data\n{'my-img': b'\\x80\\x04\\x95[\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x8c\\x12PIL.PngImagePlugin\\x94\\x8c\\x0cPngImageFile\\x94\\x93\\x94)\\x81\\x94]\\x94(}\\x94\\x8c\\x0ctransparency\\x94K\\x00s\\x8c\\x01P\\x94K\\x01K\\x01\\x86\\x94]\\x94(K\\x00K\\x00K\\x00eC\\x01\\x00\\x94eb.',\n '_schema': 'my-schema',\n '_builds': {},\n '_files': {},\n '_blobs': {}}\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:">>> Document.decode(saved_data, schema=schema).unpack()\n{'my-img': <PIL.PngImagePlugin.PngImageFile image mode=P size=1x1>}\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var d=a(6540);const s={},i=d.createContext(s);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);