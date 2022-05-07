import{p as M,S as q}from"./index.5cbdfc6a.js";import{d as F,a as v,b as l,w as D,i as Q,z as Z,P as _,_ as K,o as O,e as x,O as ee,E as N,G as U,H as R,J as X,m as te,am as ae,aa as oe,C as ne,f as ie}from"./elevation.ded31914.js";import{p as se,j as le,l as re,c as G,a as z,i as ce,G as H,h as de,m as ue}from"./components.be4fa7b1.js";import{t as ve,e as V,i as fe}from"./elements.e37f6779.js";import{R as be}from"./index.47b7a69f.js";function W(e){return["horizontal","vertical"].includes(e)}const me={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:W},itemDirection:{type:String,default:"horizontal",validator:W},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},offsetTop:se(M,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}},I=Symbol("TABS_BIND_TAB_KEY"),j=Symbol("TABS_COUNT_TAB_KEY");function ye(){const{childProviders:e,bindChildren:o}=le(I),{length:i}=re(j);return{length:i,tabList:e,bindTabList:o}}const{n:pe,classes:he}=G("tabs"),Ce=F({name:"VarTabs",components:{VarSticky:q},inheritAttrs:!1,props:me,setup(e){const o=v("0px"),i=v("0px"),f=v("0px"),b=v("0px"),n=v(!1),m=v(null),p=l(()=>e.active),k=l(()=>e.activeColor),r=l(()=>e.inactiveColor),S=l(()=>e.disabledColor),$=l(()=>e.itemDirection),{tabList:h,bindTabList:A,length:c}=ye(),g=a=>{var Y;const t=(Y=a.name.value)!=null?Y:a.index.value,{active:y,onChange:T,onClick:J}=e;z(e["onUpdate:active"],t),z(J,t),t!==y&&z(T,t)},w=()=>h.find(({name:a})=>e.active===a.value),B=a=>h.find(({index:t})=>(a!=null?a:e.active)===t.value),E=()=>{if(c.value===0)return;const{active:a}=e;if(ce(a)){const t=a>c.value-1?c.value-1:0;return z(e["onUpdate:active"],t),B(t)}},d=()=>{n.value=h.length>=5},u=({element:a})=>{const t=a.value;e.layoutDirection==="horizontal"?(o.value=`${t==null?void 0:t.offsetWidth}px`,f.value=`${t==null?void 0:t.offsetLeft}px`):(i.value=`${t==null?void 0:t.offsetHeight}px`,b.value=`${t==null?void 0:t.offsetTop}px`)},C=({element:a})=>{if(!n.value)return;const t=m.value,y=a.value;if(e.layoutDirection==="horizontal"){const T=y.offsetLeft+y.offsetWidth/2-t.offsetWidth/2;V(t,{left:T,animation:H})}else{const T=y.offsetTop+y.offsetHeight/2-t.offsetHeight/2;V(t,{top:T,animation:H})}},s=()=>{const a=w()||B()||E();!a||a.disabled.value||(d(),u(a),C(a))};return A({active:p,activeColor:k,inactiveColor:r,disabledColor:S,itemDirection:$,resize:s,onTabClick:g}),D(()=>c.value,async()=>{await fe(),s()}),D(()=>e.active,s),Q(()=>window.addEventListener("resize",s)),Z(()=>window.removeEventListener("resize",s)),{indicatorWidth:o,indicatorHeight:i,indicatorX:f,indicatorY:b,scrollable:n,scrollerEl:m,Transition:_,toSizeUnit:ve,n:pe,classes:he,resize:s}}});function Te(e,o,i,f,b,n){return O(),x(ae(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.offsetTop:null},{default:ee(()=>[N("div",te({class:e.classes(e.n(),"var--box",e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),[e.elevation,"var-elevation--4"],[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[N("div",{ref:"scrollerEl",class:U(e.classes(e.n("tab-wrap"),[e.scrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[R(e.$slots,"default"),N("div",{class:U(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}-indicator`))),style:X({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`,background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}var P=K(Ce,[["render",Te]]);P.install=function(e){e.component(P.name,P)};const Se={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}};function $e(){const{parentProvider:e,bindParent:o}=de(I),{index:i}=ue(j);if(!e||!o||!i)throw Error("<var-tab/> must in <var-tabs/>");return{index:i,tabs:e,bindTabs:o}}const{n:ge,classes:Be}=G("tab"),ze=F({name:"VarTab",directives:{Ripple:be},props:Se,setup(e){const o=v(null),i=l(()=>e.name),f=l(()=>e.disabled),b=l(()=>o.value),{index:n,tabs:m,bindTabs:p}=$e(),{onTabClick:k,active:r,activeColor:S,inactiveColor:$,disabledColor:h,itemDirection:A,resize:c}=m,g={name:i,index:n,disabled:f,element:b};p(g);const w=()=>{const{disabled:d,name:u}=e;return d?h.value:r.value===u||r.value===(n==null?void 0:n.value)?S.value:$.value},B=()=>{const{disabled:d,name:u}=e;return d?"var-tab--disabled":r.value===u||r.value===(n==null?void 0:n.value)?"var-tab--active":"var-tab--inactive"},E=d=>{const{disabled:u,name:C,onClick:s}=e;u||(s==null||s(C!=null?C:n.value,d),k(g))};return D(()=>e.name,c),D(()=>e.disabled,c),{n:ge,classes:Be,tabEl:o,active:r,activeColor:S,inactiveColor:$,itemDirection:A,computeColorStyle:w,computeColorClass:B,handleClick:E}}});function De(e,o,i,f,b,n){const m=oe("ripple");return ne((O(),ie("div",{class:U(e.classes(e.n(),"var--box",e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:X({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...p)=>e.handleClick&&e.handleClick(...p))},[R(e.$slots,"default")],6)),[[m,{disabled:e.disabled}]])}var L=K(ze,[["render",De]]);L.install=function(e){e.component(L.name,L)};export{P as T,L as a};
