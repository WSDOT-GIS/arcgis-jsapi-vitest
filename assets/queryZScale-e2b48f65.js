import{t as i}from"./typedArrayUtil-74bbfd45.js";import{o as m}from"./zscale-a617710a.js";function a(r,t,e){if(!e||!e.features||!e.hasZ)return;const o=m(e.geometryType,t,r.outSpatialReference);if(!i(o))for(const f of e.features)o(f.geometry)}export{a as r};
