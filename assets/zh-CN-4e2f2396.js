import{_ as o,b as d,e as h,m as p,p as t,q as a,w as l,Q as s,Z as e}from"./index-95102025.js";const r={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"粘性布局",-1),_={class:"card"},m={id:"介绍"},u=t("p",null,[s("粘性布局默认使用监听容器滚动事件的 "),t("code",null,"scroll"),s(" 模式，如有需要可以切换成基于 "),t("code",null,"css sticky"),s(" 的模式来提升性能。")],-1),b={class:"card"},g={id:"基本使用"},v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-sticky"),s(),t("span",{class:"hljs-attr"},":offset-top"),s("="),t("span",{class:"hljs-string"},'"54"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),t("span",{class:"hljs-attribute"},"min-height"),s(": "),t("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"局部吸顶"},k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example-scroller"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s("局部吸顶"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example-block"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),t("span",{class:"hljs-attribute"},"min-height"),s(": "),t("span",{class:"hljs-number"},"200vh"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".sticky-example-scroller"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"200px"),s(`;
  `),t("span",{class:"hljs-attribute"},"overflow"),s(`: auto;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#2979ff"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".sticky-example-block"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"100%"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"600px"),s(`;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#2979ff"),s(`;
  `),t("span",{class:"hljs-attribute"},"opacity"),s(": ."),t("span",{class:"hljs-number"},"5"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x=t("h2",null,"API",-1),N={class:"card"},w={id:"属性"},V=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>吸顶距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>吸顶时的层级</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>开启原生 <code>css sticky</code> 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>禁用吸顶, 设置为 <code>true</code> 时, 元素会回到文档流中</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),$={class:"card"},z={id:"方法"},B=e("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>触发粘性布局重绘</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table>",1),C={class:"card"},P={id:"事件"},T=e("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>当滚动容器滚动时触发</td><td><code>offsetTop: number</code> 距离顶部的 px 值 <br> <code>isFixed: boolean</code> 是否吸顶</td></tr></tbody></table>",1),q={class:"card"},A={id:"插槽"},E=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"插槽名"),t("th",null,"说明"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"粘性布局的内容"),t("td",null,[t("code",null,"-")])])])],-1);function F(I,Q,S,Z,D,G){const n=d("router-link"),c=d("var-site-code-example");return h(),p("div",i,[j,t("div",_,[t("h3",m,[a(n,{to:"#介绍"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),u]),t("div",b,[t("h3",g,[a(n,{to:"#基本使用"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),a(c,null,{default:l(()=>[v]),_:1})]),t("div",f,[t("h3",y,[a(n,{to:"#局部吸顶"},{default:l(()=>[s("#")]),_:1}),s("局部吸顶")]),a(c,null,{default:l(()=>[k]),_:1})]),x,t("div",N,[t("h3",w,[a(n,{to:"#属性"},{default:l(()=>[s("#")]),_:1}),s("属性")]),V]),t("div",$,[t("h3",z,[a(n,{to:"#方法"},{default:l(()=>[s("#")]),_:1}),s("方法")]),B]),t("div",C,[t("h3",P,[a(n,{to:"#事件"},{default:l(()=>[s("#")]),_:1}),s("事件")]),T]),t("div",q,[t("h3",A,[a(n,{to:"#插槽"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),E])])}const J=o(r,[["render",F]]);export{J as default};
