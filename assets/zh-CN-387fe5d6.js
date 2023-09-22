import{_ as o,b as d,e as r,m as h,p as l,q as a,w as t,Q as s,Z as e}from"./index-95102025.js";const i={components:{}},p={class:"varlet-site-doc"},j=l("h1",null,"无限滚动列表",-1),u={class:"card"},m={id:"介绍"},f=l("p",null,"无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。",-1),_={class:"card"},g={id:"基本使用"},v=l("p",null,[s("当检测到滚动容器滚动到底部底部时会触发 "),l("code",null,"load"),s(" 事件，并会设置 "),l("code",null,"loading"),s(" 为 "),l("code",null,"true"),s("，在加载结束时您需要手动设置 "),l("code",null,"loading"),s(" 为 "),l("code",null,"false"),s("，表示加载结束。")],-1),y=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`

    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),l("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),l("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),b={class:"card"},k={id:"加载失败"},w=l("p",null,[s("您可以使用 "),l("code",null,"v-model:error"),s(" 手动设置错误状态，会展示错误提示，点击错误提示会帮您把 "),l("code",null,"error"),s(" 设置成 "),l("code",null,"false"),s(" 并再次触发 "),l("code",null,"load"),s(" 事件。")],-1),x=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" error = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length === "),l("span",{class:"hljs-number"},"40"),s(`) {
      error.value = `),l("span",{class:"hljs-literal"},"true"),s(`
      loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
      `),l("span",{class:"hljs-keyword"},"return"),s(`
    }

    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},"v-model:error"),s("="),l("span",{class:"hljs-string"},'"error"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},N={id:"提示文字"},T=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`

    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),l("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),l("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},"loading-text"),s("="),l("span",{class:"hljs-string"},'"正在努力输出"'),s(`
    `),l("span",{class:"hljs-attr"},"finished-text"),s("="),l("span",{class:"hljs-string"},'"一滴都没有了"'),s(`
    `),l("span",{class:"hljs-attr"},"error-text"),s("="),l("span",{class:"hljs-string"},'"出错了出错了"'),s(`
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},P={id:"组合"},V=l("p",null,[s("与 "),l("code",null,"PullRefresh"),s(" 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证"),l("code",null,"PullRefresh"),s(" 容器高度不为 "),l("code",null,"0"),s("。")],-1),$=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" refreshing = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"refresh"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-built_in"},"console"),s(".log("),l("span",{class:"hljs-string"},"'refresh'"),s(`)
    refreshing.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"2000"),s(`)
}

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }
    
    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-pull-refresh"),s(),l("span",{class:"hljs-attr"},"v-model"),s("="),l("span",{class:"hljs-string"},'"refreshing"'),s(" @"),l("span",{class:"hljs-attr"},"refresh"),s("="),l("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(" @"),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(">")]),s(`
      `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"d"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"d in list"'),s(">")]),s("ListItem {{ d }}"),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},I={id:"注意"},R=e("<p>我们是通过监听滚动容器的 <code>scroll</code> 事件检测是否触底并执行加载。 滚动容器是指最近的一个 <code>overflow-y</code> 为 <code>auto</code> 或者 <code>scroll</code> 的元素。 当您设置一个元素的 <code>overflow-x</code> 为除了 <code>visible</code> 以外的值时，浏览器为了维护一个 <code>bfc</code> 的结构会使您的 <code>overflow-y</code> 修正为 <code>auto</code>。 这时我们就会误认为这个元素也是一个滚动容器，注意规避。</p>",1),S=l("h2",null,"API",-1),q={class:"card"},A={id:"属性"},E=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>错误状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>是否在组件初始化时立刻检测位置</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>是否加载完毕</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>距离底部的触发距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>加载状态文字</td><td><em>string</em></td><td><code>加载中</code></td></tr><tr><td><code>finished-text</code></td><td>加载完毕文字</td><td><em>string</em></td><td><code>没有更多了</code></td></tr><tr><td><code>error-text</code></td><td>加载失败文字</td><td><em>string</em></td><td><code>加载失败</code></td></tr></tbody></table>",1),L={class:"card"},Q={id:"方法"},Z=e("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>check</code></td><td>触发位置检查, 触底触发 load 事件。</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),D={class:"card"},F={id:"事件"},G=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"load")]),l("td",null,"触底时触发"),l("td",null,[l("code",null,"-")])])])],-1),H={class:"card"},J={id:"插槽"},K=e("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>列表内容</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>加载中内容</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>加载失败内容</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>加载完毕内容</td><td><code>-</code></td></tr></tbody></table>",1),M={class:"card"},O={id:"样式变量"},U=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>',2);function W(X,Y,ss,ls,as,ts){const n=d("router-link"),c=d("var-site-code-example");return r(),h("div",p,[j,l("div",u,[l("h3",m,[a(n,{to:"#介绍"},{default:t(()=>[s("#")]),_:1}),s("介绍")]),f]),l("div",_,[l("h3",g,[a(n,{to:"#基本使用"},{default:t(()=>[s("#")]),_:1}),s("基本使用")]),v,a(c,null,{default:t(()=>[y]),_:1})]),l("div",b,[l("h3",k,[a(n,{to:"#加载失败"},{default:t(()=>[s("#")]),_:1}),s("加载失败")]),w,a(c,null,{default:t(()=>[x]),_:1})]),l("div",z,[l("h3",N,[a(n,{to:"#提示文字"},{default:t(()=>[s("#")]),_:1}),s("提示文字")]),a(c,null,{default:t(()=>[T]),_:1})]),l("div",C,[l("h3",P,[a(n,{to:"#组合"},{default:t(()=>[s("#")]),_:1}),s("组合")]),V,a(c,null,{default:t(()=>[$]),_:1})]),l("div",B,[l("h3",I,[a(n,{to:"#注意"},{default:t(()=>[s("#")]),_:1}),s("注意")]),R]),S,l("div",q,[l("h3",A,[a(n,{to:"#属性"},{default:t(()=>[s("#")]),_:1}),s("属性")]),E]),l("div",L,[l("h3",Q,[a(n,{to:"#方法"},{default:t(()=>[s("#")]),_:1}),s("方法")]),Z]),l("div",D,[l("h3",F,[a(n,{to:"#事件"},{default:t(()=>[s("#")]),_:1}),s("事件")]),G]),l("div",H,[l("h3",J,[a(n,{to:"#插槽"},{default:t(()=>[s("#")]),_:1}),s("插槽")]),K]),l("div",M,[l("h3",O,[a(n,{to:"#样式变量"},{default:t(()=>[s("#")]),_:1}),s("样式变量")]),U])])}const es=o(i,[["render",W]]);export{es as default};
