import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import PlaygroundView from './pages/PlaygroundView.vue';
import { createBootstrap } from 'bootstrap-vue-next';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import VueGtag from 'vue-gtag';
import Session2View from './pages/Session2View.vue';
import type { RouteRecordRaw } from 'vue-router';
import { createPinia } from 'pinia';
import { useMetadataStore } from './metadataStore';

const routes: RouteRecordRaw[] = [
  { path: '/session2vue', component: Session2View },
  { path: '/', component: PlaygroundView },
  {
    path: '/:fileName([^.]+).html',
    redirect: (to) => {
      return { path: `/${to.params.fileName}` };
    },
  },
];

const pinia = createPinia();

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, initialState }) => {
    app.use(createBootstrap());
    app.use(
      VueGtag,
      {
        config: {
          id: 'G-N4BDY9ZWS8',
        },
      },
      router,
    );
    app.use(pinia);
    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value;
    } else {
      pinia.state.value = initialState.pinia || {};
    }

    router.beforeEach(() => {
      const metadataStore = useMetadataStore(pinia);
      if (metadataStore.allMetadata.length === 0) {
        metadataStore.initialize();
      }
    });
  },
);
