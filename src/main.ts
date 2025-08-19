import { ViteSSG } from 'vite-ssg';
import { createBootstrap } from 'bootstrap-vue-next';
import './assets/speclab_theme.scss';
import 'video.js/dist/video-js.css';
import type { RouteRecordRaw } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faPencil,
  faXmark,
  faCircle,
  faImage,
  faBolt,
  faFile,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import PlaygroundView from './pages/PlaygroundView.vue';
import TemperaturePredictions from './pages/Temperature/TemperaturePredictions.vue';
import { BASE_URL } from './constants';
import MuseumIntro from './pages/Museum/MuseumIntro.vue';
import MuseumHokusai from './pages/Museum/MuseumHokusai.vue';
import TemperatureThermalEmission from './pages/Temperature/TemperatureThermalEmission.vue';
import TemperatureStarsSpectra from './pages/Temperature/TemperatureStarsSpectra.vue';
import TemperatureStarsMeasuring from './pages/Temperature/TemperatureStarsMeasuring.vue';
import TemperatureIncandescentBulb from './pages/Temperature/TemperatureIncandescentBulb.vue';
import TemperatureEarth from './pages/Temperature/TemperatureEarth.vue';
import SpectraTutorial from './pages/Spectra/SpectraTutorial.vue';
import LandingPage from './pages/LandingPage.vue';
import ColorPalette from './pages/ColorPalette.vue';
import SpectraDrawExplore from './pages/Spectra/SpectraStartDrawing.vue';
import FinalProjects from './pages/FinalProjects.vue';
import ExoplanetsClearTutorial from './pages/Exoplanets/ExoplanetsClearTutorial.vue';
import ExoplanetsCloudyTutorial from './pages/Exoplanets/ExoplanetsCloudyTutorial.vue';
import ExoplanetsWASP17b from './pages/Exoplanets/ExoplanetsWASP17b.vue';
import NotFound from './pages/NotFound.vue';
import ExoplanetsComparing1 from './pages/Exoplanets/ExoplanetsComparing1.vue';
import ExoplanetsComparing2 from './pages/Exoplanets/ExoplanetsComparing2.vue';
import ExoplanetsProposal from './pages/Exoplanets/ExoplanetsProposal.vue';
import ColorFilterPrediction from './pages/Light/LightFilterPrediction.vue';
import ColorFilterInvestigateRed from './pages/Light/LightFilterInvestigateRed.vue';
import ColorFilterInvestigateGreenBlue from './pages/Light/LightFilterInvestigateGreenBlue.vue';
import LightPhotons from './pages/Light/LightPhotons.vue';
import AttributionsPage from './pages/AttributionsPage.vue';
import LightMixing from './pages/Light/LightMixing.vue';
import IconTest from './pages/IconTest.vue';
import LightBehaviors from './pages/Light/LightBehaviors.vue';
import LightFilterRecap from './pages/Light/LightFilterRecap.vue';
import LightIntroduction from './pages/Light/LightIntroduction.vue';
import SpectraDrawASpectrum from './pages/Spectra/SpectraDrawASpectrum.vue';
import SpectraWhiteLine from './pages/Spectra/SpectraWhiteLine.vue';
import UnderstandSpectroscope from './pages/Spectra/SpectraUnderstandSpectroscope.vue';
import PrepareLights from './pages/Spectra/SpectraPrepareForLights.vue';
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
import ColorSeeing from './pages/Color/LightBehaviorsRecap.vue';
import ColorPredictions from './pages/Color/ColorPredictions.vue';
import LightBehaviorsPredictions from './pages/Color/LightBehaviorForPredictions.vue';
import SpectraWavelengthsEnergy from './pages/Spectra/SpectraWavelengthsEnergy.vue';
import ExoplanetsIntro from './pages/Exoplanets/ExoplanetsIntro.vue';
import FishTankIntro from './pages/FishTank/FishTankIntro.vue';
import FishTankReflectionSpectra from './pages/FishTank/FishTankReflectionSpectra.vue';
import FishTankPlantSpectra from './pages/FishTank/FishtankPlants.vue';
import FishTankYourFishTank1 from './pages/FishTank/FishTankYourFishTank1.vue';
import FishTankYourFishTank2 from './pages/FishTank/FishTankYourFishTank2.vue';
import FishTankLightYourTank1 from './pages/FishTank/FishTankLightYourTank1.vue';
import FishTankLightYourTank2 from './pages/FishTank/FishTankLightYourTank2.vue';
import FishTankInhabitantsUnderLights from './pages/FishTank/FishTankInhabitantsUnderLights.vue';
import FishTankPutItTogether from './pages/FishTank/FishTankPutItTogether.vue';
import SpectraBuildUseSpectroscope from './pages/Spectra/SpectraBuildUseSpectroscope.vue';
import MuseumIRIntro from './pages/Museum/MuseumIRIntro.vue';
import MuseumDesignMuseumDisplay from './pages/Museum/MuseumDesignMuseumDisplay.vue';
import MuseumChokhaObserve from './pages/Museum/MuseumChokhaObserve.vue';
import MuseumChokhaIDColors from './pages/Museum/MuseumChokhaIDColors.vue';
import MuseumChokhaPigmentsSpectra from './pages/Museum/MuseumChokhaPigmentsSpectra.vue';
import MuseumChokhaPigmentsUVIntro from './pages/Museum/MuseumChokhaPigmentsUVIntro.vue';
import MuseumChokhaPigmentsUVL from './pages/Museum/MuseumChokhaPigmentsUVL.vue';
import MuseumChokhaPigmentsDataTable from './pages/Museum/MuseumChokhaPigmentsDataTable.vue';
import MuseumHokusaiPigmentsSpectra from './pages/Museum/MuseumHokusaiPigmentsSpectra.vue';
import MuseumHokusaiPigmentsDataTable from './pages/Museum/MuseumHokusaiPigmentsDataTable.vue';
import MuseumHokusaiIRImaging from './pages/Museum/MuseumHokusaiIRImaging.vue';
import MuseumHokusaiBlues from './pages/Museum/MuseumHokusaiBluesDifferences.vue';
import MuseumArtworkCreditsChokha from './pages/Museum/MuseumArtworkCreditsChokha.vue';
import MuseumArtworkCreditsHokusai from './pages/Museum/MuseumArtworkCreditsHokusai.vue';

