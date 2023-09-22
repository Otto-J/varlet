import{_ as l,b as c,e as p,m as d,p as s,q as o,w as a,Q as t,Z as r}from"./index-95102025.js";const i={components:{}},h={class:"varlet-site-doc"},_=s("h1",null,"浏览器适配",-1),u={class:"card"},m={id:"介绍"},j=s("p",null,[t("组件库提供移动端和桌面端适配方案， 移动端使用 "),s("code",null,"postcss-px-to-viewport"),t(" 方案进行适配， 桌面端使用 "),s("code",null,"@varlet/touch-emulator"),t(" 方案进行适配。")],-1),v={class:"card"},x={id:"移动端适配"},g=r("<p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vw</code> 单位从而实现移动端适配。 在 <code>Webpack/Vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vw</code>。</p>",1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),t(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),t(`
pnpm add postcss-px-to-viewport -D
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),t(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),t(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),t(": "),s("span",{class:"hljs-number"},"375"),t(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),t(": "),s("span",{class:"hljs-number"},"6"),t(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),t(": "),s("span",{class:"hljs-string"},"'px'"),t(`,
      `),s("span",{class:"hljs-attr"},"propList"),t(": ["),s("span",{class:"hljs-string"},"'*'"),t(`],
    }
  }
}
`)])],-1),w={class:"card"},y={id:"桌面端适配"},k=s("p",null,[t("由于组件库交互事件使用 "),s("code",null,"touch"),t(" 事件进行开发，不支持桌面端的 "),s("code",null,"mouse"),t(" 事件， 推荐使用 "),s("code",null,"@varlet/touch-emulator"),t(" 将 "),s("code",null,"touch -> mouse"),t(" 从而实现桌面端适配。")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),t(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),t(`
pnpm add @varlet/touch-emulator
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),t(`
`)])],-1);function C($,B,D,T,W,q){const e=c("router-link"),n=c("var-site-code-example");return p(),d("div",h,[_,s("div",u,[s("h3",m,[o(e,{to:"#介绍"},{default:a(()=>[t("#")]),_:1}),t("介绍")]),j]),s("div",v,[s("h3",x,[o(e,{to:"#移动端适配"},{default:a(()=>[t("#")]),_:1}),t("移动端适配")]),g,o(n,{"playground-ignore":""},{default:a(()=>[f]),_:1}),o(n,{"playground-ignore":""},{default:a(()=>[b]),_:1})]),s("div",w,[s("h3",y,[o(e,{to:"#桌面端适配"},{default:a(()=>[t("#")]),_:1}),t("桌面端适配")]),k,o(n,{"playground-ignore":""},{default:a(()=>[N]),_:1}),o(n,{"playground-ignore":""},{default:a(()=>[V]),_:1})])])}const A=l(i,[["render",C]]);export{A as default};
