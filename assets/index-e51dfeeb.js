import{I as u}from"./index-a279bce5.js";import{v as y}from"./index-34f8623a.js";import{d as v,c as b,a as k}from"./logger-4bf9ea67.js";import{a as t}from"./elements-a6c01043.js";import{d as S,b as g,_ as $,p as N,ag as O,D as h,f as r,h as n,O as o,N as s,q as B,j as i,M as V,Q as d,R as D}from"./vue-router-6d66666a.js";const z={title:{type:[Number,String]},icon:{type:String},description:{type:String},border:{type:Boolean,default:!1},borderOffset:{type:[Number,String]},iconClass:{type:String},titleClass:{type:String},descriptionClass:{type:String},extraClass:{type:String},ripple:{type:Boolean,default:!1},onClick:v()},{n:I,classes:R}=b("cell"),j=S({name:"VarCell",components:{VarIcon:u},directives:{Ripple:y},props:z,setup(e){const l=g(()=>e.borderOffset==null?{}:{"--cell-border-left":t(e.borderOffset),"--cell-border-right":t(e.borderOffset)});return{n:I,classes:R,toSizeUnit:t,borderOffsetStyles:l,handleClick:p=>{k(e.onClick,p)}}}});function q(e,l,c,p,w,E){const f=N("var-icon"),m=O("ripple");return h((r(),n("div",{class:s(e.classes(e.n(),[e.border,e.n("--border")],[e.onClick,e.n("--cursor")])),style:D(e.borderOffsetStyles),onClick:l[0]||(l[0]=(...C)=>e.handleClick&&e.handleClick(...C))},[o(e.$slots,"icon",{},()=>[e.icon?(r(),n("div",{key:0,class:s(e.classes(e.n("icon"),e.iconClass))},[B(f,{name:e.icon},null,8,["name"])],2)):i("",!0)]),V("div",{class:s(e.n("content"))},[o(e.$slots,"default",{},()=>[e.title?(r(),n("div",{key:0,class:s(e.classes(e.n("title"),e.titleClass))},d(e.title),3)):i("",!0)]),o(e.$slots,"description",{},()=>[e.description?(r(),n("div",{key:0,class:s(e.classes(e.n("description"),e.descriptionClass))},d(e.description),3)):i("",!0)])],2),e.$slots.extra?(r(),n("div",{key:0,class:s(e.classes(e.n("extra"),e.extraClass))},[o(e.$slots,"extra")],2)):i("",!0)],6)),[[m,{disabled:!e.ripple}]])}const a=$(j,[["render",q]]);a.install=function(e){e.component(a.name,a)};export{a as C};
