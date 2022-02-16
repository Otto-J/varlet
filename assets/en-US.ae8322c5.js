import{B as h,Q as p,S as g,a as m,D as u}from"./Disabled.eb4b4ea1.js";import{_}from"./elevation.7485794b.js";import{e as o,o as j,c as v,a as t,i as e,j as l,m as s,U as f}from"./vendor.4723551d.js";import"./Pagination.073fa5ea.js";import"./index.abae40f3.js";import"./elements.6395be39.js";import"./shared.506a394a.js";import"./zIndex.5ac96ba7.js";import"./index.f37174b5.js";import"./components.40efc8e7.js";import"./index.991f7121.js";import"./index.3107e013.js";import"./index.23e8ece3.js";import"./index.fc9163fc.js";import"./provide.1c802451.js";import"./en-US.dcb2670f.js";import"./index.9b1139e6.js";import"./utils.75b0da7e.js";import"./index.db3d75c0.js";const b={components:{Basic:h,QuickJumper:p,SizeOption:g,ShowTotal:m,Disabled:u}},y={class:"varlet-site-doc"},w=t("h1",null,"Pagination",-1),z=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"You may need it when you need to process large amounts of data.")],-1),k={class:"card"},S=t("h3",null,"Install",-1),x=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Pagination } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Pagination)
`)])],-1),T=t("h2",null,"Simple Mode",-1),D=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"The default display mode is recommended for small-screen devices. See the mobile phone emulator on the right for a preview of the components.")],-1),C={class:"card"},U=t("h3",null,"Basic Usage",-1),$=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(" />")]),s(`
`)])],-1),B={class:"card"},P=t("h3",null,"Hide Size Changer",-1),q=t("p",null,[s("Use "),t("code",null,"show-size-changer"),s(" prop to hide size changer.")],-1),N=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":show-size-changer"),s("="),t("span",{class:"hljs-string"},'"false"'),s("/>")]),s(`
`)])],-1),V={class:"card"},I=t("h3",null,"Show Total",-1),E=t("p",null,[s("Use "),t("code",null,"showTatol"),s(" prop to show custom total text.")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"66"'),s(`
  `),t("span",{class:"hljs-attr"},":show-total"),s("="),t("span",{class:"hljs-string"},'"total => `Total ${total} items`"'),s(`
/>`)]),s(`
`)])],-1),W={class:"card"},H=t("h3",null,"Disabled",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"115"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`)])],-1),O=t("h2",null,"Basic Mode",-1),Q=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,[s("Set "),t("code",null,"simple"),s(" to "),t("code",null,"false"),s(" when you use medium and large screen devices.")])],-1),J={class:"card"},Y=t("h3",null,"Basic Usage",-1),F={class:"varlet-component-preview"},G=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},"current"),s("="),t("span",{class:"hljs-string"},'"6"'),s(),t("span",{class:"hljs-attr"},"total"),s("="),t("span",{class:"hljs-string"},'"115"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`)])],-1),K={class:"card"},L=t("h3",null,"Enable page number to jump quickly",-1),R=t("p",null,[s("Use "),t("code",null,"show-quick-jumper"),s(" prop to enable page number to jump quickly.")],-1),X={class:"varlet-component-preview"},Z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(`
  `),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(` 
  `),t("span",{class:"hljs-attr"},"show-quick-jumper"),s(`
/>`)]),s(`
`)])],-1),tt={class:"card"},st=t("h3",null,"Size Option",-1),et=t("p",null,[s("Use "),t("code",null,"show-size-changer"),s(" hide size changer and use "),t("code",null,"size-option"),s(" prop set the number of "),t("code",null,"size"),s(" that can be chosen.")],-1),at={class:"varlet-component-preview"},lt=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},":show-size-changer"),s("="),t("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},":size-option"),s("="),t("span",{class:"hljs-string"},'"[10, 20, 30, 40]"'),s(" />")]),s(`
`)])],-1),ot={class:"card"},nt=t("h3",null,"Show Total",-1),dt={class:"varlet-component-preview"},ct=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"10"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(`
  `),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
  `),t("span",{class:"hljs-attr"},":show-total"),s("="),t("span",{class:"hljs-string"},'"total => `Total ${total} items`"'),s(`
/>`)]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"10"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(`
  `),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
  `),t("span",{class:"hljs-attr"},":show-total"),s("="),t("span",{class:"hljs-string"},'"(total, range) => `Total ${total}, current ${range[0]}-${range[1]}`"'),s(`
/>`)]),s(`
`)])],-1),rt={class:"card"},it=t("h3",null,"Disabled",-1),ht={class:"varlet-component-preview"},pt=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"6"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`)])],-1),gt=f('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model: current</code></td><td>Current page number</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>v-model: size</code></td><td>Number of data items per page</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>total</code></td><td>Total number of data items</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>simple</code></td><td>Whether to use simple mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Disable pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>show-size-changer</code></td><td>Whether to show <code>size</code> select</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>show-quick-jumper</code></td><td>Whether you can jump to pages directly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max-pager-count</code></td><td>Number of buttons displayed between ellipses</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>size-option</code></td><td>Specify the sizeChanger options</td><td><em>number[]</em></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td><code>show-total</code></td><td>Show page item\u2019s title</td><td><em>function(total, range)</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Callback after <code>current</code> or <code>size</code> changes</td><td><code>current: number</code> <br><code>size: number</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prev</code></td><td>Content of previous button</td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Content of next button</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pagination-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--pagination-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-active-bg-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-hover-bg-color</code></td><td><code>#edf5ff</code></td></tr><tr><td><code>--pagination-total-margin</code></td><td><code>0 12px</code></td></tr><tr><td><code>--pagination-total-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--pagination-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-margin</code></td><td><code>0 6px</code></td></tr><tr><td><code>--pagination-item-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--pagination-list-bg-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-list-active-bg-color</code></td><td><code>#edf5ff</code></td></tr><tr><td><code>--pagination-list-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-input-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-simple-padding</code></td><td><code>0 0 2px 0</code></td></tr><tr><td><code>--pagination-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--pagination-bg-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--pagination-size-line-height</code></td><td><code>24px</code></td></tr></tbody></table></div>',5);function mt(ut,_t,jt,vt,ft,bt){const a=o("var-site-code-example"),n=o("basic"),d=o("quick-jumper"),c=o("size-option"),r=o("show-total"),i=o("disabled");return j(),v("div",y,[w,z,t("div",k,[S,e(a,null,{default:l(()=>[x]),_:1})]),T,D,t("div",C,[U,e(a,null,{default:l(()=>[$]),_:1})]),t("div",B,[P,q,e(a,null,{default:l(()=>[N]),_:1})]),t("div",V,[I,E,e(a,null,{default:l(()=>[A]),_:1})]),t("div",W,[H,e(a,null,{default:l(()=>[M]),_:1})]),O,Q,t("div",J,[Y,t("div",F,[e(n)]),e(a,null,{default:l(()=>[G]),_:1})]),t("div",K,[L,R,t("div",X,[e(d)]),e(a,null,{default:l(()=>[Z]),_:1})]),t("div",tt,[st,et,t("div",at,[e(c)]),e(a,null,{default:l(()=>[lt]),_:1})]),t("div",ot,[nt,t("div",dt,[e(r)]),e(a,null,{default:l(()=>[ct]),_:1})]),t("div",rt,[it,t("div",ht,[e(i)]),e(a,null,{default:l(()=>[pt]),_:1})]),gt])}var Wt=_(b,[["render",mt]]);export{Wt as default};
