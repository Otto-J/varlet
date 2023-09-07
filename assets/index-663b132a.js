import{c as B}from"./index-f4470989.js";import{c as U,m as O}from"./components-b6d07272.js";import{a as v}from"./elements-f77c96df.js";/* empty css               */import{d as z,p as r,W as $,r as D,aj as M,E as L,e as j,l as E,w as i,U as o,M as I,P as l,Q as c}from"./index-176acade.js";import{B as m}from"./index-938c3f8d.js";import{S as V}from"./index-9dd168dc.js";import{d as A}from"./index-ea9abee8.js";import{u as F,b as h,_ as P,c as Q,a as W}from"./index-07af7096.js";import{A as q}from"./appType-cf48bbaf.js";import"./logger-525ef361.js";import"./index-0f2d8f7b.js";import"./index-646c8add.js";import"./index-623108f7.js";import"./index-42e67560.js";const G={value:{type:Number,default:0},opacity:{type:Number,default:0},error:Boolean,color:String,errorColor:String,height:[Number,String],top:[Number,String]};const{name:H,classes:J,n:w}=U("loading-bar"),K=z({name:H,props:G,setup(e){return()=>r("div",{class:J(w(),[e.error,w("--error")]),style:{zIndex:B.zIndex+10,width:`${e.value}%`,opacity:e.opacity,height:v(e.height),backgroundColor:e.error?e.errorColor:e.color,top:v(e.top)}},null)}});let C,b,p,T,y,k={};const R={value:0,opacity:0,error:!1},t=$(R),X=e=>{Object.assign(t,e)},Y=e=>{Object.assign(t,e),k=e},Z=()=>{Object.keys(k).forEach(e=>{t[e]!==void 0&&(t[e]=void 0)})},S=()=>{y||(y=!0,O(K,t))},f=()=>{C=window.setTimeout(()=>{if(t.value>=95)return;let e=Math.random();t.value<70&&(e=Math.round(5*Math.random())),t.value+=e,f()},200)},d=()=>{window.clearTimeout(b),window.clearTimeout(C),window.clearTimeout(p),window.clearTimeout(T)},ee=()=>{d(),t.error=!1,t.value=0,S(),p=window.setTimeout(()=>{t.opacity=1},200),f()},N=()=>{d(),t.value=100,p=window.setTimeout(()=>{t.opacity=0,b=window.setTimeout(()=>{t.error=!1},250)},300)},te=()=>{d(),t.error=!0,t.value===100&&(t.value=0),S(),p=window.setTimeout(()=>{t.opacity=1},200),f(),T=window.setTimeout(N,300)},oe={start:ee,finish:N,error:te,mergeConfig:X,setDefaultOptions:Y,resetDefaultOptions:Z},s=oe,re={basicUsage:"基本使用",start:"开始",finish:"结束",error:"错误",custom:"设置样式",clear:"清除样式"},ae={basicUsage:"Basic Usage",start:"Start",finish:"Finish",error:"Error",custom:"Custom Style",clear:"Clear Style"},{add:_,use:ie,pack:n,packs:ke,merge:Se}=F(),se=e=>{W(e),ie(e)};h("zh-CN",P);h("en-US",Q);_("zh-CN",re);_("en-US",ae);const Ne={__name:"index",setup(e){const u=D(!1);function x(){u.value?s.resetDefaultOptions():s.setDefaultOptions({errorColor:"#ff8800",color:"#10afef",height:"5px"}),u.value=!u.value}return M(A),L(se),s.setDefaultOptions({top:"14.5vmin"}),(ne,a)=>(j(),E(I,null,[r(o(q),null,{default:i(()=>[l(c(o(n).basicUsage),1)]),_:1}),r(o(V),{direction:"column",size:["3vmin","4vmin"]},{default:i(()=>[r(o(m),{type:"primary",block:"",onClick:a[0]||(a[0]=g=>o(s).start())},{default:i(()=>[l(c(o(n).start),1)]),_:1}),r(o(m),{type:"primary",block:"",onClick:a[1]||(a[1]=g=>o(s).finish())},{default:i(()=>[l(c(o(n).finish),1)]),_:1}),r(o(m),{type:"primary",block:"",onClick:a[2]||(a[2]=g=>o(s).error())},{default:i(()=>[l(c(o(n).error),1)]),_:1}),r(o(m),{type:"primary",block:"",onClick:x},{default:i(()=>[l(c(u.value?o(n).clear:o(n).custom),1)]),_:1})]),_:1})],64))}};export{Ne as default};
