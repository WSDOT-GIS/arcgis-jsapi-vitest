import{e as o,a as s}from"./JSONSupport-ed372989.js";import"./Error-d97df89f.js";import"./ensureType-348c3d61.js";import"./typedArrayUtil-96f93e5b.js";import"./string-feb899cf.js";import{T as d}from"./enums-b1d611e3.js";import{n as a}from"./BaseGraphicContainer-489a5637.js";import{_ as h}from"./enums-64ab819c.js";let e=class extends a{doRender(r){r.drawPhase===d.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.update(),!this.children.some(n=>n.hasData))return;this.attributeView.bindTextures(r.context),super.renderChildren(r);const{painter:i}=r,t=i.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};e=o([s("esri.views.2d.layers.support.HighlightGraphicContainer")],e);const C=e;export{C as n};
