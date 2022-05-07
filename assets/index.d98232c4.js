import{F as z,u as N}from"./provide.8690a491.js";import{d as W,a as n,c as w,z as b}from"./components.be4fa7b1.js";import{u as B}from"./index.82b35c20.js";import{d as S,b as c,w as y,_ as D,l as q,o as H,f as P,E as j,H as I,G as _,p as J,n as K}from"./elevation.ded31914.js";function L(e){return["horizontal","vertical"].includes(e)}const O={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:L},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Q,classes:R}=w("checkbox-group"),X=S({name:"VarCheckboxGroup",components:{VarFormDetails:z},props:O,setup(e){const d=c(()=>e.max),u=c(()=>e.modelValue.length),{length:m,checkboxes:r,bindCheckboxes:h}=B(),{bindForm:s}=N(),{errorMessage:v,validateWithTrigger:x,validate:A,resetValidation:l}=W(),F=c(()=>v.value),G=a=>{K(()=>{const{validateTrigger:o,rules:t,modelValue:T}=e;x(o,a,t,T)})},f=a=>{n(e["onUpdate:modelValue"],a),n(e.onChange,a),G("onChange")},U=a=>{const{modelValue:o}=e;o.includes(a)||f([...o,a])},$=a=>{const{modelValue:o}=e;!o.includes(a)||f(o.filter(t=>t!==a))},g=()=>r.forEach(({sync:a})=>a(e.modelValue)),V=()=>{r.forEach(a=>a.resetWithAnimation())},E=()=>{const a=r.map(({checkedValue:t})=>t.value),o=b(a);return V(),n(e["onUpdate:modelValue"],o),o},M=()=>{const a=r.filter(({checked:t})=>!t.value).map(({checkedValue:t})=>t.value),o=b(a);return V(),n(e["onUpdate:modelValue"],o),o},k=()=>{n(e["onUpdate:modelValue"],[]),l()},p=()=>A(e.rules,e.modelValue);y(()=>e.modelValue,g,{deep:!0}),y(()=>m.value,g);const C={max:d,checkedCount:u,onChecked:U,onUnchecked:$,validate:p,resetValidation:l,reset:k,errorMessage:F};return h(C),n(s,C),{errorMessage:v,n:Q,classes:R,checkAll:E,inverseAll:M,reset:k,validate:p,resetValidation:l}}});function Y(e,d,u,m,r,h){const s=q("var-form-details");return H(),P("div",{class:_(e.n("wrap"))},[j("div",{class:_(e.classes(e.n(),e.n(`--${e.direction}`)))},[I(e.$slots,"default")],2),J(s,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var i=D(X,[["render",Y]]);i.install=function(e){e.component(i.name,i)};export{i as C};
