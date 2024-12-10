"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3955],{7184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),r=t(8453);const s={},c="Cron Job",a={id:"apply_api/cron_job",title:"Cron Job",description:"- Iterate computations, queries and actions on a crontab",source:"@site/docs/apply_api/cron_job.md",sourceDirName:"apply_api",slug:"/apply_api/cron_job",permalink:"/docs/next/apply_api/cron_job",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/apply_api/cron_job.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CDC",permalink:"/docs/next/apply_api/cdc"},next:{title:"Execute API",permalink:"/docs/next/execute_api/overview"}},i={},d=[];function p(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"cron-job",children:(0,o.jsx)(n.code,{children:"Cron Job"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Iterate computations, queries and actions on a crontab"}),"\n",(0,o.jsx)(n.li,{children:"Can be deployed on Superduper Enterprise"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,o.jsxs)(n.p,{children:["Cron-job can take any actions relating to ",(0,o.jsx)(n.code,{children:"db"}),"\nwhich is loaded as an attribute of the ",(0,o.jsx)(n.code,{children:"Component"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import datetime\nfrom superduper.components.cron_job import CronJob\n\nclass MyCronJob(CronJob):\n    table: str\n\n    # overwriting this function defines actions to be \n    # taken on a schedule\n    def run(self):\n        results = list(self.db[self.table].select())\n\n        date = str(datetime.now())\n\n        with open(f'{date}.bak', 'wb') as f:\n            json.dump(results)\n        \n        # for example, backing up a collection every day\n        os.system(f'aws s3 cp {date}.bak s3://my-bucket/{date}.bak')\n\ncron_job = MyCronJob(table='documents', schedule='0 0 * * * *')\n\ndb.apply(cron_job)\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);