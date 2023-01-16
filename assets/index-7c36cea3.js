import{d as $,i as ie,f as y,c as ce}from"./components-bbfed807.js";import{F as de,u as me}from"./provide-7df0657e.js";import{m as fe,j as ve}from"./elements-b756947f.js";import{d as be,a as U,r as he,b as k,Z as s,at as d,X as B,w as K,o as ge,n as Ve,_ as Se,p as ye,f as W,h as E,M as f,N as c,R as F,F as ke,ai as Fe,ah as Y,O as Ne,Q as Ce,q as Te}from"./vue-router.esm-bundler-596ad174.js";function pe(e){return["always","normal","never"].includes(e)}var r=(e=>(e.First="1",e.Second="2",e))(r||{});const Pe={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:pe},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},max:{type:[String,Number],default:100},min:{type:[String,Number],default:0},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:$(),onStart:$(),onEnd:$(),"onUpdate:modelValue":$()},{n:x,classes:we}=ce("slider"),ze=be({name:"VarSlider",components:{VarFormDetails:de},props:Pe,setup(e){const{bindForm:T,form:v}=me(),{errorMessage:I,validateWithTrigger:X,validate:H,resetValidation:p}=ie(),o=()=>H(e.rules,e.modelValue),m=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),_=()=>Ve(()=>X(["onChange"],"onChange",e.rules,e.modelValue)),M=U(null),b=U(0),P=U(!1),l=he({[r.First]:m(),[r.Second]:m()}),D=k(()=>s(e.max)-s(e.min)),h=k(()=>b.value/D.value*s(e.step)),ee=k(()=>{const{modelValue:t,range:a}=e;let n=[];return a&&d(t)?n=[{value:V(t[0]),enumValue:r.First,text:C(t[0])},{value:V(t[1]),enumValue:r.Second,text:C(t[1])}]:B(t)&&(n=[{value:V(t),enumValue:r.First,text:C(t)}]),n}),te=k(()=>{const{activeColor:t,range:a,modelValue:n}=e,u=a&&d(n)?V(Math.min(n[0],n[1])):0;return{width:`${a&&d(n)?V(Math.max(n[0],n[1]))-u:V(n)}%`,left:`${u}%`,background:t}}),N=k(()=>e.disabled||(v==null?void 0:v.disabled.value)),w=k(()=>e.readonly||(v==null?void 0:v.readonly.value)),ae=t=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:l[t].active,V=t=>{const{min:a,max:n}=e;return t<s(a)?0:t>s(n)?100:(t-s(a))/D.value*100},C=t=>{if(!B(t))return 0;let a=t;return a<Number(e.min)&&(a=Number(e.min)),a>Number(e.max)&&(a=Number(e.max)),parseInt(`${a}`,10)===a?a:s(a.toPrecision(5))},R=(t,a)=>{let n=[];const{step:u,range:i,modelValue:g,onChange:z,min:S}=e,Z=s(u),G=Math.round(t/h.value),L=G*Z+s(S),oe=l[a].percentValue*Z+s(S);if(l[a].percentValue=G,i&&d(g)&&(n=a===r.First?[L,g[1]]:[g[0],L]),oe!==L){const J=i?n.map(ue=>C(ue)):C(L);y(z,J),y(e["onUpdate:modelValue"],J),_()}},ne=t=>{if(!e.range)return r.First;const a=l[r.First].percentValue*h.value,n=l[r.Second].percentValue*h.value,u=Math.abs(t-a),i=Math.abs(t-n);return u<=i?r.First:r.Second},le=(t,a)=>{b.value||(b.value=M.value.offsetWidth),!(N.value||w.value)&&(y(e.onStart),P.value=!0,l[a].startPosition=t.touches[0].clientX)},re=(t,a)=>{if(N.value||w.value||!P.value)return;let n=t.touches[0].clientX-l[a].startPosition+l[a].currentLeft;l[a].active=!0,n<=0?n=0:n>=b.value&&(n=b.value),R(n,a)},j=t=>{const{range:a,modelValue:n,onEnd:u,step:i,min:g}=e;if(N.value||w.value)return;let z=[];l[t].currentLeft=l[t].percentValue*h.value,l[t].active=!1;const S=l[t].percentValue*s(i)+s(g);a&&d(n)&&(z=t===r.First?[S,n[1]]:[n[0],S]),y(u,a?z:S),P.value=!1},se=t=>{if(N.value||w.value||t.target.closest(`.${x("thumb")}`))return;const a=t.clientX-ve(t.currentTarget),n=ne(a);R(a,n),j(n)},q=()=>{const t=s(e.step);return isNaN(t)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):t<0?(console.warn('[Varlet] Slider: "step" should be > 0'),!1):!0},O=()=>{const{range:t,modelValue:a}=e;return t&&!d(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!t&&d(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):t&&d(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},Q=(t=e.modelValue,a=s(e.step))=>{const n=u=>{const{min:i,max:g}=e;return u<s(i)?0:u>s(g)?D.value/a:(u-s(i))/a};e.range&&d(t)?(l[r.First].percentValue=n(t[0]),l[r.First].currentLeft=l[r.First].percentValue*h.value,l[r.Second].percentValue=n(t[1]),l[r.Second].currentLeft=l[r.Second].percentValue*h.value):B(t)&&(l[r.First].currentLeft=n(t)*h.value)};return y(T,{reset:()=>{const t=e.range?[0,0]:0;y(e["onUpdate:modelValue"],t),p()},validate:o,resetValidation:p}),K([()=>e.modelValue,()=>e.step],([t,a])=>{!q()||!O()||P.value||Q(t,s(a))}),K(b,()=>Q()),ge(()=>{!q()||!O()||(b.value=M.value.offsetWidth)}),{n:x,classes:we,Thumbs:r,sliderEl:M,getFillStyle:te,isDisabled:N,errorMessage:I,thumbsProps:l,thumbList:ee,multiplySizeUnit:fe,toNumber:s,showLabel:ae,start:le,move:re,end:j,click:se}}});const Le=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function $e(e,T,v,I,X,H){const p=ye("var-form-details");return W(),E("div",{class:c(e.n())},[f("div",{class:c(e.classes(e.n("block"),[e.isDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")])),ref:"sliderEl",onClick:T[0]||(T[0]=(...o)=>e.click&&e.click(...o))},[f("div",{class:c(e.n("track"))},[f("div",{class:c(e.n("track-background")),style:F({background:e.trackColor,height:e.multiplySizeUnit(e.trackHeight)})},null,6),f("div",{class:c(e.n("track-fill")),style:F(e.getFillStyle)},null,6)],2),(W(!0),E(ke,null,Fe(e.thumbList,o=>(W(),E("div",{class:c(e.n("thumb")),key:o.enumValue,style:F({left:`${o.value}%`,zIndex:e.thumbsProps[o.enumValue].active?1:void 0}),onTouchstart:Y(m=>e.start(m,o.enumValue),["stop"]),onTouchmove:Y(m=>e.move(m,o.enumValue),["stop"]),onTouchend:m=>e.end(o.enumValue),onTouchcancel:m=>e.end(o.enumValue)},[Ne(e.$slots,"button",{currentValue:o.text},()=>[f("div",{class:c(e.n("thumb-block")),style:F({background:e.thumbColor})},null,6),f("div",{class:c(e.classes(e.n("thumb-ripple"),[e.thumbsProps[o.enumValue].active,e.n("thumb-ripple--active")])),style:F({background:e.thumbColor})},null,6),f("div",{class:c(e.classes(e.n("thumb-label"),[e.showLabel(o.enumValue),e.n("thumb-label--active")])),style:F({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2),width:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2)})},[f("span",null,Ce(o.text),1)],6)])],46,Le))),128))],2),Te(p,{"error-message":e.errorMessage,class:c(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}const A=Se(ze,[["render",$e]]);A.install=function(e){e.component(A.name,A)};export{A as S};
