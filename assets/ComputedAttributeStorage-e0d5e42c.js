import{t as _,r as l,L as G,M as v,y as O,g as p}from"./typedArrayUtil-74bbfd45.js";import{n as L,a as R,s as P,u as H,T as $,w as Y}from"./featureConversionUtils-55a32b06.js";import{e as g}from"./OptimizedFeature-6cca5f48.js";import{b as D,t as j}from"./FeatureSetReader-114ef492.js";import{_ as Q}from"./preload-helper-101896b7.js";import{s as X,a as C}from"./Error-781981d1.js";import{a as f}from"./string-75082bc6.js";import{a as Z}from"./mathUtils-15f63a45.js";import{D as V,j as M}from"./promiseUtils-28f2a985.js";import{m as q}from"./diffUtils-0b07ec68.js";import{r as J}from"./FieldsIndex-8c7b5df9.js";import{S as W,T as K,P as tt,u as k,N as et,O as st}from"./definitions-19bfb61c.js";import{c as rt,u as it,f as x,e as nt,i as at,n as ot,l as ht,r as ut,s as U,a as u}from"./visualVariablesUtils-c19b01f0.js";import{W as dt}from"./color-e7189c96.js";import{G as m}from"./enums-64ab819c.js";function ct({coords:d,lengths:t}){let e=0;for(const s of t){for(let r=1;r<s;r++)d[2*(e+r)]+=d[2*(e+r)-2],d[2*(e+r)+1]+=d[2*(e+r)-1];e+=s}}class y extends D{static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,i=L([],t,r,!1,!1,s);for(let n=0;n<i.length;n++)i[n].displayId=t[n].displayId;return y.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=R(t,e.objectIdField);return y.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=y.fromOptimizedFeatures(s,e);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)i.type==="esriFieldTypeDate"&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=D.createInstance(),i=new y(r,t,e);return i._transform=s,i}constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s==null?void 0:s.geometryType,this._features=e}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!(s.objectId&&e.has(s.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){var t;return(t=this._current)==null?void 0:t.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new y(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return P(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return H(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return _(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return g(this._current)?$(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return ct(e),e}readHydratedGeometry(){const t=this._current.geometry;if(_(t))return null;const e=t.clone();return l(this._transform)&&Y(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!g(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return _(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!g(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return _(e)?t:e.translate[1]-t*e.scale[1]}getX(){return g(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return g(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!g(this._current)){if(l(this._current.centroid)){const[s,r]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(s,r)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return g(this._current)?this._computeCentroid():this._current.centroid}hasField(t){return t in this._current.attributes?!0:this.getFieldNames().map(e=>e.toLowerCase()).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(s!==void 0)return s!=null&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t==null?void 0:t.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const a=this._current.attributes[n];return a!=null&&e&&this._dateFields.has(n)?new Date(a):a}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const b=X.getLogger("esri.views.layers.2d.features.support.AttributeStore"),z=ot(ht,b),S={sharedArrayBuffer:f("esri-shared-array-buffer"),atomics:f("esri-atomics")};function w(d,t){return e=>t(d(e))}class lt{constructor(t,e,s,r){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return O(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=p(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=p(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=p(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){p(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){p(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=x(t);return p(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=x(t),i=1<<e;this.layout&i?_(this.data)||(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):b.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===m.UNSIGNED_BYTE&&this._shared&&S.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===m.UNSIGNED_BYTE&&this._shared&&S.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=p(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||this._ctype==="local"),i=this.pixelType,n=this.layout,a=p(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&r!=="local"?SharedArrayBuffer:ArrayBuffer,n=dt(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let h=0;h<a.length;h+=4)a[h+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class Et{constructor(t,e,s=()=>{}){this._client=t,this.config=e,this._notifyChange=s,this._blocks=new Array,this._filters=new Array(W),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const r=e.supportsTextureFloat?m.FLOAT:m.UNSIGNED_BYTE;z(`Creating AttributeStore ${S.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:m.UNSIGNED_BYTE,layout:1},{pixelType:m.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:m.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=q(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(f("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeInfo=null,!_(s))){switch(s.target){case"feature":this._targetType=it;break;case"aggregate":this._targetType=rt}if(s.type==="subtype"){this._attributeComputeInfo={isSubtype:!0,subtypeField:s.subtypeField,map:new Map};for(const i in s.mapping){const n=s.mapping[i];if(l(n)&&l(n.vvMapping))for(const a of n.vvMapping)this._bindAttribute(a,parseInt(i,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},l(s.vvMapping))for(const i of s.vvMapping)this._bindAttribute(i);if(l(s.attributeMapping))for(const i of s.attributeMapping)this._bindAttribute(i)}}}onTileData(t,e){if(_(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const r=s.getDisplayId();this.setAttributeData(r,s)}}async setHighlight(t,e){const r=this._getBlock(0),i=e.map(n=>x(n));r.lock(),r.unsetComponentAllTexels(0,1),r.setComponent(0,1,i),r.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e,s){const{service:r,spatialReference:i}=s,{filters:n}=e,a=n.map((h,o)=>this._updateFilter(h,o,r,i));(await Promise.all(a)).some(h=>h)&&(t.storage.filters=!0,f("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=x(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?K:0}unsetAttributeData(t){const e=x(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=x(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==nt(t))return;const r=this._attributeComputeInfo,i=this.config.supportsTextureFloat?1:2,n=4;let a=null;r&&(a=r.isSubtype?r.map.get(e.readAttribute(r.subtypeField)):r.map,a&&a.size&&a.forEach((h,o)=>{const c=o*i%n,T=Math.floor(o*i/n),I=this._getBlock(T+tt),F=h(e);if(this.config.supportsTextureFloat)I.setData(s,c,F);else if(F===k)I.setData(s,c,255),I.setData(s,c+1,255);else{const E=Z(Math.round(F),-32767,32766)+32768,N=255&E,B=(65280&E)>>8;I.setData(s,c,N),I.setData(s,c+1,B)}}))}sendUpdates(){if(f("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=V(),this._nextUpdate.promise;const t={blocks:this._blocks.map(e=>l(e)?e.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}else f("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange()};f("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s}).catch(e=>{if(M(e))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),b.error(new C("mapview-attribute-store","Encountered an error during client update",e))}),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){function s(){const{normalizationField:o}=t;return o?c=>{const T=c.readAttribute(o);return T?c.readAttribute(t.field)/T:null}:c=>c.readAttribute(t.field)}function r(){return t.normalizationField&&b.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),o=>o.getComputedNumericAtIndex(t.fieldIndex)}let i;if(t.fieldIndex!=null)i=r();else{if(!t.field)return;i=s()}const{valueRepresentation:n}=t;n&&(i=w(i,o=>ut(o,n)));const a=o=>o===null||isNaN(o)||o===1/0||o===-1/0?k:o,h=this._attributeComputeInfo;if(h.isSubtype){const o=h.map.get(e)??new Map;o.set(t.binding,w(i,a)),h.map.set(e,o)}else h.map.set(t.binding,w(i,a))}_createResources(){if(l(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(et),this._getBlock(st),z("Initializing AttributeStore");const t={shared:S.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:G(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{M(s)?this._createResourcesPromise=null:b.error(new C("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>_(this._createResourcesPromise)?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(l(e))return e;z(`Initializing AttributeBlock at index ${t}`);const s=S.sharedArrayBuffer,r=this._client.type,i=new lt(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return z("Expanding block size to",t,this._blocks),v(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return b.error(new C("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=l(i)&&i.hash;if(!i&&!t||n===JSON.stringify(t))return!1;if(_(t)){if(!i)return!1;const h=1<<e+1,o=this._getBlock(0);return this._filters[e]=null,o.setComponentAllTexels(0,h),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(l(s))return s;const{default:r}=await Q(()=>import("./FeatureFilter-caf5bba7.js"),["assets/FeatureFilter-caf5bba7.js","assets/Error-781981d1.js","assets/string-75082bc6.js","assets/typedArrayUtil-74bbfd45.js","assets/aaBoundingRect-3cd21eb0.js","assets/mathUtils-15f63a45.js","assets/Extent-8fae2379.js","assets/Accessor-815cb0cf.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-28f2a985.js","assets/ensureType-125d327f.js","assets/JSONSupport-2b897629.js","assets/cast-f7d2a22f.js","assets/Polyline-40b9e769.js","assets/timeSupport-3132886a.js","assets/preload-helper-101896b7.js","assets/jsonUtils-15ca15d7.js","assets/featureConversionUtils-55a32b06.js","assets/aaBoundingBox-5e14079b.js","assets/OptimizedFeature-6cca5f48.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/projectionSupport-f9f6e313.js","assets/projection-4083e235.js","assets/SimpleObservable-729c9019.js","assets/mat4-a8da3f27.js","assets/assets-fff829c9.js","assets/request-b4e08038.js","assets/zscale-a617710a.js","assets/json-48e3ea08.js","assets/utils-e39a46c8.js","assets/normalizeUtils-53d1a4f1.js","assets/normalizeUtilsCommon-04cad10b.js","assets/geometry-0d19f94b.js","assets/typeUtils-3bf84b36.js","assets/utils-14667ccd.js","assets/utils-067ee6bc.js","assets/Query-4c66990d.js","assets/TimeExtent-202e4138.js","assets/enumeration-94b1319d.js","assets/DataLayerSource-3a7a94c9.js","assets/Field-7770b57d.js","assets/fieldType-e429d020.js","assets/FullTextSearch-da95615f.js","assets/Clonable-6d5134c7.js","assets/FeatureStore2D-cb80ae50.js","assets/CircularArray-27e292bb.js","assets/Evented-3dfb26f2.js","assets/rbush-f2a85c98.js","assets/quickselect-56c5966e.js","assets/diffUtils-0b07ec68.js","assets/Collection-912f4315.js","assets/fieldUtils-39eb4f5d.js","assets/FeatureSetReader-114ef492.js","assets/ArcadeDate-3d8ef842.js","assets/executionError-fb3f283a.js","assets/datetime-b6333958.js","assets/arcadeTimeUtils-42d2f4fb.js","assets/FieldsIndex-8c7b5df9.js","assets/TimeReference-afe9f4e7.js","assets/centroid-e285663a.js"]),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new J(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=at(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const n=!!(s&1<<i),a=this._filters[i];e|=(!n||_(a)||a.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const i=t.getObjectId();r=this.getHighlightFlag(i)}return e<<1|r}}let _t=class{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return U(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}};function A(d,t,e){if(!(d.length>t))for(;d.length<=t;)d.push(e)}class Mt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new _t,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(j.create(this._allocatedSize,u)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),A(this._numerics[t],e,0)}_ensureInstanceId(t){A(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),A(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),U(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&u)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&u,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&u,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&u,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&u,0,s)}getComputedNumericAtIndex(t,e){const s=t&u;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&u;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&u;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&u;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&u;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&u;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&u)]}getYMin(t){return this._bounds[4*(t&u)+1]}getXMax(t){return this._bounds[4*(t&u)+2]}getYMax(t){return this._bounds[4*(t&u)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex((o,c)=>{r=Math.min(r,o),i=Math.min(i,c),n=Math.max(n,o),a=Math.max(a,c)});const h=t&u;return A(this._bounds,4*h+4,0),this._bounds[4*h]=r,this._bounds[4*h+1]=i,this._bounds[4*h+2]=n,this._bounds[4*h+3]=a,!0}}export{Et as M,y as c,Mt as r};
