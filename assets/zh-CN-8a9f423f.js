import{_ as p,b as c,e as r,m as h,p as a,q as l,w as n,Q as s}from"./index-95102025.js";const o={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"悬停指令",-1),d={class:"card"},u={id:"介绍"},_=a("p",null,"指针悬停在绑定元素上时进行样式绑定，也可以通过函数获得当前悬停的状态，支持在桌面端或移动端中选择性启用。",-1),m={class:"card"},g={id:"样式绑定"},v=a("p",null,"指针悬停在绑定元素上时进行样式绑定, 离开元素时取消样式绑定。",-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"paper"'),s(`
    `),a("span",{class:"hljs-attr"},"ripple"),s(`
    `),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
    `),a("span",{class:"hljs-attr"},":width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"v-hover"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff', background: 'var(--color-primary)' }"`),s(`
  >`)]),s(`
    HOVER
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".paper"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b={class:"card"},y={id:"函数绑定"},k=a("p",null,"指针悬停和离开时会触发函数，并携带当前的悬停状态。",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" translateY = ref("),a("span",{class:"hljs-string"},"'100%'"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleHover"),s("("),a("span",{class:"hljs-params"},"hovering"),s(") ")]),s(`{
  translateY.value = hovering ? `),a("span",{class:"hljs-string"},"'0'"),s(" : "),a("span",{class:"hljs-string"},"'100%'"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"image-container"'),s(),a("span",{class:"hljs-attr"},"v-hover"),s("="),a("span",{class:"hljs-string"},'"handleHover"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/tree.jpeg"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"image-mask"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},'"{ transform: `translateY(${translateY})` }"'),s(">")]),s("HOVER"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".image-container"),s(` {
  `),a("span",{class:"hljs-attribute"},"position"),s(`: relative;
  `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".image-mask"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
  `),a("span",{class:"hljs-attribute"},"top"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
  `),a("span",{class:"hljs-attribute"},"left"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"transition"),s(": all "),a("span",{class:"hljs-number"},"0.3s"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-primary);
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w={class:"card"},V={id:"针对不同设备选择性启用"},H=a("p",null,[s("考虑到在不同平台的 "),a("code",null,"hover"),s(" 效果的差异性，悬停指令可以只启用于特定的平台。")],-1),E=a("h4",null,"只在桌面端启用",-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(),a("span",{class:"hljs-attr"},"v-hover:desktop"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff' }"`),s('">')]),s("HOVER"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`)])],-1),N=a("h4",null,"只在移动端启用",-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(),a("span",{class:"hljs-attr"},"v-hover:mobile"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff' }"`),s('">')]),s("HOVER"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`)])],-1);function R(Y,B,C,z,q,Q){const t=c("router-link"),e=c("var-site-code-example");return r(),h("div",i,[j,a("div",d,[a("h3",u,[l(t,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),_]),a("div",m,[a("h3",g,[l(t,{to:"#样式绑定"},{default:n(()=>[s("#")]),_:1}),s("样式绑定")]),v,l(e,null,{default:n(()=>[f]),_:1})]),a("div",b,[a("h3",y,[l(t,{to:"#函数绑定"},{default:n(()=>[s("#")]),_:1}),s("函数绑定")]),k,l(e,null,{default:n(()=>[x]),_:1})]),a("div",w,[a("h3",V,[l(t,{to:"#针对不同设备选择性启用"},{default:n(()=>[s("#")]),_:1}),s("针对不同设备选择性启用")]),H,E,l(e,{"playground-ignore":""},{default:n(()=>[$]),_:1}),N,l(e,{"playground-ignore":""},{default:n(()=>[O]),_:1})])])}const A=p(o,[["render",R]]);export{A as default};
