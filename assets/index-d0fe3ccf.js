import{B as h}from"./index-488b41db.js";import{I as _}from"./index-a59b997c.js";import{d as y,c as B,a as C,w as N}from"./components-c1e1aae1.js";import{d as T,r as c,o as w,a8 as L,aI as E,aP as $,_ as I,b as p,e as m,f as P,m as V,s as U,p as l,w as v,aq as M,L as z,as as A,aj as j,l as u,M as D,N as H,U as f,P as O,Q as q}from"./index-e8376e61.js";import{e as F}from"./shared-52b0bced.js";import{a as Q,c as G,s as J,d as K,g as R,e as W,t as X}from"./elements-4558e7ec.js";import{C as Y}from"./index-62dad882.js";import{d as Z}from"./index-ea9abee8.js";import"./index-48b82d81.js";import"./index-7646a58d.js";/* empty css               */import"./index-f8d05da5.js";import"./index-a002b329.js";import"./index-9698d333.js";import"./logger-525ef361.js";const x={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:[Number,String],elevation:{type:[Boolean,Number,String],default:!0},bottom:[Number,String],target:[String,Object],onClick:y()},{n:ee,classes:te}=B("back-top"),oe=T({name:"VarBackTop",components:{VarButton:h,VarIcon:_},inheritAttrs:!1,props:x,setup(e){const o=c(!1),a=c(null),r=c(!0);let t;const d=k=>{C(e.onClick,k);const S=G(t);J(t,{left:S,duration:e.duration,animation:F})},s=$(()=>{o.value=W(t)>=X(e.visibilityHeight)},200),i=()=>{t=e.target?K(e.target,"BackTop"):R(a.value)},n=()=>{t.addEventListener("scroll",s)},g=()=>{t.removeEventListener("scroll",s)};return w(()=>{i(),n(),r.value=!1}),L(n),E(g),{disabled:r,show:o,backTopEl:a,toSizeUnit:Q,n:ee,classes:te,handleClick:d}}});function ae(e,o,a,r,t,d){const s=p("var-icon"),i=p("var-button");return m(),P(A,{to:"body",disabled:e.disabled},[V("div",M({class:e.classes(e.n(),[e.show,e.n("--active")]),ref:"backTopEl",style:{right:e.toSizeUnit(e.right),bottom:e.toSizeUnit(e.bottom)}},e.$attrs,{onClick:o[0]||(o[0]=z((...n)=>e.handleClick&&e.handleClick(...n),["stop"]))}),[U(e.$slots,"default",{},()=>[l(i,{elevation:e.elevation,type:"primary",round:"","var-back-top-cover":""},{default:v(()=>[l(s,{name:"chevron-up"})]),_:1},8,["elevation"])])],16)],8,["disabled"])}const b=I(oe,[["render",ae]]);N(b);const Se={__name:"index",setup(e){const o=[...Array(100).keys()];return j(Z),(a,r)=>(m(),u("div",null,[(m(),u(D,null,H(o,t=>l(f(Y),{key:t},{default:v(()=>[O("Scroll to bottom "+q(t),1)]),_:2},1024)),64)),l(f(b),{duration:300})]))}};export{Se as default};
