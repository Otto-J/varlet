import{D as m}from"./index-2fc6d46a.js";import{B as r}from"./index-1c303571.js";import{I as D}from"./index-a279bce5.js";import{S as u}from"./index-262bb0dc.js";import{C as g}from"./index-e51dfeeb.js";import{d as A}from"./index-dd768cde.js";import{_ as $,r as z,aO as I,ac as M,aE as P,f as F,h as V,q as t,S as a,ao as e,aw as y,F as E,P as n,Q as l}from"./vue-router-6d66666a.js";import{u as H,a as h,_ as L,b as R,c as q}from"./index-d24ba9ad.js";import{A as B}from"./appType-826aac9b.js";import"./index-f7ad9958.js";import"./logger-4bf9ea67.js";import"./lock-c0d9fd98.js";import"./index-fef5f544.js";import"./zIndex-15ce83eb.js";/* empty css               */import"./elements-a6c01043.js";import"./index-34f8623a.js";import"./index-035bd7d8.js";import"./index-66e62e0b.js";import"./index-697e6e37.js";import"./useChildren-10daefc4.js";const O={functionCall:"函数调用",basicUsage:"基本使用",modifyTitle:"修改标题",hideButton:"隐藏按钮",handleUserBehavior:"处理用户行为",asyncClose:"异步关闭",componentCall:"组件调用",title:"兰亭序",message:"兰亭临帖 行书如行云流水",customSlots:"自定义插槽",asyncCloseProgress:"正在异步关闭"},Q={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"},{add:_,use:W,pack:o,packs:ge,merge:ye}=H(),j=d=>{q(d),W(d)};h("zh-CN",L);h("en-US",R);_("zh-CN",O);_("en-US",Q);const G={__name:"index",setup(d){const C=m.Component,U=z({show:!1,show1:!1,show2:!1}),{show:c,show1:f,show2:p}=I(U),v={confirm:()=>u.success("confirm"),cancel:()=>u.error("cancel"),close:()=>u.info("close")};function b(){m(o.value.message)}async function S(){v[await m(o.value.message)]()}function x(){m({title:o.value.title,message:o.value.message})}function N(){m({message:o.value.message,confirmButton:!1,cancelButton:!1})}function w(k,s){u.loading(o.value.asyncCloseProgress),setTimeout(()=>{v[k](),s()},1e3)}function T(){m({message:o.value.message,onBeforeClose:w})}return M(j),P(A),(k,s)=>(F(),V(E,null,[t(e(B),null,{default:a(()=>[n(l(e(o).functionCall),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:b},{default:a(()=>[n(l(e(o).basicUsage),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:x},{default:a(()=>[n(l(e(o).modifyTitle),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:N},{default:a(()=>[n(l(e(o).hideButton),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:S},{default:a(()=>[n(l(e(o).handleUserBehavior),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:T},{default:a(()=>[n(l(e(o).asyncClose),1)]),_:1}),t(e(B),null,{default:a(()=>[n(l(e(o).componentCall),1)]),_:1}),t(e(r),{type:"warning",block:"",onClick:s[0]||(s[0]=i=>c.value=!0)},{default:a(()=>[n(l(e(o).basicUsage),1)]),_:1}),t(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=i=>y(c)?c.value=i:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(u).success("confirm")),onCancel:s[3]||(s[3]=()=>e(u).error("cancel")),onClosed:s[4]||(s[4]=()=>e(u).info("closed"))},null,8,["show","title","message"]),t(e(r),{type:"warning",block:"",onClick:s[5]||(s[5]=i=>f.value=!0)},{default:a(()=>[n(l(e(o).asyncClose),1)]),_:1}),t(e(C),{show:e(f),"onUpdate:show":s[6]||(s[6]=i=>y(f)?f.value=i:null),title:e(o).title,message:e(o).message,onBeforeClose:w},null,8,["show","title","message"]),t(e(r),{type:"warning",block:"",onClick:s[7]||(s[7]=i=>p.value=!0)},{default:a(()=>[n(l(e(o).customSlots),1)]),_:1}),t(e(C),{show:e(p),"onUpdate:show":s[8]||(s[8]=i=>y(p)?p.value=i:null)},{title:a(()=>[t(e(D),{name:"information",color:"#2979ff"})]),default:a(()=>[t(e(g),null,{default:a(()=>[n(l(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[n(l(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[n(l(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}},ve=$(G,[["__scopeId","data-v-9510af88"]]);export{ve as default};
