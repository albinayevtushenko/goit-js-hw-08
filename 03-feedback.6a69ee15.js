!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(j,t),d?y(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function j(){var e=p();if(T(e))return E(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function E(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function h(){var e=p(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?a:E(p())},h}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=a.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),E={};O.addEventListener("submit",(function(e){e.preventDefault(),O.reset(),console.log(E),localStorage.removeItem("STORAGE_KEY")})),O.addEventListener("input",n((function(e){E[e.target.name]=e.target.value||"";var t=JSON.stringify(E);localStorage.setItem("STORAGE_KEY",t)}),500)),function(){var e=JSON.parse(localStorage.getItem("STORAGE_KEY"));if(E.email=e.email,E.message=e.message,e){var t,n;T.value=null!==(t=e.email)&&void 0!==t?t:"",j.value=null!==(n=e.message)&&void 0!==n?n:""}}()}();
//# sourceMappingURL=03-feedback.6a69ee15.js.map
