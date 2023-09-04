import{B as o}from"./index-52d49afa.js";import{B as v}from"./index-96de60d3.js";import{C as i}from"./index-22590923.js";import{S as r}from"./index-0b69d741.js";import{E as C}from"./index-439a89a6.js";import{d as y}from"./index-ea9abee8.js";import{r as s,E as x,ah as T,e as w,l as k,p as a,w as t,U as e,P as l,Q as d}from"./index-c1c53a77.js";import{u as L,b as g,_ as b,c as S,a as z}from"./index-da2945cd.js";import{A as u}from"./appType-6fb05618.js";import"./index-a62a9e1d.js";import"./components-1514d07f.js";import"./elements-e4756970.js";import"./logger-525ef361.js";import"./index-a9719fda.js";import"./index-66aea09a.js";/* empty css               */import"./index-0caacde4.js";import"./index-85a5e829.js";import"./index-72804146.js";import"./index-412e402c.js";import"./usePopover-b92ea81c.js";import"./zIndex-7f68b1fd.js";const R={themeColorBadge:"主题色徽标",dotBadge:"圆点徽标",customContentBadge:"自定义内容标签",maximum:"最大值",differentPositioningBadges:"不同定位徽标",upperRight:"右上",lowerRight:"右下",upperLeft:"左上",lowerLeft:"左下",hidden:"隐藏徽标",clickToChangeTheState:"点击改变状态",badge:"徽标",customBadgeColors:"自定义徽标颜色",customBadgeIcons:"自定义徽标图标",customBadgeValue:"自定义徽标值"},N={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",hidden:"Hidden Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons",customBadgeValue:"Custom Badge Value"},{add:c,use:U,pack:n,packs:de,merge:ne}=L(),V=p=>{z(p),U(p)};g("zh-CN",b);g("en-US",S);c("zh-CN",R);c("en-US",N);const P={class:"example"},ue={__name:"index",setup(p){const h=s(88),_=s(188),f=s(99),m=s(!1);function B(){m.value=!m.value}return x(V),T(y),(D,E)=>(w(),k("div",P,[a(e(u),null,{default:t(()=>[l(d(e(n).themeColorBadge),1)]),_:1}),a(e(r),{size:["2.666vmin","4vmin"]},{default:t(()=>[a(e(o)),a(e(o),{type:"primary"}),a(e(o),{type:"info"}),a(e(o),{type:"warning"}),a(e(o),{type:"success"}),a(e(o),{type:"danger"})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).dotBadge),1)]),_:1}),a(e(o),{dot:"",type:"danger"}),a(e(u),null,{default:t(()=>[l(d(e(n).customContentBadge),1)]),_:1}),a(e(r),{size:["2.666vmin","4vmin"]},{default:t(()=>[a(e(o),{type:"danger",value:"badge"}),a(e(o),{type:"danger",value:"hot"}),a(e(o),{type:"danger",value:"66"})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).maximum),1)]),_:1}),a(e(r),{size:["2.666vmin","4vmin"]},{default:t(()=>[a(e(o),{type:"danger",value:h.value,"max-value":f.value},null,8,["value","max-value"]),a(e(o),{type:"danger",value:_.value,"max-value":f.value},null,8,["value","max-value"])]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).differentPositioningBadges),1)]),_:1}),a(e(r),{size:["2.666vmin","6vmin"]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).upperRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"right-bottom"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).lowerRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-top"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).upperLeft),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-bottom"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).lowerLeft),1)]),_:1})]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).hidden),1)]),_:1}),a(e(r),{size:["2.666vmin","6vmin"]},{default:t(()=>[a(e(o),{type:"danger",hidden:m.value},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1},8,["hidden"]),a(e(v),{type:"success",onClick:B},{default:t(()=>[l(d(e(n).clickToChangeTheState),1)]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).customBadgeColors),1)]),_:1}),a(e(o),{color:"#6200ea"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).customBadgeIcons),1)]),_:1}),a(e(o),{color:"#6200ea",icon:"notebook"},{default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1}),a(e(u),null,{default:t(()=>[l(d(e(n).customBadgeValue),1)]),_:1}),a(e(o),{color:"#6200ea"},{value:t(()=>[a(e(C),{style:{"max-width":"40px"},tooltip:{sameWidth:!1}},{default:t(()=>[l("100000000")]),_:1})]),default:t(()=>[a(e(i),{plain:"",round:!1,color:"#009688"},{default:t(()=>[l(d(e(n).badge),1)]),_:1})]),_:1})]))}};export{ue as default};
