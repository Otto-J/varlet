import{v as k}from"./index-82d28c5f.js";import{v}from"./index-2786a634.js";import{d as s,c as S,a as i}from"./components-dc0ced43.js";import{a as L}from"./elements-0d8daba2.js";import{d as C,_ as E,ag as g,D as u,f as d,h as p,N as y,R as m}from"./vue-router-fb57fd33.js";function b(e){return["fill","contain","cover","none","scale-down"].includes(e)}const c={src:{type:String},fit:{type:String,validator:b,default:"fill"},alt:{type:String},title:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:s(),onLoad:s(),onError:s()},{n:$,classes:w}=S("image"),B=C({name:"VarImage",directives:{Lazy:v,Ripple:k},props:c,setup(e){return{n:$,classes:w,toSizeUnit:L,handleLoad:n=>{const o=n.currentTarget,{lazy:a,onLoad:t,onError:l}=e;a?(o._lazy.state==="success"&&i(t,n),o._lazy.state==="error"&&i(l,n)):i(t,n)},handleError:n=>{const{lazy:o,onError:a}=e;!o&&i(a,n)},handleClick:n=>{i(e.onClick,n)}}}});const N=["alt","title","lazy-error","lazy-loading"],I=["alt","title","src"];function U(e,r,h,z,n,o){const a=g("lazy"),t=g("ripple");return u((d(),p("div",{class:y(e.classes(e.n(),e.n("$--box"),[!e.block,e.n("$--inline-block")])),style:m({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?u((d(),p("img",{key:0,class:y(e.n("image")),alt:e.alt,title:e.title,"lazy-error":e.error,"lazy-loading":e.loading,style:m({objectFit:e.fit}),onLoad:r[0]||(r[0]=(...l)=>e.handleLoad&&e.handleLoad(...l)),onError:r[1]||(r[1]=(...l)=>e.handleError&&e.handleError(...l)),onClick:r[2]||(r[2]=(...l)=>e.handleClick&&e.handleClick(...l))},null,46,N)),[[a,e.src]]):(d(),p("img",{key:1,class:y(e.n("image")),alt:e.alt,title:e.title,style:m({objectFit:e.fit}),src:e.src,onLoad:r[3]||(r[3]=(...l)=>e.handleLoad&&e.handleLoad(...l)),onError:r[4]||(r[4]=(...l)=>e.handleError&&e.handleError(...l)),onClick:r[5]||(r[5]=(...l)=>e.handleClick&&e.handleClick(...l))},null,46,I))],6)),[[t,{disabled:!e.ripple}]])}const f=E(B,[["render",U]]);f.install=function(e){e.component(f.name,f)};export{f as I};
