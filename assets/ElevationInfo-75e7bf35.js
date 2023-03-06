import{e as r,y as s,l,a as d}from"./JSONSupport-ed372989.js";import{o as c,a as y}from"./cast-73cfc253.js";import{r as E,D as v}from"./typedArrayUtil-96f93e5b.js";import"./ensureType-348c3d61.js";import{o as I,r as w}from"./Extent-fd3ac910.js";import{S as g}from"./fieldUtils-66be74eb.js";import{m}from"./lengthUtils-bc8879ed.js";var u;let i=u=class extends l{constructor(e){super(e)}async collectRequiredFields(e,t){return g(e,t,this.expression)}clone(){return new u({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};r([s({type:String,json:{write:!0}})],i.prototype,"expression",void 0),r([s({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=u=r([d("esri.layers.support.FeatureExpressionInfo")],i);const a=i;function G(e){return 1/(m[e]||1)}function $(){const e=Object.keys(m);return e.sort(),e}const j=$();var p;const n=c()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),f=new y({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let o=p=class extends l{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return e??(t.featureExpression&&t.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,t,x,h){t[x]=e.write({},h),e.expression==="0"&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):E(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new p({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&v(this.featureExpressionInfo,e.featureExpressionInfo)}};r([s({type:a,json:{write:!0}})],o.prototype,"featureExpressionInfo",void 0),r([I("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],o.prototype,"readFeatureExpressionInfo",null),r([w("featureExpressionInfo",{featureExpressionInfo:{type:a},"featureExpression.value":{type:[0]}})],o.prototype,"writeFeatureExpressionInfo",null),r([s({type:n.apiValues,nonNullable:!0,json:{type:n.jsonValues,read:n.read,write:{writer:n.write,isRequired:!0}}})],o.prototype,"mode",null),r([s({type:Number,json:{write:!0}})],o.prototype,"offset",void 0),r([s({type:j,json:{type:String,read:f.read,write:f.write}})],o.prototype,"unit",null),o=p=r([d("esri.layers.support.ElevationInfo")],o);const N=o;export{G as r,N as x};
