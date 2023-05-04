import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-ds',
  srcDir: 'src',
  globalStyle: 'src/assets/library/scss/abstracts.scss',
  plugins: [
    sass({
      includePaths: [
        'src/assets/library/scss/utilities',
        'src/assets/library/scss/tools',
      ],
      injectGlobalPaths: [
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',

    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
