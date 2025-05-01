<template>
  <TutorialFloatingContainer
    v-if="tutorialState === 'image'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
  >
    <p>
      This is the <strong>Spectrum Image</strong>. This represents what you
      would see through a spectroscope when you point it at a light source.
    </p>
    <p>
      The spectrum shown here represents a source that is emitting equally
      across all wavelengths. More typically, some wavelength sections will be
      brighter and others will be darker.
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
