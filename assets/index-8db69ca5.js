import{c as O}from"./index-acdd7a60.js";import{c as U,m as _}from"./components-440543a7.js";import{a as w}from"./elements-323d4edc.js";/* empty css               */import{d as z,q as r,r as D,a as $,aC as L,ac as M,f as V,h as j,S as s,ap as o,F as E,P as l,Q as c,aD as F}from"./vue-router.esm-bundler-6be07501.js";import{B as m}from"./index-d6212563.js";import{S as I}from"./index-c4496cee.js";import{d as P}from"./index-59604d2c.js";import{u as q,c as A,a as h,_ as Q,b as G}from"./index-3093d569.js";import"./shared-bf7e5160.js";import"./index-4453413c.js";import"./index-76209a1a.js";import"./index-d73f18e4.js";import"./useChildren-9d793b89.js";const H={value:{type:Number,default:0},opacity:{type:Number,default:0},error:{type:Boolean,default:!1},color:{type:String},errorColor:{type:String},height:{type:[Number,String]},top:{type:[Number,String]}};const{classes:J,n:g}=U("loading-bar"),K=z({name:"VarLoadingBar",props:H,setup(e){return()=>r("div",{class:J(g(),[e.error,g("--error")]),style:{zIndex:O.zIndex+10,width:`${e.value}%`,opacity:e.opacity,height:w(e.height),backgroundColor:e.error?e.errorColor:e.color,top:w(e.top)}},null)}});let C,b,p,S,v,T={};const R={value:0,opacity:0,error:!1},t=D(R),W=e=>{Object.assign(t,e)},X=e=>{Object.assign(t,e),T=e},Y=()=>{Object.keys(T).forEach(e=>{t[e]!==void 0&&(t[e]=void 0)})},k=()=>{v||(v=!0,_(K,t))},f=()=>{C=window.setTimeout(()=>{if(t.value>=95)return;let e=Math.random();t.value<70&&(e=Math.round(5*Math.random())),t.value+=e,f()},200)},d=()=>{window.clearTimeout(b),window.clearTimeout(C),window.clearTimeout(p),window.clearTimeout(S)},Z=()=>{d(),t.error=!1,t.value=0,k(),p=window.setTimeout(()=>{t.opacity=1},200),f()},N=()=>{d(),t.value=100,p=window.setTimeout(()=>{t.opacity=0,b=window.setTimeout(()=>{t.error=!1},250)},300)},ee=()=>{d(),t.error=!0,t.value===100&&(t.value=0),k(),p=window.setTimeout(()=>{t.opacity=1},200),f(),S=window.setTimeout(N,300)},te={start:Z,finish:N,error:ee,mergeConfig:W,setDefaultOptions:X,resetDefaultOptions:Y},i=te,oe={basicUsage:"基本使用",start:"开始",finish:"结束",error:"错误",custom:"设置样式",clear:"清除样式"},re={basicUsage:"Basic Usage",start:"Start",finish:"Finish",error:"Error",custom:"Custom Style",clear:"Clear Style"},{add:B,use:ae,pack:n,packs:be,merge:Se}=q(),se=e=>{A(e),ae(e)};h("zh-CN",Q);h("en-US",G);B("zh-CN",oe);B("en-US",re);const Te={setup(e){const u=$(!1);function x(){u.value?i.resetDefaultOptions():i.setDefaultOptions({errorColor:"#ff8800",color:"#10afef",height:"5px"}),u.value=!u.value}return L(P),M(se),i.setDefaultOptions({top:"14.5vw"}),(ie,a)=>(V(),j(E,null,[r(o(F),null,{default:s(()=>[l(c(o(n).basicUsage),1)]),_:1}),r(o(I),{direction:"column",size:["3vw","4vw"]},{default:s(()=>[r(o(m),{type:"primary",block:"",onClick:a[0]||(a[0]=y=>o(i).start())},{default:s(()=>[l(c(o(n).start),1)]),_:1}),r(o(m),{type:"primary",block:"",onClick:a[1]||(a[1]=y=>o(i).finish())},{default:s(()=>[l(c(o(n).finish),1)]),_:1}),r(o(m),{type:"primary",block:"",onClick:a[2]||(a[2]=y=>o(i).error())},{default:s(()=>[l(c(o(n).error),1)]),_:1}),r(o(m),{type:"primary",block:"",onClick:x},{default:s(()=>[l(c(u.value?o(n).clear:o(n).custom),1)]),_:1})]),_:1})],64))}};export{Te as default};
