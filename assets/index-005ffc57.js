import{d as n,f as C,c as b}from"./logger-577c0317.js";import{u as k}from"./usePopover-1bb2a066.js";import{a as c}from"./elements-dde26fa0.js";import{d as w,_ as z,f as i,h as B,O as u,i as H,q as P,S as N,D as O,M as E,R as $,N as p,ah as V,E as A,G as I,T as L}from"./vue-router-60af08e5.js";function T(e){return["click","hover"].includes(e)}function U(e){return["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end","cover-top","cover-top-start","cover-top-end","cover-bottom","cover-bottom-start","cover-bottom-end","cover-left","cover-right"].includes(e)}const D={show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trigger:{type:String,default:"click",validator:T},reference:{type:String},placement:{type:String,default:"cover-top-start",validator:U},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object],default:"body"},sameWidth:{type:Boolean,default:!1},elevation:{type:[Boolean,String,Number],default:!0},defaultStyle:{type:Boolean,default:!0},closeOnClickReference:{type:Boolean,default:!1},onOpen:n(),onOpened:n(),onClose:n(),onClosed:n(),onClickOutside:n(),"onUpdate:show":n()},{n:R,classes:W}=b("menu"),j=w({name:"VarMenu",props:D,setup(e){const{popover:o,host:a,hostSize:r,show:l,zIndex:d,handleHostClick:t,handleHostMouseenter:f,handleHostMouseleave:v,handlePopoverMouseenter:m,handlePopoverMouseleave:h,handlePopoverClose:M,open:y,close:S,resize:g}=k(e);return{popover:o,host:a,hostSize:r,show:l,zIndex:d,formatElevation:C,toSizeUnit:c,n:R,classes:W,handleHostClick:t,handleHostMouseenter:f,handleHostMouseleave:v,handlePopoverMouseenter:m,handlePopoverMouseleave:h,handlePopoverClose:M,resize:g,open:y,close:S}}});function q(e,o,a,r,l,d){return i(),B("div",{ref:"host",class:p(e.n()),onClick:o[3]||(o[3]=(...t)=>e.handleHostClick&&e.handleHostClick(...t)),onMouseenter:o[4]||(o[4]=(...t)=>e.handleHostMouseenter&&e.handleHostMouseenter(...t)),onMouseleave:o[5]||(o[5]=(...t)=>e.handleHostMouseleave&&e.handleHostMouseleave(...t))},[u(e.$slots,"default"),(i(),H(L,{to:e.teleport},[P(I,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:N(()=>[O(E("div",{ref:"popover",style:$({zIndex:e.zIndex,width:e.sameWidth?e.toSizeUnit(Math.ceil(e.hostSize.width)):void 0}),class:p(e.classes(e.n("menu"),[e.defaultStyle,e.n("--menu-background-color")],[e.defaultStyle,e.formatElevation(e.elevation,3)])),onClick:o[0]||(o[0]=V(()=>{},["stop"])),onMouseenter:o[1]||(o[1]=(...t)=>e.handlePopoverMouseenter&&e.handlePopoverMouseenter(...t)),onMouseleave:o[2]||(o[2]=(...t)=>e.handlePopoverMouseleave&&e.handlePopoverMouseleave(...t))},[u(e.$slots,"menu")],38),[[A,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"]))],34)}const s=z(j,[["render",q]]);s.install=function(e){e.component(s.name,s)};export{s as M};
