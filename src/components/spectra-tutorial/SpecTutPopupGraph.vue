<template>
  <TutorialFloatingContainer
    v-if="tutorialState === 'graph'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
  >
    <p>
      This is where we will plot the <strong>Spectrum Graph</strong>. Sometimes
      you will draw the spectrum graph yourself, and sometimes you will look at
      graphs of actual spectral data or models. Click in the box to start
      drawing.
    </p>
    <LeftRightGroup>
      <template #left>
        <NextPrevButton direction="prev" @click="goToPrev" />
      </template>
      <template #right>
        <NextPrevButton direction="next" @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialFloatingContainer>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, goToNext, goToPrev } = useSpectraTutorialStateMachine();
</script>
