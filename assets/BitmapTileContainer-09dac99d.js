import{u as p}from"./aaBoundingRect-3cd21eb0.js";import{e as n}from"./mat3f32-6c416b1c.js";import{R as h}from"./Bitmap-ea5a0772.js";import{r as l}from"./TiledDisplayObject-a8c16acc.js";import{w as f}from"./WGLContainer-302ed869.js";import{T as o}from"./enums-b1d611e3.js";import{i as b}from"./TileContainer-41317e18.js";class u extends l{constructor(e,t,r,i,s,a,d=null){super(e,t,r,i,s,a),this.bitmap=new h(d,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[s,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:n(),tileMat3:n()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class y extends b{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this._tileInfoView.getTileBounds(p(),e),r=this._tileInfoView.getTileResolution(e.level),[i,s]=this._tileInfoView.tileInfo.size;return new u(e,r,t[0],t[3],i,s)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[f.bitmap],target:()=>this.children.map(r=>r.bitmap),drawPhase:o.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.MAP&&super.doRender(e)}}export{y as n};
