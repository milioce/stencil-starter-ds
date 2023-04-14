# Crear nueva aplicación stenciljs

``` bash
$ npm init stencil
```

Crear aplicación de tipo librería de componentes.

<br>

# Añadir soporte para SASS

```bash
$ npm install @stencil/sass --save-dev
```

Importamos el plugin y lo añadimos a la configuración de `stencil.config.js`

``` diff
import { Config } from '@stencil/core';
+import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-ds',
+  plugins: [
+    sass()
+  ],
  ...
};

```

Este plugin se activará para las URLS de tipo .scss o .sass y las precompilará a CSS.

## Options
---

Podemos pasarle opciones al plugin `sass()`

```ts
sass({
  injectGlobalPaths: [
        'src/scss/abstract/_mixins.scss',
        'src/scss/abstract/_variables.scss',
    ],
  }),
```

`injectGlobalPaths` define una lista de rutas que se añaden automáticamente como declaraciones `@import` a todos los componentes.

Esto puede ser útil para inyectar variables Sass, mixins y funciones para anular los valores predeterminados de las colecciones externas.

# Configuración se StencilJS

Durante la instalación inicial se ha creado un fichero `stencil.config.ts` con una configuración inicial.

## Fichero de configuración `stencil.config.ts`

```ts
import { Config } from '@stencil/core';

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
  ],
};

```
<br>

Otros parámetros opcionales:

```ts
export const config: Config = {
  namespace: 'stencil-ds',

  /*
   * globalScript:
   *   Ejecuta el script antes de que se cargue la libreria o app
   *   El código a ejecutar debe ir dentro de una función que exporta el script global
   *
   *   export default function() { // or export default async function()
   *     initServerConnection();
   *   }
   */
  globalScript: 'src/externals.ts',

  /*
   * globalStyle:
   *   Para definir estilos globales a todos los componentes
   */
  globalStyle: 'src/scss/styles.scss',

  /*
   * enableCache: default false
   *   Cachea los resultados del build, para acelerar losrebuilds
   */
  enableCache: false,

  /*
   * buildEs5: default false
   *   false: No genera ES5 build (ni en dev ni en prod)
   *   true: Genera ES5 build en modo dev y prod
   *   "prod": Genera ES5 build solo en modo prod
   */
  buildEs5: false,

  // Añadir plugin para soporte sass
  plugins:[
    sass()
  ],

  /*
   * devServer: {
   *   address: '0.0.0.0',
   *   basePath: '/',
   *   https: false,
   *   initialLoadUrl: '/',
   *   logRequests: false,
   *   openBrowser: true,
   *   reloadStrategy: 'hmr | pageReload | null',
   *   port: 3333
   * },
   *
   */
  devServer: {
    reloadStrategy: 'hmr',
  },

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

```

# Instalación de StoryBook

## Instalar storybook

Como Stencil genera Web Component vamos a instalar Storybook for HTML.
Hace falta node >= 16

```
$ npx storybook init --type html
```

Por defecto detecta Webpack y lo usa como bundler
Crea una carpeta `src/stories` con varios componentes JS y stories
Crea una carpeta `.storybook` con dos ficheros `main.js` y `preview.js`
- `@storybook/addon-links` Crea links entre historias
- `@storybook/addon-interactions @storybook/testing-library` para debug de interacciones y test
- `@storybook/addon-essentials` incluye varios como Actions, Backgounds, Controls, Docs, etc
  - `Actions` Muestra datos recibidos por los manejadores de eventos
  - `Backgrounds` Permite cambiar los colores de fondo en el preview
  - `Controls` Permite usar un UI para editar los argumentos del componente
  - `Docs` transforma las historias en Documentación (nuevo v7)
  - `Viewports` permite mostrar las historias en distintos layouts y tamaños. (responsive)
  - `Toolbar` Permite añadir opciones al Toolbar para usar variables globales (idioma, tema)
  - `Measure` Permite inspeccionar layouts y mostrar el box-model
  - `Outline` Permite mostrar visualmente el layout CSS de cada elemento del preview
- `@storybook/blocks` Stories Doc blocks, para documentación

Addons obsoletos
- `@storybook/addon-notes` se sustitiye por `@storybook/addon-docs`
- `@storybook/addon-knobs` se sustituye por `Controls` que está dentro de `@storybook/addon-essentials`

``` json
 "devDependencies": {
    "@stencil/sass": "^3.0.0",
    "@storybook/addon-essentials": "^7.0.2",
    "@storybook/addon-interactions": "^7.0.2",
    "@storybook/addon-links": "^7.0.2",
    "@storybook/blocks": "^7.0.2",
    "@storybook/html": "^7.0.2",
    "@storybook/html-webpack5": "^7.0.2",
    "@storybook/testing-library": "^0.0.14-next.2",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.11",
    "jest": "^27.5.1",
    "jest-cli": "^27.5.1",
    "puppeteer": "^19.5.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "storybook": "^7.0.2"
  },
```

## Configuración por defecto

Ha generado el fichero `.storybook/main.js`
- Por defecto busca historias con los patrones `../src/**/*.mdx` y `./src/**/*.stories.@(js|jsx|ts|tsx)`


```js
/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
```

Y el fichero `.storybook/preview.js`

```js
/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
```

## Contenido de la carpeta `src/stories`

En la carpeta `src/stories` hay un fichero `Introduction.mdx` que muestra una página "Introduction" en StoryBook

Como ejemplo Crea tres componentes con tres stories: `Button.js`, `Header.js` y `Page.js`

```
├── src/stories
|   ├── assets
|   │   ├── colors.svg
|   │   ├── ...
|   ├── button.css
|   ├── Button.js
|   ├── Button.stories.js
|   ├── header.css
|   ├── Header.js
|   ├── Header.stories.js
|   ├── Introduction.mdx
|   ├── page.css
|   ├── Page.js
|   └── Page.stories.js
```

## Modificar la configuración

Eliminar carpeta src/stories
Crear story para my-component

## Añadir el addon-a11y

Instalamos la dependencia

```
$ npm install @storybook/addon-a11y --save-dev
```

Añadimos a la configuracion del `main.js`

```js
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // Añadir addon
  ],
```