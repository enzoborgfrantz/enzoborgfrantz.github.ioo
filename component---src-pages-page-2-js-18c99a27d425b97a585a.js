(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(198),o=a(205),c=a(203);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Page two"}),i.a.createElement("h1",null,"Hi from the second page"),i.a.createElement("p",null,"Welcome to page 2"),i.a.createElement(r.a,{to:"/"},"Go back to the homepage"))}},198:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(66),o=a.n(r);a.d(t,"a",function(){return o.a});a(199),a(9).default.enqueue,i.a.createContext({})},199:function(e,t,a){var n;e.exports=(n=a(202))&&n.default||n},201:function(e){e.exports={data:{site:{siteMetadata:{title:"enzoborgfrantz"}}}}},202:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),i=a.n(n),r=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},203:function(e,t,a){"use strict";var n=a(204),i=a(0),r=a.n(i),o=a(212),c=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a,style:{height:"100%"}},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},204:function(e){e.exports={data:{site:{siteMetadata:{title:"enzoborgfrantz",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},205:function(e,t,a){"use strict";var n=a(201),i=a(0),r=a.n(i),o=a(198),c=a(197),l=Object(c.c)(o.a).withConfig({displayName:"Menu__MenuItem",componentId:"sc-13vj53r-0"})(["border-radius:2px;color:white;padding:5px 15px;font-size:20px;font-family:monospace;height:40px;line-height:30px;cursor:pointer;opacity:0.85;border:1px solid white;transition:opacity 0.15s ease-in;text-decoration:none;box-sizing:border-box;&:hover{opacity:1;}"]),s=c.c.div.withConfig({displayName:"Menu",componentId:"sc-13vj53r-1"})(["display:flex;width:100%;padding:25px 0;white-space:nowrap;cursor:pointer;overflow-x:scroll;> *{&:not(:first-child){margin-left:10px;}}&::-webkit-scrollbar{display:none;}"]),p=a(209),d=a(210),m=a(207),u=a(208),g=c.c.div.withConfig({displayName:"SocialMediaMenu__SocialMediaMenuWrapper",componentId:"sc-11tjfqc-0"})(["> *{color:white;opacity:0.85;transition:opacity 0.15s ease-in;&:hover{opacity:1;cursor:pointer;}}"]),f=function(){return r.a.createElement(g,null,r.a.createElement(m.a,{size:40}),r.a.createElement(u.a,{size:40}),r.a.createElement(p.a,{size:40}),r.a.createElement(d.a,{size:40}))},h=c.c.div.withConfig({displayName:"Container",componentId:"c6dge0-0"})(["border:2px solid white;border-radius:5px;width:100%;padding:25px;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);"]),x=c.c.img.attrs({src:"https://i.imgur.com/RUlnL48.png"}).withConfig({displayName:"ProfilePicture",componentId:"sc-1jdxpc0-0"})(["height:100px;width:100px;border-radius:15px;padding:5px;margin:0;"]),y=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.a,{to:"/",style:{color:"#cca8e9",textDecoration:"none",fontWeight:200,fontSize:"60px",textAlign:"center"}},t))))};y.defaultProps={siteTitle:""};a(211);function w(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  html { \n    height: 100%;\n  }\n  body {\n    background-color: #030f32;\n    height: 100%;\n  }\n"]);return w=function(){return e},e}var b=Object(c.a)(w()),E=c.c.div.withConfig({displayName:"layout__Heading",componentId:"ii2kc2-0"})(["display:flex;align-items:center;padding-left:32px;"]),v=c.c.h1.withConfig({displayName:"layout__Headline",componentId:"ii2kc2-1"})(["color:#ffa3ac;font-weight:600;margin:0;"]);t.a=function(e){var t=e.children;n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(E,null,r.a.createElement(x,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignSelf:"center"}},r.a.createElement(v,null,"enzoborgfrantz"),r.a.createElement(f,null))),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,display:"flex",flexDirection:"column",alignItems:"center",paddingLeft:"2rem"}},r.a.createElement(s,null,r.a.createElement(l,{to:"/about-me/"},"About me"),r.a.createElement(l,{to:"/page-2/"},"My stack"),r.a.createElement(l,{to:"/page-2/"},"How I learn"),r.a.createElement(l,{to:"/contact/"},"Contact me"))),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,display:"flex",flexDirection:"column",alignItems:"center",padding:"0px 2rem 1.45rem",paddingTop:0}},r.a.createElement("br",null),r.a.createElement("main",{style:{width:"100%"}},t&&r.a.createElement(h,null,t))))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-18c99a27d425b97a585a.js.map