(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["work"],{"49a1":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"my-work"},[e("SlideXRightTransition",{attrs:{delay:200}},[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.workShow&&!t.$store.state.modalShow,expression:"$store.state.workShow && !$store.state.modalShow"}],staticClass:"numbered-header",staticStyle:{margin:"10px 0px -10px"}},[e("v-icon",{staticClass:"front-icon"},[t._v(t._s(t.headIcon))]),t._v(" "+t._s(t.$store.state.workPage.title)+" ")],1)]),e("SlideXLeftTransition",{attrs:{delay:300}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.workShow&&!t.$store.state.modalShow,expression:"$store.state.workShow && !$store.state.modalShow"}]},[t._v(t._s(t.$store.state.workPage.des))])]),e("SlideYDownTransition",{attrs:{delay:400}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.workShow&&!t.$store.state.modalShow,expression:"$store.state.workShow && !$store.state.modalShow"}],staticStyle:{"margin-top":"20px"}},[t._l(t.myWorks,(function(s,a){return[e("SlideYDownTransition",{key:s.title,attrs:{delay:500*a}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.workShow&&!t.$store.state.modalShow,expression:"$store.state.workShow && !$store.state.modalShow"}],staticClass:"work-info"},[e("div",{staticClass:"work-info-details",class:a%2==0?"left-content":"right-content"},[e("p",{staticClass:"info-overline"},[t._v(t._s(s.overline))]),e("h3",{staticClass:"info-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"info-des-container"},[e("p",{staticClass:"info-text",domProps:{innerHTML:t._s(s.des)}})]),e("ul",{staticClass:"info-tech-list",class:a%2==0?"":"work-links-right"},t._l(s.techs,(function(s){return e("li",{key:s},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"work-links",class:a%2==0?"":"work-links-right"},t._l(s.links,(function(s){return e("a",{key:s.name,attrs:{href:s.link,target:"_blank","aria-label":"GitHUB Link",rel:"external"}},[e("v-icon",{staticClass:"highlight-hover"},[t._v(t._s(s.icon))])],1)})),0)]),e("div",{staticClass:"work-info-image",class:a%2==0?"right-image":"left-image"},[e("a",{attrs:{href:s.imageLink,target:"_blank",rel:"external"}},[e("div",{staticClass:"image-wrapping"},[e("div",{staticClass:"front-filter"}),e("img",{attrs:{loading:"lazy",src:s.img,alt:""}})])])])])])]}))],2)])],1)},o=[],i=e("94ed"),r=e("7c76"),n={components:{SlideYDownTransition:r["c"],SlideXLeftTransition:r["a"],SlideXRightTransition:r["b"]},data:function(){return{headIcon:i["i"],githubIcon:i["n"],externalIcon:i["z"]}},mounted:function(){this.$store.state.workShow=!0},computed:{myWorks:function(){return this.$store.state.workPage.works}}},l=n,c=(e("8834"),e("2877")),w=e("6544"),d=e.n(w),h=e("132d"),k=Object(c["a"])(l,a,o,!1,null,null,null);s["default"]=k.exports;d()(k,{VIcon:h["a"]})},8834:function(t,s,e){"use strict";e("c778")},c778:function(t,s,e){}}]);
//# sourceMappingURL=work.da3e051c.js.map