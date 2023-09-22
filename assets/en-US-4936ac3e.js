import{_ as o,b as c,e as p,m as i,p as a,q as t,w as l,Q as s,Z as r}from"./index-95102025.js";const h={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"Ripple Directive",-1),u={class:"card"},b={id:"Intro"},m=a("p",null,"Causes the element to generate a ripple spread effect when clicked.",-1),_={class:"card"},g={id:"Basic Use"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),s(),a("span",{class:"hljs-attr"},"v-ripple"),s(">")]),s("click"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".ripple-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  user-select: none;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#888"),s(`;
  -webkit-tap-highlight-`),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(`);
  `),a("span",{class:"hljs-attribute"},"transition"),s(": background-color "),a("span",{class:"hljs-number"},"0.25s"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"Custom Color"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),s(),a("span",{class:"hljs-attr"},"v-ripple"),s("="),a("span",{class:"hljs-string"},`"{ color: '#2979ff' }"`),s(">")]),s(`
    click
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".ripple-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  user-select: none;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#888"),s(`;
  -webkit-tap-highlight-`),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(`);
  `),a("span",{class:"hljs-attribute"},"transition"),s(": background-color "),a("span",{class:"hljs-number"},"0.25s"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x={class:"card"},S={id:"Disabled Status"},C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),s(),a("span",{class:"hljs-attr"},"v-ripple"),s("="),a("span",{class:"hljs-string"},'"{ disabled: true }"'),s(">")]),s(`
    click
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".ripple-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#888"),s(`;
  user-select: none;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  -webkit-tap-highlight-`),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(`);
  `),a("span",{class:"hljs-attribute"},"transition"),s(": background-color "),a("span",{class:"hljs-number"},"0.25s"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),V=a("h2",null,"API",-1),D={class:"card"},w={id:"Options"},B=r("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Ripple color</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),U={class:"card"},I={id:"Style Variables"},N=r('<p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--ripple-cubic-bezier</code></td><td><code>cubic-bezier(0.68, 0.01, 0.62, 0.6)</code></td></tr><tr><td><code>--ripple-color</code></td><td><code>currentColor</code></td></tr></tbody></table>',2);function O($,z,P,R,T,q){const e=c("router-link"),n=c("var-site-code-example");return p(),i("div",d,[j,a("div",u,[a("h3",b,[t(e,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),m]),a("div",_,[a("h3",g,[t(e,{to:"#Basic Use"},{default:l(()=>[s("#")]),_:1}),s("Basic Use")]),t(n,null,{default:l(()=>[v]),_:1})]),a("div",f,[a("h3",y,[t(e,{to:"#Custom Color"},{default:l(()=>[s("#")]),_:1}),s("Custom Color")]),t(n,null,{default:l(()=>[k]),_:1})]),a("div",x,[a("h3",S,[t(e,{to:"#Disabled Status"},{default:l(()=>[s("#")]),_:1}),s("Disabled Status")]),t(n,null,{default:l(()=>[C]),_:1})]),V,a("div",D,[a("h3",w,[t(e,{to:"#Options"},{default:l(()=>[s("#")]),_:1}),s("Options")]),B]),a("div",U,[a("h3",I,[t(e,{to:"#Style Variables"},{default:l(()=>[s("#")]),_:1}),s("Style Variables")]),N])])}const E=o(h,[["render",O]]);export{E as default};
