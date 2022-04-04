var M=Object.defineProperty;var E=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var T=(e,n,t)=>n in e?M(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))K.call(n,t)&&T(e,t,n[t]);if(E)for(var t of E(n))Y.call(n,t)&&T(e,t,n[t]);return e};import{d as P,r as H,b as I,y as z,x as R,e as h,w as J,v as Z,o as v,c as Q,a as k,p as m,G as b,l as w,h as _,n as N,m as q,t as F,i as g,j as S,H as C,T as W,I as X,q as $,J as x,K as ee}from"./vendor.49f89f0d.js";import{p as V,L as ne}from"./index.9e43ebc8.js";import{I as te}from"./index.2b3dacb8.js";import{u as oe}from"./zIndex.8c13fd4c.js";import{p as L,c as ae,u as ie,m as se}from"./components.2481c71b.js";import{_ as U}from"./elevation.229458c1.js";import{c as re}from"./index.48ee5316.js";import{e as le,c as ce,i as de,t as j}from"./shared.506a394a.js";import{u as ue}from"./lock.c5636ec8.js";function fe(e){return["top","center","bottom"].includes(e)}function pe(e){return A.includes(e)}const G={type:{type:String,validator:pe},position:{type:String,default:"top",validator:fe},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:L(V,"type"),loadingSize:L(V,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}};const{n:me,classes:ve}=ae("snackbar"),ye={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},be=P({name:"VarSnackbarCore",components:{VarLoading:ne,VarIcon:te},props:G,setup(e){const n=H(null),{zIndex:t}=oe(()=>e.show,1);ue(e,"show","lockScroll");const o=I(()=>e.type==="loading"||e.forbidClick),s=I(()=>e.type?ye[e.type]:""),i=()=>{n.value=setTimeout(()=>{var a;e.type!=="loading"&&((a=e["onUpdate:show"])==null||a.call(e,!1))},e.duration)};return z(()=>e.show,a=>{var l,p;a?((l=e.onOpen)==null||l.call(e),i()):a===!1&&(clearTimeout(n.value),(p=e.onClose)==null||p.call(e))}),z(()=>e._update,()=>{clearTimeout(n.value),i()}),R(()=>{var a;e.show&&((a=e.onOpen)==null||a.call(e),i())}),{SNACKBAR_TYPE:A,n:me,classes:ve,zIndex:t,iconName:s,isForbidClick:o}}});function ge(e,n,t,o,s,i){const a=h("var-icon"),l=h("var-loading");return J((v(),Q("div",{class:m(e.n()),style:N({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[k("div",{class:m(e.classes(e.n("wrapper"),e.n(`wrapper-${e.position}`),"var-elevation--4",[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n(`wrapper-${e.type}`)])),style:N({zIndex:e.zIndex})},[k("div",{class:m([e.n("content"),e.contentClass])},[b(e.$slots,"default",{},()=>[q(F(e.content),1)])],2),k("div",{class:m(e.n("action"))},[e.iconName?(v(),w(a,{key:0,name:e.iconName},null,8,["name"])):_("v-if",!0),e.type==="loading"?(v(),w(l,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):_("v-if",!0),b(e.$slots,"action")],2)],6)],6)),[[Z,e.show]])}var D=U(be,[["render",ge]]);const ke=P({name:"VarSnackbar",components:{VarSnackbarCore:D},props:G,setup(){const{disabled:e}=ie();return{disabled:e}}});function Se(e,n,t,o,s,i){const a=h("var-snackbar-core");return v(),w(X,{to:e.teleport,disabled:e.disabled},[g(W,{name:"var-snackbar-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:S(()=>[g(a,C(e.$props,{class:"var-snackbar-transition"}),{action:S(()=>[b(e.$slots,"action")]),default:S(()=>[b(e.$slots,"default",{},()=>[q(F(e.content),1)])]),_:3},16)]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var d=U(ke,[["render",Se]]);function he(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!x(e)}const A=["loading","success","warning","info","error"];let B=0,O=!1,y,u=!1,r=$([]);const we={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},Ce={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},Oe={setup(){return()=>{const e=r.map(({id:t,reactiveSnackOptions:o,_update:s})=>{const i=document.querySelector(".var-transition-group");o.forbidClick||o.type==="loading"?i.classList.add("var-pointer-auto"):i.classList.remove("var-pointer-auto"),u&&(o.position="top");const l=c({position:u?"relative":"absolute"},Ie(o.position));return g(D,C(o,{key:t,style:l,"data-id":t,_update:s,show:o.show,"onUpdate:show":p=>o.show=p}),null)}),n=re.zIndex;return g(ee,C(Ce,{style:{zIndex:n},onAfterEnter:$e,onAfterLeave:Ae}),he(e)?e:{default:()=>[e]})}}},f=function(e){const n=ce(e)||de(e)?{content:String(e)}:e,t=$(c(c({},we),n));t.show=!0,O||(O=!0,y=se(Oe).unmountInstance);const{length:o}=r,s={id:B++,reactiveSnackOptions:t};if(o===0||u)Ee(s);else{const i=`update-${B}`;Te(t,i)}return{clear(){!u&&r.length?r[0].reactiveSnackOptions.show=!1:t.show=!1}}};A.forEach(e=>{f[e]=n=>(le(n)?n.type=e:n={content:n,type:e},f(n))});f.install=function(e){e.component(d.name,d)};f.allowMultiple=function(e=!1){e!==u&&(r.forEach(n=>{n.reactiveSnackOptions.show=!1}),u=e)};f.clear=function(){r.forEach(e=>{e.reactiveSnackOptions.show=!1})};f.Component=d;function $e(e){var o,s;const n=e.getAttribute("data-id"),t=r.find(i=>i.id===j(n));t&&((s=(o=t.reactiveSnackOptions).onOpened)==null||s.call(o))}function Ae(e){var s,i;e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const n=e.getAttribute("data-id"),t=r.find(a=>a.id===j(n));t&&(t.animationEnd=!0,(i=(s=t.reactiveSnackOptions).onClosed)==null||i.call(s)),r.every(a=>a.animationEnd)&&(y==null||y(),r=$([]),O=!1)}function Ee(e){r.push(e)}function Te(e,n){const[t]=r;t.reactiveSnackOptions=c(c({},t.reactiveSnackOptions),e),t._update=n}function Ie(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}d.install=function(e){e.component(d.name,d)};export{f as S};
