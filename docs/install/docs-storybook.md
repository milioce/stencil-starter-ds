# Instalar plugin

``` bash
$ npm install --save-dev @pxtrn/storybook-addon-docs-stencil
```

Documentación del plugin [storybook-addon-docs-stencil](https://storybook.js.org/addons/@pxtrn/storybook-addon-docs-stencil)


# Configurar Stencil para generar docs-json

En el fichero `stencil.config.js` agregamos el tipo outputTarget docs-json y la ruta del fichero generado

``` diff
export const config: Config = {
  namespace: 'stencil-ds',
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
+    {
+      type: 'docs-json',
+      file: 'path/to/docs.json'
+    }
  ],
};

```

# Añadir el plugin a la configuración de Storybook

En el fichero `.storybook/main.js`

``` diff
const config = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
+        '@pxtrn/storybook-addon-docs-stencil'
    ],
};
```

y en el fichero `.storybook/preview.js`

``` diff
import {defineCustomElements} from '../loader';
+import { setStencilDocJson, extractArgTypesFactory, extractComponentDescription  } from '@pxtrn/storybook-addon-docs-stencil';
+import docJson from '../path/to/docs.json';

+if (docJson) {
+  setStencilDocJson(docJson);
+}

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
+      hideNoControlsWarning: true,
    },
+    docs: {
+      extractArgTypes: extractArgTypesFactory({ dashCase: true }),
+      extractComponentDescription
+    },
  },
};

export default preview;

```

# Configurar nuestra Storie

Añadimos nuestro componente a la Storie. Ejemplo del button:

``` diff
export default {
    title: 'Components/Button',
    tags: ['autodocs'],
+    component: 'ds-button',
}

const Template = () => `<ds-button>Click</ds-button>`;

```