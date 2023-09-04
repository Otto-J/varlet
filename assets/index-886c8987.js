import{I as a}from"./index-a62a9e1d.js";import{I as z}from"./index-2e2d6ad7.js";import{v as C}from"./index-a9719fda.js";import{S as v}from"./index-0abf1d5c.js";import{C as N}from"./clipboard-dfb26261.js";import{d as A}from"./index-ea9abee8.js";import{_ as L,W as U,r as h,B as V,o as T,E as $,ah as B,e as _,l as f,p as o,w as i,U as e,m as b,M as w,N as M,P as r,Q as l,O as D,v as E}from"./index-c1c53a77.js";import{u as j,b as y,_ as q,c as F,a as O}from"./index-da2945cd.js";import{A as s}from"./appType-6fb05618.js";import"./components-1514d07f.js";import"./elements-e4756970.js";import"./logger-525ef361.js";import"./provide-bbeb7881.js";import"./FieldDecorator-62c13208.js";import"./index-66aea09a.js";/* empty css               */import"./index-0caacde4.js";import"./zIndex-7f68b1fd.js";import"./lock-71b85483.js";const P=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json","view-outline","view","thumb-down-outline","thumb-down","thumb-up-outline","thumb-up","lock","lock-outline","email","email-outline","twitter"],Q={iconSize:"图标尺寸",iconColor:"图标颜色",useImage:"使用图片",events:"注册事件",iconAnimation:"图标切换动画 (点击切换)",toggle:"切换",iconList:"图标列表 (点击复制)",copySuccess:"复制成功",clickSuccess:"点击成功",searchIcon:"搜索图标"},R={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success",searchIcon:"Search Icon"},{add:I,use:W,pack:c,packs:ke,merge:xe}=j(),G=d=>{O(d),W(d)};y("zh-CN",q);y("en-US",F);I("zh-CN",Q);I("en-US",R);const H={class:"icon-example__icons"},J=["data-clipboard-text"],K={class:"icon-example__icon-name"},X={__name:"index",setup(d){const k=U(P),u=h("information"),x=h("#fff"),p=h(""),S=V(()=>p.value?k.filter(m=>m.includes(p.value)):k);function g(){u.value=u.value==="information"?"checkbox-marked-circle":"information"}return T(()=>{new N(".icon-example__icon",{text:n=>`<var-icon name="${n.getAttribute("data-clipboard-text")}" />`}).on("success",n=>{v.success(`${n.text}${c.value.copySuccess}!`)})}),$(G),B(A,m=>{x.value=m==="darkTheme"?"#303030":"#fff"}),(m,n)=>(_(),f(w,null,[o(e(s),null,{default:i(()=>[r(l(e(c).iconSize),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle"}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",size:26}),o(e(s),null,{default:i(()=>[r(l(e(c).iconColor),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)"}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)",size:26}),o(e(s),null,{default:i(()=>[r(l(e(c).useImage),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(e(s),null,{default:i(()=>[r(l(e(c).events),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"var(--color-primary)",onClick:n[0]||(n[0]=()=>e(v).success(e(c).clickSuccess))}),o(e(s),null,{default:i(()=>[r(l(e(c).iconAnimation),1)]),_:1}),o(e(a),{class:"icon-example__animation-icon",color:"var(--color-primary)",size:30,transition:300,name:u.value,onClick:g},null,8,["name"]),o(e(a),{class:"icon-example__animation-icon",color:"var(--color-primary)",size:30,transition:300,"animation-class":"fade",name:u.value,onClick:g},null,8,["name"]),o(e(s),null,{default:i(()=>[r(l(e(c).iconList),1)]),_:1}),o(e(z),{class:"icon-example__search",size:"small",variant:"outlined",placeholder:e(c).searchIcon,modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=t=>p.value=t),modelModifiers:{trim:!0},clearable:""},{"append-icon":i(()=>[o(e(a),{class:"search-icon",name:"magnify"})]),_:1},8,["placeholder","modelValue"]),b("div",H,[(_(!0),f(w,null,M(S.value,t=>D((_(),f("div",{class:"icon-example__icon var-elevation--2",style:E({background:x.value}),"data-clipboard-text":t,key:t},[o(e(a),{name:t},null,8,["name"]),b("div",K,l(t),1)],12,J)),[[e(C)]])),128))])],64))}},ge=L(X,[["__scopeId","data-v-830984c5"]]);export{ge as default};
