"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3768],{55419:(o,r,e)=>{e.d(r,{Z:()=>s});var t=e(87537),n=e.n(t),i=e(23645),c=e.n(i)()(n());c.push([o.id,"/*\n\n    Name:       Tomorrow Night - Eighties\n    Author:     Chris Kempson\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-tomorrow-night-eighties.CodeMirror { background: #000000; color: #CCCCCC; }\n.cm-s-tomorrow-night-eighties div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-tomorrow-night-eighties .CodeMirror-line::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-tomorrow-night-eighties .CodeMirror-line::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-tomorrow-night-eighties .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker { color: #f2777a; }\n.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-eighties .CodeMirror-linenumber { color: #515151; }\n.cm-s-tomorrow-night-eighties .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-eighties span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-eighties span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-eighties span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-eighties span.cm-property, .cm-s-tomorrow-night-eighties span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-eighties span.cm-keyword { color: #f2777a; }\n.cm-s-tomorrow-night-eighties span.cm-string { color: #ffcc66; }\n\n.cm-s-tomorrow-night-eighties span.cm-variable { color: #99cc99; }\n.cm-s-tomorrow-night-eighties span.cm-variable-2 { color: #6699cc; }\n.cm-s-tomorrow-night-eighties span.cm-def { color: #f99157; }\n.cm-s-tomorrow-night-eighties span.cm-bracket { color: #CCCCCC; }\n.cm-s-tomorrow-night-eighties span.cm-tag { color: #f2777a; }\n.cm-s-tomorrow-night-eighties span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-eighties span.cm-error { background: #f2777a; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-eighties .CodeMirror-activeline-background { background: #343600; }\n.cm-s-tomorrow-night-eighties .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/tomorrow-night-eighties.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,2CAA2C,mBAAmB,EAAE,cAAc,EAAE;AAChF,wDAAwD,mBAAmB,EAAE;AAC7E,uMAAuM,kCAAkC,EAAE;AAC3O,sNAAsN,kCAAkC,EAAE;AAC1P,oDAAoD,mBAAmB,EAAE,iBAAiB,EAAE;AAC5F,yDAAyD,cAAc,EAAE;AACzE,gEAAgE,WAAW,EAAE;AAC7E,uDAAuD,cAAc,EAAE;AACvE,mDAAmD,8BAA8B,EAAE;;AAEnF,gDAAgD,cAAc,EAAE;AAChE,6CAA6C,cAAc,EAAE;AAC7D,+CAA+C,cAAc,EAAE;;AAE/D,kGAAkG,cAAc,EAAE;AAClH,gDAAgD,cAAc,EAAE;AAChE,+CAA+C,cAAc,EAAE;;AAE/D,iDAAiD,cAAc,EAAE;AACjE,mDAAmD,cAAc,EAAE;AACnE,4CAA4C,cAAc,EAAE;AAC5D,gDAAgD,cAAc,EAAE;AAChE,4CAA4C,cAAc,EAAE;AAC5D,6CAA6C,cAAc,EAAE;AAC7D,8CAA8C,mBAAmB,EAAE,cAAc,EAAE;;AAEnF,kEAAkE,mBAAmB,EAAE;AACvF,4DAA4D,0BAA0B,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       Tomorrow Night - Eighties\n    Author:     Chris Kempson\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-tomorrow-night-eighties.CodeMirror { background: #000000; color: #CCCCCC; }\n.cm-s-tomorrow-night-eighties div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-tomorrow-night-eighties .CodeMirror-line::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-tomorrow-night-eighties .CodeMirror-line::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span::-moz-selection, .cm-s-tomorrow-night-eighties .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-tomorrow-night-eighties .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker { color: #f2777a; }\n.cm-s-tomorrow-night-eighties .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-eighties .CodeMirror-linenumber { color: #515151; }\n.cm-s-tomorrow-night-eighties .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-eighties span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-eighties span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-eighties span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-eighties span.cm-property, .cm-s-tomorrow-night-eighties span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-eighties span.cm-keyword { color: #f2777a; }\n.cm-s-tomorrow-night-eighties span.cm-string { color: #ffcc66; }\n\n.cm-s-tomorrow-night-eighties span.cm-variable { color: #99cc99; }\n.cm-s-tomorrow-night-eighties span.cm-variable-2 { color: #6699cc; }\n.cm-s-tomorrow-night-eighties span.cm-def { color: #f99157; }\n.cm-s-tomorrow-night-eighties span.cm-bracket { color: #CCCCCC; }\n.cm-s-tomorrow-night-eighties span.cm-tag { color: #f2777a; }\n.cm-s-tomorrow-night-eighties span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-eighties span.cm-error { background: #f2777a; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-eighties .CodeMirror-activeline-background { background: #343600; }\n.cm-s-tomorrow-night-eighties .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n"],sourceRoot:""}]);const s=c},23645:o=>{o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=o(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(o,e,t,n,i){"string"==typeof o&&(o=[[null,o,void 0]]);var c={};if(t)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var m=0;m<o.length;m++){var A=[].concat(o[m]);t&&c[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),e&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=e):A[2]=e),n&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=n):A[4]="".concat(n)),r.push(A))}},r}},87537:o=>{o.exports=function(o){var r=o[1],e=o[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(n," */"),c=e.sources.map((function(o){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(o," */")}));return[r].concat(c).concat([i]).join("\n")}return[r].join("\n")}},63768:(o,r,e)=>{e.r(r),e.d(r,{default:()=>C});var t=e(93379),n=e.n(t),i=e(7795),c=e.n(i),s=e(90569),a=e.n(s),m=e(3565),A=e.n(m),g=e(19216),h=e.n(g),l=e(44589),u=e.n(l),p=e(55419),d={};d.styleTagTransform=u(),d.setAttributes=A(),d.insert=a().bind(null,"head"),d.domAPI=c(),d.insertStyleElement=h(),n()(p.Z,d);const C=p.Z&&p.Z.locals?p.Z.locals:void 0},93379:o=>{var r=[];function e(o){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===o){e=t;break}return e}function t(o,t){for(var i={},c=[],s=0;s<o.length;s++){var a=o[s],m=t.base?a[0]+t.base:a[0],A=i[m]||0,g="".concat(m," ").concat(A);i[m]=A+1;var h=e(g),l={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==h)r[h].references++,r[h].updater(l);else{var u=n(l,t);t.byIndex=s,r.splice(s,0,{identifier:g,updater:u,references:1})}c.push(g)}return c}function n(o,r){var e=r.domAPI(r);return e.update(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap&&r.supports===o.supports&&r.layer===o.layer)return;e.update(o=r)}else e.remove()}}o.exports=function(o,n){var i=t(o=o||[],n=n||{});return function(o){o=o||[];for(var c=0;c<i.length;c++){var s=e(i[c]);r[s].references--}for(var a=t(o,n),m=0;m<i.length;m++){var A=e(i[m]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}i=a}}},90569:o=>{var r={};o.exports=function(o,e){var t=function(o){if(void 0===r[o]){var e=document.querySelector(o);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(o){e=null}r[o]=e}return r[o]}(o);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},19216:o=>{o.exports=function(o){var r=document.createElement("style");return o.setAttributes(r,o.attributes),o.insert(r,o.options),r}},3565:(o,r,e)=>{o.exports=function(o){var r=e.nc;r&&o.setAttribute("nonce",r)}},7795:o=>{o.exports=function(o){var r=o.insertStyleElement(o);return{update:function(e){!function(o,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var n=void 0!==e.layer;n&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,n&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,o,r.options)}(r,o,e)},remove:function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(r)}}}},44589:o=>{o.exports=function(o,r){if(r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}}}]);
//# sourceMappingURL=3768.8dce472.js.map