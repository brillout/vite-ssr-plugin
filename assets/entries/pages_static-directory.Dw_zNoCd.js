import{j as e,L as s,o as a,i as l}from"../chunks/chunk-DDL8FpfR.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B--HK5tK.js";/* empty css                      */const n=[{pageSectionId:"public",pageSectionLevel:2,pageSectionTitle:"`public/`"},{pageSectionId:"dist-client",pageSectionLevel:2,pageSectionTitle:"`dist/client/`"},{pageSectionId:"server-static-middleware",pageSectionLevel:2,pageSectionTitle:"Server static middleware"}];function r(i){const t={a:"a",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"public",children:e.jsx("code",{children:"public/"})}),`
`,e.jsxs(t.p,{children:["Vite has built-in support for serving static assets living in the ",e.jsx(t.code,{children:"public/"})," directory."]}),`
`,e.jsxs(t.p,{children:["For example, if we save a file ",e.jsx(t.code,{children:"public/robots.txt"}),", then it will be served as-is at ",e.jsx(t.code,{children:"https://example.com/robots.txt"}),"."]}),`
`,e.jsxs(t.p,{children:["Official docs: ",e.jsxs(t.a,{href:"https://vitejs.dev/guide/assets.html#the-public-directory",children:["Vite - The ",e.jsx(t.code,{children:"public/"})," Directory"]}),"."]}),`
`,e.jsx("h2",{id:"dist-client",children:e.jsx("code",{children:"dist/client/"})}),`
`,e.jsxs(t.p,{children:["After running ",e.jsx(t.code,{children:"$ vite build"}),", all static assets live in ",e.jsx(t.code,{children:"dist/client/"}),"."]}),`
`,e.jsx(t.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(t.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(t.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{color:"#6A737D"},children:"# The browser-side JavaScript bundle of our page `pages/hello-world/+Page.js`"})}),`
`,e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{color:"#6F42C1"},children:"dist/client/assets/entries/pages_hello-world.b0c3b30b.js"})}),`
`,e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{color:"#6A737D"},children:"# Our file `public/robots.txt`"})}),`
`,e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{color:"#6F42C1"},children:"dist/client/robots.txt"})})]})})}),`
`,e.jsx(t.p,{children:"Note how Vite:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Adds the content hash ",e.jsx(t.code,{children:"b0c3b30b"})," for improved cachability."]}),`
`,e.jsxs(t.li,{children:["Copies all files living under ",e.jsx(t.code,{children:"public/"})," to ",e.jsx(t.code,{children:"dist/client/"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"server-static-middleware",children:"Server static middleware"}),`
`,e.jsxs(t.p,{children:["If we use a Node.js production server (i.e. we don't ",e.jsx(t.a,{href:"/pre-rendering",children:"pre-render"}),` our app),
we can alternatively use a server static middleware such as `,e.jsx(t.a,{href:"https://expressjs.com/en/starter/static-files.html",children:e.jsx(t.code,{children:"express.static()"})}),"."]}),`
`,e.jsxs(t.p,{children:[`We may want to do this if we have a lot of heavy static assets,
in order to avoid Vite from copying all our large static assets over to `,e.jsx(t.code,{children:"dist/client/"})," and thus slowing down our build time."]})]})}function o(i={}){const{wrapper:t}=i.components||{};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o,pageSectionsExport:n},Symbol.toStringTag,{value:"Module"})),g={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:l}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/static-directory/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{g as configValuesSerialized};