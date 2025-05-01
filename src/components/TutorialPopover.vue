<template>
  <TutorialFloatingContainer
    v-if="tutorialState === showOnState"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
    :no-scroll="!scrollToPopup"
  >
    <slot></slot>
    <LeftRightGroup>
      <template #left v-if="tutorialState !== stateOrder[1]">
        <NextPrevButton direction="prev" @click="goToPrev" />
      </template>
      <template #right>
        <NextPrevButton
          :direction="
            tutorialState === stateOrder[stateOrder.length - 2]
              ? 'close'
              : 'next'
          "
          @click="goToNext"
        />
      </template>
    </LeftRightGroup>
  </TutorialFloatingContainer>
</template>

<script setup lang="ts" generic="O extends readonly string[]">
import type { TutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

type State = O[number];

const props = defineProps<{
  anchorElem: HTMLElement | ComponentPublicInstance | null;
  stateMachine: TutorialStateMachine<O>;
  showOnState: State;
}>();

const { tutorialState, stateOrder, scrollToPopup, goToNext, goToPrev } =
  props.stateMachine;
</script>
