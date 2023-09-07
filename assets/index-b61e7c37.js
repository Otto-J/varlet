import{C as H}from"./index-e280cbd5.js";import{v as P}from"./index-0f2d8f7b.js";import{v as B}from"./index-42e67560.js";import{H as E,u as $}from"./index-623108f7.js";import{a1 as w,a3 as D,d as I,r as T,B as c,F as L,_ as K,b as m,K as f,O as z,e as h,l as R,m as C,t as d,v as b,f as Y,L as q,q as F,s as M,P as Q,Q as U,p as j}from"./index-176acade.js";import{e as A}from"./logger-525ef361.js";import{c as G,w as J}from"./components-b6d07272.js";const k=Symbol("SELECT_BIND_OPTION_KEY");function de(){const{length:e,childProviders:o,bindChildren:n}=w(k);return{length:e,options:o,bindOptions:n}}function W(){const{index:e,parentProvider:o,bindParent:n}=D(k);return n||A("Option","<var-option/> must in <var-select/>"),{index:e,select:o,bindSelect:n}}const X={label:{},value:{}},{name:Z,n:_,classes:x}=G("option"),ee=I({name:Z,directives:{Ripple:P,Hover:B},components:{VarCheckbox:H,VarHoverOverlay:E},props:X,setup(e){const o=T(!1),n=c(()=>o.value),v=c(()=>e.label),p=c(()=>e.value),{select:u,bindSelect:a}=W(),{multiple:s,focusColor:t,onSelect:r,computeLabel:l}=u,{hovering:S,handleHovering:y}=$(),i={label:v,value:p,selected:n,sync:N};L([()=>e.label,()=>e.value],l),a(i);function O(){s.value&&(o.value=!o.value),r(i)}function g(){return r(i)}function N(V){o.value=V}return{n:_,classes:x,optionSelected:o,multiple:s,focusColor:t,hovering:S,handleHovering:y,handleClick:O,handleSelect:g}}});function oe(e,o,n,v,p,u){const a=m("var-checkbox"),s=m("var-hover-overlay"),t=f("ripple"),r=f("hover");return z((h(),R("div",{class:d(e.classes(e.n(),e.n("$--box"),[e.optionSelected,e.n("--selected-color")])),style:b({color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...l)=>e.handleClick&&e.handleClick(...l))},[C("div",{class:d(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:b({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(h(),Y(a,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=l=>e.optionSelected=l),onClick:o[1]||(o[1]=q(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):F("",!0),C("div",{class:d(e.classes(e.n("text"),e.n("$--ellipsis")))},[M(e.$slots,"default",{},()=>[Q(U(e.label),1)])],2),j(s,{hovering:e.hovering},null,8,["hovering"])],6)),[[t],[r,e.handleHovering,"desktop"]])}const ne=K(ee,[["render",oe]]);J(ne);export{ne as O,de as u};
