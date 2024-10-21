(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}const i=function(){return t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sections=e,this.keywords=n,this.update()},n=[{key:"createOutlineSection",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.toLowerCase(),i=document.createElement("div");i.classList.add("outline-sidebar-".concat(n));var o=document.createElement("h2");o.innerText=n,o.classList.add("outline-sidebar-".concat(n,"-heading")),i.appendChild(o);var r=document.createElement("ul");return r.classList.add("outline-sidebar-".concat(n,"-list")),null===(t=this[e])||void 0===t||t.map((function(t){var e=document.createElement("li");e.innerText=t,e.classList.add("outline-sidebar-".concat(n,"-list-item")),r.appendChild(e)})),i.appendChild(r),i}},{key:"update",value:function(){var t=document.createElement("div");t.classList.add("outline-sidebar-wrapper"),t.appendChild(this.createOutlineSection("sections")),t.appendChild(this.createOutlineSection("keywords")),document.body.appendChild(t)}}],n&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function a(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var c=new(function(){return t=function t(){var e,n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n="committifyHash",i=function(t){for(var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=3735928559^n,o=1103547991^n,r=0;r<t.length;r++)e=t.charCodeAt(r),i=Math.imul(i^e,2654435761),o=Math.imul(o^e,1597334677);return i=Math.imul(i^i>>>16,2246822507),i^=Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507),4294967296*(2097151&(o^=Math.imul(i^i>>>13,3266489909)))+(i>>>0)}("committify"),(n=a(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,this.getConfig()?this.appConfig=this.getConfig():this.setConfig()},e=[{key:"getSections",value:function(){return this.appConfig.sections}},{key:"getKeywords",value:function(){return this.appConfig.keywords}},{key:"getConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.committifyHash,e=window.localStorage.getItem(t);return e?JSON.parse(e):void 0}},{key:"setConfig",value:function(){arguments.length>0&&void 0!==arguments[0]||this.committifyHash;var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};0===Object.entries(t).length&&(t.sections=["title","body"],t.keywords=["fix","feat","style","chore","refactor","docs","test","perf","ci","build","revert"]),this.saveConfig(t)}},{key:"saveConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.appConfig=t,window.localStorage.setItem(this.committifyHash,JSON.stringify(t))}}],e&&r(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}());new i(c.getSections(),c.getKeywords())})();