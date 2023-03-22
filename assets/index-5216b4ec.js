import{v as k}from"./index-c6939477.js";import{p as r,L as z}from"./index-1ddfa64f.js";import{H as N,u as S}from"./index-c7d7b5f9.js";import{v as O}from"./index-4b4d9cf6.js";import{p as d,d as b,u as P,f as V,c as H,a as h}from"./components-092ce17a.js";import{u as L}from"./useChildren-36e9566e.js";import{d as R,a as G,b as U,ax as D,_ as E,p as B,ag as C,D as w,f as T,h as A,i as I,N as u,j as K,M as Y,O as j,q,R as M}from"./vue-router.esm-bundler-1e250ce9.js";function F(e){return["default","primary","info","success","warning","danger"].includes(e)}function J(e){return["normal","mini","small","large"].includes(e)}function Q(e){return["button","reset","submit"].includes(e)}const W={type:{type:String,validator:F},nativeType:{type:String,default:"button",validator:Q},size:{type:String,validator:J},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},elevation:{type:[Boolean,Number,String],default:!0},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String]},loadingType:d(r,"type"),loadingSize:d(r,"size"),loadingColor:{...d(r,"color"),default:"currentColor"},onClick:b(),onTouchstart:b()},$=Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");function de(){const{bindChildren:e,childProviders:o,length:a}=L($);return{length:a,buttons:o,bindButtons:e}}function X(){const{bindParent:e,parentProvider:o,index:a}=P($);return{index:a,buttonGroup:o,bindButtonGroup:e}}const{n:Z,classes:_}=H("button"),x=R({name:"VarButton",components:{VarLoading:z,VarHoverOverlay:N},directives:{Ripple:k,Hover:O},props:W,setup(e){const o=G(!1),{buttonGroup:a}=X(),{hovering:p,handleHovering:f}=S(),c=U(()=>{if(!a)return{elevation:V(e.elevation,2),type:e.type!=null?e.type:"default",size:e.size!=null?e.size:"normal",color:e.color,text:e.text,textColor:e.textColor,outline:e.outline};const{type:n,size:t,color:i,textColor:l,mode:m}=a;return{elevation:"",type:e.type!=null?e.type:n.value,size:e.size!=null?e.size:t.value,color:e.color!=null?e.color:i.value,textColor:e.textColor!=null?e.textColor:l.value,text:m.value!=="normal",outline:m.value==="outline"}}),s=n=>{e.autoLoading&&(o.value=!0,n=D(n)?n:[n],Promise.all(n).then(()=>{o.value=!1}).catch(()=>{o.value=!1}))};return{n:Z,classes:_,pending:o,states:c,hovering:p,handleHovering:f,handleClick:n=>{const{loading:t,disabled:i,onClick:l}=e;!l||t||i||o.value||s(h(l,n))},handleTouchstart:n=>{const{loading:t,disabled:i,onTouchstart:l}=e;!l||t||i||o.value||s(h(l,n))}}}});const ee=["type","disabled"];function oe(e,o,a,p,f,c){const s=B("var-loading"),y=B("var-hover-overlay"),g=C("ripple"),n=C("hover");return w((T(),A("button",{class:u(e.classes(e.n(),e.n("$--box"),e.n(`--${e.states.size}`),[e.block,`${e.n("$--flex")} ${e.n("--block")}`,e.n("$--inline-flex")],[e.disabled,e.n("--disabled")],[e.states.text,`${e.n(`--text-${e.states.type}`)} ${e.n("--text")}`,`${e.n(`--${e.states.type}`)} ${e.states.elevation}`],[e.states.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.states.outline,e.n("--outline")])),style:M({color:e.states.textColor,background:e.states.color}),type:e.nativeType,disabled:e.disabled,onClick:o[0]||(o[0]=(...t)=>e.handleClick&&e.handleClick(...t)),onTouchstart:o[1]||(o[1]=(...t)=>e.handleTouchstart&&e.handleTouchstart(...t))},[e.loading||e.pending?(T(),I(s,{key:0,class:u(e.n("loading")),"var-button-cover":"",color:e.loadingColor,type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","color","type","size","radius"])):K("",!0),Y("div",{class:u(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[j(e.$slots,"default")],2),q(y,{hovering:e.hovering},null,8,["hovering"])],46,ee)),[[g,{disabled:e.disabled||!e.ripple}],[n,e.handleHovering,"desktop"]])}const v=E(x,[["render",oe]]);v.install=function(e){e.component(v.name,v)};export{v as B,F as t,de as u};
