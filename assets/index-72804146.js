import{al as v,am as n}from"./index-c1c53a77.js";function a(e){if(!e)return!1;const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return!!(e==="desktop"&&t||e==="mobile"&&!t)}function _(e){const t=e.getAttribute("style");return t?t.split(";").filter(Boolean).reduce((r,i)=>{const[o,s]=i.split(":").map(y=>y.trim());return r[v(o)]=s,r},{}):{}}function p(e){const{value:t}=e._hover,r=_(e);Object.keys(t).forEach(i=>{const o=v(i);t[o]!=null&&r[o]&&(e._hover.rawStyle[o]=r[o])})}function u(e,t){Object.keys(t).forEach(r=>{const i=t[r];i!=null&&(e.style[r]=i)})}function S(e){Object.keys(e._hover.value).forEach(t=>{e._hover.value[t]!=null&&(e.style[t]="")})}function l(e){S(e),u(e,e._hover.rawStyle)}function c(){const{value:e}=this._hover;if(this._hover.hovering=!0,n(e)){e(this._hover.hovering);return}u(this,e)}function h(){if(this._hover.hovering=!1,n(this._hover.value)){this._hover.value(this._hover.hovering);return}l(this)}function f(e,t){var o;const{arg:r,value:i}=t;a(r)||(e._hover={value:i,hovering:((o=e._hover)==null?void 0:o.hovering)??!1,rawStyle:{}},p(e),e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",h))}function d(e,t){a(t.arg)||(l(e),e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",h))}function g(e,t){e._hover&&d(e,t)}function b(e,t){return!n(t.value)&&e._hover.hovering}function E(e,t){f(e,t),b(e,t)&&u(e,t.value)}const w={mounted:f,unmounted:d,beforeUpdate:g,updated:E,install(e){e.directive("hover",this)}},k=w;export{k as v};
