import{W as S,aQ as x,E as N,ah as k,e as w,l as A,p as e,w as o,U as l,M as _,P as r,Q as v,aR as s}from"./index-c1c53a77.js";import{S as t}from"./index-cdf66184.js";import{S as p}from"./index-0b69d741.js";import{d as c}from"./index-ea9abee8.js";import{u as y,b as g,_ as B,c as E,a as L}from"./index-da2945cd.js";import{A as V}from"./appType-6fb05618.js";import"./provide-bbeb7881.js";import"./components-1514d07f.js";import"./index-a9719fda.js";import"./index-66aea09a.js";/* empty css               */import"./index-72804146.js";import"./index-85a5e829.js";import"./elements-e4756970.js";import"./logger-525ef361.js";const R={basicUsage:"基本使用",customColor:"自定义颜色",notAvailable:"不可用",size:"不同大小",loading:"加载状态",validateValue:"值的校验",text:"是否打开开关",state:"错误！"},D={basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"},{add:C,use:M,pack:d,packs:h,merge:ll}=y(),Q=f=>{L(f),M(f)};g("zh-CN",B);g("en-US",E);C("zh-CN",R);C("en-US",D);const el={__name:"index",setup(f){const b=S({value:!0,value1:!0,value2:!0,value3:!0,value4:!0}),{value:U,value1:i,value2:m,value3:n,value4:z}=x(b);return N(Q),k(c),(T,u)=>(w(),A(_,null,[e(l(V),null,{default:o(()=>[r(v(l(d).basicUsage),1)]),_:1}),e(l(p),{size:["3vmin","9vmin"]},{default:o(()=>[e(l(t),{modelValue:l(U),"onUpdate:modelValue":u[0]||(u[0]=a=>s(U)?U.value=a:null)},null,8,["modelValue"])]),_:1}),e(l(V),null,{default:o(()=>[r(v(l(d).notAvailable),1)]),_:1}),e(l(p),{size:["3vmin","9vmin"]},{default:o(()=>[e(l(t),{modelValue:l(i),"onUpdate:modelValue":u[1]||(u[1]=a=>s(i)?i.value=a:null),disabled:""},null,8,["modelValue"]),e(l(t),{modelValue:l(i),"onUpdate:modelValue":u[2]||(u[2]=a=>s(i)?i.value=a:null),readonly:""},null,8,["modelValue"])]),_:1}),e(l(V),null,{default:o(()=>[r(v(l(d).customColor),1)]),_:1}),e(l(p),{size:["3vmin","9vmin"]},{default:o(()=>[e(l(t),{modelValue:l(m),"onUpdate:modelValue":u[3]||(u[3]=a=>s(m)?m.value=a:null),ripple:!1},null,8,["modelValue"]),e(l(t),{modelValue:l(m),"onUpdate:modelValue":u[4]||(u[4]=a=>s(m)?m.value=a:null),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),_:1}),e(l(V),null,{default:o(()=>[r(v(l(d).size),1)]),_:1}),e(l(p),{size:["3vmin","11vmin"],align:"center"},{default:o(()=>[e(l(t),{modelValue:l(n),"onUpdate:modelValue":u[5]||(u[5]=a=>s(n)?n.value=a:null),size:"4.266vmin"},null,8,["modelValue"]),e(l(t),{modelValue:l(n),"onUpdate:modelValue":u[6]||(u[6]=a=>s(n)?n.value=a:null)},null,8,["modelValue"]),e(l(t),{modelValue:l(n),"onUpdate:modelValue":u[7]||(u[7]=a=>s(n)?n.value=a:null),size:"6.4vmin"},null,8,["modelValue"])]),_:1}),e(l(V),null,{default:o(()=>[r(v(l(d).loading),1)]),_:1}),e(l(p),{size:["3vmin","9vmin"],align:"center"},{default:o(()=>[e(l(t),{"model-value":!0,loading:""}),e(l(t),{"model-value":!0,size:"6.4vmin",loading:"","loading-color":"#ff9f00"})]),_:1}),e(l(V),null,{default:o(()=>[r(v(l(d).validateValue),1)]),_:1}),e(l(p),{size:["3vmin","9vmin"]},{default:o(()=>[e(l(t),{modelValue:l(z),"onUpdate:modelValue":u[8]||(u[8]=a=>s(z)?z.value=a:null),rules:[a=>a===!0||l(d).state]},null,8,["modelValue","rules"])]),_:1})],64))}};export{el as default};
