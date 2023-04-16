import{d as C,k as W,a as d,c as j}from"./components-11e167b7.js";import{m as o}from"./elements-c8e609a8.js";import{F as q,u as E}from"./provide-bd74f989.js";import{H as G,u as I}from"./index-2dc9aa87.js";import{v as J}from"./index-3bc00f69.js";import{L as K}from"./index-87c6b2b2.js";import{v as Q}from"./index-ba0b3f8b.js";import{d as X,b as N,n as Y,_ as Z,p as b,ag as $,D as F,f as k,h as R,M as w,R as m,N as u,i as _,j as x,q as A}from"./vue-router-a0e39500.js";const ee={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String},loadingColor:{type:String},closeColor:{type:String},size:{type:[String,Number]},rules:{type:Array},ripple:{type:Boolean,default:!0},onClick:C(),onChange:C(),"onUpdate:modelValue":C()},{n:ae,classes:le}=j("switch"),oe=X({name:"VarSwitch",components:{VarLoading:K,VarFormDetails:q,VarHoverOverlay:G},directives:{Ripple:Q,Hover:J},props:ee,setup(e){const{bindForm:v,form:l}=E(),{errorMessage:i,validateWithTrigger:B,validate:D,resetValidation:c}=W(),{hovering:p,handleHovering:h}=I(),g=()=>D(e.rules,e.modelValue),y=()=>Y(()=>B(["onChange"],"onChange",e.rules,e.modelValue)),V=N(()=>{const{size:a,modelValue:r,color:n,closeColor:t,loadingColor:f,activeValue:s}=e;return{handle:{width:o(a),height:o(a),backgroundColor:r===s?n:t,color:f},ripple:{left:r===s?o(a,.5):`-${o(a,.5)}`,color:r===s?n:t||"#999",width:o(a,2),height:o(a,2)},track:{height:o(a,.72),width:o(a,1.9),borderRadius:o(a,2/3),filter:r===s||i!=null&&i.value?void 0:"brightness(.6)",backgroundColor:r===s?n:t},switch:{height:o(a,1.2),width:o(a,2)}}}),L=N(()=>{const{size:a="5.333vw"}=e;return o(a,.4)}),M=a=>{const{onClick:r,onChange:n,disabled:t,loading:f,readonly:s,modelValue:O,activeValue:H,inactiveValue:P,"onUpdate:modelValue":T}=e;if(d(r,a),t||f||s||l!=null&&l.disabled.value||l!=null&&l.readonly.value)return;const z=O===H?P:H;d(n,z),d(T,z),y()},U=a=>{e.disabled||l!=null&&l.disabled.value||h(a)};return d(v,{reset:()=>{d(e["onUpdate:modelValue"],e.inactiveValue),c()},validate:g,resetValidation:c}),{n:ae,classes:le,switchActive:M,hovering:p,hover:U,radius:L,styleComputed:V,errorMessage:i,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly}}});function re(e,v,l,i,B,D){const c=b("var-loading"),p=b("var-hover-overlay"),h=b("var-form-details"),g=$("ripple"),y=$("hover");return F((k(),R("div",{class:u(e.n())},[w("div",{class:u(e.classes(e.n("block"),[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:v[0]||(v[0]=(...V)=>e.switchActive&&e.switchActive(...V)),style:m(e.styleComputed.switch)},[w("div",{style:m(e.styleComputed.track),class:u(e.classes(e.n("track"),[e.modelValue===e.activeValue,e.n("track--active")],[e.errorMessage,e.n("track--error")]))},null,6),F((k(),R("div",{class:u(e.classes(e.n("ripple"),[e.modelValue===e.activeValue,e.n("ripple--active")])),style:m(e.styleComputed.ripple)},[w("div",{style:m(e.styleComputed.handle),class:u(e.classes(e.n("handle"),e.n("$-elevation--2"),[e.modelValue===e.activeValue,e.n("handle--active")],[e.errorMessage,e.n("handle--error")]))},[e.loading?(k(),_(c,{key:0,radius:e.radius,color:"currentColor"},null,8,["radius"])):x("",!0)],6),A(p,{hovering:e.hovering},null,8,["hovering"])],6)),[[g,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),A(h,{"error-message":e.errorMessage},null,8,["error-message"])],2)),[[y,e.hover,"desktop"]])}const S=Z(oe,[["render",re]]);S.install=function(e){e.component(S.name,S)};export{S};
