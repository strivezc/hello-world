(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"23d0":function(t,e,n){t.exports=n.p+"img/teach.91853698.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"contain"},[r("img",{staticClass:"background",attrs:{src:n("b13e"),alt:""}}),r("router-link",{attrs:{to:{path:"/literature",query:{userId:1111}}}},[r("img",{staticClass:"read",attrs:{src:n("88ee"),alt:""}})]),r("router-link",{attrs:{to:{name:"photograph",params:{userId:1111}}}},[r("img",{staticClass:"teach",attrs:{src:n("23d0"),alt:""}})]),r("img",{staticClass:"sign",attrs:{src:n("dc82"),alt:""},on:{click:t.routerToSign}}),r("img",{staticClass:"student-card",attrs:{src:n("abb2"),alt:""},on:{click:t.routerToCard}})],1)])},d=[],f=(n("28a5"),n("386d"),decodeURI(location.search));if(-1!=f.indexOf("?")){var h=f.substr(1),m=h.split("&",1),v=m[0].split("=")[1];console.log(v)}var g={name:"home",components:{},methods:{toogle:function(){console.log("hi")},routerToSign:function(){this.$router.push({name:"sign",params:{code:34234123}})},routerToCard:function(){this.$router.push({path:"/card",query:{name:"zzc"}})}}},b=g,_=(n("cccb"),Object(i["a"])(b,p,d,!1,null,null,null));_.options.__file="Home.vue";var y=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("从首页接收参数"+t._s(this.$route.params.code))])])},w=[],j={name:"sign"},O=j,$=Object(i["a"])(O,x,w,!1,null,"f393bc9a",null);$.options.__file="Sign.vue";var k=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(" My name is "+t._s(this.$route.query.name))])])},S=[],C={name:"card"},T=C,P=Object(i["a"])(T,E,S,!1,null,"08e5fe76",null);P.options.__file="Student-card.vue";var q=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("文学部")]),n("h2",[t._v(t._s(this.$route.query.userId))])])},M=[],z={name:"literature"},B=z,F=Object(i["a"])(B,I,M,!1,null,"a1d0774e",null);F.options.__file="literature.vue";var J=F.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("影像部")]),n("h2",[t._v(t._s(this.$route.params.userId))]),t._m(0),n("br"),n("br"),t._m(1)])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("video",{attrs:{src:"http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4",width:"80%",height:"auto",controls:"","webkit-playsinline":"webkit-playsinline",playsinline:"playsinline","x5-playsinline":"x5-playsinline","x-webkit-airplay":"allow"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("video",{attrs:{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",width:"80%",height:"auto",controls:"controls"}})])}],R={name:"photograph"},U=R,D=Object(i["a"])(U,A,H,!1,null,"71566d1d",null);D.options.__file="photograph.vue";var G=D.exports;r["a"].use(l["a"]);var K=new l["a"]({routes:[{path:"/",name:"home",component:y},{path:"/sign",name:"sign",component:k},{path:"/literature",name:"literature",component:J},{path:"/photograph",name:"photograph",component:G},{path:"/card",name:"card",component:q}]});r["a"].config.productionTip=!1,new r["a"]({router:K,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,n){},"88ee":function(t,e,n){t.exports=n.p+"img/read.225099a3.png"},abb2:function(t,e,n){t.exports=n.p+"img/student-card.d5d16577.png"},b13e:function(t,e,n){t.exports=n.p+"img/background.3fab0ba7.jpg"},cccb:function(t,e,n){"use strict";var r=n("d563"),a=n.n(r);a.a},d563:function(t,e,n){},dc82:function(t,e,n){t.exports=n.p+"img/sign.90e07d93.png"}});
//# sourceMappingURL=app.7c87a310.js.map