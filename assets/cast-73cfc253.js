import{b as a}from"./string-feb899cf.js";import{b as h}from"./ensureType-348c3d61.js";import{k as r}from"./JSONSupport-ed372989.js";let c=class{constructor(o,n={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=o,this._options=n,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(o),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=s=>this.fromJSON(s),this.write=(s,e,u)=>{const i=this.toJSON(s);i!==void 0&&a(u,i,e)},this.write.isJSONMapWriter=!0}toJSON(o){if(o==null)return null;if(this._apiToJSON.hasOwnProperty(o)){const n=this._apiToJSON[o];return this._options.useNumericKeys?+n:n}return this._options.ignoreUnknown?void 0:o}fromJSON(o){return o!=null&&this._jsonToAPI.hasOwnProperty(o)?this._jsonToAPI[o]:this._options.ignoreUnknown?void 0:o}_invertMap(o){const n={};for(const s in o)n[o[s]]=s;return n}_getKeysSorted(o){const n=[];for(const s in o)n.push(s);return n.sort(),n}};function O(){return function(t,o){return new c(t,{ignoreUnknown:!0,...o})}}const p=Object.prototype.toString;function f(t){const o="__accessorMetadata__"in t?h(t):t;return function(...n){if(n.push(o),typeof n[2]=="number")throw new Error("Using @cast has parameter decorator is not supported since 4.16");return _.apply(this,n)}}function _(t,o,n,s){r(t,o).cast=s}function l(t){return(o,n)=>{r(o,t).cast=o[n]}}function d(...t){if(t.length!==3||typeof t[1]!="string")return t.length===1&&p.call(t[0])==="[object Function]"?f(t[0]):t.length===1&&typeof t[0]=="string"?l(t[0]):void 0}export{c as a,O as o,d as s};
