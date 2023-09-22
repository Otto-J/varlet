import{_ as o,b as c,e as r,m as p,p as a,q as t,w as l,Q as s,Z as d}from"./index-95102025.js";const h={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"评分",-1),m={class:"card"},u={id:"基本使用"},_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up"'),s(),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up-outline"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},f={id:"自定义评分总数"},v=a("p",null,[s("通过 "),a("code",null,"count"),s(" 属性设置评分总数。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},k={id:"自定义评分图标样式"},w=a("p",null,[s("通过 "),a("code",null,"icon"),s(" 和 "),a("code",null,"empty-icon"),s(" 属性设置选中和未选时的图标样式。 通过 "),a("code",null,"color"),s(" 和 "),a("code",null,"empty-color"),s(" 属性设置选中和未选中时的颜色。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(` 
    `),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(` 
    `),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(` 
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(` 
    `),a("span",{class:"hljs-attr"},"empty-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},N={id:"自定义评分图标尺寸与间隔"},z=a("p",null,[s("通过 "),a("code",null,"size"),s(" 属性设置评分图标的尺寸。 通过 "),a("code",null,"gap"),s(" 属性设置评分之间的间隔。")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(),a("span",{class:"hljs-attr"},":gap"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},V={id:"使用半星"},B=a("p",null,[s("通过 "),a("code",null,"half"),s(" 属性将评分设置为可半选，"),a("code",null,"half-icon"),s(" 属性设置半选时的样式。")],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"half"),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
    `),a("span",{class:"hljs-attr"},"half"),s(`
    `),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(`
    `),a("span",{class:"hljs-attr"},"half-icon"),s("="),a("span",{class:"hljs-string"},'"heart-half-full"'),s(`
    `),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    `),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},q={id:"禁用与只读"},E=a("p",null,[s("通过 "),a("code",null,"disabled"),s(" 属性将评分设置为禁止点击状态，"),a("code",null,"disabled-color"),s(" 设置禁用时图标的颜色。 通过 "),a("code",null,"readonly"),s(" 属性将评分设置为只读状态。")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"disabled"),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"readonly"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},T={id:"可清空"},Z=a("p",null,[s("通过 "),a("code",null,"clearable"),s(" 属性允许用户清空评分。")],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"half"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},G={id:"监听事件"},H=a("p",null,[s("通过调用 "),a("code",null,"change"),s(" 事件完成其他交互逻辑。")],-1),J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"score"),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},[s("`click "),a("span",{class:"hljs-subst"},"${score}"),s("`")]),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),K={class:"card"},L={id:"字段校验"},M=a("p",null,[s("通过传入一个校验器数组可以对值进行校验，校验器返回 "),a("code",null,"true"),s(" 则为校验通过。 以外的值将转换为文本作为用户提示。")],-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v >= 3 || '必须大于2']"`),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R=a("h2",null,"API",-1),U={class:"card"},W={id:"属性"},X=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前分数</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>评分总数</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>选中时图标的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>选中整个图标时的图标样式</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>未选中时图标的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>empty-icon</code></td><td>未选中时图标的样式</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>图标间隔，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>是否允许半选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>半选时图标的样式，只有在 <code>half</code> 为 <code>true</code> 时才有效</td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>图标的命名空间, 可扩展自定义图标库</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>是否禁止评分</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>禁止评分时图标的颜色，只有在 <code>disabled</code> 为 <code>true</code> 时才有效，优先级高于 <code>color</code>、<code>empty-color</code></td><td><em>string</em></td><td><code>#aaa</code></td></tr><tr><td><code>readonly</code></td><td>是否使用评分只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否允许清空</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否使用水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"事件"},as=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"事件名"),a("th",null,"说明"),a("th",null,"回调参数")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"change")]),a("td",null,"评分改变时触发"),a("td",null,[a("code",null,"value: string | number")])])])],-1),ts={class:"card"},ls={id:"样式变量"},ns=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>',2);function es(cs,ds,os,rs,ps,hs){const n=c("router-link"),e=c("var-site-code-example");return r(),p("div",j,[i,a("div",m,[a("h3",u,[t(n,{to:"#基本使用"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),t(e,null,{default:l(()=>[_]),_:1})]),a("div",g,[a("h3",f,[t(n,{to:"#自定义评分总数"},{default:l(()=>[s("#")]),_:1}),s("自定义评分总数")]),v,t(e,null,{default:l(()=>[y]),_:1})]),a("div",b,[a("h3",k,[t(n,{to:"#自定义评分图标样式"},{default:l(()=>[s("#")]),_:1}),s("自定义评分图标样式")]),w,t(e,null,{default:l(()=>[x]),_:1})]),a("div",C,[a("h3",N,[t(n,{to:"#自定义评分图标尺寸与间隔"},{default:l(()=>[s("#")]),_:1}),s("自定义评分图标尺寸与间隔")]),z,t(e,null,{default:l(()=>[$]),_:1})]),a("div",S,[a("h3",V,[t(n,{to:"#使用半星"},{default:l(()=>[s("#")]),_:1}),s("使用半星")]),B,t(e,null,{default:l(()=>[A]),_:1})]),a("div",P,[a("h3",q,[t(n,{to:"#禁用与只读"},{default:l(()=>[s("#")]),_:1}),s("禁用与只读")]),E,t(e,null,{default:l(()=>[I]),_:1})]),a("div",Q,[a("h3",T,[t(n,{to:"#可清空"},{default:l(()=>[s("#")]),_:1}),s("可清空")]),Z,t(e,null,{default:l(()=>[D]),_:1})]),a("div",F,[a("h3",G,[t(n,{to:"#监听事件"},{default:l(()=>[s("#")]),_:1}),s("监听事件")]),H,t(e,null,{default:l(()=>[J]),_:1})]),a("div",K,[a("h3",L,[t(n,{to:"#字段校验"},{default:l(()=>[s("#")]),_:1}),s("字段校验")]),M,t(e,null,{default:l(()=>[O]),_:1})]),R,a("div",U,[a("h3",W,[t(n,{to:"#属性"},{default:l(()=>[s("#")]),_:1}),s("属性")]),X]),a("div",Y,[a("h3",ss,[t(n,{to:"#事件"},{default:l(()=>[s("#")]),_:1}),s("事件")]),as]),a("div",ts,[a("h3",ls,[t(n,{to:"#样式变量"},{default:l(()=>[s("#")]),_:1}),s("样式变量")]),ns])])}const is=o(h,[["render",es]]);export{is as default};
