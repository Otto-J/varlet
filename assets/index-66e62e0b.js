import{c as a}from"./logger-4bf9ea67.js";import{d as s,_ as t,f as l,h as c,N as v,a as i}from"./vue-router-6d66666a.js";const p={hovering:{type:Boolean,default:!0}},{n:u,classes:f}=a("hover-overlay"),m=s({name:"VarHoverOverlay",props:p,setup(){return{n:u,classes:f}}});function _(e,r,o,d,h,y){return l(),c("div",{class:v(e.classes(e.n(),[e.hovering,e.n("--hovering")]))},null,2)}const n=t(m,[["render",_]]);n.install=function(e){e.component(n.name,n)};function O(){const e=i(!1);return{hovering:e,handleHovering:o=>{e.value=o}}}export{n as H,O as u};
