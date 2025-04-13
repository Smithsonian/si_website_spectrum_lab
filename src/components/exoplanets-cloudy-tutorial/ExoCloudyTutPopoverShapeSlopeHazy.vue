<template>
  <TutorialPopup
    v-if="tutorialState === 'hazeShapeSlope'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
    :no-scroll="!scrollToPopup"
  >
    <p>
      Different atmospheric conditions can also change the overall
      <strong>shape</strong> and <strong>slope</strong> of the spectrum plot.
    </p>

    <p>
      <strong>Hazes</strong> — small suspended particles created by UV starlight
      — scatter shorter wavelengths away from the line of sight and allow longer
      wavelengths through.
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
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, scrollToPopup, goToNext, goToPrev } =
  useExoplanetsCloudyTutorialStateMachine();
</script>
