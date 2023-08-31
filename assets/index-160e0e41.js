import{d as C,a as $,b as m,Z as f,w as N,V as h,_ as y,f as j,h as O,O as k,N as w,R as P}from"./vue-router-40fc6ea4.js";import{d as z,u as v,a as S,c as R,w as B}from"./components-08e741bd.js";import{a as F}from"./index-b42187f1.js";import{a as I,p as L}from"./elements-da0a4dab.js";const U={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row"},justify:String,align:String,xs:[Object,Number,String],sm:[Object,Number,String],md:[Object,Number,String],lg:[Object,Number,String],xl:[Object,Number,String],onClick:z()};function D(){const{parentProvider:e,index:n,bindParent:i}=v(F);return{index:n,row:e,bindRow:i}}const{n:r,classes:E}=R("col"),V=C({name:"VarCol",props:U,setup(e){const n=$({left:0,right:0}),i=m(()=>f(e.span)),d=m(()=>f(e.offset)),{row:o,bindRow:p}=D(),l={setPadding(s){n.value=s}},b=(s,t)=>{const a=[];if(t==null)return a;if(h(t)){const{offset:u,span:g}=t;Number(g)>=0&&a.push(r(`--span-${s}-${g}`)),u&&a.push(r(`--offset-${s}-${u}`))}else Number(t)>=0&&a.push(r(`--span-${s}-${t}`));return a},c=s=>{S(e.onClick,s)};return N([()=>e.span,()=>e.offset],()=>{o==null||o.computePadding()}),S(p,l),{n:r,classes:E,padding:n,toNumber:f,toSizeUnit:I,getSize:b,span:i,offset:d,handleClick:c,padStartFlex:L}}});function K(e,n,i,d,o,p){return j(),O("div",{class:w(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:P({flexDirection:e.direction,justifyContent:e.padStartFlex(e.justify),alignItems:e.padStartFlex(e.align),paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[k(e.$slots,"default")],6)}const W=y(V,[["render",K]]);B(W);export{W as C};
