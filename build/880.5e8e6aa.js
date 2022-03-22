/*! For license information please see 880.5e8e6aa.js.LICENSE.txt */
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{50880:(t,e)=>{var n,r;void 0===(r="function"==typeof(n=function(){"use strict";var t="9.2.0";function e(t,e){var n=document.createElement("div");return s(n,e),t.appendChild(n),n}function n(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function r(t,e,n){n>0&&(s(t,e),setTimeout((function(){a(t,e)}),n))}function i(t){return Array.isArray(t)?t:[t]}function o(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function s(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function a(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function l(){var t=void 0!==window.pageXOffset,e="CSS1Compat"===(document.compatMode||"");return{x:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}}function u(t,e){return 100/(e-t)}function c(t,e){return 100*e/(t[1]-t[0])}function p(t,e){for(var n=1;t>=e[n];)n+=1;return n}function f(t,e,n){if(n>=t.slice(-1)[0])return 100;var r,i,o,s,a=p(n,t);return r=t[a-1],i=t[a],o=e[a-1],s=e[a],o+function(t,e){return c(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}([r,i],n)/u(o,s)}function d(t,e,n,r){if(100===r)return r;var i,o,s=p(r,t);return n?r-(i=t[s-1])>((o=t[s])-i)/2?o:i:e[s-1]?t[s-1]+function(t,e){return Math.round(t/e)*e}(r-t[s-1],e[s-1]):r}function h(t,e,r){var i;if("number"==typeof e&&(e=[e]),"[object Array]"!==Object.prototype.toString.call(e))throw new Error("noUiSlider (9.2.0): 'range' contains invalid value.");if(!n(i="min"===t?0:"max"===t?100:parseFloat(t))||!n(e[0]))throw new Error("noUiSlider (9.2.0): 'range' value isn't numeric.");r.xPct.push(i),r.xVal.push(e[0]),i?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function m(t,e,n){if(!e)return!0;n.xSteps[t]=c([n.xVal[t],n.xVal[t+1]],e)/u(n.xPct[t],n.xPct[t+1]);var r=(n.xVal[t+1]-n.xVal[t])/n.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),o=n.xVal[t]+n.xNumSteps[t]*i;n.xHighestCompleteStep[t]=o}function g(t,e,n,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e,this.direction=n;var i,o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.length&&"object"==typeof o[0][0]?o.sort((function(t,e){return t[0][0]-e[0][0]})):o.sort((function(t,e){return t[0]-e[0]})),i=0;i<o.length;i++)h(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)m(i,this.xNumSteps[i],this)}g.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider (9.2.0): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&c(this.xVal,t)},g.prototype.toStepping=function(t){return f(this.xVal,this.xPct,t)},g.prototype.fromStepping=function(t){return function(t,e,n){if(n>=100)return t.slice(-1)[0];var r,i=p(n,e);return function(t,e){return e*(t[1]-t[0])/100+t[0]}([t[i-1],t[i]],(n-(r=e[i-1]))*u(r,e[i]))}(this.xVal,this.xPct,t)},g.prototype.getStep=function(t){return d(this.xPct,this.xSteps,this.snap,t)},g.prototype.getNearbySteps=function(t){var e=p(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e-0],step:this.xNumSteps[e-0],highestStep:this.xHighestCompleteStep[e-0]}}},g.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(o);return Math.max.apply(null,t)},g.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var v={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function b(t,e){if(!n(e))throw new Error("noUiSlider (9.2.0): 'step' is not numeric.");t.singleStep=e}function S(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider (9.2.0): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider (9.2.0): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider (9.2.0): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new g(e,t.snap,t.dir,t.singleStep)}function w(t,e){if(e=i(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider (9.2.0): 'start' option is incorrect.");t.handles=e.length,t.start=e}function x(t,e){if(t.snap=e,"boolean"!=typeof e)throw new Error("noUiSlider (9.2.0): 'snap' option must be a boolean.")}function y(t,e){if(t.animate=e,"boolean"!=typeof e)throw new Error("noUiSlider (9.2.0): 'animate' option must be a boolean.")}function E(t,e){if(t.animationDuration=e,"number"!=typeof e)throw new Error("noUiSlider (9.2.0): 'animationDuration' option must be a number.")}function C(t,e){var n,r=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)r.push(e);r.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider (9.2.0): 'connect' option doesn't match handle count.");r=e}t.connect=r}function N(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider (9.2.0): 'orientation' option is invalid.")}}function U(t,e){if(!n(e))throw new Error("noUiSlider (9.2.0): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider (9.2.0): 'margin' option is only supported on linear sliders.")}function P(t,e){if(!n(e))throw new Error("noUiSlider (9.2.0): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider (9.2.0): 'limit' option is only supported on linear sliders with 2 or more handles.")}function k(t,e){if(!n(e))throw new Error("noUiSlider (9.2.0): 'padding' option must be numeric.");if(0!==e){if(t.padding=t.spectrum.getMargin(e),!t.padding)throw new Error("noUiSlider (9.2.0): 'padding' option is only supported on linear sliders.");if(t.padding<0)throw new Error("noUiSlider (9.2.0): 'padding' option must be a positive number.");if(t.padding>=50)throw new Error("noUiSlider (9.2.0): 'padding' option must be less than half the range.")}}function O(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider (9.2.0): 'direction' option was not recognized.")}}function M(t,e){if("string"!=typeof e)throw new Error("noUiSlider (9.2.0): 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider (9.2.0): 'fixed' behaviour must be used with 2 handles");U(t,t.start[1]-t.start[0])}t.events={tap:n||o,drag:r,fixed:i,snap:o,hover:s}}function V(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(!0)}else{if(t.tooltips=i(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider (9.2.0): must pass a formatter for all handles.");t.tooltips.forEach((function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider (9.2.0): 'tooltips' must be passed a formatter or 'false'.")}))}}function L(t,e){if(t.format=e,"function"==typeof e.to&&"function"==typeof e.from)return!0;throw new Error("noUiSlider (9.2.0): 'format' requires 'to' and 'from' methods.")}function A(t,e){if(void 0!==e&&"string"!=typeof e&&!1!==e)throw new Error("noUiSlider (9.2.0): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function z(t,e){if(void 0!==e&&"object"!=typeof e)throw new Error("noUiSlider (9.2.0): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var n in t.cssClasses={},e)e.hasOwnProperty(n)&&(t.cssClasses[n]=t.cssPrefix+e[n]);else t.cssClasses=e}function H(t,e){if(!0!==e&&!1!==e)throw new Error("noUiSlider (9.2.0): 'useRequestAnimationFrame' option should be true (default) or false.");t.useRequestAnimationFrame=e}function F(t){var e={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,format:v},n={step:{r:!1,t:b},start:{r:!0,t:w},connect:{r:!0,t:C},direction:{r:!0,t:O},snap:{r:!1,t:x},animate:{r:!1,t:y},animationDuration:{r:!1,t:E},range:{r:!0,t:S},orientation:{r:!1,t:N},margin:{r:!1,t:U},limit:{r:!1,t:P},padding:{r:!1,t:k},behaviour:{r:!0,t:M},format:{r:!1,t:L},tooltips:{r:!1,t:V},cssPrefix:{r:!1,t:A},cssClasses:{r:!1,t:z},useRequestAnimationFrame:{r:!1,t:H}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};Object.keys(n).forEach((function(i){if(void 0===t[i]&&void 0===r[i]){if(n[i].r)throw new Error("noUiSlider (9.2.0): '"+i+"' is required.");return!0}n[i].t(e,void 0===t[i]?r[i]:t[i])})),e.pips=t.pips;var i=[["left","top"],["right","bottom"]];return e.style=i[e.dir][e.ort],e.styleOposite=i[e.dir?0:1][e.ort],e}function T(t,n,o){var u,c,p,f,d,h,m=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},g=t,v=[],b=[],S=!1,w=n.spectrum,x=[],y={};function E(t,r){var i=e(t,n.cssClasses.origin),o=e(i,n.cssClasses.handle);return o.setAttribute("data-handle",r),0===r?s(o,n.cssClasses.handleLower):r===n.handles-1&&s(o,n.cssClasses.handleUpper),i}function C(t,r){return!!r&&e(t,n.cssClasses.connect)}function N(t,r){return!!n.tooltips[r]&&e(t.firstChild,n.cssClasses.tooltip)}function U(t,e,r){var i=document.createElement("div"),o="",a=[n.cssClasses.valueNormal,n.cssClasses.valueLarge,n.cssClasses.valueSub],l=[n.cssClasses.markerNormal,n.cssClasses.markerLarge,n.cssClasses.markerSub],u=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical],c=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];function p(t,e,r){return'class="'+function(t,e){var r=e===n.cssClasses.value,i=r?a:l;return e+" "+(r?u:c)[n.ort]+" "+i[t]}(r[1],e)+'" style="'+n.style+": "+t+'%"'}return s(i,n.cssClasses.pips),s(i,0===n.ort?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical),Object.keys(t).forEach((function(i){!function(t,i){i[1]=i[1]&&e?e(i[0],i[1]):i[1],o+="<div "+p(t,n.cssClasses.marker,i)+"></div>",i[1]&&(o+="<div "+p(t,n.cssClasses.value,i)+">"+r.to(i[0])+"</div>")}(i,t[i])})),i.innerHTML=o,i}function P(t){var e=t.mode,n=t.density||1,r=t.filter||!1,i=function(t,e,n){var r,i={},o=w.xVal[0],s=w.xVal[w.xVal.length-1],a=!1,l=!1,u=0;return(r=n.slice().sort((function(t,e){return t-e})),n=r.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==o&&(n.unshift(o),a=!0),n[n.length-1]!==s&&(n.push(s),l=!0),n.forEach((function(r,o){var s,c,p,f,d,h,m,g,v,b=r,S=n[o+1];if("steps"===e&&(s=w.xNumSteps[o]),s||(s=S-b),!1!==b&&void 0!==S)for(s=Math.max(s,1e-7),c=b;c<=S;c=(c+s).toFixed(7)/1){for(m=(d=(f=w.toStepping(c))-u)/t,v=d/(g=Math.round(m)),p=1;p<=g;p+=1)i[(u+p*v).toFixed(5)]=["x",0];h=n.indexOf(c)>-1?1:"steps"===e?2:0,!o&&a&&(h=0),c===S&&l||(i[f.toFixed(5)]=[c,h]),u=f}})),i}(n,e,function(t,e,n){if("range"===t||"steps"===t)return w.xVal;if("count"===t){if(!e)throw new Error("noUiSlider (9.2.0): 'values' required for mode 'count'.");var r,i=100/(e-1),o=0;for(e=[];(r=o++*i)<=100;)e.push(r);t="positions"}return"positions"===t?e.map((function(t){return w.fromStepping(n?w.getStep(t):t)})):"values"===t?n?e.map((function(t){return w.fromStepping(w.getStep(w.toStepping(t)))})):e:void 0}(e,t.values||!1,t.stepped||!1)),o=t.format||{to:Math.round};return g.appendChild(U(i,r,o))}function k(){var t=u.getBoundingClientRect(),e="offset"+["Width","Height"][n.ort];return 0===n.ort?t.width||u[e]:t.height||u[e]}function O(t,e,r,i){var o=function(e){return!g.hasAttribute("disabled")&&(o=g,s=n.cssClasses.tap,!(o.classList?o.classList.contains(s):new RegExp("\\b"+s+"\\b").test(o.className)))&&!!(e=function(t,e){t.preventDefault();var n,r,i=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),i){if(t.touches.length>1)return!1;n=t.changedTouches[0].pageX,r=t.changedTouches[0].pageY}return e=e||l(),(o||s)&&(n=t.clientX+e.x,r=t.clientY+e.y),t.pageOffset=e,t.points=[n,r],t.cursor=o||s,t}(e,i.pageOffset))&&!(t===m.start&&void 0!==e.buttons&&e.buttons>1)&&(!i.hover||!e.buttons)&&(e.calcPoint=e.points[n.ort],void r(e,i));var o,s},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!1),s.push([t,o])})),s}function M(t){var e,r,i,o,s,a=100*(t-(e=u,r=n.ort,i=e.getBoundingClientRect(),o=e.ownerDocument.documentElement,s=l(),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),r?i.top+s.y-o.clientTop:i.left+s.x-o.clientLeft))/k();return n.dir?100-a:a}function V(t,e,n,r){var i=n.slice(),o=[!t,t],s=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach((function(t,n){var r=q(i,t,i[t]+e,o[n],s[n]);!1===r?e=0:(e=r-i[t],i[t]=r)})):o=s=[!0];var a=!1;r.forEach((function(t,r){a=B(t,n[t]+e,o[r],s[r])||a})),a&&r.forEach((function(t){L("update",t),L("slide",t)}))}function L(t,e,r){Object.keys(y).forEach((function(i){var o=i.split(".")[0];t===o&&y[i].forEach((function(t){t.call(f,x.map(n.format.to),e,x.slice(),r||!1,v.slice())}))}))}function A(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&H(t,e)}function z(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return H(t,e);var r=(n.dir?-1:1)*(t.calcPoint-e.startCalcPoint);V(r>0,100*r/e.baseSize,e.locations,e.handleNumbers)}function H(t,e){S&&(a(S,n.cssClasses.active),S=!1),t.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener)),document.documentElement.noUiListeners.forEach((function(t){document.documentElement.removeEventListener(t[0],t[1])})),a(g,n.cssClasses.drag),_(),e.handleNumbers.forEach((function(t){L("set",t),L("change",t),L("end",t)}))}function T(t,e){if(1===e.handleNumbers.length){var r=c[e.handleNumbers[0]];if(r.hasAttribute("disabled"))return!1;s(S=r.children[0],n.cssClasses.active)}t.preventDefault(),t.stopPropagation();var i=O(m.move,document.documentElement,z,{startCalcPoint:t.calcPoint,baseSize:k(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:v.slice()}),o=O(m.end,document.documentElement,H,{handleNumbers:e.handleNumbers}),a=O("mouseout",document.documentElement,A,{handleNumbers:e.handleNumbers});if(document.documentElement.noUiListeners=i.concat(o,a),t.cursor){document.body.style.cursor=getComputedStyle(t.target).cursor,c.length>1&&s(g,n.cssClasses.drag);var l=function(){return!1};document.body.noUiListener=l,document.body.addEventListener("selectstart",l,!1)}e.handleNumbers.forEach((function(t){L("start",t)}))}function j(t){t.stopPropagation();var e=M(t.calcPoint),i=function(t){var e=100,n=!1;return c.forEach((function(r,i){if(!r.hasAttribute("disabled")){var o=Math.abs(v[i]-t);o<e&&(n=i,e=o)}})),n}(e);if(!1===i)return!1;n.events.snap||r(g,n.cssClasses.tap,n.animationDuration),B(i,e,!0,!0),_(),L("slide",i,!0),L("set",i,!0),L("change",i,!0),L("update",i,!0),n.events.snap&&T(t,{handleNumbers:[i]})}function R(t){var e=M(t.calcPoint),n=w.getStep(e),r=w.fromStepping(n);Object.keys(y).forEach((function(t){"hover"===t.split(".")[0]&&y[t].forEach((function(t){t.call(f,r)}))}))}function q(t,e,r,i,o){return c.length>1&&(i&&e>0&&(r=Math.max(r,t[e-1]+n.margin)),o&&e<c.length-1&&(r=Math.min(r,t[e+1]-n.margin))),c.length>1&&n.limit&&(i&&e>0&&(r=Math.min(r,t[e-1]+n.limit)),o&&e<c.length-1&&(r=Math.max(r,t[e+1]-n.limit))),n.padding&&(0===e&&(r=Math.max(r,n.padding)),e===c.length-1&&(r=Math.min(r,100-n.padding))),s=r=w.getStep(r),(r=Math.max(Math.min(s,100),0))!==t[e]&&r;var s}function D(t){return t+"%"}function _(){b.forEach((function(t){var e=v[t]>50?-1:1,n=3+(c.length+e*t);c[t].childNodes[0].style.zIndex=n}))}function B(t,e,r,i){return!1!==(e=q(v,t,e,r,i))&&(function(t,e){v[t]=e,x[t]=w.fromStepping(e);var r=function(){c[t].style[n.style]=D(e),Y(t),Y(t+1)};window.requestAnimationFrame&&n.useRequestAnimationFrame?window.requestAnimationFrame(r):r()}(t,e),!0)}function Y(t){if(p[t]){var e=0,r=100;0!==t&&(e=v[t-1]),t!==p.length-1&&(r=v[t]),p[t].style[n.style]=D(e),p[t].style[n.styleOposite]=D(100-r)}}function X(t,e){null!==t&&!1!==t&&("number"==typeof t&&(t=String(t)),!1===(t=n.format.from(t))||isNaN(t)||B(e,w.toStepping(t),!1,!1))}function I(t,e){var o=i(t),s=void 0===v[0];e=void 0===e||!!e,o.forEach(X),n.animate&&!s&&r(g,n.cssClasses.tap,n.animationDuration),b.forEach((function(t){B(t,v[t],!0,!1)})),_(),b.forEach((function(t){L("update",t),null!==o[t]&&e&&L("set",t)}))}function J(){var t=x.map(n.format.to);return 1===t.length?t[0]:t}function W(t,e){y[t]=y[t]||[],y[t].push(e),"update"===t.split(".")[0]&&c.forEach((function(t,e){L("update",e)}))}if(g.noUiSlider)throw new Error("noUiSlider (9.2.0): Slider was already initialized.");return function(t){s(t,n.cssClasses.target),0===n.dir?s(t,n.cssClasses.ltr):s(t,n.cssClasses.rtl),0===n.ort?s(t,n.cssClasses.horizontal):s(t,n.cssClasses.vertical),u=e(t,n.cssClasses.base)}(g),function(t,e){c=[],(p=[]).push(C(e,t[0]));for(var r=0;r<n.handles;r++)c.push(E(e,r)),b[r]=r,p.push(C(e,t[r+1]))}(n.connect,u),f={destroy:function(){for(var t in n.cssClasses)n.cssClasses.hasOwnProperty(t)&&a(g,n.cssClasses[t]);for(;g.firstChild;)g.removeChild(g.firstChild);delete g.noUiSlider},steps:function(){return v.map((function(t,e){var n=w.getNearbySteps(t),r=x[e],i=n.thisStep.step,o=null;!1!==i&&r+i>n.stepAfter.startValue&&(i=n.stepAfter.startValue-r),o=r>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&r-n.stepBefore.highestStep,100===t?i=null:0===t&&(o=null);var s=w.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]}))},on:W,off:function(t){var e=t&&t.split(".")[0],n=e&&t.substring(e.length);Object.keys(y).forEach((function(t){var r=t.split(".")[0],i=t.substring(r.length);e&&e!==r||n&&n!==i||delete y[t]}))},get:J,set:I,reset:function(t){I(n.start,t)},__moveHandles:function(t,e,n){V(t,e,v,n)},options:o,updateOptions:function(t,e){var r=J(),i=["margin","limit","padding","range","animate","snap","step","format"];i.forEach((function(e){void 0!==t[e]&&(o[e]=t[e])}));var s=F(o);i.forEach((function(e){void 0!==t[e]&&(n[e]=s[e])})),s.spectrum.direction=w.direction,w=s.spectrum,n.margin=s.margin,n.limit=s.limit,n.padding=s.padding,v=[],I(t.start||r,e)},target:g,pips:P},(h=n.events).fixed||c.forEach((function(t,e){O(m.start,t.children[0],T,{handleNumbers:[e]})})),h.tap&&O(m.start,u,j,{}),h.hover&&O(m.move,u,R,{hover:!0}),h.drag&&p.forEach((function(t,e){if(!1!==t&&0!==e&&e!==p.length-1){var r=c[e-1],i=c[e],o=[t];s(t,n.cssClasses.draggable),h.fixed&&(o.push(r.children[0]),o.push(i.children[0])),o.forEach((function(t){O(m.start,t,T,{handles:[r,i],handleNumbers:[e-1,e]})}))}})),I(n.start),n.pips&&P(n.pips),n.tooltips&&(d=c.map(N),W("update",(function(t,e,r){if(d[e]){var i=t[e];!0!==n.tooltips[e]&&(i=n.tooltips[e].to(r[e])),d[e].innerHTML=i}}))),f}return{version:t,create:function(t,e){if(!t.nodeName)throw new Error("noUiSlider (9.2.0): create requires a single element.");var n=T(t,F(e),e);return t.noUiSlider=n,n}}})?n.apply(e,[]):n)||(t.exports=r)}}]);
//# sourceMappingURL=880.5e8e6aa.js.map