import{e as f,a as w}from"./JSONSupport-ed372989.js";import{g as y}from"./Graphic-f117754c.js";import{j as _}from"./Collection-d9d92883.js";import{r as s,t as V}from"./typedArrayUtil-96f93e5b.js";import{l as h,h as a,a as v}from"./reactiveUtils-307e98f9.js";import"./Error-d97df89f.js";import"./ensureType-348c3d61.js";import"./string-feb899cf.js";import{h as C}from"./Container-b72af0ce.js";import{r as H}from"./GroupContainer-a26a6947.js";import{f as b,u as T}from"./LayerView-fefba7b3.js";import{i as c}from"./GraphicContainer-c91358c0.js";import{a as g}from"./GraphicsView2D-b31c1259.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-ac1bd36f.js";import"./geometry-d89d4a34.js";import"./Extent-fd3ac910.js";import"./cast-73cfc253.js";import"./Polyline-9d44200b.js";import"./typeUtils-2ccaf90d.js";import"./PopupTemplate-63dce4d3.js";import"./Clonable-5318ec31.js";import"./fieldUtils-66be74eb.js";import"./preload-helper-f8378b50.js";import"./enumeration-49e09bda.js";import"./number-205e28e0.js";import"./locale-30120714.js";import"./Identifiable-876da2a8.js";import"./symbols-946d4e11.js";import"./CIMSymbol-0fa077f5.js";import"./Color-9f46ece8.js";import"./colorUtils-639f4d25.js";import"./mathUtils-b3bee9e7.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-cc413a8c.js";import"./symbolLayerUtils3D-0c6ed99a.js";import"./aaBoundingBox-1eda6d1b.js";import"./request-7c0a9d4c.js";import"./persistableUrlUtils-26091271.js";import"./collectionUtils-e98ed3f0.js";import"./Portal-172924b2.js";import"./Loadable-c96deb83.js";import"./Promise-34cff6d6.js";import"./PortalGroup-751b527f.js";import"./PortalUser-7f979a04.js";import"./jsonUtils-dd0891e0.js";import"./Evented-e2ee9722.js";import"./SimpleObservable-04055e8d.js";import"./mat3f32-6c416b1c.js";import"./EffectView-7a98f2c6.js";import"./parser-a11e786f.js";import"./mat4f32-60a2394b.js";import"./mat4-1ee69bd5.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-8f8edc49.js";import"./context-util-09fcc133.js";import"./WGLContainer-cd626f28.js";import"./VertexArrayObject-d5986ce6.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-3bbef98f.js";import"./enums-4b2a86a0.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./ProgramTemplate-802e89ed.js";import"./MaterialKey-6d0e47b2.js";import"./alignmentUtils-ae955d28.js";import"./utils-f79d880b.js";import"./heatmapUtils-16ee21b5.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-7d58136b.js";import"./vec2f32-eaf29605.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec2-9030ffc5.js";import"./vec2f64-22afc56f.js";import"./featureConversionUtils-00c47b2e.js";import"./aaBoundingRect-a7e9efee.js";import"./OptimizedFeature-7af17710.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./index-738baf21.js";import"./Basemap-1b908f31.js";import"./deprecate-424c57c7.js";import"./loadAll-f0d5998c.js";import"./asyncUtils-f0fdc8c7.js";import"./PortalItem-a25335a3.js";import"./assets-2c955bed.js";import"./messages-226fbb40.js";import"./writeUtils-5c3c75bd.js";import"./layerUtils-a0871894.js";import"./compilerUtils-8d4f8499.js";import"./CollectionFlattener-52a0c7e4.js";import"./TablesMixin-1e04401c.js";import"./Layer-07a07202.js";import"./Cyclical-0205ad3e.js";import"./workers-4f8dfa2f.js";import"./Connection-5e453cc1.js";import"./Queue-c92bc561.js";import"./intl-7c488bb0.js";import"./projection-d7a5b449.js";import"./zscale-e06cee6f.js";import"./TileInfo-e107254e.js";import"./widget-945f9e61.js";import"./uuid-73213768.js";import"./HandleOwner-4c8d824c.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-9750c730.js";import"./AttachmentQuery-c89a8ac2.js";import"./LegendOptions-8200d5f5.js";import"./utils-e0744d8b.js";import"./BlendLayer-5cec7349.js";import"./ItemCache-d06df2a7.js";import"./MemCache-7d4aa654.js";import"./utils-1aab1134.js";import"./jsonUtils-37cc07d7.js";import"./UniqueValueRenderer-b6a7d586.js";import"./diffUtils-ac6d6369.js";import"./colorRamps-fff34da2.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6f05f98d.js";import"./lengthUtils-bc8879ed.js";import"./jsonUtils-7442f08f.js";import"./styleUtils-1d3bc535.js";import"./DictionaryLoader-0dadb1e0.js";import"./LRUCache-9c365b2a.js";import"./DataLayerSource-71059dc4.js";import"./Field-b17a677d.js";import"./fieldType-b21f2e7f.js";import"./executeForIds-0c62bbcf.js";import"./utils-ada6b2ec.js";import"./query-eac603fe.js";import"./normalizeUtils-9dc1c489.js";import"./normalizeUtilsCommon-155f1aa2.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-bad736cf.js";import"./pbf-3634de4f.js";import"./queryZScale-a0b71b11.js";import"./FeatureSet-00b7d51e.js";import"./Query-bf719160.js";import"./TimeExtent-d2d7594c.js";import"./RelationshipQuery-a13e27d1.js";import"./TopFeaturesQuery-5bb7c994.js";import"./FeatureLayer-42e1678e.js";import"./MultiOriginJSONSupport-97bf66dd.js";import"./serviceCapabilitiesUtils-02cebe9b.js";import"./arcgisLayerUrl-9d6ab56c.js";import"./FeatureLayerBase-de1a166f.js";import"./HeightModelInfo-bad6650e.js";import"./OperationalLayer-a420b681.js";import"./ElevationInfo-75e7bf35.js";import"./TimeReference-b6332926.js";import"./datetime-b6333958.js";import"./editsZScale-b954eebc.js";import"./APIKeyMixin-b93c2049.js";import"./ArcGISService-cca20289.js";import"./CustomParametersMixin-01a04769.js";import"./EditBusLayer-984da402.js";import"./FeatureReductionLayer-fd41123b.js";import"./labelingInfo-f7d1c159.js";import"./labelUtils-6965a8ca.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-9cb8835d.js";import"./PortalLayer-d54f6a39.js";import"./portalItemUtils-72345980.js";import"./RefreshableLayer-672ecb56.js";import"./ScaleRangeLayer-24099455.js";import"./TemporalLayer-c479c738.js";import"./FeatureTemplate-1fd8fac4.js";import"./FeatureType-b736019f.js";import"./fieldProperties-1fb52610.js";import"./FieldsIndex-7c963fe9.js";import"./versionUtils-aabb6832.js";import"./styleUtils-f45b991d.js";import"./popupUtils-3d5141e6.js";import"./colorUtils-c0f43caf.js";import"./mat2d-94b8f776.js";import"./webStyleSymbolUtils-54e19231.js";import"./devEnvironmentUtils-5002a058.js";import"./Scheduler-72fecd6f.js";import"./GraphicsCollection-89010fd9.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";import"./mat3-d3027213.js";import"./TileStrategy-0607ccca.js";import"./TileStore-56391591.js";import"./TileKey-555f347f.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./capabilities-d3148205.js";import"./Util-a12911ae.js";import"./MapImageLayer-030c7912.js";import"./scaleUtils-2aca77b2.js";import"./SublayersOwner-3d3675ca.js";import"./Version-bbcb090a.js";import"./QueryTask-809f5bb4.js";import"./imageBitmapUtils-ce029f55.js";import"./pixelRangeUtils-03719dd8.js";import"./commonProperties-da958896.js";import"./BaseGraphicContainer-489a5637.js";import"./FeatureContainer-b1d9c447.js";import"./AttributeStoreView-ba467075.js";import"./TiledDisplayObject-fd49a9f6.js";import"./visualVariablesUtils-7effa371.js";import"./visualVariablesUtils-9549b6c3.js";import"./TileContainer-5d892b13.js";import"./vec3f32-ad1dc57f.js";import"./cimAnalyzer-fade93fe.js";import"./fontUtils-95b845d3.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-fd85d1bd.js";import"./floatRGBA-bff1e6d8.js";import"./normalizeUtilsSync-6eaa2318.js";import"./projectionSupport-5e649f05.js";import"./json-48e3ea08.js";import"./Matcher-dde16e7c.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-1305d028.js";import"./ExpandedCIM-04b9ce70.js";import"./schemaUtils-5efbd12a.js";import"./createSymbolSchema-07e2efee.js";import"./rendererUtils-8077781c.js";import"./util-7f828970.js";import"./ComputedAttributeStorage-1b2563c0.js";import"./FeatureSetReader-f1a46ee8.js";import"./ArcadeDate-3d8ef842.js";import"./executionError-fb3f283a.js";import"./arcadeTimeUtils-37d6c274.js";import"./centroid-47d0a8f7.js";const d="sublayers",n="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends b(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new H}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(r=>!!r.popupTemplate)).flat()}*graphicsViews(){s(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():s(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),r=>{const o=r.hitTest(i);if(s(this._graphicsViewsFeatureCollectionMap)){const m=this._graphicsViewsFeatureCollectionMap.get(r);for(const p of o)!p.popupTemplate&&m.popupTemplate&&(p.popupTemplate=m.popupTemplate),p.sourceLayer=p.layer=this.layer}return o}).flat().map(r=>({type:"graphic",graphic:r,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof y?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(o=>o&&o.uid):_.isCollection(i)&&(t=i.map(o=>o&&o.uid).toArray());const r=t==null?void 0:t.filter(s);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>{this._removeHighlight(r)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),r=this.layer.featureCollections;if(s(r)&&r.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const o of r){const m=new c(this.view.featuresTilingScheme),p=new g({view:i,graphics:o.source,renderer:o.renderer,requestUpdateCallback:t,container:m});this._graphicsViewsFeatureCollectionMap.set(p,o),this.container.addChild(p.container),this.addHandles([h(()=>o.visible,e=>p.container.visible=e,a),h(()=>p.updating,()=>this.notifyChange("updating"),a)],n)}this._updateHighlight()}else s(this.layer.sublayers)&&this.addHandles(v(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),V(this.layer.sublayers))return;const i=[],t=this.view,r=()=>this.requestUpdate();for(const o of this.layer.sublayers){const m=new C,p=new c(this.view.featuresTilingScheme);p.fadeTransitionEnabled=!0;const e=new g({view:t,graphics:o.graphics,requestUpdateCallback:r,container:p});this.addHandles([o.on("graphic-update",e.graphicUpdateHandler),h(()=>o.visible,u=>e.container.visible=u,a),h(()=>e.updating,()=>this.notifyChange("updating"),a)],n),m.addChild(e.container),this.container.addChild(m),i.push(e)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=f([w("esri.views.2d.layers.MapNotesLayerView2D")],l);const No=l;export{No as default};
