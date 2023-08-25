import{d as b,c as C,a as U,w}from"./logger-9a144f5d.js";import{a as v}from"./elements-1fb47fa1.js";import{d as z,b as L,_ as $,f as h,i as T,S as t,O as N,m as H,aE as B,aa as D,aC as x,h as P,q as i,an as e,F as A,P as a,Q as l}from"./vue-router-547718df.js";import{S as m}from"./index-591c9b05.js";import{B as R}from"./index-220522c5.js";import{d as V}from"./index-ea9abee8.js";import{u as E,b as _,_ as F,c as I,a as M}from"./index-d39e90ed.js";import{A as s}from"./appType-610d2e23.js";/* empty css               */import"./index-fde800b6.js";import"./index-89a3ce91.js";import"./index-f194146b.js";import"./index-d113846f.js";import"./index-ef9afa54.js";import"./useChildren-05343878.js";const O={type:{type:String,default:"default"},href:String,target:String,to:[String,Object],replace:Boolean,underline:{type:String,default:"always"},disabled:Boolean,textSize:[String,Number],textColor:String,onClick:b()},{n:j,classes:q}=C("link"),Q=z({name:"VarLink",props:O,setup(n){const k=L(()=>n.disabled?"span":n.href?"a":n.to?"router-link":"a"),p=L(()=>{const{disabled:d,href:u,target:f,to:c,replace:S}=n;return d?{}:u?{href:u,target:f}:c?{to:c,target:f,replace:S}:{}});return{n:j,classes:q,tag:k,linkProps:p,handleClick:d=>{const{disabled:u,onClick:f}=n;u||U(f,d)},toSizeUnit:v}}});function W(n,k,p,g,d,u){return h(),T(B(n.tag),H(n.linkProps,{class:n.classes(n.n(),n.n("$--box"),n.n("$--inline-flex"),n.n(`--${n.type}`),[n.underline!=="none",n.n(`--underline-${n.underline}`)],[n.disabled,n.n("--disabled")]),style:{color:n.textColor,fontSize:n.toSizeUnit(n.textSize)},onClick:n.handleClick}),{default:t(()=>[N(n.$slots,"default")]),_:3},16,["class","style","onClick"])}const o=$(Q,[["render",W]]);w(o);const G={themeColorLink:"主题色链接",defaultLink:"默认链接",primaryLink:"主要链接",infoLink:"信息链接",successLink:"成功链接",warningLink:"警告链接",dangerLink:"危险链接",mode:"链接模式",hrefLink:"#/home",toLink:"/button",withHref:"href 链接",withRouterLink:"router-link 链接",underline:"下划线",useUnderlineAlways:"始终显示",useUnderlineHove:"悬停显示",notUseUnderline:"不显示",disabledStatus:"禁用状态",customColor:"自定义颜色",linkText:"链接",slots:"默认插槽",buttonText:"跳转首页"},J={themeColorLink:"Theme Color Link",defaultLink:"Default Link",primaryLink:"Primary Link",infoLink:"Info Link",successLink:"Success Link",warningLink:"Warning Link",dangerLink:"Danger Link",mode:"Link Mode",hrefLink:"#/home?language=en-US&replace=home",toLink:"/button?language=en-US&platform=mobile&replace=button",withHref:"Href",withRouterLink:"Router Link",underline:"Underline",useUnderlineAlways:"Underline",useUnderlineHove:"Hover",notUseUnderline:"Never",disabledStatus:"Disabled Status",customColor:"Custom Color",linkText:"Link",slots:"Default Slots",buttonText:"To Home"},{add:y,use:K,pack:r,packs:ke,merge:pe}=E(),X=n=>{M(n),K(n)};_("zh-CN",F);_("en-US",I);y("zh-CN",G);y("en-US",J);const ce={__name:"index",setup(n){return D(X),x(V),(k,p)=>(h(),P(A,null,[i(e(s),null,{default:t(()=>[a(l(e(r).themeColorLink),1)]),_:1}),i(e(m),{size:["2.666vmin","2.666vmin"]},{default:t(()=>[i(e(o),null,{default:t(()=>[a(l(e(r).defaultLink),1)]),_:1}),i(e(o),{type:"primary"},{default:t(()=>[a(l(e(r).primaryLink),1)]),_:1}),i(e(o),{type:"info"},{default:t(()=>[a(l(e(r).infoLink),1)]),_:1}),i(e(o),{type:"success"},{default:t(()=>[a(l(e(r).successLink),1)]),_:1}),i(e(o),{type:"warning"},{default:t(()=>[a(l(e(r).warningLink),1)]),_:1}),i(e(o),{type:"danger"},{default:t(()=>[a(l(e(r).dangerLink),1)]),_:1})]),_:1}),i(e(s),null,{default:t(()=>[a(l(e(r).mode),1)]),_:1}),i(e(m),{size:["2.666vmin","2.666vmin"]},{default:t(()=>[i(e(o),{type:"primary",href:e(r).hrefLink,target:"_blank"},{default:t(()=>[a(l(e(r).withHref),1)]),_:1},8,["href"]),i(e(o),{type:"primary",to:e(r).toLink},{default:t(()=>[a(l(e(r).withRouterLink),1)]),_:1},8,["to"])]),_:1}),i(e(s),null,{default:t(()=>[a(l(e(r).underline),1)]),_:1}),i(e(m),{size:["2.666vmin","2.666vmin"]},{default:t(()=>[i(e(o),{type:"primary"},{default:t(()=>[a(l(e(r).useUnderlineAlways),1)]),_:1}),i(e(o),{type:"primary",underline:"hover"},{default:t(()=>[a(l(e(r).useUnderlineHove),1)]),_:1}),i(e(o),{type:"primary",underline:"none"},{default:t(()=>[a(l(e(r).notUseUnderline),1)]),_:1})]),_:1}),i(e(s),null,{default:t(()=>[a(l(e(r).disabledStatus),1)]),_:1}),i(e(o),{disabled:""},{default:t(()=>[a(l(e(r).disabledStatus),1)]),_:1}),i(e(s),null,{default:t(()=>[a(l(e(r).customColor),1)]),_:1}),i(e(m),{size:["2.666vmin","2.666vmin"]},{default:t(()=>[i(e(o),{"text-color":"#009688"},{default:t(()=>[a(l(e(r).linkText),1)]),_:1}),i(e(o),{"text-color":"#ab47bc"},{default:t(()=>[a(l(e(r).linkText),1)]),_:1})]),_:1}),i(e(s),null,{default:t(()=>[a(l(e(r).slots),1)]),_:1}),i(e(o),{href:e(r).hrefLink,target:"_blank",underline:"none"},{default:t(()=>[i(e(R),{type:"primary"},{default:t(()=>[a(l(e(r).buttonText),1)]),_:1})]),_:1},8,["href"])],64))}};export{ce as default};
