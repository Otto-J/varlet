import{a as z}from"./elements-da0a4dab.js";import{f as w,c as T,w as B}from"./components-08e741bd.js";import{d as E,_ as $,f as m,h as d,M as e,N as p,R as I,O as b,j as V,a as j,aa as F,aE as A,q as i,S as u,an as a,F as v,P as N,Q as n,ah as L,ak as M,al as P}from"./vue-router-40fc6ea4.js";import{P as D}from"./index-2a1c747a.js";import{d as W}from"./index-ea9abee8.js";import{u as q,b as C,_ as J,c as O,a as Q}from"./index-d900f5bf.js";import{A as S}from"./appType-5bfd6fb0.js";import"./logger-525ef361.js";import"./index-4ad4ca28.js";import"./usePopover-a7812307.js";import"./zIndex-c48ec921.js";import"./index-0b900054.js";import"./index-5abe00b9.js";/* empty css               */import"./index-136c3567.js";import"./index-55ce00d1.js";import"./index-5cd0932a.js";import"./provide-704f51ba.js";import"./useChildren-9817f989.js";import"./FieldDecorator-6bbf9429.js";import"./onWindowResize-93bafcb2.js";const R={fullWidth:{type:[Number,String],default:"100%"},elevation:{type:[Boolean,Number,String],default:!0}},{n:x,classes:G}=T("table"),H=E({name:"VarTable",props:R,setup(){return{toSizeUnit:z,n:x,classes:G,formatElevation:w}}});function K(t,h,_,y,l,o){return m(),d("div",{class:p(t.classes(t.n(),t.formatElevation(t.elevation,1),t.n("$--box")))},[e("div",{class:p(t.n("main"))},[e("table",{class:p(t.n("table")),style:I({width:t.toSizeUnit(t.fullWidth)})},[b(t.$slots,"default")],6)],2),t.$slots.footer?(m(),d("div",{key:0,class:p(t.n("footer"))},[b(t.$slots,"footer")],2)):V("",!0)],2)}const g=$(H,[["render",K]]);B(g);const X={basicUsage:"基本使用",slot:"尾部插槽",math:"数学",english:"英语",tom:"火猫桑",jerry:"耗子君",name:"姓名"},Y={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"},{add:U,use:Z,pack:s,packs:we,merge:Te}=q(),ee=t=>{Q(t),Z(t)};C("zh-CN",J);C("en-US",O);U("zh-CN",X);U("en-US",Y);const c=t=>(M("data-v-9699b2a0"),t=t(),P(),t),te=c(()=>e("td",null,"124",-1)),ae=c(()=>e("td",null,"38",-1)),ne=c(()=>e("td",null,"100",-1)),se=c(()=>e("td",null,"135",-1)),oe={class:"footer"},le={__name:"index",setup(t){const h=j(_(1,10));function _(l,o){return Array.from({length:o}).map((r,k)=>{const f=(l-1)*o+k+1;return{name:`Name ${f}`,math:f,english:f}})}function y(l,o){h.value=_(l,o)}return F(ee),A(W),(l,o)=>(m(),d(v,null,[i(a(S),null,{default:u(()=>[N(n(a(s).basicUsage),1)]),_:1}),i(a(g),null,{default:u(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a(s).name),1),e("th",null,n(a(s).math),1),e("th",null,n(a(s).english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,n(a(s).jerry),1),te,ae]),e("tr",null,[e("td",null,n(a(s).tom),1),ne,se])])]),_:1}),i(a(S),null,{default:u(()=>[N(n(a(s).slot),1)]),_:1}),i(a(g),null,{footer:u(()=>[e("div",oe,[i(a(D),{current:1,total:100,"size-option":[5,10],onChange:y})])]),default:u(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a(s).name),1),e("th",null,n(a(s).math),1),e("th",null,n(a(s).english),1)])]),e("tbody",null,[(m(!0),d(v,null,L(h.value,r=>(m(),d("tr",{key:r.name},[e("td",null,n(r.name),1),e("td",null,n(r.math),1),e("td",null,n(r.english),1)]))),128))])]),_:1})],64))}},Be=$(le,[["__scopeId","data-v-9699b2a0"]]);export{Be as default};
