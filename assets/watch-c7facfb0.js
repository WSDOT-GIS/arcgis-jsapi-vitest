import{e as _t,t as vt}from"./ArrayPool-ae2ef0ab.js";import{p as yt,h as W,w as $t}from"./string-75082bc6.js";import{r as X,N as Y,v as kt,j as At,k as L,m as bt}from"./typedArrayUtil-74bbfd45.js";import{t as Z}from"./nextTick-3ee5a785.js";import{D as wt,p as Tt,a as qt}from"./promiseUtils-28f2a985.js";import{s as Ot}from"./Error-781981d1.js";function jt(e){return xt(()=>e.forEach(t=>X(t)&&t.remove()))}function xt(e){return{remove:()=>{e&&(e(),e=void 0)}}}function tt(e){return e?e.__accessor__?e.__accessor__:e.propertyInvalidated?e:null:null}function Dt(e,t){return e!=null&&e.metadatas&&e.metadatas[t]!=null}function he(e,t,s){return s?q(e,t,{policy:s,path:""}):q(e,t,null)}function q(e,t,s){return t?Object.keys(t).reduce((n,r)=>{let i=null,l="merge";if(s&&(i=s.path?`${s.path}.${r}`:r,l=s.policy(i)),l==="replace"||l==="replace-arrays"&&Array.isArray(n[r]))return n[r]=t[r],n;if(n[r]===void 0)return n[r]=yt(t[r]),n;let a=n[r],o=t[r];if(a===o)return n;if(Array.isArray(o)||Array.isArray(n))a=a?Array.isArray(a)?n[r]=a.concat():n[r]=[a]:n[r]=[],o&&(Array.isArray(o)||(o=[o]),o.forEach(h=>{a.includes(h)||a.push(h)}));else if(o&&typeof o=="object")if(s){const h=s.path;s.path=Y(i),n[r]=q(a,o,s),s.path=h}else n[r]=q(a,o,null);else n.hasOwnProperty(r)&&!t.hasOwnProperty(r)||(n[r]=o);return n},e||{}):e}function et(e){return Array.isArray(e)?e:e.split(".")}function B(e){return e.includes(",")?e.split(",").map(t=>t.trim()):[e.trim()]}function Et(e){if(Array.isArray(e)){const t=[];for(const s of e)t.push(...B(s));return t}return B(e)}function st(e,t,s,n){const r=Et(t);if(r.length!==1){const i=r.map(l=>n(e,l,s));return jt(i)}return n(e,r[0],s)}function nt(e){let t=!1;return()=>{t||(t=!0,e())}}function rt(e,t){const s=e[e.length-1]==="?"?e.slice(0,-1):e;if(t.getItemAt!=null||Array.isArray(t)){const r=parseInt(s,10);if(!isNaN(r))return Array.isArray(t)?t[r]:t.getItemAt(r)}const n=tt(t);return Dt(n,s)?n.get(s):t[s]}function it(e,t,s){if(e==null)return e;const n=rt(t[s],e);return!n&&s<t.length-1?void 0:s===t.length-1?n:it(n,t,s+1)}function V(e,t,s=0){return typeof t!="string"||t.includes(".")?it(e,et(t),s):rt(t,e)}function ue(e,t){return V(e,t)}function de(e,t){return V(t,e)!==void 0}var f;(function(e){e[e.Dirty=1]="Dirty",e[e.Overriden=2]="Overriden",e[e.Computing=4]="Computing",e[e.NonNullable=8]="NonNullable",e[e.HasDefaultValue=16]="HasDefaultValue",e[e.DepTrackingInitialized=32]="DepTrackingInitialized",e[e.AutoTracked=64]="AutoTracked",e[e.ExplicitlyTracking=128]="ExplicitlyTracking"})(f||(f={}));const O={onObservableAccessed:()=>{},onTrackingEnd:()=>{}},v=[];let y=O;function It(e){y.onObservableAccessed(e)}let b=!1,w=!1;function m(e,t,s){if(b)return M(e,t,s);at(e);const n=t.call(s);return lt(),n}function fe(e,t){return m(O,e,t)}function M(e,t,s){const n=b;b=!0,at(e);let r=null;try{r=t.call(s)}catch(i){w&&Ot.getLogger("esri.core.accessorSupport.tracking").error(i)}return lt(),b=n,r}function at(e){y=e,v.push(e)}function lt(){const e=v.length;if(e>1){const t=v.pop();y=v[e-2],t.onTrackingEnd()}else if(e===1){const t=v.pop();y=O,t.onTrackingEnd()}else y=O}function Vt(e,t){const s=t.observerObject;if(s.flags&f.DepTrackingInitialized)return;const n=w;w=!1,s.flags&f.AutoTracked?M(t,t.metadata.get,e):Nt(e,t),w=n}const Ut=[];function Nt(e,t){const s=t.observerObject;s.flags&f.ExplicitlyTracking||(s.flags|=f.ExplicitlyTracking,M(t,()=>{const n=t.metadata.dependsOn||Ut;for(const r of n)if(typeof r!="string"||r.includes(".")){const i=et(r);for(let l=0,a=e;l<i.length&&a!=null&&typeof a=="object";++l)a=G(a,i[l],l!==i.length-1)}else G(e,r,!1)}),s.flags&=~f.ExplicitlyTracking)}function G(e,t,s){var i;const n=t[t.length-1]==="?"?t.slice(0,-1):t;if(e.getItemAt!=null||Array.isArray(e)){const l=parseInt(n,10);if(!isNaN(l))return Array.isArray(e)?e[l]:e.getItemAt(l)}const r=(i=tt(e))==null?void 0:i.properties.get(n);return r&&(It(r.observerObject),Vt(e,r)),s?e[n]:void 0}let St=class extends _t{constructor(){super(...arguments),this._set=new Set}destroy(){super.destroy(),this._set=kt(this._set)}acquire(...t){const s=super.acquire(...t);return this._set.delete(s),s}release(t){t&&!this._set.has(t)&&(super.release(t),this._set.add(t))}_dispose(t){this._set.delete(t),super._dispose(t)}},ot=class{constructor(t,s=30){this.name=t,this._counter=0,this._samples=new Array(s)}record(t){X(t)&&(this._samples[++this._counter%this._samples.length]=t)}get median(){return this._samples.slice().sort((t,s)=>t-s)[Math.floor(this._samples.length/2)]}get average(){return this._samples.reduce((t,s)=>t+s,0)/this._samples.length}get last(){return this._samples[this._counter%this._samples.length]}};var N;(function(e){const t=(i,l,a,o)=>{let h=l,c=l;const d=a>>>1,R=i[h-1];for(;c<=d;){c=h<<1,c<a&&o(i[c-1],i[c])<0&&++c;const H=i[c-1];if(o(H,R)<=0)break;i[h-1]=H,h=c}i[h-1]=R},s=(i,l)=>i<l?-1:i>l?1:0;function n(i,l,a,o){l===void 0&&(l=0),a===void 0&&(a=i.length),o===void 0&&(o=s);for(let c=a>>>1;c>l;c--)t(i,c,a,o);const h=l+1;for(let c=a-1;c>l;c--){const d=i[l];i[l]=i[c],i[c]=d,t(i,h,c,o)}}function*r(i,l,a,o){l===void 0&&(l=0),a===void 0&&(a=i.length),o===void 0&&(o=s);for(let c=a>>>1;c>l;c--)t(i,c,a,o),yield;const h=l+1;for(let c=a-1;c>l;c--){const d=i[l];i[l]=i[c],i[c]=d,t(i,h,c,o),yield}}e.sort=n,e.iterableSort=r})(N||(N={}));const J=N,Ct=1.5,Ft=1.1;let ct=class{constructor(t){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new At,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator),t.deallocator!==void 0&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=()=>K(this)))}toArray(){return this.data.slice(0,this.length)}filter(t){const s=new Array;for(let n=0;n<this._length;n++){const r=this.data[n];t(r)&&s.push(r)}return s}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}includes(t,s){const n=this.data.indexOf(t,s);return n!==-1&&n<this.length}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t}else{if(this._deallocator)for(let s=t;s<this._length;++s)this.data[s]=this._deallocator(this.data[s]);this._length=t,this._shrink()}}clear(){this.length=0}prune(){this.clear(),this.data=[]}push(t){this.data[this._length++]=t}pushArray(t,s=t.length){for(let n=0;n<s;n++)this.data[this._length++]=t[n]}fill(t,s){for(let n=0;n<s;n++)this.data[this._length++]=t}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return++this._length,t}unshift(t){this.data.unshift(t),this._length++,K(this)}pop(){if(this.length===0)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const s=L(this.data,t,this.length,this._hint);if(s!==-1)return this.data.splice(s,1),this.length=this.length-1,t}removeUnordered(t){return this.removeUnorderedIndex(L(this.data,t,this.length,this._hint))}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,s=t.length,n){this.length=bt(this.data,t,this.length,s,this._hint,n),this._shrink()}front(){if(this.length!==0)return this.data[0]}back(){if(this.length!==0)return this.data[this.length-1]}swapElements(t,s){if(t>=this.length||s>=this.length||t===s)return;const n=this.data[t];this.data[t]=this.data[s],this.data[s]=n}sort(t){J.sort(this.data,0,this.length,t)}iterableSort(t){return J.iterableSort(this.data,0,this.length,t)}some(t,s){for(let n=0;n<this.length;++n)if(t.call(s,this.data[n],n,this.data))return!0;return!1}find(t,s){for(let n=0;n<this.length;++n){const r=this.data[n];if(t.call(s,r,n))return r}}filterInPlace(t,s){let n=0;for(let r=0;r<this._length;++r){const i=this.data[r];t.call(s,i,r,this.data)&&(this.data[r]=this.data[n],this.data[n]=i,n++)}if(this._deallocator)for(let r=n;r<this._length;r++)this.data[r]=this._deallocator(this.data[r]);return this._length=n,this._shrink(),this}forAll(t,s){const n=this.length,r=this.data;for(let i=0;i<n;++i)t.call(s,r[i],i,r)}forEach(t,s){for(let n=0;n<this.length;++n)t.call(s,this.data[n],n,this.data)}map(t,s){const n=new Array(this.length);for(let r=0;r<this.length;++r)n[r]=t.call(s,this.data[r],r,this.data);return n}reduce(t,s){let n=s;for(let r=0;r<this.length;++r)n=t(n,this.data[r],r,this.data);return n}has(t){const s=this.length,n=this.data;for(let r=0;r<s;++r)if(n[r]===t)return!0;return!1}};function K(e){e.data.length>Ct*e.length&&(e.data.length=Math.floor(e.length*Ft))}function _e(e){return e}let zt=class{constructor(t){this.phases=t,this.paused=!1,this.ticks=-1,this.removed=!1}},Mt=class{constructor(t){this.callback=t,this.isActive=!0}remove(){this.isActive=!1}},S=0;const _={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},C=["prepare","preRender","render","postRender","update","finish"],F=[],g=new ct;let Pt=class{constructor(t){this._task=t}remove(){this._task.removed=!0}pause(){this._task.paused=!0}resume(){this._task.paused=!1}};const j={frameTasks:g,willDispatch:!1,clearFrameTasks:Ht,dispatch:dt,executeFrameTasks:Lt};function Rt(e){const t=new Mt(e);return F.push(t),j.willDispatch||(j.willDispatch=!0,Z(dt)),t}function ke(e){const t=new zt(e);return g.push(t),x==null&&(S=performance.now(),x=requestAnimationFrame(ht)),new Pt(t)}let x=null;function Ht(e=!1){g.forAll(t=>{t.removed=!0}),e&&ut()}function ht(){const e=performance.now();x=null,x=g.length>0?requestAnimationFrame(ht):null,j.executeFrameTasks(e)}function Lt(e){const t=e-S;S=e;const s=1e3/60,n=Math.max(0,t-s);_.time=e,_.frameDuration=s-n;for(let r=0;r<C.length;r++){const i=performance.now(),l=C[r];g.forAll(a=>{var o;a.paused||a.removed||(r===0&&a.ticks++,a.phases[l]&&(_.elapsedFrameTime=performance.now()-e,_.deltaTime=a.ticks===0?0:t,(o=a.phases[l])==null||o.call(a,_)))}),Bt[r].record(performance.now()-i)}ut(),Gt.record(performance.now()-e)}const A=new ct;function ut(){g.forAll(e=>{e.removed&&A.push(e)}),g.removeUnorderedMany(A.data,A.length),A.clear()}function dt(){for(;F.length;){const e=Y(F.shift());e.isActive&&e.callback()}j.willDispatch=!1}function Ae(e=1,t){const s=wt(),n=()=>{Tt(t)?s.reject(qt()):e===0?s():(--e,Z(()=>n()))};return n(),s.promise}const Bt=C.map(e=>new ot(e)),Gt=new ot("total");function Jt(e,t){for(const s of e.entries())if(t(s[0]))return!0;return!1}let Kt=0;function U(){return++Kt}class P{constructor(t){this._notify=t,this._accessed=[],this._handles=[],this._observerObject=new Qt(this._notify),Q.register(this,this._observerObject)}destroy(){var t;this._accessed.length=0,(t=this._observerObject)==null||t.destroy(),this.clear(),Q.unregister(this)}onObservableAccessed(t){const s=this._accessed;s.includes(t)||s.push(t)}onTrackingEnd(){const t=this._handles,s=this._accessed,n=this._observerObject;for(let r=0;r<s.length;++r)t.push(s[r].observe(n));s.length=0}clear(){const t=this._handles;for(let s=0;s<t.length;++s)t[s].remove();t.length=0}}class Qt{constructor(t){this._notify=t,this._invalidCount=0,this.destroyed=!1}onInvalidated(){this._invalidCount++}onCommitted(){if(this.destroyed)return;const t=this._invalidCount;if(t===1)return this._invalidCount=0,void this._notify();this._invalidCount=t>0?t-1:0}destroy(){this.destroyed=!0,this._notify=Wt}}const Q=new FinalizationRegistry(e=>{e.destroy()});function Wt(){}let p=!1;const D=[];function ft(e,t){let s=new P(i),n=null,r=!1;function i(){if(!s||r)return;if(p)return void pt(i);const a=n;s.clear(),p=!0,r=!0,n=m(s,e),r=!1,p=!1,t(n,a),mt()}function l(){s&&(s.destroy(),s=null,n=null)}return r=!0,n=m(s,e),r=!1,{remove:l}}function gt(e,t){let s=new P(r),n=null;function r(){t(n,l)}function i(){s&&(s.destroy(),s=null),n=null}function l(){return s?(s.clear(),n=m(s,e),n):null}return l(),{remove:i}}function be(e){let t=new P(n),s=!1;function n(){t&&!s&&(p?pt(n):(t.clear(),p=!0,s=!0,m(t,e),s=!1,p=!1,mt()))}function r(){t&&(t.destroy(),t=null)}return s=!0,m(t,e),s=!1,{remove:r}}function pt(e){D.includes(e)||D.unshift(e)}function mt(){for(;D.length;)D.pop()()}var $;(function(e){e[e.Untracked=0]="Untracked",e[e.Tracked=1]="Tracked"})($||($={}));class k{constructor(){this.uid=U(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null}static acquireUntracked(t,s,n,r,i){return this.pool.acquire($.Untracked,t,s,n,r,i,W)}static acquireTracked(t,s,n,r){return this.pool.acquire($.Tracked,t,s,n,null,null,r)}notify(t,s){this.type===$.Untracked?this.callback.call(this.target,t,s,this.path,this.target):this.callback.call(null,t,s)}acquire(t,s,n,r,i,l,a){this.uid=U(),this.removed=!1,this.type=t,this.oldValue=s,this.callback=n,this.getValue=r,this.target=i,this.path=l,this.equals=a}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=U(),this.removed=!0}}k.pool=new St(k);const T=new vt,u=new Set;let E;function I(e){u.delete(e),u.add(e),E||(E=Rt(Yt))}function Xt(e){if(e.removed)return;const t=e.oldValue,s=e.getValue();e.equals(t,s)||(e.oldValue=s,e.notify(s,t))}function we(e){for(const t of u.values())t.target===e&&(t.removed=!0)}function Yt(){let e=10;for(;E&&e--;){E=null;const t=Zt(),s=T.acquire();for(const n of t){const r=n.uid;Xt(n),r===n.uid&&n.removed&&s.push(n)}for(const n of u)n.removed&&(s.push(n),u.delete(n));for(const n of s)k.pool.release(n);T.release(s),T.release(t),z.forEach(n=>n())}}function Zt(){const e=T.acquire();e.length=u.size;let t=0;for(const s of u)e[t]=s,++t;return u.clear(),e}const z=new Set;function Te(e){return z.add(e),{remove(){z.delete(e)}}}function te(e,t,s){let n=st(e,t,s,(r,i,l)=>{let a,o,h=gt(()=>V(r,i),(c,d)=>{r.__accessor__.destroyed||a&&a.uid!==o?n.remove():(a||(a=k.acquireUntracked(c,l,d,r,i),o=a.uid),I(a))});return{remove:nt(()=>{h.remove(),a&&(a.uid!==o||a.removed||(a.removed=!0,I(a)),a=null),n=h=null})}});return n}function ee(e,t,s){const n=st(e,t,s,(r,i,l)=>{let a=!1;return ft(()=>V(r,i),(o,h)=>{r.__accessor__.destroyed?n.remove():a||(a=!0,W(h,o)||l.call(r,o,h,i,r),a=!1)})});return n}function qe(e,t,s,n=!1){return!e.__accessor__||e.__accessor__.destroyed?{remove(){}}:n?ee(e,t,s):te(e,t,s)}function se(e,t,s){let n,r,i=gt(e,(l,a)=>{n&&n.uid!==r?i.remove():(n||(n=k.acquireTracked(l,t,a,s),r=n.uid),I(n))});return{remove:nt(()=>{i.remove(),n&&(n.uid!==r||n.removed||(n.removed=!0,I(n)),n=null),i=null})}}function ne(e,t,s){let n=!1;return ft(e,(r,i)=>{n||(n=!0,s(i,r)||t(r,i),n=!1)})}function Oe(e,t,s=!1,n=$t){return s?ne(e,t,n):se(e,t,n)}function je(e){return Jt(u,t=>t.oldValue===e)}export{ke as A,Oe as P,qe as T,It as a,Vt as b,ue as c,we as d,tt as e,m as f,fe as g,_e as h,f as i,U as j,Nt as k,be as l,P as m,xt as n,he as o,ot as p,ct as q,jt as r,de as s,St as t,V as u,Rt as v,Ae as w,je as x,Te as y};
