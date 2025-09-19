import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

// These types are pretty convoluted, but they achieve the following:
//
// 1. Abstracting 4 different tutorials with 3-4 popovers each to use the same
//    next/prev/replay/close logic, without getting in each other's way, enabling
//    changes to all popovers at once
// 2. Autocomplete for popover states, but only for the tutorial they're using
//
// I originally chose the states themselves for the generic type, but had problems
// down the line where I needed the stateOrder and it wasn't getting associated properly
// with the states, which were getting widened to `string`. So I switched the generic
// to the type of the state order array. It's more awkward but fixes those problems.
export interface TutorialStateMachine<O extends readonly string[]> {
  tutorialState: Readonly<Ref<O[number]>>;
  stateOrder: O;
  scrollToPopup: Readonly<Ref<boolean>>;
  goToNext: () => void;
  goToPrev: () => void;
  replay: () => void;
  close: () => void;
}

function createMachine<O extends readonly string[]>(
  stateOrder: O,
): TutorialStateMachine<O> {
  type State = O[number];
  const initialState = stateOrder[0];
  if (!initialState) {
    throw new Error('Need at least one state');
  }
  const state = ref<State>(initialState);
  const scrollToPopup = ref(false);

  const goToNext = () => {
    const index = stateOrder.indexOf(state.value);
    if (index > 0) {
      // If we're about to show the first popup, don't scroll to it, to not skip instructions.
      // Scroll to every popup after.
      // This does not reset until the whole machine resets (page nav).
      scrollToPopup.value = true;
    }
    if (index >= stateOrder.length) {
      // At the end, do nothing
      return;
    }
    const nextState = stateOrder[index + 1];
    state.value = nextState;
  };

  const goToPrev = () => {
    const index = stateOrder.indexOf(state.value);
    if (index === 0) {
      // At the beginning, do nothing
      return;
    }
    const prevState = stateOrder[index - 1];
    state.value = prevState;
  };

  const replay = () => {
    state.value = stateOrder[1];
  };

  const close = () => {
    state.value = stateOrder[stateOrder.length - 1];
  };

  return {
    tutorialState: state,
    stateOrder,
    scrollToPopup,
    goToNext,
    goToPrev,
    replay,
    close,
  };
}

function useTutorialStateMachine<O extends readonly string[]>(
  key: InjectionKey<TutorialStateMachine<O>>,
  stateOrder: O,
): TutorialStateMachine<O> {
  const providedMachine = inject(key, null);
  if (providedMachine) {
    return providedMachine;
  }
  const newMachine = createMachine(stateOrder);
  provide(key, newMachine);
  return newMachine;
}

// Tool group controls tutorial state machine
const CONTROLS_TUTORIAL_STATE_ORDER = [
  'hide',
  'spectrumImage',
  'spectrumGraph',
  'xAxis',
  'yAxis',
  'measuringTool',
  'plotType',
  'slider',
  'wavelengthUnits',
  'nextSection',
] as const;

const controlsTutorialKey = Symbol('controlsTutorial') as InjectionKey<
  TutorialStateMachine<typeof CONTROLS_TUTORIAL_STATE_ORDER>
>;

export const useControlsTutorialStateMachine = (): TutorialStateMachine<
  typeof CONTROLS_TUTORIAL_STATE_ORDER
> => {
  return useTutorialStateMachine(
    controlsTutorialKey,
    CONTROLS_TUTORIAL_STATE_ORDER,
  );
};

// Spectra tutorial state machine
export const SPECTRA_TUTORIAL_STATE_ORDER = [
  'hide',
  'tool',
  'image',
  'rainbow',
  'graph',
  'clear',
  'secondTool',
  'dropdown',
  'nextSection',
] as const;

export type SpectraTutorialState =
  (typeof SPECTRA_TUTORIAL_STATE_ORDER)[number];

const spectraTutorialKey = Symbol('spectraTutorial') as InjectionKey<
  TutorialStateMachine<typeof SPECTRA_TUTORIAL_STATE_ORDER>
>;

export const useSpectraTutorialStateMachine = (): TutorialStateMachine<
  typeof SPECTRA_TUTORIAL_STATE_ORDER
> => {
  return useTutorialStateMachine(
    spectraTutorialKey,
    SPECTRA_TUTORIAL_STATE_ORDER,
  );
};

// Spectra wavelength tutorial
const WAVELENGTH_TUTORIAL_STATE_ORDER = [
  'hide',
  'unitDropdown',
  'nextPage',
] as const;

export type WavelengthTutorialState =
  (typeof WAVELENGTH_TUTORIAL_STATE_ORDER)[number];

const wavelengthTutorialKey = Symbol('wavelengthTutorial') as InjectionKey<
  TutorialStateMachine<typeof WAVELENGTH_TUTORIAL_STATE_ORDER>
>;

export const useWavelengthTutorialStateMachine = (): TutorialStateMachine<
  typeof WAVELENGTH_TUTORIAL_STATE_ORDER
> => {
  return useTutorialStateMachine(
    wavelengthTutorialKey,
    WAVELENGTH_TUTORIAL_STATE_ORDER,
  );
};

// Exoplanets clear atmosphere tutorial state machine
const EXOPLANETS_CLEAR_TUTORIAL_STATE_ORDER = [
  'hide',
  'model',
  'features',
  'nextSection',
] as const;

export type ExoplanetsClearTutorialState =
  (typeof EXOPLANETS_CLEAR_TUTORIAL_STATE_ORDER)[number];

const exoplanetsClearTutorialKey = Symbol(
  'exoplanetsClearTutorial',
) as InjectionKey<
  TutorialStateMachine<typeof EXOPLANETS_CLEAR_TUTORIAL_STATE_ORDER>
>;

export const useExoplanetsClearTutorialStateMachine = (): TutorialStateMachine<
  typeof EXOPLANETS_CLEAR_TUTORIAL_STATE_ORDER
> => {
  return useTutorialStateMachine(
    exoplanetsClearTutorialKey,
    EXOPLANETS_CLEAR_TUTORIAL_STATE_ORDER,
  );
};

// Exoplanets cloudy/hazy atmosphere tutorial state machine
const EXOPLANETS_CLOUDY_TUTORIAL_STATE_ORDER = [
  'hide',
  'widthDepth',
  'cloudShapeSlope',
  'hazeShapeSlope',
  'dampenedAbsorption',
  'nextSection',
] as const;

export type ExoplanetsCloudyTutorialState =
  (typeof EXOPLANETS_CLOUDY_TUTORIAL_STATE_ORDER)[number];

const exoplanetsCloudyTutorialKey = Symbol(
  'exoplanetsCloudyTutorial',
) as InjectionKey<
  TutorialStateMachine<typeof EXOPLANETS_CLOUDY_TUTORIAL_STATE_ORDER>
>;

export const useExoplanetsCloudyTutorialStateMachine = (): TutorialStateMachine<
  typeof EXOPLANETS_CLOUDY_TUTORIAL_STATE_ORDER
> => {
  return useTutorialStateMachine(
    exoplanetsCloudyTutorialKey,
    EXOPLANETS_CLOUDY_TUTORIAL_STATE_ORDER,
  );
};
