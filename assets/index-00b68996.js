import{a as z}from"./elements-dd38e0fd.js";import{f as w,c as T,w as B}from"./logger-5e844ee5.js";import{d as I,_ as $,f as m,h as d,M as e,N as p,R as V,O as b,j,a as E,aa as F,aC as A,q as i,S as u,an as a,F as v,P as N,Q as n,ah as L,ak as M,al as P}from"./vue-router-0425d5ec.js";import{P as D}from"./index-dbb7171f.js";import{d as W}from"./index-a0438c78.js";import{u as q,b as C,_ as J,c as O,a as Q}from"./index-5b7836e0.js";import{A as S}from"./appType-4f3a4d0c.js";import"./index-34c6e7a2.js";import"./usePopover-d80e441a.js";import"./zIndex-2dda3ddd.js";import"./index-98d3be4f.js";import"./index-72c56f79.js";/* empty css               */import"./index-ee71d620.js";import"./index-00fc3aa7.js";import"./index-75526d5b.js";import"./provide-5688a6c1.js";import"./useChildren-952832a4.js";import"./FieldDecorator-1f9a2c22.js";import"./onWindowResize-8116aeba.js";const R={fullWidth:{type:[Number,String],default:"100%"},elevation:{type:[Boolean,Number,String],default:!0}},{n:x,classes:G}=T("table"),H=I({name:"VarTable",props:R,setup(){return{toSizeUnit:z,n:x,classes:G,formatElevation:w}}});function K(t,h,_,y,l,o){return m(),d("div",{class:p(t.classes(t.n(),t.formatElevation(t.elevation,1),t.n("$--box")))},[e("div",{class:p(t.n("main"))},[e("table",{class:p(t.n("table")),style:V({width:t.toSizeUnit(t.fullWidth)})},[b(t.$slots,"default")],6)],2),t.$slots.footer?(m(),d("div",{key:0,class:p(t.n("footer"))},[b(t.$slots,"footer")],2)):j("",!0)],2)}const g=$(H,[["render",K]]);B(g);const X={basicUsage:"基本使用",slot:"尾部插槽",math:"数学",english:"英语",tom:"火猫桑",jerry:"耗子君",name:"姓名"},Y={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"},{add:U,use:Z,pack:s,packs:ze,merge:we}=q(),ee=t=>{Q(t),Z(t)};C("zh-CN",J);C("en-US",O);U("zh-CN",X);U("en-US",Y);const c=t=>(M("data-v-9699b2a0"),t=t(),P(),t),te=c(()=>e("td",null,"124",-1)),ae=c(()=>e("td",null,"38",-1)),ne=c(()=>e("td",null,"100",-1)),se=c(()=>e("td",null,"135",-1)),oe={class:"footer"},le={__name:"index",setup(t){const h=E(_(1,10));function _(l,o){return Array.from({length:o}).map((r,k)=>{const f=(l-1)*o+k+1;return{name:`Name ${f}`,math:f,english:f}})}function y(l,o){h.value=_(l,o)}return F(ee),A(W),(l,o)=>(m(),d(v,null,[i(a(S),null,{default:u(()=>[N(n(a(s).basicUsage),1)]),_:1}),i(a(g),null,{default:u(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a(s).name),1),e("th",null,n(a(s).math),1),e("th",null,n(a(s).english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,n(a(s).jerry),1),te,ae]),e("tr",null,[e("td",null,n(a(s).tom),1),ne,se])])]),_:1}),i(a(S),null,{default:u(()=>[N(n(a(s).slot),1)]),_:1}),i(a(g),null,{footer:u(()=>[e("div",oe,[i(a(D),{current:1,total:100,"size-option":[5,10],onChange:y})])]),default:u(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a(s).name),1),e("th",null,n(a(s).math),1),e("th",null,n(a(s).english),1)])]),e("tbody",null,[(m(!0),d(v,null,L(h.value,r=>(m(),d("tr",{key:r.name},[e("td",null,n(r.name),1),e("td",null,n(r.math),1),e("td",null,n(r.english),1)]))),128))])]),_:1})],64))}},Te=$(le,[["__scopeId","data-v-9699b2a0"]]);export{Te as default};
