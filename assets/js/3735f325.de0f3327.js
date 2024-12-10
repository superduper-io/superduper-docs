"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3343],{1794:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=r(4848),s=r(8453);const i={},t=void 0,c={id:"api/misc/annotations",title:"annotations",description:"superduper.misc.annotations",source:"@site/versioned_docs/version-0.4/api/misc/annotations.md",sourceDirName:"api/misc",slug:"/api/misc/annotations",permalink:"/docs/api/misc/annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/versioned_docs/version-0.4/api/misc/annotations.md",tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"utils",permalink:"/docs/api/ext/utils"},next:{title:"download",permalink:"/docs/api/misc/download"}},a={},l=[{value:"<code>deprecated</code>",id:"deprecated",level:2},{value:"<code>component</code>",id:"component",level:2},{value:"<code>build_importable</code>",id:"build_importable",level:2},{value:"<code>extract_parameters</code>",id:"extract_parameters",level:2},{value:"<code>importable</code>",id:"importable",level:2},{value:"<code>replace_parameters</code>",id:"replace_parameters",level:2},{value:"<code>requires_packages</code>",id:"requires_packages",level:2},{value:"<code>warn_plugin_deprecated</code>",id:"warn_plugin_deprecated",level:2},{value:"<code>SuperDuperDeprecationWarning</code>",id:"superduperdeprecationwarning",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"superduper.misc.annotations"})})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/misc/annotations.py",children:"Source code"})}),"\n",(0,d.jsx)(n.h2,{id:"deprecated",children:(0,d.jsx)(n.code,{children:"deprecated"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"deprecated(f)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"f"}),(0,d.jsx)(n.td,{children:"function to deprecate"})]})})]}),"\n",(0,d.jsx)(n.p,{children:"Decorator to mark a function as deprecated."}),"\n",(0,d.jsx)(n.p,{children:"This will result in a warning being emitted when the function is used."}),"\n",(0,d.jsx)(n.h2,{id:"component",children:(0,d.jsx)(n.code,{children:"component"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"component(*schema: Dict)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"schema"}),(0,d.jsx)(n.td,{children:"schema for the component"})]})})]}),"\n",(0,d.jsx)(n.p,{children:"Decorator for creating a component."}),"\n",(0,d.jsx)(n.h2,{id:"build_importable",children:(0,d.jsx)(n.code,{children:"build_importable"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"build_importable(*,\n     db=None,\n     importable=None)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"db"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Datalayer"})," instance"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"importable"}),(0,d.jsx)(n.td,{children:"importable path"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Build an importable from a path."}),"\n",(0,d.jsx)(n.h2,{id:"extract_parameters",children:(0,d.jsx)(n.code,{children:"extract_parameters"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"extract_parameters(doc)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"doc"}),(0,d.jsx)(n.td,{children:"Sphinx-styled docstring. Docstring may have multiple lines"})]})})]}),"\n",(0,d.jsx)(n.p,{children:"Extracts and organizes parameter descriptions from a Sphinx-styled docstring."}),"\n",(0,d.jsx)(n.h2,{id:"importable",children:(0,d.jsx)(n.code,{children:"importable"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"importable(f)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"f"}),(0,d.jsx)(n.td,{children:"function to make importable, decorated with @importable"})]})})]}),"\n",(0,d.jsx)(n.p,{children:"Make a function serializable as an importable."}),"\n",(0,d.jsx)(n.h2,{id:"replace_parameters",children:(0,d.jsx)(n.code,{children:"replace_parameters"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"replace_parameters(doc,\n     placeholder: str = '!!!')\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"doc"}),(0,d.jsx)(n.td,{children:"Sphinx-styled docstring."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"placeholder"}),(0,d.jsx)(n.td,{children:"Placeholder to replace parameters with."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Replace parameters in a doc-string with a placeholder."}),"\n",(0,d.jsx)(n.h2,{id:"requires_packages",children:(0,d.jsx)(n.code,{children:"requires_packages"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"requires_packages(*packages,\n     warn=False)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"packages"}),(0,d.jsx)(n.td,{children:"list of tuples of packages each tuple of the form (import_name, lower_bound/None, upper_bound/None, install_name/None)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"warn"}),(0,d.jsx)(n.td,{children:"if True, warn instead of raising an exception"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Require the packages to be installed."}),"\n",(0,d.jsx)(n.p,{children:"E.g. ('sklearn', '0.1.0', '0.2.0', 'scikit-learn')"}),"\n",(0,d.jsx)(n.h2,{id:"warn_plugin_deprecated",children:(0,d.jsx)(n.code,{children:"warn_plugin_deprecated"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"warn_plugin_deprecated(name)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"name of the plugin"})]})})]}),"\n",(0,d.jsx)(n.p,{children:"Warn that a plugin is deprecated."}),"\n",(0,d.jsx)(n.h2,{id:"superduperdeprecationwarning",children:(0,d.jsx)(n.code,{children:"SuperDuperDeprecationWarning"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"SuperDuperDeprecationWarning(self,\n     /,\n     *args,\n     **kwargs)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"args"}),(0,d.jsxs)(n.td,{children:["*args of ",(0,d.jsx)(n.code,{children:"DeprecationWarning"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"kwargs"}),(0,d.jsxs)(n.td,{children:["**kwargs of ",(0,d.jsx)(n.code,{children:"DeprecationWarning"})]})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Specialized Deprecation Warning for fine grained filtering control."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var d=r(6540);const s={},i=d.createContext(s);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);