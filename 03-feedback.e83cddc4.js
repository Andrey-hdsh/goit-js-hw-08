!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),v=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,o,a,u,l,f,s=0,c=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function T(e){return s=e,l=setTimeout(_,t),c?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function _(){var e=p();if(j(e))return h(e);l=setTimeout(_,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function h(e){return l=void 0,v&&i?y(e):(i=o=void 0,u)}function w(){var e=p(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return T(f);if(m)return l=setTimeout(_,t),y(f)}return void 0===l&&(l=setTimeout(_,t)),u}return t=O(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?d(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=o=l=void 0},w.flush=function(){return void 0===l?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var T=document.querySelector("form");T.addEventListener("submit",(function(e){e.preventDefault(),""!==T.elements.email.value||""!==T.elements.message.value?(console.log({email:T.elements.email.value,message:T.elements.message.value}),localStorage.removeItem("FORM_DATA_KEY"),T.reset()):alert("Будь ласка, заповніть усі обов'язкові поля")}));var j=e(t)((function(){var e={email:T.elements.email.value,message:T.elements.message.value};localStorage.setItem("FORM_DATA_KEY",JSON.stringify(e))}),500);T.addEventListener("input",j);var _=localStorage.getItem("FORM_DATA_KEY");if(_){var h=JSON.parse(_);T.elements.email.value=h.email||"",T.elements.message.value=h.message||"",alert("Всі поля форми повинні бути заповнені")}else T.reset()}();
//# sourceMappingURL=03-feedback.e83cddc4.js.map