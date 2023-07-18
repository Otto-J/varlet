import{v as $}from"./index-1d906ce6.js";import{p as b,P as R}from"./index-5d239e38.js";import{I as B}from"./index-ace3c2fa.js";import{d as f,p as U,c as z,a as t,m as D,w as g}from"./logger-5f6a195b.js";import{d as I}from"./elements-030d765c.js";import{p as V}from"./index-d00a0f8a.js";import{d as N,a as F,w as L,_ as T,p as y,ag as j,f as p,i as C,S as E,M as m,m as S,O as w,N as c,Q as O,h as k,F as M,ai as Q,D as q,R as G,j as H,ar as J,r as K,n as W}from"./vue-router-14238f57.js";const X={show:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},title:{type:String},closeOnClickAction:{type:Boolean,default:!0},onSelect:f(),"onUpdate:show":f(),...U(b,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","safeArea","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{n:Y,classes:Z}=z("action-sheet"),_=N({name:"VarActionSheet",directives:{Ripple:$},components:{VarPopup:R,VarIcon:B},inheritAttrs:!1,props:X,setup(e){const l=F(!1),o=s=>{if(s.disabled)return;const{closeOnClickAction:v,onSelect:u}=e;t(u,s),v&&t(e["onUpdate:show"],!1)},i=s=>t(e["onUpdate:show"],s);return L(()=>e.show,s=>{l.value=s},{immediate:!0}),{n:Y,classes:Z,handlePopupUpdateShow:i,popupShow:l,pack:V,dt:I,handleSelect:o}}});const x=["onClick"];function ee(e,l,o,i,s,v){const u=y("var-icon"),A=y("var-popup"),P=j("ripple");return p(),C(A,S({class:e.n("popup-radius"),position:"bottom",show:e.popupShow,overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.closeOnClickOverlay,teleport:e.teleport,"safe-area":e.safeArea},{"onUpdate:show":e.handlePopupUpdateShow},{onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange}),{default:E(()=>[m("div",S({class:e.classes(e.n(),e.n("$--box"))},e.$attrs),[w(e.$slots,"title",{},()=>[m("div",{class:c(e.n("title"))},O(e.dt(e.title,e.pack.actionSheetTitle)),3)]),w(e.$slots,"actions",{},()=>[(p(!0),k(M,null,Q(e.actions,n=>q((p(),k("div",{class:c(e.classes(e.n("action-item"),n.className,[n.disabled,e.n("--disabled")])),key:n.name,style:G({color:n.color}),onClick:se=>e.handleSelect(n)},[n.icon?(p(),C(u,{key:0,class:c(e.n("action-icon")),"var-action-sheet-cover":"",name:n.icon,size:n.iconSize},null,8,["class","name","size"])):H("",!0),m("div",{class:c(e.n("action-name"))},O(n.name),3)],14,x)),[[P,{disabled:n.disabled}]])),128))])],16)]),_:3},16,["class","show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","safe-area","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const d=T(_,[["render",ee]]);let a,h={};function oe(e={}){return{...h,...e}}function r(e){return J()?new Promise(l=>{r.close();const o=K(oe(e));o.teleport="body",a=o;const{unmountInstance:i}=D(d,o,{onSelect:s=>{t(o.onSelect,s),l(s)},onClose:()=>{t(o.onClose),l("close")},onClosed:()=>{t(o.onClosed),i(),a===o&&(a=null)},onRouteChange:()=>{i(),a===o&&(a=null)},"onUpdate:show":s=>{o.show=s}});o.show=!0}):Promise.resolve()}r.setDefaultOptions=function(e){h=e};r.resetDefaultOptions=function(){h={}};r.close=function(){if(a!=null){const e=a;a=null,W().then(()=>{e.show=!1})}};r.Component=d;g(d);g(d,r);export{r as A};
