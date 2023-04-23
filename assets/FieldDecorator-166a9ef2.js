import{I as T}from"./index-3b8d7366.js";import{d as w,i as P,c as W,a as F}from"./components-06013557.js";import{d as N,a as m,b as L,aM as j,aI as v,n as B,_ as q,p as O,f as r,h as u,M as a,N as l,O as b,R as p,Q as M,j as C,i as Q,F as R}from"./vue-router-bbc73976.js";function Y(e){return["small","normal"].includes(e)}function A(e){return["outlined","standard"].includes(e)}const G={value:{type:null,required:!0},id:{type:String,default:""},isFocus:{type:Boolean},size:{type:String,default:"normal",validator:Y},variant:{type:String,default:"standard",validator:A},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},errorMessage:{type:String},formDisabled:{type:Boolean},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},cursor:{type:String},composing:{type:Boolean,default:!1},alwaysCustomPlaceholder:{type:Boolean,default:!0},onClick:w(),onClear:w()},{n:k,classes:H}=W("field-decorator"),J=N({name:"VarFieldDecorator",components:{VarIcon:T},props:G,setup(e){const o=m(null),c=m(null),f=m(""),h=m(""),S=L(()=>e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor),y=()=>{const{hint:s,value:n,isFocus:i,composing:d}=e;if(!s&&(!v(n)||d))return k("--placeholder-hidden");if(s&&(!v(n)||i))return k("--placeholder-hint")},g=()=>{const{size:s,placeholder:n}=e;B().then(()=>{var t;if(!c.value||!n){f.value="0";return}const i=(t=window.getComputedStyle(c.value))==null?void 0:t.width,d=`var(--field-decorator-outlined-${s}-placeholder-space)`;f.value=`calc(${i} * 0.75 + 2 * ${d})`})},D=()=>{const{hint:s,value:n,isFocus:i,variant:d}=e;B().then(()=>{var t;if(o.value)if(s&&(!v(n)||i)){const V=((t=window.getComputedStyle(o.value))==null?void 0:t.width)||"0",I=d==="outlined"?"-50%":"0";h.value=`translate(-${V}, ${I}) scale(0.75)`}else h.value=""})},$=()=>{g(),D()},E=s=>{F(e.onClear,s)},z=s=>{F(e.onClick,s)};return j($),P(()=>window,"resize",$),{prependIconEl:o,placeholderTextEl:c,placeholderTransform:h,color:S,legendWidth:f,computePlaceholderState:y,n:k,classes:H,isEmpty:v,handleClear:E,handleClick:z}}});const K=["for"];function U(e,o,c,f,h,S){const y=O("var-icon");return r(),u("div",{class:l(e.classes(e.n(),e.n("$--box"),e.n(`--${e.variant}`),[e.size==="small",e.n("--small")],[e.disabled,e.n("--disabled")])),onClick:o[0]||(o[0]=(...g)=>e.handleClick&&e.handleClick(...g))},[a("div",{class:l(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:p({color:e.color,cursor:e.cursor})},[a("div",{class:l(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")])),ref:"prependIconEl"},[b(e.$slots,"prepend-icon")],2),a("div",{class:l(e.classes(e.n("wrap"),[!e.hint,e.n("--wrap-non-hint")]))},[b(e.$slots,"default"),e.hint||e.alwaysCustomPlaceholder?(r(),u("label",{key:0,class:l(e.classes(e.n("placeholder"),e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],e.computePlaceholderState())),style:p({transform:e.placeholderTransform,color:e.color}),for:e.id},[a("span",{class:l(e.n("placeholder-text")),ref:"placeholderTextEl"},M(e.placeholder),3)],14,K)):C("",!0)],2),a("div",{class:l(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[e.clearable&&!e.isEmpty(e.value)?(r(),Q(y,{key:0,class:l(e.n("clear-icon")),"var-field-decorator-cover":"",name:"close-circle",onClick:e.handleClear},null,8,["class","onClick"])):C("",!0),b(e.$slots,"append-icon")],2)],6),e.line?(r(),u(R,{key:0},[e.variant==="outlined"?(r(),u("fieldset",{key:0,class:l(e.classes(e.n("line"),e.n("$--box"),[e.isFocus,e.n("--line-focus")],[e.errorMessage,e.n("--line-error")],[e.formDisabled||e.disabled,e.n("--line-disabled")]))},[a("legend",{class:l(e.classes(e.n("line-legend"),[e.hint&&(!e.isEmpty(e.value)||e.isFocus),e.n("line-legend--hint")])),style:p({width:e.legendWidth})},[a("span",{class:l(e.n("line-legend-placeholder"))},M(e.placeholder),3)],6)],2)):(r(),u("div",{key:1,class:l(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:p({background:e.errorMessage?void 0:e.blurColor})},[a("div",{class:l(e.classes(e.n("dot"),[e.isFocus,e.n("--line-focus")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:p({background:e.errorMessage?void 0:e.focusColor})},null,6)],6))],64)):C("",!0)],2)}const x=q(J,[["render",U]]);export{x as V,G as p};
