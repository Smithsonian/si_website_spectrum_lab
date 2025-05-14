import { ViteSSG } from 'vite-ssg';
import { createBootstrap } from 'bootstrap-vue-next';
import './assets/speclab_theme.scss';
import 'video.js/dist/video-js.css';
import VueGtag from 'vue-gtag';
import type { RouteRecordRaw } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faPencil,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import PlaygroundView from './pages/PlaygroundView.vue';
import TemperaturePredictions from './pages/Temperature/TemperaturePredictions.vue';
import TemperatureTutorial from './pages/Temperature/TemperatureTutorial.vue';
import { BASE_URL } from './constants';
import FishTankBackgroundTrees from './pages/FishTank/FishTankBackgroundTrees.vue';
import FishTankBackgroundComparison from './pages/FishTank/FishTankBackgroundComparison.vue';
import FishTankBackgroundReveal from './pages/FishTank/FishTankBackgroundReveal.vue';
import FishTankLightYourTank from './pages/FishTank/FishTankLightYourTank.vue';
import FishTankMoodLighting from './pages/FishTank/FishTankMoodLighting.vue';
import MuseumIntro from './pages/Museum/MuseumIntro.vue';
import MuseumChokha from './pages/Museum/MuseumChokha.vue';
import MuseumMysteryColors from './pages/Museum/MuseumMysteryColors.vue';
import MuseumHokusai from './pages/Museum/MuseumHokusai.vue';
import MuseumHokusaiBlues from './pages/Museum/MuseumHokusaiBlues.vue';
import MuseumHokusaiIdentifyBlues from './pages/Museum/MuseumHokusaiIdentifyBlues.vue';
import MuseumHokusaiOtherBlues from './pages/Museum/MuseumHokusaiOtherBlues.vue';
import MuseumHokusaiBlueFilter from './pages/Museum/MuseumHokusaiBlueFilter.vue';
import MuseumHokusaiInfraredFilter from './pages/Museum/MuseumHokusaiInfraredFilter.vue';
import TemperatureStarsSpectra from './pages/Temperature/TemperatureStarsSpectra.vue';
import TemperatureStarsMeasuring from './pages/Temperature/TemperatureStarsMeasuring.vue';
import TemperatureIncandescentBulb from './pages/Temperature/TemperatureIncandescentBulb.vue';
import TemperatureEarth from './pages/Temperature/TemperatureEarth.vue';
import SpectraTutorial from './pages/Spectra/SpectraTutorial.vue';
import LandingPage from './pages/LandingPage.vue';
import ColorPalette from './pages/ColorPalette.vue';
import SpectraStartDrawing from './pages/Spectra/SpectraStartDrawing.vue';
import FinalProjects from './pages/FinalProjects.vue';
import ExoplanetsClearTutorial from './pages/Exoplanets/ExoplanetsClearTutorial.vue';
import ExoplanetsCloudyTutorial from './pages/Exoplanets/ExoplanetsCloudyTutorial.vue';
import ExoplanetsWASP17b from './pages/Exoplanets/ExoplanetsWASP17b.vue';
import NotFound from './pages/NotFound.vue';
import ExoplanetsComparing1 from './pages/Exoplanets/ExoplanetsComparing1.vue';
import ExoplanetsComparing2 from './pages/Exoplanets/ExoplanetsComparing2.vue';
import ExoplanetsProposal from './pages/Exoplanets/ExoplanetsProposal.vue';
import ColorPredictions from './pages/Color/ColorPredictions.vue';

library.add(
  faArrowUp,
  faArrowDown,
  faPencil,
  faChevronRight,
  faChevronLeft,
  faXmark,
);

const routes: RouteRecordRaw[] = [
  { path: '/', component: LandingPage },
  {
    path: '/color/',
    redirect: '/color/predictions',
    children: [{ path: 'predictions', component: ColorPredictions }],
  },
  {
    path: '/spectra/',
    redirect: '/spectra/tutorial',
    children: [
      { path: 'tutorial', component: SpectraTutorial },
      { path: 'start-drawing', component: SpectraStartDrawing },
    ],
  },
  {
    path: '/temperature/',
    redirect: '/temperature/tutorial',
    children: [
      { path: 'tutorial', component: TemperatureTutorial },
      { path: 'predictions', component: TemperaturePredictions },
      {
        path: 'stars/',
        redirect: '/temperature/stars/spectra',
        children: [
          { path: 'spectra', component: TemperatureStarsSpectra },
          { path: 'measuring', component: TemperatureStarsMeasuring },
        ],
      },
      { path: 'incandescentbulb', component: TemperatureIncandescentBulb },
      { path: 'earth', component: TemperatureEarth },
    ],
  },
  {
    path: '/final-projects/',
    redirect: '/final-projects/home',
    children: [
      { path: 'home', component: FinalProjects },
      {
        path: 'fishtank/',
        redirect: '/final-projects/fishtank/background-1',
        children: [
          { path: 'background-1', component: FishTankBackgroundTrees },
          {
            path: 'background-2/',
            redirect: '/final-projects/fishtank/background-2/page-1',
            children: [
              { path: 'page-1', component: FishTankBackgroundComparison },
              { path: 'page-2', component: FishTankBackgroundReveal },
            ],
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
        path: 'exoplanets/',
        redirect: '/final-projects/exoplanets/clear-skies',
        children: [
          { path: 'clear-skies', component: ExoplanetsClearTutorial },
          { path: 'cloudy-skies', component: ExoplanetsCloudyTutorial },
          { path: 'wasp-17b', component: ExoplanetsWASP17b },
          {
            path: 'comparing',
            redirect: '/final-projects/exoplanets/comparing/part-1',
            children: [
              { path: 'part-1', component: ExoplanetsComparing1 },
              { path: 'part-2', component: ExoplanetsComparing2 },
            ],
          },
          { path: 'proposal', component: ExoplanetsProposal },
        ],
      },
      {
        path: 'museum/',
        redirect: '/final-projects/museum/intro',
        children: [
          { path: 'intro', component: MuseumIntro },
          {
            path: 'paint-colors/',
            redirect: '/final-projects/museum/paint-colors/chokha',
            children: [
              { path: 'chokha', component: MuseumChokha },
              { path: 'mystery', component: MuseumMysteryColors },
            ],
          },
          {
            path: 'two-blues/',
            redirect: '/final-projects/museum/two-blues/hokusai',
            children: [
              { path: 'hokusai', component: MuseumHokusai },
              { path: 'pigments', component: MuseumHokusaiBlues },
            ],
          },
          {
            path: 'identify-blues',
            component: MuseumHokusaiIdentifyBlues,
          },
          {
            path: 'other-blues',
            component: MuseumHokusaiOtherBlues,
          },
          {
            path: 'blue-filter',
            component: MuseumHokusaiBlueFilter,
          },
          {
            path: 'infrared-filter',
            component: MuseumHokusaiInfraredFilter,
          },
        ],
      },
    ],
  },
  { path: '/playground', component: PlaygroundView },
  { path: '/color-palette', component: ColorPalette },
  {
    path: '/:fileName([^.]+).html',
    redirect: (to) => {
      return { path: `/${to.params.fileName}` };
    },
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
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
