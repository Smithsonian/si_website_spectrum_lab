<template>
  <TutorialFloatingContainer
    v-if="tutorialState === 'slider'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="10"
  >
    <p>
      This <strong>slider</strong> lets you change the range of wavelengths that
      is plotted on the x-axis.
    </p>
    <p>
      Visible light has wavelengths that range from 0.4–0.7 microns. Ultraviolet
      (UV) radiation has wavelengths shorter than visible, and infrared (IR)
      radiation has wavelengths longer than visible.
    </p>
    <p>
      Our tool can display spectra with wavelengths from
      <strong>0.2–37 microns</strong>. The full electromagnetic spectrum (shown
      below) includes types of light—gamma ray, x-ray, microwave, and radio—that
      are not shown in our tool.
    </p>
    <div class="mb-3">
      <img
        src="/src/assets/SVG/em_spectrum_diagram.svg"
        alt="Electromagnetic spectrum diagram"
      />
    </div>
    <LeftRightGroup>
      <template #left>
        <NextPrevButton direction="prev" light @click="goToPrev" />
      </template>
      <template #right>
        <NextPrevButton direction="close" light @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialFloatingContainer>
</template>

<script setup lang="ts">
import { useTempTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, goToNext, goToPrev } = useTempTutorialStateMachine();
</script>
