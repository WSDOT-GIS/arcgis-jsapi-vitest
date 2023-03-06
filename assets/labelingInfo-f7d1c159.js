import{s as N,a as I}from"./Error-d97df89f.js";import{p as w}from"./string-feb899cf.js";import{e as o,y as s,l as S,a as x}from"./JSONSupport-ed372989.js";import{y as g,m as P,S as L,a as O,C as B,w as J}from"./symbols-946d4e11.js";import{a as D}from"./cast-73cfc253.js";import{o as M}from"./screenUtils-7afeb41c.js";import"./ensureType-348c3d61.js";import{o as E,r as c}from"./Extent-fd3ac910.js";import"./typedArrayUtil-96f93e5b.js";import{w as h,u as V,_ as G,x as R,f as z,g as F}from"./labelUtils-6965a8ca.js";import{u as U}from"./layerUtils-a0871894.js";import{l as k,o as H,S as W,t as _,r as q,s as K,y as Q}from"./defaultsJSON-b087dd4d.js";import{a as d}from"./jsonUtils-7442f08f.js";var y;let p=y=class extends S{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?h(r.value):e}writeExpression(e,r,t){this.value!=null&&(e=h(this.value)),e!=null&&(r[t]=e)}clone(){return new y({expression:this.expression,title:this.title,value:this.value})}};o([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),o([E("expression",["expression","value"])],p.prototype,"readExpression",null),o([c("expression")],p.prototype,"writeExpression",null),o([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),o([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=y=o([x("esri.layers.support.LabelExpressionInfo")],p);const $=p,ve=g.fromJSON(k),he=P.fromJSON(H),de=L.fromJSON(W),T=O.fromJSON(_),Se=g.fromJSON(q),xe=P.fromJSON(K),ge=L.fromJSON(Q);var v;const u=new D({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function b(e,r,t){return{enabled:!U(t==null?void 0:t.layer)}}function C(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function X(e){return(e==null?void 0:e.type)==="map-image"}function A(e){var r,t;return!!X(e)&&!!((t=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&t.supportsArcadeExpressionForLabeling)}function Y(e){return C(e)||A(e==null?void 0:e.layer)}let i=v=class extends S{static evaluateWhere(e,r){const t=(n,l,a)=>{switch(l){case"=":return n==a;case"<>":return n!=a;case">":return n>a;case">=":return n>=a;case"<":return n<a;case"<=":return n<=a}return!1};try{if(e==null)return!0;const n=e.split(" ");if(n.length===3)return t(r[n[0]],n[1],n[2]);if(n.length===7){const l=t(r[n[0]],n[1],n[2]),a=n[3],m=t(r[n[4]],n[5],n[6]);switch(a){case"AND":return l&&m;case"OR":return l||m}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=T,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=V(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const n=G(this.labelExpressionInfo.expression);n&&(e="["+n+"]")}}e!=null&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,n){if(e==null&&this.labelExpression!=null&&C(n))e=new $({expression:this.getLabelExpressionArcade()});else if(!e)return;const l=e.toJSON(n);l.expression&&(r[t]=l)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return R(this)}getLabelExpressionArcade(){return z(this)}getLabelExpressionSingleField(){return F(this)}hash(){return JSON.stringify(this)}clone(){return new v({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:w(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:w(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};o([s({type:String,json:{write:!0}})],i.prototype,"name",void 0),o([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:b}}}}})],i.prototype,"allowOverrun",void 0),o([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:b}}}}})],i.prototype,"deconflictionStrategy",void 0),o([s({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&(t==null?void 0:t.origin)==="service"&&A(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0),o([E("labelExpression")],i.prototype,"readLabelExpression",null),o([c("labelExpression")],i.prototype,"writeLabelExpression",null),o([s({type:$,json:{write:{overridePolicy:(e,r,t)=>Y(t)?{allowNull:!0}:{enabled:!1}}}})],i.prototype,"labelExpressionInfo",void 0),o([c("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null),o([s({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],i.prototype,"labelPlacement",void 0),o([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0),o([s({type:Number})],i.prototype,"maxScale",void 0),o([c("maxScale")],i.prototype,"writeMaxScale",null),o([s({type:Number})],i.prototype,"minScale",void 0),o([c("minScale")],i.prototype,"writeMinScale",null),o([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],i.prototype,"repeatLabel",void 0),o([s({type:Number,cast:M,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],i.prototype,"repeatLabelDistance",void 0),o([s({types:B,json:{origins:{"web-scene":{types:J,write:d,default:null}},write:d,default:null}})],i.prototype,"symbol",void 0),o([s({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0),o([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=v=o([x("esri.layers.support.LabelClass")],i);const Z=i,f=N.getLogger("esri.layers.support.labelingInfo"),ee=/\[([^\[\]]+)\]/gi;function Pe(e,r,t){return e?e.map(n=>{const l=new Z;if(l.read(n,t),l.labelExpression){const a=r.fields||r.layerDefinition&&r.layerDefinition.fields||this.fields;l.labelExpression=l.labelExpression.replace(ee,(m,j)=>`[${re(j,a)}]`)}return l}):null}function re(e,r){if(!r)return e;const t=e.toLowerCase();for(let n=0;n<r.length;n++){const l=r[n].name;if(l.toLowerCase()===t)return l}return e}const te={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function Le(e,r){const t=w(e);return t.some(n=>ne(n,r))?[]:t}function ne(e,r){const t=e.labelPlacement,n=te[r];if(!e.symbol)return f.warn("No ILabelClass symbol specified."),!0;if(!n)return f.error(new I("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),!0;if(!n.includes(t)){const l=n[0];t&&f.warn(`Found invalid label placement type ${t} for ${r}. Defaulting to ${l}`),e.labelPlacement=l}return!1}export{Z as C,Se as N,xe as O,de as a,ve as b,Le as c,Pe as i,ge as j,he as u};
