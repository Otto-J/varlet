import{T as u}from"./index-214a5f60.js";import{c,w as m}from"./logger-5f6a195b.js";import{d as f,a as g,b as s,_ as C,p as k,f as i,i as y,S as r,O as o,h,Q as v,M as S,N as T,R as $,aL as b,aM as B}from"./vue-router-14238f57.js";function E(e){return["click"].includes(e)}const w={expandTrigger:{type:String,validator:E},lineClamp:{type:[Number,String]},tooltip:{type:[Object,Boolean],default:!0}},{n:N,classes:V}=c("ellipsis"),z=f({name:"VarEllipsis",components:{VarTooltip:u},props:w,setup(e){const t=g(!1),a=s(()=>e.lineClamp?{"-webkit-line-clamp":e.lineClamp}:{}),l=s(()=>e.tooltip===!1?{disabled:!0}:e.tooltip===!0?{sameWidth:!0}:{sameWidth:!0,...e.tooltip});return{n:N,classes:V,tooltip:l,expanding:t,rootStyles:a,handleClick:()=>{e.expandTrigger&&(t.value=!t.value)}}}});const M={key:0};function O(e,t,a,l,p,R){const d=k("var-tooltip");return i(),y(d,b(B(e.tooltip)),{content:r(()=>[o(e.$slots,"tooltip-content",{},()=>{var n;return[(n=e.tooltip)!=null&&n.content?(i(),h("span",M,v(e.tooltip.content),1)):o(e.$slots,"default",{key:1})]})]),default:r(()=>[S("span",{class:T(e.classes(e.n(),[e.lineClamp,e.n("--clamp"),e.n("--line")],[e.expandTrigger,e.n("--cursor")],[e.expanding,e.n("--expand")])),style:$(e.rootStyles),onClick:t[0]||(t[0]=(...n)=>e.handleClick&&e.handleClick(...n))},[o(e.$slots,"default")],6)]),_:3},16)}const P=C(z,[["render",O]]);m(P);export{P as E};
