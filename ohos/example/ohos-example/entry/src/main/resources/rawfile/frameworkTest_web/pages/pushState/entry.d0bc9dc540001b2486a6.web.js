!function(e){function t(t){for(var r,s,i=t[0],u=t[1],l=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={33:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;a.push([527,0]),n()}({285:function(e,t,n){var r=n(529);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(6).default)("73354a2d",r,!1,{})},527:function(e,t,n){"use strict";n.r(t);n(9),n(11);var r=n(1),o=n(4),a=n.n(o),s=n(12);window.location.href.includes("static")||new s({theme:"dark"}),a.a.init(r.a);var i=n(622).default;new r.a(r.a.util.extend({el:"#root"},i))},528:function(e,t,n){"use strict";n(285)},529:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".nav[data-v-ca88e746] {\n  color: #ff3c00;\n  font-size: 0.53333rem;\n}\n.scroller[data-v-ca88e746] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  padding: 1.33333rem;\n  background-color: #ffffd2;\n}\n",""])},622:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this._self._c;return e("div",{staticClass:"scroller weex-ct weex-div",attrs:{"weex-type":"div"}},[e("p",{staticClass:"nav weex-el weex-text",attrs:{"weex-type":"text"}},[this._v("pushState页面")]),this._v(" "),e("p",{staticClass:" weex-el weex-text",attrs:{"weex-type":"text"}},[this._v(this._s(this.message))])])};r._withStripped=!0;var o=n(0),a={data:function(){return{message:""}},created:function(){var e=this;Object(o.h)(),window.addEventListener("pushState",(function(t){console.log("addEventListener pushState params = ",JSON.stringify(t)),e.message=t.arguments[2]}))},beforeDestroy:function(){window.removeEventListener("pushState",(function(e){console.log("removeEventListener pushState params = ",JSON.stringify(e))}))}},s=(n(528),n(2)),i=Object(s.a)(a,r,[],!1,null,"ca88e746",null);t.default=i.exports}});