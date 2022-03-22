/*! For license information please see 8666.b54137d.js.LICENSE.txt */
"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8666],{86895:(e,r,t)=>{var n=t(62525),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r=e.message,t="https://reactjs.org/docs/error-decoder.html?invariant="+r,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+r+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function g(e,r,t){this.props=e,this.context=r,this.refs=S,this.updater=t||_}function w(){}function k(e,r,t){this.props=e,this.context=r,this.refs=S,this.updater=t||_}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var O=k.prototype=new w;O.constructor=k,n(O,g.prototype),O.isPureReactComponent=!0;var j={current:null},C={suspense:null},E={current:null},P=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function $(e,r,t){var n=void 0,o={},c=null,l=null;if(null!=r)for(n in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(c=""+r.key),r)P.call(r,n)&&!R.hasOwnProperty(n)&&(o[n]=r[n]);var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){for(var i=Array(f),a=0;a<f;a++)i[a]=arguments[a+2];o.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:c,ref:l,props:o,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var U=/\/+/g,A=[];function T(e,r,t,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function L(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case u:case c:l=!0}}if(l)return t(n,e,""===r?"."+B(e,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var f=0;f<e.length;f++){var i=r+B(o=e[f],f);l+=L(o,i,t,n)}else if("function"==typeof(i=null===e||"object"!=typeof e?null:"function"==typeof(i=b&&e[b]||e["@@iterator"])?i:null))for(e=i.call(e),f=0;!(o=e.next()).done;)l+=L(o=o.value,i=r+B(o,f++),t,n);else if("object"===o)throw t=""+e,v(Error(31),"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,"");return l}function q(e,r,t){return null==e?0:L(e,"",r,t)}function B(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function F(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?N(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(U,"$&/")+"/")+t)),n.push(e))}function N(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(U,"$&/")+"/"),q(e,M,r=T(r,u,n,o)),I(r)}function D(){var e=j.current;if(null===e)throw v(Error(321));return e}var V={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return N(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;q(e,F,r=T(null,null,r,t)),I(r)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var r=[];return N(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:k,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:h,type:e,compare:void 0===r?null:r}},useCallback:function(e,r){return D().useCallback(e,r)},useContext:function(e,r){return D().useContext(e,r)},useEffect:function(e,r){return D().useEffect(e,r)},useImperativeHandle:function(e,r,t){return D().useImperativeHandle(e,r,t)},useDebugValue:function(){},useLayoutEffect:function(e,r){return D().useLayoutEffect(e,r)},useMemo:function(e,r){return D().useMemo(e,r)},useReducer:function(e,r,t){return D().useReducer(e,r,t)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:l,Profiler:i,StrictMode:f,Suspense:y,unstable_SuspenseList:d,createElement:$,cloneElement:function(e,r,t){if(null==e)throw v(Error(267),e);var o=void 0,c=n({},e.props),l=e.key,f=e.ref,i=e._owner;if(null!=r){void 0!==r.ref&&(f=r.ref,i=E.current),void 0!==r.key&&(l=""+r.key);var a=void 0;for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),r)P.call(r,o)&&!R.hasOwnProperty(o)&&(c[o]=void 0===r[o]&&void 0!==a?a[o]:r[o])}if(1==(o=arguments.length-2))c.children=t;else if(1<o){a=Array(o);for(var s=0;s<o;s++)a[s]=arguments[s+2];c.children=a}return{$$typeof:u,type:e.type,key:l,ref:f,props:c,_owner:i}},createFactory:function(e){var r=$.bind(null,e);return r.type=e,r},isValidElement:x,version:"16.9.0",unstable_withSuspenseConfig:function(e,r){var t=C.suspense;C.suspense=void 0===r?null:r;try{e()}finally{C.suspense=t}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentBatchConfig:C,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},Y={default:V},z=Y&&V||Y;e.exports=z.default||z},18666:(e,r,t)=>{e.exports=t(86895)},62525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var c,l,f=o(e),i=1;i<arguments.length;i++){for(var a in c=Object(arguments[i]))t.call(c,a)&&(f[a]=c[a]);if(r){l=r(c);for(var s=0;s<l.length;s++)n.call(c,l[s])&&(f[l[s]]=c[l[s]])}}return f}}}]);
//# sourceMappingURL=8666.b54137d.js.map