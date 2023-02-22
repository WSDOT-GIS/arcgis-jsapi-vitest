import MapImageLayer from '@arcgis/core/layers/MapImageLayer';

export const politcalAdminBoundariesLayer = new MapImageLayer({
  title: 'Political and Administration Boundaries',
  url: 'https://data.wsdot.wa.gov/arcgis/rest/services/Shared/PoliAdminBndryData/MapServer',
  visible: false,
});

export default [politcalAdminBoundariesLayer];
