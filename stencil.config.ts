import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-ds',
  globalStyle: 'src/assets/library/scss/abstracts.scss',
  plugins: [
    sass({
      includePaths: ['src/assets/library/scss/utilities', 'src/assets/library/scss/tools'],
      injectGlobalPaths: [],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-ds',
      directivesProxyFile: './angular-output/public-api.ts',
      directivesArrayFile: './angular-output/index.ts',
    }),
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
