import{S as p}from"./index-198d11f9.js";import{u as _,c as u,w as l}from"./components-08e741bd.js";import{u as d}from"./useChildren-9817f989.js";import{e as b}from"./logger-525ef361.js";import{T as I}from"./provide-5a853ca6.js";import{d as f,a as T,b as m,_ as v,p as S,f as B,i as h,S as w,O as C,N as E}from"./vue-router-40fc6ea4.js";const N=Symbol("TAB_ITEM_BIND_LIST_KEY");function L(){const{parentProvider:e,bindParent:s,index:t}=_(I);return s||b("TabItem","<var-tab-item/> must in <var-tabs-items/>"),{index:t,tabsItems:e,bindTabsItems:s}}function P(){const{childProviders:e,bindChildren:s,length:t}=d(N);return{length:t,lists:e,bindLists:s}}const $={name:[String,Number]},{n:A,classes:M}=u("tab-item"),g=f({name:"VarTabItem",components:{VarSwipeItem:p},props:$,setup(e){const s=T(!1),t=m(()=>e.name),{index:a,bindTabsItems:r}=L(),{bindLists:o}=P(),n=c=>{s.value=c},i={index:a,name:t,current:m(()=>s.value),setCurrent:n};return r(i),o(i),{n:A,classes:M,current:s}}});function y(e,s,t,a,r,o){const n=S("var-swipe-item");return B(),h(n,{class:E(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:w(()=>[C(e.$slots,"default")]),_:3},8,["class"])}const D=v(g,[["render",y]]);l(D);export{N as T,D as a};
