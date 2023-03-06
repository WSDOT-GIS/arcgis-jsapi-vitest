import{_ as O}from"./preload-helper-f8378b50.js";import{a as L}from"./Error-d97df89f.js";import{t as S,r as d}from"./typedArrayUtil-96f93e5b.js";import{q as P,L as T}from"./request-7c0a9d4c.js";import{d as g,h as C}from"./arcgisLayerUrl-9d6ab56c.js";import{t as m,r as F}from"./fetchService-280e3b9b.js";import{a as v}from"./layerUtils-a0871894.js";import{a as N}from"./lazyLayerLoader-29bad81d.js";import"./string-feb899cf.js";import"./promiseUtils-ac1bd36f.js";import"./persistableUrlUtils-26091271.js";const _={FeatureLayer:!0,SceneLayer:!0};async function H(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await U(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await O(()=>import("./GroupLayer-e8c58c0d.js"),["assets/GroupLayer-e8c58c0d.js","assets/JSONSupport-ed372989.js","assets/typedArrayUtil-96f93e5b.js","assets/string-feb899cf.js","assets/Error-d97df89f.js","assets/ensureType-348c3d61.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-ac1bd36f.js","assets/CollectionFlattener-52a0c7e4.js","assets/Collection-d9d92883.js","assets/Evented-e2ee9722.js","assets/SimpleObservable-04055e8d.js","assets/loadAll-f0d5998c.js","assets/asyncUtils-f0fdc8c7.js","assets/Loadable-c96deb83.js","assets/Promise-34cff6d6.js","assets/MultiOriginJSONSupport-97bf66dd.js","assets/reactiveUtils-307e98f9.js","assets/Extent-fd3ac910.js","assets/cast-73cfc253.js","assets/Layer-07a07202.js","assets/preload-helper-f8378b50.js","assets/geometry-d89d4a34.js","assets/Polyline-9d44200b.js","assets/typeUtils-2ccaf90d.js","assets/request-7c0a9d4c.js","assets/Identifiable-876da2a8.js","assets/BlendLayer-5cec7349.js","assets/parser-a11e786f.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/mat4f32-60a2394b.js","assets/mat4-1ee69bd5.js","assets/mathUtils-b3bee9e7.js","assets/OperationalLayer-a420b681.js","assets/TimeExtent-d2d7594c.js","assets/persistableUrlUtils-26091271.js","assets/ElevationInfo-75e7bf35.js","assets/fieldUtils-66be74eb.js","assets/lengthUtils-bc8879ed.js","assets/opacityUtils-cc413a8c.js","assets/PortalLayer-d54f6a39.js","assets/layerUtils-a0871894.js","assets/Portal-172924b2.js","assets/locale-30120714.js","assets/PortalGroup-751b527f.js","assets/PortalUser-7f979a04.js","assets/PortalItem-a25335a3.js","assets/assets-2c955bed.js","assets/portalItemUtils-72345980.js","assets/projection-d7a5b449.js","assets/zscale-e06cee6f.js","assets/ScaleRangeLayer-24099455.js","assets/lazyLayerLoader-29bad81d.js","assets/TablesMixin-1e04401c.js","assets/collectionUtils-e98ed3f0.js","assets/writeUtils-5c3c75bd.js"])).default({title:e.parsedUrl.title});return J(s,e,a),s}function w(r,l){return r?r.find(e=>e.id===l):null}function J(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return d(t)&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,w(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,w(l.tableInfos,s));r.tables.add(t)})}async function U(r,l){var p,f,I,b;let e=g(r);if(S(e)&&(e=await V(r,l)),S(e))throw new L("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await M(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await m(r,{customParameters:l}),{tileInfo:i,cacheType:y}=n;t=i?((p=i==null?void 0:i.format)==null?void 0:p.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await m(e.url.path,{customParameters:l});if(t="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(i!=null&&i.length){const y=(f=i[0])==null?void 0:f.layerType;y!=null&&v[y]!=null&&(t=v[y])}}break}default:t=u[a]}const o=a==="FeatureServer",c={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(_[t]&&s==null){const n=await x(r,a,l);o&&(c.sublayerInfos=n.layerInfos,c.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(c.sublayerIds=n.layerIds,c.tableIds=n.tableIds):o&&(c.layerOrTableId=n.layerIds[0]??n.tableIds[0],c.sourceJSON=((I=n.layerInfos)==null?void 0:I[0])??((b=n.tableInfos)==null?void 0:b[0]))}return c.Constructor=await E(t),c}async function V(r,l){var o;const e=await m(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":h(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&h((o=e.layers)==null?void 0:o[0])&&(a="SceneServer"),!a)return null;const u=s!=null?C(r):null;return{title:d(u)&&e.name||P(r),serverType:a,sublayer:s,url:{path:d(u)?u.serviceUrl:T(r).path}}}function h(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function x(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await F(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await m(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function E(r){return(0,N[r])()}async function M(r,l){return(await m(r,{customParameters:l})).tileInfo}export{H as fromUrl};
