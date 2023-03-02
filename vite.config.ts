import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';

// Get the name of the package to tell Vite the ...github.io/{project-name}
import { name as packageName } from './package.json';

export default defineConfig({
  // appType: 'spa', // default
  plugins: [
    // VitePWA({ registerType: 'autoUpdate' }) // Disable for now.
  ],
  base: `/${packageName}`,
});
