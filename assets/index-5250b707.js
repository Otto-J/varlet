import{b as E}from"./elements-da0a4dab.js";import{aD as v,aL as k,aR as w,aS as d}from"./vue-router-40fc6ea4.js";import{c as b}from"./shared-ddca0f7e.js";import{a as I}from"./components-08e741bd.js";const R="background-image",O="lazy-loading",W="lazy-error",m="lazy-attempt",C=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],u="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",n=[],c=[],y=b(100),e={loading:u,error:u,attempt:3,throttleWait:300,events:C};let A=d(o,e.throttleWait);function s(t,a){t._lazy.arg===R?t.style.backgroundImage=`url(${a})`:t.setAttribute("src",a)}function G(t){t._lazy.loading&&s(t,t._lazy.loading),o()}function N(t){t._lazy.error&&s(t,t._lazy.error),t._lazy.state="error",f(t),o()}function p(t,a){s(t,a),t._lazy.state="success",f(t),o()}function B(t){var a;c.includes(t)||(c.push(t),(a=e.events)==null||a.forEach(r=>{t.addEventListener(r,A,{passive:!0})}))}function D(){c.forEach(t=>{var a;(a=e.events)==null||a.forEach(r=>{t.removeEventListener(r,A)})}),c.length=0}function P(t,a){const r={loading:t.getAttribute(O)??e.loading,error:t.getAttribute(W)??e.error,attempt:t.getAttribute(m)?Number(t.getAttribute(m)):e.attempt};t._lazy={src:a.value,arg:a.arg,currentAttempt:0,state:"pending",attemptLock:!1,...r},s(t,u),I(e.filter,t._lazy)}function S(t,a){const r=new Image;r.src=a,t._lazy.preloadImage=r,r.addEventListener("load",()=>{t._lazy.attemptLock=!1,y.add(a),p(t,a)}),r.addEventListener("error",()=>{t._lazy.attemptLock=!1,t._lazy.currentAttempt>=t._lazy.attempt?N(t):z(t)})}function z(t){if(t._lazy.attemptLock)return;t._lazy.attemptLock=!0,t._lazy.currentAttempt++;const{src:a}=t._lazy;if(y.has(a)){p(t,a),t._lazy.attemptLock=!1;return}G(t),S(t,a)}async function l(t){await k(),w(t)&&z(t)}function o(){n.forEach(t=>l(t))}async function T(t){!n.includes(t)&&n.push(t),E(t).forEach(B),await l(t)}function f(t){v(n,t),n.length===0&&D()}function M(t,a){const{src:r,arg:i}=t._lazy;return r!==a.value||i!==a.arg}async function g(t,a){P(t,a),await T(t)}async function Y(t,a){if(!M(t,a)){n.includes(t)&&await l(t);return}await g(t,a)}function Z(t={}){const{events:a,loading:r,error:i,attempt:h,throttleWait:_,filter:L}=t;e.events=a??e.events,e.loading=r??e.loading,e.error=i??e.error,e.attempt=h??e.attempt,e.throttleWait=_??e.throttleWait,e.filter=L}const V={mounted:g,unmounted:f,updated:Y,install(t,a){Z(a),A=d(o,e.throttleWait),t.directive("lazy",this)}},U=V;export{U as v};
