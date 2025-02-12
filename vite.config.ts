import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
      dirs: ['src/components', 'src/layouts'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@bvn': fileURLToPath(
        new URL('./node_modules/bootstrap-vue-next', import.meta.url),
      ),
    },
  },
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
});
