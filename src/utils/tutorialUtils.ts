import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

interface TutorialStateMachine<S> {
  tutorialState: Readonly<Ref<S>>;
  goToNext: () => void;
  goToPrev: () => void;
}

function createMachine<S>(stateOrder: readonly S[]): TutorialStateMachine<S> {
  const initialState = stateOrder[0];
  if (!initialState) {
    throw new Error('Need at least one state');
  }
  const state = ref<S>(initialState) as Ref<S>;

  const goToNext = () => {
    const index = stateOrder.indexOf(state.value);
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

  return {
    tutorialState: state,
    goToNext,
    goToPrev,
  };
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
    const providedStateMachine = inject(tempTutorialKey, null);
    if (providedStateMachine) {
      return providedStateMachine;
    }
    const newStateMachine = createMachine(TEMP_TUTORIAL_STATE_ORDER);
    provide(tempTutorialKey, newStateMachine);
    return newStateMachine;
  };
