import{_ as n}from"./preload-helper-f8378b50.js";import{e as o,y as i,a as h}from"./JSONSupport-ed372989.js";import"./geometry-d89d4a34.js";import{L as b,U as c}from"./request-7c0a9d4c.js";import{b as f,s as p,a as v}from"./Error-d97df89f.js";import{n as g}from"./Evented-e2ee9722.js";import{s as w}from"./Identifiable-876da2a8.js";import{m as L}from"./Loadable-c96deb83.js";import{j as _}from"./promiseUtils-ac1bd36f.js";import"./ensureType-348c3d61.js";import"./typedArrayUtil-96f93e5b.js";import{a as y,f as l}from"./Extent-fd3ac910.js";async function D(t){const r="portalItem"in t?t:{portalItem:t},d=await n(()=>import("./portalLayers-87228bbd.js"),["assets/portalLayers-87228bbd.js","assets/Error-d97df89f.js","assets/string-feb899cf.js","assets/typedArrayUtil-96f93e5b.js","assets/layerUtils-a0871894.js","assets/request-7c0a9d4c.js","assets/preload-helper-f8378b50.js","assets/promiseUtils-ac1bd36f.js","assets/lazyLayerLoader-29bad81d.js","assets/PortalItem-a25335a3.js","assets/JSONSupport-ed372989.js","assets/ensureType-348c3d61.js","assets/nextTick-3ee5a785.js","assets/assets-2c955bed.js","assets/Loadable-c96deb83.js","assets/Promise-34cff6d6.js","assets/Extent-fd3ac910.js","assets/cast-73cfc253.js","assets/Portal-172924b2.js","assets/locale-30120714.js","assets/PortalGroup-751b527f.js","assets/PortalUser-7f979a04.js","assets/layersLoader-cab4001a.js","assets/arcgisLayerUrl-9d6ab56c.js","assets/persistableUrlUtils-26091271.js","assets/fetchService-280e3b9b.js","assets/jsonContext-97094046.js","assets/portalItemUtils-72345980.js","assets/projection-d7a5b449.js","assets/mathUtils-b3bee9e7.js","assets/SimpleObservable-04055e8d.js","assets/mat4-1ee69bd5.js","assets/Polyline-9d44200b.js","assets/zscale-e06cee6f.js","assets/styleUtils-f45b991d.js","assets/asyncUtils-f0fdc8c7.js","assets/geometry-d89d4a34.js","assets/typeUtils-2ccaf90d.js","assets/Evented-e2ee9722.js","assets/Identifiable-876da2a8.js"]);try{return await d.fromItem(r)}catch(s){const a=r&&r.portalItem,u=a&&a.id||"unset",m=a&&a.portal&&a.portal.url||f.portalUrl;throw p.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+m+"', id: '"+u+"')",s),s}}let E=0,e=class extends g.EventedMixin(w(L)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y(-180,-90,180,90,l.WGS84),this.id=Date.now().toString(16)+"-layer-"+E++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=l.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r=typeof t=="string"?{url:t}:t;return(await n(()=>import("./arcgisLayers-786fbb56.js"),["assets/arcgisLayers-786fbb56.js","assets/preload-helper-f8378b50.js","assets/Error-d97df89f.js","assets/string-feb899cf.js","assets/typedArrayUtil-96f93e5b.js","assets/request-7c0a9d4c.js","assets/promiseUtils-ac1bd36f.js","assets/arcgisLayerUrl-9d6ab56c.js","assets/persistableUrlUtils-26091271.js","assets/fetchService-280e3b9b.js","assets/layerUtils-a0871894.js","assets/lazyLayerLoader-29bad81d.js"])).fromUrl(r)}static fromPortalItem(t){return D(t)}initialize(){this.when().catch(t=>{_(t)||p.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return b(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await c(t,{query:{f:"json"},responseType:"json"})).data;throw new v("layer:no-attribution-data","Layer does not have attribution data")}};o([i({type:String})],e.prototype,"attributionDataUrl",void 0),o([i({type:y})],e.prototype,"fullExtent",void 0),o([i({readOnly:!0})],e.prototype,"hasAttributionData",null),o([i({type:String,clonable:!1})],e.prototype,"id",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),o([i({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),o([i({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),o([i({clonable:!1})],e.prototype,"parent",void 0),o([i({readOnly:!0})],e.prototype,"parsedUrl",null),o([i({type:Boolean})],e.prototype,"popupEnabled",void 0),o([i({type:Boolean})],e.prototype,"attributionVisible",void 0),o([i({type:l})],e.prototype,"spatialReference",void 0),o([i({type:String})],e.prototype,"title",void 0),o([i({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),o([i()],e.prototype,"url",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=o([h("esri.layers.Layer")],e);const V=e;export{V as b};
