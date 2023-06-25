import{d as n,c as k}from"./logger-577c0317.js";import{a as w}from"./elements-dde26fa0.js";import{u as b}from"./usePopover-1bb2a066.js";import{d as z,_ as P,f as p,h as H,O as u,i as B,q as T,S as N,D as O,M as f,N as s,R as v,ah as V,P as $,Q as A,E,G as D,T as I}from"./vue-router-60af08e5.js";function L(e){return["click","hover"].includes(e)}function U(e){return["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"].includes(e)}function R(e){return["default","primary","info","success","warning","danger"].includes(e)}const W={type:{type:String,default:"default",validator:R},color:{type:String},content:{type:String},show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trigger:{type:String,default:"hover",validator:L},reference:{type:String},placement:{type:String,default:"bottom",validator:U},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object],default:"body"},sameWidth:{type:Boolean,default:!1},closeOnClickReference:{type:Boolean,default:!1},onOpen:n(),onOpened:n(),onClose:n(),onClosed:n(),onClickOutside:n(),"onUpdate:show":n()},{n:j,classes:q}=k("tooltip"),G=z({name:"VarTooltip",props:W,setup(e){const{popover:o,host:r,hostSize:l,show:i,zIndex:d,handleHostClick:t,handleHostMouseenter:m,handleHostMouseleave:h,handlePopoverMouseenter:y,handlePopoverMouseleave:g,handlePopoverClose:M,open:S,close:C,resize:c}=b(e);return{toSizeUnit:w,popover:o,host:r,hostSize:l,show:i,zIndex:d,n:j,classes:q,handleHostClick:t,handlePopoverClose:M,handleHostMouseenter:m,handleHostMouseleave:h,handlePopoverMouseenter:y,handlePopoverMouseleave:g,resize:c,open:S,close:C}}});function Q(e,o,r,l,i,d){return p(),H("div",{ref:"host",class:s(e.n()),onClick:o[3]||(o[3]=(...t)=>e.handleHostClick&&e.handleHostClick(...t)),onMouseenter:o[4]||(o[4]=(...t)=>e.handleHostMouseenter&&e.handleHostMouseenter(...t)),onMouseleave:o[5]||(o[5]=(...t)=>e.handleHostMouseleave&&e.handleHostMouseleave(...t))},[u(e.$slots,"default"),(p(),B(I,{to:e.teleport},[T(D,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:N(()=>[O(f("div",{ref:"popover",class:s(e.n("tooltip")),style:v({zIndex:e.zIndex}),onClick:o[0]||(o[0]=V(()=>{},["stop"])),onMouseenter:o[1]||(o[1]=(...t)=>e.handlePopoverMouseenter&&e.handlePopoverMouseenter(...t)),onMouseleave:o[2]||(o[2]=(...t)=>e.handlePopoverMouseleave&&e.handlePopoverMouseleave(...t))},[f("div",{style:v({background:e.color,width:e.sameWidth?e.toSizeUnit(Math.ceil(e.hostSize.width)):void 0}),class:s(e.classes(e.n("content-container"),e.n(`--${e.type}`)))},[u(e.$slots,"content",{},()=>[$(A(e.content),1)])],6)],38),[[E,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"]))],34)}const a=P(G,[["render",Q]]);a.install=function(e){e.component(a.name,a)};export{a as T};
