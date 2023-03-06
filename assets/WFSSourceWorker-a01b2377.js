import{j as l}from"./asyncUtils-f0fdc8c7.js";import{a as n,s as g}from"./Error-d97df89f.js";import{r as _,e as f}from"./typedArrayUtil-96f93e5b.js";import{f as m,j as d}from"./promiseUtils-ac1bd36f.js";import{E as w,O as p}from"./Extent-fd3ac910.js";import{c as E,u as q}from"./featureConversionUtils-00c47b2e.js";import{g as F}from"./FeatureStore-5b082aff.js";import{g as x,f as S}from"./projectionSupport-5e649f05.js";import{e as T}from"./QueryEngine-7d9a0c78.js";import{T as j,I}from"./geojson-90baeca4.js";import{m as b}from"./sourceUtils-56fe9081.js";import{K as C}from"./wfsUtils-804ee463.js";import{r as P}from"./FieldsIndex-7c963fe9.js";import"./JSONSupport-ed372989.js";import"./string-feb899cf.js";import"./ensureType-348c3d61.js";import"./nextTick-3ee5a785.js";import"./cast-73cfc253.js";import"./aaBoundingBox-1eda6d1b.js";import"./mathUtils-b3bee9e7.js";import"./aaBoundingRect-a7e9efee.js";import"./jsonUtils-dd0891e0.js";import"./Polyline-9d44200b.js";import"./OptimizedFeature-7af17710.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-e2ee9722.js";import"./BoundsStore-77e9ed02.js";import"./PooledRBush-74f786a6.js";import"./quickselect-56c5966e.js";import"./centroid-47d0a8f7.js";import"./utils-4333ac1b.js";import"./preload-helper-f8378b50.js";import"./projection-d7a5b449.js";import"./SimpleObservable-04055e8d.js";import"./mat4-1ee69bd5.js";import"./assets-2c955bed.js";import"./request-7c0a9d4c.js";import"./zscale-e06cee6f.js";import"./normalizeUtils-9dc1c489.js";import"./normalizeUtilsCommon-155f1aa2.js";import"./geometry-d89d4a34.js";import"./typeUtils-2ccaf90d.js";import"./utils-ada6b2ec.js";import"./json-48e3ea08.js";import"./MemCache-7d4aa654.js";import"./QueryEngineResult-8370edef.js";import"./quantizationUtils-fd85d1bd.js";import"./ItemCache-d06df2a7.js";import"./WhereClause-a4dbe0c1.js";import"./executionError-fb3f283a.js";import"./datetime-b6333958.js";import"./utils-3b0d532a.js";import"./generateRendererUtils-23a37be0.js";import"./enumeration-49e09bda.js";import"./fieldUtils-66be74eb.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-e2f5a7bb.js";import"./Scheduler-72fecd6f.js";import"./reactiveUtils-307e98f9.js";import"./xmlUtils-444cb4c0.js";import"./Field-b17a677d.js";import"./fieldType-b21f2e7f.js";class Wt{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await C(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await j(i),m(t);const s=I(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!w(this._queryEngine.spatialReference,p))for(const r of s)_(r.geometry)&&(r.geometry=E(x(q(r.geometry,this._queryEngine.geometryType,!1,!1),p,this._queryEngine.spatialReference)));let a=1;for(const r of s){const o={};b(this._fieldsIndex,o,r.attributes,!0),r.attributes=o,r.attributes[e]==null&&(r.objectId=r.attributes[e]=a++)}return s}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:s,spatialReference:a,fields:r,geometryType:o,featureType:u,objectIdField:h,customParameters:y}=t;this._featureType=u,this._customParameters=y,this._getFeatureUrl=i,this._getFeatureOutputFormat=s,this._fieldsIndex=new P(r),await this._checkProjection(a),m(e),this._queryEngine=new T({fields:r,geometryType:o,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:a,timeInfo:null,featureStore:new F({geometryType:o,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(f(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new n("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=l(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),d(i)||g.getLogger("esri.layers.WFSLayer").error(new n("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:i}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await S(p,t)}catch{throw new n("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{Wt as default};
