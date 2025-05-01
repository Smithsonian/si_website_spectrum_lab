<template>
  <TutorialFloatingContainer
    v-if="tutorialState === 'cloudShapeSlope'"
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
      <strong>Clouds</strong> — opaque masses of condensed liquid or ice
      particles — block and scatter Visible and IR light equally, flattening out
      the spectrum.
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
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, scrollToPopup, goToNext, goToPrev } =
  useExoplanetsCloudyTutorialStateMachine();
</script>
