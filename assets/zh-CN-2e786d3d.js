import{_ as r,b as d,e as o,m as h,p as a,q as t,w as n,Q as s,Z as c}from"./index-95102025.js";const p={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"多列选择器",-1),m={class:"card"},u={id:"介绍"},b=a("p",null,"提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。",-1),y=a("h2",null,"函数调用",-1),g={class:"card"},k={id:"单列选择"},_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)]

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("单列选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},w={id:"多列选择"},x=a("p",null,[s("Picker 传入一个二维数组 "),a("code",null,"columns"),s(", "),a("code",null,"columns"),s(" 的每一项就是每一列的内容。 Picker 返回用户触发状态，选择的文本，选择的下标。")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)
]

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("多列选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},P={id:"级联选择"},D=a("p",null,[s("Picker 传入一个 "),a("code",null,"cascade"),s(" 属性开启级联滚动。 组件库内置提供了省市区三级联动，引入 "),a("code",null,"area.json"),s("。")],-1),Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" columns "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("级联选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},I={id:"文本格式化"},A=a("p",null,[s("Picker 传入一个 "),a("code",null,"textFormatter"),s(" 属性可对文本进行自定义。 "),a("code",null,"textFormatter"),s(" 接受两个参数, 第一个参数 "),a("code",null,"text"),s(" 是当前文本, 第二个参数 "),a("code",null,"columnIndex"),s(" 是当前文本所在列的下标。 下面是年月日选择的案例。")],-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genCounts = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"length"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ length }, "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" months = genCounts("),a("span",{class:"hljs-number"},"12"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" leapYearFebruaryDates = genCounts("),a("span",{class:"hljs-number"},"29"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" februaryDates = genCounts("),a("span",{class:"hljs-number"},"28"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" oddMonthDates = genCounts("),a("span",{class:"hljs-number"},"31"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" evenMonthDates = genCounts("),a("span",{class:"hljs-number"},"30"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" columns = genColumns("),a("span",{class:"hljs-number"},"1970"),s(", "),a("span",{class:"hljs-number"},"2100"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isOddMonth"),s("("),a("span",{class:"hljs-params"},"month"),s(") ")]),s(`{ 
  `),a("span",{class:"hljs-keyword"},"return"),s(" ["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"12"),s(`].includes(month) 
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isLeapYear"),s("("),a("span",{class:"hljs-params"},"year"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" (year % "),a("span",{class:"hljs-number"},"4"),s(" === "),a("span",{class:"hljs-number"},"0"),s(" && year % "),a("span",{class:"hljs-number"},"100"),s(" !== "),a("span",{class:"hljs-number"},"0"),s(") || year % "),a("span",{class:"hljs-number"},"400"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genDates"),s("("),a("span",{class:"hljs-params"},"year, month"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` leapYearFebruaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(" (!isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` februaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(` (isOddMonth(month)) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` oddMonthDates
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` evenMonthDates
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genColumns"),s("("),a("span",{class:"hljs-params"},"startYear, endYear"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = []
  
  `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(` year = startYear; year < endYear; year++) {
    columns.push({
      `),a("span",{class:"hljs-attr"},"text"),s(`: year,
      `),a("span",{class:"hljs-attr"},"children"),s(": months.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"month"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(` {
          `),a("span",{class:"hljs-attr"},"text"),s(`: month,
          `),a("span",{class:"hljs-attr"},"children"),s(": genDates(year, month).map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"date"),s(" =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"text"),s(`: date }))
        }
      })
    })
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` columns
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"textFormatter"),s("("),a("span",{class:"hljs-params"},"text, columnIndex"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("年`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("月`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("日`")]),s(`
}

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    textFormatter,
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("文本格式化"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},N={id:"值映射"},z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ]
]
`),a("span",{class:"hljs-keyword"},"const"),s(" normalizedColumns = rawColumns.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"column"),s(") =>")]),s(" column.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"option"),s(" =>")]),s(` option.label))

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"_, [i1, i2, i3]"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` [c1, c2, c3] = rawColumns
  `),a("span",{class:"hljs-keyword"},"const"),s(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"columns"),s(`: normalizedColumns,
    `),a("span",{class:"hljs-attr"},"onChange"),s(`: handleChange
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("值的映射"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$=a("h2",null,"组件调用",-1),O={class:"card"},B={id:"单列选择"},S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},V={id:"多列选择"},q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},H={id:"级联选择"},K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},Z={id:"文本格式化"},G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genCounts = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"length"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ length }, "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" months = genCounts("),a("span",{class:"hljs-number"},"12"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" leapYearFebruaryDates = genCounts("),a("span",{class:"hljs-number"},"29"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" februaryDates = genCounts("),a("span",{class:"hljs-number"},"28"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" oddMonthDates = genCounts("),a("span",{class:"hljs-number"},"31"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" evenMonthDates = genCounts("),a("span",{class:"hljs-number"},"30"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(genColumns("),a("span",{class:"hljs-number"},"1970"),s(", "),a("span",{class:"hljs-number"},"2100"),s(`))

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isOddMonth"),s("("),a("span",{class:"hljs-params"},"month"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" ["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"12"),s(`].includes(month)
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isLeapYear"),s("("),a("span",{class:"hljs-params"},"year"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" (year % "),a("span",{class:"hljs-number"},"4"),s(" === "),a("span",{class:"hljs-number"},"0"),s(" && year % "),a("span",{class:"hljs-number"},"100"),s(" !== "),a("span",{class:"hljs-number"},"0"),s(") || year % "),a("span",{class:"hljs-number"},"400"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genDates"),s("("),a("span",{class:"hljs-params"},"year, month"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` leapYearFebruaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(" (!isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` februaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(` (isOddMonth(month)) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` oddMonthDates
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` evenMonthDates
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genColumns"),s("("),a("span",{class:"hljs-params"},"startYear, endYear"),s(") ")]),s(`{   
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = []

  `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(` year = startYear; year < endYear; year++) {
    columns.push({
      `),a("span",{class:"hljs-attr"},"text"),s(`: year,
      `),a("span",{class:"hljs-attr"},"children"),s(": months.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"month"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(` {
          `),a("span",{class:"hljs-attr"},"text"),s(`: month,
          `),a("span",{class:"hljs-attr"},"children"),s(": genDates(year, month).map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"date"),s(" =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"text"),s(`: date }))
        }
      })
    })
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` columns
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"textFormatter"),s("("),a("span",{class:"hljs-params"},"text, columnIndex"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("年`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("月`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("日`")]),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":text-formatter"),s("="),a("span",{class:"hljs-string"},'"textFormatter"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J={class:"card"},R={id:"值的映射"},U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ]
]
`),a("span",{class:"hljs-keyword"},"const"),s(" normalizedColumns = rawColumns.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"column"),s(" =>")]),s(" column.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"option"),s(" =>")]),s(` option.label))
`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(normalizedColumns)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"_, [i1, i2, i3]"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` [c1, c2, c3] = rawColumns
  `),a("span",{class:"hljs-keyword"},"const"),s(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W=a("h2",null,"API",-1),X={class:"card"},ss={id:"属性"},as=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>text-key</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade-initial-indexes</code></td><td>级联模式的初始化索引列表</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>text-formatter</code></td><td>文本格式化</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>option-height</code></td><td>选项的高度(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),ts={class:"card"},ns={id:"Picker Options"},ls=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>textKey</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascadeInitialIndexes</code></td><td>级联模式的初始化索引列表</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>textFormatter</code></td><td>文本格式化</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>optionHeight</code></td><td>选项的高度</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>safeArea</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>弹出层开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>弹出层开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>弹出层关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭弹出层动画结束时回调</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>选择内容变化时回调</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>点击确认按钮时触发</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>点击取消按钮时触发</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1),es={class:"card"},cs={id:"Picker NormalColumn"},ds=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>texts</code></td><td>文本数组</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>初始化索引</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>",1),rs={class:"card"},os={id:"Picker CascadeColumn"},hs=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>每一行的文本</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>子级</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table>",1),ps={class:"card"},js={id:"方法"},is=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>立刻停止滚动并触发 confirm 事件</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>立刻停止滚动并触发 cancel 事件</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),ms={class:"card"},us={id:"事件"},bs=c("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选择内容变化时触发</td><td><code>texts: Texts</code> 选择的内容数组 <br> <code>indexes: number[]</code> 选择的下标数组</td></tr><tr><td><code>cancel</code></td><td>点击取消按钮时触发</td><td><code>texts: Texts</code> 选择的内容数组 <br> <code>indexes: number[]</code> 选择的下标数组</td></tr><tr><td><code>confirm</code></td><td>点击确认按钮时触发</td><td><code>texts: Texts</code> 选择的内容数组 <br> <code>indexes: number[]</code> 选择的下标数组</td></tr></tbody></table>",1),ys={class:"card"},gs={id:"插槽"},ks=c("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>取消按钮内容</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>标题内容</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认按钮内容</td><td><code>-</code></td></tr></tbody></table>",1),_s={class:"card"},fs={id:"样式变量"},ws=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function xs(vs,Cs,Ps,Ds,Ys,Ts){const l=d("router-link"),e=d("var-site-code-example");return o(),h("div",j,[i,a("div",m,[a("h3",u,[t(l,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),b]),y,a("div",g,[a("h3",k,[t(l,{to:"#单列选择"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),t(e,null,{default:n(()=>[_]),_:1})]),a("div",f,[a("h3",w,[t(l,{to:"#多列选择"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),x,t(e,null,{default:n(()=>[v]),_:1})]),a("div",C,[a("h3",P,[t(l,{to:"#级联选择"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),D,t(e,null,{default:n(()=>[Y]),_:1})]),a("div",T,[a("h3",I,[t(l,{to:"#文本格式化"},{default:n(()=>[s("#")]),_:1}),s("文本格式化")]),A,t(e,null,{default:n(()=>[M]),_:1})]),a("div",F,[a("h3",N,[t(l,{to:"#值映射"},{default:n(()=>[s("#")]),_:1}),s("值映射")]),t(e,null,{default:n(()=>[z]),_:1})]),$,a("div",O,[a("h3",B,[t(l,{to:"#单列选择"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),t(e,null,{default:n(()=>[S]),_:1})]),a("div",L,[a("h3",V,[t(l,{to:"#多列选择"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),t(e,null,{default:n(()=>[q]),_:1})]),a("div",E,[a("h3",H,[t(l,{to:"#级联选择"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),t(e,null,{default:n(()=>[K]),_:1})]),a("div",Q,[a("h3",Z,[t(l,{to:"#文本格式化"},{default:n(()=>[s("#")]),_:1}),s("文本格式化")]),t(e,null,{default:n(()=>[G]),_:1})]),a("div",J,[a("h3",R,[t(l,{to:"#值的映射"},{default:n(()=>[s("#")]),_:1}),s("值的映射")]),t(e,null,{default:n(()=>[U]),_:1})]),W,a("div",X,[a("h3",ss,[t(l,{to:"#属性"},{default:n(()=>[s("#")]),_:1}),s("属性")]),as]),a("div",ts,[a("h3",ns,[t(l,{to:"#Picker Options"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),ls]),a("div",es,[a("h3",cs,[t(l,{to:"#Picker NormalColumn"},{default:n(()=>[s("#")]),_:1}),s("Picker NormalColumn")]),ds]),a("div",rs,[a("h3",os,[t(l,{to:"#Picker CascadeColumn"},{default:n(()=>[s("#")]),_:1}),s("Picker CascadeColumn")]),hs]),a("div",ps,[a("h3",js,[t(l,{to:"#方法"},{default:n(()=>[s("#")]),_:1}),s("方法")]),is]),a("div",ms,[a("h3",us,[t(l,{to:"#事件"},{default:n(()=>[s("#")]),_:1}),s("事件")]),bs]),a("div",ys,[a("h3",gs,[t(l,{to:"#插槽"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),ks]),a("div",_s,[a("h3",fs,[t(l,{to:"#样式变量"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),ws])])}const As=r(p,[["render",xs]]);export{As as default};
