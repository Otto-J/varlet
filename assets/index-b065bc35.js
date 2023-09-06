import{u as ie}from"./provide-24c76a97.js";import{d as ve,a as p,c as ce,w as fe}from"./components-f9e8bc3d.js";import{d as de,r as d,B as X,b0 as me,F as q,a6 as he,aG as Te,az as pe,a1 as N,a9 as we,aA as ge,j as B,_ as ye,e as w,l as g,m as Se,s as M,t as y,v as R,M as ke,N as Ie,q as be}from"./index-4ae51709.js";import{a as $e}from"./provide-c62a06f9.js";const ze={loop:{type:Boolean,default:!0},autoplay:[String,Number],duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:String,vertical:Boolean,touchable:{type:Boolean,default:!0},onChange:ve()},Ce=250,Ee=20,{n:Ne,classes:Be}=ce("swipe"),Pe=de({name:"VarSwipe",props:ze,setup(e){const v=d(null),r=d(0),P=X(()=>e.vertical),c=d(0),u=d(0),s=d(!1),l=d(0),{swipeItems:S,bindSwipeItems:V,length:t}=ie(),{popup:A,bindPopup:j}=$e(),{deltaX:G,deltaY:H,moveX:O,moveY:U,offsetX:J,offsetY:K,touching:D,direction:Q,startTime:Z,startTouch:_,moveTouch:x,endTouch:ee}=me(),Y=X(()=>Q.value===(e.vertical?"vertical":"horizontal"));let F=!1,k=-1;const f=a=>S.find(({index:n})=>n.value===a),ae=()=>{e.loop&&(u.value>=0&&f(t.value-1).setTranslate(-c.value),u.value<=-(c.value-r.value)&&f(0).setTranslate(c.value),u.value>-(c.value-r.value)&&u.value<0&&(f(t.value-1).setTranslate(0),f(0).setTranslate(0)))},I=a=>{const n=we(a)?a:Math.floor((u.value-r.value/2)/-r.value),{loop:o}=e;return n<=-1?o?-1:0:n>=t.value?o?t.value:t.value-1:n},te=a=>{const{loop:n}=e;return a===-1?n?t.value-1:0:a===t.value?n?0:t.value-1:a},b=a=>e.loop?a<0?t.value+a:a>=t.value?a-t.value:a:ge(a,0,t.value-1),$=async()=>{const a=u.value>=r.value,n=u.value<=-c.value,o=0,i=-(c.value-r.value);s.value=!0,(a||n)&&(s.value=!0,u.value=n?o:i,f(0).setTranslate(0),f(t.value-1).setTranslate(0)),await B(),s.value=!1},z=()=>{F||(l.value=b(N(e.initialIndex)),F=!0)},C=()=>{const{autoplay:a}=e;!a||t.value<=1||(h(),k=window.setTimeout(()=>{E(),C()},N(a)))},h=()=>{k&&clearTimeout(k)},L=a=>{u.value=a,ae()},le=async a=>{t.value<=1||!e.touchable||(_(a),h(),await $(),s.value=!0)},ne=a=>{const{touchable:n,vertical:o}=e;!D.value||!n||(x(a),Y.value&&(a.preventDefault(),L(u.value+(o?U.value:O.value))))},ue=()=>{if(!D.value||(ee(),!Y.value))return;const{vertical:a,onChange:n}=e,o=a?H.value<0:G.value<0,i=a?K.value:J.value,T=performance.now()-Z.value<=Ce&&i>=Ee?I(o?l.value+1:l.value-1):I();s.value=!1,L(T*-r.value);const oe=l.value;l.value=te(T),C(),oe!==l.value&&p(n,l.value)},m=()=>{v.value&&(s.value=!0,r.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,c.value=r.value*t.value,u.value=l.value*-r.value,S.forEach(a=>{a.setTranslate(0)}),C(),setTimeout(()=>{s.value=!1}))},E=async a=>{if(t.value<=1)return;z();const{loop:n,onChange:o}=e,i=l.value;if(l.value=b(i+1),(a==null?void 0:a.event)!==!1&&p(o,l.value),await $(),i===t.value-1&&n){f(0).setTranslate(c.value),u.value=t.value*-r.value;return}i!==t.value-1&&(u.value=l.value*-r.value)},W=async a=>{if(t.value<=1)return;z();const{loop:n,onChange:o}=e,i=l.value;if(l.value=b(i-1),(a==null?void 0:a.event)!==!1&&p(o,l.value),await $(),i===0&&n){f(t.value-1).setTranslate(-c.value),u.value=r.value;return}i!==0&&(u.value=l.value*-r.value)},re=(a,n)=>{if(t.value<=1||a===l.value)return;a=a<0?0:a,a=a>=t.value?t.value:a;const o=a>l.value?E:W,i=Math.abs(a-l.value);Array.from({length:i}).forEach((se,T)=>{o({event:T===i-1?n==null?void 0:n.event:!1})})};return V({size:r,vertical:P}),p(j,null),q(()=>t.value,async()=>{await B(),z(),m()}),A&&q(()=>A.show.value,async a=>{a?(await B(),m()):h()}),he(m),Te(h),pe(m),{n:Ne,classes:Be,length:t,index:l,swipeEl:v,trackSize:c,trackTranslate:u,lockDuration:s,handleTouchstart:le,handleTouchmove:ne,handleTouchend:ue,next:E,prev:W,to:re,resize:m,toNumber:N}}});const Ae=["onClick"];function De(e,v,r,P,c,u){return w(),g("div",{class:y(e.n()),ref:"swipeEl"},[Se("div",{class:y(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:R({width:e.vertical?void 0:`${e.trackSize}px`,height:e.vertical?`${e.trackSize}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.trackTranslate}px)`,transitionDuration:e.lockDuration?"0ms":`${e.toNumber(e.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...s)=>e.handleTouchstart&&e.handleTouchstart(...s)),onTouchmove:v[1]||(v[1]=(...s)=>e.handleTouchmove&&e.handleTouchmove(...s)),onTouchend:v[2]||(v[2]=(...s)=>e.handleTouchend&&e.handleTouchend(...s))},[M(e.$slots,"default")],38),M(e.$slots,"indicator",{index:e.index,length:e.length,prev:e.prev,next:e.next,to:e.to},()=>[e.indicator&&e.length?(w(),g("div",{key:0,class:y(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(w(!0),g(ke,null,Ie(e.length,(s,l)=>(w(),g("div",{class:y(e.classes(e.n("indicator"),[e.index===l,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:R({background:e.indicatorColor}),key:s,onClick:S=>e.to(l)},null,14,Ae))),128))],2)):be("",!0)])],2)}const Ye=ye(Pe,[["render",De]]);fe(Ye);export{Ye as S,ze as p};
