import{l as R}from"./Color-9f46ece8.js";import{U as G}from"./request-7c0a9d4c.js";import{r as F}from"./ensureType-348c3d61.js";import{a5 as M,i as P}from"./mathUtils-b3bee9e7.js";import{r as m,e as T,o as h,t as D}from"./typedArrayUtil-96f93e5b.js";import{g as B}from"./mat3-d3027213.js";import{e as I}from"./mat3f64-221ce671.js";import{r as U}from"./vec4f64-aa64c7e9.js";import{p as j,m as q,c as z,g as V}from"./meshFeatureSet-03c412da.js";import{c as N,x as O,L as k,O as L,i as _,E as K,T as Q,u as X}from"./BufferView-6e7f315f.js";import{t as Y,r as Z,o as H,b as J,f as W,e as tt,n as rt}from"./vec33-87671de1.js";import{n as ot,m as et,r as b,a as nt,g as it,t as E,b as st,h as at,c as mt,e as pt,j as ut,i as ct,f as lt,d as ft,o as $t}from"./DefaultMaterial_COLOR_GAMMA-938a8569.js";import{_ as dt}from"./georeference-349b139c.js";import{t as xt}from"./resourceUtils-71fe9113.js";import{u as gt}from"./Indices-9f31eb0f.js";import{E as A,D as C}from"./enums-64ab819c.js";import"./colorUtils-639f4d25.js";import"./preload-helper-f8378b50.js";import"./Error-d97df89f.js";import"./string-feb899cf.js";import"./promiseUtils-ac1bd36f.js";import"./Graphic-f117754c.js";import"./JSONSupport-ed372989.js";import"./nextTick-3ee5a785.js";import"./geometry-d89d4a34.js";import"./Extent-fd3ac910.js";import"./cast-73cfc253.js";import"./Polyline-9d44200b.js";import"./typeUtils-2ccaf90d.js";import"./PopupTemplate-63dce4d3.js";import"./Clonable-5318ec31.js";import"./Collection-d9d92883.js";import"./Evented-e2ee9722.js";import"./SimpleObservable-04055e8d.js";import"./fieldUtils-66be74eb.js";import"./enumeration-49e09bda.js";import"./number-205e28e0.js";import"./locale-30120714.js";import"./Identifiable-876da2a8.js";import"./symbols-946d4e11.js";import"./CIMSymbol-0fa077f5.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-cc413a8c.js";import"./symbolLayerUtils3D-0c6ed99a.js";import"./aaBoundingBox-1eda6d1b.js";import"./persistableUrlUtils-26091271.js";import"./collectionUtils-e98ed3f0.js";import"./Portal-172924b2.js";import"./Loadable-c96deb83.js";import"./Promise-34cff6d6.js";import"./PortalGroup-751b527f.js";import"./PortalUser-7f979a04.js";import"./jsonUtils-dd0891e0.js";import"./HandleOwner-4c8d824c.js";import"./reactiveUtils-307e98f9.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-61f7b102.js";import"./deduplicate-a247a671.js";import"./projection-d7a5b449.js";import"./mat4-1ee69bd5.js";import"./assets-2c955bed.js";import"./zscale-e06cee6f.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-2b16902d.js";import"./FeatureSet-00b7d51e.js";import"./Field-b17a677d.js";import"./fieldType-b21f2e7f.js";import"./vec2-9030ffc5.js";import"./types-e1c0a5bf.js";import"./asyncUtils-f0fdc8c7.js";import"./Version-bbcb090a.js";import"./quat-7a51fb0c.js";import"./quatf64-3363c48e.js";import"./compilerUtils-8d4f8499.js";import"./basicInterfaces-b7051eb1.js";async function Hr(t,r,n){const i=new ot(Tt(n)),o=(await et(i,r,n,!0)).model,l=o.lods.shift(),p=new Map,u=new Map;o.textures.forEach((g,y)=>p.set(y,vt(g))),o.materials.forEach((g,y)=>u.set(y,wt(g,p)));const a=bt(l);for(const g of a.parts)yt(a,g,u);const{position:$,normal:c,tangent:e,color:s,texCoord0:f}=a.vertexAttributes,x={position:$.typedBuffer,normal:m(c)?c.typedBuffer:null,tangent:m(e)?e.typedBuffer:null,uv:m(f)?f.typedBuffer:null,color:m(s)?s.typedBuffer:null},w=dt(x,t,n);return{transform:w.transform,components:a.components,spatialReference:t.spatialReference,vertexAttributes:new j({position:w.vertexAttributes.position,normal:w.vertexAttributes.normal,tangent:w.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function Tt(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(n,i,o)=>{const l=r(n);return(await G(l,{responseType:i==="image"?"image":i==="binary"?"array-buffer":"json",signal:m(o)?o.signal:null})).data}}:null}function v(t,r){if(D(t))return"-";const n=t.typedBuffer;return`${F(r,n.buffer,()=>r.size)}/${n.byteOffset}/${n.byteLength}`}function ht(t){return m(t)?t.toString():"-"}function bt(t){let r=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,o=new Map,l=[];for(const p of t.parts){const{attributes:{position:u,normal:a,color:$,tangent:c,texCoord0:e}}=p,s=`
      ${v(u,i)}/
      ${v(a,i)}/
      ${v($,i)}/
      ${v(c,i)}/
      ${v(e,i)}/
      ${ht(p.transform)}
    `;let f=!1;const x=F(o,s,()=>(f=!0,{start:r,length:u.count}));f&&(r+=u.count),a&&(n.normal=!0),$&&(n.color=!0),c&&(n.tangent=!0),e&&(n.texCoord0=!0),l.push({gltf:p,writeVertices:f,region:x})}return{vertexAttributes:{position:b(Q,r),normal:n.normal?b(_,r):null,tangent:n.tangent?b(N,r):null,color:n.color?b(O,r):null,texCoord0:n.texCoord0?b(X,r):null},parts:l,components:[]}}function vt(t){return new q({data:(xt(t.data),t.data),wrap:Rt(t.parameters.wrap)})}function wt(t,r){const n=new R(Mt(t.color,t.opacity)),i=t.emissiveFactor?new R(Bt(t.emissiveFactor)):null;return new z({color:n,colorTexture:T(h(t.textureColor,o=>r.get(o))),normalTexture:T(h(t.textureNormal,o=>r.get(o))),emissiveColor:i,emissiveTexture:T(h(t.textureEmissive,o=>r.get(o))),occlusionTexture:T(h(t.textureOcclusion,o=>r.get(o))),alphaMode:Ct(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:T(h(t.textureMetallicRoughness,o=>r.get(o))),colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform})}function yt(t,r,n){r.writeVertices&&Et(t,r);const i=r.gltf,o=At(i.indices||i.attributes.position.count,i.primitiveType),l=r.region.start;if(l)for(let p=0;p<o.length;p++)o[p]+=l;t.components.push(new V({faces:o,material:n.get(i.material),trustSourceNormals:!0}))}function Et(t,r){const{position:n,normal:i,tangent:o,color:l,texCoord0:p}=t.vertexAttributes,u=r.region.start,{attributes:a,transform:$}=r.gltf,c=a.position.count;if(Y(n.slice(u,c),a.position,$),m(a.normal)&&m(i)){const e=B(I(),$),s=i.slice(u,c);Z(s,a.normal,e),M(e)&&H(s,s)}else m(i)&&J(i,0,0,1,{dstIndex:u,count:c});if(m(a.tangent)&&m(o)){const e=B(I(),$),s=o.slice(u,c);nt(s,a.tangent,e),M(e)&&it(s,s)}else m(o)&&E(o,0,0,1,1,{dstIndex:u,count:c});if(m(a.texCoord0)&&m(p)?st(p.slice(u,c),a.texCoord0):m(p)&&at(p,0,0,{dstIndex:u,count:c}),m(a.color)&&m(l)){const e=a.color,s=l.slice(u,c);if(e.elementCount===4)e instanceof N?mt(s,e,255):e instanceof O?pt(s,e):e instanceof k&&ut(s,e,8);else{E(s,255,255,255,255);const f=L.fromTypedArray(s.typedBuffer,s.typedBufferStride);e instanceof _?W(f,e,255):e instanceof L?tt(f,e):e instanceof K&&rt(f,e,8)}}else m(l)&&E(l.slice(u,c),255,255,255,255)}function At(t,r){switch(r){case A.TRIANGLES:return ft(t,gt);case A.TRIANGLE_STRIP:return lt(t);case A.TRIANGLE_FAN:return ct(t)}}function Ct(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Rt(t){return{horizontal:S(t.s),vertical:S(t.t)}}function S(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function d(t){return t**(1/$t)*255}function Mt(t,r){return U(d(t[0]),d(t[1]),d(t[2]),r)}function Bt(t){return P(d(t[0]),d(t[1]),d(t[2]))}export{Hr as loadGLTFMesh};
