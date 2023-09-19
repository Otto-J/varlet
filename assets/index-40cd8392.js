import{C}from"./index-aee06641.js";import{C as s}from"./index-7f13860e.js";import{I as A}from"./index-996cf697.js";import{B as U}from"./index-1cb15a8e.js";import{_ as $,W as z,aS as B,F as w,aj as T,e as D,m as R,q as a,w as t,U as e,aT as r,p as m,R as l,N as E,Q as n,$ as F,a0 as L}from"./index-07e5c9c4.js";import{d as P}from"./index-ea9abee8.js";import{u as j,b as G,_ as q,c as Q,a as W}from"./index-cffc7788.js";import{A as i}from"./appType-7f7d8e28.js";import"./provide-d60b2e93.js";import"./components-281d8a29.js";import"./index-62c7328a.js";import"./index-6e5a7242.js";/* empty css               */import"./index-1b4e4fb3.js";import"./index-bde704e4.js";import"./elements-3fb018db.js";import"./logger-525ef361.js";import"./index-5e3f3ac0.js";const H={basicUsage:"基本使用",currentValue:"当前的值:",setState:"设置状态值",setStyle:"修改图标和颜色",disabled:"禁用",readonly:"只读",eat:"吃饭",sleep:"睡觉",checkAll:"全选",inverseAll:"反选",checkboxGroup:"复选框组",vertical:"垂直布局",checkboxValidate:"复选框字段校验",checkboxGroupValidate:"复选框组字段校验",checkboxValidateMessage:"请勾选",checkboxGroupValidateMessage:"请全选",indeterminate:"不确定状态",indeterminateValue:"不确定状态的值:",toggle:"切换"},J={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State Value",setStyle:"Modify The Icon And Color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",vertical:"Vertical Direction",checkboxValidate:"Checkbox Validation",checkboxGroupValidate:"CheckboxGroup Validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all",indeterminate:"Indeterminate",indeterminateValue:"Current value:",toggle:"Toggle"},{add:I,use:K,pack:u,packs:ge,merge:ye}=j(),O=c=>{W(c),K(c)};G("zh-CN",q);G("en-US",Q);I("zh-CN",H);I("en-US",J);const X=c=>(F("data-v-afd0f57d"),c=c(),L(),c),Y={class:"indeterminate-container"},Z={class:"relation"},ee={class:"relation"},le={class:"relation"},ae=X(()=>m("div",{class:"space"},null,-1)),te={__name:"index",setup(c){const N=z({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],value9:[],value10:!1,group:null,indeterminate:!0}),{value:v,value2:f,value3:V,value4:k,value5:_,value6:b,value7:h,value8:x,value9:g,group:M,value10:y,indeterminate:p}=B(N);return w(O),T(P),(S,o)=>(D(),R(E,null,[a(e(i),null,{default:t(()=>[n(l(e(u).basicUsage),1)]),_:1}),a(e(s),{modelValue:e(v),"onUpdate:modelValue":o[0]||(o[0]=d=>r(v)?v.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(v)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).setState),1)]),_:1}),a(e(s),{"unchecked-value":0,"checked-value":1,modelValue:e(f),"onUpdate:modelValue":o[1]||(o[1]=d=>r(f)?f.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(f)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).setStyle),1)]),_:1}),a(e(s),{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e(V),"onUpdate:modelValue":o[2]||(o[2]=d=>r(V)?V.value=d:null)},{"unchecked-icon":t(()=>[a(e(A),{name:"heart-half-full",size:"24px"})]),"checked-icon":t(()=>[a(e(A),{name:"heart",size:"24px"})]),default:t(()=>[n(l(e(u).currentValue)+" "+l(e(V)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).disabled),1)]),_:1}),a(e(s),{disabled:"",modelValue:e(k),"onUpdate:modelValue":o[3]||(o[3]=d=>r(k)?k.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(k)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).readonly),1)]),_:1}),a(e(s),{readonly:"",modelValue:e(_),"onUpdate:modelValue":o[4]||(o[4]=d=>r(_)?_.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(_)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).indeterminate),1)]),_:1}),m("div",Y,[a(e(s),{modelValue:e(y),"onUpdate:modelValue":o[5]||(o[5]=d=>r(y)?y.value=d:null),indeterminate:e(p),"onUpdate:indeterminate":o[6]||(o[6]=d=>r(p)?p.value=d:null)},{default:t(()=>[n(l(e(u).indeterminateValue)+" "+l(e(p)),1)]),_:1},8,["modelValue","indeterminate"]),a(e(U),{class:"button",type:"primary",onClick:o[7]||(o[7]=d=>p.value=!e(p))},{default:t(()=>[n(l(e(u).toggle),1)]),_:1})]),a(e(i),null,{default:t(()=>[n(l(e(u).checkboxGroup),1)]),_:1}),a(e(C),{ref_key:"group",ref:M,modelValue:e(b),"onUpdate:modelValue":o[10]||(o[10]=d=>r(b)?b.value=d:null)},{default:t(()=>[a(e(s),{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(e(s),{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1}),a(e(U),{class:"button",type:"primary",onClick:o[8]||(o[8]=d=>S.$refs.group.checkAll())},{default:t(()=>[n(l(e(u).checkAll),1)]),_:1}),a(e(U),{class:"button",type:"primary",onClick:o[9]||(o[9]=d=>S.$refs.group.inverseAll())},{default:t(()=>[n(l(e(u).inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),m("div",Z,l(e(u).currentValue)+" "+l(e(b)),1),a(e(i),null,{default:t(()=>[n(l(e(u).vertical),1)]),_:1}),a(e(C),{modelValue:e(g),"onUpdate:modelValue":o[11]||(o[11]=d=>r(g)?g.value=d:null),direction:"vertical"},{default:t(()=>[a(e(s),{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(e(s),{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue"]),m("div",ee,l(e(u).currentValue)+" "+l(e(g)),1),a(e(i),null,{default:t(()=>[n(l(e(u).checkboxValidate),1)]),_:1}),a(e(s),{modelValue:e(h),"onUpdate:modelValue":o[12]||(o[12]=d=>r(h)?h.value=d:null),rules:[d=>d||e(u).checkboxValidateMessage]},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(h)),1)]),_:1},8,["modelValue","rules"]),a(e(i),null,{default:t(()=>[n(l(e(u).checkboxGroupValidate),1)]),_:1}),a(e(C),{modelValue:e(x),"onUpdate:modelValue":o[13]||(o[13]=d=>r(x)?x.value=d:null),rules:[d=>d.length===2||e(u).checkboxGroupValidateMessage]},{default:t(()=>[a(e(s),{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(e(s),{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),m("div",le,l(e(u).currentValue)+" "+l(e(x)),1),ae],64))}},Ce=$(te,[["__scopeId","data-v-afd0f57d"]]);export{Ce as default};
