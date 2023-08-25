import{B as be}from"./index-db3ce570.js";import{d as _,o as ve,c as H,a as S,w as W,u as de,e as fe}from"./logger-9a144f5d.js";import{u as ge}from"./useChildren-05343878.js";import{d as Z,a as d,b as U,w as G,ai as pe,aN as Ce,X as he,_ as x,p as R,f as $,h as F,O as w,i as M,S as m,m as ee,j as L,N as O,R as ae,af as Ne,D as Be,M as ye,F as le,P as y,Q as k,aa as ke,aC as Ie,q as l,an as e}from"./vue-router-547718df.js";import{v as Se}from"./index-fde800b6.js";import{B as $e}from"./index-844c9d8b.js";import{I as ne}from"./index-5ae50cc0.js";import{S as Y}from"./index-8613e7ec.js";import{d as Ae}from"./index-ea9abee8.js";import{u as Ee,b as oe,_ as Pe,c as Te,a as _e}from"./index-d39e90ed.js";import{A as E}from"./appType-610d2e23.js";import"./index-f02d9b3c.js";import"./elements-1fb47fa1.js";import"./index-d113846f.js";import"./index-ef9afa54.js";import"./index-89a3ce91.js";/* empty css               */import"./zIndex-d095b494.js";import"./lock-783c0ea8.js";const Ue={active:{type:[Number,String],default:0},zIndex:{type:[Number,String],default:1},fixed:Boolean,border:Boolean,safeArea:Boolean,activeColor:String,inactiveColor:String,fabProps:Object,onChange:_(),onBeforeChange:_(),onFabClick:_(),"onUpdate:active":_()},te=Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");function Le(){const{childProviders:a,length:s,bindChildren:c}=ge(te);return{length:s,bottomNavigationItems:a,bindBottomNavigationItem:c}}const{n:Oe,classes:Fe}=H("bottom-navigation"),{n:z}=H("bottom-navigation-item"),Q=z("--right-half-space"),X=z("--left-half-space"),J=z("--right-space"),we={type:"primary"},Me=Z({name:"VarBottomNavigation",components:{VarButton:be},props:Ue,setup(a,{slots:s}){const c=d(null),b=U(()=>a.active),f=U(()=>a.activeColor),p=U(()=>a.inactiveColor),v=d({}),{length:r,bottomNavigationItems:C,bindBottomNavigationItem:h}=Le(),P=()=>{r.value===0||N()||B()||t()},N=()=>C.find(({name:i})=>b.value===i.value),B=()=>C.find(({index:i})=>b.value===i.value),t=()=>{he(b.value)&&(b.value<0?S(a["onUpdate:active"],0):b.value>r.value-1&&S(a["onUpdate:active"],r.value-1))},u=i=>{b.value!==i&&(a.onBeforeChange?se(i):j(i))},se=i=>{const g=Ce(S(a.onBeforeChange,i));Promise.all(g).then(A=>{A.every(Boolean)&&j(i)})},j=i=>{S(a["onUpdate:active"],i),S(a.onChange,i)},ce=()=>{K().forEach(g=>{g.classList.remove(Q,X,J)})},q=i=>{const g=K(),A=g.length,T=i%2===0;g.forEach((D,V)=>{re(T,D,V,A)})},re=(i,g,A,T)=>{const D=A===T-1;if(!i&&D){g.classList.add(J);return}const V=A===T/2-1,me=A===T/2;V?g.classList.add(Q):me&&g.classList.add(X)},K=()=>Array.from(c.value.querySelectorAll(`.${z()}`)),ue=()=>{S(a.onFabClick)};return h({active:b,activeColor:f,inactiveColor:p,onToggle:u}),G(()=>r.value,P),G(()=>a.fabProps,i=>{v.value={...we,...i}},{immediate:!0,deep:!0}),ve(()=>{s.fab&&q(r.value)}),pe(()=>{ce(),s.fab&&q(r.value)}),{n:Oe,classes:Fe,length:r,bottomNavigationDom:c,handleFabClick:ue,fabProps:v}}});function ze(a,s,c,b,f,p){const v=R("var-button");return $(),F("div",{class:O(a.classes(a.n(),a.n("$--box"),[a.fixed,a.n("--fixed")],[a.border,a.n("--border")],[a.safeArea,a.n("--safe-area")])),ref:"bottomNavigationDom",style:ae(`z-index:${a.zIndex}`)},[w(a.$slots,"default"),a.$slots.fab?($(),M(v,ee({key:0,class:a.classes(a.n("fab"),[a.length%2,a.n("--fab-right"),a.n("--fab-center")]),"var-bottom-navigation__fab":"",onClick:a.handleFabClick},a.fabProps,{round:""}),{default:m(()=>[w(a.$slots,"fab")]),_:3},16,["class","onClick"])):L("",!0)],6)}const I=x(Me,[["render",ze]]);W(I);const De={name:String,icon:String,label:String,namespace:{type:String,default:"var-icon"},badge:{type:[Boolean,Object],default:!1},onClick:_()};function Ve(){const{parentProvider:a,index:s,bindParent:c}=de(te);return c||fe("BottomNavigationItem","<var-bottom-navigation-item/> must in <var-bottom-navigation/>"),{index:s,bottomNavigation:a,bindBottomNavigation:c}}const{n:Ge,classes:Re}=H("bottom-navigation-item"),He={type:"danger",dot:!0},je=Z({name:"VarBottomNavigationItem",components:{VarBadge:$e,VarIcon:ne},directives:{Ripple:Se},props:De,setup(a){const s=U(()=>a.name),c=U(()=>a.badge),b=d({}),{index:f,bottomNavigation:p,bindBottomNavigation:v}=Ve(),{active:r,activeColor:C,inactiveColor:h}=p,P={name:s,index:f},N=()=>r.value===s.value||r.value===f.value?C.value:h.value,B=()=>{const t=s.value??f.value;S(a.onClick,t),S(p.onToggle,t)};return v(P),G(()=>c.value,t=>{b.value=t===!0?He:c.value},{immediate:!0}),{n:Ge,classes:Re,index:f,active:r,badge:c,badgeProps:b,computeColorStyle:N,handleClick:B}}});function qe(a,s,c,b,f,p){const v=R("var-icon"),r=R("var-badge"),C=Ne("ripple");return Be(($(),F("button",{class:O(a.classes(a.n(),a.n("$--box"),[a.active===a.index||a.active===a.name,a.n("--active")])),style:ae({color:a.computeColorStyle()}),onClick:s[0]||(s[0]=(...h)=>a.handleClick&&a.handleClick(...h))},[a.icon&&!a.$slots.icon?($(),M(v,{key:0,name:a.icon,namespace:a.namespace,class:O(a.n("icon")),"var-bottom-navigation-item-cover":""},null,8,["name","namespace","class"])):L("",!0),w(a.$slots,"icon",{active:a.active===a.index||a.active===a.name}),a.badge?($(),M(r,ee({key:1},a.badgeProps,{class:a.n("badge"),"var-bottom-navigation-item-cover":""}),null,16,["class"])):L("",!0),ye("span",{class:O(a.n("label"))},[a.$slots.default?L("",!0):($(),F(le,{key:0},[y(k(a.label),1)],64)),w(a.$slots,"default")],2)],6)),[[C]])}const o=x(je,[["render",qe]]);W(o);const Ke={basicUsage:"基本使用",matchByName:"通过名称匹配",showBadge:"徽标提示",customColor:"自定义颜色",changeEvent:"监听切换事件",clickEvent:"监听点击事件",fab:"悬浮按钮",label:"标签"},Ye={basicUsage:"Basic Usage",matchByName:"Match By Name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label"},{add:ie,use:Qe,pack:n,packs:ga,merge:pa}=Ee(),Xe=a=>{_e(a),Qe(a)};oe("zh-CN",Pe);oe("en-US",Te);ie("zh-CN",Ke);ie("en-US",Ye);const Ca={__name:"index",setup(a){const s=d(0),c=d("home"),b=d(0),f={type:"primary",value:"66"},p=d(0),v=d(0),r=d(0),C=d(0),h=d(!0);function P(B){Y.info(`changed to ${B}`)}function N(B){Y.success(`clicked ${B}`)}return ke(Xe),Ie(Ae),(B,t)=>($(),F(le,null,[l(e(E),null,{default:m(()=>[y(k(e(n).basicUsage),1)]),_:1}),l(e(I),{active:s.value,"onUpdate:active":t[0]||(t[0]=u=>s.value=u)},{default:m(()=>[l(e(o),{label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"magnify"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"heart"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[y(k(e(n).matchByName),1)]),_:1}),l(e(I),{active:c.value,"onUpdate:active":t[1]||(t[1]=u=>c.value=u)},{default:m(()=>[l(e(o),{name:"home",label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{name:"search",label:e(n).label,icon:"magnify"},null,8,["label"]),l(e(o),{name:"heart",label:e(n).label,icon:"heart"},null,8,["label"]),l(e(o),{name:"user",label:e(n).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[y(k(e(n).showBadge),1)]),_:1}),l(e(I),{active:b.value,"onUpdate:active":t[2]||(t[2]=u=>b.value=u)},{default:m(()=>[l(e(o),{label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"magnify",badge:""},null,8,["label"]),l(e(o),{label:e(n).label,icon:"heart",badge:f},null,8,["label"]),l(e(o),{label:e(n).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[y(k(e(n).customColor),1)]),_:1}),l(e(I),{"active-color":"#ba68c8",active:p.value,"onUpdate:active":t[3]||(t[3]=u=>p.value=u)},{default:m(()=>[l(e(o),{label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"magnify"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"heart"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[y(k(e(n).changeEvent),1)]),_:1}),l(e(I),{active:v.value,"onUpdate:active":t[4]||(t[4]=u=>v.value=u),onChange:P},{default:m(()=>[l(e(o),{label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"magnify"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"heart"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[y(k(e(n).clickEvent),1)]),_:1}),l(e(I),{active:r.value,"onUpdate:active":t[5]||(t[5]=u=>r.value=u)},{default:m(()=>[l(e(o),{onClick:N,label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{onClick:N,label:e(n).label,icon:"magnify"},null,8,["label"]),l(e(o),{onClick:N,label:e(n).label,icon:"heart"},null,8,["label"]),l(e(o),{onClick:N,label:e(n).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(E),null,{default:m(()=>[y(k(e(n).fab),1)]),_:1}),l(e(I),{active:C.value,"onUpdate:active":t[6]||(t[6]=u=>C.value=u),onFabClick:t[7]||(t[7]=u=>h.value=!h.value),style:{"margin-top":"10px"}},{fab:m(()=>[l(e(ne),{name:"heart"})]),default:m(()=>[l(e(o),{label:e(n).label,icon:"home"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"magnify"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"heart"},null,8,["label"]),l(e(o),{label:e(n).label,icon:"bell"},null,8,["label"]),h.value?L("",!0):($(),M(e(o),{key:0,label:e(n).label,icon:"account-circle"},null,8,["label"]))]),_:1},8,["active"])],64))}};export{Ca as default};
