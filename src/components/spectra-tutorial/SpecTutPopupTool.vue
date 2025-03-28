<template>
  <TutorialPopup
    v-if="tutorialState === 'tool'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
  >
    <p>
      This is the <strong>Spectrum Tool</strong>. You will use the Spectrum Tool
      to compare a spectrum image to its spectrum graph. You will also plot
      spectrum graphs of your own from the spectra that you observe.
    </p>
    <LeftRightGroup>
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

const { tutorialState, goToNext } = useSpectraTutorialStateMachine();
</script>
