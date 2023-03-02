import{e as i,y as m,a as J,v as M}from"./Accessor-815cb0cf.js";import{t as s,g as N,r as u}from"./typedArrayUtil-74bbfd45.js";import"./ensureType-125d327f.js";import{v as O}from"./Polyline-40b9e769.js";import{u as V}from"./projection-4083e235.js";import{c as d}from"./aaBoundingRect-3cd21eb0.js";import{a as q}from"./normalizeUtilsSync-f6be8e80.js";import{o as h,i as x,c as z,s as c}from"./mat3-53e5916e.js";import{e as l}from"./mat3f64-221ce671.js";import{r as f}from"./vec2-4c517306.js";import{p as $,S as v,n as A}from"./mathUtils-15f63a45.js";let n=class extends M{constructor(o){super(o)}get bounds(){const o=this.coords;return s(o)||s(o.extent)?null:d(o.extent)}get coords(){var r;const o=(r=N(this.element.georeference))==null?void 0:r.coords;return V(o,this.spatialReference).geometry}get normalizedCoords(){return O.fromJSON(q(this.coords))}get normalizedBounds(){const o=u(this.normalizedCoords)?this.normalizedCoords.extent:null;return u(o)?d(o):null}};i([m()],n.prototype,"spatialReference",void 0),i([m()],n.prototype,"element",void 0),i([m()],n.prototype,"bounds",null),i([m()],n.prototype,"coords",null),i([m()],n.prototype,"normalizedCoords",null),i([m()],n.prototype,"normalizedBounds",null),n=i([J("esri.layers.support.MediaElementView")],n);const e=A(),p=l(),a=l(),y=l();function W(o,r,t){return $(e,r[0],r[1],1),v(e,e,h(p,t)),e[2]===0?f(o,e[0],e[1]):f(o,e[0]/e[2],e[1]/e[2])}function X(o,r,t){return g(a,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),g(y,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),x(o,z(a,a),y),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function g(o,r,t,C,b,B,R,S,j){c(o,r,C,B,t,b,R,1,1,1),$(e,S,j,1),z(p,o);const[k,w,E]=v(e,e,h(p,p));return c(p,k,0,0,0,w,0,0,0,E),x(o,p,o)}export{W as h,X as j,n as u};
