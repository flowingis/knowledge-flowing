(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{339:function(t,n,e){"use strict";e.d(n,"b",function(){return r});var r=function(t){var n=window.parseInt(t,10);if(!Number.isNaN(n))return n;var e=new RegExp("https://".concat("ideato",".pipedrive.com/deal/([0-9]+)")),r=t.match(e);return r&&r[1]};n.a={get:function(t){!function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Invariant Violation";if(!t){var e=new Error(n);throw e.name="Invariant Violation",e.framesToPop=1,e}}(t,"Id is required for search");var n="https://".concat("ideato",".pipedrive.com/v1/deals/").concat(t,"?api_token=").concat("40f9fdd51f3051900f39038894050212e3930a88");return window.fetch(n).then(function(t){return t.json()})}}},340:function(t,n,e){"use strict";var r=e(339),i=e(64),o=e.n(i);function a(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,i)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var o=t.apply(n,e);function c(t){a(o,r,i,c,u,"next",t)}function u(t){a(o,r,i,c,u,"throw",t)}c(void 0)})}}var u=function(){var t=function(){var t=c(regeneratorRuntime.mark(function t(n){var e,r,i,a=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(a.length>1&&void 0!==a[1])||a[1],r=a.length>2&&void 0!==a[2]?a[2]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",i=e?"=":"contains",t.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat("application/vnd.google-apps.folder","' and trashed = false and name ").concat(i," '").concat(n,"' and '").concat(r,"' in parents"),pageSize:1,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files.0")}));case 4:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();return{list:function(){var t=c(regeneratorRuntime.mark(function t(){var n,e,r,i,a,c=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:{},e=n.mimeType,r=void 0===e?"application/vnd.google-apps.folder":e,i=n.parent,a=void 0===i?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":i,t.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat(r,"' and trashed = false and '").concat(a,"' in parents"),orderBy:"name",pageSize:1e3,fields:"files(id, name, webViewLink)"}).then(function(t){return o()(t,"result.files")}));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),findDirectory:t,createDirectory:function(){var t=c(regeneratorRuntime.mark(function t(n){var e,r,i=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",r={name:n,parents:[e],mimeType:"application/vnd.google-apps.folder"},t.abrupt("return",gapi.client.drive.files.create({resource:r,fields:"id, name, webViewLink"}).then(function(t){return t.result}));case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()}}();function s(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,i)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var o=t.apply(n,e);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)})}}var p=function(t){return t.toString().padStart(5,"0")};n.a=function(t){var n=function(){var t=f(regeneratorRuntime.mark(function t(n){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=p(n),t.abrupt("return",u.findDirectory(e,!1));case 2:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();return{create:function(){var n=f(regeneratorRuntime.mark(function n(e){var r,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get(e);case 2:return r=n.sent,i="".concat(p(e)," - ").concat(o()(r,"data.title")),n.abrupt("return",u.createDirectory(i));case 5:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),list:function(){var t=f(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.list();case 2:return n=t.sent,t.abrupt("return",n.map(function(t){var n=t.name.split(" - ");return{id:parseInt(n[0]),title:n[1],webViewLink:t.webViewLink}}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),get:n}}(r.a)},341:function(t,n){t.exports='<kf-components-menu>\n    <div>\n       <h1>Archive</h1>\n       <table class="ui very basic table">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Link</th>\n          </tr>\n        </thead>\n        <tbody>\n         \n        </tbody>\n      </table>\n    </div>\n</kf-components-menu>'},344:function(t,n,e){"use strict";e.r(n);var r=e(341),i=e.n(r),o=e(65),a=e(340);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,i)}function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(d.prototype,HTMLElement.prototype),Object.setPrototypeOf(d,HTMLElement);var h=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,p(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(n,d),function(t,n,e){n&&s(t.prototype,n),e&&s(t,e)}(n,[{key:"connectedCallback",value:function(){this.render(),this.tableBody=this.querySelector("tbody"),this.list()}},{key:"list",value:function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var o=t.apply(n,e);function a(t){u(o,r,i,a,c,"next",t)}function c(t){u(o,r,i,a,c,"throw",t)}a(void 0)})}}(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.tableBody.innerHTML="",t.next=3,a.a.list();case 3:t.sent.map(function(t){return"<tr>\n            <td>".concat(t.id,"</td>\n            <td>").concat(t.title,'</td>\n            <td><a target="_blank" href="').concat(t.webViewLink,'">').concat(t.webViewLink,"</a></td>\n        </tr>")}).map(o.b).forEach(function(t){n.tableBody.appendChild(t)});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=Object(o.b)(i.a);Object(o.a)(t,this,"click","input"),this.appendChild(t),this.style.display="block"}}]),n}();window.customElements.define("kf-pages-archive",h)}}]);