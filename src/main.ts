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
import TemperatureChallenge1 from './pages/Temperature/TemperatureChallenge1.vue';
import TemperatureIntro from './pages/Temperature/TemperatureIntro.vue';
import TemperatureTutorial from './pages/Temperature/TemperatureTutorial.vue';
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
    path: '/temperature',
    redirect: '/temperature/intro',
    children: [
      { path: 'intro', component: TemperatureIntro },
      { path: 'tutorial', component: TemperatureTutorial },
      { path: 'challenge1', component: TemperatureChallenge1 },
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
