import{u as v}from"./elements-0d8daba2.js";import{a as b,c as x}from"./components-dc0ced43.js";import{d as N,ay as P,r as R,a as U,aa as w,v as B,a1 as E,f as z,h as F,q as a,S as s,ap as t,F as $,P as u,Q as i,aD as g}from"./vue-router-fb57fd33.js";import{R as j}from"./index-f78f6d13.js";import{S as D}from"./index-de89eea1.js";import{B as h}from"./index-6cefaec1.js";import{d as L}from"./index-59604d2c.js";import{u as O,c as q,a as _,_ as A,b as K}from"./index-b93da1bc.js";import"./shared-2147ccdf.js";import"./logger-525ef361.js";import"./index-5aae3056.js";import"./provide-77637e7f.js";import"./useChildren-5d4530e1.js";import"./index-82d28c5f.js";import"./index-2167135d.js";/* empty css               */import"./index-e6203409.js";import"./index-faa12cad.js";import"./index-1b01cecd.js";const Q={styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},{n:G}=x("style-provider"),l=N({name:"VarStyleProvider",props:Q,setup(e,{slots:n}){return()=>P(e.tag,{class:G(),style:v(e.styleVars)},b(n.default))}});const y=[];function c(e){y.forEach(o=>document.documentElement.style.removeProperty(o)),y.length=0;const n=v(e??{});Object.entries(n).forEach(([o,r])=>{document.documentElement.style.setProperty(o,r),y.push(o)})}c.Component=l;l.install=function(e){e.component(l.name,l)};c.install=function(e){e.component(l.name,l)};const H={componentCall:"组件调用",functionCall:"函数调用",toggleTheme:"切换样式变量",toggleRootTheme:"切换根节点样式变量"},I={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"},{add:C,use:J,pack:p,packs:ge,merge:he}=O(),M=e=>{q(e),J(e)};_("zh-CN",A);_("en-US",K);C("zh-CN",H);C("en-US",I);const ve={__name:"index",setup(e){const n=c.Component,o=R({score:5,license:!0}),r=U(null);let d=null;const T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V={"--color-primary":"#3f51b5"};function S(){r.value=r.value?null:T}function k(){d=d?null:V,c(d)}return w(M),B(()=>{c(E()==="darkTheme"?L:null)}),(W,m)=>(z(),F($,null,[a(t(g),null,{default:s(()=>[u(i(t(p).componentCall),1)]),_:1}),a(t(n),{"style-vars":r.value},{default:s(()=>[a(t(j),{modelValue:o.score,"onUpdate:modelValue":m[0]||(m[0]=f=>o.score=f)},null,8,["modelValue"]),a(t(D),{modelValue:o.license,"onUpdate:modelValue":m[1]||(m[1]=f=>o.license=f)},null,8,["modelValue"]),a(t(h),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:S},{default:s(()=>[u(i(t(p).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(t(g),null,{default:s(()=>[u(i(t(p).functionCall),1)]),_:1}),a(t(h),{type:"primary",block:"",onClick:k},{default:s(()=>[u(i(t(p).toggleRootTheme),1)]),_:1})],64))}};export{ve as default};
