import{c as M,u as F}from"./logger-ef73fd8d.js";import{d as h,_ as v,f as r,i as y,S as n,h as t,N as o,M as c,q as p,G as i,Q as f,j as m,O as I,z as C}from"./vue-router-fcc070b4.js";import{u as N}from"./useChildren-71467955.js";const b={errorMessage:{type:String,default:""},extraMessage:{type:String,default:""}},{n:k}=M("form-details"),B=h({name:"VarFormDetails",props:b,setup:()=>({n:k})});const D={key:0},S={key:0};function $(e,a,s,l,_,u){return r(),y(i,{name:e.n()},{default:n(()=>[e.errorMessage||e.extraMessage||e.$slots["extra-message"]?(r(),t("div",{key:0,class:o(e.n())},[c("div",{class:o(e.n("error-message"))},[p(i,{name:e.n("message")},{default:n(()=>[e.errorMessage?(r(),t("div",D,f(e.errorMessage),1)):m("",!0)]),_:1},8,["name"])],2),c("div",{class:o(e.n("extra-message"))},[p(i,{name:e.n("message")},{default:n(()=>[I(e.$slots,"extra-message",{},()=>[e.extraMessage?(r(),t("div",S,f(e.extraMessage),1)):m("",!0)])]),_:3},8,["name"])],2)],2)):m("",!0)]),_:3},8,["name"])}const d=v(B,[["render",$]]);d.install=function(e){e.component(d.name,d)};const g=Symbol("FORM_BIND_FORM_ITEM_KEY");function R(){const{parentProvider:e,index:a,bindParent:s}=F(g),l=C();return{index:a,form:e,bindForm:s?u=>{s({...u,instance:l})}:null}}function V(){const{childProviders:e,length:a,bindChildren:s}=N(g);return{length:a,formItems:e,bindFormItems:s}}export{d as F,V as a,R as u};
