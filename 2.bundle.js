(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{341:function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},342:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},343:function(t,e,n){"use strict";n.d(e,"b",function(){return o});var r=n(95),o=function(t){var e=window.parseInt(t,10);if(!Number.isNaN(e))return e;var n=new RegExp("https://".concat("ideato",".pipedrive.com/deal/([0-9]+)")),r=t.match(n);return r&&r[1]};e.a={get:function(t){Object(r.a)(t,"Id is required for search");var e="https://".concat("ideato",".pipedrive.com/v1/deals/").concat(t,"?api_token=").concat("40f9fdd51f3051900f39038894050212e3930a88");return window.fetch(e).then(function(t){return t.json()})}}},344:function(t,e,n){"use strict";var r=n(343),o=n(65),a=n.n(o),i=function(t){var e=t.name,n=t.mimeType,r=t.body,o=t.parent,a=t.bodyMimeType,i=void 0===a?"application/octet-stream":a,u=t.boundary,c="--"+u+"--",s="--"+u+"\r\nContent-Type: application/json\r\n\r\n";return s+=JSON.stringify({name:e,parents:[o],mimeType:n})+"\r\n",s+="--"+u+"\r\nContent-Type: ".concat(i,"\r\n\r\n"),s+="".concat(r,"\r\n"),s+=c},u=n(347),c=n.n(u),s=n(31);function p(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,u,"next",t)}function u(t){p(a,r,o,i,u,"throw",t)}i(void 0)})}}var d=function(){var t=function(){var t=f(regeneratorRuntime.mark(function t(e){var n,r,o,a,u,p,f,d,l,v,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.data,o=e.mimeType,a=void 0===o?"application/json":o,u=e.parent,p=void 0===u?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":u,f=c.a.v4(),d=new window.Headers({Authorization:"Bearer ".concat(s.a.getToken()),"Content-Type":"multipart/related; boundary=".concat(f)}),l=i({name:n,boundary:f,body:r,parent:p,mimeType:a}),v="https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",h={method:"POST",headers:d,body:l},t.abrupt("return",window.fetch(v,h).then(function(t){return t.json()}).then(function(t){return t.id}));case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e=function(){var t=f(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://content.googleapis.com/drive/v3/files/".concat(e,"?alt=media&fields=webContentLink&key=").concat("AIzaSyCctCJMLPaod4CCB2ywGgkYwpSzZYPvD3c"),r=new window.Headers({Authorization:"Bearer ".concat(s.a.getToken())}),o={method:"GET",headers:r},t.abrupt("return",window.fetch(n,o).then(function(t){return t.text()}));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n=function(){var t=f(regeneratorRuntime.mark(function t(e){var n,r,o,i,u=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(u.length>1&&void 0!==u[1])||u[1],r=u.length>2?u[2]:void 0,o=u.length>3?u[3]:void 0,i="trashed = false and name ".concat(n?"=":"contains"," '").concat(e,"'"),r&&(i="".concat(i," and '").concat(r,"' in parents")),o&&(i="".concat(i," and mimeType='").concat(o)),t.abrupt("return",gapi.client.drive.files.list({q:i,pageSize:1,fields:"files(id, name, webViewLink)"}).then(function(t){return a()(t,"result.files.0")}));case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return{list:function(){var t=f(regeneratorRuntime.mark(function t(){var e,n,r,o,i,u=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:{},n=e.mimeType,r=void 0===n?"application/vnd.google-apps.folder":n,o=e.parent,i=void 0===o?"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD":o,t.abrupt("return",gapi.client.drive.files.list({q:"mimeType='".concat(r,"' and trashed = false and '").concat(i,"' in parents"),orderBy:"name desc",pageSize:1e3,fields:"files(id, name, webViewLink)"}).then(function(t){return a()(t,"result.files")}));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),find:n,createDirectory:function(){var t=f(regeneratorRuntime.mark(function t(e){var n,r,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"1WZS3_nShJv-Im3xPd69UytYHl0mWstkD",r={name:e,parents:[n],mimeType:"application/vnd.google-apps.folder"},t.abrupt("return",gapi.client.drive.files.create({resource:r,fields:"id, name, webViewLink"}).then(function(t){return t.result}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),create:t,download:e,update:function(t){var e=t.fileId,n=t.data,r=new window.Headers({Authorization:"Bearer ".concat(s.a.getToken())}),o=new window.FormData;o.append("metadata",new window.Blob([JSON.stringify({})],{type:"application/json"})),o.append("data",new window.Blob([JSON.stringify(n)],{type:"application/json"}));var a={method:"PATCH",headers:r,body:o},i="https://www.googleapis.com/upload/drive/v3/files/".concat(e,"?uploadType=multipart");return window.fetch(i,a).then(function(t){return t.json()}).then(function(t){return t.id})}}}();function l(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}var v={getData:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){l(a,r,o,i,u,"next",t)}function u(t){l(a,r,o,i,u,"throw",t)}i(void 0)})}}(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gapi.client.sheets.spreadsheets.values.get({spreadsheetId:e,range:n});case 2:return r=t.sent,t.abrupt("return",r.result);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()};function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){m(a,r,o,i,u,"next",t)}function u(t){m(a,r,o,i,u,"throw",t)}i(void 0)})}}var w=function(t){return t.toString().padStart(5,"0")},b=function(t){var e=t.name.split(" - ");return{directoryId:t.id,id:parseInt(e[0]),title:e[1],webViewLink:t.webViewLink}};e.a=function(t){var e=function(){var t=y(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.find("".concat(e,".json"),!0);case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return r=n.id,t.next=8,d.download(r);case 8:if(o=t.sent){t.next=11;break}return t.abrupt("return");case 11:return t.abrupt("return",JSON.parse(o));case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n=function(){var e=y(regeneratorRuntime.mark(function e(n){var r,o,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(n);case 2:return r=e.sent,o=a()(r,"data.title"),i="".concat(w(n)," - ").concat(o),e.next=7,d.createDirectory(i);case 7:return u=e.sent,c={id:n,directory:u,title:o,elements:[]},e.abrupt("return",d.create({name:"".concat(n,".json"),parent:u.id,data:JSON.stringify(c)}));case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r=function(){var t=y(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,d.find("".concat(n,".json"),!0);case 3:if(r=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",d.update({fileId:r.id,data:e}));case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return{create:n,list:function(){var t=y(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.list();case 2:return e=t.sent,t.abrupt("return",e.map(b));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),listElements:function(){var t=y(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getData("1Naop1VImN2N6EZAyxVdrqIg_s4onjVbD1MHdX3C43q0","Elements!A2:C");case 2:return e=t.sent,n=a()(e,"values",[]),t.abrupt("return",n.map(function(t,e){var n=h(t,3);return{id:e,name:n[0],length:n[1],notes:n[2]}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),get:e,save:r}}(r.a)},345:function(t,e,n){var r=n(342),o=n(341);t.exports=function(t,e,n){var a=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var u=0;u<16;++u)e[a+u]=i[u];return e||o(i)}},346:function(t,e,n){var r,o,a=n(342),i=n(341),u=0,c=0;t.exports=function(t,e,n){var s=e&&n||0,p=e||[],f=(t=t||{}).node||r,d=void 0!==t.clockseq?t.clockseq:o;if(null==f||null==d){var l=a();null==f&&(f=r=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==d&&(d=o=16383&(l[6]<<8|l[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:c+1,m=v-u+(h-c)/1e4;if(m<0&&void 0===t.clockseq&&(d=d+1&16383),(m<0||v>u)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,c=h,o=d;var y=(1e4*(268435455&(v+=122192928e5))+h)%4294967296;p[s++]=y>>>24&255,p[s++]=y>>>16&255,p[s++]=y>>>8&255,p[s++]=255&y;var w=v/4294967296*1e4&268435455;p[s++]=w>>>8&255,p[s++]=255&w,p[s++]=w>>>24&15|16,p[s++]=w>>>16&255,p[s++]=d>>>8|128,p[s++]=255&d;for(var b=0;b<6;++b)p[s+b]=f[b];return e||i(p)}},347:function(t,e,n){var r=n(346),o=n(345),a=o;a.v1=r,a.v4=o,t.exports=a},350:function(t,e){t.exports='<kf-components-menu>\n    <div>\n       <h1>Archive</h1>\n       <table class="ui very basic table">\n        <thead>\n          <tr>\n            <th>Deal</th>\n            <th>Name</th>\n            <th>Link</th>\n          </tr>\n        </thead>\n        <tbody>\n         \n        </tbody>\n      </table>\n    </div>\n</kf-components-menu>'},355:function(t,e,n){"use strict";n.r(e);var r=n(350),o=n.n(r),a=n(66),i=n(344),u=n(43);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(v.prototype,HTMLElement.prototype),Object.setPrototypeOf(v,HTMLElement);var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,d(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,v),function(t,e,n){e&&p(t.prototype,e),n&&p(t,n)}(e,[{key:"connectedCallback",value:function(){this.render(),this.tableBody=this.querySelector("tbody"),this.list()}},{key:"list",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)})}}(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(a.b)("<tbody></tbody>"),t.next=3,i.a.list();case 3:t.sent.map(function(t){return"<tr>\n            <td>".concat(t.id,"</td>\n            <td>").concat(t.title,'</td>\n            <td>\n              <a class="ui button primary" target="_blank" data-navigo href="discovery/').concat(t.id,'">\n                Open\n              </a>\n              <a class="ui button" target="_blank" href="').concat(t.webViewLink,'">\n                <i class="google drive icon"></i>\n                Drive\n              </a>\n            </td>\n        </tr>')}).map(a.b).forEach(function(t){e.appendChild(t)}),this.tableBody.replaceWith(e),u.a.getRouter().updatePageLinks();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=Object(a.b)(o.a);Object(a.a)(t,this,"click","input"),this.appendChild(t),this.style.display="block"}}]),e}();window.customElements.define("kf-pages-archive",h)}}]);