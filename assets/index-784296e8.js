import{aw as x,X as I,W as N,d as A,q as $}from"./vue-router.esm-bundler-6d3911e1.js";import{b as B,g as C,c as F}from"./components-1cb7d034.js";import{p as g,a as d}from"./elements-c1df6f47.js";/* empty css               */const S=e=>["mini","small","normal","large"].includes(e),W=e=>S(e)||x(e)||I(e)||N(e),q=e=>["start","end","center","space-around","space-between","flex-start","flex-end"].includes(e),z=e=>["stretch","center","start","end","baseline","flex-start","flex-end"].includes(e),D={size:{type:[String,Number,Array],default:"normal",validator:W},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"flex-start",validator:q},align:{type:String,validator:z},inline:{type:Boolean,default:!1}};function t(e){return`calc(${e} / 2)`}function M(e,s,c){const{direction:a,justify:r,index:i,lastIndex:l}=c;let n="0";return a==="row"&&(["flex-start","center","flex-end","start","end"].includes(r)?i!==l?n=`${t(e)} ${s} ${t(e)} 0`:n=`${t(e)} 0`:r==="space-around"?n=`${t(e)} ${t(s)}`:r==="space-between"&&(i===0?n=`${t(e)} ${t(s)} ${t(e)} 0`:i===l?n=`${t(e)} 0 ${t(e)} ${t(s)}`:n=`${t(e)} ${t(s)}`)),a==="column"&&i!==l&&(n=`0 0 ${e} 0`),n}const{n:f,classes:U}=F("space"),p=A({name:"VarSpace",props:D,setup(e,{slots:s}){const c=(a,r)=>r?[`var(--space-size-${a}-y)`,`var(--space-size-${a}-x)`]:x(a)?a.map(d):[d(a),d(a)];return()=>{const{inline:a,justify:r,align:i,wrap:l,direction:n,size:u}=e;let o=B(s.default)??[];const w=S(u),[m,y]=c(u,w);o=C(o);const b=o.length-1,v=o.map((V,j)=>{const h=M(m,y,{direction:n,justify:r,index:j,lastIndex:b});return $("div",{style:{margin:h}},[V])});return $("div",{class:U(f(),f("$--box"),[a,f("--inline")]),style:{flexDirection:n,justifyContent:g(r),alignItems:g(i),flexWrap:l?"wrap":"nowrap",margin:n==="row"?`calc(-1 * ${m} / 2) 0`:void 0}},[v])}}});p.install=function(e){e.component(p.name,p)};export{p as S};
