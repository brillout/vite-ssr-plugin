import{j as e,o,i}from"../chunks/chunk-KSltIhmt.js";import{L as r}from"../chunks/chunk-DPhxMA0u.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const t=[{pageSectionId:"dig",pageSectionLevel:2,pageSectionTitle:"Dig"},{pageSectionId:"vike-debug-logs",pageSectionLevel:2,pageSectionTitle:"Vike debug logs"},{pageSectionId:"vite-debug-logs",pageSectionLevel:2,pageSectionTitle:"Vite debug logs"}];function l(s){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["In general, if you run into an issue with Vike, then we recommend ",e.jsx(r,{href:"/faq#how-can-i-reach-out-for-help",children:"reaching out"}),"."]}),`
`,e.jsx(n.p,{children:"That said, in some situations, you may want to dig into a problem yourself. For example, we may ask you to provide us a minimal reproduction but, sometimes, digging into Vike's source code can be faster than constructing a minimal reproduction. (And reading high-quality source code written by Open Source developers can be fun.)"}),`
`,e.jsx(n.p,{children:"Also, note the debug logs of Vike and Vite to easily gather insights."}),`
`,e.jsx("h2",{id:"dig",children:"Dig"}),`
`,e.jsxs(n.p,{children:["The quickest way to dig into Vike is to inject a bunch of ",e.jsx(n.code,{children:"console.log()"})," inside ",e.jsx(n.code,{children:"node_modules/vike/dist/**/*.js"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"It may sound scary to dig into foreign source code, but it's sometimes quicker to find the root cause of your problem than treating Vike as a black box. Also:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It's more interesting. (Vike's source code is usually well-written and pleasurable to read.)"}),`
`,e.jsx(n.li,{children:"You may end up being able to do a Vike PR solving your problem (while helping the whole community)."}),`
`]}),`
`,e.jsx(n.p,{children:"We recommend digging not only into Vike, but also into other tools such as Vite (which is very well-written)."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Instead of:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" git"}),e.jsx(n.span,{style:{color:"#032F62"},children:" clone"}),e.jsx(n.span,{style:{color:"#032F62"},children:" git@github.com:vikejs/vike"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" cd"}),e.jsx(n.span,{style:{color:"#032F62"},children:" vike/vike/"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" pnpm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" install"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" pnpm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" cd"}),e.jsx(n.span,{style:{color:"#032F62"},children:" ../../../my-app/"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" pnpm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" link"}),e.jsx(n.span,{style:{color:"#032F62"},children:" ../vike/vike/"})]})]})})}),`
`,e.jsx(n.p,{children:"We recommend to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Browse the source code of ",e.jsx(n.code,{children:"$ git clone git@github.com:vikejs/vike"}),"."]}),`
`,e.jsxs(n.li,{children:["For an increased feedback loop, inject ",e.jsx(n.code,{children:"console.log()"})," directly inside ",e.jsx(n.code,{children:"my-app/node_modules/vike/dist/**/*.js"}),"."]}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"vike-debug-logs",children:"Vike debug logs"}),`
`,e.jsx(n.p,{children:"You can use Vike's debug logs to gather insights."}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Inspect Vike's routing"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:routing"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Inspect HTTP Streaming"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:stream"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Inspect errors"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:error"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Inspect logs"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:log"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Combination"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:log,vike:error,vike:stream"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["These debug logs allow you to understand how Vike thinks of your app. For example, to figure out why your app returns a ",e.jsx(n.code,{children:"404"}),", use ",e.jsx(n.code,{children:"vike:routing"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"There are more debug logs but these aren't user-friendly as they are meant for Vike maintainers."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For more debug logs, add a comment at ",e.jsx(n.a,{href:"https://github.com/vikejs/vike/issues/249",children:"#249"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"vite-debug-logs",children:"Vite debug logs"}),`
`,e.jsxs(n.p,{children:["To enable Vite's debug logs, set the environment variable ",e.jsx(n.code,{children:"DEBUG"})," to ",e.jsx(n.code,{children:"vite:*"}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsx(n.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:" DEBUG=vite:"}),e.jsx(n.span,{style:{color:"#005CC5"},children:"*"}),e.jsx(n.span,{style:{color:"#032F62"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]})})})})]})}function a(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:a,pageSectionsExport:t},Symbol.toStringTag,{value:"Module"})),b={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/debug/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{b as configValuesSerialized};
