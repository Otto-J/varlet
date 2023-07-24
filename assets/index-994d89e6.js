import{d as P}from"./index-a0438c78.js";import{o as R,f as V,c as w,w as M}from"./logger-5f6a195b.js";import{d as I,a as $,b as j,aj as D,_ as E,f as v,h,M as y,N as s,O as p,R as b,P as n,Q as l,j as A,ac as O,aD as F,q as a,S as o,ao as t,F as G}from"./vue-router-14238f57.js";import{I as f}from"./index-e1086453.js";import{M as q}from"./index-a35b0ca0.js";import{B as m}from"./index-22ec8f4f.js";import{C as _}from"./index-53d7ea51.js";import{T as Q,a as C}from"./index-e8899623.js";import{u as H,b as z,_ as J,c as K,a as W}from"./index-d00a0f8a.js";import{A as c}from"./appType-41252aac.js";import"./elements-53ac7962.js";import"./usePopover-3abfda76.js";import"./zIndex-70c5d270.js";import"./index-01a19db2.js";import"./index-fc3e2a6c.js";/* empty css               */import"./index-e2eca1df.js";import"./index-0737eb47.js";import"./index-97c70489.js";import"./useChildren-24c77be1.js";import"./index-58f6f448.js";import"./onSmartUnmounted-f54ecb01.js";import"./onWindowResize-f2999832.js";function X(e){return["left","center","right"].includes(e)}const Y={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:X},elevation:{type:[Boolean,String,Number],default:!0},round:{type:Boolean,default:!1},image:{type:String},imageLinearGradient:{type:String},safeAreaTop:{type:Boolean,default:!1}},{n:Z,classes:x}=w("app-bar"),tt=I({name:"VarAppBar",props:Y,setup(e,{slots:i}){const S=$(),u=$(),g=()=>{S.value=i.left?0:void 0,u.value=i.right?0:void 0},k=j(()=>{const{image:B,color:L,textColor:U,imageLinearGradient:T}=e;return B!=null?{"background-image":`${T?`linear-gradient(${T}), `:""}url(${B})`,"background-position":"center center","background-size":"cover"}:{background:L,color:U}});return R(g),D(g),{n:Z,classes:x,formatElevation:V,rootStyles:k,paddingLeft:S,paddingRight:u}}});function et(e,i,S,u,g,k){return v(),h("div",{class:s(e.classes(e.n(),e.n("$--box"),[e.safeAreaTop,e.n("--safe-area-top")],[e.round,e.n("--round")],e.formatElevation(e.elevation,3))),style:b(e.rootStyles)},[y("div",{class:s(e.n("toolbar"))},[y("div",{class:s(e.n("left"))},[p(e.$slots,"left"),e.titlePosition==="left"?(v(),h("div",{key:0,class:s(e.n("title")),style:b({paddingLeft:e.paddingLeft})},[p(e.$slots,"default",{},()=>[n(l(e.title),1)])],6)):A("",!0)],2),e.titlePosition==="center"?(v(),h("div",{key:0,class:s(e.n("title"))},[p(e.$slots,"default",{},()=>[n(l(e.title),1)])],2)):A("",!0),y("div",{class:s(e.n("right"))},[e.titlePosition==="right"?(v(),h("div",{key:0,class:s(e.n("title")),style:b({paddingRight:e.paddingRight})},[p(e.$slots,"default",{},()=>[n(l(e.title),1)])],6)):A("",!0),p(e.$slots,"right")],2)],2),p(e.$slots,"content")],6)}const d=E(tt,[["render",et]]);M(d);const at={basicUsage:"基本使用",customStyle:"自定义背景色",addSlotsAtTitle:"添加标题处插槽",title:"标题",addLeftAndRightSlot:"添加左右插槽",option:"选项卡",search:"搜索",round:"开启圆角",custom:"扩展内容"},ot={basicUsage:"Basic Usage",customStyle:"Custom Background Color",addSlotsAtTitle:"Add Slots At Title",title:"Title",addLeftAndRightSlot:"Add Left And Right Slot",option:"OPTION",search:"search",round:"Use Border Radius",custom:"Custom Content"},{add:N,use:rt,pack:r,packs:Lt,merge:Ut}=H(),nt=e=>{W(e),rt(e)};z("zh-CN",J);z("en-US",K);N("zh-CN",at);N("en-US",ot);const Pt={__name:"index",setup(e){const i=$(0);return O(nt),F(P),(S,u)=>(v(),h(G,null,[a(t(c),null,{default:o(()=>[n(l(t(r).basicUsage),1)]),_:1}),a(t(d),{title:t(r).title},null,8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).addSlotsAtTitle),1)]),_:1}),a(t(d),null,{default:o(()=>[n(l(t(r).addSlotsAtTitle),1)]),_:1}),a(t(c),null,{default:o(()=>[n(l(t(r).addLeftAndRightSlot),1)]),_:1}),a(t(d),{title:t(r).title},{left:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:o(()=>[a(t(f),{name:"chevron-left",size:24})]),_:1})]),right:o(()=>[a(t(q),null,{menu:o(()=>[a(t(_),{ripple:""},{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(_),{ripple:""},{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(_),{ripple:""},{default:o(()=>[n(l(t(r).option),1)]),_:1})]),default:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:o(()=>[a(t(f),{name:"menu",size:24})]),_:1})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).round),1)]),_:1}),a(t(d),{title:t(r).round,"title-position":"center",round:""},null,8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).customStyle),1)]),_:1}),a(t(d),{title:t(r).title,"title-position":"center",color:"linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"},null,8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).custom),1)]),_:1}),a(t(d),{round:"",image:"https://varlet.gitee.io/varlet-ui/tree.jpeg","image-linear-gradient":"to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"},{left:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"menu",size:24})]),_:1})]),right:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"map-marker-radius",size:24})]),_:1}),a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"star",size:24})]),_:1}),a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"heart",size:24})]),_:1})]),content:o(()=>[a(t(Q),{style:{"margin-top":"20vmin"},color:"transparent","active-color":"#fff","inactive-color":"#ddd",active:i.value,"onUpdate:active":u[0]||(u[0]=g=>i.value=g)},{default:o(()=>[a(t(C),null,{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(C),null,{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(C),null,{default:o(()=>[n(l(t(r).option),1)]),_:1})]),_:1},8,["active"])]),default:o(()=>[n(l(t(r).title)+" ",1)]),_:1})],64))}};export{Pt as default};
