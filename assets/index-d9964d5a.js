import{I as a}from"./index-a279bce5.js";import{I as z}from"./index-9235f589.js";import{v as C}from"./index-34f8623a.js";import{S as v}from"./index-262bb0dc.js";import{C as N}from"./clipboard-dfb26261.js";import{d as A}from"./index-dd768cde.js";import{_ as L,r as U,a as h,b as V,o as T,ac as $,aE as D,f as _,h as f,q as o,S as i,ao as e,M as b,F as y,ai as M,P as r,Q as l,D as B,R as E}from"./vue-router-6d66666a.js";import{u as j,a as w,_ as q,b as F,c as R}from"./index-d24ba9ad.js";import{A as s}from"./appType-826aac9b.js";import"./logger-4bf9ea67.js";import"./elements-a6c01043.js";import"./provide-a5cc776e.js";import"./useChildren-10daefc4.js";import"./FieldDecorator-7ff0c52a.js";import"./index-fef5f544.js";/* empty css               */import"./index-035bd7d8.js";import"./zIndex-15ce83eb.js";import"./lock-c0d9fd98.js";const P=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json","view-outline","view","thumb-down-outline","thumb-down","thumb-up-outline","thumb-up"],Q={iconSize:"图标尺寸",iconColor:"图标颜色",useImage:"使用图片",events:"注册事件",iconAnimation:"图标切换动画 (点击切换)",toggle:"切换",iconList:"图标列表 (点击复制)",copySuccess:"复制成功",clickSuccess:"点击成功",searchIcon:"搜索图标"},G={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success",searchIcon:"Search Icon"},{add:S,use:H,pack:c,packs:ke,merge:xe}=j(),J=d=>{R(d),H(d)};w("zh-CN",q);w("en-US",F);S("zh-CN",Q);S("en-US",G);const K={class:"icon-example__icons"},O=["data-clipboard-text"],W={class:"icon-example__icon-name"},X={__name:"index",setup(d){const k=U(P),m=h("information"),x=h("#fff"),p=h(""),I=V(()=>p.value?k.filter(u=>u.includes(p.value)):k);function g(){m.value=m.value==="information"?"checkbox-marked-circle":"information"}return T(()=>{new N(".icon-example__icon",{text:n=>`<var-icon name="${n.getAttribute("data-clipboard-text")}" />`}).on("success",n=>{v.success(`${n.text}${c.value.copySuccess}!`)})}),$(J),D(A,u=>{x.value=u==="darkTheme"?"#303030":"#fff"}),(u,n)=>(_(),f(y,null,[o(e(s),null,{default:i(()=>[r(l(e(c).iconSize),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle"}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",size:26}),o(e(s),null,{default:i(()=>[r(l(e(c).iconColor),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)"}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)",size:26}),o(e(s),null,{default:i(()=>[r(l(e(c).useImage),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(e(s),null,{default:i(()=>[r(l(e(c).events),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)",onClick:n[0]||(n[0]=()=>e(v).success(e(c).clickSuccess))}),o(e(s),null,{default:i(()=>[r(l(e(c).iconAnimation),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",color:"var(--color-primary)",size:30,transition:300,name:m.value,onClick:g},null,8,["name"]),o(e(a),{class:"icon-example__animation-icon",color:"var(--color-primary)",size:30,transition:300,"animation-class":"fade",name:m.value,onClick:g},null,8,["name"]),o(e(s),null,{default:i(()=>[r(l(e(c).iconList),1)]),_:1}),o(e(z),{class:"icon-example__search",size:"small",variant:"outlined",placeholder:e(c).searchIcon,modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=t=>p.value=t),modelModifiers:{trim:!0},clearable:""},{"append-icon":i(()=>[o(e(a),{class:"search-icon",name:"magnify"})]),_:1},8,["placeholder","modelValue"]),b("div",K,[(_(!0),f(y,null,M(I.value,t=>B((_(),f("div",{class:"icon-example__icon var-elevation--2",style:E({background:x.value}),"data-clipboard-text":t,key:t},[o(e(a),{name:t},null,8,["name"]),b("div",W,l(t),1)],12,O)),[[e(C)]])),128))])],64))}},ge=L(X,[["__scopeId","data-v-571d3cf3"]]);export{ge as default};
