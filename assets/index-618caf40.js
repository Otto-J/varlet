import{d as H,c as I,a as B,w as C}from"./components-b6d07272.js";import{t as P,g as R}from"./elements-f77c96df.js";import{d as j,r as o,B as v,F as A,ar as O,aH as U,aA as V,a7 as q,a4 as D,aI as G,j as J,ah as M,_ as K,e as Q,l as X,m as Y,s as Z,t as g,v as F}from"./index-176acade.js";const _={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:Boolean,disabled:Boolean,onScroll:H()},{name:ee,n:oe,classes:se}=I("sticky"),ae=j({name:ee,props:_,setup(e){const n=o(null),l=o(null),a=o(!1),r=o("0px"),f=o("0px"),m=o("auto"),h=o("auto"),b=o("auto"),x=o("auto"),T=v(()=>!e.disabled&&e.cssMode),$=v(()=>!e.disabled&&!e.cssMode&&a.value),i=v(()=>P(e.offsetTop));let s;A(()=>e.disabled,u),O(W),U(k),V(u),q(()=>window,"scroll",d);function S(){const{cssMode:t,disabled:z}=e;if(z)return;let c=0;if(s!==window){const{top:N}=M(s);c=N}const w=l.value,p=n.value,{top:L,left:E}=M(p),y=L-c;return y<=i.value?(t||(m.value=`${p.offsetWidth}px`,h.value=`${p.offsetHeight}px`,r.value=`${c+i.value}px`,f.value=`${E}px`,b.value=`${w.offsetWidth}px`,x.value=`${w.offsetHeight}px`,a.value=!0),{offsetTop:i.value,isFixed:!0}):(a.value=!1,{offsetTop:y,isFixed:!1})}function d(){if(!s)return;const t=S();t&&B(e.onScroll,t.offsetTop,t.isFixed)}async function u(){a.value=!1,await G(),S()}async function W(){await J(),s=R(n.value),s!==window&&s.addEventListener("scroll",d),d()}function k(){s!==window&&s.removeEventListener("scroll",d)}return{stickyEl:n,wrapperEl:l,isFixed:a,offsetTop:i,fixedTop:r,fixedLeft:f,fixedWidth:m,fixedHeight:h,fixedWrapperWidth:b,fixedWrapperHeight:x,enableCSSMode:T,enableFixedMode:$,n:oe,classes:se,resize:u,toNumber:D}}});function te(e,n,l,a,r,f){return Q(),X("div",{class:g(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:F({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[Y("div",{class:g(e.n("wrapper")),ref:"wrapperEl",style:F({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[Z(e.$slots,"default")],6)],6)}const ne=K(ae,[["render",te]]);C(ne);export{ne as S,_ as p};
