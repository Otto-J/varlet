import{I as q}from"./index-a62a9e1d.js";import{g as R,e as V,d as G}from"./elements-e4756970.js";import{d as D,c as H,a as $,w as J}from"./components-1514d07f.js";import{d as K,r as l,B as h,ac as W,F as X,ap as Z,a5 as x,af as ee,a9 as ae,a1 as g,n as te,_ as M,b as se,e as p,l as O,m as oe,p as le,t as w,v as ne,s as re,ah as ue,f as P,w as B,U as E,N as ce,P as ie,Q as de,M as ve}from"./index-c1c53a77.js";import{C as me}from"./index-717ae8ab.js";import{d as fe}from"./index-ea9abee8.js";import"./logger-525ef361.js";import"./index-a9719fda.js";import"./index-66aea09a.js";/* empty css               */const he={modelValue:Boolean,disabled:Boolean,animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:String,successBgColor:String,color:String,successColor:String,target:[String,Object],onRefresh:D(),"onUpdate:modelValue":D()},{n:L,classes:ge}=H("pull-refresh"),Y=150,pe=K({name:"VarPullRefresh",components:{VarIcon:q},props:he,setup(e){const t=l(0),v=l(null),i=l(null),d=l(0),s=l("-125%"),n=l("arrow-down"),a=l("default"),r=l(!1);let u,m,y=0,S=0;const b=async o=>{if(n.value!==o)return n.value=o,new Promise(c=>{window.setTimeout(c,Y)})},I=h(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),U=h(()=>({transform:`translate3d(0px, ${W(s.value)?s.value:`${s.value}px`}, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:T.value?e.successBgColor:e.bgColor,color:T.value?e.successColor:e.color})),f=h(()=>Math.abs(2*t.value)),T=h(()=>a.value==="success"),N=o=>{("classList"in u?u:document.body).classList[o](`${L()}--lock`)},z=o=>{if(t.value===0){const{width:c}=ee(i.value);t.value=-(c+c*.25)}y=o.touches[0].clientY,S=0,m=R(o.target)},C=o=>{if(!I.value||!m||m!==u&&V(m)>0)return;const c=V(u);if(c>0)return;const _=c===0;S=o.touches[0].clientY-y,_&&S>=0&&o.preventDefault(),a.value!=="pulling"&&(a.value="pulling",d.value=o.touches[0].clientY),_&&ae(s.value)&&s.value>t.value&&N("add");const k=(o.touches[0].clientY-d.value)/2+t.value;s.value=k>=f.value?f.value:k,b(s.value>=f.value*.2?"refresh":"arrow-down")},F=async()=>{I.value&&(r.value=!0,g(s.value)>=f.value*.2?(await b("refresh"),a.value="loading",s.value=f.value*.3,$(e["onUpdate:modelValue"],!0),te(()=>{$(e.onRefresh)}),N("remove")):(a.value="loosing",n.value="arrow-down",s.value=t.value,setTimeout(()=>{r.value=!1,N("remove")},g(e.animationDuration))),m=null)},j=()=>{u=e.target?G(e.target,"PullRefresh"):R(v.value)},Q=()=>{setTimeout(()=>{a.value="default",n.value="arrow-down",r.value=!1},g(e.animationDuration))};return X(()=>e.modelValue,o=>{o===!1&&(r.value=!0,a.value="success",n.value="checkbox-marked-circle",setTimeout(()=>{s.value=t.value,Q()},g(e.successDuration)))}),Z(j),x(v,"touchmove",C),{n:L,classes:ge,ICON_TRANSITION:Y,refreshStatus:a,freshNode:v,controlNode:i,touchStart:z,touchMove:C,touchEnd:F,iconName:n,controlStyle:U,isSuccess:T}}});function Se(e,t,v,i,d,s){const n=se("var-icon");return p(),O("div",{ref:"freshNode",class:w(e.n()),onTouchstart:t[0]||(t[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchend:t[1]||(t[1]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:t[2]||(t[2]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[oe("div",{ref:"controlNode",class:w(e.classes(e.n("control"),e.n("$-elevation--2"),[e.isSuccess,e.n("control-success")])),style:ne(e.controlStyle)},[le(n,{name:e.iconName,transition:e.ICON_TRANSITION,class:w(e.classes(e.n("icon"),[e.refreshStatus==="loading",e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),re(e.$slots,"default")],34)}const A=M(pe,[["render",Se]]);J(A);const Te={__name:"index",setup(e){const t=Array(30).fill("List Item"),v=Array(30).fill("This is new List Item"),i=l(!1),d=l(t);function s(){setTimeout(()=>{d.value=d.value[0]==="List Item"?v:t,i.value=!1},2e3)}return ue(fe),(n,a)=>(p(),P(E(A),{onRefresh:s,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=r=>i.value=r),"success-duration":"2000"},{default:B(()=>[(p(!0),O(ve,null,ce(d.value,(r,u)=>(p(),P(E(me),{key:u,border:""},{default:B(()=>[ie(de(r+" "+(u+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},$e=M(Te,[["__scopeId","data-v-6f15a34c"]]);export{$e as default};
