import{S as re}from"./index-3f38bc92.js";import{d as q,a as u,b as k,G as le,_ as Y,f as m,i as ie,S as _,M as K,m as ce,O as j,P as $,Q as v,aF as de,w as ue,e as fe,x as pe,v as ve,Z as V,V as me,aA as he,h as y,F as G,ai as Q,N as z,R as L,o as ye,ac as be,aD as ge,q as S,ao as h}from"./vue-router-14238f57.js";import{u as ke,e as _e,c as W,d as R,o as xe,a as F,w as Ce}from"./logger-5f6a195b.js";import{u as Te}from"./useChildren-24c77be1.js";import{t as Ie,k as Se,c as $e,n as Be,v as Ne,u as we,b as H,q as Ae,e as U,f as De}from"./elements-030d765c.js";import{C as X}from"./index-fc1c75cb.js";import{d as Ee}from"./index-a0438c78.js";import{u as ze,b as Z,_ as Pe,c as Le,a as Oe}from"./index-d00a0f8a.js";import"./onSmartUnmounted-f54ecb01.js";import"./onWindowResize-f2999832.js";import"./index-ace3c2fa.js";import"./index-1d906ce6.js";import"./index-01a19db2.js";/* empty css               */const J=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");function Me(){const{bindChildren:e,length:l,childProviders:o}=Te(J);return{length:l,indexAnchors:o,bindIndexAnchors:e}}function Ve(){const{parentProvider:e,index:l,bindParent:o}=ke(J);return o||_e("IndexAnchor",'You should use this component in "IndexBar"'),{index:l,indexBar:e,bindIndexBar:o}}const Re={index:{type:[Number,String]}},{n:Fe,classes:He}=W("index-anchor"),Ue=q({name:"VarIndexAnchor",components:{VarSticky:re},inheritAttrs:!1,props:Re,setup(e){const{index:l,indexBar:o,bindIndexBar:f}=Ve(),c=u(0),n=u(!1),i=k(()=>e.index),s=u(null),{active:B,sticky:N,cssMode:b,stickyOffsetTop:x,zIndex:a}=o;return f({index:l,name:i,ownTop:c,setOwnTop:()=>{s.value&&(c.value=s.value.$el?s.value.$el.offsetTop:s.value.offsetTop)},setDisabled:C=>{n.value=C}}),{n:Fe,classes:He,name:i,anchorEl:s,active:B,sticky:N,zIndex:a,disabled:n,cssMode:b,stickyOffsetTop:x,Transition:le}}});function Xe(e,l,o,f,c,n){return m(),ie(de(e.sticky?e.n("$-sticky"):e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:_(()=>[K("div",ce({class:e.n()},e.$attrs),[j(e.$slots,"default",{},()=>[$(v(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}const qe=Y(Ue,[["render",Xe]]),Ye={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:{type:Boolean,default:!1},stickyCssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:R(),onChange:R()},{n:Ke,classes:je}=W("index-bar"),Ge=q({name:"VarIndexBar",props:Ye,setup(e){const{length:l,indexAnchors:o,bindIndexAnchors:f}=Me(),c=u(""),n=u(null),i=u([]),s=u(),B=k(()=>e.sticky),N=k(()=>e.stickyCssMode||e.cssMode),b=k(()=>Ie(e.stickyOffsetTop)),x=k(()=>e.zIndex);let a=null,g=!1;f({active:s,sticky:B,cssMode:N,stickyOffsetTop:b,zIndex:x});const w=(t,r)=>{const d=me(t)?t.name.value:t;d===s.value||d===void 0||(s.value=d,(r==null?void 0:r.event)!==!1&&F(e.onChange,d))},C=()=>{if(he(a))return 0;const{top:t}=H(a),{scrollTop:r}=a,{top:d}=H(n.value);return r-t+d},O=()=>{const t=Ae(a),r=a===window?document.body.scrollHeight:a.scrollHeight,d=C();o.forEach((p,T)=>{const D=p.ownTop.value,I=t-D+b.value-d,E=T===o.length-1?r:o[T+1].ownTop.value-p.ownTop.value;p.setDisabled(!0),I>=0&&I<E&&c.value===""&&(p.setDisabled(!1),w(p))})},A=async({anchorName:t,manualCall:r=!1,options:d})=>{if(r&&F(e.onClick,t),t===s.value&&!g)return;const p=o.find(({name:E})=>t===E.value);if(!p)return;const T=C(),D=p.ownTop.value-b.value+T,I=Se(a);c.value=t,w(t,d),await $e(a,{left:I,top:D,animation:Be,duration:V(e.duration)}),Ne(()=>{c.value=""})},te=async()=>{await U(),a=De(n.value)},oe=()=>{a.addEventListener("scroll",O)},M=()=>{a.removeEventListener("scroll",O)},ae=(t,r)=>{we(()=>A({anchorName:t,options:r}))};return ue(()=>l.value,async()=>{await U(),o.forEach(({name:t,setOwnTop:r})=>{t.value&&i.value.push(t.value),r()})}),xe(async()=>{await te(),oe()}),fe(M),pe(()=>{g=!0,M()}),ve(()=>{!g||s.value===void 0||(A({anchorName:s.value,options:{event:!1}}),g=!1)}),{n:Ke,classes:je,barEl:n,active:s,zIndex:x,anchorNameList:i,toNumber:V,scrollTo:ae,anchorClick:A}}});const Qe=["onClick"];function We(e,l,o,f,c,n){return m(),y("div",{class:z(e.n()),ref:"barEl"},[j(e.$slots,"default"),K("ul",{class:z(e.n("anchor-list")),style:L({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(m(!0),y(G,null,Q(e.anchorNameList,i=>(m(),y("li",{key:i,class:z(e.classes(e.n("anchor-item"),[e.active===i,e.n("anchor-item--active")])),style:L({color:e.active===i&&e.highlightColor?e.highlightColor:""}),onClick:s=>e.anchorClick({anchorName:i,manualCall:!0})},v(i),15,Qe))),128))],6)],2)}const ee=Y(Ge,[["render",We]]);Ce(ee);const Ze={title:"标题",text:"文本"},Je={title:"Title",text:"Text"},{add:se,use:es,pack:P,packs:ys,merge:bs}=ze(),ss=e=>{Oe(e),es(e)};Z("zh-CN",Pe);Z("en-US",Le);se("zh-CN",Ze);se("en-US",Je);const ns={class:"index-bar-example-container"},gs={__name:"index",setup(e){const l=u([]),o=u("#e7edf7"),f=u("#2e67ba");ye(()=>{for(let n=0;n<26;n++)l.value.push(String.fromCharCode(65+n))});function c(n){console.log(n)}return be(ss),ge(Ee,n=>{o.value=n==="darkTheme"?"rgb(41, 42, 45)":"#e7edf7",f.value=n==="darkTheme"?"#3980e8":"#2e67ba"}),(n,i)=>(m(),y("div",ns,[S(h(ee),{onChange:c,duration:"300"},{default:_(()=>[(m(!0),y(G,null,Q(l.value,s=>(m(),y("div",{key:s},[S(qe,{index:s,class:"index-bar-example-anchor",style:L({background:o.value,color:f.value})},{default:_(()=>[$(v(h(P).title)+" "+v(s),1)]),_:2},1032,["index","style"]),S(h(X),null,{default:_(()=>[$(v(s)+" "+v(h(P).text),1)]),_:2},1024),S(h(X),null,{default:_(()=>[$(v(s)+" "+v(h(P).text),1)]),_:2},1024)]))),128))]),_:1})]))}};export{gs as default};
