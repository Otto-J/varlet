import{u as p,e as l,c as m,w as c}from"./logger-5f6a195b.js";import{S as d}from"./provide-94f14f3a.js";import{d as w,a as u,_ as f,f as v,h as S,O as _,N as I,R as $}from"./vue-router-14238f57.js";function P(){const{bindParent:e,index:s,parentProvider:t}=p(d);return e||l("SwipeItem","<var-swipe-item/> must in <var-swipe/>"),{index:s,swipe:t,bindSwipe:e}}const{n:h}=m("swipe-item"),z=w({name:"VarSwipeItem",setup(){const e=u(0),{swipe:s,bindSwipe:t,index:a}=P(),{size:i,vertical:r}=s;return t({index:a,setTranslate:o=>{e.value=o}}),{n:h,size:i,vertical:r,translate:e}}});function E(e,s,t,a,i,r){return v(),S("div",{class:I(e.n()),style:$({width:e.vertical?void 0:`${e.size}px`,height:e.vertical?`${e.size}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[_(e.$slots,"default")],6)}const n=f(z,[["render",E]]);n.install=function(e){e.component(n.name,n)};c(n);export{n as S};
