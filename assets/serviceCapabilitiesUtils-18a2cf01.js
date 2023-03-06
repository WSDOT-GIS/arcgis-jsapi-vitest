import{e as d,y as v,a as f}from"./Accessor-815cb0cf.js";import{j as A}from"./Collection-912f4315.js";import{l as Q}from"./JSONSupport-2b897629.js";import"./ensureType-125d327f.js";import{r as w}from"./typedArrayUtil-74bbfd45.js";import{a as R}from"./string-75082bc6.js";import{d as F,g as x}from"./arcgisLayerUrl-0e1d3d82.js";var C;let a=C=class extends Q{constructor(t){super(t),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new A}clone(){return new C({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};d([v({type:String,json:{write:!0}})],a.prototype,"floorField",void 0),d([v({json:{read:!1,write:!1}})],a.prototype,"viewAllMode",void 0),d([v({json:{read:!1,write:!1}})],a.prototype,"viewAllLevelIds",void 0),a=C=d([f("esri.layers.support.LayerFloorInfo")],a);const k=a,T={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function s(t,e,r){return!!(t&&t.hasOwnProperty(e)?t[e]:r)}function y(t,e,r){return t&&t.hasOwnProperty(e)?t[e]:r}function M(t){var r;const e=(r=t==null?void 0:t.supportedSpatialAggregationStatistics)==null?void 0:r.map(o=>o.toLowerCase());return{envelope:!!(e!=null&&e.includes("envelopeaggregate")),centroid:!!(e!=null&&e.includes("centroidaggregate")),convexHull:!!(e!=null&&e.includes("convexhullaggregate"))}}function c(t,e){var o;const r=(o=t==null?void 0:t.supportedOperationsWithCacheHint)==null?void 0:o.map(p=>p.toLowerCase());return!!(r!=null&&r.includes(e.toLowerCase()))}function V(t,e){return{analytics:I(t),attachment:E(t),data:D(t),metadata:O(t),operations:P(t.capabilities,t,e),query:b(t,e),queryRelated:z(t),queryTopFeatures:q(t),editing:B(t)}}function I(t){return{supportsCacheHint:c(t.advancedQueryCapabilities,"queryAnalytics")}}function E(t){const e=t.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:c(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:s(t,"supportsAttachmentsResizing",!1)};return e&&Array.isArray(e)&&e.forEach(o=>{const p=T[o.name];p&&(r[p]=!!o.isEnabled)}),r}function D(t){return{isVersioned:s(t,"isDataVersioned",!1),supportsAttachment:s(t,"hasAttachments",!1),supportsM:s(t,"hasM",!1),supportsZ:s(t,"hasZ",!1)}}function O(t){return{supportsAdvancedFieldProperties:s(t,"supportsFieldDescriptionProperty",!1)}}function P(t,e,r){const o=t?t.toLowerCase().split(",").map(S=>S.trim()):[],p=r?F(r):null,m=o.includes(w(p)&&p.serverType==="MapServer"?"data":"query"),u=o.includes("editing")&&!e.datesInUnknownTimezone;let i=u&&o.includes("create"),n=u&&o.includes("delete"),l=u&&o.includes("update");const h=o.includes("changetracking"),g=e.advancedQueryCapabilities;return u&&!(i||n||l)&&(i=n=l=!0),{supportsCalculate:s(e,"supportsCalculate",!1),supportsTruncate:s(e,"supportsTruncate",!1),supportsValidateSql:s(e,"supportsValidateSql",!1),supportsAdd:i,supportsDelete:n,supportsEditing:u,supportsChangeTracking:h,supportsQuery:m,supportsQueryAnalytics:s(g,"supportsQueryAnalytic",!1),supportsQueryAttachments:s(g,"supportsQueryAttachments",!1),supportsQueryTopFeatures:s(g,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:s(e,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:s(e,"supportsExceedsLimitStatistics",!1)}}function b(t,e){const r=t.advancedQueryCapabilities,o=t.ownershipBasedAccessControlForFeatures,p=t.archivingInfo,m=t.currentVersion,u=e==null?void 0:e.includes("MapServer"),i=!u||m>=R("mapserver-pbf-version-support"),n=x(e),l=new Set((t.supportedQueryFormats??"").split(",").map(h=>h.toLowerCase().trim()));return{supportsStatistics:s(r,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:s(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:s(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:M(r),supportsCentroid:s(r,"supportsReturningGeometryCentroid",!1),supportsDistance:s(r,"supportsQueryWithDistance",!1),supportsDistinct:s(r,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:s(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:s(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:s(r,"supportsHavingClause",!1),supportsOrderBy:s(r,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:s(r,"supportsPagination",!1),supportsQuantization:s(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:s(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:s(t,"supportsReturningQueryGeometry",!1),supportsResultType:s(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:s(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:s(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:s(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:s(r,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:s(o,"allowOthersToQuery",!0),supportsHistoricMoment:s(p,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:i&&l.has("pbf"),supportsDisjointSpatialRelationship:s(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:s(r,"supportsQueryWithCacheHint",!1)||c(r,"query"),supportsDefaultSpatialReference:s(r,"supportsDefaultSR",!1),supportsCompactGeometry:n,supportsFullTextSearch:s(r,"supportsFullTextSearch",!1),maxRecordCountFactor:y(t,"maxRecordCountFactor",void 0),maxRecordCount:y(t,"maxRecordCount",void 0),standardMaxRecordCount:y(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:y(t,"tileMaxRecordCount",void 0)}}function z(t){const e=t.advancedQueryCapabilities,r=s(e,"supportsAdvancedQueryRelated",!1);return{supportsPagination:s(e,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:c(e,"queryRelated")}}function q(t){return{supportsCacheHint:c(t.advancedQueryCapabilities,"queryTopFilter")}}function B(t){const e=t.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:s(t,"allowGeometryUpdates",!0),supportsGlobalId:s(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:s(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:s(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:s(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:s(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:s(e,"allowAnonymousToDelete",!0),supportsDeleteByOthers:s(e,"allowOthersToDelete",!0),supportsUpdateByAnonymous:s(e,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:s(e,"allowOthersToUpdate",!0)}}export{V as n,k as p};
