(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  outline: none;\n  border: 0;\n}\n\n.app {\n  background-color: #bbbbbb;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-transform: uppercase;\n  font-family: "Arial";\n}\n\n.wrapper {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  margin: 40px 0;\n  width: 40%;\n  padding: 40px;\n  border-radius: 24px;\n\n  font-size: 18px;\n}\n\nhr.solid {\n  border-top: 2px solid #bbb;\n  margin-bottom: 10px;\n}\n\nli {\n  list-style-type: none;\n}\n\nul {\n  margin-left: 0;\n  padding-left: 0;\n}\n\n.info-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.map {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 46%;\n}\n\n.map-img {\n  border-radius: 10px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 46%;\n  background-color: #bbbbbb;\n  border-radius: 10px;\n}\n\n.search {\n  display: inline-flex;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.search-button {\n  display: inline-flex;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 12px;\n  background-color: #fff;\n  margin-left: 10px;\n}\n\n.search-button:hover {\n  background-color: #bbb;\n  cursor: pointer;\n}\n\n.search-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.search-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  order: -1;\n}\n\n.search-field {\n  width: 300px;\n  border: 0;\n}\n\n.search-field:focus {\n  outline: none;\n}\n\n.history-list-el {\n  margin: 2px 0;\n}\n\n.history-list-el:hover {\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.history-wrapper {\n  width: inherit;\n}\n\n.main-wrapper {\n  margin-right: 40px;\n}\n\n.city-name {\n  font-weight: bold;\n  margin-top: 4px;\n}\n',""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),p=t.n(l),u=t(540),d=t.n(u),f=t(113),m=t.n(f),h=t(365),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals;const y="cbbeefeb-af7c-4f03-9559-3749ec3af425",v="06ff609e1920bf484f9364dc64081fc2";async function b(n){return(await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${n}&appid=${v}`)).json()}function x(n,e){n.innerHTML=`\n            <img src ='http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png'>\n            <h2>${Math.round(e?.main?.temp)}°C </h2>            \n            <span class="city-name">${e.name}</span>\n    `}function w(n,e){n.innerHTML=`\n            <img class="map-img" src="https://static-maps.yandex.ru/v1?ll=${e?.coord.lon},${e?.coord.lat}&lang=en_RU&size=200,200&z=10&apikey=${y}">\n`}function S(n,e){n.innerHTML=`<ol class="history-list">\n                        ${e.map((n=>`<li class="history-list-el">${n}</li>`)).join("")}\n                    </ol>`}function $(){const n=document.querySelectorAll(".history-list-el"),e=document.querySelector(".map"),t=document.querySelector(".info");n.forEach((n=>{n.addEventListener("click",(async()=>{const r=n.innerText,o=await b(r);x(t,o),w(e,o)}))}))}document.querySelector(".app").innerHTML='    \n    <div class="wrapper">\n          <div class="main-wrapper">\n            <form class="search-wrapper">\n              <div class="search">\n                <input type="text" class="search-field" placeholder="Type city" required/>\n                <img\n                  src="https://img.icons8.com/?size=100&id=131&format=png&color=000000"\n                  alt=""\n                  class="search-icon"\n                />\n              </div>\n              <button type="submit" class="search-button">Show</button>\n            </form>\n            <div class="info-wrapper">\n              <section class="map">                         \n              </section>\n              <section class="info"></section>             \n            </div>\n          </div>\n          <div class="history-wrapper">\n            <h3>History</h3>\n            <hr class="solid" />\n            <div id="list"></div>\n          </div>\n        </div>\n',navigator.geolocation.getCurrentPosition((async function(n){let e={lat:n.coords.latitude,lng:n.coords.longitude};document.querySelector(".map").innerHTML=`<img class="map-img" src="https://static-maps.yandex.ru/v1?ll=${e.lng},${e.lat}&lang=en_RU&size=200,200&z=10&apikey=${y}">`;let t=await async function(n){return await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${n.lat}&lon=${n.lng}&appid=${v}`).then((n=>n.json()))}(e);document.querySelector(".info").innerHTML=`\n            <img src ='http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png'>\n            <h2>${Math.round(t?.main?.temp)}°C </h2>            \n            <span class="city-name">${t?.name}</span>\n    `})),function(){const n=document.querySelector("form"),e=document.querySelector(".info"),t=document.querySelector(".map"),r=document.querySelector("#list"),o=function(){let n=JSON.parse(localStorage.getItem("list"));return null===n?[]:n}();S(r,o),n.addEventListener("submit",(async n=>{n.preventDefault();const a=n.target.querySelector("input"),i=a.value;a.value="",!o.includes(i)&&o.push(i),o.length>10&&o.shift();const s=await b(i);var c;x(e,s),w(t,s),S(r,o),c=o,localStorage.setItem("list",JSON.stringify(c)),$()}))}(),$()})();