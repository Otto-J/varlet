import{a1 as R,d as h,B,_ as U,e as S,l as $,s as C,t as f,a3 as M,m as k,Q as s,q as w,aj as A,E as I,p as r,w as l,U as e,M as z,P as n}from"./index-176acade.js";import{c as L,w as N,d as V,a as T}from"./components-b6d07272.js";import{e as x}from"./logger-525ef361.js";import{I as g}from"./index-44228c5c.js";import{S as b}from"./index-15c04a1e.js";import{d as K}from"./index-ea9abee8.js";import{u as Y,b as y,_ as j,c as q,a as F}from"./index-07af7096.js";import{A as m}from"./appType-cf48bbaf.js";import"./elements-f77c96df.js";import"./index-646c8add.js";import"./zIndex-4c5fa8a7.js";import"./index-f4470989.js";import"./lock-98fc215e.js";const H={separator:{type:String,default:"/"}},E=Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");function Q(){const{childProviders:a,bindChildren:d,length:o}=R(E);return{length:o,breadcrumbList:a,bindBreadcrumbList:d}}const{name:G,n:J}=L("breadcrumbs"),O=h({name:G,props:H,setup(a){const d=B(()=>a.separator),{bindBreadcrumbList:o,length:i}=Q();return o({length:i,separator:d}),{n:J}}});function W(a,d,o,i,c,v){return S(),$("div",{class:f(a.n())},[C(a.$slots,"default")],2)}const p=U(O,[["render",W]]);N(p);const X={separator:String,onClick:V()};function Z(){const{parentProvider:a,bindParent:d,index:o}=M(E);return d||x("Breadcrumb","<var-breadcrumb/> must in <var-breadcrumbs/>"),{index:o,breadcrumb:a,bindBreadcrumb:d}}const{name:ee,n:ae,classes:re}=L("breadcrumb"),le=h({name:ee,props:X,setup(a){const{index:d,breadcrumb:o,bindBreadcrumb:i}=Z(),c=B(()=>d.value===o.length.value-1),v=B(()=>o.separator.value);i(null);function _(P){c.value||T(a.onClick,P)}return{n:ae,classes:re,isLast:c,parentSeparator:v,handleClick:_}}});function te(a,d,o,i,c,v){return S(),$("div",{class:f(a.n())},[k("div",{class:f(a.classes(a.n("content"),[!a.isLast,a.n("--active")])),onClick:d[0]||(d[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[C(a.$slots,"default")],2),a.isLast?w("",!0):C(a.$slots,"separator",{key:0},()=>[k("div",{class:f(a.n("separator"))},s(a.separator??a.parentSeparator),3)])],2)}const u=U(le,[["render",te]]);N(u);const se={basicUsage:"基本用法",separator:"分隔符",childSeparator:"子级分隔符",separatorSlot:"分隔符插槽",level1:"首页",level2:"一级",level3:"二级",events:"注册事件"},ne={basicUsage:"Basic Usage",separator:"Separator",childSeparator:"Child Separator",separatorSlot:"Separator Slot",level1:"Home",level2:"Link 1",level3:"Link 2",events:"Events"},{add:D,use:oe,pack:t,packs:ke,merge:ge}=Y(),ue=a=>{F(a),oe(a)};y("zh-CN",j);y("en-US",q);D("zh-CN",se);D("en-US",ne);const he={__name:"index",setup(a){return A(K),I(ue),(d,o)=>(S(),$(z,null,[r(e(m),null,{default:l(()=>[n(s(e(t).basicUsage),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).separator),1)]),_:1}),r(e(p),{separator:"\\"},{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).childSeparator),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),{separator:"~"},{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).separatorSlot),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{separator:l(()=>[r(e(g),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[n(" "+s(e(t).level1),1)]),_:1}),r(e(u),null,{separator:l(()=>[r(e(g),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[n(" "+s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).events),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),{onClick:o[0]||(o[0]=i=>e(b)(e(t).level1))},{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),{onClick:o[1]||(o[1]=i=>e(b)(e(t).level2))},{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),{onClick:o[2]||(o[2]=i=>e(b)(e(t).level3))},{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1})],64))}};export{he as default};
