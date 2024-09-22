import{j as e,b as a,o as r,i as s}from"../chunks/chunk-KSltIhmt.js";import{L as i}from"../chunks/chunk-DPhxMA0u.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const l=[];function o(n){const t={blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"What are active links?"}),` It's the practice of visually highlighting the current page in the navigation.
For example, this page named "Active Links" is highlighted with a gray background in the navigation on the left of this website.
The link is said to be "active".`]}),`
`]}),`
`,e.jsx(t.p,{children:"To implement active links:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Create a new component ",e.jsx(t.code,{children:"<Link>"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"<Link>"})," uses ",e.jsx(i,{href:"/usePageContext",children:e.jsx(t.code,{children:"usePageContext()"})})," to access ",e.jsx(i,{href:"/pageContext",children:e.jsx(t.code,{children:"pageContext.urlPathname"})}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"<Link>"})," checks whether ",e.jsx(t.code,{children:"const isActive = href === pageContext.urlPathname"})," and sets a CSS class accordingly ",e.jsx(t.code,{children:'<a class="is-active">'}),"."]}),`
`]}),`
`,e.jsx(t.p,{children:"Examples:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["React: ",e.jsx(a,{path:"/boilerplates/boilerplate-react/renderer/Link.jsx"})]}),`
`,e.jsxs(t.li,{children:["Vue: ",e.jsx(a,{path:"/boilerplates/boilerplate-vue/renderer/Link.vue"})]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["You cannot use ",e.jsx(t.code,{children:"window.location.pathname"}),` if you use SSR, because it isn't available when the page is rendered on the server-side.
If you have set `,e.jsx(i,{href:"/ssr",children:e.jsx(t.code,{children:"ssr: false"})}),", then you can use ",e.jsx(t.code,{children:"window.location.pathname"})," instead of ",e.jsx(t.code,{children:"pageContext.urlPathname"}),"."]}),`
`]})]})}function d(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:l},Symbol.toStringTag,{value:"Module"})),y={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:s}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/active-links/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{y as configValuesSerialized};
