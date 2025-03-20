import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

// Temperature tutorial state machine
const TEMP_TUTORIAL_STATE_ORDER = [
  'spectrumImage',
  'spectrumGraph',
  'slider',
  'nextSection',
] as const;

type TempTutorialState = (typeof TEMP_TUTORIAL_STATE_ORDER)[number];

interface TempTutorialStateMachine {
  state: Readonly<Ref<TempTutorialState>>;
  goToNext: () => void;
  goToPrev: () => void;
}

const tempTutorialKey = Symbol(
  'tempTutorial',
) as InjectionKey<TempTutorialStateMachine>;

const createTempTutorialStateMachine = (): TempTutorialStateMachine => {
  const state = ref<TempTutorialState>('spectrumImage');

  const goToNext = () => {
    const index = TEMP_TUTORIAL_STATE_ORDER.indexOf(state.value);
    if (index >= TEMP_TUTORIAL_STATE_ORDER.length) {
      // At the end, do nothing
      return;
    }
    const nextState = TEMP_TUTORIAL_STATE_ORDER[index + 1];
    state.value = nextState;
  };

  const goToPrev = () => {
    const index = TEMP_TUTORIAL_STATE_ORDER.indexOf(state.value);
    if (index === 0) {
      // At the beginning, do nothing
      return;
    }
    const prevState = TEMP_TUTORIAL_STATE_ORDER[index - 1];
    state.value = prevState;
  };

  return {
    state,
    goToNext,
    goToPrev,
  };
};

export const useTempTutorialStateMachine = (): TempTutorialStateMachine => {
  const providedStateMachine = inject(tempTutorialKey, null);
  if (providedStateMachine) {
    return providedStateMachine;
  }
  const newStateMachine = createTempTutorialStateMachine();
  provide(tempTutorialKey, newStateMachine);
  return newStateMachine;
};
