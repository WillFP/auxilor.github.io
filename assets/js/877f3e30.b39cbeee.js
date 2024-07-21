"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[12768],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=i,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],o={title:"The Item Lookup System",sidebar_position:3},s=void 0,m={unversionedId:"all-plugins/the-item-lookup-system",id:"all-plugins/the-item-lookup-system",title:"The Item Lookup System",description:"What is the Item Lookup System?",source:"@site/docs/all-plugins/the-item-lookup-system.md",sourceDirName:"all-plugins",slug:"/all-plugins/the-item-lookup-system",permalink:"/all-plugins/the-item-lookup-system",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/the-item-lookup-system.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The Item Lookup System",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What plugins do you support?",permalink:"/all-plugins/what-plugins-do-you-support"},next:{title:"The Entity Lookup System",permalink:"/all-plugins/the-entity-lookup-system"}},p={},u=[{value:"What is the Item Lookup System?",id:"what-is-the-item-lookup-system",level:2},{value:"Crafting Recipes",id:"crafting-recipes",level:2},{value:"Keys Explained",id:"keys-explained",level:2},{value:"Vanilla Materials",id:"vanilla-materials",level:4},{value:"Item Tags",id:"item-tags",level:4},{value:"Extra syntax",id:"extra-syntax",level:4},{value:"Modifiers",id:"modifiers",level:2},{value:"Using items in eco plugins",id:"using-items-in-eco-plugins",level:2},{value:"Using item tags in eco plugins",id:"using-item-tags-in-eco-plugins",level:2},{value:"Using items in MythicMobs",id:"using-items-in-mythicmobs",level:2},{value:"Using items in ShopGUIPlus",id:"using-items-in-shopguiplus",level:2},{value:"Using items from third-party plugins",id:"using-items-from-third-party-plugins",level:2},{value:"ItemsAdder",id:"itemsadder",level:3},{value:"Oraxen",id:"oraxen",level:3},{value:"ItemBridge",id:"itembridge",level:3}],d={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-is-the-item-lookup-system"},"What is the Item Lookup System?"),(0,l.kt)("p",null,"The item lookup system is how items are loaded from configs. It's designed to be extremely flexible and intuitive, allowing you to use custom items, stacks, enchantments, etc. wherever you want, without having to worry about\nwhat plugin they're from."),(0,l.kt)("h2",{id:"crafting-recipes"},"Crafting Recipes"),(0,l.kt)("p",null,"Crafting recipes in eco plugins often look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'recipe:\n  - ""\n  - "ecoitems:toughened_string 8 ? string 64"\n  - ""\n\n  - ""\n  - "netherite_chestplate || diamond_chestplate"\n  - ""\n\n  - "ecoitems:arachnid_oculus ? nether_star 2"\n  - ""\n  - "ecoitems:arachnid_oculus ? nether_star 2"\n')),(0,l.kt)("p",null,"While it may look meaningless, this system is straightforward once you understand how it works. A crafting recipe is written as a list of 9 strings, the first three being the top row (left to right),\nthe second three being the middle row (left to right), and the last three being the last row (left to right)."),(0,l.kt)("h2",{id:"keys-explained"},"Keys Explained"),(0,l.kt)("p",null,"In each string is the key for an item. A key looks one of a few ways"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A vanilla minecraft material ID: (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"golden_apple"),")"),(0,l.kt)("li",{parentName:"ul"},"An item from another plugin: (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"ecoitems:packmaster_tear"),")"),(0,l.kt)("li",{parentName:"ul"},"An exact item NBT tag: (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},'{id:"stone",Count:3,tag:{Name:"your name"}}'),")"),(0,l.kt)("li",{parentName:"ul"},"An item tag: (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"#talismans:talisman")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"#items_axes"),")")),(0,l.kt)("h4",{id:"vanilla-materials"},"Vanilla Materials"),(0,l.kt)("p",null,"By default, a vanilla material (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"diamond_pickaxe"),") will not accept custom items with the same material. For example, if you have an EcoItems item with ",(0,l.kt)("inlineCode",{parentName:"p"},"diamond_pickaxe")," as its base material,\nthen that item will not be recognised as a ",(0,l.kt)("inlineCode",{parentName:"p"},"diamond_pickaxe"),"."),(0,l.kt)("p",null,"If you want custom items to be accepted, place a ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," at the start, so ",(0,l.kt)("inlineCode",{parentName:"p"},'"diamond_pickaxe"')," becomes ",(0,l.kt)("inlineCode",{parentName:"p"},'"*diamond_pickaxe"'),". Outside of crafting recipes, most plugins use ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," items in their\ndefault configs for performance reasons."),(0,l.kt)("h4",{id:"item-tags"},"Item Tags"),(0,l.kt)("p",null,"Item tags are groups of items. A list of vanilla tags can be found ",(0,l.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Tag.html"},"here"),", and you can use them with ",(0,l.kt)("inlineCode",{parentName:"p"},"#tag"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"#signs"),"."),(0,l.kt)("p",null,"A list of custom item tags can be found later in this page."),(0,l.kt)("h4",{id:"extra-syntax"},"Extra syntax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," between two items means 'try to use the first item, but if it doesn't exist, use the second item'. You can chain these together."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"||")," groups two items, allowing either one of them to be used. You can chain these together."),(0,l.kt)("li",{parentName:"ul"},"You can specify stack size, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"string 64")," would mean a full stack of string.")),(0,l.kt)("p",null,"When using exact item NBT, you can't use ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"||"),", or other modifiers."),(0,l.kt)("h2",{id:"modifiers"},"Modifiers"),(0,l.kt)("p",null,"Items can  have modifiers applied to them. For example, lets say you're configuring the GUI for EcoSkills. You want it to be a player head with a texture, but you're not sure how to do that, because it looks like you have to just specify a material. Actually, in all eco plugins, wherever it asks for a material, it's actually doing a lookup. You can specify any of the following modifiers to it:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Enchantments:")," You can specify an enchantment with ",(0,l.kt)("inlineCode",{parentName:"li"},"<enchantment>:<level>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Skull Texture:")," If the material is a player head, you can specify the texture with ",(0,l.kt)("inlineCode",{parentName:"li"},"texture:<base64>"),". A list of skulls and textures can be found ",(0,l.kt)("a",{parentName:"li",href:"https://minecraft-heads.com/"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Player Head:")," If the material is a player head, you can specify a player using ",(0,l.kt)("inlineCode",{parentName:"li"},"head:<name>"),". You can also use placeholders, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"head:%player%")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Reforge:")," You can specify the reforge by adding ",(0,l.kt)("inlineCode",{parentName:"li"},"reforge:<id>")," to the key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name:")," You can specify the display name of an item with ",(0,l.kt)("inlineCode",{parentName:"li"},"name:<name>"),". You can have multiple words by surrounding the name with quotes: ",(0,l.kt)("inlineCode",{parentName:"li"},'name:"Long Name"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Item Flags:")," You can specify flags for the item to have, by dropping in any of ",(0,l.kt)("a",{parentName:"li",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html"},"these values")," (not case sensitive)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Unbreakable:")," You can make an item unbreakable by having the word ",(0,l.kt)("inlineCode",{parentName:"li"},"unbreakable")," in the flags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Custom Model Data:")," You can specify custom model data with ",(0,l.kt)("inlineCode",{parentName:"li"},"custom_model_data:<id>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Spawner Entity:")," You can specify the spawner entity with ",(0,l.kt)("inlineCode",{parentName:"li"},"entity:<id>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Leather Armor Color:")," You can specify the leather armor color with ",(0,l.kt)("inlineCode",{parentName:"li"},"color:#hex"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"color:#303030"))),(0,l.kt)("p",null,"These modifiers are only available on Paper 1.21+:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Armor Trims:")," You can specify armor trims with ",(0,l.kt)("inlineCode",{parentName:"li"},"trim:<material>:<pattern>"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"trim:emerald:snout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Fire Resistance:")," You can make an item fire resistant with ",(0,l.kt)("inlineCode",{parentName:"li"},"fire_resistant")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Enchantment Glint:")," You can give an enchantment glint with ",(0,l.kt)("inlineCode",{parentName:"li"},"glint")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Item Name:")," You can set the item name (different to display name) with ",(0,l.kt)("inlineCode",{parentName:"li"},"item_name:<name>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Durability:")," You can set the item durability with ",(0,l.kt)("inlineCode",{parentName:"li"},"max_damage:<durability>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Stack Size:")," You can set the max stack size with ",(0,l.kt)("inlineCode",{parentName:"li"},"max_stack_size:<size>"))),(0,l.kt)("p",null,"So, lets say you have an EcoMobs mob, and you want it to drop a rare custom weapon with extra modifiers already applied. Without the Item Lookup system, this wouldn't be possible, but thanks to it, you can just do this: ",(0,l.kt)("inlineCode",{parentName:"p"},"ecoitems:enlightened_blade razor:4 unbreaking:3 criticals:2 fire_aspect:2 reforge:mighty unbreakable hide_attributes custom_model_data:2")),(0,l.kt)("h2",{id:"using-items-in-eco-plugins"},"Using items in eco plugins"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,l.kt)("th",{parentName:"tr",align:null},"Item Lookup Key"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoArmor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecoarmor:set_<set>_<slot>")," (Optional: ",(0,l.kt)("inlineCode",{parentName:"td"},"_advanced"),") ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"ecoarmor:shard_<set>"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"ecoarmor:upgrade_crystal_<id>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoCrates"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecocrates:<crate>_key"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoItems"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecoitems:<id>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoMobs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecomobs:<id>_spawn_egg"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoPets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecopets:<id>_spawn_egg"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoScrolls"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecoscrolls:scroll_<id>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reforges"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reforges:stone_<id>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StatTrackers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stattrackers:<id>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Talismans"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"talismans:<id>"))))),(0,l.kt)("h2",{id:"using-item-tags-in-eco-plugins"},"Using item tags in eco plugins"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,l.kt)("th",{parentName:"tr",align:null},"Item Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoItems"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#ecoitems:item")),(0,l.kt)("td",{parentName:"tr",align:null},"Any EcoItems item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EcoScrolls"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#ecoscrolls:scroll")),(0,l.kt)("td",{parentName:"tr",align:null},"Any EcoScrolls scroll")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reforges"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#reforges:stone")),(0,l.kt)("td",{parentName:"tr",align:null},"Any reforge stone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reforges"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#reforges:reforged")),(0,l.kt)("td",{parentName:"tr",align:null},"Any item with a reforge present")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Talismans"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#talismans:talisman")),(0,l.kt)("td",{parentName:"tr",align:null},"Any talisman")))),(0,l.kt)("h2",{id:"using-items-in-mythicmobs"},"Using items in MythicMobs"),(0,l.kt)("p",null,"If you want to use a lookup item in MythicMobs, just do it like this: ",(0,l.kt)("inlineCode",{parentName:"p"},"eco{type=<lookup_key>}"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"eco{type=ecoitems:<id>}")),(0,l.kt)("h2",{id:"using-items-in-shopguiplus"},"Using items in ShopGUIPlus"),(0,l.kt)("p",null,"If you want to use a lookup item in ShopGUIPlus, just do it like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'type: item\nitem:\n  eco: "ecoitems:holy_flesh"\n  quantity: 1\nsellPrice: 7500\nslot: 27\n')),(0,l.kt)("h2",{id:"using-items-from-third-party-plugins"},"Using items from third-party plugins"),(0,l.kt)("p",null,"Sometimes custom item IDs are namespaced. In order to make this work, you have to specify them like ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin:namespace__key"),", where two underscores denote where the ",(0,l.kt)("inlineCode",{parentName:"p"},":")," would normally go."),(0,l.kt)("h3",{id:"itemsadder"},"ItemsAdder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# ItemsAdder configuration\ninfo:\n  namespace: my_items\nitems:\n  my_helmet:\n    display_name: "&9Custom Helmet"\n')),(0,l.kt)("p",null,"ItemsAdder items are namespaced, so for example if you have an ItemsAdder item called ",(0,l.kt)("inlineCode",{parentName:"p"},"crystal_pack:alumite_pickaxe"),", it would be ",(0,l.kt)("inlineCode",{parentName:"p"},"itemsadder:crystal_pack__alumite_pickaxe")," in config."),(0,l.kt)("p",null,"Using this in the Item Lookup System would look like: ",(0,l.kt)("inlineCode",{parentName:"p"},"itemsadder:my_items__my_helmet"),"."),(0,l.kt)("h3",{id:"oraxen"},"Oraxen"),(0,l.kt)("p",null,"To use custom items from Oraxen, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"oraxen:<id>"),"."),(0,l.kt)("h3",{id:"itembridge"},"ItemBridge"),(0,l.kt)("p",null,"To use custom items from ItemBridge, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"itembridge:saved__<id>"),". If it's an item from a supported plugin, it's ",(0,l.kt)("inlineCode",{parentName:"p"},"itembridge:<prefix>__<id>")))}k.isMDXComponent=!0}}]);