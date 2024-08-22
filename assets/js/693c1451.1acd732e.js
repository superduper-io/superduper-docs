"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7379],{8379:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(4848),n=t(8453);const i={},c="Key methods of Model",r={id:"models/key_methods",title:"Key methods of Model",description:"All usage in superduper proceeds by changing or setting the attributes of a Component",source:"@site/content/models/key_methods.md",sourceDirName:"models",slug:"/models/key_methods",permalink:"/superduper-docs/docs/models/key_methods",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/models/key_methods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/superduper-docs/docs/models/overview"},next:{title:"Computing model outputs with listeners",permalink:"/superduper-docs/docs/models/daemonizing_models_with_listeners"}},o={},l=[];function h(e){const d={a:"a",code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.h1,{id:"key-methods-of-model",children:["Key methods of ",(0,s.jsx)(d.code,{children:"Model"})]}),"\n",(0,s.jsxs)(d.p,{children:["All usage in ",(0,s.jsx)(d.code,{children:"superduper"})," proceeds by changing or setting the attributes of a ",(0,s.jsx)(d.code,{children:"Component"}),"\nand then calling ",(0,s.jsx)(d.code,{children:"db.apply"}),"."]}),"\n",(0,s.jsxs)(d.p,{children:["However it may be useful to know that the following methods specific to ",(0,s.jsx)(d.code,{children:"Model"})," play a key role.\nSee ",(0,s.jsx)(d.a,{href:"../apply_api/overview#key-methods",children:"here"})," for an overview of key-methods specific to ",(0,s.jsx)(d.code,{children:"Component"}),"."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Method"}),(0,s.jsx)(d.th,{children:"Description"}),(0,s.jsx)(d.th,{children:"Optional"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.predict"})}),(0,s.jsx)(d.td,{children:"Predict on a single data-point"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.predict_batches"})}),(0,s.jsx)(d.td,{children:"Predict on batches of data-points"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.predict_in_db"})}),(0,s.jsxs)(d.td,{children:["Predict and save predictions in ",(0,s.jsx)(d.code,{children:"db"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.predict_in_db_job"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"predict_in_db"})," as compute job"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.validate"})}),(0,s.jsx)(d.td,{children:"Validate on datasets with metrics"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.validate_in_db"})}),(0,s.jsxs)(d.td,{children:["Validate on datasets with metrics and save in ",(0,s.jsx)(d.code,{children:"db"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.validate_in_db_job"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"validate_in_db"})," as job"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"FALSE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.fit"})}),(0,s.jsx)(d.td,{children:"Fit on datasets"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"TRUE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.fit_in_db"})}),(0,s.jsxs)(d.td,{children:["Fit on data in ",(0,s.jsx)(d.code,{children:"db"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"TRUE"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"Model.fit_in_db_job"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:".fit_in_db"})," as job"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"TRUE"})})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,d,t)=>{t.d(d,{R:()=>c,x:()=>r});var s=t(6540);const n={},i=s.createContext(n);function c(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);