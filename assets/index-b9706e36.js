import{S as re}from"./index-a68d723f.js";import{a1 as le,a3 as ie,d as F,r as u,B as k,T as ce,_ as Y,e as m,f as de,w as _,m as q,aq as ue,s as K,P as $,Q as v,al as fe,F as pe,ar as ve,b1 as me,a9 as he,a8 as ye,a4 as R,j as D,aW as ge,a5 as be,ai as ke,ah as U,l as y,M as W,N as Q,t as P,v as M,o as _e,E as Ce,aj as Te,p as B,U as h}from"./index-e8376e61.js";import{e as xe}from"./logger-525ef361.js";import{c as G,d as H,a as X,w as Ie}from"./components-c1e1aae1.js";import{e as Be}from"./shared-52b0bced.js";import{t as $e,c as Se,s as Ne,e as we,g as Ae}from"./elements-4558e7ec.js";import{C as j}from"./index-62dad882.js";import{d as Ee}from"./index-ea9abee8.js";import{u as ze,b as J,_ as De,c as Pe,a as Le}from"./index-926393f1.js";import"./index-a59b997c.js";import"./index-48b82d81.js";import"./index-7646a58d.js";/* empty css               */const Z=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");function Me(){const{bindChildren:e,length:l,childProviders:o}=le(Z);return{length:l,indexAnchors:o,bindIndexAnchors:e}}function Oe(){const{parentProvider:e,index:l,bindParent:o}=ie(Z);return o||xe("IndexAnchor",'You should use this component in "IndexBar"'),{index:l,indexBar:e,bindIndexBar:o}}const Ve={index:[Number,String]},{n:Re,classes:Ue}=G("index-anchor"),He=F({name:"VarIndexAnchor",components:{VarSticky:re},inheritAttrs:!1,props:Ve,setup(e){const{index:l,indexBar:o,bindIndexBar:f}=Oe(),c=u(0),n=u(!1),i=k(()=>e.index),s=u(null),{active:S,sticky:N,cssMode:g,stickyOffsetTop:C,zIndex:a}=o;return f({index:l,name:i,ownTop:c,setOwnTop:()=>{s.value&&(c.value=s.value.$el?s.value.$el.offsetTop:s.value.offsetTop)},setDisabled:T=>{n.value=T}}),{n:Re,classes:Ue,name:i,anchorEl:s,active:S,sticky:N,zIndex:a,disabled:n,cssMode:g,stickyOffsetTop:C,Transition:ce}}});function Xe(e,l,o,f,c,n){return m(),de(fe(e.sticky?e.n("$-sticky"):e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:_(()=>[q("div",ue({class:e.n()},e.$attrs),[K(e.$slots,"default",{},()=>[$(v(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}const je=Y(He,[["render",Xe]]),Fe={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:Boolean,stickyCssMode:Boolean,hideList:Boolean,zIndex:{type:[Number,String],default:1},highlightColor:String,duration:{type:[Number,String],default:0},onClick:H(),onChange:H()},{n:Ye,classes:qe}=G("index-bar"),Ke=F({name:"VarIndexBar",props:Fe,setup(e){const{length:l,indexAnchors:o,bindIndexAnchors:f}=Me(),c=u(""),n=u(null),i=u([]),s=u(),S=k(()=>e.sticky),N=k(()=>e.stickyCssMode||e.cssMode),g=k(()=>$e(e.stickyOffsetTop)),C=k(()=>e.zIndex);let a=null,b=!1;f({active:s,sticky:S,cssMode:N,stickyOffsetTop:g,zIndex:C});const w=(t,r)=>{const d=be(t)?t.name.value:t;d===s.value||d===void 0||(s.value=d,(r==null?void 0:r.event)!==!1&&X(e.onChange,d))},T=()=>{if(ke(a))return 0;const{top:t}=U(a),{scrollTop:r}=a,{top:d}=U(n.value);return r-t+d},O=()=>{const t=we(a),r=a===window?document.body.scrollHeight:a.scrollHeight,d=T();o.forEach((p,x)=>{const E=p.ownTop.value,I=t-E+g.value-d,z=x===o.length-1?r:o[x+1].ownTop.value-p.ownTop.value;p.setDisabled(!0),I>=0&&I<z&&c.value===""&&(p.setDisabled(!1),w(p))})},A=async({anchorName:t,manualCall:r=!1,options:d})=>{if(r&&X(e.onClick,t),t===s.value&&!b)return;const p=o.find(({name:z})=>t===z.value);if(!p)return;const x=T(),E=p.ownTop.value-g.value+x,I=Se(a);c.value=t,w(t,d),await Ne(a,{left:I,top:E,animation:Be,duration:R(e.duration)}),await D(),c.value=""},te=async()=>{await D(),a=Ae(n.value)},oe=()=>{a.addEventListener("scroll",O)},V=()=>{a.removeEventListener("scroll",O)},ae=(t,r)=>{ge(()=>A({anchorName:t,options:r}))};return pe(()=>l.value,async()=>{await D(),o.forEach(({name:t,setOwnTop:r})=>{t.value&&i.value.push(t.value),r()})}),ve(async()=>{await te(),oe()}),me(V),he(()=>{b=!0,V()}),ye(()=>{!b||s.value===void 0||(A({anchorName:s.value,options:{event:!1}}),b=!1)}),{n:Ye,classes:qe,barEl:n,active:s,zIndex:C,anchorNameList:i,toNumber:R,scrollTo:ae,anchorClick:A}}});const We=["onClick"];function Qe(e,l,o,f,c,n){return m(),y("div",{class:P(e.n()),ref:"barEl"},[K(e.$slots,"default"),q("ul",{class:P(e.n("anchor-list")),style:M({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(m(!0),y(W,null,Q(e.anchorNameList,i=>(m(),y("li",{key:i,class:P(e.classes(e.n("anchor-item"),[e.active===i,e.n("anchor-item--active")])),style:M({color:e.active===i&&e.highlightColor?e.highlightColor:""}),onClick:s=>e.anchorClick({anchorName:i,manualCall:!0})},v(i),15,We))),128))],6)],2)}const ee=Y(Ke,[["render",Qe]]);Ie(ee);const Ge={title:"标题",text:"文本"},Je={title:"Title",text:"Text"},{add:se,use:Ze,pack:L,packs:ms,merge:hs}=ze(),es=e=>{Le(e),Ze(e)};J("zh-CN",De);J("en-US",Pe);se("zh-CN",Ge);se("en-US",Je);const ss={class:"index-bar-example-container"},ys={__name:"index",setup(e){const l=u([]),o=u("#e7edf7"),f=u("#2e67ba");_e(()=>{for(let n=0;n<26;n++)l.value.push(String.fromCharCode(65+n))});function c(n){console.log(n)}return Ce(es),Te(Ee,n=>{o.value=n==="darkTheme"?"rgb(41, 42, 45)":"#e7edf7",f.value=n==="darkTheme"?"#3980e8":"#2e67ba"}),(n,i)=>(m(),y("div",ss,[B(h(ee),{onChange:c,duration:"300"},{default:_(()=>[(m(!0),y(W,null,Q(l.value,s=>(m(),y("div",{key:s},[B(je,{index:s,class:"index-bar-example-anchor",style:M({background:o.value,color:f.value})},{default:_(()=>[$(v(h(L).title)+" "+v(s),1)]),_:2},1032,["index","style"]),B(h(j),null,{default:_(()=>[$(v(s)+" "+v(h(L).text),1)]),_:2},1024),B(h(j),null,{default:_(()=>[$(v(s)+" "+v(h(L).text),1)]),_:2},1024)]))),128))]),_:1})]))}};export{ys as default};
