import{j as e,o as i,i as r}from"../chunks/chunk-KSltIhmt.js";import{L as a}from"../chunks/chunk-DPhxMA0u.js";/* empty css                      */import{U as t}from"../chunks/chunk-ScrxolXu.js";import{I as o}from"../chunks/chunk-CQjIZkzT.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const d=[{pageSectionId:"without-vike-react-vue-solid",pageSectionLevel:2,pageSectionTitle:"Without `vike-{react,vue,solid}`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(s){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Default value: ",e.jsx(n.code,{children:"true"}),`.
`,e.jsxs(o,{children:["the ",e.jsx(n.code,{children:"ssr"})," setting"]})]}),`
`,e.jsx(n.p,{children:"Setting to enable/disable Server-Side Rendering (SSR). You can disable SSR for all your pages or only for some pages."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"What is SSR?"})," If you're unfamiliar with SSR then check out ",e.jsx(n.a,{href:"https://github.com/reactwg/react-18/discussions/37",children:"Dan Abramov's explanation of SSR, HTML Streaming, and Progressive Rendering"}),". (While it explains it in the context of React, we still recommend reading it if you use a UI framework other than React.)"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Alternatively:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You can use ",e.jsx(a,{href:"/clientOnly",children:e.jsx(n.code,{children:"clientOnly()"})})," to render and load some components only on the client-side while rendering the rest of the page with SSR."]}),`
`,e.jsxs(n.li,{children:["You can ",e.jsx(a,{href:"/pre-rendering",children:"pre-render"})," some of (or all) your pages."]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"To disable SSR for all your pages:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Applies to all pages"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  ssr: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:"To disable SSR only for some pages:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/admin-panel/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Applies only to all pages living under /pages/admin-panel/"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  ssr: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Pages rendered and loaded only on the client-side"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/pages/admin-panel/products/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/pages/admin-panel/users/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Pages rendered and loaded on both client- and server-side. (Because they"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# don't live under /pages/admin-panel/ thus the `ssr` setting doesn't apply.)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/pages/index/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/pages/about/+Page.js"})})]})})}),`
`,e.jsxs(n.p,{children:["For an improved file and config organization, you can consider using a ",e.jsx(a,{href:"/file-structure#domain-driven",children:"domain-driven file structure"}),"."]}),`
`,e.jsxs("h2",{id:"without-vike-react-vue-solid",children:["Without ",e.jsx("code",{children:"vike-{react,vue,solid}"})]}),`
`,e.jsxs(n.p,{children:["In case you don't use a ",e.jsx(t,{}),", you can implement the ",e.jsx(n.code,{children:"ssr"})," setting yourself."]}),`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike-react/blob/main/packages/vike-react",children:[e.jsx(n.code,{children:"vike-react"})," source code"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike-vue/blob/main/packages/vike-vue",children:[e.jsx(n.code,{children:"vike-vue"})," source code"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike-solid/blob/main/vike-solid",children:[e.jsx(n.code,{children:"vike-solid"})," source code"]})}),`
`]}),`
`,e.jsxs(n.p,{children:["See also ",e.jsx(a,{href:"/render-modes"}),"."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"/pre-rendering"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"/stream"}),`
`]}),`
`]})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:r}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/ssr/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{k as configValuesSerialized};
