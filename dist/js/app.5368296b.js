(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"23d0":function(t,e,n){t.exports=n.p+"img/teach.91853698.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"contain"},[a("img",{staticClass:"background",attrs:{src:n("b13e"),alt:""}}),a("router-link",{attrs:{to:{path:"/literature",query:{userId:1111}}}},[a("img",{staticClass:"read",attrs:{src:n("88ee"),alt:""}})]),a("router-link",{attrs:{to:{name:"photograph",params:{userId:1111}}}},[a("img",{staticClass:"teach",attrs:{src:n("23d0"),alt:""}})]),a("img",{staticClass:"sign",attrs:{src:n("dc82"),alt:""},on:{click:t.routerToSign}}),a("img",{staticClass:"student-card",attrs:{src:n("abb2"),alt:""},on:{click:t.routerToCard}})],1),a("button",{on:{click:t.btn}},[t._v("测试按钮")])])},d=[],f=(n("28a5"),n("386d"),decodeURI(location.search));if(-1!=f.indexOf("?")){var m=f.substr(1),h=m.split("&",1),b=h[0].split("=")[1];console.log(b)}var g={name:"home",components:{},methods:{toogle:function(){console.log("hi")},routerToSign:function(){this.$router.push({name:"sign",params:{code:34234123}})},routerToCard:function(){this.$router.push({path:"/card",query:{name:"zzc"}})},btn:function(){localStorage.setItem("name","zouzhicheng"),document.cookie="user=邹志程",console.log("保存字符串")}}},v=g,y=(n("cccb"),Object(i["a"])(v,p,d,!1,null,null,null));y.options.__file="Home.vue";var _=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("从首页接收参数"+t._s(this.$route.params.code))])])},j=[],w={name:"sign"},x=w,E=Object(i["a"])(x,k,j,!1,null,"f393bc9a",null);E.options.__file="Sign.vue";var C=E.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(" My name is "+t._s(this.$route.query.name))])])},S=[],$={name:"card"},B=$,z=Object(i["a"])(B,O,S,!1,null,"08e5fe76",null);z.options.__file="Student-card.vue";var F=z.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("文学部")]),n("h2",[t._v(t._s(this.$route.query.userId))]),n("div",{staticStyle:{"text-align":"center"}},[n("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,function(t,e){return n("van-swipe-item",{key:e},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}],staticStyle:{width:"80%"}})])}),1)],1)])},P=[],T={name:"literature",data:function(){return{images:["http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/c9ee8e52-f47e-4990-8fe7-582bd94029a0.jpg","http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/d8f238ae-358d-4d2c-a9c3-cbd081fa53bc.png","http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/9c2b8d09-82ba-4e16-905d-ec7c7e9371ca.png","http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/d4511b09-f892-49e0-b9d1-ed73a185ce2e.jpeg","http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/0d9944f1-6aad-4894-b42e-72dadcfef058.png"]}},methods:{}},q=T,I=Object(i["a"])(q,M,P,!1,null,"1a9fd842",null);I.options.__file="literature.vue";var N=I.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("影像部")]),n("h2",[t._v(t._s(this.$route.params.userId))]),n("ul",t._l(t.videoUrl,function(e,a){return n("li",[n("div",{staticStyle:{"text-align":"center",position:"relative"}},[n("span",{staticStyle:{position:"absolute",top:"38%",left:"50%",width:"100%","z-index":"1",transform:"translate(-50%,-50%)",color:"white",display:"block"},on:{click:function(e){t.playPause(a)}}},[t._v("观看视频")]),n("p",{staticClass:"text",staticStyle:{position:"absolute",top:"50%",left:"50%",width:"100%","z-index":"1",transform:"translate(-50%,-50%)",color:"white"}}),n("video",{staticClass:"video",attrs:{width:"80%",height:"auto","webkit-playsinline":"webkit-playsinline",playsinline:"playsinline","x5-playsinline":"x5-playsinline","x-webkit-airplay":"allow",preload:""},on:{loadedmetadata:function(e){t.myFunction(a)}}},[n("source",{attrs:{src:e.url,type:"video/mp4"}})])]),n("br"),n("br")])}),0)])},H=[];function J(t){var e,n;return e=Math.floor(t/60),n=Math.floor(t%60),e+="",n+="",e=1===e.length?"0"+e:e,n=1===n.length?"0"+n:n,e+"'"+n+'"'}var A={name:"photograph",data:function(){return{videoUrl:[{url:"http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4"},{url:"http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4"},{url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"},{url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"},{url:"http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4"}]}},methods:{playPause:function(t){var e=document.getElementsByClassName("video")[t];e.paused?e.play():e.pause(),console.log(e.paused)},myFunction:function(t){var e=J(document.getElementsByClassName("video")[t].duration),n=document.getElementsByClassName("text")[t];n.innerHTML=e}}},L=A,R=Object(i["a"])(L,U,H,!1,null,"536f1860",null);R.options.__file="photograph.vue";var D=R.exports;a["a"].use(u["a"]);var G=new u["a"]({routes:[{path:"/",name:"home",component:_},{path:"/sign",name:"sign",component:C},{path:"/literature",name:"literature",component:N},{path:"/photograph",name:"photograph",component:D},{path:"/card",name:"card",component:F}]}),K=n("b970");n("157a");a["a"].use(K["b"]),a["a"].config.productionTip=!1,a["a"].use(K["a"]),new a["a"]({router:G,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"88ee":function(t,e,n){t.exports=n.p+"img/read.225099a3.png"},abb2:function(t,e,n){t.exports=n.p+"img/student-card.d5d16577.png"},b13e:function(t,e,n){t.exports=n.p+"img/background.3fab0ba7.jpg"},cccb:function(t,e,n){"use strict";var a=n("d563"),r=n.n(a);r.a},d563:function(t,e,n){},dc82:function(t,e,n){t.exports=n.p+"img/sign.90e07d93.png"}});
//# sourceMappingURL=app.5368296b.js.map