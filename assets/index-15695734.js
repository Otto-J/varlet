import{d as O,c as Y,a as F,u as X,f as Z}from"./components-092ce17a.js";import{u as x}from"./useChildren-36e9566e.js";import{d as j,b as I,w as B,n as q,ax as k,_ as Q,f as M,h as L,O as D,N as g,a as _,p as ee,M as y,P as s,Q as d,q as n,D as te,H as le,R as ae,r as ne,ac as oe,aC as ie,S as a,ap as t,F as se,aD as S}from"./vue-router.esm-bundler-1e250ce9.js";import{j as U,n as de}from"./elements-9ac6e693.js";import{e as re}from"./logger-525ef361.js";import{I as ue}from"./index-db0ed10e.js";import{B as K}from"./index-2366945d.js";import{S as ce}from"./index-f83f0ac5.js";import{d as me}from"./index-59604d2c.js";import{u as fe,c as ve,a as R,_ as pe,b as he}from"./index-5cbfee55.js";import"./shared-ed6496a2.js";import"./index-8919d08d.js";import"./index-fecbe149.js";/* empty css               */import"./index-d1f7a5ea.js";import"./index-c7d7b5f9.js";import"./index-4b4d9cf6.js";const W=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");function Ce(){const{childProviders:e,length:r,bindChildren:u}=x(W);return{length:r,collapseItem:e,bindCollapseItem:u}}const ge={modelValue:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0},divider:{type:Boolean,default:!0},elevation:{type:[Boolean,String,Number],default:!0},onChange:O(),"onUpdate:modelValue":O()},{n:Ve}=Y("collapse"),be=j({name:"VarCollapse",props:ge,setup(e){const{length:r,collapseItem:u,bindCollapseItem:f}=Ce(),h=I(()=>e.modelValue),v=I(()=>e.offset),i=I(()=>e.divider),o=I(()=>e.elevation),$=()=>!e.accordion&&!k(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&k(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,T=(c,m)=>$()?m?e.accordion?c:[...e.modelValue,c]:e.accordion?null:e.modelValue.filter(b=>b!==c):null,N=(c,m)=>{const b=T(c,m);F(e["onUpdate:modelValue"],b),F(e.onChange,b)},P=()=>{if(e.accordion)return u.find(({name:m})=>e.modelValue===m.value);const c=u.filter(({name:m})=>m.value===void 0?!1:e.modelValue.includes(m.value));return c.length?c:void 0},E=()=>e.accordion?u.find(({index:c,name:m})=>m.value===void 0&&e.modelValue===c.value):u.filter(({index:c,name:m})=>m.value===void 0&&e.modelValue.includes(c.value)),w=()=>{if(!$())return;const c=P()||E();if(e.accordion&&!c||!e.accordion&&!c.length){u.forEach(m=>{m.init(e.accordion,!1)});return}u.forEach(m=>{const b=e.accordion?c===m:c.includes(m);m.init(e.accordion,b)})};return f({active:h,offset:v,divider:i,elevation:o,updateItem:N}),B(()=>r.value,()=>q().then(w)),B(()=>e.modelValue,()=>q().then(w)),{n:Ve,divider:i}}});function ye(e,r,u,f,h,v){return M(),L("div",{class:g(e.n())},[D(e.$slots,"default")],2)}const V=Q(be,[["render",ye]]);V.install=function(e){e.component(V.name,V)};function Se(){const{parentProvider:e,index:r,bindParent:u}=X(W);return u||re("Collapse","<var-collapse-item/> must in <var-collapse>"),{index:r,collapse:e,bindCollapse:u}}const $e={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}},{n:Ie,classes:_e}=Y("collapse-item"),we=j({name:"VarCollapseItem",components:{VarIcon:ue},props:$e,setup(e){const{index:r,collapse:u,bindCollapse:f}=Se();let h=!0;const v=_(null),i=_(!1),o=_(!1),{active:$,offset:T,divider:N,elevation:P,updateItem:E}=u,w=I(()=>e.name),A=(C,H)=>{$.value===void 0||C&&k($.value)||H===o.value||(o.value=H,c(!0))},c=C=>{e.disabled||C||E(e.name||r.value,!o.value)},m=()=>{v.value&&(v.value.style.height="",i.value=!0,U(()=>{const{offsetHeight:C}=v.value;v.value.style.height=0+"px",U(()=>{v.value.style.height=C+"px",h&&de(()=>{h&&z()})})}))},b=()=>{h=!1},J=()=>{if(!v.value)return;const{offsetHeight:C}=v.value;v.value.style.height=C+"px",U(()=>{v.value.style.height=0+"px"})},z=()=>{o.value||(i.value=!1),v.value.style.height=""};return f({index:r,name:w,init:A}),B(o,C=>{C?m():J()}),{n:Ie,start:b,classes:_e,showContent:i,isShow:o,offset:T,divider:N,elevation:P,toggle:c,contentEl:v,transitionend:z,formatElevation:Z}}});function De(e,r,u,f,h,v){const i=ee("var-icon");return M(),L("div",{class:g(e.classes(e.n(),[e.offset&&e.isShow,e.n("--active")],[e.disabled,e.n("--disable")])),style:ae(`--collapse-divider-top: ${e.divider?"var(--collapse-border-top)":"none"}`)},[y("div",{class:g(e.classes(e.n("shadow"),e.formatElevation(e.elevation,2)))},null,2),y("div",{class:g(e.n("header")),onClick:r[0]||(r[0]=o=>e.toggle())},[y("div",{class:g(e.n("header-title"))},[D(e.$slots,"title",{},()=>[s(d(e.title),1)])],2),y("div",{class:g(e.n("header-icon"))},[D(e.$slots,"icon",{},()=>[n(i,{name:e.icon,transition:250,class:g(e.classes(e.n("header-icon"),[e.isShow&&e.icon==="chevron-down",e.n("header-open")],[e.disabled,e.n("header--disable")]))},null,8,["name","class"])])],2)],2),te(y("div",{class:g(e.n("content")),ref:"contentEl",onTransitionend:r[1]||(r[1]=(...o)=>e.transitionend&&e.transitionend(...o)),onTransitionstart:r[2]||(r[2]=(...o)=>e.start&&e.start(...o))},[y("div",{class:g(e.n("content-wrap"))},[D(e.$slots,"default")],2)],34),[[le,e.showContent]])],6)}const p=Q(we,[["render",De]]);p.install=function(e){e.component(p.name,p)};const Te={basicUsage:"基本使用",hideMargin:"隐藏边距",accordionMode:"手风琴模式",disabled:"禁用",enable:"启用",customContent:"自定义内容",title:"标题",text:"文本",slotTitle:"这是标题",slotContent:"这是内容",hideDivider:"隐藏分割线",showDivider:"显示分割线",controlledDivider:"可控的分割线"},Ne={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content",hideDivider:"Hide Divider",showDivider:"Show Divider",controlledDivider:"Controlled Divider"},{add:G,use:Pe,pack:l,packs:Xe,merge:Ze}=fe(),Ee=e=>{ve(e),Pe(e)};R("zh-CN",pe);R("en-US",he);G("zh-CN",Te);G("en-US",Ne);const Ue=s("^_^"),xe={setup(e){const r=_(!1),u=_(!1),f=ne({value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"],value5:[]});function h(v){console.log(v)}return oe(Ee),ie(me),(v,i)=>(M(),L(se,null,[n(t(S),null,{default:a(()=>[s(d(t(l).basicUsage),1)]),_:1}),n(t(V),{modelValue:t(f).value,"onUpdate:modelValue":i[0]||(i[0]=o=>t(f).value=o),onChange:h},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),n(t(S),null,{default:a(()=>[s(d(t(l).hideMargin),1)]),_:1}),n(t(V),{modelValue:t(f).value4,"onUpdate:modelValue":i[1]||(i[1]=o=>t(f).value4=o),offset:!1},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),n(t(S),null,{default:a(()=>[s(d(t(l).controlledDivider),1)]),_:1}),n(t(K),{onClick:i[2]||(i[2]=o=>u.value=!u.value),style:{"margin-bottom":"8px"}},{default:a(()=>[s(d(u.value?t(l).hideDivider:t(l).showDivider),1)]),_:1}),n(t(V),{modelValue:t(f).value5,"onUpdate:modelValue":i[3]||(i[3]=o=>t(f).value5=o),divider:u.value,onChange:h},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"3"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue","divider"]),n(t(S),null,{default:a(()=>[s(d(t(l).accordionMode),1)]),_:1}),n(t(V),{modelValue:t(f).value1,"onUpdate:modelValue":i[4]||(i[4]=o=>t(f).value1=o),accordion:"",offset:!1},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),n(t(S),null,{default:a(()=>[s(d(t(l).disabled),1)]),_:1}),n(t(ce),{direction:"column",size:[8,8]},{default:a(()=>[n(t(K),{onClick:i[5]||(i[5]=o=>r.value=!r.value)},{default:a(()=>[s(d(r.value?t(l).enable:t(l).disabled),1)]),_:1}),n(t(V),{modelValue:t(f).value2,"onUpdate:modelValue":i[6]||(i[6]=o=>t(f).value2=o)},{default:a(()=>[n(t(p),{title:t(l).title,name:1,disabled:r.value},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title","disabled"]),n(t(p),{title:t(l).title,name:2,disabled:r.value},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),_:1}),n(t(S),null,{default:a(()=>[s(d(t(l).customContent),1)]),_:1}),n(t(V),{modelValue:t(f).value3,"onUpdate:modelValue":i[7]||(i[7]=o=>t(f).value3=o)},{default:a(()=>[n(t(p),{title:t(l).slotTitle,name:"1",icon:"account-circle"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{name:"2"},{title:a(()=>[s(d(t(l).slotTitle),1)]),icon:a(()=>[Ue]),default:a(()=>[s(" "+d(t(l).slotContent),1)]),_:1})]),_:1},8,["modelValue"])],64))}};export{xe as default};
