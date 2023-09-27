import{_ as r,b as d,e as o,m as h,p as t,q as a,w as n,Q as s,Z as e}from"./index-bdd60bb5.js";const p={components:{}},j={class:"varlet-site-doc"},i=t("h1",null,"多列选择器",-1),u={class:"card"},m={id:"介绍"},g=t("p",null,"提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。",-1),_={class:"card"},k={id:"注意"},v=t("p",null,[s("为了使 api 更加友好，该组件重构于 "),t("code",null,"2.17.0"),s("，但引入了破坏性变更，老版本文档请 "),t("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-ui/src/picker/docs/zh-CN.md"},"查看这里"),s("。")],-1),x=t("h2",null,"函数调用",-1),b={class:"card"},f={id:"单列选择"},y=t("p",null,[s("函数会返回用户选择的信息和用户最后的动作 "),t("code",null,"state"),s("。 "),t("code",null,"state"),s(" 可能是 "),t("code",null,"confirm"),s(", "),t("code",null,"cancel"),s(", "),t("code",null,"close"),s("。")],-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ]
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("单列选择"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},S={id:"多列选择"},P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ],
       [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ],
       [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ]
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("多列选择"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},$={id:"级联选择"},O=t("p",null,[s("设置 "),t("code",null,"cascade"),s(" 属性开启级联滚动。")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),t("span",{class:"hljs-attr"},"cascade"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'四川省'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'成都市'"),s(`,
            `),t("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'温江区'"),s(`,
              },
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'青羊区'"),s(`,
              },
            ],
          },
        ],
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'江苏省'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'无锡市'"),s(`,
            `),t("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'新吴区'"),s(`,
              },
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'滨湖区'"),s(`,
              },
            ],
          },
        ],
      },
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("级联选择"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},E={id:"地区选择"},N=t("p",null,"组件库提供了中国省市区的级联数据，可以直接使用。",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" columns "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),t("span",{class:"hljs-attr"},"cascade"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("地区选择"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},T={id:"值映射"},K=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
      ],
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
      ],
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
      ],
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("值映射"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q=t("h2",null,"组件调用",-1),H={class:"card"},I={id:"单列选择"},Q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }     
  ]
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z={class:"card"},F={id:"多列选择"},G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ]
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J={class:"card"},L={id:"级联选择"},M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  {
    `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'四川省'"),s(`,
    `),t("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'成都市'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'温江区'"),s(`,
          },
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'青羊区'"),s(`,
          },
        ],
      },
    ],
  },
  {
    `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'江苏省'"),s(`,
    `),t("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'无锡市'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'新吴区'"),s(`,
          },
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'滨湖区'"),s(`,
          },
        ],
      },
    ],
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},"cascade"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R={class:"card"},U={id:"地区选择"},W=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" area "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},"cascade"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X={class:"card"},Y={id:"值的映射"},ss=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
  ],
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ts={class:"card"},as={id:"双向绑定"},ns=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" values = ref(["),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-string"},"'C'"),s(`])
`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ]
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"resetValues"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  values.value = [`),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-string"},"'C'"),s(`]
}

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"resetValues"'),s(">")]),s("values: {{ values }} 点击重置"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"values"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ls=t("h2",null,"API",-1),cs={class:"card"},es={id:"属性"},ds=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>text-key</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>选项的高度(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),rs={class:"card"},os={id:"Picker Options"},hs=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>textKey</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>选项的高度</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>弹出层开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>弹出层开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>弹出层关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭弹出层动画结束时回调</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>选择内容变化时回调</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>点击确认按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>点击取消按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1),ps={class:"card"},js={id:"PickerColumnOption"},is=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>文本</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>子列表</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>文本附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),us={class:"card"},ms={id:"方法"},gs=e("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>立刻停止滚动并触发 confirm 事件</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>立刻停止滚动并触发 cancel 事件</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),_s={class:"card"},ks={id:"事件"},vs=e("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选择内容变化时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>cancel</code></td><td>点击取消按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>confirm</code></td><td>点击确认按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr></tbody></table>",1),xs={class:"card"},bs={id:"插槽"},fs=e("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题内容</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>取消按钮内容</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认按钮内容</td><td><code>-</code></td></tr></tbody></table>",1),ys={class:"card"},ws={id:"样式变量"},Cs=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function Ss(Ps,Bs,$s,Os,As,Ds){const l=d("router-link"),c=d("var-site-code-example");return o(),h("div",j,[i,t("div",u,[t("h3",m,[a(l,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),g]),t("div",_,[t("h3",k,[a(l,{to:"#注意"},{default:n(()=>[s("#")]),_:1}),s("注意")]),v]),x,t("div",b,[t("h3",f,[a(l,{to:"#单列选择"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),y,a(c,null,{default:n(()=>[w]),_:1})]),t("div",C,[t("h3",S,[a(l,{to:"#多列选择"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),a(c,null,{default:n(()=>[P]),_:1})]),t("div",B,[t("h3",$,[a(l,{to:"#级联选择"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),O,a(c,null,{default:n(()=>[A]),_:1})]),t("div",D,[t("h3",E,[a(l,{to:"#地区选择"},{default:n(()=>[s("#")]),_:1}),s("地区选择")]),N,a(c,null,{default:n(()=>[z]),_:1})]),t("div",V,[t("h3",T,[a(l,{to:"#值映射"},{default:n(()=>[s("#")]),_:1}),s("值映射")]),a(c,null,{default:n(()=>[K]),_:1})]),q,t("div",H,[t("h3",I,[a(l,{to:"#单列选择"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),a(c,null,{default:n(()=>[Q]),_:1})]),t("div",Z,[t("h3",F,[a(l,{to:"#多列选择"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),a(c,null,{default:n(()=>[G]),_:1})]),t("div",J,[t("h3",L,[a(l,{to:"#级联选择"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),a(c,null,{default:n(()=>[M]),_:1})]),t("div",R,[t("h3",U,[a(l,{to:"#地区选择"},{default:n(()=>[s("#")]),_:1}),s("地区选择")]),a(c,null,{default:n(()=>[W]),_:1})]),t("div",X,[t("h3",Y,[a(l,{to:"#值的映射"},{default:n(()=>[s("#")]),_:1}),s("值的映射")]),a(c,null,{default:n(()=>[ss]),_:1})]),t("div",ts,[t("h3",as,[a(l,{to:"#双向绑定"},{default:n(()=>[s("#")]),_:1}),s("双向绑定")]),a(c,null,{default:n(()=>[ns]),_:1})]),ls,t("div",cs,[t("h3",es,[a(l,{to:"#属性"},{default:n(()=>[s("#")]),_:1}),s("属性")]),ds]),t("div",rs,[t("h3",os,[a(l,{to:"#Picker Options"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),hs]),t("div",ps,[t("h3",js,[a(l,{to:"#PickerColumnOption"},{default:n(()=>[s("#")]),_:1}),s("PickerColumnOption")]),is]),t("div",us,[t("h3",ms,[a(l,{to:"#方法"},{default:n(()=>[s("#")]),_:1}),s("方法")]),gs]),t("div",_s,[t("h3",ks,[a(l,{to:"#事件"},{default:n(()=>[s("#")]),_:1}),s("事件")]),vs]),t("div",xs,[t("h3",bs,[a(l,{to:"#插槽"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),fs]),t("div",ys,[t("h3",ws,[a(l,{to:"#样式变量"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),Cs])])}const Ns=r(p,[["render",Ss]]);export{Ns as default};
