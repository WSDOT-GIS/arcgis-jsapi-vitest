import{u as F,e as E}from"./screenUtils-7afeb41c.js";import{s as Z,l as K,h as X,W as $,j as tt,p as et,O as it}from"./cimAnalyzer-e9209d50.js";import{l as rt}from"./Color-5e799d63.js";import{U as at}from"./request-b4e08038.js";import{h as A}from"./typedArrayUtil-74bbfd45.js";import{f as ot}from"./promiseUtils-28f2a985.js";import{o as st}from"./CIMResourceManager-6af81296.js";import{c as nt}from"./Rasterizer-e29c336a.js";import{O as Q,c as mt,t as _,r as J}from"./utils-709f2b59.js";import{m as ct}from"./utils-627d2e72.js";import{s as ht}from"./symbols-d9f90967.js";import{t as H,g as lt}from"./symbolUtils-1d85d6d1.js";import"./fontUtils-dae2860f.js";import"./Error-781981d1.js";import"./string-75082bc6.js";import"./fieldUtils-39eb4f5d.js";import"./preload-helper-101896b7.js";import"./geometry-0d19f94b.js";import"./ensureType-125d327f.js";import"./Extent-8fae2379.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-3cd21eb0.js";import"./mathUtils-15f63a45.js";import"./jsonUtils-15ca15d7.js";import"./GeometryUtils-53652037.js";import"./enums-4b2a86a0.js";import"./alignmentUtils-ae955d28.js";import"./definitions-19bfb61c.js";import"./mat2d-68947564.js";import"./vec2-4c517306.js";import"./vec2f32-eaf29605.js";import"./number-b10bd8f5.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-158f275c.js";import"./floatRGBA-047cef41.js";import"./colorUtils-639f4d25.js";import"./imageutils-80f826d9.js";import"./_commonjsHelpers-2f3e7994.js";import"./rasterizingUtils-263a194f.js";import"./asyncUtils-5c97747c.js";import"./jsonUtils-0607c004.js";import"./parser-527c5e80.js";import"./mat4f32-60a2394b.js";import"./mat4-a8da3f27.js";import"./assets-fff829c9.js";import"./ItemCache-dc80b100.js";import"./MemCache-9d81d118.js";import"./CIMSymbol-2f4be01b.js";import"./enumeration-94b1319d.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./persistableUrlUtils-5532b98d.js";import"./Collection-912f4315.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./collectionUtils-5a99c1c0.js";import"./Portal-0799d17c.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./locale-30120714.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-092553f2.js";import"./Clonable-6d5134c7.js";import"./number-5e819186.js";import"./intl-b83d6b45.js";import"./messages-dc0c80a1.js";import"./LegendOptions-540a8245.js";import"./jsonUtils-f26f043c.js";import"./UniqueValueRenderer-aad2afaf.js";import"./reactiveUtils-31da19f9.js";import"./diffUtils-0b07ec68.js";import"./colorRamps-f3b121e7.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-df772b72.js";import"./Graphic-f65f3c78.js";import"./PopupTemplate-a7832b3e.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./compilerUtils-024563a4.js";import"./lengthUtils-40356f92.js";import"./jsonUtils-40aff029.js";import"./layerUtils-0d596ed5.js";import"./styleUtils-2aef9fa3.js";import"./DictionaryLoader-ceec73f4.js";import"./LRUCache-425021b3.js";import"./deprecate-da2b7904.js";import"./heatmapUtils-8c1efe72.js";import"./vec4f64-aa64c7e9.js";import"./colorUtils-c0f43caf.js";import"./jsxFactory-2cf3af56.js";import"./uuid-73213768.js";import"./webStyleSymbolUtils-1ef26566.js";import"./devEnvironmentUtils-5002a058.js";var Y;(function(u){u.Legend="legend",u.Preview="preview"})(Y||(Y={}));const T=u=>u&&u.scaleFactor?u.scaleFactor:1,pt=96/72;class gt{constructor(t,e){this._spatialReference=t,this._avoidSDF=e,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new Z,this._cimResourceManager=new st,this._rasterizer=new nt(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(t,e,s,r,i,a,c,o){if(!t)return null;const{data:m}=t;if(!m||m.type!=="CIMSymbolReference"||!m.symbol)return null;const{symbol:C}=m;a||(a=Q(C));const M=await K.resolveSymbolOverrides(m,e,this._spatialReference,i,a,c,o);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const p=this._imageDataCanvas,l=this._cimResourceManager,f=[];X.fetchResources(M,l,f),f.length>0&&await Promise.all(f);const{width:h,height:g}=s,d=ut(a,h,g,r),n=X.getEnvelope(M,d,l);if(!n)return null;const b=(window.devicePixelRatio||1)*pt;let y=1,P=0,w=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let R=1;n.width>h&&(R=h/n.width);let k=1;n.height>g&&(k=g/n.height),r==="preview"&&(n.width<h&&(R=h/n.width),n.height<g&&(k=g/n.height)),y=Math.min(R,k),P=n.x+n.width/2,w=n.y+n.height/2}break;case"CIMLineSymbol":{let R=1;n.height>g&&(R=g/n.height),y=R,w=n.y+n.height/2;const k=n.x*y+h/2,z=(n.x+n.width)*y+h/2;if(k<0){const{paths:x}=d;x[0][0][0]-=k}if(z>h){const{paths:x}=d;x[0][2][0]-=z-h}}break;case"CIMPolygonSymbol":{P=n.x+n.width/2,w=n.y+n.height/2;const R=n.x*y+h/2,k=(n.x+n.width)*y+h/2,z=n.y*y+g/2,x=(n.y+n.height)*y+g/2,{rings:S}=d;R<0&&(S[0][0][0]-=R,S[0][3][0]-=R,S[0][4][0]-=R),z<0&&(S[0][0][1]+=z,S[0][1][1]+=z,S[0][4][1]+=z),k>h&&(S[0][1][0]-=k-h,S[0][2][0]-=k-h),x>g&&(S[0][2][1]+=x-g,S[0][3][1]+=x-g)}}p.width=h*b,p.height=g*b;const v=1;p.width+=2*v,p.height+=2*v;const I=p.getContext("2d"),D=it.createIdentity();return D.translate(-P,-w),D.scale(y*b,-y*b),D.translate(h*b/2+v,g*b/2+v),I.clearRect(0,0,p.width,p.height),new $(I,l,D,!0).drawSymbol(M,d),I.getImageData(0,0,p.width,p.height)}async analyzeCIMSymbol(t,e,s,r,i){const a=[],c=e?{geometryType:r,spatialReference:this._spatialReference,fields:e}:null;let o;await tt(t.data,c,this._cimResourceManager,a,this._avoidSDF),ot(i);for(const m of a)m.cim.type!=="CIMPictureMarker"&&m.cim.type!=="CIMPictureFill"&&m.cim.type!=="CIMPictureStroke"||(o||(o=[]),o.push(this._fetchPictureMarkerResource(m,i))),s&&m.type==="text"&&typeof m.text=="string"&&m.text.includes("[")&&(m.text=mt(s,m.text,m.cim.textCase));return o&&await Promise.all(o),a}rasterizeCIMSymbol3D(t,e,s,r,i,a){const c=[];for(const o of t){r&&typeof r.scaleFactor=="function"&&(r.scaleFactor=r.scaleFactor(e,i,a));const m=this._getRasterizedResource(o,e,s,r,i,a);if(!m)continue;let C=0,M=m.anchorX||0,p=m.anchorY||0,l=!1,f=0,h=0;if(s==="esriGeometryPoint"){const g=T(r);if(f=_(o.offsetX,e,i,a)*g||0,h=_(o.offsetY,e,i,a)*g||0,o.type==="marker")C=_(o.rotation,e,i,a)||0,l=!!o.rotateClockwise&&o.rotateClockwise;else if(o.type==="text"){if(C=_(o.angle,e,i,a)||0,o.horizontalAlignment!==void 0)switch(o.horizontalAlignment){case"left":M=-.5;break;case"right":M=.5;break;default:M=0}if(o.verticalAlignment!==void 0)switch(o.verticalAlignment){case"top":p=.5;break;case"bottom":p=-.5;break;case"baseline":p=-.25;break;default:p=0}}}m!=null&&c.push({angle:C,rotateClockWise:l,anchorX:M,anchorY:p,offsetX:f,offsetY:h,rasterizedResource:m})}return this.getSymbolImage(c)}getSymbolImage(t){const e=document.createElement("canvas"),s=A(e.getContext("2d"));let r=0,i=0,a=0,c=0;const o=[];for(let p=0;p<t.length;p++){const l=t[p],f=l.rasterizedResource;if(!f)continue;const h=f.size,g=l.offsetX,d=l.offsetY,n=l.anchorX,b=l.anchorY,y=l.rotateClockWise||!1;let P=l.angle,w=F(g)-h[0]*(.5+n),v=F(d)-h[1]*(.5+b),I=w+h[0],D=v+h[1];if(P){y&&(P=-P);const z=Math.sin(P*Math.PI/180),x=Math.cos(P*Math.PI/180),S=w*x-v*z,j=w*z+v*x,U=w*x-D*z,W=w*z+D*x,L=I*x-D*z,N=I*z+D*x,V=I*x-v*z,q=I*z+v*x;w=Math.min(S,U,L,V),v=Math.min(j,W,N,q),I=Math.max(S,U,L,V),D=Math.max(j,W,N,q)}r=w<r?w:r,i=v<i?v:i,a=I>a?I:a,c=D>c?D:c;const R=s.createImageData(f.size[0],f.size[1]);R.data.set(new Uint8ClampedArray(f.image.buffer));const k={offsetX:g,offsetY:d,rotateClockwise:y,angle:P,rasterizedImage:R,anchorX:n,anchorY:b};o.push(k)}e.width=a-r,e.height=c-i;const m=-r,C=c;for(let p=0;p<o.length;p++){const l=o[p],f=this._imageDataToCanvas(l.rasterizedImage),h=l.rasterizedImage.width,g=l.rasterizedImage.height,d=m-h*(.5+l.anchorX),n=C-g*(.5-l.anchorY);if(l.angle){const b=(360-l.angle)*Math.PI/180;s.save(),s.translate(F(l.offsetX),-F(l.offsetY)),s.translate(m,C),s.rotate(b),s.translate(-m,-C),s.drawImage(f,d,n),s.restore()}else s.drawImage(f,d+F(l.offsetX),n-F(l.offsetY))}const M=new ht({x:m/e.width-.5,y:C/e.height-.5});return{imageData:e.width!==0&&e.height!==0?s.getImageData(0,0,e.width,e.height):s.createImageData(1,1),anchorPosition:M}}async _fetchPictureMarkerResource(t,e){const s=t.materialHash;if(!this._pictureMarkerCache.get(s)){const r=(await at(t.cim.url,{responseType:"image",signal:e&&e.signal})).data;this._pictureMarkerCache.set(s,r)}}_imageDataToCanvas(t){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const e=this._imageDataCanvas,s=A(e.getContext("2d"));return e.width=t.width,e.height=t.height,s.putImageData(t,0,0),e}_imageTo32Array(t,e,s,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,a=A(i.getContext("2d"));if(i.width=e,i.height=s,a.drawImage(t,0,0,e,s),r){a.save();const c=new rt(r);a.fillStyle=c.toHex(),a.globalCompositeOperation="multiply",a.fillRect(0,0,e,s),a.globalCompositeOperation="destination-atop",a.drawImage(t,0,0,e,s),a.restore()}return new Uint32Array(a.getImageData(0,0,e,s).data.buffer)}_getRasterizedResource(t,e,s,r,i,a){let c,o,m;if(t.type==="text")return this._rasterizeTextResource(t,e,r,i,a);({analyzedCIM:c,hash:o}=ft(t,e,i,a));const p=T(r);if(t.cim.type==="CIMPictureMarker"){const h=_(t.size,e,i,a)*p,{image:g,width:d,height:n}=A(this._getPictureResource(t,h,_(t.color,e,i,a)));return m={image:g,size:[d,n],sdf:!1,simplePattern:!1,anchorX:t.anchorPoint?t.anchorPoint.x:0,anchorY:t.anchorPoint?t.anchorPoint.y:0},m}ct(c,p,{preserveOutlineWidth:!1});const l=c;o+=s,r&&(o+=JSON.stringify(r));const f=this._resourceCache;return f.has(o)?f.get(o):(m=this._rasterizer.rasterizeJSONResource({cim:l,type:t.type,url:t.url,mosaicHash:o,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),f.set(o,m),m)}_rasterizeTextResource(t,e,s,r,i){const a=T(s),c=_(t.text,e,r,i);if(!c||c.length===0)return null;const o=_(t.fontName,e,r,i),m=_(t.style,e,r,i),C=_(t.weight,e,r,i),M=_(t.decoration,e,r,i),p=_(t.size,e,r,i)*a,l=_(t.horizontalAlignment,e,r,i),f=_(t.verticalAlignment,e,r,i),h=J(_(t.color,e,r,i)),g=J(_(t.outlineColor,e,r,i)),d={color:h,size:p,horizontalAlignment:l,verticalAlignment:f,font:{family:o,style:m,weight:C,decoration:M},halo:{size:_(t.outlineSize,e,r,i)||0,color:g,style:m},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(c,d)}_getPictureResource(t,e,s){const r=this._pictureMarkerCache.get(t.materialHash);if(!r)return null;const i=r.height/r.width,a=e?i>1?F(e):F(e)/i:r.width,c=e?i>1?F(e)*i:F(e):r.height;return{image:this._imageTo32Array(r,a,c,s),width:a,height:c}}}function ut(u,t,e,s){const i=-t/2+1,a=t/2-1,c=e/2-1,o=-e/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[a,0]]]};default:return s==="legend"?{rings:[[[i,c],[a,0],[a,o],[i,o],[i,c]]]}:{rings:[[[i,c],[a,c],[a,o],[i,o],[i,c]]]}}}function ft(u,t,e,s){let r,i;return typeof u.materialHash=="function"?(r=(0,u.materialHash)(t,e,s),i=et(u.cim,u.materialOverrides)):(r=u.materialHash,i=u.cim),{analyzedCIM:i,hash:r}}const G=new gt(null,!0),O=E(H.size),B=E(H.maxSize),dt=E(H.lineWidth),yt=1;function wt(u){const t=u==null?void 0:u.size;return typeof t=="number"?{width:t,height:t}:{width:t!=null&&typeof t=="object"&&"width"in t?t.width:null,height:t!=null&&typeof t=="object"&&"height"in t?t.height:null}}async function gi(u,t={}){var b;const{node:e,opacity:s,symbolConfig:r}=t,i=typeof r=="object"&&"isSquareFill"in r&&r.isSquareFill,a=t.cimOptions||t,c=a.geometryType||Q((b=u==null?void 0:u.data)==null?void 0:b.symbol),o=wt(t),{feature:m,fieldMap:C}=a;if(o.width==null||o.height==null){const y=await K.resolveSymbolOverrides(u.data,m,null,C,c);if(!y)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:y},u.data.primitiveOverrides=void 0;const P=[];X.fetchResources(y,G.resourceManager,P),P.length>0&&await Promise.all(P);const w=X.getEnvelope(y,null,G.resourceManager),v=w==null?void 0:w.width,I=w==null?void 0:w.height;o.width=c==="esriGeometryPolygon"?O:c==="esriGeometryPolyline"?dt:v!=null&&isFinite(v)?Math.min(v,B):O,o.height=c==="esriGeometryPolygon"?O:I!=null&&isFinite(I)?Math.max(Math.min(I,B),yt):O}const M=await G.rasterizeCIMSymbolAsync(u,m,o,i||c!=="esriGeometryPolygon"?Y.Preview:Y.Legend,C,c);if(!M)return null;const{width:p,height:l}=M,f=document.createElement("canvas");f.width=p,f.height=l,f.getContext("2d").putImageData(M,0,0);const h=F(o.width),g=F(o.height),d=new Image(h,g);d.src=f.toDataURL(),s!=null&&(d.style.opacity=`${s}`);let n=d;if(t.effectView!=null){const y={shape:{type:"image",x:0,y:0,width:h,height:g,src:d.src},fill:null,stroke:null,offset:[0,0]};n=lt([[y]],[h,g],{effectView:t.effectView})}return e&&n&&e.appendChild(n),n}export{gi as previewCIMSymbol};
