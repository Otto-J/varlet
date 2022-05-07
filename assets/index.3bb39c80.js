var z=Object.defineProperty,I=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var b=(e,a,n)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))V.call(a,n)&&b(e,n,a[n]);if(w)for(var n of w(a))M.call(a,n)&&b(e,n,a[n]);return e},m=(e,a)=>I(e,A(a));import{A as u}from"./AppType.84f8179e.js";import{t as f}from"./elements.e37f6779.js";import{c as H,B as C,t as L}from"./components.be4fa7b1.js";import{d as G,r as J,b as N,i as K,ae as O,at as R,_ as T,o as y,f as D,H as W,G as S,J as j,M as o,h as q,p as s,af as t,O as l,E as h,F as P,K as c}from"./elevation.ded31914.js";import{I as Q}from"./index.ad9dd901.js";import{d as X}from"./index.5d153c96.js";import{u as Y,a as U,_ as Z,b as ee,c as te}from"./en-US.66474835.js";import{a as ae,b as se}from"./utils.87a56bd1.js";const ne={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const{n:ie,classes:re}=H("divider"),oe=G({name:"VarDivider",props:ne,setup(e,{slots:a}){const n=J({withText:!1}),F=N(()=>C(e.inset)?e.inset:!0),x=N(()=>{const{inset:p,vertical:k,margin:E}=e,_={margin:E};if(C(p)||p===0)return d({},_);const B=L(p),g=Math.abs(B)+(p+"").replace(B+"","");return k?m(d({},_),{height:`calc(80% - ${f(g)})`}):m(d({},_),{width:`calc(100% - ${f(g)})`,left:B>0?f(g):f(0)})}),v=()=>{n.withText=Boolean(a.default)||Boolean(e.description)};return K(()=>{v()}),O(()=>{v()}),m(d({n:ie,classes:re},R(n)),{style:x,isInset:F})}});function le(e,a,n,F,x,v){return y(),D("div",{class:S(e.classes(e.n(),"var--box",[e.vertical,e.n("--vertical")],[e.withText,e.n("--with-text")],[e.isInset,e.n("--inset")],[e.dashed,e.n("--dashed")])),style:j(e.style)},[W(e.$slots,"default",{},()=>[e.description?(y(),D("span",{key:0,class:S(e.n("text"))},o(e.description),3)):q("v-if",!0)])],6)}var i=T(oe,[["render",le]]);i.install=function(e){e.component(i.name,i)};var ue={basicUsage:"\u57FA\u672C\u4F7F\u7528",dashed:"\u865A\u7EBF",inset:"\u7F29\u8FDB",vertical:"\u5782\u76F4\u5206\u5272\u7EBF",text:"\u6587\u5B57",withDesc:"\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF",withDescText:"\u6587\u5B57\u63CF\u8FF0",custom:"\u81EA\u5B9A\u4E49"},ce={basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"};const{add:$,use:de,pack:r,packs:we,merge:be}=Y(),pe=e=>{te(e),de(e)};U("zh-CN",Z);U("en-US",ee);$("zh-CN",ue);$("en-US",ce);const me={class:"divider-example-vertical-container"},fe={setup(e){return ae(pe),se(X),(a,n)=>(y(),D(P,null,[s(t(u),null,{default:l(()=>[c(o(t(r).basicUsage),1)]),_:1}),s(t(i)),s(t(u),null,{default:l(()=>[c(o(t(r).dashed),1)]),_:1}),s(t(i),{dashed:""}),s(t(u),null,{default:l(()=>[c(o(t(r).inset),1)]),_:1}),s(t(i),{inset:""}),s(t(i),{inset:36,margin:"36px 0"}),s(t(i),{inset:"-36px"}),s(t(u),null,{default:l(()=>[c(o(t(r).vertical),1)]),_:1}),h("div",me,[h("span",null,o(t(r).text),1),s(t(i),{vertical:""}),h("span",null,o(t(r).text),1),s(t(i),{vertical:""}),h("span",null,o(t(r).text),1)]),s(t(u),null,{default:l(()=>[c(o(t(r).withDesc),1)]),_:1}),s(t(i),{description:t(r).withDescText},null,8,["description"]),s(t(u),null,{default:l(()=>[c(o(t(r).custom),1)]),_:1}),s(t(i),null,{default:l(()=>[s(t(Q),{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]),_:1})],64))}};var Ce=T(fe,[["__scopeId","data-v-0a698be8"]]);export{Ce as default};
