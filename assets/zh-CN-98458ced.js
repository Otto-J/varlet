import{_ as p,b as c,e as o,m as h,p as a,q as t,w as l,Q as s,Z as d}from"./index-c3accdc5.js";const i={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"文本省略",-1),_={class:"card"},m={id:"介绍"},g=a("p",null,"主要用于省略单行文字和多行文字。",-1),u={class:"card"},v={id:"单行省略"},f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},y={id:"多行省略"},b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(),a("span",{class:"hljs-attr"},":line-clamp"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w={id:"双向绑定"},T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" expand = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"expand = !expand"'),s(">")]),s("切换"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(),a("span",{class:"hljs-attr"},"v-model:expand"),s("="),a("span",{class:"hljs-string"},'"expand"'),s(">")]),s(`
      其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},V={id:"点击文字展开"},$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(` 
    `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(` 
    `),a("span",{class:"hljs-attr"},"expand-trigger"),s("="),a("span",{class:"hljs-string"},'"click"'),s(` 
    `),a("span",{class:"hljs-attr"},":line-clamp"),s("="),a("span",{class:"hljs-string"},'"3"'),s(` 
    `),a("span",{class:"hljs-attr"},":tooltip"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
  >`)]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},C={id:"自定义 Tooltip"},z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(),a("span",{class:"hljs-attr"},":tooltip"),s("="),a("span",{class:"hljs-string"},`"{ type: 'primary', sameWidth: false }"`),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"tooltip-content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P=a("h2",null,"API",-1),W={class:"card"},q={id:"属性"},A=d('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:expand</code></td><td>是否展开</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>expand-trigger</code></td><td>展开触发方式，可选值 <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>line-clamp</code></td><td>最大显示行数，兼容性见 <a href="https://caniuse.com/?search=line-clamp">line-clamp</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip 组件配置，用于深度定制。为了更方便使用，<code>sameWidth</code> 在这里默认为 <code>true</code></td><td><em>boolean | TooltipProps</em></td><td><code>true</code></td></tr></tbody></table>',1),E={class:"card"},I={id:"插槽"},Q=d("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>文字内容</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip 的内容</td><td><code>-</code></td></tr></tbody></table>",1);function S(Z,D,F,G,H,J){const n=c("router-link"),e=c("var-site-code-example");return o(),h("div",r,[j,a("div",_,[a("h3",m,[t(n,{to:"#介绍"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),g]),a("div",u,[a("h3",v,[t(n,{to:"#单行省略"},{default:l(()=>[s("#")]),_:1}),s("单行省略")]),t(e,null,{default:l(()=>[f]),_:1})]),a("div",x,[a("h3",y,[t(n,{to:"#多行省略"},{default:l(()=>[s("#")]),_:1}),s("多行省略")]),t(e,null,{default:l(()=>[b]),_:1})]),a("div",k,[a("h3",w,[t(n,{to:"#双向绑定"},{default:l(()=>[s("#")]),_:1}),s("双向绑定")]),t(e,null,{default:l(()=>[T]),_:1})]),a("div",N,[a("h3",V,[t(n,{to:"#点击文字展开"},{default:l(()=>[s("#")]),_:1}),s("点击文字展开")]),t(e,null,{default:l(()=>[$]),_:1})]),a("div",B,[a("h3",C,[t(n,{to:"#自定义 Tooltip"},{default:l(()=>[s("#")]),_:1}),s("自定义 Tooltip")]),t(e,null,{default:l(()=>[z]),_:1})]),P,a("div",W,[a("h3",q,[t(n,{to:"#属性"},{default:l(()=>[s("#")]),_:1}),s("属性")]),A]),a("div",E,[a("h3",I,[t(n,{to:"#插槽"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),Q])])}const L=p(i,[["render",S]]);export{L as default};
