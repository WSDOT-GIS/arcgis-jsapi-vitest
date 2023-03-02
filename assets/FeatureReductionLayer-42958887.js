import{e as l,y as a,a as v,u as pe}from"./Accessor-815cb0cf.js";import"./ensureType-125d327f.js";import{r as de,t as Z}from"./typedArrayUtil-74bbfd45.js";import{a as D,s as Te}from"./Error-781981d1.js";import{l as V}from"./JSONSupport-2b897629.js";import{p as c,o as N,a as ce}from"./string-75082bc6.js";import{n as fe,a as me}from"./jsonUtils-0607c004.js";import{n as Ae}from"./geometry-0d19f94b.js";import{T as Le}from"./TimeExtent-202e4138.js";import{a as ye}from"./cast-f7d2a22f.js";import{x as Me}from"./Query-4c66990d.js";import{i as Ne}from"./Clonable-6d5134c7.js";import{k as he}from"./PopupTemplate-a7832b3e.js";import{T as be,b as ve,j as ke,a as _}from"./UniqueValueRenderer-aad2afaf.js";import{o as q,p as P,b as we}from"./jsonUtils-f26f043c.js";import{M as ge,D as Ce}from"./symbols-d9f90967.js";import{o as te}from"./enumeration-94b1319d.js";import{r as k,o as L}from"./Extent-8fae2379.js";import{m as xe,p as Se}from"./commonProperties-6a723db4.js";import{C as $e}from"./labelingInfo-acb2aba2.js";import{o as z}from"./screenUtils-7afeb41c.js";import{e as ie}from"./sizeVariableUtils-d4870b0d.js";var H;const G=new ye({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),O=new ye({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let w=H=class extends V{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:o,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:d}=this;return new Me({geometry:c(t),objectIds:c(s),spatialRelationship:i,timeExtent:c(r),where:o,units:n,distance:d,...e})}clone(){const{where:e,geometry:o,spatialRelationship:t,timeExtent:i,objectIds:r,units:s,distance:n}=this;return new H({geometry:c(o),objectIds:c(r),spatialRelationship:t,timeExtent:c(i),where:e,units:s,distance:n})}};l([a({type:String,json:{write:!0}})],w.prototype,"where",void 0),l([a({types:Ae,json:{write:!0}})],w.prototype,"geometry",void 0),l([a({type:G.apiValues,json:{name:"spatialRel",read:{reader:G.read},write:{allowNull:!1,writer:G.write,overridePolicy(){return{enabled:de(this.geometry)}}}}})],w.prototype,"spatialRelationship",void 0),l([a({type:Number,json:{write:{overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],w.prototype,"distance",void 0),l([a({type:[Number],json:{write:!0}})],w.prototype,"objectIds",void 0),l([a({type:O.apiValues,json:{read:O.read,write:{writer:O.write,overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],w.prototype,"units",void 0),l([a({type:Le,json:{write:!0}})],w.prototype,"timeExtent",void 0),w=H=l([v("esri.layers.support.FeatureFilter")],w);const Ge=w;var J;const se={read:{reader:fe},write:{writer:me,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},re={read:{reader:fe},write:{writer:me,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},oe={name:"showExcludedLabels",default:!0};let E=J=class extends V{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,o){var i,r;const t=super.write(e,o);if(o!=null&&o.origin){if(t.filter){const s=Object.keys(t.filter);if(s.length>1||s[0]!=="where")return(i=o.messages)==null||i.push(new D("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:o.layer,effect:this})),null}if("showExcludedLabels"in t)return(r=o.messages)==null||r.push(new D("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:o.layer,effect:this})),null}return t}clone(){return new J({filter:de(this.filter)?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};l([a({type:Ge,json:{write:{allowNull:!0,writer(e,o,t,i){const r=e==null?void 0:e.write({},i);r&&Object.keys(r).length!==0?N(t,r,o):N(t,null,o)}}}})],E.prototype,"filter",void 0),l([a({json:{write:!0,origins:{"web-map":se,"portal-item":se}}})],E.prototype,"includedEffect",void 0),l([a({json:{write:!0,origins:{"web-map":re,"portal-item":re}}})],E.prototype,"excludedEffect",void 0),l([a({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":oe,"portal-item":oe}}})],E.prototype,"excludedLabelsVisible",void 0),E=J=l([v("esri.layers.support.FeatureEffect")],E);const Oe=E,ne={write:{allowNull:!0}},Et=e=>{let o=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return l([a({type:Oe,json:{origins:{"web-map":ne,"portal-item":ne}}})],o.prototype,"featureEffect",void 0),o=l([v("esri.layers.mixins.FeatureEffectLayer")],o),o};let j=class extends Ne(V){constructor(o){super(o),this.expression=null,this.title=null,this.returnType=null}};l([a({type:String,json:{write:!0}})],j.prototype,"expression",void 0),l([a({type:String,json:{write:!0}})],j.prototype,"title",void 0),l([a({type:String,json:{write:!0}})],j.prototype,"returnType",void 0),j=l([v("esri.layers.support.ExpressionInfo")],j);const ee=j;var K;let g=K=class extends V{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new K({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:c(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};l([a({type:Boolean,json:{write:!0}})],g.prototype,"isAutoGenerated",void 0),l([a({type:String,json:{write:!0}})],g.prototype,"name",void 0),l([a({type:String,json:{write:!0}})],g.prototype,"alias",void 0),l([a({type:String,json:{write:!0}})],g.prototype,"onStatisticField",void 0),l([a({type:ee,json:{write:!0}})],g.prototype,"onStatisticExpression",void 0),l([a({type:String,json:{write:!0}})],g.prototype,"statisticType",void 0),g=K=l([v("esri.layers.support.AggregateField")],g);const R=g;let S=class extends V{constructor(){super(...arguments),this.type=null}};l([a({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],S.prototype,"type",void 0),S=l([v("esri.layers.support.FeatureReduction")],S);var Q;const U=pe({types:ge}),Ue="esri.layers.support.FeatureReductionBinning";let b=Q=class extends S{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,o,t){const i=e.filter(r=>r.statisticType!=="avg_angle").map(r=>r.toJSON());N(t,i,o)}readRenderer(e,o,t){var r;const i=(r=o.drawingInfo)==null?void 0:r.renderer;return i?q(i,o,t)??void 0:o.defaultSymbol?o.types&&o.types.length?new be({defaultSymbol:U(o.defaultSymbol,o,t),field:o.typeIdField,uniqueValueInfos:o.types.map(s=>({id:s.id,symbol:U(s.symbol,s,t)}))}):new P({symbol:U(o.defaultSymbol,o,t)}):null}clone(){return new Q({fields:c(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:c(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:c(this.popupTemplate),renderer:c(this.renderer)})}};l([te({binning:"binning"})],b.prototype,"type",void 0),l([te({geohash:"geohash"})],b.prototype,"binType",void 0),l([a({type:Number,range:{min:1,max:9},json:{write:!0}})],b.prototype,"fixedBinLevel",void 0),l([a({type:[$e],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],b.prototype,"labelingInfo",void 0),l([a(xe)],b.prototype,"labelsVisible",void 0),l([a({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],b.prototype,"maxScale",void 0),l([a(Se)],b.prototype,"popupEnabled",void 0),l([a({type:he,json:{name:"popupInfo",write:!0}})],b.prototype,"popupTemplate",void 0),l([a({type:[R],json:{write:!0}})],b.prototype,"fields",void 0),l([k("fields")],b.prototype,"writeFields",null),l([a({types:we,json:{write:{target:"drawingInfo.renderer"}}})],b.prototype,"renderer",void 0),l([L("renderer",["drawingInfo.renderer"])],b.prototype,"readRenderer",null),b=Q=l([v(Ue)],b);const Ee=b;var W;const B=pe({types:ge}),Be="esri.layers.support.FeatureReductionCluster";function le(e){var o;return e.type==="simple"&&!((o=e.visualVariables)!=null&&o.length)}let p=W=class extends V{constructor(e){super(e),this.type="cluster",this.clusterRadius=z("80px"),this.clusterMinSize=z("12px"),this.clusterMaxSize=z("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,o,t){var r,s;const i=(r=o.drawingInfo)==null?void 0:r.renderer;return(s=i==null?void 0:i.authoringInfo)!=null&&s.isAutoGenerated?null:i?le(i)?null:q(i,o,t)??void 0:o.defaultSymbol?o.types&&o.types.length?new be({defaultSymbol:B(o.defaultSymbol,o,t),field:o.typeIdField,uniqueValueInfos:o.types.map(n=>({id:n.id,symbol:B(n.symbol,n,t)}))}):new P({symbol:B(o.defaultSymbol,o,t)}):null}readSymbol(e,o,t){var r,s,n;const i=(r=o.drawingInfo)==null?void 0:r.renderer;return(s=i==null?void 0:i.authoringInfo)!=null&&s.isAutoGenerated?null:i&&le(i)?(n=q(i,o,t))==null?void 0:n.symbol:null}writeSymbol(e,o,t,i){var s,n;const r=(n=(s=this.renderer)==null?void 0:s.authoringInfo)==null?void 0:n.isAutoGenerated;if(!this.renderer||r){const d=new P({symbol:e});o.drawingInfo={renderer:d.write({},i)}}}writeFields(e,o,t){const i=e.filter(r=>r.statisticType!=="avg_angle").map(r=>r.toJSON());N(t,i,o)}readFields(e,o,t){return e.filter(i=>!i.isAutoGenerated).map(i=>R.fromJSON(i))}clone(){return new W({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:c(this.labelingInfo),labelsVisible:this.labelsVisible,fields:c(this.fields),maxScale:this.maxScale,renderer:c(this.renderer),symbol:c(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:c(this.popupTemplate)})}};l([a({type:["cluster"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),l([a({type:Number,cast:e=>e==="auto"?e:z(e),json:{write:!0}})],p.prototype,"clusterRadius",void 0),l([a({type:Number,cast:z,json:{write:!0}})],p.prototype,"clusterMinSize",void 0),l([a({type:Number,cast:z,json:{write:!0}})],p.prototype,"clusterMaxSize",void 0),l([a({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],p.prototype,"maxScale",void 0),l([a(Se)],p.prototype,"popupEnabled",void 0),l([a({type:he,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],p.prototype,"popupTemplate",void 0),l([a({types:we,json:{write:{target:"drawingInfo.renderer"}}})],p.prototype,"renderer",void 0),l([L("renderer",["drawingInfo.renderer"])],p.prototype,"readRenderer",null),l([a({types:Ce})],p.prototype,"symbol",void 0),l([L("symbol",["drawingInfo.renderer"])],p.prototype,"readSymbol",null),l([k("symbol")],p.prototype,"writeSymbol",null),l([a({type:[$e],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],p.prototype,"labelingInfo",void 0),l([a(xe)],p.prototype,"labelsVisible",void 0),l([a({type:[R],json:{write:!0}})],p.prototype,"fields",void 0),l([k("fields")],p.prototype,"writeFields",null),l([L("fields")],p.prototype,"readFields",null),p=W=l([v(Be)],p);const Re=p;var X;let M=X=class extends S{constructor(e){super(e),this.type="selection"}clone(){return new X}};l([a({type:["selection"]})],M.prototype,"type",void 0),M=X=l([v("esri.layers.support.FeatureReductionSelection")],M);const ae=M,ue={key:"type",base:S,typeMap:{cluster:Re,binning:Ee}},De={types:{key:"type",base:S,typeMap:{selection:ae,cluster:Re,binning:Ee}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:ue},"portal-item":{types:ue},"web-scene":{types:{key:"type",base:S,typeMap:{selection:ae}}}}}},I={Base64:0,Hex:1,String:2,Raw:3},F=8,Ie=(1<<F)-1;function x(e,o){const t=(65535&e)+(65535&o);return(e>>16)+(o>>16)+(t>>16)<<16|65535&t}function qe(e){const o=[];for(let t=0,i=e.length*F;t<i;t+=F)o[t>>5]|=(e.charCodeAt(t/F)&Ie)<<t%32;return o}function Pe(e){const o=[];for(let t=0,i=32*e.length;t<i;t+=F)o.push(String.fromCharCode(e[t>>5]>>>t%32&Ie));return o.join("")}function He(e){const o="0123456789abcdef",t=[];for(let i=0,r=4*e.length;i<r;i++)t.push(o.charAt(e[i>>2]>>i%4*8+4&15)+o.charAt(e[i>>2]>>i%4*8&15));return t.join("")}function Je(e){const o="=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=[];for(let r=0,s=4*e.length;r<s;r+=3){const n=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let d=0;d<4;d++)8*r+6*d>32*e.length?i.push(o):i.push(t.charAt(n>>6*(3-d)&63))}return i.join("")}function Ke(e,o){return e<<o|e>>>32-o}function C(e,o,t,i,r,s){return x(Ke(x(x(o,e),x(i,s)),r),t)}function f(e,o,t,i,r,s,n){return C(o&t|~o&i,e,o,r,s,n)}function m(e,o,t,i,r,s,n){return C(o&i|t&~i,e,o,r,s,n)}function y(e,o,t,i,r,s,n){return C(o^t^i,e,o,r,s,n)}function h(e,o,t,i,r,s,n){return C(t^(o|~i),e,o,r,s,n)}function Qe(e,o){e[o>>5]|=128<<o%32,e[14+(o+64>>>9<<4)]=o;let t=1732584193,i=-271733879,r=-1732584194,s=271733878;for(let n=0;n<e.length;n+=16){const d=t,u=i,Ve=r,_e=s;t=f(t,i,r,s,e[n+0],7,-680876936),s=f(s,t,i,r,e[n+1],12,-389564586),r=f(r,s,t,i,e[n+2],17,606105819),i=f(i,r,s,t,e[n+3],22,-1044525330),t=f(t,i,r,s,e[n+4],7,-176418897),s=f(s,t,i,r,e[n+5],12,1200080426),r=f(r,s,t,i,e[n+6],17,-1473231341),i=f(i,r,s,t,e[n+7],22,-45705983),t=f(t,i,r,s,e[n+8],7,1770035416),s=f(s,t,i,r,e[n+9],12,-1958414417),r=f(r,s,t,i,e[n+10],17,-42063),i=f(i,r,s,t,e[n+11],22,-1990404162),t=f(t,i,r,s,e[n+12],7,1804603682),s=f(s,t,i,r,e[n+13],12,-40341101),r=f(r,s,t,i,e[n+14],17,-1502002290),i=f(i,r,s,t,e[n+15],22,1236535329),t=m(t,i,r,s,e[n+1],5,-165796510),s=m(s,t,i,r,e[n+6],9,-1069501632),r=m(r,s,t,i,e[n+11],14,643717713),i=m(i,r,s,t,e[n+0],20,-373897302),t=m(t,i,r,s,e[n+5],5,-701558691),s=m(s,t,i,r,e[n+10],9,38016083),r=m(r,s,t,i,e[n+15],14,-660478335),i=m(i,r,s,t,e[n+4],20,-405537848),t=m(t,i,r,s,e[n+9],5,568446438),s=m(s,t,i,r,e[n+14],9,-1019803690),r=m(r,s,t,i,e[n+3],14,-187363961),i=m(i,r,s,t,e[n+8],20,1163531501),t=m(t,i,r,s,e[n+13],5,-1444681467),s=m(s,t,i,r,e[n+2],9,-51403784),r=m(r,s,t,i,e[n+7],14,1735328473),i=m(i,r,s,t,e[n+12],20,-1926607734),t=y(t,i,r,s,e[n+5],4,-378558),s=y(s,t,i,r,e[n+8],11,-2022574463),r=y(r,s,t,i,e[n+11],16,1839030562),i=y(i,r,s,t,e[n+14],23,-35309556),t=y(t,i,r,s,e[n+1],4,-1530992060),s=y(s,t,i,r,e[n+4],11,1272893353),r=y(r,s,t,i,e[n+7],16,-155497632),i=y(i,r,s,t,e[n+10],23,-1094730640),t=y(t,i,r,s,e[n+13],4,681279174),s=y(s,t,i,r,e[n+0],11,-358537222),r=y(r,s,t,i,e[n+3],16,-722521979),i=y(i,r,s,t,e[n+6],23,76029189),t=y(t,i,r,s,e[n+9],4,-640364487),s=y(s,t,i,r,e[n+12],11,-421815835),r=y(r,s,t,i,e[n+15],16,530742520),i=y(i,r,s,t,e[n+2],23,-995338651),t=h(t,i,r,s,e[n+0],6,-198630844),s=h(s,t,i,r,e[n+7],10,1126891415),r=h(r,s,t,i,e[n+14],15,-1416354905),i=h(i,r,s,t,e[n+5],21,-57434055),t=h(t,i,r,s,e[n+12],6,1700485571),s=h(s,t,i,r,e[n+3],10,-1894986606),r=h(r,s,t,i,e[n+10],15,-1051523),i=h(i,r,s,t,e[n+1],21,-2054922799),t=h(t,i,r,s,e[n+8],6,1873313359),s=h(s,t,i,r,e[n+15],10,-30611744),r=h(r,s,t,i,e[n+6],15,-1560198380),i=h(i,r,s,t,e[n+13],21,1309151649),t=h(t,i,r,s,e[n+4],6,-145523070),s=h(s,t,i,r,e[n+11],10,-1120210379),r=h(r,s,t,i,e[n+2],15,718787259),i=h(i,r,s,t,e[n+9],21,-343485551),t=x(t,d),i=x(i,u),r=x(r,Ve),s=x(s,_e)}return[t,i,r,s]}function je(e,o=I.Hex){const t=o||I.Base64,i=Qe(qe(e),e.length*F);switch(t){case I.Raw:return i;case I.Hex:return He(i);case I.String:return Pe(i);case I.Base64:return Je(i)}}var Y;let A=Y=class extends ve{writeLevels(e,o,t){for(const i in e){const r=this.levels[i];return void(o.stops=r)}}clone(){return new Y({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:ie(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:ie(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:c(this.levels)})}};l([a()],A.prototype,"levels",void 0),l([k("levels")],A.prototype,"writeLevels",null),A=Y=l([v("esri.views.2d.engine.LevelDependentSizeVariable")],A);const We=Te.getLogger("esri.views.2d.layers.support.clusterUtils");ce.add("esri-cluster-arcade-enabled",!0);const Xe=ce("esri-cluster-arcade-enabled"),Ye=(e,o,t,i,r)=>{const s=o.clone();if(!et(s))return s;if(s.authoringInfo||(s.authoringInfo=new ke),s.authoringInfo.isAutoGenerated=!0,"visualVariables"in s){const n=(s.visualVariables||[]).filter(u=>u.valueExpression!=="$view.scale"),d=ze(n);n.forEach(u=>{u.type==="rotation"?u.field?u.field=$(e,u.field,"avg_angle","number"):u.valueExpression&&(u.field=T(e,u.valueExpression,"avg_angle","number"),u.valueExpression=null):u.normalizationField?(u.field=$(e,u.field,"avg_norm","number",u.normalizationField),u.normalizationField=null):u.field?u.field=$(e,u.field,"avg","number"):u.valueExpression&&(u.field=T(e,u.valueExpression,"avg","number"),u.valueExpression=null)}),Z(d)&&!Ze(n)&&r&&(n.push(Fe(t,i)),s.dynamicClusterSize=!0),s.visualVariables=n}switch(s.type){case"simple":break;case"pie-chart":for(const n of s.attributes)n.field?n.field=$(e,n.field,"sum","number"):n.valueExpression&&(n.field=T(e,n.valueExpression,"sum","number"),n.valueExpression=null);break;case"unique-value":s.field?s.field=$(e,s.field,"mode","string"):s.valueExpression&&(s.field=T(e,s.valueExpression,"mode","string"),s.valueExpression=null);break;case"class-breaks":s.normalizationField?(s.field=$(e,s.field,"avg_norm","number",s.normalizationField),s.normalizationField=null):s.field?s.field=$(e,s.field,"avg","number"):s.valueExpression&&(s.field=T(e,s.valueExpression,"avg","number"),s.valueExpression=null)}return s},ze=e=>{for(const o of e)if(o.type==="size")return o;return null};function jt(e,o,t){const i=e.clone();let r=!1;if("visualVariables"in i){const s=(i.visualVariables||[]).filter(d=>d.valueExpression!=="$view.scale"),n=ze(s);Z(n)&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.push(Fe(o,t)),i.dynamicClusterSize=!0,r=!0)}return{renderer:i,didInject:r}}const Ze=e=>{for(const o of e)if(o.field==="cluster_count")return!0;return!1},Fe=(e,o)=>{const t=[new _({value:0,size:0}),new _({value:1})];if(Z(o))return new ve({field:"cluster_count",stops:[...t,new _({value:2,size:0})]});const i=Object.keys(o).reduce((r,s)=>({...r,[s]:[...t,new _({value:Math.max(2,o[s].minValue),size:e.clusterMinSize}),new _({value:Math.max(3,o[s].maxValue),size:e.clusterMaxSize})]}),{});return new A({field:"cluster_count",levels:i})},et=e=>{const o=t=>We.error(new D("Unsupported-renderer",t,{renderer:e}));switch(e.type){case"unique-value":if(e.field2||e.field3)return o("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const t=e.normalizationType;if(t!=="field")return o(`FeatureReductionCluster does not support a normalizationType of ${t}`),!1}break;case"simple":case"pie-chart":break;default:return o(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!Xe){if("valueExpression"in e&&e.valueExpression)return o("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(t=>!(!("valueExpression"in t)||!t.valueExpression)))return o("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function tt(e,o,t){switch(e){case"sum":return`cluster_sum_${o}`;case"avg":case"avg_angle":return`cluster_avg_${o}`;case"mode":return`cluster_type_${o}`;case"avg_norm":{const i=t,r="field",s=o.toLowerCase()+",norm:"+r+","+i.toLowerCase();return"cluster_avg_"+je(s)}}}function T(e,o,t,i){const r=je(o),s=t==="mode"?`cluster_type_${r}`:t==="sum"?`cluster_sum_${r}`:`cluster_avg_${r}`;return e.some(n=>n.name===s)||e.push(new R({name:s,isAutoGenerated:!0,onStatisticExpression:new ee({expression:o,returnType:i}),statisticType:t})),s}function $(e,o,t,i,r){if(o==="cluster_count"||e.some(n=>n.name===o))return o;const s=tt(t,o,r);return e.some(n=>n.name===s)||(t==="avg_norm"?e.push(new R({name:s,isAutoGenerated:!0,onStatisticExpression:new ee({expression:`$feature.${o} / $feature.${r}`,returnType:i}),statisticType:"avg"})):e.push(new R({name:s,isAutoGenerated:!0,onStatisticField:o,statisticType:t}))),s}const zt=e=>{let o=class extends e{constructor(...t){super(...t),this.own(this.watch("renderer",()=>{if(this.featureReduction){const i=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",i)}},!0))}set featureReduction(t){const i=this._normalizeFeatureReduction(t);this._set("featureReduction",i)}set renderer(t){}_normalizeFeatureReduction(t){var d;if((t==null?void 0:t.type)!=="cluster")return t;const i=t.clone(),r=[new R({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],s=(i.fields??[]).filter(u=>!u.isAutoGenerated);if(t.renderer&&!((d=t.renderer.authoringInfo)!=null&&d.isAutoGenerated))return i.fields=[...r,...s],i;if(t.symbol)return i.fields=[...r,...s],i.renderer=null,i;if(!this.renderer)return t;const n=Ye(r,this.renderer,t,null,!1);return i.fields=[...r,...s],i.renderer=n,i}};return l([a(De)],o.prototype,"featureReduction",null),o=l([v("esri.layers.mixins.FeatureReductionLayer")],o),o};export{ae as a,Fe as b,I as c,Ye as d,ze as f,et as g,jt as m,zt as n,Et as p,S as t,Oe as w,je as x,Ge as y};
