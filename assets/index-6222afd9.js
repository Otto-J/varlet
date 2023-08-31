import{S as o}from"./index-c116ec5b.js";import{O as u}from"./index-a45ce306.js";import{S as O}from"./index-2b01cff7.js";import{I as s}from"./index-136c3567.js";import{d as q}from"./index-ea9abee8.js";import{_ as Q,a as i,aE as j,aa as G,f as H,h as J,q as e,S as d,an as l,F as K,P as A,Q as p,M as r,N as S,ak as W,al as X}from"./vue-router-40fc6ea4.js";import{u as Z,b as Y,_ as ll,c as el,a as al}from"./index-d900f5bf.js";import{A as F}from"./appType-5bfd6fb0.js";import"./index-4ad4ca28.js";import"./components-08e741bd.js";import"./usePopover-a7812307.js";import"./elements-da0a4dab.js";import"./logger-525ef361.js";import"./zIndex-c48ec921.js";import"./index-0b900054.js";import"./index-410fb42a.js";import"./FieldDecorator-6bbf9429.js";import"./onWindowResize-93bafcb2.js";import"./provide-704f51ba.js";import"./useChildren-9817f989.js";import"./index-99727698.js";import"./index-5abe00b9.js";/* empty css               */import"./index-e47ee3d4.js";import"./index-0e8f005f.js";const nl={standard:"标准外观",outlined:"外边框外观",smallSize:"小尺寸",disabled:"禁用",readonly:"只读",clearable:"可清除",customIcon:"自定义图标",customIconSize:"自定义图标尺寸",validate:"单选值校验",multipleValidate:"多选值校验",placeholder:"请选择一个选项",multiplePlaceholder:"请选择多个选项",clearableText:"可清除文本",relation:"文本关联值",multiple:"多选",chipMultiple:"纸片风格的多选",eat:"吃饭",sleep:"睡觉",play:"打游戏",coding:"写代码",rest:"摸鱼",currentSelect:"当前选择的是:",mustSelectRest:"您一定得选择摸鱼",mustSelectMoreThan:"您至少选择两个选项"},ul={standard:"Standard Variant",outlined:"Outlined Variant",smallSize:"Small Size",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options"},{add:$,use:dl,pack:a,packs:El,merge:Ll}=Z(),tl=m=>{al(m),dl(m)};Y("zh-CN",ll);Y("en-US",el);$("zh-CN",nl);$("en-US",ul);const ol=m=>(W("data-v-9745f926"),m=m(),X(),m),sl={class:"relation"},il={class:"relation"},pl=ol(()=>r("div",{class:"space"},null,-1)),rl={__name:"index",setup(m){const g=i(void 0),U=i(void 0),w=i(void 0),z=i(void 0),y=i(void 0),c=i(void 0),_=i([]),I=i([]),k=i([]),f=i(void 0),x=i(void 0),b=i(void 0),M=i(void 0),C=i(void 0),T=i(void 0),N=i(void 0),P=i(void 0),v=i(void 0),R=i([]),B=i([]),D=i([]),h=i(void 0),E=i(void 0),V=i(void 0);return j(q),G(L=>{g.value=void 0,U.value=void 0,w.value=void 0,z.value=void 0,y.value=void 0,c.value=void 0,_.value=[],I.value=[],k.value=[],f.value=void 0,x.value=void 0,b.value=void 0,M.value=void 0,C.value=void 0,T.value=void 0,N.value=void 0,P.value=void 0,v.value=void 0,R.value=[],B.value=[],D.value=[],h.value=void 0,E.value=void 0,V.value=void 0,tl(L)}),(L,t)=>(H(),J(K,null,[e(l(F),null,{default:d(()=>[A(p(l(a).standard),1)]),_:1}),e(l(O),{direction:"column",size:["3vmin",0]},{default:d(()=>[e(l(o),{placeholder:l(a).placeholder,modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=n=>g.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).relation,modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=n=>f.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat,value:1},null,8,["label"]),e(l(u),{label:l(a).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),r("div",sl,p(l(a).currentSelect)+" "+p(f.value),1),e(l(o),{placeholder:l(a).readonly,readonly:"",modelValue:U.value,"onUpdate:modelValue":t[2]||(t[2]=n=>U.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).disabled,disabled:"",modelValue:w.value,"onUpdate:modelValue":t[3]||(t[3]=n=>w.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).clearable,clearable:"",modelValue:z.value,"onUpdate:modelValue":t[4]||(t[4]=n=>z.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).customIcon,modelValue:c.value,"onUpdate:modelValue":t[5]||(t[5]=n=>c.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},{default:d(()=>[e(l(s),{class:"selected-icon",name:"cake-variant"}),r("span",null,p(l(a).eat),1)]),_:1},8,["label"]),e(l(u),{label:l(a).sleep},{default:d(()=>[e(l(s),{class:"selected-icon",name:"weather-night"}),r("span",null,p(l(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[e(l(s),{class:"selected-icon",name:c.value===l(a).eat?"cake-variant":"weather-night"},null,8,["name"]),r("span",null,p(c.value),1)]),"prepend-icon":d(()=>[e(l(s),{class:"prepend-icon",name:"github"})]),"append-icon":d(()=>[e(l(s),{class:"append-icon",name:"github"})]),"arrow-icon":d(({focus:n})=>[e(l(s),{name:"chevron-down",transition:300,class:S({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).customIconSize,modelValue:b.value,"onUpdate:modelValue":t[6]||(t[6]=n=>b.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},{default:d(()=>[e(l(s),{class:"selected-icon",name:"cake-variant"}),r("span",null,p(l(a).eat),1)]),_:1},8,["label"]),e(l(u),{label:l(a).sleep},{default:d(()=>[e(l(s),{class:"selected-icon",name:"weather-night"}),r("span",null,p(l(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[e(l(s),{class:"selected-icon",name:b.value===l(a).eat?"cake-variant":"weather-night",size:"8vmin"},null,8,["name"]),r("span",null,p(b.value),1)]),"prepend-icon":d(()=>[e(l(s),{class:"prepend-icon",name:"github",size:"8vmin"})]),"append-icon":d(()=>[e(l(s),{class:"append-icon",name:"github",size:"12vmin"})]),"arrow-icon":d(({focus:n})=>[e(l(s),{name:"chevron-down",transition:300,class:S({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).multiple,multiple:"",modelValue:_.value,"onUpdate:modelValue":t[7]||(t[7]=n=>_.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).play},null,8,["label"]),e(l(u),{label:l(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).chipMultiple,chip:"",multiple:"",modelValue:I.value,"onUpdate:modelValue":t[8]||(t[8]=n=>I.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).play},null,8,["label"]),e(l(u),{label:l(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{placeholder:l(a).validate,rules:[n=>n===l(a).rest||l(a).mustSelectRest],modelValue:y.value,"onUpdate:modelValue":t[9]||(t[9]=n=>y.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(l(o),{multiple:"",placeholder:l(a).multipleValidate,rules:[n=>n.length>=2||l(a).mustSelectMoreThan],modelValue:k.value,"onUpdate:modelValue":t[10]||(t[10]=n=>k.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).play},null,8,["label"]),e(l(u),{label:l(a).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(l(o),{placeholder:l(a).smallSize,modelValue:x.value,"onUpdate:modelValue":t[11]||(t[11]=n=>x.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"])]),_:1}),e(l(F),{style:{"margin-top":"10vmin"}},{default:d(()=>[A(p(l(a).outlined),1)]),_:1}),e(l(O),{direction:"column",size:["6vmin",0]},{default:d(()=>[e(l(o),{hint:!1,variant:"outlined",placeholder:l(a).placeholder,modelValue:M.value,"onUpdate:modelValue":t[12]||(t[12]=n=>M.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).relation,modelValue:h.value,"onUpdate:modelValue":t[13]||(t[13]=n=>h.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat,value:1},null,8,["label"]),e(l(u),{label:l(a).sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),r("div",il,p(l(a).currentSelect)+" "+p(h.value),1),e(l(o),{variant:"outlined",placeholder:l(a).readonly,readonly:"",modelValue:C.value,"onUpdate:modelValue":t[14]||(t[14]=n=>C.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).disabled,disabled:"",modelValue:T.value,"onUpdate:modelValue":t[15]||(t[15]=n=>T.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).clearable,clearable:"",modelValue:N.value,"onUpdate:modelValue":t[16]||(t[16]=n=>N.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).customIcon,modelValue:v.value,"onUpdate:modelValue":t[17]||(t[17]=n=>v.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},{default:d(()=>[e(l(s),{class:"selected-icon",name:"cake-variant"}),r("span",null,p(l(a).eat),1)]),_:1},8,["label"]),e(l(u),{label:l(a).sleep},{default:d(()=>[e(l(s),{class:"selected-icon",name:"weather-night"}),r("span",null,p(l(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[e(l(s),{class:"selected-icon",name:v.value===l(a).eat?"cake-variant":"weather-night"},null,8,["name"]),r("span",null,p(v.value),1)]),"prepend-icon":d(()=>[e(l(s),{class:"prepend-icon",name:"github"})]),"append-icon":d(()=>[e(l(s),{class:"append-icon",name:"github"})]),"arrow-icon":d(({focus:n})=>[e(l(s),{name:"chevron-down",transition:300,class:S({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).customIconSize,modelValue:V.value,"onUpdate:modelValue":t[18]||(t[18]=n=>V.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},{default:d(()=>[e(l(s),{class:"selected-icon",name:"cake-variant"}),r("span",null,p(l(a).eat),1)]),_:1},8,["label"]),e(l(u),{label:l(a).sleep},{default:d(()=>[e(l(s),{class:"selected-icon",name:"weather-night"}),r("span",null,p(l(a).sleep),1)]),_:1},8,["label"])]),selected:d(()=>[e(l(s),{class:"selected-icon",name:V.value===l(a).eat?"cake-variant":"weather-night",size:"8vmin"},null,8,["name"]),r("span",null,p(V.value),1)]),"prepend-icon":d(()=>[e(l(s),{class:"prepend-icon",name:"github",size:"8vmin"})]),"append-icon":d(()=>[e(l(s),{class:"append-icon",name:"github",size:"12vmin"})]),"arrow-icon":d(({focus:n})=>[e(l(s),{name:"chevron-down",transition:300,class:S({"arrow-icon-rotate":n})},null,8,["class"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).multiple,multiple:"",modelValue:R.value,"onUpdate:modelValue":t[19]||(t[19]=n=>R.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).play},null,8,["label"]),e(l(u),{label:l(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).chipMultiple,chip:"",multiple:"",modelValue:B.value,"onUpdate:modelValue":t[20]||(t[20]=n=>B.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).play},null,8,["label"]),e(l(u),{label:l(a).coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(l(o),{variant:"outlined",placeholder:l(a).validate,rules:[n=>n===l(a).rest||l(a).mustSelectRest],modelValue:P.value,"onUpdate:modelValue":t[21]||(t[21]=n=>P.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(l(o),{multiple:"",variant:"outlined",placeholder:l(a).multipleValidate,rules:[n=>n.length>=2||l(a).mustSelectMoreThan],modelValue:D.value,"onUpdate:modelValue":t[22]||(t[22]=n=>D.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"]),e(l(u),{label:l(a).play},null,8,["label"]),e(l(u),{label:l(a).coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(l(o),{variant:"outlined",size:"small",placeholder:l(a).smallSize,modelValue:E.value,"onUpdate:modelValue":t[23]||(t[23]=n=>E.value=n)},{default:d(()=>[e(l(u),{label:l(a).eat},null,8,["label"]),e(l(u),{label:l(a).sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"])]),_:1}),pl],64))}},Ol=Q(rl,[["__scopeId","data-v-9745f926"]]);export{Ol as default};
