"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7807],{2612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(4848),d=n(8453);const r={},i=void 0,o={id:"api/jobs/tasks",title:"tasks",description:"superduper.jobs.tasks",source:"@site/content/api/jobs/tasks.md",sourceDirName:"api/jobs",slug:"/api/jobs/tasks",permalink:"/superduper-docs/docs/api/jobs/tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/api/jobs/tasks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"task_workflow",permalink:"/superduper-docs/docs/api/jobs/task_workflow"},next:{title:"annotations",permalink:"/superduper-docs/docs/api/misc/annotations"}},c={},l=[{value:"<code>callable_job</code>",id:"callable_job",level:2},{value:"<code>method_job</code>",id:"method_job",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"superduper.jobs.tasks"})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/jobs/tasks.py",children:"Source code"})}),"\n",(0,s.jsx)(t.h2,{id:"callable_job",children:(0,s.jsx)(t.code,{children:"callable_job"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"callable_job(cfg,\n     function_to_call,\n     args,\n     kwargs,\n     job_id,\n     dependencies=(),\n     db: Optional[ForwardRef('Datalayer')] = None)\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cfg"}),(0,s.jsx)(t.td,{children:"configuration"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"function_to_call"}),(0,s.jsx)(t.td,{children:"function to call"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"args"}),(0,s.jsx)(t.td,{children:"positional arguments to pass to the function"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kwargs"}),(0,s.jsx)(t.td,{children:"keyword arguments to pass to the function"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"job_id"}),(0,s.jsx)(t.td,{children:"unique identifier for this job"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dependencies"}),(0,s.jsx)(t.td,{children:"other jobs that this job depends on"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"datalayer to use"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Run a function in the database."}),"\n",(0,s.jsx)(t.h2,{id:"method_job",children:(0,s.jsx)(t.code,{children:"method_job"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"method_job(cfg,\n     type_id,\n     identifier,\n     method_name,\n     args,\n     kwargs,\n     job_id,\n     dependencies=(),\n     db: Optional[ForwardRef('Datalayer')] = None)\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cfg"}),(0,s.jsx)(t.td,{children:"user config"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"type_id"}),(0,s.jsx)(t.td,{children:"type of component"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"identifier"}),(0,s.jsx)(t.td,{children:"identifier of component"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"method_name"}),(0,s.jsx)(t.td,{children:"name of method to run"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"args"}),(0,s.jsx)(t.td,{children:"positional arguments to pass to the method"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"kwargs"}),(0,s.jsx)(t.td,{children:"keyword arguments to pass to the method"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"job_id"}),(0,s.jsx)(t.td,{children:"unique identifier for this job"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dependencies"}),(0,s.jsx)(t.td,{children:"other jobs that this job depends on"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db"}),(0,s.jsx)(t.td,{children:"datalayer to use"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Run a method on a component in the database."})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const d={},r=s.createContext(d);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);