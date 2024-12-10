"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8280],{9415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),a=t(8453);const i={},d="Pandas",o={id:"data_plugins/pandas",title:"Pandas",description:"Installation",source:"@site/docs/data_plugins/pandas.md",sourceDirName:"data_plugins",slug:"/data_plugins/pandas",permalink:"/docs/next/data_plugins/pandas",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/data_plugins/pandas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DuckDB",permalink:"/docs/next/data_plugins/duckdb"},next:{title:"sqlalchemy",permalink:"/docs/next/data_plugins/sqlalchemy"}},r={},l=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pandas",children:"Pandas"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install superduper_ibis\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:["Although ",(0,s.jsx)(n.code,{children:"pandas"})," is not a database, it came come in very handy for testing.\nTo connect, one specifies a list of ",(0,s.jsx)(n.code,{children:".csv"})," files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import glob\nfrom superduper import superduper\n\ndb = superduper(glob.glob('*.csv'))\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);