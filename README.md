# ArcGIS API for JavaScript Template Application

## Usage

This application is written in [TypeScript] and utilizes [Vite].

You can develop, test, and build the application using various commands.

Run the application in development mode with a local development server.

```sh
npm start
```

Run the unit tests for the application. Unit tests are written with [Vitest].

```sh
npm test
```

Build the application for deployment.

```sh
npm run build
```

## API Key

If you use services that are not public and require a token, you will need to create an [API Key] using a free [ArcGIS Developer Account].

1. Uncomment lines of code related to authorization in `src/main.ts`.

    Before:

    ```typescript
    // import config from '@arcgis/core/config'; // Needed for services requiring authorization

    import Map from '@arcgis/core/Map';
    import MapView from '@arcgis/core/views/MapView';
    import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
    import { initWidgets } from './widgets';

    import './style.css';

    // config.apiKey = import.meta.env.VITE_API_KEY as string; // Needed for services requiring authorization
    ```

    After:

    ```typescript
    import config from '@arcgis/core/config'; // Needed for services requiring authorization

    import Map from '@arcgis/core/Map';
    import MapView from '@arcgis/core/views/MapView';
    import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
    import { initWidgets } from './widgets';

    import './style.css';

    config.apiKey = import.meta.env.VITE_API_KEY as string; // Needed for services requiring authorization
    ```

2. Add your API Key to a `.env` file at the root of this project.

    ```.env
    VITE_API_KEY=MY-DEVELOPER-API-KEY
    ```

Vite will pick up the API Key for use in your application.

[TypeScript]:http://www.typescriptlang.org/
[Vite]:https://vitejs.dev/
[Vitest]:https://vitest.dev/
[API Key]:https://developers.arcgis.com/documentation/mapping-apis-and-services/security/#api-keys
[ArcGIS Developer Account]:https://developers.arcgis.com/sign-up/
