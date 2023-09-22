import{_ as r,b as e,e as h,m as d,p as s,q as l,w as n,Q as a,Z as o}from"./index-95102025.js";const p={components:{}},i={class:"varlet-site-doc"},j=s("h1",null,"图标",-1),m={class:"card"},_={id:"介绍"},u=s("p",null,[a("基于字体的图标库，也支持网络图片。 字体图标来自 "),s("a",{href:"https://materialdesignicons.com/"},"Material Design Icon")],-1),g={class:"card"},f={id:"图标尺寸"},v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),y={class:"card"},b={id:"图标颜色"},k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),x={class:"card"},z={id:"使用图片"},w=s("p",null,[a("当传入的 "),s("code",null,"name"),a(" 是一个网络地址时,将会使用 "),s("code",null,"img"),a(" 标签以 "),s("code",null,"cover"),a(" 模式显示。"),s("code",null,"size"),a(" 为图片的宽高。")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"32"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),C={class:"card"},S={id:"注册事件"},V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(`
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"() => Snackbar.success('点击成功')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),$={class:"card"},B={id:"图标切换动画"},E=s("p",null,[a("当设置了 "),s("code",null,"transition(ms)"),a(" 并通过图标的 "),s("code",null,"name"),a(" 切换图标时，可以触发切换动画。")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" name = ref("),s("span",{class:"hljs-string"},"'information'"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggle"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  name.value = name.value === `),s("span",{class:"hljs-string"},"'information'"),a(` 
    ? `),s("span",{class:"hljs-string"},"'checkbox-marked-circle'"),a(` 
    : `),s("span",{class:"hljs-string"},"'information'"),a(`
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(` 
    `),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"name"'),a(` 
    `),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(` 
    `),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"30"'),a(` 
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggle"'),a(`
  />`)]),a(`

  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(`
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(`
    `),s("span",{class:"hljs-attr"},"animation-class"),a("="),s("span",{class:"hljs-string"},'"fade"'),a(`
    `),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"iconName"'),a(`
    `),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(`
    `),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"30"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggle"'),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".fade"),a(` {
  `),s("span",{class:"hljs-attribute"},"opacity"),a(": "),s("span",{class:"hljs-number"},"0"),a(`;
  `),s("span",{class:"hljs-attribute"},"transition-property"),a(`: opacity;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),P={class:"card"},q={id:"自定义图标库"},A=s("p",null,[a("首先您需要设置您自己的字体，并引入到您的项目。 这里假设扩展一个名为 "),s("code",null,"my-icons"),a(" 的字体。")],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"/* 设置字体 */"),a(`
`),s("span",{class:"hljs-keyword"},"@font-face"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
  `),s("span",{class:"hljs-attribute"},"src"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.ttf"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"truetype"'),a(`);
}

`),s("span",{class:"hljs-comment"},"/* 设置命名空间 */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* 或 */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* 设置命名空间结束 */"),a(`

`),s("span",{class:"hljs-comment"},"/* 字体名称映射码点 */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon-hot"),s("span",{class:"hljs-selector-pseudo"},"::before"),a(` {
  `),s("span",{class:"hljs-attribute"},"content"),a(": "),s("span",{class:"hljs-string"},'"\\F000"'),a(`;
}
`)])],-1),F=s("p",null,[a("到这里你就成功的扩展了自己的图标库，"),s("code",null,"my-icon"),a(" 就是你的字体 "),s("code",null,"命名空间(namespace)"),a("，您可以这样使用。")],-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"namespace"),a("="),s("span",{class:"hljs-string"},'"my-icon"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"hot"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),Q=s("h2",null,"API",-1),T={class:"card"},Z={id:"属性"},G=o("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>图标颜色, 只适用于字体图标</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标的命名空间, 可扩展自定义图标库</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>animation-class</code></td><td>过渡动画类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>过渡动画时间（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table>",1),H={class:"card"},J={id:"事件"},K=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"事件名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"click")]),s("td",null,"点击图标时触发"),s("td",null,[s("code",null,"event: Event")])])])],-1),L={class:"card"},O={id:"样式变量"},R=o('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table>',2);function U(W,X,Y,ss,as,ls){const t=e("router-link"),c=e("var-site-code-example");return h(),d("div",i,[j,s("div",m,[s("h3",_,[l(t,{to:"#介绍"},{default:n(()=>[a("#")]),_:1}),a("介绍")]),u]),s("div",g,[s("h3",f,[l(t,{to:"#图标尺寸"},{default:n(()=>[a("#")]),_:1}),a("图标尺寸")]),l(c,null,{default:n(()=>[v]),_:1})]),s("div",y,[s("h3",b,[l(t,{to:"#图标颜色"},{default:n(()=>[a("#")]),_:1}),a("图标颜色")]),l(c,null,{default:n(()=>[k]),_:1})]),s("div",x,[s("h3",z,[l(t,{to:"#使用图片"},{default:n(()=>[a("#")]),_:1}),a("使用图片")]),w,l(c,null,{default:n(()=>[N]),_:1})]),s("div",C,[s("h3",S,[l(t,{to:"#注册事件"},{default:n(()=>[a("#")]),_:1}),a("注册事件")]),l(c,null,{default:n(()=>[V]),_:1})]),s("div",$,[s("h3",B,[l(t,{to:"#图标切换动画"},{default:n(()=>[a("#")]),_:1}),a("图标切换动画")]),E,l(c,null,{default:n(()=>[I]),_:1})]),s("div",P,[s("h3",q,[l(t,{to:"#自定义图标库"},{default:n(()=>[a("#")]),_:1}),a("自定义图标库")]),A,l(c,{"playground-ignore":""},{default:n(()=>[D]),_:1}),F,l(c,{"playground-ignore":""},{default:n(()=>[M]),_:1})]),Q,s("div",T,[s("h3",Z,[l(t,{to:"#属性"},{default:n(()=>[a("#")]),_:1}),a("属性")]),G]),s("div",H,[s("h3",J,[l(t,{to:"#事件"},{default:n(()=>[a("#")]),_:1}),a("事件")]),K]),s("div",L,[s("h3",O,[l(t,{to:"#样式变量"},{default:n(()=>[a("#")]),_:1}),a("样式变量")]),R])])}const ts=r(p,[["render",U]]);export{ts as default};
