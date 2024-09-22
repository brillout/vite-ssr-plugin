import{j as e,o as r,i as a}from"../chunks/chunk-KSltIhmt.js";import{S as t}from"../chunks/chunk-Ctc-cCkj.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const o=[{pageSectionId:"routing",pageSectionLevel:2,pageSectionTitle:"Routing"},{pageSectionId:"render-control",pageSectionLevel:2,pageSectionTitle:"Render Control"},{pageSectionId:"data-fetching",pageSectionLevel:2,pageSectionTitle:"Data Fetching"}];function l(s){const n={blockquote:"blockquote",code:"code",em:"em",figure:"figure",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"routing",children:"Routing"}),`
`,e.jsxs(n.p,{children:[`Similarly to Nuxt,
we define a new page by creating a new `,e.jsx(n.code,{children:"+Page.vue"})," file."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"vue","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"vue","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"<!-- /pages/index/+Page.vue -->"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"<!-- Environment: browser and server -->"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"<"}),e.jsx(n.span,{style:{color:"#22863A"},children:"template"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  This page is rendered to HTML and interactive: <"}),e.jsx(n.span,{style:{color:"#22863A"},children:"Counter"}),e.jsx(n.span,{style:{color:"#24292E"},children:" />"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"template"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"<"}),e.jsx(n.span,{style:{color:"#22863A"},children:"script"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" setup"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" Counter "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" '../../components/Counter.vue'"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"script"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`,e.jsx(n.p,{children:"By default, Vike does Filesystem Routing."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`FILESYSTEM                  URL
/pages/index/+Page.vue      /
/pages/about/+Page.vue      /about
`})}),`
`,e.jsxs(n.p,{children:["We can also define a page's route with a ",e.jsx(n.em,{children:"Route String"})," (for parameterized routes such as ",e.jsx(n.code,{children:"/movies/@id"}),") or a ",e.jsx(n.em,{children:"Route Function"})," (for full programmatic flexibility)."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/index/+route.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Note how the two files share the same folder `/pages/index/`; this is how Vike"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// knows that `/pages/index/+route.js` defines the route of `/pages/index/+Page.vue`."})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Route Function"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#E36209"},children:" pageContext"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" =>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.urlPathname "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"==="}),e.jsx(n.span,{style:{color:"#032F62"},children:" '/'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// If we don't create a `+route.js` file then Vike does Filesystem Routing"})})]})})}),`
`,e.jsx("h2",{id:"render-control",children:"Render Control"}),`
`,e.jsx(n.p,{children:"Unlike Nuxt, we control how our pages are rendered."}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /renderer/+onRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: server"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { createSSRApp, h } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vue'"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { renderToString } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" '@vue/server-renderer'"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { escapeInject, dangerouslySkipEscape } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/server'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { onRenderHtml }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"data"}),e.jsx(n.span,{style:{color:"#24292E"},children:" } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" app"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" createSSRApp"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"    render"}),e.jsx(n.span,{style:{color:"#24292E"},children:": () "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" h"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(Page, data)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  })"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" appHtml"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" renderToString"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(app)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" title"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'Vite SSR'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" escapeInject"}),e.jsx(n.span,{style:{color:"#032F62"},children:"`<!DOCTYPE html>"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"    <html>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      <head>"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"        <title>${"}),e.jsx(n.span,{style:{color:"#24292E"},children:"title"}),e.jsx(n.span,{style:{color:"#032F62"},children:"}</title>"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      </head>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      <body>"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'        <div id="app">${'}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"dangerouslySkipEscape"}),e.jsx(n.span,{style:{color:"#032F62"},children:"("}),e.jsx(n.span,{style:{color:"#24292E"},children:"appHtml"}),e.jsx(n.span,{style:{color:"#032F62"},children:")"}),e.jsx(n.span,{style:{color:"#032F62"},children:"}</div>"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      </body>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"    </html>`"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /renderer/+onRenderClient.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: browser"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { createSSRApp, h } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vue'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { onRenderClient }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onRenderClient"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"data"}),e.jsx(n.span,{style:{color:"#24292E"},children:" } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" app"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" createSSRApp"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"    render"}),e.jsx(n.span,{style:{color:"#24292E"},children:": () "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" h"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(Page, data)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  })"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  app."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"mount"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'#app'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You may see ",e.jsx(n.code,{children:"import { createSSRApp, h } from 'vue'"}),` for the first time,
but every SSR app actually uses `,e.jsx(n.code,{children:"createSSRApp"})," and ",e.jsx(n.code,{children:"h"}),"."]}),`
`,e.jsx(n.p,{children:`Nuxt abstracts this away from us and gives us a slightly faster getting started. But this also means that we
lose control over a central piece of our app architecture and
we'll eventually lose more time circumventing Nuxt's limiting black box.`}),`
`]}),`
`,e.jsxs(n.p,{children:["This control enables us to ",e.jsx(n.em,{children:"easily"})," and ",e.jsx(n.em,{children:"naturally"})," integrate any tool we want (Vuex, GraphQL, Service Worker, ...)."]}),`
`,e.jsxs(n.p,{children:["Note how we defined the files ",e.jsx(n.code,{children:"onRenderClient.js"})," and ",e.jsx(n.code,{children:"onRenderHtml.js"})," in a directory called ",e.jsx(n.code,{children:"/renderer/"}),": that way, we tell Vike to apply the ",e.jsx(n.code,{children:"onRenderHtml()"})," and ",e.jsx(n.code,{children:"onRenderClient()"})," hooks to all our pages."]}),`
`,e.jsxs(n.p,{children:["This means we can now create a new page just by defining a new ",e.jsx(n.code,{children:"+Page.jsx"})," file (the ",e.jsx(n.code,{children:"+route.js"})," file is optional)."]}),`
`,e.jsxs(n.p,{children:["Plus files in ",e.jsx(n.code,{children:"/renderer/"})," can be overridden. For example, we can override the ",e.jsx(n.code,{children:"onRenderHtml()"})," and ",e.jsx(n.code,{children:"onRenderClient()"}),` hooks for rendering some of
our pages with a completely different UI framework such as React.`]}),`
`,e.jsx("h2",{id:"data-fetching",children:"Data Fetching"}),`
`,e.jsx(n.p,{children:"Let's now have a look at how to fetch data."}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"vue","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"vue","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"<!-- /pages/star-wars/movie/+Page.vue -->"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"<!-- Environment: browser and server -->"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"<"}),e.jsx(n.span,{style:{color:"#22863A"},children:"template"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(n.span,{style:{color:"#22863A"},children:"h1"}),e.jsx(n.span,{style:{color:"#24292E"},children:">{{movie.title}}</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"h1"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(n.span,{style:{color:"#22863A"},children:"p"}),e.jsx(n.span,{style:{color:"#24292E"},children:">Release Date: {{movie.release_date}}</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"p"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(n.span,{style:{color:"#22863A"},children:"p"}),e.jsx(n.span,{style:{color:"#24292E"},children:">Director: {{movie.director}}</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"p"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"template"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"<"}),e.jsx(n.span,{style:{color:"#22863A"},children:"script"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" lang"}),e.jsx(n.span,{style:{color:"#24292E"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:'"js"'}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" data"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" ["}),e.jsx(n.span,{style:{color:"#032F62"},children:"'movie'"}),e.jsx(n.span,{style:{color:"#24292E"},children:"]"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { props: data }"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"</"}),e.jsx(n.span,{style:{color:"#22863A"},children:"script"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/star-wars/movie/+route.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: server"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Route String"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#032F62"},children:" '/star-wars/@movieId'"})]})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/star-wars/movie/+data.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: server"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" fetch "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'node-fetch'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" data"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // The route parameter of `/star-wars/@movieId` is available at `pageContext.routeParams`"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"movieId"}),e.jsx(n.span,{style:{color:"#24292E"},children:" } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.routeParams"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // By default, +data.js files are loaded and executed only on the server-side"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // which means we can use SQL/ORM queries here."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" response"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" fetch"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"`https://star-wars.brillout.com/api/films/${"}),e.jsx(n.span,{style:{color:"#24292E"},children:"id"}),e.jsx(n.span,{style:{color:"#032F62"},children:"}.json`"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  let"}),e.jsx(n.span,{style:{color:"#24292E"},children:" movie "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#24292E"},children:" response."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"json"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Our render and hydrate functions we defined earlier pass `pageContext.data` to"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // the root Vue component `Page`; this is where we define it."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    movie"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:`That's it for the tour and we have actually already seen most of Vike's interface;
not only is Vike flexible but it's also simple to use!`}),`
`,e.jsx(t,{})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:i,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),f={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vue-tour/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{f as configValuesSerialized};
