(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"23d0":function(t,e,n){t.exports=n.p+"img/teach.91853698.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,a,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"contain"},[r("img",{staticClass:"background",attrs:{src:n("b13e"),alt:""}}),r("router-link",{attrs:{to:{path:"/literature",query:{userId:1111}}}},[r("img",{staticClass:"read",attrs:{src:n("88ee"),alt:""}})]),r("router-link",{attrs:{to:{name:"photograph",params:{userId:1111}}}},[r("img",{staticClass:"teach",attrs:{src:n("23d0"),alt:""}})]),r("img",{staticClass:"sign",attrs:{src:n("dc82"),alt:""},on:{click:t.routerToSign}}),r("img",{staticClass:"student-card",attrs:{src:n("abb2"),alt:""},on:{click:t.routerToCard}})],1)])},d=[],f=(n("28a5"),n("386d"),decodeURI(location.search));if(-1!=f.indexOf("?")){var m=f.substr(1),h=m.split("&",1),v=h[0].split("=")[1];console.log(v)}var g={name:"home",components:{},methods:{toogle:function(){console.log("hi")},routerToSign:function(){this.$router.push({name:"sign",params:{code:34234123}})},routerToCard:function(){this.$router.push({path:"/card",query:{name:"zzc"}})}}},b=g,_=(n("cccb"),Object(i["a"])(b,p,d,!1,null,null,null));_.options.__file="Home.vue";var y=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("从首页接收参数"+t._s(this.$route.params.code))])])},w=[],j={name:"sign"},O=j,k=Object(i["a"])(O,x,w,!1,null,"f393bc9a",null);k.options.__file="Sign.vue";var C=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(" My name is "+t._s(this.$route.query.name))])])},S=[],E={name:"card"},M=E,P=Object(i["a"])(M,$,S,!1,null,"08e5fe76",null);P.options.__file="Student-card.vue";var T=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("文学部")]),n("h2",[t._v(t._s(this.$route.query.userId))])])},q=[],z={name:"literature"},B=z,N=Object(i["a"])(B,I,q,!1,null,"a1d0774e",null);N.options.__file="literature.vue";var U=N.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("影像部")]),r("h2",[t._v(t._s(this.$route.params.userId))]),r("ul",t._l(t.videoUrl,function(e,a){return r("li",[r("div",{staticStyle:{"text-align":"center",position:"relative"}},[r("span",{staticStyle:{position:"absolute",top:"38%",left:"50%",width:"100%","z-index":"1",transform:"translate(-50%,-50%)",color:"white",display:"block"},on:{click:function(e){t.playPause(a)}}},[t._v("观看视频")]),r("p",{staticClass:"text",staticStyle:{position:"absolute",top:"50%",left:"50%",width:"100%","z-index":"1",transform:"translate(-50%,-50%)",color:"white"}}),r("video",{staticClass:"video",attrs:{width:"80%",height:"auto","webkit-playsinline":"webkit-playsinline",playsinline:"playsinline","x5-playsinline":"x5-playsinline","x-webkit-airplay":"allow",preload:"auto",poster:n("63b4")},on:{loadedmetadata:function(e){t.myFunction(a)}}},[r("source",{attrs:{src:e.url,type:"video/mp4"}})])]),r("br"),r("br")])}),0)])},H=[];function J(t){var e,n;return e=Math.floor(t/60),n=Math.floor(t%60),e+="",n+="",e=1===e.length?"0"+e:e,n=1===n.length?"0"+n:n,e+"'"+n+'"'}var A={name:"photograph",data:function(){return{videoUrl:[{url:"https://media.w3.org/2010/05/sintel/trailer.mp4"},{url:"https://media.w3.org/2010/05/sintel/trailer.mp4"},{url:"https://media.w3.org/2010/05/sintel/trailer.mp4"},{url:"https://media.w3.org/2010/05/sintel/trailer.mp4"}]}},methods:{playPause:function(t){var e=document.getElementsByClassName("video")[t];e.paused?e.play():e.pause(),console.log(e.paused)},myFunction:function(t){var e=J(document.getElementsByClassName("video")[t].duration),n=document.getElementsByClassName("text")[t];n.innerHTML=e}}},L=A,R=Object(i["a"])(L,F,H,!1,null,"14632312",null);R.options.__file="photograph.vue";var D=R.exports;r["a"].use(c["a"]);var G=new c["a"]({routes:[{path:"/",name:"home",component:y},{path:"/sign",name:"sign",component:C},{path:"/literature",name:"literature",component:U},{path:"/photograph",name:"photograph",component:D},{path:"/card",name:"card",component:T}]});r["a"].config.productionTip=!1,new r["a"]({router:G,render:function(t){return t(u)}}).$mount("#app")},"63b4":function(t,e,n){t.exports=n.p+"img/1547734102(1).13f55474.jpg"},"64a9":function(t,e,n){},"88ee":function(t,e,n){t.exports=n.p+"img/read.225099a3.png"},abb2:function(t,e,n){t.exports=n.p+"img/student-card.d5d16577.png"},b13e:function(t,e,n){t.exports=n.p+"img/background.3fab0ba7.jpg"},cccb:function(t,e,n){"use strict";var r=n("d563"),a=n.n(r);a.a},d563:function(t,e,n){},dc82:function(t,e,n){t.exports=n.p+"img/sign.90e07d93.png"}});
//# sourceMappingURL=app.9ad85452.js.map