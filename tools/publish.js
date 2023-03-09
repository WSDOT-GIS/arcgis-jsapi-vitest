/**
 * Publishes built page to Github Pages.
 */

import { exists } from 'fs-extra';
import { publish } from 'gh-pages';

const copySourceFolder = 'dist';

if (!(await exists(copySourceFolder))) {
  throw new Error(`File or directory not found: ${copySourceFolder}`);
}

console.log(`Publishing contents of "${copySourceFolder}" to gh-pages...`);
publish(copySourceFolder, {
    dotfiles: true
}, (error) => {
  if (error) {
    console.error(error instanceof Error ? error.message : error, error);
  } else {
    console.log(`Publishing complete.`);
  }
});
