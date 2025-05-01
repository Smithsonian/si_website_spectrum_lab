<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="spectrumImage"
  >
    <p>
      This bar represents the <strong>spectrum image</strong>—what you see
      through a spectroscope when a light source is split by a diffraction
      grating into its component wavelengths (or colors, or energies).
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useTempTutorialStateMachine } from '@/utils/tutorialUtils';

defineProps<{ anchorElem: HTMLElement | null }>();

const machine = useTempTutorialStateMachine();
</script>
