import{e as r,y as t,a as n}from"./Accessor-815cb0cf.js";import"./ensureType-125d327f.js";import"./typedArrayUtil-74bbfd45.js";import{n as a,a as l}from"./jsonUtils-0607c004.js";const o={read:{reader:a},write:{allowNull:!0,writer:l}},m=i=>{let e=class extends i{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return r([t({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],e.prototype,"blendMode",void 0),r([t({json:{read:!1,write:!1,origins:{"web-map":o,"portal-item":o}}})],e.prototype,"effect",void 0),e=r([n("esri.layers.mixins.BlendLayer")],e),e};export{m as n};
