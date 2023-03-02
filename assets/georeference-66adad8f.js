import{r as B,t as g}from"./typedArrayUtil-74bbfd45.js";import{a as ir,z as sr,V as lr,P as cr,l as fr,$ as ur,L as pr,N as yr}from"./Extent-8fae2379.js";import{e as K}from"./mat3f64-221ce671.js";import{P as mr,h as Q,c as gr,C as hr,B as Tr,f as Ar}from"./mat4-a8da3f27.js";import{e as $,o as $r}from"./mat4f64-1413b4a7.js";import{a as U,o as W,g as C,B as X}from"./mat3-53e5916e.js";import{Z as _,x as j}from"./projection-4083e235.js";import{c as M}from"./spatialReferenceEllipsoidUtils-514b7d97.js";import{e as T,y as A,a as Pr}from"./Accessor-815cb0cf.js";import{l as Fr}from"./JSONSupport-2b897629.js";import"./ensureType-125d327f.js";import{v as z,y as dr,x as Er}from"./quat-e6aebdaa.js";import{e as G}from"./quatf64-3363c48e.js";import{i as Mr,b as xr,m as vr,n as w,e as Rr,O as k,F as _r,y as L,S as Z,z as wr}from"./mathUtils-15f63a45.js";import{T as p,i as u}from"./BufferView-4e42e0bf.js";import{t as d,e as Cr,r as P,o as rr}from"./vec33-1a913d16.js";import{s as Nr}from"./Error-781981d1.js";function E(r=Or){return[r[0],r[1],r[2],r[3]]}function Pt(r,t,e=E()){return Mr(e,r),e[3]=t,e}function Ft(r,t,e=E()){return z(x,r,S(r)),z(D,t,S(t)),dr(x,D,x),br(e,xr(Er(e,x)))}function dt(r){return r}function S(r){return vr(r[3])}function br(r,t){return r[3]=t,r}const Or=[0,0,1,0],x=G(),D=G();E();var V;let m=V=class extends Fr{constructor(r){super(r),this.origin=w(),this.translation=w(),this.rotation=E(),this.scale=Rr(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return z(H,this.rotation,S(this.rotation)),mr(r,H,this.translation,this.scale),r}get localMatrixInverse(){return Q($(),this.localMatrix)}applyLocal(r,t){return k(t,r,this.localMatrix)}applyLocalInverse(r,t){return k(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),n=p.fromTypedArray(e),o=p.fromTypedArray(r);if(this.geographic){const l=M(t),c=$();return _(t,this.origin,c,l),gr(c,c,this.localMatrix),d(n,o,c),j(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;hr(a,$r)?Cr(n,o):d(n,o,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,n]=this.origin;return new ir({x:t,y:e,z:n,spatialReference:r})}equals(r){return B(r)&&this.geographic===r.geographic&&_r(this.origin,r.origin)&&Tr(this.localMatrix,r.localMatrix)}clone(){const r={origin:L(this.origin),translation:L(this.translation),rotation:E(this.rotation),scale:L(this.scale),geographic:this.geographic};return new V(r)}};T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"origin",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),T([A({type:Boolean,nonNullable:!0,json:{write:!0}})],m.prototype,"geographic",void 0),T([A()],m.prototype,"localMatrix",null),T([A()],m.prototype,"localMatrixInverse",null),m=V=T([Pr("esri.geometry.support.MeshTransform")],m);const H=G(),Lr=m;function I(r,t){return r.isGeographic||r.isWebMercator&&((t==null?void 0:t.geographic)??!0)}const N=Nr.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,n,o){return O(n)?(b(h.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o)),o):(N.error("Cannot convert spatial reference to PCPF"),o)}function zr(r,t,e,n,o){return O(n)?(b(h.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o)),o):(N.error("Cannot convert to spatial reference from PCPF"),o)}function Sr(r,t,e){return j(r,t,0,e,M(t),0,r.length/3),e}function Vr(r,t,e){return j(r,M(e),0,t,e,0,r.length/3),t}function Yr(r,t,e){if(g(r))return t;const n=p.fromTypedArray(r),o=p.fromTypedArray(t);return d(o,n,e),t}function jr(r,t,e){if(g(r))return t;C(f,e);const n=u.fromTypedArray(r),o=u.fromTypedArray(t);return P(o,n,f),X(f)||rr(o,o),t}function Gr(r,t,e){if(g(r))return t;C(f,e);const n=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(P(o,n,f),X(f)||rr(o,o),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Ir(r,t,e,n,o){if(!O(n))return N.error("Cannot convert spatial reference to PCPF"),o;b(h.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)o[a]=r[a];return o}function qr(r,t,e,n,o){if(!O(n))return N.error("Cannot convert to spatial reference from PCPF"),o;b(h.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o,16));for(let a=3;a<r.length;a+=4)o[a]=r[a];return o}function b(r,t,e,n,o,a){if(!t)return;const i=e.count,l=M(o);if(tr(o))for(let c=0;c<i;c++)n.getVec(c,v),t.getVec(c,y),_(l,v,R,l),U(f,R),r===h.FROM_PCPF&&W(f,f),Z(y,y,f),a.setVec(c,y);else for(let c=0;c<i;c++){n.getVec(c,v),t.getVec(c,y),_(l,v,R,l),U(f,R);const F=sr(e.get(c,1));let s=Math.cos(F);r===h.TO_PCPF&&(s=1/s),f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s,r===h.FROM_PCPF&&W(f,f),Z(y,y,f),wr(y,y),a.setVec(c,y)}return a}function O(r){return tr(r)||Ur(r)}function tr(r){return r.isWGS84||lr(r)||cr(r)||fr(r)}function Ur(r){return r.isWebMercator}var h;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const v=w(),y=w(),R=$(),f=K();function er(r,t,e){return I(t.spatialReference,e)?Zr(r,t,e):kr(r,t,e)}function Wr(r,t,e){const{position:n,normal:o,tangent:a}=r;if(g(t))return{position:n,normal:o,tangent:a};const i=t.localMatrix;return er({position:Yr(n,new Float64Array(n.length),i),normal:B(o)?jr(o,new Float32Array(o.length),i):null,tangent:B(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function Et(r,t,e){if(e!=null&&e.useTransform){const{position:n,normal:o,tangent:a}=r;return{vertexAttributes:{position:n,normal:o,tangent:a},transform:new Lr({origin:[t.x,t.y,t.z??0],geographic:I(t.spatialReference,e)})}}return{vertexAttributes:er(r,t,e),transform:null}}function J(r,t,e){return I(t.spatialReference,e)?Kr(r,t,e):or(r,t,e)}function Mt(r,t,e,n){if(g(t))return J(r,e,n);const o=Wr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?or(o,e,n):J(o,e,n)}function kr(r,t,e){const n=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<o.length;s+=3)n[s+0]=o[s+0]*c+a,n[s+1]=o[s+1]*c+i,n[s+2]=o[s+2]*F+l;return{position:n,normal:r.normal,tangent:r.tangent}}function Zr(r,t,e){const n=t.spatialReference,o=nr(t,e,Y),a=new Float64Array(r.position.length),i=Dr(r.position,o,n,a),l=C(ar,o);return{position:i,normal:Hr(i,a,r.normal,l,n),tangent:Jr(i,a,r.tangent,l,n)}}function Dr(r,t,e,n){d(p.fromTypedArray(n),p.fromTypedArray(r),t);const o=new Float64Array(r.length);return Vr(n,o,e)}function Hr(r,t,e,n,o){if(g(e))return null;const a=new Float32Array(e.length);return P(u.fromTypedArray(a),u.fromTypedArray(e),n),zr(a,r,t,o,a),a}function Jr(r,t,e,n,o){if(g(e))return null;const a=new Float32Array(e.length);P(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),n);for(let i=3;i<a.length;i+=4)a[i]=e[i];return qr(a,r,t,o,a),a}function or(r,t,e){const n=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<o.length;s+=3)n[s+0]=(o[s+0]-a)/c,n[s+1]=(o[s+1]-i)/c,n[s+2]=(o[s+2]-l)/F;return{position:n,normal:r.normal,tangent:r.tangent}}function Kr(r,t,e){const n=t.spatialReference;nr(t,e,Y);const o=Q(tt,Y),a=new Float64Array(r.position.length),i=Qr(r.position,n,o,a),l=C(ar,o);return{position:i,normal:Xr(r.normal,r.position,a,n,l),tangent:rt(r.tangent,r.position,a,n,l)}}function nr(r,t,e){_(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:n,vertical:o}=q(t?t.unit:null,r.spatialReference);return Ar(e,e,[n,n,o]),e}function Qr(r,t,e,n){const o=Sr(r,t,n),a=p.fromTypedArray(o),i=new Float64Array(o.length),l=p.fromTypedArray(i);return d(l,a,e),i}function Xr(r,t,e,n,o){if(g(r))return null;const a=Br(r,t,e,n,new Float32Array(r.length)),i=u.fromTypedArray(a);return P(i,i,o),a}function rt(r,t,e,n,o){if(g(r))return null;const a=Ir(r,t,e,n,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return P(i,i,o),a}function q(r,t){if(g(r))return et;const e=t.isGeographic?1:ur(t),n=t.isGeographic?1:pr(t),o=yr(1,r,"meters");return{horizontal:o*e,vertical:o*n}}const Y=$(),tt=$(),ar=K(),et={horizontal:1,vertical:1};export{qr as L,Sr as M,Vr as R,Et as _,Ir as a,J as b,E as c,S as d,Pt as e,Lr as f,dt as g,zr as h,Mt as i,Br as j,Wr as k,I as r,Ft as v,er as x};
