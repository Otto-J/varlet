import{L as P}from"./index.75606e30.js";import{R as Q}from"./index.47b7a69f.js";import{c as G,b as K}from"./elements.e37f6779.js";import{o as Z,i as j,c as q,a as N}from"./components.be4fa7b1.js";import{p as J,u as W,a as z,_ as X,b as Y,c as ee}from"./en-US.66474835.js";import{d as te,a as R,i as ae,z as ie,_ as oe,n as ne,l as se,aa as le,o as p,f as y,H as U,h as $,E as x,G as T,M as l,p as s,C as re,K as c,r as de,at as ue,af as t,au as k,O as o,F as B,ac as A,e as S}from"./elevation.ded31914.js";import{C as w}from"./index.b9d598c3.js";import{T as fe,a as D}from"./index.5b9d1be4.js";import{T as pe}from"./index.3a302c2f.js";import{T as I}from"./index.74d86b39.js";import{d as me}from"./index.5d153c96.js";import{a as ge,b as ce}from"./utils.87a56bd1.js";import"./index.b48b90ed.js";/* empty css               */import"./index.ad9dd901.js";import"./index.5cbdfc6a.js";import"./index.3c228092.js";import"./provide.8fb24105.js";import"./provide.e28b8206.js";import"./index.9616d239.js";const ve={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}};const{n:he,classes:Te}=q("list"),ke=te({name:"VarList",directives:{Ripple:Q},components:{VarLoading:P},props:ve,setup(e){const a=R(null),F=R(null);let m;const L=()=>{N(e["onUpdate:error"],!1),N(e["onUpdate:loading"],!0),N(e.onLoad)},v=()=>{const d=m===window?window.innerHeight:m.getBoundingClientRect().bottom,{bottom:g}=F.value.getBoundingClientRect();return Math.floor(g)-K(e.offset)<=d},r=async()=>{await ne();const{loading:d,finished:g,error:b}=e;!d&&!g&&!b&&v()&&L()};return ae(()=>{m=G(a.value),e.immediateCheck&&r(),m.addEventListener("scroll",r)}),ie(()=>{m.removeEventListener("scroll",r)}),{pack:J,listEl:a,detectorEl:F,dt:Z,isNumber:j,load:L,check:r,n:he,classes:Te}}});function ye(e,a,F,m,L,v){const r=se("var-loading"),d=le("ripple");return p(),y("div",{class:T(e.classes(e.n(),"var--box")),ref:"listEl"},[U(e.$slots,"default"),e.loading?U(e.$slots,"loading",{key:0},()=>[x("div",{class:T(e.n("loading"))},[x("div",{class:T(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(r,{size:"mini",radius:10})],2)]):$("v-if",!0),e.finished?U(e.$slots,"finished",{key:1},()=>[x("div",{class:T(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):$("v-if",!0),e.error?U(e.$slots,"error",{key:2},()=>[re((p(),y("div",{class:T(e.n("error")),onClick:a[0]||(a[0]=(...g)=>e.load&&e.load(...g))},[c(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[d]])]):$("v-if",!0),x("div",{class:T(e.n("detector")),ref:"detectorEl"},null,2)],2)}var C=oe(ke,[["render",ye]]);C.install=function(e){e.component(C.name,C)};var Ce={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},Fe={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"};const{add:V,use:Le,pack:f,packs:Ge,merge:Ke}=W(),Ue=e=>{ee(e),Le(e)};z("zh-CN",X);z("en-US",Y);V("zh-CN",Ce);V("en-US",Fe);const Ze={setup(e){const a=de({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:F,list2:m,list3:L,loading:v,loading2:r,loading3:d,finished:g,finished2:b,finished3:_,error:E,current:h}=ue(a),M=()=>{if(a.current!==0){a.loading=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)},H=()=>{if(a.current!==1){a.loading2=!1;return}setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let u=0;u<20;u++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)},O=()=>{if(a.current!==2){a.loading3=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)};return ge(Ue),ce(me),(u,n)=>(p(),y(B,null,[s(t(fe),{active:t(h),"onUpdate:active":n[0]||(n[0]=i=>k(h)?h.value=i:null),sticky:"","offset-top":"54px",style:{"margin-bottom":"10px"}},{default:o(()=>[s(t(D),null,{default:o(()=>[c(l(t(f).basicUsage),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).loadFail),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(pe),{active:t(h),"onUpdate:active":n[5]||(n[5]=i=>k(h)?h.value=i:null)},{default:o(()=>[s(t(I),null,{default:o(()=>[s(t(C),{finished:t(g),loading:t(v),"onUpdate:loading":n[1]||(n[1]=i=>k(v)?v.value=i:null),onLoad:M},{default:o(()=>[(p(!0),y(B,null,A(t(F),i=>(p(),S(t(w),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(C),{finished:t(b),error:t(E),"onUpdate:error":n[2]||(n[2]=i=>k(E)?E.value=i:null),loading:t(r),"onUpdate:loading":n[3]||(n[3]=i=>k(r)?r.value=i:null),onLoad:H},{default:o(()=>[(p(!0),y(B,null,A(t(m),i=>(p(),S(t(w),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(C),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t(_),loading:t(d),"onUpdate:loading":n[4]||(n[4]=i=>k(d)?d.value=i:null),onLoad:O},{default:o(()=>[(p(!0),y(B,null,A(t(L),i=>(p(),S(t(w),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Ze as default};
