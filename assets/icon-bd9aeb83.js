import{b as u,H as p,E as b,c as m,u as g,C as v,B as y,J as w}from"./jsxFactory-2cf3af56.js";import{c as D}from"./observers-f38c9e72.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.7
 */const z={icon:"icon",flipRtl:"flip-rtl"},h={},f={},d={s:16,m:24,l:32};async function k({icon:t,scale:i}){const n=d[i],a=x(t),s=a.charAt(a.length-1)==="F",e=`${s?a.substring(0,a.length-1):a}${n}${s?"F":""}`;if(h[e])return h[e];f[e]||(f[e]=fetch(w(`./assets/icon/${e}.json`)).then(r=>r.json()).catch(()=>(console.error(`"${e}" is not a valid calcite-ui-icon name`),"")));const c=await f[e];return h[e]=c,c}function x(t){const i=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const s=/[a-z]/i;t=n.map((l,e)=>l.replace(s,function(r,o){return e===0&&o===0?r:r.toUpperCase()})).join("")}return i?`i${t}`:t}const C="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}",I=u(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:n,scale:a,textLabel:s}=this,l=b(t),e=d[a],c=!!s,r=[].concat(n||"");return m(v,{"aria-hidden":g(!c),"aria-label":c?s:null,role:c?"img":null},m("svg",{"aria-hidden":"true",class:{[z.flipRtl]:l==="rtl"&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${e} ${e}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},r.map(o=>typeof o=="string"?m("path",{d:o}):m("path",{d:o.d,opacity:"opacity"in o?o.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:i,visible:n}=this;!y.isBrowser||!t||!n||(this.pathData=await k({icon:t,scale:i}))}waitUntilVisible(t){if(this.intersectionObserver=D("intersection",i=>{i.forEach(n=>{n.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return C}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function _(){if(typeof customElements>"u")return;["calcite-icon"].forEach(i=>{switch(i){case"calcite-icon":customElements.get(i)||customElements.define(i,I);break}})}_();export{I,_ as d};
