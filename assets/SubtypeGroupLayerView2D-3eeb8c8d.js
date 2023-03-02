import{e as l,a as d}from"./Accessor-815cb0cf.js";import{a as u}from"./string-75082bc6.js";import{r as y}from"./typedArrayUtil-74bbfd45.js";import{l as h,h as b}from"./reactiveUtils-31da19f9.js";import"./Error-781981d1.js";import"./ensureType-125d327f.js";import{y as c}from"./FeatureReductionLayer-42958887.js";import g from"./FeatureLayerView2D-23f405a8.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./JSONSupport-2b897629.js";import"./jsonUtils-0607c004.js";import"./parser-527c5e80.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./mathUtils-15f63a45.js";import"./geometry-0d19f94b.js";import"./Extent-8fae2379.js";import"./cast-f7d2a22f.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./TimeExtent-202e4138.js";import"./Query-4c66990d.js";import"./enumeration-94b1319d.js";import"./jsonUtils-15ca15d7.js";import"./DataLayerSource-3a7a94c9.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";import"./FullTextSearch-da95615f.js";import"./Clonable-6d5134c7.js";import"./PopupTemplate-a7832b3e.js";import"./Collection-912f4315.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./fieldUtils-39eb4f5d.js";import"./preload-helper-101896b7.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./UniqueValueRenderer-aad2afaf.js";import"./symbols-d9f90967.js";import"./CIMSymbol-2f4be01b.js";import"./Color-5e799d63.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./request-b4e08038.js";import"./persistableUrlUtils-5532b98d.js";import"./collectionUtils-5a99c1c0.js";import"./Portal-0799d17c.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-092553f2.js";import"./LegendOptions-540a8245.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-df772b72.js";import"./Graphic-f65f3c78.js";import"./compilerUtils-024563a4.js";import"./lengthUtils-40356f92.js";import"./jsonUtils-40aff029.js";import"./layerUtils-0d596ed5.js";import"./styleUtils-2aef9fa3.js";import"./jsonUtils-f26f043c.js";import"./DictionaryLoader-ceec73f4.js";import"./LRUCache-425021b3.js";import"./MemCache-9d81d118.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./commonProperties-6a723db4.js";import"./ElevationInfo-5862799c.js";import"./labelingInfo-acb2aba2.js";import"./labelUtils-75fd34dc.js";import"./defaultsJSON-b087dd4d.js";import"./EffectView-106fd8f9.js";import"./FeatureSet-a2f9f6a7.js";import"./definitions-19bfb61c.js";import"./LayerView-362ea4bc.js";import"./Container-1fd7ba94.js";import"./mat3f32-6c416b1c.js";import"./enums-64ab819c.js";import"./Texture-f1890c15.js";import"./context-util-31041918.js";import"./MapView-42751d27.js";import"./Cyclical-a38bc08c.js";import"./CollectionFlattener-670e79b4.js";import"./workers-a4649fa2.js";import"./Connection-3178ea35.js";import"./Queue-687500af.js";import"./assets-fff829c9.js";import"./intl-b83d6b45.js";import"./messages-dc0c80a1.js";import"./projection-4083e235.js";import"./zscale-a617710a.js";import"./TileInfo-1aef4d7f.js";import"./aaBoundingRect-3cd21eb0.js";import"./TileKey-b87e0dc5.js";import"./jsxFactory-2cf3af56.js";import"./uuid-73213768.js";import"./HandleOwner-124247b4.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-6ef9e2f8.js";import"./AttachmentQuery-527f7d40.js";import"./Heading-ffc10d03.js";import"./widget-dbfbe21d.js";import"./symbolUtils-1d85d6d1.js";import"./utils-627d2e72.js";import"./asyncUtils-5c97747c.js";import"./ItemCache-dc80b100.js";import"./utils-709f2b59.js";import"./colorUtils-c0f43caf.js";import"./mat2d-68947564.js";import"./webStyleSymbolUtils-1ef26566.js";import"./devEnvironmentUtils-5002a058.js";import"./executeQueryJSON-b8916532.js";import"./utils-14667ccd.js";import"./query-562d04e7.js";import"./normalizeUtils-53d1a4f1.js";import"./normalizeUtilsCommon-04cad10b.js";import"./utils-067ee6bc.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-9730bd74.js";import"./pbf-c0fe6550.js";import"./OptimizedFeature-6cca5f48.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-e2b48f65.js";import"./featureConversionUtils-55a32b06.js";import"./RelationshipQuery-9431dd85.js";import"./TopFeaturesQuery-bceb40dd.js";import"./FeatureLayer-b6bf0469.js";import"./MultiOriginJSONSupport-6a5e69d5.js";import"./sql-596ae790.js";import"./FeatureLayerBase-139f11ce.js";import"./HeightModelInfo-0c04472c.js";import"./arcgisLayerUrl-90607db0.js";import"./TimeReference-afe9f4e7.js";import"./datetime-b6333958.js";import"./serviceCapabilitiesUtils-35f1791d.js";import"./Layer-84815c0a.js";import"./editsZScale-884a3138.js";import"./APIKeyMixin-8bba595e.js";import"./ArcGISService-e14b4987.js";import"./BlendLayer-f72967b1.js";import"./CustomParametersMixin-7c5495bd.js";import"./EditBusLayer-b9bbb936.js";import"./OperationalLayer-fb5eac0c.js";import"./OrderedLayer-0495accc.js";import"./PortalLayer-1e83b5c3.js";import"./PortalItem-9c70e5ea.js";import"./portalItemUtils-0c95d3a7.js";import"./RefreshableLayer-ac9eee59.js";import"./ScaleRangeLayer-abd4cd2e.js";import"./TemporalLayer-c71a30dc.js";import"./FeatureTemplate-d52241a0.js";import"./FeatureType-f3879578.js";import"./fieldProperties-d497e07e.js";import"./FieldsIndex-8c7b5df9.js";import"./versionUtils-b0c51e6a.js";import"./styleUtils-023b7cfa.js";import"./popupUtils-9566e8f5.js";import"./Scheduler-58e89fab.js";import"./GoTo-a612a338.js";import"./accessibleHandler-46d8c8f2.js";import"./vmEvent-d773b6c5.js";import"./Map-d836d0d3.js";import"./Basemap-6b9a90ce.js";import"./loadAll-38268fb1.js";import"./writeUtils-c93dd255.js";import"./basemapUtils-5f3dd743.js";import"./TablesMixin-dc4b60a2.js";import"./GraphicsCollection-7edd34a0.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";import"./vec2-4c517306.js";import"./vec2f64-22afc56f.js";import"./mat3-53e5916e.js";import"./vec2f32-eaf29605.js";import"./TileStrategy-56172cce.js";import"./TileStore-53c9ad86.js";import"./TileKey-e007f54a.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./capabilities-c77778e7.js";import"./schemaUtils-e3505080.js";import"./enums-b1d611e3.js";import"./color-e7189c96.js";import"./enums-4b2a86a0.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./utils-eea54cdd.js";import"./MaterialKey-34911e37.js";import"./alignmentUtils-ae955d28.js";import"./visualVariablesUtils-87145551.js";import"./createSymbolSchema-5985c686.js";import"./cimAnalyzer-e9209d50.js";import"./fontUtils-dae2860f.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-158f275c.js";import"./floatRGBA-047cef41.js";import"./ExpandedCIM-71cc43f8.js";import"./rendererUtils-1bc13370.js";import"./util-7544e8cf.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-31931abe.js";import"./RefreshableLayerView-fc6330e9.js";function f(r,i){return!r.visible||r.minScale!==0&&i>r.minScale||r.maxScale!==0&&i<r.maxScale}let e=class extends g{initialize(){this.addHandles([h(()=>this.view.scale,()=>this._update(),b)],"constructor")}isUpdating(){var n;const r=this.layer.sublayers.some(a=>a.renderer!=null),i=this._commandsQueue.updating,p=this._updatingRequiredFieldsPromise!=null,o=!this._proxy||!this._proxy.isReady,t=this._pipelineIsUpdating,m=this.tileRenderer==null||((n=this.tileRenderer)==null?void 0:n.updating),s=r&&(i||p||o||t||m);return u("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${s}
  -> hasRenderer ${r}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${p}
  -> updatingProxy ${o}
  -> updatingPipeline ${t}
  -> updatingTileRenderer ${m}
`),s}_injectOverrides(r){let i=super._injectOverrides(r);const p=this.view.scale,o=this.layer.sublayers.filter(m=>f(m,p)).map(m=>m.subtypeCode);if(!o.length)return i;i=y(i)?i:new c().toJSON();const t=`NOT ${this.layer.subtypeField} IN (${o.join(",")})`;return i.where=i.where?`(${i.where}) AND (${t})`:t,i}_setLayersForFeature(r){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),p=r.attributes[i.name],o=this.layer.sublayers.find(t=>t.subtypeCode===p);r.layer=r.sourceLayer=o}_createSchemaConfig(){const r={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(t=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}))},i=this.layer.sublayers.map(t=>t.subtypeCode).join(","),p=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let o=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return o+=p,{...super._createSchemaConfig(),...r,definitionExpression:o}}};e=l([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const $o=e;export{$o as default};
