import{d as m,r as t,F as u,ai as p,a1 as o,n as f,_ as c,e as g,f as d,t as C,v as S,aj as h}from"./index-c1c53a77.js";import{d as z,c as U,w as v}from"./components-1514d07f.js";import{a as y}from"./elements-e4756970.js";const k={name:String,size:[Number,String],color:String,namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},animationClass:String,onClick:z()},{n:N,classes:$}=U("icon"),I=m({name:"VarIcon",props:k,setup(e){const n=t(""),a=t(!1);return u(()=>e.name,async(s,i)=>{const{transition:r}=e;if(i==null||o(r)===0){n.value=s;return}a.value=!0,await f(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(r))},{immediate:!0}),{n:N,classes:$,nextName:n,animateInProgress:a,isURL:p,toNumber:o,toSizeUnit:y}}});function L(e,n,a,l,s,i){return g(),d(h(e.isURL(e.name)?"img":"i"),{class:C(e.classes(e.n(),[e.namespace!==e.n(),e.namespace],`${e.namespace}--set`,[e.isURL(e.name),e.n("image"),`${e.namespace}-${e.nextName}`],[e.animateInProgress,e.animationClass==null?e.n("--shrinking"):e.animationClass])),style:S({color:e.color,"transition-duration":`${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}const R=c(I,[["render",L]]);v(R);export{R as I,k as p};
