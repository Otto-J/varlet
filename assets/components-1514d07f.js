import{a3 as g,M as v,a4 as m,r as f,a5 as d,a6 as $,a7 as w,B as y,F as h,z as A,a8 as E}from"./index-c1c53a77.js";function b(t,n){return Array.isArray(n)?n.reduce((e,u)=>(e[u]=t[u],e),{}):t[n]}function F(t,n){const e=n??t;return e.install=function(u){const{name:a}=t;a&&u.component(a,t)},e}function M(t){const n=A(t),e=document.createElement("div");return document.body.appendChild(e),{instance:n.mount(e),unmount(){n.unmount(),document.body.removeChild(e)}}}function I(t,n={},e={}){const u={setup(){return()=>E(t,{...n,...e})}},{unmount:a}=M(u);return{unmountInstance:a}}function W(t){const n=[];return t.forEach(e=>{if(e.type!==g){if(e.type===v&&m(e.children)){e.children.forEach(u=>{n.push(u)});return}n.push(e)}}),n}function B(){const t=f(""),n=async(a,r,s)=>!m(a)||!a.length?!0:!(await Promise.all(a.map(o=>o(r,s)))).some(o=>o!==!0?(t.value=String(o),!0):!1);return{errorMessage:t,validate:n,resetValidation:()=>{t.value=""},validateWithTrigger:async(a,r,s,c,o)=>{a.includes(r)&&await n(s,c,o)&&(t.value="")}}}function C(t){d(()=>window,"hashchange",t),d(()=>window,"popstate",t)}function T(){const t=f(!1);return $(()=>{t.value=!1}),w(()=>{t.value=!0}),{disabled:t}}function L(t){const n="var",e=`${n}-${t}`;return{n:r=>r?r[0]==="$"?r.replace("$",n):r.startsWith("--")?`${e}${r}`:`${e}__${r}`:e,classes:(...r)=>r.map(s=>{if(m(s)){const[c,o,i=null]=s;return c?o:i}return s})}}function p(t,...n){if(m(t))return t.map(e=>e(...n));if(t)return t(...n)}function P(t){return{type:[Function,Array],default:t}}function S(t,n){return t===!1?null:(t===!0&&n&&(t=n),`var-elevation--${t}`)}function _(t,n,e={}){const{passive:u=!0,eventName:a,defaultValue:r,emit:s}=e,c=a??`onUpdate:${n.toString()}`,o=()=>t[n]!=null?t[n]:r;if(!u)return y({get(){return o()},set(l){s?s(c,l):p(t[c],l)}});const i=f(o());return h(()=>t[n],()=>{i.value=o()}),h(()=>i.value,l=>{s?s(c,l):p(t[c],l)}),i}export{p as a,W as b,L as c,P as d,C as e,S as f,_ as g,B as h,I as m,b as p,T as u,F as w};
