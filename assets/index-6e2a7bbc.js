import{a as k,w as C,d as P,b as I,q as l,T as x,C as A,D as m,E as v,G as p,m as B}from"./vue-router-60af08e5.js";import{d as a,g as z,h as T,c as $,a as s}from"./logger-577c0317.js";import{u as j}from"./lock-5f772bc3.js";import{u as L}from"./zIndex-83a32b72.js";import{u as V}from"./provide-c26081c4.js";/* empty css               */function N(e,i){const r=k(!1);return C(e,u=>{i===u&&(r.value=!0)},{immediate:!0}),r}function R(e){return["top","bottom","right","left","center"].includes(e)}const _={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:R},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},defaultStyle:{type:Boolean,default:!0},safeArea:{type:Boolean,default:!1},safeAreaTop:{type:Boolean,default:!1},teleport:{type:String},onOpen:a(),onOpened:a(),onClose:a(),onClosed:a(),onClickOverlay:a(),"onUpdate:show":a(),onRouteChange:a()};function h(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!A(e)}const{n:o,classes:d}=$("popup"),f=P({name:"VarPopup",inheritAttrs:!1,props:_,setup(e,{slots:i,attrs:r}){const u=N(()=>e.show,!0),{zIndex:c}=L(()=>e.show,3),{disabled:w}=z(),{bindPopupItems:O}=V(),S=()=>{const{closeOnClickOverlay:t,onClickOverlay:n}=e;s(n),t&&s(e["onUpdate:show"],!1)},b=()=>{const{overlayClass:t="",overlayStyle:n}=e;return l("div",{class:d(o("overlay"),t),style:{zIndex:c.value-1,...n},onClick:S},null)},g=()=>m(l("div",B({class:d(o("content"),o(`--${e.position}`),[e.defaultStyle,o("--content-background-color")],[e.defaultStyle,o("$-elevation--3")],[e.safeArea,o("--safe-area")],[e.safeAreaTop,o("--safe-area-top")]),style:{zIndex:c.value}},r),[u.value&&s(i.default)]),[[v,e.show]]),y=()=>{let t;return l(p,{name:o("$-fade"),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:()=>[m(l("div",{class:d(o("$--box"),o()),style:{zIndex:c.value-2}},[e.overlay&&b(),l(p,{name:e.transition||o(`$-pop-${e.position}`)},h(t=g())?t:{default:()=>[t]})]),[[v,e.show]])]})};return j(()=>e.show,()=>e.lockScroll),C(()=>e.show,t=>{t?s(e.onOpen):s(e.onClose)}),O({show:I(()=>e.show)}),T(()=>s(e.onRouteChange)),()=>{const{teleport:t}=e;if(t){let n;return l(x,{to:t,disabled:w.value},h(n=y())?n:{default:()=>[n]})}return y()}}});f.install=function(e){e.component(f.name,f)};export{f as P,_ as p};
