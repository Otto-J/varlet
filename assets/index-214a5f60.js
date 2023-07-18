import{d as n,c as b,w as k}from"./logger-5f6a195b.js";import{a as z}from"./elements-030d765c.js";import{u as P}from"./usePopover-cf4dcc6f.js";import{d as H,_ as $,f as d,h as c,O as p,i as B,q as T,S as N,D as O,M as u,N as s,R as f,ah as V,P as A,Q as E,E as I,G as D,T as L}from"./vue-router-14238f57.js";function U(e){return["click","hover"].includes(e)}function R(e){return["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"].includes(e)}function W(e){return["default","primary","info","success","warning","danger"].includes(e)}const j={type:{type:String,default:"default",validator:W},color:{type:String},content:{type:String},show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trigger:{type:String,default:"hover",validator:U},reference:{type:String},placement:{type:String,default:"bottom",validator:R},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object],default:"body"},sameWidth:{type:Boolean,default:!1},closeOnClickReference:{type:Boolean,default:!1},onOpen:n(),onOpened:n(),onClose:n(),onClosed:n(),onClickOutside:n(),"onUpdate:show":n()},{n:q,classes:G}=b("tooltip"),Q=H({name:"VarTooltip",props:j,setup(e){const{popover:o,host:a,hostSize:l,show:r,zIndex:i,handleHostClick:t,handleHostMouseenter:v,handleHostMouseleave:h,handlePopoverMouseenter:m,handlePopoverMouseleave:y,handlePopoverClose:g,handleClosed:M,open:S,close:C,resize:w}=P(e);return{toSizeUnit:z,popover:o,host:a,hostSize:l,show:r,zIndex:i,n:q,classes:G,handleHostClick:t,handlePopoverClose:g,handleHostMouseenter:v,handleHostMouseleave:h,handlePopoverMouseenter:m,handlePopoverMouseleave:y,handleClosed:M,resize:w,open:S,close:C}}});function X(e,o,a,l,r,i){return d(),c("div",{ref:"host",class:s(e.classes(e.n(),e.n("$--box"))),onClick:o[3]||(o[3]=(...t)=>e.handleHostClick&&e.handleHostClick(...t)),onMouseenter:o[4]||(o[4]=(...t)=>e.handleHostMouseenter&&e.handleHostMouseenter(...t)),onMouseleave:o[5]||(o[5]=(...t)=>e.handleHostMouseleave&&e.handleHostMouseleave(...t))},[p(e.$slots,"default"),(d(),B(L,{to:e.teleport},[T(D,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.handleClosed},{default:N(()=>[O(u("div",{ref:"popover",class:s(e.classes(e.n("tooltip"),e.n("$--box"))),style:f({zIndex:e.zIndex}),onClick:o[0]||(o[0]=V(()=>{},["stop"])),onMouseenter:o[1]||(o[1]=(...t)=>e.handlePopoverMouseenter&&e.handlePopoverMouseenter(...t)),onMouseleave:o[2]||(o[2]=(...t)=>e.handlePopoverMouseleave&&e.handlePopoverMouseleave(...t))},[u("div",{style:f({background:e.color,width:e.sameWidth?e.toSizeUnit(Math.ceil(e.hostSize.width)):void 0}),class:s(e.classes(e.n("content-container"),e.n(`--${e.type}`)))},[p(e.$slots,"content",{},()=>[A(E(e.content),1)])],6)],38),[[I,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"]))],34)}const Y=$(Q,[["render",X]]);k(Y);export{Y as T};
