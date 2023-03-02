import{b as d,H as p,c as l}from"./jsxFactory-2cf3af56.js";import{c as u}from"./observers-f38c9e72.js";import"./Accessor-815cb0cf.js";import"./typedArrayUtil-74bbfd45.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./string-75082bc6.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./Error-781981d1.js";import"./ensureType-125d327f.js";import"./intl-b83d6b45.js";import"./number-5e819186.js";import"./cast-f7d2a22f.js";import"./locale-30120714.js";import"./messages-dc0c80a1.js";import"./request-b4e08038.js";import"./preload-helper-101896b7.js";import"./assets-fff829c9.js";import"./Evented-3dfb26f2.js";import"./Promise-092442f7.js";import"./reactiveUtils-31da19f9.js";import"./uuid-73213768.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.7
 */const c={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},h="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}",m=d(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=u("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,i)=>{const e=t>1;return!(t&&i>1)&&!e?null:i<t?"retreating":"advancing"},this.updateFlowProps=()=>{const{el:t,items:i}=this,e=Array.from(t.querySelectorAll("calcite-flow-item")).filter(a=>a.closest("calcite-flow")===t),o=i.length,n=e.length,r=e[n-1],s=e[n-2];if(n&&r&&e.forEach(a=>{a.showBackButton=a===r&&n>1,a.hidden=a!==r}),s&&(s.menuOpen=!1),this.items=e,o!==n){const a=this.getFlowDirection(o,n);this.itemCount=n,this.flowDirection=a}},this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,i=t[t.length-1];return i?(i.beforeBack?i.beforeBack:()=>Promise.resolve()).call(i).then(()=>(i.remove(),i)):void 0}connectedCallback(){var t;(t=this.itemMutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){var t;(t=this.itemMutationObserver)==null||t.disconnect()}handleItemBackClick(){this.back()}render(){const{flowDirection:t}=this,i={[c.frame]:!0,[c.frameAdvancing]:t==="advancing",[c.frameRetreating]:t==="retreating"};return l("div",{class:i},l("slot",null))}get el(){return this}static get style(){return h}},[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function f(){if(typeof customElements>"u")return;["calcite-flow"].forEach(i=>{switch(i){case"calcite-flow":customElements.get(i)||customElements.define(i,m);break}})}f();const L=m,$=f;export{L as CalciteFlow,$ as defineCustomElement};
