import{d as u,a as l,w as p,aG as f,Z as o,n as c,_ as g,f as d,i as y,N as C,R as S,aH as z}from"./vue-router-6d66666a.js";import{d as h,c as U}from"./logger-4bf9ea67.js";import{a as N}from"./elements-a6c01043.js";const k={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},animationClass:{type:String},onClick:h()},{n:v,classes:$}=U("icon"),L=u({name:"VarIcon",props:k,setup(e){const n=l(""),a=l(!1);return p(()=>e.name,async(s,i)=>{const{transition:t}=e;if(i==null||o(t)===0){n.value=s;return}a.value=!0,await c(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(t))},{immediate:!0}),{n:v,classes:$,nextName:n,animateInProgress:a,isURL:f,toNumber:o,toSizeUnit:N}}});function R(e,n,a,m,s,i){return d(),y(z(e.isURL(e.name)?"img":"i"),{class:C(e.classes(e.n(),[e.namespace!==e.n(),e.namespace],`${e.namespace}--set`,[e.isURL(e.name),e.n("image"),`${e.namespace}-${e.nextName}`],[e.animateInProgress,e.animationClass==null?e.n("--shrinking"):e.animationClass])),style:S({color:e.color,"transition-duration":`${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}const r=g(L,[["render",R]]);r.install=function(e){e.component(r.name,r)};export{r as I,k as p};
