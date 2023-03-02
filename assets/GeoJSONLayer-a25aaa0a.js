import{_ as w}from"./preload-helper-101896b7.js";import{e as r,y as i,a as b}from"./Accessor-815cb0cf.js";import"./geometry-0d19f94b.js";import{k as J}from"./PopupTemplate-a7832b3e.js";import"./UniqueValueRenderer-aad2afaf.js";import{b as N,n as j}from"./jsonUtils-f26f043c.js";import{r as O,t as R}from"./typedArrayUtil-74bbfd45.js";import{O as P}from"./MultiOriginJSONSupport-6a5e69d5.js";import{x as q,w as T}from"./promiseUtils-28f2a985.js";import{L as y}from"./request-b4e08038.js";import"./ensureType-125d327f.js";import{o as I}from"./typeUtils-3bf84b36.js";import{b as k}from"./Layer-84815c0a.js";import{s as D,a as f}from"./Error-781981d1.js";import{a as L}from"./string-75082bc6.js";import{m as G}from"./Loadable-6776e4d9.js";import{u as C}from"./workers-a4649fa2.js";import{l as Q}from"./clientSideDefaults-ad9d2f09.js";import{x as Z}from"./FeatureSet-a2f9f6a7.js";import{w as x,f as F}from"./Extent-8fae2379.js";import{v as z}from"./Polyline-40b9e769.js";import{n as V}from"./BlendLayer-f72967b1.js";import{o as A}from"./CustomParametersMixin-7c5495bd.js";import{n as U,p as W}from"./FeatureReductionLayer-42958887.js";import{c as B}from"./OperationalLayer-fb5eac0c.js";import{c as M}from"./OrderedLayer-0495accc.js";import{_ as H}from"./PortalLayer-1e83b5c3.js";import{p as K}from"./RefreshableLayer-ac9eee59.js";import{t as X}from"./ScaleRangeLayer-abd4cd2e.js";import{a as Y}from"./TemporalLayer-c71a30dc.js";import{d as tt,v as et,m as rt,c as ot,u as it,p as st,l as nt,f as at}from"./commonProperties-6a723db4.js";import{p as pt}from"./FeatureTemplate-d52241a0.js";import{n as lt}from"./FeatureType-f3879578.js";import{y as ut}from"./Field-7770b57d.js";import{s as dt}from"./fieldProperties-d497e07e.js";import{F as g,c as mt}from"./fieldUtils-39eb4f5d.js";import{C as ht,i as ct}from"./labelingInfo-acb2aba2.js";import{x as h}from"./Query-4c66990d.js";import{p as yt}from"./popupUtils-9566e8f5.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./Clonable-6d5134c7.js";import"./Collection-912f4315.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./enumeration-94b1319d.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./symbols-d9f90967.js";import"./CIMSymbol-2f4be01b.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";import"./mathUtils-15f63a45.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./persistableUrlUtils-5532b98d.js";import"./collectionUtils-5a99c1c0.js";import"./Portal-0799d17c.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-092553f2.js";import"./LegendOptions-540a8245.js";import"./reactiveUtils-31da19f9.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-df772b72.js";import"./Graphic-f65f3c78.js";import"./jsonUtils-15ca15d7.js";import"./compilerUtils-024563a4.js";import"./lengthUtils-40356f92.js";import"./Promise-092442f7.js";import"./jsonUtils-40aff029.js";import"./layerUtils-0d596ed5.js";import"./styleUtils-2aef9fa3.js";import"./DictionaryLoader-ceec73f4.js";import"./LRUCache-425021b3.js";import"./MemCache-9d81d118.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./Connection-3178ea35.js";import"./Queue-687500af.js";import"./assets-fff829c9.js";import"./intl-b83d6b45.js";import"./messages-dc0c80a1.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-0607c004.js";import"./parser-527c5e80.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./TimeExtent-202e4138.js";import"./asyncUtils-5c97747c.js";import"./PortalItem-9c70e5ea.js";import"./portalItemUtils-0c95d3a7.js";import"./projection-4083e235.js";import"./zscale-a617710a.js";import"./TimeReference-afe9f4e7.js";import"./datetime-b6333958.js";import"./ElevationInfo-5862799c.js";import"./fieldType-e429d020.js";import"./FieldsIndex-8c7b5df9.js";import"./labelUtils-75fd34dc.js";import"./DataLayerSource-3a7a94c9.js";import"./FullTextSearch-da95615f.js";const E="esri.layers.graphics.sources.GeoJSONSource",v=D.getLogger(E);let d=class extends G{constructor(){super(...arguments),this.type="geojson",this.refresh=q(async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(o=>Z.fromJSON(o))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(o=>({count:o.count,extent:x.fromJSON(o.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,o=[],n=[],u=[];if(t.addFeatures)for(const a of t.addFeatures)o.push(this._serializeFeature(a));if(t.deleteFeatures)for(const a of t.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[e]!=null&&n.push(a.attributes[e]);if(t.updateFeatures)for(const a of t.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:u,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:l})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(l)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new f("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,o=this._geometryForSerialization(t);return o?{geometry:o.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return R(e)?null:e.type==="mesh"||e.type==="extent"?z.fromExtent(e.extent):e}async _startWorker(t){this._connection=await C("GeoJSONSourceWorker",{strategy:L("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:e,spatialReference:o,hasZ:n,geometryType:u,objectIdField:a,url:p,timeInfo:l,customParameters:_}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",$={url:p,customParameters:_,fields:e&&e.map(c=>c.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:l?l.toJSON():null,spatialReference:S?null:o&&o.toJSON()},m=await this._connection.invoke("load",$,{signal:t});for(const c of m.warnings)v.warn(c.message,{layer:this.layer,warning:c});m.featureErrors.length&&v.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=Q(this.sourceJSON.hasZ,!0)}};r([i()],d.prototype,"capabilities",void 0),r([i()],d.prototype,"type",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),d=r([b(E)],d);const ft=dt();let s=class extends M(A(U(W(V(Y(X(K(B(H(P(k))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;(t=this.source)==null||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(T).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),mt(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?y(this.url):null}set renderer(t){g(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=y(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const o=await w(()=>import("./editingSupport-910bbe67.js"),["assets/editingSupport-910bbe67.js","assets/Graphic-f65f3c78.js","assets/Accessor-815cb0cf.js","assets/typedArrayUtil-74bbfd45.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/string-75082bc6.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-28f2a985.js","assets/Error-781981d1.js","assets/ensureType-125d327f.js","assets/geometry-0d19f94b.js","assets/Extent-8fae2379.js","assets/JSONSupport-2b897629.js","assets/cast-f7d2a22f.js","assets/Polyline-40b9e769.js","assets/typeUtils-3bf84b36.js","assets/PopupTemplate-a7832b3e.js","assets/Clonable-6d5134c7.js","assets/Collection-912f4315.js","assets/Evented-3dfb26f2.js","assets/SimpleObservable-729c9019.js","assets/fieldUtils-39eb4f5d.js","assets/preload-helper-101896b7.js","assets/enumeration-94b1319d.js","assets/number-5e819186.js","assets/locale-30120714.js","assets/ActionToggle-dc9b6fc6.js","assets/Identifiable-f5397426.js","assets/symbols-d9f90967.js","assets/CIMSymbol-2f4be01b.js","assets/Color-5e799d63.js","assets/colorUtils-639f4d25.js","assets/mathUtils-15f63a45.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-107b33de.js","assets/symbolLayerUtils3D-15190f75.js","assets/aaBoundingBox-5e14079b.js","assets/request-b4e08038.js","assets/persistableUrlUtils-5532b98d.js","assets/collectionUtils-5a99c1c0.js","assets/Portal-0799d17c.js","assets/Loadable-6776e4d9.js","assets/Promise-092442f7.js","assets/PortalGroup-d3a43002.js","assets/PortalUser-092553f2.js","assets/jsonUtils-15ca15d7.js","assets/uuid-73213768.js","assets/normalizeUtils-53d1a4f1.js","assets/normalizeUtilsCommon-04cad10b.js","assets/utils-14667ccd.js","assets/utils-067ee6bc.js","assets/assetEditingSupport-2cebf928.js","assets/EditBusLayer-b9bbb936.js","assets/layerUtils-0d596ed5.js"]);await this.load();const n=await o.applyEdits(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(t,e){return super.on(t,e)}createPopupTemplate(t){return yt(this,t)}createQuery(){const t=new h,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return t.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,t}getFieldDomain(t,e){let o,n=!1;const u=e&&e.feature,a=u&&u.attributes,p=this.typeIdField&&a&&a[this.typeIdField];return p!=null&&this.types&&(n=this.types.some(l=>l.id==p&&(o=l.domains&&l.domains[t],o&&o.type==="inherited"&&(o=this._getLayerDomain(t)),!0))),n||o||(o=this._getLayerDomain(t)),o}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(h.from(t)||this.createQuery(),e)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(h.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(h.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(h.from(t)||this.createQuery(),e))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return O(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(o=>(o.name===t&&(e=o.domain),!!e)),e}};r([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i({type:Boolean})],s.prototype,"editingEnabled",void 0),r([i(tt)],s.prototype,"elevationInfo",void 0),r([i({type:[ut],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([i(ft.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([i({type:Boolean})],s.prototype,"hasZ",void 0),r([i(et)],s.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([i(rt)],s.prototype,"labelsVisible",void 0),r([i({type:[ht],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(ot)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([i(it)],s.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(st)],s.prototype,"popupEnabled",void 0),r([i({type:J,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:N,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:j}}}})],s.prototype,"renderer",null),r([i(nt)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:F})],s.prototype,"spatialReference",void 0),r([i({type:[pt]})],s.prototype,"templates",void 0),r([i()],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([i({type:[lt]})],s.prototype,"types",void 0),r([i(at)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const Ir=s;export{Ir as default};
