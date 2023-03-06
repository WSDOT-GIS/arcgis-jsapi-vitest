import{e,y as o,a as d,l as v}from"./JSONSupport-ed372989.js";import{j as c}from"./Collection-d9d92883.js";import{s as $e,a as ne}from"./Error-d97df89f.js";import{r as F,t as Be}from"./typedArrayUtil-96f93e5b.js";import{O as Oe}from"./MultiOriginJSONSupport-97bf66dd.js";import{w as Ce}from"./promiseUtils-ac1bd36f.js";import{a as z,T as $}from"./ensureType-348c3d61.js";import{f as ze,E as ke,w as le,a as Re,o as ge}from"./Extent-fd3ac910.js";import{d as Ie,z as ve,Q as Ne,$ as fe,r as be,n as Ue,i as Y,a as H,a0 as K,e as We,a1 as Je,a2 as Ge,a3 as Qe,u as Xe}from"./mathUtils-b3bee9e7.js";import{b as Ye}from"./Layer-07a07202.js";import{i as He}from"./APIKeyMixin-b93c2049.js";import{p as Ke}from"./ArcGISService-cca20289.js";import{c as Ze,a as et,f as tt,p as it}from"./OperationalLayer-a420b681.js";import{_ as ot}from"./PortalLayer-d54f6a39.js";import{t as rt}from"./ScaleRangeLayer-24099455.js";import{E as st}from"./SceneService-fb2f6b30.js";import{S as nt}from"./arcgisLayerUrl-9d6ab56c.js";import{y as O}from"./Field-b17a677d.js";import{i as A}from"./Clonable-5318ec31.js";import{s as R}from"./Cyclical-0205ad3e.js";import{g as lt}from"./persistable-224e6ae1.js";import{v as ae,y as at}from"./quat-7a51fb0c.js";import{e as re}from"./quatf64-3363c48e.js";import{s as ee}from"./cast-73cfc253.js";import{p as pt}from"./persistableUrlUtils-26091271.js";import{p as X}from"./string-feb899cf.js";import{l as B}from"./Color-9f46ece8.js";import{n as te}from"./collectionUtils-e98ed3f0.js";import{p as ut}from"./popupUtils-3d5141e6.js";import"./nextTick-3ee5a785.js";import"./Evented-e2ee9722.js";import"./SimpleObservable-04055e8d.js";import"./preload-helper-f8378b50.js";import"./geometry-d89d4a34.js";import"./Polyline-9d44200b.js";import"./typeUtils-2ccaf90d.js";import"./request-7c0a9d4c.js";import"./Identifiable-876da2a8.js";import"./Loadable-c96deb83.js";import"./Promise-34cff6d6.js";import"./TimeExtent-d2d7594c.js";import"./ElevationInfo-75e7bf35.js";import"./fieldUtils-66be74eb.js";import"./lengthUtils-bc8879ed.js";import"./opacityUtils-cc413a8c.js";import"./asyncUtils-f0fdc8c7.js";import"./layerUtils-a0871894.js";import"./Portal-172924b2.js";import"./locale-30120714.js";import"./PortalGroup-751b527f.js";import"./PortalUser-7f979a04.js";import"./PortalItem-a25335a3.js";import"./assets-2c955bed.js";import"./portalItemUtils-72345980.js";import"./projection-d7a5b449.js";import"./mat4-1ee69bd5.js";import"./zscale-e06cee6f.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./HeightModelInfo-bad6650e.js";import"./uuid-73213768.js";import"./resourceUtils-cafe8307.js";import"./enumeration-49e09bda.js";import"./fieldType-b21f2e7f.js";import"./resourceExtension-949c6cbc.js";import"./mat3f64-221ce671.js";import"./colorUtils-639f4d25.js";import"./PopupTemplate-63dce4d3.js";import"./number-205e28e0.js";const f=Ue(),Se=re(),xe=re(),we=re(),Te=Y(0,0,1),ct=Y(0,1,0),yt=Y(1,0,0);function C(t){Ie(f,t),ve(f,f);const i=Math.atan2(f[1],f[0]),r=ae(re(),Te,-i);Ne(f,f,r);const s=-1*Math.atan2(f[2],f[0]);return[fe(i)+270,fe(s)+90]}function ie(t,i){return ae(xe,Te,be(t-270)),ae(we,ct,be(i-90)),at(Se,xe,we),Ie(f,yt),Ne(f,f,Se),ve(f,f),[f[0],f[1],f[2]]}let I=class extends A(v){constructor(i){super(i),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,r]=C(this.normal);return R.normalize(z(i),0,!0)}set orientation(i){const r=ie(i,this.tilt);this._set("normal",r),this._set("orientation",i)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,r]=C(this.normal);return R.normalize(z(r),0,!0)}set tilt(i){const r=ie(this.orientation,i);this._set("normal",r),this._set("tilt",i)}};e([o({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>R.normalize(z(t),0,!0))],I.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>R.normalize(z(t),0,!0))],I.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=e([d("esri.layers.voxel.VoxelSlice")],I);const oe=I;let S=class extends A(v){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,r]=C(this.normal);return R.normalize(z(i),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,r]=C(this.normal);return R.normalize(z(r),0,!0)}};e([o({type:Boolean,json:{default:!0,write:!0}})],S.prototype,"enabled",void 0),e([o({type:String,json:{origins:{service:{read:pt}},write:{enabled:!0,isRequired:!0}}}),lt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],S.prototype,"href",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"orientation",null),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"tilt",null),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"normal",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"point",void 0),e([o({type:[$],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"sizeInPixel",void 0),e([o({type:[oe],json:{write:!0}})],S.prototype,"slices",void 0),e([o({type:$,json:{default:0,write:!0}})],S.prototype,"timeId",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"variableId",void 0),S=e([d("esri.layers.voxel.VoxelSection")],S);const pe=S;let U=class extends v{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],U.prototype,"diffuseFactor",void 0),e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],U.prototype,"specularFactor",void 0),U=e([d("esri.layers.voxel.VoxelSimpleShading")],U);const qe=U;let N=class extends v{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};e([o({type:["discrete","continuous"],json:{write:!0}})],N.prototype,"continuity",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"hasNoData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"noData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"offset",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"scale",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"type",void 0),N=e([d("esri.layers.voxel.VoxelFormat")],N);const Ve=N;let j=class extends v{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),e([o({type:Ve,json:{write:!0}})],j.prototype,"originalFormat",void 0),e([o({type:Ve,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),e([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),e([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=e([d("esri.layers.voxel.VoxelVariable")],j);const dt=j;let L=class extends A(v){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};e([o({type:B,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],L.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],L.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],L.prototype,"label",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],L.prototype,"colorLocked",void 0),L=e([d("esri.layers.voxel.VoxelIsosurface")],L);const De=L;let W=class extends A(v){constructor(){super(...arguments),this.color=null,this.position=0}};e([o({type:B,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],W.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"position",void 0),W=e([d("esri.layers.voxel.VoxelColorStop")],W);const ue=W;let J=class extends A(v){constructor(){super(...arguments),this.opacity=1,this.position=0}};e([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],J.prototype,"opacity",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"position",void 0),J=e([d("esri.layers.voxel.VoxelOpacityStop")],J);const ce=J;let G=class extends A(v){constructor(){super(...arguments),this.enabled=!1,this.range=null}};e([o({type:Boolean,json:{default:!1,write:!0}})],G.prototype,"enabled",void 0),e([o({type:[Number],json:{write:!0}})],G.prototype,"range",void 0),G=e([d("esri.layers.voxel.VoxelRangeFilter")],G);const ht=G;var V;(function(t){t[t.Color=1]="Color",t[t.Alpha=2]="Alpha",t[t.Both=3]="Both"})(V||(V={}));let T=class extends A(v){constructor(i){super(i),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(ue)),this.opacityStops=new(c.ofType(ce))}set colorStops(i){this._set("colorStops",te(i,this._get("colorStops"),c.ofType(ue)))}set opacityStops(i){this._set("opacityStops",te(i,this._get("opacityStops"),c.ofType(ce)))}getPreviousNext(i,r,s){let n=i;for(;--n>0&&r[n].type!==s&&r[n].type!==V.Both;);let l=i;const y=r.length;for(;++l<y&&r[l].type!==s&&r[l].type!==V.Both;);return[n,l]}get rasterizedTransferFunction(){const i=[];if(this.colorStops.length<2)return i;const r=[],s=[],n=1e-5;for(const p of this.colorStops){if(!p.color)return i;s.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:V.Color})}if(this.opacityStops.length===0)for(const p of s)r.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const h=H(u.position,0,1),m=Math.round(255*H(1-u.opacity,0,1));let b=!1;for(const g of s)if(g.type===V.Color&&Math.abs(g.position-h)<n){g.color.a=m,g.type=V.Both,b=!0;break}b||s.push({color:{r:0,g:0,b:0,a:m},position:u.position,type:V.Alpha})}s.sort((u,h)=>u.position<h.position?-1:1);const p=s.length;for(let u=0;u<p;++u){const h=s[u];if(h.type!==V.Both)if(h.type===V.Color){const[m,b]=this.getPreviousNext(u,s,V.Alpha);if(m!==-1&&b!==p){const g=(h.position-s[m].position)/(s[b].position-s[m].position);h.color.a=Math.round(K(s[m].color.a,s[b].color.a,g))}else h.color.a=m!==-1?s[m].color.a:s[b].color.a}else{const[m,b]=this.getPreviousNext(u,s,V.Color);if(m!==-1&&b!==p){const g=(h.position-s[m].position)/(s[b].position-s[m].position),k=s[m].color,Ee=s[b].color;["r","g","b"].forEach(se=>{h.color[se]=Math.round(K(k[se],Ee[se],g))})}else["r","g","b"].forEach(m!==-1?g=>{h.color[g]=s[m][g]}:g=>{h.color[g]=s[b][g]})}}for(const u of s)r.push({color:u.color,position:u.position})}r[0].position=0,r[r.length-1].position=1;let l=0,y=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>r[y].position;)l=y++;const h=(u-r[l].position)/(r[y].position-r[l].position),m=r[l].color,b=r[y].color,g=new B;["r","g","b"].forEach(k=>{g[k]=Math.round(K(m[k],b[k],h))}),g.a=H(1-K(m.a,b.a,h)/255,0,1),i.push(g)}return i}getColorForContinuousDataValue(i,r){const s=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||s.length<256)return null;let n=this.stretchRange[0],l=this.stretchRange[1];if(n>l){const p=n;n=l,l=p}i=H(i,n,l);const y=s[Math.round((i-n)/(l-n)*(this._colorMapSize-1))].clone();return r||(y.a=1),y}};e([o({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),e([o({type:c.ofType(ue),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),e([o({type:c.ofType(ce),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),e([o({type:ht,json:{write:!0}})],T.prototype,"rangeFilter",void 0),e([o({type:[B],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=e([d("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const mt=T;let M=class extends A(v){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};e([o({type:B,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),M=e([d("esri.layers.voxel.VoxelUniqueValue")],M);const Ae=M;var ye;let P=ye=class extends v{constructor(t){super(t),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(Ae)),this.isosurfaces=new(c.ofType(De))}clone(){return new ye({variableId:this.variableId,label:this.label,transferFunction:X(this.transferFunction),uniqueValues:X(this.uniqueValues),isosurfaces:X(this.isosurfaces)})}};e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"variableId",void 0),e([o({type:String,json:{write:!0}})],P.prototype,"label",void 0),e([o({type:mt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],P.prototype,"transferFunction",void 0),e([o({type:c.ofType(Ae),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],P.prototype,"uniqueValues",void 0),e([o({type:c.ofType(De),json:{write:{enabled:!0,overridePolicy(){const t=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:t&&i}}}}})],P.prototype,"isosurfaces",void 0),P=ye=e([d("esri.layers.voxel.VoxelVariableStyle")],P);const Fe=P;let Z=class extends v{constructor(){super(...arguments),this.values=null}};e([o({type:[Number],json:{write:!0}})],Z.prototype,"values",void 0),Z=e([d("esri.layers.voxel.VoxelIrregularSpacing")],Z);const vt=Z;let Q=class extends v{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([o({type:Number,json:{write:!0}})],Q.prototype,"scale",void 0),e([o({type:Number,json:{write:!0}})],Q.prototype,"offset",void 0),Q=e([d("esri.layers.voxel.VoxelRegularSpacing")],Q);const gt=Q;let x=class extends v{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var i;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((i=this.irregularSpacing)==null?void 0:i.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e([o({type:vt,json:{write:!0}})],x.prototype,"irregularSpacing",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isPositiveUp",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isWrappedDateLine",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"label",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"quantity",void 0),e([o({type:gt,json:{write:!0}})],x.prototype,"regularSpacing",void 0),e([o({type:Number,json:{write:!0}})],x.prototype,"size",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"unit",void 0),e([o({type:Boolean,json:{read:!1}})],x.prototype,"isRegular",null),x=e([d("esri.layers.voxel.VoxelDimension")],x);const ft=x,Le="esri.layers.voxel.VoxelVolume",je=$e.getLogger(Le);let w=class extends v{constructor(t){super(t),this.id=0,this.dimensions=null,this.spatialReference=ze.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),r=this.dimensions[2],s=r.isRegular?r.getRange():[0,r.size];return[t[0],i[0],s[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),r=this.dimensions[2],s=r.isRegular?r.getRange():[0,r.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return r.isRegular&&!r.isPositiveUp&&(n[2]*=-1),[(t[1]-t[0])/n[0],(i[1]-i[0])/n[1],(s[1]-s[0])/n[2]]}get volumeType(){if(this.isValid){const t=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!t&&i)return"xyt";if(t&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const t=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[t].size]}computeVoxelSpaceLocation(t){var s;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return je.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!ke(this.spatialReference,t.spatialReference))return je.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=Y(t.x,t.y,t.z??0);We(i,i,this.originInLayerSpace3D),Je(i,i,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray((s=r.irregularSpacing)==null?void 0:s.values)&&r.irregularSpacing.values.length>1){const n=t.z??0,l=r.irregularSpacing.values,y=r.isPositiveUp?1:-1,p=l.reduce((u,h)=>Math.abs(y*h-n)<Math.abs(y*u-n)?h:u);for(let u=0;u<l.length;++u)if(l[u]===p){i[2]=u;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(t){var s;if(!this.isValid)return new le({x:0,y:0,spatialReference:this.spatialReference});const i=Ge(t);if(Qe(i,i,this.voxelSizeInLayerSpaceSigned),Xe(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new le({x:i[0],y:i[1],spatialReference:this.spatialReference});const r=this.dimensions[this.zDimension];return r.isRegular||Array.isArray((s=r.irregularSpacing)==null?void 0:s.values)&&(t[2]<0?i[2]=r.irregularSpacing.values[0]:t[2]<r.irregularSpacing.values.length?i[2]=r.irregularSpacing.values[t[2]]:i[2]=r.irregularSpacing.values[r.irregularSpacing.values.length-1],r.isPositiveUp||(i[2]*=-1)),new le({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),e([o({type:[ft],json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"dimensions",void 0),e([o({type:ze,json:{read:{enabled:!1}}})],w.prototype,"spatialReference",void 0),e([o({type:Number,json:{read:!1}})],w.prototype,"zDimension",null),e([o({type:[Boolean],json:{read:!1}})],w.prototype,"isValid",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"originInLayerSpace3D",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"voxelSizeInLayerSpaceSigned",null),e([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],w.prototype,"volumeType",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"sizeInVoxels",null),w=e([d(Le)],w);const Pe=w;var de;let E=de=class extends v{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const t=new de;return t.apronWidth===this.apronWidth&&t.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"apronWidth",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"brickSize",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"maxLodLevel",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"nodeSize",void 0),E=de=e([d("esri.layers.voxel.VoxelVolumeIndex")],E);const bt=E;let q=class extends A(v){constructor(i){super(i),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,r]=C(this.normal);return R.normalize(z(i),0,!0)}set orientation(i){const r=ie(i,this.tilt);this._set("normal",r),this._set("orientation",i)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,r]=C(this.normal);return R.normalize(z(r),0,!0)}set tilt(i){const r=ie(this.orientation,i);this._set("normal",r),this._set("tilt",i)}};e([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>R.normalize(z(t),0,!0))],q.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>R.normalize(z(t),0,!0))],q.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=e([d("esri.layers.voxel.VoxelDynamicSection")],q);const he=q;var me;let D=me=class extends v{constructor(t){super(t),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(oe)),this.dynamicSections=new(c.ofType(he))}set slices(t){this._set("slices",te(t,this._get("slices"),c.ofType(oe)))}set dynamicSections(t){this._set("dynamicSections",te(t,this._get("dynamicSections"),c.ofType(he)))}clone(){return new me({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:X(this.slices),dynamicSections:X(this.dynamicSections)})}};e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"volumeId",void 0),e([o({type:Number,json:{default:1,write:!0}})],D.prototype,"verticalExaggeration",void 0),e([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],D.prototype,"exaggerationMode",void 0),e([o({type:Number,json:{default:0,write:!0}})],D.prototype,"verticalOffset",void 0),e([o({type:c.ofType(oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],D.prototype,"slices",null),e([o({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],D.prototype,"dynamicSections",null),D=me=e([d("esri.layers.voxel.VoxelVolumeStyle")],D);const _e=D,Me="esri.layers.VoxelLayer",_=$e.getLogger(Me);let a=class extends st(Ke(Ze(ot(rt(Oe(He(Ye))))))){constructor(t){super(t),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new qe,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!0,this.popupTemplate=null,this.test=null,this.volumeStyles=new(c.ofType(_e)),this.variableStyles=new(c.ofType(Fe)),this.sections=new(c.ofType(pe)),t!=null&&t.constantUpscaling&&(this.test={constantUpscaling:!0})}set url(t){this._set("url",nt(t,_))}load(t){const i=F(t)?t.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch(Ce).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(r),Promise.resolve(this)}read(t,i){super.read(t,i);for(const r of this.volumes)r.spatialReference=this.spatialReference}readVersion(t,i){return super.parseVersionString(t)}validateLayer(t){if(t.layerType&&t.layerType!==this.operationalLayerType)throw new ne("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new ne("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new ne("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(t,i,r){if(t!=null&&typeof t=="object"){const s=Re.fromJSON(t,r);if(s.zmin===0&&s.zmax===0&&Array.isArray(i.volumes)){const n=Pe.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let y=l.regularSpacing.offset,p=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(y>p){const u=y;y=p,p=u}s.zmin=y,s.zmax=p}}}return s}return null}get voxelFields(){const t=[new O({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new O({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new O({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],i=this.getVolume(null);if(F(i)){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const r=new O({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});t.push(r);const s=new O({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});t.push(s)}if(i.volumeType!=="xyt"){const r=new O({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});t.push(r)}}return t}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(t){const i=this.voxelFields,r=this.title;return ut({fields:i,title:r},t)}getConfiguration(){var i,r;const t={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:(i=this.index)==null?void 0:i.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return t.index&&((r=this.index)!=null&&r.isValid())?JSON.stringify(t):""}getVariableStyle(t){let i=-1;if(i=F(t)?t:this.currentVariableId,!this.variableStyles||i===-1)return null;const r=this.variableStyles.findIndex(s=>s.variableId===i);return r<0?null:this.variableStyles.getItemAt(r)}getVariable(t){let i=-1;if(i=F(t)?t:this.currentVariableId,!this.variables||i===-1)return null;const r=this.variables.findIndex(s=>s.id===i);return r<0?null:this.variables.getItemAt(r)}getVolume(t){const i=this.getVariable(t);return F(i)?this.volumes.find(({id:r})=>r===i.volumeId):null}getVolumeStyle(t){const i=this.getVariable(t);return F(i)?this.volumeStyles.find(({volumeId:r})=>r===i.volumeId):null}getColorForContinuousDataValue(t,i,r){var y;const s=this.getVariable(t);if(Be(s)||((y=s.renderingFormat)==null?void 0:y.continuity)!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===t);if(n<0)return null;const l=this.variableStyles.getItemAt(n);return l.transferFunction?l.transferFunction.getColorForContinuousDataValue(i,r):null}getSections(){const t=[];for(const i of this.sections)t.push(new pe({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return t}getVariableStyles(){const t=[];for(const i of this.variableStyles){const r=this._getVariable(i);if(F(r)){const s=i.clone();s.isosurfaces.length>4&&(s.isosurfaces=s.isosurfaces.slice(0,3),_.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of s.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(s.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(r.renderingFormat.continuity==="continuous")(s.transferFunction===null||s.transferFunction.colorStops.length<2)&&_.error(`VoxelVariableStyle for variable ${r.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),s.transferFunction!==null&&(Array.isArray(s.transferFunction.stretchRange)&&s.transferFunction.stretchRange.length===2||(_.error(`VoxelVariableStyle for variable ${r.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),s.transferFunction.stretchRange=[0,1],s.transferFunction.colorStops.removeAll()));else if(r.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)_.error(`VoxelVariableStyle for variable ${r.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());t.push(s)}else _.error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return t}getVolumeStyles(){const t=[];for(const i of this.volumeStyles){const r=this._getVolumeFromVolumeId(i.volumeId);if(F(r)){const s=i.clone();for(const n of s.slices)this._isPlaneValid(n,[0,1,r.zDimension],r.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of s.dynamicSections)this._isPlaneValid(n,[0,1,r.zDimension],r.dimensions)||(n.enabled=!1,n.label="invalid");t.push(s)}else _.error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return t}_getVariable(t){const i=t.variableId;for(const r of this.variables)if(r.id===i)return r;return null}_getVolumeFromVolumeId(t){for(const i of this.volumes)if(i.id===t)return i;return null}_isPlaneValid(t,i,r){if(!t.point||!Array.isArray(t.point)||t.point.length!==3||!t.normal||!Array.isArray(t.normal)||t.normal.length!==3)return!1;for(let l=0;l<3;++l){const y=t.point[l];if(y<0||y>=r[i[l]].size)return!1}const s=Y(t.normal[0],t.normal[1],t.normal[2]);ve(s,s);const n=1e-6;return!(Math.abs(s[0])+Math.abs(s[1])+Math.abs(s[2])<n)&&(t.normal[0]=s[0],t.normal[1]=s[1],t.normal[2]=s[2],!0)}};e([o({type:["Voxel"]})],a.prototype,"operationalLayerType",void 0),e([o(et)],a.prototype,"legendEnabled",void 0),e([o({json:{write:!0}})],a.prototype,"title",void 0),e([o(tt)],a.prototype,"url",null),e([o({type:c.ofType(pe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],a.prototype,"sections",void 0),e([o({type:$,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],a.prototype,"currentVariableId",void 0),e([o({type:c.ofType(_e),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],a.prototype,"volumeStyles",void 0),e([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],a.prototype,"renderMode",void 0),e([o({type:c.ofType(Fe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],a.prototype,"variableStyles",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],a.prototype,"enableSlices",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],a.prototype,"enableSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],a.prototype,"enableDynamicSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],a.prototype,"enableIsosurfaces",void 0),e([o({type:qe,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],a.prototype,"shading",void 0),e([o({type:["show","hide"]})],a.prototype,"listMode",void 0),e([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),e([o({type:c.ofType(dt)})],a.prototype,"variables",void 0),e([o({type:c.ofType(Pe)})],a.prototype,"volumes",void 0),e([o({type:bt})],a.prototype,"index",void 0),e([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"minScale",void 0),e([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"maxScale",void 0),e([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),e([o({readOnly:!0,json:{name:"serviceVersion"}})],a.prototype,"version",void 0),e([ge("service","version")],a.prototype,"readVersion",null),e([o({type:Re})],a.prototype,"fullExtent",void 0),e([ge("service","fullExtent",["fullExtent"])],a.prototype,"readFullExtent",null),e([o({readOnly:!0,clonable:!1,json:{read:!1}})],a.prototype,"voxelFields",null),e([o(it)],a.prototype,"popupEnabled",void 0),e([o({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),a=e([d(Me)],a);const Xi=a;export{Xi as default};
