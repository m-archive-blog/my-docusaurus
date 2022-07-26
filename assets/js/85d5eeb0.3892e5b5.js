"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="jest howto",s={unversionedId:"Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",id:"version-0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",title:"jest howto",description:"[toc]",source:"@site/versioned_docs/version-0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto.md",sourceDirName:"Coding/JS/CodeQuality_eslint_prettier_jest",slug:"/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658857955,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"eslint prettier typescript",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-prettier-typescript"},next:{title:"electron-bugfix",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/Electron/electron-bugfix"}},l={},p=[{value:"top js test frameworks",id:"top-js-test-frameworks",level:2},{value:"<code>jest</code> ESM support",id:"jest-esm-support",level:2},{value:"<code>jest</code>  + <code>typescript</code> + <code>ESM</code>",id:"jest---typescript--esm",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jest-howto"},"jest howto"),(0,o.kt)("p",null,"[toc]"),(0,o.kt)("h2",{id:"top-js-test-frameworks"},"top js test frameworks"),(0,o.kt)("p",null,"top 1: ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")),(0,o.kt)("p",null,"top 2: ",(0,o.kt)("inlineCode",{parentName:"p"},"mocha")),(0,o.kt)("p",null,"others are: ",(0,o.kt)("inlineCode",{parentName:"p"},"jsamine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tape"),", etc."),(0,o.kt)("p",null,"In project of ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype-shortcodes"),", I found them using ",(0,o.kt)("inlineCode",{parentName:"p"},"tape")," and seems cabinet(\u5c0f\u5de7\u7684) and output-friendly."),(0,o.kt)("p",null,"Nevertheless, I used to use ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," which is mature and strong. So I didn't pretend to dive into ",(0,o.kt)("inlineCode",{parentName:"p"},"tape")," deeper."),(0,o.kt)("h2",{id:"jest-esm-support"},(0,o.kt)("inlineCode",{parentName:"h2"},"jest")," ESM support"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},'"type": "module"')," in package.json"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"transform: {}")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"jest.config.js")),(0,o.kt)("li",{parentName:"ol"},"use one of the following approach to run jest in ",(0,o.kt)("inlineCode",{parentName:"li"},"esm")," mode:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node --experimental-vm-modules ./node_modules/.bin/jest JS_FILE")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NODE_OPTIONS=--experimental-vm-modules npx jest JS_FILE")),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},'"scripts": {"test": "NODE_OPTIONS=--experimental-vm-modules npx jest"}')," in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", then run ",(0,o.kt)("inlineCode",{parentName:"li"},"test JS_FILE")," in command line"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"--experimental-vm-modules")," in webstorm jest configuration, and then click run button: ",(0,o.kt)("img",{alt:"picture 35",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640519248016-jest-howto-009c6056a3584775b30ffeafabe837f98f2218515f396a293faf23d7676c2ef8.png",width:"480"}))))),(0,o.kt)("p",null,"ref:"),(0,o.kt)("p",null,"official answer of jest"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/ecmascript-modules"},"ECMAScript Modules \xb7 Jest"))),(0,o.kt)("p",null,"stackoverflow solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/68956636/how-to-use-esm-tests-with-jest"},"javascript - How to use ESM tests with jest? - Stack Overflow"))),(0,o.kt)("h2",{id:"jest---typescript--esm"},(0,o.kt)("inlineCode",{parentName:"h2"},"jest"),"  + ",(0,o.kt)("inlineCode",{parentName:"h2"},"typescript")," + ",(0,o.kt)("inlineCode",{parentName:"h2"},"ESM")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("p",null,"recommend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/"},"ESM Support | ts-jest"))))}u.isMDXComponent=!0}}]);