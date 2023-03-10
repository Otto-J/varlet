import{a as D}from"./elements-b2cfaeee.js";import{d as U,Z as B,_ as M,f as r,h as d,N as l,O as $,j as p,R as m,M as c,F as S,ai as T,a as h,ac as F,aC as A,q as t,S as s,ap as a,P as n,Q as o,aD as g}from"./vue-router.esm-bundler-54754668.js";import{c as H}from"./components-f0507fff.js";import{B as L}from"./index-d6a649a7.js";import{d as R}from"./index-59604d2c.js";import{u as V,c as W,a as w,_ as I,b as Z}from"./index-86b6581d.js";import"./shared-ba8ca10e.js";import"./index-218c2a2d.js";import"./index-2d85ae0d.js";/* empty css               */import"./index-ccac7181.js";import"./index-16383597.js";import"./useChildren-a89a72f6.js";const j={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}},{n:q,classes:E}=H("skeleton"),O=U({name:"VarSkeleton",props:j,setup(){return{n:q,classes:E,toSizeUnit:D,toNumber:B}}});function P(e,f,y,v,k,b){return r(),d("div",{class:l(e.classes(e.n("$--box"),e.n()))},[e.loading?p("",!0):(r(),d("div",{key:0,class:l(e.n("data"))},[$(e.$slots,"default")],2)),e.loading&&!e.fullscreen?(r(),d("div",{key:1,class:l(e.n("content"))},[e.card?(r(),d("div",{key:0,class:l(e.n("card")),style:m({height:e.toSizeUnit(e.cardHeight)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):p("",!0),e.avatar||e.title||e.toNumber(e.rows)>0?(r(),d("div",{key:1,class:l(e.n("article"))},[e.avatar?(r(),d("div",{key:0,class:l(e.n("avatar")),style:m({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):p("",!0),e.title||e.toNumber(e.rows)>0?(r(),d("div",{key:1,class:l(e.n("section"))},[e.title?(r(),d("div",{key:0,class:l(e.n("title")),style:m({width:e.toSizeUnit(e.titleWidth)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):p("",!0),(r(!0),d(S,null,T(e.toNumber(e.rows),(z,C)=>(r(),d("div",{class:l(e.n("row")),key:z,style:m({width:e.toSizeUnit(e.rowsWidth[C])})},[c("div",{class:l(e.n("--animation"))},null,2)],6))),128))],2)):p("",!0)],2)):p("",!0)],2)):p("",!0),e.loading&&e.fullscreen?(r(),d("div",{key:2,class:l(e.n("fullscreen")),style:m({zIndex:e.toNumber(e.fullscreenZIndex)})},[c("div",{class:l(e.n("--animation"))},null,2)],6)):p("",!0)],2)}const u=M(O,[["render",P]]);u.install=function(e){e.component(u.name,u)};const Q={basicUsage:"基本使用",displayTitle:"显示标题",customRowsHeight:"自定义段落高度",displayAvatar:"显示头像",displayCard:"显示卡片",fullscreenMode:"全屏模式",toggleFullscreenMode:"切换全屏模式",loadingData:"加载的数据"},G={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"},{add:N,use:J,pack:i,packs:de,merge:ue}=V(),K=e=>{W(e),J(e)};w("zh-CN",I);w("en-US",Z);N("zh-CN",Q);N("en-US",G);const pe={setup(e){const f=h(!0),y=h(!1);function v(){y.value=!0,setTimeout(()=>{y.value=!1},2e3)}return F(K),A(R),(k,b)=>(r(),d(S,null,[t(a(g),null,{default:s(()=>[n(o(a(i).basicUsage),1)]),_:1}),t(a(u),{loading:f.value},{default:s(()=>[n(o(a(i).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(o(a(i).displayTitle),1)]),_:1}),t(a(u),{title:"",loading:f.value},{default:s(()=>[n(o(a(i).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(o(a(i).customRowsHeight),1)]),_:1}),t(a(u),{title:"",rows:3,loading:f.value,"rows-width":["200px","100px","50px"]},{default:s(()=>[n(o(a(i).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(o(a(i).displayAvatar),1)]),_:1}),t(a(u),{title:"",avatar:"",rows:3,loading:f.value},{default:s(()=>[n(o(a(i).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(o(a(i).displayCard),1)]),_:1}),t(a(u),{title:"",avatar:"",card:"",rows:3,loading:f.value},{default:s(()=>[n(o(a(i).loadingData),1)]),_:1},8,["loading"]),t(a(g),null,{default:s(()=>[n(o(a(i).fullscreenMode),1)]),_:1}),t(a(L),{type:"danger",class:"button",onClick:v},{default:s(()=>[n(o(a(i).toggleFullscreenMode),1)]),_:1}),t(a(u),{fullscreen:"",loading:y.value},null,8,["loading"])],64))}};export{pe as default};
