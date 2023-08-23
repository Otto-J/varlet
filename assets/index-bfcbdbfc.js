import{p as fe,S as we}from"./index-5562fa0d.js";import{S as ge}from"./index-40ef7b08.js";import{I as Te}from"./index-5ae50cc0.js";import{p as Ce,P as Ie}from"./index-10ae05c8.js";import{d as Se,a as d,b as H,Z as A,w as ye,aH as W,_ as Pe,p as k,f as S,i as b,S as N,q as Oe,m as De,h as q,F as Re,ah as ke,N as f,M as E,R as Ne,O as V,Q as Z,j,aq as $e,r as ze,n as Le,W as Ae,av as be}from"./vue-router-547718df.js";import{d as G,p as Q,i as Ee,c as Ve,a as y,m as Be,w as x}from"./logger-9a144f5d.js";import{u as Ye}from"./useTouch-4ef72608.js";const Fe={show:{type:Boolean,default:!1},imagePreventDefault:{type:Boolean,default:!1},images:{type:Array,default:()=>[]},current:{type:String},initialIndex:{type:[String,Number],default:0},zoom:{type:[String,Number],default:2},closeable:{type:Boolean,default:!1},"onUpdate:show":G(),onLongPress:G(),...Q(fe,["loop","indicator","onChange"]),...Q(Ce,["lockScroll","teleport","onOpen","onClose","onOpened","onClosed","onRouteChange"])},{n:J,classes:Me}=Ve("image-preview"),B=12,K=200,Ue=350,_=200,Xe=500,He=Se({name:"VarImagePreview",components:{VarSwipe:we,VarSwipeItem:ge,VarPopup:Ie,VarIcon:Te},inheritAttrs:!1,props:Fe,setup(e){const r=d(!1),a=d(1),u=d(0),h=d(0),O=d(void 0),T=d(void 0),C=d(!0),w=d(null),{moveX:z,moveY:c,distance:m,startTime:i,startTouch:ee,moveTouch:oe,endTouch:Y}=Ye(),s={start:null,prev:null};let F=null,I=null,D=!1;const ne=H(()=>{const{images:o,current:n,initialIndex:t}=e;if(t!=null)return A(t);const l=o.findIndex(p=>p===n);return Math.max(l,0)}),te=H(()=>{const{imagePreventDefault:o,show:n}=e;return n&&o}),ae=()=>{a.value=A(e.zoom),C.value=!1,s.prev=null,window.setTimeout(()=>{O.value="linear",T.value="0s"},_)},M=()=>{a.value=1,u.value=0,h.value=0,C.value=!0,s.prev=null,O.value=void 0,T.value=void 0},se=o=>s.prev?m.value<=B&&performance.now()-i.value<=K&&s.prev===o:!1,re=o=>!o||!s.start||!s.prev?!1:m.value<=B&&performance.now()-i.value<Ue&&(o===s.start||o.parentNode===s.start),ie=()=>{Y(),window.clearTimeout(I),D=!1,s.start=null},le=o=>{if(window.clearTimeout(I),Y(),D){D=!1;return}const n=re(o.target);F=window.setTimeout(()=>{n&&X(),s.start=null},K)},ue=(o,n)=>{window.clearTimeout(F),window.clearTimeout(I);const t=o.currentTarget;if(s.start=t,I=window.setTimeout(()=>{D=!0,y(e.onLongPress,n)},Xe),se(t)){a.value>1?M():ae();return}ee(o),s.prev=t},U=o=>{const{offsetWidth:n,offsetHeight:t}=o,{naturalWidth:l,naturalHeight:p}=o.querySelector(`.${J("image")}`);return{width:n,height:t,imageRadio:p/l,rootRadio:t/n,zoom:A(e.zoom)}},ce=o=>{const{zoom:n,imageRadio:t,rootRadio:l,width:p,height:R}=U(o);if(!t)return 0;const L=t>l?R/t:p;return Math.max(0,(n*L-p)/2)/n},me=o=>{const{zoom:n,imageRadio:t,rootRadio:l,width:p,height:R}=U(o);if(!t)return 0;const L=t>l?R:p*t;return Math.max(0,(n*L-R)/2)/n},pe=o=>{if(!s.prev)return;oe(o);const n=o.currentTarget;if(m.value>B&&window.clearTimeout(I),a.value>1){const t=ce(n),l=me(n);u.value=W(u.value+z.value,-t,t),h.value=W(h.value+c.value,-l,l)}s.prev=n},X=()=>{if(a.value>1){M(),setTimeout(()=>y(e["onUpdate:show"],!1),_);return}y(e["onUpdate:show"],!1)},de=o=>{var n;(n=w.value)==null||n.prev(o)},ve=o=>{var n;(n=w.value)==null||n.next(o)},he=(o,n)=>{var t;(t=w.value)==null||t.to(o,n)};return Ee(()=>document,"contextmenu",o=>{e.imagePreventDefault&&e.show&&o.preventDefault()}),ye(()=>e.show,o=>{r.value=o},{immediate:!0}),{n:J,classes:Me,swipeRef:w,isPreventDefault:te,initialIndex:ne,popupShow:r,scale:a,translateX:u,translateY:h,canSwipe:C,transitionTimingFunction:O,transitionDuration:T,handleTouchstart:ue,handleTouchmove:pe,handleTouchend:le,handleTouchcancel:ie,close:X,prev:de,next:ve,to:he}}});const We=["onTouchstart"],qe=["src","alt"];function Ze(e,r,a,u,h,O){const T=k("var-swipe-item"),C=k("var-swipe"),w=k("var-icon"),z=k("var-popup");return S(),b(z,{class:f(e.n("popup")),"var-image-preview-cover":"",transition:e.n("$-fade"),show:e.popupShow,overlay:!1,"close-on-click-overlay":!1,"lock-scroll":e.lockScroll,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange},{default:N(()=>[Oe(C,De({ref:"swipeRef",class:e.n("swipe"),"var-image-preview-cover":"",touchable:e.canSwipe,indicator:e.indicator&&e.images.length>1,"initial-index":e.initialIndex,loop:e.loop,onChange:e.onChange},e.$attrs),{default:N(()=>[(S(!0),q(Re,null,ke(e.images,(c,m)=>(S(),b(T,{class:f(e.n("swipe-item")),"var-image-preview-cover":"",key:c},{default:N(()=>[E("div",{class:f(e.n("zoom-container")),style:Ne({transform:`scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,transitionTimingFunction:e.transitionTimingFunction,transitionDuration:e.transitionDuration}),onTouchstart:i=>e.handleTouchstart(i,m),onTouchmove:r[0]||(r[0]=(...i)=>e.handleTouchmove&&e.handleTouchmove(...i)),onTouchend:r[1]||(r[1]=(...i)=>e.handleTouchend&&e.handleTouchend(...i)),onTouchcancel:r[2]||(r[2]=(...i)=>e.handleTouchcancel&&e.handleTouchcancel(...i))},[E("img",{class:f(e.classes(e.n("image"),[e.isPreventDefault,e.n("--prevent")])),src:c,alt:c},null,10,qe)],46,We)]),_:2},1032,["class"]))),128))]),indicator:N(({index:c,length:m})=>[V(e.$slots,"indicator",{index:c,length:m},()=>[e.indicator&&e.images.length>1?(S(),q("div",{key:0,class:f(e.n("indicators"))},Z(c+1)+" / "+Z(m),3)):j("",!0)])]),_:3},16,["class","touchable","indicator","initial-index","loop","onChange"]),V(e.$slots,"close-icon",{},()=>[e.closeable?(S(),b(w,{key:0,class:f(e.n("close-icon")),name:"close-circle","var-image-preview-cover":"",onClick:e.close},null,8,["class","onClick"])):j("",!0)]),E("div",{class:f(e.n("extra"))},[V(e.$slots,"extra")],2)]),_:3},8,["class","transition","show","lock-scroll","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const $=Pe(He,[["render",Ze]]);let v,P={};function je(e={}){return Ae(e)?{...P,images:[e]}:be(e)?{...P,images:e}:{...P,...e}}function g(e){if(!$e())return;g.close();const r=je(e),a=ze(r);a.teleport="body",v=a;const{unmountInstance:u}=Be($,a,{onClose:()=>y(a.onClose),onClosed:()=>{y(a.onClosed),u(),v===a&&(v=null)},onRouteChange:()=>{u(),v===a&&(v=null)},"onUpdate:show":h=>{a.show=h}});a.show=!0}g.close=()=>{if(v!=null){const e=v;v=null,Le().then(()=>{e.show=!1})}};g.setDefaultOptions=e=>{P=e};g.resetDefaultOptions=()=>{P={}};g.Component=$;x($);x($,g);export{g as I};
