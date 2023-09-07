import{F as q,u as E}from"./provide-d17c82bc.js";import{v as I}from"./index-0f2d8f7b.js";import{v as K}from"./index-42e67560.js";import{H as L,u as j}from"./index-623108f7.js";import{d as C,h as G,a as u,c as J,w as Q}from"./components-b6d07272.js";import{m as o}from"./elements-f77c96df.js";import{d as X,B as H,n as Y,_ as Z,b as z,K as $,O as F,e as b,l as w,m as c,v,t as r,q as _,p as N}from"./index-176acade.js";const x={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:Boolean,readonly:Boolean,loading:Boolean,color:String,loadingColor:String,closeColor:String,size:[String,Number],rules:Array,ripple:{type:Boolean,default:!0},onClick:C(),onChange:C(),"onUpdate:modelValue":C()},{name:ee,n:ae,classes:le}=J("switch"),oe=X({name:ee,components:{VarFormDetails:q,VarHoverOverlay:L},directives:{Ripple:I,Hover:K},props:x,setup(e){const{bindForm:h,form:a}=E(),{errorMessage:n,validateWithTrigger:k,validate:B,resetValidation:m}=G(),{hovering:p,handleHovering:g}=j(),V=H(()=>{const{size:l,modelValue:i,color:t,closeColor:d,loadingColor:f,activeValue:s}=e;return{handle:{width:o(l),height:o(l),backgroundColor:i===s?t:d,color:f},ripple:{left:i===s?o(l,.5):`-${o(l,.5)}`,color:i===s?t:d||"#999",width:o(l,2),height:o(l,2)},track:{height:o(l,.72),width:o(l,1.9),borderRadius:o(l,2/3),filter:i===s||n!=null&&n.value?void 0:"brightness(.6)",backgroundColor:i===s?t:d},switch:{height:o(l,1.2),width:o(l,2)}}}),y=H(()=>o(e.size,.8));u(h,{reset:M,validate:A,resetValidation:m});function A(){return B(e.rules,e.modelValue)}function O(){return Y(()=>k(["onChange"],"onChange",e.rules,e.modelValue))}function R(l){const{onClick:i,onChange:t,disabled:d,loading:f,readonly:s,modelValue:P,activeValue:S,inactiveValue:T,"onUpdate:modelValue":W}=e;if(u(i,l),d||f||s||a!=null&&a.disabled.value||a!=null&&a.readonly.value)return;const D=P===S?T:S;u(t,D),u(W,D),O()}function U(l){e.disabled||a!=null&&a.disabled.value||g(l)}function M(){u(e["onUpdate:modelValue"],e.inactiveValue),m()}return{hovering:p,radius:y,styleComputed:V,errorMessage:n,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,n:ae,classes:le,multiplySizeUnit:o,switchActive:R,hover:U}}});const ie=c("svg",{viewBox:"25 25 50 50"},[c("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),se=[ie];function re(e,h,a,n,k,B){const m=z("var-hover-overlay"),p=z("var-form-details"),g=$("ripple"),V=$("hover");return F((b(),w("div",{class:r(e.n())},[c("div",{class:r(e.classes(e.n("block"),[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:h[0]||(h[0]=(...y)=>e.switchActive&&e.switchActive(...y)),style:v(e.styleComputed.switch)},[c("div",{style:v(e.styleComputed.track),class:r(e.classes(e.n("track"),[e.modelValue===e.activeValue,e.n("track--active")],[e.errorMessage,e.n("track--error")]))},null,6),F((b(),w("div",{class:r(e.classes(e.n("ripple"),[e.modelValue===e.activeValue,e.n("ripple--active")])),style:v(e.styleComputed.ripple)},[c("div",{style:v(e.styleComputed.handle),class:r(e.classes(e.n("handle"),e.n("$-elevation--2"),[e.modelValue===e.activeValue,e.n("handle--active")],[e.errorMessage,e.n("handle--error")]))},[e.loading?(b(),w("span",{key:0,class:r(e.n("loading")),style:v({width:e.radius,height:e.radius})},se,6)):_("",!0)],6),N(m,{hovering:e.hovering},null,8,["hovering"])],6)),[[g,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),N(p,{"error-message":e.errorMessage},null,8,["error-message"])],2)),[[V,e.hover,"desktop"]])}const ne=Z(oe,[["render",re]]);Q(ne);export{ne as S};
