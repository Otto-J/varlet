import{L as G}from"./index-5e3f3ac0.js";import{v as H}from"./index-62c7328a.js";import{g as K,t as W}from"./elements-3fb018db.js";import{d as $,a as C,c as Y,w as Z}from"./components-281d8a29.js";import{a3 as J,d as X,r as D,G as V,ar as ee,aH as te,ae,n as ie,ah as M,_ as ne,b as oe,L as se,e as u,m as b,v as I,p as S,x as k,R as l,q as s,t as E,P as le,Q as v,W as re,aS as de,F as fe,aj as ue,w as n,U as t,aT as L,N as y,O as w,f as R}from"./index-07e5c9c4.js";import{p as me,u as pe,b as Q,_ as ge,c as ce,a as Te}from"./index-cffc7788.js";import{T as ve,a as F}from"./index-dd7173f6.js";import{C as P}from"./index-3ba204f5.js";import{a as z,T as he}from"./index-29c92e4f.js";import{T as ke}from"./index-1ac64bdd.js";import{d as Le}from"./index-ea9abee8.js";import"./index-6e5a7242.js";/* empty css               */import"./logger-525ef361.js";import"./index-c65002e6.js";import"./provide-f51227bb.js";import"./provide-3df2f664.js";import"./index-996cf697.js";import"./index-765c9171.js";import"./shared-2d0e1ab6.js";import"./index-584376df.js";import"./index-1cb15a8e.js";import"./index-bde704e4.js";import"./index-1b4e4fb3.js";import"./provide-79eee52d.js";const be={loading:Boolean,immediateCheck:{type:Boolean,default:!0},finished:Boolean,error:Boolean,offset:{type:[String,Number],default:0},loadingText:String,finishedText:String,errorText:String,onLoad:$(),"onUpdate:loading":$(),"onUpdate:error":$()};function xe(){const{parentProvider:e,bindParent:a,index:c}=J(ve);return{index:c,tabItem:e,bindTabItem:a}}const{name:Ue,n:Ne,classes:Ce}=Y("list"),Ie=X({name:Ue,directives:{Ripple:H},components:{VarLoading:G},props:be,setup(e){const a=D(null),c=D(null),{tabItem:m,bindTabItem:N}=xe();let r;C(N,{}),m&&V(()=>m.current.value,g),V(()=>[e.loading,e.error,e.finished],g),ee(()=>{r=K(a.value),r.addEventListener("scroll",g),e.immediateCheck&&g()}),te(x);function p(){C(e["onUpdate:error"],!1),C(e["onUpdate:loading"],!0),C(e.onLoad)}function T(){const{bottom:_}=M(r),{bottom:U}=M(c.value);return Math.floor(U)-W(e.offset)<=_}function x(){r.removeEventListener("scroll",g)}async function g(){await ie(),!(e.loading||e.finished||e.error||(m==null?void 0:m.current.value)===!1||!T())&&p()}return{pack:me,listEl:a,detectorEl:c,isNumber:ae,load:p,check:g,n:Ne,classes:Ce}}});function Se(e,a,c,m,N,r){const p=oe("var-loading"),T=se("ripple");return u(),b("div",{class:k(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[I(e.$slots,"default"),e.loading?I(e.$slots,"loading",{key:0},()=>[S("div",{class:k(e.n("loading"))},[S("div",{class:k(e.n("loading-text"))},l(e.loadingText??e.pack.listLoadingText),3),s(p,{size:"mini",radius:10})],2)]):E("",!0),e.finished?I(e.$slots,"finished",{key:1},()=>[S("div",{class:k(e.n("finished"))},l(e.finishedText??e.pack.listFinishedText),3)]):E("",!0),e.error?I(e.$slots,"error",{key:2},()=>[le((u(),b("div",{class:k(e.n("error")),onClick:a[0]||(a[0]=(...x)=>e.load&&e.load(...x))},[v(l(e.errorText??e.pack.listErrorText),1)],2)),[[T]])]):E("",!0),S("div",{class:k(e.n("detector")),ref:"detectorEl"},null,2)],2)}const B=ne(Ie,[["render",Se]]);Z(B);const ye={basicUsage:"基本使用",loadFail:"加载失败",tipText:"提示文字",loadingText:"正在努力输出",errorText:"出错了出错了",finishedText:"一滴都没有了",listItem:"列表项"},Be={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"},{add:A,use:_e,pack:f,packs:it,merge:nt}=pe(),$e=e=>{Te(e),_e(e)};Q("zh-CN",ge);Q("en-US",ce);A("zh-CN",ye);A("en-US",Be);const ot={__name:"index",setup(e){const a=re({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:c,list2:m,list3:N,loading:r,loading2:p,loading3:T,finished:x,finished2:g,finished3:_,error:U,current:h}=de(a);function O(){setTimeout(()=>{for(let d=0;d<20;d++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)}function j(){setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let d=0;d<20;d++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)}function q(){setTimeout(()=>{for(let d=0;d<20;d++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)}return fe($e),ue(Le),(d,o)=>(u(),b(y,null,[s(t(he),{active:t(h),"onUpdate:active":o[0]||(o[0]=i=>L(h)?h.value=i:null),sticky:"","offset-top":"14.4vmin",style:{"margin-bottom":"10px"}},{default:n(()=>[s(t(z),null,{default:n(()=>[v(l(t(f).basicUsage),1)]),_:1}),s(t(z),null,{default:n(()=>[v(l(t(f).loadFail),1)]),_:1}),s(t(z),null,{default:n(()=>[v(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(ke),{active:t(h),"onUpdate:active":o[5]||(o[5]=i=>L(h)?h.value=i:null)},{default:n(()=>[s(t(F),null,{default:n(()=>[s(t(B),{finished:t(x),loading:t(r),"onUpdate:loading":o[1]||(o[1]=i=>L(r)?r.value=i:null),onLoad:O},{default:n(()=>[(u(!0),b(y,null,w(t(c),i=>(u(),R(t(P),{key:i},{default:n(()=>[v(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(F),null,{default:n(()=>[s(t(B),{finished:t(g),error:t(U),"onUpdate:error":o[2]||(o[2]=i=>L(U)?U.value=i:null),loading:t(p),"onUpdate:loading":o[3]||(o[3]=i=>L(p)?p.value=i:null),onLoad:j},{default:n(()=>[(u(!0),b(y,null,w(t(m),i=>(u(),R(t(P),{key:i},{default:n(()=>[v(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(F),null,{default:n(()=>[s(t(B),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t(_),loading:t(T),"onUpdate:loading":o[4]||(o[4]=i=>L(T)?T.value=i:null),onLoad:q},{default:n(()=>[(u(!0),b(y,null,w(t(N),i=>(u(),R(t(P),{key:i},{default:n(()=>[v(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{ot as default};
