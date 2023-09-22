import{_ as o,b as c,e as p,m as i,p as a,q as l,w as n,Q as s}from"./index-95102025.js";const h={components:{}},r={class:"varlet-site-doc"},d=a("h1",null,"海拔效果",-1),_={class:"card"},j={id:"介绍"},m=a("p",null,[s("组件库提供了基于 "),a("code",null,"Material"),s(" 规范的阴影海拔效果，用来表现元素的立体感。")],-1),u={class:"card"},v={id:"引入样式"},g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.css'"),s(`
`)])],-1),f={class:"card"},x={id:"基本使用"},b=a("p",null,[s("阴影程度划分为 "),a("code",null,"0-24"),s(" 个等级，等级越高海拔越高。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-example-list"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[16, 16]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-example-item"'),s(`
      `),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},'"`var-elevation--${e - 1}`"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"e in 25"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"e"'),s(`
    >`)]),s(`
      {{ e - 1 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".elevation-example-list"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"8px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".elevation-example-item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"25vw"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"25vw"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1);function k(w,$,N,B,C,V){const t=c("router-link"),e=c("var-site-code-example");return p(),i("div",r,[d,a("div",_,[a("h3",j,[l(t,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),m]),a("div",u,[a("h3",v,[l(t,{to:"#引入样式"},{default:n(()=>[s("#")]),_:1}),s("引入样式")]),l(e,{"playground-ignore":""},{default:n(()=>[g]),_:1})]),a("div",f,[a("h3",x,[l(t,{to:"#基本使用"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),b,l(e,null,{default:n(()=>[y]),_:1})])])}const q=o(h,[["render",k]]);export{q as default};
