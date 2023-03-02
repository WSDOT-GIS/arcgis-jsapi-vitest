import{j as T}from"./Collection-912f4315.js";import"./string-75082bc6.js";import{E as f}from"./promiseUtils-28f2a985.js";import{a as n}from"./lazyLayerLoader-88ae1eee.js";import g from"./PortalItem-9c70e5ea.js";import{selectLayerClassPath as G}from"./portalLayers-c30f28b9.js";import{t as M}from"./styleUtils-023b7cfa.js";import"./Accessor-815cb0cf.js";import"./typedArrayUtil-74bbfd45.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./Error-781981d1.js";import"./ensureType-125d327f.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./preload-helper-101896b7.js";import"./assets-fff829c9.js";import"./request-b4e08038.js";import"./JSONSupport-2b897629.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./Extent-8fae2379.js";import"./cast-f7d2a22f.js";import"./Portal-0799d17c.js";import"./locale-30120714.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-092553f2.js";import"./layerUtils-0d596ed5.js";import"./layersLoader-f8c2571f.js";import"./Layer-84815c0a.js";import"./geometry-0d19f94b.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./Identifiable-f5397426.js";import"./arcgisLayerUrl-90607db0.js";import"./persistableUrlUtils-5532b98d.js";import"./fetchService-32103a96.js";import"./jsonContext-97785308.js";import"./portalItemUtils-0c95d3a7.js";import"./projection-4083e235.js";import"./mathUtils-15f63a45.js";import"./mat4-a8da3f27.js";import"./zscale-a617710a.js";import"./asyncUtils-5c97747c.js";function A(e){return S(e,"notes")}function v(e){return S(e,"markup")}function w(e){return S(e,"route")}function S(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function b(e,r,t){if(!r)return;const i=[];for(const a of r){const y=h(a,t);a.layerType==="GroupLayer"?i.push(k(y,a,t)):i.push(y)}const o=await f(i);for(const a of o)a.value&&e.add(a.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},F={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},C={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},O={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},B={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function h(e,r){return D(await U(e,r),e,r)}async function D(e,r,t){const i=new e;return i.read(r,t.context),i.type==="group"&&I(r)&&await E(i,r,t.context),await M(i,t.context),i}async function U(e,r){var L;const t=r.context,i=x(t);let o=e.layerType||e.type;!o&&r&&r.defaultLayerType&&(o=r.defaultLayerType);const a=i[o];let y=a?n[a]:n.UnknownLayer;if(d(e)){const p=t==null?void 0:t.portal;if(e.itemId){const c=new g({id:e.itemId,portal:p});await c.load();const l=(await G(c)).className||"UnknownLayer";y=n[l]}}else o==="ArcGISFeatureLayer"?A(e)||v(e)?y=n.MapNotesLayer:w(e)?y=n.RouteLayer:I(e)&&(y=n.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?y=n.WMTSLayer:o==="WFS"&&((L=e.wfsInfo)==null?void 0:L.version)!=="2.0.0"&&(y=n.UnsupportedLayer);return y()}function I(e){var r,t;return e.layerType!=="ArcGISFeatureLayer"||d(e)?!1:(((t=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:t.length)??0)>1}function d(e){return e.type==="Feature Collection"}function x(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=C;break;case"ground":r=F;break;default:r=W}else switch(e.layerContainerType){case"basemap":r=B;break;case"tables":r=V;break;default:r=O}return r}async function k(e,r,t){const i=new T,o=b(i,Array.isArray(r.layers)?r.layers:[],t),a=await e;if(await o,a.type==="group")return a.layers.addMany(i),a}async function E(e,r,t){var p;const i=n.FeatureLayer,o=await i(),a=r.featureCollection,y=a==null?void 0:a.showLegend,L=(p=a==null?void 0:a.layers)==null?void 0:p.map((c,l)=>{var m;const s=new o;s.read(c,t);const u={...t,ignoreDefaults:!0};return s.read({id:`${e.id}-sublayer-${l}`,visibility:((m=r.visibleLayers)==null?void 0:m.includes(l))??!0},u),y!=null&&s.read({showLegend:y},u),s});e.layers.addMany(L??[])}export{b as populateOperationalLayers};
