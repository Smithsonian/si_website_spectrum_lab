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
import { BASE_URL } from './constants';
import MuseumIntro from './pages/Museum/MuseumIntro.vue';
import MuseumChokha1 from './pages/Museum/MuseumChokha1.vue';
import MuseumChokha2 from './pages/Museum/MuseumMysteryColors.vue';
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
import LightPredictions from './pages/Light/LightPredictions.vue';
import LightPhotons from './pages/Light/LightPhotons.vue';
import AttributionsPage from './pages/AttributionsPage.vue';
import LightMixing from './pages/Light/LightMixing.vue';
import IconTest from './pages/IconTest.vue';
import LightBehaviors from './pages/Light/LightBehaviors.vue';
import LightIntroduction from './pages/Light/LightIntroduction.vue';
import SpectraDrawASpectrum from './pages/Spectra/SpectraDrawASpectrum.vue';
import SpectraWhiteLine from './pages/Spectra/SpectraWhiteLine.vue';
import SpectraLightSource1 from './pages/Spectra/SpectraLightSource1.vue';
import SpectraLightSource2 from './pages/Spectra/SpectraLightSource2.vue';
import CompositionEmissionLamps from './pages/Composition/CompositionEmissionLamps.vue';
import CompositionEmissionGas from './pages/Composition/CompositionEmissionGas.vue';
import CompositionAtomsAndSpectra from './pages/Composition/CompositionAtomsAndSpectra.vue';
import CompositionSun from './pages/Composition/CompositionSun.vue';
import CompositionEarthDiagram from './pages/Composition/CompositionEarthDiagram.vue';
import CompositionEarthSpectra from './pages/Composition/CompositionEarthSpectra.vue';
import CompositionSolarSystem from './pages/Composition/CompositionSolarSystem.vue';
import CompositionBonusSolarSystem from './pages/Composition/CompositionBonusSolarSystem.vue';
import ColorTutorial from './pages/Color/ColorTutorial.vue';
import ColorSeeing from './pages/Color/ColorSeeing.vue';
import ColorPredictions1 from './pages/Color/ColorPredictions1.vue';
import ColorPredictions2 from './pages/Color/ColorPredictions2.vue';
import SpectraWavelengthsMicrons from './pages/Spectra/SpectraWavelengthsMicrons.vue';
import SpectraWavelengthsNanometers from './pages/Spectra/SpectraWavelengthsNanometers.vue';
import SpectraWavelengthsElectronVolts from './pages/Spectra/SpectraWavelengthsElectronVolts.vue';
import SpectraWavelengthsBrightness from './pages/Spectra/SpectraWavelengthsBrightness.vue';
import ExoplanetsIntro from './pages/Exoplanets/ExoplanetsIntro.vue';
import FishTankIntro from './pages/FishTank/FishTankIntro.vue';
import FishTankReflectionSpectra from './pages/FishTank/FishTankReflectionSpectra.vue';
import FishTankYourFishTank1 from './pages/FishTank/FishTankYourFishTank1.vue';
import FishTankYourFishTank2 from './pages/FishTank/FishTankYourFishTank2.vue';
import FishTankLightYourTank1 from './pages/FishTank/FishTankLightYourTank1.vue';
import FishTankLightYourTank2 from './pages/FishTank/FishTankLightYourTank2.vue';
import FishTankInhabitantsUnderLights from './pages/FishTank/FishTankInhabitantsUnderLights.vue';
import FishTankPutItTogether from './pages/FishTank/FishTankPutItTogether.vue';

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
    path: '/light/',
    redirect: '/light/introduction',
    children: [
      { path: 'introduction', component: LightIntroduction },
      { path: 'predictions', component: LightPredictions },
      { path: 'photons', component: LightPhotons },
      { path: 'mixing', component: LightMixing },
      { path: 'behaviors', component: LightBehaviors },
    ],
  },
  {
    path: '/spectra/',
    redirect: '/spectra/tutorial',
    children: [
      { path: 'tutorial', component: SpectraTutorial },
      { path: 'start-drawing', component: SpectraStartDrawing },
      { path: 'draw-a-spectrum', component: SpectraDrawASpectrum },
      { path: 'white-line', component: SpectraWhiteLine },
      {
        path: 'light-sources',
        redirect: '/spectra/light-sources/source-1',
        children: [
          { path: 'source-1', component: SpectraLightSource1 },
          { path: 'source-2', component: SpectraLightSource2 },
        ],
      },
      {
        path: 'wavelengths-and-energy',
        redirect: '/spectra/wavelengths-and-energy/part-1',
        children: [
          { path: 'part-1', component: SpectraWavelengthsMicrons },
          { path: 'part-2', component: SpectraWavelengthsNanometers },
          { path: 'part-3', component: SpectraWavelengthsElectronVolts },
          { path: 'part-4', component: SpectraWavelengthsBrightness },
        ],
      },
    ],
  },
  {
    path: '/color',
    redirect: '/color/tutorial',
    children: [
      { path: 'tutorial', component: ColorTutorial },

      { path: 'seeing-color', component: ColorSeeing },
      {
        path: 'predictions',
        redirect: '/color/predictions/part-1',
        children: [
          { path: 'part-1', component: ColorPredictions1 },
          { path: 'part-2', component: ColorPredictions2 },
        ],
      },
    ],
  },
  {
    path: '/temperature/',
    redirect: '/temperature/predictions',
    children: [
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
    path: '/composition',
    redirect: '/composition/atomic-emission',
    children: [
      {
        path: 'atomic-emission',
        redirect: '/composition/atomic-emission/lamps',
        children: [
          { path: 'lamps', component: CompositionEmissionLamps },
          { path: 'gas', component: CompositionEmissionGas },
        ],
      },
      { path: 'atoms-and-spectra', component: CompositionAtomsAndSpectra },
      { path: 'sun', component: CompositionSun },
      {
        path: 'earth',
        redirect: '/composition/earth/diagram',
        children: [
          { path: 'diagram', component: CompositionEarthDiagram },
          { path: 'spectra', component: CompositionEarthSpectra },
        ],
      },
      { path: 'solar-system', component: CompositionSolarSystem },
      { path: 'bonus-solar-system', component: CompositionBonusSolarSystem },
    ],
  },
  {
    path: '/final-projects/',
    redirect: '/final-projects/home',
    children: [
      { path: 'home', component: FinalProjects },
      {
        path: 'fishtank/',
        redirect: '/final-projects/fishtank/explore-lighting-design',
        children: [
          {
            path: 'explore-lighting-design',
            component: FishTankIntro,
          },
          {
            path: 'reflection-spectra-colors',
            component: FishTankReflectionSpectra,
          },
          {
            path: 'your-fishtank',
            redirect: '/final-projects/fishtank/your-fishtank/part-1',
            children: [
              { path: 'part-1', component: FishTankYourFishTank1 },
              { path: 'part-2', component: FishTankYourFishTank2 },
            ],
          },
          {
            path: 'light-your-tank',
            redirect: '/final-projects/fishtank/light-your-tank/part-1',
            children: [
              { path: 'part-1', component: FishTankLightYourTank1 },
              { path: 'part-2', component: FishTankLightYourTank2 },
            ],
          },
          {
            path: 'inhabitants-under-lights',
            component: FishTankInhabitantsUnderLights,
          },
          {
            path: 'put-it-together',
            component: FishTankPutItTogether,
          },
        ],
      },
      {
        path: 'exoplanets/',
        redirect: '/final-projects/exoplanets/intro',
        children: [
          { path: 'intro', component: ExoplanetsIntro },
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
              { path: 'chokha', component: MuseumChokha1 },
              { path: 'colors-spectra', component: MuseumChokha2 },
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
  { path: '/attributions', component: AttributionsPage },
  { path: '/icon-test', component: IconTest },
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
