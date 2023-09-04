import{_ as a,b as s,e as n,l as h,m as t,p as o,w as c,P as d,Z as r}from"./index-c1c53a77.js";const l={components:{}},i={class:"varlet-site-doc"},_=t("h2",null,"API",-1),m={class:"card"},u={id:"属性"},b=r("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>选中状态的值</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>未选中状态的值</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>选中状态的颜色</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>未选中状态的颜色</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>图标尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indeterminate</code></td><td>是否为不确定状态（样式优先级最高）</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),y={class:"card"},f={id:"事件"},p=r("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击时触发</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>状态变更时触发</td><td><code>value: any</code></td></tr></tbody></table>",1),v={class:"card"},k={id:"插槽"},x=r("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>选中图标</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>未选中图标</td><td><code>-</code></td></tr><tr><td><code>indeterminate-icon</code></td><td>不确定状态图标</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>显示的文本</td><td><code>-</code></td></tr></tbody></table>",1);function N(g,V,$,B,C,w){const e=s("router-link");return n(),h("div",i,[_,t("div",m,[t("h3",u,[o(e,{to:"#属性"},{default:c(()=>[d("#")]),_:1}),d("属性")]),b]),t("div",y,[t("h3",f,[o(e,{to:"#事件"},{default:c(()=>[d("#")]),_:1}),d("事件")]),p]),t("div",v,[t("h3",k,[o(e,{to:"#插槽"},{default:c(()=>[d("#")]),_:1}),d("插槽")]),x])])}const A=a(l,[["render",N]]);export{A as default};
