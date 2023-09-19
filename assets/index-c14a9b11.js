import{d as M,D as $,a4 as z,_ as W,e as i,m as t,x as l,p as g,y as u,v as P,Q as m,R as v,t as y,r as B,o as A,F,aj as O,ax as j,q as a,w as n,U as s,N as L}from"./index-07e5c9c4.js";import{t as b,a as T}from"./elements-3fb018db.js";import{c as q,w as H}from"./components-281d8a29.js";import{S as k}from"./index-e9314bca.js";import{d as Q}from"./index-ea9abee8.js";import{u as G,b as I,_ as J,c as K,a as X}from"./index-cffc7788.js";import{A as w}from"./appType-7f7d8e28.js";import"./logger-525ef361.js";/* empty css               */const Y={mode:{type:String,default:"linear"},lineWidth:{type:[Number,String],default:4},color:String,trackColor:String,ripple:Boolean,value:{type:[Number,String],default:0},label:Boolean,labelClass:String,size:{type:[Number,String],default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0},indeterminate:Boolean,type:{type:String,default:"primary"}},c=100,N=20,E=2*Math.PI*N,{name:Z,n:_,classes:x}=q("progress"),ee=M({name:Z,props:Y,setup(e){const d=$(()=>{const o=z(e.value),p=o>c?c:o,h=o>c?c:Math.round(o);return{width:`${p}%`,roundValue:`${h}%`}}),f=$(()=>{const{size:o,lineWidth:p,value:h}=e,S=N/(1-b(p)/b(o))*2,V=`0 0 ${S} ${S}`,U=z(h)>c?c:Math.round(z(h)),D=`${(c-U)/c*E}`;return{strokeWidth:b(p)/b(o)*S,viewBox:V,strokeOffset:D,roundValue:`${U}%`}});return{linearProps:d,CIRCUMFERENCE:E,RADIUS:N,circleProps:f,n:_,classes:x,toSizeUnit:T}}});const se=["viewBox"],ae=["r","stroke-width","stroke-dasharray"],re=["r","stroke-width","stroke-dasharray","stroke-dashoffset"];function le(e,d,f,o,p,h){return i(),t("div",{class:l(e.n())},[e.mode==="linear"?(i(),t("div",{key:0,class:l(e.n("linear"))},[g("div",{class:l(e.classes(e.n("linear-block"),[e.track,e.n("linear-background")])),style:u({height:e.toSizeUnit(e.lineWidth),background:e.trackColor})},[e.indeterminate?(i(),t("div",{key:0,class:l(e.classes([e.indeterminate,e.n("linear-indeterminate")]))},[g("div",{class:l(e.classes(e.n(`linear--${e.type}`))),style:u({background:e.color})},null,6),g("div",{class:l(e.classes(e.n(`linear--${e.type}`))),style:u({background:e.color})},null,6)],2)):(i(),t("div",{key:1,class:l(e.classes(e.n("linear-certain"),e.n(`linear--${e.type}`),[e.ripple,e.n("linear-ripple")])),style:u({background:e.color,width:e.linearProps.width})},null,6))],6),e.label?(i(),t("div",{key:0,class:l(e.classes(e.n("linear-label"),[e.labelClass,e.labelClass]))},[P(e.$slots,"default",{},()=>[m(v(e.linearProps.roundValue),1)])],2)):y("",!0)],2)):y("",!0),e.mode==="circle"?(i(),t("div",{key:1,class:l(e.classes(e.n("circle"),[e.indeterminate,e.n("circle-indeterminate")])),style:u({width:e.toSizeUnit(e.size),height:e.toSizeUnit(e.size)})},[(i(),t("svg",{class:l(e.n("circle-svg")),style:u({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(i(),t("circle",{key:0,class:l(e.n("circle-background")),cx:"50%",cy:"50%",r:e.RADIUS,fill:"transparent","stroke-width":e.circleProps.strokeWidth,"stroke-dasharray":e.CIRCUMFERENCE,style:u({stroke:e.trackColor})},null,14,ae)):y("",!0),g("circle",{class:l(e.classes(e.n("circle-certain"),e.n(`circle--${e.type}`),[e.indeterminate,e.n("circle-overlay")])),cx:"50%",cy:"50%",r:e.RADIUS,fill:"transparent","stroke-width":e.circleProps.strokeWidth,"stroke-dasharray":e.CIRCUMFERENCE,"stroke-dashoffset":e.circleProps.strokeOffset,style:u({stroke:e.color})},null,14,re)],14,se)),e.label?(i(),t("div",{key:0,class:l(e.classes(e.n("circle-label"),[e.labelClass,e.labelClass]))},[P(e.$slots,"default",{},()=>[m(v(e.circleProps.roundValue),1)])],2)):y("",!0)],6)):y("",!0)],2)}const r=W(ee,[["render",le]]);H(r);const ne={circle:"环形进度条",style:"其他样式",basicUsage:"基本使用",indeterminateProgress:"不间断动画"},ie={circle:"Circle Progress",basicUsage:"Basic Usage",style:"Other Style",indeterminateProgress:"Indeterminate Animation"},{add:R,use:te,pack:C,packs:ge,merge:be}=G(),oe=e=>{X(e),te(e)};I("zh-CN",J);I("en-US",K);R("zh-CN",ne);R("en-US",ie);const we={__name:"index",setup(e){const d=B(0),f=B(0);return A(()=>{f.value=window.setInterval(()=>{d.value>=100?d.value=0:d.value+=20},1e3)}),F(oe),O(Q),j(()=>{window.clearInterval(f.value)}),(o,p)=>(i(),t(L,null,[a(s(w),null,{default:n(()=>[m(v(s(C).basicUsage),1)]),_:1}),a(s(k),{direction:"column",size:["3vh","3vh"]},{default:n(()=>[a(s(r),{value:20}),a(s(r),{value:d.value,track:!1,label:""},null,8,["value"]),a(s(r),{value:100,label:""},{default:n(()=>[m("success")]),_:1})]),_:1}),a(s(w),null,{default:n(()=>[m(v(s(C).style),1)]),_:1}),a(s(k),{direction:"column",size:["3vh","3vh"]},{default:n(()=>[a(s(r),{type:"info",value:40}),a(s(r),{type:"success",value:60}),a(s(r),{value:"80","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),_:1}),a(s(w),null,{default:n(()=>[m(v(s(C).circle),1)]),_:1}),a(s(k),{size:["8vmin","8vmin"]},{default:n(()=>[a(s(r),{mode:"circle",value:75,size:"18vmin",track:!1}),a(s(r),{mode:"circle",label:"",value:d.value,"line-width":"5",size:"18vmin"},null,8,["value"]),a(s(r),{mode:"circle",type:"success",label:"",value:100,"line-width":"5",size:"18vmin"},{default:n(()=>[m(" success ")]),_:1})]),_:1}),a(s(w),null,{default:n(()=>[m(v(s(C).indeterminateProgress),1)]),_:1}),a(s(k),{direction:"column",size:["3vh","3vh"]},{default:n(()=>[a(s(r),{indeterminate:""}),a(s(r),{indeterminate:"",type:"info"}),a(s(k),{justify:"space-between"},{default:n(()=>[a(s(r),{mode:"circle",indeterminate:"",size:"18vmin"}),a(s(r),{mode:"circle",type:"info",indeterminate:"",size:"18vmin"})]),_:1})]),_:1})],64))}};export{we as default};
