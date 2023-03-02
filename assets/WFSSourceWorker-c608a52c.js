import{j as l}from"./asyncUtils-5c97747c.js";import{a as n,s as g}from"./Error-781981d1.js";import{r as _,g as f}from"./typedArrayUtil-74bbfd45.js";import{f as m,j as d}from"./promiseUtils-28f2a985.js";import{E as w,O as p}from"./Extent-8fae2379.js";import{c as E,u as q}from"./featureConversionUtils-55a32b06.js";import{g as F}from"./FeatureStore-ae3c060b.js";import{g as x,f as S}from"./projectionSupport-f9f6e313.js";import{e as T}from"./QueryEngine-61b6d179.js";import{T as j,I}from"./geojson-e4da2389.js";import{m as b}from"./sourceUtils-ec426d35.js";import{K as C}from"./wfsUtils-3acf7477.js";import{r as P}from"./FieldsIndex-8c7b5df9.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./string-75082bc6.js";import"./nextTick-3ee5a785.js";import"./ensureType-125d327f.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./aaBoundingBox-5e14079b.js";import"./mathUtils-15f63a45.js";import"./aaBoundingRect-3cd21eb0.js";import"./jsonUtils-15ca15d7.js";import"./Polyline-40b9e769.js";import"./OptimizedFeature-6cca5f48.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-3dfb26f2.js";import"./BoundsStore-be53c75d.js";import"./PooledRBush-39319051.js";import"./quickselect-56c5966e.js";import"./centroid-e285663a.js";import"./utils-e39a46c8.js";import"./preload-helper-101896b7.js";import"./projection-4083e235.js";import"./SimpleObservable-729c9019.js";import"./mat4-a8da3f27.js";import"./assets-fff829c9.js";import"./request-b4e08038.js";import"./zscale-a617710a.js";import"./normalizeUtils-53d1a4f1.js";import"./normalizeUtilsCommon-04cad10b.js";import"./geometry-0d19f94b.js";import"./typeUtils-3bf84b36.js";import"./utils-14667ccd.js";import"./utils-067ee6bc.js";import"./json-48e3ea08.js";import"./MemCache-9d81d118.js";import"./QueryEngineResult-7375ee79.js";import"./quantizationUtils-158f275c.js";import"./ItemCache-dc80b100.js";import"./WhereClause-0ef5919b.js";import"./executionError-fb3f283a.js";import"./datetime-b6333958.js";import"./utils-6d25dc34.js";import"./generateRendererUtils-6a1709c8.js";import"./enumeration-94b1319d.js";import"./fieldUtils-39eb4f5d.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-3132886a.js";import"./Scheduler-58e89fab.js";import"./reactiveUtils-31da19f9.js";import"./xmlUtils-444cb4c0.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";class Nt{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await C(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await j(i),m(t);const o=I(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!w(this._queryEngine.spatialReference,p))for(const r of o)_(r.geometry)&&(r.geometry=E(x(q(r.geometry,this._queryEngine.geometryType,!1,!1),p,this._queryEngine.spatialReference)));let a=1;for(const r of o){const s={};b(this._fieldsIndex,s,r.attributes,!0),r.attributes=s,r.attributes[e]==null&&(r.objectId=r.attributes[e]=a++)}return o}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:o,spatialReference:a,fields:r,geometryType:s,featureType:u,objectIdField:h,customParameters:y}=t;this._featureType=u,this._customParameters=y,this._getFeatureUrl=i,this._getFeatureOutputFormat=o,this._fieldsIndex=new P(r),await this._checkProjection(a),m(e),this._queryEngine=new T({fields:r,geometryType:s,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:a,timeInfo:null,featureStore:new F({geometryType:s,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(f(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new n("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=l(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),d(i)||g.getLogger("esri.layers.WFSLayer").error(new n("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:i}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await S(p,t)}catch{throw new n("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{Nt as default};
