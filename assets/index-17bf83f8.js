import{T as i}from"./index-b7bca852.js";import{S as U}from"./index-eaac4411.js";import{B as p}from"./index-1c303571.js";import{S as b}from"./index-d48a96d9.js";import{O as _}from"./index-5fb9b7cb.js";import{S as u}from"./index-262bb0dc.js";import{d as B}from"./index-dd768cde.js";import{_ as V,a as g,ac as A,aE as N,p as D,f as y,h as v,q as e,S as o,ao as t,M as S,F as C,P as l,Q as a,ai as O,i as z,al as I,am as M}from"./vue-router-6d66666a.js";import{u as E,a as w,_ as L,b as P,c as W}from"./index-d24ba9ad.js";import{A as s}from"./appType-826aac9b.js";import"./logger-4bf9ea67.js";import"./elements-a6c01043.js";import"./usePopover-d834a785.js";import"./zIndex-15ce83eb.js";import"./index-fef5f544.js";/* empty css               */import"./index-34f8623a.js";import"./index-035bd7d8.js";import"./index-66e62e0b.js";import"./index-697e6e37.js";import"./useChildren-10daefc4.js";import"./index-a279bce5.js";import"./index-7a8416b9.js";import"./index-bd78bdf6.js";import"./FieldDecorator-7ff0c52a.js";import"./provide-a5cc776e.js";import"./index-06af8258.js";import"./lock-c0d9fd98.js";const F={basicUsage:"基本使用",contentSlot:"内容插槽",alignmentMethods:"对齐方式",topAlignment:"顶部对齐",tooltip:"tooltip",bottomAlignment:"底部对齐",offset:"偏移量",events:"注册事件",disabled:"禁用提示",placement:"弹出位置",trigger:"触发方式",twoWayBinding:"双向绑定",themeColorTooltip:"主题色文字提示",defaultTooltip:"默认",primaryTooltip:"主要",infoTooltip:"信息",successTooltip:"成功",warningTooltip:"警告",dangerTooltip:"危险",customColor:"自定义颜色",countDown:"秒后关闭"},$={basicUsage:"Basic Usage",contentSlot:"Content Slot",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",tooltip:"Tooltip",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger",twoWayBinding:"Two-way binding",themeColorTooltip:"Theme Color Tooltip",defaultTooltip:"Default",primaryTooltip:"Primary",infoTooltip:"Info",successTooltip:"Success",warningTooltip:"Warning",dangerTooltip:"Danger",customColor:"Custom Color",countDown:"s closed"},{add:h,use:q,pack:n,packs:ht,merge:xt}=E(),Q=d=>{W(d),q(d)};w("zh-CN",L);w("en-US",P);h("zh-CN",F);h("en-US",$);const j=d=>(I("data-v-4e76c829"),d=d(),M(),d),G={class:"placement-container"},H=j(()=>S("div",{style:{"margin-bottom":"100px"}},null,-1)),J={__name:"index",setup(d){const f=g("click"),c=g("top"),x=g(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]);return A(Q),N(B),(K,r)=>{const T=D("var-icon");return y(),v(C,null,[e(t(s),null,{default:o(()=>[l(a(t(n).basicUsage),1)]),_:1}),e(t(i),{content:"Tooltip"},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).basicUsage),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).contentSlot),1)]),_:1}),e(t(i),null,{content:o(()=>[e(T,{name:"star"})]),default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).contentSlot),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).placement),1)]),_:1}),e(t(b),{hint:!1,modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=m=>c.value=m)},{default:o(()=>[(y(!0),v(C,null,O(x.value,(m,k)=>(y(),z(t(_),{key:k,label:m},null,8,["label"]))),128))]),_:1},8,["modelValue"]),S("div",G,[e(t(i),{content:"Tooltip",placement:c.value},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[e(T,{name:"star"})]),_:1})]),_:1},8,["placement"])]),e(t(s),null,{default:o(()=>[l(a(t(n).themeColorTooltip),1)]),_:1}),e(t(U),{size:["14vw","2.666vw"]},{default:o(()=>[e(t(i),{type:"default",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"default"},{default:o(()=>[l(a(t(n).defaultTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"primary",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).primaryTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"info",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"info"},{default:o(()=>[l(a(t(n).infoTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"success",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"success"},{default:o(()=>[l(a(t(n).successTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"warning",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"warning"},{default:o(()=>[l(a(t(n).warningTooltip),1)]),_:1})]),_:1}),e(t(i),{type:"danger",content:"Tooltip"},{default:o(()=>[e(t(p),{type:"danger"},{default:o(()=>[l(a(t(n).dangerTooltip),1)]),_:1})]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).customColor),1)]),_:1}),e(t(i),{content:"Tooltip",color:"#d81b60"},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).customColor),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).offset),1)]),_:1}),e(t(i),{content:"Tooltip","offset-x":64,"offset-y":-10},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).offset),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).trigger),1)]),_:1}),e(t(b),{hint:!1,modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=m=>f.value=m)},{default:o(()=>[e(t(_),{label:"click"}),e(t(_),{label:"hover"})]),_:1},8,["modelValue"]),e(t(i),{content:"Tooltip",style:{"margin-top":"15px"},trigger:f.value},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).trigger),1)]),_:1})]),_:1},8,["trigger"]),e(t(s),null,{default:o(()=>[l(a(t(n).events),1)]),_:1}),e(t(i),{content:"Tooltip",onOpen:r[2]||(r[2]=()=>t(u).info("open")),onOpened:r[3]||(r[3]=()=>t(u).success("opened")),onClose:r[4]||(r[4]=()=>t(u).warning("close")),onClosed:r[5]||(r[5]=()=>t(u).error("closed"))},{default:o(()=>[e(t(p),{type:"primary"},{default:o(()=>[l(a(t(n).events),1)]),_:1})]),_:1}),e(t(s),null,{default:o(()=>[l(a(t(n).disabled),1)]),_:1}),e(t(i),{content:"Tooltip",disabled:""},{default:o(()=>[e(t(p),{type:"primary",disabled:""},{default:o(()=>[l(a(t(n).disabled),1)]),_:1})]),_:1}),H],64)}}},kt=V(J,[["__scopeId","data-v-4e76c829"]]);export{kt as default};
