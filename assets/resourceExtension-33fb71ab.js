import{J as o}from"./request-b4e08038.js";function l(p){return i[e(p)]||c}function e(p){return p instanceof Blob?p.type:g(p.url)}function g(p){const a=o(p);return t[a]||n}const i={},n="text/plain",c=i[n],t={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in t)i[t[p]]=p;export{l as t};
