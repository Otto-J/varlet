import{A as u}from"./index-45fa7356.js";import{B as m}from"./index-96de60d3.js";import{S as g}from"./index-0b69d741.js";import{S as r}from"./index-0abf1d5c.js";import{d as V}from"./index-ea9abee8.js";import{W as $,r as f,E,ah as F,e as L,l as P,p as n,w as a,U as o,M as Q,P as s,Q as c}from"./index-c1c53a77.js";import{u as W,b as T,_ as Y,c as j,a as q}from"./index-da2945cd.js";import{A as I}from"./appType-6fb05618.js";import"./index-a9719fda.js";import"./index-66aea09a.js";import"./components-1514d07f.js";/* empty css               */import"./index-4ed978b6.js";import"./lock-71b85483.js";import"./zIndex-7f68b1fd.js";import"./provide-00d2bf7a.js";import"./index-a62a9e1d.js";import"./elements-e4756970.js";import"./logger-525ef361.js";import"./shared-94acc20e.js";import"./index-0caacde4.js";import"./index-85a5e829.js";import"./index-72804146.js";const G={functionCall:"函数调用",basicUsage:"基本使用",modifyTitle:"修改标题",componentCall:"组件调用",yourSelected:"您选择的是:",customTitle:"选择一个你喜欢的吧",disableCloseOnClickAction:"禁用点击选项时关闭动作面板",disabled:"禁用选项",customActionStyles:"自定义选项样式"},H={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"},{add:N,use:J,pack:t,packs:So,merge:Ao}=W();function K(y){q(y),J(y)}T("zh-CN",Y);T("en-US",j);N("zh-CN",G);N("en-US",H);const $o={__name:"index",setup(y){const d=u.Component,w=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],h=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],U=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],k=$(w),x=$(h),z=$(U),C=f(!1),b=f(!1),v=f(!1),S=f(!1),A=f(!1);async function B(){const i=await u({actions:w});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}async function O(){const i=await u({actions:w,title:t.value.customTitle});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}async function D(){const i=await u({actions:h});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}async function _(){const i=await u({actions:U});i!=="close"&&r(`${t.value.yourSelected}${i.name}`)}function M(){u({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:i=>r(`${t.value.yourSelected}${i.name}`)})}function p(i){r(`${t.value.yourSelected}${i.name}`)}return E(K),F(V),(i,e)=>(L(),P(Q,null,[n(o(I),null,{default:a(()=>[s(c(o(t).functionCall),1)]),_:1}),n(o(g),{direction:"column",size:["3vmin","4vmin"]},{default:a(()=>[n(o(m),{type:"primary",block:"",onClick:B},{default:a(()=>[s(c(o(t).basicUsage),1)]),_:1}),n(o(m),{type:"primary",block:"",onClick:O},{default:a(()=>[s(c(o(t).modifyTitle),1)]),_:1}),n(o(m),{type:"primary",block:"",onClick:D},{default:a(()=>[s(c(o(t).disabled),1)]),_:1}),n(o(m),{type:"primary",block:"",onClick:M},{default:a(()=>[s(c(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(m),{type:"primary",block:"",onClick:_},{default:a(()=>[s(c(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(I),null,{default:a(()=>[s(c(o(t).componentCall),1)]),_:1}),n(o(g),{direction:"column",size:["3vmin","4vmin"]},{default:a(()=>[n(o(m),{type:"warning",block:"",onClick:e[0]||(e[0]=l=>C.value=!0)},{default:a(()=>[s(c(o(t).basicUsage),1)]),_:1}),n(o(m),{type:"warning",block:"",onClick:e[1]||(e[1]=l=>b.value=!0)},{default:a(()=>[s(c(o(t).modifyTitle),1)]),_:1}),n(o(m),{type:"warning",block:"",onClick:e[2]||(e[2]=l=>v.value=!0)},{default:a(()=>[s(c(o(t).disabled),1)]),_:1}),n(o(m),{type:"warning",block:"",onClick:e[3]||(e[3]=l=>S.value=!0)},{default:a(()=>[s(c(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(m),{type:"warning",block:"",onClick:e[4]||(e[4]=l=>A.value=!0)},{default:a(()=>[s(c(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(d),{actions:k,show:C.value,"onUpdate:show":e[5]||(e[5]=l=>C.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{title:o(t).customTitle,actions:k,show:b.value,"onUpdate:show":e[6]||(e[6]=l=>b.value=l),onSelect:p},null,8,["title","actions","show"]),n(o(d),{actions:x,show:v.value,"onUpdate:show":e[7]||(e[7]=l=>v.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{"close-on-click-action":!1,actions:k,show:S.value,"onUpdate:show":e[8]||(e[8]=l=>S.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{actions:z,show:A.value,"onUpdate:show":e[9]||(e[9]=l=>A.value=l),onSelect:p},null,8,["actions","show"])],64))}};export{$o as default};
