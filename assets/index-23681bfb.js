import{M as ee}from"./index-0e7fc1fb.js";import{v as ae}from"./index-fde800b6.js";import{I as le}from"./index-6ea553c6.js";import{C as se}from"./index-932d5f4f.js";import{I as ie}from"./index-d19ab1db.js";import{d as J,f as ne,c as oe,a as U,w as re}from"./logger-9a144f5d.js";import{d as ue,a as V,Z as r,b as N,w as F,X as H,_ as te,p as S,af as de,f as d,h as f,D as B,N as u,O as K,q as h,aT as O,M as $,P as q,Q as b,F as Q,ah as R,S as D,i as me,ag as pe,j as L}from"./vue-router-547718df.js";import{p as ve}from"./index-d39e90ed.js";const fe={current:[Number,String],size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},elevation:{type:[Boolean,Number,String],default:!0},maxPagerCount:{type:Number,default:3},disabled:Boolean,simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:Boolean,sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:Function,onChange:J(),"onUpdate:current":J(),"onUpdate:size":J()},{n:be,classes:ge}=oe("pagination"),ke=ue({name:"VarPagination",components:{VarMenu:ee,VarIcon:le,VarCell:se,VarInput:ie},directives:{Ripple:ae},props:fe,setup(e){const s=V(!1),E=V(""),y=V("1"),C=V(!1),P=V(!1),i=V(r(e.current)||1),m=V(r(e.size)||10),M=V([]),c=N(()=>Math.ceil(e.maxPagerCount/2)),p=N(()=>Math.ceil(r(e.total)/r(m.value))),l=N(()=>{const a=m.value*(i.value-1)+1,o=Math.min(m.value*i.value,r(e.total));return[a,o]}),k=N(()=>e.showTotal?e.showTotal(r(e.total),l.value):""),T=(a,o)=>H(a)?!1:o===1?C.value:P.value,j=(a,o)=>H(a)?"basic":o===1?"head":"tail",A=(a,o)=>{if(!(a===i.value||e.disabled)){if(a==="..."){i.value=o===1?Math.max(i.value-e.maxPagerCount,1):Math.min(i.value+e.maxPagerCount,p.value);return}if(a==="prev"){i.value=I(i.value-1);return}if(a==="next"){i.value=I(i.value+1);return}H(a)&&(i.value=a)}},X=()=>{e.disabled||(s.value=!0)},Z=a=>{m.value=a,s.value=!1;const o=I(i.value);y.value=String(o),i.value=o},I=a=>a>p.value?p.value:a<1?1:a,G=(a,o,g)=>{g.target.blur();const z=I(r(o));y.value=String(z),i.value=z,a==="quick"&&(E.value="")};return F([()=>e.current,()=>e.size],([a,o])=>{i.value=r(a)||1,m.value=r(o||10)}),F([i,m,p],([a,o,g],[z,W])=>{let t=[];const{maxPagerCount:v,total:Y,onChange:x}=e,_=Math.ceil(r(Y)/r(W)),w=g-(v-c.value)-1;if(y.value=`${a}`,g-2>v){if(z===void 0||g!==_)for(let n=2;n<v+2;n++)t.push(n);if(a<=v&&a<w){t=[];for(let n=1;n<v+1;n++)t.push(n+1);C.value=!0,P.value=!1}if(a>v&&a<w){t=[];for(let n=1;n<v+1;n++)t.push(a+n-c.value);C.value=a===2&&v===1,P.value=!1}if(a>=w){t=[];for(let n=1;n<v+1;n++)t.push(g-(v-n)-1);C.value=!1,P.value=!0}t=[1,"...",...t,"...",g]}else for(let n=1;n<=g;n++)t.push(n);M.value=t,z!=null&&g>0&&U(x,a,o),U(e["onUpdate:current"],a),U(e["onUpdate:size"],o)},{immediate:!0}),{n:be,classes:ge,pack:ve,current:i,menuVisible:s,size:m,pageCount:p,pageList:M,quickJumperValue:E,simpleCurrentValue:y,totalText:k,getMode:j,isHideEllipsis:T,clickItem:A,showMenu:X,clickSize:Z,setPage:G,toNumber:r,formatElevation:ne}}});const Ve=["item-mode","onClick"];function he(e,s,E,y,C,P){const i=S("var-icon"),m=S("var-input"),M=S("var-cell"),c=S("var-menu"),p=de("ripple");return d(),f("ul",{class:u(e.n())},[B((d(),f("li",{class:u(e.classes(e.n("item"),e.n("prev"),[e.current<=1||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.formatElevation(e.elevation,2)])),onClick:s[0]||(s[0]=l=>e.clickItem("prev"))},[K(e.$slots,"prev",{},()=>[h(i,{name:"chevron-left"})])],2)),[[p,{disabled:e.current<=1||e.disabled}]]),e.simple?(d(),f("li",{key:0,class:u(e.classes(e.n("simple"),[e.disabled,e.n("item--disabled")]))},[h(m,{"var-pagination-cover":"",hint:!1,disabled:e.disabled,modelValue:e.simpleCurrentValue,"onUpdate:modelValue":s[1]||(s[1]=l=>e.simpleCurrentValue=l),onBlur:s[2]||(s[2]=l=>e.setPage("simple",e.simpleCurrentValue,l)),onKeydown:s[3]||(s[3]=O(l=>e.setPage("simple",e.simpleCurrentValue,l),["enter"]))},null,8,["disabled","modelValue"]),$("span",null,[q(" / "+b(e.pageCount)+" ",1),$("div",{class:u(e.n("simple-line"))},null,2)])],2)):(d(!0),f(Q,{key:1},R(e.pageList,(l,k)=>B((d(),f("li",{key:k,"item-mode":e.getMode(l,k),class:u(e.classes(e.n("item"),e.formatElevation(e.elevation,2),[l===e.current&&!e.disabled,e.n("item--active")],[e.isHideEllipsis(l,k),e.n("item--hide")],[e.disabled,e.n("item--disabled")],[l===e.current&&e.disabled,e.n("item--disabled--active")])),onClick:T=>e.clickItem(l,k)},[q(b(l),1)],10,Ve)),[[p,{disabled:e.disabled}]])),128)),B((d(),f("li",{class:u(e.classes(e.n("item"),e.n("next"),[e.current>=e.pageCount||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.formatElevation(e.elevation,2)])),onClick:s[4]||(s[4]=l=>e.clickItem("next"))},[K(e.$slots,"next",{},()=>[h(i,{name:"chevron-right"})])],2)),[[p,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(d(),f("li",{key:2,class:u(e.classes(e.n("size"),[e.disabled,e.n("item--disabled")]))},[h(c,{placement:"cover-top",disabled:e.disabled,show:e.menuVisible,"onUpdate:show":s[6]||(s[6]=l=>e.menuVisible=l)},{menu:D(()=>[(d(!0),f(Q,null,R(e.sizeOption,(l,k)=>B((d(),me(M,{class:u(e.classes(e.n("list"),[e.size===l,e.n("list--active")])),key:k,onClick:T=>e.clickSize(l)},{default:D(()=>[q(b(l)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[p]])),128))]),default:D(()=>[$("div",{class:u(e.classes(e.n("size--open"),[e.current<=1||e.disabled,e.n("size--open--disabled")])),onClick:s[5]||(s[5]=pe((...l)=>e.showMenu&&e.showMenu(...l),["stop"]))},[$("span",null,b(e.size)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1),h(i,{class:u(e.n("size--open-icon")),"var-pagination-cover":"",name:"menu-down"},null,8,["class"])],2)]),_:1},8,["disabled","show"])],2)):L("",!0),e.showQuickJumper&&!e.simple?(d(),f("li",{key:3,class:u(e.classes(e.n("quickly"),[e.disabled,e.n("item--disabled")]))},[q(b(e.pack.paginationJump)+" ",1),h(m,{modelValue:e.quickJumperValue,"onUpdate:modelValue":s[7]||(s[7]=l=>e.quickJumperValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[8]||(s[8]=l=>e.setPage("quick",e.quickJumperValue,l)),onKeydown:s[9]||(s[9]=O(l=>e.setPage("quick",e.quickJumperValue,l),["enter"]))},null,8,["modelValue","disabled"])],2)):L("",!0),e.totalText?(d(),f("li",{key:4,class:u(e.classes(e.n("total"),[e.disabled,e.n("item--disabled")]))},b(e.totalText),3)):L("",!0)],2)}const ye=te(ke,[["render",he]]);re(ye);export{ye as P};
