<template>
  <TutorialPopup
    v-if="tutorialState === 'spectrumImage'"
    :width="500"
    :anchor-elem="anchorElem"
    :no-scroll="!scrollToPopup"
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

defineProps<{ anchorElem: HTMLElement | null }>();

const { tutorialState, scrollToPopup, goToNext } =
  useTempTutorialStateMachine();
</script>
