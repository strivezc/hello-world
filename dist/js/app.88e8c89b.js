(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"23d0":function(t,e,r){t.exports=r.p+"img/teach.91853698.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("a026"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=r("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"contain"},[n("img",{staticClass:"background",attrs:{src:r("b13e"),alt:""}}),n("router-link",{attrs:{to:{path:"/literature",query:{userId:1111}}}},[n("img",{staticClass:"read",attrs:{src:r("88ee"),alt:""}})]),n("router-link",{attrs:{to:{name:"photograph",params:{userId:1111}}}},[n("img",{staticClass:"teach",attrs:{src:r("23d0"),alt:""}})]),n("img",{staticClass:"sign",attrs:{src:r("dc82"),alt:""},on:{click:t.routerToSign}}),n("img",{staticClass:"student-card",attrs:{src:r("abb2"),alt:""},on:{click:t.routerToCard}})],1)])},f=[],d=(r("28a5"),r("386d"),decodeURI(location.search));if(-1!=d.indexOf("?")){var h=d.substr(1),m=h.split("&",1),v=m[0].split("=")[1];console.log(v)}var g={name:"home",components:{},methods:{toogle:function(){console.log("hi")},routerToSign:function(){this.$router.push({name:"sign",params:{code:34234123}})},routerToCard:function(){this.$router.push({path:"/card",query:{name:"zzc"}})}}},b=g,_=(r("cccb"),Object(i["a"])(b,p,f,!1,null,null,null));_.options.__file="Home.vue";var y=_.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("从首页接收参数"+t._s(this.$route.params.code))])])},j=[],O={name:"sign"},w=O,$=Object(i["a"])(w,x,j,!1,null,"f393bc9a",null);$.options.__file="Sign.vue";var C=$.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v(" My name is "+t._s(this.$route.query.name))])])},k=[],S={name:"card"},T=S,P=Object(i["a"])(T,E,k,!1,null,"08e5fe76",null);P.options.__file="Student-card.vue";var q=P.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("文学部")]),r("h2",[t._v(t._s(this.$route.query.userId))])])},M=[],z={name:"literature"},B=z,F=Object(i["a"])(B,I,M,!1,null,"a1d0774e",null);F.options.__file="literature.vue";var J=F.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("影像部")]),r("h2",[t._v(t._s(this.$route.params.userId))]),r("video",{attrs:{src:"http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4",width:"100%",height:"auto",controls:"controls"}})])},H=[],R={name:"photograph"},U=R,D=Object(i["a"])(U,A,H,!1,null,"5495c408",null);D.options.__file="photograph.vue";var G=D.exports;n["a"].use(l["a"]);var K=new l["a"]({routes:[{path:"/",name:"home",component:y},{path:"/sign",name:"sign",component:C},{path:"/literature",name:"literature",component:J},{path:"/photograph",name:"photograph",component:G},{path:"/card",name:"card",component:q}]});n["a"].config.productionTip=!1,new n["a"]({router:K,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,r){},"88ee":function(t,e,r){t.exports=r.p+"img/read.225099a3.png"},abb2:function(t,e,r){t.exports=r.p+"img/student-card.d5d16577.png"},b13e:function(t,e,r){t.exports=r.p+"img/background.3fab0ba7.jpg"},cccb:function(t,e,r){"use strict";var n=r("d563"),o=r.n(n);o.a},d563:function(t,e,r){},dc82:function(t,e,r){t.exports=r.p+"img/sign.90e07d93.png"}});
//# sourceMappingURL=app.88e8c89b.js.map