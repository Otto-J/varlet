import{c as g,d as P,k as R,b as M}from"./components-55abda2c.js";import{u as V}from"./useChildren-f8fc350b.js";import{d as N,b as B,_ as y,f as S,h as $,O as C,N as f,M as k,Q as s,j as z,aB as A,ac as I,q as r,S as l,ap as e,F as w,P as n,aC as m}from"./vue-router.esm-bundler-021ce183.js";import{I as h}from"./index-bbfdda19.js";import{S as b}from"./index-7d22eeed.js";import{d as T}from"./index-59604d2c.js";import{u as F,c as K,a as L,_ as Y,b as j}from"./index-3dd3ea28.js";import"./elements-bedd529f.js";import"./shared-e92eeed1.js";import"./index-220808be.js";import"./zIndex-2941d9fc.js";import"./index-05fd795b.js";import"./lock-15a987a1.js";const q={separator:{type:String,default:"/"}},U=Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");function x(){const{childProviders:a,bindChildren:d,length:o}=V(U);return{length:o,breadcrumbList:a,bindBreadcrumbList:d}}const{n:H}=g("breadcrumbs"),O=N({name:"VarBreadcrumbs",props:q,setup(a){const d=B(()=>a.separator),{bindBreadcrumbList:o,length:i}=x();return o({length:i,separator:d}),{n:H}}});function Q(a,d,o,i,c,v){return S(),$("div",{class:f(a.n())},[C(a.$slots,"default")],2)}const p=y(O,[["render",Q]]);p.install=function(a){a.component(p.name,p)};const G={separator:{type:String},onClick:P()};function J(){const{parentProvider:a,bindParent:d,index:o}=R(U);if(!a||!d||!o)throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");return{index:o,breadcrumb:a,bindBreadcrumb:d}}const{n:W,classes:X}=g("breadcrumb"),Z=N({name:"VarBreadcrumb",props:G,setup(a){const{index:d,breadcrumb:o,bindBreadcrumb:i}=J(),c=B(()=>d.value===o.length.value-1),v=B(()=>o.separator.value),_=D=>{c.value||M(a.onClick,D)};return i(null),{n:W,classes:X,isLast:c,parentSeparator:v,handleClick:_}}});function ee(a,d,o,i,c,v){return S(),$("div",{class:f(a.n())},[k("div",{class:f(a.classes(a.n("content"),[!a.isLast,a.n("--active")])),onClick:d[0]||(d[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[C(a.$slots,"default")],2),a.isLast?z("",!0):C(a.$slots,"separator",{key:0},()=>[k("div",{class:f(a.n("separator"))},s(a.separator??a.parentSeparator),3)])],2)}const u=y(Z,[["render",ee]]);u.install=function(a){a.component(u.name,u)};const ae={basicUsage:"基本用法",separator:"分隔符",childSeparator:"子级分隔符",separatorSlot:"分隔符插槽",level1:"首页",level2:"一级",level3:"二级",events:"注册事件"},re={basicUsage:"Basic Usage",separator:"Separator",childSeparator:"Child Separator",separatorSlot:"Separator Slot",level1:"Home",level2:"Link 1",level3:"Link 2",events:"Events"},{add:E,use:le,pack:t,packs:Be,merge:Ce}=F(),te=a=>{K(a),le(a)};L("zh-CN",Y);L("en-US",j);E("zh-CN",ae);E("en-US",re);const Se={setup(a){return A(T),I(te),(d,o)=>(S(),$(w,null,[r(e(m),null,{default:l(()=>[n(s(e(t).basicUsage),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).separator),1)]),_:1}),r(e(p),{separator:"\\"},{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).childSeparator),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),{separator:"~"},{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).separatorSlot),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{separator:l(()=>[r(e(h),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[n(" "+s(e(t).level1),1)]),_:1}),r(e(u),null,{separator:l(()=>[r(e(h),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[n(" "+s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).events),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),{onClick:o[0]||(o[0]=i=>e(b)(e(t).level1))},{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),{onClick:o[1]||(o[1]=i=>e(b)(e(t).level2))},{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),{onClick:o[2]||(o[2]=i=>e(b)(e(t).level3))},{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1})],64))}};export{Se as default};
