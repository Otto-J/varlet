import{S as p}from"./index-0a6404a7.js";import{u as _,c as u}from"./components-7bcea1d6.js";import{u as l}from"./useChildren-afa766b4.js";import{e as b}from"./logger-525ef361.js";import{T as d}from"./provide-a67f321c.js";import{d as I,b as c,_ as T,p as f,f as v,i as S,S as B,O as E,N}from"./vue-router-609def63.js";const h=Symbol("TAB_ITEM_BIND_LIST_KEY");function C(){const{parentProvider:e,bindParent:t,index:s}=_(d);return t||b("TabItem","<var-tab-item/> must in <var-tabs-items/>"),{index:s,tabsItems:e,bindTabsItems:t}}function w(){const{childProviders:e,bindChildren:t,length:s}=l(h);return{length:s,lists:e,bindLists:t}}const L={name:{type:[String,Number]}},{n:P,classes:$}=u("tab-item"),y=I({name:"VarTabItem",components:{VarSwipeItem:p},props:L,setup(e){const{index:t,tabsItems:s,bindTabsItems:r}=C(),{bindLists:o}=w(),i=c(()=>e.name),n=c(()=>t.value===Number(s.active.value)),m={index:t,name:i,current:n};return r(m),o(m),{n:P,classes:$,current:n}}});function A(e,t,s,r,o,i){const n=f("var-swipe-item");return v(),S(n,{class:N(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:B(()=>[E(e.$slots,"default")]),_:3},8,["class"])}const a=T(y,[["render",A]]);a.install=function(e){e.component(a.name,a)};export{h as T,a};
