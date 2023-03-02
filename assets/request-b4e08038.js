import{_ as V}from"./preload-helper-101896b7.js";import{s as Ce,b as w,a as P}from"./Error-781981d1.js";import{a as O,p as Te}from"./string-75082bc6.js";import{N as I,r as $,t as fe,g as ke}from"./typedArrayUtil-74bbfd45.js";import{p as pe,v as Le,j as Ue,a as de}from"./promiseUtils-28f2a985.js";const Se=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,Ee={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function se(e){const t=e==null?void 0:e.match(Se);if(!t)return null;const[,r,n,s]=t;if(!r)return null;let o=null,a=null,i=null;const{devext:l,qaext:u,www:c}=Ee;if(n)if(o=r,s)switch(s.toLowerCase()){case"devext":({customBaseUrl:a,portalHostname:i}=l);break;case"qa":({customBaseUrl:a,portalHostname:i}=u);break;default:return null}else({customBaseUrl:a,portalHostname:i}=c);else switch(r.toLowerCase()){case"devext":({customBaseUrl:a,portalHostname:i}=l);break;case"qaext":({customBaseUrl:a,portalHostname:i}=u);break;case"www":({customBaseUrl:a,portalHostname:i}=c);break;default:return null}return{customBaseUrl:a,isPortal:!1,portalHostname:i,urlKey:o}}function Re(e){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(e)}const _e=Ce.getLogger("esri.core.urlUtils"),k=w.request,oe="esri/config: esriConfig.request.proxyUrl is not set.",he=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,me=/^\s*http:/i,je=/^\s*https:/i,Pe=/^\s*file:/i,Ie=/:\d+$/,De=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,Ae=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),Be=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");let T=class{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let r=I(this.uri.match(Ae));this.scheme=r[2]||(r[1]?"":null),this.authority=r[4]||(r[3]?"":null),this.path=r[5],this.query=r[7]||(r[6]?"":null),this.fragment=r[9]||(r[8]?"":null),this.authority!=null&&(r=I(this.authority.match(Be)),this.user=r[3]||null,this.password=r[4]||null,this.host=r[6]||r[7],this.port=r[9]||null)}toString(){return this.uri}};const j={},He=new T(w.applicationUrl);let p=He;const Ne=Me();let G=Ne;const ge=()=>p,Et=()=>G;function Me(){const e=I(p.path),t=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]));return`${`${p.scheme}://${p.host}${p.port!=null?`:${p.port}`:""}`}${t}`}function v(e){if(!e)return null;const t={path:null,query:null},r=new T(e),n=e.indexOf("?");return r.query===null?t.path=e:(t.path=e.substring(0,n),t.query=ye(r.query)),r.fragment&&(t.hash=r.fragment,r.query===null&&(t.path=t.path.substring(0,t.path.length-(r.fragment.length+1)))),t}function ye(e){const t=e.split("&"),r={};for(const n of t){if(!n)continue;const s=n.indexOf("=");let o,a;s<0?(o=decodeURIComponent(n),a=""):(o=decodeURIComponent(n.slice(0,s)),a=decodeURIComponent(n.slice(s+1)));let i=r[o];typeof i=="string"&&(i=r[o]=[i]),Array.isArray(i)?i.push(a):r[o]=a}return r}function ae(e){return e&&typeof e=="object"&&"toJSON"in e&&typeof e.toJSON=="function"}function S(e,t){return e?t&&typeof t=="function"?Object.keys(e).map(r=>encodeURIComponent(r)+"="+encodeURIComponent(t(r,e[r]))).join("&"):Object.keys(e).map(r=>{const n=e[r];if(n==null)return"";const s=encodeURIComponent(r)+"=",o=t&&t[r];return o?s+encodeURIComponent(o(n)):Array.isArray(n)?n.map(a=>ae(a)?s+encodeURIComponent(JSON.stringify(a)):s+encodeURIComponent(a)).join("&"):ae(n)?s+encodeURIComponent(JSON.stringify(n)):s+encodeURIComponent(n)}).filter(r=>r).join("&"):""}function Fe(e=!1){let t,r=k.proxyUrl;if(typeof e=="string"){t=Qe(e);const n=N(e);n&&(r=n.proxyUrl)}else t=!!e;if(!r)throw _e.warn(oe),new P("urlutils:proxy-not-set",oe);return t&&z()&&(r=re(r)),v(r)}function Rt(e){const t=N(e);let r,n;if(t){const s=X(t.proxyUrl);r=s.path,n=s.query?ye(s.query):null}if(r){const s=v(e);e=r+"?"+s.path;const o=S({...n,...s.query});o&&(e=`${e}?${o}`)}return e}const L={path:"",query:""};function X(e){const t=e.indexOf("?");return t!==-1?(L.path=e.slice(0,t),L.query=e.slice(t+1)):(L.path=e,L.query=null),L}function we(e){return e=(e=A(e=rt(e=X(e).path),!0)).toLowerCase()}function We(e){const t={proxyUrl:e.proxyUrl,urlPrefix:we(e.urlPrefix)},r=k.proxyRules,n=t.urlPrefix;let s=r.length;for(let o=0;o<r.length;o++){const a=r[o].urlPrefix;if(n.indexOf(a)===0){if(n.length===a.length)return-1;s=o;break}a.indexOf(n)===0&&(s=o+1)}return r.splice(s,0,t),s}function N(e){const t=k.proxyRules,r=we(e);for(let n=0;n<t.length;n++)if(r.indexOf(t[n].urlPrefix)===0)return t[n]}function _t(e,t){if(!e||!t)return!1;e=D(e),t=D(t);const r=se(e),n=se(t);return $(r)&&$(n)?r.portalHostname===n.portalHostname:!$(r)&&!$(n)&&E(e,t,!0)}function jt(e,t){return e=D(e),t=D(t),A(e)===A(t)}function D(e){const t=(e=U(e)).indexOf("/sharing");return t>0?e.substring(0,t):e.replace(/\/+$/,"")}function be(e){const t=n=>n==null||n instanceof RegExp&&n.test(e)||typeof n=="string"&&e.startsWith(n),r=k.interceptors;if(r){for(const n of r)if(Array.isArray(n.urls)){if(n.urls.some(t))return n}else if(t(n.urls))return n}return null}function E(e,t,r=!1){if(!e||!t)return!1;const n=J(e),s=J(t);return!(!r&&n.scheme!==s.scheme)&&n.host!=null&&s.host!=null&&n.host.toLowerCase()===s.host.toLowerCase()&&n.port===s.port}function Q(e){if(typeof e=="string"){if(!R(e))return!0;e=J(e)}if(E(e,p))return!0;const t=k.trustedServers||[];for(let r=0;r<t.length;r++){const n=ze(t[r]);for(let s=0;s<n.length;s++)if(E(e,n[s]))return!0}return!1}function ze(e){return j[e]||(te(e)||x(e)?j[e]=[new T(Y(e))]:j[e]=[new T(`http://${e}`),new T(`https://${e}`)]),j[e]}function Y(e,t=G,r){return x(e)?r&&r.preserveProtocolRelative?e:p.scheme==="http"&&p.authority===g(e).slice(2)?`http:${e}`:`https:${e}`:te(e)?e:I(Je(e[0]==="/"?tt(t):t,e))}function Pt(e,t=G,r){if(e==null||!R(e))return e;const n=U(e),s=n.toLowerCase(),o=U(t).toLowerCase().replace(/\/+$/,""),a=r?U(r).toLowerCase().replace(/\/+$/,""):null;if(a&&o.indexOf(a)!==0)return e;const i=(q,f,y)=>(y=q.indexOf(f,y))===-1?q.length:y;let l=i(s,"/",s.indexOf("//")+2),u=-1;for(;s.slice(0,l+1)===o.slice(0,l)+"/"&&(u=l+1,l!==s.length);)l=i(s,"/",l+1);if(u===-1||a&&u<a.length)return e;e=n.slice(u);const c=o.slice(u-1).replace(/[^/]+/g,"").length;if(c>0)for(let q=0;q<c;q++)e=`../${e}`;else e=`./${e}`;return e}function U(e){return e=ot(e=st(e=nt(e=Y(e=e.trim()))))}function Je(...e){const t=e.filter($);if(!t||!t.length)return;const r=[];if(R(t[0])){const s=t[0],o=s.indexOf("//");o!==-1&&(r.push(s.slice(0,o+1)),Ze(t[0])&&(r[0]+="/"),t[0]=s.slice(o+2))}else t[0][0]==="/"&&r.push("");const n=t.reduce((s,o)=>o?s.concat(o.split("/")):s,[]);for(let s=0;s<n.length;s++){const o=n[s];o===".."&&r.length>0&&r[r.length-1]!==".."?r.pop():(!o&&s===n.length-1||o&&(o!=="."||r.length===0))&&r.push(o)}return r.join("/")}function g(e,t=!1){if(e==null||Z(e)||ee(e))return null;let r=e.indexOf("://");if(r===-1&&x(e))r=2;else{if(r===-1)return null;r+=3}const n=e.indexOf("/",r);return n!==-1&&(e=e.slice(0,n)),t&&(e=A(e,!0)),e}function R(e){return x(e)||te(e)}function Z(e){return e!=null&&e.slice(0,5)==="blob:"}function ee(e){return e!=null&&e.slice(0,5)==="data:"}function Ke(e){const t=qe(e);if(!t||!t.isBase64)return null;const r=atob(t.data),n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n.buffer}function It(e){return btoa(String.fromCharCode.apply(null,e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const Ve=/^data:(.*?)(;base64)?,(.*)$/;function qe(e){const t=e.match(Ve);if(!t)return null;const[,r,n,s]=t;return{mediaType:r,isBase64:!!n,data:s}}function Dt(e){return e.isBase64?`data:${e.mediaType};base64,${e.data}`:`data:${e.mediaType},${e.data}`}function At(e){const t=Ke(e);if(!t)return null;const r=qe(e);return new Blob([t],{type:r.mediaType})}function Bt(e,t){Ge(e,t)||Xe(e,t)}function Ge(e,t){if(!e)return!1;const r=document.createElement("a");if(!("download"in r))return!1;const n=URL.createObjectURL(e);return r.download=t,r.href=n,r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),!0}function Xe(e,t){return!!window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(e,t)}function x(e){return e!=null&&e[0]==="/"&&e[1]==="/"}function te(e){return e!=null&&he.test(e)}function Qe(e){return e!=null&&je.test(e)||p.scheme==="https"&&x(e)}function Ye(e){return e!=null&&me.test(e)||p.scheme==="http"&&x(e)}function Ze(e){return e!=null&&Pe.test(e)}function re(e){return x(e)?`https:${e}`:e.replace(me,"https:")}function et(){return p.scheme==="http"}function z(){return p.scheme==="https"}function A(e,t=!1){return x(e)?e.slice(2):(e=e.replace(he,""),t&&e.length>1&&e[0]==="/"&&e[1]==="/"&&(e=e.slice(2)),e)}function tt(e){const t=e.indexOf("//"),r=e.indexOf("/",t+2);return r===-1?e:e.slice(0,r)}function Ht(e){let t=0;if(R(e)){const n=e.indexOf("//");n!==-1&&(t=n+2)}const r=e.lastIndexOf("/");return r<t?e:e.slice(0,r+1)}function Nt(e,t){if(!e)return"";const r=v(e).path.replace(/\/+$/,""),n=r.substring(r.lastIndexOf("/")+1);if(!(t!=null&&t.length))return n;const s=new RegExp(`.(${t.join("|")})$`,"ig");return n.replace(s,"")}function rt(e){return e&&e[e.length-1]==="/"?e:`${e}/`}function Mt(e){return e.replace(/\/+$/,"")}function nt(e){if(/^https?:\/\//i.test(e)){const t=X(e);e=(e=t.path.replace(/\/{2,}/g,"/")).replace("/","//"),t.query&&(e+=`?${t.query}`)}return e}function st(e){return e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function ot(e){const t=k.httpsDomains;if(!Ye(e))return e;const r=e.indexOf("/",7);let n;if(n=r===-1?e:e.slice(0,r),n=n.toLowerCase().slice(7),Ie.test(n)){if(!n.endsWith(":80"))return e;n=n.slice(0,-3),e=e.replace(":80","")}return et()&&n===p.authority&&!De.test(e)||(z()&&n===p.authority||t&&t.some(s=>n===s||n.endsWith(`.${s}`))||z()&&!N(e))&&(e=re(e)),e}function Ft(e,t,r){if(!(t&&r&&e&&R(e)))return e;const n=e.indexOf("//"),s=e.indexOf("/",n+2),o=e.indexOf(":",n+2),a=Math.min(s<0?e.length:s,o<0?e.length:o);return e.slice(n+2,a).toLowerCase()!==t.toLowerCase()?e:`${e.slice(0,n+2)}${r}${e.slice(a)}`}function J(e){return typeof e=="string"?new T(Y(e)):(e.scheme||(e.scheme=p.scheme),e)}function Wt(e){return at.test(e)}function zt(e,t){const r=v(e),n=Object.keys(r.query||{});return n.length>0&&t&&t.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${n.join(", ")}.`),r.path}function xe(e,t,r){const n=v(e),s=n.query||{};return s[t]=String(r),`${n.path}?${S(s)}`}function W(e,t){const r=v(e),n=r.query||{};for(const o in t)n[o]=t[o];const s=S(n);return s?`${r.path}?${s}`:r.path}function Jt(e){if(fe(e))return null;const t=e.match($e);return t?t[2]:null}function Kt(e){if(fe(e))return null;const t=e.match($e);return t?{path:t[1],extension:t[2]}:{path:e,extension:null}}const $e=/([^.]*)\.([^\/]*)$/,at=/(^data:image\/svg|\.svg$)/i,Vt="4.26",Gt={async request(e,t){var i,l;const{default:r}=await V(()=>Promise.resolve().then(()=>vt),void 0),n=e.options,s=n.responseType;n.signal=t==null?void 0:t.signal,n.responseType=s==="native"||s==="native-request-init"?"native-request-init":s&&["blob","json","text"].includes(s)&&((i=be(e.url))!=null&&i.after)?s:"array-buffer";const o=await r(e.url,n),a={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch((l=o.requestOptions)==null?void 0:l.responseType){case"native-request-init":return delete a.data.signal,a;case"blob":a.data=await a.data.arrayBuffer();break;case"json":a.data=new TextEncoder().encode(JSON.stringify(a.data)).buffer;break;case"text":a.data=new TextEncoder().encode(a.data).buffer}return{result:a,transferList:[a.data]}}};let d;function Xt(e){d=e}function Qt(e){const t=d&&d.findCredential(e);return t&&t.token?xe(e,"token",t.token):e}O("host-webworker");const it=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function lt(e){const t=g(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!it.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function ut(e,t,r=!1,n){return new Promise((s,o)=>{if(pe(n))return void o(ie());let a=()=>{u(),o(new Error(`Unable to load ${t}`))},i=()=>{const c=e;u(),s(c)},l=()=>{if(!e)return;const c=e;u(),c.src="",o(ie())};const u=()=>{O("esri-image-decode")||(e.removeEventListener("error",a),e.removeEventListener("load",i)),a=null,i=null,e=null,$(n)&&n.removeEventListener("abort",l),l=null,r&&URL.revokeObjectURL(t)};$(n)&&n.addEventListener("abort",l),O("esri-image-decode")?e.decode().then(i,a):(e.addEventListener("error",a),e.addEventListener("load",i))})}function ie(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}function ct(e){w.request.crossOriginNoCorsDomains||(w.request.crossOriginNoCorsDomains={});const t=w.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[g(r)??""]=0:(t[g("http://"+r)??""]=0,t[g("https://"+r)??""]=0)}function ft(e){const t=w.request.crossOriginNoCorsDomains;if(t){let r=g(e);if(r)return r=r.toLowerCase(),!E(r,ge())&&t[r]<Date.now()-36e5}return!1}async function pt(e){var s;const t=w.request.crossOriginNoCorsDomains,r=g(e);t&&r&&(t[r.toLowerCase()]=Date.now());const n=v(e);e=n.path,((s=n.query)==null?void 0:s.f)==="json"&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}async function b(e,t){var u;const r=ee(e),n=Z(e);n||r||(e=U(e));const s={url:e,requestOptions:{...ke(t)}};let o=be(e);if(o){const c=await qt(o,s);if(c!=null)return{data:c,getHeader:ne,httpStatus:200,requestOptions:s.requestOptions,url:s.url};o.after||o.error||(o=null)}if(e=s.url,(t=s.requestOptions).responseType==="image"){if(O("host-webworker")||O("host-node"))throw m("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),s)}else if(r)throw m("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),s);if(t.method==="head"){if(t.body)throw m("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),s);if(r||n)throw m("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),s)}if(await yt(),B)return B.execute(e,t);const a=new AbortController;Le(t,()=>a.abort());const i={controller:a,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:o,params:s,redoRequest:!1,useIdentity:h.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},l=await $t(i);return(u=o==null?void 0:o.after)==null||u.call(o,l),l}let B;const h=w.request,Oe="FormData"in globalThis,dt=[499,498,403,401],ht=["COM_0056","COM_0057","SB_0008"],mt=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],ne=()=>null,H=Symbol();function gt(e){const t=g(e);t&&!b._corsServers.includes(t)&&b._corsServers.push(t)}function le(e){const t=g(e);return!t||t.endsWith(".arcgis.com")||b._corsServers.includes(t)||Q(t)}function m(e,t,r,n){let s="Error";const o={url:r.url,requestOptions:r.requestOptions,getHeader:ne,ssl:!1};if(t instanceof P)return t.details?(t.details=Te(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=o,t;if(t){const a=n&&(u=>n.headers.get(u)),i=n&&n.status,l=t.message;l&&(s=l),a&&(o.getHeader=a),o.httpStatus=(t.httpCode!=null?t.httpCode:t.code)||i||0,o.subCode=t.subcode,o.messageCode=t.messageCode,typeof t.details=="string"?o.messages=[t.details]:o.messages=t.details,o.raw=H in t?t[H]:t}return Ue(t)?de():new P(e,s,o)}async function yt(){O("host-webworker")?B||(B=await V(()=>import("./request-0c3a7cc0.js"),["assets/request-0c3a7cc0.js","assets/Error-781981d1.js","assets/string-75082bc6.js","assets/typedArrayUtil-74bbfd45.js"])):b._abortableFetch||(b._abortableFetch=globalThis.fetch.bind(globalThis))}async function K(){d||await V(()=>import("./IdentityManager-28347fb9.js"),["assets/IdentityManager-28347fb9.js","assets/Accessor-815cb0cf.js","assets/typedArrayUtil-74bbfd45.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/string-75082bc6.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-28f2a985.js","assets/Error-781981d1.js","assets/ensureType-125d327f.js","assets/Evented-3dfb26f2.js","assets/reactiveUtils-31da19f9.js","assets/intl-b83d6b45.js","assets/number-5e819186.js","assets/cast-f7d2a22f.js","assets/locale-30120714.js","assets/messages-dc0c80a1.js","assets/assets-fff829c9.js","assets/jsxFactory-2cf3af56.js","assets/Promise-092442f7.js","assets/uuid-73213768.js","assets/widget-dbfbe21d.js","assets/JSONSupport-2b897629.js","assets/preload-helper-101896b7.js"])}async function wt(e){var i;const t=e.params.url,r=e.params.requestOptions,n=e.controller.signal,s=r.body;let o=null,a=null;if(Oe&&"HTMLFormElement"in globalThis&&(s instanceof FormData?o=s:s instanceof HTMLFormElement&&(o=new FormData(s))),typeof s=="string"&&(a=s),e.fetchOptions={cache:r.cacheBust&&!b._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:r.method==="head"?"HEAD":"GET",mode:"cors",priority:h.priority,redirect:"follow",signal:n},(o||a)&&(e.fetchOptions.body=o||a),r.authMode==="anonymous"&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||(i=r.query)!=null&&i.token||o!=null&&o.get("token")),!e.hasToken&&w.apiKey&&lt(t)&&(r.query||(r.query={}),r.query.token=w.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!ve(t)&&!pe(n)){let l;r.authMode==="immediate"?(await K(),l=await d.getCredential(t,{signal:n}),e.credential=l):r.authMode==="no-prompt"?(await K(),l=await d.getCredential(t,{prompt:!1,signal:n}).catch(()=>{}),e.credential=l):d&&(l=d.findCredential(t)),l&&(e.credentialToken=l.token,e.useSSL=!!l.ssl)}}function ve(e){return mt.some(t=>t.test(e))}async function bt(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions??{},s=Z(t)||ee(t),o=r.responseType||"json",a=s?0:r.timeout!=null?r.timeout:h.timeout;let i=!1;if(!s){e.useSSL&&(t=re(t)),r.cacheBust&&n.cache==="default"&&(t=xe(t,"request.preventCache",Date.now()));let f={...r.query};e.credentialToken&&(f.token=e.credentialToken);let y=S(f);O("esri-url-encodes-apostrophe")&&(y=y.replace(/'/g,"%27"));const M=t.length+1+y.length;let F;i=r.method==="delete"||r.method==="post"||r.method==="put"||!!r.body||M>h.maxUrlLength;const _=r.useProxy||!!N(t);if(_){const C=Fe(t);F=C.path,!i&&F.length+1+M>h.maxUrlLength&&(i=!0),C.query&&(f={...C.query,...f})}if(n.method==="HEAD"&&(i||_)){if(i)throw M>h.maxUrlLength?m("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params):m("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params);if(_)throw m("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(i?(n.method=r.method==="delete"?"DELETE":r.method==="put"?"PUT":"POST",r.body?t=W(t,f):(n.body=S(f),n.headers||(n.headers={}),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=W(t,f),_&&(e.useProxy=!0,t=`${F}?${t}`),f.token&&Oe&&n.body instanceof FormData&&!Re(t)&&n.body.set("token",f.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!E(t,ge())){if(Q(t))e.withCredentials=!0;else if(d){const C=d.findServerInfo(t);C&&C.webTierAuth&&(e.withCredentials=!0)}}e.withCredentials&&(n.credentials="include",ft(t)&&await pt(i?W(t,f):t))}let l,u,c=0,q=!1;a>0&&(c=setTimeout(()=>{q=!0,e.controller.abort()},a));try{if(r.responseType==="native-request-init")u=n,u.url=t;else if(r.responseType!=="image"||n.cache!=="default"||n.method!=="GET"||i||xt(r.headers)||!s&&!e.useProxy&&h.proxyUrl&&!le(t)){if(l=await b._abortableFetch(t,n),e.useProxy||gt(t),r.responseType==="native")u=l;else if(n.method!=="HEAD")if(l.ok){switch(o){case"array-buffer":u=await l.arrayBuffer();break;case"blob":case"image":u=await l.blob();break;default:u=await l.text()}if(c&&(clearTimeout(c),c=0),o==="json"||o==="xml"||o==="document")if(u)switch(o){case"json":u=JSON.parse(u);break;case"xml":u=ue(u,"application/xml");break;case"document":u=ue(u,"text/html")}else u=null;if(u){if(o==="array-buffer"||o==="blob"){const f=l.headers.get("Content-Type");if(f&&/application\/json|text\/plain/i.test(f)&&u[o==="blob"?"size":"byteLength"]<=750)try{const y=await new Response(u).json();y.error&&(u=y)}catch{}}o==="image"&&u instanceof Blob&&(u=await ce(URL.createObjectURL(u),e,!0))}}else u=await l.text()}else u=await ce(t,e)}catch(f){if(f.name==="AbortError")throw q?new Error("Timeout exceeded"):de("Request canceled");if(!(!l&&f instanceof TypeError&&h.proxyUrl)||r.body||r.method==="delete"||r.method==="head"||r.method==="post"||r.method==="put"||e.useProxy||le(t))throw f;e.redoRequest=!0,We({proxyUrl:h.proxyUrl,urlPrefix:g(t)??""})}finally{c&&clearTimeout(c)}return[l,u]}async function qt(e,t){if(e.responseData!=null)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(s){r=m("request:interceptor",s,t)}if((n instanceof Error||n instanceof P)&&(r=m("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}function xt(e){if(e){for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0}return!1}function ue(e,t){let r;try{r=new DOMParser().parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function $t(e){var o;let t,r;await wt(e);try{do[t,r]=await bt(e);while(!await Ot(e,t,r))}catch(a){const i=m("request:server",a,e.params,t);throw i.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(i),i}const n=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(n)){if(!e.hasToken&&!e.credentialToken&&((o=r.user)!=null&&o.username)&&!Q(n)){const a=g(n,!0);a&&h.trustedServers.push(a)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&ct(r.authorizedCrossOriginNoCorsDomains)}const s=e.credential;if(s&&d){const a=d.findServerInfo(s.server);let i=a&&a.owningSystemUrl;if(i){i=i.replace(/\/?$/,"/sharing");const l=d.findCredential(i,s.userId);l&&d._getIdenticalSvcIdx(i,l)===-1&&l.resources.unshift(i)}}return{data:r,getHeader:t?a=>t==null?void 0:t.headers.get(a):ne,httpStatus:(t==null?void 0:t.status)??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function Ot(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||n.responseType==="native"||n.responseType==="native-request-init")return!0;let s,o;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[H]=r,s;r&&(r.error?s=r.error:r.status==="error"&&Array.isArray(r.messages)&&(s={...r},s[H]=r,s.details=r.messages));let a,i=null;s&&(o=Number(s.code),i=s.hasOwnProperty("subcode")?Number(s.subcode):null,a=s.messageCode,a=a&&a.toUpperCase());const l=n.authMode;if(o===403&&(i===4||s.message&&s.message.toLowerCase().includes("ssl")&&!s.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&(l!=="no-prompt"||o===498)&&o!==void 0&&dt.includes(o)&&!ve(e.params.url)&&(o!==403||a&&!ht.includes(a)&&(i==null||i===2&&e.credentialToken))){await K();try{const u=await d.getCredential(e.params.url,{error:m("request:server",s,e.params),prompt:l!=="no-prompt",signal:e.controller.signal,token:e.credentialToken});return e.credential=u,e.credentialToken=u.token,e.useSSL=e.useSSL||u.ssl,!1}catch(u){if(l==="no-prompt")return e.credential=void 0,e.credentialToken=void 0,!1;s=u}}if(s)throw s;return!0}function ce(e,t,r=!1){const n=t.controller.signal,s=new Image;return t.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous",s.alt="",s.fetchPriority=h.priority,s.src=e,ut(s,e,r,n)}b._abortableFetch=null,b._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const vt=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{T as $,Ft as A,Wt as B,ge as C,Ke as D,W as E,Y as F,Pt as G,Bt as H,vt as I,Jt as J,U as K,v as L,E as M,Kt as N,zt as P,b as U,Je as V,jt as W,g as X,R as Y,Z,d as a,Vt as b,Ht as c,_t as d,S as e,Qt as f,It as g,x as h,Dt as i,Mt as j,Re as k,N as l,Qe as m,Xt as n,qe as o,Rt as p,Nt as q,lt as r,Gt as s,ee as t,At as u,ye as v,Et as w,re as x,se as y,ut as z};
