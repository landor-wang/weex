!function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={27:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([509,0]),n()}({279:function(t,e,n){var a=n(511);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(6).default)("55ac5584",a,!1,{})},509:function(t,e,n){"use strict";n.r(e);n(9),n(11);var a=n(1),r=n(4),o=n.n(r),s=n(12);window.location.href.includes("static")||new s({theme:"dark"}),o.a.init(a.a);var i=n(616).default;new a.a(a.a.util.extend({el:"#root"},i))},510:function(t,e,n){"use strict";n(279)},511:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".wrapper[data-v-a03a5978] {\n  justify-content: center;\n}\n.nav[data-v-a03a5978] {\n  color: #ff3c00;\n  font-size: 0.53333rem;\n}\n.scroller[data-v-a03a5978] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  padding: 1.33333rem;\n  background-color: #ffffd2;\n}\n.btn[data-v-a03a5978] {\n  width: 6.66667rem;\n  padding: 0.26667rem;\n  margin: 0.26667rem auto 0;\n  border-radius: 0.13333rem;\n  color: #6d7dff;\n  text-align: center;\n  font-size: 0.42667rem;\n  border-style: solid;\n  border-color: #6d7dff;\n  border-width: 1px;\n  opacity: 1;\n}\n",""])},616:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("scroller",{staticClass:"scroller",attrs:{}},[e("div",{staticClass:"wrapper weex-ct weex-div",attrs:{"weex-type":"div"}},[e("p",{staticClass:"nav weex-el weex-text",attrs:{"weex-type":"text"}},[t._v("multiPage6页面")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.jumpPage("multiPage7")}}},[t._v("push(multiPage7)")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.broadcastPost()}}},[t._v("广播发送")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.broadcastOnmessage()}}},[t._v("广播监听")]),t._v(" "),e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.broadcastClose()}}},[t._v("关闭广播")])])])};a._withStripped=!0;var r=n(0),o=new BroadcastChannel("testbc"),s={components:{},data:function(){},methods:{jumpPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;Object(r.r)(t,n)},navigatorPop:function(){n(8).navigator.pop({animated:"true"},(function(t){console.log("callback: ",JSON.stringify(t))}))},broadcastPost:function(){o.postMessage("来自multiPage6的消息test message!")},broadcastOnmessage:function(){o.onmessage=function(t){console.log("multiPage6收到消息："+JSON.stringify(t.data))}},broadcastClose:function(){o.close(),modal.alert({message:"已关闭广播test",okTitle:"关闭"},(function(){}))}}},i=(n(510),n(2)),c=Object(i.a)(s,a,[],!1,null,"a03a5978",null);e.default=c.exports}});