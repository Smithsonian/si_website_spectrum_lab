<template>
  <TutorialPopup
    v-if="tutorialState === 'clear'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
  >
    <p>
      This is the <strong>Clear Drawing</strong> button. You can reset your
      spectrum graph if you ever want to start over from a blank screen.
    </p>
    <LeftRightGroup>
      <template #left>
        <NextPrevButton direction="prev" @click="goToPrev" />
      </template>
      <template #right>
        <NextPrevButton direction="next" @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, goToNext, goToPrev } = useSpectraTutorialStateMachine();
</script>
