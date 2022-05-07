import{M as _}from"./index.3deeb852.js";import{R as ee}from"./index.47b7a69f.js";import{I as ae}from"./index.ad9dd901.js";import{C as le}from"./index.b9d598c3.js";import{I as ie}from"./index.b3660d6d.js";import{d as se,a as k,b as $,w as L,_ as ne,l as N,aa as oe,o as d,f,C as I,G as v,H as O,p as y,al as Q,E,M as b,F as R,ac as A,K as U,O as F,e as te,h as H}from"./elevation.ded31914.js";import{t as u,c as ue,i as q}from"./components.be4fa7b1.js";import{p as re}from"./en-US.66474835.js";const de={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function},"onUpdate:current":{type:Function},"onUpdate:size":{type:Function}};const{n:ve,classes:me}=ue("pagination"),pe=se({name:"VarPagination",components:{VarMenu:_,VarIcon:ae,VarCell:le,VarInput:ie},directives:{Ripple:ee},props:de,setup(e){const i=k(!1),w=k(""),h=k("1"),z=k(!1),P=k(!1),s=k(u(e.current)||1),m=k(u(e.size)||10),C=k([]),c=$(()=>Math.ceil(e.maxPagerCount/2)),o=$(()=>Math.ceil(u(e.total)/u(m.value))),l=$(()=>{const a=m.value*(s.value-1)+1,t=Math.min(m.value*s.value,u(e.total));return[a,t]}),g=$(()=>e.showTotal?e.showTotal(u(e.total),l.value):""),B=(a,t)=>q(a)?!1:t===1?z.value:P.value,G=(a,t)=>q(a)?"basic":t===1?"head":"tail",j=(a,t)=>{a===s.value||e.disabled||(q(a)?s.value=a:a==="prev"?s.value>1&&(s.value-=1):a==="next"?s.value<o.value&&(s.value+=1):a==="..."&&(t===1?s.value=Math.max(s.value-e.maxPagerCount,1):s.value=Math.min(s.value+e.maxPagerCount,o.value)))},W=()=>{e.disabled||(i.value=!0)},X=a=>{m.value=a,i.value=!1},K=a=>/^[1-9][0-9]*$/.test(a),Y=(a,t,M)=>{if(M.target.blur(),K(t)){let V=u(t);V>o.value&&(V=o.value,h.value=`${V}`),V!==s.value&&(s.value=V)}a==="quick"&&(w.value=""),a==="simple"&&!K(t)&&(h.value=`${s.value}`)};return L([()=>e.current,()=>e.size],([a,t])=>{s.value=u(a)||1,m.value=u(t||10)}),L([s,m],([a,t],[M,V])=>{var D,J;if(a>o.value){s.value=o.value;return}let r=[];const{maxPagerCount:p,total:Z,onChange:S}=e,x=Math.ceil(u(Z)/u(V)),T=o.value-(p-c.value)-1;if(h.value=`${a}`,o.value-2>p){if(M===void 0||o.value!==x)for(let n=2;n<p+2;n++)r.push(n);if(a<=p&&a<T){r=[];for(let n=1;n<p+1;n++)r.push(n+1);z.value=!0,P.value=!1}if(a>p&&a<T){r=[];for(let n=1;n<p+1;n++)r.push(a+n-c.value);z.value=a===2&&p===1,P.value=!1}if(a>=T){r=[];for(let n=1;n<p+1;n++)r.push(o.value-(p-n)-1);z.value=!1,P.value=!0}r=[1,"...",...r,"...",o.value]}else for(let n=1;n<=o.value;n++)r.push(n);C.value=r,M!==void 0&&(S==null||S(a,t)),(D=e["onUpdate:current"])==null||D.call(e,a),(J=e["onUpdate:size"])==null||J.call(e,t)},{immediate:!0}),{n:ve,classes:me,pack:re,current:s,menuVisible:i,size:m,pageCount:o,pageList:C,inputValue:w,simpleValue:h,totalText:g,getMode:G,isHideEllipsis:B,clickItem:j,showMenu:W,clickSize:X,setPage:Y,toNumber:u}}}),fe=["item-mode","onClick"];function be(e,i,w,h,z,P){const s=N("var-icon"),m=N("var-input"),C=N("var-cell"),c=N("var-menu"),o=oe("ripple");return d(),f("ul",{class:v(e.n())},[I((d(),f("li",{class:v(e.classes(e.n("item"),e.n("prev"),[e.current<=1||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--hover"),"var-elevation--2"])),onClick:i[0]||(i[0]=l=>e.clickItem("prev"))},[O(e.$slots,"prev",{},()=>[y(s,{name:"chevron-left"})])],2)),[[o,{disabled:e.current<=1||e.disabled}]]),e.simple?(d(),f("li",{key:0,class:v(e.classes(e.n("simple"),[e.disabled,e.n("item--disabled")]))},[y(m,{modelValue:e.simpleValue,"onUpdate:modelValue":i[1]||(i[1]=l=>e.simpleValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:i[2]||(i[2]=l=>e.setPage("simple",e.simpleValue,l)),onKeydown:i[3]||(i[3]=Q(l=>e.setPage("simple",e.simpleValue,l),["enter"]))},null,8,["modelValue","disabled"]),E("span",null,"/ "+b(e.pageCount),1)],2)):(d(!0),f(R,{key:1},A(e.pageList,(l,g)=>I((d(),f("li",{key:e.toNumber(l)+g,"item-mode":e.getMode(l,g),class:v(e.classes(e.n("item"),"var-elevation--2",[l===e.current&&!e.disabled,e.n("item--active")],[e.isHideEllipsis(l,g),e.n("item--hide")],[e.disabled,e.n("item--disabled")],[l===e.current&&e.disabled,e.n("item--disabled--active")])),onClick:B=>e.clickItem(l,g)},[U(b(l),1)],10,fe)),[[o,{disabled:e.disabled}]])),128)),I((d(),f("li",{class:v(e.classes(e.n("item"),e.n("next"),[e.current>=e.pageCount||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--hover"),"var-elevation--2"])),onClick:i[4]||(i[4]=l=>e.clickItem("next"))},[O(e.$slots,"next",{},()=>[y(s,{name:"chevron-right"})])],2)),[[o,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(d(),f("li",{key:2,class:v(e.classes(e.n("size"),[e.disabled,e.n("item--disabled")]))},[y(c,{show:e.menuVisible,"onUpdate:show":i[6]||(i[6]=l=>e.menuVisible=l),"offset-x":-4},{menu:F(()=>[(d(!0),f(R,null,A(e.sizeOption,(l,g)=>I((d(),te(C,{class:v(e.classes(e.n("list"),[e.size===l,e.n("list--active")])),key:g,onClick:B=>e.clickSize(l)},{default:F(()=>[U(b(l)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[o]])),128))]),default:F(()=>[E("div",{class:v(e.classes(e.n("size--open"),[e.current<=1||e.disabled,e.n("size--open--disabled")])),onClick:i[5]||(i[5]=(...l)=>e.showMenu&&e.showMenu(...l))},[E("span",null,b(e.size)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1),y(s,{class:v(e.n("size--open-icon")),"var-pagination-cover":"",name:"menu-down"},null,8,["class"])],2)]),_:1},8,["show"])],2)):H("v-if",!0),e.showQuickJumper&&!e.simple?(d(),f("li",{key:3,class:v(e.classes(e.n("quickly"),[e.disabled,"item--disabled"]))},[U(b(e.pack.paginationJump)+" ",1),y(m,{modelValue:e.inputValue,"onUpdate:modelValue":i[7]||(i[7]=l=>e.inputValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:i[8]||(i[8]=l=>e.setPage("quick",e.inputValue,l)),onKeydown:i[9]||(i[9]=Q(l=>e.setPage("quick",e.inputValue,l),["enter"]))},null,8,["modelValue","disabled"])],2)):H("v-if",!0),e.totalText?(d(),f("li",{key:4,class:v(e.n("total"))},b(e.totalText),3)):H("v-if",!0)],2)}var ce=ne(pe,[["render",be]]);export{ce as P};
