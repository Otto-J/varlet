import{a1 as R,d as h,B,_ as U,e as S,l as $,s as C,t as f,a3 as M,m as k,Q as s,q as w,aj as A,E as I,p as r,w as l,U as e,M as V,P as n}from"./index-e8376e61.js";import{c as L,w as N,d as z,a as T}from"./components-c1e1aae1.js";import{e as x}from"./logger-525ef361.js";import{I as g}from"./index-a59b997c.js";import{S as b}from"./index-0d7ad601.js";import{d as K}from"./index-ea9abee8.js";import{u as Y,b as y,_ as j,c as q,a as F}from"./index-926393f1.js";import{A as m}from"./appType-c1fc7b5a.js";import"./elements-4558e7ec.js";import"./index-f8d05da5.js";import"./zIndex-e12dd6ce.js";import"./index-7646a58d.js";import"./lock-7c686242.js";const H={separator:{type:String,default:"/"}},E=Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");function Q(){const{childProviders:a,bindChildren:d,length:o}=R(E);return{length:o,breadcrumbList:a,bindBreadcrumbList:d}}const{n:G}=L("breadcrumbs"),J=h({name:"VarBreadcrumbs",props:H,setup(a){const d=B(()=>a.separator),{bindBreadcrumbList:o,length:i}=Q();return o({length:i,separator:d}),{n:G}}});function O(a,d,o,i,c,v){return S(),$("div",{class:f(a.n())},[C(a.$slots,"default")],2)}const p=U(J,[["render",O]]);N(p);const W={separator:String,onClick:z()};function X(){const{parentProvider:a,bindParent:d,index:o}=M(E);return d||x("Breadcrumb","<var-breadcrumb/> must in <var-breadcrumbs/>"),{index:o,breadcrumb:a,bindBreadcrumb:d}}const{n:Z,classes:ee}=L("breadcrumb"),ae=h({name:"VarBreadcrumb",props:W,setup(a){const{index:d,breadcrumb:o,bindBreadcrumb:i}=X(),c=B(()=>d.value===o.length.value-1),v=B(()=>o.separator.value),_=P=>{c.value||T(a.onClick,P)};return i(null),{n:Z,classes:ee,isLast:c,parentSeparator:v,handleClick:_}}});function re(a,d,o,i,c,v){return S(),$("div",{class:f(a.n())},[k("div",{class:f(a.classes(a.n("content"),[!a.isLast,a.n("--active")])),onClick:d[0]||(d[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[C(a.$slots,"default")],2),a.isLast?w("",!0):C(a.$slots,"separator",{key:0},()=>[k("div",{class:f(a.n("separator"))},s(a.separator??a.parentSeparator),3)])],2)}const u=U(ae,[["render",re]]);N(u);const le={basicUsage:"基本用法",separator:"分隔符",childSeparator:"子级分隔符",separatorSlot:"分隔符插槽",level1:"首页",level2:"一级",level3:"二级",events:"注册事件"},te={basicUsage:"Basic Usage",separator:"Separator",childSeparator:"Child Separator",separatorSlot:"Separator Slot",level1:"Home",level2:"Link 1",level3:"Link 2",events:"Events"},{add:D,use:se,pack:t,packs:Se,merge:$e}=Y(),ne=a=>{F(a),se(a)};y("zh-CN",j);y("en-US",q);D("zh-CN",le);D("en-US",te);const ke={__name:"index",setup(a){return A(K),I(ne),(d,o)=>(S(),$(V,null,[r(e(m),null,{default:l(()=>[n(s(e(t).basicUsage),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).separator),1)]),_:1}),r(e(p),{separator:"\\"},{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).childSeparator),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),{separator:"~"},{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).separatorSlot),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),null,{separator:l(()=>[r(e(g),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[n(" "+s(e(t).level1),1)]),_:1}),r(e(u),null,{separator:l(()=>[r(e(g),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[n(" "+s(e(t).level2),1)]),_:1}),r(e(u),null,{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1}),r(e(m),null,{default:l(()=>[n(s(e(t).events),1)]),_:1}),r(e(p),null,{default:l(()=>[r(e(u),{onClick:o[0]||(o[0]=i=>e(b)(e(t).level1))},{default:l(()=>[n(s(e(t).level1),1)]),_:1}),r(e(u),{onClick:o[1]||(o[1]=i=>e(b)(e(t).level2))},{default:l(()=>[n(s(e(t).level2),1)]),_:1}),r(e(u),{onClick:o[2]||(o[2]=i=>e(b)(e(t).level3))},{default:l(()=>[n(s(e(t).level3),1)]),_:1})]),_:1})],64))}};export{ke as default};
