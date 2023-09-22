import{_ as h,b as e,e as d,m as r,p as s,q as l,w as t,Q as a,Z as o}from"./index-95102025.js";const p={components:{}},j={class:"varlet-site-doc"},i=s("h1",null,"遮罩层",-1),u={class:"card"},_={id:"介绍"},m=s("p",null,"创建一个遮罩层，用于强调特定的页面元素。",-1),v={class:"card"},g={id:"基本使用"},b=s("p",null,[a("通过 "),s("code",null,"show"),a(" 控制遮罩层显示，点击遮罩时自动将 "),s("code",null,"show"),a(" 设置为 "),s("code",null,"false"),a(" 以关闭遮罩层。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
  
`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("显示遮罩层"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),y={class:"card"},k={id:"嵌入内容"},w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("嵌入内容"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"overlay-content"'),a(" @"),s("span",{class:"hljs-attr"},"click.stop"),a(">")]),a(`
      素胚勾勒出青花笔锋浓转淡, 
      瓶身描绘的牡丹一如你初妆, 
      冉冉檀香透过窗心事我了然, 
      宣纸上走笔至此搁一半。
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-overlay"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".overlay-content"),a(` {
  `),s("span",{class:"hljs-attribute"},"padding"),a(": "),s("span",{class:"hljs-number"},"20px"),a(),s("span",{class:"hljs-number"},"24px"),a(`;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"250px"),a(`;
  `),s("span",{class:"hljs-attribute"},"background"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--button-default-color);
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),x={class:"card"},N={id:"注册事件"},C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("点击遮罩层"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(`
    `),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"Snackbar.success('click')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),S=s("h2",null,"API",-1),V={class:"card"},$={id:"属性"},B=o("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动遮罩层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>遮罩层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>-</code></td></tr></tbody></table>",1),P={class:"card"},z={id:"事件"},T=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"事件名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"click")]),s("td",null,"点击遮罩层时触发"),s("td",null,[s("code",null,"-")])])])],-1),q={class:"card"},A={id:"插槽"},E=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"遮罩层内容"),s("td",null,[s("code",null,"-")])])])],-1),I={class:"card"},Q={id:"样式变量"},Z=o('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr></tbody></table>',2);function D(F,G,H,J,K,L){const n=e("router-link"),c=e("var-site-code-example");return d(),r("div",j,[i,s("div",u,[s("h3",_,[l(n,{to:"#介绍"},{default:t(()=>[a("#")]),_:1}),a("介绍")]),m]),s("div",v,[s("h3",g,[l(n,{to:"#基本使用"},{default:t(()=>[a("#")]),_:1}),a("基本使用")]),b,l(c,null,{default:t(()=>[f]),_:1})]),s("div",y,[s("h3",k,[l(n,{to:"#嵌入内容"},{default:t(()=>[a("#")]),_:1}),a("嵌入内容")]),l(c,null,{default:t(()=>[w]),_:1})]),s("div",x,[s("h3",N,[l(n,{to:"#注册事件"},{default:t(()=>[a("#")]),_:1}),a("注册事件")]),l(c,null,{default:t(()=>[C]),_:1})]),S,s("div",V,[s("h3",$,[l(n,{to:"#属性"},{default:t(()=>[a("#")]),_:1}),a("属性")]),B]),s("div",P,[s("h3",z,[l(n,{to:"#事件"},{default:t(()=>[a("#")]),_:1}),a("事件")]),T]),s("div",q,[s("h3",A,[l(n,{to:"#插槽"},{default:t(()=>[a("#")]),_:1}),a("插槽")]),E]),s("div",I,[s("h3",Q,[l(n,{to:"#样式变量"},{default:t(()=>[a("#")]),_:1}),a("样式变量")]),Z])])}const O=h(p,[["render",D]]);export{O as default};
