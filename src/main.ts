import { ViteSSG } from 'vite-ssg';
import { createBootstrap } from 'bootstrap-vue-next';
import './assets/speclab_theme.scss';
import VueGtag from 'vue-gtag';
import type { RouteRecordRaw } from 'vue-router';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import PlaygroundView from './pages/PlaygroundView.vue';
import { useMetadataStore } from './metadataStore';
import Module3Challenge1 from './pages/Module3/Module3Challenge1.vue';
import Module3Intro from './pages/Module3/Module3Intro.vue';
import Module3Tutorial from './pages/Module3/Module3Tutorial.vue';
import { BASE_URL } from './constants';
import FishTankIntro from './pages/FishTank/FishTankIntro.vue';
import FishTankBackgroundTrees from './pages/FishTank/FishTankBackgroundTrees.vue';
import FishTankBackgroundComparison from './pages/FishTank/FishTankBackgroundComparison.vue';

library.add(faArrowUp);

const routes: RouteRecordRaw[] = [
  {
    path: '/module3',
    redirect: '/module3/intro',
    children: [
      { path: 'intro', component: Module3Intro },
      { path: 'tutorial', component: Module3Tutorial },
      { path: 'challenge1', component: Module3Challenge1 },
    ],
  },
  {
    path: '/fishtank',
    redirect: '/fishtank/intro',
    children: [
      { path: 'intro', component: FishTankIntro },
      { path: 'background-trees', component: FishTankBackgroundTrees },
      {
        path: 'background-comparison',
        component: FishTankBackgroundComparison,
      },
    ],
  },
  { path: '/playground', component: PlaygroundView },
  {
    path: '/:fileName([^.]+).html',
    redirect: (to) => {
      return { path: `/${to.params.fileName}` };
    },
  },
  { path: '/', redirect: '/playground' },
];

const pinia = createPinia();

export const createApp = ViteSSG(
  App,
  { routes, base: BASE_URL },
  ({ app, router, initialState }) => {
    app.component('FontAwesomeIcon', FontAwesomeIcon);
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
