import{a as n}from"../../chunks/chunk-a33cf6d6.js";import"../../chunks/chunk-4f63bb74.js";i();l();window.__docpress_hydrationFinished=!0;function i(){m("https://platform.twitter.com/widgets.js")}function l(){Array.from(document.getElementById("features").querySelectorAll(".feature.has-learn-more")).forEach(e=>{e.onclick=()=>{u(e)}})}function u(t){const e=t.id;n(e.startsWith("feature-"),{featureId:e});const c=e.slice(8),s="selected",o="learn-more-"+c,a=document.getElementById(o);if(n(a,{learnId:o}),!t.classList.contains(s)){const r=t.parentNode;f(r,"display")==="grid"&&[...r.querySelectorAll(".learn-more"),...r.querySelectorAll(".feature")].forEach(d=>{d.classList.remove(s)})}[t,a].forEach(r=>{r.classList.toggle(s)})}function m(t){n(t.startsWith("https://"));const e=document.createElement("script");e.src=t,e.async=!0,e.setAttribute("charset","utf-8"),document.getElementsByTagName("head")[0].appendChild(e)}function f(t,e){return window.document.defaultView.getComputedStyle(t).getPropertyValue(e)}
