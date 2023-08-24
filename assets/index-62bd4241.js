import{I as Y}from"./index-5ae50cc0.js";import{F as q,u as L}from"./provide-8be1530f.js";import{v as J}from"./index-fde800b6.js";import{v as Q}from"./index-ef9afa54.js";import{d as v,u as Z,k as _,j as x,a as t,c as ee,w as ae}from"./logger-9a144f5d.js";import{u as ne}from"./useChildren-05343878.js";import{H as oe,u as se}from"./index-d113846f.js";import{d as re,a as H,b as I,w as le,n as ie,_ as de,p,af as N,f as A,h as E,M,D as te,N as d,R as ce,O as k,q as u,j as V}from"./vue-router-547718df.js";const R=Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");function Se(){const{bindChildren:e,childProviders:o,length:l}=ne(R);return{length:l,checkboxes:o,bindCheckboxes:e}}const ue={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedColor:{type:String},uncheckedColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onClick:v(),onChange:v(),"onUpdate:modelValue":v(),"onUpdate:indeterminate":v()};function he(){const{bindParent:e,parentProvider:o,index:l}=Z(R);return{index:l,checkboxGroup:o,bindCheckboxGroup:e}}const{n:me,classes:ve}=ee("checkbox"),ke=re({name:"VarCheckbox",directives:{Ripple:J,Hover:Q},components:{VarIcon:Y,VarFormDetails:q,VarHoverOverlay:oe},props:ue,setup(e){const o=H(!1),l=I(()=>o.value===e.checkedValue),B=I(()=>e.checkedValue),h=H(!1),{checkboxGroup:s,bindCheckboxGroup:c}=he(),{hovering:b,handleHovering:f}=se(),{form:a,bindForm:C}=L(),{errorMessage:y,validateWithTrigger:P,validate:$,resetValidation:g}=_(),w=x(e,"indeterminate"),U=n=>{ie(()=>{const{validateTrigger:r,rules:i,modelValue:m}=e;P(r,n,i,m)})},O=n=>{o.value=n,w.value=!1;const{checkedValue:r,onChange:i}=e;t(e["onUpdate:modelValue"],o.value),t(i,o.value),U("onChange"),n===r?s==null||s.onChecked(r):s==null||s.onUnchecked(r)},K=n=>{const{disabled:r,readonly:i,checkedValue:m,uncheckedValue:G,onClick:X}=e;if(a!=null&&a.disabled.value||r||(t(X,n),a!=null&&a.readonly.value||i))return;h.value=!0;const W=s?s.checkedCount.value>=Number(s.max.value):!1;!l.value&&W||O(l.value?G:m)},j=n=>{const{checkedValue:r,uncheckedValue:i}=e;o.value=n.includes(r)?r:i},F=()=>{h.value=!1},S=()=>{t(e["onUpdate:modelValue"],e.uncheckedValue),g()},T=n=>{const{checkedValue:r,uncheckedValue:i}=e;![r,i].includes(n)&&(n=l.value?i:r),O(n)},z=()=>$(e.rules,e.modelValue);le(()=>e.modelValue,n=>{o.value=n},{immediate:!0});const D={checkedValue:B,checked:l,sync:j,validate:z,resetValidation:g,reset:S,resetWithAnimation:F};return t(c,D),t(C,D),{isIndeterminate:w,withAnimation:h,checked:l,errorMessage:y,checkboxGroupErrorMessage:s==null?void 0:s.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,hovering:b,handleHovering:f,n:me,classes:ve,handleClick:K,toggle:T,reset:S,validate:z,resetValidation:g}}});function be(e,o,l,B,h,s){const c=p("var-icon"),b=p("var-hover-overlay"),f=p("var-form-details"),a=N("hover"),C=N("ripple");return A(),E("div",{class:d(e.n("wrap")),onClick:o[0]||(o[0]=(...y)=>e.handleClick&&e.handleClick(...y))},[M("div",{class:d(e.n())},[te((A(),E("div",{class:d(e.classes(e.n("action"),[e.checked||e.isIndeterminate,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:ce({color:e.checked||e.isIndeterminate?e.checkedColor:e.uncheckedColor})},[e.isIndeterminate?k(e.$slots,"indeterminate-icon",{key:0},()=>[u(c,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"minus-box",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):V("",!0),e.checked&&!e.isIndeterminate?k(e.$slots,"checked-icon",{key:1},()=>[u(c,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-marked",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):V("",!0),!e.checked&&!e.isIndeterminate?k(e.$slots,"unchecked-icon",{key:2},()=>[u(c,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-blank-outline",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):V("",!0),u(b,{hovering:!e.disabled&&!e.formDisabled&&e.hovering},null,8,["hovering"])],6)),[[a,e.handleHovering,"desktop"],[C,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),M("div",{class:d(e.classes(e.n("text"),[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[k(e.$slots,"default")],2)],2),u(f,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const fe=de(ke,[["render",be]]);ae(fe);export{fe as C,Se as u};
