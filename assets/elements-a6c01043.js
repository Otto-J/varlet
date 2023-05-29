import{ar as y,X as b,as as A,W as s,Z as C,at as $,au as T,av as z}from"./vue-router-6d66666a.js";import{e as p}from"./logger-4bf9ea67.js";const X=t=>t==null?!1:t.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg|webp)$/.test(t),k=t=>t==null?!1:t.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(t),G=t=>{const n=[];return{cache:n,has(e){return this.cache.includes(e)},add(e){this.has(e)||(this.cache.length===t&&n.shift(),this.cache.push(e))},remove(e){this.has(e)&&y(this.cache,e)},clear(){this.cache.length=0}}},J=t=>t,g=t=>t**3,Z=t=>t<.5?g(t*2)/2:1-g((1-t)*2)/2,K=(t,n)=>t??n,x=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self,Q=(t="",n,e="")=>{if(t.length>=n)return t;const o=n-t.length,r=Math.floor(o/e.length);return e.repeat(r)+e.slice(0,o%e.length)+t};function l(t){return window.getComputedStyle(t)}function c(t){if(T(t)){const n=t.innerWidth,e=t.innerHeight,o={x:0,y:0,top:0,left:0,right:n,bottom:e,width:n,height:e};return{...o,toJSON:()=>o}}return t.getBoundingClientRect()}function _(t){const{left:n}=c(t);return n+(document.body.scrollLeft||document.documentElement.scrollLeft)}function v(t){const{top:n}=c(t);return n+(document.body.scrollTop||document.documentElement.scrollTop)}function O(t){const n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function j(t){const n="scrollLeft"in t?t.scrollLeft:t.pageXOffset;return Math.max(n,0)}function tt(t){const{top:n,bottom:e,left:o,right:r}=c(t),{width:u,height:a}=c(window),f=o<=u&&r>=0,h=n<=a&&e>=0;return f&&h}function nt(t){const{transform:n}=l(t);return+n.slice(n.lastIndexOf(",")+2,n.length-1)}function E(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const e=/(scroll|auto)/,{overflowY:o,overflow:r}=l(n);if(e.test(o)||e.test(r))return n}return window}function et(t){const n=[];let e=t;for(;!T(e);)e=E(e),n.push(e);return n}function ot(t,n){if(s(t)){const e=document.querySelector(t);return e||p(n,"target element cannot found"),e}if(z(t))return t;p(n,'type of prop "target" should be a selector or an element object')}function w(){const{width:t,height:n}=c(window);return t>n?{vMin:n,vMax:t}:{vMin:t,vMax:n}}const S=t=>s(t)&&t.endsWith("rem"),I=t=>s(t)&&t.endsWith("em")&&!t.endsWith("rem"),q=t=>s(t)&&t.endsWith("px")||b(t),B=t=>s(t)&&t.endsWith("%"),W=t=>s(t)&&t.endsWith("vw"),M=t=>s(t)&&t.endsWith("vh"),V=t=>s(t)&&t.endsWith("vmin"),F=t=>s(t)&&t.endsWith("vmax"),N=t=>s(t)&&t.startsWith("calc("),R=t=>s(t)&&t.startsWith("var("),D=t=>{if(b(t))return t;if(q(t))return+t.replace("px","");if(!A())return 0;const{width:n,height:e}=c(window);if(W(t))return+t.replace("vw","")*n/100;if(M(t))return+t.replace("vh","")*e/100;if(S(t)){const o=+t.replace("rem",""),r=l(document.documentElement).fontSize;return o*parseFloat(r)}return V(t)?w().vMin:F(t)?w().vMax:s(t)?C(t):0},H=t=>{if(t!=null)return B(t)||W(t)||M(t)||I(t)||S(t)||N(t)||R(t)||V(t)||F(t)?t:`${D(t)}px`},rt=(t,n=1)=>{if(t==null)return;const e=H(t),o=e.match(/(vh|%|rem|px|vw)$/)[0];return`${parseFloat(e)*n}${o}`};function i(t){const n=x();return n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,16)}function st(t){const n=x();n.cancelAnimationFrame?n.cancelAnimationFrame(t):n.clearTimeout(t)}function it(t){i(()=>{i(t)})}function ct(){return new Promise(t=>{i(()=>{i(t)})})}function at(){return new Promise(t=>{i(t)})}function ft(t,{top:n=0,left:e=0,duration:o=300,animation:r}){const u=Date.now(),a=O(t),f=j(t);return new Promise(h=>{const m=()=>{const d=(Date.now()-u)/o;if(d<1){const L=a+(n-a)*r(d),P=f+(e-f)*r(d);t.scrollTo(P,L),i(m)}else t.scrollTo(e,n),h()};i(m)})}function ut(t){return Object.entries(t??{}).reduce((n,[e,o])=>{const r=e.startsWith("--")?e:`--${$(e)}`;return n[r]=o,n},{})}function ht(){return typeof window<"u"&&"ontouchstart"in window}function dt(t){return t==="start"||t==="end"?`flex-${t}`:t}export{k as A,X as B,nt as C,ut as D,H as a,c as b,ft as c,K as d,ct as e,E as f,l as g,et as h,tt as i,G as j,j as k,J as l,rt as m,Z as n,ot as o,dt as p,O as q,at as r,ht as s,D as t,i as u,it as v,st as w,Q as x,_ as y,v as z};
