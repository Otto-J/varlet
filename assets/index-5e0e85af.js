import{S as h}from"./index-0a082d51.js";import{u as w}from"./provide-af26152c.js";import{d as b,c as _,a as C,w as I}from"./components-1514d07f.js";import{d as S,r as g,F as u,j as T,_ as y,b as $,e as B,f as x,w as A,s as N,t as k}from"./index-c1c53a77.js";const L={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:Boolean,"onUpdate:active":b()},{n:P}=_("tabs-items"),U=S({name:"VarTabsItems",components:{VarSwipe:h},props:L,setup(t){const s=g(null),{tabItemList:n,bindTabItem:l,length:r}=w(),p=e=>n.find(({name:a})=>e===a.value),c=e=>n.find(({index:a})=>e===a.value),d=e=>p(e)||c(e),m=e=>{var o;const a=d(e);a&&(n.forEach(({setCurrent:i})=>i(!1)),a.setCurrent(!0),(o=s.value)==null||o.to(a.index.value))},f=e=>{const a=n.find(({index:i})=>i.value===e),o=a.name.value??a.index.value;C(t["onUpdate:active"],o)},v=()=>s.value;return l({}),u(()=>t.active,m),u(()=>r.value,async()=>{await T(),m(t.active)}),{swipe:s,n:P,handleSwipeChange:f,getSwipe:v}}});function V(t,s,n,l,r,p){const c=$("var-swipe");return B(),x(c,{class:k(t.n()),ref:"swipe",loop:t.loop,touchable:t.canSwipe,indicator:!1,onChange:t.handleSwipeChange},{default:A(()=>[N(t.$slots,"default")]),_:3},8,["class","loop","touchable","onChange"])}const j=y(U,[["render",V]]);I(j);export{j as T};
