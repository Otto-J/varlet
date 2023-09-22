import{_ as d,b as r,e as o,m as p,p as a,q as t,w as n,Q as s,Z as c}from"./index-95102025.js";const h={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Picker",-1),m={class:"card"},u={id:"Intro"},b=a("p",null,"Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.",-1),g=a("h2",null,"Function Call",-1),y={class:"card"},k={id:"Single-column Picker"},f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)]

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Single Column Picker"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},x={id:"Multi-column Picker"},w=a("p",null,"A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Multiple Column Picker"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},P={id:"Cascade Picker"},S=a("p",null,[s("Passing in a "),a("code",null,"cascade"),s(" attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import "),a("code",null,"area.json"),s(".")],-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Cascade Column Picker"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},M={id:"Text Formatter"},E=a("p",null,[s("Picker passes in a "),a("code",null,"textFormatter"),s(" attribute to customize the text. "),a("code",null,"textFormatter"),s(" accepts two parameters. The first parameter "),a("code",null,"text"),s(" is the current text, and the second parameter "),a("code",null,"columnIndex"),s(" is the subscript of the column where the current text is located. The following is the case of year month day selection")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" YEAR`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" MONTH`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" DATE`")]),s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Text Formatter"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},Y={id:"Mapping Of Values"},A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Mapping of values"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F=a("h2",null,"Component Call",-1),O={class:"card"},z={id:"Single-column Picker"},N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},B={id:"Multi-column Picker"},L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),W={class:"card"},H={id:"Cascade Picker"},R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},q={id:"Text Formatter"},K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" YEAR`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" MONTH`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s(" DATE`")]),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":text-formatter"),s("="),a("span",{class:"hljs-string"},'"textFormatter"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},Z={id:"Mapping Of Values"},G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(` 
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ember Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Storm Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Earth Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Void Spirit'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
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
`)])],-1),J=a("h2",null,"API",-1),X={class:"card"},ss={id:"Props"},as=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade-initial-indexes</code></td><td>List of initialization indices for cascade mode</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>text-formatter</code></td><td>Text formatter</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>option-height</code></td><td>Option height(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),ts={class:"card"},ns={id:"Picker Options"},ls=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascadeInitialIndexes</code></td><td>List of initialization indices for cascade mode</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>textFormatter</code></td><td>Text formatter</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>optionHeight</code></td><td>Option height</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>safeArea</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1),es={class:"card"},cs={id:"Picker NormalColumn"},rs=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>texts</code></td><td>Text array</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>Initialize index</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>",1),ds={class:"card"},os={id:"Picker CascadeColumn"},ps=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Each line of text</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>children tree</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table>",1),hs={class:"card"},is={id:"Methods"},js=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),ms={class:"card"},us={id:"Events"},bs=c("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr></tbody></table>",1),gs={class:"card"},ys={id:"Slots"},ks=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>cancel button content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>title content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>confirm button content</td><td><code>-</code></td></tr></tbody></table>",1),fs={class:"card"},_s={id:"Style Variables"},xs=c('<p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function ws(vs,Cs,Ps,Ss,Ts,Ds){const l=r("router-link"),e=r("var-site-code-example");return o(),p("div",i,[j,a("div",m,[a("h3",u,[t(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),b]),g,a("div",y,[a("h3",k,[t(l,{to:"#Single-column Picker"},{default:n(()=>[s("#")]),_:1}),s("Single-column Picker")]),t(e,null,{default:n(()=>[f]),_:1})]),a("div",_,[a("h3",x,[t(l,{to:"#Multi-column Picker"},{default:n(()=>[s("#")]),_:1}),s("Multi-column Picker")]),w,t(e,null,{default:n(()=>[v]),_:1})]),a("div",C,[a("h3",P,[t(l,{to:"#Cascade Picker"},{default:n(()=>[s("#")]),_:1}),s("Cascade Picker")]),S,t(e,null,{default:n(()=>[T]),_:1})]),a("div",D,[a("h3",M,[t(l,{to:"#Text Formatter"},{default:n(()=>[s("#")]),_:1}),s("Text Formatter")]),E,t(e,null,{default:n(()=>[I]),_:1})]),a("div",V,[a("h3",Y,[t(l,{to:"#Mapping Of Values"},{default:n(()=>[s("#")]),_:1}),s("Mapping Of Values")]),t(e,null,{default:n(()=>[A]),_:1})]),F,a("div",O,[a("h3",z,[t(l,{to:"#Single-column Picker"},{default:n(()=>[s("#")]),_:1}),s("Single-column Picker")]),t(e,null,{default:n(()=>[N]),_:1})]),a("div",$,[a("h3",B,[t(l,{to:"#Multi-column Picker"},{default:n(()=>[s("#")]),_:1}),s("Multi-column Picker")]),t(e,null,{default:n(()=>[L]),_:1})]),a("div",W,[a("h3",H,[t(l,{to:"#Cascade Picker"},{default:n(()=>[s("#")]),_:1}),s("Cascade Picker")]),t(e,null,{default:n(()=>[R]),_:1})]),a("div",U,[a("h3",q,[t(l,{to:"#Text Formatter"},{default:n(()=>[s("#")]),_:1}),s("Text Formatter")]),t(e,null,{default:n(()=>[K]),_:1})]),a("div",Q,[a("h3",Z,[t(l,{to:"#Mapping Of Values"},{default:n(()=>[s("#")]),_:1}),s("Mapping Of Values")]),t(e,null,{default:n(()=>[G]),_:1})]),J,a("div",X,[a("h3",ss,[t(l,{to:"#Props"},{default:n(()=>[s("#")]),_:1}),s("Props")]),as]),a("div",ts,[a("h3",ns,[t(l,{to:"#Picker Options"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),ls]),a("div",es,[a("h3",cs,[t(l,{to:"#Picker NormalColumn"},{default:n(()=>[s("#")]),_:1}),s("Picker NormalColumn")]),rs]),a("div",ds,[a("h3",os,[t(l,{to:"#Picker CascadeColumn"},{default:n(()=>[s("#")]),_:1}),s("Picker CascadeColumn")]),ps]),a("div",hs,[a("h3",is,[t(l,{to:"#Methods"},{default:n(()=>[s("#")]),_:1}),s("Methods")]),js]),a("div",ms,[a("h3",us,[t(l,{to:"#Events"},{default:n(()=>[s("#")]),_:1}),s("Events")]),bs]),a("div",gs,[a("h3",ys,[t(l,{to:"#Slots"},{default:n(()=>[s("#")]),_:1}),s("Slots")]),ks]),a("div",fs,[a("h3",_s,[t(l,{to:"#Style Variables"},{default:n(()=>[s("#")]),_:1}),s("Style Variables")]),xs])])}const Es=d(h,[["render",ws]]);export{Es as default};
