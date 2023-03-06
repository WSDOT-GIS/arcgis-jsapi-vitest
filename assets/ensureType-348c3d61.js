import"./string-feb899cf.js";import{s as M}from"./Error-d97df89f.js";function T(t){return t&&t.release&&typeof t.release=="function"}function N(t){return t&&t.acquire&&typeof t.acquire=="function"}class h{constructor(r,n,e,o=1,a=0){if(this._ctor=r,this._acquireFunction=n,this._releaseFunction=e,this.allocationSize=o,this._pool=new Array(a),this._initialSize=a,this._ctor)for(let c=0;c<a;c++)this._pool[c]=new this._ctor;this.allocationSize=Math.max(o,1)}destroy(){this.prune(0)}acquire(...r){let n;if(h.test.disabled)n=new this._ctor;else{if(this._pool.length===0){const e=this.allocationSize;for(let o=0;o<e;o++)this._pool[o]=new this._ctor}n=this._pool.pop()}return this._acquireFunction?this._acquireFunction(n,...r):N(n)&&n.acquire(...r),n}release(r){r&&!h.test.disabled&&(this._releaseFunction?this._releaseFunction(r):T(r)&&r.release(),this._pool.push(r))}prune(r=this._initialSize){if(!(r>=this._pool.length)){for(let n=r;n<this._pool.length;++n){const e=this._pool[n];this._dispose(e)}this._pool.length=r}}_dispose(r){r.dispose&&typeof r.dispose=="function"&&r.dispose()}}h.test={disabled:!1};function z(t){t.length=0}let B=class{constructor(r=50,n=50){this._pool=new h(Array,void 0,z,n,r)}acquire(){return this._pool.acquire()}release(r){this._pool.release(r)}prune(){this._pool.prune(0)}static acquire(){return b.acquire()}static release(r){return b.release(r)}static prune(){b.prune()}};const b=new B(100);function X(t,r){for(const[n,e]of t)if(r(e,n))return!0;return!1}function C(t,r,n){const e=t.get(r);if(e!==void 0)return e;const o=n();return t.set(r,o),o}const p=M.getLogger("esri.core.accessorSupport.ensureTypes");function D(t){return t==null?t:new Date(t)}function x(t){return t==null?t:!!t}function I(t){return t==null?t:t.toString()}function O(t){return t==null?t:(t=parseFloat(t),isNaN(t)?0:t)}function K(t){return t==null?t:Math.round(parseFloat(t))}function k(t){return t&&t.constructor&&t.constructor.__accessorMetadata__!==void 0}function g(t,r){return r!=null&&t&&!(r instanceof t)}function F(t){return t&&"isCollection"in t}function q(t){return t&&t.Type?typeof t.Type=="function"?t.Type:t.Type.base:null}function L(t,r){if(!r||!r.constructor||!F(r.constructor))return _(t,r)?r:new t(r);const n=q(t.prototype.itemType),e=q(r.constructor.prototype.itemType);return n?e?n===e?r:n.prototype.isPrototypeOf(e.prototype)?new t(r):(_(t,r),r):new t(r):r}function _(t,r){return!!k(r)&&(p.error("Accessor#set","Assigning an instance of '"+(r.declaredClass||"unknown")+"' which is not a subclass of '"+v(t)+"'"),!0)}function P(t,r){return r==null?r:F(t)?L(t,r):g(t,r)?_(t,r)?r:new t(r):r}function v(t){return t&&t.prototype&&t.prototype.declaredClass||"unknown"}const V=new WeakMap;function W(t){switch(t){case Number:return O;case S:return K;case Boolean:return x;case String:return I;case Date:return D;default:return C(V,t,()=>P.bind(null,t))}}function y(t,r){const n=W(t);return arguments.length===1?n:n(r)}function d(t,r,n){return arguments.length===1?d.bind(null,t):r&&(Array.isArray(r)?r.map(e=>t(e,n)):[t(r,n)])}function Y(t,r){return arguments.length===1?d(y.bind(null,t)):d(y.bind(null,t),r)}function j(t,r,n){return r!==0&&Array.isArray(n)?n.map(e=>j(t,r-1,e)):t(n)}function w(t,r,n){if(arguments.length===2)return w.bind(null,t,r);if(!n)return n;let e=r,o=n=j(t,r,n);for(;e>0&&Array.isArray(o);)e--,o=o[0];if(o!==void 0)for(let a=0;a<e;a++)n=[n];return n}function Z(t,r,n){return arguments.length===2?w(y.bind(null,t),r):w(y.bind(null,t),r,n)}function tt(t){return!!Array.isArray(t)&&!t.some(r=>{const n=typeof r;return!(n==="string"||n==="number"||n==="function"&&t.length>1)})}function E(t,r){if(arguments.length===2)return E(t).call(null,r);const n=new Set,e=t.filter(u=>typeof u!="function"),o=t.filter(u=>typeof u=="function");for(const u of t)typeof u!="string"&&typeof u!="number"||n.add(u);let a=null,c=null;return(u,s)=>{if(u==null)return u;const l=typeof u,f=l==="string"||l==="number";return f&&(n.has(u)||o.some(i=>l==="string"&&i===String||l==="number"&&i===Number))||l==="object"&&o.some(i=>!g(u,i))?u:(f&&e.length?(a||(a=e.map(i=>typeof i=="string"?`'${i}'`:`${i}`).join(", ")),p.error("Accessor#set",`'${u}' is not a valid value for this property, only the following values are valid: ${a}`)):typeof u=="object"&&o.length?(c||(c=o.map(i=>v(i)).join(", ")),p.error("Accessor#set",`'${u}' is not a valid value for this property, value must be one of ${c}`)):p.error("Accessor#set",`'${u}' is not a valid value for this property`),s&&(s.valid=!1),null)}}function G(t,r){if(arguments.length===2)return G(t).call(null,r);const n={},e=[],o=[];for(const s in t.typeMap){const l=t.typeMap[s];n[s]=y(l),e.push(v(l)),o.push(s)}const a=()=>`'${e.join("', '")}'`,c=()=>`'${o.join("', '")}'`,u=typeof t.key=="string"?s=>s[t.key]:t.key;return s=>{if(t.base&&!g(t.base,s)||s==null)return s;const l=u(s)||t.defaultKeyValue,f=n[l];if(!f)return p.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${c()})`),null;if(!g(t.typeMap[l],s))return s;if(typeof t.key=="string"&&!k(s)){const i={};for(const m in s)m!==t.key&&(i[m]=s[m]);return f(i)}return f(s)}}class S{}const rt={native:t=>({type:"native",value:t}),array:t=>({type:"array",value:t}),oneOf:t=>({type:"one-of",values:t})};function nt(t){if(!t||!("type"in t))return!1;switch(t.type){case"native":case"array":case"one-of":return!0}return!1}function H(t){switch(t.type){case"native":return y(t.value);case"array":return d(H(t.value));case"one-of":return J(t);default:return null}}function J(t){let r=null;return(n,e)=>A(n,t)?n:(r==null&&(r=$(t)),p.error("Accessor#set",`Invalid property value, value needs to be of type ${r}`),e&&(e.valid=!1),null)}function $(t){switch(t.type){case"native":switch(t.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case S:return"integer";case Date:return"date";default:return v(t.value)}case"array":return`array of ${$(t.value)}`;case"one-of":{const r=t.values.map(n=>$(n));return`one of ${r.slice(0,r.length-1)} or ${r[r.length-1]}`}}return"unknown"}function A(t,r){if(t==null)return!0;switch(r.type){case"native":switch(r.value){case Number:case S:return typeof t=="number";case Boolean:return typeof t=="boolean";case String:return typeof t=="string"}return t instanceof r.value;case"array":return!!Array.isArray(t)&&!t.some(n=>!A(n,r.value));case"one-of":return r.values.some(n=>A(t,n))}}export{w as $,H as B,E as M,rt as N,G as S,S as T,nt as _,O as a,y as b,h as e,Z as j,tt as k,d as m,X as n,C as r,K as s,B as t,I as u,P as v,Y as w};
