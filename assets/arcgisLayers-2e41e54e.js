import{_ as O}from"./preload-helper-f8378b50.js";import{a as L}from"./Error-781981d1.js";import{t as S,r as d}from"./typedArrayUtil-74bbfd45.js";import{q as P,L as T}from"./request-ae7029ea.js";import{d as g,h as C}from"./arcgisLayerUrl-0e1d3d82.js";import{t as m,r as F}from"./fetchService-57514640.js";import{a as v}from"./layerUtils-7438cb6b.js";import{a as N}from"./lazyLayerLoader-e2c3682b.js";import"./string-75082bc6.js";import"./promiseUtils-28f2a985.js";import"./persistableUrlUtils-73be900a.js";const _={FeatureLayer:!0,SceneLayer:!0};async function H(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await U(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await O(()=>import("./GroupLayer-67f828c7.js"),["assets/GroupLayer-67f828c7.js","assets/Accessor-815cb0cf.js","assets/typedArrayUtil-74bbfd45.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/string-75082bc6.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-28f2a985.js","assets/Error-781981d1.js","assets/ensureType-125d327f.js","assets/CollectionFlattener-670e79b4.js","assets/Collection-912f4315.js","assets/Evented-3dfb26f2.js","assets/SimpleObservable-729c9019.js","assets/loadAll-38268fb1.js","assets/asyncUtils-5c97747c.js","assets/Loadable-6776e4d9.js","assets/Promise-092442f7.js","assets/MultiOriginJSONSupport-6a5e69d5.js","assets/JSONSupport-2b897629.js","assets/reactiveUtils-31da19f9.js","assets/Extent-8fae2379.js","assets/cast-f7d2a22f.js","assets/Layer-974413c8.js","assets/preload-helper-f8378b50.js","assets/geometry-0d19f94b.js","assets/Polyline-40b9e769.js","assets/typeUtils-3bf84b36.js","assets/request-ae7029ea.js","assets/Identifiable-f5397426.js","assets/BlendLayer-f72967b1.js","assets/jsonUtils-0607c004.js","assets/parser-527c5e80.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/mat4f32-60a2394b.js","assets/mat4-a8da3f27.js","assets/mathUtils-15f63a45.js","assets/OperationalLayer-80c22541.js","assets/commonProperties-64b016df.js","assets/TimeExtent-202e4138.js","assets/persistableUrlUtils-73be900a.js","assets/ElevationInfo-91b8239c.js","assets/fieldUtils-e6cf5e5f.js","assets/lengthUtils-40356f92.js","assets/opacityUtils-107b33de.js","assets/PortalLayer-d601e363.js","assets/layerUtils-7438cb6b.js","assets/Portal-2a7c40a2.js","assets/locale-30120714.js","assets/PortalGroup-d3a43002.js","assets/PortalUser-c84fcbac.js","assets/PortalItem-051eae04.js","assets/assets-01239caf.js","assets/portalItemUtils-2695e0b3.js","assets/projection-319bc7cc.js","assets/zscale-a617710a.js","assets/ScaleRangeLayer-abd4cd2e.js","assets/lazyLayerLoader-e2c3682b.js","assets/TablesMixin-363b96a0.js","assets/collectionUtils-5a99c1c0.js","assets/writeUtils-8b292301.js"])).default({title:e.parsedUrl.title});return J(s,e,a),s}function w(r,l){return r?r.find(e=>e.id===l):null}function J(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return d(t)&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,w(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,w(l.tableInfos,s));r.tables.add(t)})}async function U(r,l){var p,f,I,b;let e=g(r);if(S(e)&&(e=await V(r,l)),S(e))throw new L("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await M(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await m(r,{customParameters:l}),{tileInfo:i,cacheType:y}=n;t=i?((p=i==null?void 0:i.format)==null?void 0:p.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await m(e.url.path,{customParameters:l});if(t="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(i!=null&&i.length){const y=(f=i[0])==null?void 0:f.layerType;y!=null&&v[y]!=null&&(t=v[y])}}break}default:t=u[a]}const o=a==="FeatureServer",c={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(_[t]&&s==null){const n=await x(r,a,l);o&&(c.sublayerInfos=n.layerInfos,c.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(c.sublayerIds=n.layerIds,c.tableIds=n.tableIds):o&&(c.layerOrTableId=n.layerIds[0]??n.tableIds[0],c.sourceJSON=((I=n.layerInfos)==null?void 0:I[0])??((b=n.tableInfos)==null?void 0:b[0]))}return c.Constructor=await E(t),c}async function V(r,l){var o;const e=await m(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":h(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&h((o=e.layers)==null?void 0:o[0])&&(a="SceneServer"),!a)return null;const u=s!=null?C(r):null;return{title:d(u)&&e.name||P(r),serverType:a,sublayer:s,url:{path:d(u)?u.serviceUrl:T(r).path}}}function h(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function x(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await F(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await m(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function E(r){return(0,N[r])()}async function M(r,l){return(await m(r,{customParameters:l})).tileInfo}export{H as fromUrl};
