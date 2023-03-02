import{e as l,y as i,a as T}from"./Accessor-815cb0cf.js";import"./geometry-0d19f94b.js";import{$ as h,h as x,K as P,U as v}from"./request-b4e08038.js";import{a as w}from"./Error-781981d1.js";import{O as U}from"./MultiOriginJSONSupport-6a5e69d5.js";import{p as g,b as I}from"./string-75082bc6.js";import"./ensureType-125d327f.js";import"./typedArrayUtil-74bbfd45.js";import{w as j,f as y,a as M,o as b,r as W}from"./Extent-8fae2379.js";import{b as L}from"./Layer-84815c0a.js";import{n as E}from"./BlendLayer-f72967b1.js";import{c as O}from"./OperationalLayer-fb5eac0c.js";import{_ as D}from"./PortalLayer-1e83b5c3.js";import{p as _}from"./RefreshableLayer-ac9eee59.js";import{t as q}from"./ScaleRangeLayer-abd4cd2e.js";import{e as z}from"./imageBitmapUtils-37fb12d3.js";import{j as S,p as r}from"./TileInfo-1aef4d7f.js";import{l as V}from"./JSONSupport-2b897629.js";var f;let m=f=class extends V{constructor(e){super(e)}clone(){return new f({customLayerParameters:g(this.customLayerParameters),customParameters:g(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};l([i({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),l([i({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),l([i({type:String,json:{write:!0}})],m.prototype,"layerIdentifier",void 0),l([i({type:String,json:{write:!0}})],m.prototype,"tileMatrixSet",void 0),l([i({type:String,json:{write:!0}})],m.prototype,"url",void 0),m=f=l([T("esri.layer.support.WMTSLayerInfo")],m);var d;let o=d=class extends E(_(q(O(D(U(L)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new j(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,y.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=y.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new M({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:y.WebMercator}),spatialReference:y.WebMercator,lods:[new r({level:0,scale:591657527591555e-6,resolution:156543.033928}),new r({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new r({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new r({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new r({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new r({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new r({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new r({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new r({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new r({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new r({level:10,scale:577790.554289,resolution:152.874056570411}),new r({level:11,scale:288895.277144,resolution:76.4370282850732}),new r({level:12,scale:144447.638572,resolution:38.2185141425366}),new r({level:13,scale:72223.819286,resolution:19.1092570712683}),new r({level:14,scale:36111.909643,resolution:9.55462853563415}),new r({level:15,scale:18055.954822,resolution:4.77731426794937}),new r({level:16,scale:9027.977411,resolution:2.38865713397468}),new r({level:17,scale:4513.988705,resolution:1.19432856685505}),new r({level:18,scale:2256.994353,resolution:.597164283559817}),new r({level:19,scale:1128.497176,resolution:.298582141647617}),new r({level:20,scale:564.248588,resolution:.14929107082380833}),new r({level:21,scale:282.124294,resolution:.07464553541190416}),new r({level:22,scale:141.062147,resolution:.03732276770595208}),new r({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{var a;let s="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const n=new h(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&((a=n.authority)!=null&&a.includes("{subDomain}"))&&(s="is missing 'subDomains' property")}else s="spatialReference must match tileInfo.spatialReference";else s="is missing the required 'urlTemplate' property value";if(s)throw new w("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${s}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&y.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:s}=this,a=new h(t),n=a.scheme?a.scheme+"://":"//",c=n+a.authority+"/",p=a.authority;if(p!=null&&p.includes("{subDomain}")){if(s&&s.length>0&&p.split(".").length>1)for(const u of s)e.push(n+p.replace(/\{subDomain\}/gi,u)+"/")}else e.push(c);return e.map(u=>(u.charAt(u.length-1)!=="/"&&(u+="/"),u))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new h(e),s=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(s.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&x(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=P(e)),t.templateUrl=e}fetchTile(e,t,s,a={}){const{signal:n}=a,c=this.getTileUrl(e,t,s),p={responseType:"image",signal:n,query:{...this.refreshParameters}};return v(c,p).then(u=>u.data)}async fetchImageBitmapTile(e,t,s,a={}){const{signal:n}=a;if(this.fetchTile!==d.prototype.fetchTile){const $=await this.fetchTile(e,t,s,a);try{return createImageBitmap($)}catch(R){throw new w("request:server",`Unable to load tile ${e}/${t}/${s}`,{error:R,level:e,row:t,col:s})}}const c=this.getTileUrl(e,t,s),p={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:u}=await v(c,p);return z(u,c)}getTileUrl(e,t,s){const{levelValues:a,tileServers:n,urlPath:c}=this;if(!a||!n||!c)return"";const p=a[e];return n[t%n.length]+I(c,{level:p,z:p,col:s,x:s,row:t,y:t})}};l([i({type:String,value:"",json:{write:!0}})],o.prototype,"copyright",void 0),l([i({type:j,json:{write:!0},nonNullable:!0})],o.prototype,"fullExtent",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),l([i({type:["show","hide"]})],o.prototype,"listMode",void 0),l([i({json:{read:!0,write:!0}})],o.prototype,"blendMode",void 0),l([i()],o.prototype,"levelValues",null),l([i({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],o.prototype,"isReference",void 0),l([i({type:["WebTiledLayer"],value:"WebTiledLayer"})],o.prototype,"operationalLayerType",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"popupEnabled",void 0),l([i({type:y})],o.prototype,"spatialReference",void 0),l([b("spatialReference",["spatialReference","fullExtent.spatialReference"])],o.prototype,"readSpatialReference",null),l([i({type:[String],json:{write:!0}})],o.prototype,"subDomains",void 0),l([i({type:S,json:{write:!0}})],o.prototype,"tileInfo",void 0),l([i({readOnly:!0})],o.prototype,"tileServers",null),l([i({json:{read:!1}})],o.prototype,"type",void 0),l([i()],o.prototype,"urlPath",null),l([i({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],o.prototype,"urlTemplate",void 0),l([b("urlTemplate",["urlTemplate","templateUrl"])],o.prototype,"readUrlTemplate",null),l([W("urlTemplate",{templateUrl:{type:String}})],o.prototype,"writeUrlTemplate",null),l([i({type:m,json:{write:!0}})],o.prototype,"wmtsInfo",void 0),o=d=l([T("esri.layers.WebTileLayer")],o);const B=o,ie=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{B as L,ie as W,m as p};
