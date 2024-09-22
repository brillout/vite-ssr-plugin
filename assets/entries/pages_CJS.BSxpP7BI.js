import{j as e,o as r,i as a}from"../chunks/chunk-KSltIhmt.js";import"../chunks/chunk-B0bomZhE.js";/* empty css                      */import{W as t}from"../chunks/chunk-Cd-eh9fG.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */const i=[{pageSectionId:"typescript-migration",pageSectionLevel:2,pageSectionTitle:"TypeScript migration"},{pageSectionId:"monorepo-migration",pageSectionLevel:2,pageSectionTitle:"Monorepo migration"}];function n(o){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(s.p,{children:"Vike will probably deprecate support for user-land CJS code soon. (Using CJS packages will still be supported for the foreseeable future.)"}),e.jsxs(s.p,{children:["If you have a use case that requires the source code of your Vike app to be written in CJS then let us know and we'll consider not deprecating it. We would then create a new setting ",e.jsx(s.code,{children:"disableCJSWarning"})," instead."]})]}),`
`,e.jsxs(s.p,{children:[`While you can use Vike with
`,e.jsx(s.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules:~:text=CommonJS%20modules%20are%20the%20original%20way%20to%20package%20JavaScript%20code%20for%20Node.js.%20Node.js%20also%20supports%20the%20ECMAScript%20modules%20standard%20used%20by%20browsers%20and%20other%20JavaScript%20runtimes.",children:"CJS"}),`,
we recommend using
`,e.jsx(s.a,{href:"https://nodejs.org/api/esm.html#modules-ecmascript-modules:~:text=ECMAScript%20modules%20are%20the%20official%20standard%20format%20to%20package%20JavaScript%20code%20for%20reuse.%20Modules%20are%20defined%20using%20a%20variety%20of%20import%20and%20export%20statements.",children:"ESM"}),`
instead.`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Most of your code should already be ESM, as code processed by Vite is always ESM. But ",e.jsx(s.a,{href:"https://github.com/vikejs/vike/issues/562",children:"some of your server code may not be processed by Vite"})," and may be CJS."]}),`
`]}),`
`,e.jsx(s.p,{children:"If you get the following warning:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`[vike][Warning] We recommend setting package.json#type to "module"
`})}),`
`,e.jsxs(s.p,{children:["Then, in order to remove the warning, add this to your ",e.jsx(s.code,{children:"package.json"}),":"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"json5","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"json5","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// package.json"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"{"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"   // ..."})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"   type"}),e.jsx(s.span,{style:{color:"#24292E"},children:": "}),e.jsx(s.span,{style:{color:"#032F62"},children:'"module"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.p,{children:["This ",e.jsx(s.a,{href:"https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_package_json_type_field:~:text=Files%20ending%20with%20.js%20will%20be%20loaded%20as%20ES%20modules%20when%20the%20nearest%20parent%20package.json%20file%20contains%20a%20top%2Dlevel%20field%20%22type%22%20with%20a%20value%20of%20%22module%22.",children:"makes Node.js treat all .js files as ESM"}),"."]}),`
`,e.jsx(s.p,{children:"If you have .js files written in CJS then migrate them to ESM, for example:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{className:"diff remove","data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// CJS code"})}),`
`,e.jsxs(s.span,{className:"diff remove","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" express"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" require"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#032F62"},children:"'express'"}),e.jsx(s.span,{style:{color:"#24292E"},children:") "})]}),`
`,e.jsxs(s.span,{className:"diff remove","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"renderPage"}),e.jsx(s.span,{style:{color:"#24292E"},children:" } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" require"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#032F62"},children:"'vike/server'"}),e.jsx(s.span,{style:{color:"#24292E"},children:") "})]}),`
`,e.jsx(s.span,{className:"diff add","data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// ESM code"})}),`
`,e.jsxs(s.span,{className:"diff add","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" express "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'express'"})]}),`
`,e.jsxs(s.span,{className:"diff add","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { renderPage } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'vike/server'"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["An escape hatch is to use ",e.jsxs(s.a,{href:"https://nodejs.org/api/esm.html#enabling:~:text=Authors%20can%20tell%20Node.js%20to%20use%20the%20ECMAScript%20modules%20loader%20via%20the%20.mjs%20file%20extension",children:["the ",e.jsx(s.code,{children:".cjs"})," and ",e.jsx(s.code,{children:".mjs"})," file extensions"]}),": it enables you to choose between CJS and ESM on a file-by-file basis (regardless of ",e.jsx(s.code,{children:"package.json#type"}),")."]}),`
`]}),`
`,e.jsx("h2",{id:"typescript-migration",children:"TypeScript migration"}),`
`,e.jsxs(s.p,{children:["Depending on your setup, you may need to append ",e.jsx(s.code,{children:".js"})," to the path of your imports:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// someTypeScriptFile.ts"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{className:"diff remove","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { something } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './some/module'"})]}),`
`,e.jsxs(s.span,{className:"diff add","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { something } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './some/module.js'"})]})]})})}),`
`,e.jsxs(s.p,{children:["You can use ",e.jsx(s.a,{href:"https://gist.github.com/brillout/79fd8b21e8893f92334b885ee9fa30ff",children:"this script"})," to automatically apply this change."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["This is typically only needed for library code (e.g. your monorepo packages used by your application code). For the application code itself, you can use ",e.jsxs(s.a,{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#moduleresolution-bundler",children:["TypeScript's new ",e.jsx(s.code,{children:"--moduleResolution bundler"})," option"]})," instead."]}),`
`]}),`
`,e.jsx("h2",{id:"monorepo-migration",children:"Monorepo migration"}),`
`,e.jsx(s.p,{children:"If you aren't using a monorepo, then migrating the source code of your Vike app from CJS to ESM is usually straightforward."}),`
`,e.jsx(s.p,{children:"Even if you use a monorepo that uses a mix of ESM/CJS packages, the migration of your Vike app is still straightforward: usually there aren't any monorepo package that depends on your Vike app. (In other words, your Vike app is a root in your monorepo dependency graph.)"}),`
`,e.jsx(s.p,{children:"That said, migrating your whole monorepo isn't easy: the issue is that CJS modules cannot (easily) import ESM modules."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Node.js 22 added support for ",e.jsx(s.code,{children:"require()"}),"'ing ES modules behind a ",e.jsx(s.code,{children:"--experimental-require-module"})," flag, see ",e.jsx(s.a,{href:"https://nodejs.org/en/blog/announcements/v22-release-announce#support-requireing-synchronous-esm-graphs",children:"Node.js Blog > Node.js 22 is now available! > Support require()ing synchronous ESM graphs"}),"."]}),`
`,e.jsx(s.p,{children:"This means you can use Node.js 22 and ignore the following recommendation."}),`
`]}),`
`,e.jsx(s.p,{children:"But because ESM modules can import CJS modules (unlike the opposite), a sensible strategy is to migrate your monorepo in a top-down fashion: first migrate CJS modules that aren't required by other CJS modules."}),`
`,e.jsx(s.p,{children:"For example, you can usually starting migrating your Vike app and then later migrate its monorepo dependencies."}),`
`,e.jsx(s.p,{children:"You can use a script to help determine what package in your monorepo is a candidate for CJS->ESM migration. For example:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://gist.github.com/ChristophP/2c0082f6944fae6d0a15e99b2dfb5423",children:"check-esm.js"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Basically it uses some rush tools to figure out which packages are already using type module. It fails if there are any packages that aren't whitelisted that are not type module yet. It also prints an overview like this to show which packages are still used in CJS packages. Once a package is not used in CJS packages it's green and good to migrate."}),`
`]}),`
`,e.jsx("img",{src:"https://i.imgur.com/xRscY2r.png"}),`
`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Contribution welcome to share your script."}),`
`]})]})}function l(o={}){const{wrapper:s}=o.components||{};return s?e.jsx(s,{...o,children:e.jsx(n,{...o})}):n(o)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:l,pageSectionsExport:i},Symbol.toStringTag,{value:"Module"})),f={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/CJS/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{f as configValuesSerialized};
