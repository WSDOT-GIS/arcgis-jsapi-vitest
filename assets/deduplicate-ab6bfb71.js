import{w as O}from"./mathUtils-15f63a45.js";import{t as R,n as L}from"./Indices-07d630fa.js";function F(f,n,e){const l=Array.isArray(f),r=l?f.length/n:f.byteLength/(4*n),g=l?f:new Uint32Array(f,0,r*n),s=(e==null?void 0:e.minReduction)??0,y=(e==null?void 0:e.originalIndices)||null,q=y?y.length:0,c=(e==null?void 0:e.componentOffsets)||null;let U=0;if(c)for(let t=0;t<c.length-1;t++){const a=c[t+1]-c[t];a>U&&(U=a)}else U=r;const w=Math.floor(1.1*U)+1;(h==null||h.length<2*w)&&(h=new Uint32Array(O(2*w)));for(let t=0;t<2*w;t++)h[t]=0;let i=0;const m=!!c&&!!y,b=m?q:r;let A=R(r/3);const p=new Uint32Array(q),k=1.96;let j=s!==0?Math.ceil(4*k*k/(s*s)*s*(1-s)):b,d=1,v=c?c[1]:b;for(let t=0;t<b;t++){if(t===j){const o=1-i/t;if(o+k*Math.sqrt(o*(1-o)/t)<s)return null;j*=2}if(t===v){for(let o=0;o<2*w;o++)h[o]=0;if(y)for(let o=c[d-1];o<c[d];o++)p[o]=A[y[o]];v=c[++d]}const a=m?y[t]:t,C=a*n,x=B(g,C,n);let u=x%w,I=i;for(;h[2*u+1]!==0;){if(h[2*u]===x){const o=h[2*u+1]-1;if($(g,C,o*n,n)){I=A[o];break}}u++,u>=w&&(u-=w)}I===i&&(h[2*u]=x,h[2*u+1]=a+1,i++),A[a]=I}if(s!==0&&1-i/r<s)return null;if(m){for(let t=c[d-1];t<p.length;t++)p[t]=A[y[t]];A=L(p)}const M=l?new Array(i):new Uint32Array(i*n);i=0;for(let t=0;t<b;t++)A[t]===i&&(z(g,(m?y[t]:t)*n,M,i*n,n),i++);if(y&&!m){const t=new Uint32Array(q);for(let a=0;a<t.length;a++)t[a]=A[y[a]];A=L(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:A,uniqueCount:i}}function $(f,n,e,l){for(let r=0;r<l;r++)if(f[n+r]!==f[e+r])return!1;return!0}function z(f,n,e,l,r){for(let g=0;g<r;g++)e[l+g]=f[n+g]}function B(f,n,e){let l=0;for(let r=0;r<e;r++)l=f[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let h=null;export{F as r};
