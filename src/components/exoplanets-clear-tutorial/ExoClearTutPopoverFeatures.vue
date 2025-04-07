<template>
  <TutorialPopup
    v-if="tutorialState === 'features'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
  >
    <p>
      Sodium Vapor (Na), Potassium Vapor (K), and Water Vapor (H<sub>2</sub>O)
      are predicted to be prominent features of Clear Hot Jupiter atmospheres in
      the Visible and Near Infrared regions of the spectrum.
    </p>
    <p>
      The ability to detect the presence of water in distant solar systems is
      important to the ultimate search for signs of life in smaller, more
      hospitable worlds.
    </p>
    <LeftRightGroup>
      <template #left>
        <NextPrevButton direction="prev" @click="goToPrev" />
      </template>
      <template #right>
        <NextPrevButton direction="close" @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>

<script setup lang="ts">
import { useExoplanetsClearTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, goToNext, goToPrev } =
  useExoplanetsClearTutorialStateMachine();
</script>
