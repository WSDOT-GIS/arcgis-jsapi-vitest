import{t as C,r as d,R as O}from"./typedArrayUtil-74bbfd45.js";import{S as $}from"./quat-e6aebdaa.js";import{w as R,l as k,c as D,I as F,e as U}from"./I3SBinaryReader-acda0de1.js";import{Q as z}from"./mathUtils-15f63a45.js";import{r as B,n as A}from"./vec3f32-ad1dc57f.js";import{x as J}from"./projection-319bc7cc.js";import{f as S}from"./Extent-8fae2379.js";import{a as N,b as V,d as T}from"./PointCloudUniqueValueRenderer-19fb6b14.js";import"./mat3f64-221ce671.js";import"./quatf64-3363c48e.js";import"./Error-781981d1.js";import"./string-75082bc6.js";import"./VertexAttribute-15d1866a.js";import"./preload-helper-f8378b50.js";import"./promiseUtils-28f2a985.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./SimpleObservable-729c9019.js";import"./Accessor-815cb0cf.js";import"./ensureType-125d327f.js";import"./mat4-a8da3f27.js";import"./Polyline-40b9e769.js";import"./assets-01239caf.js";import"./request-ae7029ea.js";import"./zscale-a617710a.js";import"./JSONSupport-2b897629.js";import"./cast-f7d2a22f.js";import"./enumeration-94b1319d.js";import"./LegendOptions-540a8245.js";import"./Color-5e799d63.js";import"./colorUtils-639f4d25.js";function _(f,t,l,o){const{rendererJSON:a,isRGBRenderer:m}=f;let n=null,i=null;if(t&&m)n=t;else if(t&&(a==null?void 0:a.type)==="pointCloudUniqueValueRenderer"){i=N.fromJSON(a);const r=i.colorUniqueValueInfos;n=new Uint8Array(3*o);const u=v(i.fieldTransformType);for(let e=0;e<o;e++){const c=(u?u(t[e]):t[e])+"";for(let s=0;s<r.length;s++)if(r[s].values.includes(c)){n[3*e]=r[s].color.r,n[3*e+1]=r[s].color.g,n[3*e+2]=r[s].color.b;break}}}else if(t&&(a==null?void 0:a.type)==="pointCloudStretchRenderer"){i=V.fromJSON(a);const r=i.stops;n=new Uint8Array(3*o);const u=v(i.fieldTransformType);for(let e=0;e<o;e++){const c=u?u(t[e]):t[e],s=r.length-1;if(c<r[0].value)n[3*e]=r[0].color.r,n[3*e+1]=r[0].color.g,n[3*e+2]=r[0].color.b;else if(c>=r[s].value)n[3*e]=r[s].color.r,n[3*e+1]=r[s].color.g,n[3*e+2]=r[s].color.b;else for(let p=1;p<r.length;p++)if(c<r[p].value){const b=(c-r[p-1].value)/(r[p].value-r[p-1].value);n[3*e]=r[p].color.r*b+r[p-1].color.r*(1-b),n[3*e+1]=r[p].color.g*b+r[p-1].color.g*(1-b),n[3*e+2]=r[p].color.b*b+r[p-1].color.b*(1-b);break}}}else if(t&&(a==null?void 0:a.type)==="pointCloudClassBreaksRenderer"){i=T.fromJSON(a);const r=i.colorClassBreakInfos;n=new Uint8Array(3*o);const u=v(i.fieldTransformType);for(let e=0;e<o;e++){const c=u?u(t[e]):t[e];for(let s=0;s<r.length;s++)if(c>=r[s].minValue&&c<=r[s].maxValue){n[3*e]=r[s].color.r,n[3*e+1]=r[s].color.g,n[3*e+2]=r[s].color.b;break}}}else{n=new Uint8Array(3*o);for(let r=0;r<n.length;r++)n[r]=255}if(l&&i&&i.colorModulation){const r=i.colorModulation.minValue,u=i.colorModulation.maxValue,e=.3;for(let c=0;c<o;c++){const s=l[c],p=s>=u?1:s<=r?e:e+(1-e)*(s-r)/(u-r);n[3*c]=p*n[3*c],n[3*c+1]=p*n[3*c+1],n[3*c+2]=p*n[3*c+2]}}return n}function q(f,t){if(f.encoding==null||f.encoding===""){const l=R(t,f);if(C(l.vertexAttributes.position))return;const o=k(t,l.vertexAttributes.position),a=l.header.fields,m=[a.offsetX,a.offsetY,a.offsetZ],n=[a.scaleX,a.scaleY,a.scaleZ],i=o.length/3,r=new Float64Array(3*i);for(let u=0;u<i;u++)r[3*u]=o[3*u]*n[0]+m[0],r[3*u+1]=o[3*u+1]*n[1]+m[1],r[3*u+2]=o[3*u+2]*n[2]+m[2];return r}if(f.encoding==="lepcc-xyz")return D(t).result}function g(f,t,l){return d(f)&&f.attributeInfo.useElevation?t?E(t,l):null:d(f)&&f.attributeInfo.storageInfo?F(f.attributeInfo.storageInfo,f.buffer,l):null}function E(f,t){const l=new Float64Array(t);for(let o=0;o<t;o++)l[o]=f[3*o+2];return l}function P(f,t,l,o,a){const m=f.length/3;let n=0;for(let i=0;i<m;i++){let r=!0;for(let u=0;u<o.length&&r;u++){const{filterJSON:e}=o[u],c=a[u].values[i];switch(e.type){case"pointCloudValueFilter":{const s=e.mode==="exclude";e.values.includes(c)===s&&(r=!1);break}case"pointCloudBitfieldFilter":{const s=w(e.requiredSetBits),p=w(e.requiredClearBits);(c&s)===s&&!(c&p)||(r=!1);break}case"pointCloudReturnFilter":{const s=15&c,p=c>>>4&15,b=p>1,x=s===1,y=s===p;let I=!1;for(const h of e.includedReturns)if(h==="last"&&y||h==="firstOfMany"&&x&&b||h==="lastOfMany"&&y&&b||h==="single"&&!b){I=!0;break}I||(r=!1);break}}}r&&(l[n]=i,f[3*n]=f[3*i],f[3*n+1]=f[3*i+1],f[3*n+2]=f[3*i+2],t[3*n]=t[3*i],t[3*n+1]=t[3*i+1],t[3*n+2]=t[3*i+2],n++)}return n}function v(f){return f==null||f==="none"?null:f==="low-four-bit"?t=>15&t:f==="high-four-bit"?t=>(240&t)>>4:f==="absolute-value"?t=>Math.abs(t):f==="modulo-ten"?t=>t%10:null}function w(f){let t=0;for(const l of f||[])t|=1<<l;return t}class X{transform(t){const l=this._transform(t),o=[l.points.buffer,l.rgb.buffer];d(l.pointIdFilterMap)&&o.push(l.pointIdFilterMap.buffer);for(const a of l.attributes)"buffer"in a.values&&O(a.values.buffer)&&a.values.buffer!==l.rgb.buffer&&o.push(a.values.buffer);return Promise.resolve({result:l,transferList:o})}_transform(t){const l=q(t.schema,t.geometryBuffer);let o=l.length/3,a=null;const m=[],n=g(t.primaryAttributeData,l,o);d(t.primaryAttributeData)&&n&&m.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const i=g(t.modulationAttributeData,l,o);d(t.modulationAttributeData)&&i&&m.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:i});let r=_(t.rendererInfo,n,i,o);if(t.filterInfo&&t.filterInfo.length>0&&d(t.filterAttributesData)){const e=t.filterAttributesData.filter(d).map(c=>{const s=g(c,l,o),p={attributeInfo:c.attributeInfo,values:s};return m.push(p),p});a=new Uint32Array(o),o=P(l,r,a,t.filterInfo,e)}for(const e of t.userAttributesData){const c=g(e,l,o);m.push({attributeInfo:e.attributeInfo,values:c})}3*o<r.length&&(r=new Uint8Array(r.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(l,o,t.elevationOffset);const u=this._transformCoordinates(l,o,t.obb,S.fromJSON(t.inSR),S.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:r,attributes:m,pointIdFilterMap:a}}_transformCoordinates(t,l,o,a,m){if(!J(t,a,0,t,m,0,l))throw new Error("Can't reproject");const n=B(o.center[0],o.center[1],o.center[2]),i=A(),r=A();$(M,o.quaternion);const u=new Float32Array(3*l);for(let e=0;e<l;e++)i[0]=t[3*e]-n[0],i[1]=t[3*e+1]-n[1],i[2]=t[3*e+2]-n[2],z(r,i,M),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(r[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(r[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(r[2])),u[3*e]=i[0],u[3*e+1]=i[1],u[3*e+2]=i[2];return u}_applyElevationOffsetInPlace(t,l,o){if(o!==0)for(let a=0;a<l;a++)t[3*a+2]+=o}}const M=U();function wt(){return new X}export{wt as default};
