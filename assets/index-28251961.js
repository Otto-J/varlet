import{d as Q,u as U,c as Z,a as _,w as tt}from"./components-b6d07272.js";import{t as g}from"./elements-f77c96df.js";import{d as et,r as f,b0 as nt,W as ot,F as at,aA as lt,ar as st,ah as $,aB as C,_ as it,e as rt,f as ut,m as dt,s as ct,aq as ft,as as ht}from"./index-176acade.js";const mt={direction:{type:String,default:"xy"},attraction:String,disabled:Boolean,boundary:{type:Object,default:()=>({top:0,bottom:0,left:0,right:0})},zIndex:{type:[Number,String],default:90},teleport:{type:[String,Object,Boolean],default:"body"},onClick:Q()},{name:gt,n:vt,classes:bt}=Z("drag"),pt=et({name:gt,inheritAttrs:!1,props:mt,setup(t,{attrs:a}){const v=f(null),r=f(0),u=f(0),d=f(!1),o=f(!1),{touching:S,dragging:D,moveX:W,moveY:z,startTouch:R,moveTouch:A,endTouch:H,resetTouch:N}=nt(),{disabled:P}=U(),l=ot({top:0,bottom:0,left:0,right:0});at(()=>t.boundary,Y),lt(p),st(()=>{Y(),p()});function I(e){t.disabled||(R(e),k())}async function O(e){!S.value||t.disabled||(A(e),e.preventDefault(),o.value=!1,d.value=!0,t.direction.includes("x")&&(r.value+=W.value),t.direction.includes("y")&&(u.value+=z.value),X())}function j(){t.disabled||(H(),o.value=!0,L())}function x(e){D.value||_(t.onClick,e)}function k(){const{left:e,top:n}=b();r.value=e,u.value=n}function b(){const e=$(v.value),n=$(window),i=e.top-n.top,s=n.bottom-e.bottom,c=e.left-n.left,T=n.right-e.right,{width:h,height:m}=e,{width:y,height:w}=n;return{top:i,bottom:s,left:c,right:T,width:h,height:m,halfWidth:h/2,halfHeight:m/2,windowWidth:y,windowHeight:w}}function B(){const e=b(),n=l.left,i=e.windowWidth-l.right-e.width,s=l.top,c=e.windowHeight-l.bottom-e.height;return{minX:n,minY:s,maxX:n<i?i:n,maxY:s<c?c:s}}function L(){if(t.attraction==null)return;const{halfWidth:e,halfHeight:n,top:i,bottom:s,left:c,right:T}=b(),{minX:h,minY:m,maxX:y,maxY:w}=B(),M=c+e-l.left,V=T+e-l.right,E=i+n-l.top,G=s+n-l.bottom,J=M<=V,K=E<=G;t.attraction.includes("x")&&(r.value=J?h:y),t.attraction.includes("y")&&(u.value=K?m:w)}function X(){const{minX:e,minY:n,maxX:i,maxY:s}=B();r.value=C(r.value,e,i),u.value=C(u.value,n,s)}function Y(){const{top:e=0,bottom:n=0,left:i=0,right:s=0}=t.boundary;l.top=g(e),l.bottom=g(n),l.left=g(i),l.right=g(s)}function q(){const e=a.style??{};return{...a,style:{...e,top:d.value?0:e.top,left:d.value?0:e.left,right:d.value?"auto":e.right,bottom:d.value?"auto":e.bottom,transform:d.value?`translate(${r.value}px, ${u.value}px)`:e.transform}}}function p(){d.value&&(k(),X())}function F(){N(),o.value=!1,d.value=!1,r.value=0,u.value=0}return{drag:v,x:r,y:u,enableTransition:o,dragging:D,teleportDisabled:P,n:vt,classes:bt,getAttrs:q,handleTouchstart:I,handleTouchmove:O,handleTouchend:j,handleClick:x,resize:p,reset:F}}});function Tt(t,a,v,r,u,d){return rt(),ut(ht,{to:t.teleport===!1?void 0:t.teleport,disabled:t.teleportDisabled||t.teleport===!1},[dt("div",ft({ref:"drag",class:t.classes(t.n(),t.n("$--box"),[t.enableTransition,t.n("--transition")]),style:{"z-index":t.zIndex},onTouchstart:a[0]||(a[0]=(...o)=>t.handleTouchstart&&t.handleTouchstart(...o)),onTouchmove:a[1]||(a[1]=(...o)=>t.handleTouchmove&&t.handleTouchmove(...o)),onTouchend:a[2]||(a[2]=(...o)=>t.handleTouchend&&t.handleTouchend(...o)),onTouchcancel:a[3]||(a[3]=(...o)=>t.handleTouchend&&t.handleTouchend(...o)),onClick:a[4]||(a[4]=(...o)=>t.handleClick&&t.handleClick(...o))},t.getAttrs()),[ct(t.$slots,"default")],16)],8,["to","disabled"])}const yt=it(pt,[["render",Tt]]);tt(yt);export{yt as D};
