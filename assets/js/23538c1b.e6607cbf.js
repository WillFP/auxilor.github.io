"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[7757],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(t),p=i,d=h["".concat(l,".").concat(p)]||h[p]||f[p]||r;return t?a.createElement(d,c(c({ref:n},u),{},{components:t})):a.createElement(d,c({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4146:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return f}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),c=["components"],o={title:"Configuring an Effect Chain",sidebar_position:2},l=void 0,s={unversionedId:"effects/configuring-a-chain",id:"effects/configuring-a-chain",title:"Configuring an Effect Chain",description:"Effect Chains",source:"@site/docs/effects/configuring-a-chain.md",sourceDirName:"effects",slug:"/effects/configuring-a-chain",permalink:"/effects/configuring-a-chain",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/configuring-a-chain.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring an Effect Chain",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuring an Effect",permalink:"/effects/configuring-an-effect"},next:{title:"Configuring a Condition",permalink:"/effects/configuring-a-condition"}},u={},f=[{value:"Effect Chains",id:"effect-chains",level:2},{value:"What is an Effect Chain?",id:"what-is-an-effect-chain",level:3},{value:"Reusable Chains",id:"reusable-chains",level:2},{value:"The Basic Layout",id:"the-basic-layout",level:3},{value:"Chain Config Example",id:"chain-config-example",level:3},{value:"Calling Your Chain",id:"calling-your-chain",level:3},{value:"Inline Chains",id:"inline-chains",level:2},{value:"The Basic Layout",id:"the-basic-layout-1",level:3},{value:"Example Inline Chain",id:"example-inline-chain",level:3},{value:"Run Types",id:"run-types",level:2}],h={toc:f};function p(e){var n=e.components,t=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"effect-chains"},"Effect Chains"),(0,r.kt)("h3",{id:"what-is-an-effect-chain"},"What is an Effect Chain?"),(0,r.kt)("p",null,"Effect chains are groups of effects that can be executed together. This is very useful if you want to create a\nchance-based effect with several components: chance is calculated independently on each trigger, so without chains,\nparticles and messages could send when the effects don't activate, and vice-versa."),(0,r.kt)("p",null,"Effects in chains run isolated, so applying a mutator to one effect in the chain will apply it only to that effect -\nhowever, you can specify a mutator to the parent effect which will be applied to all\neffects in the chain. The same works for delays, e.g. if an effect in a chain has a delay of 2, it won't hold up other\neffects down the chain."),(0,r.kt)("p",null,"Effect chains are also useful to re-use more complex logic, via custom arguments that you can specify.\nThese work like regular placeholders, and you reference them in your chains with ",(0,r.kt)("inlineCode",{parentName:"p"},"%<id>%"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"%size%")," if you\nhad a size argument."),(0,r.kt)("h2",{id:"reusable-chains"},"Reusable Chains"),(0,r.kt)("p",null,'One of the ways to create chains is in "chains.yml" in "/plugins/libreforge". This is great if you want to use chains more than once.'),(0,r.kt)("p",null,"Chains created here are universally accessible. You can use them in Enchants, Skills, Jobs or any other effect holders."),(0,r.kt)("p",null,"You don't need to specify triggers in your chain, these are handled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"run_chain")," effect (see below)."),(0,r.kt)("h3",{id:"the-basic-layout"},"The Basic Layout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"chains:\n  - id: <chain id>\n    effects:\n      - <effect 1>\n      - <effect 2>\n      - <effect 3>\n")),(0,r.kt)("h3",{id:"chain-config-example"},"Chain Config Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: mining_effect\n    effects:\n      - id: play_sound\n        args:\n          sound: BLOCK_AMETHYST_CLUSTER_BREAK\n          pitch: 0.7\n          volume: 10\n      - id: spawn_particle\n        args:\n          particle: soul\n          amount: 10\n        mutators:\n          - id: translate_location\n            args:\n              add_x: 0.5\n              add_y: 0.5\n              add_z: 0.5\n")),(0,r.kt)("p",null,"You can add or remove as many chains as you want. Then, if you want to call a chain, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"run_chain")," effect, like\nthis:"),(0,r.kt)("h3",{id:"calling-your-chain"},"Calling Your Chain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: run_chain\nargs:\n  chain: mining_effect # The ID of the chain\n  chance: 50 * (%player_health% / 20) # Example to demonstrate placeholders in config\n  cooldown: 2\ntriggers:\n  - mine_block\nfilters:\n  blocks:\n    - diamond_ore\n    - emerald_ore\n    - ancient_debris\n")),(0,r.kt)("p",null,"Custom arguments can be specified like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: run_chain\nargs:\n  chain: <chain id>\n  chain_args:\n    strength: %player_y% * 100 # You can put anything you want, doesn't only have to be numbers - you can use strings too!\n    ... add whichever arguments you use in your chain\n")),(0,r.kt)("h2",{id:"inline-chains"},"Inline Chains"),(0,r.kt)("p",null,"If you don't want to re-use chains, or if you prefer having them specified directly under the effect, you can specify\neffects inline instead."),(0,r.kt)("h3",{id:"the-basic-layout-1"},"The Basic Layout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n  - <effect 1>\n  - <effect 2>\n  - <effect 3>\ntriggers:\n  - mine_block\nargs:\n  every: 3 # You can use Optional Args here: https://plugins.auxilor.io/effects/configuring-an-effect#optional-arguments\n")),(0,r.kt)("h3",{id:"example-inline-chain"},"Example Inline Chain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n  - triggers:\n      - mine_block\n    filters:\n      blocks:\n        - diamond_ore\n        - emerald_ore\n        - ancient_debris\n    effects:\n      - id: play_sound\n        args:\n          sound: BLOCK_AMETHYST_CLUSTER_BREAK\n          pitch: 0.7\n          volume: 10\n      - id: spawn_particle\n        args:\n          particle: soul\n          amount: 10\n        mutators:\n          - id: translate_location\n            args:\n              add_x: 0.5\n              add_y: 0.5\n              add_z: 0.5\n")),(0,r.kt)("p",null,"Inline chains also support custom arguments, just like regular chains."),(0,r.kt)("h2",{id:"run-types"},"Run Types"),(0,r.kt)("p",null,"Effect chains also support several run types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"normal"),": All effects in the chain will be ran, sequentially, one after another"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cycle"),": Only one effect will be ran, and it cycles through each effect each time the chain is triggered"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"random"),": Only one effect will be ran, chosen at random each time the chain is triggered")),(0,r.kt)("p",null,"To specify the run type, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"run-type")," argument into config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"effects:\n  - triggers:\n      - alt_click\n    effects:\n      - <effect 1>\n      - <effect 2>\n      - <effect 3>\n    args:\n      run-type: random\n      chance: 30\n... filters, mutators, etc\n")),(0,r.kt)("p",null,"This is an alternative way of configuring your effects; you don't specify a top-level effect ID, instead you specify a\nlist of effects to be called. This can be thought of as being more trigger-centric; multiple triggers to multiple\neffects straight away, no worrying about the underlying chain."))}p.isMDXComponent=!0}}]);