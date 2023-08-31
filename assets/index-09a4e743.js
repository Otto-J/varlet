import{L as K}from"./index-f256b81b.js";import{v as X}from"./index-5abe00b9.js";import{g as Y,t as Z}from"./elements-da0a4dab.js";import{d as E,u as G,a as C,o as H,c as J,w as W}from"./components-08e741bd.js";import{d as ee,a as z,w as D,X as te,n as ae,aA as M,_ as ie,p as oe,af as ne,f as u,h as L,O as I,M as S,N as v,Q as r,q as s,j as _,D as se,P as c,r as re,aV as le,aa as de,aE as fe,S as o,an as t,ar as k,F as y,ah as w,i as F}from"./vue-router-40fc6ea4.js";import{d as ue}from"./shared-ddca0f7e.js";import{p as me,u as pe,b as A,_ as ge,c as ce,a as he}from"./index-d900f5bf.js";import{o as Te}from"./onSmartUnmounted-a42eb713.js";import{T as ve,a as P}from"./index-25db209a.js";import{C as R}from"./index-55ce00d1.js";import{a as V,T as ke}from"./index-57a16a30.js";import{T as Le}from"./index-8bef3090.js";import{d as be}from"./index-ea9abee8.js";import"./index-0b900054.js";/* empty css               */import"./logger-525ef361.js";import"./index-198d11f9.js";import"./provide-af3fae79.js";import"./useChildren-9817f989.js";import"./provide-5a853ca6.js";import"./index-136c3567.js";import"./index-147ff509.js";import"./onWindowResize-93bafcb2.js";import"./index-13255c9c.js";import"./useTouch-a4d53ac3.js";import"./provide-d36527af.js";const Ue={loading:Boolean,immediateCheck:{type:Boolean,default:!0},finished:Boolean,error:Boolean,offset:{type:[String,Number],default:0},loadingText:String,finishedText:String,errorText:String,onLoad:E(),"onUpdate:loading":E(),"onUpdate:error":E()};function xe(){const{parentProvider:e,bindParent:a,index:h}=G(ve);return{index:h,tabItem:e,bindTabItem:a}}const{n:Ne,classes:Ce}=J("list"),Ie=ee({name:"VarList",directives:{Ripple:X},components:{VarLoading:K},props:Ue,setup(e){const{tabItem:a,bindTabItem:h}=xe(),b=z(null),U=z(null);let l;const m=()=>{C(e["onUpdate:error"],!1),C(e["onUpdate:loading"],!0),C(e.onLoad)},g=()=>{const{bottom:$}=M(l),{bottom:N}=M(U.value);return Math.floor(N)-Z(e.offset)<=$},x=()=>{l.removeEventListener("scroll",p)},p=async()=>{await ae(),!(e.loading||e.finished||e.error||(a==null?void 0:a.current.value)===!1||!g())&&m()};return C(h,{}),a&&D(()=>a.current.value,p),D(()=>[e.loading,e.error,e.finished],p),H(()=>{l=Y(b.value),l.addEventListener("scroll",p),e.immediateCheck&&p()}),Te(x),{pack:me,listEl:b,detectorEl:U,dt:ue,isNumber:te,load:m,check:p,n:Ne,classes:Ce}}});function Se(e,a,h,b,U,l){const m=oe("var-loading"),g=ne("ripple");return u(),L("div",{class:v(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[I(e.$slots,"default"),e.loading?I(e.$slots,"loading",{key:0},()=>[S("div",{class:v(e.n("loading"))},[S("div",{class:v(e.n("loading-text"))},r(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(m,{size:"mini",radius:10})],2)]):_("",!0),e.finished?I(e.$slots,"finished",{key:1},()=>[S("div",{class:v(e.n("finished"))},r(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):_("",!0),e.error?I(e.$slots,"error",{key:2},()=>[se((u(),L("div",{class:v(e.n("error")),onClick:a[0]||(a[0]=(...x)=>e.load&&e.load(...x))},[c(r(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[g]])]):_("",!0),S("div",{class:v(e.n("detector")),ref:"detectorEl"},null,2)],2)}const B=ie(Ie,[["render",Se]]);W(B);const ye={basicUsage:"基本使用",loadFail:"加载失败",tipText:"提示文字",loadingText:"正在努力输出",errorText:"出错了出错了",finishedText:"一滴都没有了",listItem:"列表项"},Be={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:Q,use:$e,pack:f,packs:ot,merge:nt}=pe(),Ee=e=>{he(e),$e(e)};A("zh-CN",ge);A("en-US",ce);Q("zh-CN",ye);Q("en-US",Be);const st={__name:"index",setup(e){const a=re({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:h,list2:b,list3:U,loading:l,loading2:m,loading3:g,finished:x,finished2:p,finished3:$,error:N,current:T}=le(a);function O(){setTimeout(()=>{for(let d=0;d<20;d++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)}function j(){setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let d=0;d<20;d++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)}function q(){setTimeout(()=>{for(let d=0;d<20;d++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)}return de(Ee),fe(be),(d,n)=>(u(),L(y,null,[s(t(ke),{active:t(T),"onUpdate:active":n[0]||(n[0]=i=>k(T)?T.value=i:null),sticky:"","offset-top":"14.4vmin",style:{"margin-bottom":"10px"}},{default:o(()=>[s(t(V),null,{default:o(()=>[c(r(t(f).basicUsage),1)]),_:1}),s(t(V),null,{default:o(()=>[c(r(t(f).loadFail),1)]),_:1}),s(t(V),null,{default:o(()=>[c(r(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(Le),{active:t(T),"onUpdate:active":n[5]||(n[5]=i=>k(T)?T.value=i:null)},{default:o(()=>[s(t(P),null,{default:o(()=>[s(t(B),{finished:t(x),loading:t(l),"onUpdate:loading":n[1]||(n[1]=i=>k(l)?l.value=i:null),onLoad:O},{default:o(()=>[(u(!0),L(y,null,w(t(h),i=>(u(),F(t(R),{key:i},{default:o(()=>[c(r(t(f).listItem)+": "+r(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(P),null,{default:o(()=>[s(t(B),{finished:t(p),error:t(N),"onUpdate:error":n[2]||(n[2]=i=>k(N)?N.value=i:null),loading:t(m),"onUpdate:loading":n[3]||(n[3]=i=>k(m)?m.value=i:null),onLoad:j},{default:o(()=>[(u(!0),L(y,null,w(t(b),i=>(u(),F(t(R),{key:i},{default:o(()=>[c(r(t(f).listItem)+": "+r(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(P),null,{default:o(()=>[s(t(B),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t($),loading:t(g),"onUpdate:loading":n[4]||(n[4]=i=>k(g)?g.value=i:null),onLoad:q},{default:o(()=>[(u(!0),L(y,null,w(t(U),i=>(u(),F(t(R),{key:i},{default:o(()=>[c(r(t(f).listItem)+": "+r(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{st as default};
