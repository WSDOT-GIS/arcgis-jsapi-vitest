/**
 * Copy CSS and theme files from ../node_modules/@arcgis/core/assets to src/arcgis-core-assets
 */

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { copy, emptyDir, exists, ensureDir } from 'fs-extra';

// Find the source and destination directories based on where this script file is.
const thisFile = fileURLToPath(import.meta.url);
const toolsDir = dirname(thisFile);
const rootDir = dirname(toolsDir);
const assetsSourceDir = join(rootDir, 'node_modules', '@arcgis', 'core', 'assets', 'esri');
const assetsDestDir = join(rootDir, 'src', 'arcgis-core-assets', 'esri');

console.log(`Copying files from "${assetsSourceDir}" to "${assetsDestDir}"...`);

// Throw an error if the source directory can't be found.
if (!(await exists(assetsSourceDir))) {
  throw new Error(`Directory not found: ${assetsSourceDir}`);
}

// Empty the destination directory if it already exists.
if (await exists(assetsDestDir)) {
  await emptyDir(assetsDestDir);
}

await ensureDir(assetsDestDir);

// TODO: Don't copy everything, just these folders.
// node_modules\@arcgis\core\assets\esri\css
// node_modules\@arcgis\core\assets\esri\themes
const promises = ['css', 'themes'].map((folderName) => {
  const dest = join(assetsDestDir, folderName);
  const src = join(assetsSourceDir, folderName);
  return ensureDir(dest).then(() => copy(src, dest));
});

await Promise.allSettled(promises);
