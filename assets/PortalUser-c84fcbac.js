import{_ as v}from"./preload-helper-f8378b50.js";import{e as r,y as o,a as c}from"./Accessor-815cb0cf.js";import{a as d}from"./Error-781981d1.js";import{l as f}from"./JSONSupport-2b897629.js";import"./ensureType-125d327f.js";import"./typedArrayUtil-74bbfd45.js";import{p as y}from"./PortalGroup-d3a43002.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./string-75082bc6.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./cast-f7d2a22f.js";import"./Extent-8fae2379.js";let p=class extends f{constructor(e){super(e),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const e=this.get("portal.restUrl");return e?`${e}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new d("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}};r([o({type:Date})],p.prototype,"created",void 0),r([o()],p.prototype,"id",void 0),r([o()],p.prototype,"portal",void 0),r([o()],p.prototype,"title",void 0),r([o({readOnly:!0})],p.prototype,"url",null),r([o()],p.prototype,"username",void 0),p=r([c("esri.portal.PortalFolder")],p);const g=p;var h;let l=h=class extends f{constructor(...t){super(...t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const t=this.url,e=this.thumbnail;return t&&e?this.portal.normalizeUrl(`${t}/info/${e}?f=json`):null}get userContentUrl(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}`:null}get url(){const t=this.get("portal.restUrl");return t?`${t}/community/users/${this.username}`:null}addItem(t){const e=t&&t.item,i=t&&t.data,n=t&&t.folder,s={method:"post"};e&&(s.query=e.createPostQuery(),i!=null&&(typeof i=="string"?s.query.text=i:typeof i=="object"&&(s.query.text=JSON.stringify(i))));let u=this.userContentUrl;return n&&(u+="/"+(typeof n=="string"?n:n.id)),this.portal.request(u+"/addItem",s).then(a=>(e.id=a.id,e.portal=this.portal,e.loaded?e.reload():e.load()))}deleteItem(t){let e=this.userContentUrl;return t.ownerFolder&&(e+="/"+t.ownerFolder),this.portal.request(e+`/items/${t.id}/delete`,{method:"post"}).then(()=>{t.id=null,t.portal=null})}deleteItems(t){const e=this.userContentUrl+"/deleteItems",i=t.map(n=>n.id);if(i.length){const n={method:"post",query:{items:i.join(",")}};return this.portal.request(e,n).then(()=>{t.forEach(s=>{s.id=null,s.portal=null})})}return Promise.resolve(void 0)}fetchFolders(){const t={query:{num:1}};return this.portal.request(this.userContentUrl??"",t).then(e=>{let i;return i=e&&e.folders?e.folders.map(n=>{const s=g.fromJSON(n);return s.portal=this.portal,s}):[],i})}fetchGroups(){return this.portal.request(this.url??"").then(t=>{let e;return e=t&&t.groups?t.groups.map(i=>{const n=y.fromJSON(i);return n.portal=this.portal,n}):[],e})}fetchItems(t){const e=t??{};let i,n=this.userContentUrl??"";return e.folder&&(n+="/"+e.folder.id),v(()=>import("./PortalItem-051eae04.js"),["assets/PortalItem-051eae04.js","assets/preload-helper-f8378b50.js","assets/Accessor-815cb0cf.js","assets/typedArrayUtil-74bbfd45.js","assets/watch-c7facfb0.js","assets/ArrayPool-ae2ef0ab.js","assets/string-75082bc6.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-28f2a985.js","assets/Error-781981d1.js","assets/ensureType-125d327f.js","assets/assets-01239caf.js","assets/request-ae7029ea.js","assets/JSONSupport-2b897629.js","assets/Loadable-6776e4d9.js","assets/Promise-092442f7.js","assets/Extent-8fae2379.js","assets/cast-f7d2a22f.js","assets/Portal-2a7c40a2.js","assets/locale-30120714.js","assets/PortalGroup-d3a43002.js"]).then(({default:s})=>{i=s;const u={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"};return this.portal.request(n,{query:u})}).then(s=>{let u;return s&&s.items?(u=s.items.map(a=>{const m=i.fromJSON(a);return m.portal=this.portal,m}),Promise.all(u.map(a=>a.load())).catch(a=>a).then(()=>({items:u,nextStart:s.nextStart,total:s.total}))):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal.request(this.url+"/tags").then(t=>t.tags)}getThumbnailUrl(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new y({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new d("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new d("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new h;return e.sourceJSON=t,e.read(t),e}};r([o()],l.prototype,"access",void 0),r([o({type:Date})],l.prototype,"created",void 0),r([o()],l.prototype,"culture",void 0),r([o()],l.prototype,"description",void 0),r([o()],l.prototype,"email",void 0),r([o()],l.prototype,"favGroupId",void 0),r([o()],l.prototype,"fullName",void 0),r([o({type:Date})],l.prototype,"modified",void 0),r([o()],l.prototype,"orgId",void 0),r([o()],l.prototype,"portal",void 0),r([o()],l.prototype,"preferredView",void 0),r([o()],l.prototype,"privileges",void 0),r([o()],l.prototype,"region",void 0),r([o()],l.prototype,"role",void 0),r([o()],l.prototype,"roleId",void 0),r([o()],l.prototype,"sourceJSON",void 0),r([o()],l.prototype,"thumbnail",void 0),r([o({readOnly:!0})],l.prototype,"thumbnailUrl",null),r([o()],l.prototype,"units",void 0),r([o({readOnly:!0})],l.prototype,"userContentUrl",null),r([o({readOnly:!0})],l.prototype,"url",null),r([o()],l.prototype,"username",void 0),r([o()],l.prototype,"userType",void 0),l=h=r([c("esri.portal.PortalUser")],l);const F=l;export{F as default};
