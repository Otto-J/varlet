import{d as n,g as k,c as z,w as P}from"./logger-9a144f5d.js";import{a as B}from"./elements-1fb47fa1.js";import{u as H}from"./usePopover-d6a9cdbb.js";import{d as T,_ as $,f as d,h as N,O as p,i as O,q as D,S as A,D as E,M as u,N as t,R as f,ag as I,P as V,Q as L,E as U,G as R,T as W}from"./vue-router-547718df.js";const j={type:{type:String,default:"default"},color:String,content:String,show:Boolean,disabled:Boolean,trigger:{type:String,default:"hover"},reference:String,placement:{type:String,default:"bottom"},strategy:{type:String,default:"absolute"},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object,Boolean],default:"body"},sameWidth:Boolean,closeOnClickReference:Boolean,onOpen:n(),onOpened:n(),onClose:n(),onClosed:n(),onClickOutside:n(),"onUpdate:show":n()},{n:q,classes:G}=z("tooltip"),Q=T({name:"VarTooltip",props:j,setup(e){const{disabled:o}=k(),{popover:a,host:l,hostSize:r,show:i,zIndex:s,handleHostClick:v,handleHostMouseenter:h,handleHostMouseleave:m,handlePopoverMouseenter:M,handlePopoverMouseleave:S,handlePopoverClose:g,handleClosed:y,open:b,close:C,resize:w}=H(e);return{toSizeUnit:B,popover:a,host:l,hostSize:r,show:i,zIndex:s,teleportDisabled:o,n:q,classes:G,handleHostClick:v,handlePopoverClose:g,handleHostMouseenter:h,handleHostMouseleave:m,handlePopoverMouseenter:M,handlePopoverMouseleave:S,handleClosed:y,resize:w,open:b,close:C}}});function X(e,o,a,l,r,i){return d(),N("div",{ref:"host",class:t(e.classes(e.n(),e.n("$--box"))),onClick:o[3]||(o[3]=(...s)=>e.handleHostClick&&e.handleHostClick(...s)),onMouseenter:o[4]||(o[4]=(...s)=>e.handleHostMouseenter&&e.handleHostMouseenter(...s)),onMouseleave:o[5]||(o[5]=(...s)=>e.handleHostMouseleave&&e.handleHostMouseleave(...s))},[p(e.$slots,"default"),(d(),O(W,{to:e.teleport===!1?void 0:e.teleport,disabled:e.teleportDisabled||e.teleport===!1},[D(R,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.handleClosed},{default:A(()=>[E(u("div",{ref:"popover",class:t(e.classes(e.n("tooltip"),e.n("$--box"))),style:f({zIndex:e.zIndex}),onClick:o[0]||(o[0]=I(()=>{},["stop"])),onMouseenter:o[1]||(o[1]=(...s)=>e.handlePopoverMouseenter&&e.handlePopoverMouseenter(...s)),onMouseleave:o[2]||(o[2]=(...s)=>e.handlePopoverMouseleave&&e.handlePopoverMouseleave(...s))},[u("div",{style:f({background:e.color,width:e.sameWidth?e.toSizeUnit(Math.ceil(e.hostSize.width)):void 0}),class:t(e.classes(e.n("content-container"),e.n(`--${e.type}`)))},[p(e.$slots,"content",{},()=>[V(L(e.content),1)])],6)],38),[[U,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"]))],34)}const Y=$(Q,[["render",X]]);P(Y);export{Y as T};
