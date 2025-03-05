import { ViteSSG } from 'vite-ssg';
import { createBootstrap } from 'bootstrap-vue-next';
import './assets/speclab_theme.scss';
import VueGtag from 'vue-gtag';
import type { RouteRecordRaw } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import PlaygroundView from './pages/PlaygroundView.vue';
import Module3Challenge1 from './pages/Module3/Module3Challenge1.vue';
import Module3Intro from './pages/Module3/Module3Intro.vue';
import Module3Tutorial from './pages/Module3/Module3Tutorial.vue';
import { BASE_URL } from './constants';
import FishTankBackgroundTrees from './pages/FishTank/FishTankBackgroundTrees.vue';
import FishTankBackgroundComparison from './pages/FishTank/FishTankBackgroundComparison.vue';
import FishTankBackgroundReveal from './pages/FishTank/FishTankBackgroundReveal.vue';
import FishTankLightYourTank from './pages/FishTank/FishTankLightYourTank.vue';
import FishTankMoodLighting from './pages/FishTank/FishTankMoodLighting.vue';
import MuseumIntro from './pages/Museum/MuseumIntro.vue';
import MuseumPaintColors from './pages/Museum/MuseumPaintColors.vue';

library.add(faArrowUp);
library.add(faPencil);

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
    redirect: '/fishtank/background-trees',
    children: [
      { path: 'background-trees', component: FishTankBackgroundTrees },
      {
        path: 'background-comparison',
        component: FishTankBackgroundComparison,
      },
      {
        path: 'background-reveal',
        component: FishTankBackgroundReveal,
      },
      {
        path: 'light-your-tank',
        component: FishTankLightYourTank,
      },
      {
        path: 'mood-lighting',
        component: FishTankMoodLighting,
      },
    ],
  },
  {
    path: '/museum',
    redirect: '/museum/intro',
    children: [
      { path: 'intro', component: MuseumIntro },
      {
        path: 'paint-colors',
        component: MuseumPaintColors,
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

export const createApp = ViteSSG(
  App,
  { routes, base: BASE_URL },
  ({ app, router }) => {
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
  },
);
