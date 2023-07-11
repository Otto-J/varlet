import{I as n}from"./index-28b6c39c.js";import{I as r}from"./index-21c8bf06.js";import{S as k}from"./index-6c0c1cda.js";import{d as F}from"./index-a0438c78.js";import{_ as L,a as t,ac as $,aD as q,f as E,h as O,q as o,S as u,ao as e,F as Q,P as D,Q as w,al as R,am as j,M as G}from"./vue-router-fcc070b4.js";import{u as H,b as P,_ as J,c as K,a as W}from"./index-1a635470.js";import{A as B}from"./appType-df0918fa.js";import"./provide-548cb18b.js";import"./logger-ef73fd8d.js";import"./useChildren-71467955.js";import"./FieldDecorator-37666ad5.js";import"./onWindowResize-c6fa6369.js";import"./elements-466e14ce.js";/* empty css               */const X={standard:"标准外观",outlined:"外边框外观",smallSize:"小尺寸",plainMode:"朴素模式",textarea:"文本域",maxlength:"最大长度",disabled:"禁用",readonly:"只读",clearable:"可清除",displayIcon:"显示图标",customIconSize:"自定义图标尺寸",validate:"字段校验",placeholder:"请输入文本",maxMessage:"文本长度必须大于6",clearableText:"可清除文本"},Y={standard:"Standard Variant",outlined:"Outlined Variant",smallSize:"Small Size",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",customIconSize:"Custom Icon Size",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"},{add:A,use:Z,pack:d,packs:ge,merge:be}=H(),_=s=>{W(s),Z(s)};P("zh-CN",J);P("en-US",K);A("zh-CN",X);A("en-US",Y);const ee=s=>(R("data-v-a15cef96"),s=s(),j(),s),le=ee(()=>G("div",{style:{height:"40px"}},null,-1)),ae={__name:"index",setup(s){const p=t(""),i=t(""),m=t(""),V=t(""),c=t(""),v=t(""),h=t(""),x=t(""),g=t(""),b=t(""),U=t(""),z=t(""),S=t(""),f=t(""),y=t(""),I=t(""),M=t(""),C=t(""),N=t(""),T=t("");return $(_),q(F),(oe,a)=>(E(),O(Q,null,[o(e(B),null,{default:u(()=>[D(w(e(d).standard),1)]),_:1}),o(e(k),{direction:"column",size:["3vmin",0]},{default:u(()=>[o(e(n),{placeholder:e(d).placeholder,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).readonly,readonly:"",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=l=>m.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).disabled,disabled:"",modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=l=>V.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).clearable,clearable:"",modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=l=>c.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).validate,rules:[l=>l.length>6||e(d).maxMessage],modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=l=>v.value=l)},null,8,["placeholder","rules","modelValue"]),o(e(n),{placeholder:e(d).displayIcon,modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=l=>h.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).customIconSize,modelValue:b.value,"onUpdate:modelValue":a[6]||(a[6]=l=>b.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github",size:"8vmin"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github",size:"12vmin"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).maxlength,maxlength:10,modelValue:x.value,"onUpdate:modelValue":a[7]||(a[7]=l=>x.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).textarea,textarea:"",modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=l=>g.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).smallSize,size:"small",modelValue:p.value,"onUpdate:modelValue":a[9]||(a[9]=l=>p.value=l)},null,8,["placeholder","modelValue"])]),_:1}),o(e(B),{style:{"margin-top":"10vmin"}},{default:u(()=>[D(w(e(d).outlined),1)]),_:1}),o(e(k),{direction:"column",size:["6vmin",0]},{default:u(()=>[o(e(n),{variant:"outlined",placeholder:e(d).placeholder,modelValue:z.value,"onUpdate:modelValue":a[10]||(a[10]=l=>z.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).readonly,readonly:"",modelValue:S.value,"onUpdate:modelValue":a[11]||(a[11]=l=>S.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).disabled,disabled:"",modelValue:f.value,"onUpdate:modelValue":a[12]||(a[12]=l=>f.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).clearable,clearable:"",modelValue:y.value,"onUpdate:modelValue":a[13]||(a[13]=l=>y.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).validate,rules:[l=>l.length>6||e(d).maxMessage],modelValue:I.value,"onUpdate:modelValue":a[14]||(a[14]=l=>I.value=l)},null,8,["placeholder","rules","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).displayIcon,modelValue:M.value,"onUpdate:modelValue":a[15]||(a[15]=l=>M.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).customIconSize,modelValue:T.value,"onUpdate:modelValue":a[16]||(a[16]=l=>T.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github",size:"8vmin"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github",size:"12vmin"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).maxlength,maxlength:10,modelValue:C.value,"onUpdate:modelValue":a[17]||(a[17]=l=>C.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).textarea,textarea:"",modelValue:N.value,"onUpdate:modelValue":a[18]||(a[18]=l=>N.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).smallSize,size:"small",modelValue:U.value,"onUpdate:modelValue":a[19]||(a[19]=l=>U.value=l)},null,8,["placeholder","modelValue"])]),_:1}),le],64))}},Ue=L(ae,[["__scopeId","data-v-a15cef96"]]);export{Ue as default};
