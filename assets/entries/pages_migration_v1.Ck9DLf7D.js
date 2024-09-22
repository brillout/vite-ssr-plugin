import{j as e,o as s,i as a}from"../chunks/chunk-KSltIhmt.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const r=[];function t(l){const n={code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"If you update to the latest Vike version and you were to apply all deprecation warnings, then you can completely ignore this migration."}),`
`,e.jsx(n.p,{children:"This migration page is only for double checking that you applied all deprecation warnings."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Update to the latest ",e.jsx(n.code,{children:"0.4"})," version (",e.jsx(n.code,{children:"0.4.x"}),"), follow the deprecation warnings which include instructions of how to update outdated code. (TODO/v1-release: replace ",e.jsx(n.code,{children:"x"})," with actual version number.)"]}),`
`,e.jsxs(n.li,{children:["Update to ",e.jsx(n.code,{children:"v1.0.0"})," and, again, follow the new deprecation instructions (if you encounter any) ",e.jsx(n.code,{children:"v1.0.0"}),". (INTERNAL-NOTE: for example the outdated warning for ",e.jsx(n.code,{children:"pageContext.urlParsed"})," can only exist in ",e.jsx(n.code,{children:"v1.0.0"}),")"]}),`
`,e.jsxs(n.li,{children:["All types have been moved to ",e.jsx(n.code,{children:"'vike/types'"}),":",`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { SomeType } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/any-path'"})]}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { SomeType } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/types'"})]})]})})}),`
`,"And ",e.jsx(n.code,{children:"PageContextBuiltInClient"})," has been renamed to ",e.jsx(n.code,{children:"PageContextBuiltInClientWithClientRouting"})," and ",e.jsx(n.code,{children:"PageContextBuiltInClientWithServerRouting"}),":",`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { PageContextBuiltInClient } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/client/router'"})]}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "})]}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClientWithClientRouting as "})}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClient "})}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"} "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/types'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { PageContextBuiltInClient } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/client'"})]}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "})]}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClientWithServerRouting as "})}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClient "})}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"} "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/types'"})]})]})})}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Changes that are relevant only for a (small) subset of users:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The server entry has been renamed from ",e.jsx(n.code,{children:"dist/server/importBuild.js"})," to ",e.jsx(n.code,{children:"dist/server/entry.js"}),". (If you manually import the server entry, then make sure to update your import accordingly.)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["That's it! Welcome to the ",e.jsx(n.code,{children:"v1"})," release."]})]})}function i(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(t,{...l})}):t(l)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:i,pageSectionsExport:r},Symbol.toStringTag,{value:"Module"})),u={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/migration/v1/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}}};export{u as configValuesSerialized};
