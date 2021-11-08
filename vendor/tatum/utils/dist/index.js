var tatum_utils=function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={0:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonptatum_utils=window.webpackJsonptatum_utils||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;return a.push([27,1]),r()}({0:function(e,t){e.exports=wp.i18n},1:function(e,t){e.exports=React},27:function(e,t,r){"use strict";r.r(t),r.d(t,"BaseOptions",(function(){return u})),r.d(t,"untrailingslashit",(function(){return c})),r.d(t,"trailingslashit",(function(){return s})),r.d(t,"createContextFactory",(function(){return p})),r.d(t,"WP_REST_API_USE_GLOBAL_METHOD",(function(){return b})),r.d(t,"commonUrlBuilder",(function(){return w})),r.d(t,"Url",(function(){return v.a})),r.d(t,"commonRequest",(function(){return T})),r.d(t,"createRequestFactory",(function(){return I})),r.d(t,"RouteHttpVerb",(function(){return d})),r.d(t,"parseResult",(function(){return E})),r.d(t,"handleCorrupRestApi",(function(){return D})),r.d(t,"createLocalizationFactory",(function(){return J})),r.d(t,"locationRestPluginGet",(function(){return Q})),r.d(t,"Button",(function(){return Y})),r.d(t,"ButtonType",(function(){return H})),r.d(t,"Notice",(function(){return ee})),r.d(t,"NoticeType",(function(){return K}));r(16);var n=r(10),o=r.n(n),a=r(11),i=r.n(a),u=function(){function e(){o()(this,e),this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.publicUrl=void 0}return i()(e,null,[{key:"slugCamelCase",value:function(e){return e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))}},{key:"getPureSlug",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r?e.slugCamelCase(t.slug):t.slug}}]),e}(),c=function e(t){return t.endsWith("/")||t.endsWith("\\")?e(t.slice(0,-1)):t},s=function(e){return"".concat(c(e),"/")},l=r(1),f=r.n(l);function p(e){var t=Object(l.createContext)(e);return{StoreContext:t,StoreProvider:function(r){var n=r.children;return(React.createElement(t.Provider,{value:e},n))},useStores:function(){return Object(l.useContext)(t)}}}var d,y=r(3),v=r.n(y);!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e.PATCH="PATCH"}(d||(d={}));var h=r(5),m=r.n(h),b=!0;function w(e){for(var t=e.location,r=e.params,n=void 0===r?{}:r,o=e.nonce,a=void 0===o||o,i=e.options,u=new v.a(i.restRoot,!0),l=u.query,f=l.rest_route||u.pathname,p=[],y=t.path.replace(/:([A-Za-z0-9-_]+)/g,(function(e,t){return p.push(t),n[t]})),h={},w=0,g=Object.keys(n);w<g.length;w++){var O=g[w];-1===p.indexOf(O)&&(h[O]=n[O])}var x=s(f)+c(t.namespace||i.restNamespace)+y,S=new v.a(window.location.href).protocol.slice(0,-1);return u.set("protocol",S),l.rest_route?l.rest_route=x:u.set("pathname",x),a&&i.restNonce&&(l._wpnonce=i.restNonce),b&&t.method&&t.method!==d.GET&&(l._method=t.method),u.set("query",m.a.all([i.restQuery,h,l])).toString()}var g=r(2),O=r.n(g),x=r(4),S=r.n(x);r(21);function j(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){return _.apply(this,arguments)}function _(){return(_=S()(O.a.mark((function e(t,r){var n,o,a,i,u,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.clone(),e.prev=1,e.next=4,r.json();case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n.text();case 11:o=e.sent,console.warn("The response of ".concat(t," contains unexpected JSON, try to resolve the JSON line by line..."),{body:o}),i=j(o.split("\n")),e.prev=14,i.s();case 16:if((u=i.n()).done){e.next=28;break}if(!(c=u.value).startsWith("[")&&!c.startsWith("{")){e.next=26;break}return e.prev=19,e.abrupt("return",JSON.parse(c));case 23:e.prev=23,e.t1=e.catch(19),a=e.t1;case 26:e.next=16;break;case 28:e.next=33;break;case 30:e.prev=30,e.t2=e.catch(14),i.e(e.t2);case 33:return e.prev=33,i.f(),e.finish(33);case 36:throw a;case 37:case"end":return e.stop()}}),e,null,[[1,7],[14,30,33,36],[19,23]])})))).apply(this,arguments)}function T(e){return A.apply(this,arguments)}function A(){return(A=S()(O.a.mark((function e(t){var r,n,o,a,i,u,c,s,l,f,p,y,h;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.location,n=t.options,o=t.request,a=t.params,i=t.settings,u=void 0===i?{}:i,c=w({location:r,params:a,nonce:!1,options:n}),b&&r.method&&r.method!==d.GET?u.method=d.POST:u.method=d.GET,s=new v.a(c,!0),!(l=-1===["HEAD","GET"].indexOf(u.method))&&o&&s.set("query",m()(s.query,o)),f=s.toString(),e.next=9,window.fetch(f,m.a.all([u,{headers:{"Content-Type":"application/json;charset=utf-8","X-WP-Nonce":n.restNonce},body:l?JSON.stringify(o):void 0}]));case 9:if((p=e.sent).ok){e.next=24;break}return y=void 0,e.prev=12,e.next=15,E(f,p);case 15:y=e.sent,e.next=20;break;case 18:e.prev=18,e.t0=e.catch(12);case 20:throw u.method===d.GET&&(window.detectCorrupRestApiFailed=(window.detectCorrupRestApiFailed||0)+1),(h=p).responseJSON=y,h;case 24:return e.abrupt("return",E(f,p));case 25:case"end":return e.stop()}}),e,null,[[12,18]])})))).apply(this,arguments)}var N=r(12),k=r.n(N);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){return{urlBuilder:function(t){return w(R(R({},t),{},{options:{restNamespace:e.restNamespace,restNonce:e.restNonce,restQuery:e.restQuery,restRoot:e.restRoot}}))},request:function(t){return T(R(R({},t),{},{options:{restNamespace:e.restNamespace,restNonce:e.restNonce,restQuery:e.restQuery,restRoot:e.restRoot}}))}}}function D(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.detectCorrupRestApiFailed=window.detectCorrupRestApiFailed||0,setTimeout(S()(O.a.mark((function r(){var n,o,a,i,u;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n=document.getElementById("notice-corrupt-rest-api"))||!(window.detectCorrupRestApiFailed>0||t)){r.next=19;break}o=0,a=Object.keys(e);case 3:if(!(o<a.length)){r.next=19;break}return i=a[o],r.prev=5,r.next=8,e[i]();case 8:r.next=16;break;case 10:r.prev=10,r.t0=r.catch(5),n.style.display="block",(u=document.createElement("li")).innerHTML="- <code>".concat(i,"</code>"),n.childNodes[1].appendChild(u);case 16:o++,r.next=3;break;case 19:case"end":return r.stop()}}),r,null,[[5,10]])}))),1e4)}var G=r(13),U=r.n(G),q=r(0),F=r(7),L=r.n(F);function M(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function J(e){var t=window.wpi18nLazy;if(t&&t[e]&&L.a&&L.a.i18n){var r,n=M(t[e]);try{for(n.s();!(r=n.n()).done;){var o=r.value;L.a.i18n.setLocaleData(o,e)}}catch(e){n.e(e)}finally{n.f()}}return{_n:function(t,r,n){for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];return q.sprintf.apply(q,[q._n(t,r,n,e)].concat(a))},_nx:function(t,r,n,o){for(var a=arguments.length,i=new Array(a>4?a-4:0),u=4;u<a;u++)i[u-4]=arguments[u];return q.sprintf.apply(q,[q._nx(t,r,n,o,e)].concat(i))},_x:function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return q.sprintf.apply(q,[q._x(t,r,e)].concat(o))},__:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return q.sprintf.apply(q,[q.__(t,e)].concat(n))},_i:function(e,t){return U()({mixedString:e,components:t})}}}var H,Q={path:"/plugin",method:d.GET},W=r(14),z=r.n(W),$=r(15),V=r.n($),X=r(6),Z=r.n(X);!function(e){e[e.Primary=0]="Primary",e[e.Secondary=1]="Secondary"}(H||(H={}));var K,Y=function(e){var t=e.className,r=e.type,n=e.children,o=V()(e,["className","type","children"]),a=Z()(t,{"button-primary":r===H.Primary,"button-secondary":r===H.Secondary||!r});return f.a.createElement("button",z()({className:a},o),n)};!function(e){e.Error="Error",e.Info="Info",e.Success="Success"}(K||(K={}));var ee=function(e){var t=e.type,r=e.children,n=Z()({notice:!0,"notice-error":t===K.Error,"notice-info":t===K.Info,"notice-success":t===K.Success});return f.a.createElement("div",{className:n},f.a.createElement("p",null,r))}},7:function(e,t){e.exports=wp}});
//# sourceMappingURL=index.js.map