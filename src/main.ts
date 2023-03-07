import './style.css';

Promise.all([
  import('@arcgis/core/Map'),
  import('@arcgis/core/views/MapView'),
  import('./LoadingIndicator'),
  import('./WAExtent'),
  import('./basemaps'),
  import('./layers'),
]).then(
  ([
    { default: EsriMap },
    { default: MapView },
    { setupLoadingIndicator },
    { waExtent },
    { wsdotBasemaps },
    { politcalAdminBoundariesLayer },
  ]) => {
    const map = new EsriMap({
      basemap: wsdotBasemaps[0],
      layers: [politcalAdminBoundariesLayer],
      ground: 'world-elevation',
    });

    const view = new MapView({
      container: 'viewDiv',
      extent: waExtent,
      map,
    });

    setupLoadingIndicator(view);

    async function setupWidgets() {
      const { default: Expand } = await import('@arcgis/core/widgets/Expand');

      import('@arcgis/core/widgets/Search').then(({ default: Search }) => {
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
      });

      // bottom-leading

      import('@arcgis/core/widgets/Legend').then(({ default: Legend }) => {
        const legend = new Legend({ view });
        view.ui.add(legend, 'bottom-leading');
      });

      // top-trailing

      async function setupTopTrailing() {
        const basemapGalleryPromise = import('@arcgis/core/widgets/BasemapGallery').then(
          ({ default: BasemapGallery }) => {
            const basemapGallery = new BasemapGallery({
              source: wsdotBasemaps,
              view,
              activeBasemap: map.basemap,
            });
            const basemapExpand = new Expand({
              content: basemapGallery,
              view,
            });
            return basemapExpand;
          },
        );

        const layerListPromise = import('@arcgis/core/widgets/LayerList').then(({ default: LayerList }) => {
          const layerList = new LayerList({ view });
          const layerListExpand = new Expand({
            content: layerList,
          });
          return layerListExpand;
        });

        const locatePromise = import('@arcgis/core/widgets/Locate').then(({ default: Locate }) => {
          const locate = new Locate({
            view,
          });
          return locate;
        });

        const homePromise = import('@arcgis/core/widgets/Home').then(({ default: Home }) => {
          const home = new Home({
            view,
          });
          return home;
        });

        const widgetPromises = [basemapGalleryPromise, layerListPromise, locatePromise, homePromise];

        const results = (await Promise.allSettled(widgetPromises))
          .filter((item, index) => {
            if (item.status === 'rejected') {
              console.error(`item ${index} failed`, item.reason);
              return false;
            }
            return true;
          })
          .map((item) => (item.status === 'fulfilled' ? item.value : null));

        view.ui.add(
          results.filter((item) => item !== null),
          'top-trailing',
        );
      }

      setupTopTrailing();
    }

    view.when(setupWidgets);
  },
);
