import{p as y,I as k}from"./index-136c3567.js";import{p as b,d as g,c as B,a as N,w as S}from"./components-08e741bd.js";import{d as v,b as c,_ as V,p as z,f as p,i as I,S as w,M as d,m as P,O as r,N as m,h as T,q as j,j as q,G as A}from"./vue-router-40fc6ea4.js";const E={type:{type:String,default:"default"},size:{type:String,default:"normal"},color:String,textColor:String,iconName:b(y,"name"),plain:Boolean,round:{type:Boolean,default:!0},block:Boolean,closable:Boolean,onClose:g()},{n:s,classes:G}=B("chip"),L=v({name:"VarChip",components:{VarIcon:k},inheritAttrs:!1,props:E,setup(e){const l=c(()=>{const{plain:n,textColor:a,color:o}=e;return n?{color:a||o,borderColor:o}:{color:a,background:o}}),i=c(()=>{const{size:n,block:a,type:o,plain:t,round:C}=e,f=s(a?"$--flex":"$--inline-flex"),$=t?`${s("plain")} ${s(`plain-${o}`)}`:s(`--${o}`),h=C?s("--round"):null;return[s(`--${n}`),f,$,h]});return{n:s,classes:G,chipStyles:l,contentClass:i,handleClose:n=>{N(e.onClose,n)}}}});function M(e,l,i,u,n,a){const o=z("var-icon");return p(),I(A,{name:e.n("$-fade")},{default:w(()=>[d("span",P({class:e.classes(e.n(),e.n("$--box"),...e.contentClass),style:e.chipStyles},e.$attrs),[r(e.$slots,"left"),d("span",{class:m(e.n(`text-${e.size}`))},[r(e.$slots,"default")],2),r(e.$slots,"right"),e.closable?(p(),T("span",{key:0,class:m(e.n("--close")),onClick:l[0]||(l[0]=(...t)=>e.handleClose&&e.handleClose(...t))},[j(o,{name:`${e.iconName?e.iconName:"close-circle"}`},null,8,["name"])],2)):q("",!0)],16)]),_:3},8,["name"])}const O=V(L,[["render",M]]);S(O);export{O as C};
