import{j as e}from"./chunk-KSltIhmt.js";import{L as l}from"./chunk-DPhxMA0u.js";/* empty css              */function r(n){const s={code:"code",figure:"figure",p:"p",pre:"pre",span:"span",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"From the perspective of a server, Vike is just a middleware:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// renderPage() doesn't depend on Node.js and can be used within any JavaScript environment:"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Node.js, AWS, Cloudflare, Vercel, Deno, Bun, Lagon, ..."})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { renderPage } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'vike/server'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Any server: Express.js, Cloudflare Worker, AWS Lambda Function, Fastify, Hono, Nitro, ..."})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"server."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"addMiddleware"}),e.jsx(s.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  method: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'GET'"}),e.jsx(s.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  route: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'*'"}),e.jsx(s.span,{style:{color:"#24292E"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"// catch-all"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  async"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" handler"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#E36209"},children:"request"}),e.jsx(s.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"    const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" pageContextInit"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" { urlOriginal: request.url }"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"    const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" pageContext"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" renderPage"}),e.jsx(s.span,{style:{color:"#24292E"},children:"(pageContextInit)"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"    // `body` is the HTML of the page with a route matching pageContextInit.urlOriginal"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"    const"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"body"}),e.jsx(s.span,{style:{color:"#24292E"},children:", "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"statusCode"}),e.jsx(s.span,{style:{color:"#24292E"},children:", "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"headers"}),e.jsx(s.span,{style:{color:"#24292E"},children:" } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#24292E"},children:" pageContext.httpResponse"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"    const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" response"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" { body, statusCode, headers }"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"    return"}),e.jsx(s.span,{style:{color:"#24292E"},children:" response"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsxs(s.p,{children:["You can embed ",e.jsx(s.code,{children:"renderPage()"})," into any server."]}),`
`,e.jsxs(s.p,{children:["Alternatively, instead of using ",e.jsx(s.code,{children:"renderPage()"}),", you can ",e.jsx(l,{text:"pre-render",href:"/pre-rendering"})," your pages and remove the need for a production server (and deploy to a ",e.jsx(l,{text:"static host",href:"/static-hosts"})," instead)."]})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as M};
