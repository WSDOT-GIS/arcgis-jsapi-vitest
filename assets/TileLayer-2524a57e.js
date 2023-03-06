import{e as s,y as a,a as v}from"./Accessor-815cb0cf.js";import{L as g,U as c,e as _,F as S}from"./request-ae7029ea.js";import{a as u}from"./Error-781981d1.js";import{a as T}from"./HandleOwner-124247b4.js";import{l as b}from"./loadAll-38268fb1.js";import{r as h}from"./typedArrayUtil-74bbfd45.js";import{O as w}from"./MultiOriginJSONSupport-6a5e69d5.js";import{w as O}from"./promiseUtils-28f2a985.js";import{s as $}from"./cast-f7d2a22f.js";import{f as y,o as R,r as U}from"./Extent-8fae2379.js";import{b as W}from"./Layer-974413c8.js";import{i as L}from"./APIKeyMixin-8bba595e.js";import{s as P}from"./ArcGISCachedService-343280a0.js";import{E as A,y as D,Z as j}from"./SublayersOwner-fab30066.js";import{p as B}from"./ArcGISService-cdf8a9a9.js";import{n as C}from"./BlendLayer-f72967b1.js";import{o as I}from"./CustomParametersMixin-7c5495bd.js";import{c as M}from"./OperationalLayer-80c22541.js";import{_ as N}from"./PortalLayer-d601e363.js";import{p as k}from"./RefreshableLayer-ac9eee59.js";import{t as J}from"./ScaleRangeLayer-abd4cd2e.js";import{d as q,g as G,m as E}from"./arcgisLayerUrl-0e1d3d82.js";import{f as V}from"./commonProperties-64b016df.js";import{e as x}from"./imageBitmapUtils-37fb12d3.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./string-75082bc6.js";import"./nextTick-3ee5a785.js";import"./ensureType-125d327f.js";import"./preload-helper-f8378b50.js";import"./reactiveUtils-31da19f9.js";import"./asyncUtils-5c97747c.js";import"./Collection-912f4315.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./JSONSupport-2b897629.js";import"./geometry-0d19f94b.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./Identifiable-f5397426.js";import"./TilemapCache-ceead937.js";import"./TileInfo-1aef4d7f.js";import"./aaBoundingRect-3cd21eb0.js";import"./mathUtils-15f63a45.js";import"./TileKey-b87e0dc5.js";import"./byteSizeEstimations-90c5a50d.js";import"./LRUCache-425021b3.js";import"./MemCache-9d81d118.js";import"./Version-b6e10f19.js";import"./CollectionFlattener-670e79b4.js";import"./PopupTemplate-c559259f.js";import"./Clonable-6d5134c7.js";import"./fieldUtils-e6cf5e5f.js";import"./enumeration-94b1319d.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./UniqueValueRenderer-206098f5.js";import"./symbols-df54e69f.js";import"./CIMSymbol-e48b86be.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./persistableUrlUtils-73be900a.js";import"./collectionUtils-5a99c1c0.js";import"./Portal-2a7c40a2.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-c84fcbac.js";import"./LegendOptions-540a8245.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6b4a3e98.js";import"./Graphic-3183b8e9.js";import"./jsonUtils-15ca15d7.js";import"./compilerUtils-024563a4.js";import"./lengthUtils-40356f92.js";import"./jsonUtils-053e809e.js";import"./layerUtils-7438cb6b.js";import"./styleUtils-9f3a9a37.js";import"./jsonUtils-ee8d96d0.js";import"./DictionaryLoader-37853497.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./sql-af7b41f8.js";import"./QueryTask-163b9e3e.js";import"./DataLayerSource-3a7a94c9.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";import"./utils-19aa96f8.js";import"./executeForIds-516fad3b.js";import"./query-d7f993dc.js";import"./normalizeUtils-eda5eef5.js";import"./normalizeUtilsCommon-04cad10b.js";import"./utils-067ee6bc.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-9730bd74.js";import"./pbf-c0fe6550.js";import"./OptimizedFeature-6cca5f48.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-e2b48f65.js";import"./zscale-a617710a.js";import"./Query-4c66990d.js";import"./TimeExtent-202e4138.js";import"./FullTextSearch-da95615f.js";import"./executeQueryJSON-a01adc7e.js";import"./FeatureSet-736831f6.js";import"./featureConversionUtils-55a32b06.js";import"./FeatureType-f3879578.js";import"./FeatureTemplate-d52241a0.js";import"./FieldsIndex-9f1d87a4.js";import"./labelingInfo-a45c32d0.js";import"./labelUtils-75fd34dc.js";import"./defaultsJSON-b087dd4d.js";import"./serviceCapabilitiesUtils-18a2cf01.js";import"./AttachmentQuery-527f7d40.js";import"./popupUtils-2e46f095.js";import"./sublayerUtils-0f8d24ce.js";import"./jsonUtils-0607c004.js";import"./parser-527c5e80.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./PortalItem-051eae04.js";import"./assets-01239caf.js";import"./portalItemUtils-2695e0b3.js";import"./projection-319bc7cc.js";import"./ElevationInfo-91b8239c.js";const d=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=class extends C(A(J(M(N(P(D(B(w(T(k(L(I(W))))))))))))){constructor(...r){super(...r),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(r,e){return typeof r=="string"?{url:r,...e}:r}load(r){const e=h(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},r).catch(O).then(()=>this._fetchService(e))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=(e=this.parsedUrl)==null?void 0:e.path.toLowerCase();return r?this._getDefaultAttribution(this._getMapName(r)):null}readSpatialReference(r,e){return(r=r||e.tileInfo&&e.tileInfo.spatialReference)&&y.fromJSON(r)}writeSublayers(r,e,t,o){if(!this.loaded||!r)return;const n=r.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),p=[],m={writeSublayerStructure:!1,...o};n.forEach(l=>{const f=l.write({},m);p.push(f)}),p.some(l=>Object.keys(l).length>1)&&(e.layers=p)}get tileServers(){var r;return this._getDefaultTileServers((r=this.parsedUrl)==null?void 0:r.path)}castTileServers(r){return Array.isArray(r)?r.map(e=>g(e).path):null}fetchTile(r,e,t,o={}){const{signal:n}=o,p=this.getTileUrl(r,e,t),m={responseType:"image",signal:n,query:{...this.refreshParameters}};return c(p,m).then(l=>l.data)}async fetchImageBitmapTile(r,e,t,o={}){const{signal:n}=o,p=this.getTileUrl(r,e,t),m={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:l}=await c(p,m);return x(l,p)}getTileUrl(r,e,t){var m,l;const o=!this.tilemapCache&&this.supportsBlankTile,n=_({...(m=this.parsedUrl)==null?void 0:m.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),p=this.tileServers;return`${p&&p.length?p[e%p.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${r}/${e}/${t}${n?"?"+n:""}`}loadAll(){return b(this,r=>{r(this.allSublayers)})}_fetchService(r){return new Promise((e,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void e({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=q(this.parsedUrl.path);if(h(o)&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");c(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(e,t)}).then(e=>{let t=this.url;if(e.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=e.data,this.read(e.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!G(t))return this._fetchServerVersion(t,r).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(r,e){if(!E(r))return Promise.reject();const t=r.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return c(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(r){const e=r.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return e?e[2]:void 0}_getDefaultAttribution(r){if(r==null)return null;let e;r=r.toLowerCase();for(let t=0,o=d.length;t<o;t++)if(e=d[t],e.toLowerCase().includes(r))return S("//static.arcgis.com/attribution/"+e);return null}_getDefaultTileServers(r){if(r==null)return[];const e=r.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=r.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return e||t?[r,r.replace(e?/server\.arcgisonline/i:/services\.arcgisonline/i,e?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:y})],i.prototype,"spatialReference",void 0),s([R("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([U("sublayers",{layers:{type:[j]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([$("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(V)],i.prototype,"url",void 0),i=s([v("esri.layers.TileLayer")],i),i.prototype.fetchTile.__isDefault__=!0;const vt=i;export{vt as default};
