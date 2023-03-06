import{e as x,y as D,a as Z}from"./Accessor-815cb0cf.js";import"./geometry-0d19f94b.js";import"./Graphic-3183b8e9.js";import"./UniqueValueRenderer-206098f5.js";import"./jsonUtils-ee8d96d0.js";import"./symbols-df54e69f.js";import{j as ee}from"./Collection-912f4315.js";import"./string-75082bc6.js";import{s as N,a as te}from"./Error-781981d1.js";import{r as re}from"./ensureType-125d327f.js";import{r as b,I as ie,t as _}from"./typedArrayUtil-74bbfd45.js";import{r as oe,j as se}from"./promiseUtils-28f2a985.js";import{l as H,h as P,f as me,a as W}from"./reactiveUtils-31da19f9.js";import{u as pe}from"./aaBoundingRect-3cd21eb0.js";import{d as ae,H as ne,w as le,J as he}from"./Extent-8fae2379.js";import{j as ce,u as z}from"./perspectiveUtils-d691b87b.js";import"./watch-c7facfb0.js";import"./request-ae7029ea.js";import"./Rasterizer-a9a4e1b4.js";import"./EffectView-106fd8f9.js";import{r as de}from"./Container-1fd7ba94.js";import"./BufferPool-1f98d681.js";import{T as ue}from"./enums-b1d611e3.js";import{c as fe,w as ye}from"./WGLContainer-302ed869.js";import"./color-e7189c96.js";import{P as _e,G as ve,L as ge,D as we,F as B}from"./enums-64ab819c.js";import{E as Re}from"./Texture-f1890c15.js";import{r as Q}from"./context-util-31041918.js";import"./ProgramTemplate-da7e5f1d.js";import"./MaterialKey-34911e37.js";import"./utils-eea54cdd.js";import{E as k,f as Ee}from"./VertexArrayObject-315bde4b.js";import{o as T}from"./mathUtils-15f63a45.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import{t as Me}from"./vec2f32-eaf29605.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-186c1fcd.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-047cef41.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-7990bc02.js";import"./AttributeStoreView-89b5e0d8.js";import"./earcut-61f7b102.js";import"./featureConversionUtils-55a32b06.js";import"./lengthUtils-40356f92.js";import{r as xe}from"./vec3f32-ad1dc57f.js";import{U as Te}from"./normalizeUtils-eda5eef5.js";import"./asyncUtils-5c97747c.js";import{y as be,r as Ce}from"./TileStrategy-56172cce.js";import"./TileStore-53c9ad86.js";import"./TileKey-e007f54a.js";import{e as Se}from"./mat3f64-221ce671.js";import{r as $e}from"./vec2-4c517306.js";import{n as Ve}from"./vec2f64-22afc56f.js";import{c as Ge}from"./screenUtils-7afeb41c.js";import{r as Ae,i as qe,M as De,f as Pe,h as Ie}from"./mat3-53e5916e.js";import{e as je}from"./mat3f32-6c416b1c.js";import{d as Ue}from"./MapView-85925dbb.js";import{f as Le,u as Oe}from"./LayerView-8329f8a3.js";import"./ArrayPool-ae2ef0ab.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./cast-f7d2a22f.js";import"./PopupTemplate-c559259f.js";import"./Clonable-6d5134c7.js";import"./JSONSupport-2b897629.js";import"./fieldUtils-e6cf5e5f.js";import"./preload-helper-f8378b50.js";import"./enumeration-94b1319d.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./jsonUtils-15ca15d7.js";import"./LegendOptions-540a8245.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";import"./diffUtils-0b07ec68.js";import"./Portal-2a7c40a2.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-c84fcbac.js";import"./nextTick-3ee5a785.js";import"./colorRamps-f3b121e7.js";import"./opacityUtils-107b33de.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6b4a3e98.js";import"./compilerUtils-024563a4.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./CIMSymbol-e48b86be.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./persistableUrlUtils-73be900a.js";import"./collectionUtils-5a99c1c0.js";import"./jsonUtils-053e809e.js";import"./layerUtils-7438cb6b.js";import"./styleUtils-9f3a9a37.js";import"./DictionaryLoader-37853497.js";import"./LRUCache-425021b3.js";import"./MemCache-9d81d118.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./projection-319bc7cc.js";import"./mat4-a8da3f27.js";import"./assets-01239caf.js";import"./zscale-a617710a.js";import"./normalizeUtilsSync-f6be8e80.js";import"./normalizeUtilsCommon-04cad10b.js";import"./_commonjsHelpers-2f3e7994.js";import"./cimAnalyzer-41da9b79.js";import"./fontUtils-dae2860f.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-4b2a86a0.js";import"./utils-1aab1134.js";import"./alignmentUtils-ae955d28.js";import"./definitions-19bfb61c.js";import"./mat2d-68947564.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-158f275c.js";import"./rasterizingUtils-263a194f.js";import"./parser-527c5e80.js";import"./mat4f32-60a2394b.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./OptimizedFeature-6cca5f48.js";import"./pbf-c0fe6550.js";import"./imageutils-9a8bdcbe.js";import"./Matcher-1c756c81.js";import"./visualVariablesUtils-c19b01f0.js";import"./visualVariablesUtils-87145551.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-aa161483.js";import"./defaultsJSON-b087dd4d.js";import"./ExpandedCIM-71cc43f8.js";import"./devEnvironmentUtils-5002a058.js";import"./CircularArray-27e292bb.js";import"./HandleOwner-124247b4.js";import"./FeatureSetReader-f7e06f98.js";import"./ArcadeDate-3d8ef842.js";import"./executionError-fb3f283a.js";import"./datetime-b6333958.js";import"./arcadeTimeUtils-8973966e.js";import"./FieldsIndex-9f1d87a4.js";import"./TimeReference-afe9f4e7.js";import"./centroid-e285663a.js";import"./basicInterfaces-b7051eb1.js";import"./projectionSupport-ea4e5e35.js";import"./json-48e3ea08.js";import"./labelingInfo-a45c32d0.js";import"./labelUtils-75fd34dc.js";import"./schemaUtils-a41244bc.js";import"./sql-af7b41f8.js";import"./createSymbolSchema-5985c686.js";import"./rendererUtils-1bc13370.js";import"./capabilities-c77778e7.js";import"./FeatureReductionLayer-1c633e04.js";import"./jsonUtils-0607c004.js";import"./TimeExtent-202e4138.js";import"./Query-4c66990d.js";import"./DataLayerSource-3a7a94c9.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";import"./FullTextSearch-da95615f.js";import"./commonProperties-64b016df.js";import"./ElevationInfo-91b8239c.js";import"./util-7544e8cf.js";import"./ComputedAttributeStorage-fa4e244d.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./TiledDisplayObject-a8c16acc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./utils-19aa96f8.js";import"./utils-067ee6bc.js";import"./Queue-687500af.js";import"./Cyclical-a38bc08c.js";import"./CollectionFlattener-670e79b4.js";import"./workers-8153041b.js";import"./Connection-59240e9d.js";import"./intl-b6f3ccd9.js";import"./messages-dc0c80a1.js";import"./TileInfo-1aef4d7f.js";import"./TileKey-b87e0dc5.js";import"./jsxFactory-3315acca.js";import"./uuid-73213768.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-6ef9e2f8.js";import"./AttachmentQuery-527f7d40.js";import"./Heading-0d44813a.js";import"./widget-f92fe188.js";import"./symbolUtils-17e1ef41.js";import"./utils-e3b2b426.js";import"./ItemCache-dc80b100.js";import"./colorUtils-c0f43caf.js";import"./webStyleSymbolUtils-3aa191ea.js";import"./executeQueryJSON-a01adc7e.js";import"./query-d7f993dc.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-9730bd74.js";import"./queryZScale-e2b48f65.js";import"./FeatureSet-736831f6.js";import"./RelationshipQuery-9431dd85.js";import"./TopFeaturesQuery-bceb40dd.js";import"./FeatureLayer-58755fcf.js";import"./MultiOriginJSONSupport-6a5e69d5.js";import"./FeatureLayerBase-4839e0f4.js";import"./HeightModelInfo-0c04472c.js";import"./arcgisLayerUrl-0e1d3d82.js";import"./serviceCapabilitiesUtils-18a2cf01.js";import"./Layer-974413c8.js";import"./editsZScale-884a3138.js";import"./APIKeyMixin-8bba595e.js";import"./ArcGISService-cdf8a9a9.js";import"./BlendLayer-f72967b1.js";import"./CustomParametersMixin-7c5495bd.js";import"./EditBusLayer-b9bbb936.js";import"./OperationalLayer-80c22541.js";import"./OrderedLayer-0495accc.js";import"./PortalLayer-d601e363.js";import"./PortalItem-051eae04.js";import"./portalItemUtils-2695e0b3.js";import"./RefreshableLayer-ac9eee59.js";import"./ScaleRangeLayer-abd4cd2e.js";import"./TemporalLayer-4e484055.js";import"./FeatureTemplate-d52241a0.js";import"./FeatureType-f3879578.js";import"./fieldProperties-eab34f4c.js";import"./versionUtils-47bcdca9.js";import"./styleUtils-023b7cfa.js";import"./popupUtils-2e46f095.js";import"./Scheduler-58e89fab.js";import"./GoTo-a612a338.js";import"./accessibleHandler-bfc19404.js";import"./vmEvent-d773b6c5.js";import"./Map-afd2e412.js";import"./Basemap-87d5fd9e.js";import"./loadAll-38268fb1.js";import"./writeUtils-8b292301.js";import"./basemapUtils-1ed0752b.js";import"./TablesMixin-363b96a0.js";import"./GraphicsCollection-af665c4a.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";const v=Se();class He extends de{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Ve(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(H(()=>this.elementView.element.opacity,t=>this.opacity=t,P),H(()=>[this.elementView.coords],()=>{this.requestRender()},P),me(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&b(t.content)&&this._handles.push(oe(t.content,"play",()=>this.requestRender()))},P)),e.element.load().catch(t=>{N.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new te("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=ie(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(b(i)){const o=i instanceof HTMLImageElement,s=i instanceof HTMLVideoElement,p=o?i.naturalWidth:s?i.videoWidth:i.width,m=o?i.naturalHeight:s?i.videoHeight:i.height;this._updatePerspectiveTransform(p,m),this.texture?s&&!i.paused&&(this.texture.setData(i),this.requestRender(),(t.type===Q.WEBGL2||T(p)&&T(m))&&this.texture.generateMipmap()):(this.texture=new Re(t,{pixelFormat:_e.RGBA,dataType:ve.UNSIGNED_BYTE,samplingMode:ge.LINEAR,wrapMode:we.CLAMP_TO_EDGE,width:p,height:m,preMultiplyAlpha:!0},i),(t.type===Q.WEBGL2||T(p)&&T(m))&&this.texture.generateMipmap(),s&&!i.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(_(i))return;const[o,s,p,m]=i.rings[0],c=this._vertices,{x:a,y:n}=e,d=t!==0;d?c.set([s[0]-a,s[1]-n,o[0]-a,o[1]-n,p[0]-a,p[1]-n,m[0]-a,m[1]-n,m[0]-a,m[1]-n,s[0]+t-a,s[1]-n,s[0]+t-a,s[1]-n,o[0]+t-a,o[1]-n,p[0]+t-a,p[1]-n,m[0]+t-a,m[1]-n]):c.set([s[0]-a,s[1]-n,o[0]-a,o[1]-n,p[0]-a,p[1]-n,m[0]-a,m[1]-n]),this.isWrapAround=d}getVAO(e,t,i){if(_(this.elementView.coords))return null;const o=this._vertices;if(this._vao)this._geometryVbo.setData(o);else{this._geometryVbo=k.createVertex(e,B.DYNAMIC_DRAW,o);const s=k.createVertex(e,B.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ee(e,i,t,{geometry:this._geometryVbo,tex:s})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;ce(v,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),$e(this.perspectiveTransform,v[6]/v[8]*e,v[7]/v[8]*t)}}class We extends fe{constructor(){super(...arguments),this._localOrigin=Ge(0,0),this._viewStateId=-1,this._dvsMat3=je(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[ye.overlay],target:()=>this.children,drawPhase:ue.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:o,pixelRatio:s,resolution:p,rotation:m,viewpoint:c,displayMat3:a}=t;if(this._viewStateId===i)return;const n=Math.PI/180*m,d=s*o[0],f=s*o[1],{x:C,y:w}=c.targetGeometry,S=Te(C,t.spatialReference);this._localOrigin.x=S,this._localOrigin.y=w;const $=p*d,R=p*f,l=Ae(this._dvsMat3);qe(l,l,a),De(l,l,Me(d/2,f/2)),Pe(l,l,xe(d/$,-f/R,1)),Ie(l,l,-n),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:o,spatialReference:s,worldScreenWidth:p,size:m,viewpoint:c}=i,a=this._localOrigin;let n=0;const d=ae(s);if(d&&s.isWrappable){const f=m[0],C=m[1],w=180/Math.PI*o,S=Math.abs(Math.cos(w)),$=Math.abs(Math.sin(w)),R=Math.round(f*S+C*$),[l,V]=d.valid,u=Ue(s),{x:I,y:Y}=c.targetGeometry,J=[I,Y],G=[0,0];i.toScreen(G,J);const E=[0,0];let A;A=R>p?.5*p:.5*R;const j=Math.floor((I+.5*u)/u),K=l+j*u,X=V+j*u,q=[G[0]+A,0];i.toMap(E,q),E[0]>X&&(n=u),q[0]=G[0]-A,i.toMap(E,q),E[0]<K&&(n=-u);for(const M of t){const U=M.elementView.bounds;if(_(U))continue;const[L,,O]=U;L<l&&O>l?M.updateDrawCoords(a,u):O>V&&L<V?M.updateDrawCoords(a,-u):M.updateDrawCoords(a,n)}}else for(const f of t)f.updateDrawCoords(a,n)}}let y=class extends Le(Oe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ee}attach(){this.addAttachHandles([W(()=>this.layer.effectiveSource,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()}),W(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new We,this.container.addChild(this._overlayContainer),this._fetchQueue=new be({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new Ce({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],i=r.normalize(),o=[i.x,i.y];for(const{projectedElement:{normalizedCoords:s,element:p}}of this._elementReferences.values())b(s)&&ne(s.rings,o)&&t.push({type:"media",element:p,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(r=>this._updateTile(r))}_acquireTile(r){const e=new ze(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,i]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,i),this.requestUpdate()},e=>{se(e)||N.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(h,r,!0);const i=new le({xmin:h[0],ymin:h[1],xmax:h[2],ymax:h[3],spatialReference:this.view.spatialReference});return t.queryElements(i,e)}_referenceElements(r,e){const t=this.layer.source;if(!_(t))for(const i of e)this._referenceElement(r,i)}_referenceElement(r,e){re(this._elementReferences,e.uid,()=>{const t=new z({element:e,spatialReference:this.view.spatialReference}),i=new He(t);return this._overlayContainer.addChild(i),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:i,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var i;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(i=this._debugGraphicsView)==null||i.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var i;let e=this._elementReferences.get(r.uid);if(e){const o=e.projectedElement.normalizedCoords;if(_(o))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((i=this._debugGraphicsView)==null?void 0:i.graphics.remove(e.debugGraphic));const s=[],p=[];for(const m of this._tileStrategy.tiles){const c=F(this.view.featuresTilingScheme,m,o);e.tiles.has(m)?c||p.push(m):c&&s.push(m)}for(const m of s)this._referenceElement(m,r);for(const m of p)this._dereferenceElement(m,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new z({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(b(t))for(const o of this._tileStrategy.tiles)F(this.view.featuresTilingScheme,o,t)&&this._referenceElement(o,r)}};x([D()],y.prototype,"_fetchQueue",void 0),x([D()],y.prototype,"layer",void 0),x([D({readOnly:!0})],y.prototype,"elements",void 0),y=x([Z("esri.views.2d.layers.MediaLayerView2D")],y);const h=pe(),g={xmin:0,ymin:0,xmax:0,ymax:0};function F(r,e,t){return r.getTileBounds(h,e.key,!0),g.xmin=h[0],g.ymin=h[1],g.xmax=h[2],g.ymax=h[3],he(g,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const o of e)i.has(o)?i.delete(o):t.push(o);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const Ms=y;export{Ms as default};
