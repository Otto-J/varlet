import{v as o}from"./index-82d28c5f.js";import{d as s,f as l,c as t,a as p}from"./components-dc0ced43.js";import{a as d}from"./elements-0d8daba2.js";import{d as f,_ as u,ag as m,D as h,f as v,h as c,O as y,N as k,R as C}from"./vue-router-fb57fd33.js";const S={elevation:{type:[Boolean,Number,String],default:!1},ripple:{type:Boolean,default:!1},radius:{type:[Number,String]},width:{type:[Number,String]},height:{type:[Number,String]},round:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},onClick:s()},{n:g,classes:b}=t("paper"),$=f({name:"VarPaper",directives:{Ripple:o},props:S,setup(e){return{n:g,classes:b,formatElevation:l,toSizeUnit:d,handleClick:a=>{p(e.onClick,a)}}}});function z(e,i,a,B,N,w){const n=m("ripple");return h((v(),c("div",{class:k(e.classes(e.n(),e.n("$--box"),e.formatElevation(e.elevation,2),[e.onClick,e.n("--cursor")],[e.round,e.n("--round")],[e.inline,e.n("$--inline-flex")])),style:C({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)}),onClick:i[0]||(i[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[y(e.$slots,"default")],6)),[[n,{disabled:!e.ripple}]])}const R=u($,[["render",z]]);export{R as V};
