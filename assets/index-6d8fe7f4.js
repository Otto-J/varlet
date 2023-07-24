import{C as g}from"./index-61309a68.js";import{C as r}from"./index-73da8257.js";import{I as C}from"./index-ab50e7e0.js";import{B as S}from"./index-21f6c93f.js";import{_ as N,r as I,aP as z,aa as B,aC as $,f as w,h as P,q as a,S as u,an as e,ar as n,M as x,Q as l,F as D,P as d,ak as R,al as E}from"./vue-router-0425d5ec.js";import{d as F}from"./index-a0438c78.js";import{u as L,b as U,_ as T,c as q,a as Q}from"./index-5b7836e0.js";import{A as c}from"./appType-4f3a4d0c.js";import"./provide-5688a6c1.js";import"./logger-5e844ee5.js";import"./useChildren-952832a4.js";import"./index-5ef7c0ce.js";import"./index-98d3be4f.js";import"./elements-844831fb.js";/* empty css               */import"./index-633887a4.js";import"./index-02d03a95.js";import"./index-ad3c324c.js";const j={basicUsage:"基本使用",currentValue:"当前的值:",setState:"设置状态值",setStyle:"修改图标和颜色",disabled:"禁用",readonly:"只读",eat:"吃饭",sleep:"睡觉",checkAll:"全选",inverseAll:"反选",checkboxGroup:"复选框组",vertical:"垂直布局",checkboxValidate:"复选框字段校验",checkboxGroupValidate:"复选框组字段校验",checkboxValidateMessage:"请勾选",checkboxGroupValidateMessage:"请全选"},H={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State value",setStyle:"Modify the icon and color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",vertical:"Vertical direction",checkboxValidate:"Checkbox validation",checkboxGroupValidate:"CheckboxGroup validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all"},{add:A,use:J,pack:t,packs:_e,merge:be}=L(),K=i=>{Q(i),J(i)};U("zh-CN",T);U("en-US",q);A("zh-CN",j);A("en-US",H);const O=i=>(R("data-v-ae2b3caf"),i=i(),E(),i),W={class:"relation"},X={class:"relation"},Y={class:"relation"},Z=O(()=>x("div",{class:"space"},null,-1)),ee={__name:"index",setup(i){const G=I({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],value9:[],group:null}),{value:p,value2:m,value3:v,value4:f,value5:V,value6:k,value7:h,value8:_,value9:b,group:M}=z(G);return B(K),$(F),(y,s)=>(w(),P(D,null,[a(e(c),null,{default:u(()=>[d(l(e(t).basicUsage),1)]),_:1}),a(e(r),{modelValue:e(p),"onUpdate:modelValue":s[0]||(s[0]=o=>n(p)?p.value=o:null)},{default:u(()=>[d(l(e(t).currentValue)+" "+l(e(p)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(t).setState),1)]),_:1}),a(e(r),{"unchecked-value":0,"checked-value":1,modelValue:e(m),"onUpdate:modelValue":s[1]||(s[1]=o=>n(m)?m.value=o:null)},{default:u(()=>[d(l(e(t).currentValue)+" "+l(e(m)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(t).setStyle),1)]),_:1}),a(e(r),{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e(v),"onUpdate:modelValue":s[2]||(s[2]=o=>n(v)?v.value=o:null)},{"unchecked-icon":u(()=>[a(e(C),{name:"heart-half-full",size:"24px"})]),"checked-icon":u(()=>[a(e(C),{name:"heart",size:"24px"})]),default:u(()=>[d(l(e(t).currentValue)+" "+l(e(v)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(t).disabled),1)]),_:1}),a(e(r),{disabled:"",modelValue:e(f),"onUpdate:modelValue":s[3]||(s[3]=o=>n(f)?f.value=o:null)},{default:u(()=>[d(l(e(t).currentValue)+" "+l(e(f)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(t).readonly),1)]),_:1}),a(e(r),{readonly:"",modelValue:e(V),"onUpdate:modelValue":s[4]||(s[4]=o=>n(V)?V.value=o:null)},{default:u(()=>[d(l(e(t).currentValue)+" "+l(e(V)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(t).checkboxGroup),1)]),_:1}),a(e(g),{ref_key:"group",ref:M,modelValue:e(k),"onUpdate:modelValue":s[7]||(s[7]=o=>n(k)?k.value=o:null)},{default:u(()=>[a(e(r),{"checked-value":0},{default:u(()=>[d(l(e(t).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:u(()=>[d(l(e(t).sleep),1)]),_:1}),a(e(S),{class:"button",type:"primary",onClick:s[5]||(s[5]=o=>y.$refs.group.checkAll())},{default:u(()=>[d(l(e(t).checkAll),1)]),_:1}),a(e(S),{class:"button",type:"primary",onClick:s[6]||(s[6]=o=>y.$refs.group.inverseAll())},{default:u(()=>[d(l(e(t).inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),x("div",W,l(e(t).currentValue)+" "+l(e(k)),1),a(e(c),null,{default:u(()=>[d(l(e(t).vertical),1)]),_:1}),a(e(g),{modelValue:e(b),"onUpdate:modelValue":s[8]||(s[8]=o=>n(b)?b.value=o:null),direction:"vertical"},{default:u(()=>[a(e(r),{"checked-value":0},{default:u(()=>[d(l(e(t).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:u(()=>[d(l(e(t).sleep),1)]),_:1})]),_:1},8,["modelValue"]),x("div",X,l(e(t).currentValue)+" "+l(e(b)),1),a(e(c),null,{default:u(()=>[d(l(e(t).checkboxValidate),1)]),_:1}),a(e(r),{modelValue:e(h),"onUpdate:modelValue":s[9]||(s[9]=o=>n(h)?h.value=o:null),rules:[o=>o||e(t).checkboxValidateMessage]},{default:u(()=>[d(l(e(t).currentValue)+" "+l(e(h)),1)]),_:1},8,["modelValue","rules"]),a(e(c),null,{default:u(()=>[d(l(e(t).checkboxGroupValidate),1)]),_:1}),a(e(g),{modelValue:e(_),"onUpdate:modelValue":s[10]||(s[10]=o=>n(_)?_.value=o:null),rules:[o=>o.length===2||e(t).checkboxGroupValidateMessage]},{default:u(()=>[a(e(r),{"checked-value":0},{default:u(()=>[d(l(e(t).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:u(()=>[d(l(e(t).sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),x("div",Y,l(e(t).currentValue)+" "+l(e(_)),1),Z],64))}},xe=N(ee,[["__scopeId","data-v-ae2b3caf"]]);export{xe as default};
