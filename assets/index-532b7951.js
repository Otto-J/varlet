import{S as _}from"./index-6172b606.js";import{a3 as p,a1 as l,d as u,r as d,B as m,_ as b,b as I,e as T,f,w as v,s as B,t as S}from"./index-e8376e61.js";import{e as w}from"./logger-525ef361.js";import{T as h}from"./provide-4a8958e1.js";import{c as C,w as E}from"./components-c1e1aae1.js";const L=Symbol("TAB_ITEM_BIND_LIST_KEY");function N(){const{parentProvider:e,bindParent:s,index:t}=p(h);return s||w("TabItem","<var-tab-item/> must in <var-tabs-items/>"),{index:t,tabsItems:e,bindTabsItems:s}}function P(){const{childProviders:e,bindChildren:s,length:t}=l(L);return{length:t,lists:e,bindLists:s}}const $={name:[String,Number]},{n:A,classes:M}=C("tab-item"),g=u({name:"VarTabItem",components:{VarSwipeItem:_},props:$,setup(e){const s=d(!1),t=m(()=>e.name),{index:a,bindTabsItems:r}=N(),{bindLists:o}=P(),n=c=>{s.value=c},i={index:a,name:t,current:m(()=>s.value),setCurrent:n};return r(i),o(i),{n:A,classes:M,current:s}}});function y(e,s,t,a,r,o){const n=I("var-swipe-item");return T(),f(n,{class:S(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:v(()=>[B(e.$slots,"default")]),_:3},8,["class"])}const D=b(g,[["render",y]]);E(D);export{L as T,D as a};
