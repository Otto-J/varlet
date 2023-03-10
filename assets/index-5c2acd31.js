import{a as q,u as j,F as H}from"./provide-7efaa68a.js";import{c as J,i as K}from"./components-4cb81426.js";import{d as X,b as N,aQ as Z,_ as F,f as S,h,O,N as R,M as A,q as s,ap as e,n as ee,r as ae,a as $,ac as le,aC as oe,S as n,F as se,P as m,Q as i,aD as T,al as te,am as re}from"./vue-router.esm-bundler-54754668.js";import{g as ne,l as P,t as de,b as ue}from"./elements-b2cfaeee.js";import{l as me}from"./shared-ba8ca10e.js";import{I as B}from"./index-4642a427.js";import{S as z}from"./index-f55f8e62.js";import{O as b}from"./index-b5cd5618.js";import{C as ie}from"./index-e1f253c8.js";import{C as w}from"./index-e0385e47.js";import{a as pe,R as D}from"./index-6a75b0b3.js";import{B as _}from"./index-30a29b1b.js";import{S as ce}from"./index-db35f487.js";import{S as ge}from"./index-cf40485d.js";import{U as fe}from"./index-55519933.js";import{C as ve}from"./index-c73a696d.js";import{R as Ve}from"./index-d64e79c1.js";import{S as L}from"./index-40267943.js";import{I as ye}from"./index-78ce8ed1.js";import{d as be}from"./index-59604d2c.js";import{u as Me,a as W,_ as _e,b as ke,c as Ce}from"./index-86b6581d.js";import"./useChildren-a89a72f6.js";import"./index-e018303f.js";import"./usePopover-8b6b6d56.js";import"./zIndex-d6c5c92d.js";import"./index-2d85ae0d.js";import"./index-0a0943d6.js";import"./index-15d3a844.js";/* empty css               */import"./index-eb7661e6.js";import"./index-16383597.js";import"./index-f59d5424.js";import"./lock-55307aa4.js";import"./index-b23d0fa3.js";import"./index-f4cbea78.js";import"./provide-876f6c9f.js";import"./index-383003b1.js";function xe(r){return["start","end"].includes(r)}const Ue={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},scrollToError:{type:String,validator:xe},scrollToErrorOffsetY:{type:[String,Number],default:0}},{n:$e}=J("form"),Te=X({name:"VarForm",props:Ue,setup(r){const t=N(()=>r.disabled),c=N(()=>r.readonly),{formItems:d,bindFormItems:f}=q(),v=p=>{setTimeout(()=>{const u=ne(p),g=u===window?0:P(u),y=P(p)-g-de(r.scrollToErrorOffsetY);ue(u,{top:y,animation:me})},300)},o=async()=>{var u;const p=await Promise.all(d.map(({validate:g})=>g()));if(r.scrollToError){const[,g]=Z(p,M=>M===!1,r.scrollToError),y=g>-1;if(y){const M=(u=d[g].instance.proxy)==null?void 0:u.$el;v(M)}return!y}return p.every(g=>g===!0)},a=()=>d.forEach(({reset:p})=>p()),C=()=>d.forEach(({resetValidation:p})=>p());return f({disabled:t,readonly:c}),{n:$e,validate:o,reset:a,resetValidation:C}}});function we(r,t,c,d,f,v){return S(),h("div",{class:R(r.n())},[O(r.$slots,"default")],2)}const V=F(Te,[["render",we]]);V.install=function(r){r.component(V.name,V)};V.useValidation=K;V.useForm=j;const Fe={props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},validateTrigger:{type:Array,default:()=>["onToggle"]},extraMessage:{type:String}},emits:["update:modelValue"],setup(r,{expose:t,emit:c}){const d=r,{useForm:f,useValidation:v}=V,{errorMessage:o,validateWithTrigger:a,validate:C,resetValidation:x}=v(),{bindForm:p,form:u}=f(),g=()=>C(d.rules,d.modelValue);function y(){c("update:modelValue",!1),x()}function M(U){ee(()=>{const{validateTrigger:I,rules:k,modelValue:Q}=d;a(I,U,k,Q)})}function G(){d.readonly||d.disabled||u!=null&&u.readonly.value||u!=null&&u.disabled.value||(c("update:modelValue",!d.modelValue),M("onToggle"))}const E={reset:y,validate:g,resetValidation:x};return t(E),p==null||p(E),(U,I)=>{var k;return S(),h("div",{class:R(["var-custom-form-component",{"var-custom-form-component--disabled":r.disabled||((k=e(u))==null?void 0:k.disabled.value),"var-custom-form-component--error":e(o)}])},[A("div",{class:"var-custom-form-component__container",onClick:G},[s(e(ye),{class:"var-custom-form-component__icon",name:r.modelValue?"checkbox-marked-circle":"close-circle",transition:250},null,8,["name"]),O(U.$slots,"default",{},void 0,!0)]),s(e(H),{"error-message":e(o),"extra-message":r.extraMessage},null,8,["error-message","extra-message"])],2)}}},Se=F(Fe,[["__scopeId","data-v-235f566f"]]),he={example:"表单示例",username:"请输入用户名",usernameMessage:"用户名不能为空",password:"请输入密码",passwordMessage:"请输入密码",department:"请选择部门",departmentMessage:"必须选一个部门",eat:"吃饭",sleep:"睡觉",play:"打游戏",departmentUnit:"部",group:"请选择组织",groupMessage:"至少选择一个组织",groupUnit:"组",genderMessage:"必须选择一个性别",male:"男",female:"女",rateMessage:"必须大于2",likeMessage:"至少选择一个爱好",licenseMessage:"您必须开启",countMessage:"必须大于10",rangeMessage:"必须大于10",filesMessage:"至少上传一张图片",customFormComponent:"自定义表单组件",customLabel:"点我切换",customErrorMessage:"必须是对勾",customExtraMessage:"附加信息",controller:"表单控制",reset:"清空表单",resetValidation:"清空验证",validate:"触发验证",disabled:"表单禁用",readonly:"表单只读"},Ee={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",customFormComponent:"Custom Form Component",customLabel:"Click toggle",customErrorMessage:"Please check it",customExtraMessage:"Extra message",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"},{add:Y,use:Ie,pack:l,packs:_a,merge:ka}=Me(),Ne=r=>{Ce(r),Ie(r)};W("zh-CN",_e);W("en-US",ke);Y("zh-CN",he);Y("en-US",Ee);const Pe=r=>(te("data-v-9749827c"),r=r(),re(),r),Be=Pe(()=>A("div",{class:"space"},null,-1)),ze={setup(r){const t=ae({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[],custom:!1}),c=$(null),d=$(!1),f=$(!1);return le(v=>{var o;Ne(v),(o=c.value)==null||o.reset()}),oe(be),(v,o)=>(S(),h(se,null,[s(e(T),null,{default:n(()=>[m(i(e(l).example),1)]),_:1}),s(e(V),{ref_key:"form",ref:c,disabled:d.value,readonly:f.value,"scroll-to-error":"start","scroll-to-error-offset-y":"14.4vw"},{default:n(()=>[s(e(L),{direction:"column",size:["4vw",0]},{default:n(()=>[s(e(B),{placeholder:e(l).username,rules:[a=>!!a||e(l).usernameMessage],modelValue:e(t).username,"onUpdate:modelValue":o[0]||(o[0]=a=>e(t).username=a)},null,8,["placeholder","rules","modelValue"]),s(e(B),{type:"password",placeholder:e(l).password,rules:[a=>!!a||e(l).passwordMessage],modelValue:e(t).password,"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).password=a)},null,8,["placeholder","rules","modelValue"]),s(e(z),{placeholder:e(l).department,rules:[a=>!!a||e(l).departmentMessage],modelValue:e(t).department,"onUpdate:modelValue":o[2]||(o[2]=a=>e(t).department=a)},{default:n(()=>[s(e(b),{label:`${e(l).eat}${e(l).departmentUnit}`},null,8,["label"]),s(e(b),{label:`${e(l).sleep}${e(l).departmentUnit}`},null,8,["label"]),s(e(b),{label:`${e(l).play}${e(l).departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),s(e(z),{multiple:"",placeholder:e(l).group,rules:[a=>a.length>=1||e(l).groupMessage],modelValue:e(t).group,"onUpdate:modelValue":o[3]||(o[3]=a=>e(t).group=a)},{default:n(()=>[s(e(b),{label:`${e(l).eat}${e(l).groupUnit}`},null,8,["label"]),s(e(b),{label:`${e(l).sleep}${e(l).groupUnit}`},null,8,["label"]),s(e(b),{label:`${e(l).play}${e(l).groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),s(e(pe),{rules:[a=>!!a||e(l).genderMessage],modelValue:e(t).gender,"onUpdate:modelValue":o[4]||(o[4]=a=>e(t).gender=a)},{default:n(()=>[s(e(D),{"checked-value":1},{default:n(()=>[m(i(e(l).male),1)]),_:1}),s(e(D),{"checked-value":2},{default:n(()=>[m(i(e(l).female),1)]),_:1})]),_:1},8,["rules","modelValue"]),s(e(ie),{rules:[a=>a.length>0||e(l).likeMessage],modelValue:e(t).like,"onUpdate:modelValue":o[5]||(o[5]=a=>e(t).like=a)},{default:n(()=>[s(e(w),{"checked-value":1},{default:n(()=>[m(i(e(l).eat),1)]),_:1}),s(e(w),{"checked-value":2},{default:n(()=>[m(i(e(l).sleep),1)]),_:1}),s(e(w),{"checked-value":3},{default:n(()=>[m(i(e(l).play),1)]),_:1})]),_:1},8,["rules","modelValue"]),s(e(Ve),{rules:[a=>a>=3||e(l).rateMessage],modelValue:e(t).score,"onUpdate:modelValue":o[6]||(o[6]=a=>e(t).score=a)},null,8,["rules","modelValue"]),s(e(ce),{rules:[a=>!!a||e(l).licenseMessage],modelValue:e(t).license,"onUpdate:modelValue":o[7]||(o[7]=a=>e(t).license=a)},null,8,["rules","modelValue"]),s(e(ve),{rules:[a=>a>10||e(l).countMessage],modelValue:e(t).count,"onUpdate:modelValue":o[8]||(o[8]=a=>e(t).count=a)},null,8,["rules","modelValue"]),s(e(ge),{rules:[a=>a>10||e(l).rangeMessage],modelValue:e(t).range,"onUpdate:modelValue":o[9]||(o[9]=a=>e(t).range=a)},null,8,["rules","modelValue"]),s(e(fe),{rules:[a=>a.length>=1||e(l).filesMessage],modelValue:e(t).files,"onUpdate:modelValue":o[10]||(o[10]=a=>e(t).files=a)},null,8,["rules","modelValue"])]),_:1}),s(e(T),null,{default:n(()=>[m(i(e(l).customFormComponent),1)]),_:1}),s(e(Se),{"extra-message":e(l).customExtraMessage,rules:[a=>!!a||e(l).customErrorMessage],modelValue:e(t).custom,"onUpdate:modelValue":o[11]||(o[11]=a=>e(t).custom=a)},{default:n(()=>[m(i(e(l).customLabel),1)]),_:1},8,["extra-message","rules","modelValue"])]),_:1},8,["disabled","readonly"]),s(e(T),null,{default:n(()=>[m(i(e(l).controller),1)]),_:1}),s(e(L),{direction:"column",size:["4vw",0]},{default:n(()=>[s(e(_),{block:"",type:"danger",onClick:o[12]||(o[12]=a=>c.value.reset())},{default:n(()=>[m(i(e(l).reset),1)]),_:1}),s(e(_),{block:"",type:"warning",onClick:o[13]||(o[13]=a=>c.value.resetValidation())},{default:n(()=>[m(i(e(l).resetValidation),1)]),_:1}),s(e(_),{block:"",type:"success",onClick:o[14]||(o[14]=a=>c.value.validate())},{default:n(()=>[m(i(e(l).validate),1)]),_:1}),s(e(_),{block:"",type:"info",onClick:o[15]||(o[15]=a=>d.value=!d.value)},{default:n(()=>[m(i(e(l).disabled),1)]),_:1}),s(e(_),{block:"",type:"primary",onClick:o[16]||(o[16]=a=>f.value=!f.value)},{default:n(()=>[m(i(e(l).readonly),1)]),_:1})]),_:1}),Be],64))}},Ca=F(ze,[["__scopeId","data-v-9749827c"]]);export{Ca as default};
