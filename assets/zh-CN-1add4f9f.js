import{B as o,O as j}from"./ResponsiveObject-2ea0c933.js";import{_ as d,p as e,f as i,h as m,M as a,q as l,S as n,P as s,aq as p}from"./vue-router-3467edf1.js";import"./index-2f3dffb9.js";import"./components-105afbd7.js";import"./useChildren-6152c626.js";import"./elements-d7e8d9e4.js";import"./shared-72da4837.js";import"./logger-525ef361.js";import"./index-d79128ed.js";const g={components:{BasicExample:o,ObjectExample:j}},u={class:"varlet-site-doc"},b=a("h1",null,"布局",-1),v={class:"card"},f={id:"介绍"},_=a("p",null,[s("组件库提供了 "),a("code",null,"<var-row/>"),s(" 和 "),a("code",null,"<var-col/>"),s(" 两个辅助布局的组件，使您更有效率的进行布局。")],-1),x={class:"card"},y={id:"栅格系统"},w=a("p",null,[a("code",null,"<var-row/>"),s(" 组件把一行平均划分为 24列 栅格( 24份 )，"),a("code",null,"<var-col/>"),s(" 提供 "),a("code",null,"span"),s(" 属性设置这一列所占的份数，"),a("code",null,"offset"),s(" 属性设置这一列偏移的份数。")],-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),C={class:"card"},E={id:"偏移"},B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"16"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("offset: 8 span: 16"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),N={class:"card"},R={id:"对齐"},P=a("p",null,[s("布局组件默认使用 "),a("code",null,"flex"),s(" 布局，通过 "),a("code",null,"<var-row/>"),s("的 "),a("code",null,"justify"),s(" 和 "),a("code",null,"align"),s(" 属性设置主轴和交叉轴的对齐方式。")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"flex-end"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {   
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),V={class:"card"},$={id:"列间距"},q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),O={class:"card"},z={id:"响应式布局"},A=a("h4",null,"基本用法",-1),I={class:"varlet-component-preview"},M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"9"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s("2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"9"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s("3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),T=a("h4",null,"属性对象",-1),D={class:"varlet-component-preview"},F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      1
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      2
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      3
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      4
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-col"),s(` {
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-clip"),s(": content-box "),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),G=a("h2",null,"API",-1),H={class:"card"},J={id:"属性"},K=p("<h4>Row Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>列间距</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>主轴对齐方式, 可选值为 <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>交叉轴对齐方式, 可选值为 <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table><h4>Col Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>span</code></td><td>列占据的栅格数</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>列偏移的栅格数</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>布局方向，可选值为 <code>row</code> <code>column</code></td><td><em>string</em></td><td><code>row</code></td></tr><tr><td><code>justify</code></td><td>主轴排列方式 可选值为 <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>align</code></td><td>交叉轴排列方式 可选值为 <code>stretch</code> <code>center</code> <code>flex-start</code> <code>flex-end</code> <code>baseline</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>md</code></td><td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr></tbody></table>",4),L={class:"card"},Q={id:"事件"},U=p("<h4>Row Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击 Row 时触发</td><td><code>event: Event</code></td></tr></tbody></table><h4>Col Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击 Col 时触发</td><td><code>event: Event</code></td></tr></tbody></table>",4),W={class:"card"},X={id:"插槽"},Y=p("<h4>Row Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row 内容</td><td><code>-</code></td></tr></tbody></table><h4>Col Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col 内容</td><td><code>-</code></td></tr></tbody></table>",4);function Z(ss,as,ls,ns,ts,cs){const t=e("router-link"),c=e("var-site-code-example"),h=e("basic-example"),r=e("object-example");return i(),m("div",u,[b,a("div",v,[a("h3",f,[l(t,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),_]),a("div",x,[a("h3",y,[l(t,{to:"#栅格系统"},{default:n(()=>[s("#")]),_:1}),s("栅格系统")]),w,l(c,null,{default:n(()=>[k]),_:1})]),a("div",C,[a("h3",E,[l(t,{to:"#偏移"},{default:n(()=>[s("#")]),_:1}),s("偏移")]),l(c,null,{default:n(()=>[B]),_:1})]),a("div",N,[a("h3",R,[l(t,{to:"#对齐"},{default:n(()=>[s("#")]),_:1}),s("对齐")]),P,l(c,null,{default:n(()=>[S]),_:1})]),a("div",V,[a("h3",$,[l(t,{to:"#列间距"},{default:n(()=>[s("#")]),_:1}),s("列间距")]),l(c,null,{default:n(()=>[q]),_:1})]),a("div",O,[a("h3",z,[l(t,{to:"#响应式布局"},{default:n(()=>[s("#")]),_:1}),s("响应式布局")]),A,a("div",I,[l(h)]),l(c,null,{default:n(()=>[M]),_:1}),T,a("div",D,[l(r)]),l(c,null,{default:n(()=>[F]),_:1})]),G,a("div",H,[a("h3",J,[l(t,{to:"#属性"},{default:n(()=>[s("#")]),_:1}),s("属性")]),K]),a("div",L,[a("h3",Q,[l(t,{to:"#事件"},{default:n(()=>[s("#")]),_:1}),s("事件")]),U]),a("div",W,[a("h3",X,[l(t,{to:"#插槽"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),Y])])}const gs=d(g,[["render",Z]]);export{gs as default};
