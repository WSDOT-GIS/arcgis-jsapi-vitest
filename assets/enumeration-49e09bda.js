import{a as l}from"./cast-73cfc253.js";import{y as t}from"./JSONSupport-ed372989.js";function s(o,e={}){const a=o instanceof l?o:new l(o,e),n={type:(e==null?void 0:e.ignoreUnknown)??1?a.apiValues:String,json:{type:a.jsonValues,read:!(e!=null&&e.readOnly)&&{reader:a.read},write:{writer:a.write}}};return(e==null?void 0:e.readOnly)!==void 0&&(n.readOnly=!!e.readOnly),(e==null?void 0:e.default)!==void 0&&(n.json.default=e.default),(e==null?void 0:e.name)!==void 0&&(n.json.name=e.name),(e==null?void 0:e.nonNullable)!==void 0&&(n.nonNullable=e.nonNullable),t(n)}export{s as o};
