!function(){var t={135:function(t,e,n){t.exports=n(248)},370:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},248:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new C(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function g(){}function m(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(j([])));x&&x!==n&&r.call(x,a)&&(b=x);var w=y.prototype=g.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=y,u(w,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},131:function(t,e,n){"use strict";t.exports=n.p+"favicon.ico"},218:function(t,e,n){"use strict";t.exports=n.p+"img/footer/facebook_icon.svg"},52:function(t,e,n){"use strict";t.exports=n.p+"img/footer/instagram_icon.svg"},301:function(t,e,n){"use strict";t.exports=n.p+"img/footer/twitter_icon.svg"},538:function(t,e,n){"use strict";t.exports=n.p+"img/logo.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"}(),n.b=document.baseURI||self.location.href,function(){"use strict";function t(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var e=n(135),r=n.n(e);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i,c,u,s,l,f=n(370),h=n.n(f),p=new URL(n(131),n.b),v=new URL(n(538),n.b),d=new URL(n(52),n.b),g=new URL(n(218),n.b),m=new URL(n(301),n.b);h()(p);h()(v),h()(d),h()(g),h()(m),i=document.querySelector(".basket__wrapper"),c=document.querySelector(".basket__list"),u=document.querySelector(".basket__subtotal-amount"),s=function(){var e,n=(e=r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./db.json");case 2:if((e=t.sent).ok){t.next=5;break}throw"Error: "+e.status+e.statusText;case 5:return t.next=7,e.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),l=function(){if(localStorage.getItem("cart")){c.textContent="";var t,e=JSON.parse(localStorage.getItem("cart"));e.forEach((function(t){var e=t.id,n=t.name,r=t.price,o=t.count,a=t.img,i=document.createElement("li");i.className="basket__item",i.dataset.id=e,i.innerHTML='\n        <div class="basket__image">\n          <img src="img/popular/'.concat(a,'" alt="').concat(n,'" width="140" height="140"></img>\n        </div>\n        <div class="basket__details">\n          <h3 class="basket__details-title">').concat(n,'</h3>\n          <div class="basket__details-content">\n            <div class="basket__buttons">\n            ').concat(o>1?'<button class="basket__btn basket__btn-dec"></button>':'<button class="basket__btn basket__btn-delete"></button>','\n              <input class="basket__counter" type="text" value="').concat(o,'">\n              <button class="basket__btn basket__btn-inc"></button>\n            </div>\n            <span class="basket__total">').concat(r*o," &#8381;</span>\n          </div>\n        </div> \n      "),c.append(i)})),t=e.reduce((function(t,e){return t+e.price*e.count}),0),u.textContent=t+" ₽"}else i.classList.add("basket__wrapper--empty"),i.textContent="Корзина пуста";""===c.textContent&&(i.classList.add("basket__wrapper--empty"),i.textContent="Корзина пуста",localStorage.removeItem("cart"))},c.addEventListener("click",(function(t){var e=t.target;if("BUTTON"===e.tagName){var n=e.closest(".basket__item").dataset.id;e.classList.contains("basket__btn-inc")?function(t){var e=JSON.parse(localStorage.getItem("cart"));e.map((function(e){return e.id===t&&e.count++,e})),localStorage.setItem("cart",JSON.stringify(e)),l()}(n):e.classList.contains("basket__btn-dec")?function(t){var e=JSON.parse(localStorage.getItem("cart"));e.map((function(e){return e.id===t&&e.count>1&&e.count--,e})),localStorage.setItem("cart",JSON.stringify(e)),l()}(n):e.classList.contains("basket__btn-delete")&&function(t){var e=JSON.parse(localStorage.getItem("cart")).filter((function(e){return t!==e.id}));localStorage.setItem("cart",JSON.stringify(e)),l()}(n)}})),s().then(l),function(){var t=document.querySelectorAll(".form__input"),e=/^[А-Яа-яЁё]{2,16}$/,n=/[a-z]+@[a-z]+\.[a-z]{2,4}$/;!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function n(t){var n=t.keyCode,r=e,o=r.replace(/\D/g,""),a=this.value.replace(/\D/g,""),i=0,c=r.replace(/[_\d]/g,(function(t){return i<a.length?a.charAt(i++)||o.charAt(i):t}));-1!==(i=c.indexOf("_"))&&(c=c.slice(0,i));var u=r.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(u=new RegExp("^"+u+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"===t.type&&this.value.length<5?(this.value="",this.nextElementSibling.textContent="Поле обязательно для заполнения"):"blur"===t.type&&this.value.length<18?this.nextElementSibling.textContent="Введите корректный номер телефона":this.nextElementSibling.textContent=""}var r,a=o(document.querySelectorAll(t));try{for(a.s();!(r=a.n()).done;){var i=r.value;i.addEventListener("input",n),i.addEventListener("focus",n),i.addEventListener("blur",n)}}catch(t){a.e(t)}finally{a.f()}}("#phone");var r=function(t){"name"===t.name&&(e.test(t.value)||""===t.value?""===t.value?t.nextElementSibling.textContent="Поле обязательно для заполнения":t.nextElementSibling.textContent="":t.nextElementSibling.textContent="Только кирилица"),"email"===t.name&&(n.test(t.value)||""===t.value?""===t.value?t.nextElementSibling.textContent="Поле обязательно для заполнения":t.nextElementSibling.textContent="":t.nextElementSibling.textContent="Пожалуйста, введите корректный email адрес")};t.forEach((function(t){t.addEventListener("blur",(function(){r(t)}))})),t.forEach((function(t){t.addEventListener("input",(function(){r(t)}))}))}(),function(){var t=document.querySelector(".basket__form"),e=t.querySelectorAll(".form__input"),n=document.querySelector(".basket__wrapper"),r=!1,o=JSON.parse(localStorage.getItem("cart")),a=document.createElement("div");a.style.cssText="font-size: 20px; color: #AE7C78",t.addEventListener("submit",(function(i){if(i.preventDefault(),e.forEach((function(t){""===t.value?(t.nextElementSibling.textContent="Поле обязательно для заполнения",r=!1):(t.nextElementSibling.textContent="",r=!0)})),r){t.append(a),a.textContent="Загрузка...";var c=new FormData(t),u={};u.cart=o,c.forEach((function(t,e){u[e]=t})),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(u).then((function(t){if(!t.ok)throw"Error: "+result.status+result.statusText;n.append(a),a.textContent="Спасибо! Мы скоро с вами свяжемся."})).catch((function(t){a.textContent="Что то пошло не так...",console.log(t)})),n.classList.add("basket__wrapper--empty"),n.textContent="Корзина пуста",localStorage.removeItem("cart"),t.reset()}}))}()}()}();