library.add(
  faArrowUp,
  faArrowDown,
  faPencil,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faXmark,
  faCircle,
  faImage,
  faBolt,
  faFile,
);

const routes: RouteRecordRaw[] = [
  { path: '/', component: LandingPage },
  {
    path: '/light/',
    redirect: '/light/professions',
    children: [
      { path: 'professions', component: LightIntroduction },
      {
        path: 'color-filters/',
        redirect: '/light/color-filters/predictions',
        children: [
          { path: 'predictions', component: ColorFilterPrediction },
          { path: 'investigate-red', component: ColorFilterInvestigateRed },
          {
            path: 'investigate-green-blue',
            component: ColorFilterInvestigateGreenBlue,
          },
        ],
      },
      { path: 'photons', component: LightPhotons },
      { path: 'mixing', component: LightMixing },
      {
        path: 'behaviors/',
        redirect: '/light/behaviors/slideshow',
        children: [
          { path: 'slideshow', component: LightBehaviors },
          { path: 'filter-recap', component: LightFilterRecap },
        ],
      },
      { path: 'behaviors', component: LightBehaviors },
    ],
  },
  {
    path: '/spectra/',
    redirect: '/spectra/build',
    children: [
      { path: 'build', component: SpectraBuildUseSpectroscope },
      { path: 'tutorial', component: SpectraTutorial },
      {
        path: 'draw-spectra/',
        redirect: '/spectra/draw-spectra/explore',
        children: [
          { path: 'explore', component: SpectraDrawExplore },
          { path: 'copy', component: SpectraDrawASpectrum },
        ],
      },
      { path: 'white-line', component: SpectraWhiteLine },
      { path: 'understand-spectroscope', component: UnderstandSpectroscope },
      {
        path: 'light-sources/',
        redirect: '/spectra/light-sources/prepare',
        children: [
          { path: 'prepare', component: PrepareLights },
          { path: 'source-1', component: SpectraLightSource1 },
          { path: 'source-2', component: SpectraLightSource2 },
        ],
      },
      { path: 'wavelengths-and-energy', component: SpectraWavelengthsEnergy },
    ],
  },
  {
    path: '/color/',
    redirect: '/color/tutorial',
    children: [
      { path: 'tutorial', component: ColorTutorial },
      { path: 'seeing-color', component: ColorSeeing },
      { path: 'predictions', component: ColorPredictions },
      { path: 'light-behaviors', component: LightBehaviorsPredictions },
    ],
  },
  {
    path: '/temperature/',
    redirect: '/temperature/predictions',
    children: [
      { path: 'predictions', component: TemperaturePredictions },
      { path: 'thermal-emission', component: TemperatureThermalEmission },
      {
        path: 'stars/',
        redirect: '/temperature/stars/spectra',
        children: [
          { path: 'spectra', component: TemperatureStarsSpectra },
          { path: 'measuring', component: TemperatureStarsMeasuring },
        ],
      },
      { path: 'incandescent-bulb', component: TemperatureIncandescentBulb },
      { path: 'earth', component: TemperatureEarth },
    ],
  },
  {
    path: '/composition/',
    redirect: '/composition/atomic-emission',
    children: [
      {
        path: 'atomic-emission/',
        redirect: '/composition/atomic-emission/lamps',
        children: [
          { path: 'lamps', component: CompositionEmissionLamps },
          { path: 'gas', component: CompositionEmissionGas },
        ],
      },
      { path: 'atoms-and-spectra', component: CompositionAtomsAndSpectra },
      { path: 'sun', component: CompositionSun },
      {
        path: 'earth/',
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
            path: 'plant-reflection-spectra',
            component: FishTankPlantSpectra,
          },
          {
            path: 'your-fishtank/',
            redirect: '/final-projects/fishtank/your-fishtank/part-1',
            children: [
              { path: 'part-1', component: FishTankYourFishTank1 },
              { path: 'part-2', component: FishTankYourFishTank2 },
            ],
          },
          {
            path: 'light-your-tank/',
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
            path: 'comparing/',
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
            path: 'chokha-painting/',
            redirect: '/final-projects/museum/chokha-painting/observe',
            children: [
              { path: 'observe', component: MuseumChokhaObserve },
              { path: 'id-colors', component: MuseumChokhaIDColors },
            ],
          },
          {
            path: 'chokha-pigments/',
            redirect: '/final-projects/museum/chokha-pigments/spectra',
            children: [
              { path: 'spectra', component: MuseumChokhaPigmentsSpectra },
              { path: 'uvl-intro', component: MuseumChokhaPigmentsUVIntro },
              { path: 'uvl', component: MuseumChokhaPigmentsUVL },
              { path: 'data-table', component: MuseumChokhaPigmentsDataTable },
            ],
          },
          {
            path: 'hokusai-painting',
            component: MuseumHokusai,
          },
          {
            path: 'hokusai-pigments/',
            redirect: '/final-projects/museum/hokusai-pigments/spectra',
            children: [
              { path: 'spectra', component: MuseumHokusaiPigmentsSpectra },
              { path: 'data-table', component: MuseumHokusaiPigmentsDataTable },
            ],
          },
          {
            path: 'hokusai-ir-imaging/',
            redirect: '/final-projects/museum/hokusai-ir-imaging/ir-intro',
            children: [
              { path: 'ir-intro', component: MuseumIRIntro },
              { path: 'blue-spectra', component: MuseumHokusaiBlues },
              { path: 'ir-imaging', component: MuseumHokusaiIRImaging },
            ],
          },
          {
            path: 'put-it-together',
            component: MuseumDesignMuseumDisplay,
          },
          {
            path: 'artwork-credits/',
            redirect: '/final-projects/museum/artwork-credits/chokha',
            children: [
              { path: 'chokha', component: MuseumArtworkCreditsChokha },
              { path: 'hokusai', component: MuseumArtworkCreditsHokusai },
            ],
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

export const createApp = ViteSSG(App, { routes, base: BASE_URL }, ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
  app.use(createBootstrap());
});
