import{a as A}from"./Error-781981d1.js";import{E as O,S as T}from"./enums-b1d611e3.js";import{U as x}from"./MaterialKey-34911e37.js";import{r as E}from"./typedArrayUtil-74bbfd45.js";import{g as y}from"./color-e7189c96.js";import{Q as C,W as N}from"./definitions-19bfb61c.js";import{C as t}from"./enums-64ab819c.js";import{u as D}from"./screenUtils-7afeb41c.js";import{u as F}from"./heatmapUtils-8c1efe72.js";import{l as H}from"./Color-5e799d63.js";class p{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,r){return E(e)&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}p.type="default",p.programSpec=null;let g=class extends p{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,r){const{attributes:u,dotValue:m,referenceScale:h,dotSize:c,dotBlendingEnabled:l,seed:a,backgroundColor:d}=r,s=E(e)&&e.type==="dot-density"?e:this._createRendererSchema();s.dotValue=m,s.dotSize=c,s.dotScale=h,s.dotBlending=l,s.seed=a;const{colors:b,activeDots:S,backgroundColor:i}=s;for(let o=0;o<C;o++){const R=o>=u.length?null:u[o].color;y(b,R,4*o)}for(let o=0;o<8;o++)S[o]=o<r.attributes.length?1:0;return y(i,d),s}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}};g.type="dot-density",g.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:t.SHORT},{location:1,name:"a_id",count:3,type:t.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:t.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:t.FLOAT}]}};class f extends p{static getStorageSpec({field:e,valueExpression:r}){return{visualVariables:!1,attributes:e||r?[{field:e,valueExpression:r}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,r){const{radius:u,minDensity:m,maxDensity:h,referenceScale:c,field:l,valueExpression:a,colorStops:d}=r,s=h-m,b=l||a?1:0,S=d.map(({color:R,ratio:v})=>`${v}:${R.toString()}`).join();let i,o=!0;return E(e)&&e.type==="heatmap"?(i=e,o=S!==e.gradientHash):i=this._createRendererSchema(),i.radius=D(u),i.minDensity=m,i.densityRange=s,i.referenceScale=c,i.isFieldActive=b,o&&(i.gradient=F(d),i.gradientHash=S),i}}f.type="heatmap",f.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:t.SHORT},{location:1,name:"a_vertexOffset",count:2,type:t.SHORT},{location:4,name:"a_id",count:4,type:t.UNSIGNED_BYTE}]}};class _ extends p{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*N),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,r){const{attributes:u,defaultColor:m,holePercentage:h,othersCategory:c,outline:l}=r,a=E(e)&&e.type==="pie-chart"?e:this._createRendererSchema();for(let d=0;d<N;d++){const s=d>=u.length?new H([0,0,0,0]):u[d].color;y(a.colors,s,4*d)}return y(a.defaultColor,m),y(a.othersColor,c==null?void 0:c.color),y(a.outlineColor,l==null?void 0:l.color),a.outlineWidth=D((l==null?void 0:l.width)||0),a.holePercentage=h,a.sectorThreshold=(c==null?void 0:c.threshold)||0,a.numberOfFields=u.length,a}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}_.type="pie-chart",_.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:t.SHORT},{location:1,name:"a_vertexOffset",count:2,type:t.SHORT},{location:2,name:"a_texCoords",count:2,type:t.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:t.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:t.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:t.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:t.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:t.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:t.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};function P(n,e){if(n.type!==e)throw new A("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${n.type}"`)}function W(n){switch(n==null?void 0:n.type){case"dot-density":return g;case"heatmap":return f;case"pie-chart":return _;default:return p}}function M(n){const{geometryType:e,symbologyType:r}=x.load(n);switch(e){case O.FILL:if(r===T.DOT_DENSITY)return g;break;case O.MARKER:switch(r){case T.HEATMAP:return f;case T.PIE_CHART:return _}}return p}export{W as c,p as e,M as p,P as s};
