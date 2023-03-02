import{a as B}from"./string-75082bc6.js";import{o as S}from"./mathUtils-15f63a45.js";import{r as T,t as R,g as $}from"./typedArrayUtil-74bbfd45.js";import{s as V,a as k}from"./Error-781981d1.js";import{r as M}from"./context-util-31041918.js";import{M as g,L as E,D,t as L,G as y,P as b,U as w,u as z}from"./enums-64ab819c.js";const K=V.getLogger("esri.views.webgl.checkWebGLError");function H(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const O=!!B("enable-feature:webgl-debug");function Y(){return O}function ot(){return O}function A(t){if(Y()){const e=t.getError();if(e){const i=H(t,e),r=new Error().stack;K.error(new k("webgl-error","WebGL error occured",{message:i,stack:r}))}}}const U={target:g.TEXTURE_2D,samplingMode:E.LINEAR,wrapMode:D.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},v=4;let _=class{constructor(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,t.instanceCounter.increment(L.Texture,this),this._descriptor={...U,...e};for(const r in U)this._descriptor[r]===void 0&&(this._descriptor[r]=U[r]);if(t.type!==M.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),x(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(L.Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;if(i.width!==t||i.height!==e){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");i.width=t,i.height=e,this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=g.TEXTURE_CUBE_MAP_POSITIVE_X;e<=g.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(t,e){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),t===void 0&&(t=null);const r=this._descriptor,o=e??r.target,s=x(o);t===null&&(r.width=r.width||v,r.height=r.height||v,s&&(r.depth=r.depth??1));const h=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),_._validateTexture(this._context,r),this._configurePixelStorage(),A(i);const n=r.pixelFormat;let a=r.internalFormat??this._deriveInternalFormat(n,r.dataType);if(N(t)){let l=t.width,p=t.height;const u=1;t instanceof HTMLVideoElement&&(l=t.videoWidth,p=t.videoHeight),r.width&&r.height,s&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,a,r.hasMipmap,l,p,u),this._texImage(o,0,a,l,p,u,t),A(i),r.hasMipmap&&this.generateMipmap(),r.width===void 0&&(r.width=l),r.height===void 0&&(r.height=p),s&&r.depth===void 0&&(r.depth=u)}else{const{width:l,height:p,depth:u}=r;if(l==null||p==null)throw new Error("Width and height must be specified!");if(s&&u==null)throw new Error("Depth must be specified!");if(r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,a,r.hasMipmap,l,p,u),i.DEPTH24_STENCIL8&&a===i.DEPTH_STENCIL&&(a=i.DEPTH24_STENCIL8),P(t)){const m=t.levels,d=F(o,l,p,u),c=Math.min(d-1,m.length-1);T(this._context.gl2)?i.texParameteri(r.target,this._context.gl2.TEXTURE_MAX_LEVEL,c):r.hasMipmap=r.hasMipmap&&d===m.length;const f=a;if(!Z(f))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((I,G,X,W)=>{const C=m[Math.min(I,m.length-1)];this._compressedTexImage(o,I,f,G,X,W,C)},c)}else T(t)?(this._texImage(o,0,a,l,p,u,t),A(i),r.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((m,d,c,f)=>{this._texImage(o,m,a,d,c,f,null),A(i)})}_._applySamplingMode(i,this._descriptor),_._applyWrapMode(i,this._descriptor),_._applyAnisotropicFilteringParameters(this._context,this._descriptor),A(i),this._context.bindTexture(h,_.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,r,o,s,h=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,a=this._descriptor,{pixelFormat:l,dataType:p,target:u,isImmutable:m}=a,d=a.internalFormat??this._deriveInternalFormat(l,p);if(m&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const c=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES,!0);if((e<0||i<0||r>a.width||o>a.height||e+r>a.width||i+o>a.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),h){if(R(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");n.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,h)}if(N(s)?T(this._context.gl2)?this._context.gl2.texSubImage2D(u,t,e,i,r,o,l,p,s):n.texSubImage2D(u,t,e,i,l,p,s):P(s)?n.compressedTexSubImage2D(u,t,e,i,r,o,d,s.levels[t]):n.texSubImage2D(u,t,e,i,r,o,l,p,s),h){if(R(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");n.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(c,_.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,e,i,r,o,s,h,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl2;if(R(a))throw new Error("3D textures are not supported in WebGL1");const l=this._descriptor,{pixelFormat:p,dataType:u,isImmutable:m,target:d}=l,c=l.internalFormat??this._deriveInternalFormat(p,u);if(m&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");x(d)||console.warn("Attempting to set 3D texture data on a non-3D texture");const f=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),(e<0||i<0||r<0||o>l.width||s>l.height||h>l.depth||e+o>l.width||i+s>l.height||r+h>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),P(n))n=n.levels[t],a.compressedTexSubImage3D(d,t,e,i,r,o,s,h,c,n);else{const I=n;a.texSubImage3D(d,t,e,i,r,o,s,h,p,u,I)}this._context.bindTexture(f,_.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,_._validateTexture(this._context,t)}t.samplingMode===E.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=E.LINEAR_MIPMAP_NEAREST):t.samplingMode===E.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=E.NEAREST_MIPMAP_NEAREST);const e=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,_.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,_._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(_._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(_._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if(this._context.type===M.WEBGL1)return t;switch(e){case y.FLOAT:switch(t){case b.RGBA:return w.RGBA32F;case b.RGB:return w.RGB32F;default:throw new Error("Unable to derive format")}case y.UNSIGNED_BYTE:switch(t){case b.RGBA:return w.RGBA8;case b.RGB:return w.RGB8}default:return t}}_configurePixelStorage(){const t=this._context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(t,e,i,r,o,s){const h=this._context.gl2;if(R(h))throw new Error("Immutable textures are not supported in WebGL1");if(!q(e))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const n=i?F(t,r,o,s):1;if(x(t)){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");h.texStorage3D(t,n,e,r,o,s)}else h.texStorage2D(t,n,e,r,o);this._wasImmutablyAllocated=!0}_texImage(t,e,i,r,o,s,h){const n=this._context.gl;let a=null;const l=this._context.type===M.WEBGL2,p=x(t),{isImmutable:u,pixelFormat:m,dataType:d}=this._descriptor;if(l&&(a=n),l||!N(h))if(u){if(T(h)){const c=h;if(p){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");a.texSubImage3D(t,e,0,0,0,r,o,s,m,d,c)}else n.texSubImage2D(t,e,0,0,r,o,m,d,c)}}else{const c=$(h);if(p){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");a.texImage3D(t,e,i,r,o,s,0,m,d,c)}else n.texImage2D(t,e,i,r,o,0,m,d,c)}else n.texImage2D(t,0,i,m,d,h)}_compressedTexImage(t,e,i,r,o,s,h){const n=this._context.gl;let a=null;const l=x(t),p=this._descriptor.isImmutable;if(l){if(this._context.type!==M.WEBGL2)throw new Error("3D textures are not supported in WebGL1");a=n}if(p){if(T(h))if(l){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");a.compressedTexSubImage3D(t,e,0,0,0,r,o,s,i,h)}else n.compressedTexSubImage2D(t,e,0,0,r,o,i,h)}else if(l){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");a.compressedTexImage3D(t,e,i,r,o,s,0,h)}else n.compressedTexImage2D(t,e,i,r,o,0,h)}_forEachMipmapLevel(t,e=1/0){let{width:i,height:r,depth:o,hasMipmap:s,target:h}=this._descriptor;const n=h===g.TEXTURE_3D;if(i==null||r==null||n&&o==null)throw new Error("Missing texture dimensions for mipmap calculation");for(let a=0;t(a,i,r,o),s&&(i!==1||r!==1||n&&o!==1)&&!(a>=e);++a)i=Math.max(1,i>>1),r=Math.max(1,r>>1),n&&(o=Math.max(1,o>>1))}static _validateTexture(t,e){(e.width!=null&&e.width<0||e.height!=null&&e.height<0||e.depth!=null&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!");const i=t.type===M.WEBGL2,r=e.width!=null&&S(e.width)&&e.height!=null&&S(e.height);i||!e.isImmutable&&!x(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),i||r||(typeof e.wrapMode=="number"?e.wrapMode!==D.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===D.CLAMP_TO_EDGE&&e.wrapMode.t===D.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,r=e.samplingMode;i===E.LINEAR_MIPMAP_NEAREST||i===E.LINEAR_MIPMAP_LINEAR?(i=E.LINEAR,e.hasMipmap||(r=E.LINEAR)):i!==E.NEAREST_MIPMAP_NEAREST&&i!==E.NEAREST_MIPMAP_LINEAR||(i=E.NEAREST,e.hasMipmap||(r=E.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){const i=t.capabilities.textureFilterAnisotropic;i&&t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}};function q(t){return t in w}function Z(t){return t in z}function P(t){return T(t)&&"type"in t&&t.type==="compressed"}function j(t){return T(t)&&"byteLength"in t}function N(t){return T(t)&&!P(t)&&!j(t)}function x(t){return t===g.TEXTURE_3D||t===g.TEXTURE_2D_ARRAY}function F(t,e,i,r=1){let o=Math.max(e,i);return t===g.TEXTURE_3D&&(o=Math.max(o,r)),Math.round(Math.log(o)/Math.LN2)+1}_.TEXTURE_UNIT_FOR_UPDATES=0;export{_ as E,Y as a,ot as c,A as u};
