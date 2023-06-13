import{d as L,a as v,w as B,q as a,T as R,C as G,G as O,D as M,E,m as q,Z as H,_ as Q,ac as Z,aE as J,f as K,h as W,S as l,R as X,ao as e,ah as P,F as Y,P as n,Q as f}from"./vue-router-7db650a3.js";import{t as ee,B as y}from"./index-4c2cc3c6.js";import{I as x}from"./index-a114443c.js";import{a as te}from"./usePopover-aa115919.js";import{d as _,j as ae,g as le,b as oe,c as ie,a as T}from"./logger-5ff856cd.js";import{a as z}from"./elements-9e3f74aa.js";/* empty css               */import"./index-323da130.js";import{R as g,a as A}from"./index-b58f0488.js";import{S as ne}from"./index-d6143014.js";import{S as re}from"./index-3436a2d9.js";import{O as k}from"./index-50c0a068.js";import{d as ue}from"./index-5c6220a4.js";import{S as de}from"./index-5e8eb7ee.js";import{u as se,a as $,_ as ce,b as fe,c as ge}from"./index-e90bb75b.js";import{A as p}from"./appType-51d5c289.js";import"./index-0cb2af85.js";import"./index-5f24e254.js";import"./index-d29e90c2.js";import"./useChildren-52535654.js";import"./zIndex-729a3e39.js";import"./index-b78d9f2d.js";import"./provide-750141a6.js";import"./index-6b0fe23b.js";import"./index-66189167.js";import"./FieldDecorator-c3303bc9.js";import"./onWindowResize-4439800a.js";import"./index-7ed67c91.js";function me(t){return["left-top","right-top","left-bottom","right-bottom"].includes(t)}function ve(t){return["top","right","bottom","left"].includes(t)}function pe(t){return["click","hover"].includes(t)}const be={active:{type:Boolean,default:!1},show:{type:Boolean,default:!0},type:{type:String,default:"primary",validator:ee},position:{type:String,default:"right-bottom",validator:me},direction:{type:String,default:"top",validator:ve},trigger:{type:String,default:"click",validator:pe},disabled:{type:Boolean,default:!1},color:{type:String},inactiveIcon:{type:String,default:"plus"},activeIcon:{type:String,default:"window-close"},inactiveIconSize:{type:[Number,String]},activeIconSize:{type:[Number,String]},fixed:{type:Boolean,default:!0},zIndex:{type:[Number,String],default:90},top:{type:[Number,String]},bottom:{type:[Number,String]},left:{type:[Number,String]},right:{type:[Number,String]},elevation:{type:[Boolean,Number,String],default:!0},safeArea:{type:Boolean,default:!1},teleport:{type:String},onClick:_(),onOpen:_(),onOpened:_(),onClose:_(),onClosed:_(),"onUpdate:active":_()};function D(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!G(t)}const{classes:F,n:d}=ie("fab"),I=L({name:"VarFab",inheritAttrs:!1,props:be,setup(t,{slots:m,attrs:S}){const i=ae(t,"active"),b=v(null),{disabled:C}=le(),h=(s,o,r)=>{if(s.stopPropagation(),!(t.trigger!=="click"||t.disabled)){if(r===0){T(t.onClick,i.value,s);return}i.value=o,T(t.onClick,i.value,s),T(i.value?t.onOpen:t.onClose)}},c=(s,o)=>{t.trigger!=="hover"||t.disabled||o===0||(i.value=s,T(i.value?t.onOpen:t.onClose))},V=()=>{t.trigger!=="click"||t.disabled||i.value!==!1&&(i.value=!1,T(t.onClose))},U=()=>m.trigger?t.show?m.trigger({active:i.value}):null:M(a(y,{"var-fab-cover":!0,class:d("trigger"),type:t.type,color:t.color,disabled:t.disabled,round:!0,elevation:t.elevation},{default:()=>[a(x,{"var-fab-cover":!0,class:F([i.value,d("trigger-active-icon"),d("trigger-inactive-icon")]),name:i.value?t.activeIcon:t.inactiveIcon,size:i.value?t.inactiveIconSize:t.activeIconSize,transition:200,animationClass:d("--trigger-icon-animation")},null)]}),[[E,t.show]]),N=()=>{var r;let s;const o=oe(((r=m.default)==null?void 0:r.call(m))??[]);return a("div",q({class:F(d(),d(`--position-${t.position}`),d(`--direction-${t.direction}`),[t.fixed,d("--fixed"),d("--absolute")],[t.safeArea,d("--safe-area")]),style:{zIndex:H(t.zIndex),top:z(t.top),bottom:z(t.bottom),left:z(t.left),right:z(t.right)},ref:b,onClick:w=>h(w,!i.value,o.length),onMouseleave:()=>c(!1,o.length),onMouseenter:()=>c(!0,o.length)},S),[a(O,{name:d("--active-transition")},D(s=U())?s:{default:()=>[s]}),a(O,{name:d(`--actions-transition-${t.direction}`),onAfterEnter:t.onOpened,onAfterLeave:t.onClosed},{default:()=>[M(a("div",{class:d("actions"),onClick:w=>w.stopPropagation()},[o.map(w=>a("div",{class:d("action")},[w]))]),[[E,t.show&&i.value&&o.length]])]})])};return B(()=>t.trigger,()=>{i.value=!1}),B(()=>t.disabled,()=>{i.value=!1}),te(b,"click",V),()=>{const{teleport:s}=t;if(s){let o;return a(R,{to:s,disabled:C.value},D(o=N())?o:{default:()=>[o]})}return N()}}});I.install=function(t){t.component(I.name,I)};const ye={type:"主题色按钮",trigger:"触发方式",direction:"动作菜单弹出方向",position:"触发器位置",default:"默认",primary:"主要",info:"信息",success:"成功",warning:"警告",danger:"危险",disabled:"禁用",elevation:"海拔效果",triggerToggle:"触发器显示/隐藏",actionsToggle:"动作菜单展开/收起",toggle:"切换"},he={type:"Theme Color Button",trigger:"Trigger Method",direction:"Action Menu Popup Direction",position:"Trigger Position",default:"default",primary:"primary",info:"info",success:"success",warning:"warning",danger:"danger",disabled:"Disabled",elevation:"Elevation Effect",triggerToggle:"Trigger Show/Hide",actionsToggle:"Action Menu Expand/Collapse",toggle:"Toggle"},{add:j,use:_e,pack:u,packs:We,merge:Xe}=se(),ke=t=>{ge(t),_e(t)};$("zh-CN",ce);$("en-US",fe);j("zh-CN",ye);j("en-US",he);const Se={__name:"index",setup(t){const m=v("primary"),S=v("click"),i=v("top"),b=v("right-bottom"),C=v(!0),h=v(!1),c=v(!1),V=v(2);function U(){C.value=!C.value}function N(){h.value=!h.value}return Z(ke),J(ue),(s,o)=>(K(),W(Y,null,[a(e(p),{style:X({marginTop:b.value.includes("top")?"20vw":void 0})},{default:l(()=>[n(f(e(u).type),1)]),_:1},8,["style"]),a(e(re),{hint:!1,modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=r=>m.value=r)},{default:l(()=>[a(e(k),{label:e(u).default,value:"default"},null,8,["label"]),a(e(k),{label:e(u).primary,value:"primary"},null,8,["label"]),a(e(k),{label:e(u).info,value:"info"},null,8,["label"]),a(e(k),{label:e(u).success,value:"success"},null,8,["label"]),a(e(k),{label:e(u).warning,value:"warning"},null,8,["label"]),a(e(k),{label:e(u).danger,value:"danger"},null,8,["label"])]),_:1},8,["modelValue"]),a(e(p),null,{default:l(()=>[n(f(e(u).position),1)]),_:1}),a(e(A),{modelValue:b.value,"onUpdate:modelValue":o[1]||(o[1]=r=>b.value=r)},{default:l(()=>[a(e(g),{"checked-value":"left-top"},{default:l(()=>[n("left-top")]),_:1}),a(e(g),{"checked-value":"right-top"},{default:l(()=>[n("right-top")]),_:1}),a(e(g),{"checked-value":"left-bottom"},{default:l(()=>[n("left-bottom")]),_:1}),a(e(g),{"checked-value":"right-bottom"},{default:l(()=>[n("right-bottom")]),_:1})]),_:1},8,["modelValue"]),a(e(p),null,{default:l(()=>[n(f(e(u).trigger),1)]),_:1}),a(e(A),{modelValue:S.value,"onUpdate:modelValue":o[2]||(o[2]=r=>S.value=r)},{default:l(()=>[a(e(g),{"checked-value":"click"},{default:l(()=>[n("click")]),_:1}),a(e(g),{"checked-value":"hover"},{default:l(()=>[n("hover")]),_:1})]),_:1},8,["modelValue"]),a(e(p),null,{default:l(()=>[n(f(e(u).direction),1)]),_:1}),a(e(A),{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=r=>i.value=r)},{default:l(()=>[a(e(g),{"checked-value":"top"},{default:l(()=>[n("top")]),_:1}),a(e(g),{"checked-value":"right"},{default:l(()=>[n("right")]),_:1}),a(e(g),{"checked-value":"bottom"},{default:l(()=>[n("bottom")]),_:1}),a(e(g),{"checked-value":"left"},{default:l(()=>[n("left")]),_:1})]),_:1},8,["modelValue"]),a(e(p),null,{default:l(()=>[n(f(e(u).disabled),1)]),_:1}),a(e(ne),{modelValue:c.value,"onUpdate:modelValue":o[4]||(o[4]=r=>c.value=r)},null,8,["modelValue"]),a(e(p),null,{default:l(()=>[n(f(e(u).elevation),1)]),_:1}),a(e(de),{max:"24",modelValue:V.value,"onUpdate:modelValue":o[5]||(o[5]=r=>V.value=r)},null,8,["modelValue"]),a(e(p),null,{default:l(()=>[n(f(e(u).triggerToggle),1)]),_:1}),a(e(y),{type:"primary",onClick:P(U,["stop"])},{default:l(()=>[n(f(e(u).toggle),1)]),_:1},8,["onClick"]),a(e(p),null,{default:l(()=>[n(f(e(u).actionsToggle),1)]),_:1}),a(e(y),{type:"primary",onClick:P(N,["stop"])},{default:l(()=>[n(f(e(u).toggle),1)]),_:1},8,["onClick"]),a(e(I),{active:h.value,"onUpdate:active":o[6]||(o[6]=r=>h.value=r),show:C.value,type:m.value,position:b.value,direction:i.value,trigger:S.value,disabled:c.value,elevation:V.value},{default:l(()=>[a(e(y),{class:"action",type:"info",round:"",disabled:c.value},{default:l(()=>[a(e(x),{name:"account-circle"})]),_:1},8,["disabled"]),a(e(y),{class:"action",type:"success",round:"",disabled:c.value},{default:l(()=>[a(e(x),{name:"checkbox-marked-circle"})]),_:1},8,["disabled"]),a(e(y),{class:"action",type:"warning",round:"",disabled:c.value},{default:l(()=>[a(e(x),{name:"bell"})]),_:1},8,["disabled"]),a(e(y),{class:"action",type:"danger",round:"",disabled:c.value},{default:l(()=>[a(e(x),{name:"delete"})]),_:1},8,["disabled"])]),_:1},8,["active","show","type","position","direction","trigger","disabled","elevation"])],64))}},Ye=Q(Se,[["__scopeId","data-v-2302105b"]]);export{Ye as default};
