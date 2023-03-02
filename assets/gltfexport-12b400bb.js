import{H as et}from"./request-b4e08038.js";import{E as v}from"./promiseUtils-28f2a985.js";import{a as U}from"./Extent-8fae2379.js";import{s as st}from"./Error-781981d1.js";import{r as it}from"./ensureType-125d327f.js";import{t as j,r as w,y as rt,F as nt}from"./typedArrayUtil-74bbfd45.js";import{K as ot,k as at}from"./quat-e6aebdaa.js";import{o as ht,r as ct,e as ft}from"./quatf64-3363c48e.js";import{p as B,k as Y,_ as ut,z as lt,n as S,F as H,Z as pt,y as $,l as X}from"./mathUtils-15f63a45.js";import{c as mt}from"./meshFeatureSet-a7b4b285.js";import{f as dt,i as _t}from"./georeference-66adad8f.js";import{C as m,D as b}from"./enums-64ab819c.js";import{o as Z,i as gt,g as wt,s as At}from"./imageutils-80f826d9.js";import{t as D}from"./resourceUtils-71fe9113.js";import"./preload-helper-101896b7.js";import"./string-75082bc6.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./mat3f64-221ce671.js";import"./Graphic-f65f3c78.js";import"./geometry-0d19f94b.js";import"./Polyline-40b9e769.js";import"./typeUtils-3bf84b36.js";import"./PopupTemplate-a7832b3e.js";import"./Clonable-6d5134c7.js";import"./Collection-912f4315.js";import"./Evented-3dfb26f2.js";import"./SimpleObservable-729c9019.js";import"./fieldUtils-39eb4f5d.js";import"./enumeration-94b1319d.js";import"./number-5e819186.js";import"./locale-30120714.js";import"./ActionToggle-dc9b6fc6.js";import"./Identifiable-f5397426.js";import"./symbols-d9f90967.js";import"./CIMSymbol-2f4be01b.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-107b33de.js";import"./symbolLayerUtils3D-15190f75.js";import"./aaBoundingBox-5e14079b.js";import"./persistableUrlUtils-5532b98d.js";import"./collectionUtils-5a99c1c0.js";import"./Portal-0799d17c.js";import"./Loadable-6776e4d9.js";import"./Promise-092442f7.js";import"./PortalGroup-d3a43002.js";import"./PortalUser-092553f2.js";import"./jsonUtils-15ca15d7.js";import"./HandleOwner-124247b4.js";import"./reactiveUtils-31da19f9.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-61f7b102.js";import"./deduplicate-ab6bfb71.js";import"./Indices-07d630fa.js";import"./projection-4083e235.js";import"./mat4-a8da3f27.js";import"./assets-fff829c9.js";import"./zscale-a617710a.js";import"./mat3-53e5916e.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-514b7d97.js";import"./FeatureSet-a2f9f6a7.js";import"./Field-7770b57d.js";import"./fieldType-e429d020.js";import"./BufferView-4e42e0bf.js";import"./vec2-4c517306.js";import"./vec33-1a913d16.js";import"./basicInterfaces-b7051eb1.js";var I;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(I||(I={}));class T{constructor(t,e){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=T.HEADER_SIZE,this._length+=T.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(t);if(this._length+=this._alignTo(s.byteLength,4),e&&(this._length+=T.CHUNK_HEADER_SIZE,this._length+=e.byteLength,e.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,I.JSON,32);e&&this._writeChunk(e,r,I.BIN)}_writeHeader(){this._outView.setUint32(0,T.MAGIC,!0),this._outView.setUint32(4,T.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,s,r=0){const n=this._alignTo(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,s,r,n){new Uint8Array(t,s,n).set(new Uint8Array(e,r,n),0)}_textToArrayBuffer(t){return new TextEncoder().encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}}T.HEADER_SIZE=12,T.CHUNK_HEADER_SIZE=8,T.MAGIC=1179937895,T.VERSION=2;var x,y,E,_,J,C,K;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(x||(x={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(y||(y={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(_||(_={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(J||(J={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(C||(C={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(K||(K={}));let Tt=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const o=this._getElementSize();o>=4&&n!==E.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case m.BYTE:return new Int8Array(t,e);case m.FLOAT:return new Float32Array(t,e);case m.SHORT:return new Int16Array(t,e);case m.UNSIGNED_BYTE:return new Uint8Array(t,e);case m.UNSIGNED_INT:return new Uint32Array(t,e);case m.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case m.UNSIGNED_BYTE:case m.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}finalize(){const t=this._bufferView;return new Promise(e=>{const s=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&s.push(this._asyncWritePromise),e(v(s))}).then(()=>{this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case m.BYTE:case m.UNSIGNED_BYTE:return 1;case m.SHORT:case m.UNSIGNED_SHORT:return 2;case m.UNSIGNED_INT:case m.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case _.SCALAR:return 1;case _.VEC2:return 2;case _.VEC3:return 3;case _.VEC4:case _.MAT2:return 4;case _.MAT3:return 9;case _.MAT4:return 16}}};class W{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new Tt(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){var t;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise(e=>{e(v(this.getViewFinalizePromises()))}).then(()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),(t=this._gltf.extras)==null||t.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}}function bt(i,t){if(i.components)for(const e of i.components)e.faces&&e.shading==="smooth"&&yt(e,t)}function yt(i,t){j(t.normal)&&(t.normal=new Float32Array(t.position.length));const e=i.faces,{position:s,normal:r}=t,n=e.length/3;for(let o=0;o<n;++o){const a=3*e[3*o+0],h=3*e[3*o+1],c=3*e[3*o+2],p=B(xt,s[a+0],s[a+1],s[a+2]),l=B(Rt,s[h+0],s[h+1],s[h+2]),u=B(Nt,s[c+0],s[c+1],s[c+2]),N=Y(l,l,p),R=Y(u,u,p),d=ut(N,N,R);r[a+0]+=d[0],r[a+1]+=d[1],r[a+2]+=d[2],r[h+0]+=d[0],r[h+1]+=d[1],r[h+2]+=d[2],r[c+0]+=d[0],r[c+1]+=d[1],r[c+2]+=d[2]}for(let o=0;o<r.length;o+=3)B(O,r[o],r[o+1],r[o+2]),lt(O,O),r[o+0]=O[0],r[o+1]=O[1],r[o+2]=O[2]}function Et(i){if(w(i.transform))return i.transform.getOriginPoint(i.spatialReference);const t=i.extent.xmax-i.extent.width/2,e=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new U({x:t,y:e,z:s,spatialReference:i.extent.spatialReference})}const xt=S(),Rt=S(),Nt=S(),O=S(),G=st.getLogger("gltf");class Ot{constructor(t,e,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:e,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras,s=e.options.bufferOutputType===x.GLB||e.options.imageOutputType===y.GLB;s&&(e.binChunkBuffer=new W(this.gltf)),t.forEachScene(r=>{this._addScene(r)}),s&&e.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode(s=>{e.nodes||(e.nodes=[]);const r=this._addNode(s);e.nodes.push(r)}),this.gltf.scenes.push(e)}_addNode(t){this.gltf.nodes||(this.gltf.nodes=[]);const e={};t.name&&(e.name=t.name);const s=t.translation;H(s,pt)||(e.translation=$(s));const r=t.rotation;ot(r,ht)||(e.rotation=ct(r));const n=t.scale;H(n,X)||(e.scale=$(n)),t.mesh&&t.mesh.vertexAttributes.position?e.mesh=this._addMesh(t.mesh):t.forEachNode(a=>{e.children||(e.children=[]);const h=this._addNode(a);e.children.push(h)});const o=this.gltf.nodes.length;return this.gltf.nodes.push(e),o}_addMesh(t){this.gltf.meshes||(this.gltf.meshes=[]);const e={primitives:[]},s=this.gltf.extras,r=s.options.bufferOutputType===x.GLB;let n;n=r?s.binChunkBuffer:new W(this.gltf),this.params.origin||(this.params.origin=Et(t));const o=this.params.ignoreLocalTransform?rt(t.transform,f=>new dt({origin:[f.origin[0],f.origin[1],f.origin[2]],geographic:!1})):t.transform,a=_t(t.vertexAttributes,o,this.params.origin,{geographic:this.params.geographic,unit:"meters"});bt(t,a),this._flipYZAxis(a);const h=n.addBufferView(m.FLOAT,_.VEC3,E.ARRAY_BUFFER);let c,p,l,u;a.normal&&(c=n.addBufferView(m.FLOAT,_.VEC3,E.ARRAY_BUFFER)),t.vertexAttributes.uv&&(p=n.addBufferView(m.FLOAT,_.VEC2,E.ARRAY_BUFFER)),a.tangent&&(l=n.addBufferView(m.FLOAT,_.VEC4,E.ARRAY_BUFFER)),t.vertexAttributes.color&&(u=n.addBufferView(m.UNSIGNED_BYTE,_.VEC4,E.ARRAY_BUFFER)),h.startAccessor("POSITION"),c&&c.startAccessor("NORMAL"),p&&p.startAccessor("TEXCOORD_0"),l&&l.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");const N=a.position.length/3,{position:R,normal:d,tangent:g}=a,{color:A,uv:L}=t.vertexAttributes;for(let f=0;f<N;++f)h.push(R[3*f+0]),h.push(R[3*f+1]),h.push(R[3*f+2]),c&&w(d)&&(c.push(d[3*f+0]),c.push(d[3*f+1]),c.push(d[3*f+2])),p&&w(L)&&(p.push(L[2*f+0]),p.push(L[2*f+1])),l&&w(g)&&(l.push(g[4*f+0]),l.push(g[4*f+1]),l.push(g[4*f+2]),l.push(g[4*f+3])),u&&w(A)&&(u.push(A[4*f+0]),u.push(A[4*f+1]),u.push(A[4*f+2]),u.push(A[4*f+3]));const q=h.endAccessor(),k=this._addAccessor(h.index,q);let z,F,V,P,M;if(c){const f=c.endAccessor();z=this._addAccessor(c.index,f)}if(p){const f=p.endAccessor();F=this._addAccessor(p.index,f)}if(l){const f=l.endAccessor();V=this._addAccessor(l.index,f)}if(u){const f=u.endAccessor();P=this._addAccessor(u.index,f)}t.components&&t.components.length>0&&t.components[0].faces?(M=n.addBufferView(m.UNSIGNED_INT,_.SCALAR,E.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(M,t.components,e,k,z,F,V,P)):this._addMeshVertexNonIndexed(t.components,e,k,z,F,V,P),h.finalize(),c&&c.finalize(),p&&p.finalize(),l&&l.finalize(),M&&M.finalize(),u&&u.finalize(),r||n.finalize();const tt=this.gltf.meshes.length;return this.gltf.meshes.push(e),tt}_flipYZAxis({position:t,normal:e,tangent:s}){this._flipYZBuffer(t,3),this._flipYZBuffer(e,3),this._flipYZBuffer(s,4)}_flipYZBuffer(t,e){if(!j(t))for(let s=1,r=2;s<t.length;s+=e,r+=e){const n=t[s],o=t[r];t[s]=o,t[r]=-n}}_addMaterial(t){if(t===null)return;const e=this._materialMap.indexOf(t);if(e!==-1)return e;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(t.alphaMode){case"mask":s.alphaMode=C.MASK;break;case"auto":case"blend":s.alphaMode=C.BLEND}t.alphaCutoff!==.5&&(s.alphaCutoff=t.alphaCutoff),t.doubleSided&&(s.doubleSided=t.doubleSided),s.pbrMetallicRoughness={};const r=a=>a**2.1,n=a=>{const h=a.toRgba();return h[0]=r(h[0]/255),h[1]=r(h[1]/255),h[2]=r(h[2]/255),h};if(w(t.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(t.color)),w(t.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(t.colorTexture)}),w(t.normalTexture)&&(s.normalTexture={index:this._addTexture(t.normalTexture)}),t instanceof mt){if(w(t.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(t.emissiveTexture)}),w(t.emissiveColor)){const a=n(t.emissiveColor);s.emissiveFactor=[a[0],a[1],a[2]]}w(t.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(t.occlusionTexture)}),w(t.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(t.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=t.metallic,s.pbrMetallicRoughness.roughnessFactor=t.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,G.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(t),o}_addTexture(t){const e=this.gltf.textures??[];return this.gltf.textures=e,it(this._textureMap,t,()=>{const s={sampler:this._addSampler(t),source:this._addImage(t)},r=e.length;return e.push(s),r})}_addImage(t){const e=this._imageMap.get(t);if(e!=null)return e;this.gltf.images||(this.gltf.images=[]);const s={};if(t.url)s.uri=t.url;else{const n=t.data;s.extras=n;for(let a=0;a<this.gltf.images.length;++a)if(n===this.gltf.images[a].extras)return a;const o=this.gltf.extras;switch(o.options.imageOutputType){case y.GLB:{const a=o.binChunkBuffer.addBufferView(m.UNSIGNED_BYTE,_.SCALAR);if(D(n))w(n.data)&&a.writeOutToBuffer(n.data,0);else{const h=Z(n).then(({data:c,type:p})=>(s.mimeType=p,c));a.writeAsync(h).then(()=>{a.finalize()})}s.bufferView=a.index;break}case y.DataURI:if(D(n)){G.warnOnce("Image export for basis compressed textures not available.");break}s.uri=gt(n);break;default:if(D(n)){G.warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(Z(n).then(({data:a,type:h})=>{s.uri=a,s.mimeType=h}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=b.REPEAT,s=b.REPEAT;if(typeof t.wrap=="string")switch(t.wrap){case"clamp":e=b.CLAMP_TO_EDGE,s=b.CLAMP_TO_EDGE;break;case"mirror":e=b.MIRRORED_REPEAT,s=b.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":s=b.CLAMP_TO_EDGE;break;case"mirror":s=b.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":e=b.CLAMP_TO_EDGE;break;case"mirror":e=b.MIRRORED_REPEAT}}const r={wrapS:e,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[o]))return o;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(t,e,s,r,n,o,a,h){for(const c of e){t.startAccessor("INDICES");for(let u=0;u<c.faces.length;++u)t.push(c.faces[u]);const p=t.endAccessor(),l={attributes:{POSITION:r},indices:this._addAccessor(t.index,p),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(l.attributes.NORMAL=n),o&&(l.attributes.TEXCOORD_0=o),a&&c.shading!=="flat"&&(l.attributes.TANGENT=a),h&&(l.attributes.COLOR_0=h),s.primitives.push(l)}}_addMeshVertexNonIndexed(t,e,s,r,n,o,a){const h={attributes:{POSITION:s}};r&&(h.attributes.NORMAL=r),n&&(h.attributes.TEXCOORD_0=n),o&&(h.attributes.TANGENT=o),a&&(h.attributes.COLOR_0=a),t&&(h.material=this._addMaterial(t[0].material)),e.primitives.push(h)}}let St=class{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){nt(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}};class Mt{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class Bt{constructor(t){this.mesh=t,this.name="",this.translation=S(),this.rotation=ft(),this.scale=$(X),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){at(this.rotation,t[0],t[1],t[2])}}const It="model.gltf",Q="model.glb";function Ct(i,t,e){var l;const s=new Ot(i,t=t||{},e);let r=s.params;r?r.origin||(r.origin=new U({x:-1,y:-1,z:-1})):r={origin:new U({x:-1,y:-1,z:-1})};const n=r.origin,o=s.gltf,a=((l=o.extras)==null?void 0:l.promises)??[];let h=1,c=1,p=null;return v(a).then(()=>{const u={origin:n};delete o.extras;const N=typeof t.jsonSpacing=="number"?t.jsonSpacing:4,R=JSON.stringify(o,(d,g)=>{if(d!=="extras"){if(g instanceof ArrayBuffer){if(wt(g))switch(t.imageOutputType){case y.DataURI:case y.GLB:break;case y.External:default:{const A=`img${c}.png`;return c++,u[A]=g,A}}switch(t.bufferOutputType){case x.DataURI:return At(g);case x.GLB:if(p)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(p=g);case x.External:default:{const A=`data${h}.bin`;return h++,u[A]=g,A}}}return g}},N);return t.bufferOutputType===x.GLB||t.imageOutputType===y.GLB?u[Q]=new T(R,p).buffer:u[It]=R,u})}function Lt(i,t){return Ct(i,{bufferOutputType:x.GLB,imageOutputType:y.GLB,jsonSpacing:0},t)}class zt{constructor(t,e){this._file={type:"model/gltf-binary",data:t},this.origin=e}buffer(){return Promise.resolve(this._file)}download(t){et(new Blob([this._file.data],{type:this._file.type}),t)}}function is(i,t){const e=new St,s=new Mt;return e.addScene(s),s.addNode(new Bt(i)),Lt(e,t).then(r=>new zt(r[Q],r.origin))}export{is as toBinaryGLTF};
