import{S as p}from"./index.69f6298f.js";import{B as s}from"./index.544f6269.js";import{S as D}from"./index.16b5e32a.js";import{A as b}from"./AppType.f79597c7.js";import{d as U}from"./index.8b4f1b33.js";import{u as E,a as $,_ as A,b as T,c as L}from"./index.8c844836.js";import{a as N,b as z}from"./utils.8699bdee.js";import{r as h,aH as M,f as V,h as I,q as n,S as l,an as t,M as H,aI as w,F as R,P as a,Q as i}from"./vue-router.esm-bundler.786782d7.js";import"./index.cc77df0d.js";import"./components.5becca44.js";import"./elements.c4571a13.js";import"./shared.ca7a1081.js";import"./index.dff8d656.js";import"./zIndex.968e189b.js";import"./index.5d0c9db1.js";import"./lock.60d17316.js";import"./index.f5bcaaa1.js";/* empty css               */const q={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",type:"Snackbar \u7C7B\u578B",success:"\u6210\u529F",info:"\u6D88\u606F",warning:"\u8B66\u544A",error:"\u9519\u8BEF",loading:"\u52A0\u8F7D",text:"\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01",loaded:"\u52A0\u8F7D\u6210\u529F\uFF01\uFF01",wait:"\u7B49\u5F85\u4E2D...",close:"\u5173\u95ED",basicUsage:"\u57FA\u672C\u4F7F\u7528",multiLine:"\u5782\u76F4\u6392\u5217",bottomDisplay:"\u5E95\u90E8\u663E\u793A",hiddenTime:"\u663E\u793A\u65F6\u957F",forbidClick:"\u7981\u6B62\u7A7F\u900F\u70B9\u51FB",multiple:"\u591A\u4F8B\u6A21\u5F0F"},P={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click",multiple:"Multiple"},{add:B,use:Q,pack:e,packs:pt,merge:dt}=E(),W=C=>{L(C),Q(C)};$("zh-CN",A);$("en-US",T);B("zh-CN",q);B("en-US",P);const j={class:"snackbar-demo"},mt={setup(C){const v=h({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}),d=p.Component,{show1:F,show2:k,show3:c,show4:y,show9:g}=M(v),m=r=>{v[r]=!v[r]},f=r=>{const o=r==="loading"?e.value.wait:e.value.text,u=p[r](o);r==="loading"&&setTimeout(()=>{u.clear(),p.success(e.value.loaded)},2e3)},x=r=>{r==="time"&&p({content:e.value.text,duration:1e3}),r==="position"&&p({content:e.value.text,position:"bottom"}),r||p(e.value.text)},S=()=>{p.allowMultiple(!0);const r=p("Snackbar 1");p.success("Snackbar 2"),setTimeout(()=>{r.clear()},1e3)};return N(W),z(U),(r,o)=>(V(),I(R,null,[n(t(b),null,{default:l(()=>[a(i(t(e).componentCall),1)]),_:1}),n(t(D),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(s),{type:"primary",block:"",onClick:o[0]||(o[0]=u=>m("show1"))},{default:l(()=>[a(i(t(e).basicUsage),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[1]||(o[1]=u=>m("show3"))},{default:l(()=>[a(i(t(e).multiLine),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[2]||(o[2]=u=>m("show2"))},{default:l(()=>[a(i(t(e).bottomDisplay),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[3]||(o[3]=u=>m("show4"))},{default:l(()=>[a(i(t(e).hiddenTime),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[4]||(o[4]=u=>m("show9"))},{default:l(()=>[a(i(t(e).forbidClick),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[a(i(t(e).functionCall),1)]),_:1}),n(t(D),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(s),{type:"warning",block:"",onClick:o[5]||(o[5]=u=>x())},{default:l(()=>[a(i(t(e).basicUsage),1)]),_:1}),n(t(s),{type:"warning",block:"",onClick:o[6]||(o[6]=u=>x("time"))},{default:l(()=>[a(i(t(e).hiddenTime),1)]),_:1}),n(t(s),{type:"warning",block:"",onClick:o[7]||(o[7]=u=>x("position"))},{default:l(()=>[a(i(t(e).bottomDisplay),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[a(i(t(e).type),1)]),_:1}),n(t(D),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(s),{type:"success",block:"",onClick:o[8]||(o[8]=u=>f("success"))},{default:l(()=>[a(i(t(e).success),1)]),_:1}),n(t(s),{type:"warning",block:"",onClick:o[9]||(o[9]=u=>f("warning"))},{default:l(()=>[a(i(t(e).warning),1)]),_:1}),n(t(s),{type:"info",block:"",onClick:o[10]||(o[10]=u=>f("info"))},{default:l(()=>[a(i(t(e).info),1)]),_:1}),n(t(s),{type:"danger",block:"",onClick:o[11]||(o[11]=u=>f("error"))},{default:l(()=>[a(i(t(e).error),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[12]||(o[12]=u=>f("loading"))},{default:l(()=>[a(i(t(e).loading),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[a(i(t(e).multiple),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:S},{default:l(()=>[a(i(t(e).multiple),1)]),_:1}),H("div",j,[n(t(d),{show:t(F),"onUpdate:show":o[13]||(o[13]=u=>w(F)?F.value=u:null)},{default:l(()=>[a(i(t(e).text),1)]),_:1},8,["show"]),n(t(d),{show:t(k),"onUpdate:show":o[15]||(o[15]=u=>w(k)?k.value=u:null),position:"bottom"},{action:l(()=>[n(t(s),{type:"primary",onClick:o[14]||(o[14]=u=>k.value=!1)},{default:l(()=>[a(i(t(e).close),1)]),_:1})]),default:l(()=>[a(i(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(d),{show:t(c),"onUpdate:show":o[17]||(o[17]=u=>w(c)?c.value=u:null),vertical:!0},{action:l(()=>[n(t(s),{type:"primary",onClick:o[16]||(o[16]=u=>c.value=!1)},{default:l(()=>[a(i(t(e).close),1)]),_:1})]),default:l(()=>[a(i(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(d),{show:t(y),"onUpdate:show":o[18]||(o[18]=u=>w(y)?y.value=u:null),duration:1e3},{default:l(()=>[a(i(t(e).text),1)]),_:1},8,["show"]),n(t(d),{show:t(g),"onUpdate:show":o[19]||(o[19]=u=>w(g)?g.value=u:null),"forbid-click":!0},{default:l(()=>[a(i(t(e).text),1)]),_:1},8,["show"])])],64))}};export{mt as default};
