import{I as C}from"./index-a62a9e1d.js";import{v as u}from"./index-a9719fda.js";import{d as v,c as b,a as k,w as S}from"./components-1514d07f.js";import{a}from"./elements-e4756970.js";import{d as g,B as y,_ as $,b as O,K as h,O as B,e as r,l as n,s as o,t as s,p as N,q as i,m as V,Q as d,v as I}from"./index-c1c53a77.js";const w={title:[Number,String],icon:String,description:String,border:Boolean,borderOffset:[Number,String],iconClass:String,titleClass:String,descriptionClass:String,extraClass:String,ripple:Boolean,onClick:v()},{n:z,classes:D}=b("cell"),R=g({name:"VarCell",components:{VarIcon:C},directives:{Ripple:u},props:w,setup(e){const l=y(()=>e.borderOffset==null?{}:{"--cell-border-left":a(e.borderOffset),"--cell-border-right":a(e.borderOffset)});return{n:z,classes:D,toSizeUnit:a,borderOffsetStyles:l,handleClick:t=>{k(e.onClick,t)}}}});function q(e,l,c,t,K,L){const p=O("var-icon"),m=h("ripple");return B((r(),n("div",{class:s(e.classes(e.n(),[e.border,e.n("--border")],[e.onClick,e.n("--cursor")])),style:I(e.borderOffsetStyles),onClick:l[0]||(l[0]=(...f)=>e.handleClick&&e.handleClick(...f))},[o(e.$slots,"icon",{},()=>[e.icon?(r(),n("div",{key:0,class:s(e.classes(e.n("icon"),e.iconClass))},[N(p,{name:e.icon},null,8,["name"])],2)):i("",!0)]),V("div",{class:s(e.n("content"))},[o(e.$slots,"default",{},()=>[e.title?(r(),n("div",{key:0,class:s(e.classes(e.n("title"),e.titleClass))},d(e.title),3)):i("",!0)]),o(e.$slots,"description",{},()=>[e.description?(r(),n("div",{key:0,class:s(e.classes(e.n("description"),e.descriptionClass))},d(e.description),3)):i("",!0)])],2),e.$slots.extra?(r(),n("div",{key:0,class:s(e.classes(e.n("extra"),e.extraClass))},[o(e.$slots,"extra")],2)):i("",!0)],6)),[[m,{disabled:!e.ripple}]])}const E=$(R,[["render",q]]);S(E);export{E as C};
