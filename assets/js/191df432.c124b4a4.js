"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8670],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return r?n.createElement(m,c(c({ref:t},f),{},{components:r})):n.createElement(m,c({ref:t},f))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59233:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],s={},i="create_boss_bar",l={unversionedId:"effects/all-effects/create_boss_bar",id:"effects/all-effects/create_boss_bar",title:"create_boss_bar",description:"Triggered Effect",source:"@site/docs/effects/all-effects/create_boss_bar.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/create_boss_bar",permalink:"/effects/all-effects/create_boss_bar",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/create_boss_bar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"consume_held_item",permalink:"/effects/all-effects/consume_held_item"},next:{title:"create_hologram",permalink:"/effects/all-effects/create_hologram"}},f={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create_boss_bar"},(0,a.kt)("inlineCode",{parentName:"h1"},"create_boss_bar")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Creates a boss bar and shows it to the player"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: create_boss_bar\n  args:\n    id: my_boss_bar # The ID of the boss bar\n    name: "Example Boss Bar" # The name of the boss bar\n    color: white # The boss bar color (pink, blue, red, green, yellow, purple, white)\n    style: progress # The boss bar style (progress, notched_6, notched_10, notched_12, notched_20)\n    progress: 100 # The percentage completion of the boss bar\n  ...other config (eg triggers, filters, mutators, etc)\n')))}b.isMDXComponent=!0}}]);