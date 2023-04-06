import{d as C,a as $,b as g,w as N,Z as d,V as h,_ as j,f as v,h as O,O as k,N as w,R as P}from"./vue-router-fb57fd33.js";import{d as z,u as R,a as S,c as V}from"./components-dc0ced43.js";import{a as B}from"./index-695205c2.js";import{a as F,p as L}from"./elements-0d8daba2.js";function U(e){return["row","column"].includes(e)}function D(e){return["start","end","center","space-around","space-between","flex-start","flex-end"].includes(e)}function E(e){return["stretch","center","start","end","baseline","initial","inherit","flex-start","flex-end"].includes(e)}const I={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:U},justify:{type:String,validator:D},align:{type:String,validator:E},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]},onClick:z()};function K(){const{parentProvider:e,index:n,bindParent:i}=R(B);return{index:n,row:e,bindRow:i}}const{n:o,classes:W}=V("col"),Y=C({name:"VarCol",props:I,setup(e){const n=$({left:0,right:0}),i=g(()=>d(e.span)),u=g(()=>d(e.offset)),{row:r,bindRow:p}=K(),l={setPadding(t){n.value=t}},b=(t,s)=>{const a=[];if(s==null)return a;if(h(s)){const{offset:m,span:c}=s;Number(c)>=0&&a.push(o(`--span-${t}-${c}`)),m&&a.push(o(`--offset-${t}-${m}`))}else Number(s)>=0&&a.push(o(`--span-${t}-${s}`));return a},y=t=>{S(e.onClick,t)};return N([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),S(p,l),{n:o,classes:W,padding:n,toNumber:d,toSizeUnit:F,getSize:b,span:i,offset:u,handleClick:y,padStartFlex:L}}});function Z(e,n,i,u,r,p){return v(),O("div",{class:w(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:P({flexDirection:e.direction,justifyContent:e.padStartFlex(e.justify),alignItems:e.padStartFlex(e.align),paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[k(e.$slots,"default")],6)}const f=j(Y,[["render",Z]]);f.install=function(e){e.component(f.name,f)};export{f as C};
