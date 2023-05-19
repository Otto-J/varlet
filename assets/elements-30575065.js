import{X as g,ar as L,W as e,Z as A,as as y,at as x,au as z}from"./vue-router-40aafaac.js";import{g as T}from"./shared-2c35195a.js";import{e as p}from"./logger-525ef361.js";function l(t){return window.getComputedStyle(t)}function c(t){if(x(t)){const n=t.innerWidth,o=t.innerHeight,r={x:0,y:0,top:0,left:0,right:n,bottom:o,width:n,height:o};return{...r,toJSON:()=>r}}return t.getBoundingClientRect()}function U(t){const{left:n}=c(t);return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}function X(t){const{top:n}=c(t);return n+(document.body.scrollTop||document.documentElement.scrollTop)}function E(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function O(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}function G(t){const{top:n,bottom:o,left:r,right:s}=c(t),{width:u,height:a}=c(window),f=r<=u&&s>=0,m=n<=a&&o>=0;return f&&m}function H(t){const{transform:n}=l(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function $(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const o=/(scroll|auto)/,{overflowY:r,overflow:s}=l(n);if(o.test(r)||o.test(s))return n}return window}function J(t){const n=[];let o=t;for(;!x(o);)o=$(o),n.push(o);return n}function Z(t,n){if(e(t)){const o=document.querySelector(t);return o||p(n,"target element cannot found"),o}if(z(t))return t;p(n,'type of prop "target" should be a selector or an element object')}function w(){const{width:t,height:n}=c(window);return t>n?{vMin:n,vMax:t}:{vMin:t,vMax:n}}const b=t=>e(t)&&t.endsWith("rem"),q=t=>e(t)&&t.endsWith("em")&&!t.endsWith("rem"),N=t=>e(t)&&t.endsWith("px")||g(t),R=t=>e(t)&&t.endsWith("%"),S=t=>e(t)&&t.endsWith("vw"),W=t=>e(t)&&t.endsWith("vh"),F=t=>e(t)&&t.endsWith("vmin"),V=t=>e(t)&&t.endsWith("vmax"),j=t=>e(t)&&t.startsWith("calc("),B=t=>e(t)&&t.startsWith("var("),C=t=>{if(g(t))return t;if(N(t))return+t.replace("px","");if(!L())return 0;const{width:n,height:o}=c(window);if(S(t))return+t.replace("vw","")*n/100;if(W(t))return+t.replace("vh","")*o/100;if(b(t)){const r=+t.replace("rem",""),s=l(document.documentElement).fontSize;return r*parseFloat(s)}return F(t)?w().vMin:V(t)?w().vMax:e(t)?A(t):0},k=t=>{if(t!=null)return R(t)||S(t)||W(t)||q(t)||b(t)||j(t)||B(t)||F(t)||V(t)?t:`${C(t)}px`},K=(t,n=1)=>{if(t==null)return;const o=k(t),r=o.match(/(vh|%|rem|px|vw)$/)[0];return`${parseFloat(o)*n}${r}`};function i(t){const n=T();return n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,16)}function Q(t){const n=T();n.cancelAnimationFrame?n.cancelAnimationFrame(t):n.clearTimeout(t)}function _(t){i(()=>{i(t)})}function v(){return new Promise(t=>{i(()=>{i(t)})})}function tt(){return new Promise(t=>{i(t)})}function nt(t,{top:n=0,left:o=0,duration:r=300,animation:s}){const u=Date.now(),a=E(t),f=O(t);return new Promise(m=>{const h=()=>{const d=(Date.now()-u)/r;if(d<1){const M=a+(n-a)*s(d),P=f+(o-f)*s(d);t.scrollTo(P,M),i(h)}else t.scrollTo(o,n),m()};i(h)})}function ot(t){return Object.entries(t??{}).reduce((n,[o,r])=>{const s=o.startsWith("--")?o:`--${y(o)}`;return n[s]=r,n},{})}function rt(){return typeof window<"u"&&"ontouchstart"in window}function et(t){return t==="start"||t==="end"?`flex-${t}`:t}export{k as a,c as b,nt as c,v as d,$ as e,J as f,l as g,O as h,G as i,Z as j,E as k,i as l,K as m,_ as n,Q as o,et as p,U as q,tt as r,rt as s,C as t,X as u,H as v,ot as w};
