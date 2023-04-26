import { defineCustomElements } from '../loader';
import { setStencilDocJson, extractArgTypesFactory, extractComponentDescription } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs.json';
import '../dist/stencil-ds/stencil-ds.css';

if (docJson) {
  setStencilDocJson(docJson);
}

defineCustomElements();

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true,
    },
    docs: {
      extractArgTypes: extractArgTypesFactory({ dashCase: true }),
      extractComponentDescription,
    },
  },
};

export default preview;
