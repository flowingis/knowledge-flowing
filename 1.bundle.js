(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{338:function(t,n,e){(function(n){var e="Expected a function",r="__lodash_hash_undefined__",o=1/0,i="[object Function]",c="[object GeneratorFunction]",u="[object Symbol]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,f=/^\w*$/,l=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,y=/^\[object .+?Constructor\]$/,h="object"==typeof n&&n&&n.Object===Object&&n,_="object"==typeof self&&self&&self.Object===Object&&self,b=h||_||Function("return this")();var v=Array.prototype,d=Function.prototype,g=Object.prototype,m=b["__core-js_shared__"],j=function(){var t=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),O=d.toString,w=g.hasOwnProperty,k=g.toString,E=RegExp("^"+O.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=b.Symbol,P=v.splice,C=J(b,"Map"),$=J(Object,"create"),L=S?S.prototype:void 0,T=L?L.toString:void 0;function A(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function x(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function M(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function F(t,n){for(var e=t.length;e--;)if(B(t[e][0],n))return e;return-1}function H(t,n){for(var e=0,r=(n=function(t,n){if(D(t))return!1;var e=typeof t;if("number"==e||"symbol"==e||"boolean"==e||null==t||N(t))return!0;return f.test(t)||!a.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:function(t){return D(t)?t:q(t)}(n)).length;null!=t&&e<r;)t=t[G(n[e++])];return e&&e==r?t:void 0}function R(t){return!(!K(t)||function(t){return!!j&&j in t}(t))&&(function(t){var n=K(t)?k.call(t):"";return n==i||n==c}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?E:y).test(function(t){if(null!=t){try{return O.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function I(t,n){var e=t.__data__;return function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}(n)?e["string"==typeof n?"string":"hash"]:e.map}function J(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return R(e)?e:void 0}A.prototype.clear=function(){this.__data__=$?$(null):{}},A.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},A.prototype.get=function(t){var n=this.__data__;if($){var e=n[t];return e===r?void 0:e}return w.call(n,t)?n[t]:void 0},A.prototype.has=function(t){var n=this.__data__;return $?void 0!==n[t]:w.call(n,t)},A.prototype.set=function(t,n){return this.__data__[t]=$&&void 0===n?r:n,this},x.prototype.clear=function(){this.__data__=[]},x.prototype.delete=function(t){var n=this.__data__,e=F(n,t);return!(e<0||(e==n.length-1?n.pop():P.call(n,e,1),0))},x.prototype.get=function(t){var n=this.__data__,e=F(n,t);return e<0?void 0:n[e][1]},x.prototype.has=function(t){return F(this.__data__,t)>-1},x.prototype.set=function(t,n){var e=this.__data__,r=F(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},M.prototype.clear=function(){this.__data__={hash:new A,map:new(C||x),string:new A}},M.prototype.delete=function(t){return I(this,t).delete(t)},M.prototype.get=function(t){return I(this,t).get(t)},M.prototype.has=function(t){return I(this,t).has(t)},M.prototype.set=function(t,n){return I(this,t).set(t,n),this};var q=z(function(t){t=function(t){return null==t?"":function(t){if("string"==typeof t)return t;if(N(t))return T?T.call(t):"";var n=t+"";return"0"==n&&1/t==-o?"-0":n}(t)}(t);var n=[];return l.test(t)&&n.push(""),t.replace(s,function(t,e,r,o){n.push(r?o.replace(p,"$1"):e||t)}),n});function G(t){if("string"==typeof t||N(t))return t;var n=t+"";return"0"==n&&1/t==-o?"-0":n}function z(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError(e);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var c=t.apply(this,e);return r.cache=i.set(o,c),c};return r.cache=new(z.Cache||M),r}function B(t,n){return t===n||t!=t&&n!=n}z.Cache=M;var D=Array.isArray;function K(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function N(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&k.call(t)==u}t.exports=function(t,n,e){var r=null==t?void 0:H(t,n);return void 0===r?e:r}}).call(this,e(92))},339:function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return o});e(338);var r=function(t){var n=document.createElement("template");return n.innerHTML=t,n.content.firstChild},o=function(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];r.forEach(function(e){var r="data-bind-".concat(e);Array.from(t.querySelectorAll("[".concat(r,"]"))).forEach(function(t){var o=n[t.getAttribute(r)].bind(n);t.addEventListener(e,o)})})}},345:function(t,n){t.exports='<div>\n    <button class="ui primary button" data-bind-click="onLoginClick">\n        Login\n    </button>\n</div>'},347:function(t,n,e){"use strict";e.r(n);var r=e(345),o=e.n(r),i=e(339),c=e(49);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(p.prototype,HTMLElement.prototype),Object.setPrototypeOf(p,HTMLElement);var y=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,l(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(n,p),function(t,n,e){n&&a(t.prototype,n),e&&a(t,e)}(n,[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var t=Object(i.b)(o.a);Object(i.a)(t,this,"click"),this.appendChild(t),this.style.display="block"}},{key:"onLoginClick",value:function(){c.a.signIn()}}]),n}();window.customElements.define("kf-pages-login",y)}}]);