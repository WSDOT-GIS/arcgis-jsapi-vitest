# ArcGIS Maps SDK for JavaScript Template Application

## Usage

This [ArcGIS Maps SDK for JavaScript] application is written in [TypeScript] and utilizes [Vite].

You can develop, test, and build the application using various commands.

### Development Mode

Run the application in development mode with a local development server.

```sh
npm start
```

### Tests

Run the unit tests for the application. Unit tests are written with [Vitest].

```sh
npm test
```

### Production Build

Build the application for deployment.

```sh
npm run build
```

## Tools and projects used

* [ArcGIS Maps SDK for JavaScript]
* [Calcite Design System][Calcite]

### Build

* [TypeScript]
* [Vite]
  * [PWA Vite Plugin]
* [Husky]

### Testing, linting, formatting

* [Vitest]
* [ESLint]
* [Prettier]
* [lint-staged]

## API Key

If you use services that are not public and require a token, you will need to create an [API Key] using a free [ArcGIS Developer Account].

<!-- markdownlint-disable no-inline-html -->
1. <details>
    <summary>Uncomment lines of code related to authorization in `src/main.ts`.</summary>

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

    </details>
    <!-- markdownlint-disable no-inline-html -->

2. Add your API Key to a `.env` file at the root of this project.

    ```.env
    VITE_API_KEY=MY-DEVELOPER-API-KEY
    ```

Vite will pick up the API Key for use in your application.

[ArcGIS Maps SDK for JavaScript]:https://developers.arcgis.com/javascript/
[TypeScript]:http://www.typescriptlang.org/
[Vite]:https://vitejs.dev/
[PWA Vite Plugin]:https://vite-pwa-org.netlify.app/
[Vitest]:https://vitest.dev/
[API Key]:https://developers.arcgis.com/documentation/mapping-apis-and-services/security/#api-keys
[ArcGIS Developer Account]:https://developers.arcgis.com/sign-up/
[Calcite]:https://developers.arcgis.com/calcite-design-system
[ESLint]:https://eslint.org/
[Prettier]:https://prettier.io/
[Husky]:https://typicode.github.io/husky
[lint-staged]:https://github.com/okonet/lint-staged
