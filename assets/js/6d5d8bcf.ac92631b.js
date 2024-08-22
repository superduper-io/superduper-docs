"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8367],{7671:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>a});var t=i(4848),l=i(8453);const p={},s="Plugin",o={id:"apply_api/plugin",title:"Plugin",description:"- Supports a plugin system that dynamically loads Python modules and packages at runtime.",source:"@site/content/apply_api/plugin.md",sourceDirName:"apply_api",slug:"/apply_api/plugin",permalink:"/docs/apply_api/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/apply_api/plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/docs/apply_api/template"},next:{title:"Application",permalink:"/docs/apply_api/application"}},r={},a=[];function u(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"plugin",children:(0,t.jsx)(e.code,{children:"Plugin"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Supports a plugin system that dynamically loads Python modules and packages at runtime."}),"\n",(0,t.jsx)(e.li,{children:"Supports functioning as subcomponents, providing dependency support for custom models and other local code."}),"\n",(0,t.jsxs)(e.li,{children:["Capable of applying to a database and storing in the artifact_store, exporting as a ",(0,t.jsx)(e.code,{children:"superduper"})," format package for sharing with others."]}),"\n",(0,t.jsx)(e.li,{children:"Supports automatic installation of dependencies listed in the requirements.txt file under the plugin."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:(0,t.jsx)(e.strong,{children:"Usage pattern"})})}),"\n",(0,t.jsx)(e.p,{children:"Create plugin"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from superduper.components.plugin import Plugin\nplugin_path = 'path/to/my_module.py'\nmy_plugin = Plugin(path=plugin_path)\n"})}),"\n",(0,t.jsx)(e.p,{children:"Pip install without python code"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'from superduper.components.plugin import Plugin\n# If there is only one requirements file, the path must be a file that ends with requirements.txt.\nplugin = Plugin(path="deploy/installations/testenv_requirements.txt")\n'})}),"\n",(0,t.jsx)(e.p,{children:"Python package with requirements"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from superduper.components.plugin import Plugin\nplugin_path = 'path/to/my_package'\n# |_my_package\n#    |_requirements.txt\n#    |_file1.py\n#    |_file2.py\n#    |_sub_module\n#       |_file_a.py\nmy_plugin = Plugin(path=plugin_path)\n"})}),"\n",(0,t.jsx)(e.p,{children:"Python module with requirements"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"If you want to add requirements to a Python file, you can create a requirement_plugin as a submodule of this module.\nThen, the requirement_plugin will be loaded prior to the Python code."}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from superduper.components.plugin import Plugin\nrequirements_path = 'path/to/my_requirements.txt'\nrequirement_plugin = Plugin(path=requirements_path)\n\nplugin_path = 'path/to/my_module.py'\nmy_plugin = Plugin(path=plugin_path, plugins=[requirement_plugin])\n"})}),"\n",(0,t.jsx)(e.p,{children:"Export plugin"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from superduper.components.plugin import Plugin\nplugin_path = 'plugin_path'\nmy_plugin = Plugin(path=plugin_path)\n\nmy_plugin.export(\"exports/plugin\")\n"})}),"\n",(0,t.jsx)(e.p,{children:"Load plugin"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'from superduper.components.plugin import Plugin\nmy_plugin = Plugin.read("exports/plugin")\n'})}),"\n",(0,t.jsx)(e.p,{children:"As a sub-component"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'from utils import function\nclass Model:\n  def predict(self, X):\n    return function(X)\n\nfrom superduper.components.plugin import Plugin\nplugin = Plugin(path="./utils.py")\nmodel = Model(identifier="test", plugins=[plugin])\ndb.apply(model)\n\n# Then we can execute db.load("model", "test") from any location.\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:(0,t.jsx)(e.strong,{children:"Explanation"})})}),"\n",(0,t.jsx)(e.p,{children:"Initialization and installation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["During plugin initialization, ",(0,t.jsx)(e.code,{children:"superduper"})," loads the component\u2019s Python module or package into ",(0,t.jsx)(e.code,{children:"sys.modules"}),", allowing subsequent use of native import statements for plugin utilization."]}),"\n",(0,t.jsxs)(e.li,{children:["If the plugin package includes a ",(0,t.jsx)(e.code,{children:"requirements.txt"}),", dependencies are installed prior to loading the Python code."]}),"\n",(0,t.jsx)(e.li,{children:"The plugin is installed only once per process; if it detects that the same plugin has already been installed in the current runtime, the installation is skipped."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Usage"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["When exported locally, the plugin component saves all necessary dependency files for the plugins into the ",(0,t.jsx)(e.code,{children:"superduper"})," package, allowing for sharing to different locations."]}),"\n",(0,t.jsxs)(e.li,{children:["When executing ",(0,t.jsx)(e.code,{children:"db.apply(plugin)"}),", the necessary Python dependency environment files for the plugin are saved in the artifact_store. During ",(0,t.jsx)(e.code,{children:'db.load("plugin", "plugin_identifier")'}),", these files are downloaded to the local ",(0,t.jsx)(e.code,{children:"~/.superduper/plugin/"})," directory, followed by the initialization and installation of the plugin."]}),"\n",(0,t.jsx)(e.li,{children:"As a sub-component, Superduper\u2019s encode and decode logic ensures that the plugin is loaded prior to the parent component to maintain dependency integrity."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:(0,t.jsx)(e.strong,{children:"See also"})})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/api/components/plugin",children:"superduper.components.plugin"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var t=i(6540);const l={},p=t.createContext(l);function s(n){const e=t.useContext(p);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),t.createElement(p.Provider,{value:e},n.children)}}}]);