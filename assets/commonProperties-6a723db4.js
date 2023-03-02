import{T as l,n as a}from"./TimeExtent-202e4138.js";import{w as p,f as y}from"./Extent-8fae2379.js";import{f as g}from"./persistableUrlUtils-5532b98d.js";import{r as o}from"./typedArrayUtil-74bbfd45.js";import"./string-75082bc6.js";import"./Error-781981d1.js";import{x as v}from"./ElevationInfo-5862799c.js";import{r as c}from"./opacityUtils-107b33de.js";function b(r){if(!r)return r;const{start:e,end:n}=r;return new l({start:o(e)?a(e,-e.getTimezoneOffset(),"minutes"):e,end:o(n)?a(n,-n.getTimezoneOffset(),"minutes"):n})}function j(r){if(!r)return r;const{start:e,end:n}=r;return new l({start:o(e)?a(e,e.getTimezoneOffset(),"minutes"):e,end:o(n)?a(n,n.getTimezoneOffset(),"minutes"):n})}const z={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},R={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(r,e)=>!e.disablePopup},write:{enabled:!0,writer(r,e,n){e[n]=!r}}}},E={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},B={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:g}}},P={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},q={value:null,type:v,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function J(r){return{type:r,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const w={write:!0,read:!0},u={type:Number,json:{origins:{"web-document":w,"portal-item":{write:!0}}}},L={...u,json:{...u.json,origins:{"web-document":{...w,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(r,e,n)=>n&&n.origin!=="service"||!e.drawingInfo||e.drawingInfo.transparency===void 0?e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.transparency!==void 0?c(e.layerDefinition.drawingInfo.transparency):void 0:c(e.drawingInfo.transparency)}}},k={type:l,readOnly:!0,get(){var m,d;if(!((m=this.layer)!=null&&m.timeInfo))return null;const{datesInUnknownTimezone:r,timeOffset:e,useViewTime:n}=this.layer,s=(d=this.view)==null?void 0:d.timeExtent;let t=this.layer.timeExtent;r&&(t=j(t));let i=n?s&&t?s.intersection(t):s||t:t;if(!i||i.isEmpty||i.isAllTime)return i;e&&(i=i.offset(-e.value,e.unit)),r&&(i=b(i));const f=this._get("timeExtent");return i.equals(f)?f:i}},A={type:p,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(r,e)=>{const n=p.fromJSON(r);return e.spatialReference!=null&&typeof e.spatialReference=="object"&&(n.spatialReference=y.fromJSON(e.spatialReference)),n}}}},read:!1}},U={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},V={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},_={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},C={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}};export{_ as D,V as I,C as S,k as b,P as c,q as d,B as f,L as g,A as j,z as l,E as m,R as p,u,U as v,J as y};
