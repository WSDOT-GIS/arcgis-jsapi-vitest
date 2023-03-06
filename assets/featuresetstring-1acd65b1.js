import{B as o,z as s,an as T,l as d,r as u,G as m,ao as f,ap as A,b as l,Q as w,aq as g,ar as x,as as F,at as I,au as O,y as j,av as D,aw as y}from"./arcadeUtils-a59aeb85.js";import{t as p,e as v}from"./executionError-fb3f283a.js";import"./geometry-0d19f94b.js";import"./ensureType-125d327f.js";import"./string-75082bc6.js";import"./typedArrayUtil-74bbfd45.js";import"./Error-781981d1.js";import"./Extent-8fae2379.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./preload-helper-f8378b50.js";import"./ArcadeDate-3d8ef842.js";import"./datetime-b6333958.js";import"./number-def30271.js";import"./locale-30120714.js";import"./Field-7770b57d.js";import"./enumeration-94b1319d.js";import"./fieldType-e429d020.js";import"./jsonUtils-15ca15d7.js";import"./featureConversionUtils-55a32b06.js";import"./aaBoundingBox-5e14079b.js";import"./mathUtils-15f63a45.js";import"./aaBoundingRect-3cd21eb0.js";import"./OptimizedFeature-6cca5f48.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-ae7029ea.js";import"./Portal-2a7c40a2.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-c84fcbac.js";import"./sizeVariableUtils-d4870b0d.js";function b(r,n){return r&&r.domain?r.domain.type==="coded-value"||r.domain.type==="codedValue"?l.convertObjectToArcadeDictionary({type:"codedValue",name:r.domain.name,dataType:y[r.field.type],codedValues:r.domain.codedValues.map(e=>({name:e.name,code:e.code}))},w(n)):l.convertObjectToArcadeDictionary({type:"range",name:r.domain.name,dataType:y[r.field.type],min:r.domain.min,max:r.domain.max},w(n)):null}function vt(r){r.mode==="async"&&(r.functions.domain=function(n,e){return r.standardFunctionAsync(n,e,async(i,c,t)=>{if(o(t,2,3,n,e),s(t[0]))return b(T(t[0],u(t[1]),t[2]===void 0?void 0:d(t[2])),n);if(m(t[0]))return await t[0]._ensureLoaded(),b(f(u(t[1]),t[0],null,t[2]===void 0?void 0:d(t[2])),n);throw new p(n,v.InvalidParameter,e)})},r.functions.subtypes=function(n,e){return r.standardFunctionAsync(n,e,async(i,c,t)=>{if(o(t,1,1,n,e),s(t[0])){const a=A(t[0]);return a?l.convertObjectToArcadeDictionary(a,w(n)):null}if(m(t[0])){await t[0]._ensureLoaded();const a=t[0].subtypes();return a?l.convertObjectToArcadeDictionary(a,w(n)):null}throw new p(n,v.InvalidParameter,e)})},r.functions.domainname=function(n,e){return r.standardFunctionAsync(n,e,async(i,c,t)=>{if(o(t,2,4,n,e),s(t[0]))return g(t[0],u(t[1]),t[2],t[3]===void 0?void 0:d(t[3]));if(m(t[0])){await t[0]._ensureLoaded();const a=f(u(t[1]),t[0],null,t[3]===void 0?void 0:d(t[3]));return x(a,t[2])}throw new p(n,v.InvalidParameter,e)})},r.signatures.push({name:"domainname",min:2,max:4}),r.functions.domaincode=function(n,e){return r.standardFunctionAsync(n,e,async(i,c,t)=>{if(o(t,2,4,n,e),s(t[0]))return F(t[0],u(t[1]),t[2],t[3]===void 0?void 0:d(t[3]));if(m(t[0])){await t[0]._ensureLoaded();const a=f(u(t[1]),t[0],null,t[3]===void 0?void 0:d(t[3]));return I(a,t[2])}throw new p(n,v.InvalidParameter,e)})},r.signatures.push({name:"domaincode",min:2,max:4})),r.functions.text=function(n,e){return r.standardFunctionAsync(n,e,(i,c,t)=>{if(o(t,1,2,n,e),!m(t[0]))return O(t[0],t[1]);{const a=j(t[1],"");if(a==="")return t[0].castToText();if(a.toLowerCase()==="schema")return t[0].convertToText("schema",i.abortSignal);if(a.toLowerCase()==="featureset")return t[0].convertToText("featureset",i.abortSignal)}})},r.functions.gdbversion=function(n,e){return r.standardFunctionAsync(n,e,async(i,c,t)=>{if(o(t,1,1,n,e),s(t[0]))return t[0].gdbVersion();if(m(t[0]))return(await t[0].load()).gdbVersion;throw new p(n,v.InvalidParameter,e)})},r.functions.schema=function(n,e){return r.standardFunctionAsync(n,e,async(i,c,t)=>{if(o(t,1,1,n,e),m(t[0]))return await t[0].load(),l.convertObjectToArcadeDictionary(t[0].schema(),w(n));if(s(t[0])){const a=D(t[0]);return a?l.convertObjectToArcadeDictionary(a,w(n)):null}throw new p(n,v.InvalidParameter,e)})}}export{vt as registerFunctions};
