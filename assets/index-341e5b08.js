import{C}from"./index-7edb9b12.js";import{C as r}from"./index-62bd4241.js";import{I as A}from"./index-5ae50cc0.js";import{B as U}from"./index-0706486b.js";import{_ as $,r as z,aP as B,aa as w,aC as D,f as P,h as T,q as a,S as t,an as e,ar as s,M as m,Q as l,F as R,P as n,ak as E,al as F}from"./vue-router-547718df.js";import{d as L}from"./index-ea9abee8.js";import{u as q,b as G,_ as Q,c as j,a as H}from"./index-d39e90ed.js";import{A as i}from"./appType-610d2e23.js";import"./provide-8be1530f.js";import"./logger-9a144f5d.js";import"./useChildren-05343878.js";import"./index-fde800b6.js";import"./index-89a3ce91.js";import"./elements-1fb47fa1.js";/* empty css               */import"./index-ef9afa54.js";import"./index-d113846f.js";import"./index-f02d9b3c.js";const J={basicUsage:"基本使用",currentValue:"当前的值:",setState:"设置状态值",setStyle:"修改图标和颜色",disabled:"禁用",readonly:"只读",eat:"吃饭",sleep:"睡觉",checkAll:"全选",inverseAll:"反选",checkboxGroup:"复选框组",vertical:"垂直布局",checkboxValidate:"复选框字段校验",checkboxGroupValidate:"复选框组字段校验",checkboxValidateMessage:"请勾选",checkboxGroupValidateMessage:"请全选",indeterminate:"不确定状态",indeterminateValue:"不确定状态的值:",toggle:"切换"},K={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State Value",setStyle:"Modify The Icon And Color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",vertical:"Vertical Direction",checkboxValidate:"Checkbox Validation",checkboxGroupValidate:"CheckboxGroup Validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all",indeterminate:"Indeterminate",indeterminateValue:"Current value:",toggle:"Toggle"},{add:I,use:O,pack:u,packs:ge,merge:ye}=q(),W=c=>{H(c),O(c)};G("zh-CN",Q);G("en-US",j);I("zh-CN",J);I("en-US",K);const X=c=>(E("data-v-277ab8bf"),c=c(),F(),c),Y={class:"indeterminate-container"},Z={class:"relation"},ee={class:"relation"},le={class:"relation"},ae=X(()=>m("div",{class:"space"},null,-1)),te={__name:"index",setup(c){const M=z({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],value9:[],value10:!1,group:null,indeterminate:!0}),{value:v,value2:V,value3:f,value4:k,value5:b,value6:_,value7:h,value8:x,value9:g,group:N,value10:y,indeterminate:p}=B(M);return w(W),D(L),(S,o)=>(P(),T(R,null,[a(e(i),null,{default:t(()=>[n(l(e(u).basicUsage),1)]),_:1}),a(e(r),{modelValue:e(v),"onUpdate:modelValue":o[0]||(o[0]=d=>s(v)?v.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(v)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).setState),1)]),_:1}),a(e(r),{"unchecked-value":0,"checked-value":1,modelValue:e(V),"onUpdate:modelValue":o[1]||(o[1]=d=>s(V)?V.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(V)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).setStyle),1)]),_:1}),a(e(r),{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e(f),"onUpdate:modelValue":o[2]||(o[2]=d=>s(f)?f.value=d:null)},{"unchecked-icon":t(()=>[a(e(A),{name:"heart-half-full",size:"24px"})]),"checked-icon":t(()=>[a(e(A),{name:"heart",size:"24px"})]),default:t(()=>[n(l(e(u).currentValue)+" "+l(e(f)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).disabled),1)]),_:1}),a(e(r),{disabled:"",modelValue:e(k),"onUpdate:modelValue":o[3]||(o[3]=d=>s(k)?k.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(k)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).readonly),1)]),_:1}),a(e(r),{readonly:"",modelValue:e(b),"onUpdate:modelValue":o[4]||(o[4]=d=>s(b)?b.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(b)),1)]),_:1},8,["modelValue"]),a(e(i),null,{default:t(()=>[n(l(e(u).indeterminate),1)]),_:1}),m("div",Y,[a(e(r),{modelValue:e(y),"onUpdate:modelValue":o[5]||(o[5]=d=>s(y)?y.value=d:null),indeterminate:e(p),"onUpdate:indeterminate":o[6]||(o[6]=d=>s(p)?p.value=d:null)},{default:t(()=>[n(l(e(u).indeterminateValue)+" "+l(e(p)),1)]),_:1},8,["modelValue","indeterminate"]),a(e(U),{class:"button",type:"primary",onClick:o[7]||(o[7]=d=>p.value=!e(p))},{default:t(()=>[n(l(e(u).toggle),1)]),_:1})]),a(e(i),null,{default:t(()=>[n(l(e(u).checkboxGroup),1)]),_:1}),a(e(C),{ref_key:"group",ref:N,modelValue:e(_),"onUpdate:modelValue":o[10]||(o[10]=d=>s(_)?_.value=d:null)},{default:t(()=>[a(e(r),{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1}),a(e(U),{class:"button",type:"primary",onClick:o[8]||(o[8]=d=>S.$refs.group.checkAll())},{default:t(()=>[n(l(e(u).checkAll),1)]),_:1}),a(e(U),{class:"button",type:"primary",onClick:o[9]||(o[9]=d=>S.$refs.group.inverseAll())},{default:t(()=>[n(l(e(u).inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),m("div",Z,l(e(u).currentValue)+" "+l(e(_)),1),a(e(i),null,{default:t(()=>[n(l(e(u).vertical),1)]),_:1}),a(e(C),{modelValue:e(g),"onUpdate:modelValue":o[11]||(o[11]=d=>s(g)?g.value=d:null),direction:"vertical"},{default:t(()=>[a(e(r),{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue"]),m("div",ee,l(e(u).currentValue)+" "+l(e(g)),1),a(e(i),null,{default:t(()=>[n(l(e(u).checkboxValidate),1)]),_:1}),a(e(r),{modelValue:e(h),"onUpdate:modelValue":o[12]||(o[12]=d=>s(h)?h.value=d:null),rules:[d=>d||e(u).checkboxValidateMessage]},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(h)),1)]),_:1},8,["modelValue","rules"]),a(e(i),null,{default:t(()=>[n(l(e(u).checkboxGroupValidate),1)]),_:1}),a(e(C),{modelValue:e(x),"onUpdate:modelValue":o[13]||(o[13]=d=>s(x)?x.value=d:null),rules:[d=>d.length===2||e(u).checkboxGroupValidateMessage]},{default:t(()=>[a(e(r),{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),m("div",le,l(e(u).currentValue)+" "+l(e(x)),1),ae],64))}},Ce=$(te,[["__scopeId","data-v-277ab8bf"]]);export{Ce as default};
