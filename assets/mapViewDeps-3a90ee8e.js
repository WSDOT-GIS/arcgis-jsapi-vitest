import{a as Le}from"./Error-d97df89f.js";import{D as ke,f as Se,d as $e,r as Ge}from"./promiseUtils-ac1bd36f.js";import{h as ae}from"./string-feb899cf.js";import{G as T,r as R,t as N,b as He,E as qe,e as We,p as le,a as Ve,w as je}from"./typedArrayUtil-96f93e5b.js";import{A as Xe,t as Ye}from"./JSONSupport-ed372989.js";import{e as ie}from"./mat3f32-6c416b1c.js";import{o as Ke}from"./CIMResourceManager-f2dc3d5c.js";import{t as Je,i as Qe,o as de,h as ue,r as Ze}from"./Container-b72af0ce.js";import{n as et}from"./BufferPool-0209c612.js";import{T as S,E as q,S as K}from"./enums-b1d611e3.js";import{t as tt,n as H,a as j,w as z,m as it}from"./WGLContainer-cd626f28.js";import{L as M}from"./enums-fb086c25.js";import{e as rt,a as Y}from"./ProgramTemplate-802e89ed.js";import{n as G}from"./programUtils-55627473.js";import{e as he,r as st,t as ot,a as nt,_ as at,J as lt,i as dt,b as ut,c as ht}from"./MagnifierPrograms-058f7143.js";import{u as ma,y as fa}from"./MagnifierPrograms-058f7143.js";import{f as re,E as se,x as A,s as _t}from"./VertexArrayObject-d5986ce6.js";import{R as f,E as V,F as oe,O as J,I as Ae,L as x,C as _e,M as O,P as p,G as w,D as P,Y as D,V as U,B as ct}from"./enums-64ab819c.js";import{o as ce,I as pt}from"./RenderingContext-b5a2cb5c.js";import{b as mt,x as ft,N as gt,B as vt,C as bt,I as W,J as Tt,Y as De,O as pe}from"./definitions-19bfb61c.js";import{r as Ue,o as xt}from"./context-util-09fcc133.js";import{n as Q,p as Z,r as Et,a as me}from"./mathUtils-b3bee9e7.js";import{l as wt,f as fe,h as yt,M as Bt}from"./mat3-d3027213.js";import{r as Rt}from"./vec2f64-22afc56f.js";import{t as ge}from"./VertexElementDescriptor-2925c6af.js";import{E as $}from"./Texture-8f8edc49.js";import{u as ve}from"./screenUtils-7afeb41c.js";import{e as Ft,m as Ot}from"./index-738baf21.js";import{e as Pt}from"./imageUtils-c2d0d1ae.js";import{a as va}from"./GraphicsView2D-b31c1259.js";import{i as Ta}from"./GraphicContainer-c91358c0.js";import{B as Mt,U as be}from"./request-7c0a9d4c.js";import{j as Ct}from"./asyncUtils-f0fdc8c7.js";import{l as ee,h as St}from"./reactiveUtils-307e98f9.js";import{_ as Te}from"./preload-helper-f8378b50.js";import{t as xe}from"./requestImageUtils-2eca6bfa.js";import"./ensureType-348c3d61.js";import"./nextTick-3ee5a785.js";import"./Rasterizer-c0c27c81.js";import"./_commonjsHelpers-2f3e7994.js";import"./cimAnalyzer-fade93fe.js";import"./Color-9f46ece8.js";import"./colorUtils-639f4d25.js";import"./fontUtils-95b845d3.js";import"./fieldUtils-66be74eb.js";import"./geometry-d89d4a34.js";import"./Extent-fd3ac910.js";import"./cast-73cfc253.js";import"./Polyline-9d44200b.js";import"./typeUtils-2ccaf90d.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-a7e9efee.js";import"./jsonUtils-dd0891e0.js";import"./GeometryUtils-53652037.js";import"./enums-4b2a86a0.js";import"./utils-1aab1134.js";import"./alignmentUtils-ae955d28.js";import"./mat2d-94b8f776.js";import"./vec2-9030ffc5.js";import"./vec2f32-eaf29605.js";import"./number-b10bd8f5.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-fd85d1bd.js";import"./floatRGBA-bff1e6d8.js";import"./rasterizingUtils-9666244d.js";import"./imageutils-92e8b989.js";import"./EffectView-7a98f2c6.js";import"./parser-a11e786f.js";import"./mat4f32-60a2394b.js";import"./mat4-1ee69bd5.js";import"./Evented-e2ee9722.js";import"./color-3bbef98f.js";import"./MaterialKey-6d0e47b2.js";import"./utils-f79d880b.js";import"./heatmapUtils-16ee21b5.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./featureConversionUtils-00c47b2e.js";import"./aaBoundingBox-1eda6d1b.js";import"./OptimizedFeature-7af17710.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./NestedMap-1b5db22e.js";import"./pbf-3634de4f.js";import"./Matcher-dde16e7c.js";import"./TileStrategy-0607ccca.js";import"./TileStore-56391591.js";import"./Queue-c92bc561.js";import"./TileKey-555f347f.js";import"./rbush-f2a85c98.js";import"./quickselect-56c5966e.js";import"./Query-bf719160.js";import"./TimeExtent-d2d7594c.js";import"./enumeration-49e09bda.js";import"./DataLayerSource-71059dc4.js";import"./Field-b17a677d.js";import"./fieldType-b21f2e7f.js";import"./Clonable-5318ec31.js";import"./visualVariablesUtils-7effa371.js";import"./visualVariablesUtils-9549b6c3.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-1305d028.js";import"./assets-2c955bed.js";import"./defaultsJSON-b087dd4d.js";import"./LRUCache-9c365b2a.js";import"./MemCache-7d4aa654.js";import"./ExpandedCIM-04b9ce70.js";import"./devEnvironmentUtils-5002a058.js";import"./Portal-172924b2.js";import"./Loadable-c96deb83.js";import"./Promise-34cff6d6.js";import"./locale-30120714.js";import"./PortalGroup-751b527f.js";import"./PortalUser-7f979a04.js";import"./persistableUrlUtils-26091271.js";import"./styleUtils-1d3bc535.js";import"./CircularArray-364d163c.js";import"./webgl-debug-b1f7a2c5.js";import"./HandleOwner-4c8d824c.js";import"./FeatureSetReader-f1a46ee8.js";import"./ArcadeDate-3d8ef842.js";import"./executionError-fb3f283a.js";import"./datetime-b6333958.js";import"./arcadeTimeUtils-37d6c274.js";import"./FieldsIndex-7c963fe9.js";import"./TimeReference-b6332926.js";import"./centroid-47d0a8f7.js";import"./lengthUtils-bc8879ed.js";import"./sizeVariableUtils-d4870b0d.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./basicInterfaces-b7051eb1.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./Basemap-1b908f31.js";import"./Collection-d9d92883.js";import"./SimpleObservable-04055e8d.js";import"./collectionUtils-e98ed3f0.js";import"./deprecate-424c57c7.js";import"./loadAll-f0d5998c.js";import"./PortalItem-a25335a3.js";import"./messages-226fbb40.js";import"./writeUtils-5c3c75bd.js";import"./layerUtils-a0871894.js";import"./compilerUtils-8d4f8499.js";import"./opacityUtils-cc413a8c.js";import"./CollectionFlattener-52a0c7e4.js";import"./TablesMixin-1e04401c.js";import"./Layer-07a07202.js";import"./Identifiable-876da2a8.js";import"./Graphic-f117754c.js";import"./PopupTemplate-63dce4d3.js";import"./number-205e28e0.js";import"./symbols-946d4e11.js";import"./CIMSymbol-0fa077f5.js";import"./symbolLayerUtils3D-0c6ed99a.js";import"./Cyclical-0205ad3e.js";import"./workers-4f8dfa2f.js";import"./Connection-5e453cc1.js";import"./intl-7c488bb0.js";import"./projection-d7a5b449.js";import"./zscale-e06cee6f.js";import"./TileInfo-e107254e.js";import"./widget-945f9e61.js";import"./uuid-73213768.js";import"./byteSizeEstimations-90c5a50d.js";import"./AttachmentInfo-9750c730.js";import"./AttachmentQuery-c89a8ac2.js";import"./LegendOptions-8200d5f5.js";import"./utils-e0744d8b.js";import"./BlendLayer-5cec7349.js";import"./ItemCache-d06df2a7.js";import"./jsonUtils-37cc07d7.js";import"./UniqueValueRenderer-b6a7d586.js";import"./diffUtils-ac6d6369.js";import"./colorRamps-fff34da2.js";import"./visualVariableUtils-6f05f98d.js";import"./jsonUtils-7442f08f.js";import"./DictionaryLoader-0dadb1e0.js";import"./executeForIds-0c62bbcf.js";import"./utils-ada6b2ec.js";import"./query-eac603fe.js";import"./normalizeUtils-9dc1c489.js";import"./normalizeUtilsCommon-155f1aa2.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-bad736cf.js";import"./queryZScale-a0b71b11.js";import"./FeatureSet-00b7d51e.js";import"./RelationshipQuery-a13e27d1.js";import"./TopFeaturesQuery-5bb7c994.js";import"./FeatureLayer-42e1678e.js";import"./MultiOriginJSONSupport-97bf66dd.js";import"./serviceCapabilitiesUtils-02cebe9b.js";import"./arcgisLayerUrl-9d6ab56c.js";import"./FeatureLayerBase-de1a166f.js";import"./HeightModelInfo-bad6650e.js";import"./OperationalLayer-a420b681.js";import"./ElevationInfo-75e7bf35.js";import"./editsZScale-b954eebc.js";import"./APIKeyMixin-b93c2049.js";import"./ArcGISService-cca20289.js";import"./CustomParametersMixin-01a04769.js";import"./EditBusLayer-984da402.js";import"./FeatureReductionLayer-fd41123b.js";import"./labelingInfo-f7d1c159.js";import"./labelUtils-6965a8ca.js";import"./OrderedLayer-9cb8835d.js";import"./PortalLayer-d54f6a39.js";import"./portalItemUtils-72345980.js";import"./RefreshableLayer-672ecb56.js";import"./ScaleRangeLayer-24099455.js";import"./TemporalLayer-c479c738.js";import"./FeatureTemplate-1fd8fac4.js";import"./FeatureType-b736019f.js";import"./fieldProperties-1fb52610.js";import"./versionUtils-aabb6832.js";import"./styleUtils-f45b991d.js";import"./popupUtils-3d5141e6.js";import"./colorUtils-c0f43caf.js";import"./webStyleSymbolUtils-54e19231.js";import"./Scheduler-72fecd6f.js";import"./GraphicsCollection-89010fd9.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";import"./capabilities-d3148205.js";import"./Util-a12911ae.js";import"./MapImageLayer-030c7912.js";import"./scaleUtils-2aca77b2.js";import"./SublayersOwner-3d3675ca.js";import"./Version-bbcb090a.js";import"./QueryTask-809f5bb4.js";import"./imageBitmapUtils-ce029f55.js";import"./pixelRangeUtils-03719dd8.js";import"./commonProperties-da958896.js";import"./normalizeUtilsSync-6eaa2318.js";import"./projectionSupport-5e649f05.js";import"./json-48e3ea08.js";import"./AttributeStoreView-ba467075.js";import"./TiledDisplayObject-fd49a9f6.js";import"./schemaUtils-5efbd12a.js";import"./createSymbolSchema-07e2efee.js";import"./rendererUtils-8077781c.js";import"./util-7f828970.js";import"./ComputedAttributeStorage-1b2563c0.js";import"./BaseGraphicContainer-489a5637.js";import"./FeatureContainer-b1d9c447.js";import"./TileContainer-5d892b13.js";import"./vec3f32-ad1dc57f.js";const At={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function Dt(a){let e=At;return a.split("/").forEach(t=>{e&&(e=e[t])}),e}const Ut=new rt(Dt);function C(a){return Ut.resolveIncludes(a)}const Ee=a=>G({ID:a.id,PATTERN:a.pattern}),It={shaders:a=>({vertexShader:Ee(a)+C("background/background.vert"),fragmentShader:Ee(a)+C("background/background.frag")})},we=a=>G({ID:a.id}),zt={shaders:a=>({vertexShader:we(a)+C("circle/circle.vert"),fragmentShader:we(a)+C("circle/circle.frag")})},ye=a=>G({ID:a.id,PATTERN:a.pattern}),Nt={shaders:a=>({vertexShader:ye(a)+C("fill/fill.vert"),fragmentShader:ye(a)+C("fill/fill.frag")})},Be=a=>G({ID:a.id}),Lt={shaders:a=>({vertexShader:Be(a)+C("outline/outline.vert"),fragmentShader:Be(a)+C("outline/outline.frag")})},Re=a=>G({ID:a.id,SDF:a.sdf}),kt={shaders:a=>({vertexShader:Re(a)+C("icon/icon.vert"),fragmentShader:Re(a)+C("icon/icon.frag")})},Fe=a=>G({ID:a.id,PATTERN:a.pattern,SDF:a.sdf}),$t={shaders:a=>({vertexShader:Fe(a)+C("line/line.vert"),fragmentShader:Fe(a)+C("line/line.frag")})},Oe=a=>G({ID:a.id}),Gt={shaders:a=>({vertexShader:Oe(a)+C("text/text.vert"),fragmentShader:Oe(a)+C("text/text.frag")})};let Ht=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const r=t.key<<3|this._getMaterialOptionsValue(t.type,i);if(this._programByKey.has(r))return this._programByKey.get(r);const o=this._getProgramTemplate(t.type),{shaders:s}=o,{vertexShader:n,fragmentShader:l}=s(i),u=t.getShaderHeader(),d=t.getShaderMain(),_=n.replace("#pragma header",u).replace("#pragma main",d),c=e.programCache.acquire(_,l,t.getAttributeLocations());return this._programByKey.set(r,c),c}_getMaterialOptionsValue(e,t){switch(e){case M.BACKGROUND:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case M.FILL:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case M.OUTLINE:return t.id?1:0;case M.LINE:{const i=t;return(i.sdf?1:0)<<2|(i.pattern?1:0)<<1|(i.id?1:0)}case M.ICON:{const i=t;return(i.sdf?1:0)<<1|(i.id?1:0)}case M.CIRCLE:return t.id?1:0;case M.TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case M.BACKGROUND:return It;case M.CIRCLE:return zt;case M.FILL:return Nt;case M.ICON:return kt;case M.LINE:return $t;case M.OUTLINE:return Lt;case M.TEXT:return Gt;default:return null}}},Ie=class{constructor(){this._initialized=!1}dispose(){this._program=T(this._program),this._vertexArrayObject=T(this._vertexArrayObject)}render(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(f.ONE,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=Y(e,he);if(!t)return!1;const i=new Int8Array(16);i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1;const r=he.attributes,o=new re(e,r,tt,{geometry:se.createVertex(e,oe.STATIC_DRAW,i)});return this._program=t,this._vertexArrayObject=o,this._initialized=!0,!0}};const ze=a=>a===S.HITTEST||a===S.LABEL_ALPHA,qt=a=>(ze(a)?1:0)|(a===S.HIGHLIGHT?2:0),Wt=({rendererInfo:a,drawPhase:e},t,i)=>`${t.getVariationHash()}-${qt(e)}-${a.getVariationHash()}-${R(i)&&i.join(".")}`,Vt=(a,e,t,i={})=>{if(i={...i,...e.getVariation(),...a.rendererInfo.getVariation(),highlight:a.drawPhase===S.HIGHLIGHT,id:ze(a.drawPhase)},R(t))for(const r of t)i[r]=!0;return i};let jt=class{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t);if(this._programByKey.has(i))return this._programByKey.get(i);const r={...t.map(d=>typeof d=="string"?{name:d,value:!0}:d).reduce((d,_)=>({...d,[_.name]:_.value}),{})},{vsPath:o,fsPath:s,attributes:n}=e,l=ce(o,s,n,r),u=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,u),u}getMaterialProgram(e,t,i,r,o){const s=Wt(e,t,o);if(this._programByKey.has(s))return this._programByKey.get(s);const n=Vt(e,t,o,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),l=ce(i,i,r,n),u=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,u),u}},Xt=class{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=ke(),r=e,o=ft,s=Math.ceil(r.height/o);if(Se(t),this._context.type===Ue.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t});else for(let n=0;n<s;n++){const l=n*o,u=n===s-1,d=u?r.height-o*n:o;this._queue.push({type:"chunk",request:e,resolver:i,chunk:n,chunkOffset:l,destHeight:d,chunkIsLast:u,options:t})}return $e(t,n=>i.reject(n)),i.promise}upload(){let e=0;for(;this._queue.length;){const t=performance.now(),i=this._queue.shift();if(i){if(R(i.options.signal)&&i.options.signal.aborted)continue;switch(i.type){case"chunk":this._uploadChunk(i);break;case"no-chunk":this._uploadNoChunk(i)}const r=performance.now()-t;if(e+=r,e+r>=mt)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:r,chunkIsLast:o,destHeight:s}=e,{data:n,texture:l,width:u}=t;R(n)&&(l.updateData(0,0,r,u,s,n,r),o&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:r,texture:o}=t;o.setData(r),i.resolve()}};const Yt=Rt(-.5,-.5);let Kt=class{constructor(){this._centerNdc=Q(),this._pxToNdc=Q(),this._worldDimensionsPx=Q(),this._mat3=ie(),this._initialized=!1}dispose(){this._program=T(this._program),this._quad=T(this._quad)}render(e,t){const{context:i}=e;return!!this._updateGeometry(e,t)&&(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(J.KEEP,J.KEEP,J.REPLACE),i.setStencilFunction(Ae.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)}_initialize(e){if(this._initialized)return;const t=Y(e,st);t&&(this._program=t,this._quad=new H(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:r}=e,{size:o,rotation:s}=i,n=Math.round(o[0]*r),l=Math.round(o[1]*r);if(!i.spatialReference.isWrappable)return!1;const u=Et(s),d=Math.abs(Math.cos(u)),_=Math.abs(Math.sin(u)),c=Math.round(n*d+l*_),m=Math.round(i.worldScreenWidth);if(c<=m)return!1;const g=n*_+l*d,b=m*r,y=(t.left-t.right)*r/n,v=(t.bottom-t.top)*r/l;Z(this._worldDimensionsPx,b,g,1),Z(this._pxToNdc,2/n,-2/l,1),Z(this._centerNdc,y,v,1);const h=this._mat3;return wt(h,this._centerNdc),fe(h,h,this._pxToNdc),s!==0&&yt(h,h,u),fe(h,h,this._worldDimensionsPx),Bt(h,h,Yt),!0}},Jt=class extends j{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!(t!=null&&t.size))return;const{context:i,renderingOptions:r}=e;this._quad||(this._quad=new H(i,[0,0,1,0,0,1,1,1]));const o=i.getBoundFramebufferObject(),{x:s,y:n,width:l,height:u}=i.getViewport();t.bindTextures(i);const d=t.getBlock(gt);if(N(d))return;const _=d.getFBO(i),c=d.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,c,r.labelsAnimationTime),this._updateAnimationState(e,c,_),i.bindFramebuffer(o),i.setViewport(s,n,l,u)}_computeDelta(e,t,i){const{context:r,painter:o,displayLevel:s}=e,n=o.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(n),n.setUniform1i("u_maskTexture",vt),n.setUniform1i("u_sourceTexture",bt),n.setUniform1f("u_timeDelta",e.deltaTime),n.setUniform1f("u_animationTime",i),n.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:o}=e,s=o.materialManager.getProgram(this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.useProgram(s),s.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}};class Pe extends j{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:i,height:r}=e.getViewport(),o=t.getFbos(i,r).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:r}=e,o=r.getPostProcessingEffects(t),s=i.getBoundFramebufferObject();for(const{postProcessingEffect:n,effect:l}of o)n.draw(e,s,l);i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),r.blitTexture(i,s.colorTexture,x.NEAREST),i.setStencilTestEnabled(!0)}}let Qt=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,W),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",Je),e.bindVAO(this._resources.quadVAO),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,W),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",Qe),e.bindVAO(this._resources.quadVAO),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,W),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i;const r=se.createVertex(e,oe.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),o=new re(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new ge("a_position",2,_e.BYTE,0,4),new ge("a_texcoord",2,_e.UNSIGNED_BYTE,2,4)]},{geometry:r}),s=Y(e,ot),n=Y(e,nt);e.useProgram(s),s.setUniform1i("u_texture",W),s.setUniform1i("u_shade",Tt),s.setUniform1f("u_sigma",de),e.useProgram(n),n.setUniform1i("u_texture",W),n.setUniform1f("u_sigma",de),this._resources={quadGeometry:r,quadVAO:o,highlightProgram:s,blurProgram:n}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}};function Me(a,e,t){const i=new $(a,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,width:e,height:t,samplingMode:x.LINEAR});return[i,new A(a,{colorTarget:D.TEXTURE,depthStencilTarget:U.STENCIL_RENDER_BUFFER},i)]}let Zt=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=He(this._resources))}_initialize(e,t,i){this._width=t,this._height=i;const[r,o]=Me(e,t,i),[s,n]=Me(e,t,i);this._resources={sharedBlur1Tex:r,sharedBlur1Fbo:o,sharedBlur2Tex:s,sharedBlur2Fbo:n}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}};const k=4,X=4/k;class ei extends j{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new Qt,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new Zt,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new Ie}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:r,height:o}=t.getViewport(),s=i.getFbos(r,o).effect0;this.setup(e,r,o),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const r=t%k,o=i%k;t+=r<k/2?-r:k-r,i+=o<k/2?-o:k-o,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*X),n=Math.round(i*X);this._hlRenderer.setup(e,s,n),this._hlSurfaces.setup(e,s,n)}draw(e){const{context:t,highlightGradient:i}=e;if(!i)return;const r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*X,this._adjustedHeight*X),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,x.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}}let ti=class extends j{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){R(this._fbo)&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=De){if(!t.length)return null;const r=t.shift(),o=r.x,s=r.y;return this._outstanding=r,{type:"hittest",distance:i*e,position:[o,s]}}bind(e){const{context:t,attributeView:i}=e;if(!i.size)return;const r=i.getBlock(pe);if(N(r))return;const o=r.getFBO(t);t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(o),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(N(this._outstanding))return;const t=this._outstanding;this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:r}=e,o=r.getBlock(pe);if(N(o))return void t.forEach(d=>d.resolve([]));const s=o.getFBO(i),n=new Uint8Array(s.width*s.height*4);try{await s.readPixelsAsync(0,0,s.width,s.height,p.RGBA,w.UNSIGNED_BYTE,n)}catch{return void t.forEach(_=>_.resolve([]))}const l=[];for(let d=0;d<n.length;d+=4){const _=n[d],c=n[d+3];_&&l.push({id:d/4,directHits:c})}l.sort((d,_)=>_.directHits===d.directHits?_.id-d.id:_.directHits-d.directHits);const u=l.map(d=>d.id);t.forEach(d=>d.resolve(u))}},ii=class extends j{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){R(this._fbo)&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:r}=e.getViewport();this._boundFBO=e.getBoundFramebufferObject();const o=t.getFbos(i,r).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=2*De){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},r,o){const s=e.getBoundFramebufferObject(),n=t.size[1]*i,l=Math.round(o*i),u=l/2,d=l/2;this._ensureBuffer(l),r.forEach(async(_,c)=>{const m=new Map,g=Math.floor(c.x*i-l/2),b=Math.floor(n-c.y*i-l/2);await s.readPixelsAsync(g,b,l,l,p.RGBA,w.UNSIGNED_BYTE,this._buf);for(let v=0;v<this._buf32.length;v++){const h=this._buf32[v];if(h!==4294967295&&h!==0){const I=v%l,E=l-Math.floor(v/l),B=(u-I)*(u-I)+(d-E)*(d-E),F=m.has(h)?m.get(h):4294967295;m.set(h,Math.min(B,F))}}const y=Array.from(m).sort((v,h)=>v[1]-h[1]).map(v=>v[0]);_.resolve(y),r.delete(c)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}};const te=5,ri=[1,0],si=[0,1],oi=[1,.8,.6,.4,.2],ni=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class ai{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(te),this._nMips=te,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=T(this._quad),this._intensityFBO=T(this._intensityFBO),this._compositeFBO=T(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,i){const{width:r,height:o}=t,{context:s,painter:n}=e,{materialManager:l}=n,u=s.gl,d=this._programDesc,{strength:_,radius:c,threshold:m}=i;this._quad||(this._quad=new H(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,r,o),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const g=this._quad;g.bind(),s.bindFramebuffer(this._intensityFBO);const b=l.getProgram(d.luminosityHighPass);s.useProgram(b),s.bindTexture(t.colorTexture,0),b.setUniform1i("u_texture",0),b.setUniform3fv("u_defaultColor",[0,0,0]),b.setUniform1f("u_defaultOpacity",0),b.setUniform1f("u_luminosityThreshold",m),b.setUniform1f("u_smoothWidth",.01);const y=[Math.round(r/2),Math.round(o/2)];s.setViewport(0,0,y[0],y[1]),s.setClearColor(0,0,0,0),s.clear(u.COLOR_BUFFER_BIT),g.draw(),s.setBlendingEnabled(!1);let v=this._intensityFBO.colorTexture;for(let E=0;E<this._nMips;E++){const B=l.getProgram(d.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[E]}]);s.useProgram(B),s.bindTexture(v,E+1),B.setUniform1i("u_colorTexture",E+1),B.setUniform2fv("u_texSize",y),B.setUniform2fv("u_direction",ri),s.setViewport(0,0,y[0],y[1]);const F=this._mipsFBOs[E];s.bindFramebuffer(F.horizontal),g.draw(),v=F.horizontal.colorTexture,s.bindFramebuffer(F.vertical),s.bindTexture(v,E+1),B.setUniform2fv("u_direction",si),g.draw(),v=F.vertical.colorTexture,y[0]=Math.round(y[0]/2),y[1]=Math.round(y[1]/2)}s.setViewport(0,0,r,o);const h=l.getProgram(d.composite,[{name:"nummips",value:te}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(h),h.setUniform1f("u_bloomStrength",_),h.setUniform1f("u_bloomRadius",c),h.setUniform1fv("u_bloomFactors",oi),h.setUniform3fv("u_bloomTintColors",ni),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),h.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),h.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),h.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),h.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),h.setUniform1i("u_blurTexture5",5),g.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const I=l.getProgram(d.blit);s.useProgram(I),s.bindTexture(this._compositeFBO.colorTexture,6),I.setUniform1i("u_texture",6),s.setBlendFunction(f.ONE,f.ONE),g.draw(),g.unbind(),s.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:r}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return;this._size[0]=t,this._size[1]=i;const o=[Math.round(t/2),Math.round(i/2)];this._compositeFBO?this._compositeFBO.resize(t,i):this._compositeFBO=new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:t,height:i}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:o[0],height:o[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:o[0],height:o[1]});for(let s=0;s<this._nMips;s++)this._mipsFBOs[s]?(this._mipsFBOs[s].horizontal.resize(o[0],o[1]),this._mipsFBOs[s].vertical.resize(o[0],o[1])):this._mipsFBOs[s]={horizontal:new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:o[0],height:o[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:o[0],height:o[1]}),vertical:new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:o[0],height:o[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)}}const li=[1,0],di=[0,1];class ui{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:r}=e,{type:o,radius:s}=i;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new H(r,[-1,-1,1,-1,-1,1,1,1]));const n=this._quad;n.bind(),o==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),n.unbind()}_gaussianBlur(e,t,i){const{context:r,state:o,painter:s,pixelRatio:n}=e,{size:l}=o,{materialManager:u}=s,d=this._programDesc,_=this._quad,c=[Math.round(n*l[0]),Math.round(n*l[1])],m=this._blurFBO,g=u.getProgram(d.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(g),r.setBlendingEnabled(!1),r.bindFramebuffer(m),r.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",li),g.setUniform1f("u_sigma",i),_.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(m==null?void 0:m.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",di),_.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:r}=e,{materialManager:o}=r,s=this._programDesc,n=this._quad,l=this._blurFBO;i.bindFramebuffer(l);const u=o.getProgram(s.radialBlur);i.useProgram(u),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const d=o.getProgram(s.blit);i.useProgram(d),i.bindTexture(l==null?void 0:l.colorTexture,5),d.setUniform1i("u_texture",5),i.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),n.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:r}=e,{size:o}=i,s=Math.round(r*o[0]),n=Math.round(r*o[1]);this._blurFBO&&this._size[0]===s&&this._size[1]===n||(this._size[0]=s,this._size[1]=n,this._blurFBO?this._blurFBO.resize(s,n):this._blurFBO=new A(t,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:s,height:n},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:s,height:n}))}}class hi{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=T(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:o}=t;this._createOrResizeResources(e,r,o);const{context:s,painter:n}=e,{materialManager:l}=n,u=this._programDesc,d=this._quad,_=i.colorMatrix;d.bind();const c=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,o,0,0,c),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const m=l.getProgram(u);s.useProgram(m),s.bindTexture(c,2),m.setUniformMatrix4fv("u_coefficients",_),m.setUniform1i("u_colorTexture",2),d.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),d.unbind()}_createOrResizeResources(e,t,i){const{context:r}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new $(r,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:t,height:i}),this._quad||(this._quad=new H(r,[-1,-1,1,-1,-1,1,1,1])))}}const _i=[1,0],ci=[0,1];class pi{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=T(this._layerFBOTexture),this._horizontalBlurFBO=T(this._horizontalBlurFBO),this._verticalBlurFBO=T(this._verticalBlurFBO)}draw(e,t,i){const{context:r,state:o,painter:s}=e,{materialManager:n}=s,l=this._programDesc,u=t.width,d=t.height,_=[Math.round(u),Math.round(d)],{blurRadius:c,offsetX:m,offsetY:g,color:b}=i,y=[ve(m),ve(g)];this._createOrResizeResources(e,u,d,_);const v=this._horizontalBlurFBO,h=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);const I=this._layerFBOTexture;t.copyToTexture(0,0,u,d,0,0,I),this._quad||(this._quad=new H(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,_[0],_[1]);const E=this._quad;E.bind(),r.setBlendingEnabled(!1);const B=n.getProgram(l.blur,[{name:"radius",value:Math.ceil(c)}]);r.useProgram(B),r.bindFramebuffer(v),r.bindTexture(t.colorTexture,4),B.setUniform1i("u_colorTexture",4),B.setUniform2fv("u_texSize",_),B.setUniform2fv("u_direction",_i),B.setUniform1f("u_sigma",c),E.draw(),r.bindFramebuffer(h),r.bindTexture(v==null?void 0:v.colorTexture,5),B.setUniform1i("u_colorTexture",5),B.setUniform2fv("u_direction",ci),E.draw(),r.bindFramebuffer(t),r.setViewport(0,0,u,d);const F=n.getProgram(l.composite);r.useProgram(F),r.bindTexture(h==null?void 0:h.colorTexture,2),F.setUniform1i("u_blurTexture",2),r.bindTexture(I,3),F.setUniform1i("u_layerFBOTexture",3),F.setUniform4fv("u_shadowColor",[b[3]*(b[0]/255),b[3]*(b[1]/255),b[3]*(b[2]/255),b[3]]),F.setUniformMatrix3fv("u_displayViewMat3",o.displayMat3),F.setUniform2fv("u_shadowOffset",y),E.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(f.ONE,f.ONE_MINUS_SRC_ALPHA),E.unbind()}_createOrResizeResources(e,t,i,r){const{context:o}=e;this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(r[0],r[1]):this._horizontalBlurFBO=new A(o,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:r[0],height:r[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:r[0],height:r[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(r[0],r[1]):this._verticalBlurFBO=new A(o,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:r[0],height:r[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:r[0],height:r[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new $(o,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:t,height:i}))}}class mi{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=T(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:o}=t;this._createOrResizeResources(e,r,o);const{context:s,painter:n}=e,{amount:l}=i,u=s.gl,d=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,o,0,0,d),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(u.COLOR_BUFFER_BIT),n.blitTexture(s,d,x.NEAREST,l)}_createOrResizeResources(e,t,i){const{context:r}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new $(r,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.NEAREST,flipped:!1,width:t,height:i}))}}function fi(a){switch(a){case"bloom":case"blur":case"opacity":case"drop-shadow":return a;default:return"colorize"}}const gi={colorize:()=>new hi,blur:()=>new ui,bloom:()=>new ai,opacity:()=>new mi,"drop-shadow":()=>new pi};class vi{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const i of e){const r=fi(i.type);let o=this._effectMap.get(r);o||(o=gi[r](),this._effectMap.set(r,o)),t.push({postProcessingEffect:o,effect:i})}return t}}class bi{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||S.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0)}render(e){const{context:t,profiler:i}=e,r=this._targetFn(),o=this.drawPhase&e.drawPhase;if(i.recordPassStart(this.name),o){this.enableDefaultDraw()&&this._doRender(e,r),i.recordPassEnd();for(const s of this.effects){if(!s.enable())continue;const n=s.apply,l=s.args&&s.args(),u=t.getViewport(),d=t.getBoundFramebufferObject(),_=e.passOptions;this._bindEffect(e,n,l),this._doRender(e,r,n.defines),this._drawAndUnbindEffect(e,n,u,d,_,l)}}}_doRender(e,t,i){if(N(t))return;const{profiler:r,context:o}=e;for(const s of this.brushes){if(r.recordBrushStart(s.name),R(s.brushEffect)){const n=o.getViewport(),l=o.getBoundFramebufferObject(),u=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,n,l,u)}else this._drawWithBrush(s,e,t,i);r.recordBrushEnd()}}_drawWithBrush(e,t,i,r){qe(i)?(e.prepareState(t,r),e.drawMany(t,i,r)):i.visible&&(e.prepareState(t,r),e.draw(t,i,r))}_bindEffect(e,t,i){const{profiler:r}=e;r.recordPassStart(this.name+"."+t.name),t.bind(e,i);const o=t.createOptions(e,i);e.passOptions=o}_drawAndUnbindEffect(e,t,i,r,o,s){const{profiler:n,context:l}=e;e.passOptions=o,n.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),l.bindFramebuffer(r);const{x:u,y:d,width:_,height:c}=i;l.setViewport(u,d,_,c),n.recordBrushEnd(),n.recordPassEnd()}}function Ti(a,e){switch(a){case q.LINE:return z.line;case q.TEXT:return z.text;case q.LABEL:return z.label;case q.FILL:return e===K.DOT_DENSITY?z.dotDensity:z.fill;case q.MARKER:switch(e){case K.HEATMAP:return z.heatmap;case K.PIE_CHART:return z.pieChart;default:return z.marker}}}class xi{constructor(e,t,i){this.context=e,this._blitRenderer=new Ie,this._worldExtentClipRenderer=new Kt,this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new Ht,this._blendEffect=new at,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new ei,hittest:new ti,hittestVTL:new ii,integrate:new Jt,insideEffect:new Pe("inside"),outsideEffect:new Pe("outside")},this.materialManager=new jt(e),this.textureManager=new lt(t,i,e.type===Ue.WEBGL2),this.textureUploadManager=new Xt(e,t),this._effectsManager=new vi}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const s in this._fbos)this._fbos[s].resize(e,t);return this._fbos}const i={target:O.TEXTURE_2D,pixelFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,samplingMode:x.NEAREST,wrapMode:P.CLAMP_TO_EDGE,width:e,height:t},r={colorTarget:D.TEXTURE,depthStencilTarget:U.DEPTH_STENCIL_RENDER_BUFFER},o=new _t(this.context,{width:e,height:t,internalFormat:ct.DEPTH_STENCIL});this._stencilBuf=o,this._fbos={output:new A(this.context,r,i,o),blend:new A(this.context,r,i,o),effect0:new A(this.context,r,i,o)}}return this._fbos}acquireFbo(e,t){let i;i=this._fboPool.length>0?this._fboPool.pop():new A(this.context,{colorTarget:D.TEXTURE,depthStencilTarget:U.DEPTH_STENCIL_RENDER_BUFFER},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,samplingMode:x.NEAREST,wrapMode:P.CLAMP_TO_EDGE,width:e,height:t},this._stencilBuf);const r=i.descriptor;return r.width===e&&r.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:r}=e.getViewport();this._prevFBO=e.getBoundFramebufferObject();const o=this.getFbos(i,r);if(e.bindFramebuffer(o==null?void 0:o.output),e.setColorMask(!0,!0,!0,!0),R(t)){const{r:s,g:n,b:l,a:u}=t.color;e.setClearColor(u*s/255,u*n/255,u*l/255,u)}else e.setClearColor(0,0,0,0);e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){var u;const{context:r,blendMode:o,effects:s,requireFBO:n,drawPhase:l}=e;if(n||Ce(l,o,s,i))r.bindFramebuffer((u=this._fbos)==null?void 0:u.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const d=this._getOutputFBO();r.bindFramebuffer(d)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:r,effects:o,requireFBO:s,drawPhase:n}=e;if(s||Ce(n,r,o,t)){R(o)&&o.length>0&&n===S.MAP&&this._applyEffects(e,o);const l=this._getOutputFBO();i.bindFramebuffer(l),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(f.ONE,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const u=N(r)||n===S.HIGHLIGHT?"normal":r,d=this._fbos;d!=null&&d.blend.colorTexture&&this._blendEffect.draw(e,d.blend.colorTexture,x.NEAREST,u,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO);const t=this._getOutputFBO();t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(Ae.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,x.NEAREST))}prepareDisplay(e,t,i){const{context:r}=e;if(r.bindFramebuffer(this._prevFBO),r.setColorMask(!0,!0,!0,!0),R(t)){const{r:o,g:s,b:n,a:l}=t.color;r.setClearColor(l*o/255,l*s/255,l*n/255,l)}else r.setClearColor(0,0,0,0);r.setStencilWriteMask(255),r.setClearStencil(0),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,i)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=T(this._blitRenderer),this._worldExtentClipRenderer=T(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._effectsManager.dispose(),this._vtlMaterialManager=T(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const i=Ti(e,t);let r=this._brushCache.get(i);return r===void 0&&(r=new i,this._brushCache.set(i,r)),r}renderObject(e,t,i,r){const o=z[i];if(!o)return;let s=this._brushCache.get(o);s===void 0&&(s=new o,this._brushCache.set(o,s)),s.prepareState(e,r),s.draw(e,t,r)}renderObjects(e,t,i,r){const o=z[i];if(!o)return;let s=this._brushCache.get(o);s===void 0&&(s=new o,this._brushCache.set(o,s)),s.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map(i=>(this._brushCache.has(i)||this._brushCache.set(i,new i),this._brushCache.get(i)));return new bi(t,e)}blitTexture(e,t,i,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(f.ONE,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e;return this._renderTarget!=null?this._renderTarget:((e=this._fbos)==null?void 0:e.output)??null}_applyEffects(e,t){var s;const i=(s=this._fbos)==null?void 0:s.blend;if(!i)return;const{context:r}=e,o=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:n,effect:l}of o)r.bindFramebuffer(i),n.draw(e,i,l)}}function Ce(a,e,t,i){return a!==S.HIGHLIGHT&&(i!==1||R(e)&&e!=="normal"||R(t)&&t.length>0)}const Ei=2e3;class ha extends ue{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:i=document.createElement("canvas"),alpha:r=!0,stencil:o=!0,contextOptions:s={}}=t;this._canvas=i;const n=xt("2d",i,{alpha:r,antialias:!1,depth:!0,stencil:o});this.context=new pt(We(n)??null,s),this.resourceManager=new Ke,this.painter=new xi(this.context,this,this.resourceManager),ae("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const l=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Ft,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new dt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return l()}},this._taskHandle=Xe({render:u=>this.renderFrame(u)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Ge(i,"webglcontextlost",()=>{this.emit("webgl-error",{error:new Le("webgl-context-lost")})}),this._bufferPool=new et,i.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(i)}destroy(){var e,t,i;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=le(this._taskHandle),this._lostWebGLContextHandle=le(this._lostWebGLContextHandle),(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),(i=(t=this._debugOutput)==null?void 0:t.parentNode)==null||i.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=Ei,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:ie()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context;this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=S.MAP,this.painter.beforeRenderLayers(i,this.background);for(const r of e)r.processRender(t);this.painter.prepareDisplay(t,this.background,this.state.padding),this.painter.renderLayers(i),t.drawPhase=S.HIGHLIGHT,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=S.LABEL,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}if(ae("esri-tiles-debug")){t.drawPhase=S.DEBUG,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._resizeCanvas(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:i}={framebufferWidth:Math.round(this.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this.state.size[1]*e.resolutionScale)},r=e.resolutionScale,o=this.context,s=this._state.clone();if(e.rotation!=null){const g=s.viewpoint;s.viewpoint.rotation=e.rotation,s.viewpoint=g}const n={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:r,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},l=new A(o,{colorTarget:D.TEXTURE,depthStencilTarget:U.DEPTH_STENCIL_RENDER_BUFFER,width:t,height:i}),u=o.getBoundFramebufferObject(),d=o.getViewport();o.bindFramebuffer(l),o.setViewport(0,0,t,i),this._renderChildren(e.children,n);const _=this._readbackScreenshot(l,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)});o.bindFramebuffer(u),o.setViewport(d.x,d.y,d.width,d.height),this.requestRender();const c=await _;let m;return e.outputScale===1?m=c:(m=new ImageData(Math.round(c.width*e.outputScale),Math.round(c.height*e.outputScale)),Ot(c,m,!0)),m}async _readbackScreenshot(e,t){const i=Pt(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,p.RGBA,w.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:o}=e,s=r[0],n=r[1],l=Math.round(s*o),u=Math.round(n*o);t.width===l&&t.height===u||(t.width=l,t.height=u),i.width=s+"px",i.height=n+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof ue)){t=t||!1;break}if(i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}async function wi(a){const e=Te(()=>import("./mask-svg-023bbc42.js"),[]),t=Te(()=>import("./overlay-svg-d62383f3.js"),[]),i=xe((await e).default,{signal:a}),r=xe((await t).default,{signal:a}),o={mask:await i,overlay:await r};return Se(a),o}class _a extends Ze{constructor(){super(),this._handles=new Ye,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=Ve(this._handles),this._disposeRenderResources(),this._resourcesTask=je(this._resourcesTask)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([ee(()=>e.version,()=>{this.visible=e.visible&&R(e.position)&&e.size>0,this.requestRender()},St),ee(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),ee(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:ie()}}doRender(e){var ne;const t=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==S.MAP||!this._canRender())return;this._updateResources(e);const i=this._magnifier;if(N(i.position))return;const r=e.pixelRatio,o=i.size*r,s=1/i.factor,n=Math.ceil(s*o);this._readbackTexture.resize(n,n);const{size:l}=e.state,u=r*l[0],d=r*l[1],_=.5*n,c=.5*n,m=me(r*i.position.x,_,u-_-1),g=me(d-r*i.position.y,c,d-c-1);t.setBlendingEnabled(!0);const b=m-_,y=g-c,v=this._readbackTexture;t.bindTexture(v,0),t.gl.copyTexImage2D(v.descriptor.target,0,v.descriptor.pixelFormat,b,y,n,n,0);const h=(ne=this.background)==null?void 0:ne.color,I=h?[h.a*h.r/255,h.a*h.g/255,h.a*h.b/255,h.a]:[1,1,1,1],E=(m+i.offset.x*r)/u*2-1,B=(g-i.offset.y*r)/d*2-1,F=o/u*2,Ne=o/d*2,L=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(L),L.setUniform4fv("u_background",I),L.setUniform1i("u_readbackTexture",0),L.setUniform1i("u_overlayTexture",6),L.setUniform1i("u_maskTexture",7),L.setUniform4f("u_drawPos",E,B,F,Ne),L.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),L.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(V.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=R(this._magnifier)?this._magnifier.maskUrl:null,t=R(this._magnifier)?this._magnifier.overlayUrl:null;this._resourcesTask=Ct(async i=>{const r=N(e)||N(t)?wi(i):null,o=R(e)?be(e,{responseType:"image",signal:i}).then(u=>u.data):r.then(u=>u.mask),s=R(t)?be(t,{responseType:"image",signal:i}).then(u=>u.data):r.then(u=>u.overlay),[n,l]=await Promise.all([o,s]);this.mask=n,this.overlay=l,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=T(this._readbackTexture),this._overlayTexture=T(this._overlayTexture),this._maskTexture=T(this._maskTexture),this._vertexArrayObject=T(this._vertexArrayObject),this._program=T(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const i=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=ut(t);const r=new Uint16Array([0,1,0,0,1,1,1,0]),o=ht.attributes;this._vertexArrayObject=new re(t,o,it,{geometry:se.createVertex(t,oe.STATIC_DRAW,r)}),this.overlay.width=i,this.overlay.height=i,this._overlayTexture=new $(t,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.NEAREST,flipped:!0,preMultiplyAlpha:!Mt(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result},this.overlay),this.mask.width=i,this.mask.height=i,this._maskTexture=new $(t,{target:O.TEXTURE_2D,pixelFormat:p.ALPHA,internalFormat:p.ALPHA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.NEAREST,flipped:!0},this.mask);const s=1/this._magnifier.factor;this._readbackTexture=new $(t,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:Math.ceil(s*i),height:Math.ceil(s*i)})}}export{Ta as GraphicContainer,va as GraphicsView2D,ma as LabelManager,_a as MagnifierView2D,fa as MapViewNavigation,ha as Stage};
