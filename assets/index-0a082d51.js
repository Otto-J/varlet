import{u as re}from"./provide-278f3ed7.js";import{d as oe,a as p,c as ie,w as ve}from"./components-1514d07f.js";import{d as ce,r as d,B as fe,b0 as de,F as W,a6 as me,aG as he,az as Te,a1 as E,a9 as pe,aA as we,j as B,_ as ge,e as w,l as g,m as ye,s as X,t as y,v as q,M as Se,N as ke,q as Ie}from"./index-c1c53a77.js";import{a as be}from"./provide-00d2bf7a.js";const $e={loop:{type:Boolean,default:!0},autoplay:[String,Number],duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:String,vertical:Boolean,touchable:{type:Boolean,default:!0},onChange:oe()},ze=250,Ce=20,{n:Ne,classes:Ee}=ie("swipe"),Be=ce({name:"VarSwipe",props:$e,setup(e){const v=d(null),s=d(0),P=fe(()=>e.vertical),c=d(0),u=d(0),r=d(!1),l=d(0),{swipeItems:S,bindSwipeItems:M,length:t}=re(),{popup:A,bindPopup:R}=be(),{deltaX:V,deltaY:j,moveX:G,moveY:H,offsetX:O,offsetY:U,touching:D,direction:J,startTime:K,startTouch:Q,moveTouch:Z,endTouch:_}=de();let Y=!1,k=-1;const f=a=>S.find(({index:n})=>n.value===a),x=()=>{e.loop&&(u.value>=0&&f(t.value-1).setTranslate(-c.value),u.value<=-(c.value-s.value)&&f(0).setTranslate(c.value),u.value>-(c.value-s.value)&&u.value<0&&(f(t.value-1).setTranslate(0),f(0).setTranslate(0)))},I=a=>{const n=pe(a)?a:Math.floor((u.value-s.value/2)/-s.value),{loop:i}=e;return n<=-1?i?-1:0:n>=t.value?i?t.value:t.value-1:n},ee=a=>{const{loop:n}=e;return a===-1?n?t.value-1:0:a===t.value?n?0:t.value-1:a},b=a=>e.loop?a<0?t.value+a:a>=t.value?a-t.value:a:we(a,0,t.value-1),$=async()=>{const a=u.value>=s.value,n=u.value<=-c.value,i=0,o=-(c.value-s.value);r.value=!0,(a||n)&&(r.value=!0,u.value=n?i:o,f(0).setTranslate(0),f(t.value-1).setTranslate(0)),await B(),r.value=!1},z=()=>{Y||(l.value=b(E(e.initialIndex)),Y=!0)},C=()=>{const{autoplay:a}=e;!a||t.value<=1||(h(),k=window.setTimeout(()=>{N(),C()},E(a)))},h=()=>{k&&clearTimeout(k)},F=a=>{u.value=a,x()},ae=async a=>{t.value<=1||!e.touchable||(Q(a),h(),await $(),r.value=!0)},te=a=>{const{touchable:n,vertical:i}=e;if(!D.value||!n)return;Z(a);const o=i?"vertical":"horizontal";J.value===o&&(a.preventDefault(),F(u.value+(i?H.value:G.value)))},le=()=>{if(!D.value)return;const{vertical:a,onChange:n}=e;_();const i=a?j.value<0:V.value<0,o=a?U.value:O.value,T=performance.now()-K.value<=ze&&o>=Ce?I(i?l.value+1:l.value-1):I();r.value=!1,F(T*-s.value);const se=l.value;l.value=ee(T),C(),se!==l.value&&p(n,l.value)},m=()=>{v.value&&(r.value=!0,s.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,c.value=s.value*t.value,u.value=l.value*-s.value,S.forEach(a=>{a.setTranslate(0)}),C(),setTimeout(()=>{r.value=!1}))},N=async a=>{if(t.value<=1)return;z();const{loop:n,onChange:i}=e,o=l.value;if(l.value=b(o+1),(a==null?void 0:a.event)!==!1&&p(i,l.value),await $(),o===t.value-1&&n){f(0).setTranslate(c.value),u.value=t.value*-s.value;return}o!==t.value-1&&(u.value=l.value*-s.value)},L=async a=>{if(t.value<=1)return;z();const{loop:n,onChange:i}=e,o=l.value;if(l.value=b(o-1),(a==null?void 0:a.event)!==!1&&p(i,l.value),await $(),o===0&&n){f(t.value-1).setTranslate(-c.value),u.value=s.value;return}o!==0&&(u.value=l.value*-s.value)},ne=(a,n)=>{if(t.value<=1||a===l.value)return;a=a<0?0:a,a=a>=t.value?t.value:a;const i=a>l.value?N:L,o=Math.abs(a-l.value);Array.from({length:o}).forEach((ue,T)=>{i({event:T===o-1?n==null?void 0:n.event:!1})})};return M({size:s,vertical:P}),p(R,null),W(()=>t.value,async()=>{await B(),z(),m()}),A&&W(()=>A.show.value,async a=>{a?(await B(),m()):h()}),me(m),he(h),Te(m),{n:Ne,classes:Ee,length:t,index:l,swipeEl:v,trackSize:c,trackTranslate:u,lockDuration:r,handleTouchstart:ae,handleTouchmove:te,handleTouchend:le,next:N,prev:L,to:ne,resize:m,toNumber:E}}});const Pe=["onClick"];function Ae(e,v,s,P,c,u){return w(),g("div",{class:y(e.n()),ref:"swipeEl"},[ye("div",{class:y(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:q({width:e.vertical?void 0:`${e.trackSize}px`,height:e.vertical?`${e.trackSize}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.trackTranslate}px)`,transitionDuration:e.lockDuration?"0ms":`${e.toNumber(e.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...r)=>e.handleTouchstart&&e.handleTouchstart(...r)),onTouchmove:v[1]||(v[1]=(...r)=>e.handleTouchmove&&e.handleTouchmove(...r)),onTouchend:v[2]||(v[2]=(...r)=>e.handleTouchend&&e.handleTouchend(...r))},[X(e.$slots,"default")],38),X(e.$slots,"indicator",{index:e.index,length:e.length},()=>[e.indicator&&e.length?(w(),g("div",{key:0,class:y(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(w(!0),g(Se,null,ke(e.length,(r,l)=>(w(),g("div",{class:y(e.classes(e.n("indicator"),[e.index===l,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:q({background:e.indicatorColor}),key:r,onClick:S=>e.to(l)},null,14,Pe))),128))],2)):Ie("",!0)])],2)}const De=ge(Be,[["render",Ae]]);ve(De);export{De as S,$e as p};
