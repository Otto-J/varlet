import{p as U,S as x}from"./index-a1c72ffe.js";import{d as G,a as l,b as s,w as $,v as ee,G as te,X as ae,aI as oe,_ as O,f as j,i as ie,S as ne,M as z,m as se,N as B,O as q,R as M,aH as le,ag as re,D as ce,h as de}from"./vue-router-7db650a3.js";import{p as W,d as P,f as ue,c as F,a as h,u as fe,e as ve}from"./logger-259930a0.js";import{a as me,c as X,l as K,e as be}from"./elements-52ad1f2f.js";import{u as ye}from"./useWindowResize-5ff7d75f.js";import{v as pe}from"./index-8506fb9f.js";import{u as Ce}from"./useChildren-52535654.js";function Z(e){return["horizontal","vertical"].includes(e)}function he(e){return["auto","always"].includes(e)}function $e(e){return["normal","reverse"].includes(e)}const Se={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:Z},itemDirection:{type:String,default:"horizontal",validator:Z},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto",validator:he},indicatorPosition:{type:String,default:"normal",validator:$e},safeArea:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyCssMode:W(U,"cssMode"),stickyZIndex:W(U,"zIndex"),offsetTop:W(U,"offsetTop"),onClick:P(),onChange:P(),"onUpdate:active":P()},J=Symbol("TABS_BIND_TAB_KEY");function ke(){const{childProviders:e,bindChildren:o,length:n}=Ce(J);return{length:n,tabList:e,bindTabList:o}}const{n:ge,classes:Te}=F("tabs"),ze=G({name:"VarTabs",components:{VarSticky:x},inheritAttrs:!1,props:Se,setup(e){const o=l("0px"),n=l("0px"),c=l("0px"),d=l("0px"),i=l(!1),u=l(null),b=s(()=>e.active),w=s(()=>e.indicatorPosition==="reverse"?"-reverse":""),y=s(()=>e.activeColor),S=s(()=>e.inactiveColor),k=s(()=>e.disabledColor),N=s(()=>e.itemDirection),p=l(null),{tabList:f,bindTabList:g,length:v}=ke(),A=a=>{const t=a.name.value??a.index.value,{active:m,onChange:C,onClick:_}=e;h(e["onUpdate:active"],t),h(_,t),t!==m&&h(C,t)},E=()=>f.find(({name:a})=>e.active===a.value),T=a=>f.find(({index:t})=>(a??e.active)===t.value),I=()=>{if(v.value===0)return;const{active:a}=e;if(ae(a)){const t=oe(a,0,v.value-1);return h(e["onUpdate:active"],t),T(t)}},L=()=>{i.value=e.scrollable==="always"||f.length>=5},V=({element:a})=>{const t=a.value;t&&(e.layoutDirection==="horizontal"?(o.value=`${t.offsetWidth}px`,c.value=`${t.offsetLeft}px`):(n.value=`${t.offsetHeight}px`,d.value=`${t.offsetTop}px`))},H=({element:a})=>{if(!i.value)return;const t=u.value,m=a.value;if(e.layoutDirection==="horizontal"){const C=m.offsetLeft+m.offsetWidth/2-t.offsetWidth/2;X(t,{left:C,animation:K})}else{const C=m.offsetTop+m.offsetHeight/2-t.offsetHeight/2;X(t,{top:C,animation:K})}},r=()=>{const a=E()||T()||I();!a||a.disabled.value||(L(),V(a),H(a))},Q=async()=>{e.sticky&&p.value&&await p.value.resize()};return g({active:b,activeColor:y,inactiveColor:S,disabledColor:k,itemDirection:N,resize:r,onTabClick:A}),$(()=>v.value,async()=>{await be(),r()}),$(()=>e.active,r),$(()=>e.scrollable,r),ee(r),ye(r),{stickyComponent:p,indicatorWidth:o,indicatorHeight:n,indicatorX:c,indicatorY:d,indicatorPosition:w,localScrollable:i,scrollerEl:u,Transition:te,toSizeUnit:me,n:ge,classes:Te,resize:r,resizeSticky:Q,formatElevation:ue}}});function De(e,o,n,c,d,i){return j(),ie(le(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:ne(()=>[z("div",se({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[z("div",{ref:"scrollerEl",class:B(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[q(e.$slots,"default"),z("div",{class:B(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),style:M({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`})},[z("div",{class:B(e.classes(e.n("indicator-inner"),e.n(`--layout-${e.layoutDirection}-indicator-inner`))),style:M({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}const R=O(ze,[["render",De]]);R.install=function(e){e.component(R.name,R)};const Be={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:P()};function Pe(){const{parentProvider:e,bindParent:o,index:n}=fe(J);return o||ve("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:o}}const{n:D,classes:we}=F("tab"),Ne=G({name:"VarTab",directives:{Ripple:pe},props:Be,setup(e){const o=l(null),n=s(()=>e.name),c=s(()=>e.disabled),d=s(()=>o.value),{index:i,tabs:u,bindTabs:b}=Pe(),{onTabClick:w,active:y,activeColor:S,inactiveColor:k,disabledColor:N,itemDirection:p,resize:f}=u,g={name:n,index:i,disabled:c,element:d};b(g);const v=()=>e.name!=null?y.value===e.name:y.value===(i==null?void 0:i.value),A=()=>e.disabled?N.value:v()?S.value:k.value,E=()=>e.disabled?D("$-tab--disabled"):v()?D("$-tab--active"):D("$-tab--inactive"),T=I=>{const{disabled:L,name:V,onClick:H}=e;L||(h(H,V??i.value,I),w(g))};return $(()=>e.name,f),$(()=>e.disabled,f),{n:D,classes:we,tabEl:o,active:y,activeColor:S,inactiveColor:k,itemDirection:p,computeColorStyle:A,computeColorClass:E,handleClick:T}}});function Ae(e,o,n,c,d,i){const u=re("ripple");return ce((j(),de("div",{class:B(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:M({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...b)=>e.handleClick&&e.handleClick(...b))},[q(e.$slots,"default")],6)),[[u,{disabled:e.disabled}]])}const Y=O(Ne,[["render",Ae]]);Y.install=function(e){e.component(Y.name,Y)};export{R as T,Y as a};
