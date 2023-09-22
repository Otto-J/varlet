import{_ as p,b as c,e as o,m as r,p as s,q as n,w as l,Q as a}from"./index-95102025.js";const d={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"快速开始",-1),_={class:"card"},u={id:"介绍"},j=s("p",null,"这里为您介绍常见开发模式下接入组件库的最基本方式。",-1),m={class:"card"},v={id:"安装"},g=s("h4",null,"CDN",-1),y=s("p",null,[s("code",null,"varlet.js"),a(" 包含组件库的所有样式和逻辑, 引入即可。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>按钮</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),k=s("h4",null,"Webpack/Vite",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 通过 npm、yarn 或 pnpm 安装"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),V={class:"card"},x={id:"在线编辑组件"},A=s("p",null,[a("我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。 您可以点击网页右上角的 "),s("code",null,"{...}"),a(" 图标或是 "),s("a",{href:"https://varlet.gitee.io/varlet-ui-playground"},"这里前往"),a("。")],-1),N={class:"card"},C={id:"文件路径注意"},$=s("p",null,[a("在 "),s("code",null,"@varlet/ui@2.7.0"),a(" 及其之后的版本，我们推荐使用如下省略后缀名的文件引入方式，以兼容 "),s("code",null,"js"),a(" 和 "),s("code",null,"mjs")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`
`)])],-1);function q(z,D,E,Q,S,T){const t=c("router-link"),e=c("var-site-code-example");return o(),r("div",h,[i,s("div",_,[s("h3",u,[n(t,{to:"#介绍"},{default:l(()=>[a("#")]),_:1}),a("介绍")]),j]),s("div",m,[s("h3",v,[n(t,{to:"#安装"},{default:l(()=>[a("#")]),_:1}),a("安装")]),g,y,n(e,{"playground-ignore":""},{default:l(()=>[f]),_:1}),k,n(e,{"playground-ignore":""},{default:l(()=>[w]),_:1}),n(e,{"playground-ignore":""},{default:l(()=>[b]),_:1})]),s("div",V,[s("h3",x,[n(t,{to:"#在线编辑组件"},{default:l(()=>[a("#")]),_:1}),a("在线编辑组件")]),A]),s("div",N,[s("h3",C,[n(t,{to:"#文件路径注意"},{default:l(()=>[a("#")]),_:1}),a("文件路径注意")]),$,n(e,{"playground-ignore":""},{default:l(()=>[B]),_:1})])])}const F=p(d,[["render",q]]);export{F as default};
