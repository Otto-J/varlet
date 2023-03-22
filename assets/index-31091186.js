import{d as w,b as f,_ as h,f as v,h as S,O as k,N as G,ac as x,aC as T,q as e,S as u,ap as t,F as N,P as n,Q as l,aD as i,ah as $}from"./vue-router.esm-bundler-1e250ce9.js";import{u as L,B as a}from"./index-5216b4ec.js";import{f as D,c as V}from"./components-092ce17a.js";import{I as p}from"./index-b3f7bf08.js";import{S as s}from"./index-975e59ca.js";import{M}from"./index-584c3d3c.js";import{C as y}from"./index-5a16b68b.js";import{S as g}from"./index-4afae746.js";import{d as P}from"./index-59604d2c.js";import{u as E,c as U,a as C,_ as A,b as I}from"./index-5cbfee55.js";import"./index-c6939477.js";import"./index-fecbe149.js";/* empty css               */import"./elements-f2a1739b.js";import"./shared-ed6496a2.js";import"./index-1ddfa64f.js";import"./index-c7d7b5f9.js";import"./index-4b4d9cf6.js";import"./useChildren-36e9566e.js";import"./usePopover-172c1e7a.js";import"./zIndex-3acc7c53.js";import"./lock-5715fbf0.js";function O(r){return["default","primary","info","success","warning","danger"].includes(r)}function F(r){return["normal","mini","small","large"].includes(r)}function q(r){return["normal","text","outline"].includes(r)}const Q={type:{type:String,default:"default",validator:O},size:{type:String,default:"normal",validator:F},color:{type:String},textColor:{type:String},mode:{type:String,default:"normal",validator:q},elevation:{type:[Boolean,Number,String],default:!0},vertical:{type:Boolean,default:!1}},{n:R,classes:W}=V("button-group"),j=w({name:"VarButtonGroup",props:Q,setup(r){const{bindButtons:c}=L(),m={elevation:f(()=>r.elevation),type:f(()=>r.type),size:f(()=>r.size),color:f(()=>r.color),textColor:f(()=>r.textColor),mode:f(()=>r.mode)};return c(m),{n:R,classes:W,formatElevation:D}}});function H(r,c,m,b,_,B){return v(),S("div",{class:G(r.classes(r.n(),r.n("$--box"),[r.mode,`${r.n(`--mode-${r.mode}`)}`],[r.vertical,r.n("--vertical"),r.n("--horizontal")],[r.mode==="normal",r.formatElevation(r.elevation,2)]))},[k(r.$slots,"default")],2)}const d=h(j,[["render",H]]);d.install=function(r){r.component(d.name,d)};const J={themeColorButton:"主题色按钮",themeColorButtonGroup:"按钮组主题色",defaultButton:"默认按钮",primaryButton:"主要按钮",infoButton:"信息按钮",successButton:"成功按钮",warningButton:"警告按钮",dangerButton:"危险按钮",textButton:"文字按钮",modeButtonGroup:"按钮组模式",plainTextButton:"纯文字按钮",outlineButton:"外边框按钮",outline:"边框",disabledStatus:"禁用状态",loadingStatus:"加载状态",buttonSize:"按钮尺寸",buttonGroupSize:"按钮组尺寸",normalButton:"常规按钮",smallButton:"小型按钮",miniButton:"迷你按钮",largeButton:"大型按钮",blockButton:"块级按钮",customColor:"自定义颜色",customButtonGroupColor:"自定义按钮组颜色",backgroundTextColor:"背景/文字",linearGradientColor:"使用渐变",verticalButtonGroup:"按钮组竖直排列",roundButton:"圆形按钮",event:"注册事件",click:"点击",touchstart:"触摸",autoLoading:"自动加载",clickSuccess:"点击成功",touchstartSuccess:"触摸成功",button:"按钮",splitButton:"按钮拆分"},K={themeColorButton:"Theme Color Button",themeColorButtonGroup:"Button Group Theme Color",defaultButton:"Default Button",default:"Default",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",modeButtonGroup:"Button Group Mode",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",outline:"Outline",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",buttonGroupSize:"Button Group Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",customButtonGroupColor:"Custom Button Group Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",verticalButtonGroup:"Vertical Button Group",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Events",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success",button:"Button",splitButton:"Split Button"},{add:z,use:X,pack:o,packs:St,merge:Ct}=E(),Y=r=>{U(r),X(r)};C("zh-CN",A);C("en-US",I);z("zh-CN",J);z("en-US",K);const zt={setup(r){function c(){g.success(o.value.clickSuccess)}function m(){g.success(o.value.touchstartSuccess)}function b(){return new Promise(_=>{setTimeout(_,2e3)})}return x(Y),T(P),(_,B)=>(v(),S(N,null,[e(t(i),null,{default:u(()=>[n(l(t(o).themeColorButton),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).defaultButton),1)]),_:1}),e(t(a),{type:"primary"},{default:u(()=>[n(l(t(o).primaryButton),1)]),_:1}),e(t(a),{type:"info"},{default:u(()=>[n(l(t(o).infoButton),1)]),_:1}),e(t(a),{type:"success"},{default:u(()=>[n(l(t(o).successButton),1)]),_:1}),e(t(a),{type:"warning"},{default:u(()=>[n(l(t(o).warningButton),1)]),_:1}),e(t(a),{type:"danger"},{default:u(()=>[n(l(t(o).dangerButton),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).textButton),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{text:"",outline:"",type:"primary"},{default:u(()=>[n(l(t(o).outlineButton),1)]),_:1}),e(t(a),{text:"",type:"primary"},{default:u(()=>[n(l(t(o).plainTextButton),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).disabledStatus),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{disabled:""},{default:u(()=>[n(l(t(o).disabledStatus),1)]),_:1}),e(t(a),{disabled:"",text:"",outline:""},{default:u(()=>[n(l(t(o).disabledStatus),1)]),_:1}),e(t(a),{disabled:"",text:""},{default:u(()=>[n(l(t(o).disabledStatus),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).loadingStatus),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{loading:"",type:"primary"},{default:u(()=>[n(l(t(o).loadingStatus),1)]),_:1}),e(t(a),{loading:"",type:"info","loading-type":"rect"},{default:u(()=>[n(l(t(o).loadingStatus),1)]),_:1}),e(t(a),{loading:"",type:"success","loading-type":"disappear"},{default:u(()=>[n(l(t(o).loadingStatus),1)]),_:1}),e(t(a),{loading:"",type:"danger","loading-type":"cube"},{default:u(()=>[n(l(t(o).loadingStatus),1)]),_:1}),e(t(a),{loading:"",type:"warning","loading-type":"wave"},{default:u(()=>[n(l(t(o).loadingStatus),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).buttonSize),1)]),_:1}),e(t(s),{align:"center",size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{type:"primary"},{default:u(()=>[n(l(t(o).normalButton),1)]),_:1}),e(t(a),{type:"success",size:"small"},{default:u(()=>[n(l(t(o).smallButton),1)]),_:1}),e(t(a),{type:"warning",size:"mini"},{default:u(()=>[n(l(t(o).miniButton),1)]),_:1}),e(t(a),{type:"danger",size:"large"},{default:u(()=>[n(l(t(o).largeButton),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).blockButton),1)]),_:1}),e(t(a),{block:"",type:"primary"},{default:u(()=>[n(l(t(o).blockButton),1)]),_:1}),e(t(i),null,{default:u(()=>[n(l(t(o).customColor),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{color:"#66bb6a","text-color":"#fff"},{default:u(()=>[n(l(t(o).backgroundTextColor),1)]),_:1}),e(t(a),{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:u(()=>[n(l(t(o).linearGradientColor),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).roundButton),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{type:"primary",round:""},{default:u(()=>[e(t(p),{name:"plus"})]),_:1}),e(t(a),{type:"info",round:""},{default:u(()=>[e(t(p),{name:"information"})]),_:1}),e(t(a),{type:"success",round:""},{default:u(()=>[e(t(p),{name:"check"})]),_:1}),e(t(a),{type:"warning",round:""},{default:u(()=>[e(t(p),{name:"warning"})]),_:1}),e(t(a),{type:"danger",round:""},{default:u(()=>[e(t(p),{name:"window-close"})]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).event),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(a),{type:"success",onClick:c},{default:u(()=>[n(l(t(o).click),1)]),_:1}),e(t(a),{type:"success",onTouchstart:m},{default:u(()=>[n(l(t(o).touchstart),1)]),_:1}),e(t(a),{type:"success",onClick:b,"auto-loading":""},{default:u(()=>[n(l(t(o).autoLoading),1)]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).themeColorButtonGroup),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(d),{type:"default"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(d),{type:"primary"},{default:u(()=>[e(t(a),{type:"primary"},{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),{type:"primary"},{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),{type:"primary"},{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).buttonGroupSize),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(d),{size:"normal",type:"primary"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(d),{size:"large",type:"primary"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).splitButton),1)]),_:1}),e(t(M),{placement:"bottom","same-width":"","offset-y":6},{menu:u(()=>[e(t(y),{ripple:""},{default:u(()=>[n(l(t(o).splitButton),1)]),_:1}),e(t(y),{ripple:""},{default:u(()=>[n(l(t(o).splitButton),1)]),_:1}),e(t(y),{ripple:""},{default:u(()=>[n(l(t(o).splitButton),1)]),_:1})]),default:u(()=>[e(t(d),{type:"primary"},{default:u(()=>[e(t(a),{onClick:B[0]||(B[0]=$(()=>{},["stop"]))},{default:u(()=>[n(l(t(o).splitButton),1)]),_:1}),e(t(a),{style:{padding:"0 6px","border-left":"thin solid #1976d2"}},{default:u(()=>[e(t(p),{name:"menu-down",size:24})]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:u(()=>[n(l(t(o).modeButtonGroup),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(d),{type:"primary",mode:"text"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(d),{type:"primary",mode:"outline"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(d),{type:"primary"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1})]),_:1},8,["size"]),e(t(i),null,{default:u(()=>[n(l(t(o).customButtonGroupColor),1)]),_:1}),e(t(d),{type:"primary",color:"linear-gradient(to right, #69dbaa, #3a7afe)"},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(i),null,{default:u(()=>[n(l(t(o).verticalButtonGroup),1)]),_:1}),e(t(s),{size:["2.666vw","2.666vw"]},{default:u(()=>[e(t(d),{type:"primary",mode:"text",vertical:""},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(d),{type:"primary",mode:"outline",vertical:""},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1}),e(t(d),{type:"primary",vertical:""},{default:u(()=>[e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1}),e(t(a),null,{default:u(()=>[n(l(t(o).button),1)]),_:1})]),_:1})]),_:1},8,["size"])],64))}};export{zt as default};
