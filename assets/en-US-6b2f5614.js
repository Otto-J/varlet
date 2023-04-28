import{_ as d,p as c,f as r,h,M as t,q as a,S as e,P as s,aq as o}from"./vue-router-9a21bb19.js";const p={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"Rate",-1),m={class:"card"},u={id:"Basic Usage"},g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"thumb-up"'),s(),t("span",{class:"hljs-attr"},"empty-icon"),s("="),t("span",{class:"hljs-string"},'"thumb-up-outline"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},v={id:"Customize the total rating"},f=t("p",null,[s("Set the total rating through the "),t("code",null,"count"),s(" attribute.")],-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},":count"),s("="),t("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},w={id:"Customize the score icon style"},k=t("p",null,[s("Set the icon style when selected and unselected through the "),t("code",null,"icon"),s(" and "),t("code",null,"empty-icon"),s(" properties. Set the selected and unselected colors through the "),t("code",null,"color"),s(" and "),t("code",null,"empty-color"),s(" properties.")],-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(`
    `),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(` 
    `),t("span",{class:"hljs-attr"},"empty-icon"),s("="),t("span",{class:"hljs-string"},'"heart-outline"'),s(` 
    `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"red"'),s(` 
    `),t("span",{class:"hljs-attr"},"empty-color"),s("="),t("span",{class:"hljs-string"},'"red"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},x={id:"Customize the score icon size and gap"},T=t("p",null,[s("Use the "),t("code",null,"size"),s(" property to set the size of the score icon. Set the interval between scores via the "),t("code",null,"gap"),s(" property.")],-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(),t("span",{class:"hljs-attr"},":gap"),s("="),t("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},E={id:"Allows half rating"},D=t("p",null,[s("The "),t("code",null,"half"),s(" attribute is used to set the rating to semi selective, and the "),t("code",null,"half-icon"),s(" attribute is used to set the style of semi selective.")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3.5"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"half"),s(),t("span",{class:"hljs-attr"},":count"),s("="),t("span",{class:"hljs-string"},'"8"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(`
    `),t("span",{class:"hljs-attr"},"half"),s(`
    `),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(`
    `),t("span",{class:"hljs-attr"},"half-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(`
    `),t("span",{class:"hljs-attr"},"empty-icon"),s("="),t("span",{class:"hljs-string"},'"heart-outline"'),s(`
    `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"red"'),s(`
    `),t("span",{class:"hljs-attr"},":count"),s("="),t("span",{class:"hljs-string"},'"8"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},I={id:"Disable and Readonly"},U=t("p",null,[s("The "),t("code",null,"disabled"),s(" property sets the score to the no-click state, and "),t("code",null,"disabled-color"),s(" sets the icon color when disabled. The score is set to read-only via the "),t("code",null,"readonly"),s(" property.")],-1),R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"disabled"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"readonly"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},N={id:"Listen Events"},P=t("p",null,[s("Other interaction logic is completed by calling the "),t("code",null,"change"),s(" event.")],-1),W=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"score"),s(") ")]),s(`{
  Snackbar({
    `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},[s("`click "),t("span",{class:"hljs-subst"},"${score}"),s("`")]),s(`,
    `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},q={id:"Validate"},O=t("p",null,[s("The values are validated by passing in an array of validators，If the validator returns "),t("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt.")],-1),H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v) => v >= 3 || 'It has to be greater than 2']"`),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M=t("h2",null,"API",-1),F={class:"card"},G={id:"props"},J=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>Whether or not rating is prohibited</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>#aaa</code></td></tr><tr><td><code>readonly</code></td><td>Whether to use rating read-only</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules，Returns <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),K={class:"card"},Q={id:"Events"},X=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Event"),t("th",null,"Description"),t("th",null,"Arguments")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"change")]),t("td",null,"Triggered when the rating changes"),t("td",null,[t("code",null,"value: string | number")])])])],-1),Y={class:"card"},Z={id:"Style Variables"},ss=o('<p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>',2);function ts(as,es,ls,ns,cs,os){const l=c("router-link"),n=c("var-site-code-example");return r(),h("div",i,[j,t("div",m,[t("h3",u,[a(l,{to:"#Basic Usage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),a(n,null,{default:e(()=>[g]),_:1})]),t("div",_,[t("h3",v,[a(l,{to:"#Customize the total rating"},{default:e(()=>[s("#")]),_:1}),s("Customize the total rating")]),f,a(n,null,{default:e(()=>[y]),_:1})]),t("div",b,[t("h3",w,[a(l,{to:"#Customize the score icon style"},{default:e(()=>[s("#")]),_:1}),s("Customize the score icon style")]),k,a(n,null,{default:e(()=>[z]),_:1})]),t("div",S,[t("h3",x,[a(l,{to:"#Customize the score icon size and gap"},{default:e(()=>[s("#")]),_:1}),s("Customize the score icon size and gap")]),T,a(n,null,{default:e(()=>[C]),_:1})]),t("div",V,[t("h3",E,[a(l,{to:"#Allows half rating"},{default:e(()=>[s("#")]),_:1}),s("Allows half rating")]),D,a(n,null,{default:e(()=>[A]),_:1})]),t("div",B,[t("h3",I,[a(l,{to:"#Disable and Readonly"},{default:e(()=>[s("#")]),_:1}),s("Disable and Readonly")]),U,a(n,null,{default:e(()=>[R]),_:1})]),t("div",$,[t("h3",N,[a(l,{to:"#Listen Events"},{default:e(()=>[s("#")]),_:1}),s("Listen Events")]),P,a(n,null,{default:e(()=>[W]),_:1})]),t("div",L,[t("h3",q,[a(l,{to:"#Validate"},{default:e(()=>[s("#")]),_:1}),s("Validate")]),O,a(n,null,{default:e(()=>[H]),_:1})]),M,t("div",F,[t("h3",G,[a(l,{to:"#props"},{default:e(()=>[s("#")]),_:1}),s("props")]),J]),t("div",K,[t("h3",Q,[a(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),X]),t("div",Y,[t("h3",Z,[a(l,{to:"#Style Variables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),ss])])}const rs=d(p,[["render",ts]]);export{rs as default};
