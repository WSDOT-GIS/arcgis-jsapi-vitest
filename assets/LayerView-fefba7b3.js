import{e as t,y as i,a as c,l as P,v as q}from"./JSONSupport-ed372989.js";import{j as O}from"./Collection-d9d92883.js";import{n as A}from"./collectionUtils-e98ed3f0.js";import{a as x,s as I}from"./Error-d97df89f.js";import{l as d,w as l,a as V}from"./reactiveUtils-307e98f9.js";import"./ensureType-348c3d61.js";import{B as $}from"./typedArrayUtil-96f93e5b.js";import{h as j}from"./Container-b72af0ce.js";import{c as C}from"./index-738baf21.js";import"./geometry-d89d4a34.js";import{p as U,a as N}from"./Extent-fd3ac910.js";import{v as L}from"./jsonUtils-dd0891e0.js";import{v as H}from"./Polyline-9d44200b.js";import{n as M}from"./Evented-e2ee9722.js";import{a as _}from"./HandleOwner-4c8d824c.js";import{s as E}from"./Identifiable-876da2a8.js";import{m as T}from"./Promise-34cff6d6.js";let y=class extends P{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([i({readOnly:!0})],y.prototype,"version",null),y=t([c("esri.views.layers.support.ClipArea")],y);const R=y;var f;let h=f=class extends R{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([i({type:[Number,String],json:{write:!0}})],h.prototype,"left",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"right",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0),h=f=t([c("esri.views.layers.support.ClipRect")],h);const k=h;var w;const D={base:U,key:"type",typeMap:{extent:N,polygon:H}};let m=w=class extends R{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e;return new w({geometry:((e=this.geometry)==null?void 0:e.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([i({types:D,json:{read:L,write:!0}})],m.prototype,"geometry",void 0),m=w=t([c("esri.views.layers.support.Geometry")],m);const z=m;let v=class extends R{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([i({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=t([c("esri.views.layers.support.Path")],v);const B=v,g=O.ofType({key:"type",base:null,typeMap:{rect:k,path:B,geometry:z}}),pe=e=>{let r=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new g,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var p,u,b;const s=((p=this.view)==null?void 0:p.spatialReferenceLocked)??!0;((u=this.view)==null?void 0:u.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new x("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new j),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([d(()=>this.suspended,a=>{this.container&&(this.container.visible=!a),this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},l),d(()=>{var a;return((a=this.layer)==null?void 0:a.opacity)??1},a=>{this.container&&(this.container.opacity=a)},l),d(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},l),d(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},l),d(()=>this.highlightOptions,a=>this.container.highlightOptions=a,l),V(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l),d(()=>{var a;return{scale:(a=this.view)==null?void 0:a.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:a})=>{const S=a!=null&&this.isVisibleAtScale(a);S!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",S)},l)],"constructor"),(b=this.view)!=null&&b.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var n;const s=(n=this.view)==null?void 0:n.spatialReference;return s==null||this.supportsSpatialReference(s)}get updating(){var s;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((s=this.updatingHandles)!=null&&s.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(s){const n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!n)return!0;const{minScale:p,maxScale:u}=n;return(p===0||s<=p)&&(u===0||s>=u)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(s){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",s),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(s))):this.updateRequested=!1}hitTest(s,n){return Promise.resolve(null)}supportsSpatialReference(s){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const s=super.getSuspendInfo(),n=!this.spatialReferenceSupported,p=this.visibleAtCurrentScale;return n&&(s.spatialReferenceNotSupported=n),p&&(s.outsideScaleRange=p),s}addAttachHandles(s){this.addHandles(s,"attach")}};return t([i()],r.prototype,"attached",void 0),t([i({type:g,set(s){const n=A(s,this._get("clips"),g);this._set("clips",n)}})],r.prototype,"clips",void 0),t([i()],r.prototype,"container",void 0),t([i()],r.prototype,"moving",void 0),t([i({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),t([i({readOnly:!0})],r.prototype,"updateParameters",void 0),t([i()],r.prototype,"updateRequested",void 0),t([i()],r.prototype,"updating",null),t([i()],r.prototype,"view",void 0),t([i({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),t([i({type:C})],r.prototype,"highlightOptions",void 0),r=t([c("esri.views.2d.layers.LayerView2D")],r),r};let o=class extends _(E(T(M.EventedMixin(q)))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const r=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";I.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${r}')`,e)}})}get fullOpacity(){return $(this.get("layer.opacity"),1)*$(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this.updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,r,s;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((s=this.view)==null?void 0:s.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},r=this;return r.view&&r.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};t([i()],o.prototype,"fullOpacity",null),t([i()],o.prototype,"layer",void 0),t([i()],o.prototype,"parent",void 0),t([i({readOnly:!0})],o.prototype,"suspended",null),t([i({readOnly:!0})],o.prototype,"suspendInfo",null),t([i({readOnly:!0})],o.prototype,"legendEnabled",null),t([i({type:Boolean,readOnly:!0})],o.prototype,"updating",null),t([i({readOnly:!0})],o.prototype,"updatingProgress",null),t([i()],o.prototype,"visible",null),t([i()],o.prototype,"view",void 0),o=t([c("esri.views.layers.LayerView")],o);const le=o;export{pe as f,le as u};
