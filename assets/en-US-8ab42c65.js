import{_ as o,b as c,e as r,m as i,p as t,q as e,w as a,Q as s,Z as d}from"./index-95102025.js";const p={components:{}},h={class:"varlet-site-doc"},j=t("h1",null,"Uploader",-1),u={class:"card"},g={id:"Intro"},m=t("p",null,[s("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),t("code",null,"after-read"),s(" events.")],-1),f={class:"card"},v={id:"Basic Usage"},_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  `),t("span",{class:"hljs-built_in"},"console"),s(`.log(file)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},y={id:"File Preview"},w=t("p",null,"By analyzing the file URL suffix name to determine the file type, support image and video preview.",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),s(`
  }
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},x={id:"Upload State"},V=t("p",null,[s("Three uploading states, "),t("code",null,"loading"),s(", "),t("code",null,"success"),s(" and "),t("code",null,"error"),s(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")],-1),S=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`
  }
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),t("span",{class:"hljs-string"},"'loading'"),s(`

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    file.state = `),t("span",{class:"hljs-string"},"'success'"),s(`
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},R={id:"Use Progress"},z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref, onUnmounted } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`),t("span",{class:"hljs-keyword"},"let"),s(` timer

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),t("span",{class:"hljs-string"},"'loading'"),s(`

  timer = `),t("span",{class:"hljs-built_in"},"window"),s(".setInterval("),t("span",{class:"hljs-function"},"() =>"),s(` {
    `),t("span",{class:"hljs-keyword"},"if"),s(" (file.progress === "),t("span",{class:"hljs-number"},"100"),s(`) {
      `),t("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
      file.state = `),t("span",{class:"hljs-string"},"'success'"),s(`
      `),t("span",{class:"hljs-keyword"},"return"),s(`
    }

    file.progress += `),t("span",{class:"hljs-number"},"10"),s(`
  }, `),t("span",{class:"hljs-number"},"250"),s(`)
}

onUnmounted(`),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
})
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},T={id:"File Maxlength"},C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},B={id:"File Size Limit"},A=t("p",null,[s("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),t("code",null,"oversize"),s(" event.")],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxsize"),s("="),t("span",{class:"hljs-string"},'"1024"'),s(" @"),t("span",{class:"hljs-attr"},"oversize"),s("="),t("span",{class:"hljs-string"},`"Snackbar.warning('file size exceeds limit')"`),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},E={id:"File List Filter"},I=t("p",null,[s("Filter files through the "),t("code",null,"before-filter"),s(" event, and return a "),t("code",null,"VarFile"),s(" array after filtering.")],-1),G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeFilter"),s("("),t("span",{class:"hljs-params"},"files"),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"return"),s(" files.filter("),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"file"),s(" =>")]),s(" file.name.endsWith("),t("span",{class:"hljs-string"},"'png'"),s(`))
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},"multiple"),s(" @"),t("span",{class:"hljs-attr"},"before-filter"),s("="),t("span",{class:"hljs-string"},'"handleBeforeFilter"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),W={class:"card"},N={id:"Upload Preprocessing"},O=t("p",null,[s("Operate on a file by registering a "),t("code",null,"before-read"),s(" event that returns a false value to prevent the file from being read.")],-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"if"),s(" (file.file.size <= "),t("span",{class:"hljs-number"},"1"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(`) {
    Snackbar.success(`),t("span",{class:"hljs-string"},"'the file is less than 1M, the upload is successful'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"true"),s(`
  } `),t("span",{class:"hljs-keyword"},"else"),s(` {
    Snackbar.warning(`),t("span",{class:"hljs-string"},"'the file is larger than 1M and cannot be uploaded'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"false"),s(`
  }
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-read"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},Y={id:"Disabled"},H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},Z={id:"Readonly"},J=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),K={class:"card"},X={id:"Remove Preprocessing"},ss=t("p",null,[s("Before deleting the file, the "),t("code",null,"before-remove"),s(" event is triggered, and a falsy value is returned to prevent the delete operation.")],-1),ts=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  }
])

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeRemove"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` Dialog({
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Delete or not?'"),s(`,
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'Cannot be withdrawn after deletion'"),s(`
  })

  `),t("span",{class:"hljs-keyword"},"return"),s(" action === "),t("span",{class:"hljs-string"},"'confirm'"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-remove"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),es={class:"card"},as={id:"Customize Upload Styles"},ls=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Upload"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ns={class:"card"},ds={id:"Validate"},cs=t("p",null,[s("The values are validated by passing in an array of validator, If the validator returns "),t("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")],-1),os=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(`
    `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v, u) => u.getError().length === 0 || 'There is a file that failed to upload']"`),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),rs={class:"card"},is={id:"Custom Render File List"},ps=t("p",null,[s("You can use the "),t("code",null,"hide-list"),s(" to hide component files list, then you can render this list by custom.")],-1),hs=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(`
      `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"uploader-example-file"'),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"f in files"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"f.id"'),s(`
      `),t("span",{class:"hljs-attr"},":src"),s("="),t("span",{class:"hljs-string"},'"f.cover"'),s(`
    />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"hide-list"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"round"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"upload"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".uploader-example-file"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"border-radius"),s(": "),t("span",{class:"hljs-number"},"50%"),s(`;
  `),t("span",{class:"hljs-attribute"},"font-size"),s(": "),t("span",{class:"hljs-number"},"12px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),js=t("h2",null,"API",-1),us={class:"card"},gs={id:"Props"},ms=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code>, not in simple mode</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide the file list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation， The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules，Returns <code>true</code> to indicate that the validation passed，The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),fs={class:"card"},vs={id:"VarFile"},_s=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload progress, range [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>",1),bs={class:"card"},ys={id:"VarFileUtils"},ws=d("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>",1),ks={class:"card"},Fs={id:"Methods"},xs=d("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>Trigger the file selection action and display the file list</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>Close preview file popup</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),Vs={class:"card"},Ss={id:"Events"},Us=d("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td>Triggered before the event <code>before-read</code> to filter the file list</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>Trigger returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr></tbody></table>",1),Rs={class:"card"},zs={id:"Slots"},Ps=d("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>",1),Ts={class:"card"},Cs={id:"Style Variables"},Ds=d('<p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>',2);function Bs(As,Ls,Ms,Es,Is,Gs){const l=c("router-link"),n=c("var-site-code-example");return r(),i("div",h,[j,t("div",u,[t("h3",g,[e(l,{to:"#Intro"},{default:a(()=>[s("#")]),_:1}),s("Intro")]),m]),t("div",f,[t("h3",v,[e(l,{to:"#Basic Usage"},{default:a(()=>[s("#")]),_:1}),s("Basic Usage")]),e(n,null,{default:a(()=>[_]),_:1})]),t("div",b,[t("h3",y,[e(l,{to:"#File Preview"},{default:a(()=>[s("#")]),_:1}),s("File Preview")]),w,e(n,null,{default:a(()=>[k]),_:1})]),t("div",F,[t("h3",x,[e(l,{to:"#Upload State"},{default:a(()=>[s("#")]),_:1}),s("Upload State")]),V,e(n,null,{default:a(()=>[S]),_:1})]),t("div",U,[t("h3",R,[e(l,{to:"#Use Progress"},{default:a(()=>[s("#")]),_:1}),s("Use Progress")]),e(n,null,{default:a(()=>[z]),_:1})]),t("div",P,[t("h3",T,[e(l,{to:"#File Maxlength"},{default:a(()=>[s("#")]),_:1}),s("File Maxlength")]),e(n,null,{default:a(()=>[C]),_:1})]),t("div",D,[t("h3",B,[e(l,{to:"#File Size Limit"},{default:a(()=>[s("#")]),_:1}),s("File Size Limit")]),A,e(n,null,{default:a(()=>[L]),_:1})]),t("div",M,[t("h3",E,[e(l,{to:"#File List Filter"},{default:a(()=>[s("#")]),_:1}),s("File List Filter")]),I,e(n,null,{default:a(()=>[G]),_:1})]),t("div",W,[t("h3",N,[e(l,{to:"#Upload Preprocessing"},{default:a(()=>[s("#")]),_:1}),s("Upload Preprocessing")]),O,e(n,null,{default:a(()=>[$]),_:1})]),t("div",q,[t("h3",Y,[e(l,{to:"#Disabled"},{default:a(()=>[s("#")]),_:1}),s("Disabled")]),e(n,null,{default:a(()=>[H]),_:1})]),t("div",Q,[t("h3",Z,[e(l,{to:"#Readonly"},{default:a(()=>[s("#")]),_:1}),s("Readonly")]),e(n,null,{default:a(()=>[J]),_:1})]),t("div",K,[t("h3",X,[e(l,{to:"#Remove Preprocessing"},{default:a(()=>[s("#")]),_:1}),s("Remove Preprocessing")]),ss,e(n,null,{default:a(()=>[ts]),_:1})]),t("div",es,[t("h3",as,[e(l,{to:"#Customize Upload Styles"},{default:a(()=>[s("#")]),_:1}),s("Customize Upload Styles")]),e(n,null,{default:a(()=>[ls]),_:1})]),t("div",ns,[t("h3",ds,[e(l,{to:"#Validate"},{default:a(()=>[s("#")]),_:1}),s("Validate")]),cs,e(n,null,{default:a(()=>[os]),_:1})]),t("div",rs,[t("h3",is,[e(l,{to:"#Custom Render File List"},{default:a(()=>[s("#")]),_:1}),s("Custom Render File List")]),ps,e(n,null,{default:a(()=>[hs]),_:1})]),js,t("div",us,[t("h3",gs,[e(l,{to:"#Props"},{default:a(()=>[s("#")]),_:1}),s("Props")]),ms]),t("div",fs,[t("h3",vs,[e(l,{to:"#VarFile"},{default:a(()=>[s("#")]),_:1}),s("VarFile")]),_s]),t("div",bs,[t("h3",ys,[e(l,{to:"#VarFileUtils"},{default:a(()=>[s("#")]),_:1}),s("VarFileUtils")]),ws]),t("div",ks,[t("h3",Fs,[e(l,{to:"#Methods"},{default:a(()=>[s("#")]),_:1}),s("Methods")]),xs]),t("div",Vs,[t("h3",Ss,[e(l,{to:"#Events"},{default:a(()=>[s("#")]),_:1}),s("Events")]),Us]),t("div",Rs,[t("h3",zs,[e(l,{to:"#Slots"},{default:a(()=>[s("#")]),_:1}),s("Slots")]),Ps]),t("div",Ts,[t("h3",Cs,[e(l,{to:"#Style Variables"},{default:a(()=>[s("#")]),_:1}),s("Style Variables")]),Ds])])}const Ns=o(p,[["render",Bs]]);export{Ns as default};
