import{d as V,b as z,Z as C,_ as A,f as i,h as t,N as l,M as N,R as o,O as R,P as d,Q as m,j as p,a as $,o as H,aa as M,aE as W,u as F,q as a,S as n,an as s,F as j}from"./vue-router-40fc6ea4.js";import{t as g,a as L}from"./elements-da0a4dab.js";import{c as T,w as q}from"./components-08e741bd.js";import{S as f}from"./index-2b01cff7.js";import{d as Q}from"./index-ea9abee8.js";import{u as Z,b as P,_ as G,c as J,a as K}from"./index-d900f5bf.js";import{A as b}from"./appType-5bfd6fb0.js";import"./logger-525ef361.js";/* empty css               */const X={mode:{type:String,default:"linear"},lineWidth:{type:[Number,String],default:4},color:String,trackColor:String,ripple:Boolean,value:{type:[Number,String],default:0},label:Boolean,labelClass:String,size:{type:[Number,String],default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0},indeterminate:Boolean,type:{type:String,default:"primary"}},{n:Y,classes:_}=T("progress"),x=V({name:"VarProgress",props:X,setup(e){const h=2*Math.PI*20,E=z(()=>{const c=C(e.value),y=c>100?100:c,k=c>100?100:Math.round(c);return{width:`${y}%`,roundValue:`${k}%`}}),w=z(()=>{const{size:c,lineWidth:y,value:k}=e,S=20/(1-g(y)/g(c))*2,O=`0 0 ${S} ${S}`,D=C(k)>100?100:Math.round(C(k)),B=`${(100-D)/100*h}`;return{strokeWidth:g(y)/g(c)*S,viewBox:O,strokeOffset:B,roundValue:`${D}%`}});return{n:Y,classes:_,toSizeUnit:L,linearProps:E,CIRCUMFERENCE:h,RADIUS:20,circleProps:w}}});const ee=["viewBox"],se=["r","stroke-width","stroke-dasharray"],ae=["r","stroke-width","stroke-dasharray","stroke-dashoffset"];function re(e,u,v,h,E,w){return i(),t("div",{class:l(e.n())},[e.mode==="linear"?(i(),t("div",{key:0,class:l(e.n("linear"))},[N("div",{class:l(e.classes(e.n("linear-block"),[e.track,e.n("linear-background")])),style:o({height:e.toSizeUnit(e.lineWidth),background:e.trackColor})},[e.indeterminate?(i(),t("div",{key:0,class:l(e.classes([e.indeterminate,e.n("linear-indeterminate")]))},[N("div",{class:l(e.classes(e.n(`linear--${e.type}`))),style:o({background:e.color})},null,6),N("div",{class:l(e.classes(e.n(`linear--${e.type}`))),style:o({background:e.color})},null,6)],2)):(i(),t("div",{key:1,class:l(e.classes(e.n("linear-certain"),e.n(`linear--${e.type}`),[e.ripple,e.n("linear-ripple")])),style:o({background:e.color,width:e.linearProps.width})},null,6))],6),e.label?(i(),t("div",{key:0,class:l(e.classes(e.n("linear-label"),[e.labelClass,e.labelClass]))},[R(e.$slots,"default",{},()=>[d(m(e.linearProps.roundValue),1)])],2)):p("",!0)],2)):p("",!0),e.mode==="circle"?(i(),t("div",{key:1,class:l(e.classes(e.n("circle"),[e.indeterminate,e.n("circle-indeterminate")])),style:o({width:e.toSizeUnit(e.size),height:e.toSizeUnit(e.size)})},[(i(),t("svg",{class:l(e.n("circle-svg")),style:o({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(i(),t("circle",{key:0,class:l(e.n("circle-background")),cx:"50%",cy:"50%",r:e.RADIUS,fill:"transparent","stroke-width":e.circleProps.strokeWidth,"stroke-dasharray":e.CIRCUMFERENCE,style:o({stroke:e.trackColor})},null,14,se)):p("",!0),N("circle",{class:l(e.classes(e.n("circle-certain"),e.n(`circle--${e.type}`),[e.indeterminate,e.n("circle-overlay")])),cx:"50%",cy:"50%",r:e.RADIUS,fill:"transparent","stroke-width":e.circleProps.strokeWidth,"stroke-dasharray":e.CIRCUMFERENCE,"stroke-dashoffset":e.circleProps.strokeOffset,style:o({stroke:e.color})},null,14,ae)],14,ee)),e.label?(i(),t("div",{key:0,class:l(e.classes(e.n("circle-label"),[e.labelClass,e.labelClass]))},[R(e.$slots,"default",{},()=>[d(m(e.circleProps.roundValue),1)])],2)):p("",!0)],6)):p("",!0)],2)}const r=A(x,[["render",re]]);q(r);const le={circle:"环形进度条",style:"其他样式",basicUsage:"基本使用",indeterminateProgress:"不间断动画"},ne={circle:"Circle Progress",basicUsage:"Basic Usage",style:"Other Style",indeterminateProgress:"Indeterminate Animation"},{add:I,use:ie,pack:U,packs:ke,merge:Ne}=Z(),te=e=>{K(e),ie(e)};P("zh-CN",G);P("en-US",J);I("zh-CN",le);I("en-US",ne);const ge={__name:"index",setup(e){const u=$(0),v=$(0);return H(()=>{v.value=window.setInterval(()=>{u.value>=100?u.value=0:u.value+=20},1e3)}),M(te),W(Q),F(()=>{window.clearInterval(v.value)}),(h,E)=>(i(),t(j,null,[a(s(b),null,{default:n(()=>[d(m(s(U).basicUsage),1)]),_:1}),a(s(f),{direction:"column",size:["3vh","3vh"]},{default:n(()=>[a(s(r),{value:20}),a(s(r),{value:u.value,track:!1,label:""},null,8,["value"]),a(s(r),{value:100,label:""},{default:n(()=>[d("success")]),_:1})]),_:1}),a(s(b),null,{default:n(()=>[d(m(s(U).style),1)]),_:1}),a(s(f),{direction:"column",size:["3vh","3vh"]},{default:n(()=>[a(s(r),{type:"info",value:40}),a(s(r),{type:"success",value:60}),a(s(r),{value:"80","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),_:1}),a(s(b),null,{default:n(()=>[d(m(s(U).circle),1)]),_:1}),a(s(f),{size:["8vmin","8vmin"]},{default:n(()=>[a(s(r),{mode:"circle",value:75,size:"18vmin",track:!1}),a(s(r),{mode:"circle",label:"",value:u.value,"line-width":"5",size:"18vmin"},null,8,["value"]),a(s(r),{mode:"circle",type:"success",label:"",value:100,"line-width":"5",size:"18vmin"},{default:n(()=>[d(" success ")]),_:1})]),_:1}),a(s(b),null,{default:n(()=>[d(m(s(U).indeterminateProgress),1)]),_:1}),a(s(f),{direction:"column",size:["3vh","3vh"]},{default:n(()=>[a(s(r),{indeterminate:""}),a(s(r),{indeterminate:"",type:"info"}),a(s(f),{justify:"space-between"},{default:n(()=>[a(s(r),{mode:"circle",indeterminate:"",size:"18vmin"}),a(s(r),{mode:"circle",type:"info",indeterminate:"",size:"18vmin"})]),_:1})]),_:1})],64))}};export{ge as default};
