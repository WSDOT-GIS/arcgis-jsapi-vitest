import{e as a,y as g,a as d}from"./Accessor-815cb0cf.js";import{j as n}from"./Collection-912f4315.js";import{l as u}from"./CollectionFlattener-670e79b4.js";import{r as e,t as _}from"./typedArrayUtil-74bbfd45.js";import{h as w,l as c}from"./reactiveUtils-31da19f9.js";import"./ensureType-125d327f.js";import{b as f,h as y,O as k,g as M,f as v,a as I,D as V}from"./Stop-f9b641c4.js";import{f as G,u as F}from"./LayerView-8329f8a3.js";import{i as H}from"./GraphicContainer-dff5cfcc.js";import{a as C}from"./GraphicsView2D-7990bc02.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./string-75082bc6.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./Error-781981d1.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./Graphic-3183b8e9.js";import"./geometry-0d19f94b.js";import"./Extent-8fae2379.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./PopupTemplate-c559259f.js";import"./Clonable-6d5134c7.js";import"./fieldUtils-e6cf5e5f.js";import"./preload-helper-f8378b50.js";import"./enumeration-94b1319d.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./symbols-df54e69f.js";import"./CIMSymbol-e48b86be.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";import"./mathUtils-15f63a45.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./request-ae7029ea.js";import"./persistableUrlUtils-73be900a.js";import"./collectionUtils-5a99c1c0.js";import"./Portal-2a7c40a2.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-c84fcbac.js";import"./jsonUtils-15ca15d7.js";import"./Container-1fd7ba94.js";import"./mat3f32-6c416b1c.js";import"./EffectView-106fd8f9.js";import"./parser-527c5e80.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-f1890c15.js";import"./context-util-31041918.js";import"./MapView-85925dbb.js";import"./Cyclical-a38bc08c.js";import"./workers-8153041b.js";import"./Connection-59240e9d.js";import"./Queue-687500af.js";import"./assets-01239caf.js";import"./intl-b6f3ccd9.js";import"./messages-dc0c80a1.js";import"./projection-319bc7cc.js";import"./zscale-a617710a.js";import"./TileInfo-1aef4d7f.js";import"./aaBoundingRect-3cd21eb0.js";import"./TileKey-b87e0dc5.js";import"./jsxFactory-3315acca.js";import"./uuid-73213768.js";import"./HandleOwner-124247b4.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-6ef9e2f8.js";import"./AttachmentQuery-527f7d40.js";import"./layerUtils-7438cb6b.js";import"./Heading-0d44813a.js";import"./widget-f92fe188.js";import"./symbolUtils-17e1ef41.js";import"./LegendOptions-540a8245.js";import"./utils-e3b2b426.js";import"./asyncUtils-5c97747c.js";import"./jsonUtils-0607c004.js";import"./ItemCache-dc80b100.js";import"./MemCache-9d81d118.js";import"./utils-1aab1134.js";import"./jsonUtils-ee8d96d0.js";import"./UniqueValueRenderer-206098f5.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6b4a3e98.js";import"./compilerUtils-024563a4.js";import"./lengthUtils-40356f92.js";import"./jsonUtils-053e809e.js";import"./styleUtils-9f3a9a37.js";import"./DictionaryLoader-37853497.js";import"./LRUCache-425021b3.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./colorUtils-c0f43caf.js";import"./mat2d-68947564.js";import"./webStyleSymbolUtils-3aa191ea.js";import"./devEnvironmentUtils-5002a058.js";import"./DataLayerSource-3a7a94c9.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";import"./executeQueryJSON-a01adc7e.js";import"./utils-19aa96f8.js";import"./query-d7f993dc.js";import"./normalizeUtils-eda5eef5.js";import"./normalizeUtilsCommon-04cad10b.js";import"./utils-067ee6bc.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-9730bd74.js";import"./pbf-c0fe6550.js";import"./OptimizedFeature-6cca5f48.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-e2b48f65.js";import"./FeatureSet-736831f6.js";import"./Query-4c66990d.js";import"./TimeExtent-202e4138.js";import"./FullTextSearch-da95615f.js";import"./featureConversionUtils-55a32b06.js";import"./RelationshipQuery-9431dd85.js";import"./TopFeaturesQuery-bceb40dd.js";import"./FeatureLayer-58755fcf.js";import"./MultiOriginJSONSupport-6a5e69d5.js";import"./sql-af7b41f8.js";import"./FeatureLayerBase-4839e0f4.js";import"./HeightModelInfo-0c04472c.js";import"./arcgisLayerUrl-0e1d3d82.js";import"./commonProperties-64b016df.js";import"./ElevationInfo-91b8239c.js";import"./TimeReference-afe9f4e7.js";import"./datetime-b6333958.js";import"./serviceCapabilitiesUtils-18a2cf01.js";import"./Layer-974413c8.js";import"./editsZScale-884a3138.js";import"./APIKeyMixin-8bba595e.js";import"./ArcGISService-cdf8a9a9.js";import"./BlendLayer-f72967b1.js";import"./CustomParametersMixin-7c5495bd.js";import"./EditBusLayer-b9bbb936.js";import"./FeatureReductionLayer-1c633e04.js";import"./labelingInfo-a45c32d0.js";import"./labelUtils-75fd34dc.js";import"./defaultsJSON-b087dd4d.js";import"./OperationalLayer-80c22541.js";import"./OrderedLayer-0495accc.js";import"./PortalLayer-d601e363.js";import"./PortalItem-051eae04.js";import"./portalItemUtils-2695e0b3.js";import"./RefreshableLayer-ac9eee59.js";import"./ScaleRangeLayer-abd4cd2e.js";import"./TemporalLayer-4e484055.js";import"./FeatureTemplate-d52241a0.js";import"./FeatureType-f3879578.js";import"./fieldProperties-eab34f4c.js";import"./FieldsIndex-9f1d87a4.js";import"./versionUtils-47bcdca9.js";import"./styleUtils-023b7cfa.js";import"./popupUtils-2e46f095.js";import"./Scheduler-58e89fab.js";import"./GoTo-a612a338.js";import"./accessibleHandler-bfc19404.js";import"./vmEvent-d773b6c5.js";import"./Map-afd2e412.js";import"./Basemap-87d5fd9e.js";import"./loadAll-38268fb1.js";import"./writeUtils-8b292301.js";import"./basemapUtils-1ed0752b.js";import"./TablesMixin-363b96a0.js";import"./GraphicsCollection-af665c4a.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";import"./vec2-4c517306.js";import"./vec2f64-22afc56f.js";import"./mat3-53e5916e.js";import"./vec2f32-eaf29605.js";import"./TileStrategy-56172cce.js";import"./TileStore-53c9ad86.js";import"./TileKey-e007f54a.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./capabilities-c77778e7.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-05169f00.js";import"./FeatureContainer-51f61b6f.js";import"./AttributeStoreView-89b5e0d8.js";import"./TiledDisplayObject-a8c16acc.js";import"./visualVariablesUtils-c19b01f0.js";import"./color-e7189c96.js";import"./enums-4b2a86a0.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-87145551.js";import"./VertexArrayObject-315bde4b.js";import"./TileContainer-41317e18.js";import"./WGLContainer-302ed869.js";import"./ProgramTemplate-da7e5f1d.js";import"./MaterialKey-34911e37.js";import"./alignmentUtils-ae955d28.js";import"./utils-eea54cdd.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./cimAnalyzer-41da9b79.js";import"./fontUtils-dae2860f.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-158f275c.js";import"./floatRGBA-047cef41.js";import"./normalizeUtilsSync-f6be8e80.js";import"./projectionSupport-ea4e5e35.js";import"./json-48e3ea08.js";import"./Matcher-1c756c81.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-aa161483.js";import"./ExpandedCIM-71cc43f8.js";import"./schemaUtils-a41244bc.js";import"./createSymbolSchema-5985c686.js";import"./rendererUtils-1bc13370.js";import"./util-7544e8cf.js";import"./ComputedAttributeStorage-fa4e244d.js";import"./FeatureSetReader-f7e06f98.js";import"./ArcadeDate-3d8ef842.js";import"./executionError-fb3f283a.js";import"./arcadeTimeUtils-8973966e.js";import"./centroid-e285663a.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],m={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof f||t instanceof y||t instanceof k||t instanceof M||t instanceof v||t instanceof I||t instanceof V}function O(t){return n.isCollection(t)&&t.length&&l(t.getItemAt(0))}function A(t){return Array.isArray(t)&&t.length>0&&l(t[0])}let s=class extends G(F){constructor(){super(...arguments),this._graphics=new n,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>e(this.layer)&&!this.destroyed?[e(this.layer.routeInfo)?new n([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),w)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(i=>!!i.popupTemplate)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:A(t)?t.map(o=>this._getNetworkFeatureUid(o)):O(t)?t.map(o=>this._getNetworkFeatureUid(o)).toArray():[t.uid];const r=i.filter(e);return r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):b}async hitTest(t,i){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(e).map(p=>this._networkGraphicMap.get(p));if(!r.length)return null;const{layer:o}=this;return r.reverse().map(p=>({type:"route",layer:o,mapPoint:t,networkFeature:p}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),r=new H(t.featuresTilingScheme);this._graphicsView=new C({container:r,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return U.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;r===0?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const r=this._createGraphic(i);return _(r.symbol)?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(e));for(const i of t.added)this.addHandles([c(()=>i.geometry,(r,o)=>{this._updateGraphic(i,"geometry",r,o)}),c(()=>i.symbol,(r,o)=>{this._updateGraphic(i,"symbol",r,o)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(t,i,r,o){if(!this._networkFeatureMap.has(t)){const h=this._createGraphic(t);return this._networkFeatureMap.set(t,h),this._networkGraphicMap.set(h,t),void this._graphics.add(h)}const p=this._networkFeatureMap.get(t);p[i]=r,m.graphic=p,m.property=i,m.oldValue=o,m.newValue=r,this._graphicsView.graphicUpdateHandler(m)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};a([g()],s.prototype,"_graphics",void 0),a([g()],s.prototype,"_routeItems",null),s=a([d("esri.views.2d.layers.RouteLayerView2D")],s);const pp=s;export{pp as default};
