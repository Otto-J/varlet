import{_ as o,b as d,e as h,m as r,p as a,q as t,w as l,Q as s,Z as n}from"./index-95102025.js";const p={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"复选框",-1),m={class:"card"},u={id:"介绍"},v=a("p",null,"在一组备选项中进行多选。",-1),g={class:"card"},_={id:"基本使用"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s("当前的值: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},f={id:"设置状态值"},y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(`
    `),a("span",{class:"hljs-attr"},":unchecked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(`
    `),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
  >`)]),s(`
    当前的值: {{ value }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},w={id:"修改图标和颜色"},C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(`
    `),a("span",{class:"hljs-attr"},"unchecked-color"),s("="),a("span",{class:"hljs-string"},'"#e99eb4"'),s(`
    `),a("span",{class:"hljs-attr"},"checked-color"),s("="),a("span",{class:"hljs-string"},'"#f44336"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"unchecked-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart-half-full"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"24px"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"checked-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"24px"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
      当前的值: {{ value }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},A={id:"禁用"},N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s("当前的值: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},V={id:"只读"},$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s("当前的值: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},G={id:"不确定状态"},S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" intermediate = ref("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model:intermediate"),s("="),a("span",{class:"hljs-string"},'"intermediate"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},M={id:"复选框组"},q=a("p",null,[s("在复选框组中，必须给 "),a("code",null,"checkbox"),s(" 设置 "),a("code",null,"checked-value"),s(" 用来标识， 复选框组会收集所有选择的标识。")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"group"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s("吃饭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("睡觉"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"button"'),s(` 
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.group.checkAll()"'),s(`
  >`)]),s(`
    全选
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"button"'),s(` 
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.group.inverseAll()"'),s(`
  >`)]),s(`
    反选
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},T={id:"垂直布局"},Z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s("吃饭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("睡觉"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`   
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},F={id:"复选框字段校验"},H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v || '请勾选']"`),s(`
  >`)]),s(`
    当前的值: {{ value }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J={class:"card"},K={id:"复选框组字段校验"},L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length === 2 || '请全选']"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s("吃饭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("睡觉"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O=a("h2",null,"API",-1),R={class:"card"},U={id:"属性"},W=n("<h4>CheckboxGroup Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any[]</em></td><td><code>[]</code></td></tr><tr><td><code>max</code></td><td>最大选择的数量</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(value: any[]) =&gt; any&gt;</em></td><td><code>horizontal</code></td></tr></tbody></table><h4>Checkbox Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>选中状态的值</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>未选中状态的值</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>选中状态的颜色</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>未选中状态的颜色</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>图标尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indeterminate</code></td><td>是否为不确定状态（样式优先级最高）</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",4),X={class:"card"},Y={id:"方法"},ss=n("<h4>CheckboxGroup Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>checkAll</code></td><td>全选</td><td><code>-</code></td><td><code>value: any</code></td></tr><tr><td><code>inverseAll</code></td><td>反选</td><td><code>-</code></td><td><code>value: any</code></td></tr></tbody></table><h4>Checkbox Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为 <code>unchecked-value</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>切换选中状态，传 <code>checked-value</code> 为选中， <code>unchecked-value</code> 为取消选中，不传或其他情况为取反</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table>",4),as={class:"card"},ts={id:"事件"},ls=n("<h4>CheckboxGroup Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>变更时触发</td><td><code>value: any[]</code></td></tr></tbody></table><h4>Checkbox Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击时触发</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>状态变更时触发</td><td><code>value: any</code></td></tr></tbody></table>",4),es={class:"card"},cs={id:"插槽"},ns=n("<h4>CheckboxGroup Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>复选框组的内容</td><td><code>-</code></td></tr></tbody></table><h4>Checkbox Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>选中图标</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>未选中图标</td><td><code>-</code></td></tr><tr><td><code>indeterminate-icon</code></td><td>不确定状态图标</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>显示的文本</td><td><code>-</code></td></tr></tbody></table>",4),ds={class:"card"},os={id:"样式变量"},hs=n('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--checkbox-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--checkbox-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--checkbox-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--checkbox-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--checkbox-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>',2);function rs(ps,js,is,ms,us,vs){const e=d("router-link"),c=d("var-site-code-example");return h(),r("div",j,[i,a("div",m,[a("h3",u,[t(e,{to:"#介绍"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),v]),a("div",g,[a("h3",_,[t(e,{to:"#基本使用"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),t(c,null,{default:l(()=>[k]),_:1})]),a("div",b,[a("h3",f,[t(e,{to:"#设置状态值"},{default:l(()=>[s("#")]),_:1}),s("设置状态值")]),t(c,null,{default:l(()=>[y]),_:1})]),a("div",x,[a("h3",w,[t(e,{to:"#修改图标和颜色"},{default:l(()=>[s("#")]),_:1}),s("修改图标和颜色")]),t(c,null,{default:l(()=>[C]),_:1})]),a("div",z,[a("h3",A,[t(e,{to:"#禁用"},{default:l(()=>[s("#")]),_:1}),s("禁用")]),t(c,null,{default:l(()=>[N]),_:1})]),a("div",P,[a("h3",V,[t(e,{to:"#只读"},{default:l(()=>[s("#")]),_:1}),s("只读")]),t(c,null,{default:l(()=>[$]),_:1})]),a("div",E,[a("h3",G,[t(e,{to:"#不确定状态"},{default:l(()=>[s("#")]),_:1}),s("不确定状态")]),t(c,null,{default:l(()=>[S]),_:1})]),a("div",B,[a("h3",M,[t(e,{to:"#复选框组"},{default:l(()=>[s("#")]),_:1}),s("复选框组")]),q,t(c,null,{default:l(()=>[I]),_:1})]),a("div",Q,[a("h3",T,[t(e,{to:"#垂直布局"},{default:l(()=>[s("#")]),_:1}),s("垂直布局")]),t(c,null,{default:l(()=>[Z]),_:1})]),a("div",D,[a("h3",F,[t(e,{to:"#复选框字段校验"},{default:l(()=>[s("#")]),_:1}),s("复选框字段校验")]),t(c,null,{default:l(()=>[H]),_:1})]),a("div",J,[a("h3",K,[t(e,{to:"#复选框组字段校验"},{default:l(()=>[s("#")]),_:1}),s("复选框组字段校验")]),t(c,null,{default:l(()=>[L]),_:1})]),O,a("div",R,[a("h3",U,[t(e,{to:"#属性"},{default:l(()=>[s("#")]),_:1}),s("属性")]),W]),a("div",X,[a("h3",Y,[t(e,{to:"#方法"},{default:l(()=>[s("#")]),_:1}),s("方法")]),ss]),a("div",as,[a("h3",ts,[t(e,{to:"#事件"},{default:l(()=>[s("#")]),_:1}),s("事件")]),ls]),a("div",es,[a("h3",cs,[t(e,{to:"#插槽"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),ns]),a("div",ds,[a("h3",os,[t(e,{to:"#样式变量"},{default:l(()=>[s("#")]),_:1}),s("样式变量")]),hs])])}const _s=o(p,[["render",rs]]);export{_s as default};
