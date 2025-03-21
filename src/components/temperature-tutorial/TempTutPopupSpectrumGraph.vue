<template>
  <TutorialPopup
    v-if="tutorialState === 'spectrumGraph'"
    width="500px"
    bottom="25px"
    left="200px"
  >
    <p>
      This is the <strong>spectrum graph</strong>, which is a plot of the
      spectrum. It shows how much light the source emits or reflects at a given
      wavelength (or color, or energy). The spectrum is taken at one moment in
      time.
    </p>
    <LeftRightGroup>
      <template #left>
        <NextPrevButton direction="prev" light @click="goToPrev" />
      </template>
      <template #right>
        <NextPrevButton direction="next" light @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>

<script setup lang="ts">
import { useTempTutorialStateMachine } from '@/utils/tutorialUtils';

const { tutorialState, goToNext, goToPrev } = useTempTutorialStateMachine();
</script>
