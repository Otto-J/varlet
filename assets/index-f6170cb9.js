import{d as b,c as w,a as C}from"./components-440543a7.js";import{a as U}from"./elements-323d4edc.js";import{d as v,b as y,_ as z,f as L,i as $,S as t,O as T,m as H,aH as N,ac as D,aC as B,h as P,q as a,ap as e,F as x,P as i,Q as l,aD as s}from"./vue-router.esm-bundler-6be07501.js";import{S as p}from"./index-c4496cee.js";import{B as V}from"./index-af8cef8a.js";import{d as A}from"./index-59604d2c.js";import{u as R,c as F,a as h,_ as M,b as O}from"./index-3093d569.js";import"./shared-bf7e5160.js";/* empty css               */import"./index-4453413c.js";import"./index-acdd7a60.js";import"./index-76209a1a.js";import"./index-34c73e6b.js";import"./index-d73f18e4.js";import"./useChildren-9d793b89.js";function j(n){return["default","primary","info","success","warning","danger"].includes(n)}function q(n){return["always","hover","none"].includes(n)}const E={type:{type:String,default:"default",validator:j},href:{type:String},target:{type:String},to:{type:[String,Object]},replace:{type:Boolean,default:!1},underline:{type:String,default:"always",validator:q},disabled:{type:Boolean,default:!1},textSize:{type:[String,Number]},textColor:{type:String},onClick:b()},{n:I,classes:Q}=w("link"),W=v({name:"VarLink",props:E,setup(n){const c=y(()=>n.disabled?"span":n.href?"a":n.to?"router-link":"a"),k=y(()=>{const{disabled:d,href:u,target:f,to:m,replace:S}=n;return d?{}:u?{href:u,target:f}:m?{to:m,target:f,replace:S}:{}});return{n:I,classes:Q,tag:c,linkProps:k,handleClick:d=>{const{disabled:u,onClick:f}=n;u||C(f,d)},toSizeUnit:U}}});function G(n,c,k,g,d,u){return L(),$(N(n.tag),H(n.linkProps,{class:n.classes(n.n(),n.n("$--box"),n.n("$--inline-flex"),n.n(`--${n.type}`),[n.underline!=="none",n.n(`--underline-${n.underline}`)],[n.disabled,n.n("--disabled")]),style:{color:n.textColor,fontSize:n.toSizeUnit(n.textSize)},onClick:n.handleClick}),{default:t(()=>[T(n.$slots,"default")]),_:3},16,["class","style","onClick"])}const o=z(W,[["render",G]]);o.install=function(n){n.component(o.name,o)};const J={themeColorLink:"主题色链接",defaultLink:"默认链接",primaryLink:"主要链接",infoLink:"信息链接",successLink:"成功链接",warningLink:"警告链接",dangerLink:"危险链接",mode:"链接模式",hrefLink:"#/home",toLink:"/button",withHref:"href 链接",withRouterLink:"router-link 链接",underline:"下划线",useUnderlineAlways:"始终显示",useUnderlineHove:"悬停显示",notUseUnderline:"不显示",disabledStatus:"禁用状态",customColor:"自定义颜色",linkText:"链接",slots:"默认插槽",buttonText:"跳转首页"},K={themeColorLink:"Theme Color Link",defaultLink:"Default Link",primaryLink:"Primary Link",infoLink:"Info Link",successLink:"Success Link",warningLink:"Warning Link",dangerLink:"Danger Link",mode:"Link Mode",hrefLink:"#/home?language=en-US&replace=home",toLink:"/button?language=en-US&platform=mobile&replace=button",withHref:"Href",withRouterLink:"Router Link",underline:"Underline",useUnderlineAlways:"Underline",useUnderlineHove:"Hover",notUseUnderline:"Never",disabledStatus:"Disabled Status",customColor:"Custom Color",linkText:"Link",slots:"Default Slots",buttonText:"To Home"},{add:_,use:X,pack:r,packs:ke,merge:me}=R(),Y=n=>{F(n),X(n)};h("zh-CN",M);h("en-US",O);_("zh-CN",J);_("en-US",K);const ye={setup(n){return D(Y),B(A),(c,k)=>(L(),P(x,null,[a(e(s),null,{default:t(()=>[i(l(e(r).themeColorLink),1)]),_:1}),a(e(p),{size:["2.666vw","2.666vw"]},{default:t(()=>[a(e(o),null,{default:t(()=>[i(l(e(r).defaultLink),1)]),_:1}),a(e(o),{type:"primary"},{default:t(()=>[i(l(e(r).primaryLink),1)]),_:1}),a(e(o),{type:"info"},{default:t(()=>[i(l(e(r).infoLink),1)]),_:1}),a(e(o),{type:"success"},{default:t(()=>[i(l(e(r).successLink),1)]),_:1}),a(e(o),{type:"warning"},{default:t(()=>[i(l(e(r).warningLink),1)]),_:1}),a(e(o),{type:"danger"},{default:t(()=>[i(l(e(r).dangerLink),1)]),_:1})]),_:1},8,["size"]),a(e(s),null,{default:t(()=>[i(l(e(r).mode),1)]),_:1}),a(e(p),{size:["2.666vw","2.666vw"]},{default:t(()=>[a(e(o),{type:"primary",href:e(r).hrefLink,target:"_blank"},{default:t(()=>[i(l(e(r).withHref),1)]),_:1},8,["href"]),a(e(o),{type:"primary",to:e(r).toLink},{default:t(()=>[i(l(e(r).withRouterLink),1)]),_:1},8,["to"])]),_:1},8,["size"]),a(e(s),null,{default:t(()=>[i(l(e(r).underline),1)]),_:1}),a(e(p),{size:["2.666vw","2.666vw"]},{default:t(()=>[a(e(o),{type:"primary"},{default:t(()=>[i(l(e(r).useUnderlineAlways),1)]),_:1}),a(e(o),{type:"primary",underline:"hover"},{default:t(()=>[i(l(e(r).useUnderlineHove),1)]),_:1}),a(e(o),{type:"primary",underline:"none"},{default:t(()=>[i(l(e(r).notUseUnderline),1)]),_:1})]),_:1},8,["size"]),a(e(s),null,{default:t(()=>[i(l(e(r).disabledStatus),1)]),_:1}),a(e(o),{disabled:""},{default:t(()=>[i(l(e(r).disabledStatus),1)]),_:1}),a(e(s),null,{default:t(()=>[i(l(e(r).customColor),1)]),_:1}),a(e(p),{size:["2.666vw","2.666vw"]},{default:t(()=>[a(e(o),{"text-color":"#009688"},{default:t(()=>[i(l(e(r).linkText),1)]),_:1}),a(e(o),{"text-color":"#ab47bc"},{default:t(()=>[i(l(e(r).linkText),1)]),_:1})]),_:1},8,["size"]),a(e(s),null,{default:t(()=>[i(l(e(r).slots),1)]),_:1}),a(e(o),{href:e(r).hrefLink,target:"_blank",underline:"none"},{default:t(()=>[a(e(V),{type:"primary"},{default:t(()=>[i(l(e(r).buttonText),1)]),_:1})]),_:1},8,["href"])],64))}};export{ye as default};
