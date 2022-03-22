"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[930],{7796:(n,r,o)=>{o.d(r,{Z:()=>s});var e=o(87537),a=o.n(e),t=o(23645),c=o.n(t)()(a());c.push([n.id,"/**\n * Pastel On Dark theme ported from ACE editor\n * @license MIT\n * @copyright AtomicPages LLC 2014\n * @author Dennis Thompson, AtomicPages LLC\n * @version 1.1\n * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme\n */\n\n.cm-s-pastel-on-dark.CodeMirror {\n\tbackground: #2c2827;\n\tcolor: #8F938F;\n\tline-height: 1.5;\n}\n.cm-s-pastel-on-dark div.CodeMirror-selected { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::selection, .cm-s-pastel-on-dark .CodeMirror-line > span::selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(221,240,255,0.2); }\n\n.cm-s-pastel-on-dark .CodeMirror-gutters {\n\tbackground: #34302f;\n\tborder-right: 0px;\n\tpadding: 0 3px;\n}\n.cm-s-pastel-on-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-linenumber { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n.cm-s-pastel-on-dark span.cm-comment { color: #A6C6FF; }\n.cm-s-pastel-on-dark span.cm-atom { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-number { color: #CCCCCC; }\n.cm-s-pastel-on-dark span.cm-property { color: #8F938F; }\n.cm-s-pastel-on-dark span.cm-attribute { color: #a6e22e; }\n.cm-s-pastel-on-dark span.cm-keyword { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-string { color: #66A968; }\n.cm-s-pastel-on-dark span.cm-variable { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-variable-2 { color: #BEBF55; }\n.cm-s-pastel-on-dark span.cm-variable-3, .cm-s-pastel-on-dark span.cm-type { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-def { color: #757aD8; }\n.cm-s-pastel-on-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-pastel-on-dark span.cm-tag { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-link { color: #ae81ff; }\n.cm-s-pastel-on-dark span.cm-qualifier,.cm-s-pastel-on-dark span.cm-builtin { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-error {\n\tbackground: #757aD8;\n\tcolor: #f8f8f0;\n}\n.cm-s-pastel-on-dark .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.031); }\n.cm-s-pastel-on-dark .CodeMirror-matchingbracket {\n\tborder: 1px solid rgba(255,255,255,0.25);\n\tcolor: #8F938F !important;\n\tmargin: -1px -1px 0 -1px;\n}\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/pastel-on-dark.css"],names:[],mappings:"AAAA;;;;;;;EAOE;;AAEF;CACC,mBAAmB;CACnB,cAAc;CACd,gBAAgB;AACjB;AACA,+CAA+C,iCAAiC,EAAE;AAClF,4KAA4K,iCAAiC,EAAE;AAC/M,2LAA2L,iCAAiC,EAAE;;AAE9N;CACC,mBAAmB;CACnB,iBAAiB;CACjB,cAAc;AACf;AACA,gDAAgD,YAAY,EAAE;AAC9D,uDAAuD,cAAc,EAAE;AACvE,8CAA8C,cAAc,EAAE;AAC9D,0CAA0C,8BAA8B,EAAE;AAC1E,uCAAuC,cAAc,EAAE;AACvD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,yCAAyC,cAAc,EAAE;AACzD,uCAAuC,cAAc,EAAE;AACvD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,0CAA0C,cAAc,EAAE;AAC1D,6EAA6E,cAAc,EAAE;AAC7F,mCAAmC,cAAc,EAAE;AACnD,uCAAuC,cAAc,EAAE;AACvD,mCAAmC,cAAc,EAAE;AACnD,oCAAoC,cAAc,EAAE;AACpD,8EAA8E,cAAc,EAAE;AAC9F;CACC,mBAAmB;CACnB,cAAc;AACf;AACA,yDAAyD,sCAAsC,EAAE;AACjG;CACC,wCAAwC;CACxC,yBAAyB;CACzB,wBAAwB;AACzB",sourcesContent:["/**\n * Pastel On Dark theme ported from ACE editor\n * @license MIT\n * @copyright AtomicPages LLC 2014\n * @author Dennis Thompson, AtomicPages LLC\n * @version 1.1\n * @source https://github.com/atomicpages/codemirror-pastel-on-dark-theme\n */\n\n.cm-s-pastel-on-dark.CodeMirror {\n\tbackground: #2c2827;\n\tcolor: #8F938F;\n\tline-height: 1.5;\n}\n.cm-s-pastel-on-dark div.CodeMirror-selected { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::selection, .cm-s-pastel-on-dark .CodeMirror-line > span::selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::selection { background: rgba(221,240,255,0.2); }\n.cm-s-pastel-on-dark .CodeMirror-line::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span::-moz-selection, .cm-s-pastel-on-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(221,240,255,0.2); }\n\n.cm-s-pastel-on-dark .CodeMirror-gutters {\n\tbackground: #34302f;\n\tborder-right: 0px;\n\tpadding: 0 3px;\n}\n.cm-s-pastel-on-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-pastel-on-dark .CodeMirror-guttermarker-subtle { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-linenumber { color: #8F938F; }\n.cm-s-pastel-on-dark .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n.cm-s-pastel-on-dark span.cm-comment { color: #A6C6FF; }\n.cm-s-pastel-on-dark span.cm-atom { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-number { color: #CCCCCC; }\n.cm-s-pastel-on-dark span.cm-property { color: #8F938F; }\n.cm-s-pastel-on-dark span.cm-attribute { color: #a6e22e; }\n.cm-s-pastel-on-dark span.cm-keyword { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-string { color: #66A968; }\n.cm-s-pastel-on-dark span.cm-variable { color: #AEB2F8; }\n.cm-s-pastel-on-dark span.cm-variable-2 { color: #BEBF55; }\n.cm-s-pastel-on-dark span.cm-variable-3, .cm-s-pastel-on-dark span.cm-type { color: #DE8E30; }\n.cm-s-pastel-on-dark span.cm-def { color: #757aD8; }\n.cm-s-pastel-on-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-pastel-on-dark span.cm-tag { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-link { color: #ae81ff; }\n.cm-s-pastel-on-dark span.cm-qualifier,.cm-s-pastel-on-dark span.cm-builtin { color: #C1C144; }\n.cm-s-pastel-on-dark span.cm-error {\n\tbackground: #757aD8;\n\tcolor: #f8f8f0;\n}\n.cm-s-pastel-on-dark .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.031); }\n.cm-s-pastel-on-dark .CodeMirror-matchingbracket {\n\tborder: 1px solid rgba(255,255,255,0.25);\n\tcolor: #8F938F !important;\n\tmargin: -1px -1px 0 -1px;\n}\n"],sourceRoot:""}]);const s=c},23645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var o="",e=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),e&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=n(r),e&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(n,o,e,a,t){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(e)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(c[A]=!0)}for(var i=0;i<n.length;i++){var l=[].concat(n[i]);e&&c[l[0]]||(void 0!==t&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=t),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),r.push(l))}},r}},87537:n=>{n.exports=function(n){var r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),t="/*# ".concat(a," */"),c=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[r].concat(c).concat([t]).join("\n")}return[r].join("\n")}},90930:(n,r,o)=>{o.r(r),o.d(r,{default:()=>f});var e=o(93379),a=o.n(e),t=o(7795),c=o.n(t),s=o(90569),A=o.n(s),i=o(3565),l=o.n(i),p=o(19216),d=o.n(p),m=o(44589),C=o.n(m),u=o(7796),k={};k.styleTagTransform=C(),k.setAttributes=l(),k.insert=A().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=d(),a()(u.Z,k);const f=u.Z&&u.Z.locals?u.Z.locals:void 0},93379:n=>{var r=[];function o(n){for(var o=-1,e=0;e<r.length;e++)if(r[e].identifier===n){o=e;break}return o}function e(n,e){for(var t={},c=[],s=0;s<n.length;s++){var A=n[s],i=e.base?A[0]+e.base:A[0],l=t[i]||0,p="".concat(i," ").concat(l);t[i]=l+1;var d=o(p),m={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)r[d].references++,r[d].updater(m);else{var C=a(m,e);e.byIndex=s,r.splice(s,0,{identifier:p,updater:C,references:1})}c.push(p)}return c}function a(n,r){var o=r.domAPI(r);return o.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;o.update(n=r)}else o.remove()}}n.exports=function(n,a){var t=e(n=n||[],a=a||{});return function(n){n=n||[];for(var c=0;c<t.length;c++){var s=o(t[c]);r[s].references--}for(var A=e(n,a),i=0;i<t.length;i++){var l=o(t[i]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}t=A}}},90569:n=>{var r={};n.exports=function(n,o){var e=function(n){if(void 0===r[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[n]=o}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},19216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},3565:(n,r,o)=>{n.exports=function(n){var r=o.nc;r&&n.setAttribute("nonce",r)}},7795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(o){!function(n,r,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,a&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var t=o.sourceMap;t&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},44589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}}]);
//# sourceMappingURL=930.8c6d788.js.map