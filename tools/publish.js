/**
 * Publishes built page to Github Pages.
 */

import { join } from 'node:path';
import { createFile, exists } from 'fs-extra';
import { publish } from 'gh-pages';

const sourceFolder = 'dist';

if (!(await exists(sourceFolder))) {
  throw new Error(`File or directory not found: ${sourceFolder}`);
}

const noJekyllFilename = join(sourceFolder, '.nojekyll'); // spell:disable-line

await createFile(noJekyllFilename);

console.log(`Publishing contents of "${sourceFolder}" to gh-pages...`);
publish(sourceFolder, {
    dotfiles: true
}, (error) => {
  if (error) {
    console.error(error instanceof Error ? error.message : error, error);
  } else {
    console.log(`Publishing complete.`);
  }
});
