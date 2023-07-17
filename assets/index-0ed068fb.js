import{I as pe}from"./index-eb6e8c8e.js";import{M as be}from"./index-e5e55eb0.js";import{C as Ce}from"./index-11f4bdc8.js";import{p as he,V as ye}from"./FieldDecorator-06aae52c.js";import{F as Ve,u as ge}from"./provide-25b94cba.js";import{d as ke,a as p,b as c,aJ as $,w as T,n as Me,aA as we,_ as Fe,p as V,f as d,h as m,q as B,S as b,M as L,N as i,O as g,aL as Se,aM as $e,aK as Be,R as H,F as X,ai as De,i as Pe,ah as Z,P as Ae,Q as D,j as _}from"./vue-router-96d7bda4.js";import{d as C,p as Ee,k as Ne,a as t,c as ze,e as Oe}from"./logger-17042e1a.js";import{u as Te}from"./index-d70ca8ca.js";import{t as x}from"./elements-7b7f1827.js";function Le(e){return["left","right","center"].includes(e)}const Ue={modelValue:{default:void 0},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Le},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:C(),onBlur:C(),onClose:C(),onChange:C(),onClear:C(),"onUpdate:modelValue":C(),...Ee(he,["size","variant","placeholder","line","hint","textColor","focusColor","blurColor","disabled","clearable","onClick"])},{n:Ye,classes:Re}=ze("select"),Ie=ke({name:"VarSelect",components:{VarIcon:pe,VarMenu:be,VarChip:Ce,VarFieldDecorator:ye,VarFormDetails:Ve},props:Ue,setup(e){const n=p(!1),k=p(!1),Y=c(()=>e.multiple),R=c(()=>e.focusColor),M=p(""),w=p([]),P=c(()=>$(e.modelValue)),A=c(()=>e.disabled||e.readonly?"":"pointer"),h=p(0),{bindForm:E,form:l}=ge(),{length:ee,options:v,bindOptions:le}=Te(),{errorMessage:I,validateWithTrigger:ae,validate:oe,resetValidation:N}=Ne(),se=p(null),ne=c(()=>e.variant==="outlined"?"bottom-start":"cover-top-start"),re=c(()=>{const{hint:o,blurColor:a,focusColor:s}=e;if(!o)return I.value?"var(--field-decorator-error-color)":n.value?s||"var(--field-decorator-focus-color)":a||"var(--field-decorator-blur-color)"}),te=c(()=>!e.hint&&$(e.modelValue)),j=()=>{const{multiple:o,modelValue:a}=e;if(o){const s=a;w.value=s.map(W)}!o&&!$(a)&&(M.value=W(a)),!o&&$(a)&&(M.value="")},f=o=>{Me(()=>{const{validateTrigger:a,rules:s,modelValue:r}=e;ae(a,o,s,r)})},F=({value:o,label:a})=>o.value!=null?o.value:a.value,W=o=>{let a=v.find(({value:s})=>s.value===o);return a||(a=v.find(({label:s})=>s.value===o)),(a==null?void 0:a.label.value)??""},ie=()=>{const{disabled:o,readonly:a,onFocus:s}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||a||(h.value=x(e.offsetY),n.value=!0,t(s),f("onFocus"))},de=()=>{const{disabled:o,readonly:a,onBlur:s}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||a||(z(),t(s),f("onBlur"))},ue=o=>{const{disabled:a,readonly:s,multiple:r,onChange:y}=e;if(l!=null&&l.disabled.value||l!=null&&l.readonly.value||a||s)return;const u=r?v.filter(({selected:S})=>S.value).map(F):F(o);t(e["onUpdate:modelValue"],u),t(y,u),f("onChange"),r||z()},ce=()=>{const{disabled:o,readonly:a,multiple:s,clearable:r,onClear:y}=e;if(l!=null&&l.disabled.value||l!=null&&l.readonly.value||o||a||!r)return;const u=s?[]:void 0;t(e["onUpdate:modelValue"],u),t(y,u),f("onClear")},me=o=>{const{disabled:a,onClick:s}=e;l!=null&&l.disabled.value||a||(t(s,o),f("onClick"))},ve=o=>{const{disabled:a,readonly:s,modelValue:r,onClose:y}=e;if(l!=null&&l.disabled.value||l!=null&&l.readonly.value||a||s)return;const u=r,S=v.find(({label:O})=>O.value===o),G=u.filter(O=>O!==(S.value.value??S.label.value));t(e["onUpdate:modelValue"],G),t(y,G),f("onClose")},q=()=>{const{multiple:o,modelValue:a}=e;if(o){const s=a;v.forEach(r=>r.sync(s.includes(F(r))))}else v.forEach(s=>s.sync(a===F(s)));j()},fe=()=>{h.value=x(e.offsetY),n.value=!0,k.value=!0},z=()=>{n.value=!1,k.value=!1},J=()=>oe(e.rules,e.modelValue),K=()=>{t(e["onUpdate:modelValue"],e.multiple?[]:void 0),N()};T(()=>e.multiple,()=>{const{multiple:o,modelValue:a}=e;o&&!we(a)&&Oe("Select","The modelValue must be an array when multiple is true")}),T(()=>e.modelValue,q,{deep:!0}),T(()=>ee.value,q);const Q={multiple:Y,focusColor:R,computeLabel:j,onSelect:ue,reset:K,validate:J,resetValidation:N};return le(Q),t(E,Q),{offsetY:h,isFocus:n,showMenu:k,errorMessage:I,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,label:M,labels:w,isEmptyModelValue:P,menuEl:se,placement:ne,cursor:A,placeholderColor:re,enableCustomPlaceholder:te,n:Ye,classes:Re,handleFocus:ie,handleBlur:de,handleClear:ce,handleClick:me,handleClose:ve,reset:K,validate:J,resetValidation:N,focus:fe,blur:z}}});const je={key:1};function We(e,n,k,Y,R,M){const w=V("var-chip"),P=V("var-icon"),A=V("var-field-decorator"),h=V("var-menu"),E=V("var-form-details");return d(),m("div",{class:i(e.n()),onClick:n[3]||(n[3]=(...l)=>e.handleFocus&&e.handleFocus(...l))},[B(h,{"var-select-cover":"","same-width":"","close-on-click-reference":"",show:e.showMenu,"onUpdate:show":n[1]||(n[1]=l=>e.showMenu=l),class:i(e.n("menu")),"popover-class":e.variant==="standard"&&e.hint?e.n("--menu-margin"):void 0,"offset-y":e.offsetY,disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled,placement:e.placement,"default-style":!1,onClickOutside:e.handleBlur},{menu:b(()=>[L("div",{ref:"menuEl",class:i(e.classes(e.n("scroller"),e.n("$-elevation--3")))},[g(e.$slots,"default")],2)]),default:b(()=>[B(A,Se($e({value:e.modelValue,size:e.size,variant:e.variant,placeholder:e.placeholder,line:e.line,hint:e.hint,textColor:e.textColor,focusColor:e.focusColor,blurColor:e.blurColor,isFocus:e.isFocus,errorMessage:e.errorMessage,formDisabled:e.formDisabled,disabled:e.disabled,clearable:e.clearable,cursor:e.cursor,onClick:e.handleClick,onClear:e.handleClear})),Be({"append-icon":b(()=>[g(e.$slots,"append-icon")]),default:b(()=>[L("div",{class:i(e.classes(e.n("select"),[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:H({textAlign:e.textAlign,color:e.textColor})},[L("div",{class:i(e.n("label"))},[e.isEmptyModelValue?_("",!0):g(e.$slots,"selected",{key:0},()=>[e.multiple?(d(),m(X,{key:0},[e.chip?(d(),m("div",{key:0,class:i(e.n("chips"))},[(d(!0),m(X,null,De(e.labels,l=>(d(),Pe(w,{class:i(e.n("chip")),"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:l,onClick:n[0]||(n[0]=Z(()=>{},["stop"])),onClose:()=>e.handleClose(l)},{default:b(()=>[Ae(D(l),1)]),_:2},1032,["class","type","onClose"]))),128))],2)):(d(),m("div",{key:1,class:i(e.n("values"))},D(e.labels.join(e.separator)),3))],64)):(d(),m("span",je,D(e.label),1))])],2),e.enableCustomPlaceholder?(d(),m("span",{key:0,class:i(e.classes(e.n("placeholder"),e.n("$--ellipsis"))),style:H({color:e.placeholderColor})},D(e.placeholder),7)):_("",!0),g(e.$slots,"arrow-icon",{focus:e.showMenu},()=>[B(P,{class:i(e.classes(e.n("arrow"),[e.showMenu,e.n("--arrow-rotate")])),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])])],6)]),_:2},[e.$slots["prepend-icon"]?{name:"prepend-icon",fn:b(()=>[g(e.$slots,"prepend-icon")]),key:"0"}:void 0]),1040)]),_:3},8,["show","class","popover-class","offset-y","disabled","placement","onClickOutside"]),B(E,{"error-message":e.errorMessage,onClick:n[2]||(n[2]=Z(()=>{},["stop"]))},null,8,["error-message"])],2)}const U=Fe(Ie,[["render",We]]);U.install=function(e){e.component(U.name,U)};export{U as S};
