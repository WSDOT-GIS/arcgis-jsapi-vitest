import"./geometry-0d19f94b.js";import{f as i}from"./utils-19aa96f8.js";import{p as e}from"./queryTopFeatures-8dba19d5.js";import{v as n}from"./TopFeaturesQuery-bceb40dd.js";import{w as a}from"./Extent-8fae2379.js";import"./ensureType-125d327f.js";import"./string-75082bc6.js";import"./typedArrayUtil-74bbfd45.js";import"./Error-781981d1.js";import"./Polyline-40b9e769.js";import"./Accessor-815cb0cf.js";import"./watch-c7facfb0.js";import"./ArrayPool-ae2ef0ab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-28f2a985.js";import"./typeUtils-3bf84b36.js";import"./cast-f7d2a22f.js";import"./request-ae7029ea.js";import"./preload-helper-f8378b50.js";import"./jsonUtils-15ca15d7.js";import"./normalizeUtils-eda5eef5.js";import"./normalizeUtilsCommon-04cad10b.js";import"./utils-067ee6bc.js";import"./urlUtils-6a004888.js";import"./queryZScale-e2b48f65.js";import"./zscale-a617710a.js";import"./TimeExtent-202e4138.js";import"./JSONSupport-2b897629.js";async function D(o,r,m){const p=i(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{D as executeForTopExtents};
