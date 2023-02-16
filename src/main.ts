import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { initWidgets } from './widgets';

import './style.css';

const view = new MapView({
  container: 'viewDiv',
  map: new Map({
    basemap: 'streets-relief-vector',
  }),
});

view.when(() => initWidgets({ view }));
