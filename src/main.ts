import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import Legend from '@arcgis/core/widgets/Legend';
import LayerList from '@arcgis/core/widgets/LayerList';
import './style.css';
import { waExtent } from './WAExtent';

const view = new MapView({
  container: 'viewDiv',
  extent: waExtent,
  map: new Map({
    basemap: 'streets-relief-vector',
  })
});

new Search({
  container: 'searchDiv',
  view,
  includeDefaultSources: false,
  sources: [
    {
      url: 'https://utility.arcgis.com/usrsvcs/servers/a86fa8aeabdd470792022a8ef959afb6/rest/services/World/GeocodeServer',
      name: 'ArcGIS World Geocode Service',
      popupEnabled: true,
      autoNavigate: true,
      locationType: 'street',
      countryCode: "US",
      resultGraphicEnabled: true,
      suggestionsEnabled: true
    } as __esri.LocatorSearchSourceProperties,
  ],
});


const legend = new Legend({ view });
const layerList = new LayerList({ view });
view.ui.add(legend, 'bottom-left');
view.ui.add(layerList, 'top-right');

