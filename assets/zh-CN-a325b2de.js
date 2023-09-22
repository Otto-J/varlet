import{_ as o,b as c,e as h,m as p,p as a,q as t,w as l,Q as s,Z as r}from"./index-95102025.js";const d={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"图片懒加载",-1),m={class:"card"},_={id:"介绍"},g=a("p",null,"在图片可见时进行加载。",-1),u={class:"card"},v={id:"基本用法"},b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"lazy-example-cat"'),s(),a("span",{class:"hljs-attr"},"v-lazy"),s("="),a("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".lazy-example-cat"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  `),a("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
  `),a("span",{class:"hljs-attribute"},"background-size"),s(`: cover;
  `),a("span",{class:"hljs-attribute"},"pointer-events"),s(`: none;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y={class:"card"},x={id:"背景图懒加载"},z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(` 
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"lazy-example-cat"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-lazy:background-image"),s("="),a("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".lazy-example-cat"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  `),a("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
  `),a("span",{class:"hljs-attribute"},"background-size"),s(`: cover;
  `),a("span",{class:"hljs-attribute"},"pointer-events"),s(`: none;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f={class:"card"},k={id:"内联属性"},w=a("p",null,[s("可以通过内联属性修改 "),a("code",null,"loading"),s("、 "),a("code",null,"error"),s(" 图片和"),a("code",null,"加载失败时尝试重新加载的次数"),s("。")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"lazy-example-cat"'),s(`
    `),a("span",{class:"hljs-attr"},"v-lazy"),s("="),a("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),s(`
    `),a("span",{class:"hljs-attr"},"lazy-loading"),s("="),a("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),s(`
    `),a("span",{class:"hljs-attr"},"lazy-error"),s("="),a("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),s(`
    `),a("span",{class:"hljs-attr"},"lazy-attempt"),s("="),a("span",{class:"hljs-string"},'"3"'),s(`
  >`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".lazy-example-cat"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  `),a("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
  `),a("span",{class:"hljs-attribute"},"background-size"),s(`: cover;
  `),a("span",{class:"hljs-attribute"},"pointer-events"),s(`: none;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),L={class:"card"},V={id:"插件"},$=a("p",null,[a("code",null,"Lazy"),s(" 提供了在插件注册时传入的选项，可以设置默认的懒加载选项。")],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Lazy } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Lazy, {
  `),a("span",{class:"hljs-attr"},"loading"),s(": "),a("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),s(`,
  `),a("span",{class:"hljs-attr"},"error"),s(": "),a("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),s(`,
  `),a("span",{class:"hljs-attr"},"attempt"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
  `),a("span",{class:"hljs-attr"},"throttleWait"),s(": "),a("span",{class:"hljs-number"},"300"),s(`,
  `),a("span",{class:"hljs-attr"},"events"),s(`: [
    `),a("span",{class:"hljs-string"},"'scroll'"),s(`,
    `),a("span",{class:"hljs-string"},"'wheel'"),s(`,
    `),a("span",{class:"hljs-string"},"'mousewheel'"),s(`,
    `),a("span",{class:"hljs-string"},"'resize'"),s(`,
    `),a("span",{class:"hljs-string"},"'animationend'"),s(`,
    `),a("span",{class:"hljs-string"},"'transitionend'"),s(`,
    `),a("span",{class:"hljs-string"},"'touchmove'"),s(`
  ],
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"filter"),s("("),a("span",{class:"hljs-params"},"lazy"),s(")")]),s(` {
    `),a("span",{class:"hljs-comment"},"// 可以访问 lazy 上下文的所有属性,执行一些属性拦截,"),s(`
    `),a("span",{class:"hljs-comment"},"// 比如简单修改所有的图片地址 http -> https"),s(`
    lazy.src.replace(`),a("span",{class:"hljs-string"},"'http://'"),s(", "),a("span",{class:"hljs-string"},"'https://'"),s(`)
  }
})
`)])],-1),B=a("h2",null,"API",-1),C={class:"card"},W={id:"插件选项"},q=r("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>loading</code></td><td>加载中的图片，尽可能选择加载速度很快的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>error</code></td><td>加载失败显示的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>attempt</code></td><td>加载失败时尝试重新加载的次数</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>节流时间，数值越大事件触发频率越低</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>触发可见性检测注册的事件列表</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>属性拦截函数</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1);function E(I,P,Q,S,T,Z){const n=c("router-link"),e=c("var-site-code-example");return h(),p("div",i,[j,a("div",m,[a("h3",_,[t(n,{to:"#介绍"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),g]),a("div",u,[a("h3",v,[t(n,{to:"#基本用法"},{default:l(()=>[s("#")]),_:1}),s("基本用法")]),t(e,null,{default:l(()=>[b]),_:1})]),a("div",y,[a("h3",x,[t(n,{to:"#背景图懒加载"},{default:l(()=>[s("#")]),_:1}),s("背景图懒加载")]),t(e,null,{default:l(()=>[z]),_:1})]),a("div",f,[a("h3",k,[t(n,{to:"#内联属性"},{default:l(()=>[s("#")]),_:1}),s("内联属性")]),w,t(e,null,{default:l(()=>[N]),_:1})]),a("div",L,[a("h3",V,[t(n,{to:"#插件"},{default:l(()=>[s("#")]),_:1}),s("插件")]),$,t(e,{"playground-ignore":""},{default:l(()=>[A]),_:1})]),B,a("div",C,[a("h3",W,[t(n,{to:"#插件选项"},{default:l(()=>[s("#")]),_:1}),s("插件选项")]),q])])}const F=o(d,[["render",E]]);export{F as default};
