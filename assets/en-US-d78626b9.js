import{_ as o,p as c,f as r,h as i,M as s,q as l,S as t,P as a,aq as p}from"./vue-router-d6817537.js";const h={components:{}},d={class:"varlet-site-doc"},u=s("h1",null,"Style Provider",-1),j={class:"card"},m={id:"Intro"},_=s("p",null,[a("Component libraries organize styles through "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables"),a(". Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.")],-1),b={class:"card"},g={id:"Basic style variable"},y=s("p",null,"Here are some basic style variables for the component library",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-pseudo"},":root"),a(` {
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-xs: "),s("span",{class:"hljs-number"},"10px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-sm: "),s("span",{class:"hljs-number"},"12px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-md: "),s("span",{class:"hljs-number"},"14px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-lg: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-xs: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-sm: "),s("span",{class:"hljs-number"},"18px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-md: "),s("span",{class:"hljs-number"},"20px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-lg: "),s("span",{class:"hljs-number"},"22px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-"),s("span",{class:"hljs-selector-tag"},"body"),a(": "),s("span",{class:"hljs-number"},"#fff"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text: "),s("span",{class:"hljs-number"},"#333"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-primary: "),s("span",{class:"hljs-number"},"#3a7afe"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-info: "),s("span",{class:"hljs-number"},"#00afef"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-success: "),s("span",{class:"hljs-number"},"#00c48f"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-warning: "),s("span",{class:"hljs-number"},"#ff9f00"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-danger: "),s("span",{class:"hljs-number"},"#f44336"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-disabled: "),s("span",{class:"hljs-number"},"#e0e0e0"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text-disabled: "),s("span",{class:"hljs-number"},"#aaa"),a(`;
  --cubic-bezier: `),s("span",{class:"hljs-built_in"},"cubic-bezier"),a("("),s("span",{class:"hljs-number"},"0.25"),a(", "),s("span",{class:"hljs-number"},"0.8"),a(", "),s("span",{class:"hljs-number"},"0.5"),a(", "),s("span",{class:"hljs-number"},"1"),a(`);
}
`)])],-1),f={class:"card"},S={id:"Modify styles at runtime"},k=s("p",null,[a("Maybe you have a need to replace the style while the program is runtime，like a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides' "),s("code",null,"component call"),a(" and "),s("code",null,"function call"),a(" and two invocation modes.")],-1),w={class:"card"},x={id:"Component Call"},C=s("p",null,[a("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),a(" will not work.")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref, reactive } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` state = reactive({
  `),s("span",{class:"hljs-attr"},"score"),a(": "),s("span",{class:"hljs-number"},"5"),a(`,
  `),s("span",{class:"hljs-attr"},"license"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
})

`),s("span",{class:"hljs-keyword"},"const"),a(` successTheme = {
  `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--button-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
}

`),s("span",{class:"hljs-keyword"},"const"),a(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),a(` : successTheme
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-style-provider"),a(),s("span",{class:"hljs-attr"},":style-vars"),a("="),s("span",{class:"hljs-string"},'"styleVars"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-rate"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.score"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-switch"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.license"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
      `),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),a(` 
      `),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(`
      `),s("span",{class:"hljs-attr"},"block"),a(`
      @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(`
    >`)]),a(`
      Toggle Theme
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-style-provider"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),P={class:"card"},z={id:"Function Call"},V=s("p",null,[a("A functional call is to update variables directly on "),s("code",null,":root"),a(", which is suitable for situations where a global update style is required.")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` darkTheme = {
  `),s("span",{class:"hljs-string"},"'--color-primary'"),a(": "),s("span",{class:"hljs-string"},"'#3f51b5'"),a(`
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleRootTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),a(` : darkTheme
  StyleProvider(rootStyleVars)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),a(">")]),a("Toggle Root Theme"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),N=s("h2",null,"API",-1),M={class:"card"},I={id:"Props"},R=p("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1),$={class:"card"},q={id:"Slots"},D=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Component content"),s("td",null,[s("code",null,"-")])])])],-1);function F(U,A,E,H,O,W){const n=c("router-link"),e=c("var-site-code-example");return r(),i("div",d,[u,s("div",j,[s("h3",m,[l(n,{to:"#Intro"},{default:t(()=>[a("#")]),_:1}),a("Intro")]),_]),s("div",b,[s("h3",g,[l(n,{to:"#Basic style variable"},{default:t(()=>[a("#")]),_:1}),a("Basic style variable")]),y,l(e,{"playground-ignore":""},{default:t(()=>[v]),_:1})]),s("div",f,[s("h3",S,[l(n,{to:"#Modify styles at runtime"},{default:t(()=>[a("#")]),_:1}),a("Modify styles at runtime")]),k]),s("div",w,[s("h3",x,[l(n,{to:"#Component Call"},{default:t(()=>[a("#")]),_:1}),a("Component Call")]),C,l(e,null,{default:t(()=>[T]),_:1})]),s("div",P,[s("h3",z,[l(n,{to:"#Function Call"},{default:t(()=>[a("#")]),_:1}),a("Function Call")]),V,l(e,null,{default:t(()=>[B]),_:1})]),N,s("div",M,[s("h3",I,[l(n,{to:"#Props"},{default:t(()=>[a("#")]),_:1}),a("Props")]),R]),s("div",$,[s("h3",q,[l(n,{to:"#Slots"},{default:t(()=>[a("#")]),_:1}),a("Slots")]),D])])}const J=o(h,[["render",F]]);export{J as default};
