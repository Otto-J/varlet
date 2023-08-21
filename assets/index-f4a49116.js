import{C as V}from"./index-91236c26.js";import{v as H}from"./index-fde800b6.js";import{u as P,e as E,c as $,w}from"./logger-9a144f5d.js";import{u as B}from"./useChildren-05343878.js";import{v as D}from"./index-ef9afa54.js";import{H as I,u as T}from"./index-d113846f.js";import{d as L,a as R,b as c,w as z,_ as K,p as m,af as h,D as M,f,h as Y,M as C,N as d,R as b,i as j,ag as q,j as Q,O as U,P as A,Q as F,q as G}from"./vue-router-547718df.js";const k=Symbol("SELECT_BIND_OPTION_KEY");function ce(){const{length:e,childProviders:o,bindChildren:n}=B(k);return{length:e,options:o,bindOptions:n}}function J(){const{index:e,parentProvider:o,bindParent:n}=P(k);return n||E("Option","<var-option/> must in <var-select/>"),{index:e,select:o,bindSelect:n}}const W={label:{},value:{}},{n:X,classes:Z}=$("option"),_=L({name:"VarOption",directives:{Ripple:H,Hover:D},components:{VarCheckbox:V,VarHoverOverlay:I},props:W,setup(e){const o=R(!1),n=c(()=>o.value),v=c(()=>e.label),p=c(()=>e.value),{select:u,bindSelect:r}=J(),{multiple:l,focusColor:t,onSelect:a,computeLabel:s}=u,{hovering:S,handleHovering:y}=T(),O=()=>{l.value&&(o.value=!o.value),a(i)},g=()=>a(i),i={label:v,value:p,selected:n,sync:N=>{o.value=N}};return z([()=>e.label,()=>e.value],s),r(i),{n:X,classes:Z,optionSelected:o,multiple:l,focusColor:t,hovering:S,handleHovering:y,handleClick:O,handleSelect:g}}});function x(e,o,n,v,p,u){const r=m("var-checkbox"),l=m("var-hover-overlay"),t=h("ripple"),a=h("hover");return M((f(),Y("div",{class:d(e.classes(e.n(),e.n("$--box"),[e.optionSelected,e.n("--selected-color")])),style:b({color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...s)=>e.handleClick&&e.handleClick(...s))},[C("div",{class:d(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:b({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(f(),j(r,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=s=>e.optionSelected=s),onClick:o[1]||(o[1]=q(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):Q("",!0),C("div",{class:d(e.classes(e.n("text"),e.n("$--ellipsis")))},[U(e.$slots,"default",{},()=>[A(F(e.label),1)])],2),G(l,{hovering:e.hovering},null,8,["hovering"])],6)),[[t],[a,e.handleHovering,"desktop"]])}const ee=K(_,[["render",x]]);w(ee);export{ee as O,ce as u};
