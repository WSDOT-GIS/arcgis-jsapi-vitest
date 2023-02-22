# ArcGIS API for JavaScript Template Application

## Usage

This application is written in [TypeScript](http://www.typescriptlang.org/) and utilizes [`vite`](https://vitejs.dev/).

You can develop, test, and build the application using various commands.

Run the application in development mode with a local development server.

```sh
npm start
```

Run the unit tests for the application. Unit tests are written with [Vitest](https://vitest.dev/).

```sh
npm test
```

Build the application for deployment.

```sh
npm run build
```

## API Key

If you use services that are not public and require a token, you will need to create an [API Key](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/#api-keys) using a free [ArcGIS Developer Account](https://developers.arcgis.com/sign-up/).

Add your API Key to a `.env` file at the root of this project.

```.env
VITE_API_KEY=MY-DEVELOPER-API-KEY
```

Vite will pick up the API Key for use in your application.
