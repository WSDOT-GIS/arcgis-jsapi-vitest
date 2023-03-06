import{U as C}from"./request-ae7029ea.js";import{j as D}from"./asyncUtils-5c97747c.js";import{a as g,s as Q}from"./Error-781981d1.js";import{r as E}from"./typedArrayUtil-74bbfd45.js";import{j as v}from"./promiseUtils-28f2a985.js";import{c as q}from"./jsonUtils-15ca15d7.js";import{O as _,E as G}from"./Extent-8fae2379.js";import{c as M,u as P,n as Z,s as A,o as N}from"./featureConversionUtils-55a32b06.js";import{g as z}from"./FeatureStore-0727cb75.js";import{f as F,g as b}from"./projectionSupport-ea4e5e35.js";import{e as U}from"./QueryEngine-498bfb77.js";import{L as B,I as L,T as J}from"./geojson-b6ec7e89.js";import{o as V,a as W,i as H}from"./clientSideDefaults-ad9d2f09.js";import{w as Y,m as w,f as T,a as I,g as S}from"./sourceUtils-68642844.js";import{r as R}from"./FieldsIndex-9f1d87a4.js";import{i as K}from"./fieldType-e429d020.js";import{M as X}from"./fieldUtils-e6cf5e5f.js";import"./preload-helper-f8378b50.js";import"./string-75082bc6.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./ensureType-125d327f.js";import"./Polyline-40b9e769.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./aaBoundingBox-5e14079b.js";import"./mathUtils-15f63a45.js";import"./aaBoundingRect-3cd21eb0.js";import"./OptimizedFeature-6cca5f48.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-3dfb26f2.js";import"./BoundsStore-be53c75d.js";import"./PooledRBush-39319051.js";import"./quickselect-56c5966e.js";import"./centroid-e285663a.js";import"./utils-a672299c.js";import"./projection-319bc7cc.js";import"./SimpleObservable-729c9019.js";import"./mat4-a8da3f27.js";import"./assets-01239caf.js";import"./zscale-a617710a.js";import"./normalizeUtils-eda5eef5.js";import"./normalizeUtilsCommon-04cad10b.js";import"./geometry-0d19f94b.js";import"./typeUtils-3bf84b36.js";import"./utils-19aa96f8.js";import"./utils-067ee6bc.js";import"./json-48e3ea08.js";import"./MemCache-9d81d118.js";import"./QueryEngineResult-08fc28ad.js";import"./quantizationUtils-158f275c.js";import"./ItemCache-dc80b100.js";import"./WhereClause-0ef5919b.js";import"./executionError-fb3f283a.js";import"./datetime-b6333958.js";import"./utils-6d25dc34.js";import"./generateRendererUtils-6a1709c8.js";import"./enumeration-94b1319d.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-a2a485f4.js";import"./Scheduler-58e89fab.js";import"./reactiveUtils-31da19f9.js";import"./defaultsJSON-b087dd4d.js";const ee={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class ct{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const r=[];await this._checkProjection(e.spatialReference);let s=null;e.url&&(s=await this._fetch(t==null?void 0:t.signal));const n=B(s,{geometryType:e.geometryType}),a=e.fields||n.fields||[],u=e.hasZ!=null?e.hasZ:n.hasZ,l=n.geometryType;let m=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||_;let i=e.timeInfo;a===n.fields&&n.unknownFields.length>0&&r.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let p=new R(a).get(m);p?(p.type!=="esriFieldTypeString"&&(p.type="esriFieldTypeOID"),p.editable=!1,p.nullable=!1,m=p.name):(p={alias:m,name:m,type:n.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(p));const c={};for(const o of a){if(o.name==null&&(o.name=o.alias),o.alias==null&&(o.alias=o.name),!o.name)throw new g("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!K.jsonValues.includes(o.type))throw new g("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==p.name){const f=X(o);f!==void 0&&(c[o.name]=f)}}this._fieldsIndex=new R(a);const d=this._fieldsIndex.requiredFields.indexOf(p);if(d>-1&&this._fieldsIndex.requiredFields.splice(d,1),i){if(i.startTimeField){const o=this._fieldsIndex.get(i.startTimeField);o?(i.startTimeField=o.name,o.type="esriFieldTypeDate"):i.startTimeField=null}if(i.endTimeField){const o=this._fieldsIndex.get(i.endTimeField);o?(i.endTimeField=o.name,o.type="esriFieldTypeDate"):i.endTimeField=null}if(i.trackIdField){const o=this._fieldsIndex.get(i.trackIdField);o?i.trackIdField=o.name:(i.trackIdField=null,r.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:i}}))}i.startTimeField||i.endTimeField||(r.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:i}}),i=null)}const O=l?V(l):void 0,y={warnings:r,featureErrors:[],layerDefinition:{...ee,drawingInfo:O??void 0,templates:W(c),extent:void 0,geometryType:l,objectIdField:m,fields:a,hasZ:!!u,timeInfo:i}};this._queryEngine=new U({fields:a,geometryType:l,hasM:!1,hasZ:u,objectIdField:m,spatialReference:h,timeInfo:i,featureStore:new z({geometryType:l,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),this._createDefaultAttributes=H(c,m);const j=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const $=this._normalizeFeatures(j,y.warnings,y.featureErrors);this._queryEngine.featureStore.addMany($);const{fullExtent:k,timeExtent:x}=await this._queryEngine.fetchRecomputedExtents();if(y.layerDefinition.extent=k,x){const{start:o,end:f}=x;y.layerDefinition.timeInfo.timeExtent=[o,f]}return y}async applyEdits(e){const{spatialReference:t,geometryType:r}=this._queryEngine;return await Promise.all([Y(t,r),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=D(this._snapshotFeatures),this._snapshotTask.promise.then(n=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,n);const a=this._normalizeFeatures(n);a&&this._queryEngine.featureStore.addMany(a)},n=>{this._queryEngine.featureStore.clear(),v(n)||Q.getLogger("esri.layers.GeoJSONLayer").error(new g("geojson-layer:refresh","An error occurred during refresh",{error:n}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:r}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:r}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:r,objectIdField:s}=this._queryEngine,n=L(e,{geometryType:t,hasZ:r,objectIdField:s});if(!G(this._queryEngine.spatialReference,_))for(const a of n)E(a.geometry)&&(a.geometry=M(b(P(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:r}=this._loadOptions,s=(await C(t,{responseType:"json",query:{...r},signal:e})).data;return await J(s),s}_normalizeFeatures(e,t,r){const{objectIdField:s}=this._queryEngine,n=[];for(const a of e){const u=this._createDefaultAttributes(),l=w(this._fieldsIndex,u,a.attributes,!0,t);l?r==null||r.push(l):(this._assignObjectId(u,a.attributes,!0),a.attributes=u,a.objectId=u[s],n.push(a))}return n}async _applyEdits(e){const{adds:t,updates:r,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),r&&r.length&&this._applyUpdateEdits(n,r),s&&s.length){for(const l of s)n.deleteResults.push(T(l));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:a,timeExtent:u}=await this._queryEngine.fetchRecomputedExtents();return{extent:a,timeExtent:u,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:s,hasM:n,hasZ:a,objectIdField:u,spatialReference:l,featureStore:m}=this._queryEngine,h=[];for(const i of t){if(i.geometry&&s!==q(i.geometry)){r.push(I("Incorrect geometry type."));continue}const p=this._createDefaultAttributes(),c=w(this._fieldsIndex,p,i.attributes);if(c)r.push(c);else{if(this._assignObjectId(p,i.attributes),i.attributes=p,i.uid!=null){const d=i.attributes[u];e.uidToObjectId[i.uid]=d}if(E(i.geometry)){const d=i.geometry.spatialReference??l;i.geometry=b(S(i.geometry,d),d,l)}h.push(i),r.push(T(i.attributes[u]))}}m.addMany(Z([],h,s,a,n,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:s,hasZ:n,objectIdField:a,spatialReference:u,featureStore:l}=this._queryEngine;for(const m of t){const{attributes:h,geometry:i}=m,p=h&&h[a];if(p==null){e.push(I(`Identifier field ${a} missing`));continue}if(!l.has(p)){e.push(I(`Feature with object id ${p} missing`));continue}const c=A(l.getFeature(p),r,n,s);if(E(i)){if(r!==q(i)){e.push(I("Incorrect geometry type."));continue}const d=i.spatialReference??u;c.geometry=b(S(i,d),d,u)}if(h){const d=w(this._fieldsIndex,c.attributes,h);if(d){e.push(d);continue}}l.add(N(c,r,n,s,a)),e.push(T(p))}}_createObjectIdGenerator(e,t){const r=e.fieldsIndex.get(e.objectIdField);if(r.type==="esriFieldTypeString")return()=>r.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const n of t)n.objectId&&(s=Math.max(s,n.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,r=!1){const s=this._queryEngine.objectIdField;e[s]=r&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new g("geojson-layer","Projection not supported")}}}export{ct as default};
