import{_ as d,b as c,e as r,m as h,p as a,q as t,w as e,Q as s,Z as o}from"./index-95102025.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Rate",-1),m={class:"card"},u={id:"Basic Usage"},g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up"'),s(),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up-outline"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},v={id:"Customize Total Rating"},f=a("p",null,[s("Set the total rating through the "),a("code",null,"count"),s(" attribute.")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},w={id:"Customize Score Icon Style"},k=a("p",null,[s("Set the icon style when selected and unselected through the "),a("code",null,"icon"),s(" and "),a("code",null,"empty-icon"),s(" properties. Set the selected and unselected colors through the "),a("code",null,"color"),s(" and "),a("code",null,"empty-color"),s(" properties.")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),C={class:"card"},T={id:"Customize Score Icon Size And Gap"},z=a("p",null,[s("Use the "),a("code",null,"size"),s(" property to set the size of the score icon. Set the interval between scores via the "),a("code",null,"gap"),s(" property.")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(),a("span",{class:"hljs-attr"},":gap"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},I={id:"Allows Half Rating"},R=a("p",null,[s("The "),a("code",null,"half"),s(" attribute is used to set the rating to semi selective, and the "),a("code",null,"half-icon"),s(" attribute is used to set the style of semi selective.")],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),B={class:"card"},E={id:"Disable And Readonly"},D=a("p",null,[s("The "),a("code",null,"disabled"),s(" property sets the score to the no-click state, and "),a("code",null,"disabled-color"),s(" sets the icon color when disabled. The score is set to read-only via the "),a("code",null,"readonly"),s(" property.")],-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"disabled"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"readonly"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},H={id:"Can Be Cleared"},N=a("p",null,[s("The "),a("code",null,"clearable"),s(" property Allows users to clear score.")],-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"half"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},L={id:"Listen Events"},P=a("p",null,[s("Other interaction logic is completed by calling the "),a("code",null,"change"),s(" event.")],-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),q={class:"card"},Q={id:"Validate"},Z=a("p",null,[s("The values are validated by passing in an array of validators，If the validator returns "),a("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt.")],-1),F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v >= 3 || 'It has to be greater than 2']"`),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J=a("h2",null,"API",-1),K={class:"card"},M={id:"props"},X=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>Whether or not rating is prohibited</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>#aaa</code></td></tr><tr><td><code>readonly</code></td><td>Whether to use rating read-only</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>whether to allow to clear</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules，Returns <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"Events"},as=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Event"),a("th",null,"Description"),a("th",null,"Arguments")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"change")]),a("td",null,"Triggered when the rating changes"),a("td",null,[a("code",null,"value: string | number")])])])],-1),ts={class:"card"},es={id:"Style Variables"},ls=o('<p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>',2);function ns(cs,os,ds,rs,hs,ps){const l=c("router-link"),n=c("var-site-code-example");return r(),h("div",i,[j,a("div",m,[a("h3",u,[t(l,{to:"#Basic Usage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),t(n,null,{default:e(()=>[g]),_:1})]),a("div",_,[a("h3",v,[t(l,{to:"#Customize Total Rating"},{default:e(()=>[s("#")]),_:1}),s("Customize Total Rating")]),f,t(n,null,{default:e(()=>[y]),_:1})]),a("div",b,[a("h3",w,[t(l,{to:"#Customize Score Icon Style"},{default:e(()=>[s("#")]),_:1}),s("Customize Score Icon Style")]),k,t(n,null,{default:e(()=>[S]),_:1})]),a("div",C,[a("h3",T,[t(l,{to:"#Customize Score Icon Size And Gap"},{default:e(()=>[s("#")]),_:1}),s("Customize Score Icon Size And Gap")]),z,t(n,null,{default:e(()=>[x]),_:1})]),a("div",A,[a("h3",I,[t(l,{to:"#Allows Half Rating"},{default:e(()=>[s("#")]),_:1}),s("Allows Half Rating")]),R,t(n,null,{default:e(()=>[V]),_:1})]),a("div",B,[a("h3",E,[t(l,{to:"#Disable And Readonly"},{default:e(()=>[s("#")]),_:1}),s("Disable And Readonly")]),D,t(n,null,{default:e(()=>[U]),_:1})]),a("div",$,[a("h3",H,[t(l,{to:"#Can Be Cleared"},{default:e(()=>[s("#")]),_:1}),s("Can Be Cleared")]),N,t(n,null,{default:e(()=>[W]),_:1})]),a("div",G,[a("h3",L,[t(l,{to:"#Listen Events"},{default:e(()=>[s("#")]),_:1}),s("Listen Events")]),P,t(n,null,{default:e(()=>[O]),_:1})]),a("div",q,[a("h3",Q,[t(l,{to:"#Validate"},{default:e(()=>[s("#")]),_:1}),s("Validate")]),Z,t(n,null,{default:e(()=>[F]),_:1})]),J,a("div",K,[a("h3",M,[t(l,{to:"#props"},{default:e(()=>[s("#")]),_:1}),s("props")]),X]),a("div",Y,[a("h3",ss,[t(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),as]),a("div",ts,[a("h3",es,[t(l,{to:"#Style Variables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),ls])])}const js=d(p,[["render",ns]]);export{js as default};
