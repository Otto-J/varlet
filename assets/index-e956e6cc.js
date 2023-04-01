import{p as U,S as x}from"./index-f63f5156.js";import{d as O,a as l,b as s,w as $,x as ee,E as te,X as ae,_ as j,f as q,i as oe,S as ie,M as z,N as B,O as F,R,m as ne,aH as se,ag as le,D as re,h as ce}from"./vue-router.esm-bundler-1e250ce9.js";import{p as W,d as P,i as de,f as ue,c as G,a as h,u as fe}from"./components-092ce17a.js";import{l as X}from"./shared-ed6496a2.js";import{a as ve,d as me,b as K}from"./elements-9ac6e693.js";import{v as be}from"./index-4a101be0.js";import{e as ye}from"./logger-525ef361.js";import{u as pe}from"./useChildren-36e9566e.js";function Z(e){return["horizontal","vertical"].includes(e)}function Ce(e){return["auto","always"].includes(e)}function he(e){return["normal","reverse"].includes(e)}const $e={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:Z},itemDirection:{type:String,default:"horizontal",validator:Z},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto",validator:Ce},indicatorPosition:{type:String,default:"normal",validator:he},safeArea:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyCssMode:W(U,"cssMode"),stickyZIndex:W(U,"zIndex"),offsetTop:W(U,"offsetTop"),onClick:P(),onChange:P(),"onUpdate:active":P()},J=Symbol("TABS_BIND_TAB_KEY");function Se(){const{childProviders:e,bindChildren:o,length:n}=pe(J);return{length:n,tabList:e,bindTabList:o}}const{n:ke,classes:ge}=G("tabs"),Te=O({name:"VarTabs",components:{VarSticky:x},inheritAttrs:!1,props:$e,setup(e){const o=l("0px"),n=l("0px"),d=l("0px"),u=l("0px"),i=l(!1),f=l(null),b=s(()=>e.active),w=s(()=>e.indicatorPosition==="reverse"?"-reverse":""),y=s(()=>e.activeColor),S=s(()=>e.inactiveColor),k=s(()=>e.disabledColor),E=s(()=>e.itemDirection),p=l(null),{tabList:v,bindTabList:g,length:r}=Se(),N=a=>{const t=a.name.value??a.index.value,{active:m,onChange:C,onClick:_}=e;h(e["onUpdate:active"],t),h(_,t),t!==m&&h(C,t)},A=()=>v.find(({name:a})=>e.active===a.value),T=a=>v.find(({index:t})=>(a??e.active)===t.value),L=()=>{if(r.value===0)return;const{active:a}=e;if(ae(a)){const t=a>r.value-1?r.value-1:0;return h(e["onUpdate:active"],t),T(t)}},I=()=>{i.value=e.scrollable==="always"||v.length>=5},V=({element:a})=>{const t=a.value;t&&(e.layoutDirection==="horizontal"?(o.value=`${t.offsetWidth}px`,d.value=`${t.offsetLeft}px`):(n.value=`${t.offsetHeight}px`,u.value=`${t.offsetTop}px`))},H=({element:a})=>{if(!i.value)return;const t=f.value,m=a.value;if(e.layoutDirection==="horizontal"){const C=m.offsetLeft+m.offsetWidth/2-t.offsetWidth/2;K(t,{left:C,animation:X})}else{const C=m.offsetTop+m.offsetHeight/2-t.offsetHeight/2;K(t,{top:C,animation:X})}},c=()=>{const a=A()||T()||L();!a||a.disabled.value||(I(),V(a),H(a))},Q=async()=>{e.sticky&&p.value&&await p.value.resize()};return g({active:b,activeColor:y,inactiveColor:S,disabledColor:k,itemDirection:E,resize:c,onTabClick:N}),$(()=>r.value,async()=>{await me(),c()}),$(()=>e.active,c),$(()=>e.scrollable,c),de(window,"resize",c),ee(c),{stickyComponent:p,indicatorWidth:o,indicatorHeight:n,indicatorX:d,indicatorY:u,indicatorPosition:w,localScrollable:i,scrollerEl:f,Transition:te,toSizeUnit:ve,n:ke,classes:ge,resize:c,resizeSticky:Q,formatElevation:ue}}});function ze(e,o,n,d,u,i){return q(),oe(se(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:ie(()=>[z("div",ne({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[z("div",{ref:"scrollerEl",class:B(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[F(e.$slots,"default"),z("div",{class:B(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),style:R({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`})},[z("div",{class:B(e.classes(e.n("indicator-inner"),e.n(`--layout-${e.layoutDirection}-indicator-inner`))),style:R({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}const Y=j(Te,[["render",ze]]);Y.install=function(e){e.component(Y.name,Y)};const De={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:P()};function Be(){const{parentProvider:e,bindParent:o,index:n}=fe(J);return o||ye("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:o}}const{n:D,classes:Pe}=G("tab"),we=O({name:"VarTab",directives:{Ripple:be},props:De,setup(e){const o=l(null),n=s(()=>e.name),d=s(()=>e.disabled),u=s(()=>o.value),{index:i,tabs:f,bindTabs:b}=Be(),{onTabClick:w,active:y,activeColor:S,inactiveColor:k,disabledColor:E,itemDirection:p,resize:v}=f,g={name:n,index:i,disabled:d,element:u};b(g);const r=()=>e.name!=null&&y.value===e.name||y.value===(i==null?void 0:i.value),N=()=>e.disabled?E.value:r()?S.value:k.value,A=()=>e.disabled?D("$-tab--disabled"):r()?D("$-tab--active"):D("$-tab--inactive"),T=L=>{const{disabled:I,name:V,onClick:H}=e;I||(h(H,V??i.value,L),w(g))};return $(()=>e.name,v),$(()=>e.disabled,v),{n:D,classes:Pe,tabEl:o,active:y,activeColor:S,inactiveColor:k,itemDirection:p,computeColorStyle:N,computeColorClass:A,handleClick:T}}});function Ee(e,o,n,d,u,i){const f=le("ripple");return re((q(),ce("div",{class:B(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:R({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...b)=>e.handleClick&&e.handleClick(...b))},[F(e.$slots,"default")],6)),[[f,{disabled:e.disabled}]])}const M=j(we,[["render",Ee]]);M.install=function(e){e.component(M.name,M)};export{Y as T,M as a};
