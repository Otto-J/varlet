import{_ as d,p as c,f as o,h as p,M as a,q as l,S as n,P as s,aq as r}from"./vue-router-16f21350.js";const h={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"进度条",-1),u={class:"card"},m={id:"介绍"},g=a("p",null,"展示操作的当前进度。",-1),v={class:"card"},_={id:"基本使用"},f=a("p",null,[s("通过 "),a("code",null,"value"),s(" 属性设置当前进度。")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" interval = ref("),a("span",{class:"hljs-number"},"0"),s(`)

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  interval.value = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(") value.value = "),a("span",{class:"hljs-number"},"0"),s(`
    `),a("span",{class:"hljs-keyword"},"else"),s(" value.value += "),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(interval.value)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"20"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},k={id:"显示标签"},y=a("p",null,[s("通过 "),a("code",null,"label"),s(" 属性将 label 显示，label 默认为进度的百分比，可以使用插槽插入自定义内容。")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" interval = ref("),a("span",{class:"hljs-number"},"0"),s(`)

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  interval.value = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(") value.value = "),a("span",{class:"hljs-number"},"0"),s(`
    `),a("span",{class:"hljs-keyword"},"else"),s(" value.value += "),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(interval.value)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"30"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(">")]),s("success"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-progress"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},I={id:"自定义样式"},M=a("p",null,[s("通过 "),a("code",null,"line-width"),s("、"),a("code",null,"color"),s("、"),a("code",null,"track-color"),s("、"),a("code",null,"ripple"),s(" 属性设置线宽、进度条颜色、轨道颜色、水波纹加载效果。")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"60"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#f5cb90"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(`
      `),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"80"'),s(`
      `),a("span",{class:"hljs-attr"},"ripple"),s(`
      `),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(`
      `),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#f5cb90"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},C={id:"环形进度条"},V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" interval = ref("),a("span",{class:"hljs-number"},"0"),s(`)

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  interval.value = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(") value.value = "),a("span",{class:"hljs-number"},"0"),s(`
    `),a("span",{class:"hljs-keyword"},"else"),s(" value.value += "),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(interval.value)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[20, 20]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},B={id:"隐藏轨道"},P=a("p",null,[s("通过 "),a("code",null,"track"),s(" 属性隐藏 track。")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"56"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q=a("h2",null,"API",-1),A={class:"card"},E={id:"属性"},F=r("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>mode</code></td><td><code>progress</code> 的模式，可选值为 <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>value</code></td><td><code>progress</code> 的进度</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td><code>progress</code> 的线宽</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td><code>progress</code> 的颜色</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>track-color</code></td><td><code>progress</code> 轨道的颜色</td><td><em>string</em></td><td><code>#d8d8d8</code></td></tr><tr><td><code>label</code></td><td>是否显示 <code>label</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>自定义 <code>label</code> 的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>是否显示 <code>progress</code> 的轨道</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>水波纹加载效果（仅支持线性进度条）</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td><code>progress</code> 的尺寸（仅支持环形进度条）</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td><code>progress</code> 的原点（仅支持环形进度条）</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>",1),T={class:"card"},D={id:"插槽"},G=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"名称"),a("th",null,"说明"),a("th",null,"参数")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"default")]),a("td",null,"自定义 label"),a("td",null,[a("code",null,"-")])])])],-1),H={class:"card"},J={id:"样式变量"},K=r('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-ripple-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table>',2);function L(O,Q,R,W,X,Y){const t=c("router-link"),e=c("var-site-code-example");return o(),p("div",j,[i,a("div",u,[a("h3",m,[l(t,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),g]),a("div",v,[a("h3",_,[l(t,{to:"#基本使用"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),f,l(e,null,{default:n(()=>[b]),_:1})]),a("div",w,[a("h3",k,[l(t,{to:"#显示标签"},{default:n(()=>[s("#")]),_:1}),s("显示标签")]),y,l(e,null,{default:n(()=>[z]),_:1})]),a("div",x,[a("h3",I,[l(t,{to:"#自定义样式"},{default:n(()=>[s("#")]),_:1}),s("自定义样式")]),M,l(e,null,{default:n(()=>[N]),_:1})]),a("div",U,[a("h3",C,[l(t,{to:"#环形进度条"},{default:n(()=>[s("#")]),_:1}),s("环形进度条")]),l(e,null,{default:n(()=>[V]),_:1})]),a("div",$,[a("h3",B,[l(t,{to:"#隐藏轨道"},{default:n(()=>[s("#")]),_:1}),s("隐藏轨道")]),P,l(e,null,{default:n(()=>[S]),_:1})]),q,a("div",A,[a("h3",E,[l(t,{to:"#属性"},{default:n(()=>[s("#")]),_:1}),s("属性")]),F]),a("div",T,[a("h3",D,[l(t,{to:"#插槽"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),G]),a("div",H,[a("h3",J,[l(t,{to:"#样式变量"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),K])])}const ss=d(h,[["render",L]]);export{ss as default};
