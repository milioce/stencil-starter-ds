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