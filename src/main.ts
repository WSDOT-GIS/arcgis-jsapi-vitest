import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import Legend from '@arcgis/core/widgets/Legend';
import LayerList from '@arcgis/core/widgets/LayerList';
import { waExtent } from './WAExtent';
import './style.css';

const view = new MapView({
  container: 'viewDiv',
  extent: waExtent,
  map: new Map({
    basemap: 'streets-relief-vector',
  }),
});

new Search({
  container: 'searchDiv',
  view,
  includeDefaultSources: false,
  sources: [
    {
      // Use the WSDOT Customized view of the Geocoder
      url: 'https://utility.arcgis.com/usrsvcs/servers/a86fa8aeabdd470792022a8ef959afb6/rest/services/World/GeocodeServer',
      name: 'ArcGIS World Geocode Service',
      locationType: 'street',
      // Probably don't need to specify US since an extent is already specified in the view
      // that the URL points to, but shouldn't harm anything.
      countryCode: 'US',
      suggestionsEnabled: true,
      // Show a graphic for the location, zoom to it, and open its popup.
      popupEnabled: true,
      autoNavigate: true,
      resultGraphicEnabled: true,
    } as __esri.LocatorSearchSourceProperties,
  ],
});

const legend = new Legend({ view });
const layerList = new LayerList({ view });
view.ui.add(legend, 'bottom-left');
view.ui.add(layerList, 'top-right');
