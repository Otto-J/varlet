import{_ as p,b as d,e as o,m as h,p as a,q as l,w as t,Q as s,Z as c}from"./index-95102025.js";const r={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"折叠面板",-1),m={class:"card"},g={id:"介绍"},_=a("p",null,"可以折叠/展开的内容区域。",-1),v={class:"card"},u={id:"基本使用"},f=a("p",null,[s("通过 "),a("code",null,"v-model"),s(" 控制展开的面板列表，"),a("code",null,"value"),s(" 为数组格式。")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"changeHandle"),s("("),a("span",{class:"hljs-params"},"val"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(val)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeHandle"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k={id:"隐藏边距"},w=a("p",null,[s("使用 "),a("code",null,"offset"),s(" 属性隐藏边距。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'2'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},z={id:"可控的分割线"},N=a("p",null,[s("使用 "),a("code",null,"divider"),s(" 属性隐藏边距。")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(" divider = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"divider = !divider"'),s(">")]),s(`
    {{ divider ? '隐藏分割线' : '显示分割线' }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":divider"),s("="),a("span",{class:"hljs-string"},'"divider"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},V={id:"手风琴模式"},$=a("p",null,[s("使用 "),a("code",null,"accordion"),s(" 属性开启手风琴模式，此时 "),a("code",null,"value"),s(" 为字符串。")],-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"accordion"),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},E={id:"禁用"},H=a("p",null,[s("在 "),a("code",null,"collapse-item"),s(" 上使用 "),a("code",null,"disabled"),s(" 属性禁用当前面板。")],-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"1"),s(`])

`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[8, 8]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(">")]),s(`
      {{ disabled ? '启用' : '禁用' }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
        文本
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
        文本
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},Q={id:"自定义内容"},T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"这是标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(">")]),s(`
      文本
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s("这是标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s("^_^"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      这是内容
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z=a("h2",null,"API",-1),D={class:"card"},F={id:"属性"},G=c("<h4>Collapse Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前展开面板的 name</td><td>手风琴模式： <em>string | number</em><br> 非手风琴模式：<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>是否开启手风琴模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>offset</code></td><td>是否显示边距</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>divider</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>唯一标识符，默认为索引值</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>面板标题</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon 的名称</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用面板</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",4),J={class:"card"},K={id:"事件"},L=c("<h4>Collapse Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>切换面板时触发</td><td><code>value: 类型与 v-model 绑定的值一致</code></td></tr></tbody></table>",2),M={class:"card"},O={id:"插槽"},R=c("<h4>Collapse Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>折叠面板的内容</td><td><code>-</code></td></tr></tbody></table><h4>CollapseItem Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>面板的内容</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>面板的标题</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义右侧 icon</td><td><code>-</code></td></tr></tbody></table>",4),U={class:"card"},W={id:"样式变量"},X=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table>',2);function Y(ss,as,ls,ts,ns,es){const n=d("router-link"),e=d("var-site-code-example");return o(),h("div",j,[i,a("div",m,[a("h3",g,[l(n,{to:"#介绍"},{default:t(()=>[s("#")]),_:1}),s("介绍")]),_]),a("div",v,[a("h3",u,[l(n,{to:"#基本使用"},{default:t(()=>[s("#")]),_:1}),s("基本使用")]),f,l(e,null,{default:t(()=>[b]),_:1})]),a("div",y,[a("h3",k,[l(n,{to:"#隐藏边距"},{default:t(()=>[s("#")]),_:1}),s("隐藏边距")]),w,l(e,null,{default:t(()=>[x]),_:1})]),a("div",C,[a("h3",z,[l(n,{to:"#可控的分割线"},{default:t(()=>[s("#")]),_:1}),s("可控的分割线")]),N,l(e,null,{default:t(()=>[P]),_:1})]),a("div",S,[a("h3",V,[l(n,{to:"#手风琴模式"},{default:t(()=>[s("#")]),_:1}),s("手风琴模式")]),$,l(e,null,{default:t(()=>[B]),_:1})]),a("div",I,[a("h3",E,[l(n,{to:"#禁用"},{default:t(()=>[s("#")]),_:1}),s("禁用")]),H,l(e,null,{default:t(()=>[q]),_:1})]),a("div",A,[a("h3",Q,[l(n,{to:"#自定义内容"},{default:t(()=>[s("#")]),_:1}),s("自定义内容")]),l(e,null,{default:t(()=>[T]),_:1})]),Z,a("div",D,[a("h3",F,[l(n,{to:"#属性"},{default:t(()=>[s("#")]),_:1}),s("属性")]),G]),a("div",J,[a("h3",K,[l(n,{to:"#事件"},{default:t(()=>[s("#")]),_:1}),s("事件")]),L]),a("div",M,[a("h3",O,[l(n,{to:"#插槽"},{default:t(()=>[s("#")]),_:1}),s("插槽")]),R]),a("div",U,[a("h3",W,[l(n,{to:"#样式变量"},{default:t(()=>[s("#")]),_:1}),s("样式变量")]),X])])}const ds=p(r,[["render",Y]]);export{ds as default};
