import{d as R,a as p,w as E,b as O,q as t,E as z,p as B,D as I,H as $,_ as H,ac as j,aB as q,f as D,h as G,S as a,ap as e,i as M,P as i,Q as y,aC as S,ah as N}from"./vue-router.esm-bundler-6a15ebdc.js";import{a as Q}from"./usePopover-2eaf3df6.js";import{d as J,b as K,n as W,c as X}from"./components-b2cf396a.js";import{B as k}from"./index-8d37b36a.js";import{I as V}from"./index-80caacbc.js";import{A as Y}from"./index-9625d9c9.js";import{T as P}from"./index-72fc121a.js";import{R as c,a as T}from"./index-2fa9711b.js";import{S as Z}from"./index-0a45b6cd.js";import{O as w}from"./index-9caad9f9.js";import{S as ee}from"./index-d76aaf37.js";import{u as te,c as ae,a as F,_ as oe,b as le}from"./index-e073ab9f.js";import{d as ie}from"./index-59604d2c.js";import"./elements-36e88402.js";import"./shared-a4852f61.js";import"./zIndex-bc368a4a.js";import"./index-dceab6e9.js";import"./index-b31336a6.js";/* empty css               */import"./index-e906761c.js";import"./index-540f04fa.js";import"./index-534b1779.js";import"./provide-629c8788.js";import"./index-d78fea44.js";import"./index-bdd7a8a1.js";import"./index-12fc7258.js";const ne={active:{type:Boolean,default:!1},color:{type:String},textColor:{type:String},icon:{type:String,default:"plus"},iconSize:{type:[Number,String],default:"24px"},type:{type:String,default:"primary",validator:o=>["default","primary","info","success","warning","danger"].includes(o)},direction:{type:String,default:"top",validator:o=>["top","right","bottom","left"].includes(o)},position:{type:String,default:"right-bottom",validator:o=>["left-top","right-top","left-bottom","right-bottom"].includes(o)},trigger:{type:String,default:"click",validator:o=>["click","hover"].includes(o)},"onUpdate:modelValue":J()};const{classes:re,n:g}=X("fab"),x=R({name:"VarFab",components:{[k.name]:k,[V.name]:V},props:ne,setup(o,{slots:u}){const f=p(o.active),d=p(null);E(()=>o.active,l=>{f.value=l});const m=O({get(){return f.value},set(l){f.value=l,K(o["onUpdate:active"],l)}}),h=O(()=>re(g(),g("--fixed"),g(`--${o.position}`),g(`--direction-${o.direction}`),[m.value,g("--is-active")])),v=l=>{m.value=l},b=(l,C)=>{l.stopPropagation(),o.trigger==="click"&&v(C)},U=l=>{o.trigger==="hover"&&v(l)};return Q(d,"click",()=>{o.trigger==="click"&&v(!1)}),()=>{var C;const l=W((C=u.default)==null?void 0:C.call(u));return t("div",{ref:d,class:h.value,onClick:_=>b(_,!m.value),onMouseleave:()=>U(!1),onMouseenter:()=>U(!0)},[t(z,{name:g("--active-transition")},{default:()=>{var _;return[u.activator?(_=u.activator)==null?void 0:_.call(u):t(B("var-button"),{type:o.type,color:o.color,textColor:o.textColor,round:!0},{default:()=>[t(B("var-icon"),{name:o.icon,size:o.iconSize},null)]})]}}),t(z,{name:g("--actions-transition"),appear:!0},{default:()=>[I(t("div",{class:g("list")},[l.map((_,n)=>t("div",{style:{transitionDelay:n*.05+"s"}},[_]))]),[[$,m.value&&l.length]])]})])}}});x.install=function(o){o.component(x.name,x)};const ue={themeColor:"主题色动作按钮",animationOnDisplay:"显示时动画",show:"显示",hidden:"隐藏",trigger:"触发方式",direction:"动作菜单弹出方向",position:"触发器位置",customSlots:"自定义触发器",default:"默认",primary:"主要",info:"信息",success:"成功",warning:"警告",danger:"危险"},se={themeColor:"Theme Color Action Buttons",animationOnDisplay:"Animation On Display",show:"show",hidden:"hidden",trigger:"Trigger Mode",direction:"Action Menu Pop Up Direction",position:"Trigger Position",customSlots:"Custom Triggers",default:"default",primary:"primary",info:"info",success:"success",warning:"warning",danger:"danger"},{add:L,use:de,pack:r,packs:Ke,merge:We}=te(),ce=o=>{ae(o),de(o)};F("zh-CN",oe);F("en-US",le);L("zh-CN",ue);L("en-US",se);const me=i("left-top"),pe=i("right-top"),fe=i("left-bottom"),ve=i("right-bottom"),ge=i("click"),he=i("hover"),_e=i("top"),ye=i("right"),ke=i("bottom"),be=i("left"),Ce={setup(o){const u=p(!1),f=p(!0),d=p(!1),m=p("primary"),h=p("click"),v=p("top"),b=p("right-bottom"),U=O(()=>d.value?"window-close":"cog-outline");function A(){d.value=!d.value,h.value==="hover"&&(d.value=!1)}function l(){d.value=!1}function C(){f.value=!f.value,l()}return j(ce),q(ie),(_,n)=>(D(),G("div",null,[t(e(S),null,{default:a(()=>[i(y(e(r).themeColor),1)]),_:1}),t(e(Z),{hint:!1,modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=s=>m.value=s)},{default:a(()=>[t(e(w),{label:e(r).default,value:"default"},null,8,["label"]),t(e(w),{label:e(r).primary,value:"primary"},null,8,["label"]),t(e(w),{label:e(r).info,value:"info"},null,8,["label"]),t(e(w),{label:e(r).success,value:"success"},null,8,["label"]),t(e(w),{label:e(r).warning,value:"warning"},null,8,["label"]),t(e(w),{label:e(r).danger,value:"danger"},null,8,["label"])]),_:1},8,["modelValue"]),t(e(S),null,{default:a(()=>[i(y(e(r).position),1)]),_:1}),t(e(T),{modelValue:b.value,"onUpdate:modelValue":n[1]||(n[1]=s=>b.value=s)},{default:a(()=>[t(e(c),{"checked-value":"left-top"},{default:a(()=>[me]),_:1}),t(e(c),{"checked-value":"right-top"},{default:a(()=>[pe]),_:1}),t(e(c),{"checked-value":"left-bottom"},{default:a(()=>[fe]),_:1}),t(e(c),{"checked-value":"right-bottom"},{default:a(()=>[ve]),_:1})]),_:1},8,["modelValue"]),t(e(S),null,{default:a(()=>[i(y(e(r).trigger),1)]),_:1}),t(e(T),{modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=s=>h.value=s)},{default:a(()=>[t(e(c),{"checked-value":"click"},{default:a(()=>[ge]),_:1}),t(e(c),{"checked-value":"hover"},{default:a(()=>[he]),_:1})]),_:1},8,["modelValue"]),t(e(S),null,{default:a(()=>[i(y(e(r).direction),1)]),_:1}),t(e(T),{modelValue:v.value,"onUpdate:modelValue":n[3]||(n[3]=s=>v.value=s),onChange:l},{default:a(()=>[t(e(c),{"checked-value":"top"},{default:a(()=>[_e]),_:1}),t(e(c),{"checked-value":"right"},{default:a(()=>[ye]),_:1}),t(e(c),{"checked-value":"bottom"},{default:a(()=>[ke]),_:1}),t(e(c),{"checked-value":"left"},{default:a(()=>[be]),_:1})]),_:1},8,["modelValue"]),t(e(S),null,{default:a(()=>[i(y(e(r).customSlots),1)]),_:1}),t(e(ee),{modelValue:u.value,"onUpdate:modelValue":n[4]||(n[4]=s=>u.value=s),onChange:l},null,8,["modelValue"]),t(e(S),null,{default:a(()=>[i(y(e(r).animationOnDisplay),1)]),_:1}),t(e(k),{type:"primary",onClick:C,disabled:!u.value},{default:a(()=>[i(y(f.value?e(r).hidden:e(r).show),1)]),_:1},8,["disabled"]),u.value?(D(),M(e(x),{key:1,active:d.value,"onUpdate:active":n[5]||(n[5]=s=>d.value=s),position:b.value,direction:v.value,trigger:h.value},{activator:a(()=>[I(t(e(k),{type:m.value,round:"",onClick:N(A,["stop"])},{default:a(()=>[t(e(V),{"animation-class":"fade",name:e(U),transition:200},null,8,["name"])]),_:1},8,["type","onClick"]),[[$,f.value]])]),default:a(()=>[t(e(P),{content:"camera",placement:"left"},{default:a(()=>[t(e(k),{type:"warning",round:"",onClick:N(A,["stop"])},{default:a(()=>[t(e(V),{name:"camera-outline"})]),_:1},8,["onClick"])]),_:1}),t(e(k),{type:"primary",round:"",onClick:N(A,["stop"])},{default:a(()=>[t(e(V),{name:"phone-outline"})]),_:1},8,["onClick"])]),_:1},8,["active","position","direction","trigger"])):(D(),M(e(x),{key:0,type:m.value,position:b.value,direction:v.value,trigger:h.value},{default:a(()=>[t(e(P),{content:"Tooltip",placement:"left"},{default:a(()=>[t(e(Y),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:"mini"})]),_:1}),t(e(k),{type:"danger",round:""},{default:a(()=>[t(e(V),{name:"check"})]),_:1})]),_:1},8,["type","position","direction","trigger"]))]))}},Xe=H(Ce,[["__scopeId","data-v-75248a40"]]);export{Xe as default};
