import{M as ae}from"./index-b9b5d4c1.js";import{v as le}from"./index-82d28c5f.js";import{I as se}from"./index-5aae3056.js";import{C as ie}from"./index-940ab291.js";import{I as ne}from"./index-820e7880.js";import{d as U,f as oe,c as te,a as w}from"./components-dc0ced43.js";import{d as ue,a as V,Z as t,b as S,w as K,X as H,_ as re,p as B,ag as de,f as d,h as f,D as I,N as u,O,q as y,aR as Q,M as $,P as q,Q as g,F as R,ai as j,S as D,i as me,ah as pe,j as L}from"./vue-router-fb57fd33.js";import{p as ve}from"./index-b93da1bc.js";const fe={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},elevation:{type:[Boolean,Number,String],default:!0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:U(),"onUpdate:current":U(),"onUpdate:size":U()},{n:ge,classes:be}=te("pagination"),ke=ue({name:"VarPagination",components:{VarMenu:ae,VarIcon:se,VarCell:ie,VarInput:ne},directives:{Ripple:le},props:fe,setup(e){const s=V(!1),E=V(""),h=V("1"),C=V(!1),P=V(!1),i=V(t(e.current)||1),m=V(t(e.size)||10),c=V([]),M=S(()=>Math.ceil(e.maxPagerCount/2)),p=S(()=>Math.ceil(t(e.total)/t(m.value))),l=S(()=>{const a=m.value*(i.value-1)+1,o=Math.min(m.value*i.value,t(e.total));return[a,o]}),k=S(()=>e.showTotal?e.showTotal(t(e.total),l.value):""),J=(a,o)=>H(a)?!1:o===1?C.value:P.value,A=(a,o)=>H(a)?"basic":o===1?"head":"tail",X=(a,o)=>{if(!(a===i.value||e.disabled)){if(a==="..."){i.value=o===1?Math.max(i.value-e.maxPagerCount,1):Math.min(i.value+e.maxPagerCount,p.value);return}if(a==="prev"){i.value=N(i.value-1);return}if(a==="next"){i.value=N(i.value+1);return}H(a)&&(i.value=a)}},Z=()=>{e.disabled||(s.value=!0)},G=a=>{m.value=a,s.value=!1;const o=N(i.value);h.value=String(o),i.value=o},N=a=>a>p.value?p.value:a<1?1:a,W=(a,o,b)=>{b.target.blur();const z=N(t(o));h.value=String(z),i.value=z,a==="quick"&&(E.value="")};return K([()=>e.current,()=>e.size],([a,o])=>{i.value=t(a)||1,m.value=t(o||10)}),K([i,m,p],([a,o,b],[z,Y])=>{let r=[];const{maxPagerCount:v,total:x,onChange:_}=e,ee=Math.ceil(t(x)/t(Y)),T=b-(v-M.value)-1;if(h.value=`${a}`,b-2>v){if(z===void 0||b!==ee)for(let n=2;n<v+2;n++)r.push(n);if(a<=v&&a<T){r=[];for(let n=1;n<v+1;n++)r.push(n+1);C.value=!0,P.value=!1}if(a>v&&a<T){r=[];for(let n=1;n<v+1;n++)r.push(a+n-M.value);C.value=a===2&&v===1,P.value=!1}if(a>=T){r=[];for(let n=1;n<v+1;n++)r.push(b-(v-n)-1);C.value=!1,P.value=!0}r=[1,"...",...r,"...",b]}else for(let n=1;n<=b;n++)r.push(n);c.value=r,z!=null&&b>0&&w(_,a,o),w(e["onUpdate:current"],a),w(e["onUpdate:size"],o)},{immediate:!0}),{n:ge,classes:be,pack:ve,current:i,menuVisible:s,size:m,pageCount:p,pageList:c,quickJumperValue:E,simpleCurrentValue:h,totalText:k,getMode:A,isHideEllipsis:J,clickItem:X,showMenu:Z,clickSize:G,setPage:W,toNumber:t,formatElevation:oe}}});const Ve=["item-mode","onClick"];function ye(e,s,E,h,C,P){const i=B("var-icon"),m=B("var-input"),c=B("var-cell"),M=B("var-menu"),p=de("ripple");return d(),f("ul",{class:u(e.n())},[I((d(),f("li",{class:u(e.classes(e.n("item"),e.n("prev"),[e.current<=1||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.formatElevation(e.elevation,2)])),onClick:s[0]||(s[0]=l=>e.clickItem("prev"))},[O(e.$slots,"prev",{},()=>[y(i,{name:"chevron-left"})])],2)),[[p,{disabled:e.current<=1||e.disabled}]]),e.simple?(d(),f("li",{key:0,class:u(e.classes(e.n("simple"),[e.disabled,e.n("item--disabled")]))},[y(m,{modelValue:e.simpleCurrentValue,"onUpdate:modelValue":s[1]||(s[1]=l=>e.simpleCurrentValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[2]||(s[2]=l=>e.setPage("simple",e.simpleCurrentValue,l)),onKeydown:s[3]||(s[3]=Q(l=>e.setPage("simple",e.simpleCurrentValue,l),["enter"]))},null,8,["modelValue","disabled"]),$("span",null,[q(" / "+g(e.pageCount)+" ",1),$("div",{class:u(e.n("simple-line"))},null,2)])],2)):(d(!0),f(R,{key:1},j(e.pageList,(l,k)=>I((d(),f("li",{key:e.toNumber(l)+k,"item-mode":e.getMode(l,k),class:u(e.classes(e.n("item"),e.formatElevation(e.elevation,2),[l===e.current&&!e.disabled,e.n("item--active")],[e.isHideEllipsis(l,k),e.n("item--hide")],[e.disabled,e.n("item--disabled")],[l===e.current&&e.disabled,e.n("item--disabled--active")])),onClick:J=>e.clickItem(l,k)},[q(g(l),1)],10,Ve)),[[p,{disabled:e.disabled}]])),128)),I((d(),f("li",{class:u(e.classes(e.n("item"),e.n("next"),[e.current>=e.pageCount||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.formatElevation(e.elevation,2)])),onClick:s[4]||(s[4]=l=>e.clickItem("next"))},[O(e.$slots,"next",{},()=>[y(i,{name:"chevron-right"})])],2)),[[p,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(d(),f("li",{key:2,class:u(e.classes(e.n("size"),[e.disabled,e.n("item--disabled")]))},[y(M,{disabled:e.disabled,show:e.menuVisible,"onUpdate:show":s[6]||(s[6]=l=>e.menuVisible=l),"offset-x":-4},{menu:D(()=>[(d(!0),f(R,null,j(e.sizeOption,(l,k)=>I((d(),me(c,{class:u(e.classes(e.n("list"),[e.size===l,e.n("list--active")])),key:k,onClick:J=>e.clickSize(l)},{default:D(()=>[q(g(l)+g(e.pack.paginationItem)+" / "+g(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[p]])),128))]),default:D(()=>[$("div",{class:u(e.classes(e.n("size--open"),[e.current<=1||e.disabled,e.n("size--open--disabled")])),onClick:s[5]||(s[5]=pe((...l)=>e.showMenu&&e.showMenu(...l),["stop"]))},[$("span",null,g(e.size)+g(e.pack.paginationItem)+" / "+g(e.pack.paginationPage),1),y(i,{class:u(e.n("size--open-icon")),"var-pagination-cover":"",name:"menu-down"},null,8,["class"])],2)]),_:1},8,["disabled","show"])],2)):L("",!0),e.showQuickJumper&&!e.simple?(d(),f("li",{key:3,class:u(e.classes(e.n("quickly"),[e.disabled,"item--disabled"]))},[q(g(e.pack.paginationJump)+" ",1),y(m,{modelValue:e.quickJumperValue,"onUpdate:modelValue":s[7]||(s[7]=l=>e.quickJumperValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[8]||(s[8]=l=>e.setPage("quick",e.quickJumperValue,l)),onKeydown:s[9]||(s[9]=Q(l=>e.setPage("quick",e.quickJumperValue,l),["enter"]))},null,8,["modelValue","disabled"])],2)):L("",!0),e.totalText?(d(),f("li",{key:4,class:u(e.n("total"))},g(e.totalText),3)):L("",!0)],2)}const F=re(ke,[["render",ye]]);F.install=function(e){e.component(F.name,F)};export{F as P};
