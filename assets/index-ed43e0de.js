import{F as Y,u as x}from"./provide-8be1530f.js";import{p as _,V as ee}from"./FieldDecorator-3a644028.js";import{d as u,p as oe,k as ne,a as i,o as ae,c as re,w as le}from"./logger-9a144f5d.js";import{d as se,a as h,z as ie,b as g,aI as D,n as de,Z as te,_ as ue,p as E,f as C,h as f,q as N,aJ as P,S as v,O as V,N as b,R as F,j as me,aK as pe,aL as he,ag as ge}from"./vue-router-547718df.js";const Ce={modelValue:String,modelModifiers:{type:Object,default:()=>({})},type:{type:String,default:"text"},textarea:Boolean,rows:{type:[String,Number],default:8},maxlength:[String,Number],readonly:Boolean,resize:Boolean,autofocus:Boolean,validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:Array,enterkeyhint:String,onFocus:u(),onBlur:u(),onInput:u(),onChange:u(),onClear:u(),"onUpdate:modelValue":u(),...oe(_,["size","variant","placeholder","line","hint","textColor","focusColor","blurColor","disabled","clearable","onClick"])},{n:fe,classes:ve}=re("input"),be=se({name:"VarInput",components:{VarFormDetails:Y,VarFieldDecorator:ee},props:Ce,setup(e){const n=h(`var-input-${ie().uid}`),m=h(null),p=h(!1),d=h(!1),B=g(()=>e.type==="number"?"text":e.type),y=g(()=>{const{maxlength:o,modelValue:r}=e;return o?D(r)?`0 / ${o}`:`${String(r).length}/${o}`:""}),k=g(()=>e.disabled||e.readonly?"":"text"),a=g(()=>{const{hint:o,blurColor:r,focusColor:s}=e;if(!o)return S.value?"var(--field-decorator-error-color)":p.value?s||"var(--field-decorator-focus-color)":r||"var(--field-decorator-blur-color)"}),{bindForm:R,form:l}=x(),{errorMessage:S,validateWithTrigger:O,validate:U,resetValidation:M}=ne(),t=o=>{de(()=>{const{validateTrigger:r,rules:s,modelValue:I}=e;O(r,o,s,I)})},c=o=>{p.value=!0,i(e.onFocus,o),t("onFocus")},j=o=>{p.value=!1,i(e.onBlur,o),t("onBlur")},T=o=>{const r=o.target;let{value:s}=r;return e.type==="number"&&(s=Z(s)),H(G(s))},A=()=>{d.value=!0},L=o=>{d.value&&(d.value=!1,o.target.dispatchEvent(new Event("input")))},W=o=>{if(d.value)return;const r=T(o);i(e["onUpdate:modelValue"],r),i(e.onInput,r,o),t("onInput")},q=o=>{const r=T(o);i(e.onChange,r,o),t("onChange")},J=()=>{const{disabled:o,readonly:r,clearable:s,onClear:I}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||r||!s||(i(e["onUpdate:modelValue"],""),i(I,""),t("onClear"))},K=o=>{const{disabled:r,onClick:s}=e;l!=null&&l.disabled.value||r||(i(s,o),t("onClick"))},Z=o=>{const r=o.indexOf("-"),s=o.indexOf(".");return r>-1&&(o=r===0?"-"+o.replace(/-/g,""):o.replace(/-/g,"")),s>-1&&(o=o.slice(0,s+1)+o.slice(s).replace(/\./g,"")),o.replace(/[^-0-9.]/g,"")},G=o=>e.modelModifiers.trim?o.trim():o,H=o=>e.maxlength?o.slice(0,te(e.maxlength)):o,Q=o=>{const{disabled:r}=e;l!=null&&l.disabled.value||r||o.target===m.value||(w(),o.preventDefault())},$=()=>{i(e["onUpdate:modelValue"],""),M()},z=()=>U(e.rules,e.modelValue),w=()=>{var o;(o=m.value)==null||o.focus()},X=()=>{m.value.blur()};return i(R,{reset:$,validate:z,resetValidation:M}),ae(()=>{e.autofocus&&w()}),{el:m,id:n,isFocus:p,isComposing:d,errorMessage:S,placeholderColor:a,normalizedType:B,cursor:k,maxlengthText:y,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,n:fe,classes:ve,isEmpty:D,handleFocus:c,handleBlur:j,handleInput:W,handleChange:q,handleClear:J,handleClick:K,handleCompositionStart:A,handleCompositionEnd:L,handleMousedown:Q,validate:z,resetValidation:M,reset:$,focus:w,blur:X}}});const ye=["placeholder","enterkeyhint"],ke=["id","disabled","type","value","placeholder","maxlength","rows","enterkeyhint","inputmode"],Me=["id","disabled","type","value","placeholder","maxlength","enterkeyhint","inputmode"];function we(e,n,m,p,d,B){const y=E("var-field-decorator"),k=E("var-form-details");return C(),f("div",{class:b(e.classes(e.n(),e.n("$--box"))),onMousedown:n[14]||(n[14]=(...a)=>e.handleMousedown&&e.handleMousedown(...a))},[N(y,pe(he({value:e.modelValue,id:e.id,size:e.size,variant:e.variant,placeholder:e.placeholder,line:e.line,hint:e.hint,textColor:e.textColor,focusColor:e.focusColor,blurColor:e.blurColor,isFocus:e.isFocus,errorMessage:e.errorMessage,formDisabled:e.formDisabled,disabled:e.disabled,clearable:e.clearable,cursor:e.cursor,composing:e.isComposing,onClick:e.handleClick,onClear:e.handleClear})),P({"append-icon":v(()=>[V(e.$slots,"append-icon")]),default:v(()=>[e.normalizedType==="password"?(C(),f("input",{key:0,tabindex:"-1",class:b(e.n("autocomplete")),placeholder:e.hint?void 0:e.placeholder,style:F({"--input-placeholder-color":e.placeholderColor}),enterkeyhint:e.enterkeyhint},null,14,ye)):me("",!0),e.textarea?(C(),f("textarea",{key:1,class:b(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.normalizedType,value:e.modelValue,placeholder:e.hint?void 0:e.placeholder,maxlength:e.maxlength,rows:e.rows,enterkeyhint:e.enterkeyhint,inputmode:e.type==="number"?"numeric":void 0,style:F({color:e.errorMessage?void 0:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,resize:e.resize?"vertical":"none","--input-placeholder-color":e.placeholderColor}),onFocus:n[0]||(n[0]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[1]||(n[1]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:n[2]||(n[2]=(...a)=>e.handleInput&&e.handleInput(...a)),onChange:n[3]||(n[3]=(...a)=>e.handleChange&&e.handleChange(...a)),onTouchstart:n[4]||(n[4]=(...a)=>e.handleTouchstart&&e.handleTouchstart(...a)),onCompositionstart:n[5]||(n[5]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionend:n[6]||(n[6]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a))},`
      `,46,ke)):(C(),f("input",{key:2,class:b(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.normalizedType,value:e.modelValue,placeholder:e.hint?void 0:e.placeholder,maxlength:e.maxlength,enterkeyhint:e.enterkeyhint,inputmode:e.type==="number"?"numeric":void 0,style:F({color:e.errorMessage?void 0:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,"--input-placeholder-color":e.placeholderColor}),onFocus:n[7]||(n[7]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[8]||(n[8]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:n[9]||(n[9]=(...a)=>e.handleInput&&e.handleInput(...a)),onChange:n[10]||(n[10]=(...a)=>e.handleChange&&e.handleChange(...a)),onCompositionstart:n[11]||(n[11]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionend:n[12]||(n[12]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a))},null,46,Me))]),_:2},[e.$slots["prepend-icon"]?{name:"prepend-icon",fn:v(()=>[V(e.$slots,"prepend-icon")]),key:"0"}:void 0]),1040),N(k,{"error-message":e.errorMessage,"extra-message":e.maxlengthText,onMousedown:n[13]||(n[13]=ge(()=>{},["stop"]))},P({_:2},[e.$slots["extra-message"]?{name:"extra-message",fn:v(()=>[V(e.$slots,"extra-message")]),key:"0"}:void 0]),1032,["error-message","extra-message"])],34)}const Ie=ue(be,[["render",we]]);le(Ie);export{Ie as I};
