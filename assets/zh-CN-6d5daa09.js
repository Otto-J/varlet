import{_ as o,b as c,e as h,m as p,p as t,q as a,w as l,Q as s,Z as d}from"./index-95102025.js";const i={components:{}},r={class:"varlet-site-doc"},_=t("h1",null,"文本省略",-1),j={class:"card"},m={id:"介绍"},g=t("p",null,"主要用于省略单行文字和多行文字。",-1),u={class:"card"},f={id:"单行省略"},v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-ellipsis"),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"max-width: 170px"'),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},b={id:"多行省略"},y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-ellipsis"),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"max-width: 170px"'),s(),t("span",{class:"hljs-attr"},":line-clamp"),s("="),t("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},k={id:"点击文字展开"},w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-ellipsis"),s(` 
    `),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"max-width: 170px"'),s(` 
    `),t("span",{class:"hljs-attr"},"expand-trigger"),s("="),t("span",{class:"hljs-string"},'"click"'),s(` 
    `),t("span",{class:"hljs-attr"},":line-clamp"),s("="),t("span",{class:"hljs-string"},'"3"'),s(` 
    `),t("span",{class:"hljs-attr"},":tooltip"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
  >`)]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},V={id:"自定义 Tooltip"},$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-ellipsis"),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"max-width: 170px"'),s(),t("span",{class:"hljs-attr"},":tooltip"),s("="),t("span",{class:"hljs-string"},`"{ type: 'primary', sameWidth: false }"`),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"tooltip-content"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B=t("h2",null,"API",-1),C={class:"card"},P={id:"属性"},W=d('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>expand-trigger</code></td><td>展开触发方式，可选值 <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>line-clamp</code></td><td>最大显示行数，兼容性见 <a href="https://caniuse.com/?search=line-clamp">line-clamp</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip 组件配置，用于深度定制。为了更方便使用，<code>sameWidth</code> 在这里默认为 <code>true</code></td><td><em>boolean | TooltipProps</em></td><td><code>-</code></td></tr></tbody></table>',1),q={class:"card"},z={id:"插槽"},A=d("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>文字内容</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip 的内容</td><td><code>-</code></td></tr></tbody></table>",1);function E(I,Q,S,Z,D,F){const e=c("router-link"),n=c("var-site-code-example");return h(),p("div",r,[_,t("div",j,[t("h3",m,[a(e,{to:"#介绍"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),g]),t("div",u,[t("h3",f,[a(e,{to:"#单行省略"},{default:l(()=>[s("#")]),_:1}),s("单行省略")]),a(n,null,{default:l(()=>[v]),_:1})]),t("div",x,[t("h3",b,[a(e,{to:"#多行省略"},{default:l(()=>[s("#")]),_:1}),s("多行省略")]),a(n,null,{default:l(()=>[y]),_:1})]),t("div",T,[t("h3",k,[a(e,{to:"#点击文字展开"},{default:l(()=>[s("#")]),_:1}),s("点击文字展开")]),a(n,null,{default:l(()=>[w]),_:1})]),t("div",N,[t("h3",V,[a(e,{to:"#自定义 Tooltip"},{default:l(()=>[s("#")]),_:1}),s("自定义 Tooltip")]),a(n,null,{default:l(()=>[$]),_:1})]),B,t("div",C,[t("h3",P,[a(e,{to:"#属性"},{default:l(()=>[s("#")]),_:1}),s("属性")]),W]),t("div",q,[t("h3",z,[a(e,{to:"#插槽"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),A])])}const H=o(i,[["render",E]]);export{H as default};
