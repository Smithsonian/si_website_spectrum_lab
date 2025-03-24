<template>
  <TutorialPopup
    v-if="tutorialState === 'spectrumImage'"
    width="500px"
    bottom="20px"
    left="100px"
  >
    <p>
      This bar represents the <strong>spectrum image</strong>—what you see
      through a spectroscope when a light source is split by a diffraction
      grating into its component wavelengths (or colors, or energies).
    </p>
    <LeftRightGroup>
      <template #right>
        <NextPrevButton direction="next" light @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>

<script setup lang="ts">
import { useTempTutorialStateMachine } from '@/utils/tutorialUtils';

const { tutorialState, goToNext } = useTempTutorialStateMachine();
</script>
