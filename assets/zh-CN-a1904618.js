import{_ as o,b as n,e as r,m as h,p as t,q as a,w as l,Q as s,Z as c}from"./index-95102025.js";const p={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"单元格",-1),m={class:"card"},_={id:"介绍"},g=t("p",null,"单元格为列表中的单个展示项。",-1),u={class:"card"},f={id:"基本使用"},v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("这是单元格"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},x={id:"显示图标"},k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"这是单元格"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},w={id:"显示描述"},z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"这是单元格"'),s(),t("span",{class:"hljs-attr"},"description"),s("="),t("span",{class:"hljs-string"},'"描述"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},N={id:"显示边框"},V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"border"),s(">")]),s("这是单元格"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},B={id:"用作列表项"},E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` items = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Vue2'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'star'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Vue3'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'heart'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'React'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'close-circle'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleClick = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"item"),s(") =>")]),s(` {
  item.enabled = !item.enabled
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-paper"),s(),t("span",{class:"hljs-attr"},":elevation"),s("="),t("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in items"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item.name"'),s(`
      `),t("span",{class:"hljs-attr"},"ripple"),s(`
      `),t("span",{class:"hljs-attr"},":icon"),s("="),t("span",{class:"hljs-string"},'"item.icon"'),s(`
      `),t("span",{class:"hljs-attr"},":border"),s("="),t("span",{class:"hljs-string"},'"index !== items.length - 1"'),s(`
      `),t("span",{class:"hljs-attr"},":border-offset"),s("="),t("span",{class:"hljs-string"},'"0"'),s(`
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleClick(item)"'),s(`
    >`)]),s(`
      {{ item.name }}

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-switch"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"item.enabled"'),s(" @"),t("span",{class:"hljs-attr"},"click.stop"),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P=t("h2",null,"API",-1),S={class:"card"},q={id:"属性"},A=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>单元格标题</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>左侧图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>单元格描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>是否显示边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border-offset</code></td><td>边框偏移量</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon-class</code></td><td>图标额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>标题额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description-class</code></td><td>描述额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>右侧内容额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>是否启用水波效果</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),I={class:"card"},Q={id:"事件"},R=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"click")]),t("td",null,"点击时触发"),t("td",null,[t("code",null,"event: Event")])])])],-1),T={class:"card"},Z={id:"插槽"},D=c("<table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>cell 的内容</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义左侧 icon 区域</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>描述的内容</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>自定义右侧区域内容</td><td><code>-</code></td></tr></tbody></table>",1),F={class:"card"},G={id:"样式变量"},H=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制.</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--cell-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-description-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table>',2);function J(K,L,M,O,U,W){const e=n("router-link"),d=n("var-site-code-example");return r(),h("div",i,[j,t("div",m,[t("h3",_,[a(e,{to:"#介绍"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),g]),t("div",u,[t("h3",f,[a(e,{to:"#基本使用"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),a(d,null,{default:l(()=>[v]),_:1})]),t("div",b,[t("h3",x,[a(e,{to:"#显示图标"},{default:l(()=>[s("#")]),_:1}),s("显示图标")]),a(d,null,{default:l(()=>[k]),_:1})]),t("div",y,[t("h3",w,[a(e,{to:"#显示描述"},{default:l(()=>[s("#")]),_:1}),s("显示描述")]),a(d,null,{default:l(()=>[z]),_:1})]),t("div",C,[t("h3",N,[a(e,{to:"#显示边框"},{default:l(()=>[s("#")]),_:1}),s("显示边框")]),a(d,null,{default:l(()=>[V]),_:1})]),t("div",$,[t("h3",B,[a(e,{to:"#用作列表项"},{default:l(()=>[s("#")]),_:1}),s("用作列表项")]),a(d,null,{default:l(()=>[E]),_:1})]),P,t("div",S,[t("h3",q,[a(e,{to:"#属性"},{default:l(()=>[s("#")]),_:1}),s("属性")]),A]),t("div",I,[t("h3",Q,[a(e,{to:"#事件"},{default:l(()=>[s("#")]),_:1}),s("事件")]),R]),t("div",T,[t("h3",Z,[a(e,{to:"#插槽"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),D]),t("div",F,[t("h3",G,[a(e,{to:"#样式变量"},{default:l(()=>[s("#")]),_:1}),s("样式变量")]),H])])}const Y=o(p,[["render",J]]);export{Y as default};
