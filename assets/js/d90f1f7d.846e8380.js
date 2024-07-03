"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6456],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),p=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(g.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),o=p(n),N=r,u=o["".concat(g,".").concat(N)]||o[N]||k[N]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var d={};for(var g in e)hasOwnProperty.call(e,g)&&(d[g]=e[g]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},402:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],d={title:"All Triggers",sidebar_position:7},g=void 0,p={unversionedId:"effects/all-triggers",id:"effects/all-triggers",title:"All Triggers",description:"Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect",source:"@site/docs/effects/all-triggers.md",sourceDirName:"effects",slug:"/effects/all-triggers",permalink:"/effects/all-triggers",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-triggers.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"All Triggers",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"victim_to_owner",permalink:"/effects/all-mutators/victim_to_owner"},next:{title:"The Points System",permalink:"/effects/points"}},m={},k=[],o={toc:k};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect\nis active"),(0,l.kt)("p",null,"Triggered effects also produce a value, which can be referenced with ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect#placeholders"},"their placeholders"),",\nand are used in plugins like EcoSkills, EcoPets, EcoJobs (etc) for levelling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Provided"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alt_click")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when using Right Click on most items, Left Click on those that have a default right click functionality"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bite")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a fish bites on your rod"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"block_item_drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a mined block drops loot"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bow_attack")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when shooting an entity with a bow and arrow (or crossbow)"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"breed")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when breeding entities together"),(0,l.kt)("td",{parentName:"tr",align:null},"The experience received")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"brew")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when brewing a potion in a brewing stand"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"brew_ingredient")),(0,l.kt)("td",{parentName:"tr",align:null},"Same as ",(0,l.kt)("inlineCode",{parentName:"td"},"brew"),", but passes the ingredient as the item"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buy_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when buying an item in a shop ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoShop")),(0,l.kt)("td",{parentName:"tr",align:null},"The price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cast_rod")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when casting a fishing line"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"catch_entity")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when hooking onto an entity with a fishing rod"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"catch_fish")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when catching a fish"),(0,l.kt)("td",{parentName:"tr",align:null},"The experience dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"catch_fish_fail")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when failing to catch a fish"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"change_armor")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when changing armor"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"change_world")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when changing world"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"click_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when right-clicking on a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"click_entity")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when right-clicking on an entity"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"collect_envoy")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when collecting an envoy crate ",(0,l.kt)("strong",{parentName:"td"},"Requires AxEnvoy")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"complete_advancement")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when completing an advancement"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"complete_quest")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when completing a quest ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoQuests")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"complete_task")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when completing a task ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoQuests")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"consume")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on item consumption"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"craft")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when crafting an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items crafted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"damage_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when damaging an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"death")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on death from any sources"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disable")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an item / enchant / etc disables"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"drop_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when dropping an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"empty_bucket")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when emptying a bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enable")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an item / enchant / etc enables"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enchant_<type>")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when enchanting an item with a certain type of enchantment ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoEnchants")),(0,l.kt)("td",{parentName:"tr",align:null},"The xp cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enchant_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when enchanting an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The xp cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enter_bed")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when entering a bed"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enter_region")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when entering a region ",(0,l.kt)("strong",{parentName:"td"},"Requires WorldGuard")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_break_door")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity breaks a door"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_catch_fire_from_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity catches fire from a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_catch_fire_from_entity")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity catches fire from an entity"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity takes damage"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_damage_by_entity")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity takes damage from another entity"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_death")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity dies"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_item_drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a killed entity drops loot"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_spawn")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity spawns"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_target")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity targets another entity"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_teleport")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when an entity teleports"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fall_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taking fall damage"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fill_bucket")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when filling a bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_hunger")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining hunger points"),(0,l.kt)("td",{parentName:"tr",align:null},"The hunger gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_job_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining job experience points ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoJobs")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_pet_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining pet experience points ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoPets")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_skill_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining skill experience points ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoSkills")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_task_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining task XP ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoQuests")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining experience points"),(0,l.kt)("td",{parentName:"tr",align:null},"The xp gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"global_static_%interval%")),(0,l.kt)("td",{parentName:"tr",align:null},"Run every x ticks for the server, eg ",(0,l.kt)("inlineCode",{parentName:"td"},"global_static_20")," would run every second"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when hitting an enemy with a projectile in the head"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heal")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when regaining health"),(0,l.kt)("td",{parentName:"tr",align:null},"The health regained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hold_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when changing your held item"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hook_in_ground")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a fishing rod hook hits the ground"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"item_break")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when breaking any item in your inventory (durability)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jobs_level_up")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up a job ",(0,l.kt)("strong",{parentName:"td"},"Requires Jobs Reborn")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"join")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when joining the server"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"join_job")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when joining a job ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoJobs")),(0,l.kt)("td",{parentName:"tr",align:null},"The job level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jump")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when Jumping (pressing space)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kill")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a player kills a player or entity"),(0,l.kt)("td",{parentName:"tr",align:null},"The victim's max health")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leave")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when leaving the server"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leave_bed")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when leaving a bed"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leave_job")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when leaving a job ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoJobs")),(0,l.kt)("td",{parentName:"tr",align:null},"The job level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leave_region")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when leaving a region ",(0,l.kt)("strong",{parentName:"td"},"Requires WorldGuard")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"left_click_npc")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when left-clicking an NPC ",(0,l.kt)("strong",{parentName:"td"},"Requires Citizens")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The new item level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_job")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up a job ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoJobs")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_pet")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up a pet ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoPets")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_skill")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoSkills")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up XP"),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lose_hunger")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when losing hunger"),(0,l.kt)("td",{parentName:"tr",align:null},"The hunger lost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lose_potion_effect")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when losing a potion effect"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"melee_attack")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when injuring an entity with a melee attack"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mine_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when mining a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mine_block_progress")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when damaging a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"move")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on all movement: looking around, walking"),(0,l.kt)("td",{parentName:"tr",align:null},"The distance moved")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pick_up_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when picking up an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"place_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when placing a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"potion_effect")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining a potion effect"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectile_hit")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectile_launch")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reel_in")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when reeling in a fishing rod"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"regen_magic")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when regenerating magic ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoSkills")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"respawn")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when respawning"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"right_click_npc")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when right-clicking an NPC ",(0,l.kt)("strong",{parentName:"td"},"Requires Citizens")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"run_command")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when running a command"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scyther_auto_collect")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when autocollecting crops with a scyther hoe ",(0,l.kt)("strong",{parentName:"td"},"Requires Scyther")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scyther_auto_sell")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when autoselling crops with a scyther hoe ",(0,l.kt)("strong",{parentName:"td"},"Requires Scyther")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sell_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when selling an item in a shop"),(0,l.kt)("td",{parentName:"tr",align:null},"The price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"send_message")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when sending a message"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shear_entity")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when shearing an entity"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shield_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when blocking an attack with a shield"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage blocked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shoot_bow")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when shooting a bow"),(0,l.kt)("td",{parentName:"tr",align:null},"The force the bow was shot at between 0 and 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"smelt")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when smelting an item in a furnace"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items smelted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"smith_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when smithing an item in a smithing table"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_quest")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when starting a quest ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoQuests")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"static_%interval%")),(0,l.kt)("td",{parentName:"tr",align:null},"Run every x ticks, eg ",(0,l.kt)("inlineCode",{parentName:"td"},"static_20")," would run every second"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swap_hands")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when swapping items in hands (F by default)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swing")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when swinging an item, hand or weapon ",(0,l.kt)("strong",{parentName:"td"},"Requires Paper")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"take_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taking damage from any source"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"take_entity_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taking damage from an entity or player"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tame_animal")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taming an animal"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"teleport")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when teleporting"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle_flight")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when changing the flight state"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle_sneak")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when changing the sneak state"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle_sprint")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when changing the sprint state"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trident_attack")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on injuring an entity with a thrown trident ",(0,l.kt)("strong",{parentName:"td"},"Requires Paper")),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"villager_trade")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when trading with a villager ",(0,l.kt)("strong",{parentName:"td"},"Requires Paper")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience the villager gains")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"win_raid")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a player wins a raid"),(0,l.kt)("td",{parentName:"tr",align:null},"The level of bad omen")))))}N.isMDXComponent=!0}}]);