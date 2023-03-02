import{_ as y}from"./preload-helper-101896b7.js";import{s as g,a as c}from"./Error-781981d1.js";import{t as h}from"./typedArrayUtil-74bbfd45.js";import{L as w,m as v,S as b}from"./number-5e819186.js";import{n as x,a as _}from"./fieldUtils-39eb4f5d.js";import{x as E,_ as F}from"./labelUtils-75fd34dc.js";import"./string-75082bc6.js";import"./cast-f7d2a22f.js";import"./ensureType-125d327f.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./locale-30120714.js";import"./geometry-0d19f94b.js";import"./Extent-8fae2379.js";import"./JSONSupport-2b897629.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";const f=g.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},V={getAttribute:(a,n)=>a.field(n)};async function K(a,n,e){if(!a||!a.symbol||!n)return d;const o=a.where,i=E(a),s=o?await y(()=>import("./WhereClause-0ef5919b.js").then(r=>r.W),["assets/WhereClause-0ef5919b.js","assets/string-75082bc6.js","assets/typedArrayUtil-74bbfd45.js","assets/executionError-fb3f283a.js","assets/datetime-b6333958.js"]):null;let l;if(i.type==="arcade"){const r=await x(i.expression,e,n);if(h(r))return d;l={type:"arcade",evaluate(u){try{const t=r.evaluate({$feature:"attributes"in u?r.repurposeFeature(u):u});if(t!=null)return t.toString()}catch{f.error(new c("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:u,expression:i}))}return null},needsHydrationToEvaluate:()=>F(i.expression)==null}}else l={type:"simple",evaluate:r=>i.expression.replace(/{[^}]*}/g,u=>{const t=u.slice(1,-1),p=n.get(t);if(!p)return u;let m=null;return"attributes"in r?r&&r.attributes&&(m=r.attributes[p.name]):m=r.field(p.name),m==null?"":L(m,p)})};if(o){let r;try{r=s.WhereClause.create(o,n)}catch(t){return f.error(new c("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:o,error:t})),d}const u=l.evaluate;l.evaluate=t=>{const p="attributes"in t?void 0:V;try{if(r.testFeature(t,p))return u(t)}catch(m){f.error(new c("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:o,feature:t,error:m}))}return null}}return l}function L(a,n){if(a==null)return"";const e=n.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const i=a;for(const s of e.codedValues)if(s.code===i)return s.name}else if(e.type==="range"){const i=+a,s="range"in e?e.range[0]:e.minValue,l="range"in e?e.range[1]:e.maxValue;if(s<=i&&i<=l)return e.name}}let o=a;return n.type==="date"||n.type==="esriFieldTypeDate"?o=w(o,b("short-date")):_(n)&&(o=v(+o)),o||""}export{K as createLabelFunction,L as formatField};
