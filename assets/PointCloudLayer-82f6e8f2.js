import{e as r,y as o,a as y,l as q}from"./JSONSupport-ed372989.js";import{i as S,k as B}from"./PopupTemplate-63dce4d3.js";import{V as _,U as E}from"./request-7c0a9d4c.js";import{a as p,s as C}from"./Error-d97df89f.js";import{p as u,b as N}from"./string-feb899cf.js";import{r as L}from"./typedArrayUtil-96f93e5b.js";import{O as V}from"./MultiOriginJSONSupport-97bf66dd.js";import{w as O}from"./promiseUtils-ac1bd36f.js";import{T}from"./ensureType-348c3d61.js";import{o as A,r as k}from"./Extent-fd3ac910.js";import{b as D}from"./Layer-07a07202.js";import{i as K}from"./APIKeyMixin-b93c2049.js";import{p as G}from"./ArcGISService-cca20289.js";import{c as M,p as U,d as z,a as H}from"./OperationalLayer-a420b681.js";import{_ as J}from"./PortalLayer-d54f6a39.js";import{t as Q}from"./ScaleRangeLayer-24099455.js";import{E as W,L as F}from"./SceneService-fb2f6b30.js";import{o as v}from"./enumeration-49e09bda.js";import{y as w}from"./Field-b17a677d.js";import{s as X}from"./fieldProperties-1fb52610.js";import{c as j,d as Y,b as Z,a as ee}from"./PointCloudUniqueValueRenderer-d593fa6d.js";import{p as te}from"./popupUtils-3d5141e6.js";import"./nextTick-3ee5a785.js";import"./Clonable-5318ec31.js";import"./Collection-d9d92883.js";import"./Evented-e2ee9722.js";import"./SimpleObservable-04055e8d.js";import"./cast-73cfc253.js";import"./fieldUtils-66be74eb.js";import"./preload-helper-f8378b50.js";import"./geometry-d89d4a34.js";import"./Polyline-9d44200b.js";import"./typeUtils-2ccaf90d.js";import"./number-205e28e0.js";import"./locale-30120714.js";import"./Identifiable-876da2a8.js";import"./Loadable-c96deb83.js";import"./Promise-34cff6d6.js";import"./arcgisLayerUrl-9d6ab56c.js";import"./persistableUrlUtils-26091271.js";import"./TimeExtent-d2d7594c.js";import"./ElevationInfo-75e7bf35.js";import"./lengthUtils-bc8879ed.js";import"./opacityUtils-cc413a8c.js";import"./asyncUtils-f0fdc8c7.js";import"./layerUtils-a0871894.js";import"./Portal-172924b2.js";import"./PortalGroup-751b527f.js";import"./PortalUser-7f979a04.js";import"./PortalItem-a25335a3.js";import"./assets-2c955bed.js";import"./portalItemUtils-72345980.js";import"./projection-d7a5b449.js";import"./mathUtils-b3bee9e7.js";import"./mat4-1ee69bd5.js";import"./zscale-e06cee6f.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./HeightModelInfo-bad6650e.js";import"./uuid-73213768.js";import"./resourceUtils-cafe8307.js";import"./fieldType-b21f2e7f.js";import"./FieldsIndex-7c963fe9.js";import"./LegendOptions-8200d5f5.js";import"./Color-9f46ece8.js";import"./colorUtils-639f4d25.js";let c=class extends q{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const g=c;var b;let l=b=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[T],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],l.prototype,"requiredClearBits",void 0),r([o({type:[T],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],l.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],l.prototype,"type",void 0),l=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],l);const re=l;var I;let f=I=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new I({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=I=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const oe=f;var $;let d=$=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],d.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"values",void 0),d=$=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],d);const ie=d,se={key:"type",base:g,typeMap:{value:ie,bitfield:re,return:oe}};var x;let h=x=class extends j{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new x({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=x=r([y("esri.renderers.PointCloudRGBRenderer")],h);const ne=h,P={key:"type",base:j,typeMap:{"point-cloud-class-breaks":Y,"point-cloud-rgb":ne,"point-cloud-stretch":Z,"point-cloud-unique-value":ee},errorContext:"renderer"},R=X();let i=class extends W(G(M(J(Q(V(K(D))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new w;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new w({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){N("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=L(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(O).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=te(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(m=>m.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(m=>m.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new p("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=_(this.parsedUrl.path,`./statistics/${s.key}`);return E(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(m=>m.data)}throw new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(F.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(U)],i.prototype,"popupEnabled",void 0),r([o({type:B,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[se],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[w]})],i.prototype,"fields",void 0),r([o(R.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([A("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(R.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(z)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(H)],i.prototype,"legendEnabled",void 0),r([o({types:P,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:P},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([k("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([y("esri.layers.PointCloudLayer")],i);const wt=i;export{wt as default};
