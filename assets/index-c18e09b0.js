import{I as j}from"./index-136c3567.js";import{F as q,u as A}from"./provide-704f51ba.js";import{v as E}from"./index-5abe00b9.js";import{H as X,u as Z}from"./index-0e8f005f.js";import{v as G}from"./index-e47ee3d4.js";import{d as B,j as J,a as p,c as K,w as Q}from"./components-08e741bd.js";import{a as D}from"./elements-da0a4dab.js";import{d as Y,a as x,Z as c,n as ee,_ as ae,p as C,af as z,f as S,h as V,M as oe,F as re,ah as ne,D as te,R as F,N as f,q as H}from"./vue-router-40fc6ea4.js";const le={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:String,icon:{type:String,default:"star"},emptyColor:String,emptyIcon:{type:String,default:"star-outline"},size:[String,Number],gap:[String,Number],namespace:String,half:Boolean,halfIcon:{type:String,default:"star-half-full"},disabled:Boolean,disabledColor:String,readonly:Boolean,ripple:{type:Boolean,default:!0},clearable:Boolean,rules:Array,onChange:B(),"onUpdate:modelValue":B()},{n:u}=K("rate"),se=Y({name:"VarRate",components:{VarIcon:j,VarFormDetails:q,VarHoverOverlay:X},directives:{Ripple:E,Hover:G},props:le,setup(e){const{form:a,bindForm:N}=A(),{errorMessage:y,validateWithTrigger:R,validate:_,resetValidation:s}=J(),{hovering:m}=Z(),v=x(-1);let g=Number(e.modelValue);const h=o=>{const{count:r,gap:n}=e;return{color:i(o).color,marginRight:o!==c(r)?D(n):0}},t=o=>{const{name:r,color:n}=i(o);return{[u("content")]:!0,[u("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[u("--error")]:y.value,[u("--primary")]:r!==e.emptyIcon&&!n}},i=o=>{const{modelValue:r,disabled:n,disabledColor:l,color:d,half:O,emptyColor:P,icon:T,halfIcon:W,emptyIcon:L}=e;let b=d;return(n||a!=null&&a.disabled.value)&&(b=l),o<=c(r)?{color:b,name:T}:O&&o<=c(r)+.5?{color:b,name:W}:{color:n||a!=null&&a.disabled.value?l:P,name:L}},U=(o,r)=>{const{half:n,clearable:l}=e,{offsetWidth:d}=r.target;n&&r.offsetX<=Math.floor(d/2)&&(o-=.5),g===o&&l&&(o=0),g=o,p(e["onUpdate:modelValue"],o)},k=()=>_(e.rules,c(e.modelValue)),w=()=>ee(()=>R(["onChange"],"onChange",e.rules,e.modelValue)),M=(o,r)=>{const{readonly:n,disabled:l,onChange:d}=e;n||l||a!=null&&a.disabled.value||a!=null&&a.readonly.value||(U(o,r),p(d,o),w())},$=o=>r=>{v.value=o,m.value=r},I=()=>{p(e["onUpdate:modelValue"],0),s()};return p(N,{reset:I,validate:k,resetValidation:s}),{errorMessage:y,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:h,getClass:t,getCurrentState:i,handleClick:M,hovering:m,currentHoveringValue:v,createHoverHandler:$,reset:I,validate:k,resetValidation:s,toSizeUnit:D,toNumber:c,n:u}}});const ie=["onClick"];function de(e,a,N,y,R,_){const s=C("var-icon"),m=C("var-hover-overlay"),v=C("var-form-details"),g=z("ripple"),h=z("hover");return S(),V("div",{class:f(e.n("wrap"))},[oe("div",{class:f(e.n())},[(S(!0),V(re,null,ne(e.toNumber(e.count),t=>te((S(),V("div",{key:t,style:F(e.getStyle(t)),class:f(e.getClass(t)),onClick:i=>e.handleClick(t,i)},[H(s,{class:f(e.n("content-icon")),"var-rate-cover":"",transition:0,namespace:e.namespace,name:e.getCurrentState(t).name,style:F({fontSize:e.toSizeUnit(e.size)})},null,8,["class","namespace","name","style"]),H(m,{hovering:e.hovering&&t===e.currentHoveringValue&&!e.disabled&&!e.formDisabled},null,8,["hovering"])],14,ie)),[[g,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}],[h,e.createHoverHandler(t),"desktop"]])),128))],2),H(v,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const ce=ae(se,[["render",de]]);Q(ce);export{ce as R};
