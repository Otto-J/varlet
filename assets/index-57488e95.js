import{u as ne}from"./provide-7d2d7f74.js";import{v as le,e as j}from"./elements-dde26fa0.js";import{d as oe,c as re,a as I}from"./logger-577c0317.js";import{d as ue,a as T,b as se,w as H,v as ie,Z as A,X as ve,aI as ce,_ as fe,f as k,h as C,M as de,O,N as $,R as U,F as me,ai as he,j as pe}from"./vue-router-60af08e5.js";import{o as Te}from"./onSmartUnmounted-3d5cf283.js";import{o as we}from"./onWindowResize-7ba952ef.js";import{a as ge}from"./provide-c26081c4.js";const Se={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:oe()},ye=250,be=20,{n:Ie,classes:ke}=re("swipe"),Ce=ue({name:"VarSwipe",props:Se,setup(e){const v=T(null),s=T(0),R=se(()=>e.vertical),c=T(0),u=T(0),i=T(!1),l=T(0),{swipeItems:z,bindSwipeItems:Z,length:n}=ne(),{popup:W}=ge();let F=!1,g=!1,N=-1,S,y,V,m,h;const f=a=>z.find(({index:t})=>t.value===a),G=()=>{e.loop&&(u.value>=0&&f(n.value-1).setTranslate(-c.value),u.value<=-(c.value-s.value)&&f(0).setTranslate(c.value),u.value>-(c.value-s.value)&&u.value<0&&(f(n.value-1).setTranslate(0),f(0).setTranslate(0)))},D=a=>{const t=ve(a)?a:Math.floor((u.value-s.value/2)/-s.value),{loop:o}=e;return t<=-1?o?-1:0:t>=n.value?o?n.value:n.value-1:t},J=a=>{const{loop:t}=e;return a===-1?t?n.value-1:0:a===n.value?t?0:n.value-1:a},E=a=>e.loop?a<0?n.value+a:a>=n.value?a-n.value:a:ce(a,0,n.value-1),B=a=>{const t=u.value>=s.value,o=u.value<=-c.value,r=0,d=-(c.value-s.value);i.value=!0,(t||o)&&(i.value=!0,u.value=o?r:d,f(0).setTranslate(0),f(n.value-1).setTranslate(0)),le(()=>{i.value=!1,I(a)})},X=()=>{F||(l.value=E(A(e.initialIndex)),F=!0)},Y=()=>{const{autoplay:a}=e;!a||n.value<=1||(b(),N=window.setTimeout(()=>{M(),Y()},A(a)))},b=()=>{N&&clearTimeout(N)},K=(a,t)=>{if(a>t&&a>10)return"horizontal";if(t>a&&t>10)return"vertical"},Q=a=>{if(n.value<=1||!e.touchable)return;const{clientX:t,clientY:o}=a.touches[0];S=t,y=o,V=performance.now(),g=!0,b(),B(()=>{i.value=!0})},_=a=>{const{touchable:t,vertical:o}=e;if(!g||!t)return;const{clientX:r,clientY:d}=a.touches[0],p=Math.abs(r-S),P=Math.abs(d-y);if(K(p,P)===(o?"vertical":"horizontal")){a.preventDefault();const ae=m!==void 0?r-m:0,te=h!==void 0?d-h:0;m=r,h=d,u.value+=o?te:ae,G()}},x=()=>{if(!g)return;const{vertical:a,onChange:t}=e,o=a?h<y:m<S,r=Math.abs(a?y-h:S-m),p=performance.now()-V<=ye&&r>=be?D(o?l.value+1:l.value-1):D();g=!1,i.value=!1,m=void 0,h=void 0,u.value=p*-s.value;const P=l.value;l.value=J(p),Y(),P!==l.value&&I(t,l.value)},w=()=>{v.value&&(i.value=!0,s.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,c.value=s.value*n.value,u.value=l.value*-s.value,z.forEach(a=>{a.setTranslate(0)}),Y(),setTimeout(()=>{i.value=!1}))},M=a=>{if(n.value<=1)return;X();const{loop:t,onChange:o}=e,r=l.value;l.value=E(r+1),(a==null?void 0:a.event)!==!1&&I(o,l.value),B(()=>{if(r===n.value-1&&t){f(0).setTranslate(c.value),u.value=n.value*-s.value;return}r!==n.value-1&&(u.value=l.value*-s.value)})},q=a=>{if(n.value<=1)return;X();const{loop:t,onChange:o}=e,r=l.value;l.value=E(r-1),(a==null?void 0:a.event)!==!1&&I(o,l.value),B(()=>{if(r===0&&t){f(n.value-1).setTranslate(-c.value),u.value=s.value;return}r!==0&&(u.value=l.value*-s.value)})},ee=(a,t)=>{if(n.value<=1||a===l.value)return;a=a<0?0:a,a=a>=n.value?n.value:a;const o=a>l.value?M:q,r=Math.abs(a-l.value);Array.from({length:r}).forEach((d,p)=>{o({event:p===r-1?t==null?void 0:t.event:!1})})};return Z({size:s,vertical:R}),H(()=>n.value,async()=>{await j(),X(),w()}),W&&H(()=>W.show.value,async a=>{a?(await j(),w()):b()}),ie(w),Te(b),we(w),{n:Ie,classes:ke,length:n,index:l,swipeEl:v,trackSize:c,translate:u,lockDuration:i,handleTouchstart:Q,handleTouchmove:_,handleTouchend:x,next:M,prev:q,to:ee,resize:w,toNumber:A}}});const $e=["onClick"];function ze(e,v,s,R,c,u){return k(),C("div",{class:$(e.n()),ref:"swipeEl"},[de("div",{class:$(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:U({width:e.vertical?void 0:`${e.trackSize}px`,height:e.vertical?`${e.trackSize}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`,transitionDuration:e.lockDuration?"0ms":`${e.toNumber(e.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...i)=>e.handleTouchstart&&e.handleTouchstart(...i)),onTouchmove:v[1]||(v[1]=(...i)=>e.handleTouchmove&&e.handleTouchmove(...i)),onTouchend:v[2]||(v[2]=(...i)=>e.handleTouchend&&e.handleTouchend(...i))},[O(e.$slots,"default")],38),O(e.$slots,"indicator",{index:e.index,length:e.length},()=>[e.indicator&&e.length?(k(),C("div",{key:0,class:$(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(k(!0),C(me,null,he(e.length,(i,l)=>(k(),C("div",{class:$(e.classes(e.n("indicator"),[e.index===l,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:U({background:e.indicatorColor}),key:i,onClick:z=>e.to(l)},null,14,$e))),128))],2)):pe("",!0)])],2)}const L=fe(Ce,[["render",ze]]);L.install=function(e){e.component(L.name,L)};export{L as S,Se as p};
