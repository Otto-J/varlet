import{a as e}from"./vue-router-547718df.js";function p(a,u){if(a>u)return"horizontal";if(u>a)return"vertical"}function q(){const a=e(0),u=e(0),c=e(0),n=e(0),v=e(0),o=e(0),s=e(0),r=e(0),h=e(0),m=e(0),i=e(),f=e(!1),T=e(0),d=e(0),Y=()=>{a.value=0,u.value=0,c.value=0,n.value=0,v.value=0,o.value=0,s.value=0,r.value=0,h.value=0,m.value=0,i.value=void 0,f.value=!1,T.value=0,d.value=0};return{startX:a,startY:u,deltaX:c,deltaY:n,offsetX:v,offsetY:o,moveX:h,moveY:m,direction:i,touching:f,startTime:T,distance:d,resetTouch:Y,startTouch:X=>{Y();const{clientX:t,clientY:l}=X.touches[0];a.value=t,u.value=l,s.value=t,r.value=l,f.value=!0,T.value=performance.now()},moveTouch:X=>{const{clientX:t,clientY:l}=X.touches[0];c.value=Math.max(t,0)-a.value,n.value=l-u.value,v.value=Math.abs(c.value),o.value=Math.abs(n.value),d.value=Math.sqrt(v.value**2+o.value**2),h.value=t-s.value,m.value=l-r.value,i.value||(i.value=p(v.value,o.value)),s.value=t,r.value=l},endTouch:()=>{f.value=!1}}}export{q as u};
