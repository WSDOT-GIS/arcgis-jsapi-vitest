import{e as r,y as m,a as l}from"./Accessor-815cb0cf.js";import{g as a}from"./Graphic-3183b8e9.js";import"./Error-781981d1.js";import{b as h}from"./ensureType-125d327f.js";import{t as w}from"./typedArrayUtil-74bbfd45.js";import"./string-75082bc6.js";import{j as s,n as y}from"./Collection-912f4315.js";import{t as f,n as _}from"./collectionUtils-5a99c1c0.js";import{a as c}from"./HandleOwner-124247b4.js";let o=class extends c(s){constructor(e){super(e),this.handles.add([this.on("before-add",t=>{w(t.item)&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(s.ofType(this.itemType.Type))(e):new s(e)}};function j(e,t){return{type:e,cast:f,set(p){const n=_(p,this._get(t),e);n.owner=this,this._set(t,n)}}}r([m()],o.prototype,"owner",null),o=r([l("esri.core.support.OwningCollection")],o);let i=class extends o{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([y({Type:a,ensureType:h(a)})],i.prototype,"itemType",void 0),i=r([l("esri.support.GraphicsCollection")],i);export{j as a,i,o as l};
