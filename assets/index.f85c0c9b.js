var P=Object.defineProperty;var h=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(o,n,l)=>n in o?P(o,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[n]=l,O=(o,n)=>{for(var l in n||(n={}))U.call(n,l)&&S(o,l,n[l]);if(h)for(var l of h(n))A.call(n,l)&&S(o,l,n[l]);return o};import{p as N,P as R}from"./index.68e9cc85.js";import{B as F}from"./index.d306419d.js";import{p as z,o as I,c as j,a as r,q,r as E,g as G,i as H}from"./components.be4fa7b1.js";import{p as J}from"./en-US.66474835.js";import{d as K,a as w,w as T,_ as M,l as b,o as v,e as g,O as B,E as C,G as i,H as V,J as L,K as d,M as m,h as $,m as Q,r as W,n as X}from"./elevation.ded31914.js";function Y(o){return["left","center","right"].includes(o)}const Z=O({show:{type:Boolean,default:!1},title:{type:String},message:{type:String},messageAlign:{type:String,default:"left",validator:Y},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:{type:String},cancelButtonText:{type:String},confirmButtonTextColor:{type:String},cancelButtonTextColor:{type:String},confirmButtonColor:{type:String},cancelButtonColor:{type:String},onBeforeClose:{type:Function},onConfirm:{type:Function},onCancel:{type:Function},"onUpdate:show":{type:Function},dialogClass:{type:String},dialogStyle:{type:Object}},z(N,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"]));const{n:D,classes:x}=j("dialog"),_=K({name:"VarDialog",components:{VarPopup:R,VarButton:F},inheritAttrs:!1,props:Z,setup(o){const n=w(!1),l=w(!1),e=()=>r(o["onUpdate:show"],!1),u=()=>{const{closeOnClickOverlay:a,onClickOverlay:p,onBeforeClose:k}=o;if(r(p),!!a){if(k!=null){k("close",e);return}r(o["onUpdate:show"],!1)}},t=()=>{const{onBeforeClose:a,onConfirm:p}=o;if(r(p),a!=null){a("confirm",e);return}r(o["onUpdate:show"],!1)},f=()=>{const{onBeforeClose:a,onCancel:p}=o;if(r(p),a!=null){a("cancel",e);return}r(o["onUpdate:show"],!1)};return T(()=>o.show,a=>{n.value=a},{immediate:!0}),T(()=>o.closeOnClickOverlay,a=>{if(o.onBeforeClose!=null){l.value=!1;return}l.value=a},{immediate:!0}),{n:D,classes:x,pack:J,dt:I,popupShow:n,popupCloseOnClickOverlay:l,handleClickOverlay:u,confirm:t,cancel:f}}});function oo(o,n,l,e,u,t){const f=b("var-button"),a=b("var-popup");return v(),g(a,{class:i(o.n("popup")),"var-dialog-cover":"",show:o.popupShow,overlay:o.overlay,"overlay-class":o.overlayClass,"overlay-style":o.overlayStyle,"lock-scroll":o.lockScroll,"close-on-click-overlay":o.popupCloseOnClickOverlay,teleport:o.teleport,onOpen:o.onOpen,onClose:o.onClose,onClosed:o.onClosed,onOpened:o.onOpened,onRouteChange:o.onRouteChange,onClickOverlay:o.handleClickOverlay},{default:B(()=>[C("div",Q({class:o.classes("var--box",o.n(),o.dialogClass),style:o.dialogStyle},o.$attrs),[C("div",{class:i(o.n("title"))},[V(o.$slots,"title",{},()=>[d(m(o.dt(o.title,o.pack.dialogTitle)),1)])],2),C("div",{class:i(o.n("message")),style:L({textAlign:o.messageAlign})},[V(o.$slots,"default",{},()=>[d(m(o.message),1)])],6),C("div",{class:i(o.n("actions"))},[o.cancelButton?(v(),g(f,{key:0,class:i(o.classes(o.n("button"),o.n("cancel-button"))),"var-dialog-cover":"",text:"","text-color":o.cancelButtonTextColor,color:o.cancelButtonColor,onClick:o.cancel},{default:B(()=>[d(m(o.dt(o.cancelButtonText,o.pack.dialogCancelButtonText)),1)]),_:1},8,["class","text-color","color","onClick"])):$("v-if",!0),o.confirmButton?(v(),g(f,{key:1,class:i(o.classes(o.n("button"),o.n("confirm-button"))),"var-dialog-cover":"",text:"","text-color":o.confirmButtonTextColor,color:o.confirmButtonColor,onClick:o.confirm},{default:B(()=>[d(m(o.dt(o.confirmButtonText,o.pack.dialogConfirmButtonText)),1)]),_:1},8,["class","text-color","color","onClick"])):$("v-if",!0)],2)],16)]),_:3},8,["class","show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])}var c=M(_,[["render",oo]]);let s;function y(o){return q()?new Promise(n=>{y.close();const l=G(o)||H(o)?{message:String(o)}:o,e=W(l);e.teleport="body",s=e;const{unmountInstance:u}=E(c,e,{onConfirm:()=>{var t;(t=e.onConfirm)==null||t.call(e),n("confirm")},onCancel:()=>{var t;(t=e.onCancel)==null||t.call(e),n("cancel")},onClose:()=>{var t;(t=e.onClose)==null||t.call(e),n("close")},onClosed:()=>{var t;(t=e.onClosed)==null||t.call(e),u(),s===e&&(s=null)},onRouteChange:()=>{u(),s===e&&(s=null)},"onUpdate:show":t=>{e.show=t}});e.show=!0}):Promise.resolve()}c.install=function(o){o.component(c.name,c)};y.install=function(o){o.component(c.name,c)};y.close=()=>{if(s!=null){const o=s;s=null,X().then(()=>{o.show=!1})}};y.Component=c;export{y as D};
