import{p as b,P}from"./index.3bec6af1.js";import{B as U}from"./index.0b644b79.js";import{p as V,c as $,e as s,m as N}from"./components.05469627.js";import{d as A}from"./shared.dbde87da.js";import{p as R}from"./index.14166b06.js";import{a as z}from"./elements.7d38f0f2.js";import{d as F,a as k,w as S,_ as j,p as w,f as g,i as v,S as B,M as m,N as c,O,R as I,P as d,Q as C,j as T,m as M,aA as Q,r as W,n as X,W as q,X as E}from"./vue-router.esm-bundler.7d652aaa.js";function G(o){return["left","center","right"].includes(o)}const H={show:{type:Boolean,default:!1},width:{type:[Number,String]},title:{type:String},message:{type:String},messageAlign:{type:String,default:"left",validator:G},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:{type:String},cancelButtonText:{type:String},confirmButtonTextColor:{type:String},cancelButtonTextColor:{type:String},confirmButtonColor:{type:String},cancelButtonColor:{type:String},onBeforeClose:{type:Function},onConfirm:{type:Function},onCancel:{type:Function},"onUpdate:show":{type:Function},dialogClass:{type:String},dialogStyle:{type:Object},...V(b,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{n:J,classes:K}=$("dialog"),L=F({name:"VarDialog",components:{VarPopup:P,VarButton:U},inheritAttrs:!1,props:H,setup(o){const a=k(!1),i=k(!1),e=()=>s(o["onUpdate:show"],!1),u=()=>{const{closeOnClickOverlay:l,onClickOverlay:p,onBeforeClose:h}=o;if(s(p),!!l){if(h!=null){h("close",e);return}s(o["onUpdate:show"],!1)}},n=()=>{const{onBeforeClose:l,onConfirm:p}=o;if(s(p),l!=null){l("confirm",e);return}s(o["onUpdate:show"],!1)},f=()=>{const{onBeforeClose:l,onCancel:p}=o;if(s(p),l!=null){l("cancel",e);return}s(o["onUpdate:show"],!1)};return S(()=>o.show,l=>{a.value=l},{immediate:!0}),S(()=>o.closeOnClickOverlay,l=>{if(o.onBeforeClose!=null){i.value=!1;return}i.value=l},{immediate:!0}),{n:J,classes:K,pack:R,dt:A,popupShow:a,popupCloseOnClickOverlay:i,handleClickOverlay:u,confirm:n,cancel:f,toSizeUnit:z}}});function Y(o,a,i,e,u,n){const f=w("var-button"),l=w("var-popup");return g(),v(l,{class:c(o.n("popup")),"var-dialog-cover":"",show:o.popupShow,overlay:o.overlay,"overlay-class":o.overlayClass,"overlay-style":o.overlayStyle,"lock-scroll":o.lockScroll,"close-on-click-overlay":o.popupCloseOnClickOverlay,teleport:o.teleport,onOpen:o.onOpen,onClose:o.onClose,onClosed:o.onClosed,onOpened:o.onOpened,onRouteChange:o.onRouteChange,onClickOverlay:o.handleClickOverlay},{default:B(()=>[m("div",M({class:o.classes("var--box",o.n(),o.dialogClass),style:{width:o.toSizeUnit(o.width),...o.dialogStyle}},o.$attrs),[m("div",{class:c(o.n("title"))},[O(o.$slots,"title",{},()=>[d(C(o.dt(o.title,o.pack.dialogTitle)),1)])],2),m("div",{class:c(o.n("message")),style:I({textAlign:o.messageAlign})},[O(o.$slots,"default",{},()=>[d(C(o.message),1)])],6),m("div",{class:c(o.n("actions"))},[o.cancelButton?(g(),v(f,{key:0,class:c(o.classes(o.n("button"),o.n("cancel-button"))),"var-dialog-cover":"",text:"","text-color":o.cancelButtonTextColor,color:o.cancelButtonColor,onClick:o.cancel},{default:B(()=>[d(C(o.dt(o.cancelButtonText,o.pack.dialogCancelButtonText)),1)]),_:1},8,["class","text-color","color","onClick"])):T("v-if",!0),o.confirmButton?(g(),v(f,{key:1,class:c(o.classes(o.n("button"),o.n("confirm-button"))),"var-dialog-cover":"",text:"","text-color":o.confirmButtonTextColor,color:o.confirmButtonColor,onClick:o.confirm},{default:B(()=>[d(C(o.dt(o.confirmButtonText,o.pack.dialogConfirmButtonText)),1)]),_:1},8,["class","text-color","color","onClick"])):T("v-if",!0)],2)],16)]),_:3},8,["class","show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])}const r=j(L,[["render",Y]]);let t;function y(o){return Q()?new Promise(a=>{y.close();const i=q(o)||E(o)?{message:String(o)}:o,e=W(i);e.teleport="body",t=e;const{unmountInstance:u}=N(r,e,{onConfirm:()=>{var n;(n=e.onConfirm)==null||n.call(e),a("confirm")},onCancel:()=>{var n;(n=e.onCancel)==null||n.call(e),a("cancel")},onClose:()=>{var n;(n=e.onClose)==null||n.call(e),a("close")},onClosed:()=>{var n;(n=e.onClosed)==null||n.call(e),u(),t===e&&(t=null)},onRouteChange:()=>{u(),t===e&&(t=null)},"onUpdate:show":n=>{e.show=n}});e.show=!0}):Promise.resolve()}r.install=function(o){o.component(r.name,r)};y.install=function(o){o.component(r.name,r)};y.close=()=>{if(t!=null){const o=t;t=null,X().then(()=>{o.show=!1})}};y.Component=r;export{y as D};
