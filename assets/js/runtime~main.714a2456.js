(()=>{"use strict";var e,a,f,d,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,d,b)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({54:"f3c12a36",93:"385b79ea",118:"37929fa4",128:"0717dd7a",171:"15188deb",194:"83ecad38",238:"dfb0be5a",282:"2e20c034",355:"d377ddcd",428:"4c044718",513:"41b3955c",515:"04c77836",524:"1235ecdf",544:"bf1e45ff",648:"4d9556b2",675:"2055cfcb",690:"8acbaada",702:"711a8627",763:"2bbb7522",886:"62dbb66a",890:"40713b6d",892:"f32947c7",894:"fc4ab638",928:"44fb9699",930:"83a36eab",1023:"c798e891",1029:"c298f3cf",1078:"5b348a22",1232:"83bf7eff",1345:"c2fdd6da",1356:"a375e91f",1412:"9da4a813",1531:"798c4c93",1662:"dd30c070",1677:"08252410",1849:"03ef3f47",1856:"a87686a6",1931:"ec3f407b",1940:"ca11686e",1957:"ae2b2860",1968:"9ced7b8c",2006:"94b72456",2009:"6bcce942",2034:"c228cb76",2081:"233a85bd",2189:"18638a09",2215:"99e542b8",2287:"9bb76ec2",2297:"b34a7748",2482:"ef9ae06c",2634:"c4f5d8e4",2643:"a41b2ade",2686:"05395515",2692:"f643d3e4",2752:"419623e1",2763:"62ca1199",2921:"c55df278",3019:"1d3e4e06",3042:"3b7eb7c2",3055:"7194a798",3087:"6fa3877b",3130:"64d4ef5e",3177:"e8584723",3252:"ba1a04a1",3314:"f2854d7e",3447:"96349e8b",3464:"5f886413",3490:"7d0a25ae",3512:"b9502df3",3521:"7313e201",3552:"21967721",3648:"b086c4f8",3673:"53edecf7",3686:"99f89dee",3701:"c93b2933",3787:"67d55876",3859:"b363b27e",3922:"25bb02ca",3981:"9f9ff765",3985:"227c0d44",3994:"a81319d0",4134:"393be207",4213:"420a58e5",4233:"c3ebf06a",4274:"1ef1a19a",4279:"df203c0f",4460:"89af75ad",4522:"b29ca9fa",4543:"cafdd536",4562:"fc52027f",4625:"8469ad0b",4663:"6a84d84c",4690:"d04d026e",4695:"d41c5652",4711:"294be284",4721:"ea88a124",4730:"02df618b",4732:"2e007add",4767:"3ccce252",4787:"3720c009",4813:"e8c8cc33",4922:"7032d555",4979:"64f76e2b",4987:"03577208",5029:"a30ec626",5052:"af42aea1",5101:"5f4a1a48",5151:"1970d58f",5155:"9429e41d",5209:"5495260c",5304:"afa4762d",5324:"7888d0a1",5340:"2a079d26",5462:"6f9d191c",5488:"6db5bf02",5503:"2bf03670",5529:"5adbe830",5576:"29612489",5580:"79798458",5597:"136363d2",5605:"7473b418",5622:"972389da",5680:"5ef96787",5690:"e48dfa8a",5727:"fd8abc8f",5797:"2c891c91",5866:"ff12df8f",5873:"fe1e9be9",6025:"79406354",6061:"1f391b9e",6149:"1c654b6e",6202:"dfd03f8d",6226:"c297c087",6240:"18064781",6286:"d95b4333",6297:"f4352a50",6311:"4e6d04a0",6375:"35f73545",6459:"a7c67b2f",6470:"764899d4",6475:"248a6ebf",6507:"1a0dfba1",6513:"b0982ef6",6557:"c1da3213",6574:"d929e7f1",6578:"b9ee241e",6644:"effe4b0c",6674:"7a3dfb39",6700:"6897a815",6721:"ee5ff568",6737:"e31b3323",6886:"5378ec2b",6939:"7fb9b7e2",6969:"14eb3368",6990:"240b91a0",6991:"517db92b",6992:"1ae0b5d1",6997:"904aab89",7023:"7d1bd2a1",7092:"5ab96652",7098:"a7bd4aaa",7108:"49a2b359",7238:"71360824",7319:"dd1f7b86",7325:"10215d05",7339:"98fdcce0",7379:"693c1451",7421:"a4e7b00c",7439:"ccb3a314",7470:"e846188c",7498:"90e274d6",7532:"55960ee5",7584:"4e7886eb",7588:"3820cca5",7604:"ed6ac473",7652:"661e372a",7662:"03711b54",7693:"22de565a",7752:"f47ddba5",7804:"e5b56af3",7807:"6f9fa2ac",7810:"9f3e3b87",7867:"69644b0c",7880:"0ad09467",7948:"b3c3d862",7971:"8bc8ea96",8059:"1a689685",8073:"74ee53c8",8092:"67acace9",8284:"06d313e5",8293:"d385b91d",8304:"3b12d3a9",8367:"6d5d8bcf",8401:"17896441",8420:"24aef7c3",8430:"41c4f8cb",8471:"db1de7e2",8526:"1d7ad70a",8581:"935f2afb",8750:"6551f4bd",8764:"92916da5",8771:"232a0c01",8786:"eb04fe94",8825:"353a1fb9",8884:"db3e82c6",8939:"db32f1df",9006:"c95cc949",9025:"19151276",9036:"8d49395e",9039:"b60e567e",9048:"a94703ab",9142:"32a0df43",9153:"d24fd525",9309:"8c3afeb4",9316:"5e46a273",9431:"261bf267",9437:"86ef9950",9479:"53f76f3d",9480:"0fdcc7d8",9585:"e1fec8db",9647:"5e95c892",9701:"83dccc88",9782:"4c51ea24",9804:"21b82e27",9814:"4e1a05e0",9924:"359210d9",9939:"768b0bb5",9992:"b7956aed"}[e]||e)+"."+{54:"76c5c683",93:"3ac43188",118:"68b0dc85",128:"eba73113",171:"80363d2a",194:"7d11faef",238:"a4d78e65",282:"d9f36ef3",355:"f2003538",428:"92e748e9",513:"bc8b86ec",515:"a39af1c3",524:"1d31942b",544:"f60a592c",648:"d19aebcd",675:"a0159830",690:"5a1c59be",702:"5394b334",763:"d4945379",886:"7f44ba35",890:"27323c86",892:"10b33a94",894:"5cd51946",928:"4c387f84",930:"42b66702",1023:"da29cac6",1029:"2a9be4a0",1078:"85caa186",1232:"f1ae745b",1345:"e958382f",1356:"828a0f79",1412:"77b99946",1531:"81843263",1662:"5ba4c4c4",1677:"df0f9d0a",1849:"5b030e3f",1856:"8fc87139",1931:"b1e60e1e",1940:"829473c3",1957:"3ae283f9",1968:"08b37498",2006:"647ce7fe",2009:"f122bd75",2034:"a12e944a",2081:"7281daf1",2189:"8d05c190",2215:"6677855f",2237:"412f29be",2287:"7fdb0540",2297:"6a133fb4",2482:"eb321ef3",2634:"95840ef8",2643:"068660e7",2686:"9cb2972c",2692:"fb70792a",2752:"85c8e81c",2763:"00c7e90b",2921:"bc68d505",3019:"c83f1015",3042:"76e8fb59",3055:"5a23bfd4",3087:"e3c7c208",3130:"b63786fa",3177:"44c3442c",3252:"2269d4c3",3314:"78dc3fd2",3447:"5b1bfeba",3464:"8c1f53f6",3490:"ab737dfe",3512:"de049248",3521:"4d1ca900",3552:"6c0e854f",3648:"5746d239",3673:"a1c48e66",3686:"2257a643",3701:"3a796597",3787:"325c6f9f",3859:"76073a57",3922:"408a144e",3981:"5be3e8f2",3985:"f6a58fea",3994:"8d0a2975",4134:"a08b6248",4213:"a028afe2",4233:"685359db",4274:"afd45b52",4279:"0abe6670",4460:"b17e1047",4522:"557eff62",4543:"5e603b89",4562:"b33d25f7",4625:"af0d631f",4663:"303ad1fd",4690:"f59910aa",4695:"d11fca60",4711:"5cafc49d",4721:"63c25772",4730:"21d881dd",4732:"b5aeb307",4767:"0ec40565",4787:"dab56193",4813:"52ae8473",4922:"18211aef",4979:"be7fff39",4987:"a3962bb6",5029:"58d183d6",5052:"ab3f4dc8",5101:"2e46e136",5151:"f34ecfa7",5155:"f0446a09",5209:"7c92dc0c",5304:"8ef08c91",5324:"9ea2bf0c",5340:"6b80dafd",5448:"d2b29b95",5462:"32bf3368",5488:"2d429ed2",5503:"9a1b9199",5529:"04fbbf3e",5576:"04d11578",5580:"cb1dba8e",5597:"587a6fbf",5605:"aab921c5",5622:"cfef578e",5680:"20b6c20a",5690:"24631e40",5727:"48d39544",5797:"da269442",5866:"496eacf1",5873:"4cb1cb15",6025:"3a3b1e6e",6061:"dd383035",6149:"b10504a8",6202:"abd87a65",6226:"cb98ad64",6240:"a2f3772a",6286:"38373ca2",6297:"2178b463",6311:"f793ee71",6375:"689d959b",6459:"0730b922",6470:"707791ec",6475:"e47bb495",6507:"fa757724",6513:"7e44070b",6557:"ddfc007b",6574:"ec8cd9c7",6578:"95aacc8e",6644:"1e91d21c",6674:"62531ec9",6700:"62498a9e",6721:"f0b77cdc",6737:"d704dc39",6886:"347b805e",6939:"56dd12b4",6969:"cc9a716e",6990:"962ae99d",6991:"99a419f1",6992:"a9c57062",6997:"a247e5b1",7023:"c0d36cc1",7092:"d9ad8024",7098:"de157085",7108:"e3b0b610",7238:"429bae97",7319:"64fe4df0",7325:"2141c261",7339:"2afa46e9",7379:"1acd732e",7421:"f5eeb20b",7439:"a04dfa23",7470:"5cca849e",7498:"f7b483eb",7532:"9f305160",7584:"f1d0aeb9",7588:"c2b8109c",7604:"30ae2f39",7652:"0d9e0379",7662:"b3c0b5e2",7693:"aba17b3b",7752:"e45eb464",7804:"f1d2bc60",7807:"c91cbad6",7810:"26542772",7867:"56460fe5",7880:"0413eba6",7948:"3ccc60c0",7971:"af3a33eb",8059:"b470aaa8",8073:"7e1c5847",8092:"54853f9e",8284:"f182af5f",8293:"864d5115",8304:"72a627e2",8367:"08c351ec",8401:"5725402e",8420:"adcf05c5",8430:"68880a37",8471:"cafc0e45",8526:"1dfeb442",8581:"f60b0be4",8750:"95b8dab3",8764:"4946f0df",8771:"bd2f6a84",8786:"727db94e",8825:"20e85273",8884:"8024cb05",8939:"f35ef347",9006:"7e20a65a",9025:"4c7a0081",9036:"861ae058",9039:"3583fad5",9048:"4f7dbafe",9142:"7e2608f4",9153:"997f265e",9309:"46d2c196",9316:"d20ccc56",9431:"ba1dc5eb",9437:"533a643c",9479:"0412526a",9480:"2d635ecf",9585:"756445f5",9647:"331a88ed",9701:"2b5151f3",9782:"168f606d",9804:"54821a41",9814:"c8da7595",9924:"f24037dc",9939:"fd654172",9992:"49f6c61e"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="newdocs:",r.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/superduper-docs/",r.gca=function(e){return e={17896441:"8401",18064781:"6240",19151276:"9025",21967721:"3552",29612489:"5576",71360824:"7238",79406354:"6025",79798458:"5580",f3c12a36:"54","385b79ea":"93","37929fa4":"118","0717dd7a":"128","15188deb":"171","83ecad38":"194",dfb0be5a:"238","2e20c034":"282",d377ddcd:"355","4c044718":"428","41b3955c":"513","04c77836":"515","1235ecdf":"524",bf1e45ff:"544","4d9556b2":"648","2055cfcb":"675","8acbaada":"690","711a8627":"702","2bbb7522":"763","62dbb66a":"886","40713b6d":"890",f32947c7:"892",fc4ab638:"894","44fb9699":"928","83a36eab":"930",c798e891:"1023",c298f3cf:"1029","5b348a22":"1078","83bf7eff":"1232",c2fdd6da:"1345",a375e91f:"1356","9da4a813":"1412","798c4c93":"1531",dd30c070:"1662","08252410":"1677","03ef3f47":"1849",a87686a6:"1856",ec3f407b:"1931",ca11686e:"1940",ae2b2860:"1957","9ced7b8c":"1968","94b72456":"2006","6bcce942":"2009",c228cb76:"2034","233a85bd":"2081","18638a09":"2189","99e542b8":"2215","9bb76ec2":"2287",b34a7748:"2297",ef9ae06c:"2482",c4f5d8e4:"2634",a41b2ade:"2643","05395515":"2686",f643d3e4:"2692","419623e1":"2752","62ca1199":"2763",c55df278:"2921","1d3e4e06":"3019","3b7eb7c2":"3042","7194a798":"3055","6fa3877b":"3087","64d4ef5e":"3130",e8584723:"3177",ba1a04a1:"3252",f2854d7e:"3314","96349e8b":"3447","5f886413":"3464","7d0a25ae":"3490",b9502df3:"3512","7313e201":"3521",b086c4f8:"3648","53edecf7":"3673","99f89dee":"3686",c93b2933:"3701","67d55876":"3787",b363b27e:"3859","25bb02ca":"3922","9f9ff765":"3981","227c0d44":"3985",a81319d0:"3994","393be207":"4134","420a58e5":"4213",c3ebf06a:"4233","1ef1a19a":"4274",df203c0f:"4279","89af75ad":"4460",b29ca9fa:"4522",cafdd536:"4543",fc52027f:"4562","8469ad0b":"4625","6a84d84c":"4663",d04d026e:"4690",d41c5652:"4695","294be284":"4711",ea88a124:"4721","02df618b":"4730","2e007add":"4732","3ccce252":"4767","3720c009":"4787",e8c8cc33:"4813","7032d555":"4922","64f76e2b":"4979","03577208":"4987",a30ec626:"5029",af42aea1:"5052","5f4a1a48":"5101","1970d58f":"5151","9429e41d":"5155","5495260c":"5209",afa4762d:"5304","7888d0a1":"5324","2a079d26":"5340","6f9d191c":"5462","6db5bf02":"5488","2bf03670":"5503","5adbe830":"5529","136363d2":"5597","7473b418":"5605","972389da":"5622","5ef96787":"5680",e48dfa8a:"5690",fd8abc8f:"5727","2c891c91":"5797",ff12df8f:"5866",fe1e9be9:"5873","1f391b9e":"6061","1c654b6e":"6149",dfd03f8d:"6202",c297c087:"6226",d95b4333:"6286",f4352a50:"6297","4e6d04a0":"6311","35f73545":"6375",a7c67b2f:"6459","764899d4":"6470","248a6ebf":"6475","1a0dfba1":"6507",b0982ef6:"6513",c1da3213:"6557",d929e7f1:"6574",b9ee241e:"6578",effe4b0c:"6644","7a3dfb39":"6674","6897a815":"6700",ee5ff568:"6721",e31b3323:"6737","5378ec2b":"6886","7fb9b7e2":"6939","14eb3368":"6969","240b91a0":"6990","517db92b":"6991","1ae0b5d1":"6992","904aab89":"6997","7d1bd2a1":"7023","5ab96652":"7092",a7bd4aaa:"7098","49a2b359":"7108",dd1f7b86:"7319","10215d05":"7325","98fdcce0":"7339","693c1451":"7379",a4e7b00c:"7421",ccb3a314:"7439",e846188c:"7470","90e274d6":"7498","55960ee5":"7532","4e7886eb":"7584","3820cca5":"7588",ed6ac473:"7604","661e372a":"7652","03711b54":"7662","22de565a":"7693",f47ddba5:"7752",e5b56af3:"7804","6f9fa2ac":"7807","9f3e3b87":"7810","69644b0c":"7867","0ad09467":"7880",b3c3d862:"7948","8bc8ea96":"7971","1a689685":"8059","74ee53c8":"8073","67acace9":"8092","06d313e5":"8284",d385b91d:"8293","3b12d3a9":"8304","6d5d8bcf":"8367","24aef7c3":"8420","41c4f8cb":"8430",db1de7e2:"8471","1d7ad70a":"8526","935f2afb":"8581","6551f4bd":"8750","92916da5":"8764","232a0c01":"8771",eb04fe94:"8786","353a1fb9":"8825",db3e82c6:"8884",db32f1df:"8939",c95cc949:"9006","8d49395e":"9036",b60e567e:"9039",a94703ab:"9048","32a0df43":"9142",d24fd525:"9153","8c3afeb4":"9309","5e46a273":"9316","261bf267":"9431","86ef9950":"9437","53f76f3d":"9479","0fdcc7d8":"9480",e1fec8db:"9585","5e95c892":"9647","83dccc88":"9701","4c51ea24":"9782","21b82e27":"9804","4e1a05e0":"9814","359210d9":"9924","768b0bb5":"9939",b7956aed:"9992"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>d=e[a]=[f,b]));f.push(d[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,b,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunknewdocs=self.webpackChunknewdocs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();