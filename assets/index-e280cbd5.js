import{I as Y}from"./index-44228c5c.js";import{F as q,u as L}from"./provide-d17c82bc.js";import{v as J}from"./index-0f2d8f7b.js";import{v as Q}from"./index-42e67560.js";import{H as Z,u as _}from"./index-623108f7.js";import{d as v,g as I,h as x,a as m,c as ee,w as ne}from"./components-b6d07272.js";import{a1 as ae,a3 as oe,d as re,B as w,r as se,n as ie,_ as le,b as p,K as D,e as N,l as A,m as E,O as de,t as d,v as ce,s as k,p as t,q as V}from"./index-176acade.js";const M=Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");function Se(){const{bindChildren:e,childProviders:r,length:l}=ae(M);return{length:l,checkboxes:r,bindCheckboxes:e}}const te={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedColor:String,uncheckedColor:String,disabled:Boolean,readonly:Boolean,indeterminate:Boolean,iconSize:[String,Number],ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:Array,onClick:v(),onChange:v(),"onUpdate:modelValue":v(),"onUpdate:indeterminate":v()};function ue(){const{bindParent:e,parentProvider:r,index:l}=oe(M);return{index:l,checkboxGroup:r,bindCheckboxGroup:e}}const{name:he,n:ve,classes:me}=ee("checkbox"),ke=re({name:he,directives:{Ripple:J,Hover:Q},components:{VarIcon:Y,VarFormDetails:q,VarHoverOverlay:Z},props:te,setup(e){const r=I(e,"modelValue"),l=I(e,"indeterminate"),c=w(()=>r.value===e.checkedValue),B=w(()=>e.checkedValue),u=se(!1),{checkboxGroup:n,bindCheckboxGroup:b}=ue(),{hovering:f,handleHovering:C}=_(),{form:a,bindForm:g}=L(),{errorMessage:P,validateWithTrigger:R,validate:$,resetValidation:y}=x(),O={checkedValue:B,checked:c,sync:T,validate:H,resetValidation:y,reset:z,resetWithAnimation:U};m(b,O),m(g,O);function K(s){ie(()=>{const{validateTrigger:o,rules:i,modelValue:h}=e;R(o,s,i,h)})}function S(s){const{checkedValue:o,onChange:i}=e;r.value=s,l.value=!1,m(i,r.value),K("onChange"),s===o?n==null||n.onChecked(o):n==null||n.onUnchecked(o)}function F(s){const{disabled:o,readonly:i,checkedValue:h,uncheckedValue:X,onClick:j}=e;if(a!=null&&a.disabled.value||o||(m(j,s),a!=null&&a.readonly.value||i))return;u.value=!0;const W=n?n.checkedCount.value>=Number(n.max.value):!1;!c.value&&W||S(c.value?X:h)}function T(s){const{checkedValue:o,uncheckedValue:i}=e;r.value=s.includes(o)?o:i}function U(){u.value=!1}function z(){r.value=e.uncheckedValue,y()}function G(s){const{checkedValue:o,uncheckedValue:i}=e;![o,i].includes(s)&&(s=c.value?i:o),S(s)}function H(){return $(e.rules,e.modelValue)}return{isIndeterminate:l,withAnimation:u,checked:c,errorMessage:P,checkboxGroupErrorMessage:n==null?void 0:n.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,hovering:f,n:ve,classes:me,handleHovering:C,handleClick:F,toggle:G,reset:z,validate:H,resetValidation:y}}});function be(e,r,l,c,B,u){const n=p("var-icon"),b=p("var-hover-overlay"),f=p("var-form-details"),C=D("hover"),a=D("ripple");return N(),A("div",{class:d(e.n("wrap")),onClick:r[0]||(r[0]=(...g)=>e.handleClick&&e.handleClick(...g))},[E("div",{class:d(e.n())},[de((N(),A("div",{class:d(e.classes(e.n("action"),[e.checked||e.isIndeterminate,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:ce({color:e.checked||e.isIndeterminate?e.checkedColor:e.uncheckedColor})},[e.isIndeterminate?k(e.$slots,"indeterminate-icon",{key:0},()=>[t(n,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"minus-box",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):V("",!0),e.checked&&!e.isIndeterminate?k(e.$slots,"checked-icon",{key:1},()=>[t(n,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-marked",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):V("",!0),!e.checked&&!e.isIndeterminate?k(e.$slots,"unchecked-icon",{key:2},()=>[t(n,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-blank-outline",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):V("",!0),t(b,{hovering:!e.disabled&&!e.formDisabled&&e.hovering},null,8,["hovering"])],6)),[[C,e.handleHovering,"desktop"],[a,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),E("div",{class:d(e.classes(e.n("text"),[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[k(e.$slots,"default")],2)],2),t(f,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const fe=le(ke,[["render",be]]);ne(fe);export{fe as C,Se as u};
