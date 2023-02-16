// Widgets
import MapView from '@arcgis/core/views/MapView';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import Search from '@arcgis/core/widgets/Search';
import LocatorSearchSource from '@arcgis/core/widgets/Search/LocatorSearchSource';

interface Params {
  view: MapView;
}

export function initWidgets({ view }: Params): MapView {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  view.ui.add(legend, 'bottom-left');
  view.ui.add(layerList, 'top-right');
  new Search({
    container: 'searchDiv',
    includeDefaultSources: false,
    sources: [
      new LocatorSearchSource({
        url: 'https://utility.arcgis.com/usrsvcs/servers/a86fa8aeabdd470792022a8ef959afb6/rest/services/World/GeocodeServer',
        name: 'ArcGIS World Geocode Service',
        popupEnabled: true,
      }),
    ],
  });
  return view;
}
