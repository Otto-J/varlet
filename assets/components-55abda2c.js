import{o as h,n as f,x as O,at as j,au as M,w as _,e as m,y as x,ap as g,av as P,b as y,t as v,a as A,aw as w,a7 as L,r as V,ax as C,v as B,ay as N,az as $,C as S}from"./vue-router.esm-bundler-021ce183.js";function W(n){let t=!1;h(()=>{n(),f(()=>{t=!0})}),O(()=>{t&&n()})}function I(n,t,r,e={}){if(!j())return;const{passive:a=!1,capture:o=!1}=e;let s=!1,c=!1;const i=d=>{if(s||c)return;const l=g(d);l&&(l.addEventListener(t,r,{passive:a,capture:o}),s=!0)},u=d=>{if(!s||c)return;const l=g(d);l&&(l.removeEventListener(t,r,{capture:o}),s=!1)};let p;M(n)&&(p=_(()=>n.value,(d,l)=>{u(l),i(d)}));const E=()=>{p==null||p(),u(n),c=!0};return W(()=>{i(n)}),m(()=>{u(n)}),x(()=>{u(n)}),E}var H=globalThis&&globalThis.__rest||function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(r[e[a]]=n[e[a]]);return r};function R(n){const t=v();return n in t.provides}function F(n){if(!R(n))return{index:null,parentProvider:null,bindParent:null};const t=P(n),{childInstances:r,collect:e,clear:a}=t,o=H(t,["childInstances","collect","clear"]),s=v();return{index:y(()=>r.indexOf(s)),parentProvider:o,bindParent:u=>{h(()=>{f().then(()=>{e(s,u)})}),m(()=>{f().then(()=>{a(s,u)})})}}}function q(n,t){return Array.isArray(t)?t.reduce((r,e)=>(r[e]=n[e],r),{}):n[t]}function U(n){const t=L(n),r=document.createElement("div");return document.body.appendChild(r),{instance:t.mount(r),unmount(){t.unmount(),document.body.removeChild(r)}}}function G(n,t={},r={}){const e={setup(){return()=>N(n,{...t,...r})}},{unmount:a}=U(e);return{unmountInstance:a}}function z(n){const t=[],r=e=>{if(e!=null&&e.component){r(e==null?void 0:e.component.subTree);return}Array.isArray(e==null?void 0:e.children)&&e.children.forEach(a=>{S(a)&&(t.push(a),r(a))})};return r(n),t}function J(n){const t=V([]),r=v(),e=()=>{const c=z(r.subTree);t.sort((i,u)=>c.indexOf(i.vnode)-c.indexOf(u.vnode))};return C(n,{collect:c=>{t.push(c),e()},clear:c=>{$(t,c)},instances:t}),{length:y(()=>t.length)}}function Q(n){if(!b(n))return{index:null};const t=P(n),{collect:r,clear:e,instances:a}=t,o=v();return h(()=>{f().then(()=>r(o))}),B(()=>{f().then(()=>e(o))}),{index:y(()=>a.indexOf(o))}}function X(n){const t=[],r=o=>{t.push(o)},e=o=>{$(t,o)};return{childProviders:t,bindChildren:o=>{C(n,{collect:r,clear:e,...o})}}}function Y(n){if(!b(n))return{parentProvider:null,bindParent:null};const t=P(n),{collect:r,clear:e,...a}=t;return{parentProvider:a,bindParent:s=>{h(()=>r(s)),m(()=>e(s))}}}function b(n){const t=v();return n in t.provides}function Z(){const n=A(""),t=async(a,o,s)=>!w(a)||!a.length?!0:!(await Promise.all(a.map(i=>i(o,s)))).some(i=>i!==!0?(n.value=String(i),!0):!1);return{errorMessage:n,validate:t,resetValidation:()=>{n.value=""},validateWithTrigger:async(a,o,s,c,i)=>{a.includes(o)&&await t(s,c,i)&&(n.value="")}}}function k(n){I(window,"hashchange",n),I(window,"popstate",n)}function K(){const n=A(!1);return O(()=>{n.value=!1}),x(()=>{n.value=!0}),{disabled:n}}function T(n){const t="var",r=`${t}-${n}`;return{n:o=>o?o[0]==="$"?o.replace("$",t):o.startsWith("--")?`${r}${o}`:`${r}__${o}`:r,classes:(...o)=>o.map(s=>{if(w(s)){const[c,i,u=null]=s;return c?i:u}return s})}}function nn(n,...t){if(w(n))return n.map(r=>r(...t));if(n)return n(...t)}function tn(n){return{type:[Function,Array],default:n}}export{J as a,nn as b,T as c,tn as d,Y as e,Q as f,W as g,K as h,k as i,I as j,F as k,Z as l,G as m,q as p,X as u};
