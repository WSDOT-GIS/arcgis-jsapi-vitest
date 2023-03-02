import{_ as G}from"./preload-helper-101896b7.js";import{l}from"./Color-5e799d63.js";import{x as h,b as k,l as v}from"./symbols-d9f90967.js";import{c as X}from"./asyncUtils-5c97747c.js";import"./string-75082bc6.js";import{t as b,r as f,g as P,x as Y,h as j}from"./typedArrayUtil-74bbfd45.js";import{u,e as R}from"./screenUtils-7afeb41c.js";import{l as F}from"./mathUtils-15f63a45.js";import{i as W}from"./jsonUtils-0607c004.js";import{a as _}from"./assets-fff829c9.js";import{U as V}from"./request-b4e08038.js";import{e as U}from"./ItemCache-dc80b100.js";import{f as S,M as g,y as C,m as d,C as D,a as H}from"./utils-709f2b59.js";function $(e,t,o,r){if(e)if(e.type!=="CIMTextSymbol"){if(o&&e.effects)for(const n of e.effects)q(n,t);if(e.symbolLayers)for(const n of e.symbolLayers)switch(n.type){case"CIMPictureMarker":case"CIMVectorMarker":J(n,t,r);break;case"CIMPictureStroke":case"CIMSolidStroke":!(r!=null&&r.preserveOutlineWidth)&&n.width&&(n.width*=t);break;case"CIMPictureFill":n.height&&(n.height*=t),n.offsetX&&(n.offsetX*=t),n.offsetY&&(n.offsetY*=t);break;case"CIMHatchFill":$(n.lineSymbol,t,!0,{...r,preserveOutlineWidth:!1}),n.offsetX&&(n.offsetX*=t),n.offsetY&&(n.offsetY*=t),n.separation&&(n.separation*=t)}}else e.height!=null&&(e.height*=t)}function J(e,t,o){if(e&&(e.markerPlacement&&N(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=e.size!=null?e.size*t:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const r of e.markerGraphics)e.scaleSymbolsProportionally||$(r.symbol,t,!0,o)}function N(e,t){switch(d(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map(r=>r*t);e.placementTemplate=o}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map(r=>r*t);e.placementTemplate=o}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}function q(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map(r=>r*t);e.dashTemplate=o}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function B(e){const t=[];return I(S(e),t),t.length?new l(H(t[0])):null}function I(e,t){var n;if(!e)return;let o;o=e.type==="CIMTextSymbol"?e.symbol:e;const r=e.type==="CIMPolygonSymbol";if(o!=null&&o.symbolLayers){for(const a of o.symbolLayers)if(!(a.colorLocked||r&&(g(a)||C(a)&&a.markerPlacement&&d(a.markerPlacement))))switch(a.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":a.tintColor&&L(t,a.tintColor);break;case"CIMVectorMarker":(n=a.markerGraphics)==null||n.forEach(s=>{I(s.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":L(t,a.color);break;case"CIMHatchFill":I(a.lineSymbol,t)}}}function L(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t)}function $e(e,t,o){t instanceof l||(t=new l(t));const r=S(e);r&&w(r,t,o)}function w(e,t,o){var a;if(!e)return;let r;r=e.type==="CIMTextSymbol"?e.symbol:e;const n=(r==null?void 0:r.type)==="CIMPolygonSymbol";if(r!=null&&r.symbolLayers)for(const s of r.symbolLayers){if(s.colorLocked)continue;if(n){if(o){const{layersToColor:i}=o;if((g(s)||C(s)&&s.markerPlacement&&d(s.markerPlacement))&&i==="fill"||D(s)&&i==="outline")continue}else if(g(s)||C(s)&&s.markerPlacement&&d(s.markerPlacement))continue}const c=t.toArray();switch(s.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":s.tintColor=c;break;case"CIMVectorMarker":(a=s.markerGraphics)==null||a.forEach(i=>{w(i.symbol,t,o)});break;case"CIMSolidStroke":case"CIMSolidFill":s.color=c;break;case"CIMHatchFill":w(s.lineSymbol,t,o)}}}const E="picture-fill",x="simple-fill",K="simple-line",T="simple-marker",Q="text",Z="cim",M=new U(1e3);function Ee(e){const t=e.style;let o=null;if(e)switch(e.type){case T:t!=="cross"&&t!=="x"&&(o=e.color);break;case x:t==="solid"?o=e.color:t!=="none"&&(o={type:"pattern",x:0,y:0,src:_(`esri/symbols/patterns/${t}.png`),width:5,height:5});break;case E:o={type:"pattern",src:e.url,width:u(e.width)*e.xscale,height:u(e.height)*e.yscale,x:u(e.xoffset),y:u(e.yoffset)};break;case Q:o=e.color;break;case Z:o=B(e)}return o}function xe(e,t){const o=e+"-"+t;return M.get(o)!==void 0?Promise.resolve(M.get(o)):V(e,{responseType:"image"}).then(r=>{const n=r.data,a=n.naturalWidth,s=n.naturalHeight,c=document.createElement("canvas");c.width=a,c.height=s;const i=c.getContext("2d");i.fillStyle=t,i.fillRect(0,0,a,s),i.globalCompositeOperation="destination-in",i.drawImage(n,0,0);const m=c.toDataURL();return M.put(o,m),m})}function z(e){if(!e)return null;let t=null;switch(e.type){case x:case E:case T:t=z(e.outline);break;case K:{const o=u(e.width);e.style!=null&&e.style!=="none"&&o!==0&&(t={color:e.color,style:ee(e.style),width:o,cap:e.cap,join:e.join==="miter"?u(e.miterLimit):e.join});break}default:t=null}return t}const ee=(()=>{const e={};return t=>{if(e[t])return e[t];const o=t.replace(/-/g,"");return e[t]=o,o}})(),Te=new l([128,128,128]),te=new l("white");function oe(e){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const o=e.symbolLayers.getItemAt(t-1);return"outline"in o?Y(o,"outline","size"):void 0}function ze(e){var t;if(!e)return 0;if(h(e)){const o=oe(e);return f(o)?o:0}return R((t=z(e))==null?void 0:t.width)}function Oe(e){if(b(e)||!("symbolLayers"in e)||b(e.symbolLayers))return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(t=>t.type==="object");case"line-3d":return e.symbolLayers.some(t=>t.type==="path");case"polygon-3d":return e.symbolLayers.some(t=>t.type==="object"||t.type==="extrude");default:return!1}}function Ae(e){return j(e.resource).href}function Ge(e,t){if(!e)return null;let o=null;return h(e)?o=re(e):k(e)&&(o=e.color?new l(e.color):null),o?y(o,t):null}function re(e){const t=e.symbolLayers;if(!t)return null;let o=null;return t.forEach(r=>{var n;r.type==="object"&&((n=r.resource)==null?void 0:n.href)!=null||(o=r.type==="water"?P(r.color):f(r.material)?P(r.material.color):null)}),o?new l(o):null}function y(e,t){if(t==null||e==null)return e;const o=e.toRgba();return o[3]=o[3]*t,new l(o)}function ne(e,t,o){const r=e.symbolLayers;if(!r)return;const n=a=>{const s=f(a)?a:null;return y(t=t??s??(o!=null?te:null),o)};r.forEach(a=>{var s;if(a.type!=="object"||((s=a.resource)==null?void 0:s.href)==null||t)if(a.type==="water")a.color=n(a.color);else{const c=f(a.material)?a.material.color:null,i=n(c);b(a.material)?a.material=new v({color:i}):a.material.color=i,o!=null&&"outline"in a&&f(a.outline)&&f(a.outline.color)&&(a.outline.color=y(a.outline.color,o))}})}function ae(e,t,o){(t=t??e.color)&&(e.color=y(t,o)),o!=null&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=y(e.outline.color,o))}function ve(e,t,o){e&&(t||o!=null)&&(t&&(t=new l(t)),h(e)?ne(e,t,o):k(e)&&ae(e,t,o))}async function se(e,t){const o=e.symbolLayers;o&&await X(o,async r=>ie(r,t))}async function ie(e,t){switch(e.type){case"extrude":le(e,t);break;case"icon":case"line":case"text":ce(e,t);break;case"path":ue(e,t);break;case"object":await fe(e,t)}}function ce(e,t){const o=O(t);f(o)&&(e.size=o)}function O(e){for(const t of e)if(typeof t=="number")return t;return null}function le(e,t){e.size=typeof t[2]=="number"?t[2]:0}async function fe(e,t){const{resourceSize:o,symbolSize:r}=await me(e),n=A(t,o,r);e.width=p(t[0],r[0],o[0],n),e.depth=p(t[1],r[1],o[1],n),e.height=p(t[2],r[2],o[2],n)}function ue(e,t){const o=A(t,F,[e.width,void 0,e.height]);e.width=p(t[0],e.width,1,o),e.height=p(t[2],e.height,1,o)}function A(e,t,o){for(let r=0;r<3;r++){const n=e[r];switch(n){case"symbol-value":{const a=o[r];return a!=null?a/t[r]:1}case"proportional":break;default:if(n&&t[r])return n/t[r]}}return 1}async function me(e){const t=await G(()=>import("./symbolLayerUtils-e883cb77.js"),["assets/symbolLayerUtils-e883cb77.js","assets/preload-helper-101896b7.js","assets/request-b4e08038.js","assets/Error-781981d1.js","assets/string-75082bc6.js","assets/typedArrayUtil-74bbfd45.js","assets/promiseUtils-28f2a985.js","assets/ItemCache-dc80b100.js","assets/MemCache-9d81d118.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/nextTick-3ee5a785.js","assets/aaBoundingBox-5e14079b.js","assets/Extent-8fae2379.js","assets/Accessor-815cb0cf.js","assets/ensureType-125d327f.js","assets/JSONSupport-2b897629.js","assets/cast-f7d2a22f.js","assets/mathUtils-15f63a45.js","assets/symbolLayerUtils3D-15190f75.js"]),o=await t.computeObjectLayerResourceSize(e,10),{width:r,height:n,depth:a}=e,s=[r,a,n];let c=1;for(let i=0;i<3;i++){const m=s[i];if(m!=null){c=m/o[i];break}}for(let i=0;i<3;i++)s[i]==null&&(s[i]=o[i]*c);return{resourceSize:o,symbolSize:s}}function p(e,t,o,r){switch(e){case"proportional":return o*r;case"symbol-value":return t??o;default:return e}}function pe(e,t){const o=O(t);if(!b(o))switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const r=e.width/e.height;r>1?(e.width=o,e.height=o*r):(e.width=o*r,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o}}async function Xe(e,t){if(e&&t)return h(e)?se(e,t):void(k(e)&&pe(e,t))}function Ye(e,t,o){if(e&&t!=null)if(h(e)){const r=e.symbolLayers;r&&r.forEach(n=>{if(n&&n.type==="object")switch(o){case"tilt":n.tilt=t;break;case"roll":n.roll=t;break;default:n.heading=t}})}else k(e)&&(e.type!=="simple-marker"&&e.type!=="picture-marker"&&e.type!=="text"||(e.angle=t))}function je(e){if(!e)return null;const t=e.effects.filter(o=>o.type!=="bloom").map(o=>o.toJSON());return W(t)}async function Re(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}export{Re as F,$e as I,Xe as J,Ye as N,ve as S,Ae as a,ze as b,ee as d,Ee as f,Te as g,xe as h,Ge as j,J as m,je as q,Oe as w,z as y};
