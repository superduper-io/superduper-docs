"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[128],{6782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(4848),s=t(8453);const i={},o="Change data capture",a={id:"customize/cdc",title:"Change data capture",description:"Developers may build their own triggers which",source:"@site/docs/customize/cdc.md",sourceDirName:"customize",slug:"/customize/cdc",permalink:"/docs/customize/cdc",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/customize/cdc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Training models directly on your datastore",permalink:"/docs/customize/training_models"},next:{title:"Data integrations",permalink:"/docs/data_plugins/intro"}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"change-data-capture",children:"Change data capture"}),"\n",(0,r.jsxs)(n.p,{children:["Developers may build their own triggers which\nreact to incoming data, by subclassing ",(0,r.jsx)(n.code,{children:"CDC"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example, here is a simple class which downloads\nurls from incoming rows of data on inserts."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import CDC, trigger\n\nclass Downloader(CDC):\n    @trigger('insert')\n    def download(self, ids):\n        data = self.db[self.cdc_table].select_using_ids(ids).tolist()\n        for r in data:\n            filename = r['url'].split('/')[-1]\n            content = request.get(r['url'])\n            with open(filename, 'wb') as f:\n                f.write(content)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When this is applied, whenever new data is inserted into\nthe specified table, the ",(0,r.jsx)(n.code,{children:".download"})," trigger is run\non the inserted ",(0,r.jsx)(n.code,{children:"ids"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:">>> downloader = Downloader('my-downloader', cdc_table='docs')\n>>> db.apply(downloader)\n>>> db['docs'].insert([{'url': 'http://me.com/image1.png'}]).execute()\n... # `image1.png` is saved to file\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://superduper.io/",children:"Superduper enterprise"})," supports\nchange-data-capture in such a way that data does\nnot need to be inserted with the Superduper client."]}),(0,r.jsx)(n.p,{children:"This is advantageous in bigger teams, and when\ndevelopers are working with a variety of data-sources."})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);