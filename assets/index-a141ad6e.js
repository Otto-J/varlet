import{r as f,E as v,ah as k,e as C,l as z,p as l,w as i,U as e,M as w,P as a,Q as t,f as m,q as _}from"./index-c1c53a77.js";import{C as p}from"./index-22590923.js";import{I as h}from"./index-a62a9e1d.js";import{S as r}from"./index-0b69d741.js";import{d as N}from"./index-ea9abee8.js";import{u as R,b as g,_ as x,c as b,a as A}from"./index-da2945cd.js";import{A as n}from"./appType-6fb05618.js";import"./components-1514d07f.js";import"./elements-e4756970.js";import"./logger-525ef361.js";/* empty css               */const I={chipType:"纸片类型",defaultChip:"默认纸片",primaryChip:"主要纸片",infoChip:"信息纸片",successChip:"成功纸片",warningChip:"警告纸片",dangerChip:"危险纸片",plainChip:"空心纸片",nonRoundChip:"非圆角纸片",chipSize:"纸片尺寸",largeChip:"大型纸片",normalChip:"常规纸片",smallChip:"小型纸片",miniChip:"迷你纸片",blockChip:"块级纸片",canCloseChip:"可关闭纸片",customCloseIcon:"自定义关闭图标",customColor:"自定义颜色",chip:"纸片",addSlot:"添加插槽",leftSlot:"左侧插槽",rightSlot:"右侧插槽",leftAndRightSlot:"左右两侧插槽"},T={chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",plainChip:"Plain Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"},{add:y,use:L,pack:o,packs:G,merge:H}=R(),U=u=>{A(u),L(u)};g("zh-CN",x);g("en-US",b);y("zh-CN",I);y("en-US",T);const J={__name:"index",setup(u){const c=f(!0),d=f(!0);return v(U),k(N),(B,s)=>(C(),z(w,null,[l(e(n),null,{default:i(()=>[a(t(e(o).chipType),1)]),_:1}),l(e(r),{size:["2.666vmin","2.666vmin"]},{default:i(()=>[l(e(p),null,{default:i(()=>[a(t(e(o).defaultChip),1)]),_:1}),l(e(p),{type:"primary"},{default:i(()=>[a(t(e(o).primaryChip),1)]),_:1}),l(e(p),{type:"success"},{default:i(()=>[a(t(e(o).successChip),1)]),_:1}),l(e(p),{type:"danger"},{default:i(()=>[a(t(e(o).dangerChip),1)]),_:1}),l(e(p),{type:"warning"},{default:i(()=>[a(t(e(o).warningChip),1)]),_:1}),l(e(p),{type:"info"},{default:i(()=>[a(t(e(o).infoChip),1)]),_:1})]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).plainChip),1)]),_:1}),l(e(p),{plain:"",type:"primary"},{default:i(()=>[a(t(e(o).plainChip),1)]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).nonRoundChip),1)]),_:1}),l(e(p),{round:!1,type:"primary"},{default:i(()=>[a(t(e(o).nonRoundChip),1)]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).chipSize),1)]),_:1}),l(e(r),{align:"center",size:["2.666vmin","2.666vmin"]},{default:i(()=>[l(e(p),{type:"primary"},{default:i(()=>[a(t(e(o).normalChip),1)]),_:1}),l(e(p),{type:"success",size:"small"},{default:i(()=>[a(t(e(o).smallChip),1)]),_:1}),l(e(p),{type:"warning",size:"mini"},{default:i(()=>[a(t(e(o).miniChip),1)]),_:1}),l(e(p),{type:"danger",size:"large"},{default:i(()=>[a(t(e(o).largeChip),1)]),_:1})]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).blockChip),1)]),_:1}),l(e(p),{type:"primary",block:""},{default:i(()=>[a(t(e(o).blockChip),1)]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).canCloseChip),1)]),_:1}),l(e(r),{size:["2.666vmin","2.666vmin"]},{default:i(()=>[c.value?(C(),m(e(p),{key:0,closable:"",onClose:s[0]||(s[0]=S=>c.value=!1)},{default:i(()=>[a(t(e(o).canCloseChip),1)]),_:1})):_("",!0),d.value?(C(),m(e(p),{key:1,closable:"","icon-name":"delete",onClose:s[1]||(s[1]=S=>d.value=!1)},{default:i(()=>[a(t(e(o).customCloseIcon),1)]),_:1})):_("",!0)]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).customColor),1)]),_:1}),l(e(r),{size:["2.666vmin","2.666vmin"]},{default:i(()=>[l(e(p),{color:"#009688","text-color":"#fff"},{default:i(()=>[a(t(e(o).chip),1)]),_:1}),l(e(p),{color:"#009688",plain:""},{default:i(()=>[a(t(e(o).chip),1)]),_:1}),l(e(p),{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:i(()=>[a(t(e(o).chip),1)]),_:1}),l(e(p),{color:"#faecd8","text-color":"#e6a23c"},{default:i(()=>[a(t(e(o).chip),1)]),_:1})]),_:1}),l(e(n),null,{default:i(()=>[a(t(e(o).addSlot),1)]),_:1}),l(e(r),{size:["2.666vmin","2.666vmin"]},{default:i(()=>[l(e(p),null,{left:i(()=>[l(e(h),{name:"star"})]),default:i(()=>[a(t(e(o).leftSlot)+" ",1)]),_:1}),l(e(p),null,{right:i(()=>[l(e(h),{name:"fire"})]),default:i(()=>[a(t(e(o).rightSlot)+" ",1)]),_:1}),l(e(p),null,{left:i(()=>[l(e(h),{name:"account-circle"})]),right:i(()=>[l(e(h),{name:"cake-variant"})]),default:i(()=>[a(t(e(o).leftAndRightSlot)+" ",1)]),_:1})]),_:1})],64))}};export{J as default};
