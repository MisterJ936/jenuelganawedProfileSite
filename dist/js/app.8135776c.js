(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);h&&h(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return l.p+"js/"+({about:"about",codechallenge:"codechallenge",contact:"contact",experience:"experience",notfound:"notfound",work:"work"}[e]||e)+"."+{about:"5d91a7aa",codechallenge:"ff1e7140",contact:"3f95f84b",experience:"c77ad9fb",notfound:"786ff6f1",work:"39b51774"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,codechallenge:1,contact:1,experience:1,work:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",codechallenge:"codechallenge",contact:"contact",experience:"experience",notfound:"notfound",work:"work"}[e]||e)+"."+{about:"9bb8c757",codechallenge:"4a0517fa",contact:"af2ddab9",experience:"9fa6374d",notfound:"31d6cfe0",work:"6a47d292"}[e]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],h.parentNode.removeChild(h),n(r)},h.href=i,0!==h.href.indexOf(window.location.origin+"/")&&(h.crossOrigin="use-credentials");var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="use-credentials");var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20e3":function(e,t,n){},3859:function(e,t,n){"use strict";n("5046")},"4e21":function(e,t,n){},"4e3c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jbutton"},[n("div",{attrs:{href:e.site,rel:"external"}},[n("p",[n("span",{staticClass:"bg"}),n("span",{staticClass:"base"}),n("span",{staticClass:"text"},[e._t("default")],2)])])])},o=[],i={name:"jbutton",props:{site:{type:String,default:""}}},r=i,s=(n("f105"),n("2877")),l=Object(s["a"])(r,a,o,!1,null,null,null);t["a"]=l.exports},5046:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Intro"),n("NavigationBar"),n("ThemeChanger"),n("ResumeDownloader"),n("main",[n("vue-page-transition",{attrs:{name:"fade-in-up"}},[n("router-view")],1)],1),n("SocialNetworkSite"),n("Footer")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-network"},[n("slide-y-down-transition",{attrs:{delay:1300}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show&&!e.$store.state.modalShow,expression:"show && !$store.state.modalShow"}],staticClass:"social-media social-meida-orientation social-media-placement"},[n("ul",{staticClass:"social-media-list"},e._l(e.links,(function(t){return n("li",{key:t.link},[n("a",{attrs:{href:t.link,target:"_blank",rel:"noreferrer",icon:""}},[n("v-icon",{staticClass:"social-buttons",attrs:{size:"20"}},[e._v(e._s(t.icon))])],1)])})),0)])]),n("slide-y-down-transition",{attrs:{delay:1600}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show&&!e.$store.state.modalShow,expression:"show && !$store.state.modalShow"}],staticClass:"email-media social-meida-orientation social-media-placement"},[n("div",{staticClass:"email-media-link"},[n("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])])])])],1)},s=[],l=n("c4fa"),c=n("7c76"),u={name:"SocialMediaLinks",components:{SlideYDownTransition:c["c"]},data:function(){return{links:l["b"],email:l["a"],show:!1}},mounted:function(){this.show=!0}},d=u,h=(n("63dc"),n("2877")),p=n("6544"),m=n.n(p),f=n("132d"),g=Object(h["a"])(d,r,s,!1,null,null,null),w=g.exports;m()(g,{VIcon:f["a"]});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slide-y-up-transition",{attrs:{delay:900}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show&&!e.$store.state.modalShow,expression:"show && !$store.state.modalShow"}]},[n("v-tabs",{staticClass:"navigation-tab",class:e.tabTop?"navigation-tab-top":"",style:e.tabShow?"top: 0px;":"top: -60px",attrs:{centered:"",height:e.tabTop?"70px":"50px"}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.name,attrs:{to:t.to}},[n("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),1),n("div",{staticClass:"responsive-nav-tab"},[n("v-btn",{staticClass:"nav-button-show",attrs:{color:"primary",large:"",icon:"",elevation:"0",rounded:"","aria-label":"Open Drawer"},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{large:""}},[e._v(e._s(e.menuIcon))])],1),n("v-dialog",{staticClass:"nav-dialog",attrs:{fullscreen:"","hide-overlay":"",transition:"slide-x-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-btn",{staticStyle:{position:"absolute","z-index":"20",right:"10px",top:"10px"},attrs:{"x-large":"",icon:"","aria-label":"Close Drawer"},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{"x-large":""}},[e._v(e._s(e.closeIcon))])],1),n("div",{staticStyle:{"padding-top":"50px"}},[n("v-tabs",{staticClass:"show-navigation-tab",attrs:{vertical:""}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.name,attrs:{to:t.to},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),1)],1)],1)],1)],1)])},b=[],y=n("94ed"),k=[{icon:y["g"],name:"About Me",to:"/about"},{icon:y["p"],name:"Experience",to:"/experience"},{icon:y["i"],name:"Work",to:"/work"},{icon:y["b"],name:"Code Challenge",to:"/codechallenge"},{icon:y["f"],name:"Contact Me",to:"/contact"}],S={name:"Navigation",components:{SlideYUpTransition:c["d"]},data:function(){return{tabs:k,tabShow:!0,tabTop:!0,menuIcon:y["x"],dialog:!1,closeIcon:y["d"],show:!1}},mounted:function(){var e=this,t=window.pageYOffset;window.onscroll=function(){var n=window.pageYOffset;e.tabShow=t>n,t=n,window.pageYOffset<2?e.tabTop=!0:e.tabTop=!1},this.show=!0}},x=S,C=(n("eec8"),n("8336")),_=n("169a"),I=n("71a3"),T=n("fe57"),j=Object(h["a"])(x,v,b,!1,null,null,null),B=j.exports;m()(j,{VBtn:C["a"],VDialog:_["a"],VIcon:f["a"],VTab:I["a"],VTabs:T["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SlideYUpTransition",{attrs:{delay:1700}},[n("footer",{directives:[{name:"show",rawName:"v-show",value:e.show&&!e.$store.state.modalShow,expression:"show && !$store.state.modalShow"}],staticClass:"footer"},[n("div",{staticClass:"social-links"},[n("ul",e._l(e.socials,(function(t){return n("li",{key:t.name},[n("a",{attrs:{href:t.link,target:"_blank",rel:"noreferrer"}},[n("v-icon",{staticClass:"icon"},[e._v(e._s(t.icon))])],1)])})),0),n("a",{attrs:{href:"mailto:jenuelganawed936@gmail",rel:"author"}},[e._v(" jenuelganawed936@gmail.com ")])]),n("div",{staticClass:"footer-text"},[n("a",{attrs:{href:"https://github.com/MisterJ936/jenuel-portfolio-v2",target:"_blank",rel:"noreferrer"}},[n("div",[n("span",[e._v("Built by Jenuel Ganawed using "),n("v-icon",{attrs:{small:"",color:"primary"}},[e._v(e._s(e.vueIcon))]),e._v(" Vue.js")],1)])])])])])},E=[],M={data:function(){return{vueIcon:y["D"],socials:l["b"],show:!1}},components:{SlideYUpTransition:c["d"]},mounted:function(){this.show=!0}},D=M,O=(n("ea59"),Object(h["a"])(D,P,E,!1,null,null,null)),A=O.exports;m()(O,{VIcon:f["a"]});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":100,"offset-x":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"change-theme-btn",attrs:{icon:"","aria-label":"Change-Theme"}},"v-btn",o,!1),a),[n("v-icon",{staticClass:"icon"},[e._v(e._s(e.colorIcon))])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-card",[n("v-list",{attrs:{color:"lightBackground"}},[n("v-list-item",[n("v-list-item-content",e._l(e.themes,(function(t){return n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.name,staticClass:"theme-chooser",on:{click:function(n){return e.changeTheme(t)}}},[n("p",{staticStyle:{margin:"0px"}},[e._v(e._s(t.name))]),n("div",{staticClass:"colors-flex"},e._l(t.dark,(function(e,t){return n("div",{key:t,staticClass:"colors-show",style:"background-color:"+e})})),0)])})),0)],1)],1)],1)],1)},J=[],L=(n("4160"),n("b0c0"),n("b64b"),n("159b"),[{name:"Main Theme",dark:{background:"#0a192f",lightBackground:"#112240",primary:"#64ffda",liteprimary:"#172a45",lightestPrimary:"#303C55",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Arthur Theme",dark:{background:"#1C1C1C",lightBackground:"#363535",primary:"#82E0AA",liteprimary:"#E8AE5B",lightestPrimary:"#BBAA99",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Atom Theme",dark:{background:"#161719",lightBackground:"#000000",primary:"#FD5FF1",liteprimary:"#B9B6FC",lightestPrimary:"#E0E0E0",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Banana Blue Berry Theme",dark:{background:"#191323",lightBackground:"#2E263C",primary:"#FF6B7F",liteprimary:"#DC396A",lightestPrimary:"#F1F1F1",slate:"#F1F1F1",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Solarized Theme",dark:{background:"#002B36",lightBackground:"#073642",primary:"#268BD2",liteprimary:"#D33682",lightestPrimary:"#268BD2",slate:"#F2EEDE",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}}]),$={data:function(){return{fav:!0,menu:!1,message:!1,hints:!0,colorIcon:y["m"],themes:L}},methods:{changeTheme:function(e){var t=this,n=e.name,a=e.dark;Object.keys(a).forEach((function(e){t.$vuetify.theme.themes.dark[e]=a[e]})),localStorage.setItem("theme-selected",n),this.menu=!1}},mounted:function(){var e=this,t=localStorage.getItem("theme-selected");t&&this.themes.forEach((function(n){if(n.name==t)return e.changeTheme(n),!0}))}},N=$,V=(n("d52e"),n("b0af")),R=n("8860"),W=n("da13"),H=n("5d23"),U=n("e449"),z=n("269a"),Y=n.n(z),G=n("5607"),q=Object(h["a"])(N,F,J,!1,null,null,null),Q=q.exports;m()(q,{VBtn:C["a"],VCard:V["a"],VIcon:f["a"],VList:R["a"],VListItem:W["a"],VListItemContent:H["a"],VMenu:U["a"]}),Y()(q,{Ripple:G["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"resume-download-btn",attrs:{icon:"","aria-label":"Change-Theme"},on:{click:function(t){return e.Download()}}},"v-btn",o,!1),a),[n("v-icon",{staticClass:"icon"},[e._v(e._s(e.colorIcon))])],1)]}}])},[n("span",{staticStyle:{color:"var(--v-background-base)"}},[e._v("Download Resume/CV")])])},X=[],Z={data:function(){return{fav:!0,menu:!1,message:!1,hints:!0,colorIcon:y["j"],themes:L}},methods:{Download:function(){window.open("https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed-2021.pdf")}}},ee=Z,te=(n("77db"),n("3a2f")),ne=Object(h["a"])(ee,K,X,!1,null,null,null),ae=ne.exports;m()(ne,{VBtn:C["a"],VIcon:f["a"],VTooltip:te["a"]});var oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{value:e.$store.state.modalShow,opacity:"0"}},[n("v-card-text",[n("section",{staticClass:"intro"},[n("slide-y-up-transition",{attrs:{delay:200}},[n("h1",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.introShow,expression:"$store.state.introShow"}]},[e._v(" Hi! "),n("v-icon",[e._v(e._s(e.handIcon))]),e._v(" my name is ")],1)]),n("slide-y-up-transition",{attrs:{delay:300}},[n("h2",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.introShow,expression:"$store.state.introShow"}]},[e._v(" "+e._s(e.INTRO.name)+" ")])]),n("slide-y-up-transition",{attrs:{delay:400}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.introShow,expression:"$store.state.introShow"}]},[e._v(e._s(e.INTRO.IDo))])]),n("slide-y-up-transition",{attrs:{delay:400}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.introShow,expression:"$store.state.introShow"}]},[e._v(e._s(e.INTRO.des))])]),n("slide-y-up-transition",{attrs:{delay:600}},[n("Button",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.introShow,expression:"$store.state.introShow"}],staticStyle:{"margin-top":"30px"},attrs:{"aria-label":"Send Message"},nativeOn:{click:function(t){return e.closeModal()}}},[e._v(" Let's Go ")])],1)],1)])],1)},ie=[],re=(n("ac1f"),n("5319"),n("4e3c")),se={name:"Intro",components:{SlideYUpTransition:c["d"],Button:re["a"]},mounted:function(){this.$store.state.introShow=!0},data:function(){return{handIcon:y["o"]}},computed:{INTRO:function(){return this.$store.state.introPage}},methods:{closeModal:function(){"About"!=this.$route.name&&this.$router.replace({name:"About"}),this.$store.state.modalShow=!this.$store.state.modalShow}}},le=se,ce=(n("3859"),n("99d9")),ue=n("a797"),de=Object(h["a"])(le,oe,ie,!1,null,null,null),he=de.exports;m()(de,{VCardText:ce["a"],VIcon:f["a"],VOverlay:ue["a"]});var pe={name:"App",components:{SocialNetworkSite:w,NavigationBar:B,Footer:A,ThemeChanger:Q,ResumeDownloader:ae,Intro:he},data:function(){return{}}},me=pe,fe=(n("5c0b"),n("7496")),ge=Object(h["a"])(me,o,i,!1,null,null,null),we=ge.exports;m()(ge,{VApp:fe["a"]});n("d3b7");var ve=n("8c4f");a["a"].use(ve["a"]);var be=[{path:"",redirect:"/about"},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"57ee"))}},{path:"/experience",name:"Experience",component:function(){return n.e("experience").then(n.bind(null,"2873"))}},{path:"/work",name:"Work",component:function(){return n.e("work").then(n.bind(null,"49a1"))}},{path:"/codechallenge",name:"CodeChallenge",component:function(){return n.e("codechallenge").then(n.bind(null,"f25d"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"a055"))}},{path:"/*",name:"PageNotFound",component:function(){return n.e("notfound").then(n.bind(null,"ce52"))}}],ye=new ve["a"]({routes:be,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),ke=ye,Se=n("2f62"),xe={workPage:{title:"My Work",des:"Showcasing complete functional full-stack web projects. Built from the ground up to show my skills in front-end, back-end, and database development.",works:[{overline:"Documentation Project",title:"Laravel MongoDB Documentation",des:"Documentation about laravel with mongodb, this package adds functionalities to the Eloquent model and Query builder for MongoDB, using the original Laravel API. This library extends the original Laravel classes, so it uses exactly the same methods.",techs:["vuepress","vue"],links:[{link:"https://github.com/BroJenuel-Youtube/laravel-mongodb",icon:y["n"]},{link:"https://laravel-mongodb.netlify.app/",icon:y["z"]}],imageLink:"https://laravel-mongodb.netlify.app/",img:"https://i.ibb.co/NWMHjGx/laravelmongodb.png"},{overline:"Portfolio Project",title:"Portfolio",des:"It's is a new cool look for my portfolio based on Brittany's design. I created Ground Up using the Technology Called Vue to Create This Portfolio.",techs:["vue","vuetify","vue2-transition"],links:[{link:"https://github.com/BroJenuel/jenuel-portfolio-v2",icon:y["n"]},{link:"https://jenuelganawed.ml",icon:y["z"]}],imageLink:"https://jenuelganawed.ml",img:"https://i.ibb.co/yWW9Zy3/My-Port-Folio.png"},{overline:"Search Engine Project",title:"Get GIF's",des:"With this website, you can search the wide internet to get GIFs that you can download for your content.",techs:["vue","API"],links:[{link:"https://github.com/BroJenuel-Youtube/get-gifs",icon:y["n"]},{link:"https://www.getgifs.ml/",icon:y["z"]}],imageLink:"https://www.getgifs.ml/",img:"https://i.ibb.co/rMqXVJP/getgifs.png"}]}},Ce={introShow:!1,aboutMeShow:!1,experienceShow:!1,workShow:!1,codeChallengeShow:!1,contactMeShow:!1},_e={introPage:{name:"Jenuel Ganawed.",IDo:"I Build Things for the web.",des:"I'm a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",email:"jenuelganawed936@gmail.com"}},Ie="<p>Hi! I'm Jenuel, and I am a Web Developer.</p><p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to Join or Work in any opportunity that will help me grow in this Industry. I welcome challenging projects and enjoy working with all sorts of personalities..</p><p>Shortly after graduating from <a href='http://kcp.edu.ph/' rel='noreferrer' target='_blank'>Kings College of The Philippines</a>, I joined the team of software developers at a company where I work on a wide variety of fascinating technologies and helpful projects..</p><p>Here are a few technologies I've been working with recently:</p>",Te=[{icon:y["s"],text:"JavaScript (ES6+)",des:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."},{icon:y["r"],text:"HTML & (S)CSS",des:"HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices."},{icon:y["D"],text:"Vue",des:"Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."},{icon:y["u"],text:"laravel/Lumen",des:"Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax."},{icon:y["a"],text:"AngularS",des:"AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."},{icon:y["t"],text:"Ruby on Rails",des:"Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages."},{icon:y["k"],text:"CodeIgniter",des:"CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications."},{icon:y["B"],text:"Progressive Web Apps (PWA)",des:"A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices."}],je={aboutMe:{info:Ie,skills:Te}},Be={icon:"",position:"Software/Web Dev.",tab:"Dap-ayan",company:"Dapayan Eatery La Trinidad",link:"",workStart:"Aug. 2018",workUntil:"May 2019",des:["Participated as an author and a project developer of their own private Ordering Management System","Technologies used are MySQL, CodeIgniter"],url:"https://www.facebook.com/DapayanCafeExtention"},Pe={icon:"",position:"Designer and Web Programmer",tab:"iLearn",company:"iLearn Skills Development Academy",link:"http://www.ilearnsda.com/",workStart:"Aug. 2018",workUntil:"Dec. 2018",des:["Created web designs for wonderful clients","Maintaining their system as well as their website"],url:"http://www.ilearnsda.com"},Ee={icon:"",present:!0,position:"Software/Web Dev.",tab:"Utalk Phil.",company:"Utalk Philippines",link:"",workStart:"Sept. 2019",workUntil:"Present",des:["Full-time software developer","Worked with a variety of tech's. such as Vue, Angular, CodeIgniter, Lumen, Ruby on Rails, MySQL, MongoDB","Maintaining the system of the company"],url:"https://www.facebook.com/utalkphilippines"},Me=[Ee,Be,Pe],De={experiencePage:{des:"This are companies that I have worked for. I have learned and enjoyed working on this companies.",experiences:Me}},Oe={title:"Lets Chat",des:"<p>Lets Chat is a web app that I made where a user can chat with another person or more than one person, depending on the room selected.</p>",headIcon:y["c"],links:[{link:"https://github.com/BroJenuel-Youtube/lets-chat",icon:y["n"]},{link:"https://lets-chat-app-by-jenuel.herokuapp.com/",icon:y["z"]}],techs:[{name:"html&css",icon:y["r"]},{name:"express",icon:y["y"]},{name:"socket.io",icon:y["v"]}]},Ae={title:"Portfolio",des:"<p>It's is a portfolio made with vue mixed with a plugin called vuetify. It is a free open source project that you can use for your portfolio project as well.</p>",headIcon:y["c"],links:[{link:"https://i.ibb.co/wr4b0BD/portfoliov1-min.png",icon:y["n"]},{link:"https://jenuelganawed-v1.netlify.app",icon:y["z"]}],techs:[{name:"vue",icon:y["r"]},{name:"vuetify",icon:y["y"]}]},Fe={title:"Speech To Text",des:"<p>This is a simple speech to text website using HTML, CSS, and JS. JavaScript is fascinating in what it can do. So, I built a simple project to try to convert speech to text.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/speach-to-text",icon:y["n"]},{link:"https://jenuelganawed-speechtotext.netlify.app/",icon:y["z"]}],techs:[{name:"html",icon:y["r"]},{name:"javaScript",icon:y["s"]},{name:"css",icon:y["q"]}]},Je={title:"Text To Speech",des:"<p>This is a simple Text to Speech using HTML, CSS, and JS. JavaScript is fascinating with what it can do. So I made a simple, project to try and convert speech to text. I used a library called Speech Recognition.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/text-to-speach",icon:y["n"]},{link:"https://jenuelganawed-texttospeach.netlify.app/",icon:y["z"]}],techs:[{name:"html",icon:y["r"]},{name:"javaScript",icon:y["s"]},{name:"css",icon:y["q"]}]},Le={title:"Web Calculator",des:"<p>Calculator is a fascinating computer. People Have been using it for computing a lot of stuff. It's been a useful tool for everyone. So I created my simple calculator using Vue.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/calculator-vue",icon:y["n"]},{link:"https://jenuelganawed-calculator-vue.netlify.app/",icon:y["z"]}],techs:[{name:"vue.js",icon:y["D"]}]},$e={title:"World Time Using React Native",des:"<p>World time is an app I created, wherein you can check the time around the world and also check if its night time or day time.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/appDev/world_time",icon:y["n"]},{link:"https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view",icon:y["e"]}],techs:[{icon:y["A"],name:"react-native"},{icon:y["s"],name:"javaScript"}]},Ne=[Oe,$e,Ae,Le,Fe,Je],Ve={codeChallengePage:{des:"This projects under this page, are simple projects that I created to challenge my self to experience and learn things.",challenges:Ne}},Re={modalShow:!0},We=Object.assign(Ce,_e,je,De,xe,Ve,Re),He=We;a["a"].use(Se["a"]);var Ue=new Se["a"].Store({state:He,mutations:{},actions:{},modules:{}}),ze=n("f309");a["a"].use(ze["a"]);var Ye=new ze["a"]({theme:{options:{customProperties:!0},themes:{dark:{background:"#0a192f",lightBackground:"#112240",primary:"#64ffda",liteprimary:"#172a45",lightestPrimary:"#303C55",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",shadow:"#000000"}},dark:!0}}),Ge=(n("b383"),n("f0eb")),qe=n("9483");Object(qe["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].use(Ge["default"]),a["a"].config.productionTip=!1,new a["a"]({router:ke,store:Ue,vuetify:Ye,render:function(e){return e(we)}}).$mount("#app")},5989:function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"63dc":function(e,t,n){"use strict";n("5989")},"77db":function(e,t,n){"use strict";n("20e3")},"9c0c":function(e,t,n){},b383:function(e,t,n){},b99f:function(e,t,n){},c4fa:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n("94ed"),o=[{icon:a["h"],link:"https://www.facebook.com/broJenuel/"},{icon:a["E"],link:"https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA"},{icon:a["w"],link:"https://www.linkedin.com/in/jenuelganawed/"},{icon:a["n"],link:"https://github.com/BroJenuel"},{icon:a["C"],link:"https://twitter.com/broJenuel"}],i="jenuelganawed936@gmail.com"},d52e:function(e,t,n){"use strict";n("fb8b")},d9a9:function(e,t,n){},ea59:function(e,t,n){"use strict";n("d9a9")},eec8:function(e,t,n){"use strict";n("4e21")},f105:function(e,t,n){"use strict";n("b99f")},fb8b:function(e,t,n){}});
//# sourceMappingURL=app.8135776c.js.map