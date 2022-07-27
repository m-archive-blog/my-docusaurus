"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6347],{67911:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(67294),l=r(86010),n=r(9809),o=r(89078),s=r(39130),c=r(33084);const i="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",p="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";function f({sidebar:e}){return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},e.title),a.createElement("ul",{className:(0,l.Z)(u,"clean-list")},e.items.map((e=>a.createElement("li",{key:e.permalink,className:d},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:g},e.title)))))))}var b=r(15043);function h({sidebar:e}){return a.createElement("ul",{className:"menu__list"},e.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return a.createElement(b.Zo,{component:h,props:e})}function E({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?a.createElement(v,{sidebar:e}):a.createElement(f,{sidebar:e}):null}var P=Object.defineProperty,y=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function w(e){const t=e,{sidebar:r,toc:o,children:s}=t,c=((e,t)=>{var r={};for(var a in e)N.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&y)for(var a of y(e))t.indexOf(a)<0&&O.call(e,a)&&(r[a]=e[a]);return r})(t,["sidebar","toc","children"]),i=r&&r.items.length>0;return a.createElement(n.Z,((e,t)=>{for(var r in t||(t={}))N.call(t,r)&&_(e,r,t[r]);if(y)for(var r of y(t))O.call(t,r)&&_(e,r,t[r]);return e})({},c),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:r}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),o&&a.createElement("div",{className:"col col--2"},o))))}},22367:(e,t,r)=>{r.d(t,{Z:()=>ae});var a=r(67294),l=r(86010),n=r(28973),o=r(25026);function s({children:e,className:t}){var r;const{frontMatter:l,assets:s}=(0,n.C)(),{withBaseUrl:c}=(0,o.C)(),i=null!=(r=s.image)?r:l.image;return a.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&a.createElement("meta",{itemProp:"image",content:c(i,{absolute:!0})}),e)}var c=r(39130);const i="title_f1Hy";function m({className:e}){const{metadata:t,isBlogPostPage:r}=(0,n.C)(),{permalink:o,title:s}=t,m=r?"h1":"h2";return a.createElement(m,{className:(0,l.Z)(i,e),itemProp:"headline"},r?s:a.createElement(c.Z,{itemProp:"url",to:o},s))}var u=r(33084),d=r(11368);const p=["zero","one","two","few","many","other"];function g(e){return p.filter((t=>e.includes(t)))}const f={locale:"en",pluralForms:g(["one","other"]),select:e=>1===e?"one":"other"};function b(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:g(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),f}}),[e])}function h(){const e=b();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const l=r.select(t),n=r.pluralForms.indexOf(l);return a[Math.min(n,a.length-1)]}(r,t,e)}}const v="container_mt6G";function E({readingTime:e}){const t=function(){const{selectMessage:e}=h();return t=>{const r=Math.ceil(t);return e(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return a.createElement(a.Fragment,null,t(e))}function P({date:e,formattedDate:t}){return a.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function y(){return a.createElement(a.Fragment,null," \xb7 ")}function N({className:e}){const{metadata:t}=(0,n.C)(),{date:r,formattedDate:o,readingTime:s}=t;return a.createElement("div",{className:(0,l.Z)(v,"margin-vert--md",e)},a.createElement(P,{date:r,formattedDate:o}),void 0!==s&&a.createElement(a.Fragment,null,a.createElement(y,null),a.createElement(E,{readingTime:s})))}var O=Object.defineProperty,_=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function j(e){return e.href?a.createElement(c.Z,((e,t)=>{for(var r in t||(t={}))w.call(t,r)&&k(e,r,t[r]);if(_)for(var r of _(t))Z.call(t,r)&&k(e,r,t[r]);return e})({},e)):a.createElement(a.Fragment,null,e.children)}function C({author:e,className:t}){const{name:r,title:n,url:o,imageURL:s,email:c}=e,i=o||c&&`mailto:${c}`||void 0;return a.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",t)},s&&a.createElement(j,{href:i,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(j,{href:i,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),n&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const I="authorCol_Hf19",T="imageOnlyAuthorRow_pa_O",B="imageOnlyAuthorCol_G86a";var x=Object.defineProperty,F=Object.defineProperties,M=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&D(e,r,t[r]);if(L)for(var r of L(t))A.call(t,r)&&D(e,r,t[r]);return e};function $({className:e}){const{metadata:{authors:t},assets:r}=(0,n.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?T:"row",e)},t.map(((e,t)=>{var n,s,c;return a.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?B:I),key:t},a.createElement(C,{author:(s=U({},e),c={imageURL:null!=(n=r.authorsImageUrls[t])?n:e.imageURL},F(s,M(c)))}))})))}function S(){return a.createElement("header",null,a.createElement(m,null),a.createElement(N,null),a.createElement($,null))}var H=r(67023),z=r(16740);function G({children:e,className:t}){const{isBlogPostPage:r}=(0,n.C)();return a.createElement("div",{id:r?H.blogPostContainerID:void 0,className:(0,l.Z)("markdown",t),itemProp:"articleBody"},a.createElement(z.Z,null,e))}var V=r(97090),Y=r(2549),q=Object.defineProperty,J=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function X(){return a.createElement("b",null,a.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function ee(e){const t=e,{blogPostTitle:r}=t,l=((e,t)=>{var r={};for(var a in e)K.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&J)for(var a of J(e))t.indexOf(a)<0&&Q.call(e,a)&&(r[a]=e[a]);return r})(t,["blogPostTitle"]);return a.createElement(c.Z,((e,t)=>{for(var r in t||(t={}))K.call(t,r)&&W(e,r,t[r]);if(J)for(var r of J(t))Q.call(t,r)&&W(e,r,t[r]);return e})({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:r})},l),a.createElement(X,null))}const te="blogPostFooterDetailsFull_mRVl";function re(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:r,title:o,editUrl:s,hasTruncateMarker:c}=e,i=!t&&c,m=r.length>0;return m||i||s?a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&te)},m&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":i})},a.createElement(Y.Z,{tags:r})),t&&s&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(V.Z,{editUrl:s})),i&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},a.createElement(ee,{blogPostTitle:o,to:e.permalink}))):null}function ae({children:e,className:t}){const r=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(s,{className:(0,l.Z)(r,t)},a.createElement(S,null),a.createElement(G,null,e),a.createElement(re,null))}},28973:(e,t,r)=>{r.d(t,{C:()=>s,n:()=>o});var a=r(67294),l=r(21651);const n=a.createContext(null);function o({children:e,content:t,isBlogPostPage:r=!1}){const l=function({content:e,isBlogPostPage:t}){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return a.createElement(n.Provider,{value:l},e)}function s(){const e=(0,a.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}}}]);