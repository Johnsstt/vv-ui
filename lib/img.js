module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=247)}({0:function(e,t){e.exports=function(e,t,r,n,o,s){var i,l=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,l=e.default);var a="function"==typeof l?l.options:l;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),r&&(a.functional=!0),o&&(a._scopeId=o);var u;if(s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=u):n&&(u=n),u){var d=a.functional,f=d?a.render:a.beforeCreate;d?(a._injectStyles=u,a.render=function(e,t){return u.call(t),f(e,t)}):a.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:l,options:a}}},129:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(73),o=r(172),s=r(0),i=s(n.a,o.a,!1,null,null,null);t.default=i.exports},172:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.$cssPrefix+"img-wrapper",e.loading?"":e.$cssPrefix+"img-placeholder"]},[r("img",{class:e.classes,attrs:{alt:e.alt},on:{error:e.handleError,load:e.handleLoad}}),e.loading?r("spinner",{class:e.$cssPrefix+"img-spinner"}):e._e(),e.loading?e._e():r("icon",[e._v("")])],1)},o=[],s={render:n,staticRenderFns:o};t.a=s},2:function(e,t,r){"use strict";t.a={name:"Icon",computed:{classes:function(){return[this.$cssPrefix+"iconfont"]}}}},247:function(e,t,r){e.exports=r(129)},25:function(e,t,r){"use strict";t.a={name:"Spinner",props:{color:{type:String},primaryColor:{type:String}},computed:{classes:function(){return[this.$cssPrefix+"spinner-wrapper"]}},mounted:function(){this.color&&(this.$el.children[0].style.borderColor=this.color),this.primaryColor&&(this.$el.children[0].style.borderTopColor=this.primaryColor)}}},27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(25),o=r(35),s=r(0),i=s(n.a,o.a,!1,null,null,null);t.default=i.exports},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(7),s=r(0),i=s(n.a,o.a,!1,null,null,null);t.default=i.exports},35:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.classes},[r("div",{class:e.$cssPrefix+"spinner"}),e._t("default")],2)},o=[],s={render:n,staticRenderFns:o};t.a=s},7:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{class:e.classes},[e._t("default")],2)},o=[],s={render:n,staticRenderFns:o};t.a=s},73:function(e,t,r){"use strict";var n=r(27),o=r(3);t.a={name:"XImg",components:{Spinner:n.default,Icon:o.default},props:{src:{type:String},srcset:{type:String},alt:{type:String},lazyload:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},computed:{classes:function(){return[this.$cssPrefix+"img",this.lazyload?this.$cssPrefix+"img-lazyload":""]}},mounted:function(){this.$scrollNode=this.getScrollNode(this.$el.offsetParent),this.$scrollNode.lazyloadImages||(this.$scrollNode.lazyloadImages=[],this.$scrollNode.scrollTimer=null,this.$scrollNode.onscroll=function(e){e.target.scrollTimer&&clearTimeout(e.target.scrollTimer),e.target.scrollTimer=setTimeout(function(){e.target.lazyloadImages=e.target.lazyloadImages.filter(function(e,t){return!1!==e.loaded||!e.img.inViewPort()||(e.img.setSource(),!1)})},500)}),this.lazyload&&(this.inViewPort()?this.setSource():this.$scrollNode.lazyloadImages.push({img:this,loaded:!1}))},destroyed:function(){var e=this;this.$scrollNode.lazyloadImages=this.$scrollNode.lazyloadImages.filter(function(t){return t!==e})},methods:{getScrollNode:function(e){var t=e;return document.body!==t&&function e(){var r=window.getComputedStyle(t);["scroll","auto"].indexOf(r.overflow)>-1||["scroll","auto"].indexOf(r["overflow-y"])>-1||(t=t.offsetParent,t===document.body?t=document.body:e())}(),t},inViewPort:function(){if(0===this.$el.offsetWidth&&0===this.$el.offsetHeight)return!1;var e=this.$el.getBoundingClientRect();return e.top<window.innerHeight&&e.left<window.innerWidth},setSource:function(){var e=this;if(this.src){var t=new Image;t.onload=function(t){var r=e.$el.querySelector("."+e.$cssPrefix+"iconfont")||e.$el.querySelector("."+e.$cssPrefix+"img-spinner"),n=e.$el.querySelector("img");requestAnimationFrame(function(){r&&(r.style.display="none"),n.src=e.src,n.style.opacity=1,e.$el.classList.remove(e.$cssPrefix+"img-placeholder")})},t.src=this.src}this.srcset&&(this.$el.srcset=this.srcset)},handleScroll:function(e){this.inViewPort()&&(e.currentTarget&&e.currentTarget.removeEventListener("scroll",this.handleScroll),this.setSource())},handleError:function(e){this.$emit("error",e)},handleLoad:function(e){this.$emit("load",e)}}}}});