import{j as t,u as U,a as v,E as b,r as S,L,o as F,i as A}from"../chunks/chunk-DM7AsBj_.js";/* empty css                      *//* empty css                      */import"../chunks/chunk-Be-9ij3x.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */function w({children:e}){return t.jsx("div",{style:{textAlign:"center"},children:e})}function V({children:e}){return t.jsx("div",{style:{maxWidth:400,display:"inline-block",marginTop:12,marginBottom:12},children:e})}function C({children:e}){return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"end",margin:"17px auto",maxWidth:700},children:e})}function k({username:e,avatarUrl:n}){const a=`https://github.com/${e}`,r=30,i=30;return t.jsx("a",{href:a,style:{margin:"5px 5px"},children:t.jsx("div",{style:{borderRadius:7,overflow:"hidden",width:r,height:i,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:t.jsx(d,{username:e,avatarUrl:n,width:r,height:i})})})}function d({imgSrc:e,avatarUrl:n,username:a,imgAlt:r,width:i,height:s,padding:c=0}){const l=Math.max(i,s);return n&&(e=e||`${n}&size=${l}`),a&&(e=e||`https://github.com/${a}.png?size=${l}`,r=r||a),t.jsx("img",{style:{width:`calc(100% - ${c}px)`,height:s-c,zIndex:2,objectFit:"contain"},src:e,alt:r})}function W({iconUrl:e,text:n,href:a}){return t.jsxs("a",{className:"button",style:{color:"inherit",display:"inline-flex",alignItems:"center",padding:"5px 10px",marginBottom:10},href:a,children:[t.jsx("img",{src:e,height:22})," ",t.jsx("span",{style:{marginLeft:7,fontSize:"1.07em"},children:n})]})}const M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20class='icon'%20stroke='rgb(248,%20113,%20113)'%20fill='rgb(248,%20113,%20113)'%3e%3cpath%20d='M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z'%3e%3c/path%3e%3c/svg%3e",T="/assets/static/medalGold.Ci230178.svg",B="/assets/static/medalSilver.CQp7MCjj.svg",N="/assets/static/medalBronze.CfwfaAQt.svg",D="data:image/svg+xml,%3csvg%20width='59.641mm'%20height='13.076mm'%20version='1.1'%20viewBox='0%200%2059.641%2013.076'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-91.006%20-265.33)'%3e%3cpath%20d='m103.72%20265.33s-2.2571%200.0965-2.6687%200.40101c-0.9913%200.76735-1.5833%202.111-1.5833%202.111l-3.6393%207.2347c-0.28736%200.57132-1.024%202.1272-1.3956%202.4918-0.55117%200.83221-2.8381%200.81625-3.4273%200.83715h59.641c-0.5892-0.0209-2.8761-5e-3%20-3.4273-0.83715-0.37156-0.36462-1.1082-1.9205-1.3956-2.4918l-3.6393-7.2347s-0.59202-1.3436-1.5833-2.111c-0.41164-0.30452-2.6683-0.40101-2.6683-0.40101h-28.632z'%20fill='%23ebebeb'/%3e%3c/g%3e%3c/svg%3e",I="data:image/svg+xml,%3csvg%20class='d-none%20d-block@md'%20width='148'%20height='28'%20viewBox='0%200%20148%2028'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M52.3%2018.8c-1%203.6-4%206-8.3%206-5.5%200-9.3-3.9-9.3-9.8%200-6.2%204.5-10.7%2011-10.7%202.5%200%204.3.6%205.3%201l.6%205.7h-.4c-2.3-3.6-4.3-5.9-6-5.9-2.3%200-4.1%202.8-4.1%207.3%200%205.7%203%207.9%206.4%207.9%201.9%200%203.6-.7%204.6-1.6h.2zM68%2014.6C68%209%2066.9%205%2064%205s-4%203.9-4%209.5%201.2%209.4%204%209.4%204-3.8%204-9.4m-14.6%200C53.4%209%2058.2%204.3%2064%204.3s10.6%204.8%2010.6%2010.3c0%205.5-4.8%2010.1-10.6%2010.1s-10.6-4.6-10.6-10.1M84.8%2024.2h-8.3V24c.6-2%201-3.5%201-6.9v-4.4c0-3-.6-4.6-2-6.3L83.6%204v4h.2c1-1.6%203.1-3.8%206.6-3.8%203.5%200%206%202.2%206%205.5v7.4c0%203.3.2%205%20.9%206.9H89c.7-2%201-3.7%201-6.8v-7.1c0-1.7-.8-3-2.7-3-1.5%200-2.7%201-3.5%202v8c0%203.3.3%205%201%206.9zM100.5%2019.3V5.8h-2.2v-.3l8-5.1h.5V5H121v.8h-14.2v13.3c0%202.4%201.3%203.1%202.8%203.1%201.4%200%202.3-.6%202.3-.6h.1c-.9%201.6-3%203.1-6.1%203.1-3.2%200-5.4-1.5-5.4-5.4'%3e%3c/path%3e%3cpath%20d='M113.9%2024.2V24c.6-2%201-3.5%201-6.9v-4.4c0-3%20.1-5.4-1.3-7v-.1L121%205v3.9c1.7-1.7%203.6-4.8%207-4.6l-.7%206.7h-.2a6.5%206.5%200%2000-4.1-2.4c-.6%200-1.3.5-1.8%201.2v7.4c0%203.3.3%205%201%206.9h-8.3zM138.4%2021v-6.8c-2.8.8-4.3%202.7-4.3%204.6%200%201.5.9%202.5%202.6%202.5.7%200%201.2-.1%201.7-.4m.1.8c-1.1%201.6-3%203-5.5%203-2.4%200-4.5-1.7-4.5-4.6%200-4.3%205.4-5.8%209.9-6.7v-2c0-2.4-1-3.5-3.8-3.5-1.5%200-3.4.3-5.1%201l-.2-.2c2-2.3%205-4.4%209.3-4.4%204.2%200%206.1%202.1%206.1%205.2v10.1c0%201%20.5%201.8%201.7%201.8.5%200%201-.1%201.5-.5l.1.2c-.6%201.3-2%203.6-5.3%203.6-2.4%200-3.8-1.3-4.2-3'%3e%3c/path%3e%3cpath%20d='M105.5%205.7H121v-1h-15.5v1zM14.8%2013h12.5c.2%200%20.3%200%20.3-.2v-.4c0-.1%200-.2-.2-.2-5.9-1.6-10.5-6.1-12-12L15%200h-.3c-.1%200-.2.1-.2.3v12.5c0%20.1%200%20.2.2.2zM14.8%2027.6h.4l.2-.2c1.6-5.9%206.1-10.5%2012-12l.2-.3v-.3c0-.1-.1-.3-.3-.3H14.8l-.2.3v12.5c0%20.2%200%20.3.2.3zM12.5%2027.6h.3c.1%200%20.2-.1.2-.3V14.8c0-.1%200-.3-.2-.3H.3c-.2%200-.3.2-.3.3v.4c0%20.1%200%20.2.2.2%205.9%201.5%2010.5%206.1%2012%2012l.3.2zM.3%2013h12.5c.1%200%20.2%200%20.2-.2V.3c0-.2%200-.3-.2-.3h-.4c-.1%200-.2%200-.2.2C10.6%206%206%2010.7.2%2012.2l-.2.3v.3c0%20.1.1.2.3.2z'%3e%3c/path%3e%3c/svg%3e",P="/assets/static/optimizers.CfS3Lz-z.svg",R="/assets/static/sourcegraph.-EO7u2PQ.svg",H="/assets/static/burdaforward.BpITuNbw.png",E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2075%2019'%3e%3cg%20fill='%23008009'%3e%3cpath%20d='M0%206.916v11.752h11.175V12.42H4.63v-1.99h4.092V8.65H4.63V6.805h6.545V.413H0v6.503ZM59.558.514h-4.63v18.22h4.63V.514ZM12.514%209.467v.113c0%205.126%201.4%209.28%206.68%209.28%202.146%200%204.495-.841%205.516-1.898v-5.986c-1.703%201.162-2.826%201.903-4.623%201.903-1.512%200-3.011-.838-3.011-3.292V9.46c0-2.454%201.505-3.291%203.01-3.291%201.798%200%202.921.74%204.624%201.902V2.084C23.69%201.027%2021.34.185%2019.194.185c-5.28%200-6.68%204.156-6.68%209.282ZM48.281%208.858c-.478-.15-.784-.25-1.766-.577-.677-.225-1.245-.467-1.28-1.023-.048-.73.829-.877%201.858-.852%202.358.055%205.5%201.408%205.544%201.413V1.241S50.138.125%2046.766.125c-4.976%200-6.145%202.813-6.145%204.955%200%202.55%202.055%203.9%205.256%205.06.491.157.784.248%201.766.576.677.225%201.245.467%201.28%201.023.048.73-.829.877-1.858.852-2.358-.055-6.12-1.853-6.163-1.858v6.579s3.118%201.56%206.49%201.56c4.976%200%206.44-2.814%206.366-4.955-.066-1.886-1.275-3.79-5.477-5.06ZM71.748.514H64.09l-3.255%2018.22h4.96l.506-3.126h3.232l.506%203.125h4.96L71.749.514ZM66.592%2013.83l1.326-8.32%201.328%208.318-2.654.002ZM32.88.178c-5.311%200-6.68%204.185-6.68%209.347s1.369%209.347%206.68%209.347c5.313%200%206.68-4.185%206.68-9.347%200-5.161-1.367-9.347-6.68-9.347Zm2.437%209.352c0%201.95-.717%203.532-2.433%203.532-1.717%200-2.323-1.581-2.324-3.532v-.01c0-1.95.607-3.532%202.324-3.532%201.716%200%202.432%201.581%202.433%203.532v.01Z'/%3e%3c/g%3e%3c/svg%3e",$="/assets/static/inlang.BdS3mee3.png",G="/assets/static/bluefin.C0y5hQrK.svg",Z="/assets/static/alignable.DF9tcAD8.svg",q=[{username:"arp"},{username:"tlancina"},{username:"shishkin17"},{username:"royalswe"},{username:"lebretont"},{username:"xar"},{username:"NicoZweifel"},{username:"mariuslian"},{username:"shortpoet"},{username:"sqs"},{username:"dylmye"},{username:"isakura313"},{username:"rivatove"},{username:"SMKJALLAD"},{username:"routinghub"},{username:"LostCrew"},{username:"jakubfiala"},{username:"HarshwardhanSingh"},{username:"d3x7r0"},{username:"ChristophP"},{username:"msiegenthaler"},{username:"linkyard"},{username:"AnukarOP"},{username:"RoyMcCrain"},{username:"chrisvander"},{username:"EralChen"},{username:"3dyuval"},{username:"talzion12"},{username:"felixhaeberle"},{username:"apappas1129"},{username:"phiberber"},{username:"cookieplace"},{username:"JiangWeixian"},{username:"harrytran998"},{username:"alexturpin"},{username:"gu-stav"},{username:"YannBirba"},{username:"fi3ework"},{username:"EJM-Company"},{username:"Nelie-Taylor"},{username:"fortezhuo"},{username:"nshelia"},{username:"marcusway"},{username:"edikdeisling"},{username:"AurelienLourot"},{username:"jahredhope"},{username:"charlieforward9"},{username:"leonmondria"},{username:"jscottsf"},{username:"micah-redwood"},{username:"nicka-redwood"},{username:"ser1us"},{username:"nikitavoloboev"},{username:"samuelstroschein"},{username:"npacucci"},{username:"szarapka"},{username:"techniath"},{username:"DannyZB"},{username:"pieperz"},{username:"hemengke1997"},{username:"spacedawwwg"},{username:"arthurgailes"},{username:"stackblitz"},{username:"codthing"},{username:"Junaidhkn"},{username:"zgfdev"}],J=[{companyName:"Contra",companyLogo:I,plan:"silver",website:"https://contra.com",github:"contra"},{companyName:"Inlang",companyLogo:$,plan:"silver",website:"https://inlang.com/",github:"opral"},{companyName:"Alignable",companyLogo:Z,plan:"silver",website:"https://www.alignable.com/",github:"AlignableUser"},{companyName:"Sourcegraph",companyLogo:R,plan:"bronze",website:"https://sourcegraph.com",github:"sourcegraph"},{companyName:"Optimizers",companyLogo:P,plan:"bronze",website:"https://www.optimizers.nl/",divSize:{padding:20},github:"OptimizersGroup"},{companyName:"BurdaFoward",companyLogo:H,plan:"bronze",website:"https://www.burda-forward.de",github:"BurdaForward"},{companyName:"Ecosia",companyLogo:E,plan:"bronze",website:"https://ecosia.org",github:"ecosia"},{companyName:"Bluefin",companyLogo:G,plan:"indie",website:"https://www.bluefin.one",github:"bluefin-clinical"}],x=[...J,...q];function O(){const e=U(),{projectInfo:n}=e.config,a=e.config.sponsorGithubAccount||"brillout",r=x.filter(m),i=x.filter(p);return t.jsxs(w,{children:[t.jsx(W,{iconUrl:M,text:"Sponsor",href:`https://github.com/sponsors/${a}`}),t.jsx("div",{}),t.jsxs(V,{children:[n.projectName," is free and open source, made possible by wonderful sponsors."]}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"end"},children:r.map((s,c)=>t.jsx(f,{sponsor:s},c))}),t.jsx(C,{children:i.map((s,c)=>t.jsx(f,{sponsor:s},c))})]})}function f({sponsor:e}){return p(e)?t.jsx(k,{username:e.username}):t.jsx(Q,{sponsor:e})}function Q({sponsor:e}){v(m(e));const n=e.companyLogo,a=e.companyName,{width:r,height:i,padding:s}=tt(e),c=20,l=10;return t.jsxs("a",{href:e.website,style:{margin:`${c}px ${l}px`},children:[t.jsx(_,{sponsor:e}),t.jsx("div",{style:{backgroundColor:"#ebebeb",borderRadius:7,overflow:"hidden",width:r,maxWidth:`calc(100vw - 2 * var(--main-view-padding) - 2 * ${l}px)`,height:i,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:t.jsx(d,{imgSrc:n,imgAlt:a,width:r,height:i,padding:s})})]})}function _({sponsor:e}){v(m(e));const n=K(e),a=X(e),r=Y(e);return t.jsxs("div",{style:{top:0,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",paddingBottom:1},children:[n,a,r]})}function K(e){const n=e.plan==="platinum"?32:24;return t.jsx("img",{src:D,style:{height:n,position:"absolute",bottom:0}})}function Y(e){if(e.plan==="platinum")return t.jsx(t.Fragment,{});let n;return["bronze","silver","gold","indie"].includes(e.plan)&&(n=1),t.jsxs(t.Fragment,{children:[" ",t.jsx("span",{style:{zIndex:1,fontSize:"0.82em",position:"relative",top:0,fontWeight:500,color:"#666",letterSpacing:n},children:et(e.plan)})]})}function X(e){let n;return e.plan==="platinum"?t.jsx(b,{name:"trophy",style:{fontSize:"1.3em",position:"relative"}}):e.plan==="indie"?t.jsx(b,{name:"ribbon",style:{fontSize:"0.9em",position:"relative",top:1}}):(e.plan==="gold"?n=T:e.plan==="silver"?n=B:e.plan==="bronze"?n=N:v(!1),t.jsx("img",{src:n,style:{height:15,zIndex:1,marginRight:5}}))}function tt(e){const{plan:n}=e;let a;return n==="platinum"&&(a={width:500,height:180,padding:100}),n==="gold"&&(a={width:400,height:150,padding:95}),n==="silver"&&(a={width:300,height:100,padding:45}),n==="bronze"&&(a={width:200,height:70,padding:30}),n==="indie"&&(a={width:140,height:50,padding:20}),v(a),e.divSize&&Object.assign(a,e.divSize),a}function et(e){return e[0].toUpperCase()+e.slice(1)}function m(e){return!p(e)}function p(e){return"username"in e}const j=[{username:"brillout",firstName:"Rom",roles:[t.jsx(t.Fragment,{children:"Vike Core (Lead Maintainer, Creator)"}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-react"})," (Lead Maintainer, Creator)"]}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-vue"})," (Contributor)"]})]},{username:"magne4000",firstName:"Joël",roles:[t.jsx(t.Fragment,{children:"Bati (Lead Maintainer, Creator)"}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-solid"})," (Lead Maintainer, Creator)"]}),t.jsx(t.Fragment,{children:"Vike Core (Contributor)"})]},{username:"nitedani",firstName:"Dániel",roles:[t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-react-query"})," (Lead Maintainer, Creator)"]}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-angular"})," (Lead Maintainer, Creator)"]}),t.jsx(t.Fragment,{children:"Vike Core (Contributor)"})]},{username:"phonzammi",firstName:"Muhammad",roles:[t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-vue"})," (Contributor)"]}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-solid"})," (Contributor)"]}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-react"})," (Contributor)"]})]},{username:"4350pChris",firstName:"Chris",roles:[t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-pinia"})," (Lead Maintainer, Creator)"]}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-vue"})," (Contributor)"]}),t.jsx(t.Fragment,{children:"Vike Core (Contributor)"})]},{username:"AurelienLourot",firstName:"Aurélien",roles:[t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-vue"})," (Contributor)"]}),t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"vike-react"})," (Contributor)"]}),t.jsx(t.Fragment,{children:"Vike Core (Contributor)"})]}];var z=[{login:"brillout",avatarUrl:"https://avatars.githubusercontent.com/u/1005638?v=4",contributions:10956},{login:"magne4000",avatarUrl:"https://avatars.githubusercontent.com/u/1098371?v=4",contributions:985},{login:"AurelienLourot",avatarUrl:"https://avatars.githubusercontent.com/u/11795312?v=4",contributions:677},{login:"nitedani",avatarUrl:"https://avatars.githubusercontent.com/u/67418286?v=4",contributions:313},{login:"Aslemammad",avatarUrl:"https://avatars.githubusercontent.com/u/37929992?v=4",contributions:198},{login:"renovate[bot]",avatarUrl:"https://avatars.githubusercontent.com/in/2740?v=4",contributions:118},{login:"phonzammi",avatarUrl:"https://avatars.githubusercontent.com/u/39896528?v=4",contributions:52},{login:"4350pChris",avatarUrl:"https://avatars.githubusercontent.com/u/20907452?v=4",contributions:38},{login:"usk94",avatarUrl:"https://avatars.githubusercontent.com/u/66470480?v=4",contributions:35},{login:"redbar0n",avatarUrl:"https://avatars.githubusercontent.com/u/459282?v=4",contributions:28},{login:"rtritto",avatarUrl:"https://avatars.githubusercontent.com/u/40242971?v=4",contributions:16},{login:"dependabot[bot]",avatarUrl:"https://avatars.githubusercontent.com/in/29110?v=4",contributions:14},{login:"gryphonmyers",avatarUrl:"https://avatars.githubusercontent.com/u/5785304?v=4",contributions:13},{login:"Axxxx0n",avatarUrl:"https://avatars.githubusercontent.com/u/19538995?v=4",contributions:13},{login:"XiNiHa",avatarUrl:"https://avatars.githubusercontent.com/u/8155259?v=4",contributions:12},{login:"Kenzo-Wada",avatarUrl:"https://avatars.githubusercontent.com/u/79452224?v=4",contributions:12},{login:"louwers",avatarUrl:"https://avatars.githubusercontent.com/u/649392?v=4",contributions:12},{login:"bnn1",avatarUrl:"https://avatars.githubusercontent.com/u/55663639?v=4",contributions:9},{login:"bartenra",avatarUrl:"https://avatars.githubusercontent.com/u/77667589?v=4",contributions:9},{login:"samuelstroschein",avatarUrl:"https://avatars.githubusercontent.com/u/35429197?v=4",contributions:7},{login:"patryk-smc",avatarUrl:"https://avatars.githubusercontent.com/u/37963339?v=4",contributions:7},{login:"yoroshikun",avatarUrl:"https://avatars.githubusercontent.com/u/1892447?v=4",contributions:6},{login:"blckngm",avatarUrl:"https://avatars.githubusercontent.com/u/6764397?v=4",contributions:5},{login:"rslonik",avatarUrl:"https://avatars.githubusercontent.com/u/1181489?v=4",contributions:5},{login:"infomiho",avatarUrl:"https://avatars.githubusercontent.com/u/2223680?v=4",contributions:5},{login:"sapphi-red",avatarUrl:"https://avatars.githubusercontent.com/u/49056869?v=4",contributions:4},{login:"jrson83",avatarUrl:"https://avatars.githubusercontent.com/u/45284565?v=4",contributions:4},{login:"TimJohns",avatarUrl:"https://avatars.githubusercontent.com/u/1420814?v=4",contributions:4},{login:"deckchairlabs",avatarUrl:"https://avatars.githubusercontent.com/u/7539725?v=4",contributions:4},{login:"Amfeon",avatarUrl:"https://avatars.githubusercontent.com/u/19505887?v=4",contributions:3},{login:"justablob",avatarUrl:"https://avatars.githubusercontent.com/u/40399431?v=4",contributions:3},{login:"stephensamra",avatarUrl:"https://avatars.githubusercontent.com/u/8583469?v=4",contributions:3},{login:"crummy",avatarUrl:"https://avatars.githubusercontent.com/u/690626?v=4",contributions:3},{login:"CanRau",avatarUrl:"https://avatars.githubusercontent.com/u/5196971?v=4",contributions:3},{login:"uifox",avatarUrl:"https://avatars.githubusercontent.com/u/23026286?v=4",contributions:3},{login:"alexrabin",avatarUrl:"https://avatars.githubusercontent.com/u/15949910?v=4",contributions:3},{login:"alessbell",avatarUrl:"https://avatars.githubusercontent.com/u/5139846?v=4",contributions:3},{login:"Abhirup-99",avatarUrl:"https://avatars.githubusercontent.com/u/48902681?v=4",contributions:3},{login:"hemengke1997",avatarUrl:"https://avatars.githubusercontent.com/u/49073282?v=4",contributions:3},{login:"vchirikov",avatarUrl:"https://avatars.githubusercontent.com/u/40987940?v=4",contributions:2},{login:"nabi-chan",avatarUrl:"https://avatars.githubusercontent.com/u/42037851?v=4",contributions:2},{login:"AaronBeaudoin",avatarUrl:"https://avatars.githubusercontent.com/u/26592486?v=4",contributions:2},{login:"chrisvariety",avatarUrl:"https://avatars.githubusercontent.com/u/44855?v=4",contributions:2},{login:"thomasruiz",avatarUrl:"https://avatars.githubusercontent.com/u/3023617?v=4",contributions:2},{login:"wobsoriano",avatarUrl:"https://avatars.githubusercontent.com/u/13049130?v=4",contributions:2},{login:"kochrt",avatarUrl:"https://avatars.githubusercontent.com/u/10823320?v=4",contributions:2},{login:"rand",avatarUrl:"https://avatars.githubusercontent.com/u/2835?v=4",contributions:2},{login:"Perlover",avatarUrl:"https://avatars.githubusercontent.com/u/574333?v=4",contributions:2},{login:"wilcoxmd",avatarUrl:"https://avatars.githubusercontent.com/u/11249405?v=4",contributions:2},{login:"jeremypress",avatarUrl:"https://avatars.githubusercontent.com/u/2474027?v=4",contributions:2},{login:"arthurgailes",avatarUrl:"https://avatars.githubusercontent.com/u/29307425?v=4",contributions:2},{login:"ferdinando-ferreira",avatarUrl:"https://avatars.githubusercontent.com/u/11506327?v=4",contributions:2},{login:"BanDroid",avatarUrl:"https://avatars.githubusercontent.com/u/68449470?v=4",contributions:2},{login:"ivangreene",avatarUrl:"https://avatars.githubusercontent.com/u/27399986?v=4",contributions:2},{login:"SquCode",avatarUrl:"https://avatars.githubusercontent.com/u/103045198?v=4",contributions:2},{login:"JiangWeixian",avatarUrl:"https://avatars.githubusercontent.com/u/6839576?v=4",contributions:2},{login:"mittalyashu",avatarUrl:"https://avatars.githubusercontent.com/u/29014463?v=4",contributions:1},{login:"val1984",avatarUrl:"https://avatars.githubusercontent.com/u/3774962?v=4",contributions:1},{login:"timnghg",avatarUrl:"https://avatars.githubusercontent.com/u/140995877?v=4",contributions:1},{login:"SumitBando",avatarUrl:"https://avatars.githubusercontent.com/u/248569?v=4",contributions:1},{login:"serajhqi",avatarUrl:"https://avatars.githubusercontent.com/u/7148972?v=4",contributions:1},{login:"romanlamsal",avatarUrl:"https://avatars.githubusercontent.com/u/21622545?v=4",contributions:1},{login:"richard-unterberg",avatarUrl:"https://avatars.githubusercontent.com/u/34207253?v=4",contributions:1},{login:"philwinder",avatarUrl:"https://avatars.githubusercontent.com/u/8793723?v=4",contributions:1},{login:"ptb",avatarUrl:"https://avatars.githubusercontent.com/u/5335?v=4",contributions:1},{login:"isakura313",avatarUrl:"https://avatars.githubusercontent.com/u/18578858?v=4",contributions:1},{login:"develohpanda",avatarUrl:"https://avatars.githubusercontent.com/u/4312346?v=4",contributions:1},{login:"carlssonk",avatarUrl:"https://avatars.githubusercontent.com/u/66022459?v=4",contributions:1},{login:"sibbng",avatarUrl:"https://avatars.githubusercontent.com/u/19991745?v=4",contributions:1},{login:"kumarasinghe",avatarUrl:"https://avatars.githubusercontent.com/u/6898293?v=4",contributions:1},{login:"yxonic",avatarUrl:"https://avatars.githubusercontent.com/u/5838109?v=4",contributions:1},{login:"ahsan-a",avatarUrl:"https://avatars.githubusercontent.com/u/50714675?v=4",contributions:1},{login:"bluwy",avatarUrl:"https://avatars.githubusercontent.com/u/34116392?v=4",contributions:1},{login:"bzy-debug",avatarUrl:"https://avatars.githubusercontent.com/u/71200607?v=4",contributions:1},{login:"Codpoe",avatarUrl:"https://avatars.githubusercontent.com/u/16123335?v=4",contributions:1},{login:"dymart",avatarUrl:"https://avatars.githubusercontent.com/u/75967319?v=4",contributions:1},{login:"jobarah",avatarUrl:"https://avatars.githubusercontent.com/u/49913937?v=4",contributions:1},{login:"mikew",avatarUrl:"https://avatars.githubusercontent.com/u/4729?v=4",contributions:1},{login:"oliverpool",avatarUrl:"https://avatars.githubusercontent.com/u/3864879?v=4",contributions:1},{login:"richvoronov",avatarUrl:"https://avatars.githubusercontent.com/u/26653363?v=4",contributions:1},{login:"rudevdr",avatarUrl:"https://avatars.githubusercontent.com/u/19689713?v=4",contributions:1},{login:"ruucm",avatarUrl:"https://avatars.githubusercontent.com/u/33462905?v=4",contributions:1},{login:"taishinaritomi",avatarUrl:"https://avatars.githubusercontent.com/u/79634025?v=4",contributions:1},{login:"tomocrafter",avatarUrl:"https://avatars.githubusercontent.com/u/10905364?v=4",contributions:1},{login:"whotookzakum",avatarUrl:"https://avatars.githubusercontent.com/u/5891527?v=4",contributions:1},{login:"ejm-hyesung",avatarUrl:"https://avatars.githubusercontent.com/u/112405757?v=4",contributions:1},{login:"gabbloquet",avatarUrl:"https://avatars.githubusercontent.com/u/25029077?v=4",contributions:1},{login:"FlorianCassayre",avatarUrl:"https://avatars.githubusercontent.com/u/9027075?v=4",contributions:1},{login:"dusklight00",avatarUrl:"https://avatars.githubusercontent.com/u/71203637?v=4",contributions:1},{login:"devmor-j",avatarUrl:"https://avatars.githubusercontent.com/u/88786674?v=4",contributions:1},{login:"dantownsend",avatarUrl:"https://avatars.githubusercontent.com/u/350976?v=4",contributions:1},{login:"dan-lee",avatarUrl:"https://avatars.githubusercontent.com/u/571589?v=4",contributions:1},{login:"dajinchu",avatarUrl:"https://avatars.githubusercontent.com/u/7122182?v=4",contributions:1},{login:"charlieforward9",avatarUrl:"https://avatars.githubusercontent.com/u/62311337?v=4",contributions:1},{login:"flybayer",avatarUrl:"https://avatars.githubusercontent.com/u/8813276?v=4",contributions:1},{login:"birkskyum",avatarUrl:"https://avatars.githubusercontent.com/u/74932975?v=4",contributions:1},{login:"binhonglee",avatarUrl:"https://avatars.githubusercontent.com/u/16726210?v=4",contributions:1},{login:"andrew8er",avatarUrl:"https://avatars.githubusercontent.com/u/179225?v=4",contributions:1},{login:"hellboywar",avatarUrl:"https://avatars.githubusercontent.com/u/10296831?v=4",contributions:1},{login:"alesvaupotic",avatarUrl:"https://avatars.githubusercontent.com/u/1660347?v=4",contributions:1},{login:"aleclarson",avatarUrl:"https://avatars.githubusercontent.com/u/1925840?v=4",contributions:1},{login:"mattborghi",avatarUrl:"https://avatars.githubusercontent.com/u/11933424?v=4",contributions:1},{login:"mwojtul",avatarUrl:"https://avatars.githubusercontent.com/u/1596316?v=4",contributions:1},{login:"marcustut",avatarUrl:"https://avatars.githubusercontent.com/u/59773847?v=4",contributions:1},{login:"Jackie1210",avatarUrl:"https://avatars.githubusercontent.com/u/14737221?v=4",contributions:1},{login:"luisfloat",avatarUrl:"https://avatars.githubusercontent.com/u/91754457?v=4",contributions:1},{login:"leerob",avatarUrl:"https://avatars.githubusercontent.com/u/9113740?v=4",contributions:1},{login:"seniorquico",avatarUrl:"https://avatars.githubusercontent.com/u/415806?v=4",contributions:1},{login:"yakovlevkll",avatarUrl:"https://avatars.githubusercontent.com/u/24398502?v=4",contributions:1},{login:"zyxkad",avatarUrl:"https://avatars.githubusercontent.com/u/91082411?v=4",contributions:1},{login:"jensbodal",avatarUrl:"https://avatars.githubusercontent.com/u/5542624?v=4",contributions:1},{login:"lemredd",avatarUrl:"https://avatars.githubusercontent.com/u/68067933?v=4",contributions:1},{login:"jannesblobel",avatarUrl:"https://avatars.githubusercontent.com/u/72493222?v=4",contributions:1},{login:"Immortalin",avatarUrl:"https://avatars.githubusercontent.com/u/7126128?v=4",contributions:1},{login:"Hebilicious",avatarUrl:"https://avatars.githubusercontent.com/u/13395944?v=4",contributions:1},{login:"gu-stav",avatarUrl:"https://avatars.githubusercontent.com/u/2244375?v=4",contributions:1},{login:"ngeorge07",avatarUrl:"https://avatars.githubusercontent.com/u/89146378?v=4",contributions:1},{login:"afkcodes",avatarUrl:"https://avatars.githubusercontent.com/u/17390257?v=4",contributions:1},{login:"benmccann",avatarUrl:"https://avatars.githubusercontent.com/u/322311?v=4",contributions:1},{login:"hagaigold",avatarUrl:"https://avatars.githubusercontent.com/u/29140318?v=4",contributions:1},{login:"rnovacek",avatarUrl:"https://avatars.githubusercontent.com/u/618886?v=4",contributions:1},{login:"AlecAivazis",avatarUrl:"https://avatars.githubusercontent.com/u/916317?v=4",contributions:1},{login:"thecotne",avatarUrl:"https://avatars.githubusercontent.com/u/1606993?v=4",contributions:1},{login:"bvanjoi",avatarUrl:"https://avatars.githubusercontent.com/u/30187863?v=4",contributions:1}];function nt(){const e=U(),{projectInfo:n}=e.config;return t.jsxs(w,{children:[t.jsxs("p",{style:{maxWidth:400,display:"inline-block",fontSize:"1.2em"},children:[n.projectName," is built and maintained by passionate contributors."]}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"end"},children:j.map((a,r)=>t.jsx(at,{maintainer:a},r))}),t.jsx(C,{children:z.filter(a=>!a.login.includes("[bot]")&&!j.map(r=>r.username).includes(a.login)).map((a,r)=>t.jsx(k,{username:a.login,avatarUrl:a.avatarUrl},r))})]})}function at({maintainer:e}){const i=`https://github.com/${e.username}`;return t.jsxs("div",{style:{borderRadius:7,borderWidth:1,borderStyle:"solid",borderColor:"#e0e0e0",overflow:"hidden",width:430,maxWidth:"calc(100vw - 2 * var(--main-view-padding) - 2 * 10px)",margin:"20px 10px",display:"flex",flexWrap:"wrap",padding:20,gap:20,textAlign:"left"},children:[t.jsx("a",{href:i,children:t.jsx("div",{style:{width:50,height:50,borderRadius:50/2,overflow:"hidden"},children:t.jsx(d,{username:e.username,avatarUrl:rt(e),imgAlt:e.firstName,width:50,height:50})})}),t.jsxs("div",{children:[t.jsx("b",{children:e.firstName})," ·"," ",t.jsx("a",{href:i,children:t.jsx("i",{style:{fontSize:".9em",color:"#505050"},children:e.username})}),e.consultingUrl?t.jsxs(t.Fragment,{children:[" ","·"," ",t.jsx("a",{href:e.consultingUrl,children:t.jsx("b",{style:{fontSize:".7em",color:"white",backgroundColor:"#305090",padding:"1px 5px 2px 5px",verticalAlign:"text-top",borderRadius:3},children:"consulting"})})]}):null,t.jsx("ul",{style:{fontSize:".8em",paddingLeft:15,marginTop:5,marginBottom:0},children:e.roles.map((s,c)=>t.jsx("li",{children:s},c))})]})]})}function rt(e){for(const n of z)if(e.username===n.login)return n.avatarUrl;throw new Error(`Maintainer ${e.username} not found in contributors' list.`)}const it="/assets/static/vike-nitedani_169x230.BkLwVI6Z.png";function ot(){return t.jsxs("div",{id:"header-logo",children:[t.jsx("img",{src:it}),t.jsxs("div",{children:[t.jsxs("h1",{children:["Next Generation",t.jsx("br",{}),"Frontend Framework"]}),t.jsx("p",{id:"header-tagline",children:"Next.js/Nuxt alternative. Flexible, reliable, fast, clutter⁠-⁠free, community⁠-⁠driven."})]})]})}function st(){return t.jsxs("div",{id:"feature-list",children:[t.jsx(ct,{}),t.jsx(lt,{}),t.jsx(ut,{}),t.jsx(ht,{}),t.jsx(vt,{})]})}function ct(){return t.jsxs(h,{children:[t.jsx(u,{color:"blue",children:"Flexible"}),t.jsxs(g,{children:[t.jsxs(o,{children:[t.jsx("h3",{children:"Any tool"}),t.jsx("p",{children:"You can use any:"}),t.jsxs("ul",{style:{paddingLeft:30,marginTop:-12},children:[t.jsx("li",{children:"UI framework (React/Vue/Solid/...)"}),t.jsx("li",{children:"Rendering strategy (SPA/SSR/SSG/...)"}),t.jsx("li",{children:"Data fetching (RPC/REST/GraphQL/...)"}),t.jsx("li",{children:"Server (Express.js/Hono/Fastify/...) "}),t.jsx("li",{children:"Deployment (VPS/serverless/static/...)"})]})]}),t.jsxs(o,{children:[t.jsx("h3",{children:"Ejectable extensions"}),t.jsx("p",{children:"Vike extensions integrate tools on your behalf. Later, if the need arises, eject extensions for full control over how tools integrate."})]}),t.jsxs(o,{children:[t.jsx("h3",{children:"Less blockers"}),t.jsx("p",{children:"Blockers are treated with high priority, empowering you to build what you want and need."}),t.jsx("p",{children:"If you create a feature request and explain how it's blocking you then we bump its priority."})]})]})]})}function lt(){return t.jsxs(h,{children:[t.jsx(u,{color:"#f900ff",children:"Reliable"}),t.jsxs(g,{children:[t.jsxs(o,{style:{maxWidth:490},children:[t.jsx("h3",{children:"Batteries included"}),t.jsx("p",{children:"Includes all features you'd expect from a modern framework: filesystem routing, pre-rendering, data fetching, layouts, i18n, prefetching & preloading, HTML streaming, URL redirects & rewrites, route guards, ..."})]}),t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Less bugs"}),t.jsx("p",{children:"We quickly fix bugs (usually under 24 hours)."})]}),t.jsxs(o,{style:{maxWidth:490},children:[t.jsx("h3",{children:"Aligned interests"}),t.jsx("p",{children:"Vike's revenue comes from companies that use Vike, which means that the business interests of Vike and its users are aligned."})]}),t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Responsive"}),t.jsx("p",{children:"We are responsive, and we provide a clear guideline on how to reach out and get reliable help from us."})]})]})]})}function ut(){return t.jsxs(h,{children:[t.jsx(u,{color:"#ffed2e",children:"Fast"}),t.jsxs(g,{children:[t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Prefetch & cache"}),t.jsx("p",{children:"Vike's existing and upcoming prefetch and cache utilities enable you to develop blazing fast user experiences."})]}),t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Next-gen scaffolder"}),t.jsx("p",{children:"Use our next-generation scaffolder to jump start with a fully functional app."})]}),t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Vite"}),t.jsx("p",{children:"Powered by Vite, for a lightning fast developer experience."})]})]})]})}function ht(){return t.jsxs(h,{children:[t.jsx(u,{color:"#c3c3c3",children:"Clutter-free"}),t.jsx(gt,{children:t.jsxs("div",{style:{maxWidth:800,marginTop:-30},children:[t.jsx("p",{children:"Vike follows the do-one-thing-do-it-well philosophy: Vike's core is a flexible and robust foundation, and on top of it you cherry-pick Vike extensions to get powerful tailored features."}),t.jsx("p",{children:"Vike's architecture can accommodate any kind of websites, from simple marketing pages to enterprise applications with complex requirements."})]})})]})}function vt(){return t.jsxs(h,{children:[t.jsx(u,{color:"#1bd91b",children:"Community-driven"}),t.jsxs(g,{children:[t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Community prioritization"}),t.jsx("p",{children:"We listen to users, engage in conversations, and prioritize accordingly."})]}),t.jsxs(o,{style:{maxWidth:390},children:[t.jsx("h3",{children:"Community innovation"}),t.jsx("p",{children:"Vike's modular architecture enables community-driven innovation, fostering an ecosystem more innovative than any single organization can be."})]})]})]})}function u({children:e,color:n}){const a=S.useRef(null),r={textDecoration:"underline",textUnderlineOffset:"0.1em",textDecorationThickness:"0.1em",textDecorationColor:n};return t.jsx("h2",{ref:a,style:{position:"relative",...r},children:e})}function h({children:e}){return t.jsx("div",{className:"feature-unit",style:{backgroundColor:"var(--bg-color)"},children:t.jsx("div",{style:{maxWidth:1200,margin:"auto"},children:e})})}function g(e){return t.jsx("div",{...e,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10,...e.style}})}function o(e){return t.jsx("div",{...e,style:{flexGrow:1,minWidth:300,maxWidth:500,...e.style}})}function gt(e){return t.jsx("div",{...e,style:{display:"flex",justifyContent:"center",...e.style}})}function dt(){return t.jsxs(t.Fragment,{children:[t.jsx(ot,{}),t.jsx(st,{}),t.jsxs(y,{children:[t.jsx("div",{style:{height:26}}),t.jsx(O,{})]}),t.jsx("a",{id:"team"}),t.jsxs(y,{children:[t.jsx("div",{style:{height:16}}),t.jsx(nt,{}),t.jsx("div",{style:{height:50}})]})]})}function y({children:e}){return t.jsx("div",{style:{backgroundColor:"var(--bg-color)",display:"flex",justifyContent:"center",paddingBottom:20,marginTop:"var(--block-margin)"},children:t.jsx("div",{style:{maxWidth:1e3},children:e})})}const mt=Object.freeze(Object.defineProperty({__proto__:null,Page:dt},Symbol.toStringTag,{value:"Module"})),zt={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:L}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:F}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:mt}}};export{zt as configValuesSerialized};