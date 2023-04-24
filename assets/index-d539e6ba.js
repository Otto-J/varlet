import{I as n}from"./index-8dfe9184.js";import{I as r}from"./index-73a90170.js";import{S as T}from"./index-b6d0c10d.js";import{d as F}from"./index-dd768cde.js";import{_ as L,a as t,aa as $,aD as q,f as A,h as O,q as o,S as u,ap as e,F as Q,P as k,Q as D,aE as B,al as R,am as j,M as G}from"./vue-router-3467edf1.js";import{u as H,c as J,a as P,_ as K,b as W}from"./index-3e5cce21.js";import"./provide-d4683ddf.js";import"./components-105afbd7.js";import"./useChildren-6152c626.js";import"./FieldDecorator-b123148d.js";import"./elements-daad42ba.js";import"./shared-72da4837.js";import"./logger-525ef361.js";/* empty css               */const X={standard:"标准外观",outlined:"外边框外观",smallSize:"小尺寸",plainMode:"朴素模式",textarea:"文本域",maxlength:"最大长度",disabled:"禁用",readonly:"只读",clearable:"可清除",displayIcon:"显示图标",customIconSize:"自定义图标尺寸",validate:"字段校验",placeholder:"请输入文本",maxMessage:"文本长度必须大于6",clearableText:"可清除文本"},Y={standard:"Standard Variant",outlined:"Outlined Variant",smallSize:"Small Size",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",customIconSize:"Custom Icon Size",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"},{add:E,use:Z,pack:d,packs:be,merge:ge}=H(),_=s=>{J(s),Z(s)};P("zh-CN",K);P("en-US",W);E("zh-CN",X);E("en-US",Y);const ee=s=>(R("data-v-3abbffd5"),s=s(),j(),s),le=ee(()=>G("div",{style:{height:"40px"}},null,-1)),ae={__name:"index",setup(s){const p=t(""),i=t(""),m=t(""),V=t(""),c=t(""),v=t(""),h=t(""),x=t(""),b=t(""),g=t(""),f=t(""),U=t(""),y=t(""),z=t(""),S=t(""),I=t(""),w=t(""),M=t(""),C=t(""),N=t("");return $(_),q(F),(oe,a)=>(A(),O(Q,null,[o(e(B),null,{default:u(()=>[k(D(e(d).standard),1)]),_:1}),o(e(T),{direction:"column",size:["3vw",0]},{default:u(()=>[o(e(n),{placeholder:e(d).placeholder,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).readonly,readonly:"",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=l=>m.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).disabled,disabled:"",modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=l=>V.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).clearable,clearable:"",modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=l=>c.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).validate,rules:[l=>l.length>6||e(d).maxMessage],modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=l=>v.value=l)},null,8,["placeholder","rules","modelValue"]),o(e(n),{placeholder:e(d).displayIcon,modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=l=>h.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{style:{"--field-decorator-middle-offset-y":"2.6vw"},placeholder:e(d).customIconSize,modelValue:g.value,"onUpdate:modelValue":a[6]||(a[6]=l=>g.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github",size:"8vw"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github",size:"12vw"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).maxlength,maxlength:10,modelValue:x.value,"onUpdate:modelValue":a[7]||(a[7]=l=>x.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).textarea,textarea:"",modelValue:b.value,"onUpdate:modelValue":a[8]||(a[8]=l=>b.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{placeholder:e(d).smallSize,size:"small",modelValue:p.value,"onUpdate:modelValue":a[9]||(a[9]=l=>p.value=l)},null,8,["placeholder","modelValue"])]),_:1}),o(e(B),{style:{"margin-top":"10vw"}},{default:u(()=>[k(D(e(d).outlined),1)]),_:1}),o(e(T),{direction:"column",size:["6vw",0]},{default:u(()=>[o(e(n),{variant:"outlined",placeholder:e(d).placeholder,modelValue:U.value,"onUpdate:modelValue":a[10]||(a[10]=l=>U.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).readonly,readonly:"",modelValue:y.value,"onUpdate:modelValue":a[11]||(a[11]=l=>y.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).disabled,disabled:"",modelValue:z.value,"onUpdate:modelValue":a[12]||(a[12]=l=>z.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).clearable,clearable:"",modelValue:S.value,"onUpdate:modelValue":a[13]||(a[13]=l=>S.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).validate,rules:[l=>l.length>6||e(d).maxMessage],modelValue:I.value,"onUpdate:modelValue":a[14]||(a[14]=l=>I.value=l)},null,8,["placeholder","rules","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).displayIcon,modelValue:w.value,"onUpdate:modelValue":a[15]||(a[15]=l=>w.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",style:{"--field-decorator-middle-offset-y":"2.6vw"},placeholder:e(d).customIconSize,modelValue:N.value,"onUpdate:modelValue":a[16]||(a[16]=l=>N.value=l)},{"prepend-icon":u(()=>[o(e(r),{class:"prepend-icon",name:"github",size:"8vw"})]),"append-icon":u(()=>[o(e(r),{class:"append-icon",name:"github",size:"12vw"})]),_:1},8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).maxlength,maxlength:10,modelValue:M.value,"onUpdate:modelValue":a[17]||(a[17]=l=>M.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).textarea,textarea:"",modelValue:C.value,"onUpdate:modelValue":a[18]||(a[18]=l=>C.value=l)},null,8,["placeholder","modelValue"]),o(e(n),{variant:"outlined",placeholder:e(d).smallSize,size:"small",modelValue:f.value,"onUpdate:modelValue":a[19]||(a[19]=l=>f.value=l)},null,8,["placeholder","modelValue"])]),_:1}),le],64))}},fe=L(ae,[["__scopeId","data-v-3abbffd5"]]);export{fe as default};
