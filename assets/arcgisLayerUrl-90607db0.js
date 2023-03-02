import{t as y,r as i}from"./typedArrayUtil-74bbfd45.js";import{L as o,j as c,P as f,V as w}from"./request-b4e08038.js";import{f as S}from"./persistableUrlUtils-5532b98d.js";const p={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},v=Object.values(p),d=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${v.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),g=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${v.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),C=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function $(e){return!!d.test(e)}function m(e){if(y(e))return null;const r=o(e),t=r.path.match(d)||r.path.match(g);if(!t)return null;const[,n,s,l,u]=t,a=s.indexOf("/");return{title:h(a!==-1?s.slice(a+1):s),serverType:p[l.toLowerCase()],sublayer:u!=null&&u!==""?parseInt(u,10):null,url:{path:n}}}function I(e){const r=o(e).path.match(C);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function h(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function x(e,r){const t=[];if(e){const n=m(e);i(n)&&n.title&&t.push(n.title)}if(r){const n=h(r);t.push(n)}if(t.length===2){if(t[0].toLowerCase().includes(t[1].toLowerCase()))return t[0];if(t[1].toLowerCase().includes(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function U(e){if(!e)return!1;const r=".arcgis.com/",t="//services",n="//tiles",s="//features",l=(e=e.toLowerCase()).includes(r),u=e.includes(t)||e.includes(n)||e.includes(s);return l&&u}function E(e,r){return e&&c(f(e,r))}function O(e){let{url:r}=e;if(!r)return{url:r};r=f(r,e.logger);const t=o(r),n=m(t.path);let s;if(i(n))n.sublayer!=null&&e.layer.layerId==null&&(s=n.sublayer),r=n.url.path;else if(e.nonStandardUrlAllowed){const l=I(t.path);i(l)&&(r=l.serviceUrl,s=l.sublayerId)}return{url:c(r),layerId:s}}function P(e,r,t,n,s){S(r,n,"url",s),n.url&&e.layerId!=null&&(n.url=w(n.url,t,e.layerId.toString()))}function R(e){if(!e)return!1;const r=e.toLowerCase(),t=r.includes("/services/"),n=r.includes("/mapserver/wmsserver"),s=r.includes("/imageserver/wmsserver"),l=r.includes("/wmsserver");return t&&(n||s||l)}export{P as C,R as I,E as S,O as b,m as d,U as g,I as h,$ as m,h as w,x as y};
