import{S as p}from"./index-67af112d.js";import{B as r}from"./index-af8cef8a.js";import{S}from"./index-c4496cee.js";import{d as T}from"./index-59604d2c.js";import{r as B,aN as L,e as z,ac as M,aC as h,f as V,h as F,q as n,S as l,ap as t,M as E,au as w,F as I,P as i,Q as s,aD as b}from"./vue-router.esm-bundler-6be07501.js";import{u as R,c as q,a as U,_ as A,b as H}from"./index-3093d569.js";import"./index-76209a1a.js";import"./components-440543a7.js";import"./elements-323d4edc.js";import"./shared-bf7e5160.js";import"./index-84639265.js";import"./zIndex-e9e1e7c3.js";import"./index-acdd7a60.js";import"./lock-429dead7.js";import"./index-4453413c.js";/* empty css               */import"./index-34c73e6b.js";import"./index-d73f18e4.js";import"./useChildren-9d793b89.js";const P={functionCall:"函数调用",componentCall:"组件调用",type:"Snackbar 类型",success:"成功",info:"消息",warning:"警告",error:"错误",loading:"加载",text:"这是一个消息条！！",loaded:"加载成功！！",wait:"等待中...",close:"关闭",basicUsage:"基本使用",multiLine:"垂直排列",bottomDisplay:"底部显示",hiddenTime:"显示时长",forbidClick:"禁止穿透点击",multiple:"多例模式"},Q={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click",multiple:"Multiple"},{add:D,use:W,pack:e,packs:mt,merge:ft}=R(),j=C=>{q(C),W(C)};U("zh-CN",A);U("en-US",H);D("zh-CN",P);D("en-US",Q);const G={class:"snackbar-demo"},wt={setup(C){const v=B({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}),d=p.Component,{show1:y,show2:k,show3:c,show4:g,show9:x}=L(v);function m(u){v[u]=!v[u]}function f(u){const o=u==="loading"?e.value.wait:e.value.text,a=p[u](o);u==="loading"&&setTimeout(()=>{a.clear(),p.success(e.value.loaded)},2e3)}function $(u){u==="time"&&p({content:e.value.text,duration:1e3}),u==="position"&&p({content:e.value.text,position:"bottom"}),u||p(e.value.text)}function N(){p.allowMultiple(!0);const u=p("Snackbar 1");p.success("Snackbar 2"),setTimeout(()=>{u.clear()},1e3)}return z(()=>{p.allowMultiple(!1)}),M(j),h(T),(u,o)=>(V(),F(I,null,[n(t(b),null,{default:l(()=>[i(s(t(e).componentCall),1)]),_:1}),n(t(S),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(r),{type:"primary",block:"",onClick:o[0]||(o[0]=a=>m("show1"))},{default:l(()=>[i(s(t(e).basicUsage),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[1]||(o[1]=a=>m("show3"))},{default:l(()=>[i(s(t(e).multiLine),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[2]||(o[2]=a=>m("show2"))},{default:l(()=>[i(s(t(e).bottomDisplay),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[3]||(o[3]=a=>m("show4"))},{default:l(()=>[i(s(t(e).hiddenTime),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[4]||(o[4]=a=>m("show9"))},{default:l(()=>[i(s(t(e).forbidClick),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[i(s(t(e).functionCall),1)]),_:1}),n(t(S),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(r),{type:"warning",block:"",onClick:o[5]||(o[5]=a=>$())},{default:l(()=>[i(s(t(e).basicUsage),1)]),_:1}),n(t(r),{type:"warning",block:"",onClick:o[6]||(o[6]=a=>$("time"))},{default:l(()=>[i(s(t(e).hiddenTime),1)]),_:1}),n(t(r),{type:"warning",block:"",onClick:o[7]||(o[7]=a=>$("position"))},{default:l(()=>[i(s(t(e).bottomDisplay),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[i(s(t(e).type),1)]),_:1}),n(t(S),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(r),{type:"success",block:"",onClick:o[8]||(o[8]=a=>f("success"))},{default:l(()=>[i(s(t(e).success),1)]),_:1}),n(t(r),{type:"warning",block:"",onClick:o[9]||(o[9]=a=>f("warning"))},{default:l(()=>[i(s(t(e).warning),1)]),_:1}),n(t(r),{type:"info",block:"",onClick:o[10]||(o[10]=a=>f("info"))},{default:l(()=>[i(s(t(e).info),1)]),_:1}),n(t(r),{type:"danger",block:"",onClick:o[11]||(o[11]=a=>f("error"))},{default:l(()=>[i(s(t(e).error),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[12]||(o[12]=a=>f("loading"))},{default:l(()=>[i(s(t(e).loading),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[i(s(t(e).multiple),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:N},{default:l(()=>[i(s(t(e).multiple),1)]),_:1}),E("div",G,[n(t(d),{show:t(y),"onUpdate:show":o[13]||(o[13]=a=>w(y)?y.value=a:null)},{default:l(()=>[i(s(t(e).text),1)]),_:1},8,["show"]),n(t(d),{show:t(k),"onUpdate:show":o[15]||(o[15]=a=>w(k)?k.value=a:null),position:"bottom"},{action:l(()=>[n(t(r),{type:"primary",onClick:o[14]||(o[14]=a=>k.value=!1)},{default:l(()=>[i(s(t(e).close),1)]),_:1})]),default:l(()=>[i(s(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(d),{show:t(c),"onUpdate:show":o[17]||(o[17]=a=>w(c)?c.value=a:null),vertical:!0},{action:l(()=>[n(t(r),{type:"primary",onClick:o[16]||(o[16]=a=>c.value=!1)},{default:l(()=>[i(s(t(e).close),1)]),_:1})]),default:l(()=>[i(s(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(d),{show:t(g),"onUpdate:show":o[18]||(o[18]=a=>w(g)?g.value=a:null),duration:1e3},{default:l(()=>[i(s(t(e).text),1)]),_:1},8,["show"]),n(t(d),{show:t(x),"onUpdate:show":o[19]||(o[19]=a=>w(x)?x.value=a:null),"forbid-click":!0},{default:l(()=>[i(s(t(e).text),1)]),_:1},8,["show"])])],64))}};export{wt as default};
