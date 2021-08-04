(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[921],{921:(s,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>c});var t=l(7875),e={class:"varlet-site-doc"},n=(0,t.uE)('<h1>Slider 滑块</h1><div class="card"><h3>介绍</h3><p>用于在给定范围内取值。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Slider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Slider)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>)\n\n    <span class="hljs-keyword">return</span> {\n      value\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>指定步长</h3><p>通过<code>step</code>属性来设置步进增量。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>双滑块</h3><p>通过<code>range</code>属性开启双滑块模式，确保<code>value</code>的值是一个<strong>数组</strong>。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-number">24</span>, <span class="hljs-number">50</span>])\n\n    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(value)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      value\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>禁用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>只读</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>不同大小</h3><p>通过<code>track-height</code> 和 <code>thumb-size</code> 控制slider的大小。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">track-height</span>=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">thumb-size</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">range</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>自定义样式</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">label-color</span>=<span class="hljs-string">&quot;purple&quot;</span>\n  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#e0732c&quot;</span>\n  <span class="hljs-attr">track-color</span>=<span class="hljs-string">&quot;#3a68b4&quot;</span>\n  <span class="hljs-attr">thumb-color</span>=<span class="hljs-string">&quot;#e25241&quot;</span>\n  <span class="hljs-attr">label-text-color</span>=<span class="hljs-string">&quot;#ededed&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>自定义按钮</h3><p>使用插槽自定义按钮时，<code>label-visible</code>、<code>label-text-color</code>、<code>thumb-size</code>等属性均无效。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#52af77&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>=<span class="hljs-string">&quot;currentValue&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slider-example_block&quot;</span>&gt;</span>{{ currentValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-slider</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-selector-class">.slider-example_block</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">24px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#52af77</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#52af77</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">24px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> -<span class="hljs-number">12px</span>;\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">align-items</span>: center;\n  <span class="hljs-attribute">justify-content</span>: center;\n  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">#ebebeb</span> <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">2px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;\n}\n</code></pre></div><div class="card"><h3>显示标签</h3><p>通过 <code>label-visible</code> 属性控制标签的显示。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label-visible</span>=<span class="hljs-string">&quot;never&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">label-visible</span>=<span class="hljs-string">&quot;always&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>值的校验</h3><p>通过<code>rules</code>属性对值进行校验。</p><p><span style="font-size:12px;"><code>rules</code>是一个可以接受 <code>function</code>、<code>boolean</code> 和 <code>string</code> 的数组。 函数传递输入值作为参数，必须返回 <code>true</code> / <code>false</code> 或包含错误消息的 <code>string</code> ， 如果函数返回 (或数组包含的任何值) <code>false</code>或<code>string</code>，输入字段将输入错误状态。</span></p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v &gt; 35 || &#39;error message&#39;]&quot;</span> /&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前进度值</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>步长，取值为<code>1 ~ 100</code>间的整数</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>是否启用双滑块</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-visible</code></td><td>是否显示标签，可选值为<code>always, normal, never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>标签文字颜色</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>track-height</code></td><td>slider的高度</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>thumb-size</code></td><td>滑块的大小</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rules</code></td><td>校验规则</td><td><em>array</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>值改变时触发</td><td>value: 当前进度</td></tr><tr><td><code>start</code></td><td>开始拖动时触发</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>结束拖动时触发</td><td>value: 当前进度</td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>button</code></td><td>自定义滑动按钮</td><td><code>currentValue</code>: 当前进度</td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider 组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr></tbody></table></div>',18);var c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",e,[n])}}}}]);