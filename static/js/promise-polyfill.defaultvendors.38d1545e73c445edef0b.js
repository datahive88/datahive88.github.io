"use strict";(self.webpackChunk_nord_ucp_client=self.webpackChunk_nord_ucp_client||[]).push([[1994],{16970:function(e,t,n){function r(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function o(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var f=n.then;if("function"==typeof f)return void f.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var f=0;f<r.length;f++)i(f,r[f])}))}var i=setTimeout;function f(e){return Boolean(e&&void 0!==e.length)}function u(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function l(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}a(t.promise,r)}else(1===e._state?a:s)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void d(e);if("function"==typeof n)return void h((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,d(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)l(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1;try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return;n=!0,s(t,e)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(u);return l(this,new p(e,t,n)),n},c.prototype.finally=r,c.all=function(e){return new c((function(t,n){if(!f(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,(function(t){i(e,t)}),n)}r[e]=f,0==--o&&t(r)}catch(e){n(e)}}for(var u=0;u<r.length;u++)i(u,r[u])}))},c.allSettled=o,c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,n){n(e)}))},c.race=function(e){return new c((function(t,n){if(!f(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)c.resolve(e[r]).then(t,n)}))},c._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){i(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console};var y=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("unable to locate global object")}();"function"!=typeof y.Promise?y.Promise=c:y.Promise.prototype.finally?y.Promise.allSettled||(y.Promise.allSettled=o):y.Promise.prototype.finally=r}}]);