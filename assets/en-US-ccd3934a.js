import{_ as o,b as n,e as r,m as h,p as t,q as e,w as a,Q as s,Z as d}from"./index-95102025.js";const i={components:{}},p={class:"varlet-site-doc"},j=t("h1",null,"Cell",-1),m={class:"card"},_={id:"Intro"},g=t("p",null,"The cell is a single display item in the list.",-1),u={class:"card"},f={id:"Basic Usage"},v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("This is Cell"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},x={id:"Show Icon"},S=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"This is Cell"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},w={id:"Show Description"},k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"This is Cell"'),s(),t("span",{class:"hljs-attr"},"description"),s("="),t("span",{class:"hljs-string"},'"description"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},C={id:"Show Border"},D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"border"),s(">")]),s("This is Cell"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},T={id:"Use As List Item"},V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),N=t("h2",null,"API",-1),E={class:"card"},U={id:"Props"},P=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>Description</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border-offset</code></td><td>Border offset</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon-class</code></td><td>Icon className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>Title className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description-class</code></td><td>Description className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>Extra className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable the water wave effect</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),z={class:"card"},A={id:"Events"},$=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Event"),t("th",null,"Description"),t("th",null,"Arguments")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"click")]),t("td",null,"Triggered when the cell is clicked."),t("td",null,[t("code",null,"event: Event")])])])],-1),L={class:"card"},W={id:"Slots"},q=d("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of cell</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon of cell</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>Description of cell</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra of cell</td><td><code>-</code></td></tr></tbody></table>",1),H={class:"card"},Q={id:"Style Variables"},R=d('<p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--cell-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-description-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table>',2);function Z(F,G,J,K,M,O){const l=n("router-link"),c=n("var-site-code-example");return r(),h("div",p,[j,t("div",m,[t("h3",_,[e(l,{to:"#Intro"},{default:a(()=>[s("#")]),_:1}),s("Intro")]),g]),t("div",u,[t("h3",f,[e(l,{to:"#Basic Usage"},{default:a(()=>[s("#")]),_:1}),s("Basic Usage")]),e(c,null,{default:a(()=>[v]),_:1})]),t("div",b,[t("h3",x,[e(l,{to:"#Show Icon"},{default:a(()=>[s("#")]),_:1}),s("Show Icon")]),e(c,null,{default:a(()=>[S]),_:1})]),t("div",y,[t("h3",w,[e(l,{to:"#Show Description"},{default:a(()=>[s("#")]),_:1}),s("Show Description")]),e(c,null,{default:a(()=>[k]),_:1})]),t("div",I,[t("h3",C,[e(l,{to:"#Show Border"},{default:a(()=>[s("#")]),_:1}),s("Show Border")]),e(c,null,{default:a(()=>[D]),_:1})]),t("div",B,[t("h3",T,[e(l,{to:"#Use As List Item"},{default:a(()=>[s("#")]),_:1}),s("Use As List Item")]),e(c,null,{default:a(()=>[V]),_:1})]),N,t("div",E,[t("h3",U,[e(l,{to:"#Props"},{default:a(()=>[s("#")]),_:1}),s("Props")]),P]),t("div",z,[t("h3",A,[e(l,{to:"#Events"},{default:a(()=>[s("#")]),_:1}),s("Events")]),$]),t("div",L,[t("h3",W,[e(l,{to:"#Slots"},{default:a(()=>[s("#")]),_:1}),s("Slots")]),q]),t("div",H,[t("h3",Q,[e(l,{to:"#Style Variables"},{default:a(()=>[s("#")]),_:1}),s("Style Variables")]),R])])}const Y=o(i,[["render",Z]]);export{Y as default};
