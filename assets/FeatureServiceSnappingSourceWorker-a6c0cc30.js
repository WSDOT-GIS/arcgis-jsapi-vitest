import{e as h,y as p,a as O,v as W,n as et,t as it}from"./JSONSupport-ed372989.js";import{n as st}from"./Evented-e2ee9722.js";import{r as f,t as y,g as rt,e as nt}from"./typedArrayUtil-96f93e5b.js";import{f as m,w as ot,A as H}from"./promiseUtils-ac1bd36f.js";import{U as X,l as z,j as at}from"./reactiveUtils-307e98f9.js";import{r as lt}from"./ensureType-348c3d61.js";import{d as ct,c as N}from"./HandleOwner-4c8d824c.js";import{L as ut,a as ht,f as j}from"./Extent-fd3ac910.js";import{g as dt}from"./FeatureStore-5b082aff.js";import{e as pt}from"./QueryEngine-7d9a0c78.js";import{j as x,t as ft}from"./TileInfo-e107254e.js";import{x as I}from"./Query-bf719160.js";import{r as _t,x as gt}from"./ElevationInfo-75e7bf35.js";import{p as U,d as M}from"./string-feb899cf.js";import{e as Y}from"./LRUCache-9c365b2a.js";import{j as $,d as B}from"./asyncUtils-f0fdc8c7.js";import{s as yt}from"./Error-d97df89f.js";import{u as K,c as P,E as D,f as mt,y as tt}from"./aaBoundingRect-a7e9efee.js";import{h as Et,a as Ct,I as Ft}from"./featureConversionUtils-00c47b2e.js";import{g as Tt}from"./arcgisLayerUrl-9d6ab56c.js";import{a as vt}from"./pbfQueryUtils-bad736cf.js";import{x as St,f as bt,c as It,S as wt}from"./query-eac603fe.js";import{s as xt,t as Ot,c as q}from"./byteSizeEstimations-90c5a50d.js";import{o as At}from"./BoundsStore-77e9ed02.js";import"./nextTick-3ee5a785.js";import"./cast-73cfc253.js";import"./aaBoundingBox-1eda6d1b.js";import"./mathUtils-b3bee9e7.js";import"./centroid-47d0a8f7.js";import"./OptimizedFeature-7af17710.js";import"./utils-4333ac1b.js";import"./preload-helper-f8378b50.js";import"./projection-d7a5b449.js";import"./SimpleObservable-04055e8d.js";import"./mat4-1ee69bd5.js";import"./Polyline-9d44200b.js";import"./assets-2c955bed.js";import"./request-7c0a9d4c.js";import"./zscale-e06cee6f.js";import"./jsonUtils-dd0891e0.js";import"./normalizeUtils-9dc1c489.js";import"./normalizeUtilsCommon-155f1aa2.js";import"./geometry-d89d4a34.js";import"./typeUtils-2ccaf90d.js";import"./utils-ada6b2ec.js";import"./projectionSupport-5e649f05.js";import"./json-48e3ea08.js";import"./MemCache-7d4aa654.js";import"./QueryEngineResult-8370edef.js";import"./quantizationUtils-fd85d1bd.js";import"./ItemCache-d06df2a7.js";import"./WhereClause-a4dbe0c1.js";import"./executionError-fb3f283a.js";import"./datetime-b6333958.js";import"./utils-3b0d532a.js";import"./generateRendererUtils-23a37be0.js";import"./enumeration-49e09bda.js";import"./fieldUtils-66be74eb.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-e2f5a7bb.js";import"./FieldsIndex-7c963fe9.js";import"./Scheduler-72fecd6f.js";import"./TimeExtent-d2d7594c.js";import"./DataLayerSource-71059dc4.js";import"./Field-b17a677d.js";import"./fieldType-b21f2e7f.js";import"./Clonable-5318ec31.js";import"./lengthUtils-bc8879ed.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./persistableUrlUtils-26091271.js";import"./pbf-3634de4f.js";import"./urlUtils-6a004888.js";import"./queryZScale-a0b71b11.js";import"./PooledRBush-74f786a6.js";import"./quickselect-56c5966e.js";function V(e=!1,t){if(e){const{elevationInfo:i,alignPointsInFeatures:s,spatialReference:r}=t;return new Pt(i,s,r)}return new $t}let $t=class{async alignCandidates(t,i){return t}notifyElevationSourceChange(){}};const Rt=1024;class Pt{constructor(t,i,s){this._elevationInfo=t,this._alignPointsInFeatures=i,this.spatialReference=s,this._alignmentsCache=new Y(Rt),this._cacheVersion=0,this._metersPerVerticalUnit=ut(s)}async alignCandidates(t,i){const s=this._elevationInfo;return f(s)&&s.mode==="absolute-height"&&!s.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(t,s),t):this._alignComputedElevationCandidates(t,i)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,i){const{offset:s,unit:r}=i;if(y(s))return;const n=s*(_t(r??"meters")/this._metersPerVerticalUnit);for(const o of t)switch(o.type){case"edge":o.start.z+=n,o.end.z+=n;continue;case"vertex":o.target.z+=n;continue}}async _alignComputedElevationCandidates(t,i){const s=new Map;for(const _ of t)lt(s,_.objectId,Ht).push(_);const[r,n,o]=this._prepareQuery(s),a=await this._alignPointsInFeatures(r,i);if(m(i),o!==this._cacheVersion)return this._alignComputedElevationCandidates(t,i);this._applyCacheAndResponse(r,a,n);const{drapedObjectIds:c,failedObjectIds:u}=a,d=[];for(const _ of t){const{objectId:E}=_;c.has(E)&&_.type==="edge"&&(_.draped=!0),u.has(E)||d.push(_)}return d}_prepareQuery(t){const i=[],s=[];for(const[r,n]of t){const o=[];for(const a of n)this._addToQueriesOrCachedResult(r,a.target,o,s),a.type==="edge"&&(this._addToQueriesOrCachedResult(r,a.start,o,s),this._addToQueriesOrCachedResult(r,a.end,o,s));o.length!==0&&i.push({objectId:r,points:o})}return[i,s,this._cacheVersion]}_addToQueriesOrCachedResult(t,i,s,r){const n=k(t,i),o=this._alignmentsCache.get(n);f(o)?r.push(new Dt(i,o)):s.push(i)}_applyCacheAndResponse(t,{elevations:i,drapedObjectIds:s,failedObjectIds:r},n){for(const c of n)c.apply();let o=0;const a=this._alignmentsCache;for(const{objectId:c,points:u}of t){if(r.has(c)){o+=u.length;continue}const d=!s.has(c);for(const _ of u){const E=k(c,_),C=i[o++];_.z=C,d&&a.put(E,C,1)}}}}class Dt{constructor(t,i){this.point=t,this.z=i}apply(){this.point.z=this.z}}function k(e,{x:t,y:i,z:s}){return`${e}-${t}-${i}-${s??0}}`}function Ht(){return[]}let zt=class{filter(t,i){return i}notifyElevationSourceChange(){}},Nt=class{filter(t,i){const{point:s,distance:r}=t,{z:n}=s;if(n==null||i.length===0)return i;const o=qt(r),a=this._updateCandidatesTo3D(i,s,o).filter(jt);return a.sort(Vt),a}_updateCandidatesTo3D(t,i,s){for(const r of t)switch(r.type){case"edge":Ut(r,i,s);continue;case"vertex":Bt(r,i,s);continue}return t}};function jt(e){return e.distance<=1}function L(e=!1){return e?new Nt:new zt}function Ut(e,t,{x:i,y:s,z:r}){const{start:n,end:o,target:a}=e;e.draped||Mt(a,t,n,o);const c=(t.x-a.x)/i,u=(t.y-a.y)/s,d=(t.z-a.z)/r;e.distance=Math.sqrt(c*c+u*u+d*d)}function Mt(e,t,i,s){const r=s.x-i.x,n=s.y-i.y,o=s.z-i.z,a=r*r+n*n+o*o,c=(t.x-i.x)*r+(t.y-i.y)*n+o*(t.z-i.z),u=Math.min(1,Math.max(0,c/a)),d=i.x+r*u,_=i.y+n*u,E=i.z+o*u;e.x=d,e.y=_,e.z=E}function Bt(e,t,{x:i,y:s,z:r}){const{target:n}=e,o=(t.x-n.x)/i,a=(t.y-n.y)/s,c=(t.z-n.z)/r,u=Math.sqrt(o*o+a*a+c*c);e.distance=u}function qt(e){return typeof e=="number"?{x:e,y:e,z:e}:e}function Vt(e,t){return e.distance-t.distance}function J(e=!1,t){return e?new Jt(t):new kt}class kt{async fetch(){return[]}notifySymbologyChange(){}}const Lt=1024;class Jt{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new Y(Lt),this._cacheVersion=0}async fetch(t,i){if(t.length===0)return[];const s=[],r=[],n=this._candidatesCache;for(const _ of t){const E=Q(_),C=n.get(E);if(C)for(const b of C)r.push(U(b));else s.push(_),n.put(E,[],1)}if(s.length===0)return r;const o=this._cacheVersion,{candidates:a,sourceCandidateIndices:c}=await this._getSymbologyCandidates(s,i);if(m(i),o!==this._cacheVersion)return this.fetch(t,i);const u=[],{length:d}=a;for(let _=0;_<d;++_){const E=a[_],C=Q(s[c[_]]),b=n.get(C);b.push(E),n.put(C,b,b.length),u.push(U(E))}return r.concat(u)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function Q(e){switch(e.type){case"vertex":{const{objectId:t,target:i}=e,s=`${t}-vertex-${i.x}-${i.y}-${i.z??0}`;return M(s).toString()}case"edge":{const{objectId:t,start:i,end:s}=e,r=`${t}-edge-${i.x}-${i.y}-${i.z??0}-to-${s.x}-${s.y}-${s.z??0}`;return M(r).toString()}default:return""}}let w=class extends W{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,t){this._pending.push({promise:e,callback:t}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};h([p()],w.prototype,"updating",void 0),w=h([O("esri.core.AsyncSequence")],w);class Qt{constructor(t,i){this.data=t,this.resolution=i,this.state={type:l.CREATED},this.alive=!0}process(t){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case l.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(t,i){return{type:l.FETCH_COUNT,previous:t,task:$(async s=>{const r=await B(i.fetchCount(this,s));this.state.type===l.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(t,i){return{type:l.FETCHED_COUNT,featureCount:i,previous:t}}_gotoFetchFeatures(t,i){return{type:l.FETCH_FEATURES,previous:t,task:$(async s=>{const r=await B(i.fetchFeatures(this,t.featureCount,s));this.state.type===l.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(t,i){return{type:l.FETCHED_FEATURES,previous:t,features:i}}_goToDone(t,i){return i.finish(this,t.features),{type:l.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:l.CREATED},t.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!y(t)&&this.data.extent)||(P(t,G),D(this.data.extent,G))}}var l;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(l||(l={}));const G=K();let g=class extends ct{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(t){const i=this._get("filter"),s=this._filterProperties(t);JSON.stringify(i)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(t){const i=this._get("customParameters");JSON.stringify(i)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const i=this._get("tileInfo");i!==t&&(f(t)&&f(i)&&JSON.stringify(t)===JSON.stringify(i)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new w,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(t,i)=>{rt(t,i,({id:s},{id:r})=>s===r)||this._process()},X)}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}applyEdits(t){this._pendingEdits.push(t,async i=>{if(i.addedFeatures.length===0&&i.updatedFeatures.length===0&&i.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const s={...i,deletedFeatures:i.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this.updatingHandles.addPromise(this.store.processEdits(s,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!Tt(this.url))return;const t=$(async i=>{var s;try{const r=await St(this.url,new I({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this._configuration.customParameters,signal:i});this.store.extent=ht.fromJSON((s=r.data)==null?void 0:s.extent)}catch(r){ot(r),yt.getLogger(this.declaredClass).warn("Failed to fetch data extent",r)}});this.updatingHandles.addPromise(t.promise.then(()=>this._process())),this.handles.add(et(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){const t=this._collectMissingTilesInfo();if(this._setAvailability(y(t)?1:t.coveredArea/t.fullArea),!y(t))for(const{data:i,resolution:s}of t.missingTiles){const r=this._pendingTiles.get(i.id);r?(r.resolution=s,r.alive=!0):this._createPendingTile(i,s)}}_collectMissingTilesInfo(){let t=null;for(let i=this.tilesOfInterest.length-1;i>=0;i--){const s=this.tilesOfInterest[i],r=this.store.process(s,(n,o)=>this._verifyTileComplexity(n,o));y(t)?t=r:t.prepend(r)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(i,s)=>this._fetchCount(i,s),fetchFeatures:(i,s,r)=>this._fetchFeatures(i,s,r),finish:(i,s)=>this._finishPendingTile(i,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,i]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(i.data),i.resolution)&&this.updatingHandles.addPromise(i.process(t))}_verifyTileComplexity(t,i){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,i)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<Zt}_verifyFeatureDensity(t,i){if(y(this.tileInfo))return!1;const s=this.tileSize*i;return t*(Wt/(s*s))<Xt}_ensureFetchAllCounts(t){let i=!0;for(const[,s]of this._pendingTiles)s.state.type<l.FETCHED_COUNT&&this.updatingHandles.addPromise(s.process(t)),s.state.type<=l.FETCH_COUNT&&(i=!1);return i}_finishPendingTile(t,i){this.store.add(t.data,i),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(y(t)?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,i){const s=new Qt(t,i);return this._pendingTiles.set(t.id,s),s}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,i){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:A,signal:i})}async _fetchFeatures(t,i,s){let r=0;const n=[];let o=0,a=i;for(;;){const c=this._createFeaturesQuery(t),u=this._setPagingParameters(c,r,a),{features:d,exceededTransferLimit:_}=await this._queryFeatures(c,s);u&&(r+=nt(c.num)),o+=d.length;for(const E of d)n.push(E);if(a=i-o,!u||!_||a<=0)return n}}_filterProperties(t){return y(t)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const i=this.globalIdField,s=this.objectIdField;if(y(i))throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{t===n.attributes[i]&&(r=n.objectId??n.attributes[s])}),y(r))throw new Error(`Expected to find a feature with globalId ${t}`);return r}_queryFeaturesById(t,i){const s=this._createFeaturesQuery();return s.objectIds=t,this._queryFeatures(s,i)}_queryFeatures(t,i){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,i):this._queryFeaturesJSON(t,i)}async _queryFeaturesPBF(t,i){const{sourceSpatialReference:s}=this,{data:r}=await bt(this.url,t,new vt({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:A,signal:i});return Et(r)}async _queryFeaturesJSON(t,i){const{sourceSpatialReference:s}=this,{data:r}=await It(this.url,t,s,{query:this._configuration.customParameters,timeout:A,signal:i});return Ct(r,this.objectIdField)}_createCountQuery(t){const i=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0),i}_createFeaturesQuery(t=null){const i=this._createBaseQuery(t);return i.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],i.returnGeometry=!0,f(t)&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}_createBaseQuery(t){const i=new I({returnZ:this.hasZ,returnM:!1,geometry:f(this.tileInfo)&&f(t)?mt(t.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return f(s)&&(i.where=s.where,i.gdbVersion=s.gdbVersion,i.timeExtent=s.timeExtent),i.outSpatialReference=this.spatialReference,i}_setPagingParameters(t,i,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:o,maxRecordCount:a,supportsResultType:c}=this.capabilities.query,u=r?I.MAX_MAX_RECORD_COUNT_FACTOR:1,d=u*((c||n)&&o?o:a||Gt);return t.start=i,r?(t.maxRecordCountFactor=Math.min(u,Math.ceil(s/d)),t.num=Math.min(s,t.maxRecordCountFactor*d)):t.num=Math.min(s,d),!0}};h([p({constructOnly:!0})],g.prototype,"url",void 0),h([p({constructOnly:!0})],g.prototype,"objectIdField",void 0),h([p({constructOnly:!0})],g.prototype,"globalIdField",void 0),h([p({constructOnly:!0})],g.prototype,"capabilities",void 0),h([p({constructOnly:!0})],g.prototype,"sourceSpatialReference",void 0),h([p({constructOnly:!0})],g.prototype,"spatialReference",void 0),h([p({constructOnly:!0})],g.prototype,"store",void 0),h([p({readOnly:!0})],g.prototype,"_minimumVerticesPerFeature",null),h([p()],g.prototype,"filter",null),h([p()],g.prototype,"customParameters",null),h([p({readOnly:!0})],g.prototype,"_configuration",null),h([p()],g.prototype,"tileInfo",null),h([p()],g.prototype,"tileSize",null),h([p()],g.prototype,"tilesOfInterest",void 0),h([p({readOnly:!0})],g.prototype,"updating",null),h([p({readOnly:!0})],g.prototype,"updatingExcludingEdits",null),h([p({readOnly:!0})],g.prototype,"availability",void 0),h([p()],g.prototype,"hasZ",null),g=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],g);const Gt=2e3,A=6e5,Zt=1e6,Wt=25,Xt=1;class Yt{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(i!=null&&(this._byteSize-=i.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let v=class extends W{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*xt.MEGABYTES,this._tileBounds=new At,this._tiles=new Yt,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=K()}add(e,t){const i=[];for(const s of t)this._referenceFeature(s.objectId)===T.ADDED&&i.push(s);this._addTileStorage(e,new Set(t.map(s=>s.objectId)),Kt(t)),this.featureStore.addMany(i),this._tiles.applyByteSizeLimit(this.maximumByteSize,s=>this._removeTileStorage(s))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i){const s=e.id;this._tiles.set(s,new ie(e,t,i)),this._tileBounds.set(s,e.extent),this._tileFeatureCounts.set(s,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===T.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const i of e)t.objectIds.delete(i);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,i){const s=(await t(e,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const o of s){const a=Ft(this._tmpBoundingRect,o.geometry,r,n);y(a)||this._tileBounds.forEachInBounds(a,c=>{const u=this._tiles.get(c);this.featureStore.add(o);const d=o.objectId;u.objectIds.has(d)||(u.objectIds.add(d),this._referenceFeature(d),this._tileFeatureCounts.set(u.data.id,u.objectIds.size))})}}process(e,t=()=>!0){if(y(this.tileInfo)||!e.extent||f(this.extent)&&!D(P(this.extent,this._tmpBoundingRect),e.extent))return new R(e);if(this._tiles.has(e.id))return new R(e);const i=this._createTileTree(e,this.tileInfo);return this._simplify(i,t,null,0,1),this._collectMissingTiles(e,i,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,i,s){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await wt(t,i,s);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const i=new Z(e.level,e.row,e.col);return t.updateTileInfo(i,x.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,s=>{var n;const r=(n=this._tiles.get(s))==null?void 0:n.data;r&&this._tilesAreRelated(e,r)&&this._populateChildren(i,r,t,this._tileFeatureCounts.get(r.id)||0)}),i}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}_populateChildren(e,t,i,s){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,o=t.col>>r,a=e.row<<1,c=o-(e.col<<1)+(n-a<<1),u=e.children[c];if(f(u))this._populateChildren(u,t,i,s);else{const d=new Z(e.level+1,n,o);i.updateTileInfo(d,x.ExtrapolateOptions.POWER_OF_TWO),e.children[c]=d,this._populateChildren(d,t,i,s)}}_simplify(e,t,i,s,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),f(i)&&(i.children[s]=null),n);const o=r/2,a=o*o;let c=0;for(let u=0;u<e.children.length;u++){const d=e.children[u];c+=f(d)?this._simplify(d,t,e,u,o):a}return c===0?this._mergeChildren(e):1-c/n<re&&(this._purge(e),f(i)&&(i.children[s]=null),c=n),c}_mergeChildren(e){const t=new Set;let i=0;this._forEachLeaf(e,s=>{const r=this._tiles.get(s.id);if(r){i+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(s)}}),this._addTileStorage(e,t,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const i of e.children)y(i)||(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(!y(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const i=e.children[t];this._purge(i),e.children[t]=null}}_collectMissingTiles(e,t,i){const s=new se(i,e,this.extent);return this._collectMissingTilesRecurse(t,s,1),s.info}_collectMissingTilesRecurse(e,t,i){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,i);const s=i/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];y(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),s):this._collectMissingTilesRecurse(n,t,s)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?T.ADDED:T.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),T.REMOVED):(t>0&&this._refCounts.set(e,t),T.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(e=>`${e}:${this._refCounts.get(e)}`)}}};function Kt(e){return e.reduce((t,i)=>t+te(i),0)}function te(e){return 32+ee(e.geometry)+Ot(e.attributes)}function ee(e){if(y(e))return 0;const t=q(e.lengths,4);return 32+q(e.coords,8)+t}h([p({constructOnly:!0})],v.prototype,"featureStore",void 0),h([p()],v.prototype,"tileInfo",void 0),h([p()],v.prototype,"extent",void 0),h([p()],v.prototype,"maximumByteSize",void 0),v=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],v);class ie{constructor(t,i,s){this.data=t,this.objectIds=i,this.byteSize=s}}class Z{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(f(this.children[0])||f(this.children[1])||f(this.children[2])||f(this.children[3]))}}class R{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=tt(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}let se=class{constructor(t,i,s){this._tileInfo=t,this._extent=null,this.info=new R(i),f(s)&&(this._extent=P(s))}addMissing(t,i,s,r){const n=new ft(null,t,i,s);this._tileInfo.updateTileInfo(n,x.ExtrapolateOptions.POWER_OF_TWO),y(n.extent)||f(this._extent)&&!D(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=tt(n.extent))}};const re=.18751;var T;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(T||(T={}));let S=class extends st.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=H(),this._elevationAligner=V(),this._elevationFilter=L(),this._symbologyCandidatesFetcher=J(),this._handles=new it,this._updatingHandles=new N,this._editsUpdatingHandles=new N,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const i={points:e},s=await this.remoteClient.invoke("alignElevation",i,{signal:t});return m(t),s},this._getSymbologyCandidates=async(e,t)=>{const i={candidates:e,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:t});return m(t),s}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var e,t,i,s;(e=this._featureFetcher)==null||e.destroy(),(t=this._queryEngine)==null||t.destroy(),(i=this._featureStore)==null||i.clear(),(s=this._handles)==null||s.destroy()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:i,timeInfo:s,fields:r}=e.serviceInfo,{hasZ:n}=e,o=j.fromJSON(e.spatialReference);this._spatialReference=o,this._featureStore=new dt({...e.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new pt({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fields:r,hasZ:n,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new g({store:new v({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:o,sourceSpatialReference:j.fromJSON(e.serviceInfo.spatialReference)});const a=e.configuration.viewType==="3d";return this._elevationAligner=V(a,{elevationInfo:f(e.elevationInfo)?gt.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:o}),this._elevationFilter=L(a),this._handles.add([z(()=>this._featureFetcher.availability,c=>this.emit("notify-availability",{availability:c}),X),z(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){await this._whenSetup.promise,m(t);const i=ne(e),s=f(t)?t.signal:null,r=await this._queryEngine.executeQueryForSnapping(i,s);m(s);const n=await this._elevationAligner.alignCandidates(r.candidates,s);m(s);const o=await this._symbologyCandidatesFetcher.fetch(n,s);m(s);const a=o.length===0?n:n.concat(o);return{result:{candidates:this._elevationFilter.filter(i,a)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=f(e.tileInfo)?x.fromJSON(e.tileInfo):null,F}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(t),this._featureFetcher.refresh(),F}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(t),await at(()=>!this.updatingExcludingEdits,t),m(t),F}async getDebugInfo(e,t){return m(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),m(t);const i=H();return this._pendingApplyEdits.set(e.id,i),this._featureFetcher.applyEdits(i.promise),this._editsUpdatingHandles.addPromise(i.promise),F}async endApplyEdits(e,t){const i=this._pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),m(t),F}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),F}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),F}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=J(e,this._getSymbologyCandidates),F}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=f(e.filter)?I.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};h([p({readOnly:!0})],S.prototype,"updating",null),h([p({readOnly:!0})],S.prototype,"updatingExcludingEdits",null),h([p()],S.prototype,"_isInitializing",void 0),S=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],S);const Ri=S;function ne(e){return{point:e.point,mode:e.mode,distance:e.distance,types:e.types,query:f(e.filter)?e.filter:{where:"1=1"}}}const F={result:{}};export{Ri as default};
