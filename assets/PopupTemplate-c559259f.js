import{e,y as i,a as l,v as Dt}from"./Accessor-815cb0cf.js";import{i as jt}from"./Clonable-6d5134c7.js";import{j as Z}from"./Collection-912f4315.js";import{l as h}from"./JSONSupport-2b897629.js";import{p as v}from"./string-75082bc6.js";import{s as Bt}from"./Error-781981d1.js";import{C as Jt}from"./promiseUtils-28f2a985.js";import{o as Tt,a as Yt,s as kt}from"./cast-f7d2a22f.js";import{r as _,o as bt}from"./Extent-8fae2379.js";import{T as tt,S as Pt}from"./ensureType-125d327f.js";import{b as Ut,S as Vt}from"./fieldUtils-e6cf5e5f.js";import"./typedArrayUtil-74bbfd45.js";import{o as Nt}from"./enumeration-94b1319d.js";import{L as zt,S as qt,m as Wt,u as Gt}from"./number-5e819186.js";import{c as Kt,a as Ht,b as Qt}from"./ActionToggle-dc9b6fc6.js";let Y=class extends h{constructor(o){super(o),this.type=null}};e([i({type:["attachments","custom","fields","media","text","expression","relationship"],readOnly:!0,json:{read:!1,write:!0}})],Y.prototype,"type",void 0),Y=e([l("esri.popup.content.Content")],Y);const w=Y;var et;let x=et=class extends w{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new et({description:this.description,displayType:this.displayType,title:this.title})}};e([i({type:String,json:{write:!0}})],x.prototype,"description",void 0),e([i({type:["auto","preview","list"],json:{write:!0}})],x.prototype,"displayType",void 0),e([i({type:String,json:{write:!0}})],x.prototype,"title",void 0),e([i({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],x.prototype,"type",void 0),x=et=e([l("esri.popup.content.AttachmentsContent")],x);const z=x;var ot;let I=ot=class extends w{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new ot({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?v(this.outFields):null})}};e([i()],I.prototype,"creator",void 0),e([i()],I.prototype,"destroyer",void 0),e([i()],I.prototype,"outFields",void 0),e([i({type:["custom"],readOnly:!0})],I.prototype,"type",void 0),I=ot=e([l("esri.popup.content.CustomContent")],I);const Xt=I;var it;let b=it=class extends h{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new it({title:this.title,expression:this.expression})}};e([i({type:String,json:{write:!0}})],b.prototype,"title",void 0),e([i({type:String,json:{write:!0}})],b.prototype,"expression",void 0),e([i({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"returnType",void 0),b=it=e([l("esri.popup.ElementExpressionInfo")],b);const Zt=b;var rt;let C=rt=class extends w{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){var t;return new rt({expressionInfo:(t=this.expressionInfo)==null?void 0:t.clone()})}};e([i({type:Zt,json:{write:!0}})],C.prototype,"expressionInfo",void 0),e([i({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],C.prototype,"type",void 0),C=rt=e([l("esri.popup.content.ExpressionContent")],C);const Ft=C,J=Tt()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});J.toJSON.bind(J);J.fromJSON.bind(J);var st;let F=st=class extends h{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new st({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?zt(t,{...qt(this.dateFormat),...this.dateTimeFormatOptions}):Wt(t,Gt(this))}formatRasterPixelValue(t){if(t.includes("-"))return t;let o,s;return t.trim().includes(",")?(o=",",s=o+" ",this._formatDelimitedString(t,o,s,this)):t.trim().includes(";")?(o=";",s=o+" ",this._formatDelimitedString(t,o,s,this)):t.trim().includes(" ")?(o=s=" ",this._formatDelimitedString(t,o,s,this)):this.format(Number(t))}_formatDelimitedString(t,o,s,n){return t&&o&&s&&n?t.trim().split(o).map(r=>this.format(Number(r))).join(s):t}};e([Nt(J)],F.prototype,"dateFormat",void 0),e([i({type:Object,json:{read:!1}})],F.prototype,"dateTimeFormatOptions",void 0),e([i({type:Boolean,json:{write:!0}})],F.prototype,"digitSeparator",void 0),e([i({type:tt,json:{write:!0}})],F.prototype,"places",void 0),F=st=e([l("esri.popup.support.FieldInfoFormat")],F);const te=F;var nt;let c=nt=class extends h{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new nt({fieldName:this.fieldName,format:this.format?v(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};e([i({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),e([i({type:te,json:{write:!0}})],c.prototype,"format",void 0),e([i({type:Boolean,json:{write:!0,default:!1}})],c.prototype,"isEditable",void 0),e([i({type:String,json:{write:!0}})],c.prototype,"label",void 0),e([Nt(new Yt({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],c.prototype,"stringFieldOption",void 0),e([i({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],c.prototype,"statisticType",void 0),e([i({type:String,json:{write:!0}})],c.prototype,"tooltip",void 0),e([i({type:Boolean,json:{write:!0}})],c.prototype,"visible",void 0),c=nt=e([l("esri.popup.FieldInfo")],c);const Ot=c;var lt;let f=lt=class extends w{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,o){o.fieldInfos=t&&t.map(s=>s.toJSON())}clone(){return new lt(v({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};e([i({type:Object,json:{write:!0}})],f.prototype,"attributes",void 0),e([i({type:String,json:{write:!0}})],f.prototype,"description",void 0),e([i({type:[Ot]})],f.prototype,"fieldInfos",void 0),e([_("fieldInfos")],f.prototype,"writeFieldInfos",null),e([i({type:String,json:{write:!0}})],f.prototype,"title",void 0),e([i({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=lt=e([l("esri.popup.content.FieldsContent")],f);const q=f;let $=class extends h{constructor(o){super(o),this.altText=null,this.caption="",this.title="",this.type=null}};e([i({type:String,json:{write:!0}})],$.prototype,"altText",void 0),e([i({type:String,json:{write:!0}})],$.prototype,"caption",void 0),e([i({type:String,json:{write:!0}})],$.prototype,"title",void 0),e([i({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],$.prototype,"type",void 0),$=e([l("esri.popup.content.mixins.MediaInfo")],$);const $t=$;var pt;let N=pt=class extends Dt{constructor(t){super(t),this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new pt({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};e([i()],N.prototype,"fieldName",void 0),e([i()],N.prototype,"tooltip",void 0),e([i()],N.prototype,"value",void 0),N=pt=e([l("esri.popup.content.support.ChartMediaInfoValueSeries")],N);const ee=N;var at;let S=at=class extends h{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new at({fields:v(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};e([i({type:[String],json:{write:!0}})],S.prototype,"fields",void 0),e([i({type:String,json:{write:!0}})],S.prototype,"normalizeField",void 0),e([i({type:[ee],json:{read:!1}})],S.prototype,"series",void 0),e([i({type:String,json:{write:!0}})],S.prototype,"tooltipField",void 0),S=at=e([l("esri.popup.content.support.ChartMediaInfoValue")],S);const oe=S;let M=class extends $t{constructor(o){super(o),this.type=null,this.value=null}};e([i({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"type",void 0),e([i({type:oe,json:{write:!0}})],M.prototype,"value",void 0),M=e([l("esri.popup.content.mixins.ChartMediaInfo")],M);const H=M,Q=Tt()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});var dt;let k=dt=class extends H{constructor(t){super(t),this.type="bar-chart"}clone(){return new dt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:Q.write}})],k.prototype,"type",void 0),k=dt=e([l("esri.popup.content.BarChartMediaInfo")],k);const _t=k;var ht;let P=ht=class extends H{constructor(t){super(t),this.type="column-chart"}clone(){return new ht({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:Q.write}})],P.prototype,"type",void 0),P=ht=e([l("esri.popup.content.ColumnChartMediaInfo")],P);const Rt=P;var ct;let A=ct=class extends h{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new ct({linkURL:this.linkURL,sourceURL:this.sourceURL})}};e([i({type:String,json:{write:!0}})],A.prototype,"linkURL",void 0),e([i({type:String,json:{write:!0}})],A.prototype,"sourceURL",void 0),A=ct=e([l("esri.popup.content.support.ImageMediaInfoValue")],A);const ie=A;var yt;let O=yt=class extends $t{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new yt({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};e([i({type:Number,json:{write:!0}})],O.prototype,"refreshInterval",void 0),e([i({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],O.prototype,"type",void 0),e([i({type:ie,json:{write:!0}})],O.prototype,"value",void 0),O=yt=e([l("esri.popup.content.ImageMediaInfo")],O);const Ct=O;var ut;let U=ut=class extends H{constructor(t){super(t),this.type="line-chart"}clone(){return new ut({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:Q.write}})],U.prototype,"type",void 0),U=ut=e([l("esri.popup.content.LineChartMediaInfo")],U);const Mt=U;var mt;let V=mt=class extends H{constructor(t){super(t),this.type="pie-chart"}clone(){return new mt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:Q.write}})],V.prototype,"type",void 0),V=mt=e([l("esri.popup.content.PieChartMediaInfo")],V);const At=V,Lt={base:$t,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":_t,"column-chart":Rt,"line-chart":Mt,"pie-chart":At,image:Ct}};var ft;let y=ft=class extends w{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map(o=>o.type==="image"?Ct.fromJSON(o):o.type==="barchart"?_t.fromJSON(o):o.type==="columnchart"?Rt.fromJSON(o):o.type==="linechart"?Mt.fromJSON(o):o.type==="piechart"?At.fromJSON(o):void 0).filter(Boolean)}writeMediaInfos(t,o){o.mediaInfos=t&&t.map(s=>s.toJSON())}clone(){return new ft(v({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};e([i()],y.prototype,"activeMediaInfoIndex",void 0),e([i({type:Object,json:{write:!0}})],y.prototype,"attributes",void 0),e([i({type:String,json:{write:!0}})],y.prototype,"description",void 0),e([i({types:[Lt]})],y.prototype,"mediaInfos",void 0),e([bt("mediaInfos")],y.prototype,"readMediaInfos",null),e([_("mediaInfos")],y.prototype,"writeMediaInfos",null),e([i({type:String,json:{write:!0}})],y.prototype,"title",void 0),e([i({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=ft=e([l("esri.popup.content.MediaContent")],y);const W=y;var vt;let L=vt=class extends h{constructor(t){super(t),this.field=null,this.order=null}clone(){return new vt({field:this.field,order:this.order})}};e([i({type:String,json:{write:!0}})],L.prototype,"field",void 0),e([i({type:["asc","desc"],json:{write:!0}})],L.prototype,"order",void 0),L=vt=e([l("esri.popup.support.RelatedRecordsInfoFieldOrder")],L);const Et=L;let m=class extends jt(w){constructor(t){super(t),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}};e([i({type:String,json:{write:!0}})],m.prototype,"description",void 0),e([i({type:Number,json:{type:tt,write:!0}})],m.prototype,"displayCount",void 0),e([i({type:["list"],json:{write:!0}})],m.prototype,"displayType",void 0),e([i({type:[Et],json:{write:!0}})],m.prototype,"orderByFields",void 0),e([i({type:Number,json:{type:tt,write:!0}})],m.prototype,"relationshipId",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"title",void 0),e([i({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=e([l("esri.popup.content.RelationshipContent")],m);const G=m;var wt;let E=wt=class extends w{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new wt({text:this.text})}};e([i({type:String,json:{write:!0}})],E.prototype,"text",void 0),e([i({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],E.prototype,"type",void 0),E=wt=e([l("esri.popup.content.TextContent")],E);const K=E,re={base:null,key:"type",typeMap:{attachment:z,media:W,text:K,expression:Ft,field:q,relationship:G}};var gt;let j=gt=class extends h{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new gt({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([i({type:String,json:{write:!0}})],j.prototype,"name",void 0),e([i({type:String,json:{write:!0}})],j.prototype,"title",void 0),e([i({type:String,json:{write:!0}})],j.prototype,"expression",void 0),e([i({type:["string","number"],json:{write:!0}})],j.prototype,"returnType",void 0),j=gt=e([l("esri.popup.ExpressionInfo")],j);const se=j;var xt;let D=xt=class extends h{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new xt({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};e([i({type:Boolean,json:{write:!0}})],D.prototype,"returnTopmostRaster",void 0),e([i({type:Boolean,json:{write:!0}})],D.prototype,"showNoDataRecords",void 0),D=xt=e([l("esri.popup.LayerOptions")],D);const ne=D;var It;let B=It=class extends h{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new It({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?v(this.orderByFields):null})}};e([i({type:Boolean,json:{write:!0}})],B.prototype,"showRelatedRecords",void 0),e([i({type:[Et],json:{write:!0}})],B.prototype,"orderByFields",void 0),B=It=e([l("esri.popup.RelatedRecordsInfo")],B);const le=B,pe="esri.PopupTemplate",ae=Bt.getLogger(pe),R="relationships/",St="expression/",de=Z.ofType({key:"type",defaultKeyValue:"button",base:Kt,typeMap:{button:Ht,toggle:Qt}}),he={base:w,key:"type",typeMap:{media:W,custom:Xt,text:K,attachments:z,fields:q,expression:Ft,relationship:G}},ce=["attachments","fields","media","text","expression","relationship"];let a=class extends jt(h){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(t){return Array.isArray(t)?t.map(o=>Pt(he,o)):typeof t=="string"||typeof t=="function"||t instanceof HTMLElement||Jt(t)?t:(ae.error("content error","unsupported content value",{value:t}),null)}readContent(t,o){const{popupElements:s}=o;return Array.isArray(s)&&s.length>0?this._readPopupInfoElements(o.description,o.mediaInfos,s):this._readPopupInfo(o)}writeContent(t,o,s,n){typeof t!="string"?Array.isArray(t)&&(o.popupElements=t.filter(r=>ce.includes(r.type)).map(r=>r&&r.toJSON(n)),o.popupElements.forEach(r=>{r.type==="attachments"?this._writeAttachmentContent(o):r.type==="media"?this._writeMediaContent(r,o):r.type==="text"?this._writeTextContent(r,o):r.type==="relationship"&&this._writeRelationshipContent(r,o)})):o.description=t}writeFieldInfos(t,o,s,n){const{content:r}=this,p=Array.isArray(r)?r:null;if(t){const d=p?p.filter(u=>u.type==="fields"):[],T=d.length&&d.every(u=>{var g;return(g=u.fieldInfos)==null?void 0:g.length});o.fieldInfos=t.filter(Boolean).map(u=>{const g=u.toJSON(n);return T&&(g.visible=!1),g})}if(p)for(const d of p)d.type==="fields"&&this._writeFieldsContent(d,o)}writeLayerOptions(t,o,s,n){o[s]=!t||t.showNoDataRecords===null&&t.returnTopmostRaster===null?null:t.toJSON(n)}writeTitle(t,o){o.title=t||""}async collectRequiredFields(t,o){const s=this.expressionInfos||[];await this._collectExpressionInfoFields(t,o,[...s,...this._getContentExpressionInfos(this.content,s)]),Ut(t,o,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const o=new Set;return await this.collectRequiredFields(o,t),[...o].sort()}_writeFieldsContent(t,o){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const s=v(t.fieldInfos);Array.isArray(o.fieldInfos)?s.forEach(n=>{const r=o.fieldInfos.find(p=>p.fieldName.toLowerCase()===n.fieldName.toLowerCase());r?r.visible=!0:o.fieldInfos.push(n)}):o.fieldInfos=s}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeRelationshipContent(t,o){var r,p;const s=((r=t.orderByFields)==null?void 0:r.map(d=>this._toFieldOrderJSON(d,t.relationshipId)))||[],n=[...((p=o.relatedRecordsInfo)==null?void 0:p.orderByFields)||[],...s];o.relatedRecordsInfo={showRelatedRecords:!0,...(n==null?void 0:n.length)&&{orderByFields:n}}}_writeTextContent(t,o){!o.description&&t.text&&(o.description=t.text)}_writeMediaContent(t,o){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const s=v(t.mediaInfos);Array.isArray(o.mediaInfos)?o.mediaInfos=[...o.mediaInfos,...s]:o.mediaInfos=s}_readPopupInfoElements(t,o,s){const n={description:!1,mediaInfos:!1};return s.map(r=>r.type==="media"?(r.mediaInfos||!o||n.mediaInfos||(r.mediaInfos=o,n.mediaInfos=!0),W.fromJSON(r)):r.type==="text"?(r.text||!t||n.description||(r.text=t,n.description=!0),K.fromJSON(r)):r.type==="attachments"?z.fromJSON(r):r.type==="fields"?q.fromJSON(r):r.type==="expression"?Ft.fromJSON(r):r.type==="relationship"?G.fromJSON(r):void 0).filter(Boolean)}_toRelationshipContent(t){const{field:o,order:s}=t;if(!(o!=null&&o.startsWith(R)))return null;const n=o.replace(R,"").split("/");if(n.length!==2)return null;const r=parseInt(n[0],10),p=n[1];return typeof r=="number"&&p?G.fromJSON({relationshipId:r,orderByFields:[{field:p,order:s}]}):null}_toFieldOrderJSON(t,o){const{order:s,field:n}=t;return{field:`${R}${o}/${n}`,order:s}}_readPopupInfo({description:t,mediaInfos:o,showAttachments:s,relatedRecordsInfo:n={showRelatedRecords:!1}}){const r=[];t?r.push(new K({text:t})):r.push(new q),Array.isArray(o)&&o.length&&r.push(W.fromJSON({mediaInfos:o})),s&&r.push(z.fromJSON({displayType:"auto"}));const{showRelatedRecords:p,orderByFields:d}=n;return p&&(d!=null&&d.length)&&d.forEach(T=>{const u=this._toRelationshipContent(T);u&&r.push(u)}),r.length?r:t}_getContentElementFields(t){const o=t==null?void 0:t.type;if(o==="attachments")return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if(o==="custom")return t.outFields||[];if(o==="fields")return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos??this.fieldInfos)];if(o==="media"){const s=t.mediaInfos||[];return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...s.reduce((n,r)=>[...n,...this._getMediaInfoFields(r)],[])]}return o==="text"?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:o,title:s,value:n}=t,r=n||{},{fields:p,normalizeField:d,tooltipField:T,sourceURL:u,linkURL:g}=r,X=[...this._extractFieldNames(s),...this._extractFieldNames(o),...this._extractFieldNames(u),...this._extractFieldNames(g),...p??[]];return d&&X.push(d),T&&X.push(T),X}_getContentExpressionInfos(t,o){return Array.isArray(t)?t.reduce((s,n)=>[...s,...n.type==="expression"&&n.expressionInfo?[n.expressionInfo]:[]],o):[]}_getContentFields(t){return typeof t=="string"?this._extractFieldNames(t):Array.isArray(t)?t.reduce((o,s)=>[...o,...this._getContentElementFields(s)],[]):[]}async _collectExpressionInfoFields(t,o,s){s&&await Promise.all(s.map(n=>Vt(t,o,n.expression)))}_getFieldInfoFields(t){return t?t.filter(o=>o.visible===void 0||!!o.visible).map(o=>o.fieldName).filter(o=>!o.startsWith(R)&&!o.startsWith(St)):[]}_getActionsFields(t){return t?t.toArray().reduce((o,s)=>[...o,...this._getActionFields(s)],[]):[]}_getActionFields(t){const{className:o,title:s,type:n}=t,r=n==="button"||n==="toggle"?t.image:"";return[...this._extractFieldNames(s),...this._extractFieldNames(o),...this._extractFieldNames(r)]}_getTitleFields(t){return typeof t=="string"?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||typeof t!="string")return[];const o=/{[^}]*}/g,s=t.match(o);if(!s)return[];const n=/\{(\w+):.+\}/,r=s.filter(p=>!(p.indexOf(`{${R}`)===0||p.indexOf(`{${St}`)===0)).map(p=>p.replace(n,"{$1}"));return r?r.map(p=>p.slice(1,-1)):[]}};e([i({type:de})],a.prototype,"actions",void 0),e([i()],a.prototype,"content",void 0),e([kt("content")],a.prototype,"castContent",null),e([bt("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],a.prototype,"readContent",null),e([_("content",{popupElements:{type:Z.ofType(re)},showAttachments:{type:Boolean},mediaInfos:{type:Z.ofType(Lt)},description:{type:String},relatedRecordsInfo:{type:le}})],a.prototype,"writeContent",null),e([i({type:[se],json:{write:!0}})],a.prototype,"expressionInfos",void 0),e([i({type:[Ot]})],a.prototype,"fieldInfos",void 0),e([_("fieldInfos")],a.prototype,"writeFieldInfos",null),e([i({type:ne})],a.prototype,"layerOptions",void 0),e([_("layerOptions")],a.prototype,"writeLayerOptions",null),e([i({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],a.prototype,"lastEditInfoEnabled",void 0),e([i()],a.prototype,"outFields",void 0),e([i()],a.prototype,"overwriteActions",void 0),e([i()],a.prototype,"returnGeometry",void 0),e([i({json:{type:String}})],a.prototype,"title",void 0),e([_("title")],a.prototype,"writeTitle",null),a=e([l("esri.PopupTemplate")],a);const Re=a;export{W as I,ee as a,K as b,Ot as c,q as d,Zt as e,Et as f,z as g,se as i,Re as k,te as u};
