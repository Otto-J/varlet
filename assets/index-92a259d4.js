import{I as W}from"./index-5aae3056.js";import{g as D,h as $,f as Z}from"./elements-0d8daba2.js";import{d as P,e as G,i as J,c as K,a as B}from"./components-dc0ced43.js";import{d as X,a as n,b as h,w as x,W as ee,n as ae,Z as w,_ as A,p as te,f as g,h as U,M as oe,q as se,N as C,R as ne,O as le,aC as re,i as E,S as L,ap as O,ai as ue,P as ce,Q as ie,F as de}from"./vue-router-fb57fd33.js";import{C as ve}from"./index-940ab291.js";import{d as fe}from"./index-59604d2c.js";import"./shared-2147ccdf.js";import"./logger-525ef361.js";import"./index-82d28c5f.js";import"./index-2167135d.js";/* empty css               */const me={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},target:{type:[String,Object]},onRefresh:P(),"onUpdate:modelValue":P()},{n:Y,classes:he}=K("pull-refresh"),M=150,ge=X({name:"VarPullRefresh",components:{VarIcon:W},props:me,setup(e){const t=n(0),d=n(null),c=n(null),i=n(0),o=n("-125%"),l=n("arrow-down"),a=n("default"),r=n(!1);let u,m,b,I=0,S=0;const y=n(!0),R=h(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),z=h(()=>({transform:`translate3d(0px, ${ee(o.value)?o.value:`${o.value}px`}, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:T.value?e.successBgColor:e.bgColor,color:T.value?e.successColor:e.color})),f=h(()=>Math.abs(2*t.value)),T=h(()=>a.value==="success"),F=()=>new Promise(s=>{window.setTimeout(()=>{y.value=!0,s()},M)}),N=s=>{("classList"in u?u:document.body).classList[s](`${Y()}--lock`)},H=s=>{if(t.value===0){const{width:v}=c.value.getBoundingClientRect();t.value=-(v+v*.25)}I=s.touches[0].clientY,S=0,m=D(s.target)},_=s=>{if(!R.value||m!==u&&$(m)>0)return;const v=$(u);if(v>0)return;const k=v===0;S=s.touches[0].clientY-I,k&&S>=0&&s.preventDefault(),a.value!=="pulling"&&(a.value="pulling",i.value=s.touches[0].clientY),k&&o.value>t.value&&N("add");const V=(s.touches[0].clientY-i.value)/2+t.value;o.value=V>=f.value?f.value:V,o.value>=f.value*.2?(y.value=!1,l.value="refresh",b=F()):l.value="arrow-down"},j=async()=>{R.value&&(r.value=!0,o.value>=f.value*.2?(await b,a.value="loading",o.value=f.value*.3,B(e["onUpdate:modelValue"],!0),ae(()=>{B(e.onRefresh)}),N("remove")):(a.value="loosing",l.value="arrow-down",o.value=t.value,setTimeout(()=>{r.value=!1,N("remove")},w(e.animationDuration))),m=null)},q=()=>{u=e.target?Z(e.target,"PullRefresh"):D(d.value)},Q=()=>{setTimeout(()=>{a.value="default",l.value="arrow-down",r.value=!1},w(e.animationDuration))};return x(()=>e.modelValue,s=>{s===!1&&(r.value=!0,a.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{o.value=t.value,Q()},w(e.successDuration)))}),G(q),J(d,"touchmove",_),{n:Y,classes:he,iconHasChanged:y,ICON_TRANSITION:M,refreshStatus:a,freshNode:d,controlNode:c,touchStart:H,touchMove:_,touchEnd:j,iconName:l,controlStyle:z,isSuccess:T}}});function pe(e,t,d,c,i,o){const l=te("var-icon");return g(),U("div",{ref:"freshNode",class:C(e.n()),onTouchstart:t[0]||(t[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchend:t[1]||(t[1]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:t[2]||(t[2]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[oe("div",{ref:"controlNode",class:C(e.classes(e.n("control"),e.n("$-elevation--2"),[e.isSuccess,e.n("control-success")])),style:ne(e.controlStyle)},[se(l,{name:e.iconName,transition:e.ICON_TRANSITION,class:C(e.classes(e.n("icon"),[e.refreshStatus==="loading"&&e.iconHasChanged,e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),le(e.$slots,"default")],34)}const p=A(ge,[["render",pe]]);p.install=function(e){e.component(p.name,p)};const Se={__name:"index",setup(e){const t=Array(30).fill("List Item"),d=Array(30).fill("This is new List Item"),c=n(!1),i=n(t);function o(){setTimeout(()=>{i.value=i.value[0]==="List Item"?d:t,c.value=!1},2e3)}return re(fe),(l,a)=>(g(),E(O(p),{onRefresh:o,modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=r=>c.value=r),"success-duration":"2000"},{default:L(()=>[(g(!0),U(de,null,ue(i.value,(r,u)=>(g(),E(O(ve),{key:u,border:""},{default:L(()=>[ce(ie(r+" "+(u+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},$e=A(Se,[["__scopeId","data-v-6f15a34c"]]);export{$e as default};
