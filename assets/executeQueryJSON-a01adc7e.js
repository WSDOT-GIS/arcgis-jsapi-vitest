import{f as m}from"./utils-19aa96f8.js";import{c}from"./query-d7f993dc.js";import{x as e}from"./FeatureSet-736831f6.js";import{x as s}from"./Query-4c66990d.js";async function S(r,o,t){const a=await p(r,o,t);return e.fromJSON(a)}async function p(r,o,t){const a=m(r),f={...t},n=s.from(o),{data:i}=await c(a,n,n.sourceSpatialReference,f);return i}export{p as a,S as s};
