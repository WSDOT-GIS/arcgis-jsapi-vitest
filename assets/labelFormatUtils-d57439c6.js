import{_ as y}from"./preload-helper-f8378b50.js";import{s as g,a as m}from"./Error-d97df89f.js";import{t as h}from"./typedArrayUtil-96f93e5b.js";import{L as w,m as v,S as b}from"./number-205e28e0.js";import{n as x,a as _}from"./fieldUtils-66be74eb.js";import{x as E,_ as F}from"./labelUtils-6965a8ca.js";import"./string-feb899cf.js";import"./cast-73cfc253.js";import"./ensureType-348c3d61.js";import"./JSONSupport-ed372989.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-ac1bd36f.js";import"./locale-30120714.js";import"./geometry-d89d4a34.js";import"./Extent-fd3ac910.js";import"./Polyline-9d44200b.js";import"./typeUtils-2ccaf90d.js";const f=g.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},V={getAttribute:(a,n)=>a.field(n)};async function B(a,n,e){if(!a||!a.symbol||!n)return d;const o=a.where,i=E(a),s=o?await y(()=>import("./WhereClause-a4dbe0c1.js").then(r=>r.W),["assets/WhereClause-a4dbe0c1.js","assets/string-feb899cf.js","assets/typedArrayUtil-96f93e5b.js","assets/executionError-fb3f283a.js","assets/datetime-b6333958.js"]):null;let l;if(i.type==="arcade"){const r=await x(i.expression,e,n);if(h(r))return d;l={type:"arcade",evaluate(u){try{const t=r.evaluate({$feature:"attributes"in u?r.repurposeFeature(u):u});if(t!=null)return t.toString()}catch{f.error(new m("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:u,expression:i}))}return null},needsHydrationToEvaluate:()=>F(i.expression)==null}}else l={type:"simple",evaluate:r=>i.expression.replace(/{[^}]*}/g,u=>{const t=u.slice(1,-1),p=n.get(t);if(!p)return u;let c=null;return"attributes"in r?r&&r.attributes&&(c=r.attributes[p.name]):c=r.field(p.name),c==null?"":L(c,p)})};if(o){let r;try{r=s.WhereClause.create(o,n)}catch(t){return f.error(new m("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:o,error:t})),d}const u=l.evaluate;l.evaluate=t=>{const p="attributes"in t?void 0:V;try{if(r.testFeature(t,p))return u(t)}catch(c){f.error(new m("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:o,feature:t,error:c}))}return null}}return l}function L(a,n){if(a==null)return"";const e=n.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const i=a;for(const s of e.codedValues)if(s.code===i)return s.name}else if(e.type==="range"){const i=+a,s="range"in e?e.range[0]:e.minValue,l="range"in e?e.range[1]:e.maxValue;if(s<=i&&i<=l)return e.name}}let o=a;return n.type==="date"||n.type==="esriFieldTypeDate"?o=w(o,b("short-date")):_(n)&&(o=v(+o)),o||""}export{B as createLabelFunction,L as formatField};
