"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8351],{5362:(t,r,o)=>{o.d(r,{Z:()=>A});var i=o(87537),e=o.n(i),c=o(23645),n=o.n(c)()(e());n.push([t.id,".cm-s-twilight.CodeMirror { background: #141414; color: #f7f7f7; } /**/\n.cm-s-twilight div.CodeMirror-selected { background: #323232; } /**/\n.cm-s-twilight .CodeMirror-line::selection, .cm-s-twilight .CodeMirror-line > span::selection, .cm-s-twilight .CodeMirror-line > span > span::selection { background: rgba(50, 50, 50, 0.99); }\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n\n.cm-s-twilight .CodeMirror-gutters { background: #222; border-right: 1px solid #aaa; }\n.cm-s-twilight .CodeMirror-guttermarker { color: white; }\n.cm-s-twilight .CodeMirror-guttermarker-subtle { color: #aaa; }\n.cm-s-twilight .CodeMirror-linenumber { color: #aaa; }\n.cm-s-twilight .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-twilight .cm-keyword { color: #f9ee98; } /**/\n.cm-s-twilight .cm-atom { color: #FC0; }\n.cm-s-twilight .cm-number { color:  #ca7841; } /**/\n.cm-s-twilight .cm-def { color: #8DA6CE; }\n.cm-s-twilight span.cm-variable-2, .cm-s-twilight span.cm-tag { color: #607392; } /**/\n.cm-s-twilight span.cm-variable-3, .cm-s-twilight span.cm-def, .cm-s-twilight span.cm-type { color: #607392; } /**/\n.cm-s-twilight .cm-operator { color: #cda869; } /**/\n.cm-s-twilight .cm-comment { color:#777; font-style:italic; font-weight:normal; } /**/\n.cm-s-twilight .cm-string { color:#8f9d6a; font-style:italic; } /**/\n.cm-s-twilight .cm-string-2 { color:#bd6b18; } /*?*/\n.cm-s-twilight .cm-meta { background-color:#141414; color:#f7f7f7; } /*?*/\n.cm-s-twilight .cm-builtin { color: #cda869; } /*?*/\n.cm-s-twilight .cm-tag { color: #997643; } /**/\n.cm-s-twilight .cm-attribute { color: #d6bb6d; } /*?*/\n.cm-s-twilight .cm-header { color: #FF6400; }\n.cm-s-twilight .cm-hr { color: #AEAEAE; }\n.cm-s-twilight .cm-link { color:#ad9361; font-style:italic; text-decoration:none; } /**/\n.cm-s-twilight .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-twilight .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-twilight .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/twilight.css"],names:[],mappings:"AAAA,4BAA4B,mBAAmB,EAAE,cAAc,EAAE,EAAE,GAAG;AACtE,yCAAyC,mBAAmB,EAAE,EAAE,GAAG;AACnE,0JAA0J,kCAAkC,EAAE;AAC9L,yKAAyK,kCAAkC,EAAE;;AAE7M,qCAAqC,gBAAgB,EAAE,4BAA4B,EAAE;AACrF,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,WAAW,EAAE;AAC9D,wCAAwC,WAAW,EAAE;AACrD,oCAAoC,4BAA4B,EAAE;;AAElE,6BAA6B,cAAc,EAAE,EAAE,GAAG;AAClD,0BAA0B,WAAW,EAAE;AACvC,4BAA4B,eAAe,EAAE,EAAE,GAAG;AAClD,yBAAyB,cAAc,EAAE;AACzC,gEAAgE,cAAc,EAAE,EAAE,GAAG;AACrF,6FAA6F,cAAc,EAAE,EAAE,GAAG;AAClH,8BAA8B,cAAc,EAAE,EAAE,GAAG;AACnD,6BAA6B,UAAU,EAAE,iBAAiB,EAAE,kBAAkB,EAAE,EAAE,GAAG;AACrF,4BAA4B,aAAa,EAAE,iBAAiB,EAAE,EAAE,GAAG;AACnE,8BAA8B,aAAa,EAAE,EAAE,IAAI;AACnD,0BAA0B,wBAAwB,EAAE,aAAa,EAAE,EAAE,IAAI;AACzE,6BAA6B,cAAc,EAAE,EAAE,IAAI;AACnD,yBAAyB,cAAc,EAAE,EAAE,GAAG;AAC9C,+BAA+B,cAAc,EAAE,EAAE,IAAI;AACrD,4BAA4B,cAAc,EAAE;AAC5C,wBAAwB,cAAc,EAAE;AACxC,0BAA0B,aAAa,EAAE,iBAAiB,EAAE,oBAAoB,EAAE,EAAE,GAAG;AACvF,2BAA2B,4BAA4B,EAAE;;AAEzD,mDAAmD,mBAAmB,EAAE;AACxE,6CAA6C,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:[".cm-s-twilight.CodeMirror { background: #141414; color: #f7f7f7; } /**/\n.cm-s-twilight div.CodeMirror-selected { background: #323232; } /**/\n.cm-s-twilight .CodeMirror-line::selection, .cm-s-twilight .CodeMirror-line > span::selection, .cm-s-twilight .CodeMirror-line > span > span::selection { background: rgba(50, 50, 50, 0.99); }\n.cm-s-twilight .CodeMirror-line::-moz-selection, .cm-s-twilight .CodeMirror-line > span::-moz-selection, .cm-s-twilight .CodeMirror-line > span > span::-moz-selection { background: rgba(50, 50, 50, 0.99); }\n\n.cm-s-twilight .CodeMirror-gutters { background: #222; border-right: 1px solid #aaa; }\n.cm-s-twilight .CodeMirror-guttermarker { color: white; }\n.cm-s-twilight .CodeMirror-guttermarker-subtle { color: #aaa; }\n.cm-s-twilight .CodeMirror-linenumber { color: #aaa; }\n.cm-s-twilight .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-twilight .cm-keyword { color: #f9ee98; } /**/\n.cm-s-twilight .cm-atom { color: #FC0; }\n.cm-s-twilight .cm-number { color:  #ca7841; } /**/\n.cm-s-twilight .cm-def { color: #8DA6CE; }\n.cm-s-twilight span.cm-variable-2, .cm-s-twilight span.cm-tag { color: #607392; } /**/\n.cm-s-twilight span.cm-variable-3, .cm-s-twilight span.cm-def, .cm-s-twilight span.cm-type { color: #607392; } /**/\n.cm-s-twilight .cm-operator { color: #cda869; } /**/\n.cm-s-twilight .cm-comment { color:#777; font-style:italic; font-weight:normal; } /**/\n.cm-s-twilight .cm-string { color:#8f9d6a; font-style:italic; } /**/\n.cm-s-twilight .cm-string-2 { color:#bd6b18; } /*?*/\n.cm-s-twilight .cm-meta { background-color:#141414; color:#f7f7f7; } /*?*/\n.cm-s-twilight .cm-builtin { color: #cda869; } /*?*/\n.cm-s-twilight .cm-tag { color: #997643; } /**/\n.cm-s-twilight .cm-attribute { color: #d6bb6d; } /*?*/\n.cm-s-twilight .cm-header { color: #FF6400; }\n.cm-s-twilight .cm-hr { color: #AEAEAE; }\n.cm-s-twilight .cm-link { color:#ad9361; font-style:italic; text-decoration:none; } /**/\n.cm-s-twilight .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-twilight .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-twilight .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n"],sourceRoot:""}]);const A=n},23645:t=>{t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var o="",i=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),i&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=t(r),i&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(t,o,i,e,c){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(i)for(var A=0;A<this.length;A++){var a=this[A][0];null!=a&&(n[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);i&&n[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),o&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=o):s[2]=o),e&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=e):s[4]="".concat(e)),r.push(s))}},r}},87537:t=>{t.exports=function(t){var r=t[1],o=t[3];if(!o)return r;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(e," */"),n=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[r].concat(n).concat([c]).join("\n")}return[r].join("\n")}},68351:(t,r,o)=>{o.r(r),o.d(r,{default:()=>p});var i=o(93379),e=o.n(i),c=o(7795),n=o.n(c),A=o(90569),a=o.n(A),l=o(3565),s=o.n(l),m=o(19216),d=o.n(m),g=o(44589),E=o.n(g),u=o(5362),h={};h.styleTagTransform=E(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=n(),h.insertStyleElement=d(),e()(u.Z,h);const p=u.Z&&u.Z.locals?u.Z.locals:void 0},93379:t=>{var r=[];function o(t){for(var o=-1,i=0;i<r.length;i++)if(r[i].identifier===t){o=i;break}return o}function i(t,i){for(var c={},n=[],A=0;A<t.length;A++){var a=t[A],l=i.base?a[0]+i.base:a[0],s=c[l]||0,m="".concat(l," ").concat(s);c[l]=s+1;var d=o(m),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)r[d].references++,r[d].updater(g);else{var E=e(g,i);i.byIndex=A,r.splice(A,0,{identifier:m,updater:E,references:1})}n.push(m)}return n}function e(t,r){var o=r.domAPI(r);return o.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;o.update(t=r)}else o.remove()}}t.exports=function(t,e){var c=i(t=t||[],e=e||{});return function(t){t=t||[];for(var n=0;n<c.length;n++){var A=o(c[n]);r[A].references--}for(var a=i(t,e),l=0;l<c.length;l++){var s=o(c[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}c=a}}},90569:t=>{var r={};t.exports=function(t,o){var i=function(t){if(void 0===r[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}r[t]=o}return r[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},19216:t=>{t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},3565:(t,r,o)=>{t.exports=function(t){var r=o.nc;r&&t.setAttribute("nonce",r)}},7795:t=>{t.exports=function(t){var r=t.insertStyleElement(t);return{update:function(o){!function(t,r,o){var i="";o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var e=void 0!==o.layer;e&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,e&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}");var c=o.sourceMap;c&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),r.styleTagTransform(i,t,r.options)}(r,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},44589:t=>{t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}}]);
//# sourceMappingURL=8351.e5b892c.js.map