import{a as t,c as l,r as b,ak as D,ac as H,aH as A,l as B,ae as N,_ as q,p as z,ag as F,f as r,h as i,M as s,Q as _,F as y,ai as I,D as L,q as M}from"./vue-router-14238f57.js";const P={name:"AppHome",setup(){var f,h,g,C,k,x;const p=t(((f=l)==null?void 0:f.title)??""),m=t(((h=l)==null?void 0:h.logo)??""),d=t(((C=(g=l)==null?void 0:g.mobile)==null?void 0:C.title)??{}),v=t(((x=(k=l)==null?void 0:k.pc)==null?void 0:x.menu)??[]).value.filter(e=>e.type===2),u=b(v),a=t("zh-CN"),c=t("mobile"),n=D();return H(e=>{a.value=e}),A(e=>{c.value=e}),{components:u,lang:a,toComponent:e=>{n.push({path:`/${e.doc}`,query:{language:a.value,platform:c.value,replace:e.doc}}),!B()&&N()&&window.top.scrollToMenu(e.doc)},logo:m,title:p,description:d}}};const V={class:"logo"},E={class:"varlet-home__title"},Q=["src"],R={class:"varlet-home__desc"},S=["onClick"];function T(p,m,d,o,v,u){const a=z("var-icon"),c=F("ripple");return r(),i(y,null,[s("div",V,[s("h1",E,[s("img",{class:"varlet-home__image",src:o.logo},null,8,Q),s("span",null,_(o.title),1)]),s("h2",R,_(o.description[o.lang]),1)]),(r(!0),i(y,null,I(o.components,n=>L((r(),i("div",{class:"varlet-home__cell",key:n.text,onClick:w=>o.toComponent(n)},[s("span",null,_(n.text[o.lang]),1),M(a,{name:"chevron-right",size:"14"})],8,S)),[[c]])),128))],64)}const G=q(P,[["render",T],["__scopeId","data-v-74f7fbf0"]]);export{G as default};
