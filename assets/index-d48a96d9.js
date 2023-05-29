import{I as ue}from"./index-a279bce5.js";import{M as ce}from"./index-7a8416b9.js";import{C as me}from"./index-bd78bdf6.js";import{p as ve,V as fe}from"./FieldDecorator-7ff0c52a.js";import{F as pe,u as be}from"./provide-a5cc776e.js";import{d as ye,a as h,b as V,aI as z,w as P,n as Ce,aA as he,_ as Ve,p as g,f as c,h as f,q as S,S as p,M as T,N as d,O as F,aJ as ge,aK as Fe,R as ke,F as Q,ai as Me,i as we,ah as G,P as Se,Q as U,j as Be}from"./vue-router-6d66666a.js";import{d as b,p as $e,l as De,a as t,c as Ae,e as Ee}from"./logger-4bf9ea67.js";import{u as Ne}from"./index-5fb9b7cb.js";import{t as H}from"./elements-a6c01043.js";function ze(e){return["left","right","center"].includes(e)}const Pe={modelValue:{default:void 0},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:ze},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:b(),onBlur:b(),onClose:b(),onChange:b(),onClear:b(),"onUpdate:modelValue":b(),...$e(ve,["size","variant","placeholder","line","hint","textColor","focusColor","blurColor","disabled","clearable","onClick"])},{n:Te,classes:Ue}=Ae("select"),Le=ye({name:"VarSelect",components:{VarIcon:ue,VarMenu:ce,VarChip:me,VarFieldDecorator:fe,VarFormDetails:pe},props:Pe,setup(e){const n=h(!1),O=V(()=>e.multiple),Y=V(()=>e.focusColor),k=h(""),B=h([]),$=V(()=>z(e.modelValue)),D=V(()=>e.disabled||e.readonly?"":"pointer"),y=h(0),{bindForm:A,form:l}=be(),{length:i,options:m,bindOptions:X}=Ne(),{errorMessage:Z,validateWithTrigger:_,validate:x,resetValidation:E}=De(),ee=h(null),le=V(()=>e.variant==="outlined"?"bottom-start":"cover-top-start"),I=()=>{const{multiple:o,modelValue:a}=e;if(o){const s=a;B.value=s.map(R)}!o&&!z(a)&&(k.value=R(a)),!o&&z(a)&&(k.value="")},v=o=>{Ce(()=>{const{validateTrigger:a,rules:s,modelValue:r}=e;_(a,o,s,r)})},M=({value:o,label:a})=>o.value!=null?o.value:a.value,R=o=>{let a=m.find(({value:s})=>s.value===o);return a||(a=m.find(({label:s})=>s.value===o)),(a==null?void 0:a.label.value)??""},ae=()=>{const{disabled:o,readonly:a,onFocus:s}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||a||(y.value=H(e.offsetY),n.value=!0,t(s),v("onFocus"))},oe=()=>{const{disabled:o,readonly:a,onBlur:s}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||a||(t(s),v("onBlur"))},se=o=>{const{disabled:a,readonly:s,multiple:r,onChange:C}=e;if(l!=null&&l.disabled.value||l!=null&&l.readonly.value||a||s)return;const u=r?m.filter(({selected:w})=>w.value).map(M):M(o);t(e["onUpdate:modelValue"],u),t(C,u),v("onChange"),!r&&(n.value=!1)},ne=()=>{const{disabled:o,readonly:a,multiple:s,clearable:r,onClear:C}=e;if(l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||a||!r)return;const u=s?[]:void 0;t(e["onUpdate:modelValue"],u),t(C,u),v("onClear")},re=o=>{const{disabled:a,onClick:s}=e;l!=null&&l.disabled.value||a||(t(s,o),v("onClick"))},te=o=>{const{disabled:a,readonly:s,modelValue:r,onClose:C}=e;if(l!=null&&l.disabled.value||l!=null&&l.readonly.value||a||s)return;const u=r,w=m.find(({label:N})=>N.value===o),K=u.filter(N=>N!==(w.value.value??w.label.value));t(e["onUpdate:modelValue"],K),t(C,K),v("onClose")},j=()=>{const{multiple:o,modelValue:a}=e;if(o){const s=a;m.forEach(r=>r.sync(s.includes(M(r))))}else m.forEach(s=>s.sync(a===M(s)));I()},ie=()=>{y.value=H(e.offsetY),n.value=!0},de=()=>{n.value=!1},W=()=>x(e.rules,e.modelValue),q=()=>{t(e["onUpdate:modelValue"],e.multiple?[]:void 0),E()};P(()=>e.multiple,()=>{const{multiple:o,modelValue:a}=e;o&&!he(a)&&Ee("Select","The modelValue must be an array when multiple is true")}),P(()=>e.modelValue,j,{deep:!0}),P(()=>i.value,j);const J={multiple:O,focusColor:Y,computeLabel:I,onSelect:se,reset:q,validate:W,resetValidation:E};return X(J),t(A,J),{offsetY:y,isFocus:n,errorMessage:Z,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,label:k,labels:B,isEmptyModelValue:$,menuEl:ee,placement:le,cursor:D,n:Te,classes:Ue,handleFocus:ae,handleBlur:oe,handleClear:ne,handleClick:re,handleClose:te,reset:q,validate:W,resetValidation:E,focus:ie,blur:de}}});const Oe={key:1};function Ye(e,n,O,Y,k,B){const $=g("var-chip"),D=g("var-icon"),y=g("var-field-decorator"),A=g("var-menu"),l=g("var-form-details");return c(),f("div",{class:d(e.n()),onClick:n[3]||(n[3]=(...i)=>e.handleFocus&&e.handleFocus(...i))},[S(A,{class:d(e.n("menu")),"var-select-cover":"","same-width":"","offset-y":e.offsetY,disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled,placement:e.placement,"default-style":!1,show:e.isFocus,"onUpdate:show":n[1]||(n[1]=i=>e.isFocus=i),onClose:e.handleBlur},{menu:p(()=>[T("div",{ref:"menuEl",class:d(e.classes(e.n("scroller"),e.n(`--scroller-${e.variant}`),e.n("$-elevation--3"),[!e.hint,e.n("--scroller-non-hint")]))},[F(e.$slots,"default")],2)]),default:p(()=>[S(y,ge(Fe({value:e.modelValue,size:e.size,variant:e.variant,placeholder:e.placeholder,line:e.line,hint:e.hint,textColor:e.textColor,focusColor:e.focusColor,blurColor:e.blurColor,isFocus:e.isFocus,errorMessage:e.errorMessage,formDisabled:e.formDisabled,disabled:e.disabled,clearable:e.clearable,cursor:e.cursor,onClick:e.handleClick,onClear:e.handleClear})),{"prepend-icon":p(()=>[F(e.$slots,"prepend-icon")]),"append-icon":p(()=>[F(e.$slots,"append-icon")]),default:p(()=>[T("div",{class:d(e.classes(e.n("select"),[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:ke({textAlign:e.textAlign,color:e.textColor})},[T("div",{class:d(e.n("label"))},[e.isEmptyModelValue?Be("",!0):F(e.$slots,"selected",{key:0},()=>[e.multiple?(c(),f(Q,{key:0},[e.chip?(c(),f("div",{key:0,class:d(e.n("chips"))},[(c(!0),f(Q,null,Me(e.labels,i=>(c(),we($,{class:d(e.n("chip")),"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:i,onClick:n[0]||(n[0]=G(()=>{},["stop"])),onClose:()=>e.handleClose(i)},{default:p(()=>[Se(U(i),1)]),_:2},1032,["class","type","onClose"]))),128))],2)):(c(),f("div",{key:1,class:d(e.n("values"))},U(e.labels.join(e.separator)),3))],64)):(c(),f("span",Oe,U(e.label),1))])],2),F(e.$slots,"arrow-icon",{focus:e.isFocus},()=>[S(D,{class:d(e.classes(e.n("arrow"),[e.isFocus,e.n("--arrow-rotate")])),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])])],6)]),_:3},16)]),_:3},8,["class","offset-y","disabled","placement","show","onClose"]),S(l,{"error-message":e.errorMessage,onClick:n[2]||(n[2]=G(()=>{},["stop"]))},null,8,["error-message"])],2)}const L=Ve(Le,[["render",Ye]]);L.install=function(e){e.component(L.name,L)};export{L as S};
