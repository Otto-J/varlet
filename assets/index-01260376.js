import{S as t}from"./index-c5c76708.js";import{S}from"./index-b6d0c10d.js";import{d as g}from"./index-dd768cde.js";import{r as U,aa as y,aD as x,f as w,h as z,q as o,S as d,ap as e,F as C,P as n,Q as s,aE as m,M as v}from"./vue-router-3467edf1.js";import{u as _,c as k,a as V,_ as B,b as N}from"./index-3e5cce21.js";import"./provide-d4683ddf.js";import"./components-105afbd7.js";import"./useChildren-6152c626.js";import"./index-6c867e4a.js";import"./index-614c1e59.js";import"./elements-daad42ba.js";import"./shared-72da4837.js";import"./logger-525ef361.js";/* empty css               */const L={basicUsage:"基本使用",stepSize:"指定步长",dualThumb:"双滑块",range:"选择范围",disable:"禁用",readonly:"只读",sliderSize:"不同大小",customStyle:"自定义样式",showLabel:"显示标签",customBtn:"自定义按钮",validateValue:"值的校验",vertical:"垂直方向"},D={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual thumb",disable:"Disable",readonly:"Readonly",range:"Range",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value",vertical:"Vertical"},{add:b,use:T,pack:i,packs:W,merge:X}=_(),c=r=>{k(r),T(r)};V("zh-CN",B);V("en-US",N);b("zh-CN",L);b("en-US",D);const E={class:"slider-example__block"},F={style:{height:"300px"}},M={style:{height:"300px"}},Y={__name:"index",setup(r){const a=U({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64],value11:0,value12:50,value13:[7,64]});function f(p){console.log(p)}return y(c),x(g),(p,u)=>(w(),z(C,null,[o(e(m),null,{default:d(()=>[n(s(e(i).basicUsage),1)]),_:1}),o(e(t),{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=l=>a.value=l)},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).stepSize),1)]),_:1}),o(e(t),{modelValue:a.value2,"onUpdate:modelValue":u[1]||(u[1]=l=>a.value2=l),step:"10"},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).dualThumb),1)]),_:1}),o(e(t),{modelValue:a.value1,"onUpdate:modelValue":u[2]||(u[2]=l=>a.value1=l),range:"",onChange:f,"label-visible":"always"},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).range),1)]),_:1}),o(e(t),{modelValue:a.value11,"onUpdate:modelValue":u[3]||(u[3]=l=>a.value11=l),max:"210",min:"-50","label-visible":"always"},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).disable),1)]),_:1}),o(e(t),{modelValue:a.value3,"onUpdate:modelValue":u[4]||(u[4]=l=>a.value3=l),disabled:""},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).readonly),1)]),_:1}),o(e(t),{modelValue:a.value3,"onUpdate:modelValue":u[5]||(u[5]=l=>a.value3=l),readonly:""},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).sliderSize),1)]),_:1}),o(e(t),{modelValue:a.value10,"onUpdate:modelValue":u[6]||(u[6]=l=>a.value10=l),"track-height":"1.5vw",range:""},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).customStyle),1)]),_:1}),o(e(t),{modelValue:a.value4,"onUpdate:modelValue":u[7]||(u[7]=l=>a.value4=l),"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).customBtn),1)]),_:1}),o(e(t),{modelValue:a.value9,"onUpdate:modelValue":u[8]||(u[8]=l=>a.value9=l),range:"","active-color":"#52af77"},{button:d(({currentValue:l})=>[v("div",E,s(l),1)]),_:1},8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).showLabel),1)]),_:1}),o(e(t),{modelValue:a.value5,"onUpdate:modelValue":u[9]||(u[9]=l=>a.value5=l),"label-visible":"never"},null,8,["modelValue"]),o(e(t),{modelValue:a.value6,"onUpdate:modelValue":u[10]||(u[10]=l=>a.value6=l)},null,8,["modelValue"]),o(e(t),{modelValue:a.value7,"onUpdate:modelValue":u[11]||(u[11]=l=>a.value7=l),"label-visible":"always"},null,8,["modelValue"]),o(e(m),null,{default:d(()=>[n(s(e(i).validateValue),1)]),_:1}),o(e(t),{modelValue:a.value8,"onUpdate:modelValue":u[12]||(u[12]=l=>a.value8=l),rules:[l=>l>35||"error message"]},null,8,["modelValue","rules"]),o(e(m),null,{default:d(()=>[n(s(e(i).vertical),1)]),_:1}),o(e(S),{justify:"space-around"},{default:d(()=>[v("div",F,[o(e(t),{modelValue:a.value12,"onUpdate:modelValue":u[13]||(u[13]=l=>a.value12=l),direction:"vertical"},null,8,["modelValue"])]),v("div",M,[o(e(t),{modelValue:a.value13,"onUpdate:modelValue":u[14]||(u[14]=l=>a.value13=l),range:"","label-visible":"always",direction:"vertical"},null,8,["modelValue"])])]),_:1})],64))}};export{Y as default};
