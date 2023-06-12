import{a as Q,u as j,F as H}from"./provide-1b282a89.js";import{c as J,l as K}from"./logger-259930a0.js";import{d as X,b as N,aT as Z,_ as F,f as E,h as S,O as R,N as A,M as D,q as t,ao as e,n as ee,r as ae,a as T,ac as le,aE as oe,S as n,F as te,P as m,Q as i,al as se,am as re}from"./vue-router-7db650a3.js";import{f as ne,z as P,t as de,c as ue,l as me}from"./elements-52ad1f2f.js";import{I as B}from"./index-01c009d9.js";import{S as z}from"./index-9b84c474.js";import{O as b}from"./index-063cf1ec.js";import{C as ie}from"./index-599420b0.js";import{C as $}from"./index-dcc45219.js";import{a as pe,R as L}from"./index-1bec97bb.js";import{B as _}from"./index-0da0a100.js";import{S as ce}from"./index-ed273e36.js";import{S as fe}from"./index-836eef5b.js";import{U as ge}from"./index-58e2c359.js";import{C as ve}from"./index-633f02aa.js";import{R as Ve}from"./index-067d27b7.js";import{S as O}from"./index-e70e5364.js";import{I as ye}from"./index-01c5ce39.js";import{d as be}from"./index-5c6220a4.js";import{u as Me,a as W,_ as _e,b as ke,c as xe}from"./index-e90bb75b.js";import{A as w}from"./appType-51d5c289.js";import"./useChildren-52535654.js";import"./FieldDecorator-628c3202.js";import"./useWindowResize-5ff7d75f.js";import"./index-d587d205.js";import"./usePopover-ee8c5c36.js";import"./zIndex-729a3e39.js";import"./index-b78d9f2d.js";import"./index-d78956fe.js";import"./index-8506fb9f.js";/* empty css               */import"./index-d29e90c2.js";import"./index-e400b592.js";import"./index-3f1901ad.js";import"./index-4bd5db23.js";import"./lock-0099df2a.js";import"./index-062a8112.js";import"./index-546b0379.js";import"./provide-c7fad016.js";import"./index-ebfac036.js";function Ce(r){return["start","end"].includes(r)}const Ue={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},scrollToError:{type:String,validator:Ce},scrollToErrorOffsetY:{type:[String,Number],default:0}},{n:Te}=J("form"),$e=X({name:"VarForm",props:Ue,setup(r){const s=N(()=>r.disabled),c=N(()=>r.readonly),{formItems:d,bindFormItems:g}=Q(),v=p=>{setTimeout(()=>{const u=ne(p),f=u===window?0:P(u),y=P(p)-f-de(r.scrollToErrorOffsetY);ue(u,{top:y,animation:me})},300)},o=async()=>{var u;const p=await Promise.all(d.map(({validate:f})=>f()));if(r.scrollToError){const[,f]=Z(p,M=>M===!1,r.scrollToError),y=f>-1;if(y){const M=(u=d[f].instance.proxy)==null?void 0:u.$el;v(M)}return!y}return p.every(f=>f===!0)},a=()=>d.forEach(({reset:p})=>p()),x=()=>d.forEach(({resetValidation:p})=>p());return g({disabled:s,readonly:c}),{n:Te,validate:o,reset:a,resetValidation:x}}});function we(r,s,c,d,g,v){return E(),S("div",{class:A(r.n())},[R(r.$slots,"default")],2)}const V=F($e,[["render",we]]);V.install=function(r){r.component(V.name,V)};V.useValidation=K;V.useForm=j;const Fe={__name:"CustomFormComponent",props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},validateTrigger:{type:Array,default:()=>["onToggle"]},extraMessage:{type:String}},emits:["update:modelValue"],setup(r,{expose:s,emit:c}){const d=r,{useForm:g,useValidation:v}=V,{errorMessage:o,validateWithTrigger:a,validate:x,resetValidation:C}=v(),{bindForm:p,form:u}=g(),f=()=>x(d.rules,d.modelValue);function y(){c("update:modelValue",!1),C()}function M(U){ee(()=>{const{validateTrigger:I,rules:k,modelValue:q}=d;a(I,U,k,q)})}function G(){d.readonly||d.disabled||u!=null&&u.readonly.value||u!=null&&u.disabled.value||(c("update:modelValue",!d.modelValue),M("onToggle"))}const h={reset:y,validate:f,resetValidation:C};return s(h),p==null||p(h),(U,I)=>{var k;return E(),S("div",{class:A(["var-custom-form-component",{"var-custom-form-component--disabled":r.disabled||((k=e(u))==null?void 0:k.disabled.value),"var-custom-form-component--error":e(o)}])},[D("div",{class:"var-custom-form-component__container",onClick:G},[t(e(ye),{class:"var-custom-form-component__icon",name:r.modelValue?"checkbox-marked-circle":"close-circle",transition:250},null,8,["name"]),R(U.$slots,"default",{},void 0,!0)]),t(e(H),{"error-message":e(o),"extra-message":r.extraMessage},null,8,["error-message","extra-message"])],2)}}},Ee=F(Fe,[["__scopeId","data-v-235f566f"]]),Se={example:"表单示例",username:"请输入用户名",usernameMessage:"用户名不能为空",password:"请输入密码",passwordMessage:"请输入密码",department:"请选择部门",departmentMessage:"必须选一个部门",eat:"吃饭",sleep:"睡觉",play:"打游戏",departmentUnit:"部",group:"请选择组织",groupMessage:"至少选择一个组织",groupUnit:"组",genderMessage:"必须选择一个性别",male:"男",female:"女",rateMessage:"必须大于2",likeMessage:"至少选择一个爱好",licenseMessage:"您必须开启",countMessage:"必须大于10",rangeMessage:"必须大于10",filesMessage:"至少上传一张图片",customFormComponent:"自定义表单组件",customLabel:"点我切换",customErrorMessage:"必须是对勾",customExtraMessage:"附加信息",controller:"表单控制",reset:"清空表单",resetValidation:"清空验证",validate:"触发验证",disabled:"表单禁用",readonly:"表单只读"},he={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",customFormComponent:"Custom Form Component",customLabel:"Click toggle",customErrorMessage:"Please check it",customExtraMessage:"Extra message",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"},{add:Y,use:Ie,pack:l,packs:Ca,merge:Ua}=Me(),Ne=r=>{xe(r),Ie(r)};W("zh-CN",_e);W("en-US",ke);Y("zh-CN",Se);Y("en-US",he);const Pe=r=>(se("data-v-9749827c"),r=r(),re(),r),Be=Pe(()=>D("div",{class:"space"},null,-1)),ze={__name:"index",setup(r){const s=ae({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[],custom:!1}),c=T(null),d=T(!1),g=T(!1);return le(v=>{var o;Ne(v),(o=c.value)==null||o.reset()}),oe(be),(v,o)=>(E(),S(te,null,[t(e(w),null,{default:n(()=>[m(i(e(l).example),1)]),_:1}),t(e(V),{ref_key:"form",ref:c,disabled:d.value,readonly:g.value,"scroll-to-error":"start","scroll-to-error-offset-y":"14.4vw"},{default:n(()=>[t(e(O),{direction:"column",size:["4vw",0]},{default:n(()=>[t(e(B),{placeholder:e(l).username,rules:[a=>!!a||e(l).usernameMessage],modelValue:s.username,"onUpdate:modelValue":o[0]||(o[0]=a=>s.username=a)},null,8,["placeholder","rules","modelValue"]),t(e(B),{type:"password",placeholder:e(l).password,rules:[a=>!!a||e(l).passwordMessage],modelValue:s.password,"onUpdate:modelValue":o[1]||(o[1]=a=>s.password=a)},null,8,["placeholder","rules","modelValue"]),t(e(z),{placeholder:e(l).department,rules:[a=>!!a||e(l).departmentMessage],modelValue:s.department,"onUpdate:modelValue":o[2]||(o[2]=a=>s.department=a)},{default:n(()=>[t(e(b),{label:`${e(l).eat}${e(l).departmentUnit}`},null,8,["label"]),t(e(b),{label:`${e(l).sleep}${e(l).departmentUnit}`},null,8,["label"]),t(e(b),{label:`${e(l).play}${e(l).departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),t(e(z),{multiple:"",placeholder:e(l).group,rules:[a=>a.length>=1||e(l).groupMessage],modelValue:s.group,"onUpdate:modelValue":o[3]||(o[3]=a=>s.group=a)},{default:n(()=>[t(e(b),{label:`${e(l).eat}${e(l).groupUnit}`},null,8,["label"]),t(e(b),{label:`${e(l).sleep}${e(l).groupUnit}`},null,8,["label"]),t(e(b),{label:`${e(l).play}${e(l).groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),t(e(pe),{rules:[a=>!!a||e(l).genderMessage],modelValue:s.gender,"onUpdate:modelValue":o[4]||(o[4]=a=>s.gender=a)},{default:n(()=>[t(e(L),{"checked-value":1},{default:n(()=>[m(i(e(l).male),1)]),_:1}),t(e(L),{"checked-value":2},{default:n(()=>[m(i(e(l).female),1)]),_:1})]),_:1},8,["rules","modelValue"]),t(e(ie),{rules:[a=>a.length>0||e(l).likeMessage],modelValue:s.like,"onUpdate:modelValue":o[5]||(o[5]=a=>s.like=a)},{default:n(()=>[t(e($),{"checked-value":1},{default:n(()=>[m(i(e(l).eat),1)]),_:1}),t(e($),{"checked-value":2},{default:n(()=>[m(i(e(l).sleep),1)]),_:1}),t(e($),{"checked-value":3},{default:n(()=>[m(i(e(l).play),1)]),_:1})]),_:1},8,["rules","modelValue"]),t(e(Ve),{rules:[a=>a>=3||e(l).rateMessage],modelValue:s.score,"onUpdate:modelValue":o[6]||(o[6]=a=>s.score=a)},null,8,["rules","modelValue"]),t(e(ce),{rules:[a=>!!a||e(l).licenseMessage],modelValue:s.license,"onUpdate:modelValue":o[7]||(o[7]=a=>s.license=a)},null,8,["rules","modelValue"]),t(e(ve),{rules:[a=>a>10||e(l).countMessage],modelValue:s.count,"onUpdate:modelValue":o[8]||(o[8]=a=>s.count=a)},null,8,["rules","modelValue"]),t(e(fe),{rules:[a=>a>10||e(l).rangeMessage],modelValue:s.range,"onUpdate:modelValue":o[9]||(o[9]=a=>s.range=a)},null,8,["rules","modelValue"]),t(e(ge),{rules:[a=>a.length>=1||e(l).filesMessage],modelValue:s.files,"onUpdate:modelValue":o[10]||(o[10]=a=>s.files=a)},null,8,["rules","modelValue"])]),_:1}),t(e(w),null,{default:n(()=>[m(i(e(l).customFormComponent),1)]),_:1}),t(e(Ee),{"extra-message":e(l).customExtraMessage,rules:[a=>!!a||e(l).customErrorMessage],modelValue:s.custom,"onUpdate:modelValue":o[11]||(o[11]=a=>s.custom=a)},{default:n(()=>[m(i(e(l).customLabel),1)]),_:1},8,["extra-message","rules","modelValue"])]),_:1},8,["disabled","readonly"]),t(e(w),null,{default:n(()=>[m(i(e(l).controller),1)]),_:1}),t(e(O),{direction:"column",size:["4vw",0]},{default:n(()=>[t(e(_),{block:"",type:"danger",onClick:o[12]||(o[12]=a=>c.value.reset())},{default:n(()=>[m(i(e(l).reset),1)]),_:1}),t(e(_),{block:"",type:"warning",onClick:o[13]||(o[13]=a=>c.value.resetValidation())},{default:n(()=>[m(i(e(l).resetValidation),1)]),_:1}),t(e(_),{block:"",type:"success",onClick:o[14]||(o[14]=a=>c.value.validate())},{default:n(()=>[m(i(e(l).validate),1)]),_:1}),t(e(_),{block:"",type:"info",onClick:o[15]||(o[15]=a=>d.value=!d.value)},{default:n(()=>[m(i(e(l).disabled),1)]),_:1}),t(e(_),{block:"",type:"primary",onClick:o[16]||(o[16]=a=>g.value=!g.value)},{default:n(()=>[m(i(e(l).readonly),1)]),_:1})]),_:1}),Be],64))}},Ta=F(ze,[["__scopeId","data-v-9749827c"]]);export{Ta as default};
