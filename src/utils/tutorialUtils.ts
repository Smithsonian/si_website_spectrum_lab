import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

interface TutorialStateMachine<S> {
  tutorialState: Readonly<Ref<S>>;
  scrollToPopup: Readonly<Ref<boolean>>;
  goToNext: () => void;
  goToPrev: () => void;
  replay: () => void;
}

function createMachine<S>(stateOrder: readonly S[]): TutorialStateMachine<S> {
  const initialState = stateOrder[0];
  if (!initialState) {
    throw new Error('Need at least one state');
  }
  const state = ref<S>(initialState) as Ref<S>;
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

  return {
    tutorialState: state,
    scrollToPopup,
    goToNext,
    goToPrev,
    replay,
  };
}

function useTutorialStateMachine<S>(
  key: InjectionKey<TutorialStateMachine<S>>,
  stateOrder: readonly S[],
): TutorialStateMachine<S> {
  const providedMachine = inject(key, null);
  if (providedMachine) {
    return providedMachine;
  }
  const newMachine = createMachine(stateOrder);
  provide(key, newMachine);
  return newMachine;
}

// Temperature tutorial state machine
const TEMP_TUTORIAL_STATE_ORDER = [
  'hide',
  'spectrumImage',
  'spectrumGraph',
  'slider',
  'nextSection',
] as const;

type TempTutorialState = (typeof TEMP_TUTORIAL_STATE_ORDER)[number];

const tempTutorialKey = Symbol('tempTutorial') as InjectionKey<
  TutorialStateMachine<TempTutorialState>
>;

export const useTempTutorialStateMachine =
  (): TutorialStateMachine<TempTutorialState> => {
    return useTutorialStateMachine(tempTutorialKey, TEMP_TUTORIAL_STATE_ORDER);
  };

// Spectra tutorial state machine
const SPECTRA_TUTORIAL_STATE_ORDER = [
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
  TutorialStateMachine<SpectraTutorialState>
>;

export const useSpectraTutorialStateMachine =
  (): TutorialStateMachine<SpectraTutorialState> => {
    return useTutorialStateMachine(
      spectraTutorialKey,
      SPECTRA_TUTORIAL_STATE_ORDER,
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
) as InjectionKey<TutorialStateMachine<ExoplanetsClearTutorialState>>;

export const useExoplanetsClearTutorialStateMachine =
  (): TutorialStateMachine<ExoplanetsClearTutorialState> => {
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
) as InjectionKey<TutorialStateMachine<ExoplanetsCloudyTutorialState>>;

export const useExoplanetsCloudyTutorialStateMachine =
  (): TutorialStateMachine<ExoplanetsCloudyTutorialState> => {
    return useTutorialStateMachine(
      exoplanetsCloudyTutorialKey,
      EXOPLANETS_CLOUDY_TUTORIAL_STATE_ORDER,
    );
  };
