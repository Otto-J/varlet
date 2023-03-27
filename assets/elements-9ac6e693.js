import{W as r,X as w,Z as V,ar as M,as as P}from"./vue-router.esm-bundler-1e250ce9.js";import{g as h}from"./shared-ed6496a2.js";import{e as d}from"./logger-525ef361.js";function k(t){const{left:n}=t.getBoundingClientRect();return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}function H(t){const{top:n}=t.getBoundingClientRect();return n+(document.body.scrollTop||document.documentElement.scrollTop)}function C(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function L(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}async function I(t){await E();const{top:n,bottom:o,left:e,right:i}=t.getBoundingClientRect(),{innerWidth:f,innerHeight:c}=window,a=e<=f&&i>=0,u=n<=c&&o>=0;return a&&u}function D(t){const{transform:n}=window.getComputedStyle(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function y(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const o=/(scroll|auto)/,{overflowY:e,overflow:i}=window.getComputedStyle(n);if(o.test(e)||o.test(i))return n}return window}function U(t){const n=[];let o=t;for(;o!==window;)o=y(o),n.push(o);return n}function X(t,n){if(r(t)){const o=document.querySelector(t);return o||d(n,"target element cannot found"),o}if(P(t))return t;d(n,'type of prop "target" should be a selector or an element object')}function p(){const{innerWidth:t,innerHeight:n}=window;return t>n?{vMin:n,vMax:t}:{vMin:t,vMax:n}}const g=t=>r(t)&&t.endsWith("rem"),A=t=>r(t)&&t.endsWith("px")||w(t),z=t=>r(t)&&t.endsWith("%"),x=t=>r(t)&&t.endsWith("vw"),T=t=>r(t)&&t.endsWith("vh"),b=t=>r(t)&&t.endsWith("vmin"),S=t=>r(t)&&t.endsWith("vmax"),R=t=>r(t)&&t.startsWith("calc("),$=t=>r(t)&&t.startsWith("var("),q=t=>{if(w(t))return t;if(A(t))return+t.replace("px","");if(x(t))return+t.replace("vw","")*window.innerWidth/100;if(T(t))return+t.replace("vh","")*window.innerHeight/100;if(g(t)){const n=+t.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return n*parseFloat(o)}return b(t)?p().vMin:S(t)?p().vMax:r(t)?V(t):0},B=t=>{if(t!=null)return z(t)||x(t)||T(t)||g(t)||R(t)||$(t)||b(t)||S(t)?t:`${q(t)}px`},Y=(t,n=1)=>{if(t==null)return;const o=B(t),e=o.match(/(vh|%|rem|px|vw)$/)[0];return`${parseFloat(o)*n}${e}`};function s(t){const n=h();return n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,16)}function G(t){const n=h();n.cancelAnimationFrame?n.cancelAnimationFrame(t):n.clearTimeout(t)}function Z(t){s(()=>{s(t)})}function E(){return new Promise(t=>{s(()=>{s(t)})})}function J(){return new Promise(t=>{s(t)})}function K(t,{top:n=0,left:o=0,duration:e=300,animation:i}){const f=Date.now(),c=C(t),a=L(t);return new Promise(u=>{const m=()=>{const l=(Date.now()-f)/e;if(l<1){const W=c+(n-c)*i(l),F=a+(o-a)*i(l);t.scrollTo(F,W),s(m)}else t.scrollTo(o,n),u()};s(m)})}function Q(t){return Object.entries(t??{}).reduce((n,[o,e])=>{const i=o.startsWith("--")?o:`--${M(o)}`;return n[i]=e,n},{})}function _(){return typeof window<"u"&&"ontouchstart"in window}function v(t){return t==="start"||t==="end"?`flex-${t}`:t}export{B as a,K as b,U as c,E as d,L as e,X as f,y as g,C as h,I as i,s as j,G as k,k as l,Y as m,Z as n,H as o,v as p,D as q,J as r,_ as s,q as t,Q as u};
