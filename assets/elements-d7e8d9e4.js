import{W as e,X as w,Z as V,ar as C,as as M}from"./vue-router-3467edf1.js";import{g}from"./shared-72da4837.js";import{e as d}from"./logger-525ef361.js";function k(t){const{left:n}=t.getBoundingClientRect();return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}function H(t){const{top:n}=t.getBoundingClientRect();return n+(document.body.scrollTop||document.documentElement.scrollTop)}function I(t){return t.getBoundingClientRect().top}function P(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function L(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}async function D(t){await E();const{top:n,bottom:o,left:r,right:i}=t.getBoundingClientRect(),{innerWidth:f,innerHeight:c}=window,a=r<=f&&i>=0,u=n<=c&&o>=0;return a&&u}function U(t){const{transform:n}=window.getComputedStyle(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function y(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const o=/(scroll|auto)/,{overflowY:r,overflow:i}=window.getComputedStyle(n);if(o.test(r)||o.test(i))return n}return window}function X(t){const n=[];let o=t;for(;o!==window;)o=y(o),n.push(o);return n}function Y(t,n){if(e(t)){const o=document.querySelector(t);return o||d(n,"target element cannot found"),o}if(M(t))return t;d(n,'type of prop "target" should be a selector or an element object')}function p(){const{innerWidth:t,innerHeight:n}=window;return t>n?{vMin:n,vMax:t}:{vMin:t,vMax:n}}const h=t=>e(t)&&t.endsWith("rem"),A=t=>e(t)&&t.endsWith("px")||w(t),R=t=>e(t)&&t.endsWith("%"),T=t=>e(t)&&t.endsWith("vw"),x=t=>e(t)&&t.endsWith("vh"),b=t=>e(t)&&t.endsWith("vmin"),S=t=>e(t)&&t.endsWith("vmax"),z=t=>e(t)&&t.startsWith("calc("),B=t=>e(t)&&t.startsWith("var("),$=t=>{if(w(t))return t;if(A(t))return+t.replace("px","");if(T(t))return+t.replace("vw","")*window.innerWidth/100;if(x(t))return+t.replace("vh","")*window.innerHeight/100;if(h(t)){const n=+t.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return n*parseFloat(o)}return b(t)?p().vMin:S(t)?p().vMax:e(t)?V(t):0},q=t=>{if(t!=null)return R(t)||T(t)||x(t)||h(t)||z(t)||B(t)||b(t)||S(t)?t:`${$(t)}px`},G=(t,n=1)=>{if(t==null)return;const o=q(t),r=o.match(/(vh|%|rem|px|vw)$/)[0];return`${parseFloat(o)*n}${r}`};function s(t){const n=g();return n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,16)}function Z(t){const n=g();n.cancelAnimationFrame?n.cancelAnimationFrame(t):n.clearTimeout(t)}function J(t){s(()=>{s(t)})}function E(){return new Promise(t=>{s(()=>{s(t)})})}function K(){return new Promise(t=>{s(t)})}function Q(t,{top:n=0,left:o=0,duration:r=300,animation:i}){const f=Date.now(),c=P(t),a=L(t);return new Promise(u=>{const m=()=>{const l=(Date.now()-f)/r;if(l<1){const W=c+(n-c)*i(l),F=a+(o-a)*i(l);t.scrollTo(F,W),s(m)}else t.scrollTo(o,n),u()};s(m)})}function _(t){return Object.entries(t??{}).reduce((n,[o,r])=>{const i=o.startsWith("--")?o:`--${C(o)}`;return n[i]=r,n},{})}function v(){return typeof window<"u"&&"ontouchstart"in window}function tt(t){return t==="start"||t==="end"?`flex-${t}`:t}export{q as a,Q as b,X as c,E as d,L as e,Y as f,y as g,P as h,D as i,s as j,Z as k,k as l,G as m,J as n,I as o,tt as p,H as q,K as r,v as s,$ as t,U as u,_ as v};
