import{e as r,y as i,a as j}from"./JSONSupport-ed372989.js";import"./geometry-d89d4a34.js";import{k as L}from"./PopupTemplate-63dce4d3.js";import"./UniqueValueRenderer-b6a7d586.js";import{p as N,n as k}from"./jsonUtils-37cc07d7.js";import{O as H}from"./MultiOriginJSONSupport-97bf66dd.js";import"./ensureType-348c3d61.js";import{t as J,r as b}from"./typedArrayUtil-96f93e5b.js";import{i as Z,o as R}from"./typeUtils-2ccaf90d.js";import{b as z}from"./Layer-07a07202.js";import{a as I}from"./Error-d97df89f.js";import{m as U}from"./Loadable-c96deb83.js";import{N as V,F as O,v as $,x as W,k as K,T as X,S as Y,I as ee,j as te}from"./ogcFeatureUtils-a265e642.js";import{x as re}from"./FeatureSet-00b7d51e.js";import{f as x,a as oe}from"./Extent-fd3ac910.js";import{i as ie}from"./APIKeyMixin-b93c2049.js";import{n as se}from"./BlendLayer-5cec7349.js";import{o as pe}from"./CustomParametersMixin-01a04769.js";import{n as ne,p as ae}from"./FeatureReductionLayer-fd41123b.js";import{c as le,d as ue,m as me,a as de,p as ce,l as ye,f as fe}from"./OperationalLayer-a420b681.js";import{c as he}from"./OrderedLayer-9cb8835d.js";import{_ as ge}from"./PortalLayer-d54f6a39.js";import{p as ve}from"./RefreshableLayer-672ecb56.js";import{t as Se}from"./ScaleRangeLayer-24099455.js";import{a as xe}from"./TemporalLayer-c479c738.js";import{n as Ce}from"./FeatureType-b736019f.js";import{y as we}from"./Field-b17a677d.js";import{s as Fe}from"./fieldProperties-1fb52610.js";import{F as T,c as be}from"./fieldUtils-66be74eb.js";import{C as Re,i as Ie}from"./labelingInfo-f7d1c159.js";import{x as D}from"./Query-bf719160.js";import{p as Oe}from"./popupUtils-3d5141e6.js";import"./string-feb899cf.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-ac1bd36f.js";import"./Polyline-9d44200b.js";import"./Clonable-5318ec31.js";import"./Collection-d9d92883.js";import"./Evented-e2ee9722.js";import"./SimpleObservable-04055e8d.js";import"./cast-73cfc253.js";import"./enumeration-49e09bda.js";import"./number-205e28e0.js";import"./locale-30120714.js";import"./Identifiable-876da2a8.js";import"./symbols-946d4e11.js";import"./CIMSymbol-0fa077f5.js";import"./Color-9f46ece8.js";import"./colorUtils-639f4d25.js";import"./mathUtils-b3bee9e7.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-cc413a8c.js";import"./symbolLayerUtils3D-0c6ed99a.js";import"./aaBoundingBox-1eda6d1b.js";import"./request-7c0a9d4c.js";import"./preload-helper-f8378b50.js";import"./persistableUrlUtils-26091271.js";import"./collectionUtils-e98ed3f0.js";import"./Portal-172924b2.js";import"./PortalGroup-751b527f.js";import"./PortalUser-7f979a04.js";import"./LegendOptions-8200d5f5.js";import"./reactiveUtils-307e98f9.js";import"./diffUtils-ac6d6369.js";import"./colorRamps-fff34da2.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6f05f98d.js";import"./Graphic-f117754c.js";import"./jsonUtils-dd0891e0.js";import"./compilerUtils-8d4f8499.js";import"./lengthUtils-bc8879ed.js";import"./Promise-34cff6d6.js";import"./jsonUtils-7442f08f.js";import"./layerUtils-a0871894.js";import"./styleUtils-1d3bc535.js";import"./DictionaryLoader-0dadb1e0.js";import"./LRUCache-9c365b2a.js";import"./MemCache-7d4aa654.js";import"./deprecate-424c57c7.js";import"./heatmapUtils-16ee21b5.js";import"./vec4f64-aa64c7e9.js";import"./featureConversionUtils-00c47b2e.js";import"./aaBoundingRect-a7e9efee.js";import"./OptimizedFeature-7af17710.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geojson-90baeca4.js";import"./clientSideDefaults-dc1eccb0.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./FieldsIndex-7c963fe9.js";import"./fieldType-b21f2e7f.js";import"./parser-a11e786f.js";import"./mat4f32-60a2394b.js";import"./mat4-1ee69bd5.js";import"./TimeExtent-d2d7594c.js";import"./ElevationInfo-75e7bf35.js";import"./asyncUtils-f0fdc8c7.js";import"./PortalItem-a25335a3.js";import"./assets-2c955bed.js";import"./portalItemUtils-72345980.js";import"./projection-d7a5b449.js";import"./zscale-e06cee6f.js";import"./TimeReference-b6332926.js";import"./datetime-b6333958.js";import"./FeatureTemplate-1fd8fac4.js";import"./labelUtils-6965a8ca.js";import"./DataLayerSource-71059dc4.js";let m=class extends U{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>re.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>V(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??O,s=$(t);return J(s)?x.WGS84:new x({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[O],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=b(t)?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:y,hasZ:f,objectIdField:P,timeInfo:h,url:_}=e,E={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:Z.toJSON(y),hasZ:f??!1,objectIdField:P,timeInfo:h==null?void 0:h.toJSON()},d={apiKey:p,customParameters:l,signal:s},g=await W(_,d),[C,w]=await Promise.all([K(g,d),X(g,d)]);if(!this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new I("ogc-feature-layer:no-geojson-support","Server does not support geojson");const c=w.collections.find(u=>u.id===n);if(!c)throw new I("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Y(g,d):null,F=await ee(c,E,d),M=this._getMaxRecordCount(q),G=this._getCapabilities(F.hasZ,M),Q=this._getStorageSpatialReference(c).toJSON(),A=this._getSupportedSpatialReferences(c,w),B=new RegExp(`^${te}`,"i"),v={};for(const u of A){const S=$(u);b(S)&&(v[S]||(v[S]=u.replace(B,"")))}this.featureDefinition={capabilities:G,collection:c,layerDefinition:F,spatialReference:Q,supportedCrs:v}}};r([i()],m.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],m.prototype,"layer",void 0),r([i()],m.prototype,"type",void 0),m=r([j("esri.layers.graphics.sources.OGCFeatureSource")],m);const $e=Fe();let o=class extends ie(pe(ne(ae(se(he(xe(Se(le(ge(ve(H(z)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new m({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){T(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Oe(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(y=>{var f;return y.id==l&&(s=(f=y.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),T(this.renderer,this.fieldsIndex),be(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ue)],o.prototype,"elevationInfo",void 0),r([i({type:[we],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i($e.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:oe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Re],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(me)],o.prototype,"labelsVisible",void 0),r([i(de)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ce)],o.prototype,"popupEnabled",void 0),r([i({type:L,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:N,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:k,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(ye)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:x,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[Ce]})],o.prototype,"types",void 0),r([i(fe)],o.prototype,"url",void 0),o=r([j("esri.layers.OGCFeatureLayer")],o);const $r=o;export{$r as default};
