import{S as le}from"./index-b9202d9c.js";import{d as Y,a as u,b as k,G as re,_ as K,f as m,i as ie,S as _,M as j,m as ce,O as G,P as B,Q as v,aH as de,w as ue,e as fe,x as pe,v as ve,Z as R,V as me,au as he,h as y,F as Q,ai as W,N as P,R as O,o as ye,ac as ge,aE as be,q as $,ao as h}from"./vue-router-6d66666a.js";import{u as ke,e as _e,c as Z,d as H,g as xe,a as U}from"./logger-4bf9ea67.js";import{u as Ce}from"./useChildren-10daefc4.js";import{t as Te,k as Ie,c as $e,n as Be,v as Se,u as Ne,b as F,q as we,e as X,f as Ae}from"./elements-a6c01043.js";import{C as q}from"./index-e51dfeeb.js";import{d as Ee}from"./index-dd768cde.js";import{u as ze,a as J,_ as De,b as Pe,c as Le}from"./index-d24ba9ad.js";import"./index-a279bce5.js";import"./index-34f8623a.js";import"./index-fef5f544.js";/* empty css               */const ee=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");function Oe(){const{bindChildren:e,length:r,childProviders:o}=Ce(ee);return{length:r,indexAnchors:o,bindIndexAnchors:e}}function Me(){const{parentProvider:e,index:r,bindParent:o}=ke(ee);return o||_e("IndexAnchor",'You should use this component in "IndexBar"'),{index:r,indexBar:e,bindIndexBar:o}}const Ve={index:{type:[Number,String]}},{n:Re,classes:He}=Z("index-anchor"),Ue=Y({name:"VarIndexAnchor",components:{VarSticky:le},inheritAttrs:!1,props:Ve,setup(e){const{index:r,indexBar:o,bindIndexBar:f}=Me(),c=u(0),n=u(!1),i=k(()=>e.index),s=u(null),{active:N,sticky:w,cssMode:g,stickyOffsetTop:x,zIndex:a}=o;return f({index:r,name:i,ownTop:c,setOwnTop:()=>{s.value&&(c.value=s.value.$el?s.value.$el.offsetTop:s.value.offsetTop)},setDisabled:C=>{n.value=C}}),{n:Re,classes:He,name:i,anchorEl:s,active:N,sticky:w,zIndex:a,disabled:n,cssMode:g,stickyOffsetTop:x,Transition:re}}});function Fe(e,r,o,f,c,n){return m(),ie(de(e.sticky?e.n("$-sticky"):e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:_(()=>[j("div",ce({class:e.n()},e.$attrs),[G(e.$slots,"default",{},()=>[B(v(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}const Xe=K(Ue,[["render",Fe]]),qe={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:{type:Boolean,default:!1},stickyCssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:H(),onChange:H()},{n:Ye,classes:Ke}=Z("index-bar"),je=Y({name:"VarIndexBar",props:qe,setup(e){const{length:r,indexAnchors:o,bindIndexAnchors:f}=Oe(),c=u(""),n=u(null),i=u([]),s=u(),N=k(()=>e.sticky),w=k(()=>e.stickyCssMode||e.cssMode),g=k(()=>Te(e.stickyOffsetTop)),x=k(()=>e.zIndex);let a=null,b=!1;f({active:s,sticky:N,cssMode:w,stickyOffsetTop:g,zIndex:x});const A=(t,l)=>{const d=me(t)?t.name.value:t;d===s.value||d===void 0||(s.value=d,(l==null?void 0:l.event)!==!1&&U(e.onChange,d))},C=()=>{if(he(a))return 0;const{top:t}=F(a),{scrollTop:l}=a,{top:d}=F(n.value);return l-t+d},M=()=>{const t=we(a),l=a===window?document.body.scrollHeight:a.scrollHeight,d=C();o.forEach((p,T)=>{const z=p.ownTop.value,I=t-z+g.value-d,D=T===o.length-1?l:o[T+1].ownTop.value-p.ownTop.value;p.setDisabled(!0),I>=0&&I<D&&c.value===""&&(p.setDisabled(!1),A(p))})},E=async({anchorName:t,manualCall:l=!1,options:d})=>{if(l&&U(e.onClick,t),t===s.value&&!b)return;const p=o.find(({name:D})=>t===D.value);if(!p)return;const T=C(),z=p.ownTop.value-g.value+T,I=Ie(a);c.value=t,A(t,d),await $e(a,{left:I,top:z,animation:Be,duration:R(e.duration)}),Se(()=>{c.value=""})},te=async()=>{await X(),a=Ae(n.value)},oe=()=>{a.addEventListener("scroll",M)},V=()=>{a.removeEventListener("scroll",M)},ae=(t,l)=>{Ne(()=>E({anchorName:t,options:l}))};return ue(()=>r.value,async()=>{await X(),o.forEach(({name:t,setOwnTop:l})=>{t.value&&i.value.push(t.value),l()})}),xe(async()=>{await te(),oe()}),fe(V),pe(()=>{b=!0,V()}),ve(()=>{!b||s.value===void 0||(E({anchorName:s.value,options:{event:!1}}),b=!1)}),{n:Ye,classes:Ke,barEl:n,active:s,zIndex:x,anchorNameList:i,toNumber:R,scrollTo:ae,anchorClick:E}}});const Ge=["onClick"];function Qe(e,r,o,f,c,n){return m(),y("div",{class:P(e.n()),ref:"barEl"},[G(e.$slots,"default"),j("ul",{class:P(e.n("anchor-list")),style:O({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(m(!0),y(Q,null,W(e.anchorNameList,i=>(m(),y("li",{key:i,class:P(e.classes(e.n("anchor-item"),[e.active===i,e.n("anchor-item--active")])),style:O({color:e.active===i&&e.highlightColor?e.highlightColor:""}),onClick:s=>e.anchorClick({anchorName:i,manualCall:!0})},v(i),15,Ge))),128))],6)],2)}const S=K(je,[["render",Qe]]);S.install=function(e){e.component(S.name,S)};const We={title:"标题",text:"文本"},Ze={title:"Title",text:"Text"},{add:se,use:Je,pack:L,packs:vs,merge:ms}=ze(),es=e=>{Le(e),Je(e)};J("zh-CN",De);J("en-US",Pe);se("zh-CN",We);se("en-US",Ze);const ss={class:"index-bar-example-container"},hs={__name:"index",setup(e){const r=u([]),o=u("#e7edf7"),f=u("#2e67ba");ye(()=>{for(let n=0;n<26;n++)r.value.push(String.fromCharCode(65+n))});function c(n){console.log(n)}return ge(es),be(Ee,n=>{o.value=n==="darkTheme"?"rgb(41, 42, 45)":"#e7edf7",f.value=n==="darkTheme"?"#3980e8":"#2e67ba"}),(n,i)=>(m(),y("div",ss,[$(h(S),{onChange:c,duration:"300"},{default:_(()=>[(m(!0),y(Q,null,W(r.value,s=>(m(),y("div",{key:s},[$(Xe,{index:s,class:"index-bar-example-anchor",style:O({background:o.value,color:f.value})},{default:_(()=>[B(v(h(L).title)+" "+v(s),1)]),_:2},1032,["index","style"]),$(h(q),null,{default:_(()=>[B(v(s)+" "+v(h(L).text),1)]),_:2},1024),$(h(q),null,{default:_(()=>[B(v(s)+" "+v(h(L).text),1)]),_:2},1024)]))),128))]),_:1})]))}};export{hs as default};
