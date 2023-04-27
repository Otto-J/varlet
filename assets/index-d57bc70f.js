import{d as B,a as Q,b as I,w as V,_,p as w,D as W,H as J,f as k,h as X,M as y,N as f,O as d,P as q,Q as D,i as O,j as N,R as L,q as S,S as v,m as $,E as x,T as nn,r as A,V as en,W as on,Y as tn,Z as j,C as an,av as sn}from"./vue-router-3467edf1.js";import{p as g,L as rn}from"./index-c6b57f8c.js";import{I as ln}from"./index-73a90170.js";import{u as cn}from"./zIndex-0062e456.js";import{p as b,d as m,e as dn,c as U,a as c,g as un,m as pn}from"./components-105afbd7.js";import{c as fn}from"./index-3c38205a.js";import{u as mn}from"./lock-b64b0ea5.js";function yn(n){return["top","center","bottom"].includes(n)}function vn(n){return T.includes(n)}const M={type:{type:String,validator:vn},position:{type:String,default:"top",validator:yn},content:{type:[String,Function,Object]},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:b(g,"type"),loadingSize:b(g,"size"),loadingRadius:b(g,"radius"),loadingColor:{...b(g,"color"),default:"currentColor"},lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:m(),onOpened:m(),onClose:m(),onClosed:m(),"onUpdate:show":m(),_update:{type:String}},{n:gn,classes:bn}=U("snackbar"),kn={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},Sn=B({name:"VarSnackbarCore",components:{VarLoading:rn,VarIcon:ln},props:M,setup(n){const o=Q(null),{zIndex:e}=cn(()=>n.show,1);mn(()=>n.show,()=>n.lockScroll);const s=I(()=>n.type==="loading"||n.forbidClick),t=I(()=>n.type?kn[n.type]:""),r=()=>{o.value=setTimeout(()=>{n.type!=="loading"&&c(n["onUpdate:show"],!1)},n.duration)};return V(()=>n.show,l=>{l?(c(n.onOpen),r()):l===!1&&(clearTimeout(o.value),c(n.onClose))}),V(()=>n._update,()=>{clearTimeout(o.value),r()}),dn(()=>{n.show&&(c(n.onOpen),r())}),{SNACKBAR_TYPE:T,n:gn,classes:bn,zIndex:e,iconName:t,isForbidClick:s}}});function Cn(n,o,e,s,t,r){const l=w("var-icon"),C=w("var-loading");return W((k(),X("div",{class:f(n.n()),style:L({pointerEvents:n.isForbidClick?"auto":"none",zIndex:n.zIndex})},[y("div",{class:f(n.classes(n.n("wrapper"),n.n(`wrapper-${n.position}`),n.n("$-elevation--4"),[n.vertical,n.n("vertical")],[n.type&&n.SNACKBAR_TYPE.includes(n.type),n.n(`wrapper-${n.type}`)])),style:L({zIndex:n.zIndex})},[y("div",{class:f([n.n("content"),n.contentClass])},[d(n.$slots,"default",{},()=>[q(D(n.content),1)])],2),y("div",{class:f([n.n("icon")])},[d(n.$slots,"icon")],2),y("div",{class:f(n.n("action"))},[n.iconName?(k(),O(l,{key:0,name:n.iconName},null,8,["name"])):N("",!0),n.type==="loading"?(k(),O(C,{key:1,type:n.loadingType,size:n.loadingSize,color:n.loadingColor,radius:n.loadingRadius},null,8,["type","size","color","radius"])):N("",!0),d(n.$slots,"action")],2)],6)],6)),[[J,n.show]])}const R=_(Sn,[["render",Cn]]),{n:hn}=U("snackbar"),wn=B({name:"VarSnackbar",components:{VarSnackbarCore:R},props:M,setup(){const{disabled:n}=un();return{n:hn,disabled:n}}});function On(n,o,e,s,t,r){const l=w("var-snackbar-core");return k(),O(nn,{to:n.teleport,disabled:n.disabled},[S(x,{name:`${n.n()}-fade`,onAfterEnter:n.onOpened,onAfterLeave:n.onClosed},{default:v(()=>[S(l,$(n.$props,{class:n.n("transition")}),{icon:v(()=>[d(n.$slots,"icon")]),action:v(()=>[d(n.$slots,"action")]),default:v(()=>[d(n.$slots,"default",{},()=>[q(D(n.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const u=_(wn,[["render",On]]);function $n(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!an(n)}const T=["loading","success","warning","info","error"];let P=0,E=!1,F,p=!1;const G={type:void 0,content:"",icon:"",action:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}};let a=A([]),z=G;const En={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},h=n=>()=>sn(n)?n():n,An={setup(){return()=>{const n=a.map(({id:o,reactiveSnackOptions:e,_update:s})=>{const t=document.querySelector(".var-transition-group");e.forbidClick||e.type==="loading"?t.classList.add("var-pointer-auto"):t.classList.remove("var-pointer-auto"),p&&(e.position="top");const l={position:p?"relative":"absolute",...Ln(e.position)},{content:C,icon:Y,action:H}=e,K={default:h(C),icon:h(Y),action:h(H)};return S(R,$(e,{key:o,style:l,"data-id":o,_update:s,show:e.show,"onUpdate:show":Z=>e.show=Z}),K)});return S(tn,$(En,{style:{zIndex:fn.zIndex},onAfterEnter:Tn,onAfterLeave:zn}),$n(n)?n:{default:()=>[n]})}}},i=function(n){const o=Vn(n),e=A({...z,...o});e.show=!0,E||(E=!0,F=pn(An).unmountInstance);const{length:s}=a,t={id:P++,reactiveSnackOptions:e};if(s===0||p)In(t);else{const r=`update-${P}`;Nn(e,r)}return{clear(){!p&&a.length?a[0].reactiveSnackOptions.show=!1:e.show=!1}}};T.forEach(n=>{i[n]=o=>(en(o)?o.type=n:o={content:o,type:n},i(o))});i.install=function(n){n.component(u.name,u)};i.allowMultiple=function(n=!1){n!==p&&(a.forEach(o=>{o.reactiveSnackOptions.show=!1}),p=n)};i.clear=function(){a.forEach(n=>{n.reactiveSnackOptions.show=!1})};i.setDefaultOptions=function(n){z=n};i.resetDefaultOptions=function(){z=G};i.Component=u;function Tn(n){const o=n.getAttribute("data-id"),e=a.find(s=>s.id===j(o));e&&c(e.reactiveSnackOptions.onOpened)}function zn(n){n.parentElement&&n.parentElement.classList.remove("var-pointer-auto");const o=n.getAttribute("data-id"),e=a.find(t=>t.id===j(o));e&&(e.animationEnd=!0,c(e.reactiveSnackOptions.onClosed)),a.every(t=>t.animationEnd)&&(c(F),a=A([]),E=!1)}function In(n){a.push(n)}function Vn(n={}){return on(n)?{content:n}:n}function Nn(n,o){const[e]=a;e.reactiveSnackOptions={...e.reactiveSnackOptions,...n},e._update=o}function Ln(n="top"){return n==="bottom"?{[n]:"5%"}:{top:n==="top"?"5%":"45%"}}u.install=function(n){n.component(u.name,u)};const Mn=i;export{Mn as S};
