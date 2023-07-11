import{B as o}from"./index-8f80146a.js";import{B as v}from"./index-0ef143ed.js";import{C as i}from"./index-d0627cf6.js";import{S as r}from"./index-6c0c1cda.js";import{E as C}from"./index-23c4a719.js";import{d as y}from"./index-a0438c78.js";import{a as s,ac as x,aD as T,f as w,h as k,q as a,S as t,ao as e,P as l,Q as d}from"./vue-router-fcc070b4.js";import{u as L,b as g,_ as b,c as S,a as z}from"./index-1a635470.js";import{A as u}from"./appType-df0918fa.js";import"./index-21c8bf06.js";import"./logger-ef73fd8d.js";import"./elements-466e14ce.js";import"./index-799376b0.js";import"./index-022c2c56.js";/* empty css               */import"./index-dc60ce94.js";import"./index-1ed6d2a3.js";import"./index-aac16ed9.js";import"./useChildren-71467955.js";import"./index-30912219.js";import"./usePopover-0b07c892.js";import"./zIndex-154584d4.js";const R={themeColorBadge:"主题色徽标",dotBadge:"圆点徽标",customContentBadge:"自定义内容标签",maximum:"最大值",differentPositioningBadges:"不同定位徽标",upperRight:"右上",lowerRight:"右下",upperLeft:"左上",lowerLeft:"左下",hidden:"隐藏徽标",clickToChangeTheState:"点击改变状态",badge:"徽标",customBadgeColors:"自定义徽标颜色",customBadgeIcons:"自定义徽标图标",customBadgeValue:"自定义徽标值"},N={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",hidden:"Hidden Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons",customBadgeValue:"Custom Badge Value"},{add:c,use:V,pack:n,packs:de,merge:ne}=L(),U=m=>{z(m),V(m)};g("zh-CN",b);g("en-US",S);c("zh-CN",R);c("en-US",N);const D={class:"example"},ue={__name:"index",setup(m){const h=s(88),_=s(188),f=s(99),p=s(!1);function B(){p.value=!p.value}return x(U),T(y),(P,I)=>(w(),k("div",D,[a(e(u),null,{default:t(()=>[l(d(e(n).themeColorBadge),1)]),_:1}),a(e(r),{size:["2.666vmin","4vmin"]},{default:t(()=>[a(e(o)),a(e(o),{type:"primary"}),a(e(o),{type:"info"}),a(e(o),{type:"warning"}),a(e(o),{type:"success"}),a(e(o),{type:"danger"})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).dotBadge),1)]),_:1}),a(e(o),{dot:"",type:"danger"}),a(e(u),null,{default:t(()=>[l(d(e(n).customContentBadge),1)]),_:1}),a(e(r),{size:["2.666vmin","4vmin"]},{default:t(()=>[a(e(o),{type:"danger",value:"badge"}),a(e(o),{type:"danger",value:"hot"}),a(e(o),{type:"danger",value:"66"})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).maximum),1)]),_:1}),a(e(r),{size:["2.666vmin","4vmin"]},{default:t(()=>[a(e(o),{type:"danger",value:h.value,"max-value":f.value},null,8,["value","max-value"]),a(e(o),{type:"danger",value:_.value,"max-value":f.value},null,8,["value","max-value"])]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).differentPositioningBadges),1)]),_:1}),a(e(r),{size:["2.666vmin","6vmin"]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).upperRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"right-bottom"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).lowerRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-top"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).upperLeft),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-bottom"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).lowerLeft),1)]),_:1})]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).hidden),1)]),_:1}),a(e(r),{size:["2.666vmin","6vmin"]},{default:t(()=>[a(e(o),{type:"danger",hidden:p.value},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1},8,["hidden"]),a(e(v),{type:"success",onClick:B},{default:t(()=>[l(d(e(n).clickToChangeTheState),1)]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).customBadgeColors),1)]),_:1}),a(e(o),{color:"#6200ea"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).customBadgeIcons),1)]),_:1}),a(e(o),{color:"#6200ea",icon:"notebook"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).customBadgeValue),1)]),_:1}),a(e(o),{color:"#6200ea"},{value:t(()=>[a(e(C),{style:{"max-width":"40px"},tooltip:{sameWidth:!1}},{default:t(()=>[l("100000000")]),_:1})]),default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1})]))}};export{ue as default};
