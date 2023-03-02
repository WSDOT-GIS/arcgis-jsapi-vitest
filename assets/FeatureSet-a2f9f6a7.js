import{e as f,y as u,a as S}from"./Accessor-815cb0cf.js";import{n as j}from"./geometry-0d19f94b.js";import{g as T}from"./Graphic-f65f3c78.js";import{a as F}from"./cast-f7d2a22f.js";import{l as P}from"./JSONSupport-2b897629.js";import{p as q}from"./string-75082bc6.js";import{r as h,g as J}from"./typedArrayUtil-74bbfd45.js";import"./ensureType-125d327f.js";import{o as w,r as G,f as x}from"./Extent-8fae2379.js";import{v as O,y as d}from"./jsonUtils-15ca15d7.js";import{y as z}from"./Field-7770b57d.js";var v;const R=new F({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let m=v=class extends P{constructor(t){super(t),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(t,o){var n;const r=x.fromJSON(o.spatialReference),e=[];for(let s=0;s<t.length;s++){const a=t[s],l=T.fromJSON(a),y=a.geometry&&a.geometry.spatialReference;h(l.geometry)&&!y&&(l.geometry.spatialReference=r);const i=a.aggregateGeometries,p=l.aggregateGeometries;if(i&&h(p))for(const g in p){const c=p[g],N=(n=i[g])==null?void 0:n.spatialReference;h(c)&&!N&&(c.spatialReference=r)}e.push(l)}return e}writeGeometryType(t,o,r,e){if(t)return void R.write(t,o,r,e);const{features:n}=this;if(n){for(const s of n)if(s&&h(s.geometry))return void R.write(s.geometry.type,o,r,e)}}readQueryGeometry(t,o){if(!t)return null;const r=!!t.spatialReference,e=O(t);return e&&!r&&o.spatialReference&&(e.spatialReference=x.fromJSON(o.spatialReference)),e}writeSpatialReference(t,o){if(t)return void(o.spatialReference=t.toJSON());const{features:r}=this;if(r){for(const e of r)if(e&&h(e.geometry)&&e.geometry.spatialReference)return void(o.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new v(this.cloneProperties())}cloneProperties(){return q({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(t){const o=this.write();if(o.features&&Array.isArray(t)&&t.length>0)for(let r=0;r<o.features.length;r++){const e=o.features[r];if(e.geometry){const n=t&&t[r];e.geometry=n&&n.toJSON()||e.geometry}}return o}quantize(t){const{scale:[o,r],translate:[e,n]}=t,s=i=>Math.round((i-e)/o),a=i=>Math.round((n-i)/r),l=this.features,y=this._getQuantizationFunction(this.geometryType,s,a);for(let i=0,p=l.length;i<p;i++)y!=null&&y(J(l[i].geometry))||(l.splice(i,1),i--,p--);return this.transform=t,this}unquantize(){const{geometryType:t,features:o,transform:r}=this;if(!r)return this;const{translate:[e,n],scale:[s,a]}=r,l=p=>p*s+e,y=p=>n-p*a,i=this._getHydrationFunction(t,l,y);for(const{geometry:p}of o)h(p)&&i&&i(p);return this.transform=null,this}_quantizePoints(t,o,r){let e,n;const s=[];for(let a=0,l=t.length;a<l;a++){const y=t[a];if(a>0){const i=o(y[0]),p=r(y[1]);i===e&&p===n||(s.push([i-e,p-n]),e=i,n=p)}else e=o(y[0]),n=r(y[1]),s.push([e,n])}return s.length>0?s:null}_getQuantizationFunction(t,o,r){return t==="point"?e=>(e.x=o(e.x),e.y=r(e.y),e):t==="polyline"||t==="polygon"?e=>{const n=d(e)?e.rings:e.paths,s=[];for(let a=0,l=n.length;a<l;a++){const y=n[a],i=this._quantizePoints(y,o,r);i&&s.push(i)}return s.length>0?(d(e)?e.rings=s:e.paths=s,e):null}:t==="multipoint"?e=>{const n=this._quantizePoints(e.points,o,r);return n&&n.length>0?(e.points=n,e):null}:t==="extent"?e=>e:null}_getHydrationFunction(t,o,r){return t==="point"?e=>{e.x=o(e.x),e.y=r(e.y)}:t==="polyline"||t==="polygon"?e=>{const n=d(e)?e.rings:e.paths;let s,a;for(let l=0,y=n.length;l<y;l++){const i=n[l];for(let p=0,g=i.length;p<g;p++){const c=i[p];p>0?(s+=c[0],a+=c[1]):(s=c[0],a=c[1]),c[0]=o(s),c[1]=r(a)}}}:t==="extent"?e=>{e.xmin=o(e.xmin),e.ymin=r(e.ymin),e.xmax=o(e.xmax),e.ymax=r(e.ymax)}:t==="multipoint"?e=>{const n=e.points;let s,a;for(let l=0,y=n.length;l<y;l++){const i=n[l];l>0?(s+=i[0],a+=i[1]):(s=i[0],a=i[1]),i[0]=o(s),i[1]=r(a)}}:null}};f([u({type:String,json:{write:!0}})],m.prototype,"displayFieldName",void 0),f([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"exceededTransferLimit",void 0),f([u({type:[T],json:{write:!0}})],m.prototype,"features",void 0),f([w("features")],m.prototype,"readFeatures",null),f([u({type:[z],json:{write:!0}})],m.prototype,"fields",void 0),f([u({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:R.read}}})],m.prototype,"geometryType",void 0),f([G("geometryType")],m.prototype,"writeGeometryType",null),f([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"hasM",void 0),f([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"hasZ",void 0),f([u({types:j,json:{write:!0}})],m.prototype,"queryGeometry",void 0),f([w("queryGeometry")],m.prototype,"readQueryGeometry",null),f([u({type:x,json:{write:!0}})],m.prototype,"spatialReference",void 0),f([G("spatialReference")],m.prototype,"writeSpatialReference",null),f([u({json:{write:!0}})],m.prototype,"transform",void 0),m=v=f([S("esri.rest.support.FeatureSet")],m),m.prototype.toJSON.isDefaultToJSON=!0;const E=m;export{E as x};
