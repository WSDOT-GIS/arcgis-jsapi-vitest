import{_ as p}from"./preload-helper-101896b7.js";import{t as d}from"./typedArrayUtil-74bbfd45.js";import{I as m}from"./Extent-8fae2379.js";import{f as g,I as y,a as w,t as I,e as _}from"./fieldUtils-39eb4f5d.js";class b{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function f(e){return new v(e)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function S(e){return new q(e)}const a=new Set;function T(e,t,n,h=!1,u){a.clear();for(const r in n){const i=e.get(r);if(!i)continue;const l=n[r],s=P(i,l);if(s!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:s}}),a.add(i.name),i&&(h||i.editable)){const c=g(i,s);if(c)return f(y(c,i,s));t[i.name]=s}}for(const r of(e==null?void 0:e.requiredFields)??[])if(!a.has(r.name))return f(`missing required field "${r.name}"`);return null}function P(e,t){let n=t;return typeof t=="string"&&w(e)?n=parseFloat(t):t!=null&&I(e)&&typeof t!="string"&&(n=String(t)),_(n)}let o;function x(e,t){if(!e||!m(t))return e;if("rings"in e||"paths"in e){if(d(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function E(){return d(o)&&(o=await p(()=>import("./geometryEngineJSON-1e940afe.js"),["assets/geometryEngineJSON-1e940afe.js","assets/geometryEngineBase-e1a33b0a.js","assets/geometryEngineJSON-3f330436.js","assets/json-48e3ea08.js"])),o}async function z(e,t){!m(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await E()}export{f as a,S as f,x as g,T as m,z as w};
