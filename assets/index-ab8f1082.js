import{a1 as Z,d as K,B as I,F as B,n as O,a2 as M,_ as W,e as k,l as L,s as D,t as g,a3 as x,r as $,aJ as N,j as ee,b as te,m as y,P as s,Q as d,p as n,O as le,Y as ae,v as ne,W as oe,E as ie,aj as se,w as a,U as t,M as de}from"./index-e8376e61.js";import{d as Y,c as J,a as j,w as Q,f as re}from"./components-c1e1aae1.js";import{I as ue}from"./index-a59b997c.js";import{e as ce}from"./logger-525ef361.js";import{B as F}from"./index-488b41db.js";import{S as me}from"./index-78301ca6.js";import{d as fe}from"./index-ea9abee8.js";import{u as ve,b as R,_ as pe,c as he,a as Ce}from"./index-926393f1.js";import{A as w}from"./appType-c1fc7b5a.js";import"./elements-4558e7ec.js";import"./index-48b82d81.js";import"./index-7646a58d.js";/* empty css               */import"./index-f8d05da5.js";import"./index-a002b329.js";import"./index-9698d333.js";const q=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");function ge(){const{childProviders:e,length:r,bindChildren:u}=Z(q);return{length:r,collapseItem:e,bindCollapseItem:u}}const Ve={modelValue:[Array,String,Number],accordion:Boolean,offset:{type:Boolean,default:!0},divider:{type:Boolean,default:!0},elevation:{type:[Boolean,String,Number],default:!0},onChange:Y(),"onUpdate:modelValue":Y()},{n:be}=J("collapse"),ye=K({name:"VarCollapse",props:Ve,setup(e){const{length:r,collapseItem:u,bindCollapseItem:v}=ge(),h=I(()=>e.modelValue),c=I(()=>e.offset),i=I(()=>e.divider),o=I(()=>e.elevation),S=()=>!e.accordion&&!M(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&M(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,E=(m,f)=>S()?f?e.accordion?m:[...e.modelValue,m]:e.accordion?null:e.modelValue.filter(V=>V!==m):null,P=(m,f)=>{const V=E(m,f);j(e["onUpdate:modelValue"],V),j(e.onChange,V)},T=()=>{if(e.accordion)return u.find(({name:f})=>e.modelValue===f.value);const m=u.filter(({name:f})=>f.value===void 0?!1:e.modelValue.includes(f.value));return m.length?m:void 0},U=()=>e.accordion?u.find(({index:m,name:f})=>f.value===void 0&&e.modelValue===m.value):u.filter(({index:m,name:f})=>f.value===void 0&&e.modelValue.includes(m.value)),_=()=>{if(!S())return;const m=T()||U();if(e.accordion&&!m||!e.accordion&&!m.length){u.forEach(f=>{f.init(e.accordion,!1)});return}u.forEach(f=>{const V=e.accordion?m===f:m.includes(f);f.init(e.accordion,V)})};return v({active:h,offset:c,divider:i,elevation:o,updateItem:P}),B(()=>r.value,()=>O().then(_)),B(()=>e.modelValue,()=>O().then(_)),{n:be,divider:i}}});function we(e,r,u,v,h,c){return k(),L("div",{class:g(e.n())},[D(e.$slots,"default")],2)}const b=W(ye,[["render",we]]);Q(b);function Se(){const{parentProvider:e,index:r,bindParent:u}=x(q);return u||ce("Collapse","<var-collapse-item/> must in <var-collapse>"),{index:r,collapse:e,bindCollapse:u}}const Ie={name:[String,Number],title:String,icon:{type:String,default:"chevron-down"},disabled:Boolean},{n:$e,classes:_e}=J("collapse-item"),De=K({name:"VarCollapseItem",components:{VarIcon:ue},props:Ie,setup(e){const{index:r,collapse:u,bindCollapse:v}=Se();let h=!0;const c=$(null),i=$(!1),o=$(!1),{active:S,offset:E,divider:P,elevation:T,updateItem:U}=u,_=I(()=>e.name),A=(C,H)=>{S.value===void 0||C&&M(S.value)||H===o.value||(o.value=H,m(!0))},m=C=>{e.disabled||C||U(e.name||r.value,!o.value)},f=async()=>{if(!c.value||(c.value.style.height="",i.value=!0,await N(),!c.value))return;const{offsetHeight:C}=c.value;c.value.style.height="0px",await N(),c.value&&(c.value.style.height=C+"px",h&&(await ee(),h&&z()))},V=()=>{h=!1},X=async()=>{if(!c.value)return;const{offsetHeight:C}=c.value;c.value.style.height=C+"px",await N(),c.value.style.height="0px"},z=()=>{o.value||(i.value=!1),c.value.style.height=""};return v({index:r,name:_,init:A}),B(o,C=>{C?f():X()}),{n:$e,start:V,classes:_e,showContent:i,isShow:o,offset:E,divider:P,elevation:T,toggle:m,contentEl:c,transitionend:z,formatElevation:re}}});function Ee(e,r,u,v,h,c){const i=te("var-icon");return k(),L("div",{class:g(e.classes(e.n(),[e.offset&&e.isShow,e.n("--active")],[e.disabled,e.n("--disable")])),style:ne(`--collapse-divider-top: ${e.divider?"var(--collapse-border-top)":"none"}`)},[y("div",{class:g(e.classes(e.n("shadow"),e.formatElevation(e.elevation,2)))},null,2),y("div",{class:g(e.n("header")),onClick:r[0]||(r[0]=o=>e.toggle())},[y("div",{class:g(e.n("header-title"))},[D(e.$slots,"title",{},()=>[s(d(e.title),1)])],2),y("div",{class:g(e.n("header-icon"))},[D(e.$slots,"icon",{},()=>[n(i,{name:e.icon,transition:250,class:g(e.classes(e.n("header-icon"),[e.isShow&&e.icon==="chevron-down",e.n("header-open")],[e.disabled,e.n("header--disable")]))},null,8,["name","class"])])],2)],2),le(y("div",{class:g(e.n("content")),ref:"contentEl",onTransitionend:r[1]||(r[1]=(...o)=>e.transitionend&&e.transitionend(...o)),onTransitionstart:r[2]||(r[2]=(...o)=>e.start&&e.start(...o))},[y("div",{class:g(e.n("content-wrap"))},[D(e.$slots,"default")],2)],34),[[ae,e.showContent]])],6)}const p=W(De,[["render",Ee]]);Q(p);const Pe={basicUsage:"基本使用",hideMargin:"隐藏边距",accordionMode:"手风琴模式",disabled:"禁用",enable:"启用",customContent:"自定义内容",title:"标题",text:"文本",slotTitle:"这是标题",slotContent:"这是内容",hideDivider:"隐藏分割线",showDivider:"显示分割线",controlledDivider:"可控的分割线"},Te={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content",hideDivider:"Hide Divider",showDivider:"Show Divider",controlledDivider:"Controlled Divider"},{add:G,use:Ue,pack:l,packs:Ge,merge:Xe}=ve(),Ne=e=>{Ce(e),Ue(e)};R("zh-CN",pe);R("en-US",he);G("zh-CN",Pe);G("en-US",Te);const Ze={__name:"index",setup(e){const r=$(!1),u=$(!1),v=oe({value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"],value5:[]});function h(c){console.log(c)}return ie(Ne),se(fe),(c,i)=>(k(),L(de,null,[n(t(w),null,{default:a(()=>[s(d(t(l).basicUsage),1)]),_:1}),n(t(b),{modelValue:v.value,"onUpdate:modelValue":i[0]||(i[0]=o=>v.value=o),onChange:h},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),n(t(w),null,{default:a(()=>[s(d(t(l).hideMargin),1)]),_:1}),n(t(b),{modelValue:v.value4,"onUpdate:modelValue":i[1]||(i[1]=o=>v.value4=o),offset:!1},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),n(t(w),null,{default:a(()=>[s(d(t(l).controlledDivider),1)]),_:1}),n(t(F),{onClick:i[2]||(i[2]=o=>u.value=!u.value),style:{"margin-bottom":"8px"}},{default:a(()=>[s(d(u.value?t(l).hideDivider:t(l).showDivider),1)]),_:1}),n(t(b),{modelValue:v.value5,"onUpdate:modelValue":i[3]||(i[3]=o=>v.value5=o),divider:u.value,onChange:h},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"3"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue","divider"]),n(t(w),null,{default:a(()=>[s(d(t(l).accordionMode),1)]),_:1}),n(t(b),{modelValue:v.value1,"onUpdate:modelValue":i[4]||(i[4]=o=>v.value1=o),accordion:"",offset:!1},{default:a(()=>[n(t(p),{title:t(l).title,name:"1"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{title:t(l).title,name:"2"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),n(t(w),null,{default:a(()=>[s(d(t(l).disabled),1)]),_:1}),n(t(me),{direction:"column",size:[8,8]},{default:a(()=>[n(t(F),{onClick:i[5]||(i[5]=o=>r.value=!r.value)},{default:a(()=>[s(d(r.value?t(l).enable:t(l).disabled),1)]),_:1}),n(t(b),{modelValue:v.value2,"onUpdate:modelValue":i[6]||(i[6]=o=>v.value2=o)},{default:a(()=>[n(t(p),{title:t(l).title,name:1,disabled:r.value},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title","disabled"]),n(t(p),{title:t(l).title,name:2,disabled:r.value},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),_:1}),n(t(w),null,{default:a(()=>[s(d(t(l).customContent),1)]),_:1}),n(t(b),{modelValue:v.value3,"onUpdate:modelValue":i[7]||(i[7]=o=>v.value3=o)},{default:a(()=>[n(t(p),{title:t(l).slotTitle,name:"1",icon:"account-circle"},{default:a(()=>[s(d(t(l).text),1)]),_:1},8,["title"]),n(t(p),{name:"2"},{title:a(()=>[s(d(t(l).slotTitle),1)]),icon:a(()=>[s("^_^")]),default:a(()=>[s(" "+d(t(l).slotContent),1)]),_:1})]),_:1},8,["modelValue"])],64))}};export{Ze as default};
