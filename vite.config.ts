import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';
import vueDevTools from 'vite-plugin-vue-devtools';
import { viteAwesomeSvgLoader } from 'vite-awesome-svg-loader';

// Different build output dirs for different deploy envs with different
// base paths
const outDir = process.env.ENV ? `dist-${process.env.ENV}` : 'dist';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
      dirs: ['src/components', 'src/layouts'],
    }),
    viteAwesomeSvgLoader({
      defaultImport: 'url',
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  css: {
    preprocessorOptions: {
      scss: {
        // We only need this for Bootstrap so we're at their mercy
        // in terms of how they use SASS
        // 5.3.4 will make this no longer needed, they say
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    outDir,
  },
  ssgOptions: {
    dirStyle: 'nested',
  },
};
