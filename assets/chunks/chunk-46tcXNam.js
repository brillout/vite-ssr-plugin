import{j as e,a}from"./chunk-KSltIhmt.js";import{L as n}from"./chunk-DPhxMA0u.js";/* empty css              */import{U as s}from"./chunk-ScrxolXu.js";function j(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Some data tools allow you to fetch the initial data of the page on a component-level"}),e.jsx("p",{children:"Generally, on a high-level, the integration works in two steps:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"The initial data of a component is fetched while server-side rendering the component."}),e.jsx("li",{children:"The initial data is serialized and passed to the client. (So that the client uses the exact same data, avoiding double-fetching and hydration mismatches.)"})]}),e.jsx("blockquote",{children:e.jsxs("p",{children:["If ",e.jsx(n,{href:"/ssr",children:"SSR is disabled"}),", then the data is only fetched on the client-side. (The data of a component is fetched where the component is loaded and executed.)"]})}),"Depending on the tool, this integration is done (semi-)automatically. A fully manual integration can be done using Vike primitives:"]})}function l({children:i,toolType:t,toolName:r}){const o=e.jsxs(e.Fragment,{children:["instead of"," ",e.jsxs(n,{href:"/data-fetching#data-hook",children:["using the page-level Vike hook ",e.jsx("code",{children:"data()"})]})]});return t==="store"?e.jsx(e.Fragment,{children:e.jsxs("p",{children:["When using a store",r&&` such as ${r}`,", your components don't access fetched data directly: your components only access the store."]})}):t==="graphql"?e.jsxs("p",{children:["When using a GraphQL tool",r&&` such as ${r}`,", you can define GraphQL queries/fragments on a component-level, ",o,"."]}):(a(i),e.jsxs(e.Fragment,{children:[i,", ",o,"."]}))}function f({toolName:i}){return e.jsx(e.Fragment,{children:e.jsxs("ol",{children:[e.jsxs("li",{children:["Fetch the initial SSR data on the server-side.",e.jsx("blockquote",{children:e.jsxs("p",{children:["For example in"," ",e.jsx(n,{href:"/onBeforeRender",children:e.jsx("code",{children:"onBeforeRender()"})}),", or"," ",e.jsx(n,{href:"/onRenderHtml",children:e.jsx("code",{children:"onRenderHtml()"})})," ","if you don't use ",e.jsx(s,{name:!0}),"."]})})]}),e.jsxs("li",{children:["Make the initial SSR data available as ",e.jsx("code",{children:"pageContext.initialData"}),".",e.jsx("blockquote",{children:e.jsxs("p",{children:["See ",e.jsx(n,{href:"/pageContext#custom"}),"."]})})]}),e.jsxs("li",{children:["Make ",e.jsx("code",{children:"pageContext.initialData"})," available on the client-side.",e.jsx("blockquote",{children:e.jsxs("p",{children:["See ",e.jsx(n,{href:"/passToClient"}),"."]})})]}),e.jsxs("li",{children:["Initialize ",i||"your data fetching tool"," on the client-side with"," ",e.jsx("code",{children:"pageContext.initialData"}),".",e.jsx("blockquote",{children:e.jsxs("p",{children:["For example in"," ",e.jsx(n,{href:"/onBeforeRenderClient",children:e.jsx("code",{children:"onBeforeRenderClient()"})}),", or"," ",e.jsx(n,{href:"/onRenderClient",children:e.jsx("code",{children:"onRenderClient()"})})," ","if you don't use ",e.jsx(s,{name:!0}),"."]})})]})]})})}function p({toolName:i,vue:t}){return e.jsx(e.Fragment,{children:e.jsxs("ol",{children:[t&&e.jsxs("li",{children:["Initialize ",i||"your data fetching tool"," with ",e.jsx("code",{children:"app.use()"})," inside"," ",e.jsx(n,{href:"/onCreateApp",children:e.jsx("code",{children:"onCreateApp()"})}),"."]}),e.jsxs("li",{children:["Get the initial SSR state of the store and make it available as ",e.jsx("code",{children:"pageContext.initialStoreState"}),".",e.jsxs("blockquote",{children:[e.jsxs("p",{children:["For example in"," ",e.jsx(n,{href:"/onAfterRenderHtml",children:e.jsx("code",{children:"onAfterRenderHtml()"})}),", or"," ",e.jsx(n,{href:"/onRenderHtml",children:e.jsx("code",{children:"onRenderHtml()"})})," ","if you don't use ",e.jsx(s,{name:!0}),"."]}),e.jsxs("p",{children:["See also: ",e.jsx(n,{href:"/pageContext#custom"}),"."]})]})]}),e.jsxs("li",{children:["Make ",e.jsx("code",{children:"pageContext.initialStoreState"})," available on the client-side.",e.jsx("blockquote",{children:e.jsxs("p",{children:["See ",e.jsx(n,{href:"/passToClient"}),"."]})})]}),e.jsxs("li",{children:["Initialize ",i||"your data fetching tool"," on the client-side with"," ",e.jsx("code",{children:"pageContext.initialStoreState"}),".",e.jsx("blockquote",{children:e.jsxs("p",{children:["For example in"," ",e.jsx(n,{href:"/onBeforeRenderClient",children:e.jsx("code",{children:"onBeforeRenderClient()"})}),", or"," ",e.jsx(n,{href:"/onRenderClient",children:e.jsx("code",{children:"onRenderClient()"})})," ","if you don't use ",e.jsx(s,{name:!0}),"."]})})]})]})})}export{l as D,f as a,j as b,p as c};
