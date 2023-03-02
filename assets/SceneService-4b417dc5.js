import{e as c,y as u,a as L}from"./Accessor-815cb0cf.js";import{U as v,L as N}from"./request-b4e08038.js";import{a as m,s as V}from"./Error-781981d1.js";import{r as I}from"./typedArrayUtil-74bbfd45.js";import{E as k,f as q,x as M}from"./promiseUtils-28f2a985.js";import"./ensureType-125d327f.js";import{f as E,o as f,w as R,r as C}from"./Extent-8fae2379.js";import{i as T}from"./originUtils-1469eeaf.js";import{v as F}from"./HeightModelInfo-0c04472c.js";import{y as z,d as J,w as D,b as B,C as Z}from"./arcgisLayerUrl-90607db0.js";import{v as G,f as H}from"./commonProperties-6a723db4.js";import{b as $}from"./Portal-0799d17c.js";import Q from"./PortalItem-9c70e5ea.js";import{b as K}from"./asyncUtils-5c97747c.js";import{n as W}from"./uuid-73213768.js";import{getSiblingOfSameTypeI as X}from"./resourceUtils-387a01c7.js";async function Y(i,a,e,t,o,r){let s=null;if(I(e)){const n=`${i}/nodepages/`,h=n+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await v(h,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:n}}catch(d){I(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",h,d),s=d}}if(!a)return null;const l=`${i}/nodes/`,p=l+(a&&a.split("/").pop());try{return{type:"node",rootNode:(await v(p,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(n){throw new m("sceneservice:root-node-missing","Root node missing.",{pageError:s,nodeError:n,url:p})}}let ee=null;function te(){return ee}async function O(i,a,e){if(!a||!a.resources)return;const t=a.portalItem===i.portalItem?new Set(i.paths):new Set;i.paths.length=0,i.portalItem=a.portalItem;const o=new Set(a.resources.toKeep.map(n=>n.resource.path)),r=new Set,s=[];o.forEach(n=>{t.delete(n),i.paths.push(n)});for(const n of a.resources.toUpdate)if(t.delete(n.resource.path),o.has(n.resource.path)||r.has(n.resource.path)){const{resource:h,content:d,finish:b,error:_}=n,w=X(h,W());i.paths.push(w.path),s.push(j({resource:w,content:d,compress:n.compress,finish:b,error:_},e))}else i.paths.push(n.resource.path),s.push(re(n,e)),r.add(n.resource.path);for(const n of a.resources.toAdd)s.push(j(n,e)),i.paths.push(n.resource.path);if(t.forEach(n=>{if(a.portalItem){const h=a.portalItem.resourceFromPath(n);s.push(h.portalItem.removeResource(h).catch(()=>{}))}}),s.length===0)return;const l=await k(s);q(e);const p=l.filter(n=>"error"in n).map(n=>n.error);if(p.length>0)throw new m("save:resources","Failed to save one or more resources",{errors:p})}async function j(i,a){var o,r;const e={...I(a)?a:{},compress:i.compress},t=await K(i.resource.portalItem.addResource(i.resource,i.content,e));if(t.ok!==!0)throw(o=i.error)==null||o.call(i,t.error),t.error;(r=i.finish)==null||r.call(i,i.resource)}async function re(i,a){var t,o;const e=await K(i.resource.update(i.content,a));if(e.ok!==!0)throw(t=i.error)==null||t.call(i,e.error),e.error;(o=i.finish)==null||o.call(i,i.resource)}const P="esri.layers.mixins.SceneService",y=V.getLogger(P),we=i=>{let a=class extends i{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=M(async(e,t,o)=>{switch(e){case x.SAVE:return this._save(t);case x.SAVE_AS:return this._saveAs(o,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return E.fromJSON(e.spatialReference);{const t=e.store,o=t.indexCRS||t.geographicCRS,r=o&&parseInt(o.substring(o.lastIndexOf("/")+1,o.length),10);return r!=null?new E(r):null}}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return R.fromJSON(l,o)}const r=t.store,s=this._readSpatialReference(t);return s==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<A)?null:new R({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:s})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},o=e.split(".");return o.length>=2&&(t.major=parseInt(o[0],10),t.minor=parseInt(o[1],10)),t}readVersion(e,t){const o=t.store,r=o.version!=null?o.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const o=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return z(this.url,t.name);let r=t.name;if(!r&&this.url){const s=J(this.url);I(s)&&(r=s.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&o&&(r=o+" - "+r),D(r)}set url(e){const t=B({layer:this,url:e,nonStandardUrlAllowed:!1,logger:y});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,o,r){Z(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=N(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Y(this.parsedUrl.path,this.rootNode,e,this.apiKey,y,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,o,r;if((e==null?void 0:e.type)==="page"){const s=e.rootIndex%e.pageSize,l=(o=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:o[s];if(l==null||l.obb==null||l.obb.center==null||l.obb.halfSize==null)throw new m("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<A||this.fullExtent==null||this.fullExtent.hasZ)return;const p=l.obb.halfSize,n=l.obb.center[2],h=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);this.fullExtent.zmin=n-h,this.fullExtent.zmax=n+h}else if((e==null?void 0:e.type)==="node"){const s=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(s)||s.length!==4||s[0]<A)return;const l=s[2],p=s[3],{fullExtent:n}=this;n&&(n.zmin=l-p,n.zmax=l+p)}}async _fetchService(e){if(this.url==null)throw new m("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await v(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var s;const t=await v(((s=this.parsedUrl)==null?void 0:s.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(o=!0),o)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var o;const t=(await v(((o=this.parsedUrl)==null?void 0:o.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,o){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const s of r)e.typeKeywords.push(s);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((s,l,p)=>p.indexOf(s)===l),o===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(s=>s!=="Hosted Service")))}async _saveAs(e,t){var n;const o={...U,...t};let r=Q.from(e);r||(y.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new m("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const s=r.portal||$.getDefault();await this._ensureLoadBeforeSave(),r.type=S,r.portal=s;const l={origin:"portal-item",url:null,messages:[],portal:s,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(p,l,o),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,o,g.newItem),await s.signIn(),await((n=s.user)==null?void 0:n.addItem({item:r,folder:o&&o.folder,data:p})),await O(this.resourceReferences,l,null),this.portalItem=r,T(l),l.portalItem=r,r}async _save(e){const t={...U,...e};if(!this.portalItem)throw y.error("_save(): requires the .portalItem property to be set"),new m("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==S)throw y.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+S),new m("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${S}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&N(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||$.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await this.portalItem.update({data:r}),await O(this.resourceReferences,o,null),T(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){var n,h;let r=((n=t.messages)==null?void 0:n.filter(d=>d.type==="error").map(d=>new m(d.name,d.message,d.details)))??[];(h=o==null?void 0:o.validationOptions)!=null&&h.ignoreUnsupported&&(r=r.filter(d=>d.name!=="layer:unsupported"&&d.name!=="symbol:unsupported"&&d.name!=="symbol-layer:unsupported"&&d.name!=="property:unsupported"&&d.name!=="url:unsupported"&&d.name!=="scenemodification:unsupported"));const s=o==null?void 0:o.validationOptions,l=s==null?void 0:s.enabled,p=te();if(l&&p){const d=(await p()).validate(e,o.portalItemLayerType);if(d.length>0){const b=`Layer item did not validate:
${d.join(`
`)}`;if(y.error(`_validateAgainstJSONSchema(): ${b}`),s.failPolicy==="throw"){const _=d.map(w=>new m("sceneservice:schema-validation",w)).concat(r);throw new m("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:_})}}}if(r.length>0)throw new m("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return c([u(G)],a.prototype,"id",void 0),c([u({type:E})],a.prototype,"spatialReference",void 0),c([f("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),c([u({type:R})],a.prototype,"fullExtent",void 0),c([f("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),c([u({readOnly:!0,type:F})],a.prototype,"heightModelInfo",void 0),c([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),c([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),c([u({readOnly:!0})],a.prototype,"version",void 0),c([f("version",["store.version"])],a.prototype,"readVersion",null),c([u({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),c([u({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),c([u({type:String})],a.prototype,"title",void 0),c([f("portal-item","title")],a.prototype,"readTitlePortalItem",null),c([f("service","title",["name"])],a.prototype,"readTitleService",null),c([u({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),c([u(H)],a.prototype,"url",null),c([C("url")],a.prototype,"writeUrl",null),c([u()],a.prototype,"parsedUrl",null),c([u({readOnly:!0})],a.prototype,"store",void 0),c([u({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=c([L(P)],a),a},A=-1e38;var g;(function(i){i[i.existingItem=0]="existingItem",i[i.newItem=1]="newItem"})(g||(g={}));const S="Scene Service",U={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var x;(function(i){i[i.SAVE=0]="SAVE",i[i.SAVE_AS=1]="SAVE_AS"})(x||(x={}));export{we as E,x as L,Y as n};
