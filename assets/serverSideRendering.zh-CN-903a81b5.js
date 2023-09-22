import{_ as c,b as o,e as p,m as r,p as s,q as t,w as a,Q as n}from"./index-95102025.js";const u={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"服务端渲染",-1),h={class:"card"},_={id:"介绍"},m=s("p",null,[n("这里为您介绍在 "),s("code",null,"Nuxt"),n(" 中引入 "),s("code",null,"Varlet"),n(" 的基本方式。")],-1),j={class:"card"},v={id:"创建 Nuxt 项目"},f=s("p",null,[s("code",null,"Nuxt.js"),n(" 是一个基于 "),s("code",null,"Vue.js"),n(" 的服务端渲染应用框架，详细教程请移步 "),s("a",{href:"https://nuxt.com"},"Nuxt"),n("。")],-1),g={class:"card"},x={id:"按需引入"},k=s("p",null,[n("通过插件 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" 和 "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" 实现组件自动按需导入。")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 安装插件"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// nuxt.config.ts"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineNuxtConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'nuxt/config'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineNuxtConfig({
  `),s("span",{class:"hljs-attr"},"vite"),n(`: {
    `),s("span",{class:"hljs-attr"},"ssr"),n(`: {
      `),s("span",{class:"hljs-attr"},"noExternal"),n(": ["),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`]
    },
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      }),
      autoImport({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })],
      })
    ]
  }
})
`)])],-1),N={class:"card"},b={id:"示例仓库"},V=s("p",null,[s("a",{href:"https://github.com/varletjs/varlet-install-example/tree/main/nuxt"},"varlet-install-example/nuxt")],-1);function I(C,R,$,B,D,U){const e=o("router-link"),l=o("var-site-code-example");return p(),r("div",i,[d,s("div",h,[s("h3",_,[t(e,{to:"#介绍"},{default:a(()=>[n("#")]),_:1}),n("介绍")]),m]),s("div",j,[s("h3",v,[t(e,{to:"#创建 Nuxt 项目"},{default:a(()=>[n("#")]),_:1}),n("创建 Nuxt 项目")]),f]),s("div",g,[s("h3",x,[t(e,{to:"#按需引入"},{default:a(()=>[n("#")]),_:1}),n("按需引入")]),k,t(l,{"playground-ignore":""},{default:a(()=>[y]),_:1}),t(l,null,{default:a(()=>[w]),_:1})]),s("div",N,[s("h3",b,[t(e,{to:"#示例仓库"},{default:a(()=>[n("#")]),_:1}),n("示例仓库")]),V])])}const q=c(u,[["render",I]]);export{q as default};
