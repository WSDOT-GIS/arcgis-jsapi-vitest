import{S as K,t as F,r as $}from"./typedArrayUtil-74bbfd45.js";import{s as R,a as m}from"./Error-781981d1.js";import{x as f,E as D}from"./promiseUtils-28f2a985.js";import{i as w}from"./originUtils-1469eeaf.js";import q from"./FeatureLayer-58755fcf.js";import{d as z}from"./arcgisLayerUrl-0e1d3d82.js";import{r as M}from"./fetchService-57514640.js";import{f as U,y as Y}from"./layerUtils-7438cb6b.js";import{b as _}from"./Portal-2a7c40a2.js";import j from"./PortalItem-051eae04.js";import{o as v}from"./jsonContext-bceec2ad.js";import{i as c,a as B,c as g,u as n}from"./portalItemUtils-2695e0b3.js";import"./string-75082bc6.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./preload-helper-f8378b50.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./ensureType-125d327f.js";import"./PopupTemplate-c559259f.js";import"./Clonable-6d5134c7.js";import"./Collection-912f4315.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./Extent-8fae2379.js";import"./fieldUtils-e6cf5e5f.js";import"./geometry-0d19f94b.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./enumeration-94b1319d.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./UniqueValueRenderer-206098f5.js";import"./symbols-df54e69f.js";import"./CIMSymbol-e48b86be.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";import"./mathUtils-15f63a45.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./request-ae7029ea.js";import"./persistableUrlUtils-73be900a.js";import"./collectionUtils-5a99c1c0.js";import"./LegendOptions-540a8245.js";import"./reactiveUtils-31da19f9.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6b4a3e98.js";import"./Graphic-3183b8e9.js";import"./jsonUtils-15ca15d7.js";import"./compilerUtils-024563a4.js";import"./lengthUtils-40356f92.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-c84fcbac.js";import"./jsonUtils-053e809e.js";import"./styleUtils-9f3a9a37.js";import"./jsonUtils-ee8d96d0.js";import"./DictionaryLoader-37853497.js";import"./LRUCache-425021b3.js";import"./MemCache-9d81d118.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-6a5e69d5.js";import"./sql-af7b41f8.js";import"./FeatureLayerBase-4839e0f4.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";import"./HeightModelInfo-0c04472c.js";import"./commonProperties-64b016df.js";import"./TimeExtent-202e4138.js";import"./ElevationInfo-91b8239c.js";import"./TimeReference-afe9f4e7.js";import"./datetime-b6333958.js";import"./AttachmentQuery-527f7d40.js";import"./Query-4c66990d.js";import"./DataLayerSource-3a7a94c9.js";import"./FullTextSearch-da95615f.js";import"./RelationshipQuery-9431dd85.js";import"./serviceCapabilitiesUtils-18a2cf01.js";import"./Layer-974413c8.js";import"./HandleOwner-124247b4.js";import"./workers-8153041b.js";import"./Connection-59240e9d.js";import"./Queue-687500af.js";import"./assets-01239caf.js";import"./intl-b6f3ccd9.js";import"./messages-dc0c80a1.js";import"./editsZScale-884a3138.js";import"./queryZScale-e2b48f65.js";import"./zscale-a617710a.js";import"./FeatureSet-736831f6.js";import"./APIKeyMixin-8bba595e.js";import"./ArcGISService-cdf8a9a9.js";import"./BlendLayer-f72967b1.js";import"./jsonUtils-0607c004.js";import"./parser-527c5e80.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./CustomParametersMixin-7c5495bd.js";import"./EditBusLayer-b9bbb936.js";import"./FeatureReductionLayer-1c633e04.js";import"./labelingInfo-a45c32d0.js";import"./labelUtils-75fd34dc.js";import"./defaultsJSON-b087dd4d.js";import"./OperationalLayer-80c22541.js";import"./OrderedLayer-0495accc.js";import"./PortalLayer-d601e363.js";import"./asyncUtils-5c97747c.js";import"./RefreshableLayer-ac9eee59.js";import"./ScaleRangeLayer-abd4cd2e.js";import"./TemporalLayer-4e484055.js";import"./FeatureTemplate-d52241a0.js";import"./FeatureType-f3879578.js";import"./fieldProperties-eab34f4c.js";import"./FieldsIndex-9f1d87a4.js";import"./versionUtils-47bcdca9.js";import"./styleUtils-023b7cfa.js";import"./TopFeaturesQuery-bceb40dd.js";import"./popupUtils-2e46f095.js";import"./projection-319bc7cc.js";const C=R.getLogger("esri.layers.FeatureLayer"),d="Feature Service";function u(t,r){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${r}`}function E(t,r){if(r.type!==d)throw new m("feature-layer:portal-item-wrong-type",u(t,`should have portal item of type "${d}"`))}async function J(t){if(await t.load(),U(t))throw new m("feature-layer:save",u(t,"using an in-memory source cannot be saved to a portal item"))}function G(t,r){let a=(t.messages??[]).filter(({type:o})=>o==="error").map(({name:o,message:i,details:e})=>new m(o,i,e));if(r!=null&&r.ignoreUnsupported&&(a=a.filter(({name:o})=>o!=="layer:unsupported"&&o!=="symbol:unsupported"&&o!=="symbol-layer:unsupported"&&o!=="property:unsupported"&&o!=="url:unsupported")),a.length>0)throw new m("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}async function h(t,r,a){"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const o=t.write({},r);return G(r,a),o}function N(t){const{layer:r,layerJSON:a}=t;return r.isTable?{layers:[],tables:[a]}:{layers:[a],tables:[]}}function b(t){c(t,n.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((r,a,o)=>o.indexOf(r)===a))}function H(t){const r=t.portalItem;if(!r)throw C.error("save: requires the portalItem property to be set"),new m("feature-layer:portal-item-not-set",u(t,"requires the portalItem property to be set"));if(!r.loaded)throw new m("feature-layer:portal-item-not-loaded",u(t,"cannot be saved to a portal item that does not exist or is inaccessible"));E(t,r)}async function O(t,r){return/\/\d+\/?$/.test(t.url??"")?N(r[0]):k(t,r)}async function k(t,r){const{layer:{url:a,customParameters:o,apiKey:i}}=r[0];let e=await t.fetchData("json");e&&e.layers!=null&&e.tables!=null||(e=await Q(e,{url:a??"",customParameters:o,apiKey:i},r.map(p=>p.layer.layerId)));for(const p of r)P(p.layer,p.layerJSON,e);return e}async function Q(t,r,a){var o,i;t||(t={}),(o=t).layers||(o.layers=[]),(i=t).tables||(i.tables=[]);const{url:e,customParameters:p,apiKey:s}=r,{serviceJSON:l,layersJSON:y}=await M(e,{customParameters:p,apiKey:s}),S=x(t.layers,l.layers,a),I=x(t.tables,l.tables,a);t.layers=S.itemResources,t.tables=I.itemResources;const T=[...S.added,...I.added],L=y?[...y.layers,...y.tables]:[];return await V(t,T,e,L),t}function x(t,r,a){const o=K(t,r,(e,p)=>e.id===p.id);t=t.filter(e=>!o.removed.some(p=>p.id===e.id));const i=o.added.map(({id:e})=>({id:e}));return i.forEach(({id:e})=>{t.push({id:e})}),{itemResources:t,added:i.filter(({id:e})=>!a.includes(e))}}async function V(t,r,a,o){const i=r.map(({id:e})=>new q({url:a,layerId:e,sourceJSON:o.find(({id:p})=>p===e)}));await D(i.map(e=>e.load())),i.forEach(e=>{const{layerId:p,loaded:s,defaultPopupTemplate:l}=e;!s||F(l)||P(e,{id:p,popupInfo:l.toJSON()},t)})}function P(t,r,a){t.isTable?A(a.tables,r):A(a.layers,r)}function A(t,r){if(!t)return;const a=t.findIndex(({id:o})=>o===r.id);a===-1?t.push(r):t[a]=r}function W(t){const{portalItem:r}=t;return Y(t)&&!t.dynamicDataSource&&!!(r!=null&&r.loaded)&&r.type===d}async function X(t){if(!(t!=null&&t.length))throw new m("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(t.map(o=>o.load()));for(const o of t)if(!W(o))throw new m("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${u(o,"does not conform")}`,{layer:o});const r=t.map(o=>o.portalItem.id);if(new Set(r).size>1)throw new m("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const a=t.map(o=>o.layerId);if(new Set(a).size!==a.length)throw new m("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Z(t,r){var a,o;let i=j.from(r);return i.id&&(i=i.clone(),i.id=null),(a=i).type??(a.type=d),(o=i).portal??(o.portal=_.getDefault()),E(t,i),i}async function tt(t,r){const{url:a,layerId:o,title:i,fullExtent:e,isTable:p}=t,s=z(a),l=$(s)&&s.serverType==="FeatureServer";r.url=l?a:`${a}/${o}`,r.title||(r.title=i),r.extent=null,!p&&$(e)&&(r.extent=await B(e)),g(r,n.METADATA),g(r,n.MULTI_LAYER),c(r,n.SINGLE_LAYER),p&&c(r,n.TABLE),b(r)}async function rt(t,r,a){var i;const o=t.portal;await(o==null?void 0:o.signIn()),await((i=o==null?void 0:o.user)==null?void 0:i.addItem({item:t,data:r,folder:a==null?void 0:a.folder}))}const No=f(ot);async function ot(t,r){await J(t),H(t);const a=t.portalItem,o=v(a),i=await h(t,o,r),e=await O(a,[{layer:t,layerJSON:i}]);return b(a),await a.update({data:e}),w(o),a}const Oo=f(async(t,r)=>{await X(t);const a=t[0].portalItem,o=v(a),i=await Promise.all(t.map(p=>h(p,o,r))),e=await O(a,t.map((p,s)=>({layer:p,layerJSON:i[s]})));return b(a),await a.update({data:e}),await Promise.all(t.slice(1).map(p=>p.portalItem.reload())),w(o),a.clone()}),Po=f(at);async function at(t,r,a){await J(t);const o=Z(t,r),i=v(o),e=N({layer:t,layerJSON:await h(t,i,a)});return await tt(t,o),await rt(o,e,a),t.portalItem=o,w(i),o}export{No as save,Oo as saveAll,Po as saveAs};
