import{c as e}from"./index-66aea09a.js";import{F as l,av as r,aw as d,a6 as c,a7 as k,ax as m}from"./index-c1c53a77.js";function s(){Object.keys(e.locks).length<=0?document.body.classList.remove("var--lock"):document.body.classList.add("var--lock")}function i(a){e.locks[a]=1,s()}function o(a){delete e.locks[a],s()}function b(a,t){const{uid:n}=m();t&&l(t,f=>{f===!1?o(n):f===!0&&a()===!0&&i(n)}),l(a,f=>{t&&t()===!1||(f===!0?i(n):o(n))}),r(()=>{t&&t()===!1||a()===!0&&i(n)}),d(()=>{t&&t()===!1||a()===!0&&o(n)}),c(()=>{t&&t()===!1||a()===!0&&i(n)}),k(()=>{t&&t()===!1||a()===!0&&o(n)})}export{b as u};
