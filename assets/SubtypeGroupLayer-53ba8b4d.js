import{_ as Y}from"./preload-helper-101896b7.js";import{e as i,y as o,a as x,u as ee,r as V,k as te,f as D}from"./Accessor-815cb0cf.js";import{j as L}from"./Collection-912f4315.js";import{s as re,a as h}from"./Error-781981d1.js";import{a as N}from"./HandleOwner-124247b4.js";import{l as ie}from"./loadAll-38268fb1.js";import{r as _,l as U,a as oe}from"./typedArrayUtil-74bbfd45.js";import{O as M}from"./MultiOriginJSONSupport-6a5e69d5.js";import{w as se,y as ne}from"./promiseUtils-28f2a985.js";import{l as ae,U as le}from"./reactiveUtils-31da19f9.js";import{t as P}from"./sql-596ae790.js";import{L as pe,V as ue}from"./request-b4e08038.js";import"./ensureType-125d327f.js";import{o as I,r as Q}from"./Extent-8fae2379.js";import{b as de}from"./Layer-84815c0a.js";import{i as ye}from"./APIKeyMixin-8bba595e.js";import{p as me}from"./ArcGISService-e14b4987.js";import{n as ce}from"./BlendLayer-f72967b1.js";import{o as he}from"./CustomParametersMixin-7c5495bd.js";import{a as fe}from"./EditBusLayer-b9bbb936.js";import{I as H,a as be,T as ge,R as ve,C as we,p as $e,y as Fe,d as Ie,f as Oe,m as Se,h as je,w as Te,b as Ee,g as _e,q as Ce,j as Le,F as xe}from"./FeatureLayerBase-139f11ce.js";import{c as Pe}from"./OperationalLayer-fb5eac0c.js";import{_ as Ae}from"./PortalLayer-1e83b5c3.js";import{p as De}from"./RefreshableLayer-ac9eee59.js";import{t as Ge}from"./ScaleRangeLayer-abd4cd2e.js";import{a as qe,v as Re}from"./TemporalLayer-c71a30dc.js";import{y as ke}from"./arcgisLayerUrl-90607db0.js";import{m as Ve,c as Ne,I as Ue,D as Me,p as Qe,v as He}from"./commonProperties-6a723db4.js";import{s as B}from"./fieldProperties-d497e07e.js";import{F as Be,c as Je}from"./fieldUtils-39eb4f5d.js";import{l as ze}from"./JSONSupport-2b897629.js";import{i as Ze}from"./Field-7770b57d.js";import{k as Ke}from"./PopupTemplate-a7832b3e.js";import{p as We,T as Xe,_ as Ye}from"./UniqueValueRenderer-aad2afaf.js";import{p as A}from"./jsonUtils-f26f043c.js";import{p as F,o as et}from"./string-75082bc6.js";import{s as tt}from"./Identifiable-f5397426.js";import{m as rt}from"./Loadable-6776e4d9.js";import{p as J}from"./FeatureTemplate-d52241a0.js";import{C as it,i as ot,a as st,u as nt,b as at}from"./labelingInfo-acb2aba2.js";import{x as z}from"./Query-4c66990d.js";import{p as lt}from"./popupUtils-9566e8f5.js";import{e as pt}from"./versionUtils-b0c51e6a.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./asyncUtils-5c97747c.js";import"./cast-f7d2a22f.js";import"./geometry-0d19f94b.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./jsonUtils-0607c004.js";import"./parser-527c5e80.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./mathUtils-15f63a45.js";import"./deprecate-da2b7904.js";import"./HeightModelInfo-0c04472c.js";import"./Clonable-6d5134c7.js";import"./TimeReference-afe9f4e7.js";import"./datetime-b6333958.js";import"./layerUtils-0d596ed5.js";import"./AttachmentQuery-527f7d40.js";import"./RelationshipQuery-9431dd85.js";import"./DataLayerSource-3a7a94c9.js";import"./enumeration-94b1319d.js";import"./fieldType-e429d020.js";import"./serviceCapabilitiesUtils-35f1791d.js";import"./Portal-0799d17c.js";import"./locale-30120714.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-092553f2.js";import"./PortalItem-9c70e5ea.js";import"./assets-fff829c9.js";import"./Promise-092442f7.js";import"./portalItemUtils-0c95d3a7.js";import"./projection-4083e235.js";import"./zscale-a617710a.js";import"./TimeExtent-202e4138.js";import"./persistableUrlUtils-5532b98d.js";import"./ElevationInfo-5862799c.js";import"./lengthUtils-40356f92.js";import"./opacityUtils-107b33de.js";import"./FieldsIndex-8c7b5df9.js";import"./number-5e819186.js";import"./ActionToggle-dc9b6fc6.js";import"./symbols-d9f90967.js";import"./CIMSymbol-2f4be01b.js";import"./Color-5e799d63.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./collectionUtils-5a99c1c0.js";import"./LegendOptions-540a8245.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-df772b72.js";import"./Graphic-f65f3c78.js";import"./jsonUtils-15ca15d7.js";import"./compilerUtils-024563a4.js";import"./jsonUtils-40aff029.js";import"./styleUtils-2aef9fa3.js";import"./DictionaryLoader-ceec73f4.js";import"./LRUCache-425021b3.js";import"./MemCache-9d81d118.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./labelUtils-75fd34dc.js";import"./defaultsJSON-b087dd4d.js";import"./FullTextSearch-da95615f.js";let b=class extends ze{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=Ze(e[r]);return t}writeDomains(e,t){var s;if(!e)return;const r={};for(const n of Object.keys(e))e[n]&&(r[n]=(s=e[n])==null?void 0:s.toJSON());t.domains=r}};i([o({type:Number,json:{write:!0}})],b.prototype,"code",void 0),i([o({type:Object,json:{write:!0}})],b.prototype,"defaultValues",void 0),i([o({json:{write:!0}})],b.prototype,"domains",void 0),i([I("domains")],b.prototype,"readDomains",null),i([Q("domains")],b.prototype,"writeDomains",null),i([o({type:String,json:{write:!0}})],b.prototype,"name",void 0),b=i([x("esri.layers.support.Subtype")],b);const ut=b,dt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],Z={key:"type",base:We,errorContext:"renderer",typeMap:{simple:A,"unique-value":Xe,"class-breaks":Ye}},G=B(),q=ee({types:Z});let yt=0;function S(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function mt(e){return new A({symbol:ct(e)})}function ct(e){switch(e){case"point":case"multipoint":return at.clone();case"polyline":return nt.clone();case"polygon":case"multipatch":return st.clone();default:return null}}function ht(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function K(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function ft(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},n=K(e,t);if(_(n)){const{defaultValues:a}=n;for(const p in a)s[p]=a[p]}return s[t.subtypeField]=e,new J({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const W="esri.layers.support.SubtypeSublayer";let l=class extends N(M(tt(rt))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${yt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:n}=this;let a;if(s){a=[];let p=0;s.forEach(({name:y,alias:m,editable:g,visible:v})=>{var j;if(!v)return;const d=(j=n==null?void 0:n.fields)==null?void 0:j.find(O=>O.name===y);if(!d)return;const f={name:y};let $=!1;m!==d.alias&&(f.alias=m,$=!0),g!==d.editable&&(f.editable=g,$=!0),a.push(f),$&&p++}),p===0&&a.length===s.length&&(a=null)}else a=F(e);a!=null&&a.length&&et(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:n,subtypeField:a}=e,p=n==null?void 0:n.find(v=>v.code===r),y=p==null?void 0:p.defaultValues,m=p==null?void 0:p.domains,g=[];for(const v of s){const d=v.clone(),{name:f}=d,$=t==null?void 0:t.find(T=>T.name===f);if(d.visible=!t||!!$,$){const{alias:T,editable:X}=$;T&&(d.alias=T),X===!1&&(d.editable=!1)}const j=(y==null?void 0:y[f])??null;d.defaultValue=f===a?r:j;const O=(m==null?void 0:m[f])??null;d.domain=f===a?null:O?O.type==="inherited"?d.domain:O.clone():null,g.push(d)}return g}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||re.getLogger(W).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Be(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?mt(e.geometryType):null}readRendererFromService(e,t,r){var y,m,g;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,n=q(s,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&ht(n,t.subtypeField)){const v=(m=n.uniqueValueInfos)==null?void 0:m.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));v&&(a=new A({symbol:v.symbol}))}else(n==null?void 0:n.type)!=="simple"||(g=n.visualVariables)!=null&&g.length||(a=n);return a}readRenderer(e,t,r){var a,p,y;const s=(p=(a=t==null?void 0:t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:p.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(m=>m.type!=="rotationInfo"))?void 0:q(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ft(this.subtypeCode,t)]}readTitleFromService(e,t){const r=K(this.subtypeCode,t);return _(r)?r.name:null}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw w("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:n}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:s,objectIdField:y,title:n}}return lt(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=H(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=P(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return dt.some(e=>this.originIdOf(e)===V.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const s=e.clone();return s.where=R(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const s=z.from(e)??r.createQuery();return _(e)&&(s.where=R(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([o({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([o({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([o({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([o({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([o({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([Q("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([o({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([o(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([o({type:be,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([o({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([o(S(F(Ve)))],l.prototype,"labelsVisible",void 0),i([o({type:[it],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ot},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([o({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([o(S(F(Ne)))],l.prototype,"legendEnabled",void 0),i([o({type:["show","hide"]})],l.prototype,"listMode",void 0),i([o((()=>{const e=F(Ue);return e.json.origins.service.read=!1,S(e)})())],l.prototype,"minScale",void 0),i([o((()=>{const e=F(Me);return e.json.origins.service.read=!1,S(e)})())],l.prototype,"maxScale",void 0),i([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([o()],l.prototype,"parent",void 0),i([o(S(F(Qe)))],l.prototype,"popupEnabled",void 0),i([o({type:Ke,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([o({types:Z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([I("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([I("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([o({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([o({type:[J],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([I("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([o({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([I("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([o({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([o({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([x(W)],l);const R=(e,t,r)=>{const s=new RegExp(`${t}=[0-9]`),n=`${t}=${r}`,a=U(e,"");return s.test(a)?a.replace(s,n):P(n,a)},w=e=>new h(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),E=l,c="SubtypeGroupLayer",bt="esri.layers.SubtypeGroupLayer";function k(e,t){return new h("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const C=B();let u=class extends ge(fe(ce(qe(Ge(De(me(Pe(Ae(M(he(ye(N(de))))))))))))){constructor(...e){super(...e),this._handles=new te,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(L.ofType(E)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(ae(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),le))}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=oe(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=_(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(se).then(async()=>{if(!this.url)throw new h("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new h("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>ve(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return we(this)}get parsedUrl(){const e=pe(this.url);return e!=null&&this.layerId!=null&&(e.path=ue(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ke(this.url,t):t}async addAttachment(e,t){return $e(this,e,t,c)}async updateAttachment(e,t,r){return Fe(this,e,t,r,c)}async applyEdits(e,t){return Ie(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await ne(Y(()=>import("./FeatureLayerSource-0653aaac.js"),["assets/FeatureLayerSource-0653aaac.js","assets/Accessor-815cb0cf.js","assets/typedArrayUtil-74bbfd45.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/string-75082bc6.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-28f2a985.js","assets/Error-781981d1.js","assets/ensureType-125d327f.js","assets/geometry-0d19f94b.js","assets/Extent-8fae2379.js","assets/JSONSupport-2b897629.js","assets/cast-f7d2a22f.js","assets/Polyline-40b9e769.js","assets/typeUtils-3bf84b36.js","assets/Graphic-f65f3c78.js","assets/PopupTemplate-a7832b3e.js","assets/Clonable-6d5134c7.js","assets/Collection-912f4315.js","assets/Evented-3dfb26f2.js","assets/SimpleObservable-729c9019.js","assets/fieldUtils-39eb4f5d.js","assets/preload-helper-101896b7.js","assets/enumeration-94b1319d.js","assets/number-5e819186.js","assets/locale-30120714.js","assets/ActionToggle-dc9b6fc6.js","assets/Identifiable-f5397426.js","assets/symbols-d9f90967.js","assets/CIMSymbol-2f4be01b.js","assets/Color-5e799d63.js","assets/colorUtils-639f4d25.js","assets/mathUtils-15f63a45.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-107b33de.js","assets/symbolLayerUtils3D-15190f75.js","assets/aaBoundingBox-5e14079b.js","assets/request-b4e08038.js","assets/persistableUrlUtils-5532b98d.js","assets/collectionUtils-5a99c1c0.js","assets/Portal-0799d17c.js","assets/Loadable-6776e4d9.js","assets/Promise-092442f7.js","assets/PortalGroup-d3a43002.js","assets/PortalUser-092553f2.js","assets/jsonUtils-15ca15d7.js","assets/TimeExtent-202e4138.js","assets/assetEditingSupport-2cebf928.js","assets/clientSideDefaults-ad9d2f09.js","assets/QueryEngineCapabilities-42e44ded.js","assets/defaultsJSON-b087dd4d.js","assets/QueryTask-fb05d7f5.js","assets/DataLayerSource-3a7a94c9.js","assets/Field-7770b57d.js","assets/fieldType-e429d020.js","assets/utils-14667ccd.js","assets/executeForIds-0df88006.js","assets/query-562d04e7.js","assets/normalizeUtils-53d1a4f1.js","assets/normalizeUtilsCommon-04cad10b.js","assets/utils-067ee6bc.js","assets/urlUtils-6a004888.js","assets/pbfQueryUtils-9730bd74.js","assets/pbf-c0fe6550.js","assets/OptimizedFeature-6cca5f48.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-e2b48f65.js","assets/zscale-a617710a.js","assets/Query-4c66990d.js","assets/FullTextSearch-da95615f.js","assets/executeQueryJSON-b8916532.js","assets/FeatureSet-a2f9f6a7.js","assets/featureConversionUtils-55a32b06.js","assets/aaBoundingRect-3cd21eb0.js","assets/arcgisLayerUrl-90607db0.js","assets/editsZScale-884a3138.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=H(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=P(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Oe(this,e,t,c)}async fetchRecomputedExtents(e){return Se(this,e,c)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this._sublayerLookup.get(r)}loadAll(){return ie(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return je(this,e,t,c)}async queryFeatures(e,t){const r=await this.load(),s=z.from(e)??r.createQuery(),n=U(s.outFields,[]);n.includes(this.subtypeField)||(n.push(this.subtypeField),s.outFields=n);const a=await r.source.queryFeatures(s,t);if(a!=null&&a.features)for(const p of a.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return a}async queryObjectIds(e,t){return Te(this,e,t,c)}async queryFeatureCount(e,t){return Ee(this,e,t,c)}async queryExtent(e,t){return _e(this,e,t,c)}async queryRelatedFeatures(e,t){return Ce(this,e,t,c)}async queryRelatedFeaturesCount(e,t){return Le(this,e,t,c)}write(e,t){var a;const{origin:r,layerContainerType:s,messages:n}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return n==null||n.push(k(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return n==null||n.push(k(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(n==null||n.push(new h("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&pt(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new h("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new h("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Je(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return xe(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([o({readOnly:!0})],u.prototype,"createQueryVersion",null),i([o({readOnly:!0})],u.prototype,"editingEnabled",null),i([o({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([o({...C.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([o(C.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([o(He)],u.prototype,"id",void 0),i([o({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([o({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([o(C.outFields)],u.prototype,"outFields",void 0),i([o({readOnly:!0})],u.prototype,"parsedUrl",null),i([o()],u.prototype,"source",null),i([o({type:[ut],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([o({type:L.ofType(E),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:n})=>{const a=new E({subtypeCode:n});return a.read(t,r),a});return new(L.ofType(E))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),n=V.PORTAL_ITEM;let a=!0;if(D(s)===n&&D(r.origin)>n){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([o({type:Re})],u.prototype,"timeInfo",void 0),i([o({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([I("service","title",["name"])],u.prototype,"readTitleFromService",null),i([o({json:{read:!1}})],u.prototype,"type",void 0),u=i([x(bt)],u);const Oi=u;export{Oi as default};
