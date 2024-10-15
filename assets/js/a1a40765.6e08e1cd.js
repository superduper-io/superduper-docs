"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6794],{7021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(4848),r=t(8453);const i={},a=void 0,o={id:"api/misc/runnable/runnable",title:"runnable",description:"superduper.misc.runnable.runnable",source:"@site/docs/api/misc/runnable/runnable.md",sourceDirName:"api/misc/runnable",slug:"/api/misc/runnable/",permalink:"/docs/api/misc/runnable/",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/api/misc/runnable/runnable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hash",permalink:"/docs/api/misc/hash"},next:{title:"queue_chunker",permalink:"/docs/api/misc/runnable/queue_chunker"}},l={},c=[{value:"<code>Event</code>",id:"event",level:2},{value:"<code>Runnable</code>",id:"runnable",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"superduper.misc.runnable.runnable"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/misc/runnable/runnable.py",children:"Source code"})}),"\n",(0,s.jsx)(n.h2,{id:"event",children:(0,s.jsx)(n.code,{children:"Event"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Event(self,\n     *on_set: Callable[[],\n     NoneType])\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"on_set"}),(0,s.jsx)(n.td,{children:"Callbacks to call when the event is set"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"An Event that calls a list of callbacks when set or cleared."}),"\n",(0,s.jsxs)(n.p,{children:["A threading.Event that also calls back to zero or more functions when its state\nis set or reset, and has a ",(0,s.jsx)(n.strong,{children:"bool"})," method."]}),"\n",(0,s.jsx)(n.p,{children:"Note that the callback might happen on some completely different thread,\nso these functions cannot block"}),"\n",(0,s.jsx)(n.h2,{id:"runnable",children:(0,s.jsx)(n.code,{children:"Runnable"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Runnable(self)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A base class for things that start, run, finish, stop and join."}),"\n",(0,s.jsx)(n.p,{children:"Stopping is requesting immediate termination: finishing is saying that\nthere is no more work to be done, finish what you are doing."}),"\n",(0,s.jsxs)(n.p,{children:["A Runnable has two ",(0,s.jsx)(n.code,{children:"Event"}),"s, ",(0,s.jsx)(n.code,{children:"running"})," and ",(0,s.jsx)(n.code,{children:"stopped"}),", and you can either\n",(0,s.jsx)(n.code,{children:"wait"})," on either of these conditions to be true, or add a callback function\n(which must be non-blocking) to either of them."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"running"})," is not set until the setup for a ",(0,s.jsx)(n.code,{children:"Runnable"})," has finished;\n",(0,s.jsx)(n.code,{children:"stopped"})," is not set until all the computations in a thread have ceased."]}),"\n",(0,s.jsx)(n.p,{children:"An Runnable can be used as a context manager:"}),"\n",(0,s.jsx)(n.p,{children:"with runnable:"}),"\n",(0,s.jsx)(n.h1,{id:"the-runnable-is-running-by-this-point",children:"The runnable is running by this point"}),"\n",(0,s.jsx)(n.p,{children:"do_stuff()"}),"\n",(0,s.jsx)(n.h1,{id:"by-the-time-you-get-to-here-the-runnable-has-completely-stopped",children:"By the time you get to here, the runnable has completely stopped"}),"\n",(0,s.jsx)(n.p,{children:"The above means roughly the same as"}),"\n",(0,s.jsx)(n.p,{children:"runnable.start()\ntry:\ndo_stuff()\nrunnable.finish()\nrunnable.join()\nfinally:\nrunnable.stop()"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);